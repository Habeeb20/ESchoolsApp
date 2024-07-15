import {Link} from 'react-router-dom'
// import { useStudentAcctContext } from '../hooks/student/useStudentAcctContext'

// import { useLogout } from '../hooks/student/useStudentLogout'
import React from 'react'

export default function Navbar() {
    // const {logout} = useLogout()
    // const {user} = useStudentAcctContext()
    const handleClick = () => {
        console.log("hi")
    }
  return (
   <header>
        <div className="container">
            <Link to="#"><h3>Home</h3></Link>
            <Link to="#"><h3>Admision</h3></Link>
            <Link to="#"><h3>Schools</h3></Link>
            <Link to="#"><h3>Teacher</h3></Link>
            <Link to="/ejobs"><h3>e-jobs</h3></Link>
            <Link to="#"><h3>Scholarships</h3></Link>
            <Link to="#"><h3>Exams</h3></Link>
            <Link to="#"><h3>Comparism</h3></Link>
            <Link to="#"><h3>Books</h3></Link>
            <nav>
                { (
                    <div>
                        <span>{}</span>
                        {/* <button><Link to= '/studentprofile'>Profile</Link></button>
                        
                        <button onClick={handleClick}>logout</button> */}
                    </div>

                )}
                {(<div>
                    {/* <Link to='/studentlogin'>Login</Link>
                    <Link to='/studentsignup'>Signup</Link> */}
                </div>

                )}
            </nav>

        </div>
   </header>
  )
}
