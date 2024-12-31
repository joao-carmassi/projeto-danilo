import HomePageCarroseu from "@/view/HomePageCarroseu.vue";
import { createRouter, createWebHashHistory } from "vue-router";

const routes = [{ path: "/", component: HomePageCarroseu }];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
