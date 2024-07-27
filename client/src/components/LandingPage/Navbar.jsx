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
            <Link to="/landinghome"><h6>Home</h6></Link>
            <Link to="/admissiondata"><h6>Admision</h6></Link>
            <Link to="/secondary-schools/private"><h6>Schools</h6></Link>
            <Link to="/teacherpage"><h6>Teacher</h6></Link>
            <Link to="/ejobs"><h6>e-jobs</h6></Link>
            <Link to="/#"><h6>Scholarships</h6></Link>
            <Link to="/bookhomepage"><h6>Exams</h6></Link>
            <Link to="/Aihome"><h6>Comparism</h6></Link>
            <Link to="/mainpage"><h6>Books</h6></Link>
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
