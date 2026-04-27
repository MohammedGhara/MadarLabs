/**
 * Visitor reviews — requires email server-side; API returns masked email only.
 */

import { config } from "@/lib/config";
import { shouldUseSameOriginApiForThisBuild } from "@/lib/sameOriginApi";

const REVIEWS_PATH = "/api/reviews";

export const REVIEWS_UNAVAILABLE = "__REVIEWS_UNAVAILABLE__";

export type VisitorReview = {
  id: string;
  name: string;
  role: string;
  quote: string;
  rating: number;
  createdAt: string;
  emailMasked: string;
};

export type SubmitReviewPayload = {
  name: string;
  email: string;
  role?: string;
  quote: string;
  rating: number;
};

/**
 * Use same-origin `/api/reviews` in dev, preview, and any build where
 * VITE_API_BASE_URL points at localhost (LAN/mobile testing). Otherwise
 * use the configured remote API when set.
 */
function reviewsUrl(): string {
  if (import.meta.env.DEV || shouldUseSameOriginApiForThisBuild()) {
    return REVIEWS_PATH;
  }
  const base = config.apiBaseUrl?.trim();
  if (!base) {
    return REVIEWS_PATH;
  }
  return `${base.replace(/\/$/, "")}${REVIEWS_PATH}`;
}

function isHtmlOrExpress404(body: string): boolean {
  const s = body.trimStart();
  if (s.startsWith("<") || /<!DOCTYPE/i.test(body)) return true;
  if (/cannot post\s*\/api\/reviews/i.test(body)) return true;
  return false;
}

/** Vite 502, wrong process on 3001, or static host without /api — not a validation error from our API. */
function isBackendUnreachable(status: number, body: string): boolean {
  if (status === 502 || status === 503 || status === 504) return true;
  if (isHtmlOrExpress404(body)) return true;
  const t = body.trim();
  if (/^cannot (get|post) \/api/i.test(t)) return true;
  const low = t.toLowerCase();
  if (low.includes("bad gateway") || low.includes("econnrefused") || low.includes("connection refused")) {
    return true;
  }
  return false;
}

async function fetchWithRetry(input: string, init: RequestInit, attempts = 3): Promise<Response> {
  let lastError: unknown;
  for (let i = 0; i < attempts; i++) {
    try {
      return await fetch(input, init);
    } catch (e) {
      lastError = e;
      if (i < attempts - 1) {
        await new Promise((r) => setTimeout(r, 350 * (i + 1)));
      }
    }
  }
  throw lastError;
}

export async function fetchVisitorReviews(): Promise<VisitorReview[]> {
  const url = reviewsUrl();
  try {
    const res = await fetchWithRetry(url, { method: "GET" }, 3);
    const raw = await res.text();
    if (!res.ok) return [];
    try {
      const data = JSON.parse(raw) as { reviews?: VisitorReview[] };
      return Array.isArray(data.reviews) ? data.reviews : [];
    } catch {
      return [];
    }
  } catch {
    return [];
  }
}

export async function submitVisitorReview(
  payload: SubmitReviewPayload
): Promise<{ success: boolean; message?: string }> {
  const url = reviewsUrl();
  let res: Response;
  try {
    res = await fetchWithRetry(
      url,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      },
      3
    );
  } catch {
    throw new Error(REVIEWS_UNAVAILABLE);
  }

  const raw = await res.text();
  let parsed: { success?: boolean; message?: string } = {};
  try {
    parsed = JSON.parse(raw) as typeof parsed;
  } catch {
    /* non-JSON */
  }

  if (
    res.ok &&
    (raw.trimStart().startsWith("<") || /<!DOCTYPE/i.test(raw) || isHtmlOrExpress404(raw))
  ) {
    throw new Error(REVIEWS_UNAVAILABLE);
  }

  if (!res.ok) {
    if (isBackendUnreachable(res.status, raw)) {
      throw new Error(REVIEWS_UNAVAILABLE);
    }
    if (typeof parsed.message === "string" && parsed.message.trim()) {
      throw new Error(parsed.message.trim());
    }
    throw new Error(raw.trim().slice(0, 200) || "Failed to submit review");
  }
  return { success: true, message: parsed.message };
}
