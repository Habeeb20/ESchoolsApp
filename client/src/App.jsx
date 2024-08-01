// // import { useState, useContext, useEffect } from 'react'
// // import './App.css'
// // import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
// // import { useStudentAcctContext } from './hooks/student/useStudentAcctContext'

// // import SchoolDashboard from './pages/Dashboards/SchoolDashboard'
// // import Navbar from './components/Navbar'

// // import StudentLoginAcct from './pages/Student/StudentLoginAcct'
// // import StudentSignupAcct from './pages/Student/StudentSignupAcct'
// // import { StudentProfileForm } from './pages/Student/StudentProfileForm'
// // import StudentHomePage from './pages/Student/StudentHomePage'
// // import Page from './pages/AppPage/Page'
// // import { useTeacherAcctContext } from './hooks/teacher/useTeacherAcctContext'
// // import { TeacherLogin } from './pages/Teacher/TeacherLogin'
// // import TeacherSignup from './pages/Teacher/TeacherSignup'
// // import TeacherHome from './pages/Teacher/TeacherHome'
// // import Home from './components/school/Home'
// // import AdminRegister from './components/school/AdminRegister'
// // import AdminSignIn from './components/school/AdminSignIn'
// // import StudentSignIn from './components/school/StudentSignIn'
// // import TeacherSignIn from './components/school/TeacherSignIn'
// // import AdminDashboard from './pages/Admin/Dashboard'
// // import StudentDashboard from './pages/School/schoolStudent/Dashboard'
// // import Classes from './pages/Admin/Classes'
// // import Announcement from './pages/Admin/Announcement'
// // import Attendance from './pages/Admin/Attendance'
// // import Library from './pages/Admin/Library'
// // import SettingsProfile from './pages/Admin/SettingsProfile'
// // import Teachers from './pages/Admin/Teachers'
// // import Students from './pages/Admin/Students'
// // import Sidebar from './pages/Admin/Sidebar'
// // import AnnouncementStudent from './pages/School/schoolStudent/Announcement'
// // import AttendanceStudent from './pages/School/schoolStudent/Attendance'
// // import LibraryStudent from './pages/School/schoolStudent/Library'
// // import ProfileStudent from './pages/School/schoolStudent/Profile'
// // import LandingPage from './pages/LandingPage/LandingPage'


// // //Ejobs
// // import { Context } from './main'
// // import Login from "./components/EssentialJobs/Auth/Login";
// // import Register from './components/EssentialJobs/Auth/Register'
// // import { Toaster } from 'react-hot-toast'
// // import axios from 'axios'
// // import Ejobs from './pages/Ejobs/Ejobs'
// // import Jobs from './pages/Ejobs/Job/Jobs'
// // import JobDetails from './pages/Ejobs/Job/JobDetails'
// // import Application from './components/EssentialJobs/Application/Application'
// // import MyApplication from './components/EssentialJobs/Application/MyApplication'
// // import PostJob from './pages/Ejobs/Job/PostJob'
// // import NotFound from './components/EssentialJobs/NotFound/NotFound'
// // import MyJobs from './pages/Ejobs/Job/MyJobs'
// // import Footer from './components/EssentialJobs/Layout/Footer'



// // //school
// // import { useSelector } from 'react-redux';
// // import Homepage from './pages/Homepage';
// // import AdminDashboardSch from './pages/adminSch/AdminDashboard';
// // import StudentDashboardSch from './pages/studentSch/StudentDashboard';
// // import TeacherDashboard from './pages/teacherSch/TeacherDashboard';
// // import LoginPage from './pages/LoginPage';
// // import AdminRegisterPageSch from './pages/adminSch/AdminRegisterPage';
// // import ChooseUser from './pages/ChooseUser';


// // function App() {
// //   const {user} = useStudentAcctContext()
// //   const {teacher} = useTeacherAcctContext()
// //   const {isAuthorized, setIsAuthorized, setUser} = useContext(Context)
// //   const {currentRole} =  useSelector(state => state.user);
// //   useEffect(() => {
// //     const fetchUser = async () => {
// //       try {
// //         const response = await axios.get(
// //           "http://localhost:4000/api/user/getuser",
// //           {
// //             withCredentials: true,
// //           }
// //         );
// //         setUser(response.data.user);
// //         setIsAuthorized(true);
// //       } catch (error) {
// //         setIsAuthorized(false);
// //       }
// //     };
// //     fetchUser();
// //   }, [isAuthorized]);

// //   return (
// //    <BrowserRouter>
// //    {/* <Navbar /> */}
// //    <Routes>
// //     <Route path= '/' element = {!user ? <Page/> : <Navigate to= '/studenlogin' />} />
// //     <Route path = '/studentlogin' element = {!user ? <StudentLoginAcct /> : <Navigate to='/studentdashboard' />} />
// //     <Route path = '/studentsignup' element = {!user ? <StudentSignupAcct /> : <Navigate to='/studentprofile' />} />
// //     <Route path = '/studentprofile' element= {user? <StudentProfileForm/> : <Navigate to='/studentlogin' />} />
// //     <Route path = '/studenthome' element = {user? <StudentHomePage/>  : <Navigate to='/studentlogin' />}/>
// //     <Route path='/studentdashboard' element={user? <SchoolDashboard />  :<Navigate to='/studentlogin' /> }/>

// //     <Route path='/teacherhome' element = {teacher ? <TeacherHome /> : <Navigate to='/teacherlogin' />} />
// //     <Route path='/teacherlogin' element ={!teacher ? <TeacherLogin /> : <Navigate to='/teacherHome'/>} />
// //     <Route path='/teachersignup' element ={!teacher ? <TeacherSignup /> : <Navigate to='/teacherHome'/>} />


