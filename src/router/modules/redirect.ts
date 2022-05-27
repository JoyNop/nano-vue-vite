/*
 * @Author: HanRui(JoyNop)
 * @Date: 2021-10-19 14:34:51
 * @LastEditors: HanRui(JoyNop)
 * @LastEditTime: 2021-11-16 20:10:06
 * @Description: file content
 * @FilePath: /blast-web-2_x/src/router/modules/redirect.ts
 */
import type { RouteRecordRaw } from "vue-router";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/redirect/:path*",
    name: "Redirect",
    component: () => import("@/views/shared/redirect/index.vue"),
    meta: {
      title: "重定向",
      icon: "SettingOutlined",
      hidden: true,
    },
  },
];
export default routes;
