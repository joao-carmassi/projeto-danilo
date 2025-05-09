import produtos from '@/data/db.json';
import separaProdutosPorCategoria from './separaProdutosPorCateforia';
import separaProdutosPorMarca from './separaProdutosPorMarca';
import geraCodigos from './geraCodigos';
import IProdutosFiltrados from '@/interface/IProdutosFiltrados';
import { IProdutos } from '@/interface/IProdutos';

const porMarca = () => {
  const produtosPorMarca: IProdutosFiltrados = separaProdutosPorMarca();
  for (const marca in produtosPorMarca) {
    produtosPorMarca[marca].map((produto: IProdutos) => {
      produto.codigos = geraCodigos(produto.id as string);
    });
  }
  return produtosPorMarca;
};

const porCategoria = () => {
  const produtosPorCategoria = separaProdutosPorCategoria();
  for (const categoria in produtosPorCategoria) {
    produtosPorCategoria[categoria].map((produto: IProdutos) => {
      produto.codigos = geraCodigos(produto.id as string);
    });
  }
  return produtosPorCategoria;
};

const todos = () => {
  const dados = produtos.data as IProdutos[];
  const produtosComCodigos = dados.map((produto: IProdutos) => {
    return {
      ...produto,
      codigos: geraCodigos(produto.id as string),
    };
  });
  return produtosComCodigos;
};

const agrupaSubcategoriasPorCategoria = () => {
  const produtos = porCategoria();
  const subcategoriasPorCategoria: Record<string, string[]> = {};
  for (const categoria in produtos) {
    const produtosCategoria = produtos[categoria];
    const subcategorias = produtosCategoria.map(
      (produto: IProdutos) => produto.subcategoria
    );
    subcategoriasPorCategoria[categoria] = Array.from(new Set(subcategorias));
  }
  for (const categoria in subcategoriasPorCategoria) {
    if (
      subcategoriasPorCategoria[categoria].length === 1 &&
      subcategoriasPorCategoria[categoria][0] === ''
    ) {
      subcategoriasPorCategoria[categoria] = [];
    }
  }
  return subcategoriasPorCategoria;
};

const separaMarcasDeUmProduto = () => {
  const produtos = porCategoria();
  const marcasPorTipo: Record<string, string[]> = {};
  for (const categoria in produtos) {
    const produtosCategoria = produtos[categoria];
    produtosCategoria.forEach((produto) => {
      const tipo = produto.categoria;
      const marca = produto.marca;
      if (!marcasPorTipo[tipo]) {
        marcasPorTipo[tipo] = [];
      }
      if (!marcasPorTipo[tipo].includes(marca)) {
        marcasPorTipo[tipo].push(marca);
      }
    });
  }
  return marcasPorTipo;
};

const separaCategoriasDeUmaMarca = () => {
  const produtos = porMarca();
  const categoriasPorMarca: Record<string, string[]> = {};
  for (const marca in produtos) {
    const produtosMarca = produtos[marca];
    produtosMarca.forEach((produto) => {
      const marca = produto.marca;
      const categoria = produto.categoria;
      if (!categoriasPorMarca[marca]) {
        categoriasPorMarca[marca] = [];
      }
      if (!categoriasPorMarca[marca].includes(categoria)) {
        categoriasPorMarca[marca].push(categoria);
      }
    });
  }
  return categoriasPorMarca;
};

const getProdutos = {
  todos,
  porMarca,
  porCategoria,
  separaMarcasDeUmProduto,
  agrupaSubcategoriasPorCategoria,
  separaCategoriasDeUmaMarca,
};

export default getProdutos;
