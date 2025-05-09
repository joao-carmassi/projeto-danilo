import getProdutos from '@/utils/getProdutos';
import ContainerMarca from './ContainerMarca';
import slugify from 'slugify';

interface Props {
  params: Promise<{
    marca: string;
  }>;
}

export async function generateMetadata({ params }: Props) {
  const { marca } = (await params) || '';

  return {
    title: `${marca} - Loja do VRF`,
    description: `Compre produtos da marca ${marca} na Loja do VRF`,
  };
}

const PaginaMarca = async ({ params }: Props) => {
  const { marca } = (await params) || '';

  const todasCategorias = getProdutos.separaCategoriasDeUmaMarca();
  const todosProdutos = getProdutos.porMarca();

  const marcaArrumada = Object.keys(todosProdutos).find((lista) => {
    return slugify(lista, { lower: true, strict: true }) === marca;
  });

  if (!marcaArrumada) {
    return (
      <main>
        <div className="flex justify-center items-center h-screen">
          <h1 className="text-3xl font-bold">Marca não encontrada</h1>
        </div>
      </main>
    );
  }

  const categorias = todasCategorias[marcaArrumada] || [];
  const produtos = todosProdutos[marcaArrumada] || [];

  return (
    <main>
      <ContainerMarca
        produtos={produtos}
        categorias={categorias}
        marca={marcaArrumada}
      />
    </main>
  );
};

export async function generateStaticParams() {
  const objetoMarcas = getProdutos.porMarca();
  const marcas = Object.keys(objetoMarcas);

  return marcas.map((marca) => ({
    marca: slugify(marca, { lower: true, strict: true }),
  }));
}

export default PaginaMarca;
