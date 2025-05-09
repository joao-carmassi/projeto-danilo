'use client';

import { Provider } from 'react-redux';
import { store } from '@/store';
import ContainerHeader from './ContainerHeader';
import NavProdutos from './NavProdutos';

interface Props {
  categorias: string[];
  subcategorias: { [categoria: string]: string[] };
}

const ProviderHeader = ({ categorias, subcategorias }: Props) => {
  return (
    <Provider store={store}>
      <ContainerHeader categorias={categorias} subcategorias={subcategorias} />
      <NavProdutos categorias={categorias} subcategorias={subcategorias} />
    </Provider>
  );
};

export default ProviderHeader;
