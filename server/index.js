import "dotenv/config";
import express from "express";
import cors from "cors";
import { sendLeadMail } from "./mail.js";
import {
  readReviews,
  appendReview,
  validateReviewBody,
  sanitizeReviewForClient,
} from "./reviews.js";

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(express.json({ limit: "48kb" }));

app.get("/api/health", (_req, res) => {
  res.json({ ok: true });
});

app.get("/api/reviews", async (_req, res) => {
  try {
    const list = await readReviews();
    const reviews = list.map(sanitizeReviewForClient);
    res.json({ reviews });
  } catch (err) {
    console.error("GET /api/reviews:", err);
    res.status(500).json({ reviews: [] });
  }
});

app.post("/api/reviews", async (req, res) => {
  const validated = validateReviewBody(req.body);
  if (validated.error) {
    return res.status(400).json({ success: false, message: validated.error });
  }
  try {
    const row = await appendReview(validated.data);
    res
      .status(201)
      .json({ success: true, review: sanitizeReviewForClient(row), message: "Review published." });
  } catch (err) {
    console.error("POST /api/reviews:", err);
    res.status(500).json({ success: false, message: "Could not save review. Try again later." });
  }
});

/** Inbox that receives contact form submissions */
const RECIPIENT_EMAIL = process.env.RECIPIENT_EMAIL || "madarlabs0@gmail.com";
/** Gmail account used for SMTP (App Password auth) */
const GMAIL_USER = process.env.GMAIL_USER || RECIPIENT_EMAIL;
const GMAIL_APP_PASSWORD = process.env.GMAIL_APP_PASSWORD;
const HAS_RESEND = Boolean(process.env.RESEND_API_KEY?.trim());
const HAS_GMAIL = Boolean(GMAIL_APP_PASSWORD);

if (!HAS_RESEND && !HAS_GMAIL) {
  console.warn(
    "⚠️  No mail transport: set RESEND_API_KEY or GMAIL_APP_PASSWORD in server/.env — see server/README.md"
  );
}

