import HomePageCarroseu from "@/view/HomePageCarroseu.vue";
import NotFound from "@/view/NotFound.vue";
import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "Home",
    component: HomePageCarroseu,
    meta: { title: "Loja do VRF - Home" },
  },
  {
    path: "/produto/:id",
    name: "Produto",
    component: () =>
      import(/* webpackChunkName: "produto" */ "@/view/DadosProduto.vue"),
    meta: { title: "Detalhes do Produto" },
  },
  {
    path: "/produtos/:id",
    name: "Produtos",
    component: () =>
      import(/* webpackChunkName: "produtos" */ "@/view/MostraProdutos.vue"),
    meta: { title: "Lista de Produtos" },
  },
  {
    path: "/produtos/:id/:filtroSubcategoria",
    name: "ProdutosFiltrados",
    component: () =>
      import(
        /* webpackChunkName: "produtos-filtrados" */ "@/view/MostraProdutos.vue"
      ),
    meta: { title: "Produtos Filtrados" },
  },
  {
    path: "/carrinho",
    name: "Carrinho",
    component: () =>
      import(/* webpackChunkName: "carrinho" */ "@/view/CarrinhoPage.vue"),
    meta: { title: "Carrinho de Compras" },
  },
  {
    path: "/marca/:id",
    name: "Marca",
    component: () =>
      import(/* webpackChunkName: "marca" */ "@/view/MostraMarca.vue"),
    meta: { title: "Marca de Produtos" },
  },
  {
    path: "/manuais",
    name: "Manuais",
    component: () =>
      import(/* webpackChunkName: "manuais" */ "@/view/PaginaManuais.vue"),
    meta: { title: "Manuais Técnicos" },
  },
  {
    path: "/manuais/:id",
    name: "ManualMarca",
    component: () =>
      import(
        /* webpackChunkName: "manual-marca" */ "@/view/MostraManualMarca.vue"
      ),
    meta: { title: "Manual da Marca" },
  },
  {
    path: "/:pathMatch(.*)*",
    redirect: "/404",
  },
  {
    path: "/404",
    name: "NotFound",
    component: NotFound,
    meta: { title: "Página Não Encontrada" },
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

// Verifica e atualiza o título da página dinamicamente
router.afterEach((to) => {
  if (typeof to.meta.title === "string") {
    document.title = to.meta.title;
  }
});

// Lógica aprimorada para rotas específicas
router.beforeEach((to, from, next) => {
  if (to.path.startsWith("/img/produtos")) {
    next("/");
  } else {
    next();
  }
});

export default router;
