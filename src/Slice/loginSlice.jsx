import { createSlice } from '@reduxjs/toolkit';

export const loginSlice = createSlice({
    name: 'login',
    initialState: {
        value: [],
    },
    reducers: {
        addUserLogin: (state, action) => {
            state.value.push(action.payload)
        },
        removeUserLogin: (state) => {
            state.value.pop()
        }
    }
})

export const { addUserLogin, removeUserLogin } = loginSlice.actions
export default loginSlice.reducer