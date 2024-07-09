import {Link} from 'react-router-dom'
import { useStudentAcctContext } from '../hooks/student/useStudentAcctContext'


import React from 'react'

export default function Navbar() {
    const {user} = useStudentAcctContext()
    const handleClick = () => {
        
    }
  return (
   <header>
        <div className="container">
            <Link to="/"><h1>wanna go to ESchools</h1></Link>
            <nav>
                {user && (
                    <div>
                        <span>{user.email}</span>
                        <button onClick={handleClick}>logout</button>
                    </div>

                )}
                {!user && (<div>
                    <Link to='/login'>Login</Link>
                    <Link to='/signup'>Signup</Link>
                </div>

                )}
            </nav>

        </div>
   </header>
  )
}
