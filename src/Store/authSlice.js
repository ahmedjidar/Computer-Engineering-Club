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
      window.localStorage.setItem("isLoged", state.isLogged);

      console.log(state);
      console.log("done in redux state");
    },
    init: (state, action) => { 

    }
  },
});

export const {login} = authSlice.actions;
export default authSlice.reducer;
