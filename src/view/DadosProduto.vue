<template>
  <section>{{ produto.nome }}</section>
</template>

<script lang="ts">
import type { IProduto } from "@/interface/IProdutos";
import { storeProdutos } from "@/store/SProdutos";

export default {
  data() {
    return {
      id: this.$route.params.id as string,
      produto: {} as IProduto,
      SProdutos: storeProdutos(),
    };
  },
  watch: {
    "$route.params.id": {
      immediate: true,
      handler() {
        this.id = this.$route.params.id as string;
        this.baixaProduto();
      },
    },
  },
  methods: {
    async baixaProduto() {
      this.produto = (await (
        await this.SProdutos
      ).getProduto(this.id)) as IProduto;
    },
  },
};
</script>
