import { createSlice } from '@reduxjs/toolkit';

const stateEditSlice = createSlice({
  name: 'stateEdit',
  initialState: {
    value: false
  },
  reducers: {
    addEditTrue: (state) => {
      state.value = true
    },
    addEditFalse: (state) => {
      state.value = false
    }
  }
})

export const { addEditFalse, addEditTrue } = stateEditSlice.actions
export default stateEditSlice.reducer
