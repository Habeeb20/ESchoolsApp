import {Link} from 'react-router-dom'
import { useStudentAcctContext } from '../hooks/student/useStudentAcctContext'

import { useLogout } from '../hooks/student/useStudentLogout'
import React from 'react'

export default function Navbar() {
    const stylenav ={
            background: "white",
            padding: '10px',
            marginTop: '10px',
            marginBottom: '20px',
            width: '100%',
            border: '1px solid #ddd',
            borderRadius: '4px',
            boxSizing: 'border-box'
       
    }
    const {logout} = useLogout()
    const {user} = useStudentAcctContext()
    const handleClick = () => {
        logout()
    }
  return (
   <header>
        <div className="container">
            <Link to="#"><h1>ESchools</h1></Link>
            <nav>
                {user && (
                    <div >
                        <span>{user.email}</span>
                        <button style={stylenav}><Link to= '/studentprofile'>Profile</Link></button>
                        
                        <button style={stylenav} onClick={handleClick}>logout</button> 
                    </div>

                )}
                {!user && (<div style={stylenav}>
                    <Link to='/studentlogin'>Login</Link>
                    <Link to='/studentsignup'>Signup</Link>
                </div>

                )}
            </nav>

        </div>
   </header>
  )
}
