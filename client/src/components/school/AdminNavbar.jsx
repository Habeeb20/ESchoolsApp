import {Link} from 'react-router-dom'
// import { useStudentAcctContext } from '../hooks/student/useStudentAcctContext'

// import { useLogout } from '../hooks/student/useStudentLogout'
import React from 'react'

export default function AdminNavbar() {
    // const {logout} = useLogout()
    // const {user} = useStudentAcctContext()
     const handleClick = () => {
         logout()
    
    }
  return (
   <header>
        <div className="container">
            <Link to="#"><h1>ESchools</h1></Link>
            <nav>
             
                    <div>
                        {/* <span>{user.email}</span> */}
                        {/* <button><Link to= '/studentprofile'>Profile</Link></button> */}
                        
                        <button onClick={handleClick}>logout</button>
                    </div>

                
                 <div>
                    <Link to='/adminlogin'>Login</Link>
                    <Link to='/adminsignup'>Signup</Link>
                </div>

                
            </nav>

        </div>
   </header>
  )
}
