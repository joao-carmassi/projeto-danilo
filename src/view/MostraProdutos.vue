<template>
  <section class="px-5 pb-12 bg-base-200 md:px-24 lg:px-48 flex flex-col gap-5">
    <SetaLink class="mt-3" :id="id" />
    <TabelaItems :produtos="produtos" />
  </section>
</template>

<script lang="ts">
import SetaLink from "@/components/SetaLink.vue";
import TabelaItems from "@/components/TabelaItems.vue";
import type { IProduto } from "@/interface/IProdutos";
import { storeProdutos } from "@/store/SProdutos";

export default {
  components: { TabelaItems, SetaLink },
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
      const ItemsPesquisados = await this.SProdutos.filtraPordutosPorTipo(
        this.id,
        this.SProdutos.produtos
      );
      if (ItemsPesquisados === undefined || ItemsPesquisados.length <= 0)
        this.$router.push("/404");
      this.produtos = ItemsPesquisados;
    },
  },
};
</script>