// //     <Route path="/school" element= {<Home />} />
// //     <Route exact path="/adminsignin" element={<AdminSignIn />} />
// //     <Route exact path='/adminsignup' element= {<AdminRegister />} />
// //     <Route exact path = "/studentsignin" element={<StudentSignIn />} />
// //     <Route exact path = "/teachersignin" element = {<TeacherSignIn />} />

// //     <Route exact path = '/admindashboard' element = {<AdminDashboard />} />
// //     {/* <Route exact path = '/teacherdashboard' element = {< TeacherD} */}
// //     <Route exact path ='/studentdashboard' element = {<StudentDashboard />} />



// //     <Route exact path ='/adminClasses' element = {<Classes />} />
// //     <Route exact path ='/adminannouncement' element = {<Announcement />} />
// //     <Route exact path ='/adminattendance' element = {<Attendance />} />
// //     <Route exact path ='/adminlibrary' element = {<Library />} />
// //     <Route exact path ='/adminsettingprofile' element = {<SettingsProfile />} />
// //     <Route exact path ='/adminstudents' element = {<Students />} />
// //     <Route exact path ='/adminteachers' element = {<Teachers />} />
// //     <Route exact path ='/adminsidebar' element = {<Sidebar />} />



// //     <Route exact path ='/studentannouncement' element = {<AnnouncementStudent />} />
// //     <Route exact path ='/studentattendance' element = {<AttendanceStudent />} />
// //     <Route exact path ='/studentlibrary' element = {<LibraryStudent/>} />
// //     <Route exact path ='/studentprof' element = {< ProfileStudent/>} />


// //     <Route exact path ='/landingpage' element = {< LandingPage/>} />

// //     //Ejobs
// //     <Route exact path='/ejobs'  element = {<Ejobs />} />
// //     <Route exact path='/ejobslogin' element ={<Login />}/>
// //     <Route exact path='/ejobsregister' element ={<Register />}/>
// //     <Route exact path='/job/getall' element ={<Jobs />}/>
// //     <Route exact path='/job/:id' element ={<JobDetails />}/>
// //     <Route exact path='/application/:id' element ={<Application />}/>
// //     <Route exact path='/application?me' element ={<MyApplication />}/>
// //     <Route exact path='/job/post' element ={<PostJob />}/>
// //     <Route exact path='/job/me' element ={<MyJobs />}/>
// //     <Route exact path='*' element ={<NotFound />}/>


// //     {currentRole === null &&
// //         <>
// //           <Route path="/schoolhomepage" element={<Homepage />} />
// //           <Route path="/choose" element={<ChooseUser visitor="normal" />} />
// //           <Route path="/chooseasguest" element={<ChooseUser visitor="guest" />} />

// //           <Route path="/Adminloginsch" element={<LoginPage role="Admin" />} />
// //           <Route path="/Studentloginsch" element={<LoginPage role="Student" />} />
// //           <Route path="/Teacherloginsch" element={<LoginPage role="Teacher" />} />

// //           <Route path="/Adminregister" element={<AdminRegisterPageSch />} />

// //           <Route path='*' element={<Navigate to="/" />} />
// //         </>
// //     }

// //       {currentRole === "Admin" &&
// //         <>
// //           <AdminDashboardSch />
// //         </>
// //       }

// //       {currentRole === "Student" &&
// //         <>
// //           <StudentDashboardSch />
// //         </>
// //       }

// //       {currentRole === "Teacher" &&
// //         <>
// //           <TeacherDashboard />
// //         </>
// //       }
    
    
    
    
    
    
    
    
    







    
// //    </Routes>
// //    {/* <Footer /> */}
// //    <Toaster />
// //    </BrowserRouter>
// //   )
// // }

// // export default App





// import { useState, useContext, useEffect } from 'react'
// import './App.css'

// import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
// import { useStudentAcctContext } from './hooks/student/useStudentAcctContext'

