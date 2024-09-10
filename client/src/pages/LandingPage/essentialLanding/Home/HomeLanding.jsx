import React from 'react'
import './Home.css';
import '../All.css'
import {Link} from 'react-router-dom'
import ChooseSection from '../Components/ChooseSection';
import StartCoursesImg from '../utils/images/start-courses-img.jpg'
import FaqAccordion from '../Components/FaqAccordion';

import { Card } from 'react-bootstrap';
import Blog1Img from '../utils/images/blog1-img.jpg'
import Blog2Img from '../utils/images/blog2-img.jpg'
import Blog3Img from '../utils/images/blog3-img.jpg'
import FadeIn from '../../../../FadeIn';
import HomeNavbar from '../HomeNavbar';
import Footer from '../../../../components/BookEssential/Footer';
import Groups from '../Groups';
import KenyanPresident from '../utils/images/kenyan president.png'
import BAT from '../utils/images/tinubuConstruction.png'
import Diddy from '../utils/images/Diddy.png'
import Benefit from '../../../Benefit/Benefit';
import Video from '../../../Video';
import Number from '../../../Number';
import Store from '../../../Store';
import LanFirst from '../../LanFirst';
import Lanfix2 from '../../Lanfix2';
import Lanfix3 from '../../Lanfix3';
import Lanfirst4 from '../../Lanfirst4';
import Lanfirst5 from '../../LanFirst5';
import Land6 from '../../Land6';
import Land7 from '../../Land7';
import Land8 from '../../Land8';
import SchoolDeals from '../../../SchoolDeals';

const blogs = [
    {
        id: 1,
        img: [KenyanPresident],
        title: 'Blog 1',
        description: 'Kenyan President William Ruto announced Wednesday that the controversial finance bill, which included significant tax hikes, will be withdrawn following intense nationwide protests that resulted in more than 20 deaths and the ransacking of the parliament.The people have spoken, Ruto stated during a press briefing, acknowledging the widespread opposition. I concede and therefore I will not sign the 2024 finance bill and it shall subsequently be withdrawn.'
        
         
        
        // However, Ruto warned that this withdrawal would lead to a substantial shortfall in funding for crucial development programs aimed at supporting farmers, schoolteachers, and other sectors. The East African nation is grappling with a heavy foreign debt burden and is seeking ways to reduce it.
    },
    {
        id: 2,
        img: [BAT],
        title: 'Blog 2',
        description: 'President Bola Tinubu has inaugurated the ultramodern and digitalized National Cybercrime Centre to enhance the efficiency of law enforcement agencies across Nigeria. The announcement was delivered by the Minister of Communication, Innovation, and Digital Economy, Dr. Bosun Tijani, at the new facility in Abuja.In his address, President Tinubu emphasized the government dedication to bolstering the Nigerian police force through the acquisition of advanced arms, weapons, and other essential equipment. He also highlighted the ongoing efforts in recruitment and continuous training to improve the number, quality, and readiness of police personnel'
    },
    {
        id: 3,
        img: [Diddy],
        title: 'Blog 3',
        description: 'American music mogul and business tycoon Sean Combs, popularly known as ‘Diddy’, has been implicated in the 1996 murder of iconic rapper Tupac Shakur. According to new documents, Diddy is accused of paying $1 million to Duane ‘Keefe D’ Davis, who was arrested in 2023 for Shakur’s murder, the U.S. Sun reported.The documents, filed on Thursday, July 18, mention Diddy 77 times by his various pseudonyms, including Puffy, Puff Daddy, Puff, and his legal name, Sean Combs.'
    }
];

export default function HomeLanding() {
  return (
  <>
  <HomeNavbar />
  <div className=''>
        {/* <header className='h-100 min-vh-100 d-flex align-items-center text-light'>
            <div className='container d-flex flex-column align-items-center'>
               
                    <h2>Welcome To</h2>
                <FadeIn delay={0.4} direction="down">
                    <h1 className='text-center fw-semibold'>ESchools</h1>
                </FadeIn >
                <p>Connect students, the world of students, schools and exams together.</p>
                <div className='d-flex flex-column flex-sm-row align-items-center'>
                    <Link to="/about">
                        <button type='button' className='btn btn-success btn-lg mx-0 mx-sm-2 my-2 my-sm-0'>About us</button>
                    </Link>
                    <Link to="/contact">
                        <button type='button' className='btn btn-outline-light btn-lg mx-0 mx-sm-2 my-2 my-sm-0'>Contact Us</button>
                    </Link>
                </div>
                <p style={{paddingTop: "10%"}}>Make the right choices during your school year with.</p>
                <FadeIn delay={0.4} direction="up">
                <ul>
                    <Link to="/ejobs"><li style={{ color:"white"}}>E-JOBS</li></Link>
                    <Link to="/Aihome"><li style={{ color:"white"}}>Comparism</li></Link>
                    <Link to="/landinghome"><li style={{ color:"white"}}>Scholarships</li></Link>
                    <Link to="/mainpage"><li style={{ color:"white"}}>Books</li></Link>
                </ul>
                </FadeIn>
            </div>
        </header> */}
{/* 
        <div className="py-5">
            <ChooseSection />
        </div>

        <div className='py-5 bg-light'>
            <div className="container">
                <div className='row d-flex align-items-center justify-content-around'>
               
                    <div className='col-lg-5'>
                        
                        <h2 className='text-capitalize'>Want to Study?</h2>
                        <FadeIn delay={0.4} direction="left">
                        <p>A Single click to take any examination anywhere, anytime</p>
                        </FadeIn>
                        <Link to="/bookhomepage">
                            <button type='button' className='btn btn-success btn-lg mx-0 mx-sm-2 my-2 my-sm-0'>Learn More</button>
                        </Link>
                        
                    </div>
                   
                    <div className='col-lg-5 mt-5 mt-lg-0'>
                        <img src={StartCoursesImg} className='img-fluid' alt="" />
                    </div>
                </div>
            </div>
        </div>

        <div className="py-5">
            <FaqAccordion />
        </div> */}
        <LanFirst />
        <Number />
        <Lanfix2 />
      
        <Lanfix3 />
        <SchoolDeals />
        <Lanfirst4/>
        <Lanfirst5 />
       
        <Groups />
      
        <Benefit />
        <Land6 />
        <Land7 />
        <Land8/>
    
     
{/* 
        <div className='blog-section text-light py-5'>
            <div className='container d-flex flex-column align-items-center'>
                <h2 className='text-center text-capitalize mb-5'>E Direct Blog</h2>
                <div className='row g-4'>
                    {blogs.map((blog) => (
                        <div key={blog.id} className='col-md-6 col-lg-4'>
                            <Link to="/blog" className='text-decoration-none'>
                                <Card className='h-100 shadow scale-hover-effect'>
                                    <Card.Img variant="top" src={blog.img} />
                                    <Card.Body className='p-md-5'>
                                        <Card.Title>{blog.title}</Card.Title>
                                        <Card.Text>{blog.description}</Card.Text>
                                    </Card.Body>
                                </Card>
                            </Link>
                        </div>
                    ))}
                </div>
                <Link style={{marginTop:"5%"}} to="https://essentialnews.ng">
                            <button  type='button' className='btn btn-success btn-lg mx-0 mx-sm-2 my-2 my-sm-0'>Learn More</button>
                </Link>
            </div>
        </div>
        */}
        
    </div>
    <Footer />
  </>
    
  )
}
