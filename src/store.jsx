import { configureStore } from '@reduxjs/toolkit';
import checkLoginSlice from './slice/checkLoginSlice';
import messageAlertSlice from './slice/messageAlertSlice';
import stateLoginSlice from './slice/stateLoginSlice';
import stateMessageAlertSlice from './slice/stateMessageAlertSlice';
import userLoginSlice from './slice/userLoginSlice';
import userSlice from './slice/userSlice';

export default configureStore({
  reducer: {
    stateLogin: stateLoginSlice,
    checkLogin: checkLoginSlice,
    userLogin: userLoginSlice,
    users: userSlice,
    messageAlert: messageAlertSlice,
    stateMessageAlert: stateMessageAlertSlice,
  }
})
