<template>
  <div
    id="animacaoScroll"
    class="bg-base-100 border border-gray-200 lg:hover:scale-105 duration-300 shadow-lg shadow-gray-300 flex flex-col gap-2 rounded-lg p-3 md:p-4"
  >
    <RouterLink class="flex flex-col gap-2" :to="`/produto/${produto.id}`">
      <img
        v-if="compressor"
        :src="`./img/produtos/compressor-${produto.marca}.png`"
        class="w-full object-contain border border-secondary border-solid aspect-square rounded-md"
        alt="Imagem do produto"
        loading="lazy"
      />
      <img
        v-else
        :src="`./img/produtos/${produto.id}.png`"
        class="w-full object-contain border border-secondary border-solid aspect-square rounded-md"
        alt="Imagem do produto"
        loading="lazy"
      />
      <!-- <p class="text-secondary mt-2 text-sm font-semibold">
        {{ produto.marca }}
      </p> -->
      <img
        class="w-12 mt-1.5"
        :src="`./img/marcas/${produto.marca}.png`"
        :alt="`Logo ${produto.marca}`"
      />
      <h2 class="text-secondary text-sm md:text-base limitaTexto">
        {{ produto.nome }}
      </h2>
      <!-- <ValorProduto class="text-secondary" :valor="produto.VALOR" /> -->
    </RouterLink>
    <button
      @click="adicionarAoCarrinho"
      class="btn btn-secondary mt-1.5 text-base-100"
    >
      Comprar
    </button>
  </div>
</template>

<script lang="ts">
import type { IProduto } from "@/interface/IProdutos";
import type { PropType } from "vue";
import { storeCarrinho } from "@/store/SCarrinho";
import NotificacaoController from "@/controller/NotificacaoController";

export default {
  props: {
    produto: {
      type: Object as PropType<IProduto>,
      required: true,
    },
  },
  data() {
    return {
      SCarrinho: storeCarrinho(),
      CNotificacao: new NotificacaoController(),
      compressor: false,
    };
  },
  methods: {
    async adicionarAoCarrinho() {
      this.SCarrinho.adicionaProduto(this.produto);
      this.CNotificacao.geraNotificacao();
    },
  },
  mounted() {
    if (this.produto.nome.includes("COMPRESSOR")) this.compressor = true;
  },
};
</script>

<style scoped>
.limitaTexto {
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  line-clamp: 2;
  -webkit-box-orient: vertical;
}
</style>
