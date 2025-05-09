import type { IProdutos } from './IProdutos';

export default interface ICarrinho {
  produto: IProdutos;
  quantidade: number;
}
