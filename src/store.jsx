import { configureStore } from '@reduxjs/toolkit';
import modeDash from './slice/modeDash';
import products from './slice/products';
import stateIndexType from './slice/stateIndexType';
import userLogin from './slice/userLogin';

export const store = configureStore({
    reducer: {
        modeDash: modeDash,
        products: products,
        stateIndexType: stateIndexType,
        userLogin: userLogin,
    },
})