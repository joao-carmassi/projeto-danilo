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
    class="swiper-container relative swiperMarcas"
    data-teste="a"
  >
    <swiper-slide class="my-auto">
      <img
        class="h-64 md:h-[26rem] lg:hidden w-full object-cover object-center"
        src="https://cdn.awsli.com.br/1920x1920/2651/2651700/banner/fullbanner2mobile-geyf9qthbl.png"
        alt="Imagem produto"
      />
      <img
        class="hidden md:h-[26rem] lg:block object-cover object-center h-[26rem]"
        src="/img/home/homeCarrosel.jpg"
        alt="Imagem produto"
      />
    </swiper-slide>
    <swiper-slide class="my-auto">
      <img
        class="h-64 md:h-[26rem] lg:hidden w-full object-cover object-center"
        src="https://cdn.awsli.com.br/1920x1920/2651/2651700/banner/fullbanner1mobile---placas-eletr-nicas-chiller-brasil-xq8cs6nktw.png"
        alt="Imagem produto"
      />
      <img
        class="hidden md:h-[26rem] lg:block object-cover object-center h-[26rem]"
        src="https://cdn.awsli.com.br/1920x1920/2651/2651700/banner/fullbanner1---placas-eletr-nicas-chiller-brasil-rjsipvl1fj.png"
        alt="Imagem produto"
      />
    </swiper-slide>
    <swiper-slide class="my-auto">
      <img
        class="h-64 md:h-[26rem] lg:hidden w-full object-cover object-center"
        src="https://cdn.awsli.com.br/1920x1920/2651/2651700/banner/fullbanner2mobile---uni-refrigeracao-chillerbrasil-rlf8ad0367.png"
        alt="Imagem produto"
      />
      <img
        class="hidden md:h-[26rem] lg:block object-cover object-center h-[26rem]"
        src="https://cdn.awsli.com.br/1920x1920/2651/2651700/banner/fullbanner2---uni-refrigeracao-chillerbrasil--1--y7i3rfb4f1.png"
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

<style scoped>
.swiper-container {
  --swiper-navigation-size: 25px !important;
  --swiper-navigation-top-offset: 50%;
  --swiper-navigation-sides-offset: 20px !important;
  position: relative !important;
}
</style>
