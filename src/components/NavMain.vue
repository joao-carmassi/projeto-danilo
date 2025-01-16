<template>
  <nav
    id="navBar"
    class="w-full flex gap-2 flex-col shadow-sm px-5 py-3 bg-secondary"
  >
    <div class="flex gap-3 flex-col">
      <div class="flex items-center justify-between h-12">
        <div class="h-full">
          <button
            @click="vaiParaHome"
            class="h-full hidden md:block rounded-full border-2 aspect-square border-primary p-2.5"
          >
            <img class="h-full" src="/img/simbolo.png" alt="" />
          </button>
          <input
            id="my-drawer-3"
            type="checkbox"
            class="drawer-toggle md:hidden"
          />
          <label
            for="my-drawer-3"
            aria-label="open sidebar"
            class="btn border border-white btn-square md:hidden btn-ghost"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              class="inline-block h-6 w-6 stroke-current text-white"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          </label>
          <div class="drawer-side z-50">
            <label
              for="my-drawer-3"
              aria-label="close sidebar"
              class="drawer-overlay"
            ></label>
            <div
              class="menu p-0 join join-vertical w-72 max-w-[66%] bg-base-200 min-h-full"
            >
              <div
                class="h-5 bg-secondary text-white flex items-center justify-end px-5"
              >
                <!-- <button>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    width="24"
                    height="24"
                    stroke-width="2"
                  >
                    <path d="M18 6l-12 12"></path>
                    <path d="M6 6l12 12"></path>
                  </svg>
                </button> -->
              </div>
              <div
                v-for="(marca, index) in marcas"
                :key="index"
                class="collapse rounded-none collapse-arrow join-item border-gray-400 border"
              >
                <input
                  class="px-4 min-h-14"
                  type="checkbox"
                  name="my-accordion-4"
                />
                <div
                  class="collapse-title flex items-center px-4 min-h-14 text-md font-semibold text-secondary"
                >
                  {{ marca }}
                </div>
                <div class="collapse-content pl-3 flex flex-col">
                  <RouterLink
                    @click="fechaDrawer()"
                    :class="{ 'border-t': index !== 0 }"
                    class="py-2.5 pl-2 border-gray-300 font-semibold"
                    :to="`/${marca}/${tipo}`"
                    v-for="(tipo, index) in tiposDasMarcas[marca]"
                    :key="index"
                  >
                    - {{ tipo }}
                  </RouterLink>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="h-full">
          <button
            @click="vaiParaHome"
            class="h-full w-2/3 flex justify-center items-center gap-2 md:hidden py-2.5 mx-auto"
          >
            <img class="w-full" src="/img/logo.png" alt="Loja Do VRF" />
            <!-- <img class="h-full" src="/img/simbolo.png" alt="" />
            <h1 class="text-primary text-xl font-bold">Loja do VRF</h1> -->
          </button>
        </div>
        <div class="gap-2 hidden w-full md:grid place-items-center">
          <InputPesquisaProduto class="md:w-96 lg:w-[32.5rem]" />
        </div>
        <div class="flex justify-end">
          <div class="dropdown dropdown-end">
            <RouterLink
              to="/carrinho"
              class="btn border border-white btn-ghost btn-circle"
            >
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
          </div>
        </div>
      </div>
      <div class="md:hidden h-12 flex items-center justify-center w-full">
        <InputPesquisaProduto class="w-full" />
      </div>
    </div>
    <div
      class="hidden relative h-12 md:flex items-center justify-center text-white"
    >
      <ul class="menu gap-3 menu-horizontal px-1">
        <li class="static py-2" v-for="(marca, index) in marcas" :key="index">
          <details id="detailsNav">
            <summary @click="paginaMarcas(marca)">
              {{ marca }}
            </summary>
            <ul
              class="flex min-h-16 flex-wrap right-1/2 translate-x-1/2 rounded-none justify-center items-center w-[100vw] text-black"
            >
              <li
                class="flex flex-row"
                v-for="(tipo, index) in tiposDasMarcas[marca]"
                :key="index"
              >
                <span
                  v-if="index > 0"
                  class="border-l border-gray-300 w-0 p-0"
                ></span>
                <RouterLink
                  :to="`/${marca}/${tipo}`"
                  class="text-secondary font-semibold"
                  >{{ tipo }}</RouterLink
                >
              </li>
            </ul>
          </details>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script lang="ts">
import { storeCarrinho } from "@/store/SCarrinho";
import InputPesquisaProduto from "./InputPesquisaProduto.vue";
import { storeProdutos } from "@/store/SProdutos";
import type { DetailsHTMLAttributes } from "vue";
import router from "@/router/router";

export default {
  components: { InputPesquisaProduto },
  data() {
    return {
      inputPesquisa: "",
      SCarrinho: storeCarrinho(),
      SProdutos: storeProdutos(),
      marcas: [] as string[],
      tiposDasMarcas: {} as Record<string, string[]>,
    };
  },
  methods: {
    vaiParaHome() {
      this.$router.push("/");
    },
    paginaMarcas(marca: string) {
      router.push(`/marca/${marca}`);
    },
    fechaDrawer() {
      const inputDrawer = document.getElementById(
        "my-drawer-3"
      ) as HTMLInputElement;
      console.log(inputDrawer);
      inputDrawer.checked = false;
    },
  },
  async mounted() {
    this.SCarrinho.carregaDados();
    this.marcas = await this.SProdutos.getCategorias();
    this.tiposDasMarcas =
      await this.SProdutos.capturaOsTiposDeProdutosDeCadaMarca();

    const details = document.querySelectorAll("#detailsNav");
    details.forEach((detail) => {
      let alvo: DetailsHTMLAttributes;
      detail.addEventListener("mouseenter", (e) => {
        alvo = e.target as DetailsHTMLAttributes;
        alvo.open = true;
        details.forEach((detail) => {
          if (detail != alvo) {
            detail.removeAttribute("open");
          }
        });
      });
      const navBar = document.getElementById("navBar") as HTMLElement;
      navBar.addEventListener("mouseleave", () => {
        detail.removeAttribute("open");
      });
    });
  },
};
</script>
