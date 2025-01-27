<template>
  <div class="flex border border-secondary rounded-md items-center">
    <button
      @click="alterarQuantidade(-1)"
      class="w-7 h-full flex items-center justify-center"
    >
      -
    </button>
    <input
      id="inputQuantidade"
      class="w-12 h-full text-center outline-none"
      type="number"
      v-model.number="inputQuantidade"
      min="1"
      @blur="verificarInput"
    />
    <button
      @click="alterarQuantidade(1)"
      class="w-7 h-full flex items-center justify-center"
    >
      +
    </button>
  </div>
</template>

<script lang="ts">
export default {
  props: {
    quantidade: {
      type: Number,
      default: 1,
    },
  },
  data() {
    return {
      inputQuantidade: this.quantidade,
    };
  },
  methods: {
    alterarQuantidade(valor: number) {
      if (isNaN(this.inputQuantidade) || this.inputQuantidade === null) {
        this.inputQuantidade = 0;
      }

      const novaQuantidade = this.inputQuantidade + valor;

      if (novaQuantidade < 1) {
        this.inputQuantidade = 1;
      } else if (novaQuantidade > 99) {
        this.inputQuantidade = 99;
      } else {
        this.inputQuantidade = novaQuantidade;
      }

      this.$emit("update:quantidade", this.inputQuantidade);
    },
    verificarInput() {
      if (!this.inputQuantidade || isNaN(this.inputQuantidade)) {
        this.inputQuantidade = 1;
      }
      if (this.inputQuantidade < 1) {
        this.inputQuantidade = 1;
      } else if (this.inputQuantidade > 99) {
        this.inputQuantidade = 99;
      }
    },
  },
  watch: {
    quantidade(newQuantidade) {
      this.inputQuantidade = newQuantidade;
    },
  },
  mounted() {
    this.$emit("update:quantidade", this.inputQuantidade);
  },
  emits: ["update:quantidade"],
};
</script>

<style scoped>
input[type="number"]::-webkit-inner-spin-button,
input[type="number"]::-webkit-outer-spin-button {
  -webkit-appearance: none;
  margin: 0;
}
input[type="number"] {
  -moz-appearance: textfield;
  appearance: textfield;
}
</style>
