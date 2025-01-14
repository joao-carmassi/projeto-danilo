export interface IProdutos {
  [key: string]: IProduto[];
}

export interface IProduto {
  nome: string;
  sku: string;
  descricao: string;
  prazo: string;
  marca: string;
  equipamento: string;
  id: string | number;
  codigos: string[];
}
