import { configureStore } from '@reduxjs/toolkit';
import cartSlice from './slice/cartSlice';
import checkLoginSlice from './slice/checkLoginSlice';
import confirmSlice from './slice/confirmSlice';
import messageAlertSlice from './slice/messageAlertSlice';
import productSlice from './slice/productSlice';
import stateEditSlice from './slice/stateEditSlice';
import stateLoginSlice from './slice/stateLoginSlice';
import testSlice from './slice/testSlice';
import userLoginSlice from './slice/userLoginSlice';
import userSlice from './slice/userSlice';

export default configureStore({
  reducer: {
    test: testSlice,
    stateLogin: stateLoginSlice,
    checkLogin: checkLoginSlice,
    userLogin: userLoginSlice,
    users: userSlice,
    messageAlert: messageAlertSlice,
    stateEdit: stateEditSlice,
    product: productSlice,
    cart: cartSlice,
    confirm: confirmSlice,
  }
})
