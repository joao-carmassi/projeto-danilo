<template>
  <img
    class="w-56 mix-blend-multiply my-2"
    :src="`./img/marcas/${categoria}.png`"
    :alt="`Logo da ${categoria}`"
  />
  <!-- <h2
    class="capitalize text-secondary font-semibold text-2xl font-montSerrat md:text-3xl"
  >
    {{ categoria }}
  </h2> -->
</template>

<script lang="ts">
export default {
  props: {
    categoria: { type: String, required: true },
  },
};
</script>
