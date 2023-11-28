import SSRProvider from 'react-bootstrap/SSRProvider';
import { BrowserRouter as Router } from 'react-router-dom'
import GeneralRoutes from './Components/GeneralRoutes'
import './App.css'

const App = () => {

  return(
    <SSRProvider>
      <Router>
        <GeneralRoutes/>
      </Router>
    </SSRProvider>
  )
}

export default App
