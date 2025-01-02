<template>
  <section
    class="grid grid-rows-auto grid-cols-5 gap-8 gap-y-10 px-10 lg:mx-52 mt-10"
  >
    <div
      class="flex flex-col-reverse md:flex-row items-start gap-5 col-span-5 md:col-span-3 place-items-center"
    >
      <div class="flex w-full md:w-32 gap-3 flex-row md:flex-col">
        <span class="w-full block rounded-md aspect-square bg-gray-200"></span>
        <span class="w-full block rounded-md aspect-square bg-gray-200"></span>
        <span class="w-full block rounded-md aspect-square bg-gray-200"></span>
      </div>
      <span class="w-full rounded-xl bg-gray-200 aspect-square"></span>
    </div>
    <div class="flex col-span-5 md:col-span-2 flex-col gap-3">
      <p class="text-gray-500 font-semibold">{{ produto.marca }}</p>
      <h2 class="text-2xl lg:text-3xl font-semibold">{{ produto.nome }}</h2>
      <ValorProduto class="text-xl" :valor="produto.valor" />
      <div class="flex gap-1.5 h-10">
        <InputQuantitade class="h-full" @update:quantidade="attQuantidade" />
        <button
          class="flex-shrink font-montSerrat text-lg btn btn-secondary w-full min-h-0 h-full text-base-100"
        >
          Comprar
        </button>
      </div>
    </div>
    <div class="flex flex-col gap-3 col-span-5">
      <h3 class="text-xl text-gray-600 font-semibold">Descrição:</h3>
      <p v-html="descricaoFormatada" class="text-gray-600"></p>
    </div>
  </section>
</template>

<script lang="ts">
import InputQuantitade from "@/components/InputQuantitade.vue";
import ValorProduto from "@/components/ValorProduto.vue";
import type { IProduto } from "@/interface/IProdutos";
import { storeProdutos } from "@/store/SProdutos";

export default {
  components: { ValorProduto, InputQuantitade },
  data() {
    return {
      id: this.$route.params.id as string,
      produto: {} as IProduto,
      SProdutos: storeProdutos(),
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
      },
    },
  },
  methods: {
    async baixaProduto() {
      this.produto = (await (
        await this.SProdutos
      ).getProduto(this.id)) as IProduto;
    },
    attQuantidade(valor: number) {
      this.quantidade = valor;
    },
  },
  computed: {
    descricaoFormatada() {
      const descricao = this.produto.descricao || "";
      return descricao.replace(/\n/g, "<br>");
    },
  },
  created() {
    window.scrollTo(0, 0);
  },
};
</script>
