export interface IProdutos {
  [key: string]: IProduto[];
}

export interface IProduto {
  sku: string;
  nome: string;
  marca: string;
  categoria: string;
  subcategoria: string;
  prazo: string;
  descricao: string;
  id: string | number;
  codigos: string[];
}
