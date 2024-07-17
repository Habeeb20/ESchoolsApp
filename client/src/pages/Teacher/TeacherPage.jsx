import React from 'react'
import { Link } from 'react-router-dom'
import FadeIn from '../../FadeIn'
export default function TeacherPage() {
    const button = {
        borderRadius : '15%',
        backgroundColor: "darkgreen",
        color: 'white',
        width:"240px"
        // padding: "10%",
        // display: "list-grid"

    }

    const link = {
        color: "white"
    }

    const resize = {
        paddingLeft: "13%"
    }

  
  return (
    <form className="signup" >
    <h3 style={resize}>Do you want to create a teacher's acct?</h3>

    <FadeIn delay={0.2} direction="down" padding fullWidth>
            <button style={button}><Link style={link} to= '/teacherlogin'>account?</Link></button>
                <h5>or want to employ a teacher</h5>
            {/* <button style={button}><Link style={link} to= '/teacherlogin'>a teacher?</Link></button> */}
                {/* <h5>or</h5> */}
            <button style={button}><Link style={link} to= '/teacherlandingpage'>teachers?</Link></button>

    </FadeIn>
           
        

</form>
   
  )
}
