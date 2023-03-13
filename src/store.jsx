import { configureStore } from '@reduxjs/toolkit';
import checkLoginSlice from './slice/checkLoginSlice';
import countMessageSlice from './slice/countMessageSlice';
import messageAlertSlice from './slice/messageAlertSlice';
import stateEditSlice from './slice/stateEditSlice';
import stateLoginSlice from './slice/stateLoginSlice';
import userLoginSlice from './slice/userLoginSlice';
import userSlice from './slice/userSlice';

export default configureStore({
  reducer: {
    stateLogin: stateLoginSlice,
    checkLogin: checkLoginSlice,
    userLogin: userLoginSlice,
    users: userSlice,
    messageAlert: messageAlertSlice,
    stateEdit: stateEditSlice,
    countMessage: countMessageSlice,
  }
})
