<template>
  <section class="bg-base-100 max-w-[2000px] mx-auto">
    <header class="fixed top-0 z-50 w-full">
      <MensagemPix class="max-w-[2000px]" />
      <NavMain class="max-w-[2000px]" />
      <MenuItens class="max-w-[2000px]" />
    </header>
    <main>
      <div class="bg-base-100">
        <MensagemPix class="opacity-0" />
        <NavMain class="max-w-[2000px] opacity-0 top-0 z-50" />
        <MenuItens class="opacity-0" />
      </div>
      <RouterView class="mx-auto min-h-[70vh]" />
    </main>
    <FooterMain />
    <ContainerNotificacao />
    <BalaoZap />
  </section>
</template>

<!-- TODO: Paginas do maual tecnico -->
<!-- TODO: arrumar bug input quntidade -->

<!-- TODO: imagens nav canto -->
<!-- TODO: baixa planilia -->
<!-- TODO: Colocar fotos novas -->
<!-- TODO: Deploy na vercel -->

<script lang="ts">
import BalaoZap from "./components/BalaoZap.vue";
import ContainerNotificacao from "./components/ContainerNotificacao.vue";
import FooterMain from "./components/FooterMain.vue";
import MensagemPix from "./components/MensagemPix.vue";
import MenuItens from "./components/MenuItens.vue";
import NavMain from "./components/NavMain.vue";

export default {
  components: {
    FooterMain,
    NavMain,
    ContainerNotificacao,
    BalaoZap,
    MensagemPix,
    MenuItens,
  },
};
</script>
