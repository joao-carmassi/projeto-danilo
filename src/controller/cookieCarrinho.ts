import Cookies from 'js-cookie';
import { IProdutos } from '@/interface/IProdutos';
import ICarrinho from '@/interface/ICarrinho';

export const adicionarCarrinho = (produto: IProdutos, quantidade = 1) => {
  const carrinhoRaw = Cookies.get('carrinho');
  const raw = carrinhoRaw ? JSON.parse(carrinhoRaw) : [];
  const carrinho: ICarrinho[] = Array.isArray(raw) ? raw : Object.values(raw);

  const index = carrinho.findIndex((p) => p.produto.id === produto.id);

  if (index !== -1) {
    carrinho[index].quantidade = quantidade;
  } else {
    carrinho.push({ produto, quantidade });
  }

  Cookies.set('carrinho', JSON.stringify(carrinho));
};

const removerCarrinho = (produto: IProdutos) => {
  const carrinhoRaw = Cookies.get('carrinho');
  if (!carrinhoRaw) return;

  const carrinho: ICarrinho[] = JSON.parse(carrinhoRaw);

  const novoCarrinho = carrinho.filter((p) => p.produto.id !== produto.id);

  Cookies.set('carrinho', JSON.stringify(novoCarrinho));
};

const listarCarrinho = (): ICarrinho[] => {
  const carrinhoRaw = Cookies.get('carrinho');
  if (!carrinhoRaw) return [];
  const carrinho = JSON.parse(carrinhoRaw);
  return Object.values(carrinho);
};

const cookieCarrinho = {
  listarCarrinho,
  adicionarCarrinho,
  removerCarrinho,
};

export default cookieCarrinho;
