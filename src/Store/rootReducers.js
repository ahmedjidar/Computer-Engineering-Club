// reducers/index.js
import { combineReducers } from '@reduxjs/toolkit';
import authReducer from './authSlice';

const rootReducer = combineReducers({
  auth: authReducer,
  // add other reducers here
});

export default rootReducer;
