// reducers/counterSlice.js
import { createSlice } from '@reduxjs/toolkit';

const authSlice = createSlice({
  name: 'auth',
  initialState:{auth:"hello redux working"},
  reducers: {
    login: (state, action) => {
      state.isAuthenticated = true;
      state.user = action.payload;
    },
    decrement: state => state - 1,
  },
});

export const authActions = authSlice.actions;
export default authSlice.reducer;
