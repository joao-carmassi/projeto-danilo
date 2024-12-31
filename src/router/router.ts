import HomePageCarroseu from "@/view/HomePageCarroseu.vue";
import { createRouter, createWebHashHistory } from "vue-router";

const routes = [
  {
    path: "/",
    component: HomePageCarroseu,
  },
  {
    path: "/:id",
    component: import("@/view/MostraGrupo.vue"),
  },
  {
    path: "/produtos/:id",
    component: import("@/view/DadosProduto.vue"),
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
