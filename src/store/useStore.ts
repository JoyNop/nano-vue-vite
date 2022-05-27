import { useUserStoreWithOut } from "@/store/modules/user";
import { useAppStoreWithOut } from "@/store/modules/app";

export const useStore = {
  user: useUserStoreWithOut,
  app: useAppStoreWithOut,
};
