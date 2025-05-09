import { configureStore } from '@reduxjs/toolkit';
import sliceCarrinho from './slices/carrinho';
import sliceAbreNav from './slices/abreNav';

export const store = configureStore({
  reducer: {
    carrinho: sliceCarrinho,
    abreNav: sliceAbreNav,
  },
});

export type AppStore = typeof store;
export type RootState = ReturnType<AppStore['getState']>;
export type AppDispatch = AppStore['dispatch'];
