<template>
  <RouterLink :to="`/marca/${categoria}`">
    <img
      loading="lazy"
      class="w-36 md:w-56 mix-blend-normal my-2"
      :src="`/img/marcas/${categoria}.webp`"
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
