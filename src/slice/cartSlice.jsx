import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    value: []
  },
  reducers: {
    addCart: (state, action) => {
      // [ user: name, user: email, product: doc, count ]

      let d = new Date()
      let day = d.getDate()
      let month = d.getMonth()
      let year = d.getFullYear()
      let hours = d.getHours()
      let minutes = d.getMinutes()

      state.value.push({
        user: {
          name: action.payload[0],
          email: action.payload[1],
        },
        product: action.payload[2],
        count: action.payload[3],
        date: `${day}/${month}/${year} (time: ${hours}:${minutes})`
       })
    },
    removeCart: (state, action) => {
      let key
      state.value.map((e, i) => {
        if (e.user.email === action.payload[0] && e.product.name === action.payload[1] && e.count === action.payload[2]) {
          key = i
        }
      })
      state.value.splice(key, 1)
    }
  }
})

export const { addCart, removeCart } = cartSlice.actions
export default cartSlice.reducer
