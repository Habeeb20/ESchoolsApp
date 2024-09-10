import React from 'react'
import {Link} from 'react-router-dom'
import { useTeacherAcctContext } from '../hooks/teacher/useTeacherAcctContext'

import { useTeacherLogout } from '../hooks/teacher/useTeacherLogout'




export default function TNavbar() {
    const {logout} = useTeacherLogout()
    const {teacher} = useTeacherAcctContext()
    const handleClick = () => {
        logout()
    }

    const buttonBackground = {
     
        backgroundColor: "darkgreen",
        color: 'white',

    }

    const link = {
        color: "white",
        backgroundColor: "darkGreen"
    }
  return (
    <div>
         <header>
        <div style={buttonBackground} className="container">
            <Link style={link} to="#"><h1>ESchools</h1></Link>
            <Link style={link} to="/landinghome"><h1>Back</h1></Link>
            <nav>
                {teacher && (
                    <div>
                        <span>{teacher.email}</span>
                        <button style={link}><Link style={link} to= '/teacherprofileform'>Profile</Link></button>
                        
                        <button style={link} onClick={handleClick}>logout</button>
                    </div>

                )}
                {!teacher && (<div>
                    <Link style={link} to='/teacherlogin'>Login</Link>
                    <Link style={link} to='/teachersignup'>Signup</Link>
                </div>

                )}
            </nav>

        </div>
   </header>
      
    </div>
  )
}
