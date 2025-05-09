'use client';

import { store } from '@/store';
import { Provider } from 'react-redux';
import ProviderInput from './providerInput';
import { IProdutos } from '@/interface/IProdutos';

interface Props {
  produto: IProdutos;
}

const InputQuantidadeBotao = ({ produto }: Props) => {
  return (
    <Provider store={store}>
      <ProviderInput produto={produto} />
    </Provider>
  );
};

export default InputQuantidadeBotao;
