<template>
  <nav class="w-full flex gap-3 flex-col shadow-sm px-5 py-3 bg-secondary">
    <div class="flex items-center justify-between h-12">
      <div class="h-full">
        <button
          @click="vaiParaHome"
          class="h-full rounded-full border-2 aspect-square border-primary p-2.5"
        >
          <img class="h-full" src="/img/simbolo.png" alt="" />
        </button>
      </div>
      <div class="gap-2 hidden w-full md:grid place-items-center">
        <InputPesquisaProduto class="md:w-96 lg:w-[32.5rem]" />
      </div>
      <div class="flex justify-end">
        <div class="dropdown dropdown-end">
          <RouterLink to="/carrinho" class="btn btn-ghost btn-circle">
            <div class="indicator">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 text-base-100 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                />
              </svg>
              <span class="badge badge-sm indicator-item">{{
                SCarrinho.produtos.items.length
              }}</span>
            </div>
          </RouterLink>
          <!-- <div
            tabindex="0"
            class="card card-compact dropdown-content bg-base-100 z-[1] mt-3 w-52 shadow"
          >
            <div class="card-body">
              <span class="text-lg text-gray-700 font-bold"
                >{{ SCarrinho.produtos.items.length }} Items</span
              >
              <span v-if="SCarrinho.produtos.items.length"
                >Value:
                <ValorProduto
                  class="text-secondary"
                  :valor="SCarrinho.produtos.total"
              /></span>
              <div class="card-actions">
                <routerLink
                  to="/carrinho"
                  class="btn btn-secondary mt-2 text-base-100 btn-block"
                >
                  View cart
                </routerLink>
              </div>
            </div>
          </div> -->
        </div>
      </div>
    </div>
    <div class="md:hidden h-12 flex items-center justify-center w-full">
      <InputPesquisaProduto class="w-full" />
    </div>
  </nav>
</template>

<script lang="ts">
import { storeCarrinho } from "@/store/SCarrinho";
import InputPesquisaProduto from "./InputPesquisaProduto.vue";

export default {
  components: { InputPesquisaProduto },
  data() {
    return {
      inputPesquisa: "",
      SCarrinho: storeCarrinho(),
    };
  },
  methods: {
    vaiParaHome() {
      this.$router.push("/");
    },
  },
  created() {
    this.SCarrinho.carregaDados();
  },
};
</script>
