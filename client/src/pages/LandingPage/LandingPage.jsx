import React from 'react'
import Navbar from '../../components/LandingPage/Navbar'
import FadeIn from '../../FadeIn'
import Connect from './Connect'
import Choice from './Choice'
import Footer from '../../components/BookEssential/Footer'
const LandingPage = () => {
  return (
    <div>
        <Navbar />
        <Connect />
        <Choice />
        <Footer/>
      
    </div>
  )
}

export default LandingPage
