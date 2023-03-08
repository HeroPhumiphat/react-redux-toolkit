import { createSlice } from '@reduxjs/toolkit';

export const users = createSlice({
  name: 'users',
  initialState: {
    value: [
      { name: 'Admin', email: 'Admin@example.com', password: 'admin1234', quality: 'ADMIN' },
      { name: 'User1', email: 'User1@example.com', password: 'user1234', quality: 'USER' },
      { name: 'User2', email: 'User2@example.com', password: 'user1234', quality: 'USER' },
      { name: 'User3', email: 'User3@example.com', password: 'user1234', quality: 'USER' },
      { name: 'User4', email: 'User4@example.com', password: 'user1234', quality: 'USER' },
      { name: 'User5', email: 'User5@example.com', password: 'user1234', quality: 'USER' },
    ]
  },
  reducers: {
    addUser: (state, action) => {
      state.value.push(action.payload)
    },
    deleteUser: (state, action) => {
      state.value.splice(action.payload,1)
    },
    editProfile: (state, action) => {
        // [email, password, newData]
        let email = action.payload[0]
        let password = action.payload[1]

        let key = 0
        state.value.map((e, i) => {
            if (e.email === email && e.password === password) {
            key = i
            }
        })

        state.value[key] = action.payload[2]
    },

  }
})

export const { addUser, deleteUser, editProfile } = users.actions
export default users.reducer
