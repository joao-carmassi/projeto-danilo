<template>
  <section class="bg-base-200">
    <header>
      <NavMain class="fixed top-0 z-50" />
    </header>
    <main>
      <RouterView
        class="pt-[7.8rem] mx-auto md:pt-[4.5rem] min-h-[70vh] max-w-[2000px]"
      />
    </main>
    <FooterMain />
    <ContainerNotificacao />
  </section>
</template>

<!-- TODO: pesquisa em negrito -->
<!-- TODO: Fazer menu flutuante -->
<!-- TODO: Deploy na vercel -->

<script lang="ts">
import ContainerNotificacao from "./components/ContainerNotificacao.vue";
import FooterMain from "./components/FooterMain.vue";
import NavMain from "./components/NavMain.vue";

export default {
  components: {
    FooterMain,
    NavMain,
    ContainerNotificacao,
  },
};
</script>
