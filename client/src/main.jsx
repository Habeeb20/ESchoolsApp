import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import { StudentAcctContextProvider } from './context/Student/StudentAcctContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <StudentAcctContextProvider>
    <App />

    </StudentAcctContextProvider>
   
  </React.StrictMode>,
)
