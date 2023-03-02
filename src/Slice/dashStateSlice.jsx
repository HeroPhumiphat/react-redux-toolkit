import { createSlice } from '@reduxjs/toolkit';

export const dashStateSlice = createSlice({
    name: 'dashState',
    initialState: {
        value: 'false'
    },
    reducers: {
        stateTrue: (state) => {
            state.value = 'true'
        },
        stateFalse: (state) => {
            state.value = 'false'
        }
    }
})

export const { stateTrue, stateFalse } = dashStateSlice.actions
export default dashStateSlice.reducer