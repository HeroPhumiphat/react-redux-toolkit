import { createSlice } from '@reduxjs/toolkit';

const dashStateSlice = createSlice({
  name: 'dashState',
  initialState: {
    value: false
  },
  reducers: {
    setDashStateTrue: (state) => {
      state.value = true
    },
    setDashStateFalse: (state) => {
      state.value = false
    }
  }
})

export const { setDashStateTrue, setDashStateFalse } = dashStateSlice.actions
export default dashStateSlice.reducer
