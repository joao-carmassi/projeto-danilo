import produtos from '@/data/db.json';
import { IProdutos } from '@/interface/IProdutos';
import IProdutosFiltrados from '@/interface/IProdutosFiltrados';
import { IProdutosSemCodigos } from '@/interface/IProdutosSemCodigos';

const separaProdutosPorCategoria = () => {
  const produtosPorCategoria = produtos.data.reduce<IProdutosFiltrados>(
    (acc, produto: IProdutosSemCodigos) => {
      if (!acc[produto.categoria]) {
        acc[produto.categoria] = [];
      }
      acc[produto.categoria].push(produto as IProdutos);
      return acc;
    },
    {}
  );

  return produtosPorCategoria;
};

export default separaProdutosPorCategoria;
