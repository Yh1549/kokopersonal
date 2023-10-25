const routes = [
  {
    path: "/",
    component: () => import("../layout/MainLayout.vue"),
    redirect: { name: "UserEdit" },
    children: [
      {
        path: "/UserEdit",
        name: "UserEdit",
        component: () => import("../view/UserEdit.vue"),
      },
      {
        path: "/UserDoll",
        name: "UserDoll",
        component: () => import("../view/UserDoll.vue"),
      },
    ],
  },
];

export default routes;
