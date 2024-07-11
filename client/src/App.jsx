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
import Home from './components/school/Home'
import AdminRegister from './components/school/AdminRegister'
import AdminSignIn from './components/school/AdminSignIn'
import StudentSignIn from './components/school/StudentSignIn'
import TeacherSignIn from './components/school/TeacherSignIn'
import AdminDashboard from './pages/Admin/Dashboard'
import StudentDashboard from './pages/School/schoolStudent/Dashboard'
import Classes from './pages/Admin/Classes'
import Announcement from './pages/Admin/Announcement'
import Attendance from './pages/Admin/Attendance'
import Library from './pages/Admin/Library'
import SettingsProfile from './pages/Admin/SettingsProfile'
import Teachers from './pages/Admin/Teachers'
import Students from './pages/Admin/Students'
import Sidebar from './pages/Admin/Sidebar'
import AnnouncementStudent from './pages/School/schoolStudent/Announcement'
import AttendanceStudent from './pages/School/schoolStudent/Attendance'
import LibraryStudent from './pages/School/schoolStudent/Library'
import ProfileStudent from './pages/School/schoolStudent/Profile'
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


    <Route path="/school" element= {<Home />} />
    <Route exact path="/adminsignin" element={<AdminSignIn />} />
    <Route exact path='/adminsignup' element= {<AdminRegister />} />
    <Route exact path = "/studentsignin" element={<StudentSignIn />} />
    <Route exact path = "/teachersignin" element = {<TeacherSignIn />} />

    <Route exact path = '/admindashboard' element = {<AdminDashboard />} />
    {/* <Route exact path = '/teacherdashboard' element = {< TeacherD} */}
    <Route exact path ='/studentdashboard' element = {<StudentDashboard />} />



    <Route exact path ='/adminClasses' element = {<Classes />} />
    <Route exact path ='/adminannouncement' element = {<Announcement />} />
    <Route exact path ='/adminattendance' element = {<Attendance />} />
    <Route exact path ='/adminlibrary' element = {<Library />} />
    <Route exact path ='/adminsettingprofile' element = {<SettingsProfile />} />
    <Route exact path ='/adminstudents' element = {<Students />} />
    <Route exact path ='/adminteachers' element = {<Teachers />} />
    <Route exact path ='/adminsidebar' element = {<Sidebar />} />



    <Route exact path ='/studentannouncement' element = {<AnnouncementStudent />} />
    <Route exact path ='/studentattendance' element = {<AttendanceStudent />} />
    <Route exact path ='/studentlibrary' element = {<LibraryStudent/>} />
    <Route exact path ='/studentprof' element = {< ProfileStudent/>} />







    
   </Routes>
   </BrowserRouter>
  )
}

export default App
