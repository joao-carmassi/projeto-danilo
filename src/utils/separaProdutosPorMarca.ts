import produtos from '@/data/db.json';
import { IProdutos } from '@/interface/IProdutos';
import IProdutosFiltrados from '@/interface/IProdutosFiltrados';
import { IProdutosSemCodigos } from '@/interface/IProdutosSemCodigos';

const separaProdutosPorMarca = () => {
  const produtosPorCategoria = produtos.data.reduce<IProdutosFiltrados>(
    (acc, produto: IProdutosSemCodigos) => {
      if (!acc[produto.marca]) {
        acc[produto.marca] = [];
      }
      acc[produto.marca].push(produto as IProdutos);
      return acc;
    },
    {}
  );

  return produtosPorCategoria;
};

export default separaProdutosPorMarca;
