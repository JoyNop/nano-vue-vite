/*
 * @Author: HanRui(JoyNop)
 * @Date: 2021-08-02 15:29:37
 * @LastEditors: HanRui(JoyNop)
 * @LastEditTime: 2021-10-19 14:37:21
 * @Description: file content
 * @FilePath: /vue02/src/router/modules/error.ts
 */
const routeName = "error"

export const notFound = {
  path: "/:pathMatch(.*)*",
  name: "NotFound",
  component: () => import(/* webpackChunkName: "404" */ "@/views/shared/error/404.vue")
}

export const errorRoutes = {
  path: "/error",
  name: routeName,
  component: () => import(/* webpackChunkName: "404" */ "@/views/shared/error/404.vue"),
  meta: {
    title: "错误页",
    icon: "EditOutlined",
    hidden: true
  }
}
