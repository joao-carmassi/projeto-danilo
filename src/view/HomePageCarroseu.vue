<template>
  <main class="pt-20 bg-base-200">
    <section
      class="md:px-10"
      v-for="(categoria, index) in categorias"
      :key="index"
    >
      <div class="grid lg: place-items-center py-5 pb-0 md:py-8 md:pb-3">
        <h2 class="capitalize text-2xl font-montSerrat md:text-3xl">
          {{ categoria.replace(/-/g, " ") }}:
        </h2>
      </div>
      <swiper
        :slides-per-view="2"
        :loop="true"
        :navigation="true"
        :modules="[Navigation]"
        class="swiper-container"
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
          <CardProduto class="m-2 my-5 md:m-5" :produto="produto" />
        </swiper-slide>
      </swiper>
    </section>
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

export default {
  components: {
    Swiper,
    SwiperSlide,
    CardProduto,
  },
  data() {
    return {
      SProdutos: storeProdutos(),
      produtos: {} as IProdutos,
      categorias: [] as string[],
    };
  },
  async created() {
    this.produtos = (await this.SProdutos).getProdutos;
    this.categorias = (await this.SProdutos).getCategorias;
  },
  setup() {
    return {
      Navigation,
    };
  },
};
</script>

<style>
:root {
  --cor-secundaria: #080069;
}

.swiper-container {
  --swiper-navigation-size: 30px;
  --swiper-navigation-top-offset: 50%;
  --swiper-navigation-sides-offset: 0px;
  --swiper-navigation-color: var(--cor-secundaria);
}

@media (max-width: 768px) {
  .swiper-button-prev,
  .swiper-button-next {
    display: none;
  }
}
</style>
