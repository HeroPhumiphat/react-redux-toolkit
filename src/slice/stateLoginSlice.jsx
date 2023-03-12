import { createSlice } from '@reduxjs/toolkit';

const stateLoginSlice = createSlice({
  name: 'stateLogin',
  initialState: {
    value: 'false'
  },
  reducers: {
    stateLoginTrue: (state) => {
      state.value = 'true'
    },
    stateLoginFalse: (state) => {
      state.value = 'false'
    }
  }
})

export const { stateLoginTrue, stateLoginFalse } = stateLoginSlice.actions
export default stateLoginSlice.reducer
