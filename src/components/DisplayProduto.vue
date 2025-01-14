<template>
  <div class="absolute py-4 pb-0 shadow-md w-full bg-base-100 top-16">
    <p class="text-gray-600 px-4 pb-4">
      Resultado da pesquisa para: {{ produtoPesquisado }}
    </p>
    <div class="max-h-[70vh] overflow-auto" v-if="produtos.length">
      <RowProduto
        v-for="(produto, index) in produtos"
        :key="index"
        class="hover:bg-base-200 p-5 border-t border-gray-300"
        :produto="produto"
        @click="limpaPesquisa"
      />
    </div>
    <p class="pb-5 px-5 italic" v-else>Nenhum resultado encontrado.</p>
  </div>
</template>

<script lang="ts">
import type { IProduto } from "@/interface/IProdutos";
import { storeProdutos } from "@/store/SProdutos";
import RowProduto from "./RowProduto.vue";

export default {
  components: { RowProduto },
  props: {
    produtoPesquisado: { type: String, required: true },
  },
  data() {
    return {
      SProdutos: storeProdutos(),
      produtos: [] as IProduto[],
    };
  },
  methods: {
    async pesquisaProdutos() {
      if (this.produtoPesquisado.length > 0) {
        this.produtos = await (
          await this.SProdutos
        ).pesquisaProduto(this.produtoPesquisado);
      } else {
        this.produtos = [];
      }
    },
    limpaPesquisa() {
      this.$emit("limpaPesquisa");
    },
  },
  watch: {
    produtoPesquisado: {
      immediate: true,
      handler: "pesquisaProdutos",
    },
  },
  emits: ["limpaPesquisa"],
};
</script>
