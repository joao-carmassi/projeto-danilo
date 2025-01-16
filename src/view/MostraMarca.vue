<template>
  <section class="px-5 pb-12 bg-base-200 md:px-24 lg:px-48 flex flex-col gap-5">
    <TituloESeta :id="id" />
    <TabelaItems :produtos="produtos" />
  </section>
</template>

<script lang="ts">
import TabelaItems from "@/components/TabelaItems.vue";
import TituloESeta from "@/components/TituloESeta.vue";
import type { IProduto } from "@/interface/IProdutos";
import { storeProdutos } from "@/store/SProdutos";

export default {
  components: { TabelaItems, TituloESeta },
  data() {
    return {
      id: this.$route.params.id as string,
      SProdutos: storeProdutos(),
      produtos: {} as IProduto[],
      eProduto: false,
    };
  },
  watch: {
    "$route.params.id": {
      immediate: true,
      handler() {
        this.id = this.$route.params.id as string;
        this.baixaProdutos();
      },
    },
  },
  methods: {
    async baixaProdutos() {
      window.scrollTo(0, 0);
      let ItemsPesquisados;
      ItemsPesquisados = await this.SProdutos.getProdutos();
      ItemsPesquisados = ItemsPesquisados[this.id];
      if (ItemsPesquisados === undefined || ItemsPesquisados.length <= 0)
        this.$router.push("/404");
      this.produtos = ItemsPesquisados;
    },
  },
};
</script>
