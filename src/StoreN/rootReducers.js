// reducers/index.js
import { combineReducers } from '@reduxjs/toolkit';
import authReducer from './authSlice';
import blogReducer from './blogSlice';

const rootReducer = combineReducers({
  auth: authReducer,
  posts: blogReducer,
  // add other reducers here
});

export default rootReducer;
