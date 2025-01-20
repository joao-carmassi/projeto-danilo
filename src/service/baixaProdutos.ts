import type { IProdutos } from "@/interface/IProdutos";
import axios from "axios";

let data: IProdutos | null = null;
let dataExiste: boolean = false;
let requestPromise: Promise<IProdutos> | null = null;

export function baixaProdutosJson(): Promise<IProdutos> {
  if (dataExiste) {
    return Promise.resolve(data as IProdutos);
  }

  if (requestPromise) {
    return requestPromise;
  }

  requestPromise = axios.get<IProdutos>("./db.json").then((res) => {
    data = res.data;
    dataExiste = true;
    requestPromise = null;
    return data;
  });

  return requestPromise;
}
