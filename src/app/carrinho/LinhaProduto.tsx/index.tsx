'use client';

import InputQuantidade from '@/components/InputQuantidade';
import RowProduto from '@/components/RowProduto';
import cookieCarrinho from '@/controller/cookieCarrinho';
import ICarrinho from '@/interface/ICarrinho';
import { editaValorProduto, removeProduto } from '@/store/slices/carrinho';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';

interface Props {
  produto: ICarrinho;
}

const LinhaProduto = ({ produto }: Props) => {
  const [valorInput, setValorInput] = useState(produto.quantidade);
  const dispatch = useDispatch();

  useEffect(() => {
    cookieCarrinho.adicionarCarrinho(produto.produto, valorInput);
    dispatch(
      editaValorProduto({
        produto: produto.produto,
        quantidade: valorInput,
      })
    );
  }, [dispatch, produto, valorInput]);

  return (
    <tr>
      <td className="flex flex-col gap-3 items-start">
        <div className="py-1.5">
          <RowProduto imgSize="h-14" produto={produto.produto} />
        </div>
        {/* Mobile */}
        <div className="flex md:hidden w-full justify-between items-center gap-2">
          {/* <ValorProduto
                className="text-lg text-green-600"
                :valor="produto.produto.VALOR || 0"
              /> */}
          <InputQuantidade
            classes="h-10 w-fit"
            valor={valorInput}
            setValor={setValorInput}
          />
        </div>
      </td>
      {/* Desktop */}
      <td className="hidden md:table-cell">
        <InputQuantidade
          classes="h-10 w-fit"
          valor={valorInput}
          setValor={setValorInput}
        />
      </td>
      {/* <td className="hidden text-lg h-full md:table-cell">
            <ValorProduto
              className="text-green-600"
              :valor="produto.produto.VALOR || 0"
            />
          </td> */}
      <td>
        <button
          onClick={() => {
            cookieCarrinho.removerCarrinho(produto.produto);
            dispatch(removeProduto(produto.produto));
          }}
          className="hover:cursor-pointer underline"
        >
          Apagar
        </button>
      </td>
    </tr>
  );
};

export default LinhaProduto;
