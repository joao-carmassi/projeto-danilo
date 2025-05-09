// getPdf.ts
import listaPdfs from '@/data/manuais.json';
import { IPdfs, IPdf } from '@/interface/IPdf';

const getPdf = () => {
  const pdfs: IPdfs = {};
  const setMarcas = new Set<string>();

  listaPdfs.data.forEach((pdf: IPdf) => {
    setMarcas.add(pdf.marca);
    if (!pdfs[pdf.marca]) {
      pdfs[pdf.marca] = [];
    }
    pdfs[pdf.marca].push(pdf);
  });

  const marcas = Array.from(setMarcas);
  return { pdfs, marcas };
};

export default getPdf;
