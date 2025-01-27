<template>
  <div ref="container" class="relative flex join">
    <label
      class="input h-11 px-3 w-full rounded-l-lg rounded-r-none flex items-center gap-2"
    >
      <input
        type="text"
        v-model="inputPesquisa"
        @focus="onFocusInput"
        class="grow font-semibold placeholder:font-normal"
        placeholder="Digite o nome ou código da peça"
      />
    </label>
    <div class="bg-primary grid place-items-center w-12 rounded-r-lg">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        width="16"
        height="16"
        stroke-width="2"
        class="text-white"
      >
        <path d="M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0"></path>
        <path d="M21 21l-6 -6"></path>
      </svg>
    </div>
    <DisplayProduto
      v-if="mostrarResultados"
      @limpaPesquisa="limparInput"
      :produtoPesquisado="inputPesquisa"
    />
  </div>
</template>

<script lang="ts">
import DisplayProduto from "./DisplayProduto.vue";

export default {
  components: { DisplayProduto },
  data() {
    return {
      inputPesquisa: "",
      mostrarResultados: false,
    };
  },
  mounted() {
    document.addEventListener("click", this.fecharResultados);
  },
  beforeUnmount() {
    document.removeEventListener("click", this.fecharResultados);
  },
  methods: {
    limparInput() {
      this.inputPesquisa = "";
    },
    fecharResultados(event: Event) {
      const containerPesquisa = this.$refs.container as HTMLElement;

      if (
        !containerPesquisa ||
        !containerPesquisa.contains(event.target as Node)
      ) {
        this.mostrarResultados = false;
      }
    },
    onFocusInput() {
      if (this.inputPesquisa.length > 0) {
        this.mostrarResultados = true;
      }
    },
  },
  watch: {
    inputPesquisa(newValue) {
      if (newValue.trim() === "") {
        this.mostrarResultados = false;
      } else {
        this.mostrarResultados = true;
      }
    },
    $route() {
      this.limparInput();
      this.mostrarResultados = false;
    },
  },
};
</script>
