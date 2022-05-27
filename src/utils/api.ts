const envMap: any = {}

// 根据环境引入不同配置
export const config = envMap[import.meta.env.VITE_ENV].default
console.log("根据环境引入不同配置", config)
