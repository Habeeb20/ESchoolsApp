


import { useState, useContext, useEffect } from 'react'
import './App.css'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { useSelector } from 'react-redux';
import { Toaster } from 'react-hot-toast'
import axios from 'axios'
import '../public/global.css'
// Contexts
import { useStudentAcctContext } from './hooks/student/useStudentAcctContext'

import { Context } from './main'

// Components and Pages
import Navbar from './components/Navbar'


import SchoolDashboard from './pages/Dashboards/SchoolDashboard'
import StudentLoginAcct from './pages/Student/StudentLoginAcct'
import StudentSignupAcct from './pages/Student/StudentSignupAcct'
// import StudentProfileForm from './pages/Student/StudentProfileForm'
import StudentHomePage from './pages/Student/StudentHomePage'



import Page from './pages/AppPage/Page'




import Home from './components/school/Home'

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
import Authfinance from './pages/finance/AuthFinance';
import FinanceDashboard from './pages/finance/FinanceDashboard';
import FinanceStudentForm from './pages/finance/FinanceStudentForm';
import FinanceExpenditure from './pages/finance/FinanceExpenditure';
import BenefitPostForm from './pages/Benefit/BenefitPostForm';
import Benefit from './pages/Benefit/Benefit';
import TeacherForm from './pages/Teachers/TeacherForm';
import TeacherList from './pages/Teachers/TeacherList';
import TeacherDetail from './pages/Teachers/TeacherDetail';
import TeacherGrid from './pages/Teachers/TeacherGrid';


function App() {
  const { user } = useStudentAcctContext()

  const { isAuthorized, setIsAuthorized, setUser } = useContext(Context)
  const { currentRole } = useSelector(state => state.user);
  const [teachers, setTeachers] = useState([])

 

  useEffect(() => {
    const storedTeachers = JSON.parse(localStorage.getItem('teachers')) || [];
    setTeachers(storedTeachers);
  }, []);

  
  const addTeacher = (teacher) => {
    const updatedTeachers = [...teachers, teacher];
    localStorage.setItem('teachers', JSON.stringify(updatedTeachers));
    setTeachers(updatedTeachers);
  };


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


        <Route path='/school' element={<Home />} />
     
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
          <Route exact path='Aihome' element ={<HomeChat />}/>     
          <Route exact path='chat' element ={<Chat />}/>



          //teachers
          {/* <Route exact path='/addteacher' element ={<TeacherForm />}/>
          <Route exact path='/teachers' element ={<TeacherList />}/>
          <Route exact path='/teacher/:id' element ={<TeacherDetail />}/>
          <Route exact path='/teacher-grid' element ={<TeacherGrid />}/>
           */}
          <Route path="/addteacher" element={<TeacherForm addTeacher={addTeacher} />} />
        <Route path="/teachers" element={<TeacherGrid teachers={teachers} />} />
        <Route path="/teacher/:id" element={<TeacherDetail teachers={teachers} />} />
        {/* <Route path="/teacherlist" element={<TeacherList teachers={teachers} />} /> */}
          
          
         
        



    
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


         //finance
         <Route path='/finance' element={<Authfinance />} />
         <Route path='/financedashboard' element={<FinanceDashboard />} />
         <Route path='/financestudentform' element={<FinanceStudentForm />} />
         <Route path='/financeexpenditure' element={<FinanceExpenditure />} />

         //benefit
         <Route path='/benefitpostform' element={<BenefitPostForm />} />
         <Route path='/benefit' element={<Benefit />} />


         {/* //schoolmanangement
         <Route path='/schadminregister' element={<SchAdminRegister />} />
         <Route path='/schadminlogin' element={<SchAdminLogin />} />
         <Route path='/schadmindashboard' element={<SchAdminDashboard />} />
         <Route path='/schstudentdashboard' element={<SchStudentDashboard />} />
         <Route path='/schteacherdashboard' element={<SchTeacherDashboard />} />
         <Route path='/schstudentlogin' element={<SchStudentLogin />} />
         <Route path='/schteacherlogin' element={<SchTeacherLogin />} />
 */}





            
            




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



