import { createSlice } from '@reduxjs/toolkit';

const messageAlertSlice = createSlice({
  name: 'messageAlert',
  initialState: {
    value: []
  },
  reducers: {
    addMessage: (state, action) => {
      if (state.value.length > 1) {
        state.value.pop()
      }
      state.value.unshift(action.payload)
    },
    removeMessage: (state, action) => {
      state.value.splice(action.payload, 1)
    },
    clearMessage: (state) => {
      state.value.pop()
    }
  }
})

export const { addMessage, removeMessage, clearMessage } = messageAlertSlice.actions
export default messageAlertSlice.reducer
