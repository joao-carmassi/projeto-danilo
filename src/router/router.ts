import HomePageCarroseu from "@/view/HomePageCarroseu.vue";
import NotFound from "@/view/NotFound.vue";
import { createRouter, createWebHashHistory } from "vue-router";

const routes = [
  {
    path: "/",
    component: HomePageCarroseu,
  },
  {
    path: "/produto/:id",
    component: () => import("@/view/DadosProduto.vue"),
  },
  {
    path: "/produtos/:id",
    component: () => import("@/view/MostraProdutos.vue"),
  },
  {
    path: "/produtos/:id/:filtroSubcategoria",
    component: () => import("@/view/MostraProdutos.vue"),
  },
  {
    path: "/carrinho",
    component: () => import("@/view/CarrinhoPage.vue"),
  },
  {
    path: "/marca/:id",
    component: () => import("@/view/MostraMarca.vue"),
  },
  {
    path: "/manuais",
    component: () => import("@/view/PaginaManuais.vue"),
  },
  {
    path: "/manuais/:id",
    component: () => import("@/view/MostraManualMarca.vue"),
  },
  {
    path: "/:pathMatch(.*)*",
    redirect: "/404",
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

router.beforeEach((to, from, next) => {
  if (window.location.href.includes("/img/produtos/")) {
    window.location.href = "/";
  } else {
    next();
  }
});

export default router;
