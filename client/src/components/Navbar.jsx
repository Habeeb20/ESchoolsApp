import {Link} from 'react-router-dom'
import { useStudentAcctContext } from '../hooks/student/useStudentAcctContext'

import { useLogout } from '../hooks/student/useStudentLogout'
import React from 'react'

export default function Navbar() {
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
                    <div>
                        <span>{user.email}</span>
                        <button><Link to= '/studentprofile'>Profile</Link></button>
                        
                        <button onClick={handleClick}>logout</button>
                    </div>

                )}
                {!user && (<div>
                    <Link to='/studentlogin'>Login</Link>
                    <Link to='/studentsignup'>Signup</Link>
                </div>

                )}
            </nav>

        </div>
   </header>
  )
}
