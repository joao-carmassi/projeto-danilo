import type ICarrinho from "@/interface/ICarrinho";
import type { IProduto } from "@/interface/IProdutos";
import { defineStore } from "pinia";

export const storeCarrinho = defineStore("carrinho", {
  state: () => {
    return {
      produtos: {
        items: [] as ICarrinho[],
        total: 0 as number,
      },
    };
  },

  actions: {
    adicionaProduto(produto: IProduto, quantidade = 1) {
      const produtoExistente = this.produtos.items.findIndex(
        (item) => item.produto.id === produto.id
      );
      if (produtoExistente < 0) {
        this.produtos.items.push({ produto, quantidade });
      } else {
        this.produtos.items[produtoExistente] = { produto, quantidade };
      }
      // this.calculaTotal();
      this.salvaDados();
    },

    removeProduto(produto: IProduto) {
      const produtoExistente = this.produtos.items.find(
        (item) => item.produto.id === produto.id
      );
      if (produtoExistente) {
        this.produtos.items = this.produtos.items.filter(
          (item) => item.produto.id !== produto.id
        );
      }
      // this.calculaTotal();
      this.salvaDados();
    },

    limpaCarrinho() {
      this.produtos.items = [];
      this.produtos.total = 0;
      this.salvaDados();
    },

    // calculaTotal() {
    //   this.produtos.total = this.produtos.items.reduce(
    //     (total, produto) => total + produto.produto.VALOR * produto.quantidade,
    //     0
    //   );
    // },

    salvaDados() {
      localStorage.setItem("carrinho", JSON.stringify(this.produtos.items));
      localStorage.setItem("total", JSON.stringify(this.produtos.total));
    },

    carregaDados() {
      const carrinho = localStorage.getItem("carrinho");
      const total = localStorage.getItem("total");
      if (carrinho && total) {
        this.produtos.items = JSON.parse(carrinho);
        this.produtos.total = JSON.parse(total);
      }
    },
    enviaCarrinhoWhatsApp() {
      const mensagem = `Olá, gostaria de fazer uma cotação:%0A%0A*${
        this.produtos.items.length >= 2 ? "Produtos" : "Produto"
      }:*${this.produtos.items
        .map((item) => {
          return `%0A%0A*Nome:* ${item.produto.nome}%0A*Quantidade:* ${
            item.quantidade
          }%0A*Codigo:* ${item.produto.codigos.join(", ")}%0A*Sku:* ${
            item.produto.sku
          }`;
        })
        .join("")}`;

      window.open(`https://wa.me/5511969189244?text=${mensagem}`);
    },
  },
});
