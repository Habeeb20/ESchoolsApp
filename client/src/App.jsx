import { useState } from 'react'
import './App.css'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { useStudentAcctContext } from './hooks/student/useStudentAcctContext'

import SchoolDashboard from './pages/Dashboards/SchoolDashboard'
import Navbar from './components/Navbar'

import StudentLoginAcct from './pages/Student/StudentLoginAcct'
import StudentSignupAcct from './pages/Student/StudentSignupAcct'
function App() {
  const {user} = useStudentAcctContext()

  return (
   <BrowserRouter>
   <Navbar />
   <Routes>
    <Route path= '/' element = {user ? <SchoolDashboard/> : <Navigate to= '/login' />} />
    <Route path = '/login' element = {!user ? <StudentLoginAcct /> : <Navigate to='/' />} />
    <Route path = '/signup' element = {!user ? <StudentSignupAcct /> : <Navigate to='/' />} />
   </Routes>
   </BrowserRouter>
  )
}

export default App
