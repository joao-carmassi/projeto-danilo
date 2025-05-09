interface Props {
  children: React.ReactNode;
}

export const metadata = {
  title: 'Carrinho - Loja do VRF',
  description: 'Carrinho de produtos',
};

const layoutCarrinho = ({ children }: Props) => {
  return <main>{children}</main>;
};

export default layoutCarrinho;
