import { createSlice } from '@reduxjs/toolkit';

const testSlice = createSlice({
  name: 'test',
  initialState: {
    value: 0
  },
  reducers: {
    upValueTest: (state) => {
      state.value += 1
    }
  }
})

export const { upValueTest } = testSlice.actions
export default testSlice.reducer
