/**
 * Send lead notification email — Resend (HTTP) or Gmail SMTP.
 * Resend is optional when RESEND_API_KEY is set (good if Gmail SMTP is blocked).
 */

import nodemailer from "nodemailer";

/**
 * @param {object} opts
 * @param {string} opts.to
 * @param {string} opts.replyTo
 * @param {string} opts.subject
 * @param {string} opts.text
 * @param {string} opts.html
 * @param {string} opts.gmailUser
 * @param {string} opts.gmailAppPassword
 */
export async function sendLeadMail(opts) {
  const resendKey = process.env.RESEND_API_KEY?.trim();
  if (resendKey) {
    const from =
      process.env.RESEND_FROM?.trim() ||
      "MadarLabs <onboarding@resend.dev>";
    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${resendKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from,
        to: [opts.to],
        reply_to: opts.replyTo,
        subject: opts.subject,
        text: opts.text,
        html: opts.html,
      }),
    });
    const raw = await res.text();
    let body = {};
    try {
      body = raw ? JSON.parse(raw) : {};
    } catch {
      /* ignore */
    }
    if (!res.ok) {
      const detail =
        (Array.isArray(body.errors) && body.errors[0]?.message) ||
        body.message ||
        raw ||
        res.statusText;
      const err = new Error(
        typeof detail === "string" ? detail : JSON.stringify(detail)
      );
      err.code = "RESEND";
      throw err;
    }
    return;
  }

  if (!opts.gmailAppPassword) {
    const err = new Error("GMAIL_APP_PASSWORD is not set");
    err.code = "ENOCONFIG";
    throw err;
  }

  const appPass = String(opts.gmailAppPassword).replace(/\s/g, "");

  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST || "smtp.gmail.com",
    port: Number(process.env.SMTP_PORT || 465),
    secure: String(process.env.SMTP_SECURE || "true") !== "false",
    auth: {
      user: opts.gmailUser,
      pass: appPass,
    },
  });

  await transporter.sendMail({
    from: `"MadarLabs Contact" <${opts.gmailUser}>`,
    to: opts.to,
    replyTo: opts.replyTo,
    subject: opts.subject,
    text: opts.text,
    html: opts.html,
  });
}
