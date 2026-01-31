/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_API_BASE_URL?: string;
  readonly VITE_WHATSAPP_NUMBER?: string;
  readonly VITE_WHATSAPP_MESSAGE?: string;
  readonly VITE_INSTAGRAM_URL?: string;
  readonly VITE_EMAIL?: string;
  readonly VITE_LOCATION?: string;
  readonly VITE_INSTAGRAM_HANDLE?: string;
  readonly VITE_SITE_URL?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
