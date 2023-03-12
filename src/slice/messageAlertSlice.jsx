import { createSlice } from '@reduxjs/toolkit';

const messageAlertSice = createSlice({
  name: 'messageAlert',
  initialState: {
    value: ''
  },
  reducers: {
    addMessage: (state, action) => {
      // ['success', 'message']
      state.value = action.payload
    }
  }
})

export const { addMessage } = messageAlertSice.actions
export default messageAlertSice.reducer
