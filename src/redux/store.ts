import { configureStore } from '@reduxjs/toolkit';
import mainFormReducer from 'redux/slice';

export default configureStore({
  reducer: {
    mainForm: mainFormReducer
  }
});
