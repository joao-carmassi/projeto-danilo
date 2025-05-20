'use client';

import { IProdutos } from '@/interface/IProdutos';
import ExportedImage from 'next-image-export-optimizer';
import Link from 'next/link';
import './CardProduto.css';
import slugify from 'slugify';
import cookieCarrinho from '@/controller/cookieCarrinho';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { editaValorProduto } from '@/store/slices/carrinho';
import NotificacaoController from '@/controller/NotificacaoController';

interface Props {
  produto: IProdutos;
}

const ProvidedCardProduto = ({ produto }: Props) => {
  const path = process.env.NEXT_PUBLIC_WEBSITE_BASE_PATH;
  const dispatch = useDispatch();

  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);
  if (!mounted) return null;

  const CNotificacao = new NotificacaoController();

  return (
    <div
      id="animacaoScroll"
      className="bg-base-100 group relative border border-gray-200 lg:hover:scale-105 duration-300 shadow-lg [--tw-shadow-color:rgba(17, 17, 17, 0.9)] flex flex-col gap-2 rounded-lg p-3 md:p-4 my-5"
    >
      <Link
        prefetch={false}
        className="flex flex-col gap-2"
        href={`/produto/${slugify(`${produto.nome}-${produto.sku}`, {
          strict: true,
          lower: true,
        })}`}
      >
        <ExportedImage
          placeholder="empty"
          width={190}
          height={190}
          src={`${path}/assets/img/produtos/${produto.id}.png`}
          className="w-full object-contain border border-secondary border-solid aspect-square rounded-md"
          alt="Imagem do produto"
          loading="lazy"
        />
        <ExportedImage
          placeholder="empty"
          width={70}
          height={20}
          className="w-12 mt-1.5"
          src={`${path}/assets/img/marcas/${produto.marca}.png`}
          alt={`Logo ${produto.marca}`}
          loading="lazy"
        />
        <div>
          <h2 className="text-secondary limitaTexto2Linhas font-semibold text-sm md:text-base">
            {produto.nome}
          </h2>
          <p className="text-xs limitaTexto text-gray-500">
            SKU: {produto.sku}
          </p>
          <p className="text-xs limitaTexto text-gray-500">
            {produto.codigos.join(', ')}
          </p>
        </div>
      </Link>
      <button
        onClick={() => {
          cookieCarrinho.adicionarCarrinho(produto, 1);
          dispatch(
            editaValorProduto({
              produto: produto,
              quantidade: 1,
            })
          );
          CNotificacao.geraNotificacao();
        }}
        className="bg-secondary hidden font-semibold md:group-hover:block p-2 px-4 top-1/2 rounded-md active:scale-90 duration-200 absolute right-1/2 translate-x-1/2 translate-y-1/2 mt-1.5 text-base-100"
      >
        Comprar
      </button>
      {/* <button
        // @click="adicionarAoCarrinho"
        className="btn btn-secondary mt-1.5 text-base-100"
      >
        Comprar
      </button> */}
    </div>
  );
};

export default ProvidedCardProduto;