app.post("/api/leads", async (req, res) => {
  if (!HAS_RESEND && !HAS_GMAIL) {
    return res.status(503).json({
      message:
        "Email not configured. Add RESEND_API_KEY or GMAIL_APP_PASSWORD to server/.env and restart the server.",
    });
  }

  const {
    fullName,
    email,
    subject,
    businessType,
    serviceNeeded,
    budgetRange,
    whatsappNumber,
    instagramUsername,
    message,
  } = req.body;

  const emailStr = String(email || "").trim();
  const subjectStr = String(subject || "").trim();
  const messageStr = String(message || "").trim();

  if (
    !fullName ||
    !emailStr ||
    !subjectStr ||
    !businessType ||
    !serviceNeeded ||
    !budgetRange ||
    !whatsappNumber ||
    !messageStr
  ) {
    return res.status(400).json({ message: "Missing required fields" });
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailStr)) {
    return res.status(400).json({ message: "Invalid email address" });
  }

  if (messageStr.length < 10) {
    return res.status(400).json({ message: "Message is too short" });
  }

  try {
  const escape = (s) => String(s || "").replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
  const waLink = `https://wa.me/${String(whatsappNumber).replace(/\D/g, "").replace(/^0/, "972")}`;
  const safe = {
    fullName: escape(fullName),
    email: escape(emailStr),
    subject: escape(subjectStr),
    businessType: escape(businessType),
    serviceNeeded: escape(serviceNeeded),
    budgetRange: escape(budgetRange),
    whatsappNumber: escape(whatsappNumber),
    instagramUsername: escape(instagramUsername),
    message: escape(messageStr),
  };

  const htmlContent = `<!DOCTYPE html>
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
  <title>New Lead: ${safe.fullName}</title>
</head>
<body style="margin:0;padding:0;background:#f1f5f9;font-family:'Plus Jakarta Sans',-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif;-webkit-font-smoothing:antialiased;">
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:#f1f5f9;padding:48px 24px;">
    <tr>
      <td align="center">
        <table role="presentation" width="600" cellpadding="0" cellspacing="0" style="max-width:600px;background:#ffffff;border-radius:24px;overflow:hidden;border:1px solid #e2e8f0;box-shadow:0 4px 20px -4px rgba(0,0,0,0.1),0 8px 30px -8px rgba(0,0,0,0.15);">
          <tr>
            <td style="background:linear-gradient(135deg,#3b82f6 0%,#2563eb 100%);padding:44px 40px 40px;text-align:center;">
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
                <tr>
                  <td align="center">
                    <div style="width:64px;height:64px;background:rgba(255,255,255,0.25);border-radius:16px;margin:0 auto 20px;line-height:64px;font-size:28px;font-weight:700;color:#fff;">M</div>
                    <p style="margin:0;font-size:10px;color:rgba(255,255,255,0.9);letter-spacing:3px;text-transform:uppercase;font-weight:600;">New Lead</p>
                    <h1 style="margin:12px 0 0;font-size:28px;font-weight:700;color:#fff;letter-spacing:-0.5px;">MadarLabs</h1>
                    <p style="margin:8px 0 0;font-size:14px;color:rgba(255,255,255,0.9);">Website inquiry received</p>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
          <tr>
            <td style="padding:32px 40px 24px;">
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:#f8fafc;border-radius:16px;border:1px solid #e2e8f0;">
                <tr>
                  <td style="padding:24px 28px;">
                    <p style="margin:0;font-size:10px;color:#64748b;font-weight:600;letter-spacing:2px;">CONTACT</p>
                    <p style="margin:10px 0 0;font-size:24px;font-weight:700;color:#0f172a;letter-spacing:-0.5px;">${safe.fullName}</p>
                    <p style="margin:8px 0 0;font-size:15px;"><a href="mailto:${safe.email}" style="color:#2563eb;text-decoration:none;font-weight:600;">${safe.email}</a></p>
                    <p style="margin:6px 0 0;font-size:15px;color:#64748b;">${safe.businessType}</p>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
          <tr>
            <td style="padding:0 40px 32px;">
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="border:1px solid #e2e8f0;border-radius:16px;overflow:hidden;background:#ffffff;">
                <tr><td style="padding:20px 28px;background:#f8fafc;font-size:10px;color:#64748b;font-weight:600;letter-spacing:1px;width:150px;">Subject</td><td style="padding:20px 28px;font-size:15px;font-weight:600;color:#0f172a;">${safe.subject}</td></tr>
                <tr><td style="padding:20px 28px;background:#f8fafc;font-size:10px;color:#64748b;font-weight:600;letter-spacing:1px;width:150px;">Service</td><td style="padding:20px 28px;font-size:15px;font-weight:600;color:#0f172a;">${safe.serviceNeeded}</td></tr>
                <tr><td style="padding:20px 28px;background:#f8fafc;font-size:10px;color:#64748b;font-weight:600;letter-spacing:1px;">Budget</td><td style="padding:20px 28px;font-size:15px;font-weight:600;color:#0f172a;">${safe.budgetRange}</td></tr>
                <tr><td style="padding:20px 28px;background:#f8fafc;font-size:10px;color:#64748b;font-weight:600;letter-spacing:1px;">WhatsApp</td><td style="padding:20px 28px;"><a href="${waLink}" style="color:#25D366;font-size:15px;font-weight:600;text-decoration:none;">${safe.whatsappNumber} →</a></td></tr>
                ${instagramUsername ? `<tr><td style="padding:20px 28px;background:#f8fafc;font-size:10px;color:#64748b;font-weight:600;letter-spacing:1px;">Instagram</td><td style="padding:20px 28px;font-size:15px;color:#0f172a;">${safe.instagramUsername}</td></tr>` : ""}
              </table>
            </td>
          </tr>
          <tr>
            <td style="padding:0 40px 32px;">
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:#f0f9ff;border-radius:16px;border:1px solid #bae6fd;">
                <tr>
                  <td style="padding:24px 28px;">
                    <p style="margin:0 0 8px;font-size:10px;color:#0369a1;font-weight:600;letter-spacing:2px;">MESSAGE</p>
                    <p style="margin:0;font-size:15px;color:#0f172a;line-height:1.7;white-space:pre-wrap;">${safe.message}</p>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
          <tr>
            <td style="padding:0 40px 40px;">
              <a href="${waLink}" style="display:block;text-align:center;padding:18px 32px;background:linear-gradient(135deg,#25D366 0%,#128C7E 50%,#0d9488 100%);color:#fff;font-size:16px;font-weight:600;text-decoration:none;border-radius:12px;box-shadow:0 4px 20px rgba(37,211,102,0.45);">Contact on WhatsApp</a>
            </td>
          </tr>
          <tr>
            <td style="background:#f8fafc;padding:20px 40px;text-align:center;font-size:12px;color:#64748b;border-top:1px solid #e2e8f0;">
              MadarLabs · Professional lead notification
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>`;

  const textBody = `New contact — ${subjectStr}\n\nFrom: ${fullName} <${emailStr}>\nBusiness: ${businessType}\nService: ${serviceNeeded}\nBudget: ${budgetRange}\nWhatsApp: ${whatsappNumber}${instagramUsername ? `\nInstagram: ${instagramUsername}` : ""}\n\nMessage:\n${messageStr}`;

    await sendLeadMail({
      to: RECIPIENT_EMAIL,
      replyTo: emailStr,
      subject: `[Contact] ${subjectStr} — ${fullName}`,
      text: textBody,
      html: htmlContent,
      gmailUser: GMAIL_USER,
      gmailAppPassword: GMAIL_APP_PASSWORD,
    });

    res.status(200).json({ success: true, message: "Thank you! We'll be in touch soon." });
  } catch (err) {
    console.error("Lead /api/leads error:", err);
    const code = err && typeof err === "object" ? err.code : undefined;
    const msg = err && typeof err === "object" && "message" in err ? String(err.message) : String(err);
    let userMessage =
      "We could not send your message by email. Please try again in a moment or contact us on WhatsApp.";
    if (code === "RESEND") {
      userMessage = `Resend error: ${msg}. Check RESEND_API_KEY and RESEND_FROM (must be a verified sender/domain in Resend).`;
    } else if (code === "EAUTH" || /Invalid login|authentication failed|535|534|ECONNECTION|ETIMEDOUT/i.test(msg)) {
      userMessage =
        "Gmail SMTP failed. Use the same Gmail address for GMAIL_USER as the account that created the App Password. Set GMAIL_APP_PASSWORD to a 16-character App Password (Google → Security → 2-Step Verification → App passwords). Remove spaces from the password.";
    } else if (/GMAIL_APP_PASSWORD|ENOCONFIG|Missing credentials/i.test(msg) || code === "ENOCONFIG") {
      userMessage =
        "Email is not configured. Add GMAIL_APP_PASSWORD (Gmail) or RESEND_API_KEY (Resend) to server/.env and restart the API.";
    }
    if (!res.headersSent) {
      res.status(500).json({ success: false, message: userMessage });
    }
  }
});

app.listen(PORT, "0.0.0.0", () => {
  console.log(`Server running at http://127.0.0.1:${PORT} (and localhost)`);
  console.log(`Lead form: POST http://127.0.0.1:${PORT}/api/leads`);
  console.log(`Reviews: GET/POST http://127.0.0.1:${PORT}/api/reviews`);
});
