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
        <div style={{marginLeft:"5%"}} className="container">
          
            <Link to="/universities/federal"><h6 style={{fontSize:"100%", fontWeight: "bolder", color:"green"}}>Universities</h6></Link>
            <Link to="/polytechnics/state"><h6 style={{fontSize:"100%", fontWeight: "bolder", color:"green"}}>Polytechnic</h6></Link>
            <Link to="/colleges-of-education"><h6 style={{fontSize:"100%", fontWeight: "bolder", color:"green"}}>College Of Edu</h6></Link>
            <Link to="/secondary-schools/government"><h6 style={{fontSize:"100%", fontWeight: "bolder", color:"green"}}>Secondary</h6></Link>
            <Link to="/schownerlogin"><h6 style={{fontSize:"100%", fontWeight: "bolder", color:"green"}}>Own Web</h6></Link>
           
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









































