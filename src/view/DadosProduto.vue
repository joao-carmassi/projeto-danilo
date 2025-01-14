<template>
  <section
    class="grid grid-rows-auto gap-x-6 gap-y-9 mt-10 grid-cols-5 px-10 lg:px-40 xl:px-96 bg-base-100"
  >
    <div
      class="flex flex-col-reverse md:flex-row items-start gap-5 col-span-5 md:col-span-3 place-items-center"
    >
      <!-- <div class="w-full md:w-32 gap-3 flex-row md:flex-col">
        <span class="w-full block rounded-md aspect-square bg-gray-200"></span>
        <span class="w-full block rounded-md aspect-square bg-gray-200"></span>
        <span class="w-full block rounded-md aspect-square bg-gray-200"></span>
      </div> -->
      <img
        :src="`./img/produtos/${produto.id}.png`"
        class="w-full rounded-xl object-contain border-2 border-gray-300 aspect-square"
        alt="Imagem do produto"
      />
    </div>
    <div class="flex col-span-5 md:col-span-2 flex-col gap-4">
      <p class="text-gray-500 text-lg font-semibold">
        {{
          produto.marca
            .toLowerCase()
            .replace(/\b\w/g, (char) => char.toUpperCase()) || "Marca"
        }}
      </p>
      <h2 class="text-2xl lg:text-3xl font-semibold">
        {{
          produto.nome
            .toLowerCase()
            .replace(/\b\w/g, (char) => char.toUpperCase()) || "Nome"
        }}
      </h2>
      <p class="text-gray-500 text-lg">SKU: {{ produto.sku }}</p>
      <!-- <ValorProduto
        class="text-xl text-secondary"
        v-if="produto.VALOR !== undefined"
        :valor="produto.VALOR"
      /> -->
      <div class="flex gap-1.5 h-10">
        <InputQuantitade class="h-full" @update:quantidade="attQuantidade" />
        <button
          @click="enviaProduto"
          class="flex-shrink font-montSerrat text-lg btn btn-secondary w-full min-h-0 h-full text-base-100"
        >
          Comprar
        </button>
      </div>
      <p class="text-green-500 lowercase">
        <svg
          class="inline"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          width="24"
          height="24"
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
    </div>
    <div class="col-span-5">
      <h3 class="text-2xl text-gray-600 font-semibold">Descrição:</h3>
      <p
        v-html="descricaoFormatada || 'Descrição'"
        class="text-lg text-gray-600"
      ></p>
    </div>
  </section>
</template>

<script lang="ts">
import InputQuantitade from "@/components/InputQuantitade.vue";
import type { IProduto } from "@/interface/IProdutos";
import { storeCarrinho } from "@/store/SCarrinho";
import { storeProdutos } from "@/store/SProdutos";

export default {
  components: { InputQuantitade },
  data() {
    return {
      id: this.$route.params.id as string,
      produto: {} as IProduto,
      SProdutos: storeProdutos(),
      SCarrinho: storeCarrinho(),
      inputQuantidade: 1 as number,
      quantidade: 1 as number,
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
      if (this.produto === undefined) {
        this.$router.push("/404");
      }
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
  },
  computed: {
    descricaoFormatada() {
      const descricao = this.produto.descricao || "";
      return descricao.replace(/\n/g, "<br>");
    },
  },
  created() {
    this.moveTelaTopo();
  },
};
</script>
