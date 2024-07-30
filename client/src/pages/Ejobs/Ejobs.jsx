import React from 'react'
import { useContext } from 'react'
import { Context } from '../../main';
import { Navigate } from 'react-router-dom';
import HeroSection from '../../components/EssentialJobs/Home/HeroSection';
import HowItWorks from '../../components/EssentialJobs/Home/HowItWorks';
import PopularCategories from '../../components/EssentialJobs/Home/PopularCategories';
import PopularCompanies from '../../components/EssentialJobs/Home/PopularCompanies';
import Navbar from '../../components/LandingPage/Navbar';
import HomeNavbar from '../LandingPage/essentialLanding/HomeNavbar';

const Ejobs = () => {
    const { isAuthorized } = useContext(Context);
    if (!isAuthorized) {
      return <Navigate to={"/ejobslogin"} />;
    }
    return (
        <>
        <HomeNavbar />
        <section className="homePage page">
          <HeroSection />
          <HowItWorks />
          <PopularCategories />
          <PopularCompanies />
        </section>
      </>
        
    )
    }

export default Ejobs
