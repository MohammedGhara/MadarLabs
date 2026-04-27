import fs from "fs/promises";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const DATA_PATH = path.join(__dirname, "data", "reviews.json");
const MAX_REVIEWS = 250;

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function stripHtml(s) {
  return String(s || "")
    .replace(/</g, " ")
    .replace(/>/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

/** Public-safe: e.g. mo***@gmail.com */
export function maskEmail(email) {
  const e = String(email).trim().toLowerCase();
  const at = e.indexOf("@");
  if (at < 1) return "";
  const local = e.slice(0, at);
  const domain = e.slice(at + 1);
  if (!domain) return "";
  if (local.length <= 2) return `${local[0] || "*"}***@${domain}`;
  return `${local.slice(0, 2)}***@${domain}`;
}

export function validateReviewBody(body) {
  const name = stripHtml(body?.name).slice(0, 80);
  const emailRaw = stripHtml(body?.email).slice(0, 120).toLowerCase();
  const role = stripHtml(body?.role).slice(0, 100);
  const quote = stripHtml(body?.quote).slice(0, 600);
  const rating = Number(body?.rating);

  if (name.length < 2) {
    return { error: "Name must be at least 2 characters." };
  }
  if (!EMAIL_RE.test(emailRaw)) {
    return { error: "A valid email is required." };
  }
  if (quote.length < 15) {
    return { error: "Review must be at least 15 characters." };
  }
  if (!Number.isInteger(rating) || rating < 1 || rating > 5) {
    return { error: "Rating must be between 1 and 5." };
  }

  return {
    data: {
      name,
      email: emailRaw,
      role: role.length ? role : "",
      quote,
      rating,
    },
  };
}

export async function readReviews() {
  try {
    const raw = await fs.readFile(DATA_PATH, "utf8");
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}

export async function appendReview(entry) {
  await fs.mkdir(path.dirname(DATA_PATH), { recursive: true });
  const list = await readReviews();
  const id = `r-${Date.now()}-${Math.random().toString(36).slice(2, 10)}`;
  const row = {
    id,
    name: entry.name,
    email: entry.email,
    role: entry.role,
    quote: entry.quote,
    rating: entry.rating,
    createdAt: new Date().toISOString(),
  };
  const next = [row, ...list].slice(0, MAX_REVIEWS);
  await fs.writeFile(DATA_PATH, JSON.stringify(next, null, 2), "utf8");
  return row;
}

/** Strip full email from objects sent to the browser */
export function sanitizeReviewForClient(row) {
  const { email, ...rest } = row;
  return {
    ...rest,
    emailMasked: maskEmail(email || ""),
  };
}
