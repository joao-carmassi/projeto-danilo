<template>
  <section class="md:px-12 lg:px-52 bg-base-100">
    <div class="breadcrumbs px-4 pt-5 text-sm">
      <ul>
        <li><RouterLink to="/">Home</RouterLink></li>
        <li>carrinho</li>
      </ul>
    </div>
    <div class="w-full p-6 lg:p-8 grid place-items-center">
      <h2
        class="text-2xl md:text-3xl lg:text-4xl text-center font-semibold tracking-wide"
      >
        Carrinho de compras
      </h2>
    </div>
    <div
      class="flex flex-col gap-7 md:gap-5"
      v-if="SCarrinho.produtos.items.length"
    >
      <table class="table">
        <thead>
          <tr>
            <th class="text-lg">Produtos</th>
            <th class="text-lg hidden md:table-cell">Quantidade</th>
            <!-- <th class="text-lg hidden md:table-cell">Preço</th> -->
            <th class="text-lg"></th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(produto, index) in SCarrinho.produtos.items" :key="index">
            <td class="flex flex-col gap-3 items-start">
              <RowProduto
                class="py-1.5"
                :classes="' text-lg text'"
                :img="'h-14'"
                :codigos="'text-sm'"
                :produto="produto.produto"
              />
              <!-- Mobile -->
              <div
                class="flex md:hidden w-full justify-between items-center gap-2"
              >
                <!-- <ValorProduto
                  class="text-lg text-green-600"
                  :valor="produto.produto.VALOR || 0"
                /> -->
                <InputQuantitade
                  v-model="quantidadeDoInput"
                  @update:quantidade="atualizaCarrinho(produto.produto, $event)"
                  :quantidade="produto.quantidade"
                  class="h-10 w-fit"
                />
              </div>
            </td>
            <!-- Desktop -->
            <td class="hidden md:table-cell">
              <InputQuantitade
                v-model="quantidadeDoInput"
                @update:quantidade="atualizaCarrinho(produto.produto, $event)"
                :quantidade="produto.quantidade"
                class="h-10 w-fit"
              />
            </td>
            <!-- <td class="hidden text-lg h-full md:table-cell">
              <ValorProduto
                class="text-green-600"
                :valor="produto.produto.VALOR || 0"
              />
            </td> -->
            <td>
              <button
                @click="removeProduto(produto.produto)"
                class="hover:cursor-pointer underline"
              >
                Apagar
              </button>
            </td>
          </tr>
        </tbody>
      </table>
      <div class="w-full flex justify-end">
        <div class="flex w-full md:w-72 px-4 flex-col gap-2">
          <!-- <div class="flex justify-between items-center">
            <h3 class="text-xl font-semibold">Total:</h3>
            <ValorProduto
              class="text-green-600 text-lg"
              :valor="SCarrinho.produtos.total"
            />
          </div> -->
          <div class="flex gap-2 flex-col">
            <button
              @click="enviaCarrinhoMensagem()"
              class="w-full btn btn-success bg-green-600 text-base-100"
            >
              Iniciar consulta
            </button>
            <routerLink
              class="w-full btn btn-success btn-outline text-base-100"
              to="/"
              >Ver mais Produtos</routerLink
            >
          </div>
        </div>
      </div>
    </div>
    <div class="flex flex-col px-5 gap-3 items-center" v-else>
      <p class="text-lg italic">O carrinho de compras está vazio.</p>
      <routerLink to="/" class="btn btn-secondary text-base-100"
        >Ver produtos</routerLink
      >
    </div>
  </section>
</template>

<script lang="ts">
import InputQuantitade from "@/components/InputQuantitade.vue";
import RowProduto from "@/components/RowProduto.vue";
import type { IProduto } from "@/interface/IProdutos";
import { storeCarrinho } from "@/store/SCarrinho";
import { storeProdutos } from "@/store/SProdutos";

export default {
  components: {
    RowProduto,
    InputQuantitade,
  },
  data() {
    return {
      SProdutos: storeProdutos(),
      SCarrinho: storeCarrinho(),
      quantidadeDoInput: 1,
    };
  },
  created() {
    this.SCarrinho.carregaDados();
  },
  watch: {
    $route: {
      immediate: true,
      handler() {
        this.moveTelaTopo();
      },
    },
  },
  methods: {
    removeProduto(produto: IProduto) {
      this.SCarrinho.removeProduto(produto);
    },
    moveTelaTopo() {
      window.scrollTo(0, 0);
    },
    atualizaCarrinho(produto: IProduto, novaQuantidade: number) {
      this.quantidadeDoInput = novaQuantidade;
      this.SCarrinho.adicionaProduto(produto, novaQuantidade);
    },
    enviaCarrinhoMensagem() {
      this.SCarrinho.enviaCarrinhoWhatsApp();
    },
  },
};
</script>
