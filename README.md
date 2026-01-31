# Welcome to your Lovable project

## Project info

**URL**: https://lovable.dev/projects/REPLACE_WITH_PROJECT_ID

## How can I edit this code?

There are several ways of editing your application.

**Use Lovable**

Simply visit the [Lovable Project](https://lovable.dev/projects/REPLACE_WITH_PROJECT_ID) and start prompting.

Changes made via Lovable will be committed automatically to this repo.

**Use your preferred IDE**

If you want to work locally using your own IDE, you can clone this repo and push changes. Pushed changes will also be reflected in Lovable.

The only requirement is having Node.js & npm installed - [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating)

Follow these steps:

```sh
# Step 1: Clone the repository using the project's Git URL.
git clone <YOUR_GIT_URL>

# Step 2: Navigate to the project directory.
cd <YOUR_PROJECT_NAME>

# Step 3: Install the necessary dependencies.
npm i

# Step 4: Start the development server with auto-reloading and an instant preview.
npm run dev
```

**Edit a file directly in GitHub**

- Navigate to the desired file(s).
- Click the "Edit" button (pencil icon) at the top right of the file view.
- Make your changes and commit the changes.

**Use GitHub Codespaces**

- Navigate to the main page of your repository.
- Click on the "Code" button (green button) near the top right.
- Select the "Codespaces" tab.
- Click on "New codespace" to launch a new Codespace environment.
- Edit files directly within the Codespace and commit and push your changes once you're done.

## What technologies are used for this project?

This project is built with:

- Vite
- TypeScript
- React
- shadcn-ui
- Tailwind CSS

## Backend & Deployment Setup

### 1. Configure environment variables

Copy `.env.example` to `.env` and set your values:

```sh
cp .env.example .env
```

Edit `.env` with your backend URL and contact info:

- **VITE_API_BASE_URL** – Your backend API URL (e.g. `https://api.yourdomain.com`) – required for the lead form
- **VITE_WHATSAPP_NUMBER** – Your WhatsApp number (digits only, e.g. `972501234567`)
- **VITE_WHATSAPP_MESSAGE** – Pre-filled message when users click the WhatsApp button
- **VITE_INSTAGRAM_URL** – Your Instagram profile URL
- **VITE_EMAIL** – Contact email
- **VITE_SITE_URL** – Your site URL for SEO

### 2. Backend API

The lead form sends data to `POST {VITE_API_BASE_URL}/api/leads`. See **[BACKEND_API.md](./BACKEND_API.md)** for the full API spec your backend must implement.

### 3. Build & deploy

```sh
npm run build
```

The output is in the `dist/` folder. Deploy it to Vercel, Netlify, or any static host. Set the same environment variables in your hosting provider’s dashboard.

### 4. CORS

Configure your backend to allow requests from your frontend domain. Allow `Content-Type` and `POST` for `/api/leads`.

## How can I deploy this project?

Simply open [Lovable](https://lovable.dev/projects/REPLACE_WITH_PROJECT_ID) and click on Share -> Publish.

## Can I connect a custom domain to my Lovable project?

Yes, you can!

To connect a domain, navigate to Project > Settings > Domains and click Connect Domain.

Read more here: [Setting up a custom domain](https://docs.lovable.dev/features/custom-domain#custom-domain)
