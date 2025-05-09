'use client';

import { IProdutos } from '@/interface/IProdutos';
import './CardProduto.css';
import { Provider } from 'react-redux';
import ProvidedCardProduto from './ProvidedeCard';
import { store } from '@/store';

interface Props {
  produto: IProdutos;
}

const CardProduto = ({ produto }: Props) => {
  return (
    <Provider store={store}>
      <ProvidedCardProduto produto={produto} />
    </Provider>
  );
};

export default CardProduto;
