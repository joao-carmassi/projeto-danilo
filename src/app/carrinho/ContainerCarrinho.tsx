'use client';

import ICarrinho from '@/interface/ICarrinho';
import { RootState } from '@/store';
import { useSelector } from 'react-redux';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import LinhaProduto from './LinhaProduto.tsx';

const ContainerCarrinho = () => {
  const produtosCarrinho = useSelector(
    (state: RootState) => state.carrinho
  ) as ICarrinho[];

  function enviaCarrinhoWhatsApp() {
    const mensagem = `Olá, gostaria de fazer uma cotação:%0A%0A*${
      produtosCarrinho.length >= 2 ? 'Produtos' : 'Produto'
    }:*${produtosCarrinho
      .map((item) => {
        return `%0A%0A*Nome:* ${item.produto.nome}%0A*Quantidade:* ${
          item.quantidade
        }%0A*Codigo:* ${item.produto.codigos.join(', ')}%0A*Sku:* ${
          item.produto.sku
        }`;
      })
      .join('')}`;

    window.open(`https://wa.me/5511969189244?text=${mensagem}`);
  }

  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);
  if (!mounted) return null;

  return (
    <section className="md:px-12 lg:px-52 bg-base-100">
      <div className="breadcrumbs px-4 pt-5 text-sm">
        <ul>
          <li>
            <Link prefetch={false} href="/">
              Pagina inicial
            </Link>
          </li>
          <li>carrinho</li>
        </ul>
      </div>
      <div className="w-full p-6 lg:p-8 grid place-items-center">
        <h1 className="text-2xl md:text-3xl lg:text-4xl text-center font-semibold tracking-wide">
          Carrinho de compras
        </h1>
      </div>
      <div className="min-h-96">
        {produtosCarrinho.length > 0 ? (
          <div className="flex flex-col gap-7 md:gap-5">
            <table className="table">
              <thead>
                <tr>
                  <th className="text-lg">Produtos</th>
                  <th className="text-lg hidden md:table-cell">Quantidade</th>
                  <th className="text-lg"></th>
                </tr>
              </thead>
              <tbody>
                {produtosCarrinho.map((produto: ICarrinho) => (
                  <LinhaProduto key={produto.produto.id} produto={produto} />
                ))}
              </tbody>
            </table>
            <div className="w-full flex justify-end pb-10">
              <div className="flex w-full md:w-72 px-4 flex-col gap-2">
                {/* <!-- <div className="flex justify-between items-center">
             <h3 className="text-xl font-semibold">Total:</h3>
             <ValorProduto
               className="text-green-600 text-lg"
               :valor="SCarrinho.produtos.total"
             />
           </div> --> */}
                <div className="flex gap-2 flex-col">
                  <button
                    onClick={() => {
                      enviaCarrinhoWhatsApp();
                    }}
                    className="w-full btn btn-success bg-green-600 text-base-100"
                  >
                    Iniciar consulta
                  </button>
                  <Link
                    prefetch={false}
                    className="w-full btn btn-success btn-outline text-base-100"
                    href="/"
                  >
                    Ver mais Produtos
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="flex flex-col px-5 gap-3 items-center">
            <p className="text-lg italic">O carrinho de compras está vazio.</p>
            <Link
              prefetch={false}
              href="/"
              className="btn btn-secondary text-base-100"
            >
              Ver produtos
            </Link>
          </div>
        )}
      </div>
    </section>
  );
};

export default ContainerCarrinho;
