<template>
  <swiper
    :slides-per-view="1"
    :loop="true"
    :pagination="true"
    :navigation="true"
    :autoplay="{ delay: 7500 }"
    :modules="[Navigation, Pagination, Autoplay, EffectFade]"
    :effect="'fade'"
    :fadeEffect="{ crossFade: true }"
    class="swiper-container relative swiperMarcas swiper-marcas"
    data-teste="a"
  >
    <swiper-slide class="my-auto">
      <img
        loading="lazy"
        class="md:h-[26rem] lg:hidden w-full object-cover object-center"
        src="/img/home/mobile 2.png"
        alt="Imagem produto"
      />
      <img
        loading="lazy"
        class="hidden md:h-[26rem] lg:block object-cover object-center h-[26rem]"
        src="/img/home/web.png"
        alt="Imagem produto"
      />
    </swiper-slide>
    <swiper-slide class="my-auto">
      <img
        loading="lazy"
        class="md:h-[26rem] lg:hidden w-full object-cover object-center"
        src="/img/home/mobile 1.png"
        alt="Imagem produto"
      />
      <img
        loading="lazy"
        class="hidden md:h-[26rem] lg:block object-cover object-center h-[26rem]"
        src="/img/home/web 2.png"
        alt="Imagem produto"
      />
    </swiper-slide>
    <swiper-slide class="my-auto">
      <img
        loading="lazy"
        class="md:h-[26rem] lg:hidden w-full object-cover object-center"
        src="/img/home/mobile 3.png"
        alt="Imagem produto"
      />
      <img
        loading="lazy"
        class="hidden md:h-[26rem] lg:block object-cover object-center h-[26rem]"
        src="/img/home/web3.png"
        alt="Imagem produto"
      />
    </swiper-slide>
  </swiper>
</template>

<script lang="ts">
import { Swiper, SwiperSlide } from "swiper/vue";
import { Navigation, Pagination, Autoplay, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    return {
      Navigation,
      Pagination,
      Autoplay,
      EffectFade,
    };
  },
};
</script>

<style>
.swiper-marcas {
  --swiper-navigation-size: 25px !important;
  --swiper-navigation-top-offset: 50%;
  --swiper-navigation-sides-offset: 20px !important;
  position: relative !important;
}
</style>
