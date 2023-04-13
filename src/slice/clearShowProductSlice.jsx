import { createSlice } from '@reduxjs/toolkit';

const clearShowProductSlice = createSlice({
  name: 'clearShowProduct',
  initialState: {
    value: false,
  },
  reducers: {
    setStateShowProduct: (state) => {
      state.value = (state.value === false) ? true : false;
    }
  }
})

export const { setStateShowProduct } = clearShowProductSlice.actions;
export default clearShowProductSlice.reducer;
