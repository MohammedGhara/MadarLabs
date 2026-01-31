/**
 * Lead/contact form API.
 * Backend should accept POST to /api/leads with JSON body.
 * Set VITE_API_BASE_URL in .env to your backend URL.
 */

import { config } from "@/lib/config";

export interface LeadPayload {
  fullName: string;
  businessType: string;
  serviceNeeded: string;
  budgetRange: string;
  whatsappNumber: string;
  instagramUsername?: string;
  message?: string;
}

export interface LeadResponse {
  success: boolean;
  message?: string;
  id?: string;
}

const LEADS_ENDPOINT = "/api/leads";

export async function submitLead(payload: LeadPayload): Promise<LeadResponse> {
  const baseUrl = config.apiBaseUrl?.trim();
  if (!baseUrl) {
    throw new Error(
      "API URL not configured. Set VITE_API_BASE_URL in your .env file."
    );
  }

  const url = `${baseUrl.replace(/\/$/, "")}${LEADS_ENDPOINT}`;

  const response = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  });

  const contentType = response.headers.get("content-type");
  let data: LeadResponse;

  if (contentType?.includes("application/json")) {
    data = await response.json();
  } else {
    const text = await response.text();
    if (!response.ok) {
      throw new Error(text || response.statusText || "Failed to submit");
    }
    data = { success: true, message: text || "Submitted successfully" };
  }

  if (!response.ok) {
    const errMsg =
      (data as { message?: string }).message ||
      response.statusText ||
      "Failed to submit";
    throw new Error(errMsg);
  }

  return data;
}
