<template>
  <div class="mb-8 px-2">
    <SetaLink class="pb-4" :id="id" />
    <TituloCategoria :categoria="id" id="tituloCategoria" />
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
