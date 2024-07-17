import React from 'react'
import Navbar from '../../components/LandingPage/Navbar'
import FadeIn from '../../FadeIn'
import Connect from './Connect'
import Choice from './Choice'
const LandingPage = () => {
  return (
    <div>
        <Navbar />
        <Connect />
        <Choice />
      
    </div>
  )
}

export default LandingPage
