import getProdutos from '@/utils/getProdutos';
import ProviderHeader from './providerHeader';
import MensagemPix from '../MensagemPix';

const Header = () => {
  const produtosCategorias = getProdutos.porCategoria();
  const categorias = Object.keys(produtosCategorias);
  const subcategorias = getProdutos.agrupaSubcategoriasPorCategoria();

  return (
    <header className="w-full fixed top-0 z-40">
      <MensagemPix />
      <ProviderHeader categorias={categorias} subcategorias={subcategorias} />
    </header>
  );
};

export default Header;
