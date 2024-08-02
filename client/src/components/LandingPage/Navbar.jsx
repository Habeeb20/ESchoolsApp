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
        <div style={{marginLeft:"10%"}} className="container">
          
            <Link to="/universities/private"><h6 style={{fontSize:"100%", fontWeight: "bolder", color:"green"}}>Universities</h6></Link>
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













































// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
// import styled from 'styled-components';

// const NavbarContainer = styled.header`
//   background-color: #fff;
//   padding: 10px 20px;
//   box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
// `;

// const NavbarInner = styled.div`
//   display: flex;
//   justify-content: space-between;
//   align-items: center;
//   max-width: 1200px;
//   margin: 0 auto;
// `;

// const NavLinks = styled.div`
//   display: flex;
//   align-items: center;
// `;

// const NavLink = styled.div`
//   position: relative;
//   margin: 0 10px;

//   &:hover .dropdown {
//     display: block;
//   }
// `;

// const LinkText = styled(Link)`
//   text-decoration: none;
//   color: #333;
//   font-weight: bold;
// `;

// const Dropdown = styled.div`
//   display: none;
//   position: absolute;
//   top: 100%;
//   left: 0;
//   background-color: #fff;
//   box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
//   padding: 10px 0;
//   z-index: 1;
//   width: 200px; /* Adjust width as needed */
// `;

// const DropdownLink = styled(Link)`
//   display: block;
//   text-decoration: none;
//   color: #333;
//   padding: 10px 20px;

//   &:hover {
//     background-color: #f0f0f0;
//   }
// `;

// const ToggleButton = styled.button`
//   display: none;
//   background-color: #007bff;
//   color: #fff;
//   border: none;
//   padding: 10px 20px;
//   cursor: pointer;
//   @media (max-width: 768px) {
//     display: block;
//   }
// `;

// const MobileLinks = styled.div`
//   display: ${({ isOpen }) => (isOpen ? 'block' : 'none')};
//   text-align: center;
//   background-color: #fff;
//   box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
//   padding: 10px 0;
// `;

// const Navbar = () => {
//   const [isMobileOpen, setIsMobileOpen] = useState(false);

//   const toggleMobileNavbar = () => {
//     setIsMobileOpen(!isMobileOpen);
//   };

//   const links = [
//     { name: 'Universities', path: '/secondary-schools/private' },
//     { name: 'Polytechnic', path: '/teacherpage' },
//     { name: 'College Of Edu', path: '/ejobs' },
//     { name: 'Secondary', path: '/scholarship' },
//     { name: 'Own Web', path: '/bookhomepage' },
//   ];

//   return (
//     <NavbarContainer>
//       <NavbarInner>
//         <Link to="/" style={{ textDecoration: 'none', color: '#333' }}>
//           <h6>Home</h6>
//         </Link>
//         <NavLinks>
//           {links.map((link, index) => (
//             <NavLink key={index}>
//               <LinkText to={link.path}>
//                 {link.name}
//               </LinkText>
//               <Dropdown className="dropdown">
//                 <DropdownLink to={`${link.path}/option1`}>Option 1</DropdownLink>
//                 <DropdownLink to={`${link.path}/option2`}>Option 2</DropdownLink>
//                 <DropdownLink to={`${link.path}/option3`}>Option 3</DropdownLink>
//               </Dropdown>
//             </NavLink>
//           ))}
//         </NavLinks>
//         <ToggleButton onClick={toggleMobileNavbar}>☰</ToggleButton>
//       </NavbarInner>
//       <MobileLinks isOpen={isMobileOpen}>
//         {links.map((link, index) => (
//           <NavLink key={index}>
//             <LinkText to={link.path} onClick={() => setIsMobileOpen(false)}>
//               {link.name}
//             </LinkText>
//             <Dropdown className="dropdown">
//               <DropdownLink to={`${link.path}/option1`}>Option 1</DropdownLink>
//               <DropdownLink to={`${link.path}/option2`}>Option 2</DropdownLink>
//               <DropdownLink to={`${link.path}/option3`}>Option 3</DropdownLink>
//             </Dropdown>
//           </NavLink>
//         ))}
//       </MobileLinks>
//     </NavbarContainer>
//   );
// };

// export default Navbar;


