import SSRProvider from 'react-bootstrap/SSRProvider';
import { BrowserRouter as Router } from 'react-router-dom'
import GeneralRoutes from '/src/Components/GeneralRoutes'
import './App.css'
import { useDispatch } from 'react-redux';
import { init } from './Store/authSlice'
import {fetchPosts} from '/src/Store/blogSlice.js'

import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(init());
    // dispatch(fetchPosts());
  }, [])
  
  return(
    <SSRProvider>
      <Router>
        <GeneralRoutes/>
      </Router>
    </SSRProvider>
  )
}

export default App
