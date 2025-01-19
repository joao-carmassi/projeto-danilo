<template>
  <div
    role="alert"
    class="rounded-full border-none indicator p-2.5 alert bg-green-600 text-white fixed w-fit bottom-3 left-3 z-40"
    :class="{ 'md:rounded-xl': classeAtiva }"
  >
    <a
      class="flex gap-2"
      target="_blank"
      href="https://wa.me/5511969189244?text=Oi, gostaria de ajuda de um especialista para selecionar a peça para meu VRF."
    >
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
        class=""
      >
        <path d="M3 21l1.65 -3.8a9 9 0 1 1 3.4 2.9l-5.05 .9"></path>
        <path
          d="M9 10a.5 .5 0 0 0 1 0v-1a.5 .5 0 0 0 -1 0v1a5 5 0 0 0 5 5h1a.5 .5 0 0 0 0 -1h-1a.5 .5 0 0 0 0 1"
        ></path>
      </svg>
      <div v-if="classeAtiva" class="items-center hidden md:flex gap-2">
        <span>Encontre a Peça Ideal com Nossos Especialistas</span>
      </div>
    </a>
    <button
      class="indicator-item hidden md:block"
      v-if="classeAtiva"
      @click="fechaAlerta"
    >
      <span
        class="badge border border-white text-xs px-1.5 pb-0.5 text-white badge-secondary"
        >x</span
      >
    </button>
  </div>
</template>

<script lang="ts">
export default {
  data() {
    return {
      classeAtiva: true,
    };
  },
  methods: {
    fechaAlerta() {
      this.classeAtiva = false;
    },
  },
};
</script>
