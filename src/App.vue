<template>
  <section class="bg-base-200">
    <header>
      <NavMain class="fixed top-0 z-50" />
    </header>
    <main>
      <RouterView
        class="pt-[8.2rem] mx-auto md:pt-[8rem] min-h-[70vh] max-w-[2000px]"
      />
    </main>
    <FooterMain />
    <ContainerNotificacao />
  </section>
</template>

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
