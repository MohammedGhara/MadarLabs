/**
 * API client for backend communication.
 * Configure VITE_API_BASE_URL in .env to point to your backend.
 */

import { config } from "@/lib/config";

const getBaseUrl = (): string => {
  const base = config.apiBaseUrl;
  if (!base) {
    throw new Error(
      "VITE_API_BASE_URL is not set. Add it to your .env file to enable form submission."
    );
  }
  return base.replace(/\/$/, "");
};

export class ApiError extends Error {
  constructor(
    message: string,
    public status?: number,
    public body?: unknown
  ) {
    super(message);
    this.name = "ApiError";
  }
}

export async function apiFetch<T = unknown>(
  endpoint: string,
  options: RequestInit = {}
): Promise<T> {
  const baseUrl = getBaseUrl();
  const url = `${baseUrl}${endpoint.startsWith("/") ? endpoint : `/${endpoint}`}`;

  const headers: HeadersInit = {
    "Content-Type": "application/json",
    ...options.headers,
  };

  const response = await fetch(url, {
    ...options,
    headers,
  });

  let body: unknown;
  const contentType = response.headers.get("content-type");
  if (contentType?.includes("application/json")) {
    try {
      body = await response.json();
    } catch {
      body = await response.text();
    }
  } else {
    body = await response.text();
  }

  if (!response.ok) {
    const message =
      typeof body === "object" && body !== null && "message" in body
        ? String((body as { message: unknown }).message)
        : response.statusText || `Request failed with status ${response.status}`;
    throw new ApiError(message, response.status, body);
  }

  return body as T;
}
