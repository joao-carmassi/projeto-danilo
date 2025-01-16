<template>
  <section class="px-5 pb-12 bg-base-200 md:px-24 lg:px-48 flex flex-col gap-5">
    <SetaLinkLink class="mt-3" :marca="marca" :tipo="tipo" />
    <TabelaItems :produtos="produtos" />
  </section>
</template>

<script lang="ts">
import SetaLinkLink from "@/components/SetaLinkLink.vue";
import TabelaItems from "@/components/TabelaItems.vue";
import type { IProduto } from "@/interface/IProdutos";
import { storeProdutos } from "@/store/SProdutos";

export default {
  components: { TabelaItems, SetaLinkLink },
  data() {
    return {
      marca: this.$route.params.marca as string,
      tipo: this.$route.params.tipo as string,
      SProdutos: storeProdutos(),
      produtos: {} as IProduto[],
      eProduto: false,
    };
  },
  watch: {
    "$route.params": {
      immediate: true,
      handler() {
        this.marca = this.$route.params.marca as string;
        this.tipo = this.$route.params.tipo as string;
        this.baixaProdutos();
      },
    },
  },

  methods: {
    async baixaProdutos() {
      window.scrollTo(0, 0);

      if (!this.marca || !this.tipo) {
        console.error("Marca ou tipo não definidos.");
        return;
      }

      const ItemsPesquisados = await this.SProdutos.filtaPorMarcaETipo(
        this.marca,
        this.tipo
      );

      if (!ItemsPesquisados || ItemsPesquisados.length === 0) {
        this.$router.push("/404");
      } else {
        this.produtos = ItemsPesquisados;
      }
    },
  },
};
</script>
