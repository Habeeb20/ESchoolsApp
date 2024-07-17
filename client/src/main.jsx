import React, { createContext } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import store from "./redux/store.js"
import { Provider } from 'react-redux'
import axios from 'axios'
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

axios.defaults.baseURL = "http://localhost:4000/api";
axios.defaults.withCredentials = true

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
        <Provider store={store}>
        <AppWrapper />
        </Provider>
        
      </StudentProfileContextProvider>
    </StudentAcctContextProvider>

    </TeacherContextProvider>  
    {/* </ContextProvider> */}
    
  </React.StrictMode>,
)
