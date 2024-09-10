


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



import StudentLoginAcct from './pages/Student/StudentLoginAcct'
import StudentSignupAcct from './pages/Student/StudentSignupAcct'
// import StudentProfileForm from './pages/Student/StudentProfileForm'
import StudentHomePage from './pages/Student/StudentHomePage'



import Page from './pages/AppPage/Page'




import Home from './components/school/Home'




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

import Contact from './pages/LandingPage/essentialLanding/Contact/Contact';
import LandingAbout from './pages/LandingPage/essentialLanding/About/About'
import Scholarship from './pages/Scholarship';




//exam
import ExamMain from './pages/Exams/ExamMain';
import Tutorial from './pages/Tutorial';

import BenefitPostForm from './pages/Benefit/BenefitPostForm';
import Benefit from './pages/Benefit/Benefit';
import TeacherForm from './pages/Teachers/TeacherForm';
import TeacherList from './pages/Teachers/TeacherDetails.jsx';
import TeacherDetail from './pages/Teachers/TeacherDetail';
import TeacherGrid from './pages/Teachers/TeacherGrid';
import Store from './pages/Store';
import Market from './pages/Market';
import CompareSchools from './pages/CompareSchools';
// import Comparison from './pages/Comparison';
import Abroad from './pages/Abroad/Abroad';



//admission

import LoginPage from './pages/LoginPageAd';
import RegistrationPage from './pages/RegistrationPage';
import ProfilePage from './pages/ProfilePage';
import Admission from './pages/PublicPage';
import Comparison from './pages/Comparison';
import BookRegister from './pages/Bookseller/BookRegister';
import Dashboard from './pages/Bookseller/BookDashboard';
import BookDashboard from './pages/Bookseller/BookDashboard';
import BookPublicPage from './pages/Bookseller/BookPublicPage';
import BookLogin from './pages/Bookseller/BookLogin';
import TeacherProfile from './pages/Teachers/TeacherProfile';
import TeacherProfileLogin from './pages/Teachers/TeacherProfileLogin';
import FormComponent from './pages/FormComponent';
import FormOutput from './pages/FormOuput';
import TeacherDetails from './pages/Teachers/TeacherDetails.jsx';




function App() {
  const { user } = useStudentAcctContext()

  const { isAuthorized, setIsAuthorized, setUser } = useContext(Context)
  // const { currentRole } = useSelector(state => state.user);
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

  const handleLogin = (email, password) => {
    // Simulate login logic (you should replace this with real authentication logic)
    if (email === 'admin@example.com' && password === 'password') {
      alert('Login successful!');
      // Redirect to the profile page or perform other login actions
      window.location.href = '/profile';
    } else {
      alert('Invalid email or password');
    }
  };

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

        {/* <Route path='/admissiondata' element={<AdmissionData />} />
        <Route path='/schoriginal' element={<SchOriginal />} /> */}





        
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
         




          //teachers
     
        <Route path="/addteacher" element={<TeacherForm />} />
          {/* <Route path="/teachergrid" element={<TeacherGrid />} /> */}
          <Route path="/teachers" element={<TeacherGrid />} />
        {/* <Route path="/teachers/:id" element={<TeacherDetails />} />
        <Route path="/teachers" element={<TeacherList />} /> */}
        <Route path="/teacher/:id" element={<TeacherDetails />} />
        <Route path="/teacherprofile" element={<TeacherProfile />} />
        <Route path="/teacherprofilelogin" element={<TeacherProfileLogin />} />
   
          
          
         
        



    
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
       
     

         //Scholarship
         <Route path='/scholarship' element={<Scholarship/>} />



         //others

         <Route path='/contact' element={<Contact/>} />
          
         <Route path='/about' element={<LandingAbout/>} />

         //exams
         <Route path='/exammainpage' element={<ExamMain/>} />


         //Tutorial

         <Route path='/tutorial' element={<Tutorial />} />



         //benefit
         <Route path='/benefitpostform' element={<BenefitPostForm />} />
         <Route path='/benefit' element={<Benefit />} />


         //store
         <Route path='/store' element={<Store />} />

         //market
         <Route path='/market' element={<Market />} />

         //CompareSchools
       
         <Route path='/compareschools' element={<CompareSchools />} />
         <Route path='/comparison' element={<Comparison />} />

         //abroad
         <Route path='/abroad' element={<Abroad />} />

          //admission
          <Route path="/admission" element={<Admission />} />
          <Route path="/loginadmission" element={<LoginPage onLogin={handleLogin} />} />
          <Route path="/registeradmission" element={<RegistrationPage />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/comparison" element={<Comparison />} />


        //bookseller 
        <Route path='/booksellerreg' element={<BookRegister />} />
        <Route path='/booksellerdashboard' element={<BookDashboard  />} />
        <Route path= '/bookpublicpage' element={<BookPublicPage />} />
        <Route path= '/booklogin' element={<BookLogin />} />

        <Route path= '/form' element={<FormComponent />} />
        <Route path= '/formoutput' element={<FormOutput />} />


            
      </Routes>
      <Toaster />
      {/* <Footer /> */}
    </BrowserRouter>
  )
}

export default App


