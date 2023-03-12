import { createSlice } from '@reduxjs/toolkit';

const userSlice = createSlice({
  name: 'users',
  initialState: {
    value: [
      { name: 'Admin', email: 'admin@example.com', password: 'admin1234', quality: 'ADMIN' },
      { name: 'User1', email: 'user1@example.com', password: 'user1234', quality: 'USER' },
      { name: 'User2', email: 'user2@example.com', password: 'user1234', quality: 'USER' },
      { name: 'User3', email: 'user3@example.com', password: 'user1234', quality: 'USER' },
    ]
  },
  reducers: {
    addUser: (state, action) => {
      state.value.push(action.payload)
    }
  }
})

export const { addUser } = userSlice.actions
export default userSlice.reducer
