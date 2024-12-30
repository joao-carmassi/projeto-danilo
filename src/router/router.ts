import HeroHome from "@/view/HeroHome.vue";
import HomePage from "@/view/HomePage.vue";
import { createRouter, createWebHashHistory } from "vue-router";

const routes = [
  { path: "/", component: HeroHome },
  { path: "/teste", component: HomePage },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
