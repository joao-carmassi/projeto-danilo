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
    class="relative swiper-container swiper-marcas swiperMarcas"
    data-teste="a"
  >
    <swiper-slide class="my-auto">
      <picture>
        <source media="(min-width: 1024px)" srcset="/img/home/web.webp" />
        <source media="(min-width: 768px)" srcset="/img/home/mobile2.webp" />
        <img
          loading="lazy"
          class="w-full md:h-[26rem] object-center object-cover"
          src="/img/home/mobile2.webp"
          alt="Imagem produto"
        />
      </picture>
    </swiper-slide>
    <swiper-slide class="my-auto">
      <picture>
        <source media="(min-width: 1024px)" srcset="/img/home/web2.webp" />
        <source media="(min-width: 768px)" srcset="/img/home/mobile1.webp" />
        <img
          loading="lazy"
          class="w-full md:h-[26rem] object-center object-cover"
          src="/img/home/mobile1.webp"
          alt="Imagem produto"
        />
      </picture>
    </swiper-slide>
    <swiper-slide class="my-auto">
      <picture>
        <source media="(min-width: 1024px)" srcset="/img/home/web3.webp" />
        <source media="(min-width: 768px)" srcset="/img/home/mobile3.webp" />
        <img
          loading="lazy"
          class="w-full md:h-[26rem] object-center object-cover"
          src="/img/home/mobile3.webp"
          alt="Imagem produto"
        />
      </picture>
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
