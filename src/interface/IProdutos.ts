export interface IProdutos {
  [key: string]: IProduto[];
}

export interface IProduto {
  nome: string;
  valor: number;
  descricao: string;
  marca: string;
  tipo: string;
  codigos: string[];
  id: string;
}
