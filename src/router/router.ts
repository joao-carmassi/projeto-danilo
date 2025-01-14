import HomePageCarroseu from "@/view/HomePageCarroseu.vue";
import NotFound from "@/view/NotFound.vue";
import { createRouter, createWebHashHistory } from "vue-router";

const routes = [
  {
    path: "/",
    component: HomePageCarroseu,
  },
  {
    path: "/:id",
    component: () => import("@/view/MostraGrupo.vue"),
  },
  {
    path: "/produtos/:id",
    component: () => import("@/view/DadosProduto.vue"),
  },
  {
    path: "/carrinho",
    component: () => import("@/view/CarrinhoPage.vue"),
  },

  {
    path: "/:pathMatch(.*)*",
    component: NotFound,
  },
  {
    path: "/404",
    component: NotFound,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
