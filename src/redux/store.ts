import { configureStore } from '@reduxjs/toolkit';
import appReducer from 'redux/slice';

export default configureStore({
  reducer: {
    app: appReducer
  }
});
