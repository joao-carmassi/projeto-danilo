<template>
  <main class="bg-base-100">
    <!-- <section>
      <MenuItens />
    </section> -->
    <section>
      <SwiperMarcas />
      <hr class="border-b-2 border-secondary hidden md:block" />
    </section>
    <section>
      <div class="border-b border-gray-300 md:mb-10">
        <div
          class="grid-cols-2 gap-y-3 hidden lg:grid-cols-4 lg:w-10/12 md:grid mx-auto py-3"
        >
          <div
            class="flex border-gray-400 border-r h-full justify-center w-full gap-2 items-center"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              width="45"
              height="45"
              stroke-width="1.5"
              class="text-secondary"
            >
              <path
                d="M12 3a12 12 0 0 0 8.5 3a12 12 0 0 1 -8.5 15a12 12 0 0 1 -8.5 -15a12 12 0 0 0 8.5 -3"
              ></path>
            </svg>
            <p>
              <span class="text-secondary block font-semibold"
                >ESPECIALISTAS TÉCNICOS</span
              >
              EM VRF
            </p>
          </div>
          <div
            class="flex border-gray-400 h-full justify-center w-full gap-2 items-center lg:border-r"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              width="45"
              height="45"
              stroke-width="1.5"
              class="text-secondary"
            >
              <path d="M7 17m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"></path>
              <path d="M17 17m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"></path>
              <path
                d="M5 17h-2v-11a1 1 0 0 1 1 -1h9v12m-4 0h6m4 0h2v-6h-8m0 -5h5l3 5"
              ></path>
            </svg>
            <p>
              <span class="text-secondary block font-semibold">ENTREGAMOS</span>
              EM TODO BRASIL
            </p>
          </div>
          <hr class="col-span-full border-gray-400 lg:hidden" />
          <div
            class="flex border-gray-400 border-r h-full justify-center w-full gap-2 items-center"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              width="40"
              height="40"
              viewBox="0,0,256,256"
            >
              <g
                fill="#080069"
                fill-rule="nonzero"
                stroke="none"
                stroke-width="1"
                stroke-linecap="butt"
                stroke-linejoin="miter"
                stroke-miterlimit="10"
                stroke-dasharray=""
                stroke-dashoffset="0"
                font-family="none"
                font-weight="none"
                font-size="none"
                text-anchor="none"
                style="mix-blend-mode: normal"
              >
                <g transform="scale(8.53333,8.53333)">
                  <path
                    d="M15,1.09961c-1.025,0 -2.05008,0.38992 -2.83008,1.16992l-4.98047,4.98047h0.15039c1.27,0 2.45938,0.49062 3.35938,1.39063l3.49023,3.49023c0.45,0.44 1.17109,0.44 1.62109,0l3.49023,-3.49023c0.9,-0.9 2.08938,-1.39062 3.35938,-1.39062h0.15039l-4.98047,-4.98047c-0.78,-0.78 -1.80508,-1.16992 -2.83008,-1.16992zM5.68945,8.75l-3.41992,3.41992c-1.56,1.56 -1.56,4.10016 0,5.66016l3.41992,3.41992h1.65039c0.87,0 1.69078,-0.33922 2.30078,-0.94922l3.49023,-3.49023c1.03,-1.03 2.70828,-1.03 3.73828,0l3.49023,3.49023c0.61,0.61 1.43078,0.94922 2.30078,0.94922h1.65039l3.41992,-3.41992c1.56,-1.56 1.56,-4.10016 0,-5.66016l-3.41992,-3.41992h-1.65039c-0.87,0 -1.69078,0.33922 -2.30078,0.94922l-3.49023,3.49023c-0.51,0.51 -1.18914,0.77149 -1.86914,0.77149c-0.68,0 -1.35914,-0.26149 -1.86914,-0.77149l-3.49023,-3.49023c-0.61,-0.61 -1.43078,-0.94922 -2.30078,-0.94922zM15,17.53906c-0.2925,0 -0.58555,0.11008 -0.81055,0.33008l-3.49023,3.49023c-0.9,0.9 -2.08938,1.39063 -3.35938,1.39063h-0.15039l4.98047,4.98047c1.56,1.56 4.10016,1.56 5.66016,0l4.98047,-4.98047h-0.15039c-1.27,0 -2.45938,-0.49063 -3.35937,-1.39062l-3.49023,-3.49023c-0.225,-0.22 -0.51805,-0.33008 -0.81055,-0.33008z"
                  ></path>
                </g>
              </g>
            </svg>
            <p>
              <span class="text-secondary block font-semibold"
                >7% DE DESCONTO</span
              >
              NO PIX
            </p>
          </div>
          <div
            class="flex border-gray-400 h-full justify-center w-full gap-2 items-center"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              width="45"
              height="45"
              stroke-width="1.5"
              class="text-secondary"
            >
              <path
                d="M3 5m0 3a3 3 0 0 1 3 -3h12a3 3 0 0 1 3 3v8a3 3 0 0 1 -3 3h-12a3 3 0 0 1 -3 -3z"
              ></path>
              <path d="M3 10l18 0"></path>
              <path d="M7 15l.01 0"></path>
              <path d="M11 15l2 0"></path>
            </svg>
            <p>
              <span class="text-secondary block font-semibold"
                >PARCELAMOS EM 12X</span
              >
              NO CARTÃO DE CRÉDITO
            </p>
          </div>
        </div>
        <div class="md:hidden py-5">
          <swiper
            :slides-per-view="1"
            :loop="true"
            :autoplay="{ delay: 3000 }"
            :modules="[Navigation, Autoplay, Virtual]"
            class="w-full swiper-container"
          >
            <swiper-slide>
              <div class="flex h-full justify-center w-full gap-2 items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  width="45"
                  height="45"
                  stroke-width="1.5"
                  class="text-secondary"
                >
                  <path
                    d="M12 3a12 12 0 0 0 8.5 3a12 12 0 0 1 -8.5 15a12 12 0 0 1 -8.5 -15a12 12 0 0 0 8.5 -3"
                  ></path>
                </svg>
                <p>
                  <span class="text-secondary block font-semibold"
                    >ESPECIALISTA TÉCNICOS</span
                  >
                  EM VRF
                </p>
              </div>
            </swiper-slide>
            <swiper-slide>
              <div
                class="flex h-full justify-center w-full gap-2 items-center lg:border-r"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  width="45"
                  height="45"
                  stroke-width="1.5"
                  class="text-secondary"
                >
                  <path d="M7 17m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"></path>
                  <path d="M17 17m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"></path>
                  <path
                    d="M5 17h-2v-11a1 1 0 0 1 1 -1h9v12m-4 0h6m4 0h2v-6h-8m0 -5h5l3 5"
                  ></path>
                </svg>
                <p>
                  <span class="text-secondary block font-semibold"
                    >ENTREGAMOS</span
                  >
                  EM TODO BRASIL
                </p>
              </div></swiper-slide
            >
            <swiper-slide>
              <div class="flex h-full justify-center w-full gap-2 items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  x="0px"
                  y="0px"
                  width="40"
                  height="40"
                  viewBox="0,0,256,256"
                >
                  <g
                    fill="#080069"
                    fill-rule="nonzero"
                    stroke="none"
                    stroke-width="1"
                    stroke-linecap="butt"
                    stroke-linejoin="miter"
                    stroke-miterlimit="10"
                    stroke-dasharray=""
                    stroke-dashoffset="0"
                    font-family="none"
                    font-weight="none"
                    font-size="none"
                    text-anchor="none"
                    style="mix-blend-mode: normal"
                  >
                    <g transform="scale(8.53333,8.53333)">
                      <path
                        d="M15,1.09961c-1.025,0 -2.05008,0.38992 -2.83008,1.16992l-4.98047,4.98047h0.15039c1.27,0 2.45938,0.49062 3.35938,1.39063l3.49023,3.49023c0.45,0.44 1.17109,0.44 1.62109,0l3.49023,-3.49023c0.9,-0.9 2.08938,-1.39062 3.35938,-1.39062h0.15039l-4.98047,-4.98047c-0.78,-0.78 -1.80508,-1.16992 -2.83008,-1.16992zM5.68945,8.75l-3.41992,3.41992c-1.56,1.56 -1.56,4.10016 0,5.66016l3.41992,3.41992h1.65039c0.87,0 1.69078,-0.33922 2.30078,-0.94922l3.49023,-3.49023c1.03,-1.03 2.70828,-1.03 3.73828,0l3.49023,3.49023c0.61,0.61 1.43078,0.94922 2.30078,0.94922h1.65039l3.41992,-3.41992c1.56,-1.56 1.56,-4.10016 0,-5.66016l-3.41992,-3.41992h-1.65039c-0.87,0 -1.69078,0.33922 -2.30078,0.94922l-3.49023,3.49023c-0.51,0.51 -1.18914,0.77149 -1.86914,0.77149c-0.68,0 -1.35914,-0.26149 -1.86914,-0.77149l-3.49023,-3.49023c-0.61,-0.61 -1.43078,-0.94922 -2.30078,-0.94922zM15,17.53906c-0.2925,0 -0.58555,0.11008 -0.81055,0.33008l-3.49023,3.49023c-0.9,0.9 -2.08938,1.39063 -3.35938,1.39063h-0.15039l4.98047,4.98047c1.56,1.56 4.10016,1.56 5.66016,0l4.98047,-4.98047h-0.15039c-1.27,0 -2.45938,-0.49063 -3.35937,-1.39062l-3.49023,-3.49023c-0.225,-0.22 -0.51805,-0.33008 -0.81055,-0.33008z"
                      ></path>
                    </g>
                  </g>
                </svg>
                <p>
                  <span class="text-secondary block font-semibold"
                    >7% DE DESCONTO</span
                  >
                  NO PIX
                </p>
              </div></swiper-slide
            >
            <swiper-slide
              ><div
                class="flex h-full justify-center w-full gap-2 items-center"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  width="45"
                  height="45"
                  stroke-width="1.5"
                  class="text-secondary"
                >
                  <path
                    d="M3 5m0 3a3 3 0 0 1 3 -3h12a3 3 0 0 1 3 3v8a3 3 0 0 1 -3 3h-12a3 3 0 0 1 -3 -3z"
                  ></path>
                  <path d="M3 10l18 0"></path>
                  <path d="M7 15l.01 0"></path>
                  <path d="M11 15l2 0"></path>
                </svg>
                <p>
                  <span class="text-secondary block font-semibold"
                    >PARCELAMOS EM 12X</span
                  >
                  NO CARTÃO DE CRÉDITO
                </p>
              </div></swiper-slide
            >
          </swiper>
        </div>
      </div>
      <div
        class="flex flex-row items-center lg:w-10/12 md:gap-5 md:w-11/12 mx-auto px-0"
      >
        <RouterLink
          to="/produtos/DIAGNÓSTICO"
          class="duration-200 md:hover:scale-105"
        >
          <img src="/img/home/MINI BANNER 1.webp" />
        </RouterLink>
        <a
          target="_blank"
          href="https://wa.me/5511969189244?text=Olá!%0AVim através do site da loja do VRF e preciso de peças."
          class="duration-200 md:hover:scale-105"
        >
          <img src="/img/home/MINI BANNER 2.webp" />
        </a>
        <RouterLink to="/manuais" class="duration-200 md:hover:scale-105">
          <img src="/img/home/MINI BANNER 3.webp" />
        </RouterLink>
      </div>
    </section>
    <section
      class="containerCarrosel relative"
      v-for="(categoria, index) in categorias"
      :key="index"
    >
      <hr class="border-secondary block md:hidden" />
      <div
        class="rounded-lg lg:w-10/12 md:bg-[#d4f1fd] md:my-16 md:px-0 md:relative md:w-11/12 mx-auto px-5"
      >
        <div class="grid md:pb-4 md:pt-5 pb-3 place-items-center pt-5">
          <TituloCategoria :categoria="categoria" />
          <hr class="border-b-2 border-secondary rounded-xl w-16 mx-auto" />
        </div>
        <swiper
          :slides-per-view="2"
          :loop="true"
          :navigation="true"
          :modules="[Navigation, Virtual]"
          class="lg:w-10/12 md:w-11/12 swiper-container"
          :space-between="40"
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
            :virtualIndex="index"
          >
            <CardProduto class="my-5" :produto="produto" />
          </swiper-slide>
        </swiper>
      </div>
    </section>
    <section>
      <div
        class="bg-[#d4f1fd] lg:w-10/12 md:mt-10 md:rounded-lg md:w-11/12 mx-auto py-10"
      >
        <div class="text-center">
          <h2 class="text-3xl text-secondary font-semibold">
            Escolha pela marca
          </h2>
        </div>
        <div class="w-10/12 md:w-full mx-auto pt-5 relative">
          <swiper
            :slides-per-view="2"
            :loop="true"
            :navigation="true"
            :modules="[Navigation, Virtual]"
            :virtual="true"
            class="w-10/12 swiper-container swiper-marcas"
            :breakpoints="{
              640: { slidesPerView: 2 },
              768: { slidesPerView: 3 },
              1024: { slidesPerView: 4 },
            }"
          >
            <swiper-slide
              v-for="(marca, index) in marcas"
              :key="index"
              class="my-auto"
              :virtualIndex="index"
            >
              <div
                class="flex justify-center duration-200 items-center md:hover:scale-105 py-2"
              >
                <RouterLink
                  class="bg-white rounded-full shadow-md w-8/12 aspect-square relative"
                  :to="`/marca/${marca}`"
                >
                  <img
                    loading="lazy"
                    class="w-10/12 -translate-y-1/2 absolute right-1/2 top-1/2 translate-x-1/2"
                    :src="`./img/marcas/${marca}.webp`"
                    :alt="`Logo ${marca}`"
                  />
                </RouterLink>
              </div>
            </swiper-slide>
          </swiper>
        </div>
      </div>
    </section>
    <section class="grid place-items-center">
      <a
        class="grid w-full lg:w-10/12 md:my-16 md:w-11/12 mx-auto place-items-center"
        target="_blank"
        href="https://wa.me/5511969189244?text=Olá!%0AVim através do site da loja do VRF e preciso de peças."
      >
        <picture class="w-full">
          <source media="(min-width: 768px)" srcset="/img/home/final.webp" />
          <source media="(max-width: 767px)" srcset="/img/home/mobile4.webp" />
          <img
            loading="lazy"
            class="w-full md:rounded-lg"
            src="/img/home/mobile4.webp"
            alt="NÃO ENCONTROU O QUE PROCURAVA? CLIQUE AQUI PARA FALAR COM UM DOS NOSSOS CONSULTORES"
          />
        </picture>
      </a>
    </section>

    <section
      class="flex flex-col justify-center w-full gap-5 items-center md:pb-16"
    >
      <div
        class="flex flex-col bg-secondary justify-center w-full items-center lg:w-10/12 md:py-20 md:rounded-lg md:w-11/12 mx-auto py-14"
      >
        <p class="text-lg text-white">Estamos no instagram:</p>
        <a
          href="https://www.instagram.com/lojadovrf/"
          target="_blank"
          class="text-4xl text-white font-semibold md:text-5xl"
          >@lojadovrf</a
        >
      </div>
    </section>
  </main>
