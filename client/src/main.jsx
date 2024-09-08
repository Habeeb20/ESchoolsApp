
import axios from 'axios';
import React, { createContext, useState } from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

// import 'bootstrap-icons/font/bootstrap-icons.css';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import store from "./redux/store.js";
import { Provider } from 'react-redux';
import { AppProvider } from './context';
import { StudentAcctContextProvider } from './context/Student/StudentAcctContext.jsx';
import { StudentProfileContextProvider } from './context/Student/StudentProfileContext.jsx';

// Uncomment and configure if using Clerk
// import { ClerkProvider } from '@clerk/clerk-react';
// import TeacherLogin from './pages/Teacher/TeacherLogin.jsx';

export const Context = createContext({
  isAuthorized: false
});

axios.defaults.baseURL = "http://localhost:4000/api";
axios.defaults.withCredentials = true;

const AppWrapper = () => {
  const [isAuthorized, setIsAuthorized] = useState(false);
  const [user, setUser] = useState({});

  return (
    <AppProvider>
      <Context.Provider value={{ isAuthorized, setIsAuthorized, user, setUser }}>
        <App />
      </Context.Provider>
    </AppProvider>
  );
};

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   
      
        <StudentAcctContextProvider>
          <StudentProfileContextProvider>
          <Provider store={store}>
            <AppWrapper />
          </Provider>
          </StudentProfileContextProvider>
        </StudentAcctContextProvider>
    
   
  </React.StrictMode>
);
