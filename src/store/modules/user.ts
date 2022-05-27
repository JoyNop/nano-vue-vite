import { defineStore } from "pinia";
import * as api from "@/api/account";
import { storage } from "@/utils/storage";
import router from "@/router";
import type { User } from "@/api/account.interface";
import { store } from "@/store";

interface UserState {
  userInfo?: User;
  token: string;
  roleList: any[];
}
export const useUserStore = defineStore({
  id: "app-user",
  state: (): UserState => ({
    // user info
    userInfo: storage.get("CURRENT_USER"),
    // token
    token: storage.get("CURRENT_USER")?.token || "",
    // roleList
    roleList: [],
  }),
  getters: {
    getToken: (state) => (state.token = state.userInfo?.token || ""),
    // getUser: (state) => (state.userInfo = storage.get("CURRENT_USER")),
  },
  actions: {
    async loginByUserName(params: any) {
      const res = await api.userLoginByName(params);
      storage.set("CURRENT_USER", res.data);
      // this.getToken();
      // this.getUser();
      this.userInfo = res.data;
      // this.token = res.data.token;
      router.push("/");
    },
    async userLogout() {
      try {
        console.log("userLogout");

        // await api.userLogout();
        storage.clear();
        this.$reset();
        // router.push("/login");
        // console.log(route);

        router.replace({
          name: "login",
          query: {
            redirect: location.pathname,
          },
        });
      } catch (error) {
        console.log(error);
      } finally {
        location.reload();
      }
    },
  },
});

// Need to be used outside the setup
export function useUserStoreWithOut() {
  return useUserStore(store);
}
