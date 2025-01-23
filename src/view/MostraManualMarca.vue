<template>
  <section>
    <section>
      <div class="w-full block">
        <img class="w-full" :src="`./manuais/capas/${id}.jpg`" />
      </div>
      <div
        class="flex flex-col-reverse gap-y-5 py-5 md:flex-row items-start justify-center"
      >
        <div class="w-full flex flex-col justify-center items-start">
          <h2
            class="w-full text-xl py-3 md:py-5 font-semibold text-secondary text-center"
          >
            Condensadora:
          </h2>
          <ul class="w-3/5 flex flex-col items-start mt-5 mx-auto">
            <div v-for="(manual, index) in pdfs[id]" :key="index">
              <li
                class="my-2 link-hover font-semibold"
                v-if="manual.tipo === 'Condensadora'"
              >
                <a
                  :href="`./manuais/pdfs/${manual.documento}.pdf`"
                  :download="`${manual.documento}.pdf`"
                  >{{ manual.documento }}.pdf</a
                >
                <p class="text-gray-400 font-normal lowercase">
                  {{ manual.tipo }} • {{ manual.marca }}
                </p>
              </li>
            </div>
          </ul>
        </div>
        <hr class="border-secondary md:hidden w-full" />
        <div class="w-full flex flex-col justify-center items-start">
          <h2
            class="w-full text-xl py-3 md:py-5 font-semibold text-secondary text-center"
          >
            Evaporadora:
          </h2>
          <ul class="w-3/5 flex flex-col mt-5 mx-auto">
            <div v-for="(manual, index) in pdfs[id]" :key="index">
              <li
                class="my-2 link-hover font-semibold"
                v-if="manual.tipo === 'Evaporadora'"
              >
                <a
                  :href="`./manuais/pdfs/${manual.documento}.pdf`"
                  :download="`${manual.documento}.pdf`"
                  >{{ manual.documento }}.pdf</a
                >
                <p class="text-gray-400 font-normal lowercase">
                  {{ manual.tipo }} • {{ manual.marca }}
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
  async mounted() {
    window.scrollTo(0, 0);
    this.pdfs = await this.SPdf.getPdf();
    console.log(this.pdfs[this.id]);
  },
};
</script>
