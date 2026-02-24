/**
 * App configuration - reads from environment variables.
 * All VITE_* vars are embedded at build time.
 */

const getEnv = (key: string, fallback: string): string => {
  const value = import.meta.env[key];
  return (typeof value === "string" && value.trim() !== "") ? value.trim() : fallback;
};

export const config = {
  /** Backend API base URL for lead form (e.g. http://localhost:3001) */
  apiBaseUrl: getEnv("VITE_API_BASE_URL", ""),

  /** WhatsApp number for contact (digits only, e.g. 972526867838) */
  whatsappNumber: getEnv("VITE_WHATSAPP_NUMBER", "972526867838"),

  /** Pre-filled WhatsApp message */
  whatsappMessage: getEnv("VITE_WHATSAPP_MESSAGE", "Hi! I found you on your website and I'm interested in your services."),

  /** Instagram profile URL */
  instagramUrl: getEnv("VITE_INSTAGRAM_URL", "https://instagram.com/vertextech12"),

  /** Contact email */
  email: getEnv("VITE_EMAIL", "VertexTech11@gmail.com"),

  /** Location for contact section */
  location: getEnv("VITE_LOCATION", "Israel"),

  /** Instagram handle for display */
  instagramHandle: getEnv("VITE_INSTAGRAM_HANDLE", "@VertexTech"),

  /** Site URL for canonical / meta */
  siteUrl: getEnv("VITE_SITE_URL", typeof window !== "undefined" ? window.location.origin : "https://vertexTech.com"),
} as const;

/** Full WhatsApp link with optional pre-filled message */
export function getWhatsAppLink(message?: string): string {
  const msg = message ?? config.whatsappMessage;
  const encoded = encodeURIComponent(msg);
  return `https://wa.me/${config.whatsappNumber}${encoded ? `?text=${encoded}` : ""}`;
}

