<template>
  <div
    id="animacaoScroll"
    class="bg-base-100 group relative border border-gray-200 lg:hover:scale-105 duration-300 shadow-lg [--tw-shadow-color:rgba(17, 17, 17, 0.9)] flex flex-col gap-2 rounded-lg p-3 md:p-4"
  >
    <RouterLink class="flex flex-col gap-2" :to="`/produto/${produto.id}`">
      <!-- <img
        v-if="testeECompressor"
        :src="`./img/produtos/compressor-${produto.marca}.png`"
        class="w-full object-contain border border-secondary border-solid aspect-square rounded-md"
        alt="Imagem do produto"
        loading="lazy"
      /> -->
      <img
        v-if="
          (produto.categoria === 'COMPRESSOR' && produto.marca === 'HITACHI') ||
          (produto.categoria === 'COMPRESSOR' && produto.marca === 'TOSHIBA')
        "
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
      <RouterLink :to="`/marca/${produto.marca}`">
        <img
          class="w-12 mt-1.5"
          :src="`./img/marcas/${produto.marca}.png`"
          :alt="`Logo ${produto.marca}`"
          loading="lazy"
        />
      </RouterLink>
      <div>
        <h2
          class="text-secondary limitaTexto2Linhas font-semibold text-sm md:text-base"
        >
          {{ produto.nome }}
        </h2>
        <p class="text-xs limitaTexto text-gray-500">SKU: {{ produto.sku }}</p>
        <p class="text-xs limitaTexto text-gray-500">
          {{ produto.codigos.join(", ") }}
        </p>
      </div>
    </RouterLink>
    <button
      @click="adicionarAoCarrinho"
      class="bg-secondary hidden font-semibold md:group-hover:block p-2 px-4 top-1/2 rounded-md active:scale-90 duration-200 absolute right-1/2 translate-x-1/2 translate-y-1/2 mt-1.5 text-base-100"
    >
      Comprar
    </button>
    <!-- <button
      @click="adicionarAoCarrinho"
      class="btn btn-secondary mt-1.5 text-base-100"
    >
      Comprar
    </button> -->
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
  computed: {
    testeECompressor() {
      return this.produto.nome.includes("COMPRESSOR");
    },
  },
};
</script>

<style>
.limitaTexto {
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  line-clamp: 1;
  -webkit-box-orient: vertical;
}
.limitaTexto2Linhas {
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  line-clamp: 2;
  -webkit-box-orient: vertical;
}
</style>
