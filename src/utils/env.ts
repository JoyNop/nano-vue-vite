import pkg from "../../package.json"
import type { GlobEnvConfig } from "../../types/config"
// export function getCommonStoragePrefix() {
//   const { VITE_GLOB_APP_SHORT_NAME } = getAppEnvConfig()
//   return `${VITE_GLOB_APP_SHORT_NAME}__${getEnv()}`.toUpperCase()
// }
// export const getConfigFileName = (env: Record<string, any>) => {
//   return `__PRODUCTION__${env.VITE_GLOB_APP_SHORT_NAME || "__APP"}__CONF__`
//     .toUpperCase()
//     .replace(/\s/g, "")
// }

// Generate cache key according to version
// export function getStorageShortName() {
//   return `${getCommonStoragePrefix()}${`__${pkg.version}`}__`.toUpperCase()
// }

export function getAppEnvConfig() {
  const ENV_NAME = ""

  const ENV = (import.meta.env.DEV
    ? // Get the global configuration (the configuration will be extracted independently when packaging)
      (import.meta.env as unknown as GlobEnvConfig)
    : window[ENV_NAME as any]) as unknown as GlobEnvConfig

  const {
    VITE_ENV,
    VITE_OUTPUT_DIR,
    VITE_PUBLIC_PATH,
    VITE_USE_MOCK,
    VITE_USE_PROXY,
    VITE_USE_API,
    VITE_BUILD_COMPRESS_DELETE_ORIGIN_FILE
  } = ENV

  return {
    VITE_ENV,
    VITE_OUTPUT_DIR,
    VITE_PUBLIC_PATH,
    VITE_USE_MOCK,
    VITE_USE_PROXY,
    VITE_USE_API,
    VITE_BUILD_COMPRESS_DELETE_ORIGIN_FILE
  }
}

/**
 * @description: Development mode
 */
export const devMode = "development"

/**
 * @description: Production mode
 */
export const prodMode = "production"

/**
 * @description: Get environment variables
 * @returns:
 * @example:
 */
export function getEnv(): string {
  return import.meta.env.MODE
}

/**
 * @description: Is it a development mode
 * @returns:
 * @example:
 */
export function isDevMode(): boolean {
  return import.meta.env.DEV
}

/**
 * @description: Is it a production mode
 * @returns:
 * @example:
 */
export function isProdMode(): boolean {
  return import.meta.env.PROD
}
