/*
 * @Author: HanRui(JoyNop)
 * @Date: 2021-10-19 14:34:51
 * @LastEditors: HanRui(JoyNop)
 * @LastEditTime: 2021-11-08 17:23:30
 * @Description: file content
 * @FilePath: /blast-web-2_x/src/router/modules/shared.ts
 */
import type { RouteRecordRaw } from "vue-router"

/**
 * 不需要授权就可以访问的页面
 */
const routes: Array<RouteRecordRaw> = [
  {
    path: "/login",
    name: "login",
    meta: {
      title: "登录"
    },

    component: () => import(/* webpackChunkName: "login" */ "@/views/shared/login/index.vue")
  },

  // {
  //   path: "/phone",
  //   name: "phone",
  //   component: () =>
  //     import(/* webpackChunkName: "phone" */ "@/views/shared/phone/phone.vue"),
  // },
  {
    path: "/forgot",
    name: "forgot",
    component: () => import(/* webpackChunkName: "forgot" */ "@/views/shared/forgot/forgot.vue")
  }
]

export default routes
