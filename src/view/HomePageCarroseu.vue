<template>
  <main class="pb-5 md:pb-7 bg-base-200">
    <section
      class="md:px-10"
      v-for="(categoria, index) in categorias"
      :key="index"
    >
      <div class="grid place-items-center pb-3 md:pb-4 pt-9 md:pt-7">
        <TituloCategoria :categoria="categoria" />
        <hr class="border-gray-400 border-b-2 rounded-xl w-16 mx-auto" />
      </div>
      <swiper
        :slides-per-view="2.2"
        :loop="true"
        :navigation="true"
        :modules="[Navigation]"
        class="swiper-container"
        :breakpoints="{
          640: { slidesPerView: 2.2 },
          768: { slidesPerView: 3.3 },
          1024: { slidesPerView: 4.4 },
          1280: { slidesPerView: 5.5 },
        }"
      >
        <swiper-slide
          class="my-auto"
          v-for="(produto, index) in produtos[categoria]"
          :key="index"
        >
          <CardProduto class="ml-3 my-5 md:ml-5 lg:mx-5" :produto="produto" />
        </swiper-slide>
      </swiper>
      <div class="w-full pr-3 md:pr-0 flex justify-end">
        <RouterLink
          :to="`/${categoria}`"
          class="btn btn-secondary lowercase text-base-100"
        >
          Ver mais {{ categoria }}
        </RouterLink>
      </div>
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
import TituloCategoria from "@/components/TituloCategoria.vue";

export default {
  components: {
    Swiper,
    SwiperSlide,
    CardProduto,
    TituloCategoria,
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
