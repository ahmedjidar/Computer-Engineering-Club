// reducers/counterSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  hi:"hi",
  isLogged: localStorage.getItem('isLogged') === 'true',
  userId: localStorage.getItem('userId') || null,
  userImg: localStorage.getItem('userImg') || null,
  userName: localStorage.getItem('userName') || '',
  email: localStorage.getItem('email') || '',
  token: localStorage.getItem('token') || '',
  isAdmin: localStorage.getItem('isAdmin') === 'true',
};
const authSlice = createSlice({
  name: 'auth',
  initialState:initialState,
  reducers: {
    login: (state, action) => {
      state.isLogged = true;
      state.hi="hello"
      state.userId = action.payload.userId;
      state.userImg = action.payload.userImg;
      state.userName = action.payload.userName;
      state.email = action.payload.email;
      state.token = action.payload.token;
      state.isAdmin = action.payload.isAdmin
      
      window.localStorage.setItem("token", state.token);
      window.localStorage.setItem("userId", state.userId);
      window.localStorage.setItem("userImg", state.userImg);
      window.localStorage.setItem("userName", state.userName);
      window.localStorage.setItem("email", state.email);
      window.localStorage.setItem("isAdmin", state.isAdmin);
      window.localStorage.setItem("isLogged", state.isLogged);

      console.log(state);
      console.log("done in redux state");
    },
    logout: (state) => {
    // Reset state
    state.isLogged = false;
    state.userId = null;
    state.userName = '';
    state.userImg = '';
    state.email = '';
    state.token = '';
    state.isAdmin = false;
    // Clear localStorage
    localStorage.removeItem('token');
    localStorage.removeItem('userId');
    localStorage.removeItem('userImg');
    localStorage.removeItem('userName');
    localStorage.removeItem('email');
    localStorage.removeItem('isAdmin');
    localStorage.removeItem('isLogged');
  },
  init: (state) => {
    state.isLogged= localStorage.getItem('isLogged') === 'true'
   state.userId= localStorage.getItem('userId') || null
   state.userImg= localStorage.getItem('userImg') || null
   state.userName= localStorage.getItem('userName') || ''
   state.email=localStorage.getItem('email') || ''
   state.token=localStorage.getItem('token') || ''
    state.isAdmin = localStorage.getItem('isAdmin') === 'true'
    console.log("init data...")
  }
  },
 
});

export const {login,logout,init} = authSlice.actions;
export default authSlice.reducer;
