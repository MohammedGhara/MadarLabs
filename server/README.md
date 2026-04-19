# Lead Form Backend

Sends form submissions to your email. No third-party form services.

## Setup

1. Copy `.env.example` to `.env`:
   ```
   cp .env.example .env
   ```

2. Choose how mail is sent:

   **Option A — Gmail (common)**  
   - Go to https://myaccount.google.com/security  
   - Turn on **2-Step Verification**  
   - **App passwords** → create one for **Mail**  
   - Put the 16-character value in `GMAIL_APP_PASSWORD` (spaces are OK; the server removes them)  
   - **`GMAIL_USER` must be the same Gmail address** as the account that created the App Password  
   - **`RECIPIENT_EMAIL`** is where leads arrive (can be the same inbox)

   **Option B — Resend (if Gmail SMTP is blocked)**  
   - Sign up at https://resend.com and create an API key  
   - Set `RESEND_API_KEY` in `server/.env`  
   - Set `RESEND_FROM` to a verified sender (see Resend docs; testing often uses `MadarLabs <onboarding@resend.dev>` with limits on recipients)

3. Install and run:
   ```
   npm install
   npm start
   ```

4. In the **main project** `.env`, set:
   ```
   VITE_API_BASE_URL=http://localhost:3001
   ```

5. Run the frontend: `npm run dev` (from project root)

## Environment variables

| Variable | Description |
|----------|-------------|
| `PORT` | Server port (default `3001`) |
| `RECIPIENT_EMAIL` | Inbox that receives contact form emails (default `madarlabs0@gmail.com`) |
| `GMAIL_USER` | Gmail account used to send via SMTP (often same as recipient) |
| `GMAIL_APP_PASSWORD` | [App Password](https://support.google.com/accounts/answer/185833) for `GMAIL_USER` — **never commit this** |
| `RESEND_API_KEY` | Optional. If set, mail is sent via [Resend](https://resend.com) instead of Gmail SMTP |
| `RESEND_FROM` | Optional. Verified “from” address for Resend (e.g. `MadarLabs <noreply@yourdomain.com>`) |

Copy `server/.env.example` to `server/.env` and fill in at least **`GMAIL_APP_PASSWORD`** or **`RESEND_API_KEY`**.

If the form shows a **500** or **Gmail SMTP failed**, the App Password is wrong, 2FA is off, or `GMAIL_USER` does not match the Google account that owns the App Password. Check the **terminal where `npm start` runs** for the real error line.

## Production

Deploy the `server/` folder to Railway, Render, or any Node host. Set the env vars there (including `RECIPIENT_EMAIL=madarlabs0@gmail.com` if that is your production inbox). Update `VITE_API_BASE_URL` in the frontend build to your public API URL.
