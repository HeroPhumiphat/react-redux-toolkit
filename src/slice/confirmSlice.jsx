import { createSlice } from '@reduxjs/toolkit';

const confirmSlice = createSlice({
  name: 'confirm',
  initialState: {
    value: ''
  },
  reducers: {
    addConfirmAlert: (state, action) => {
      state.value = action.payload
    }
  }
})

export const { addConfirmAlert } = confirmSlice.actions
export default confirmSlice.reducer
