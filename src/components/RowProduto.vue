<template>
  <RouterLink
    :to="`/produto/${produto.id}`"
    class="flex items-center gap-3"
    :class="classes"
  >
    <img
      :src="`./img/produtos/${produto.id}.png`"
      alt="Imagem do produto"
      class="block object-contain aspect-square border border-gray-300 rounded-sm"
      :class="img"
    />
    <div>
      <h2 class="break-all text-secondary font-semibold">
        {{ produto.nome }}
      </h2>
      <p class="text-gray-600" :class="codigos">
        {{ produto.codigos.join(", ") }}
      </p>
    </div>
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
    img: {
      type: String,
    },
    codigos: {
      type: String,
    },
  },
};
</script>
