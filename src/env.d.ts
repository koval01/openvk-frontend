/// <reference types="svelte" />
/// <reference types="vite/client" />

declare const __OPENVK_BUILD__: string;

interface ImportMetaEnv {
  readonly VITE_API_URL: string;
  readonly VITE_WS_URL: string;
  readonly VITE_TURNSTILE_SITE_KEY: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}

declare module '*.proto?raw' {
  const source: string;
  export default source;
}
