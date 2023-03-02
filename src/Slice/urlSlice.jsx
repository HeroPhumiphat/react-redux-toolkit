import { createSlice } from '@reduxjs/toolkit';

export const urlSlice = createSlice({
    name: 'url',
    initialState: {
        path: ''
    },
    reducers: {
        addUrl: (state, action) => {
            state.path = action.payload
        },
    }
})

export const { addUrl } = urlSlice.actions
export default urlSlice.reducer