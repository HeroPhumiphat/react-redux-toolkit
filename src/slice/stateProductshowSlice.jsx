import { createSlice } from '@reduxjs/toolkit';

const stateProductshowSlice = createSlice({
  name: 'stateProductshow',
  initialState: {
    value: false,
  },
  reducers: {
    setStateTrueProductShow: (state) => {
      state.value = true;
    },
    setStateFalseProductShow: (state) => {
      state.value = false;
    },
  }
})

export const {setStateFalseProductShow, setStateTrueProductShow} = stateProductshowSlice.actions
export default stateProductshowSlice.reducer
