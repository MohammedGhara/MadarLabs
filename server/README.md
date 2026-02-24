# Lead Form Backend

Sends form submissions to your email. No third-party form services.

## Setup

1. Copy `.env.example` to `.env`:
   ```
   cp .env.example .env
   ```

2. Create a Gmail App Password:
   - Go to https://myaccount.google.com/security
   - Turn on **2-Step Verification**
   - Go to **App passwords** → Create one for "Mail"
   - Copy the 16-character password into `GMAIL_APP_PASSWORD` in `.env`

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

## Production

Deploy the `server/` folder to Railway, Render, or any Node host. Set the env vars there. Update `VITE_API_BASE_URL` in the frontend to your backend URL.
