import HomePageCarroseu from "@/view/HomePageCarroseu.vue";
import NotFound from "@/view/NotFound.vue";
import { createRouter, createWebHashHistory } from "vue-router";

const routes = [
  {
    path: "/",
    component: HomePageCarroseu,
  },
  {
    path: "/marca/:id",
    component: () => import("@/view/MostraGrupo.vue"),
  },
  {
    path: "/produto/:id",
    component: () => import("@/view/DadosProduto.vue"),
  },
  {
    path: "/produtos/:id",
    component: () => import("@/view/MostraGrupo.vue"),
  },
  {
    path: "/carrinho",
    component: () => import("@/view/CarrinhoPage.vue"),
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
  // Se a rota não for válida, redireciona para 404
  if (to.matched.length === 0) {
    next("/404");
  } else {
    next();
  }
});

export default router;
