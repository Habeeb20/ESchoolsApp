// import { Link } from "react-router-dom";
// import Container  from "react-bootstrap/Container"
// import Navbar from "react-bootstrap/Navbar";
// import Nav from 'react-bootstrap/Nav';
// import React from 'react'
// import footerLogo from '../../../assets/website/logo.png'

// export default function HomeNavbar() {
//   return (
//     <div>
//         <Navbar expand="lg" className='position-absolute w-100'>
//         <Container>
//           <Navbar.Brand>
//             <Link to="/" className='navbar-brand d-flex align-items-center'>
//               {/* <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="#dc3545" class="bi bi-backpack-fill" viewBox="0 0 16 16">
//                 <path d="M5 13v-3h4v.5a.5.5 0 0 0 1 0V10h1v3z"/>
//                 <path d="M6 2v.341C3.67 3.165 2 5.388 2 8v5.5A2.5 2.5 0 0 0 4.5 16h7a2.5 2.5 0 0 0 2.5-2.5V8a6.002 6.002 0 0 0-4-5.659V2a2 2 0 1 0-4 0m2-1a1 1 0 0 1 1 1v.083a6.04 6.04 0 0 0-2 0V2a1 1 0 0 1 1-1m0 3a4 4 0 0 1 3.96 3.43.5.5 0 1 1-.99.14 3 3 0 0 0-5.94 0 .5.5 0 1 1-.99-.14A4 4 0 0 1 8 4M4.5 9h7a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-.5.5h-7a.5.5 0 0 1-.5-.5v-4a.5.5 0 0 1 .5-.5"/>
//               </svg> */}
//               <span className='mx-2 text-light lh-1 fw-semibold'>
//               <img src={footerLogo} alt="Logo" className="max-w-[50px]" />
              
//                 ESchools
              
             
//               </span>
//             </Link>
//           </Navbar.Brand>
//           <Navbar.Toggle aria-controls='basic-navbar-nav' className='bg-light h-6' />
//           <Navbar.Collapse id='basic-navbar-nav'>
//             <Nav  className='me-auto justify-content-end w-100'>
//               <Nav.Link href='/' className='text-uppercase'>Home</Nav.Link>
//               <Nav.Link href='/admissiondat' className='text-uppercase'>Admission</Nav.Link>
//               <Nav.Link href="/secondary-schools/private" className='text-uppercase'>Schools</Nav.Link>
//               <Nav.Link href='/teacherpage' className='text-uppercase'>Teacher</Nav.Link>
//               <Nav.Link href='/ejobslogin' className='text-uppercase'>E-jobs</Nav.Link>
//               <Nav.Link href='/scholarship' className='text-uppercase'>Scholarships</Nav.Link>
//               <Nav.Link href='/exammainpage' className='text-uppercase'>Exams</Nav.Link>
//               <Nav.Link href='/Aihome' className='text-uppercase'>Comparism</Nav.Link>
//               <Nav.Link href='/mainpage' className='text-uppercase'>Books</Nav.Link>
//               <Nav.Link href='/tutorial' className='text-uppercase'>Tutorial</Nav.Link>
//               <Nav.Link href='/contact' className='text-uppercase'>Abroad</Nav.Link>
//             </Nav>
//           </Navbar.Collapse>
//         </Container>
//       </Navbar>
      
//     </div>
//   )
// }





import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import footerLogo from '../../../assets/website/logo.png'


const NavbarContainer = styled.nav`
  background-color: #004d40;
  color: white;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
  @media (min-width: 768px) {
    padding: 5px 10px;
  }
`;

const LogoContainer = styled.div`
  display: flex;
  align-items: center;
`;

const LogoImage = styled.img`
  max-width: 50px;
  margin-right: 10px;
`;

const LogoText = styled.span`
  font-size: 1.5rem;
  font-weight: bold;
`;

const ToggleButton = styled.button`
  display: none;
  @media (max-width: 767px) {
    display: block;
    background: none;
    border: none;
    color: white;
    font-size: 24px;
    cursor: pointer;
  }
`;

const LinksContainer = styled.div`
  display: ${props => (props.isOpen ? 'flex' : 'none')};
  flex-direction: column;
  align-items: center;
  @media (min-width: 768px) {
    display: flex;
    flex-direction: row;
  }
`;

const LinkItem = styled.div`
  color: white;
  margin: 5px;
  text-decoration: none;
  padding: 5px 10px;
  border-radius: 5px;
  transition: background-color 0.3s, color 0.3s;
  &:hover {
    background-color: #00796b;
  }
`;

const StyledNavLink = styled(Link)`
  color: white;
  text-decoration: none;
  cursor: pointer;
  &.active {
    background-color: #ffcc00;
    color: black;
  }
`;

const HomeNavbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <NavbarContainer>
      <LogoContainer>
        <Link to="/" className='navbar-brand d-flex align-items-center'>
          <LogoImage src={footerLogo} alt="Logo" />
          {/* <LogoText>ESchools</LogoText> */}
        </Link>
      </LogoContainer>
      <ToggleButton onClick={toggleMenu}>
        {isMenuOpen ? '✖' : '☰'}
      </ToggleButton>
      <LinksContainer isOpen={isMenuOpen}>
        <LinkItem>
          <StyledNavLink to="/">Home</StyledNavLink>
        </LinkItem>
        <LinkItem>
          <StyledNavLink to="/admissiondat">Admission</StyledNavLink>
        </LinkItem>
        <LinkItem>
          <StyledNavLink to="/universities/private">Schools</StyledNavLink>
        </LinkItem>
        <LinkItem>
          <StyledNavLink to="/teacherpage">Teacher</StyledNavLink>
        </LinkItem>
        <LinkItem>
          <StyledNavLink to="/ejobslogin">EJobs</StyledNavLink>
        </LinkItem>
        <LinkItem>
          <StyledNavLink to="/scholarship">Scholarships</StyledNavLink>
        </LinkItem>
        <LinkItem>
          <StyledNavLink to="/Aihome">Comparison</StyledNavLink>
        </LinkItem>
        <LinkItem>
          <StyledNavLink to="/exammainpage">Exam</StyledNavLink>
        </LinkItem>
        <LinkItem>
          <StyledNavLink to="/mainpage">EBook</StyledNavLink>
        </LinkItem>
        <LinkItem>
          <StyledNavLink to="/tutorial">Tutorial</StyledNavLink>
        </LinkItem>
        <LinkItem>
          <StyledNavLink to="/abroad">Abroad</StyledNavLink>
        </LinkItem>
      </LinksContainer>
    </NavbarContainer>
  );
};

export default HomeNavbar;

