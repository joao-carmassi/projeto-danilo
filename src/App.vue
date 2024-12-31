<template>
  <header>
    <NavMain class="fixed top-0 z-50" />
  </header>
  <RouterView class="pt-20" />
  <FooterMain />
</template>

<!-- TODO: Fazer iconi de site ir para pagina inicial -->
<!-- TODO: Botao comprar manda cara pagina do produtor -->
<!-- TODO: Fazer pagina produto -->
<!-- TODO: Fazer pagina carrinho -->
<!-- TODO: Fazer enviar carrinho para o zap -->

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
