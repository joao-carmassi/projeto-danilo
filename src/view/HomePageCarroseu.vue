<template>
  <main class="bg-base-100">
    <section>
      <MenuItens />
    </section>
    <section>
      <SwiperMarcas />
      <hr class="border-secondary border-b-2" />
    </section>
    <section>
      <div class="mb-5 md:mb-10 border-b border-gray-300">
        <div
          class="hidden lg:w-10/12 mx-auto md:grid grid-cols-2 gap-y-3 lg:grid-cols-4 py-3"
        >
          <div
            class="flex justify-center items-center border-r h-full border-gray-400 w-full gap-2"
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
              <span class="block text-secondary font-semibold"
                >ESPECIALISTA TÉCNICOS</span
              >
              EM VRF
            </p>
          </div>
          <div
            class="flex justify-center items-center lg:border-r h-full border-gray-400 w-full gap-2"
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
              <span class="block text-secondary font-semibold">ENTREGAMOS</span>
              EM TODO BRASIL
            </p>
          </div>
          <hr class="lg:hidden col-span-full border-gray-400" />
          <div
            class="flex justify-center items-center border-r h-full border-gray-400 w-full gap-2"
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
              <span class="block text-secondary font-semibold"
                >7% DE DESCONTO</span
              >
              NO PIX
            </p>
          </div>
          <div
            class="flex justify-center lg:border-r border-gray-400 items-center h-full w-full gap-2"
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
              <span class="block text-secondary font-semibold"
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
            :modules="[Navigation, Autoplay]"
            class="swiper-container w-full"
          >
            <swiper-slide>
              <div class="flex justify-center items-center h-full w-full gap-2">
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
                  <span class="block text-secondary font-semibold"
                    >ESPECIALISTA TÉCNICOS</span
                  >
                  EM VRF
                </p>
              </div>
            </swiper-slide>
            <swiper-slide>
              <div
                class="flex justify-center items-center lg:border-r h-full w-full gap-2"
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
                  <span class="block text-secondary font-semibold"
                    >ENTREGAMOS</span
                  >
                  EM TODO BRASIL
                </p>
              </div></swiper-slide
            >
            <swiper-slide>
              <div class="flex justify-center items-center h-full w-full gap-2">
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
                  <span class="block text-secondary font-semibold"
                    >7% DE DESCONTO</span
                  >
                  NO PIX
                </p>
              </div></swiper-slide
            >
            <swiper-slide
              ><div
                class="flex justify-center items-center h-full w-full gap-2"
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
                  <span class="block text-secondary font-semibold"
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
        class="flex gap-3 md:gap-5 px-3 items-center flex-row md:w-11/12 lg:w-10/12 mx-auto"
      >
        <div class="md:hover:scale-105 duration-200">
          <img
            src="https://cdn.awsli.com.br/1140x850/2651/2651700/banner/minibanner1-j5cvlq8kyy.png"
            alt=""
          />
        </div>
        <div class="md:hover:scale-105 duration-200">
          <img
            src="https://cdn.awsli.com.br/1140x850/2651/2651700/banner/minibanner1-j5cvlq8kyy.png"
            alt=""
          />
        </div>
        <div class="md:hover:scale-105 duration-200">
          <img
            src="https://cdn.awsli.com.br/1140x850/2651/2651700/banner/minibanner1-j5cvlq8kyy.png"
            alt=""
          />
        </div>
      </div>
    </section>
    <hr class="my-10 border-secondary" />
    <section
      class="containerCarrosel relative"
      :class="geraPadding(index, categoria)"
      v-for="(categoria, index) in categorias"
      :key="index"
    >
      <div class="md:px-10">
        <div class="grid place-items-center pb-3 md:pb-4 pt-5 md:pt-4">
          <TituloCategoria :categoria="categoria" />
          <hr class="border-secondary border-b-2 rounded-xl w-16 mx-auto" />
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
      <hr class="mt-5 border-secondary" />
    </section>
    <section class="bg-[#d4f1fd] mt-10 py-10">
      <div class="text-center">
        <h2 class="font-semibold text-secondary text-3xl">
          Escolha pela marca
        </h2>
      </div>
      <div class="relative pt-5">
        <swiper
          :slides-per-view="2"
          :loop="true"
          :navigation="true"
          :modules="[Navigation]"
          class="swiper-container swiper-marcas w-10/12"
          :breakpoints="{
            640: { slidesPerView: 2 },
            768: { slidesPerView: 3 },
            1024: { slidesPerView: 4 },
          }"
        >
          <swiper-slide
            v-for="(marca, index) in marcas"
            :key="index"
            class="my-auto flex items-center justify-center px-5 md:px-10 lg:px-14"
          >
            <div class="md:hover:scale-110 duration-200">
              <RouterLink class="" :to="`/marca/${marca}`">
                <img
                  class="py-1"
                  :src="`./img/marcas/${marca}.png`"
                  :alt="`Logo ${marca}`"
                />
              </RouterLink>
            </div>
          </swiper-slide>
        </swiper>
      </div>
    </section>
    <section class="grid py-12 md:px-10 place-items-center">
      <a
        class="w-11/12 grid place-items-center"
        target="_blank"
        href="https://wa.me/5511969189244?text=Olá!%0AVim através do site da loja do VRF e preciso de peças."
      >
        <img
          src="/img/naoEncontrou.png"
          alt="NÃO ENCONTROU O QUE PROCURAVA? CLIQUE AQUI PARA FALAR COM UM DOS NOSSOS CONSULTORES"
        />
      </a>
    </section>

    <section
      class="px-5 bg-secondary pb-11 pt-8 md:pb-20 md:pt-14 w-full flex justify-center items-center gap-5 flex-col"
    >
      <p class="text-lg text-white">Estamos no instagram:</p>
      <a
        href="https://www.instagram.com/lojadovrf/"
        target="_blank"
        class="text-4xl md:text-5xl font-semibold text-white"
        >@lojadovrf</a
      >
    </section>
  </main>
</template>

<script lang="ts">
import { Swiper, SwiperSlide } from "swiper/vue";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

import type { IProdutos } from "@/interface/IProdutos";
import { storeProdutos } from "@/store/SProdutos";
import CardProduto from "@/components/CardProduto.vue";
import TituloCategoria from "@/components/TituloCategoria.vue";
import SwiperMarcas from "@/components/SwiperMarcas.vue";
import MenuItens from "@/components/MenuItens.vue";

export default {
  components: {
    Swiper,
    SwiperSlide,
    CardProduto,
    TituloCategoria,
    SwiperMarcas,
    MenuItens,
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
    this.categorias = await this.SProdutos.getCategorias();
    this.marcas = await this.SProdutos.getCategorias();
    window.scrollTo(0, 0);
  },
  setup() {
    return {
      Navigation,
      Autoplay,
    };
  },
  methods: {
    geraPadding(index: number, categoria: string) {
      if (index == 0) return "pr-0";
      if (categoria == "MITSUBISHI") return "hidden";
      return "pt-5 md:pt-7 ";
    },
    eMitsubushi(categoria: string) {
      return categoria !== "MITSUBISHI";
    },
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
