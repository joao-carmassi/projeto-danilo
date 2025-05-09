'use client';

import { Provider } from 'react-redux';
import ContainerCarrinho from './ContainerCarrinho';
import { store } from '@/store';

const PaginaCarrinho = () => {
  return (
    <Provider store={store}>
      <ContainerCarrinho />
    </Provider>
  );
};

export default PaginaCarrinho;
