<template>
  <RouterLink :to="`/produtos/${produto.id}`" class="flex items-center gap-3">
    <img
      :src="`./img/produtos/${produto.id}.png`"
      alt="Imagem do produto"
      class="block object-contain aspect-square h-16 border border-gray-300 rounded-sm"
    />
    <h2 class="text-lg break-all">
      {{
        produto.nome
          .toLowerCase()
          .replace(/\b\w/g, (char) => char.toUpperCase())
          .toLowerCase()
          .replace(/\b\w/g, (char) => char.toUpperCase())
      }}
    </h2>
  </RouterLink>
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
