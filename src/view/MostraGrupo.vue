<template>
  <section class="px-5 pb-12 bg-base-200 md:px-24 lg:px-48 flex flex-col gap-5">
    <div class="mt-8 px-2">
      <TituloCategoria :categoria="id" id="tituloCategoria" />
      <div class="breadcrumbs text-sm">
        <ul>
          <li><RouterLink to="/">Home</RouterLink></li>
          <li>
            {{
              id.toLowerCase().replace(/\b\w/g, (char) => char.toUpperCase())
            }}
          </li>
        </ul>
      </div>
    </div>
    <div
      class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-x-3 md:gap-x-7 gap-y-10"
    >
      <CardProduto
        class=""
        v-for="(produto, index) in produtos"
        :key="index"
        :produto="produto"
      />
    </div>
  </section>
</template>

<script lang="ts">
import CardProduto from "@/components/CardProduto.vue";
import TituloCategoria from "@/components/TituloCategoria.vue";
import type { IProduto } from "@/interface/IProdutos";
import { storeProdutos } from "@/store/SProdutos";

export default {
  components: { CardProduto, TituloCategoria },
  data() {
    return {
      id: this.$route.params.id as string,
      SProdutos: storeProdutos(),
      produtos: {} as IProduto[],
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
      if (ItemsPesquisados === undefined) {
        this.$router.push("/404");
      }
      this.produtos = ItemsPesquisados;
    },
  },
};
</script>
