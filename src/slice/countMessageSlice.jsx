import { createSlice } from '@reduxjs/toolkit';

const countMessageSlice = createSlice({
  name: 'countMessageSlice',
  initialState: {
    value: 0
  },
  reducers: {
    countUp: (state) => {
      state.value += 1
    }
  }
})

export const { countUp } = countMessageSlice.actions
export default countMessageSlice.reducer
