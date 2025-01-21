<template>
  <section class="bg-base-100 flex gap-7">
    <aside
      class="hidden md:flex flex-col gap-5 w-fit top-0 left-0 p-7 pr-0 h-full"
    >
      <div>
        <h2 class="text-secondary text-nowrap text-lg font-semibold">
          Marcas:
        </h2>
        <ul class="mt-3 flex items-start justify-start flex-col gap-3">
          <li>
            <button
              id="filtroMarca"
              class="link-hover btnFiltro"
              @click="filtraProdutosMarca('')"
            >
              TODOS
            </button>
          </li>
          <li v-for="(marca, index) in marcas" :key="index">
            <button
              id="filtroMarca"
              class="link-hover text-nowrap btnFiltro"
              @click="filtraProdutosMarca(marca)"
            >
              {{ marca }}
            </button>
          </li>
        </ul>
      </div>
      <hr class="border-secondary" />
      <div>
        <h2 class="text-secondary text-nowrap text-lg font-semibold">
          Categorias:
        </h2>
        <ul class="my-3 flex items-start justify-start flex-col gap-3">
          <li>
            <button
              id="filtroCategoria"
              class="link-hover btnFiltro text-start"
              @click="filtraProdutosCategoria('')"
            >
              TODOS
            </button>
          </li>
          <li v-for="(categoria, index) in subcategorias[id]" :key="index">
            <button
              id="filtroCategoria"
              class="link-hover btnFiltro text-nowrap text-start"
              @click="filtraProdutosCategoria(categoria)"
            >
              {{ categoria }}
            </button>
          </li>
        </ul>
      </div>
    </aside>
    <div class="ml-0 md:block w-full px-4 md:px-8 md:py-4 pb-6 border-gray-400">
      <SetaLink class="mb-5" :id="id" />
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
            <div
              class="flex md:hidden bg-base-100 flex-col gap-5 w-fit top-0 left-0 p-7 h-full"
            >
              <div>
                <h2 class="text-secondary text-nowrap text-lg font-semibold">
                  Marcas:
                </h2>
                <ul class="mt-3 flex items-start justify-start flex-col gap-3">
                  <li>
                    <button
                      id="filtroMarca"
                      class="link-hover btnFiltro"
                      @click="filtraProdutosMarca('')"
                    >
                      TODOS
                    </button>
                  </li>
                  <li v-for="(marca, index) in marcas" :key="index">
                    <button
                      id="filtroMarca"
                      class="link-hover text-nowrap btnFiltro"
                      @click="filtraProdutosMarca(marca)"
                    >
                      {{ marca }}
                    </button>
                  </li>
                </ul>
              </div>
              <hr class="border-secondary" />
              <div>
                <h2 class="text-secondary text-nowrap text-lg font-semibold">
                  Categorias:
                </h2>
                <ul class="my-3 flex items-start justify-start flex-col gap-3">
                  <li>
                    <button
                      id="filtroCategoria"
                      class="link-hover btnFiltro text-start"
                      @click="filtraProdutosCategoria('')"
                    >
                      TODOS
                    </button>
                  </li>
                  <li
                    v-for="(categoria, index) in subcategorias[id]"
                    :key="index"
                  >
                    <button
                      id="filtroCategoria"
                      class="link-hover btnFiltro text-nowrap text-start"
                      @click="filtraProdutosCategoria(categoria)"
                    >
                      {{ categoria }}
                    </button>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <TabelaItems
          v-if="filtraMarcaESubcategoria.length >= 1"
          :produtos="filtraMarcaESubcategoria"
        />
        <p class="italic" v-else>
          Sem resultado de busca para o filtro {{ marcaAFiltrar }}
          {{ SubcategoriaAFiltrar }}.
        </p>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import SetaLink from "@/components/SetaLink.vue";
import TabelaItems from "@/components/TabelaItems.vue";
import type { IProduto } from "@/interface/IProdutos";
import { storeProdutos } from "@/store/SProdutos";
import fechaDrawer from "@/utils/fechaDrawer";

export default {
  components: { TabelaItems, SetaLink },
  data() {
    return {
      id: this.$route.params.id as string,
      SProdutos: storeProdutos(),
      produtos: [] as IProduto[],
      marcas: [] as string[],
      subcategorias: {} as Record<string, string[]>,
      produtosFiltrados: [] as IProduto[],
      marcaAFiltrar: "",
      SubcategoriaAFiltrar: "",
      filtroSubcategoria: this.$route.params.filtroSubcategoria as string,
    };
  },
  watch: {
    "$route.params.id": {
      immediate: true,
      handler() {
        this.id = this.$route.params.id as string;
        this.colocaProdutos();
        this.resetaFiltros();
      },
      deep: true,
    },
    "$route.params.filtroSubcategoria": {
      immediate: true,
      handler() {
        this.filtroSubcategoria = this.$route.params
          .filtroSubcategoria as string;
        this.filtroDaNav();
      },
      deep: true,
    },
  },
  methods: {
    filtraProdutosMarca(marca: string) {
      fechaDrawer();
      this.marcaAFiltrar = marca;
    },
    filtraProdutosCategoria(categoria: string) {
      fechaDrawer();
      this.SubcategoriaAFiltrar = categoria;
    },
    resetaFiltros() {
      this.marcaAFiltrar = "";
      this.SubcategoriaAFiltrar = "";
    },
    filtroDaNav() {
      if (this.filtroSubcategoria) {
        this.SubcategoriaAFiltrar = this.filtroSubcategoria;
      }
    },
    quantidadeDeCadaMarca(marca: string) {
      if (marca === "") return this.produtos.length;
      const quantidade = this.produtos.filter((produto: IProduto) => {
        return produto.marca === marca;
      }).length;
      return quantidade;
    },
    async colocaProdutos() {
      this.produtos = [];
      window.scrollTo(0, 0);
      const intermadiario = await this.SProdutos.getProdutos();

      for (const marca in intermadiario) {
        intermadiario[marca].forEach((produto: IProduto) => {
          if (produto.categoria === this.id) {
            this.produtos.push(produto);
          }
        });
      }

      if (this.produtos.length === 0) {
        this.$router.push("/404");
      }
    },
  },
  mounted() {},
  async created() {
    this.marcas = await this.SProdutos.getMarcas();
    this.subcategorias = await this.SProdutos.getSubcategorias();
    this.filtroDaNav();

    setInterval(() => {
      const botoesFiltro = document.querySelectorAll(".btnFiltro");
      botoesFiltro.forEach((botao) => {
        botao.addEventListener("click", (e) => {
          botoesFiltro.forEach((b) => {
            if (b.id === botao.id) {
              b.classList.remove("font-semibold");
            }
          });
          const botaoClicado = e.target as HTMLButtonElement;
          botaoClicado.classList.add("font-semibold");
        });
      });
    }, 500);
  },
  computed: {
    filtraMarcaESubcategoria() {
      let produtosFiltrados = this.produtos;

      if (this.marcaAFiltrar !== "") {
        produtosFiltrados = produtosFiltrados.filter((produto: IProduto) => {
          return produto.marca === this.marcaAFiltrar;
        });
      }

      if (this.SubcategoriaAFiltrar !== "") {
        produtosFiltrados = produtosFiltrados.filter((produto: IProduto) => {
          return produto.subcategoria === this.SubcategoriaAFiltrar;
        });
      }

      return produtosFiltrados;
    },
  },
};
</script>
