import { createSlice } from '@reduxjs/toolkit';

export const userSlice = createSlice({
    name: 'user',
    initialState: {
        value: [
            {
                key: 0, email: 'Admin@example.com', password: 'admin12345678', quality: 'ADMIN', name: 'Admin'
            },
            {
                key: 1, email: 'User1@example.com', password: 'user12345678', quality: 'USER', name: 'User1'
            },
            {
                key: 2, email: 'User2@example.com', password: 'user12345678', quality: 'USER', name: 'User2'
            },
        ]
    },
    reducers: {
        addUser: (state, action) => {
            state.value.push(action.payload)
        },
        deleteUser: (state, action) => {
            state.value.splice(action.payload,1)
        },
        updateUser: (state, action) => {
            state.value = action.payload
        }
    }
})

export const { addUser, deleteUser, updateUser } = userSlice.actions
export default userSlice.reducer