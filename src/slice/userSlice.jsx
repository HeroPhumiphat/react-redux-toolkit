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
    },
    removeUser: (state, action) => {
      state.value.splice(action.payload + 1, 1)
    },
    editUser: (state, action) => {
      // [email, password, newData]

      let key
      state.value.map((e, i) => {
          if (e.email === action.payload[0] && e.password === action.payload[1]) {
            key = i
          }
      })
      state.value[key] = action.payload[2]
    },
  }
})

export const { addUser, removeUser, editUser } = userSlice.actions
export default userSlice.reducer
