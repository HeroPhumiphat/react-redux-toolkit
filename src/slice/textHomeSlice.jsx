import { createSlice } from '@reduxjs/toolkit';

const textHomeSlice = createSlice({
  name: 'textHome',
  initialState: {
    value: []
  },
  reducers: {
    addDocHome: (state, action) => {
      state.value = action.payload
    },
    clearDocHome: (state) => {
      state.value = ''
    }
  }
})

export const { addDocHome, clearDocHome } = textHomeSlice.actions
export default textHomeSlice.reducer
