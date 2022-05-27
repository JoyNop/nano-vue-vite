import type { RouteRecordRaw } from "vue-router";
// import BaseRouterTransition from "@/layout/BaseRouterTransition.vue";
// import OrgView from "@/views/control/OrgView.vue";
// import UserView from "@/views/control/UserView.vue";
import { BaseLayout } from "@/layout";

const routeName = "control";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/control",
    name: routeName,
    redirect: "/control/org",
    component: BaseLayout,
    meta: {
      title: "爆破平台",
      icon: "block-outlined",
    },
    children: [
      {
        path: "org",
        name: `${routeName}-org`,
        meta: {
          title: "组织管理",
          icon: "bars-outlined",
        },
        component: <div>adsf</div>,
      },
      {
        path: "user",
        name: `${routeName}-user`,
        meta: {
          title: "用户管理",
          icon: "team-outlined",
        },
        component: <div>adsf</div>,
      },
    ],
  },
];

export default routes;
