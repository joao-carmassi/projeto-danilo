<template>
  <section>
    <div class="hidden md:block">
      <SetaLink class="mt-5 px-10 lg:px-40 xl:px-52" :id="produto.nome" />
    </div>
    <div
      class="mt-5 md:mt-10 flex flex-col gap-5 px-10 lg:px-40 xl:px-52 bg-base-100 pb-14"
    >
      <div class="flex flex-col gap-y-10 gap-5 lg:gap-10 md:flex-row">
        <div
          class="col-span-5 flex-col-reverse gap-5 md:flex-row flex items-start md:col-span-2 place-items-center"
        >
          <div class="h-24">
            <div
              v-if="
                (produto.categoria === 'COMPRESSOR' &&
                  produto.marca === 'HITACHI') ||
                (produto.categoria === 'COMPRESSOR' &&
                  produto.marca === 'TOSHIBA')
              "
              class="flex justify-center md:flex-col gap-3"
            >
              <button
                class="rounded-md duration-200 h-24 lg:h-32 border border-gray-400 hover:border-secondary aspect-square"
                @click="trocaImage(`compressor-${produto.marca}`)"
              >
                <img
                  class="rounded-md aspect-square"
                  :src="`./img/produtos/compressor-${produto.marca}.png`"
                  alt="Imagem do produto"
                />
              </button>
              <button
                class="rounded-md duration-200 h-24 lg:h-32 border border-gray-400 hover:border-secondary aspect-square"
                @click="trocaImage(produto.id)"
              >
                <img
                  class="rounded-md aspect-square"
                  :src="`./img/produtos/${produto.id}.png`"
                  alt="Imagem do produto"
                />
              </button>
            </div>
            <div v-else class="flex justify-center md:flex-col gap-3">
              <button
                class="rounded-md duration-200 h-24 lg:h-32 border border-gray-400 hover:border-secondary aspect-square"
                @click="trocaImage(produto.id)"
              >
                <img
                  class="rounded-md aspect-square"
                  :src="`./img/produtos/${produto.id}.png`"
                  alt="Imagem do produto"
                />
              </button>
            </div>
          </div>
          <div>
            <img
              v-if="
                (produto.categoria === 'COMPRESSOR' &&
                  produto.marca === 'HITACHI') ||
                (produto.categoria === 'COMPRESSOR' &&
                  produto.marca === 'TOSHIBA')
              "
              :src="
                outraImagens || `./img/produtos/compressor-${produto.marca}.png`
              "
              class="w-[50rem] rounded-xl object-contain aspect-square"
              alt="Imagem do produto"
            />
            <img
              v-else
              :src="outraImagens || `./img/produtos/${produto.id}.png`"
              class="w-[50rem] rounded-xl object-contain aspect-square"
              alt="Imagem do produto"
            />
          </div>
        </div>
        <div class="flex col-span-5 md:col-span-2 flex-col gap-4">
          <RouterLink :to="`/marca/${produto.marca}`">
            <img
              class="w-28"
              :src="`./img/marcas/${produto.marca}.png`"
              :alt="`Logo marca ${produto.marca}`"
            />
          </RouterLink>
          <h2 class="text-2xl text-secondary lg:text-3xl font-semibold">
            {{ produto.nome || "Nome" }}
          </h2>
          <p class="text-gray-400 text-xs">SKU: {{ produto.sku }}</p>
          <p class="text-gray-400 text-xs">
            Códigos compatíveis: {{ produto.codigos.join(", ") }}
          </p>
          <p class="text-green-600 text-xs font-semibold">
            PARCELAMENTO EM ATÉ 12 VEZES
          </p>
          <p class="text-green-600 text-xs font-semibold">
            7% DE DESCONTO NO PIX
          </p>
          <div class="flex gap-1.5 h-10">
            <InputQuantitade
              class="h-full"
              @update:quantidade="attQuantidade"
            />
            <button
              @click="enviaProduto"
              class="flex-shrink font-montSerrat text-lg btn btn-secondary w-full min-h-0 h-full text-base-100"
            >
              COMPRAR
            </button>
          </div>
          <p class="text-green-600 text-xs lowercase font-semibold">
            <svg
              class="inline"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              width="20"
              height="20"
              stroke-width="1.25"
              stroke-linejoin="round"
              stroke-linecap="round"
              stroke="currentColor"
            >
              <path d="M7 17m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"></path>
              <path d="M17 17m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"></path>
              <path
                d="M5 17h-2v-11a1 1 0 0 1 1 -1h9v12m-4 0h6m4 0h2v-6h-8m0 -5h5l3 5"
              ></path>
            </svg>
            {{ produto.prazo || "Prazo" }}
          </p>
          <div class="flex-1">
            <p class="font-semibold text-green-600 mb-5">Formar de envio:</p>
            <div class="grid gap-5 grid-cols-3 place-items-center">
              <img
                class="w-32"
                src="https://cdn.awsli.com.br/1929/1929647/arquivos/correiosenvio.png"
              />
              <img
                class="w-32"
                src="https://cdn.awsli.com.br/1929/1929647/arquivos/loggienvio.png"
              />
              <img
                class="w-32"
                src="https://upload.wikimedia.org/wikipedia/commons/5/5c/Azul_Cargo_Express_logo.png"
              />
              <img
                class="w-32 col-span-full"
                src="https://upload.wikimedia.org/wikipedia/en/thumb/2/25/LATAM_Cargo_logo.svg/2560px-LATAM_Cargo_logo.svg.png"
              />
            </div>
          </div>
        </div>
      </div>
      <div class="col-span-5">
        <h3 class="text-ms text-secondary font-semibold">Descrição:</h3>
        <p
          v-html="descricaoFormatada || 'Descrição'"
          class="text-xs flex flex-col text-gray-600"
        ></p>
      </div>
      <div class="w-full col-span-full">
        <h2 class="text-2xl text-secondary font-semibold">
          Produtos Semelhantes...
        </h2>
        <div class="flex items-center mt-5 relative justify-between">
          <swiper
            :slides-per-view="2"
            :loop="true"
            class="swiper-container"
            :space-between="40"
            :breakpoints="{
              640: { slidesPerView: 2 },
              768: { slidesPerView: 3 },
              1024: { slidesPerView: 4 },
            }"
          >
            <swiper-slide
              class="my-auto"
              v-for="(produto, index) in produtosSimilares"
              :key="index"
            >
              <CardProduto class="my-5" :produto="produto" />
            </swiper-slide>
          </swiper>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import InputQuantitade from "@/components/InputQuantitade.vue";
