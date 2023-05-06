import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import HomeView from "../views/HomeView.vue";

const routes: Array<RouteRecordRaw> = [
  // {
  //   path: "/",
  //   name: "home",
  //   component: HomeView,
  // },

  {
    path: "/",
    name: "main",
    component: () => import("@/views/home/index.vue"),
  },
  {
    path: '/acroIndex',
    name: 'acroIndex',
    component:()=>import("@/views/arcoIndex/acroIndex.vue")
  },
  {
    path: '/baseTable',
    name: 'baseTable',
    component:()=>import("@/views/demoTable/table.vue")
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
