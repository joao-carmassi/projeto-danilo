<template>
  <section class="bg-base-100 max-w-[2000px] mx-auto">
    <header>
      <NavMain class="fixed max-w-[2000px] top-0 z-50" />
    </header>
    <main>
      <NavMain class="max-w-[2000px] top-0 z-50" />
      <RouterView class="mx-auto min-h-[70vh]" />
    </main>
    <FooterMain />
    <ContainerNotificacao />
    <BalaoZap />
  </section>
</template>

<!-- TODO: pagina produtos, marcas, tipos -->
<!-- TODO: menu -->
<!-- TODO: footer -->
<!-- TODO: Deploy na vercel -->

<script lang="ts">
import BalaoZap from "./components/BalaoZap.vue";
import ContainerNotificacao from "./components/ContainerNotificacao.vue";
import FooterMain from "./components/FooterMain.vue";
import NavMain from "./components/NavMain.vue";

export default {
  components: {
    FooterMain,
    NavMain,
    ContainerNotificacao,
    BalaoZap,
  },
};
</script>
