import ICarrinho from '@/interface/ICarrinho';
import cookieCarrinho from '@/controller/cookieCarrinho';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IProdutos } from '@/interface/IProdutos';

const sliceCarrinho = createSlice({
  name: 'carrinho',
  initialState: cookieCarrinho.listarCarrinho() as ICarrinho[],
  reducers: {
    editaValorProduto: (state, action: PayloadAction<ICarrinho>) => {
      const index = state.findIndex(
        (produto) => produto.produto.id === action.payload.produto.id
      );

      if (index !== -1) {
        state[index].quantidade = action.payload.quantidade;
      } else {
        state.push(action.payload);
      }
    },
    removeProduto: (state, action: PayloadAction<IProdutos>) => {
      const index = state.findIndex(
        (produto) => produto.produto.id === action.payload.id
      );
      state.splice(index, 1);
    },
    baixaProdutos: (state) => {
      if (state.length === 0) {
        const cookiesCarrinho = cookieCarrinho.listarCarrinho();
        state.push(...cookiesCarrinho);
      }
    },
  },
});

export const { editaValorProduto, removeProduto, baixaProdutos } =
  sliceCarrinho.actions;
export default sliceCarrinho.reducer;
