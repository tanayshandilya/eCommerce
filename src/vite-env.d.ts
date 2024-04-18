/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_RATE_API_KEY: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
