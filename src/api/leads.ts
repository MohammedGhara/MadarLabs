/**
 * Lead/contact form API.
 * Sends to your backend at VITE_API_BASE_URL/api/leads (prod) or /api/leads via Vite proxy (dev).
 */

import { config } from "@/lib/config";
import { shouldUseSameOriginApiForThisBuild } from "@/lib/sameOriginApi";

export interface LeadPayload {
  fullName: string;
  email: string;
  subject: string;
  businessType: string;
  serviceNeeded: string;
  budgetRange: string;
  whatsappNumber: string;
  instagramUsername?: string;
  message: string;
}

export interface LeadResponse {
  success: boolean;
  message?: string;
  id?: string;
}

const LEADS_ENDPOINT = "/api/leads";

function parseApiErrorBody(raw: string): { message?: string; error?: string } {
  const trimmed = raw.trim();
  if (!trimmed.startsWith("{")) return {};
  try {
    const o = JSON.parse(trimmed) as Record<string, unknown>;
    return {
      message: typeof o.message === "string" ? o.message : undefined,
      error: typeof o.error === "string" ? o.error : undefined,
    };
  } catch {
    return {};
  }
}

export async function submitLead(payload: LeadPayload): Promise<LeadResponse> {
  const baseUrl = config.apiBaseUrl?.trim();
  const url = import.meta.env.DEV
    ? LEADS_ENDPOINT
    : shouldUseSameOriginApiForThisBuild() || !baseUrl
      ? LEADS_ENDPOINT
      : `${baseUrl.replace(/\/$/, "")}${LEADS_ENDPOINT}`;

  const response = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  });

  /** Always read text first so we never miss JSON when Content-Type is wrong or empty. */
  const rawText = await response.text();
  const parsed = parseApiErrorBody(rawText);
  let data: LeadResponse;

  if (rawText.trimStart().startsWith("{")) {
    try {
      data = JSON.parse(rawText) as LeadResponse;
    } catch {
      data = response.ok
        ? { success: true, message: "Thank you! We'll be in touch soon." }
        : { success: false, message: parsed.message };
    }
  } else {
    data = response.ok
      ? { success: true, message: rawText || "Submitted successfully" }
      : { success: false, message: rawText || undefined };
  }

  if (!response.ok) {
    const errMsg =
      parsed.message ||
      parsed.error ||
      (typeof data === "object" && data !== null && typeof data.message === "string"
        ? data.message
        : "") ||
      (typeof data === "object" && data !== null && "error" in data
        ? String((data as { error?: unknown }).error)
        : "") ||
      rawText.trim().slice(0, 400) ||
      response.statusText ||
      "Failed to submit";
    throw new Error(errMsg);
  }

  return data;
}
