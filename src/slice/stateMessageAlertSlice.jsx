import { createSlice } from '@reduxjs/toolkit';

const stateMessageAlertSlice = createSlice({
  name: 'stateMessageAlert',
  initialState: {
    value: false
  },
  reducers: {
    setStateAlertTrue: (state) => {
      state.value = true
    },
    setStateAlertFalse: (state) => {
      state.value = false
    }
  }
})

export const { setStateAlertFalse, setStateAlertTrue } = stateMessageAlertSlice.actions
export default stateMessageAlertSlice.reducer
