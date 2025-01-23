import type IPdf from "@/interface/IPdf";
import baixaPdfJson from "@/service/baixaPdf";
import { defineStore } from "pinia";

export const storePdf = defineStore("pdf", {
  state: () => {
    return {
      pdf: [] as IPdf[],
      marcas: {} as Record<string, IPdf[]>,
    };
  },

  actions: {
    async getPdf() {
      this.pdf = await baixaPdfJson();
      this.agrupaPdfPorMarca();
      console.log(this.marcas);
      return this.marcas;
    },
    async agrupaPdfPorMarca() {
      const marcas = new Set<string>();
      this.pdf.forEach((pdf) => {
        marcas.add(pdf.mraca);
      });
      this.pdf.forEach((pdf) => {
        const marca = pdf.mraca;
        if (!this.marcas[marca]) {
          this.marcas[marca] = [];
        }
        this.marcas[marca].push(pdf);
      });
    },
  },
});
