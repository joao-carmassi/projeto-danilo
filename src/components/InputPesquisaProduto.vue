<template>
  <div ref="container" class="relative">
    <label class="input input-bordered rounded-full flex items-center gap-2">
      <input
        type="text"
        v-model="inputPesquisa"
        @focus="onFocusInput"
        class="grow"
        placeholder="Digite o nome ou código da peça"
      />
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 16 16"
        fill="currentColor"
        class="h-4 w-4 opacity-70"
      >
        <path
          fill-rule="evenodd"
          d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
          clip-rule="evenodd"
        />
      </svg>
    </label>
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
  },
};
</script>
