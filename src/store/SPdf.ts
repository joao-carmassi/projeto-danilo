import type IPdf from "@/interface/IPdf";
import baixaPdfJson from "@/service/baixaPdf";
import { defineStore } from "pinia";

export const storePdf = defineStore("pdf", {
  state: () => {
    return {
      marcas: [] as string[],
      pdfs: {} as Record<string, IPdf[]>,
    };
  },

  actions: {
    async getPdf() {
      const listaPdfs = await baixaPdfJson();
      this.agrupaPdfPorMarca(listaPdfs);
      return this.pdfs;
    },
    async agrupaPdfPorMarca(listaPdfs: IPdf[]) {
      const marcas = new Set<string>();
      listaPdfs.forEach((pdf) => {
        marcas.add(pdf.marca);
      });
      listaPdfs.forEach((pdf) => {
        const marca = pdf.marca;
        if (!this.pdfs[marca]) {
          this.pdfs[marca] = [];
        }
        this.pdfs[marca].push(pdf);
        this.marcas = Array.from(marcas);
      });
    },
  },
});
