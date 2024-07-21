import React, { createContext } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import store from "./redux/store.js"
import { Provider } from 'react-redux'
import axios from 'axios'
import { AppProvider } from './context';

import { StudentAcctContextProvider } from './context/Student/StudentAcctContext.jsx'
import { StudentProfileContext, StudentProfileContextProvider } from './context/Student/StudentProfileContext.jsx'
import { TeacherContext, TeacherContextProvider } from './context/Teacher/TeacherAccountContext.jsx';
// import {EssentialJobsContextProvider} from './hooks/Context.js'
// import {ContextProvider} from './hooks/Context.js'
// import { AppWrapper } from './hooks/Context.js'
import { useState } from 'react'
import {ClerkProvider} from '@clerk/clerk-react'
import TeacherLogin from './pages/Teacher/TeacherLogin.jsx';
export const Context = createContext({
  isAuthorized:false
});
// Import your publishable key
const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY

if (!PUBLISHABLE_KEY) {
  throw new Error("Missing Publishable Key")
}

axios.defaults.baseURL = "http://localhost:4000/api";
axios.defaults.withCredentials = true

const AppWrapper =() => {
  const [isAuthorized, setIsAuthorized] = useState(false)
  const [user, setUser] = useState({})

  return(
    <AppProvider>
          <Context.Provider
      value={{
      isAuthorized,
      setIsAuthorized,
      user,
      setUser,
    }}>
  
      <App />
    </Context.Provider>

    </AppProvider>

  )
}
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <ContextProvider> */}
  {/* <AppProvider> */}
  <TeacherContextProvider>
    <StudentAcctContextProvider>
      <StudentProfileContextProvider>
        <Provider store={store}>
          
        {/* <ClerkProvider publishableKey={PUBLISHABLE_KEY} afterSignOutUrl="/"> */}
          {/* <TeacherLogin /> */}
        <AppWrapper />
      {/* </ClerkProvider> */}
       
        </Provider>
        
      </StudentProfileContextProvider>
    </StudentAcctContextProvider>

    </TeacherContextProvider>  

  {/* </AppProvider>
   */}
    {/* </ContextProvider> */}
    
  </React.StrictMode>,
)
