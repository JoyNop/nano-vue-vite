export const baseLayoutMenu = [
  {
    path: "/control",
    name: "control",
    redirect: "/control/org",

    meta: {
      title: "爆破平台",
      icon: "block-outlined",
    },
    children: [
      {
        path: "org",
        name: "control-org",
        meta: {
          title: "组织管理",
          icon: "bars-outlined",
        },
      },
      {
        path: "user",
        name: "control-user",
        meta: {
          title: "用户管理",
          icon: "team-outlined",
        },
      },
    ],
  },
  {
    path: "/operate",
    name: "operate",
    redirect: "/operate/user",

    meta: {
      title: "爆破运营",
      icon: "build-outlined",
    },
    children: [
      {
        path: "user",
        name: "operate-user",
        meta: {
          title: "运营成员",
          icon: "user-outlined",
        },
      },
      {
        path: "log",
        name: "operate-log",
        meta: {
          title: "系统日志",
          icon: "bug-outlined",
        },
      },
      {
        path: "apk",
        name: "operate-apk",
        meta: {
          title: "APK包管理",
          icon: "android-outlined",
        },
      },
    ],
  },
];
