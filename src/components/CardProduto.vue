<template>
  <div
    class="bg-base-100 lg:hover:scale-105 duration-300 shadow-lg flex flex-col gap-2 rounded-lg p-3 md:p-4"
  >
    <RouterLink class="flex flex-col gap-2" :to="`/produtos/${produto.id}`">
      <div class="w-full aspect-square bg-base-300 rounded-md"></div>
      <h2 class="text-gray-600 text-sm md:text-base limitaTexto">
        {{ produto.nome }}
      </h2>
      <ValorProduto :valor="produto.valor" />
    </RouterLink>
    <button class="btn btn-secondary mt-1.5 text-base-100">Comprar</button>
  </div>
</template>

<script lang="ts">
import type { IProduto } from "@/interface/IProdutos";
import type { PropType } from "vue";
import ValorProduto from "./ValorProduto.vue";

export default {
  components: { ValorProduto },
  props: {
    produto: {
      type: Object as PropType<IProduto>,
      required: true,
    },
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
