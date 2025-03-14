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
            <label
              class="flex text-nowrap items-center gap-1.5"
              for="todosMarcas"
            >
              <input
                checked
                type="checkbox"
                id="todosMarcas"
                class="checkbox link-hover rounded-sm checkbox-xs checkboxFiltroMarcas"
                @click="filtraProdutosMarca('')"
              />
              TODOS
            </label>
          </li>
          <li v-for="(marca, index) in marcas" :key="index">
            <label
              class="flex text-nowrap items-center gap-1.5"
              :for="`${marca}`"
            >
              <input
                type="checkbox"
                :id="`${marca}`"
                class="checkbox link-hover rounded-sm checkbox-xs checkboxFiltroMarcas"
                @click="filtraProdutosMarca(marca)"
              />
              {{ marca }}
            </label>
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
            <label
              class="flex text-nowrap items-center gap-1.5"
              for="todosCategoria"
            >
              <input
                checked
                type="checkbox"
                id="todosCategoria"
                class="checkbox link-hover rounded-sm checkbox-xs checkboxFiltroCategoria todosCategoria"
                @click="filtraProdutosCategoria('')"
              />
              TODOS
            </label>
          </li>
          <li v-for="(categoria, index) in subcategorias[id]" :key="index">
            <label
              class="flex text-nowrap items-center gap-1.5"
              :for="`${categoria}`"
            >
              <input
                type="checkbox"
                :id="`${categoria}`"
                class="checkbox link-hover rounded-sm checkbox-xs checkboxFiltroCategoria"
                @click="filtraProdutosCategoria(categoria)"
              />
              {{ categoria }}
            </label>
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
          <div class="drawer-side overflow-auto z-50">
            <label
              for="my-drawer"
              aria-label="close sidebar"
              class="drawer-overlay"
            ></label>
            <div
              class="flex md:hidden bg-base-100 flex-col gap-5 w-fit top-0 left-0 p-7 h-full overflow-auto"
            >
              <div>
                <h2 class="text-secondary text-nowrap text-lg font-semibold">
                  Marcas:
                </h2>
                <ul class="mt-3 flex items-start justify-start flex-col gap-3">
                  <li>
                    <label
                      class="flex text-nowrap items-center gap-1.5"
                      for="todosMarcasCelular"
                    >
                      <input
                        checked
                        type="checkbox"
                        id="todosMarcasCelular"
                        class="checkbox link-hover rounded-sm checkbox-xs checkboxFiltroMarcas"
                        @click="filtraProdutosMarca('')"
                      />
                      TODOS
                    </label>
                  </li>
                  <li v-for="(marca, index) in marcas" :key="index">
                    <label
                      class="flex text-nowrap items-center gap-1.5"
                      :for="`${marca}Celular`"
                    >
                      <input
                        type="checkbox"
                        :id="`${marca}Celular`"
                        class="checkbox link-hover rounded-sm checkbox-xs checkboxFiltroMarcas"
                        @click="filtraProdutosMarca(marca)"
                      />
                      {{ marca }}
                    </label>
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
                    <label
                      class="flex text-nowrap items-center gap-1.5"
                      for="todosCategoriaCelular"
                    >
                      <input
                        checked
                        type="checkbox"
                        id="todosCategoriaCelular"
                        class="checkboxFiltroCategoria checkbox link-hover rounded-sm todosCategoria checkbox-xs"
                        @click="filtraProdutosCategoria('')"
                      />
                      TODOS
                    </label>
                  </li>
                  <li
                    v-for="(categoria, index) in subcategorias[id]"
                    :key="index"
                  >
                    <label
                      class="flex text-nowrap items-center gap-1.5"
                      :for="`${categoria}Celular`"
                    >
                      <input
                        type="checkbox"
                        :id="`${categoria}Celular`"
                        class="checkboxFiltroCategoria checkbox link-hover rounded-sm checkbox-xs"
                        @click="filtraProdutosCategoria(categoria)"
                      />
                      {{ categoria }}
                    </label>
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
        this.pegaMarcasCategoria();
        this.filtroSubcategoria = this.$route.params
          .filtroSubcategoria as string;

        this.colocaProdutos().then(() => {
          this.filtroDaNav();
          this.$nextTick(() => {
            this.resetaFiltros(); // Garante que os checkboxes sejam atualizados após o DOM renderizar
          });
        });
      },
      deep: true,
    },
    "$route.params.filtroSubcategoria": {
      immediate: true,
      handler() {
        this.filtroSubcategoria = this.$route.params
          .filtroSubcategoria as string;
        this.filtroDaNav();
        this.$nextTick(() => {
          this.resetaFiltros(); // Garante que os checkboxes sejam atualizados após o DOM renderizar
        });
      },
      deep: true,
    },
  },

  methods: {
    async pegaMarcasCategoria() {
      this.marcas = await this.SProdutos.separaMarcasDeUmaCategoria(this.id);
    },
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
      if (!this.filtroSubcategoria) {
        this.SubcategoriaAFiltrar = "";
      }

      const labels = document.querySelectorAll("label");
      labels.forEach((label) => {
        const input = label.querySelector("input");
        if (input) {
          input.checked = false;
        }
        if (label.textContent?.includes("TODOS")) {
          input!.checked = true;
        }
      });

      if (this.filtroSubcategoria) {
        const intervalor = setInterval(() => {
          const labels = document.querySelectorAll("label");
          let encontrou = false;

          labels.forEach((label) => {
            const input = label.querySelector("input");
            if (label.textContent?.includes(this.filtroSubcategoria) && input) {
              input.checked = true;
              encontrou = true;

              document
                .querySelectorAll(".todosCategoria")
                .forEach((checkbox) => {
                  const checkboxX = checkbox as HTMLInputElement;
                  checkboxX.checked = false;
                });
            }
          });

          if (encontrou) {
            clearInterval(intervalor);
          }
        }, 250);

        this.SubcategoriaAFiltrar = this.filtroSubcategoria;
      }
    },

    filtroDaNav() {
      if (this.filtroSubcategoria) {
        this.SubcategoriaAFiltrar = this.filtroSubcategoria;
      }
    },
    resetaFiltrosPagina() {
      this.marcaAFiltrar = "";
      this.SubcategoriaAFiltrar = "";

      const checkboxesMarcas = document.querySelectorAll<HTMLInputElement>(
        ".checkboxFiltroMarcas"
      );
      checkboxesMarcas.forEach((checkbox) => {
        checkbox.checked = false;
      });

      const checkboxesCategorias = document.querySelectorAll<HTMLInputElement>(
        ".checkboxFiltroCategoria"
      );
      checkboxesCategorias.forEach((checkbox) => {
        checkbox.checked = false;
      });
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
  mounted() {
    const intervalo = setInterval(() => {
      const checkboxFiltro = document.querySelectorAll(".checkboxFiltroMarcas");

      if (checkboxFiltro.length > 0) {
        checkboxFiltro.forEach((checkbox) => {
          const checkboxX = checkbox as HTMLInputElement;
          checkboxX.addEventListener("click", () => {
            checkboxFiltro.forEach((box) => {
              const boxX = box as HTMLInputElement;
              boxX.checked = false;
            });
            checkboxX.checked = true;
          });
        });
        clearInterval(intervalo);
      }
    }, 250);

    const intervalo2 = setInterval(() => {
      const checkboxFiltro = document.querySelectorAll(
        ".checkboxFiltroCategoria"
      );

      if (checkboxFiltro.length > 0) {
        checkboxFiltro.forEach((checkbox) => {
          const checkboxX = checkbox as HTMLInputElement;
          checkboxX.addEventListener("click", () => {
            checkboxFiltro.forEach((box) => {
              const boxX = box as HTMLInputElement;
              boxX.checked = false;
            });
            checkboxX.checked = true;
          });
        });
        this.resetaFiltros();
        clearInterval(intervalo2);
      }
    }, 250);
  },
  async created() {
    this.pegaMarcasCategoria();
    this.subcategorias = await this.SProdutos.getSubcategorias();
    Object.keys(this.subcategorias).forEach((key) => {
      this.subcategorias[key] = this.subcategorias[key].filter(
        (subcategoria: string) => subcategoria !== ""
      );
    });

    this.filtroDaNav();
  },
  computed: {
    filtraMarcaESubcategoria() {
      return this.produtos.filter((produto) => {
        return (
          (this.marcaAFiltrar ? produto.marca === this.marcaAFiltrar : true) &&
          (this.SubcategoriaAFiltrar
            ? produto.subcategoria === this.SubcategoriaAFiltrar
            : true)
        );
      });
    },
  },
};
</script>
