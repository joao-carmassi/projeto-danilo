<template>
  <section>
    <section>
      <div class="w-full block">
        <img
          loading="lazy"
          class="w-full"
          :src="`./manuais/capas/${id}.webp`"
        />
      </div>
      <div class="flex justify-center items-center py-10">
        <h2
          id="tituloManuais"
          class="border-b-2 border-gray-500 text-3xl text-secondary font-semibold pb-1 uppercase"
        >
          Manuais Técnicos
        </h2>
      </div>
      <div
        class="flex flex-col-reverse justify-center gap-y-5 items-start md:flex-row mx-auto pb-16 py-5"
      >
        <div class="flex flex-col justify-center w-full gap-x-5 items-start">
          <div class="grid w-full place-items-center">
            <h2
              class="bg-secondary rounded-md text-center text-white text-xl font-semibold md:py-2 px-5"
            >
              Unidade Condensadora
            </h2>
          </div>
          <ul class="grid grid-cols-2 mt-5 mx-auto">
            <div
              class="px-4"
              :class="{ 'border-r': index % 2 === 0 }"
              v-for="(manual, index) in condensadoraManual"
              :key="index"
            >
              <li class="break-all font-semibold link-hover my-2">
                <a
                  :href="`./manuais/pdfs/${manual.documento}.pdf`"
                  :download="`${manual.documento}.pdf`"
                >
                  {{ manual.documento }}
                </a>
                <p class="text-gray-500 font-normal">
                  {{ manual.modelo }}
                </p>
              </li>
            </div>
          </ul>
        </div>
        <hr class="border-secondary w-full md:hidden" />
        <div class="divider divider-horizontal divider-secondary"></div>
        <div class="flex flex-col justify-center w-full items-start">
          <div class="grid w-full place-items-center">
            <h2
              class="bg-secondary rounded-md text-center text-white text-xl font-semibold px-5 py-2"
            >
              Unidade Evaporadora
            </h2>
          </div>
          <ul class="grid grid-cols-2 mt-5 mx-auto">
            <div
              class="px-4"
              :class="{ 'border-r': index % 2 === 0 }"
              v-for="(manual, index) in evaporadoraManual"
              :key="index"
            >
              <li class="break-all font-semibold link-hover my-2">
                <a
                  :href="`./manuais/pdfs/${manual.documento}.pdf`"
                  :download="`${manual.documento}`"
                >
                  {{ manual.documento }}
                </a>
                <p class="text-gray-500 font-normal">
                  {{ manual.modelo }}
                </p>
              </li>
            </div>
          </ul>
        </div>
      </div>
    </section>
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
      id: this.$route.params.id as string,
    };
  },
  computed: {
    condensadoraManual() {
      return (
        this.pdfs[this.id]?.filter(
          (manual) => manual.tipo.toLocaleLowerCase() === "condensadora"
        ) || []
      );
    },
    evaporadoraManual() {
      return (
        this.pdfs[this.id]?.filter(
          (manual) => manual.tipo.toLocaleLowerCase() === "evaporadora"
        ) || []
      );
    },
  },
  async mounted() {
    const tituloManuais = document.getElementById(
      "tituloManuais"
    ) as HTMLElement;
    this.pdfs = await this.SPdf.getPdf();
    const intervalo = setInterval(() => {
      tituloManuais.scrollIntoView({ behavior: "smooth", block: "center" });
      clearInterval(intervalo);
    }, 500);
  },
};
</script>
