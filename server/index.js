import "dotenv/config";
import express from "express";
import cors from "cors";
import nodemailer from "nodemailer";

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());

const RECIPIENT_EMAIL = process.env.RECIPIENT_EMAIL || "VertexTech11@gmail.com";
const GMAIL_USER = process.env.GMAIL_USER || RECIPIENT_EMAIL;
const GMAIL_APP_PASSWORD = process.env.GMAIL_APP_PASSWORD;

if (!GMAIL_APP_PASSWORD) {
  console.warn(
    "⚠️  GMAIL_APP_PASSWORD not set. Create server/.env with your Gmail App Password. See server/README.md"
  );
}

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: GMAIL_USER,
    pass: GMAIL_APP_PASSWORD,
  },
});

app.post("/api/leads", async (req, res) => {
  if (!GMAIL_APP_PASSWORD) {
    return res.status(503).json({ message: "Email not configured. Set GMAIL_APP_PASSWORD in server/.env" });
  }

  const { fullName, businessType, serviceNeeded, budgetRange, whatsappNumber, instagramUsername, message } = req.body;

  if (!fullName || !businessType || !serviceNeeded || !budgetRange || !whatsappNumber) {
    return res.status(400).json({ message: "Missing required fields" });
  }

  const escape = (s) => String(s || "").replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
  const waLink = `https://wa.me/${whatsappNumber.replace(/\D/g, "").replace(/^0/, "972")}`;
  const safe = { fullName: escape(fullName), businessType: escape(businessType), serviceNeeded: escape(serviceNeeded), budgetRange: escape(budgetRange), whatsappNumber: escape(whatsappNumber), instagramUsername: escape(instagramUsername), message: escape(message) };

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
                    <div style="width:64px;height:64px;background:rgba(255,255,255,0.25);border-radius:16px;margin:0 auto 20px;line-height:64px;font-size:28px;font-weight:700;color:#fff;">V</div>
                    <p style="margin:0;font-size:10px;color:rgba(255,255,255,0.9);letter-spacing:3px;text-transform:uppercase;font-weight:600;">New Lead</p>
                    <h1 style="margin:12px 0 0;font-size:28px;font-weight:700;color:#fff;letter-spacing:-0.5px;">VertexTech</h1>
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
                    <p style="margin:6px 0 0;font-size:15px;color:#64748b;">${safe.businessType}</p>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
          <tr>
            <td style="padding:0 40px 32px;">
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="border:1px solid #e2e8f0;border-radius:16px;overflow:hidden;background:#ffffff;">
                <tr><td style="padding:20px 28px;background:#f8fafc;font-size:10px;color:#64748b;font-weight:600;letter-spacing:1px;width:150px;">Service</td><td style="padding:20px 28px;font-size:15px;font-weight:600;color:#0f172a;">${safe.serviceNeeded}</td></tr>
                <tr><td style="padding:20px 28px;background:#f8fafc;font-size:10px;color:#64748b;font-weight:600;letter-spacing:1px;">Budget</td><td style="padding:20px 28px;font-size:15px;font-weight:600;color:#0f172a;">${safe.budgetRange}</td></tr>
                <tr><td style="padding:20px 28px;background:#f8fafc;font-size:10px;color:#64748b;font-weight:600;letter-spacing:1px;">WhatsApp</td><td style="padding:20px 28px;"><a href="${waLink}" style="color:#25D366;font-size:15px;font-weight:600;text-decoration:none;">${safe.whatsappNumber} →</a></td></tr>
                ${instagramUsername ? `<tr><td style="padding:20px 28px;background:#f8fafc;font-size:10px;color:#64748b;font-weight:600;letter-spacing:1px;">Instagram</td><td style="padding:20px 28px;font-size:15px;color:#0f172a;">${safe.instagramUsername}</td></tr>` : ""}
              </table>
            </td>
          </tr>
          ${message ? `<tr>
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
          </tr>` : ""}
          <tr>
            <td style="padding:0 40px 40px;">
              <a href="${waLink}" style="display:block;text-align:center;padding:18px 32px;background:linear-gradient(135deg,#25D366 0%,#128C7E 50%,#0d9488 100%);color:#fff;font-size:16px;font-weight:600;text-decoration:none;border-radius:12px;box-shadow:0 4px 20px rgba(37,211,102,0.45);">Contact on WhatsApp</a>
            </td>
          </tr>
          <tr>
            <td style="background:#f8fafc;padding:20px 40px;text-align:center;font-size:12px;color:#64748b;border-top:1px solid #e2e8f0;">
              VertexTech · Professional lead notification
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>`;

  const textBody = `New lead: ${fullName}\n\nBusiness: ${businessType}\nService: ${serviceNeeded}\nBudget: ${budgetRange}\nWhatsApp: ${whatsappNumber}${instagramUsername ? `\nInstagram: ${instagramUsername}` : ""}${message ? `\n\nMessage:\n${message}` : ""}`;

  try {
    await transporter.sendMail({
      from: `"🎯 VertexTech New Lead" <${GMAIL_USER}>`,
      to: RECIPIENT_EMAIL,
      subject: `New Lead: ${fullName} · ${serviceNeeded}`,
      text: textBody,
      html: htmlContent,
    });

    res.status(200).json({ success: true, message: "Thank you! We'll be in touch soon." });
  } catch (err) {
    console.error("Email send error:", err);
    res.status(500).json({ message: "Failed to send. Please try again." });
  }
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
  console.log(`Lead form: POST http://localhost:${PORT}/api/leads`);
});
