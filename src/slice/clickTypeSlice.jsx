import { createSlice } from '@reduxjs/toolkit';

const clickTypeSlice = createSlice({
  name: 'clickType',
  initialState: {
    value: 0
  },
  reducers: {
    clickType: (state) => {
      state.value += 1
    },
    clearClickType: (state) => {
      state.value = 0
    }
  }
})

export const { clickType, clearClickType } = clickTypeSlice.actions
export default clickTypeSlice.reducer
