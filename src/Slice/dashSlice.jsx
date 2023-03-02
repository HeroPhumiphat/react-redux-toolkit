import { createSlice } from '@reduxjs/toolkit'

export const dashSlice = createSlice({
    name: 'dash',
    initialState: {
        value: window.innerWidth < 768 ? 'w-20' : 'w-60',
    },
    reducers: {
        downValue: (state) => {
            state.value = 'w-60'
        },
        upValue: (state) => {
            state.value = 'w-20'
        }
    }
})

export const { downValue, upValue } = dashSlice.actions
export default dashSlice.reducer