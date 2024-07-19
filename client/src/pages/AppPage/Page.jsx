import React from 'react'
import { Link } from 'react-router-dom'
import FadeIn from '../../FadeIn'
export default function Page() {
    const button = {
        borderRadius : '15%',
        backgroundColor: "darkgreen",
        color: 'white',

    }

    const link = {
        color: "white"
    }
  return (
    <form className="signup1" >
    <h3>who are you?</h3>

    <FadeIn delay={0.2} direction="down" padding fullWidth>
            <button style={button}><Link style={link} to= '/studentlogin'>a user?</Link></button>
                <h5>or</h5>
            {/* <button style={button}><Link style={link} to= '/teacherlogin'>a teacher?</Link></button> */}
                {/* <h5>or</h5> */}
            <button style={button}><Link style={link} to= '/schoolhomepage'>a school?</Link></button>

    </FadeIn>
           
        

</form>
   
  )
}
