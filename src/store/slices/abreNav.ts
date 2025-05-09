import { createSlice } from '@reduxjs/toolkit';

const sliceAbreNav = createSlice({
  name: 'abreNav',
  initialState: {
    hidden: false,
    block: false,
  },
  reducers: {
    mudaBlock: (state) => {
      return { ...state, block: !state.block };
    },
    mudaHidden: (state, action) => {
      console.log(action.payload);
      return { ...state, hidden: action.payload };
    },
  },
});

export const { mudaBlock, mudaHidden } = sliceAbreNav.actions;
export default sliceAbreNav.reducer;
