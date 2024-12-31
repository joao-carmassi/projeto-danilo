<template>
  <div class="bg-base-100 shadow-lg flex flex-col gap-2 rounded-lg p-4">
    <div class="w-full aspect-square bg-base-300 rounded-md"></div>
    <h2 class="text-gray-600 limitaTexto">{{ produto.nome }}</h2>
    <p v-if="produto.valor" class="font-semibold text-secondary">
      {{
        produto.valor.toLocaleString("pt-BR", {
          style: "currency",
          currency: "BRL",
        })
      }}
    </p>
    <button class="btn btn-secondary mt-1.5 text-base-100">Comprar</button>
  </div>
</template>

<script lang="ts">
import type { IProduto } from "@/interface/IProdutos";
import type { PropType } from "vue";

export default {
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
