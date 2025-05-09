'use client';

import { memo, useState } from 'react';
import InputQuantidade from '../InputQuantidade';
import cookieCarrinho from '@/controller/cookieCarrinho';
import { IProdutos } from '@/interface/IProdutos';
import { useDispatch } from 'react-redux';
import { editaValorProduto } from '@/store/slices/carrinho';
import { useRouter } from 'next/navigation';

interface Props {
  produto: IProdutos;
}

const ProvidedInputQuantidadeBotao = ({ produto }: Props) => {
  const [valor, setValor] = useState(1);
  const dispatch = useDispatch();
  const route = useRouter();

  return (
    <div className="flex gap-1.5 h-10">
      <div className="h-full">
        <InputQuantidade classes="h-full" valor={valor} setValor={setValor} />
      </div>
      <button
        onClick={() => {
          cookieCarrinho.adicionarCarrinho(produto, valor);
          dispatch(
            editaValorProduto({
              produto: produto,
              quantidade: valor,
            })
          );
          route.push('/carrinho');
        }}
        className="flex-shrink font-montSerrat text-lg btn btn-secondary w-full min-h-0 h-full text-base-100"
      >
        COMPRAR
      </button>
    </div>
  );
};

export default memo(ProvidedInputQuantidadeBotao);
