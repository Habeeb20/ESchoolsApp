// import React, { useState } from 'react';
// import { NavLink } from 'react-router-dom';
// import styled from 'styled-components';
// import { Link } from 'react-router-dom';
// import footerLogo from '../../assets/website/logo.png'

// const NavbarContainer = styled.nav`
//   background-color: #004d40;
//   color: white;
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   padding: 20px;
//   @media (min-width: 768px) {
//     flex-direction: row;
//     justify-content: space-between;
//     padding: 10px 20px;
//   }
// `;

// const LinksContainer = styled.div`
//   display: ${props => (props.isOpen ? 'flex' : 'none')};
//   flex-direction: column;
//   align-items: center;
//   @media (min-width: 768px) {
//     display: flex;
//     flex-direction: row;
//   }
// `;

// const LinkItem = styled.div`
//   position: relative;
//   color: white;
//   margin: 10px;
//   text-decoration: none;
//   padding: 10px 20px;
//   border-radius: 5px;
//   transition: background-color 0.3s, color 0.3s;
//   &:hover {
//     background-color: #00796b;
//     > div {
//       display: flex;
//     }
//   }
// `;

// const StyledNavLink = styled.div`
//   color: white;
//   text-decoration: none;
//   cursor: pointer;
//   &.active {
//     background-color: #ffcc00;
//     color: black;
//   }
// `;

// const SubMenuContainer = styled.div`
//   display: none;
//   flex-direction: column;
//   background-color: #66bb6a;
//   position: absolute;
//   top: 100%;
//   left: 0;
//   z-index: 1;
//   border-radius: 5px;
//   width: 200px;
//   ${LinkItem}:hover & {
//     display: flex;
//   }
// `;

// const SubMenuLink = styled(NavLink)`
//   color: white;
//   margin: 5px;
//   text-decoration: none;
//   padding: 10px;
//   transition: background-color 0.3s, color 0.3s;
//   &.active {
//     background-color: #ffcc00;
//     color: black;
//   }
//   &:hover {
//     background-color: #004d40;
//   }
// `;

// const SearchContainer = styled.div`
//   display: flex;
//   align-items: center;
//   margin: 20px 10px;
// `;

// const SearchInput = styled.input`
//   padding: 10px;
//   border-radius: 5px;
//   border: none;
//   width: 200px;
//   max-width: 400px;
//   color: black;
// `;

// const SearchButton = styled.button`
//   padding: 10px;
//   margin-left: 10px;
//   border-radius: 5px;
//   border: none;
//   background-color: #ffcc00;
//   color: black;
//   cursor: pointer;
//   &:hover {
//     background-color: #e6b800;
//   }
// `;

// const ToggleButton = styled.button`
//   display: none;
//   @media (max-width: 767px) {
//     display: block;
//     background: none;
//     border: none;
//     color: white;
//     font-size: 24px;
//     cursor: pointer;
//   }
// `;

// const Nav = () => {
//   const [searchTerm, setSearchTerm] = useState('');
//   const [isMenuOpen, setIsMenuOpen] = useState(false);

//   const handleSearch = () => {
//     // Implement the search functionality here
//     console.log('Search term:', searchTerm);
//   };

//   const toggleMenu = () => {
//     setIsMenuOpen(!isMenuOpen);
//   };

//   return (
//     <NavbarContainer>
//         <Link to="/" className='navbar-brand d-flex align-items-center'>
//               {/* <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="#dc3545" class="bi bi-backpack-fill" viewBox="0 0 16 16">
//                 <path d="M5 13v-3h4v.5a.5.5 0 0 0 1 0V10h1v3z"/>
//                 <path d="M6 2v.341C3.67 3.165 2 5.388 2 8v5.5A2.5 2.5 0 0 0 4.5 16h7a2.5 2.5 0 0 0 2.5-2.5V8a6.002 6.002 0 0 0-4-5.659V2a2 2 0 1 0-4 0m2-1a1 1 0 0 1 1 1v.083a6.04 6.04 0 0 0-2 0V2a1 1 0 0 1 1-1m0 3a4 4 0 0 1 3.96 3.43.5.5 0 1 1-.99.14 3 3 0 0 0-5.94 0 .5.5 0 1 1-.99-.14A4 4 0 0 1 8 4M4.5 9h7a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-.5.5h-7a.5.5 0 0 1-.5-.5v-4a.5.5 0 0 1 .5-.5"/>
//               </svg> */}
//               <span className='mx-2 text-light lh-1 fw-semibold'>
//               <img src={footerLogo} alt="Logo" className="max-w-[50px]" />
              
//                 ESchools
              
             
//               </span>
//         </Link>
//       <ToggleButton onClick={toggleMenu}>
//         {isMenuOpen ? '✖' : '☰'}
//       </ToggleButton>
//       <SearchContainer>
       
//       </SearchContainer>
//       <LinksContainer style={{padding: "1%"}} isOpen={isMenuOpen}>
//       <LinkItem>
//           <Link to="/"><StyledNavLink>Home</StyledNavLink></Link>
//         </LinkItem>
//         <LinkItem>
//           <Link to="/admissiondat"><StyledNavLink>Admission</StyledNavLink></Link>
//         </LinkItem>
//         <LinkItem>
//           <Link to="/secondary-schools/private"><StyledNavLink>Schools</StyledNavLink></Link>
//         </LinkItem>
//         <LinkItem>
//           <Link to="/teacherpage"><StyledNavLink>Teacher</StyledNavLink></Link>
//         </LinkItem>
//         <LinkItem>
//           <Link to="/ejobslogin"><StyledNavLink>EJobs</StyledNavLink></Link>
//         </LinkItem>
//         <LinkItem>
//           <Link to="/scholarship"><StyledNavLink>Scholarships</StyledNavLink></Link>
//         </LinkItem>
    
//         <LinkItem>
//           <Link to="/Aihome"><StyledNavLink>Comparison</StyledNavLink></Link>
//         </LinkItem>
//         <LinkItem>
//           <Link to="/exammainpage"><StyledNavLink>Exam</StyledNavLink></Link>
//         </LinkItem>
//         <LinkItem>
//           <Link to="/mainpage"><StyledNavLink>EBook</StyledNavLink></Link>
//         </LinkItem>
//         <LinkItem>
//           <Link to="/tutorial"><StyledNavLink>Tutorial</StyledNavLink></Link>
//         </LinkItem>
//         <LinkItem>
//           <Link to="/abroad"><StyledNavLink>Abroad</StyledNavLink></Link>
//         </LinkItem>
//       </LinksContainer>
//     </NavbarContainer>
//   );
// };

// export default Nav;






import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import footerLogo from '../../assets/website/logo.png';

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

const Nav = () => {
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
          <StyledNavLink to="/secondary-schools/private">Schools</StyledNavLink>
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

export default Nav;
