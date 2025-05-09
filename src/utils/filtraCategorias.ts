import produtos from '@/data/db.json';

const filtraCategoria = () => {
  const categorias = produtos.data.map((produto) => produto.categoria);
  const categoriasUnicas = [...new Set(categorias)];
  return categoriasUnicas;
};

export default filtraCategoria;
