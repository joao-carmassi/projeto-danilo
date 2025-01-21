<template>
  <nav
    class="bg-base-100 hidden lg:block ContainerCategoriaNav text-white py-1"
  >
    <div class="relative">
      <ul class="flex items-center text-secondary justify-center py-0.5 gap-10">
        <li class="categoriaNav relative" id="categoria">
          <div>
            <p
              class="font-semibold tracking-wide flex justify-center items-center gap-1"
            >
              <img class="inline h-4" src="/img/nav/categoria.png" />CATEGORIAS
            </p>
            <div
              id="filhoNav"
              class="bg-white hidden FilhoCategoriaNav right-1/2 translate-x-1/2 shadow-md absolute z-10 top-[1.9rem]"
            >
              <ul class="flex relative flex-col py-2 h-fit">
                <li
                  class="categoriaNav"
                  v-for="(categoria, index) in categorias"
                  :key="index"
                >
                  <RouterLink :to="`/produtos/${categoria}`">
                    <p
                      class="text-nowrap link-hover font-semibold px-5 py-2 bg-base-100"
                    >
                      {{ categoria }}
                    </p>
                  </RouterLink>
                  <div
                    id="filhoCategoria"
                    class="absolute hidden FilhoCategoriaNav top-0 left-[13.5rem] bg-base-100"
                  >
                    <div
                      v-if="
                        subcategorias[categoria] &&
                        subcategorias[categoria][0] !== ''
                      "
                      class="h-[21rem] shadow-md px-5 py-3"
                    >
                      <RouterLink
                        :to="`/produtos/${categoria}`"
                        class="font-semibold text-nowrap text-lg"
                      >
                        <h3 class="pb-3">{{ categoria }}:</h3>
                      </RouterLink>
                      <hr class="border-secondary pb-3" />
                      <ul
                        class="grid grid-rows-7 grid-flow-col gap-x-16 gap-y-3"
                      >
                        <li
                          v-for="(subcategoria, index) in subcategorias[
                            categoria
                          ]"
                          class="w-fit"
                          :key="index"
                        >
                          <RouterLink
                            :to="`/produtos/${categoria}/${subcategoria}`"
                            class="text-nowrap font-semibold link-hover"
                            >{{ subcategoria }}</RouterLink
                          >
                        </li>
                      </ul>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </li>
        <li class="categoriaNav" v-for="(item, index) in itemsNav" :key="index">
          <RouterLink
            :to="`/produtos/${item.nome}`"
            class="font-semibold flex justify-center items-center gap-1 tracking-wide"
            ><img class="inline h-6" :src="`./img/nav/${item.foto}.png`" />
            {{ item.foto }}</RouterLink
          >
          <div
            id="filhoNav"
            class="absolute bg-white FilhoCategoriaNav hidden right-1/2 translate-x-1/2 text-secondary z-10 top-8 min-w-[55rem] w-[55vw]"
            v-if="
              item.nome !== 'MOTOR VENTILADOR' && item.nome !== 'COMPRESSOR'
            "
          >
            <div class="flex shadow-md justify-between">
              <ul class="grid grid-rows-7 grid-flow-col gap-y-5 gap-x-9 p-5">
                <li
                  class="flex justify-center h-fit items-center"
                  v-for="(subcategoria, index) in subcategorias[item.nome]"
                  :key="index"
                >
                  <RouterLink
                    :to="`/produtos/${item}/${subcategoria}`"
                    class="text-nowrap font-semibold"
                  >
                    {{ subcategoria }}
                  </RouterLink>
                </li>
              </ul>
              <div class="min-w-96 relative w-96 p-10">
                <swiper
                  :slides-per-view="1"
                  :loop="true"
                  :navigation="true"
                  :autoplay="{ delay: 5000 }"
                  :modules="[Navigation, Autoplay]"
                  class="swiper-container h-full w-full"
                >
                  <swiper-slide
                    v-for="(produto, index) in produtosPorCategoria[item.nome]"
                    :key="index"
                    class="my-auto"
                  >
                    <CardProduto
                      class="border-gray-400 my-5 mx-5"
                      :produto="produto"
                    />
                  </swiper-slide>
                </swiper>
              </div>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script lang="ts">
import router from "@/router/router";
import { storeProdutos } from "@/store/SProdutos";
import { Swiper, SwiperSlide } from "swiper/vue";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import type { IProduto } from "@/interface/IProdutos";
import CardProduto from "./CardProduto.vue";

export default {
  components: { Swiper, SwiperSlide, CardProduto },
  data() {
    return {
      SProdutos: storeProdutos(),
      categorias: [] as string[],
      subcategorias: {} as Record<string, string[]>,
      produtosPorCategoria: {} as Record<string, IProduto[]>,
      itemsNav: [
        {
          nome: "PLACA",
          foto: "PLACAS",
        },
        {
          nome: "MOTOR VENTILADOR",
          foto: "MOTORES VENTILADORES",
        },
        {
          nome: "COMPRESSOR",
          foto: "COMPRESSORES",
        },
        {
          nome: "SENSOR",
          foto: "SENSORES",
        },
      ],
    };
  },
  methods: {
    paginaTipos(tipo: string) {
      router.push(`/produtos/${tipo}`);
    },
    async getProdutosTipo(tipo: string) {
      const produtosPorTipo = await this.SProdutos.filtraPordutosPorTipo(
        tipo,
        this.SProdutos.produtos
      );
      return produtosPorTipo;
    },
  },
  async mounted() {
    this.categorias = await this.SProdutos.getCategorias();
    this.subcategorias = await this.SProdutos.getSubcategorias();
    this.produtosPorCategoria = await this.SProdutos.getProdutosPorCategoria();

    const categoriaNav = document.querySelectorAll(".categoriaNav");
    const ContainerCategoriaNav = document.querySelector(
      ".ContainerCategoriaNav"
    ) as HTMLElement;
    const FilhoCategoriaNav = document.querySelectorAll(".FilhoCategoriaNav");

    categoriaNav.forEach((categoria) => {
      categoria.addEventListener("mouseover", (e) => {
        const pai = e.currentTarget as HTMLDivElement;
        const filho = pai.querySelector(
          ".FilhoCategoriaNav"
        ) as HTMLElement | null;

        if (!filho) {
          return;
        }

        FilhoCategoriaNav.forEach((filhoNav) => {
          if (filhoNav.id === filho.id) {
            filhoNav.classList.add("hidden");
          }
          filho.classList.remove("hidden");
        });
      });
    });

    ContainerCategoriaNav.addEventListener("mouseleave", () => {
      FilhoCategoriaNav.forEach((filho) => {
        filho.classList.add("hidden");
      });
    });

    const nav = document.querySelector(".ContainerCategoriaNav");
    window.addEventListener("scroll", () => {
      if (window.scrollY === 0) {
        nav?.classList.add("lg:block");
      } else {
        nav?.classList.remove("lg:block");
      }
    });
  },
  setup() {
    return {
      Navigation,
      Autoplay,
    };
  },
};
</script>
