<template>
  <RouterLink :to="`/marca/${categoria}`">
    <img
      class="w-36 md:w-56 mix-blend-multiply my-2"
      :src="`./img/marcas/${categoria}.png`"
      :alt="`Logo da ${categoria}`"
    />
  </RouterLink>
</template>

<script lang="ts">
export default {
  props: {
    categoria: { type: String, required: true },
  },
};
</script>
