import React, { createContext } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import { StudentAcctContextProvider } from './context/Student/StudentAcctContext.jsx'
import { StudentProfileContext, StudentProfileContextProvider } from './context/Student/StudentProfileContext.jsx'
import { TeacherContext, TeacherContextProvider } from './context/Teacher/TeacherAccountContext.jsx';
// import {EssentialJobsContextProvider} from './hooks/Context.js'
// import {ContextProvider} from './hooks/Context.js'
// import { AppWrapper } from './hooks/Context.js'
import { useState } from 'react'
export const Context = createContext({
  isAuthorized:false
});

const AppWrapper =() => {
  const [isAuthorized, setIsAuthorized] = useState(false)
  const [user, setUser] = useState({})

  return(
    <Context.Provider
      value={{
      isAuthorized,
      setIsAuthorized,
      user,
      setUser,
    }}>
      <App />
    </Context.Provider>
  )
}
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <ContextProvider> */}
  
    <TeacherContextProvider>
    <StudentAcctContextProvider>
      <StudentProfileContextProvider>
         <AppWrapper />
      </StudentProfileContextProvider>
    </StudentAcctContextProvider>

    </TeacherContextProvider>  
    {/* </ContextProvider> */}
    
  </React.StrictMode>,
)
