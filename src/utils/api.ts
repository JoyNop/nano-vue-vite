import { getAppEnvConfig } from "./env"

export const getApiUrl = () => {
  const env = getAppEnvConfig()

  let baseUrl = "/"
  if (env.VITE_USE_PROXY === "false") {
    baseUrl = env.VITE_USE_API
  }

  return baseUrl
}
