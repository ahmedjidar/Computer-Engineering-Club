import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css'

import { DataProvider } from './utils/useContext.jsx';


ReactDOM.createRoot(document.getElementById('root')).render(
  <DataProvider>
    <App />
   </DataProvider>
)
