import type { IProduto, IProdutos } from "@/interface/IProdutos";
import { baixaProdutosJson } from "@/service/baixaProdutos";
import { defineStore } from "pinia";

export const storeProdutos = defineStore("counter", {
  state: () => {
    return {
      produtos: {} as IProdutos,
      marcas: [] as string[],
      categoria: [] as string[],
      loadingPromise: null as Promise<void> | null,
    };
  },
  actions: {
    async baixaProdutos() {
      if (this.loadingPromise) {
        return this.loadingPromise;
      }

      const estaVazio = Object.keys(this.produtos).length === 0;
      if (estaVazio) {
        this.loadingPromise = (async () => {
          this.produtos = await baixaProdutosJson();
          this.produtos = this.separaProdutosPorMarcas();
          this.marcas = Object.keys(this.produtos);
          this.ordenaMarcas();
          this.transformaIdString();
          this.adicionaIdProdutos();
          this.salvaCategorias();
        })();

        await this.loadingPromise;
        this.loadingPromise = null;
      }
    },

    async getProdutos() {
      await this.baixaProdutos();
      return this.produtos;
    },

    async getMarcas() {
      await this.baixaProdutos();
      return this.marcas;
    },

    async getTipos() {
      await this.baixaProdutos();
      return this.categoria;
    },

    async getCategorias() {
      await this.baixaProdutos();
      return this.categoria;
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

      const termosPesquisa = pesquisa.toLowerCase().split(" "); // Divide a pesquisa em palavras

      for (const categoria in produtos) {
        const produtosCategoria = produtos[categoria].filter((produto) => {
          const nome = produto.nome.toLowerCase();
          const codigos = produto.codigos.join(" ").toLowerCase();

          // Verifica se todos os termos de pesquisa estão no nome ou nos códigos
          return termosPesquisa.every(
            (termo) => nome.includes(termo) || codigos.includes(termo)
          );
        });

        if (produtosCategoria.length > 0) {
          resultado = [...resultado, ...produtosCategoria];
        }
      }
      return resultado;
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
          if (!produtosPorMarca[marca]) {
            produtosPorMarca[marca] = [];
          }
          produtosPorMarca[marca].push(produto);
        });
      }
      return produtosPorMarca;
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

    ordenaMarcas() {
      const orderm = ["MIDEA", "TOSHIBA", "HITACHI"];
      this.marcas.sort((a, b) => {
        const indexA = orderm.indexOf(a);
        const indexB = orderm.indexOf(b);
        if (indexA === -1) return 1;
        if (indexB === -1) return -1;
        return indexA - indexB;
      });
    },

    salvaCategorias() {
      const tipos = new Set<string>();
      for (const marca in this.produtos) {
        this.produtos[marca].forEach((produto) => {
          tipos.add(produto.categoria);
        });
      }
      this.categoria = Array.from(tipos);
    },

    async capturaOsTiposDeProdutosDeCadaMarca() {
      await this.getMarcas();
      const categoriasComTipos: Record<string, string[]> = {};
      this.marcas.forEach((categoria) => {
        const produtos = this.produtos[categoria];
        const tipos = new Set<string>();
        produtos.forEach((produto) => {
          tipos.add(produto.categoria);
        });
        categoriasComTipos[categoria] = Array.from(tipos);
      });
      return categoriasComTipos;
    },

    async separaMarcasDeUmProduto() {
      const produtos = await this.getProdutos();
      const marcasPorTipo: Record<string, string[]> = {};
      for (const categoria in produtos) {
        const produtosCategoria = produtos[categoria];
        produtosCategoria.forEach((produto) => {
          const tipo = produto.categoria;
          const marca = produto.marca;
          if (!marcasPorTipo[tipo]) {
            marcasPorTipo[tipo] = [];
          }
          if (!marcasPorTipo[tipo].includes(marca)) {
            marcasPorTipo[tipo].push(marca);
          }
        });
      }
      return marcasPorTipo;
    },

    filtraPordutosPorTipo(tipo: string, produtos: IProdutos) {
      const produtosAFiltrar = produtos;
      let resultado: IProduto[] = [];
      for (const categoria in produtosAFiltrar) {
        const produtosCategoria = produtosAFiltrar[categoria].filter(
          (produto) => {
            return produto.categoria === tipo;
          }
        );
        if (produtosCategoria.length > 0) {
          resultado = [...resultado, ...produtosCategoria];
        }
      }
      return resultado;
    },

    async getSubcategorias() {
      const produtos = await this.getProdutos();
      const subcategorias: Record<string, string[]> = {};
      for (const marca in produtos) {
        const produtosMarca = produtos[marca];
        produtosMarca.forEach((produto) => {
          const tipo = produto.categoria;
          const subcategoria = produto.subcategoria;
          if (!subcategorias[tipo]) {
            subcategorias[tipo] = [];
          }
          if (!subcategorias[tipo].includes(subcategoria)) {
            subcategorias[tipo].push(subcategoria);
          }
        });
      }
      return subcategorias;
    },

    async getProdutosPorCategoria() {
      // Retornar um objeto {categoria: produtos[]}
      const produtos = await this.getProdutos();
      const produtosPorCategoria: Record<string, IProduto[]> = {};
      for (const marca in produtos) {
        const produtosMarca = produtos[marca];
        produtosMarca.forEach((produto) => {
          const categoria = produto.categoria;
          if (!produtosPorCategoria[categoria]) {
            produtosPorCategoria[categoria] = [];
          }
          produtosPorCategoria[categoria].push(produto);
        });
      }
      return produtosPorCategoria;
    },
  },
});
