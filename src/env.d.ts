/// <reference types="vite/client" />

// Augment ImportMeta for Vite env vars
interface ImportMetaEnv {
  readonly VITE_APP_NAME: string
  readonly VITE_APP_VERSION: string
  // Add more env vars here as needed
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
