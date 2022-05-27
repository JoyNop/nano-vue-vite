import { createApp } from "vue"
import { createPinia } from "pinia"

import App from "./App.vue"
import router from "./router"
import "normalize.css/normalize.css" // normalize.css 样式格式化
// import "./style/additional-style.css"
import "./style/additional-style.less"
const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount("#app")
