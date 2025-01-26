<template>
  <section>
    <section>
      <div class="w-full block">
        <img loading="lazy" class="w-full" :src="`./manuais/capas/${id}.jpg`" />
      </div>
      <div class="flex items-center justify-center py-10">
        <h2
          id="tituloManuais"
          class="text-3xl uppercase border-b-2 border-gray-500 pb-1 font-semibold text-secondary"
        >
          Manuais Técnicos
        </h2>
      </div>
      <div
        class="flex mx-auto flex-col-reverse gap-y-5 py-5 pb-16 md:flex-row items-start justify-center"
      >
        <div class="w-full flex gap-x-5 flex-col justify-center items-start">
          <div class="w-full grid place-items-center">
            <h2
              class="bg-secondary text-white text-xl px-5 rounded-md md:py-2 font-semibold text-center"
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
              <li class="my-2 break-all link-hover font-semibold">
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
        <hr class="border-secondary md:hidden w-full" />
        <div class="divider divider-secondary divider-horizontal"></div>
        <div class="w-full flex flex-col justify-center items-start">
          <div class="w-full grid place-items-center">
            <h2
              class="bg-secondary text-white text-xl px-5 rounded-md py-2 font-semibold text-center"
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
              <li class="my-2 break-all link-hover font-semibold">
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
          (manual) => manual.tipo === "Condensadora"
        ) || []
      );
    },
    evaporadoraManual() {
      return (
        this.pdfs[this.id]?.filter((manual) => manual.tipo === "Evaporadora") ||
        []
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
