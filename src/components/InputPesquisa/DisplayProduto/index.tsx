'use client';

import styles from './DisplayProduto.module.css';
import RowProduto from '@/components/RowProduto';
import { IProdutos } from '@/interface/IProdutos';
import getProdutos from '@/utils/getProdutos';

interface Props {
  pesquisa: string;
}

const DisplayProduto = ({ pesquisa }: Props) => {
  const produtos: IProdutos[] = getProdutos.todos();

  const filtrarProdutos = () => {
    if (pesquisa.trim() === '') return [];
    const tokens = pesquisa.trim().toLowerCase().split(/\s+/).filter(Boolean);

    return produtos.filter((p) => {
      const sku = p.sku.toLowerCase();
      const nome = p.nome.toLowerCase();
      const id = p.id.toLowerCase();
      const combinado = `${sku} ${nome} ${id}`;
      return tokens.every((t) => combinado.includes(t));
    });
  };

  const produtosFiltrados = filtrarProdutos();

  return (
    <div
      className={`${styles.contanerDisplayProduto} absolute block z-50 rounded-md shadow-md w-full bg-base-100 top-16`}
    >
      {/* <!-- <p className="text-gray-600 px-4 pb-4">
      Resultado da pesquisa para: {{ produtoPesquisado }}
    </p> --> */}
      {produtosFiltrados.length > 0 ? (
        <div className="max-h-[45vh] mr-1 rounded-md overflow-auto">
          {produtosFiltrados?.map((produto, index) => (
            <div
              key={`${produto.id}-${index}`}
              className="hover:bg-base-200 p-1.5 border-b border-gray-300"
            >
              <RowProduto
                produto={produto}
                imgSize="h-10"
                pesquisa={pesquisa}
              />
            </div>
          ))}
        </div>
      ) : (
        <p className="py-5 px-5 italic">Nenhum resultado encontrado.</p>
      )}
    </div>
  );
};

export default DisplayProduto;
