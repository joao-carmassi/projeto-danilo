import type { IProduto } from "./IProdutos";

export default interface ICarrinho {
  produto: IProduto;
  quantidade: number;
}
