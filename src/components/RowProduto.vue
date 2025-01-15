<template>
  <RouterLink
    :to="`/produtos/${produto.id}`"
    class="flex items-center gap-3"
    :class="classes"
  >
    <img
      :src="`./img/produtos/${produto.id}.png`"
      alt="Imagem do produto"
      class="block object-contain aspect-square h-full border border-gray-300 rounded-sm"
    />
    <h2 class="break-all">
      {{ produto.nome }}
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
    classes: {
      type: String,
    },
  },
};
</script>