// import SchoolDashboard from './pages/Dashboards/SchoolDashboard'
// import Navbar from './components/Navbar'
// import AOS from "aos";
// import "aos/dist/aos.css";
// import StudentLoginAcct from './pages/Student/StudentLoginAcct'
// import StudentSignupAcct from './pages/Student/StudentSignupAcct'
// import { StudentProfileForm } from './pages/Student/StudentProfileForm'
// import StudentHomePage from './pages/Student/StudentHomePage'
// import Page from './pages/AppPage/Page'
// import { useTeacherAcctContext } from './hooks/teacher/useTeacherAcctContext'
// import TeacherLogin  from './pages/Teacher/TeacherLogin'
// import TeacherSignup from './pages/Teacher/TeacherSignup'
// import TeacherHome from './pages/Teacher/TeacherHome'
// import Home from './components/school/Home'
// import AdminRegister from './components/school/AdminRegister'
// import AdminSignIn from './components/school/AdminSignIn'
// import StudentSignIn from './components/school/StudentSignIn'
// import TeacherSignIn from './components/school/TeacherSignIn'
// import AdminDashboard from './pages/Admin/Dashboard'
// import StudentDashboard from './pages/School/schoolStudent/Dashboard'
// import Classes from './pages/Admin/Classes'
// import Announcement from './pages/Admin/Announcement'
// import Attendance from './pages/Admin/Attendance'
// import Library from './pages/Admin/Library'
// import SettingsProfile from './pages/Admin/SettingsProfile'
// import Teachers from './pages/Admin/Teachers'
// import Students from './pages/Admin/Students'
// import Sidebar from './pages/Admin/Sidebar'
// import AnnouncementStudent from './pages/School/schoolStudent/Announcement'
// import AttendanceStudent from './pages/School/schoolStudent/Attendance'
// import LibraryStudent from './pages/School/schoolStudent/Library'
// import ProfileStudent from './pages/School/schoolStudent/Profile'
// import LandingPage from './pages/LandingPage/LandingPage'
// import { ClerkProvider } from '@clerk/clerk-react'
// //Ejobs
// import { Context } from './main'
// import Login from "./components/EssentialJobs/Auth/Login";
// import Register from './components/EssentialJobs/Auth/Register'
// import { Toaster } from 'react-hot-toast'
// import axios from 'axios'
// import Ejobs from './pages/Ejobs/Ejobs'
// import Jobs from './pages/Ejobs/Job/Jobs'
// import JobDetails from './pages/Ejobs/Job/JobDetails'
// import Application from './components/EssentialJobs/Application/Application'
// import MyApplication from './components/EssentialJobs/Application/MyApplication'
// import PostJob from './pages/Ejobs/Job/PostJob'
// import NotFound from './components/EssentialJobs/NotFound/NotFound'
// import MyJobs from './pages/Ejobs/Job/MyJobs'
// import Footer from './components/EssentialJobs/Layout/Footer'

// //school
// import { useSelector } from 'react-redux';

// import Homepage from './pages/Homepage';
// import AdminDashboardSch from './pages/adminSch/AdminDashboard';
// import StudentDashboardSch from './pages/studentSch/StudentDashboard';
// import TeacherDashboard from './pages/teacherSch/TeacherDashboard';
// import LoginPage from './pages/LoginPage';
// import AdminRegisterPageSch from './pages/adminSch/AdminRegisterPage';
// import ChooseUser from './pages/ChooseUser';
// import TeacherLandingPage from './pages/Teacher/TeacherLandingPage'
// import TeacherPage from './pages/Teacher/TeacherPage'
// import TeacherDetails from './pages/adminSch/teacherRelated/TeacherDetails'
// import TeacherDetailDashboard from './pages/Teacher/TeacherDetailDashboard'
// import TeacherProfileForm from './pages/Teacher/TeacherProfileForm'
// import TD from './pages/Teacher/TD/TD'
// import SeeComplains from './pages/adminSch/studentRelated/SeeComplains'
// import AddNotice from './pages/adminSch/noticeRelated/AddNotice'
// import ShowNotices from './pages/adminSch/noticeRelated/ShowNotices'
// import ShowSubjects from './pages/adminSch/subjectRelated/ShowSubjects'
// import ViewSubject from './pages/adminSch/subjectRelated/ViewSubject'
// import SubjectForm from './pages/adminSch/subjectRelated/SubjectForm'
// import StudentAttendance from './pages/adminSch/studentRelated/StudentAttendance'
// import StudentExamMarks from './pages/adminSch/studentRelated/StudentExamMarks'
// import AddClass from './pages/adminSch/classRelated/AddClass'
// // import AddStudent from './pages/adminSch/studentRelated/AddStudent'
// import ShowStudents from './pages/adminSch/studentRelated/ShowStudents'
// import ShowTeachers from './pages/adminSch/teacherRelated/ShowTeachers'
// import AddTeacher from './pages/adminSch/teacherRelated/AddTeacher'
// import Logout from './pages/Logout'
// import AdminHomePage from './pages/adminSch/AdminHomePage'
// import ChooseClass from './pages/adminSch/teacherRelated/ChooseClass'
// import ShowClasses from './pages/adminSch/classRelated/ShowClasses'
// import ClassDetails from './pages/adminSch/classRelated/ClassDetails'
// import ViewStudent from './pages/adminSch/studentRelated/ViewStudent'
// import ViewStdAttendance from './pages/studentSch/ViewStdAttendance'
// import ChooseSubject from './pages/adminSch/teacherRelated/ChooseSubject'





// // Import your publishable key

// import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/clerk-react";
// import AdminProfile from './pages/adminSch/AdminProfile'
// import SchoolLandingPage from './pages/SchoolLandingPage/SchoolLandingPage'
// import SchOriginal from './pages/SchoolLandingPage/SchOriginal'
// import SchComp2 from './pages/SchoolLandingPage/SchComp'




// function App() {
//   const {user} = useStudentAcctContext()
//   const {teacher} = useTeacherAcctContext()
//   const {isAuthorized, setIsAuthorized, setUser} = useContext(Context)
//   const {currentRole} =  useSelector(state => state.user);
//   useEffect(() => {
//     const fetchUser = async () => {
//       try {
//         const response = await axios.get(
//           "http://localhost:4000/api/user/getuser",
//           {
//             withCredentials: true,
//           }
//         );
//         setUser(response.data.user);
//         setIsAuthorized(true);
//       } catch (error) {
//         setIsAuthorized(false);
//       }
//     };
//     fetchUser();
//   }, [isAuthorized]);

//   return (
//    <BrowserRouter>
//    {/* <Navbar /> */}
//    <Routes>
 
  
//     <Route path= '/' element = {<Page/> } />
//     <Route path = '/studentlogin' element = {!user ? <StudentLoginAcct /> : <Navigate to='/landingpage' />} />
//     <Route path = '/studentsignup' element = {!user ? <StudentSignupAcct /> : <Navigate to='/landingpage' />} />
//     <Route path = '/landingpage' element= { <LandingPage/>} />
//     <Route path = '/studenthome' element = {user? <StudentHomePage/>  : <Navigate to='/landingpage' />}/>
//     {/* <Route path='/studentdashboard' element={user? <SchoolDashboard />  :<Navigate to='/studentlogin' /> }/> */}

