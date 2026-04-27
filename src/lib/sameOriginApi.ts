import { config } from "./config";

/**
 * When the built app has VITE_API_BASE_URL=http://localhost:3001, the browser must not
 * call that URL in production or preview: from another device on the LAN, "localhost" is
 * the wrong machine. In those cases, use same-origin /api/... (Vite proxy, nginx, etc.).
 */
export function shouldUseSameOriginApiForThisBuild(): boolean {
  if (import.meta.env.DEV) return true;
  const base = (config.apiBaseUrl || "").trim();
  if (!base) return true;
  try {
    const { hostname } = new URL(base);
    if (hostname === "localhost" || hostname === "127.0.0.1" || hostname === "[::1]") {
      return true;
    }
  } catch {
    return true;
  }
  return false;
}
