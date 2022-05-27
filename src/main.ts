import { createApp } from "vue"
import { createPinia } from "pinia"

import App from "./App.vue"
import "normalize.css/normalize.css" // normalize.css 样式格式化
// import "./style/additional-style.css"
import "./style/additional-style.less"

import { router, setupRouter } from "./router"
import { createRouterGuards } from "./router/router-guards"
import { setupStore } from "./store"
// import { setupVueClipboard } from "./plugins/clipboard";
async function bootstrap() {
  const app = createApp(App)
  setupStore(app)
  setupRouter(app)
  createRouterGuards(router)
  // setupVueClipboard(app);
  await router.isReady()
  app.mount("#app")
}

bootstrap()
