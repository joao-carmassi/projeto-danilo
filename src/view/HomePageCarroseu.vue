<template>
  <main class="bg-base-100">
    <section>
      <SwiperMarcas />
    </section>
    <section
      class="containerCarrosel relative"
      :class="geraPadding(index)"
      v-for="(categoria, index) in categorias"
      :key="index"
    >
      <hr class="border-secondary border-b-2" />
      <div class="md:px-10">
        <div class="grid place-items-center pb-3 md:pb-4 pt-5 md:pt-4">
          <TituloCategoria :categoria="categoria" />
          <hr class="border-gray-400 border-b-2 rounded-xl w-16 mx-auto" />
        </div>
        <swiper
          :slides-per-view="2"
          :loop="true"
          :navigation="true"
          :modules="[Navigation]"
          class="swiper-container w-11/12"
          :breakpoints="{
            640: { slidesPerView: 2 },
            768: { slidesPerView: 3 },
            1024: { slidesPerView: 4 },
            1280: { slidesPerView: 5 },
          }"
        >
          <swiper-slide
            class="my-auto"
            v-for="(produto, index) in produtos[categoria]"
            :key="index"
          >
            <CardProduto class="my-5 mx-3 md:mx-5" :produto="produto" />
          </swiper-slide>
          <div class="w-full pr-3 md:pr-0 flex justify-end">
            <RouterLink
              :to="`/marca/${categoria}`"
              class="btn btn-secondary uppercase text-base-100"
            >
              <span class="font-semibold text-lg">+</span> {{ categoria }}
            </RouterLink>
          </div>
        </swiper>
      </div>
    </section>
    <section class="grid py-12 md:px-10 place-items-center">
      <a
        class="w-11/12 grid place-items-center"
        href="https://wa.me/5511969189244?text=Olá!%0AVim através do site da loja do VRF e preciso de peças."
      >
        <img
          src="/img/naoEncontrou.png"
          alt="NÃO ENCONTROU O QUE PROCURAVA? CLIQUE AQUI PARA FALAR COM UM DOS NOSSOS CONSULTORES"
        />
      </a>
    </section>
    <hr class="border-secondary" />
    <section
      class="px-5 pb-11 pt-8 md:pb-20 md:pt-14 w-full flex justify-center items-center gap-5 flex-col"
    >
      <p class="text-lg">Estamos no instagram:</p>
      <h2 class="text-4xl md:text-5xl font-semibold text-secondary">
        @lojadovrf
      </h2>
    </section>
    <hr class="border-secondary" />
  </main>
</template>

<script lang="ts">
import { Swiper, SwiperSlide } from "swiper/vue";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

import type { IProdutos } from "@/interface/IProdutos";
import { storeProdutos } from "@/store/SProdutos";
import CardProduto from "@/components/CardProduto.vue";
import TituloCategoria from "@/components/TituloCategoria.vue";
import SwiperMarcas from "@/components/SwiperMarcas.vue";

export default {
  components: {
    Swiper,
    SwiperSlide,
    CardProduto,
    TituloCategoria,
    SwiperMarcas,
  },
  data() {
    return {
      SProdutos: storeProdutos(),
      produtos: {} as IProdutos,
      categorias: [] as string[],
    };
  },
  async created() {
    this.produtos = await this.SProdutos.getProdutos();
    this.categorias = await this.SProdutos.getCategorias();
    window.scrollTo(0, 0);
  },
  setup() {
    return {
      Navigation,
    };
  },
  methods: {
    geraPadding(index: number) {
      if (index == 0) return "pr-0";
      return "pt-5 md:pt-7";
    },
  },
};
</script>

<style>
.swiper-container {
  --swiper-navigation-size: 50px;
  --swiper-navigation-sides-offset: -10px;
  --swiper-navigation-color: #080069;
  --swiper-pagination-color: white;
  --swiper-navigation-sides-offset: 50px;
  position: unset;

  .swiper-button-prev,
  .swiper-button-next {
    position: absolute;
  }
}

.swiperMarcas {
  & .swiper-button-prev,
  & .swiper-button-next {
    background-color: white;
    padding: 1.5rem 1rem;
    border-radius: 5px;
    transition-duration: 0.3s;
    opacity: 0;
  }

  &:hover .swiper-button-prev,
  &:hover .swiper-button-next {
    opacity: 0.85;
  }
}

@media (max-width: 768px) {
  .swiper-button-prev,
  .swiper-button-next {
    display: none;
  }
}
</style>