//     <Route path='/teacherhome' element = {teacher ? <TeacherHome /> : <Navigate to='/teacherlogin' />} />
//     <Route path='/teacherlogin' element ={!teacher ? <TeacherLogin /> : <Navigate to='/teacherhome'/>} />
//     <Route path='/teachersignup' element ={!teacher ? <TeacherSignup /> : <Navigate to='/teacherhome'/>} />


//     <Route path="/school" element= {<Home />} />
//     <Route exact path="/adminsignin" element={<AdminSignIn />} />
//     <Route exact path='/adminsignup' element= {<AdminRegister />} />
//     <Route exact path = "/studentsignin" element={<StudentSignIn />} />
//     <Route exact path = "/teachersignin" element = {<TeacherSignIn />} />

//     <Route exact path = '/admindashboard' element = {<AdminDashboard />} />
//     {/* <Route exact path = '/teacherdashboard' element = {< TeacherD} */}
//     <Route exact path ='/studentdashboard' element = {<StudentDashboard />} />



//     <Route exact path ='/adminClasses' element = {<Classes />} />
//     <Route exact path ='/adminannouncement' element = {<Announcement />} />
//     <Route exact path ='/adminattendance' element = {<Attendance />} />
//     <Route exact path ='/adminlibrary' element = {<Library />} />
//     <Route exact path ='/adminsettingprofile' element = {<SettingsProfile />} />
//     <Route exact path ='/adminstudents' element = {<Students />} />
//     <Route exact path ='/adminteachers' element = {<Teachers />} />
//     <Route exact path ='/adminsidebar' element = {<Sidebar />} />



//     <Route exact path ='/studentannouncement' element = {<AnnouncementStudent />} />
//     <Route exact path ='/studentattendance' element = {<AttendanceStudent />} />
//     <Route exact path ='/studentlibrary' element = {<LibraryStudent/>} />
//     <Route exact path ='/studentprof' element = {< ProfileStudent/>} />


//     <Route exact path ='/landingpage' element = {< LandingPage/>} />


//     {/* <ClerkProvider publishableKey={PUBLISHABLE_KEY} afterSignOutUrl="/">
//       <TeacherLogin />
//     </ClerkProvider> */}
// {/* 
//     <Route path='/teacherlogin' element ={ <TeacherLogin /> } /> */}






//     //Ejobs
//     <Route exact path='/ejobs'  element = {<Ejobs />} />
//     <Route exact path='/ejobslogin' element ={<Login />}/>
//     <Route exact path='/ejobsregister' element ={<Register />}/>
//     <Route exact path='/job/getall' element ={<Jobs />}/>
//     <Route exact path='/job/:id' element ={<JobDetails />}/>
//     <Route exact path='/application/:id' element ={<Application />}/>
//     <Route exact path='/application?me' element ={<MyApplication />}/>
//     <Route exact path='/job/post' element ={<PostJob />}/>
//     <Route exact path='/job/me' element ={<MyJobs />}/>
//     <Route exact path='*' element ={<NotFound />}/>




//           <Route path='/schoolhomepage' element={<Homepage  />} />
//           <Route path="/Adminregister" element={<AdminRegisterPageSch />} />
//           <Route path="/choose" element={<ChooseUser visitor="normal" />} />
//     {currentRole === null &&
//         <>
 
//           <Route path="/schoolhomepage" element={<Homepage  />} />
       
//           <Route path="/chooseasguest" element={<ChooseUser visitor="guest" />} />

//           <Route path="/Adminlogin" element={<LoginPage role="Admin" />} />
//           <Route path="/Studentloginsch" element={<LoginPage role="Student" />} />
//           <Route path="/Teacherloginsch" element={<LoginPage role="Teacher" />} />

//           <Route path="/Adminregister" element={<AdminRegisterPageSch />} />

        

//           <Route path='*' element={<Navigate to="/" />} />


//           ///some routes in schManagement

//                         <Route path="/Admin/dashboard" element={<AdminHomePage />} />
//                         <Route path="/Admin/profile" element={<AdminProfile />} />
//                         <Route path="/Admin/complains" element={<SeeComplains />} />

//                         {/* Notice */}
//                         <Route path="/Admin/addnotice" element={<AddNotice />} />
//                         <Route path="/Admin/notices" element={<ShowNotices />} />

//                         {/* Subject */}
//                         <Route path="/Admin/subjects" element={<ShowSubjects />} />
//                         <Route path="/Admin/subjects/subject/:classID/:subjectID" element={<ViewSubject />} />
//                         <Route path="/Admin/subjects/chooseclass" element={<ChooseClass situation="Subject" />} />

//                         <Route path="/Admin/addsubject/:id" element={<SubjectForm />} />
//                         <Route path="/Admin/class/subject/:classID/:subjectID" element={<ViewSubject />} />

//                         <Route path="/Admin/subject/student/attendance/:studentID/:subjectID" element={<StudentAttendance situation="Subject" />} />
//                         <Route path="/Admin/subject/student/marks/:studentID/:subjectID" element={<StudentExamMarks situation="Subject" />} />

