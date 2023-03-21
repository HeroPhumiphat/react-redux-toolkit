import { createSlice } from '@reduxjs/toolkit';

const checkScrollTypeSlice = createSlice({
  name: 'checkScrollType',
  initialState: {
    value: false
  },
  reducers: {
    setScrollTypeTrue: (state) => {
      state.value = true
    },
    setScrollTypeFalse: (state) => {
      state.value = false
    }
  }
})

export const { setScrollTypeFalse, setScrollTypeTrue } = checkScrollTypeSlice.actions
export default checkScrollTypeSlice.reducer
