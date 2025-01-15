<template>
  <div class="absolute shadow-md w-full bg-base-100 top-16">
    <!-- <p class="text-gray-600 px-4 pb-4">
      Resultado da pesquisa para: {{ produtoPesquisado }}
    </p> -->
    <div class="max-h-[45vh] overflow-auto" v-if="produtos.length">
      <RowProduto
        v-for="(produto, index) in produtos"
        :key="index"
        class="hover:bg-base-200 p-1.5 border-b border-gray-300"
        :produto="produto"
        :classes="'min-h-11 text-xs'"
        :img="'h-10'"
        :codigos="'text-[0.6rem]'"
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

<style scoped>
/* ===== Scrollbar CSS ===== */
/* Firefox */
* {
  scrollbar-width: auto;
  scrollbar-color: #080069 #ffffff;
}

/* Chrome, Edge, and Safari */
*::-webkit-scrollbar {
  width: 16px;
}

*::-webkit-scrollbar-track {
  background: #ffffff;
}

*::-webkit-scrollbar-thumb {
  background-color: #080069;
  border-radius: 10px;
  border: 3px solid #ffffff;
}
</style>
