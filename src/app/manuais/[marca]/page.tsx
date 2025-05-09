import { IPdf } from '@/interface/IPdf';
import getPdf from '@/utils/getPdf';
import slugify from 'slugify';
import ContainerManual from './ContainerManual';

interface Props {
  params: Promise<{
    marca: string;
  }>;
}

export async function generateMetadata({ params }: Props) {
  const { marca } = await params;
  const { marcas } = getPdf();
  const marcaArrumada = marcas.find((marcaFiltrada) => {
    return slugify(marcaFiltrada, { lower: true, strict: true }) === marca;
  });

  if (!marcaArrumada) {
    return {
      title: 'Marca não encontrada',
    };
  }

  return {
    title: `Manuais ${marcaArrumada} - Loja do VRF`,
  };
}

const PagidaMarcaMauais = async ({ params }: Props) => {
  const { marca } = await params;
  const { pdfs, marcas } = getPdf();

  const marcaArrumada = marcas.find((marcaFiltrada) => {
    return slugify(marcaFiltrada, { lower: true, strict: true }) === marca;
  });

  if (!marcaArrumada) {
    return (
      <main>
        <section>
          <h1>Marca não encontrada</h1>
        </section>
      </main>
    );
  }

  const manuais = pdfs[marcaArrumada] as IPdf[];

  return (
    <main>
      <ContainerManual marca={marcaArrumada} manuais={manuais} />
    </main>
  );
};

export function generateStaticParams() {
  const { marcas } = getPdf();
  return marcas.map((marca) => ({
    marca: slugify(marca, { lower: true, strict: true }),
  }));
}

export default PagidaMarcaMauais;
