// reducers/counterSlice.js
import { createSlice } from '@reduxjs/toolkit';
const apiUrl = import.meta.env.VITE_REACT_APP_API_URL;

const initialState =[
  {
    postId:'',
    title:'',
    content:'',
    images: [],
    likes: [],
    comments: [{
      owner:'',
      content: ''
    }
    ],
    postowner:'',
  }];
const blogSlice = createSlice({
  name: 'posts',
  initialState:initialState,
  reducers: {
    login: (state, action) => {
     
    },
    logout: (state) => {
    
  },
    init: (state) => {
      const syncPosts = async () => {
        try {
          const response = await fetch(apiUrl+"/posts");

          if (!response.ok) {
            console.log("err ok");
          } else {
            const data = await response.json();
            if (data) {
              console.log(data)
              console.log("err success");
            } else {
              console.log("added");
            }
          }
        } catch (err) {
          console.log(err)
        }
      }
    }
    },
 
});

export const {login,logout,init} = blogSlice.actions;
export default blogSlice.reducer;
