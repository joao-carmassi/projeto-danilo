import produtos from '@/data/db.json';

const filtraMarcas = () => {
  const marcas = produtos.data.map((produto) => produto.marca);
  const marcasUnicas = [...new Set(marcas)];
  return marcasUnicas;
};

export default filtraMarcas;
