import { createSlice } from '@reduxjs/toolkit';

const dashEditUserSlice = createSlice({
  name: 'dashEditUser',
  initialState: {
    value: ''
  },
  reducers: {
    addDashEditUser: (state, action) => {
      state.value = action.payload
    }
  }
})

export const { addDashEditUser, clearDashEditUser } = dashEditUserSlice.actions
export default dashEditUserSlice.reducer
