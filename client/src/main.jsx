import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import { StudentAcctContextProvider } from './context/Student/StudentAcctContext.jsx'
import { StudentProfileContext, StudentProfileContextProvider } from './context/Student/StudentProfileContext.jsx'
import { TeacherContext, TeacherContextProvider } from './context/Teacher/TeacherAccountContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <TeacherContextProvider>
    <StudentAcctContextProvider>
      <StudentProfileContextProvider>
         <App />
      </StudentProfileContextProvider>
    </StudentAcctContextProvider>

    </TeacherContextProvider>
    
  </React.StrictMode>,
)
