import type { App } from "vue";
import { createPinia } from "pinia";
import { useStore } from "./useStore";

const store = createPinia();

export function setupStore(app: App<Element>) {
  app.use(store);
}

export { store, useStore };
