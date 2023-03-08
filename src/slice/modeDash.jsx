import { createSlice } from '@reduxjs/toolkit';

export const modeDash = createSlice({ 
    name: 'modeDash',
    initialState: {
        state: false
    }
})

export default modeDash.reducer