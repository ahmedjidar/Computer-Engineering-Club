import SSRProvider from 'react-bootstrap/SSRProvider';
import { BrowserRouter as Router } from 'react-router-dom'
import GeneralRoutes from './Components/GeneralRoutes'
import './App.css'
import { useDispatch } from 'react-redux';
import {init} from './Store/authSlice'
import { useEffect } from 'react';
const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(init());
  },[])
  return(
    <SSRProvider>
      <Router>
        <GeneralRoutes/>
      </Router>
    </SSRProvider>
  )
}

export default App
