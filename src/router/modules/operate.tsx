import type { RouteRecordRaw } from "vue-router"
// import BaseRouterTransition from "@/layout/BaseLayout.vue";

// import UserView from "@/views/operate/UserView.vue";
import AboutView from "@/views/AboutView.vue"
import { BaseLayout } from "@/layout"

const routeName = "operate"

const routes: Array<any> = [
  {
    path: "/operate",
    name: routeName,
    redirect: "/operate/user",
    component: BaseLayout,
    meta: {
      title: "爆破运营",
      icon: "build-outlined"
    },
    children: [
      {
        path: "user",
        name: `${routeName}-user`,
        meta: {
          title: "运营成员",
          icon: "user-outlined"
        },
        component: AboutView
      }
      // {
      //   path: "log",
      //   name: `${routeName}-log`,
      //   meta: {
      //     title: "系统日志",
      //     icon: "bug-outlined",
      //   },
      //   component: () => import("@/views/operate/OperateLog.vue"),
      // },
      // {
      //   path: "apk",
      //   name: `${routeName}-apk`,
      //   meta: {
      //     title: "APK包管理",
      //     icon: "android-outlined",
      //   },
      //   component: () => import("@/views/operate/ApkView.vue"),
      // },
    ]
  }
]

export default routes
