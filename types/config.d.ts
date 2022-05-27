export interface GlobEnvConfig {
  VITE_ENV: string
  VITE_OUTPUT_DIR: string

  VITE_PUBLIC_PATH: string

  VITE_USE_MOCK: boolean

  VITE_USE_PROXY: boolean
  VITE_USE_API: string

  VITE_BUILD_COMPRESS: "gzip" | "brotli" | "none"

  VITE_BUILD_COMPRESS_DELETE_ORIGIN_FILE: boolean
}