</template>

<script lang="ts">
import { Swiper, SwiperSlide } from "swiper/vue";
import { Autoplay, Navigation, Virtual } from "swiper/modules";
import CardProduto from "@/components/CardProduto.vue";
import "swiper/css";
import "swiper/css/navigation";

import SwiperMarcas from "@/components/SwiperMarcas.vue";
import type { IProdutos } from "@/interface/IProdutos";
import { storeProdutos } from "@/store/SProdutos";
import TituloCategoria from "@/components/TituloCategoria.vue";

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
      MITSUBISHI: false,
      marcas: [] as string[],
    };
  },
  async created() {
    this.produtos = await this.SProdutos.getProdutos();
    this.categorias = await this.SProdutos.getMarcas();
    this.categorias = this.categorias.filter(
      (item) => item === "MIDEA" || item === "TOSHIBA" || item === "HITACHI"
    );
    this.marcas = await this.SProdutos.getMarcas();
    window.scrollTo(0, 0);
  },
  setup() {
    return {
      Navigation,
      Autoplay,
      Virtual,
    };
  },
};
</script>

<style>
.swiper-marcas {
  --swiper-navigation-size: 25px !important;
  --swiper-navigation-top-offset: 50%;
  --swiper-navigation-sides-offset: 0px !important;
  position: relative !important;
}

.swiperNav {
  --swiper-navigation-size: 35px !important;
  --swiper-navigation-sides-offset: 0px !important;
}

.swiperPaginaProduto {
  --swiper-navigation-size: 35px !important;
  --swiper-navigation-sides-offset: 0px !important;
}

.swiper-container {
  --swiper-navigation-size: 50px;
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
  .swiper-container {
    --swiper-navigation-size: 40px;
    --swiper-navigation-sides-offset: 3px;
  }
}
</style>
