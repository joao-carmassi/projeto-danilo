<template>
  <p v-if="valor" class="font-semibold text-secondary">
    {{
      valor.toLocaleString("pt-BR", {
        style: "currency",
        currency: "BRL",
      })
    }}
  </p>
</template>

<script lang="ts">
export default {
  props: {
    valor: { type: Number || undefined, required: true },
  },
};
</script>
