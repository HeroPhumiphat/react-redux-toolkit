import { createSlice } from '@reduxjs/toolkit';

const keyTypeProductSlice = createSlice({
  name: 'keyTypeProduct',
  initialState: {
    value: []
  },
  reducers: {
    addKeyType: (state, action) => {
      if (state.value.length > 1) {
        state.value.pop()
      }
      state.value.unshift(action.payload)
    },
    clearKeyType: (state) => {
      state.value = []
    }
  }
})

export const { addKeyType, removeKeyType, clearKeyType } = keyTypeProductSlice.actions
export default keyTypeProductSlice.reducer
