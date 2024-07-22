// import { useState, useContext, useEffect } from 'react'
// import './App.css'
// import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
// import { useStudentAcctContext } from './hooks/student/useStudentAcctContext'

// import SchoolDashboard from './pages/Dashboards/SchoolDashboard'
// import Navbar from './components/Navbar'

// import StudentLoginAcct from './pages/Student/StudentLoginAcct'
// import StudentSignupAcct from './pages/Student/StudentSignupAcct'
// import { StudentProfileForm } from './pages/Student/StudentProfileForm'
// import StudentHomePage from './pages/Student/StudentHomePage'
// import Page from './pages/AppPage/Page'
// import { useTeacherAcctContext } from './hooks/teacher/useTeacherAcctContext'
// import { TeacherLogin } from './pages/Teacher/TeacherLogin'
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
//     <Route path= '/' element = {!user ? <Page/> : <Navigate to= '/studenlogin' />} />
//     <Route path = '/studentlogin' element = {!user ? <StudentLoginAcct /> : <Navigate to='/studentdashboard' />} />
//     <Route path = '/studentsignup' element = {!user ? <StudentSignupAcct /> : <Navigate to='/studentprofile' />} />
//     <Route path = '/studentprofile' element= {user? <StudentProfileForm/> : <Navigate to='/studentlogin' />} />
//     <Route path = '/studenthome' element = {user? <StudentHomePage/>  : <Navigate to='/studentlogin' />}/>
//     <Route path='/studentdashboard' element={user? <SchoolDashboard />  :<Navigate to='/studentlogin' /> }/>

//     <Route path='/teacherhome' element = {teacher ? <TeacherHome /> : <Navigate to='/teacherlogin' />} />
//     <Route path='/teacherlogin' element ={!teacher ? <TeacherLogin /> : <Navigate to='/teacherHome'/>} />
//     <Route path='/teachersignup' element ={!teacher ? <TeacherSignup /> : <Navigate to='/teacherHome'/>} />


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


//     {currentRole === null &&
//         <>
//           <Route path="/schoolhomepage" element={<Homepage />} />
//           <Route path="/choose" element={<ChooseUser visitor="normal" />} />
//           <Route path="/chooseasguest" element={<ChooseUser visitor="guest" />} />

//           <Route path="/Adminloginsch" element={<LoginPage role="Admin" />} />
//           <Route path="/Studentloginsch" element={<LoginPage role="Student" />} />
//           <Route path="/Teacherloginsch" element={<LoginPage role="Teacher" />} />

//           <Route path="/Adminregister" element={<AdminRegisterPageSch />} />

//           <Route path='*' element={<Navigate to="/" />} />
//         </>
//     }

//       {currentRole === "Admin" &&
//         <>
//           <AdminDashboardSch />
//         </>
//       }

//       {currentRole === "Student" &&
//         <>
//           <StudentDashboardSch />
//         </>
//       }

//       {currentRole === "Teacher" &&
//         <>
//           <TeacherDashboard />
//         </>
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
import { useStudentAcctContext } from './hooks/student/useStudentAcctContext'

import SchoolDashboard from './pages/Dashboards/SchoolDashboard'
import Navbar from './components/Navbar'
import AOS from "aos";
import "aos/dist/aos.css";
import StudentLoginAcct from './pages/Student/StudentLoginAcct'
import StudentSignupAcct from './pages/Student/StudentSignupAcct'
import { StudentProfileForm } from './pages/Student/StudentProfileForm'
import StudentHomePage from './pages/Student/StudentHomePage'
import Page from './pages/AppPage/Page'
import { useTeacherAcctContext } from './hooks/teacher/useTeacherAcctContext'
import TeacherLogin  from './pages/Teacher/TeacherLogin'
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
import LandingPage from './pages/LandingPage/LandingPage'
import { ClerkProvider } from '@clerk/clerk-react'
//Ejobs
import { Context } from './main'
import Login from "./components/EssentialJobs/Auth/Login";
import Register from './components/EssentialJobs/Auth/Register'
import { Toaster } from 'react-hot-toast'
import axios from 'axios'
import Ejobs from './pages/Ejobs/Ejobs'
import Jobs from './pages/Ejobs/Job/Jobs'
import JobDetails from './pages/Ejobs/Job/JobDetails'
import Application from './components/EssentialJobs/Application/Application'
import MyApplication from './components/EssentialJobs/Application/MyApplication'
import PostJob from './pages/Ejobs/Job/PostJob'
import NotFound from './components/EssentialJobs/NotFound/NotFound'
import MyJobs from './pages/Ejobs/Job/MyJobs'
import Footer from './components/EssentialJobs/Layout/Footer'

//school
import { useSelector } from 'react-redux';
import Homepage from './pages/Homepage';
import AdminDashboardSch from './pages/adminSch/AdminDashboard';
import StudentDashboardSch from './pages/studentSch/StudentDashboard';
import TeacherDashboard from './pages/teacherSch/TeacherDashboard';
import LoginPage from './pages/LoginPage';
import AdminRegisterPageSch from './pages/adminSch/AdminRegisterPage';
import ChooseUser from './pages/ChooseUser';
import TeacherLandingPage from './pages/Teacher/TeacherLandingPage'
import TeacherPage from './pages/Teacher/TeacherPage'
import TeacherDetails from './pages/adminSch/teacherRelated/TeacherDetails'
import TeacherDetailDashboard from './pages/Teacher/TeacherDetailDashboard'
import TeacherProfileForm from './pages/Teacher/TeacherProfileForm'
import TD from './pages/Teacher/TD/TD'




