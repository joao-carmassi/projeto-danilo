<template>
  <header class="relative">
    <NavMain class="absolute top-0 z-50" />
  </header>
  <main>
    <RouterView />
  </main>
  <FooterMain />
</template>

<script lang="ts">
import FooterMain from "./components/FooterMain.vue";
import NavMain from "./components/NavMain.vue";

export default {
  components: {
    FooterMain,
    NavMain,
  },
};
</script>
