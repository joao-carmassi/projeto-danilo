<template>
  <div
    class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-x-3 md:gap-x-7 gap-y-10"
  >
    <CardProduto
      class=""
      v-for="(produto, index) in produtos"
      :key="index"
      :produto="produto as IProduto"
    />
  </div>
</template>

<script lang="ts">
import type { IProduto } from "@/interface/IProdutos";
import CardProduto from "./CardProduto.vue";

export default {
  components: { CardProduto },
  props: {
    produtos: {
      type: Array,
      required: true,
    },
  },
};
</script>
