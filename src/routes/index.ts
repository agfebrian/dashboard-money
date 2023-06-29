import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      name: "login",
      path: "/login",
      component: () => import("@/pages/LoginPage.vue"),
      meta: {
        layout: "blank",
      },
    },
  ],
});

export default router;