//AIchats

import Chat from './pages/AIChat/Chat'
import HomeChat from './pages/AIChat/HomeChat'
import BookHomePage from './pages/Book/BookHomePage'
import AddBook from './pages/Book/AddBook'


///bookEssential

import MainBook from './pages/Bookessential/MainBook'
import Services from './components/BookEssential/Services'

//searchbook
import SearchHome from './components/searchBook/pages/Home/SearchHome'
import About from './components/searchBook/pages/About/About'
import BookList from './components/searchBook/component/BookList/BookList'
import BookDetails from './components/searchBook/component/BookDetails/BookDetails'
import Payment from './pages/Payment/Payment'
import PaymentSuccess from './pages/Payment/PaymentSuccess'

// Import your publishable key

import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/clerk-react";
import AdminProfile from './pages/adminSch/AdminProfile'
import SchoolLandingPage from './pages/SchoolLandingPage/SchoolLandingPage'
import SchOriginal from './pages/SchoolLandingPage/SchOriginal'
import SchComp2 from './pages/SchoolLandingPage/SchComp'




function App() {
  const {user} = useStudentAcctContext()
  const {teacher} = useTeacherAcctContext()
  const {isAuthorized, setIsAuthorized, setUser} = useContext(Context)
  const {currentRole} =  useSelector(state => state.user);
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
   {/* <Navbar /> */}
   <Routes>
 
  
    <Route path= '/' element = {<Page/> } />
    <Route path = '/studentlogin' element = {!user ? <StudentLoginAcct /> : <Navigate to='/landingpage' />} />
    <Route path = '/studentsignup' element = {!user ? <StudentSignupAcct /> : <Navigate to='/landingpage' />} />
    <Route path = '/landingpage' element= { <LandingPage/>} />
    <Route path = '/studenthome' element = {user? <StudentHomePage/>  : <Navigate to='/landingpage' />}/>
    {/* <Route path='/studentdashboard' element={user? <SchoolDashboard />  :<Navigate to='/studentlogin' /> }/> */}

    <Route path='/teacherhome' element = {teacher ? <TeacherHome /> : <Navigate to='/teacherlogin' />} />
    <Route path='/teacherlogin' element ={!teacher ? <TeacherLogin /> : <Navigate to='/teacherhome'/>} />
    <Route path='/teachersignup' element ={!teacher ? <TeacherSignup /> : <Navigate to='/teacherhome'/>} />


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


    <Route exact path ='/landingpage' element = {< LandingPage/>} />


    {/* <ClerkProvider publishableKey={PUBLISHABLE_KEY} afterSignOutUrl="/">
      <TeacherLogin />
    </ClerkProvider> */}
{/* 
    <Route path='/teacherlogin' element ={ <TeacherLogin /> } /> */}






    //Ejobs
    <Route exact path='/ejobs'  element = {<Ejobs />} />
    <Route exact path='/ejobslogin' element ={<Login />}/>
    <Route exact path='/ejobsregister' element ={<Register />}/>
    <Route exact path='/job/getall' element ={<Jobs />}/>
    <Route exact path='/job/:id' element ={<JobDetails />}/>
    <Route exact path='/application/:id' element ={<Application />}/>
    <Route exact path='/application?me' element ={<MyApplication />}/>
    <Route exact path='/job/post' element ={<PostJob />}/>
    <Route exact path='/job/me' element ={<MyJobs />}/>
    <Route exact path='*' element ={<NotFound />}/>



    //chat

    <Route exact path='Aihome' element ={<HomeChat />}/>
    <Route exact path='chat' element ={<Chat />}/>

    //
    <Route exact path='/bookhomepage' element = {<BookHomePage />}></Route>
    <Route exact path='/addbook' element = {<AddBook />}></Route>




    //
    <Route exact path='/teacherlandingpage' element ={<TeacherLandingPage />}/>
    <Route exact path='/teacherpage' element ={<TeacherPage />}/>
    <Route exact path='/teacherdetaildashboard' element ={<TeacherDetailDashboard />}/>
    <Route exact path='/teacherprofileform' element ={<TeacherProfileForm />}/>


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
    <Route path = "/schcomp" element={<SchComp2 />} />





    
    <Route path="/Adminregister" element={<AdminRegisterPageSch />} />
    {currentRole === null &&
        <>
          <Route path="/schoolhomepage" element={<Homepage />} />
          <Route path="/choose" element={<ChooseUser visitor="normal" />} />
          <Route path="/chooseasguest" element={<ChooseUser visitor="guest" />} />

          <Route path="/Adminloginsch" element={<LoginPage role="Admin" />} />
          <Route path="/Studentloginsch" element={<LoginPage role="Student" />} />
          <Route path="/Teacherloginsch" element={<LoginPage role="Teacher" />} />

          <Route path="/Adminregister" element={<AdminRegisterPageSch />} />

        

          <Route path='*' element={<Navigate to="/" />} />
        </>
    }

      {currentRole === "Admin" &&
        <Route path='/Admin/dashboard' element={<AdminDashboardSch />} />
      
      }
        <Route path='/Admin/profile' element={<AdminProfile />} />

      {currentRole === "Student" &&
        <Route path='/studentdashboardsch' element={<StudentDashboardSch />} />
      }

      {currentRole === "Teacher" &&
        <Route path='/teacherdashboard' element={<TeacherDashboard />} />
      }
    
   </Routes>
   {/* <Footer /> */}
   <Toaster />
   </BrowserRouter>
  )
}

export default App
