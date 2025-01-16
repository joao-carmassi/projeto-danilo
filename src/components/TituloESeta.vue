<template>
  <div class="mt-8 px-2">
    <TituloCategoria :categoria="id" id="tituloCategoria" />
    <SetaLink :id="id" />
  </div>
</template>

<script lang="ts">
import SetaLink from "./SetaLink.vue";
import TituloCategoria from "./TituloCategoria.vue";

export default {
  components: { TituloCategoria, SetaLink },
  props: {
    id: { type: String, required: true },
  },
};
</script>
