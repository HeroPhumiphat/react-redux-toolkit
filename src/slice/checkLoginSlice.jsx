import { createSlice } from '@reduxjs/toolkit';

const checkLoginSlice = createSlice({
  name: 'checkLogin',
  initialState: {
    value: 'login'
  },
  reducers: {
    addLogin: (state) => {
      state.value = 'login'
    },
    addRegister: (state) => {
      state.value = 'register'
    }
  }
})

export const { addLogin, addRegister } = checkLoginSlice.actions
export default checkLoginSlice.reducer
