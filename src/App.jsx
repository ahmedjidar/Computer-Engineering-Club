import { useState } from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import GeneralRoutes from './Components/GeneralRoutes'

const App = () => {

  return(
    <Router>
      <GeneralRoutes/>
    </Router>
  )
}

export default App
