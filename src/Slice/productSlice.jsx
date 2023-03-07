import { createSlice } from '@reduxjs/toolkit';

export const productSlice = createSlice({
    name: 'products',
    initialState: {
        value: [
            { name: 'React JS', category: 'Book', price: 29.99, sale: 0, image: 'image...' },
            { name: 'NodeJS and ExpressJS', category: 'Book', price: 32.49, sale: 30, image: 'image...'},
        ]
    }
})

export default productSlice.reducer