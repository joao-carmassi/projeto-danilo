<template>
  <nav
    class="bg-base-100 shadow-sm text-white ContainerCategoriaNav hidden py-1"
    :class="{ 'lg:block': botaoAbreMenu || enventoScrowll }"
  >
    <div class="relative">
      <ul class="flex justify-center text-secondary gap-10 items-center">
        <li class="categoriaNav relative" id="categoria">
          <div>
            <p
              class="flex justify-center font-semibold gap-1 items-center tracking-wide"
            >
              <img
                class="h-4 inline"
                src="/img/nav/categoria.webp"
                loading="lazy"
              />CATEGORIAS
            </p>
            <div
              id="filhoNav"
              class="bg-white shadow-md absolute FilhoCategoriaNav hidden right-1/2 top-[1.7rem] translate-x-1/2 z-10"
            >
              <ul class="flex flex-col h-fit py-2 relative">
                <li
                  class="categoriaNav"
                  v-for="(categoria, index) in categorias"
                  :key="index"
                >
                  <RouterLink :to="`/produtos/${categoria}`">
                    <p
                      class="bg-base-100 text-nowrap font-semibold link-hover px-5 py-2"
                    >
                      {{ categoria }}
                    </p>
                  </RouterLink>
                  <div
                    id="filhoCategoria"
                    class="bg-base-100 absolute FilhoCategoriaNav hidden left-[13.5rem] top-0"
                  >
                    <div
                      v-if="
                        subcategorias[categoria] &&
                        subcategorias[categoria][0] !== '' &&
                        categoria !== 'COMPRESSOR'
                      "
                      class="h-[21rem] shadow-md px-5 py-3"
                    >
                      <RouterLink
                        :to="`/produtos/${categoria}`"
                        class="text-lg text-nowrap font-semibold"
                      >
                        <h3 class="pb-3">{{ categoria }}:</h3>
                      </RouterLink>
                      <hr class="border-secondary pb-3" />
                      <ul
                        class="grid grid-flow-col grid-rows-7 gap-x-16 gap-y-3"
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
            class="flex justify-center font-semibold gap-1 items-center tracking-wide"
            ><img class="h-5 inline" :src="`./img/nav/${item.foto}.webp`" />
            {{ item.foto }}</RouterLink
          >
          <div
            id="filhoNav"
            class="bg-base-100 text-secondary w-[55vw] absolute FilhoCategoriaNav hidden min-w-[55rem] right-1/2 top-[1.79rem] translate-x-1/2 z-10"
            v-if="
              item.nome !== 'MOTOR VENTILADOR' && item.nome !== 'COMPRESSOR'
            "
          >
            <div class="flex h-[21rem] justify-between shadow-md">
              <ul class="grid grid-flow-col grid-rows-7 p-5 gap-x-9 gap-y-5">
                <li
                  class="flex h-fit justify-center items-center"
                  v-for="(subcategoria, index) in subcategorias[item.nome]"
                  :key="index"
                >
                  <RouterLink
                    :to="`/produtos/${item.nome}/${subcategoria}`"
                    class="text-nowrap font-semibold link-hover"
                  >
                    {{ subcategoria }}
                  </RouterLink>
                </li>
              </ul>
              <div class="flex justify-center w-[30rem] items-center">
                <div
                  class="flex justify-center w-[29rem] items-center px-10 relative"
                >
                  <swiper
                    :slides-per-view="2"
                    :loop="true"
                    :navigation="true"
                    :autoplay="{ delay: 5000 }"
                    :modules="[Navigation, Autoplay, Virtual]"
                    class="swiper-container swiperNav"
                  >
                    <swiper-slide
                      v-for="(produto, index) in produtosPorCategoria[
                        item.nome
                      ]"
                      :key="index"
                      :virtualIndex="index"
                    >
                      <CardProduto
                        class="border-gray-400 mx-2"
                        :produto="produto"
                      />
                    </swiper-slide>
                  </swiper>
                </div>
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
import { Autoplay, Navigation, Virtual } from "swiper/modules";
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
      enventoScrowll: true,
      botaoAbreMenu: false,
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

        FilhoCategoriaNav.forEach((filhoNav) => {
          if (filhoNav.id === filho?.id || filho === null) {
            filhoNav.classList.add("hidden");
          }
        });

        if (filho) {
          filho.classList.remove("hidden");
        }
      });
    });

    ContainerCategoriaNav.addEventListener("mouseleave", () => {
      FilhoCategoriaNav.forEach((filho) => {
        filho.classList.add("hidden");
      });
    });

    const divInput = document.getElementById("idMenuBotao") as HTMLElement;
    window.addEventListener("scroll", () => {
      if (window.scrollY === 0) {
        this.enventoScrowll = true;
        divInput.classList.add("hidden");
      } else {
        this.enventoScrowll = false;
        divInput.classList.remove("hidden");
      }
    });

    const toggleNav = document.getElementById("check-icon") as HTMLInputElement;
    toggleNav.addEventListener("change", () => {
      if (toggleNav.checked) {
        this.botaoAbreMenu = true;
      } else {
        this.botaoAbreMenu = false;
      }
    });
  },
  emits: ["scrowll"],
  setup() {
    return {
      Navigation,
      Autoplay,
      Virtual,
    };
  },
};
</script>
