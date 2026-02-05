/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly NEXT_PUBLIC_API_ENDPOINT_DEEPSEEK?: string;
  readonly NEXT_PUBLIC_API_ENDPOINT_LLAMA?: string;
  readonly NEXT_PUBLIC_API_ENDPOINT_OPENAI?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
