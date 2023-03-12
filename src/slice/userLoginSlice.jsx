import { createSlice } from '@reduxjs/toolkit';

const userLoginSlice = createSlice({
  name: 'userLogin',
  initialState: {
    value: []
  },
  reducers: {
    addUserLogin: (state, action) => {
      state.value.push(action.payload)
    },
    clearUserLogin: (state) =>  {
      state.value = []
    }
  }
})

export const { addUserLogin, clearUserLogin } = userLoginSlice.actions
export default userLoginSlice.reducer
