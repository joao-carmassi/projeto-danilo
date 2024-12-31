import DadosProduto from "@/view/DadosProduto.vue";
import HomePageCarroseu from "@/view/HomePageCarroseu.vue";
import MostraGrupo from "@/view/MostraGrupo.vue";
import { createRouter, createWebHashHistory } from "vue-router";

const routes = [
  {
    path: "/",
    component: HomePageCarroseu,
  },
  {
    path: "/:id",
    component: MostraGrupo,
  },
  {
    path: "/produtos/:id",
    component: DadosProduto,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
