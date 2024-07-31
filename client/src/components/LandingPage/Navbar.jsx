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
            <Link to="/scholarship"><h6>Scholarships</h6></Link>
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



// import { Link } from 'react-router-dom';
// import React, { useState } from 'react';

// export default function Navbar() {
//     const [isOpen, setIsOpen] = useState(false);

//     const toggleNavbar = () => {
//         setIsOpen(!isOpen);
//     };

//     return (
//         <header style={{ backgroundColor: '#fff', padding: '10px 20px', boxShadow: '0 2px 4px rgba(0,0,0,0.1)' }}>
//             <div style={{
//                 display: 'flex',
//                 justifyContent: 'space-between',
//                 alignItems: 'center',
//                 maxWidth: '1200px',
//                 margin: '0 auto',
//             }}>
//                 <div style={{ display: 'flex', alignItems: 'center' }}>
//                     <Link to="/landinghome" style={{ textDecoration: 'none', color: '#333', margin: '0 10px' }}><h6>Home</h6></Link>
//                     <Link to="/admissiondata" style={{ textDecoration: 'none', color: '#333', margin: '0 10px' }}><h6>Admission</h6></Link>
//                     <Link to="/secondary-schools/private" style={{ textDecoration: 'none', color: '#333', margin: '0 10px' }}><h6>Schools</h6></Link>
//                     <Link to="/teacherpage" style={{ textDecoration: 'none', color: '#333', margin: '0 10px' }}><h6>Teacher</h6></Link>
//                     <Link to="/ejobs" style={{ textDecoration: 'none', color: '#333', margin: '0 10px' }}><h6>e-jobs</h6></Link>
//                     <Link to="/scholarship" style={{ textDecoration: 'none', color: '#333', margin: '0 10px' }}><h6>Scholarships</h6></Link>
//                     <Link to="/bookhomepage" style={{ textDecoration: 'none', color: '#333', margin: '0 10px' }}><h6>Exams</h6></Link>
//                     <Link to="/Aihome" style={{ textDecoration: 'none', color: '#333', margin: '0 10px' }}><h6>Comparison</h6></Link>
//                     <Link to="/mainpage" style={{ textDecoration: 'none', color: '#333', margin: '0 10px' }}><h6>Books</h6></Link>
//                 </div>
//                 <button onClick={toggleNavbar} style={{
//                     backgroundColor: '#007bff',
//                     color: '#fff',
//                     border: 'none',
//                     padding: '10px 20px',
//                     cursor: 'pointer',
//                     display: 'none',
//                     marginLeft: 'auto'
//                 }}>
//                     ☰
//                 </button>
//             </div>
//             <div style={{
//                 display: isOpen ? 'block' : 'none',
//                 textAlign: 'center',
//                 backgroundColor: '#fff',
//                 boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
//                 padding: '10px 0'
//             }}>
//                 <Link to="/landinghome" style={{ textDecoration: 'none', color: '#333', margin: '10px 0', display: 'block' }}><h6>Home</h6></Link>
//                 <Link to="/admissiondata" style={{ textDecoration: 'none', color: '#333', margin: '10px 0', display: 'block' }}><h6>Admission</h6></Link>
//                 <Link to="/secondary-schools/private" style={{ textDecoration: 'none', color: '#333', margin: '10px 0', display: 'block' }}><h6>Schools</h6></Link>
//                 <Link to="/teacherpage" style={{ textDecoration: 'none', color: '#333', margin: '10px 0', display: 'block' }}><h6>Teacher</h6></Link>
//                 <Link to="/ejobs" style={{ textDecoration: 'none', color: '#333', margin: '10px 0', display: 'block' }}><h6>e-jobs</h6></Link>
//                 <Link to="/scholarship" style={{ textDecoration: 'none', color: '#333', margin: '10px 0', display: 'block' }}><h6>Scholarships</h6></Link>
//                 <Link to="/bookhomepage" style={{ textDecoration: 'none', color: '#333', margin: '10px 0', display: 'block' }}><h6>Exams</h6></Link>
//                 <Link to="/Aihome" style={{ textDecoration: 'none', color: '#333', margin: '10px 0', display: 'block' }}><h6>Comparison</h6></Link>
//                 <Link to="/mainpage" style={{ textDecoration: 'none', color: '#333', margin: '10px 0', display: 'block' }}><h6>Books</h6></Link>
//             </div>
//         </header>
//     );
// }
