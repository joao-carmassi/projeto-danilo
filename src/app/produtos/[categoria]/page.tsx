import slugify from 'slugify';
import getProdutos from '@/utils/getProdutos';
import ContainerProdutos from './ContainerProdutos';
import { Suspense } from 'react';

interface Props {
  params: Promise<{
    categoria: string;
  }>;
}

function encontrarCategoriaOriginal(slug: string): string | undefined {
  const categorias = Object.keys(getProdutos.agrupaSubcategoriasPorCategoria());
  return categorias.find(
    (nome) => slugify(nome, { lower: true, strict: true }) === slug
  );
}

export async function generateMetadata({ params }: Props) {
  const { categoria } = await params;

  const titulo = categoria ?? 'Categoria';
  return {
    title: `Produtos ${titulo} | Loja do VRF`,
    description: `Produtos ${titulo}`,
  };
}

const PaginaProdutos = async ({ params }: Props) => {
  const { categoria } = await params;
  const categoriaOriginal = encontrarCategoriaOriginal(categoria);

  if (!categoriaOriginal) return <div>Categoria não encontrada</div>;

  const todasMarcas = getProdutos.separaMarcasDeUmProduto();
  const marcas = todasMarcas[categoriaOriginal] ?? [];

  const todasCategorias = getProdutos.agrupaSubcategoriasPorCategoria();
  const categorias = todasCategorias[categoriaOriginal] ?? [];

  const todosOsProdutosPorCategoria = getProdutos.porCategoria();
  const produtos = todosOsProdutosPorCategoria[categoriaOriginal] ?? [];

  return (
    <main>
      <Suspense>
        <ContainerProdutos
          categoria={categoriaOriginal}
          produtos={produtos}
          categorias={categorias}
          marcas={marcas}
        />
      </Suspense>
    </main>
  );
};

export async function generateStaticParams() {
  const listas = getProdutos.agrupaSubcategoriasPorCategoria();
  return Object.keys(listas).map((cat) => ({
    categoria: slugify(cat, { lower: true, strict: true }),
  }));
}

export default PaginaProdutos;
