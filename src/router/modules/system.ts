export default {
  path: "/system",
  redirect: "/system/user",
  meta: {
    icon: "informationLine",
    title: "系统相关",
    // showLink: false,
    rank: 10
  },
  children: [
    {
      path: "/system/user",
      name: "user",
      component: () => import("@/views/system/user.vue"),
      meta: {
        title: "用户"
      }
    },
    {
      path: "/system/role",
      name: "role",
      component: () => import("@/views/system/role.vue"),
      meta: {
        title: "角色"
      }
    }
  ]
} as RouteConfigsTable;