//                         {/* Class */}
//                         <Route path="/Admin/addclass" element={<AddClass />} />
//                         <Route path="/Admin/classes" element={<ShowClasses />} />
//                         <Route path="/Admin/classes/class/:id" element={<ClassDetails />} />
//                         {/* <Route path="/Admin/class/addstudents/:id" element={<AddStudent situation="Class" />} /> */}

//                         {/* Student */}
//                         {/* <Route path="/Admin/addstudents" element={<AddStudent situation="Student" />} /> */}
//                         <Route path="/Admin/students" element={<ShowStudents />} />
//                         <Route path="/Admin/students/student/:id" element={<ViewStudent />} />
//                         <Route path="/Admin/students/student/attendance/:id" element={<StudentAttendance situation="Student" />} />
//                         <Route path="/Admin/students/student/marks/:id" element={<StudentExamMarks situation="Student" />} />

//                         {/* Teacher */}
//                         <Route path="/Admin/teachers" element={<ShowTeachers />} />
//                         <Route path="/Admin/teachers/teacher/:id" element={<TeacherDetails />} />
//                         <Route path="/Admin/teachers/chooseclass" element={<ChooseClass situation="Teacher" />} />
//                         <Route path="/Admin/teachers/choosesubject/:id" element={<ChooseSubject situation="Norm" />} />
//                         <Route path="/Admin/teachers/choosesubject/:classID/:teacherID" element={<ChooseSubject situation="Teacher" />} />
//                         <Route path="/Admin/teachers/addteacher/:id" element={<AddTeacher />} />

//                         <Route path="/logout" element={<Logout />} />
//         </>
//     }

//       {currentRole === "Admin" &&
//         <Route path='/Admin/dashboard/*' element={<AdminDashboardSch />} />
      
//       }
//         <Route path='/Admin/profile' element={<AdminProfile />} />

//       {currentRole === "Student" &&
//         <Route path='/studentdashboardsch' element={<StudentDashboardSch />} />
//       }

//       {currentRole === "Teacher" &&
//         <Route path='/teacherdashboard' element={<TeacherDashboard />} />
//       }
    
//    </Routes>
//    {/* <Footer /> */}
//    <Toaster />
//    </BrowserRouter>
//   )
// }

// export default App




import { useState, useContext, useEffect } from 'react'
import './App.css'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { useSelector } from 'react-redux';
import { Toaster } from 'react-hot-toast'
import axios from 'axios'
import '../public/global.css'
// Contexts
import { useStudentAcctContext } from './hooks/student/useStudentAcctContext'
import { useTeacherAcctContext } from './hooks/teacher/useTeacherAcctContext'
import { Context } from './main'

// Components and Pages
import Navbar from './components/Navbar'




import SchoolDashboard from './pages/Dashboards/SchoolDashboard'
import StudentLoginAcct from './pages/Student/StudentLoginAcct'
import StudentSignupAcct from './pages/Student/StudentSignupAcct'
// import StudentProfileForm from './pages/Student/StudentProfileForm'
import StudentHomePage from './pages/Student/StudentHomePage'



import Page from './pages/AppPage/Page'


import TeacherLogin from './pages/Teacher/TeacherLogin'
import TeacherSignup from './pages/Teacher/TeacherSignup'
import TeacherHome from './pages/Teacher/TeacherHome'



import Home from './components/school/Home'
// import AdminRegister from './components/school/AdminRegister'
// import AdminSignIn from './components/school/AdminSignIn'
// import StudentSignIn from './components/school/StudentSignIn'
// import TeacherSignIn from './components/school/TeacherSignIn'
// import AdminDashboard from './pages/Admin/Dashboard'
// import StudentDashboard from './pages/School/schoolStudent/Dashboard'
// import Classes from './pages/Admin/Classes'
// import Announcement from './pages/Admin/Announcement'
// import Attendance from './pages/Admin/Attendance'
// import Library from './pages/Admin/Library'
// import SettingsProfile from './pages/Admin/SettingsProfile'
// import Teachers from './pages/Admin/Teachers'
// import Students from './pages/Admin/Students'
// import Sidebar from './pages/Admin/Sidebar'
// import AnnouncementStudent from './pages/School/schoolStudent/Announcement'
// import AttendanceStudent from './pages/School/schoolStudent/Attendance'
// import LibraryStudent from './pages/School/schoolStudent/Library'
// import ProfileStudent from './pages/School/schoolStudent/Profile'
import LandingPage from './pages/LandingPage/LandingPage'
import AdminDashboardSch from './pages/adminSch/AdminDashboard'
import StudentDashboardSch from './pages/studentSch/StudentDashboard'
import TeacherDashboard from './pages/teacherSch/TeacherDashboard'
import LoginPage from './pages/LoginPage'
import AdminRegisterPageSch from './pages/adminSch/AdminRegisterPage'
import ChooseUser from './pages/ChooseUser'




import Ejobs from './pages/Ejobs/Ejobs'
import Jobs from './pages/Ejobs/Job/Jobs'
import JobDetails from './pages/Ejobs/Job/JobDetails'
import Application from './components/EssentialJobs/Application/Application'
import MyApplication from './components/EssentialJobs/Application/MyApplication'
import PostJob from './pages/Ejobs/Job/PostJob'
import NotFound from './components/EssentialJobs/NotFound/NotFound'
import MyJobs from './pages/Ejobs/Job/MyJobs'
import Login from './components/EssentialJobs/Auth/Login';
import Register from './components/EssentialJobs/Auth/Register';
import Footer from './components/EssentialJobs/Layout/Footer'







//school


