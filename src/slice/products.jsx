import { createSlice } from '@reduxjs/toolkit';

export const products = createSlice ({
    name: 'products',
    initialState: {
        value:  [
            { name: 'JavaScript', price: '39.49', type: 'Book', information: 'Example javascript', image: 'https://images.pexels.com/photos/2846814/pexels-photo-2846814.jpeg?auto=compress&cs=tinysrgb&w=300' },
            { name: 'React.js', price: '24.99', type: 'Book', information: 'it\'s a great book for a cheap price.', image: 'https://images.pexels.com/photos/159866/books-book-pages-read-literature-159866.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' },
            { name: 'Table', price: '34.29', type: 'table', information: 'it\'s a good table.', image: 'https://images.pexels.com/photos/280471/pexels-photo-280471.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' },
            { name: 'Cat image', price: '5.49', type: 'image', information: 'image cat.', image: 'https://images.pexels.com/photos/1543793/pexels-photo-1543793.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' },
            { name: 'cat image 2', price: '7.79', type: "image", information: 'image cat2.', image: 'https://images.pexels.com/photos/208773/pexels-photo-208773.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' },
            { name: 'plant image', price: '5.99', type: 'image', information: 'image pant', image: 'https://images.pexels.com/photos/1542937/pexels-photo-1542937.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' },
            { name: 'plant' , price: '27.39', type: 'plant', information: 'plant', image: 'https://images.pexels.com/photos/993626/pexels-photo-993626.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' },
            { name: 'plant image2', price: '9.99', type: 'image', information: 'image', image: 'https://images.pexels.com/photos/1008737/pexels-photo-1008737.jpeg?auto=compress&cs=tinysrgb&w=300' }
        ]
    },
    reducers: {
        addProduct: (state, action) => {
            state.value.push(action.payload)
        },
        deleteProduct: (state, action) => {
            state.value.splice(action.payload, 1)
        },
        updateProduct: (state, action) => {
            // [index, docs]
            state.value[action.payload[0]] = action.payload[1]
        }
    }
})

export const { addProduct, deleteProduct, updateProduct } = products.actions
export default products.reducer