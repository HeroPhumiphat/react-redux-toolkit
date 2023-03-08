import { createSlice } from '@reduxjs/toolkit';

export const userLogin = createSlice({ 
    name: 'userLogin',
    initialState: {
        user: [{ name: 'test', email:'test@gmail.com ', email: 'test1234'}]
    },
    reducers: {
        addUserLogin: (state, action) => {
            state.user.push(action.payload)
        },
        removeUserLogin: (state) => {
            state.user = []
        }
    }
})

export const { addUserLogin, removeUserLogin } = userLogin.actions
export default userLogin.reducer