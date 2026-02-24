/**
 * Lead/contact form API.
 * Sends to your backend at VITE_API_BASE_URL/api/leads.
 * Backend emails submissions to VertexTech11@gmail.com.
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
      "API not configured. Set VITE_API_BASE_URL in .env (e.g. http://localhost:3001). Run the server with: cd server && npm install && npm start"
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
