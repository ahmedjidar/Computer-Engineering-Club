import SSRProvider from 'react-bootstrap/SSRProvider';
import { BrowserRouter as Router } from 'react-router-dom'
import GeneralRoutes from '/src/Components/GeneralRoutes'
import './App.css'
import { useEffect } from 'react';
import { useDataContext } from './utils/useContext';
const App = () => {
const {initiateLogin,} =useDataContext();

  useEffect(() => {
    initiateLogin();
    
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
