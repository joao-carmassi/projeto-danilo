<template>
  <section class="px-5 md:px-24 lg:px-52 flex flex-col gap-5">
    <div class="mt-7">
      <TituloCategoria :categoria="id" />
      <div class="breadcrumbs text-sm">
        <ul>
          <li><RouterLink to="/">Home</RouterLink></li>
          <li>
            {{ id }}
          </li>
        </ul>
      </div>
    </div>
    <div class="flex gap-x-3 md:gap-x-6 gap-y-10 flex-wrap">
      <CardProduto
        class="min-w-40 w-1/6 flex-grow"
        v-for="(produto, index) in produtos"
        :key="index"
        :produto="produto as IProduto"
      />
    </div>
  </section>
</template>

<script lang="ts">
import CardProduto from "@/components/CardProduto.vue";
import TituloCategoria from "@/components/TituloCategoria.vue";
import type { IProduto, IProdutos } from "@/interface/IProdutos";
import { storeProdutos } from "@/store/SProdutos";

export default {
  components: { CardProduto, TituloCategoria },
  data() {
    return {
      id: this.$route.params.id as string,
      SProdutos: storeProdutos(),
      produtos: {} as IProdutos | IProduto[],
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
      this.produtos = (await this.SProdutos).getProdutos;
      this.produtos = this.produtos[this.id];
    },
  },
};
</script>
