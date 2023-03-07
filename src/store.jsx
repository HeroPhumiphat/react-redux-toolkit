import { configureStore } from '@reduxjs/toolkit';
import dashSlice from './Slice/dashSlice';
import dashStateSlice from './Slice/dashStateSlice';
import loginSlice from './Slice/loginSlice';
import productSlice from './Slice/productSlice';
import urlSlice from './Slice/urlSlice';
import userSlice from './Slice/userSlice';

export const store = configureStore({
    reducer: {
        dash: dashSlice,
        dashState: dashStateSlice,
        user: userSlice,
        products: productSlice,
        login: loginSlice,
        url: urlSlice
    },
})