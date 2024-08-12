import AOS from "aos";
import "aos/dist/aos.css";
import OrderPopup from "../../components/BookEssential/OrderPopup";
import Testimonial from "../../components/BookEssential/Testimonial";
import Navbar from "../../components/BookEssential/Navbar/Navbar";
import Services from "../../components/BookEssential/Services";
import Banner  from "../../components/BookEssential/Banner";
import Footer from "../../components/BookEssential/Footer";
import Books from "../../components/BookEssential/Books.jsx";
import Hero from "../../components/BookEssential/Hero.jsx";
import { useEffect } from "react";
import AppStore from "../../components/BookEssential/AppStore.jsx";

import React from 'react'
import Background from "../../components/BookEssential/Background.jsx";
import Background2 from "../../components/BookEssential/Backgroun2.jsx";
import HomeNavbar from "../LandingPage/essentialLanding/HomeNavbar.jsx";

function MainBook() {
    const [orderPopup, setOrderPopup] = React.useState(false);

    const handleOrderPopup = () => {
      setOrderPopup(!orderPopup);
    };
  
    React.useEffect(() => {
      AOS.init({
        offset: 100,
        duration: 800,
        easing: "ease-in-sine",
        delay: 100,
      });
      AOS.refresh();
    }, []);
  return (
    <div className="bg-white dark:bg-gray-900 dark:text-white duration-200">
    <HomeNavbar />
    {/* <Navbar handleOrderPopup={handleOrderPopup} /> */}
    <Background />
    {/* <Hero handleOrderPopup={handleOrderPopup} /> */}
    <Services handleOrderPopup={handleOrderPopup} />
    <Banner />
   
    {/* <CoverBanner /> */}
    <AppStore />
    {/* <PdfReader /> */}
    {/* <Background2 /> */}
    <Books />
    <Testimonial />
    <Footer />
    <OrderPopup orderPopup={orderPopup} setOrderPopup={setOrderPopup} />
  </div>
  )
}

export default MainBook
