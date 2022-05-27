import { defineStore } from "pinia";
import { store } from "..";

export const useAppStore = defineStore({
  id: "app",
  state: () => ({
    collapsed: false,
  }),
  getters: {
    // doubleCount: (state) => state.counter * 2,
  },
  actions: {
    toggleCollapsed() {
      this.collapsed = !this.collapsed;
    },
  },
});
// Need to be used outside the setup
export function useAppStoreWithOut() {
  return useAppStore(store);
}
