<template>
  <section
    class="grid grid-rows-auto gap-x-6 gap-y-9 mt-10 grid-cols-5 px-10 lg:px-40 xl:px-56 bg-base-100 pb-14"
  >
    <div
      class="flex flex-col-reverse md:flex-row items-start gap-3 col-span-5 md:col-span-3 place-items-center"
    >
      <div
        class="flex justify-center mx-auto md:mx-0 items-center gap-3 md:flex-col h-24 md:w-32 md:h-auto"
      >
        <button
          class="rounded-md duration-200 h-full md:w-full border border-gray-400 hover:border-secondary aspect-square"
          @click="trocaImage(produto.id)"
        >
          <img
            class="rounded-md aspect-square"
            :src="`./img/produtos/${produto.id}.png`"
            alt="Imagem do produto"
          />
        </button>
        <button
          class="rounded-md duration-200 h-full md:w-full border border-gray-400 hover:border-secondary aspect-square"
          @click="trocaImage(`compressor-${produto.marca}`)"
        >
          <img
            class="rounded-md aspect-square"
            :src="`./img/produtos/compressor-${produto.marca}.png`"
            alt="Imagem do produto"
          />
        </button>
      </div>
      <img
        :src="outraImagens || `./img/produtos/${produto.id}.png`"
        class="w-full md:w-[80%] rounded-xl object-contain aspect-square"
        alt="Imagem do produto"
      />
    </div>
    <div class="flex col-span-5 md:col-span-2 flex-col gap-4">
      <SetaLink class="text-gray-500 text-xs" :id="`${produto.categoria}`" />
      <img
        class="w-28"
        :src="`./img/marcas/${produto.marca}.png`"
        :alt="`Logo marca ${produto.marca}`"
      />
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
      <p class="text-green-600 text-xs font-semibold">7% DE DESCONTO NO PIX</p>

      <div class="flex gap-1.5 h-10">
        <InputQuantitade
          class="h-full"
          :quantidade="quantidadeInput"
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
        <div class="grid gap-y-5 grid-cols-3 place-items-center">
          <img
            src="https://cdn.awsli.com.br/1929/1929647/arquivos/correiosenvio.png"
          />
          <img
            src="https://cdn.awsli.com.br/1929/1929647/arquivos/kanguenvio.png"
          />
          <img
            src="https://cdn.awsli.com.br/1929/1929647/arquivos/jadlogenvio.png"
          />
          <img
            src="https://cdn.awsli.com.br/1929/1929647/arquivos/transportadoraenvio.png"
          />
          <img
            src="https://cdn.awsli.com.br/1929/1929647/arquivos/loggienvio.png"
          />
          <img
            src="https://cdn.awsli.com.br/1929/1929647/arquivos/agendamentoenvio.png"
          />
        </div>
      </div>
    </div>
    <div class="col-span-5">
      <h3 class="text-ms text-secondary font-semibold">Descrição:</h3>
      <p
        v-html="descricaoFormatada || 'Descrição'"
        class="text-xs leading-5 text-gray-600"
      ></p>
    </div>
    <div class="w-full col-span-full">
      <h2 class="text-2xl text-secondary font-semibold">
        Produtos Semelhantes...
      </h2>
      <div class="flex items-center mt-5 gap-8 justify-between">
        <CardProduto
          class="flex-1"
          v-for="(produto, index) in produtosSimilares"
          :key="index"
          :produto="produto"
        ></CardProduto>
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

export default {
  components: { InputQuantitade, CardProduto, SetaLink },
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
      quantidadeInput: 0,
    };
  },
  watch: {
    "$route.params.id": {
      immediate: true,
      handler() {
        this.id = this.$route.params.id as string;
        this.baixaProduto();
        this.moveTelaTopo();
        this.quantidadeInput = 0;
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

      this.produtosSimilares = this.produtosSimilares
        .sort(() => Math.random() - 0.5)
        .slice(0, 4);
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
        "PRAZO DE ENTREGA:",
        "ENVIO RÁPIDO E SEGURO!",
        "loja",
      ];

      negrito.forEach((texto) => {
        if (descricao.includes(texto)) {
          descricao = descricao.replace(
            texto,
            `<span class='font-semibold pb-20 text-sm text-secondary'>${texto}</span>`
          );
        }
      });
      return descricao.replace(/\n/g, "<br>");
    },
  },
};
</script>
