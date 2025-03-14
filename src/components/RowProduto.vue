<template>
  <RouterLink
    :to="`/produto/${produto.id}`"
    class="flex items-center gap-3"
    :class="classes"
  >
    <img
      loading="lazy"
      :src="`./img/produtos/${produto.id}.png`"
      alt="Imagem do produto"
      class="block object-contain aspect-square border border-secondary rounded-sm"
      :class="img"
    />
    <div>
      <h2
        v-html="deixaNomeDoProdutoIgualPesquisaNegrito"
        class="break-all text-secondary font-semibold"
      ></h2>
      <p
        v-html="deixaCodigoDoProdutoIgualPesquisaNegrito"
        class="text-gray-600"
        :class="codigos"
      ></p>
    </div>
  </RouterLink>
</template>

<script lang="ts">
import type { IProduto } from "@/interface/IProdutos";
import type { PropType } from "vue";

export default {
  data() {
    return {
      compressor: false,
    };
  },
  props: {
    produto: {
      type: Object as PropType<IProduto>,
      required: true,
    },
    classes: {
      type: String,
    },
    img: {
      type: String,
    },
    codigos: {
      type: String,
    },
    negrito: {
      type: String,
    },
  },
  computed: {
    deixaNomeDoProdutoIgualPesquisaNegrito() {
      let nome = this.produto.nome;
      if (!this.negrito) return nome;

      const termos = this.negrito.split(" ").filter(Boolean);
      termos.forEach((termo) => {
        const regex = new RegExp(`(${termo})`, "gi");
        nome = nome.replace(regex, `<span class="font-bold">$1</span>`);
      });

      return nome;
    },

    deixaCodigoDoProdutoIgualPesquisaNegrito() {
      let codigo = this.produto.codigos.join(", ");
      if (!this.negrito) return codigo;

      const termos = this.negrito.split(" ").filter(Boolean);
      termos.forEach((termo) => {
        const regex = new RegExp(`(${termo})`, "gi");
        codigo = codigo.replace(regex, `<span class="font-bold">$1</span>`);
      });

      return codigo;
    },
  },
};
</script>