import Homepage from './pages/Homepage';
import ShowClasses from './pages/adminSch/classRelated/ShowClasses';
import ShowSubjects from './pages/adminSch/subjectRelated/ShowSubjects';
import ShowTeachers from './pages/adminSch/teacherRelated/ShowTeachers';
import ShowStudents from './pages/adminSch/studentRelated/ShowStudents';
import ShowNotices from './pages/adminSch/noticeRelated/ShowNotices';
import SeeComplains from './pages/adminSch/studentRelated/SeeComplains';
import AddStudent from './pages/adminSch/studentRelated/AddStudent';
import AddClass from './pages/adminSch/classRelated/AddClass';
import AddNotice from './pages/adminSch/noticeRelated/AddNotice';
import SubjectForm from './pages/adminSch/subjectRelated/SubjectForm';
import AdminProfile from './pages/adminSch/AdminProfile';
import ClassDetails from './pages/adminSch/classRelated/ClassDetails';
import ViewSubject from './pages/adminSch/subjectRelated/ViewSubject';
import ChooseClass from './pages/adminSch/teacherRelated/ChooseClass';
import StudentAttendance from './pages/adminSch/studentRelated/StudentAttendance';
import ViewStudent from './pages/adminSch/studentRelated/ViewStudent';
import AddTeacher from './pages/adminSch/teacherRelated/AddTeacher';
import ChooseSubject from './pages/adminSch/teacherRelated/ChooseSubject';
import TeacherDetails from './pages/adminSch/teacherRelated/TeacherDetails';
import TeacherHomePage from './pages/teacherSch/TeacherHomePage';
import TeacherPage from './pages/Teacher/TeacherPage';
import TeacherLandingPage from './pages/Teacher/TeacherLandingPage';
import TeacherProfileForm from './pages/Teacher/TeacherProfileForm';
import AdmissionData from './pages/AdmissionData';
import SchOriginal from './pages/SchoolLandingPage/SchOriginal';
import PrivateSec from './pages/SchoolLandingPage/secondaryschool/PrivateSec';
import PublicSec from './pages/SchoolLandingPage/secondaryschool/PublicSec';
import PrivateUni from './pages/SchoolLandingPage/university/PrivateUni';
import StateUni from './pages/SchoolLandingPage/university/StateUni';
import FederalUni from './pages/SchoolLandingPage/university/FederalUni';
import StatePoly from './pages/SchoolLandingPage/polytechnic/StatePoly';
import FederalPoly from './pages/SchoolLandingPage/polytechnic/FederalPoly';
import CollegesOfEducation from './pages/SchoolLandingPage/schoolselection/CollegesOfEducation';
import SearchResults from './pages/SchoolLandingPage/schoolselection/SearchResults';
import SchoolLandingPage from './pages/SchoolLandingPage/SchoolLandingPage';
import HomeLanding from './pages/LandingPage/essentialLanding/Home/HomeLanding';





//AIchats

import Chat from './pages/AIChat/Chat'
import HomeChat from './pages/AIChat/HomeChat'




///bookEssential

import MainBook from './pages/Bookessential/MainBook'
import Services from './components/BookEssential/Services'

//searchbook
import SearchHome from './components/searchBook/pages/Home/SearchHome'
import About from './components/searchBook/pages/About/About'
import BookList from './components/searchBook/component/BookList/BookList'
import BookDetails from './components/searchBook/component/BookDetails/BookDetails'
import Payment from './pages/Payment/Payment'
import PaymentSuccess from './pages/Payment/PaymentSuccess';

import CreateSchool from './pages/schOwner/CreateSchool';
import Contact from './pages/LandingPage/essentialLanding/Contact/Contact';
import LandingAbout from './pages/LandingPage/essentialLanding/About/About'
import Scholarship from './pages/Scholarship';


//schowner

import SchOwnerSignin from './pages/schOwner/SchOwnerSignin';
import SchOwnerSignup from './pages/schOwner/SchOwnerSignup';
import SchOwnerDashboard from './pages/schOwner/SchOwnerDashboard';
import SchOwnerHome from './pages/schOwner/SchOwnerHome';



//exam
import ExamMain from './pages/Exams/ExamMain';
import Tutorial from './pages/Tutorial';

// import StudentDashboardSch from './pages/studentSch/StudentDashboard';
// import TeacherDashboard from './pages/teacherSch/TeacherDashboard';
// import LoginPage from './pages/LoginPage';
// import AdminRegisterPageSch from './pages/adminSch/AdminRegisterPage';
// import ChooseUser from './pages/ChooseUser';
// import TeacherLandingPage from './pages/Teacher/TeacherLandingPage'
// import TeacherPage from './pages/Teacher/TeacherPage'
// import TeacherDetails from './pages/adminSch/teacherRelated/TeacherDetails'
// import TeacherDetailDashboard from './pages/Teacher/TeacherDetailDashboard'
// import TeacherProfileForm from './pages/Teacher/TeacherProfileForm'
// import TD from './pages/Teacher/TD/TD'
// import SeeComplains from './pages/adminSch/studentRelated/SeeComplains'
// import AddNotice from './pages/adminSch/noticeRelated/AddNotice'
// import ShowNotices from './pages/adminSch/noticeRelated/ShowNotices'
// import ShowSubjects from './pages/adminSch/subjectRelated/ShowSubjects'
// import ViewSubject from './pages/adminSch/subjectRelated/ViewSubject'
// import SubjectForm from './pages/adminSch/subjectRelated/SubjectForm'
// import StudentAttendance from './pages/adminSch/studentRelated/StudentAttendance'
// import StudentExamMarks from './pages/adminSch/studentRelated/StudentExamMarks'
// import AddClass from './pages/adminSch/classRelated/AddClass'
// // import AddStudent from './pages/adminSch/studentRelated/AddStudent'
// import ShowStudents from './pages/adminSch/studentRelated/ShowStudents'
// import ShowTeachers from './pages/adminSch/teacherRelated/ShowTeachers'
// import AddTeacher from './pages/adminSch/teacherRelated/AddTeacher'
// import Logout from './pages/Logout'
// import AdminHomePage from './pages/adminSch/AdminHomePage'
// import ChooseClass from './pages/adminSch/teacherRelated/ChooseClass'
// import ShowClasses from './pages/adminSch/classRelated/ShowClasses'
// import ClassDetails from './pages/adminSch/classRelated/ClassDetails'
// import ViewStudent from './pages/adminSch/studentRelated/ViewStudent'
// import ViewStdAttendance from './pages/studentSch/ViewStdAttendance'
// import ChooseSubject from './pages/adminSch/teacherRelated/ChooseSubject'




