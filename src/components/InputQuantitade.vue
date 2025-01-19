<template>
  <div class="flex border border-secondary rounded-md items-center">
    <button
      @click="alterarQuantidade(-1)"
      class="w-7 h-full flex items-center justify-center"
    >
      -
    </button>
    <input
      class="w-12 h-full text-center outline-none"
      type="number"
      v-model.number="inputQuantidade"
      min="1"
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
  methods: {
    alterarQuantidade(valor: number) {
      if (this.inputQuantidade + valor < 1) return;
      this.inputQuantidade += valor;
      this.$emit("update:quantidade", this.inputQuantidade);
    },
  },
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
