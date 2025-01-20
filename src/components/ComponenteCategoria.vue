<template>
  <details class="detailsNav" id="detailpai ">
    <summary class="font-semibold text-xs">CATEGORIAS</summary>
    <ul class="flex flex-col py-4 justify-start items-start top-6 rounded-none">
      <li
        v-for="(categoria, index) in categorias"
        :key="index"
        class="flex static flex-row"
      >
        <details class="detailsNav static" id="detailfilho ">
          <summary class="font-semibold static text-secondary">
            {{ categoria }}
          </summary>
          <ul
            class="flex h-96 absolute py-2 bg-base-100 flex-col justify-start items-start top-0 z-40 pr-5 left-[6.1rem] rounded-none shadow-lg"
          >
            <li class="mx-5">
              <p class="text-secondary text-lg mx-2 font-semibold text-nowrap">
                {{ categoria }}:
              </p>
            </li>
            <li
              class="p-0 m-0 border-b border-gray-200 opacity-100 w-full"
            ></li>
            <li
              v-for="(subcategoria, index) in subcategorias[categoria]"
              :key="index"
              class="mx-5"
            >
              <p class="text-secondary mx-2 font-semibold text-nowrap">
                {{ subcategoria }}
              </p>
            </li>
          </ul>
        </details>
      </li>
    </ul>
  </details>
</template>
<!-- <template>
  <details class="detailsNav" id="detailpai ">
    <summary class="font-semibold text-xs">CATEGORIAS</summary>
    <ul class="flex flex-col py-4 justify-start items-start top-6 rounded-none">
      <li
        v-for="(categoria, index) in categorias"
        :key="index"
        class="flex static flex-row"
      >
        <details class="detailsNav static" id="detailfilho ">
          <summary class="font-semibold static text-secondary">
            {{ categoria }}
          </summary>
          <ul
            class="flex h-96 absolute py-2 bg-base-100 flex-col justify-start items-start top-0 z-40 pr-5 left-[6.1rem] rounded-none shadow-lg"
          >
            <li class="mx-5">
              <p class="text-secondary text-lg mx-2 font-semibold text-nowrap">
                {{ categoria }}:
              </p>
            </li>
            <li
              class="p-0 m-0 border-b border-gray-200 opacity-100 w-full"
            ></li>
            <li
              v-for="(subcategoria, index) in subcategorias[categoria]"
              :key="index"
              class="mx-5"
            >
              <p class="text-secondary mx-2 font-semibold text-nowrap">
                {{ subcategoria }}
              </p>
            </li>
          </ul>
        </details>
      </li>
    </ul>
  </details>
</template> -->

<script lang="ts">
import { storeProdutos } from "@/store/SProdutos";

export default {
  data() {
    return {
      SProdutos: storeProdutos(),
      categorias: [] as string[],
      subcategorias: {} as Record<string, string[]>,
    };
  },
  async created() {
    this.categorias = await this.SProdutos.getCategorias();
    this.subcategorias = await this.SProdutos.salvaSubcategorias();
    console.log(await this.SProdutos.salvaSubcategorias());
  },
  computed: {
    divideArray(array: string[], tamanho: number = 5): string[][] {
      const resultado: string[][] = [];
      for (let i = 0; i < array.length; i += tamanho) {
        resultado.push(array.slice(i, i + tamanho));
      }
      return resultado;
    },
  },
};
</script>
