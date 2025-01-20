export interface IProdutos {
  [key: string]: IProduto[];
}

export interface IProduto {
  sku: string;
  nome: string;
  marca: string;
  categoria: string;
  prazo: string;
  id: string | number;
  descricao: string;
  codigos: string[];
}
