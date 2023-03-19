import { configureStore } from '@reduxjs/toolkit';
import cartSlice from './slice/cartSlice';
import checkLoginSlice from './slice/checkLoginSlice';
import confirmSlice from './slice/confirmSlice';
import dashEditUserSlice from './slice/dashEditUserSlice';
import dashStateSlice from './slice/dashStateSlice';
import messageAlertSlice from './slice/messageAlertSlice';
import productSlice from './slice/productSlice';
import stateEditSlice from './slice/stateEditSlice';
import stateLoginSlice from './slice/stateLoginSlice';
import userLoginSlice from './slice/userLoginSlice';
import userSlice from './slice/userSlice';

export default configureStore({
  reducer: {
    users: userSlice,
    dashEditUser: dashEditUserSlice,
    userLogin: userLoginSlice,
    stateLogin: stateLoginSlice,
    checkLogin: checkLoginSlice,
    stateEdit: stateEditSlice,
    product: productSlice,
    cart: cartSlice,
    confirm: confirmSlice,
    messageAlert: messageAlertSlice,
    dashState: dashStateSlice,
  }
})