function App() {
  const { user } = useStudentAcctContext()
  const { teacher } = useTeacherAcctContext()
  const { isAuthorized, setIsAuthorized, setUser } = useContext(Context)
  const { currentRole } = useSelector(state => state.user);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await axios.get(
          "http://localhost:4000/api/user/getuser",
          {
            withCredentials: true,
          }
        );
        setUser(response.data.user);
        setIsAuthorized(true);
      } catch (error) {
        setIsAuthorized(false);
      }
    };
    fetchUser();
  }, [isAuthorized]);

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Page />} />
        <Route path='/studentlogin' element={!user ? <StudentLoginAcct /> : <Navigate to='/landinghome' />} />
        <Route path='/studentsignup' element={!user ? <StudentSignupAcct /> : <Navigate to='/landinghome' />} />
        {/* <Route path='/landingpage' element={<LandingPage />} /> */}
        <Route path='/landinghome' element={<HomeLanding />} />
        <Route path='/studenthome' element={user ? <StudentHomePage /> : <Navigate to='/landinghome' />} />
        {/* <Route path='/teacherpage' element={<Teacher />} /> */}
        <Route exact path='/teacherpage' element ={<TeacherPage />}/>
        <Route exact path='/teacherlandingpage' element ={<TeacherLandingPage />}/>
        <Route path='/teacherhome' element={teacher ? <TeacherHome /> : <Navigate to='/teacherlogin' />} />
        <Route path='/teacherlogin' element={!teacher ? <TeacherLogin /> : <Navigate to='/teacherhome' />} />
        <Route path='/teachersignup' element={!teacher ? <TeacherSignup /> : <Navigate to='/teacherhome' />} />
        <Route path='/teacherprofileform' element={<TeacherProfileForm />} />

        <Route path='/school' element={<Home />} />
        {/* <Route path='/adminsignin' element={<AdminSignIn />} />
        <Route path='/adminsignup' element={<AdminRegister />} />
        <Route path='/studentsignin' element={<StudentSignIn />} />
        <Route path='/teachersignin' element={<TeacherSignIn />} />
        <Route path='/admindashboard' element={<AdminDashboard />} />
        <Route path='/studentdashboard' element={<StudentDashboard />} />
        
        <Route path='/adminClasses' element={<Classes />} />
        <Route path='/adminannouncement' element={<Announcement />} />
        <Route path='/adminattendance' element={<Attendance />} />
        <Route path='/adminlibrary' element={<Library />} />
        <Route path='/adminsettingprofile' element={<SettingsProfile />} />
        <Route path='/adminstudents' element={<Students />} />
        <Route path='/adminteachers' element={<Teachers />} />
        <Route path='/adminsidebar' element={<Sidebar />} />

        <Route path='/studentannouncement' element={<AnnouncementStudent />} />
        <Route path='/studentattendance' element={<AttendanceStudent />} />
        <Route path='/studentlibrary' element={<LibraryStudent />} />
        <Route path='/studentprof' element={<ProfileStudent />} /> */}

        <Route path='/ejobs' element={<Ejobs />} />
        <Route path='/ejobslogin' element={<Login />} />
        <Route path='/ejobsregister' element={<Register />} />
        <Route path='/job/getall' element={<Jobs />} />
        <Route path='/job/:id' element={<JobDetails />} />
        <Route path='/application/:id' element={<Application />} />
        <Route path='/application/me' element={<MyApplication />} />
        <Route path='/job/post' element={<PostJob />} />
        
        <Route path='/job/me' element={<MyJobs />} />
        <Route path='*' element={<NotFound />} />

        <Route path='/admissiondata' element={<AdmissionData />} />
        <Route path='/schoriginal' element={<SchOriginal />} />





        
        //schooldetails
            <Route path='/schoollandingpage' element={<SchoolLandingPage />} />
            <Route path='/secondary-schools/private' element={<PrivateSec />} />
            <Route path='/secondary-schools/government' element={<PublicSec />} />
            <Route path='/universities/private' element={<PrivateUni />} />
            <Route path='/universities/state' element={<StateUni />} />
            <Route path='/universities/federal' element={<FederalUni />} />
            <Route path='/polytechnics/state' element={<StatePoly />} />
            <Route path='/polytechnics/federal' element={<FederalPoly />} />
            <Route path='/colleges-of-education' element={<CollegesOfEducation />} />
            <Route path='/search' element={<SearchResults />} />



          //home
         


          
           //chat
          <Route exact path='Aihome' element ={<HomeChat />}/>     <Route exact path='chat' element ={<Chat />}/>
         
        



        <Route exact path='/teacherlandingpage' element ={<TeacherLandingPage />}/>     <Route exact path='/teacherpage' element ={<TeacherPage />}/>
        {/* <Route exact path='/teacherdetaildashboard' element ={<TeacherDetailDashboard />}/>     <Route exact path='/teacherprofileform' element ={<TeacherProfileForm />}/>
 */}


    ///Bookessential
         <Route path="/mainpage" element={<MainBook />} />

         <Route path="/services" element={<Services />} />


    //searchbook

        <Route path="/searchbook" element={<SearchHome />} />
         <Route path="/searchabout" element={<About />} />
         <Route path="/book" element={<BookList />} />

        <Route path="/book/:id" element={<BookDetails />} />

     //payment 

        <Route path="/payment" element={<Payment />} />

        <Route path="/paymentverification" element={<PaymentSuccess />} />

     //SchoolLandingPage

        <Route path="/schoollandingpage" element={<SchoolLandingPage />} />
         <Route path = "/schoriginal" element={<SchOriginal />} />
         {/* <Route path = "/schcomp" element={<SchComp2 />} /> */}


         //schoOwner
       
         <Route path="/schownerlogin" element={<SchOwnerSignin />} />
         <Route path="/schownerregister" element={<SchOwnerSignup />}/>
         <Route path="/schownerdashboard" element={<SchOwnerDashboard />} />
         <Route path="/schownerhome" element={<SchOwnerHome />} />
         <Route path="/schownercreate" element={<CreateSchool />} />

         //Scholarship
         <Route path='/scholarship' element={<Scholarship/>} />



         //others

         <Route path='/contact' element={<Contact/>} />
          
         <Route path='/about' element={<LandingAbout/>} />

         //exams
         <Route path='/exammainpage' element={<ExamMain/>} />


         //Tutorial

         <Route path='/tutorial' element={<Tutorial />} />







            
            




        <Route path='/schoolhomepage' element={<Homepage />} />
        <Route path='/choose' element={<ChooseUser visitor="normal" />} />
        <Route path='/Admin/profile' element={<AdminProfile />}/>
        <Route path='/Adminregister' element={<AdminRegisterPageSch />} />
        <Route path='/Adminlogin' element={<LoginPage role="Admin" />} />
        {currentRole === null && (
          <>
           
          
            <Route path='/chooseasguest' element={<ChooseUser visitor="guest" />} />
          
            <Route path='/Studentloginsch' element={<LoginPage role="Student" />} />
            <Route path='/Teacherloginsch' element={<LoginPage role="Teacher" />} />
            <Route  path='/Admin/subjects/subject/:classID/:subjectID' element={<ViewSubject/>}/>
            <Route path='/Admin/classes' element={<ShowClasses />} />
            <Route path='*' element={<Navigate to="/" />} />
          </>
        )}

        {currentRole === "Admin" && (
          <>
            <Route path='/admin/dashboard' element={<AdminDashboardSch />} />
            <Route path='/Admin/classes' element={<ShowClasses />} />
            <Route path='/Admin/subjects' element={<ShowSubjects />} />
            <Route path='/Admin/teachers' element={<ShowTeachers />} />
            <Route path='/Admin/students' element={<ShowStudents />} />
            <Route path='/Admin/notices' element={<ShowNotices />} />
            <Route path='/Admin/complains' element={<SeeComplains />} />




            <Route path="/Admin/addstudents" element={<AddStudent />} />
            <Route path="/Admin/addclass" element={<AddClass />} />
            <Route path="/Admin/addnotice" element={<AddNotice />} />
            <Route  path='/Admin/classes/class/:id' element={<ClassDetails />}/>
            <Route path='/Admin/subjects/chooseclass' element={<ChooseClass />} />
            
            <Route path="/Admin/addsubject/:id" element={<SubjectForm  situation="Subject"/>} />
            <Route path='/Admin/subjects/subject/:classID/:subjectID' element={<ViewSubject />} />
            <Route path='/Admin/class/addstudents/:id' element={<AddStudent situation="Class" />} />
            <Route path='/Admin/subject/student/attendance/:studentID/:subjectID' element={<StudentAttendance  situation="Subject"/>}/>
            <Route path='/Admin/students/student/:id' element={<ViewStudent />} />
            


            //teacher
            <Route path='/Admin/teachers/addteacher/:id' element={<AddTeacher />} />
            <Route path='/AAdmin/teachers/choosesubject/:classID/:teacherID' element={<ChooseSubject situation="Teacher" />} />
            <Route path='/Admin/teachers/choosesubject/:id' element={<ChooseSubject situation="Norm"/>} />
            <Route path='/Admin/teachers/chooseclass'  element={<ChooseClass situation="Teacher" />} />
            <Route path="/Admin/teachers/teacher/:id" element={<TeacherDetails /> } />
            
            
            
            
            {/* Add other admin routes here */}
          </>
        )}

        {currentRole === "Student" && (
          <>
            <Route path='/student/dashboard' element={<StudentDashboardSch />} />
            {/* Add other student routes here */}
          </>
        )}

        {currentRole === "Teacher" && (
          <>
            <Route path='/teacher/dashboard' element={<TeacherDashboard />} />
            {/* Add other teacher routes here */}
          </>
        )}
      </Routes>
      <Toaster />
      {/* <Footer /> */}
    </BrowserRouter>
  )
}

export default App



