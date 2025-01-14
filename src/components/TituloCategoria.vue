<template>
  <h2 class="capitalize text-2xl font-montSerrat md:text-3xl">
    {{
      categoria
        .replace(/-/g, " ")
        .toLowerCase()
        .replace(/\b\w/g, (char) => char.toUpperCase())
    }}
  </h2>
</template>

<script lang="ts">
export default {
  props: {
    categoria: { type: String, required: true },
  },
};
</script>
