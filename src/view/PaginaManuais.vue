<template>
  <section class="flex min-h-[83svh] flex-col items-center justify-center">
    <div class="w-full flex justify-center items-center py-10">
      <h2 class="mx-auto text-2xl md:text-3xl text-secondary font-semibold">
        Escolha o fabricante:
      </h2>
    </div>
    <div
      class="md:w-11/12 flex items-center justify-center flex-wrap gap-x-7 gap-y-20 lg:w-10/12 mb-10"
    >
      <div
        v-for="(marca, index) in SPdf.marcas"
        :key="index"
        class="shadow-lg md:hover:scale-105 duration-300 [--tw-shadow-color:rgba(17, 17, 17, 0.9)] p-5 rounded-md border border-gray-200"
      >
        <RouterLink class="flex flex-col gap-4" :to="`/manuais/${marca}`">
          <div class="mx-auto h-12 grid place-items-center">
            <img
              class="w-32"
              :src="`./img/marcas/${marca}.png`"
              :alt="`Logo ${marca}`"
            />
          </div>
          <div class="w-52 h-full grid place-items-center">
            <img
              class="aspect-square object-cover rounded-md"
              :src="`./manuais/icons/${marca}.png`"
              :alt="`Capa marca`"
            />
          </div>
        </RouterLink>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import type IPdf from "@/interface/IPdf";
import { storePdf } from "@/store/SPdf";

export default {
  data() {
    return {
      SPdf: storePdf(),
      pdfs: {} as Record<string, IPdf[]>,
    };
  },
  async mounted() {
    window.scrollTo(0, 0);
    this.pdfs = await this.SPdf.getPdf();
    console.log(this.pdfs);
    console.log(this.SPdf.marcas);
  },
};
</script>
<style lang=""></style>
