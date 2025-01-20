<template>
  <section class="bg-base-100 flex gap-7">
    <aside class="hidden md:block w-fit top-0 left-0 p-7 pr-0 h-full">
      <h2 class="text-secondary text-nowrap text-lg font-semibold">
        Filtrar por produtos:
      </h2>

      <ul class="my-3 flex flex-col gap-3">
        <li>
          <button class="link-hover" @click="filtraPorTipo('')">
            TODOS ({{ ItemsPesquisados.length }})
          </button>
        </li>
        <li v-for="(marca, index) in tipoasDeCadaMarca[id]" :key="index">
          <button class="link-hover" @click="filtraPorTipo(marca)">
            {{ marca }} ({{ quatidadeDeCadaProduto[marca] }})
          </button>
        </li>
      </ul>
    </aside>
    <div
      class="ml-0 md:block w-full px-4 md:px-8 md:py-4 border-l pb-6 border-gray-400"
    >
      <TituloESeta :id="id" />
      <div class="w-full">
        <div class="drawer md:hidden flex items-end justify-end">
          <label
            for="my-drawer"
            class="btn px-2 gap-1 mb-3 btn-sm btn-outline btn-secondary drawer-button"
            ><svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              width="24"
              height="24"
              stroke-width="1.5"
            >
              <path d="M4 8h4v4h-4z"></path>
              <path d="M6 4l0 4"></path>
              <path d="M6 12l0 8"></path>
              <path d="M10 14h4v4h-4z"></path>
              <path d="M12 4l0 10"></path>
              <path d="M12 18l0 2"></path>
              <path d="M16 5h4v4h-4z"></path>
              <path d="M18 4l0 1"></path>
              <path d="M18 9l0 11"></path>
            </svg>
            <p>Filtros</p>
          </label>
          <input id="my-drawer" type="checkbox" class="drawer-toggle drawers" />
          <div class="drawer-content z-50"></div>
          <div class="drawer-side z-50">
            <label
              for="my-drawer"
              aria-label="close sidebar"
              class="drawer-overlay"
            ></label>
            <div class="bg-base-200 text-base-content min-h-full w-fit p-7">
              <h2 class="text-secondary text-nowrap text-lg font-semibold">
                Filtrar por produtos:
              </h2>
              <ul class="my-5 flex flex-col gap-5">
                <li>
                  <button class="link-hover" @click="filtraPorTipo('')">
                    TODOS ({{ ItemsPesquisados.length }})
                  </button>
                </li>
                <li
                  v-for="(marca, index) in tipoasDeCadaMarca[id]"
                  :key="index"
                >
                  <button class="link-hover" @click="filtraPorTipo(marca)">
                    {{ marca }} ({{ quatidadeDeCadaProduto[marca] }})
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <TabelaItems :produtos="produtos" />
    </div>
  </section>
</template>

<script lang="ts">
import TabelaItems from "@/components/TabelaItems.vue";
import TituloESeta from "@/components/TituloESeta.vue";
import type { IProduto } from "@/interface/IProdutos";
import { storeProdutos } from "@/store/SProdutos";
import fechaDrawer from "@/utils/fechaDrawer";

export default {
  components: { TabelaItems, TituloESeta },
  data() {
    return {
      id: this.$route.params.id as string,
      SProdutos: storeProdutos(),
      produtos: {} as IProduto[],
      eProduto: false,
      tipoasDeCadaMarca: {} as Record<string, string[]>,
      ItemsPesquisados: [] as IProduto[],
      quatidadeDeCadaProduto: {} as Record<string, number>,
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
      const intermadiario = await this.SProdutos.getProdutos();
      this.ItemsPesquisados = intermadiario[this.id];
      if (
        this.ItemsPesquisados === undefined ||
        this.ItemsPesquisados.length <= 0
      )
        this.$router.push("/404");
      this.produtos = this.ItemsPesquisados;
    },
    async filtraPorTipo(tipo: string) {
      await this.baixaProdutos();
      fechaDrawer();
      if (tipo === "") return;
      this.produtos = this.produtos.filter((produto) => produto.tipo === tipo);
    },
  },
  async mounted() {
    this.tipoasDeCadaMarca =
      await this.SProdutos.capturaOsTiposDeProdutosDeCadaMarca();

    this.quatidadeDeCadaProduto = this.produtos.reduce((acc, produto) => {
      if (acc[produto.tipo]) {
        acc[produto.tipo]++;
      } else {
        acc[produto.tipo] = 1;
      }
      return acc;
    }, {} as Record<string, number>);
  },
};
</script>