import type { IProduto } from "@/interface/IProdutos";
import { storeCarrinho } from "@/store/SCarrinho";
import { storeProdutos } from "@/store/SProdutos";

// Import Swiper styles
import CardProduto from "@/components/CardProduto.vue";
import SetaLink from "@/components/SetaLink.vue";
import { Swiper, SwiperSlide } from "swiper/vue";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

export default {
  components: { InputQuantitade, CardProduto, SetaLink, Swiper, SwiperSlide },
  data() {
    return {
      id: this.$route.params.id as string,
      produto: {} as IProduto,
      SProdutos: storeProdutos(),
      SCarrinho: storeCarrinho(),
      inputQuantidade: 1 as number,
      quantidade: 1 as number,
      compressor: false,
      outraImagens: "",
      MITSUBISHI: false,
      produtosSimilares: [] as IProduto[],
    };
  },
  watch: {
    "$route.params.id": {
      immediate: true,
      handler() {
        this.id = this.$route.params.id as string;
        this.baixaProduto();
        this.moveTelaTopo();
      },
    },
  },
  methods: {
    async baixaProduto() {
      this.produto = (await (
        await this.SProdutos
      ).getProduto(this.id)) as IProduto;

      if (this.produto.nome.includes("COMPRESSOR")) this.compressor = true;

      if (this.produto === undefined) this.$router.push("/404");

      this.produtosSimilares = this.SProdutos.filtraPordutosPorTipo(
        this.produto.categoria,
        await this.SProdutos.getProdutos()
      );
    },
    attQuantidade(valor: number) {
      this.quantidade = valor;
    },
    enviaProduto() {
      this.SCarrinho.adicionaProduto(this.produto, this.quantidade);
      this.$router.push("/carrinho");
    },
    moveTelaTopo() {
      window.scrollTo(0, 0);
    },
    trocaImage(img: string | number) {
      this.outraImagens = `./img/produtos/${img}.png`;
    },
  },
  computed: {
    descricaoFormatada() {
      let descricao = this.produto.descricao || "";

      const negrito = [
        "Por que escolher a nossa loja?",
        "COMPATIBILIDADE GARANTIDA:",
        "prazo:",
        "ENVIO RÁPIDO E SEGURO!",
        "loja",
      ];

      negrito.forEach((texto) => {
        if (descricao.includes(texto)) {
          descricao = descricao.replace(
            texto,
            `<span class='font-semibold uppercase mt-10 text-sm text-secondary'>${texto}</span>`
          );
        }
      });

      return descricao;
    },
  },
  setup() {
    return {
      Navigation,
    };
  },
  created() {
    this.baixaProduto();
  },
};
</script>
