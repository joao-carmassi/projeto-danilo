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
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
