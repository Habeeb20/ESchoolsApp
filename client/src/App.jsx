import { useState } from 'react'
import './App.css'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { useStudentAcctContext } from './hooks/student/useStudentAcctContext'

import SchoolDashboard from './pages/Dashboards/SchoolDashboard'
import Navbar from './components/Navbar'

import StudentLoginAcct from './pages/Student/StudentLoginAcct'
import StudentSignupAcct from './pages/Student/StudentSignupAcct'
import { StudentProfileForm } from './pages/Student/StudentProfileForm'
import StudentHomePage from './pages/Student/StudentHomePage'
import Page from './pages/AppPage/Page'
import { useTeacherAcctContext } from './hooks/teacher/useTeacherAcctContext'
import { TeacherLogin } from './pages/Teacher/TeacherLogin'
import TeacherSignup from './pages/Teacher/TeacherSignup'
import TeacherHome from './pages/Teacher/TeacherHome'
function App() {
  const {user} = useStudentAcctContext()
  const {teacher} = useTeacherAcctContext()

  return (
   <BrowserRouter>
   {/* <Navbar /> */}
   <Routes>
    <Route path= '/' element = {!user ? <Page/> : <Navigate to= '/studenlogin' />} />
    <Route path = '/studentlogin' element = {!user ? <StudentLoginAcct /> : <Navigate to='/studentdashboard' />} />
    <Route path = '/studentsignup' element = {!user ? <StudentSignupAcct /> : <Navigate to='/studentprofile' />} />
    <Route path = '/studentprofile' element= {user? <StudentProfileForm/> : <Navigate to='/studentlogin' />} />
    <Route path = '/studenthome' element = {user? <StudentHomePage/>  : <Navigate to='/studentlogin' />}/>
    <Route path='/studentdashboard' element={user? <SchoolDashboard />  :<Navigate to='/studentlogin' /> }/>

    <Route path='/teacherhome' element = {teacher ? <TeacherHome /> : <Navigate to='/teacherlogin' />} />
    <Route path='/teacherlogin' element ={!teacher ? <TeacherLogin /> : <Navigate to='/teacherHome'/>} />
    <Route path='/teachersignup' element ={!teacher ? <TeacherSignup /> : <Navigate to='/teacherHome'/>} />




    
   </Routes>
   </BrowserRouter>
  )
}

export default App
