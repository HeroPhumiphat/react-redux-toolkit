import { createSlice } from '@reduxjs/toolkit';

export const stateIndexType = createSlice({
    name: 'stateIndexType',
    initialState: {
        value: []
    },
    reducers: {
        addIndexType: (state, action) => {
            state.value.push(action.payload)
        },
        removeIndexType: (state, action) => {
          state.value.splice(state.value.indexOf(action.payload), 1)
        },
        clearIndexType: (state) => {
          state.value = []
        }
    }
})

export const { addIndexType, removeIndexType, clearIndexType } = stateIndexType.actions
export default stateIndexType.reducer