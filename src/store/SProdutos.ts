import type { IProduto, IProdutos } from "@/interface/IProdutos";
import { baixaProdutosJson } from "@/service/baixaProdutos";
import { defineStore } from "pinia";

export const storeProdutos = defineStore("counter", {
  state: () => {
    return { produtos: {} as IProdutos, categorias: [] as string[] };
  },
  actions: {
    async baixaProdutos() {
      const estaVazio = Object.keys(this.produtos).length === 0;
      if (estaVazio) {
        this.produtos = await baixaProdutosJson();
        this.produtos = this.separaProdutosPorMarcas();
        this.categorias = Object.keys(this.produtos);
        this.categorias.sort();
        this.transformaIdString();
        this.adicionaIdProdutos();
      } else {
        return;
      }
    },

    async getProdutos() {
      await this.baixaProdutos();

      return this.produtos;
    },

    async getCategorias() {
      await this.baixaProdutos();

      return this.categorias;
    },

    adicionaIdProdutos() {
      for (const categoria in this.produtos) {
        this.produtos[categoria].forEach((produto) => {
          produto.codigos = this.geraCodigos(produto.id);
        });
      }
    },

    separaProdutosPorMarcas() {
      const produtos = this.produtos;
      const produtosPorMarca: IProdutos = {};
      for (const categoria in produtos) {
        produtos[categoria].forEach((produto) => {
          const marca = produto.marca;
          if (produto.marca === "MITSUBISHI") return;
          if (!produtosPorMarca[marca]) {
            produtosPorMarca[marca] = [];
          }
          produtosPorMarca[marca].push(produto);
        });
      }
      return produtosPorMarca;
    },

    async getProduto(id: string) {
      await this.baixaProdutos();

      const produtos = this.produtos;
      for (const categoria in produtos) {
        const produto = produtos[categoria].find(
          (produto) => produto.id === id
        );
        if (produto) {
          return produto;
        }
      }
    },

    async pesquisaProduto(pesquisa: string) {
      await this.baixaProdutos();

      const produtos = this.produtos;
      let resultado: IProduto[] = [];
      for (const categoria in produtos) {
        const produtosCategoria = produtos[categoria].filter((produto) => {
          const nome = produto.nome.toLowerCase();
          const codigo = produto.codigos.join(" ").toLowerCase();
          const pesquisaLower = pesquisa.toLowerCase();
          return nome.includes(pesquisaLower) || codigo.includes(pesquisaLower);
        });
        if (produtosCategoria.length > 0) {
          resultado = [...resultado, ...produtosCategoria];
        }
      }
      return resultado;
    },

    geraCodigos(codigo: string | number) {
      const codigoX = codigo.toString();

      return codigoX.split("_");
    },

    transformaIdString() {
      for (const categoria in this.produtos) {
        this.produtos[categoria].forEach((produto) => {
          if (typeof produto.id === "number") {
            produto.id = produto.id.toString();
          }
        });
      }
    },
  },
});
