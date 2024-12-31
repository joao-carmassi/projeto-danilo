import type { IProdutos } from "@/interface/IProdutos";
import { baixaProdutos } from "@/service/baixaProdutos";
import { defineStore } from "pinia";

const useCounterStore = defineStore("counter", {
  state: () => {
    return { produtos: {} as IProdutos, categorias: [] as string[] };
  },
  actions: {
    async baixaProdutos() {
      this.produtos = await baixaProdutos();
      this.categorias = Object.keys(this.produtos);
      this.adicionaIdProdutos();
      console.log(this.produtos);
    },

    async getProdutos() {
      const estaVazio = Object.keys(this.produtos).length === 0;
      if (estaVazio) {
        await this.baixaProdutos();
      }
      return this.produtos;
    },

    async getCategorias() {
      const estaVazio = this.categorias.length === 0;
      if (estaVazio) {
        await this.baixaProdutos();
      }
      return this.categorias;
    },

    adicionaIdProdutos() {
      for (const categoria in this.produtos) {
        this.produtos[categoria].forEach((produto) => {
          produto.id = this.geraId(produto.codigos);
        });
      }
    },

    geraId(codigos: string[]) {
      return codigos.join("_");
    },
  },
});

export const storeProdutos = async () => {
  const store = useCounterStore();

  const dadosStoreProdutos = {
    getProdutos: await store.getProdutos(),
    getCategorias: await store.getCategorias(),
  };

  return dadosStoreProdutos;
};
