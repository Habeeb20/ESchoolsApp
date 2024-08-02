import {Link} from 'react-router-dom'
// import { useStudentAcctContext } from '../hooks/student/useStudentAcctContext'

// import { useLogout } from '../hooks/student/useStudentLogout'
import React from 'react'

export default function UniNav() {
    // const {logout} = useLogout()
    // const {user} = useStudentAcctContext()
    const handleClick = () => {
        console.log("hi")
    }
  return (
   <header>
        <div style={{marginLeft:"10%"}} className="container">
          
            <Link to="/universities/private"><h6 style={{fontSize:"100%", fontWeight: "bolder", color:"green"}}>Private</h6></Link>
            <Link to="/universities/state"><h6 style={{fontSize:"100%", fontWeight: "bolder", color:"green"}}>State</h6></Link>
            <Link to="/universities/federal"><h6 style={{fontSize:"100%", fontWeight: "bolder", color:"green"}}>Federal</h6></Link>
            
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


































