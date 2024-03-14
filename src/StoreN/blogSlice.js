import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const apiUrl = import.meta.env.VITE_REACT_APP_API_URL;

// Thunk for fetching posts
export const fetchPosts = createAsyncThunk('posts/fetchPosts', async () => {
  try {
    const response = await fetch(apiUrl + "/userSpace/posts");

    if (!response.ok) {
      throw new Error('Could not fetch posts');
    }

    const data = await response.json();
    return data;
  } catch (err) {
    console.error(err);
    throw err;
  }
});

const initialState = [{ hi: "hi" }];

const blogSlice = createSlice({
  name: 'posts',
  initialState: initialState,
  reducers: {
    doLike: (state,action) => {
      // addLike(action.payload.pId, action.payload.uId);
      fetchPosts();
    },
  },
  extraReducers: (builder) => {
    // Handle the fulfilled case for the fetchPosts thunk
    builder.addCase(fetchPosts.fulfilled, (state, action) => {
      console.log("im in fetch slice ")
      return action.payload;
    });
  },
});

export const { logout,doLike } = blogSlice.actions;

export default blogSlice.reducer;
