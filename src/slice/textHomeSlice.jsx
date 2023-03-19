import { createSlice } from '@reduxjs/toolkit';

const textHomeSlice = createSlice({
  name: 'textHome',
  initialState: {
    value: []
  },
  reducers: {
    addTextHome: (state, action) => {
      state.value.push(action.payload)
    },
    removeTextHome: (state) => {
      state.value.pop()
    },
    clearTextHome: (state) => {
      state.value = []
    }
  }
})

export const { addTextHome, removeTextHome, clearTextHome } = textHomeSlice.actions
export default textHomeSlice.reducer
