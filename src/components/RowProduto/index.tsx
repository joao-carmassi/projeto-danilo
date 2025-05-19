import { IProdutos } from '@/interface/IProdutos';
import ExportedImage from 'next-image-export-optimizer';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import slugify from 'slugify';

interface Props {
  produto: IProdutos;
  imgSize: string;
  pesquisa?: string;
}

const RowProduto = ({ produto, imgSize, pesquisa = '' }: Props) => {
  function deixaNomeDoProdutoIgualPesquisaNegrito() {
    let nome = produto.nome;
    if (!pesquisa) return nome;

    const termos = pesquisa.split(' ').filter(Boolean);
    termos.forEach((termo) => {
      const regex = new RegExp(`(${termo})`, 'gi');
      nome = nome.replace(regex, `<span class="font-bold">$1</span>`);
    });

    return nome;
  }

  function deixaCodigoDoProdutoIgualPesquisaNegrito() {
    let codigo = produto.codigos.join(', ');
    if (!pesquisa) return codigo;

    const termos = pesquisa.split(' ').filter(Boolean);
    termos.forEach((termo) => {
      const regex = new RegExp(`(${termo})`, 'gi');
      codigo = codigo.replace(regex, `<span class="font-bold">$1</span>`);
    });

    return codigo;
  }

  const path = process.env.NEXT_PUBLIC_WEBSITE_BASE_PATH;

  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);
  if (!mounted) return null;

  return (
    <Link
      href={`/produto/${slugify(`${produto.nome}-${produto.sku}`, {
        lower: true,
        strict: true,
      })}`}
      className="flex items-center gap-3"
    >
      <ExportedImage
        width={60}
        height={60}
        placeholder="empty"
        src={`${path}/assets/img/produtos/${produto.id}.png`}
        alt=""
        className={`block object-contain aspect-square border border-secondary rounded-sm ${imgSize}`}
      />
      <div>
        <h2
          dangerouslySetInnerHTML={{
            __html: deixaNomeDoProdutoIgualPesquisaNegrito(),
          }}
          className="break-all text-secondary font-semibold"
        />
        <p
          dangerouslySetInnerHTML={{
            __html: deixaCodigoDoProdutoIgualPesquisaNegrito(),
          }}
          className="text-gray-600"
        />
      </div>
    </Link>
  );
};

export default RowProduto;
