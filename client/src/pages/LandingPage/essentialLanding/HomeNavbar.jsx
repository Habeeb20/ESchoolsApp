

import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
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
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 1000; /* Ensures navbar stays above other content */
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
  margin: 5px;
  padding: 5px 10px;
  border-radius: 5px;
  transition: background-color 0.3s, color 0.3s;
`;

const StyledNavLink = styled(NavLink)`
  color: white;
  text-decoration: none;
  &.active {
    background-color: lightgreen;
    padding: 10%;
    border-radius:25%;
    color: black;
  }
`;

const HomeNavbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <NavbarContainer>
        <LogoContainer>
          <Link to="/schoolhomepage" className='navbar-brand d-flex align-items-center'>
            <LogoImage src={footerLogo} alt="Logo" />
            {/* <LogoText>ESchools</LogoText> */}
          </Link>
        </LogoContainer>
        <ToggleButton onClick={toggleMenu}>
          {isMenuOpen ? '✖' : '☰'}
        </ToggleButton>
        <LinksContainer isOpen={isMenuOpen}>
          <LinkItem>
            <StyledNavLink exact to="/landinghome" activeClassName="active">
              Home
            </StyledNavLink>
          </LinkItem>
          {/* <LinkItem>
            <StyledNavLink to="/admissiondat" activeClassName="active">
              Admission
            </StyledNavLink>
          </LinkItem> */}
          <LinkItem>
            <StyledNavLink to="/universities/private" activeClassName="active">
              Schools
            </StyledNavLink>
          </LinkItem>
          <LinkItem>
            <StyledNavLink to="/teachers" activeClassName="active">
              Teacher
            </StyledNavLink>
          </LinkItem>
          <LinkItem>
            <StyledNavLink to="/ejobslogin" activeClassName="active">
              EJobs
            </StyledNavLink>
          </LinkItem>
          <LinkItem>
            <StyledNavLink to="/scholarship" activeClassName="active">
              Scholarships
            </StyledNavLink>
          </LinkItem>
          <LinkItem>
            <StyledNavLink to="/comparison" activeClassName="active">
              Comparison
            </StyledNavLink>
          </LinkItem>
          <LinkItem>
            <StyledNavLink to="/exammainpage" activeClassName="active">
              Exam
            </StyledNavLink>
          </LinkItem>
          <LinkItem>
            <StyledNavLink to="/mainpage" activeClassName="active">
              EBook
            </StyledNavLink>
          </LinkItem>
          <LinkItem>
            <StyledNavLink to="/tutorial" activeClassName="active">
              Tutorial
            </StyledNavLink>
          </LinkItem>
          <LinkItem>
            <StyledNavLink to="/store" activeClassName="active">
              Store
            </StyledNavLink>
          </LinkItem>
          <LinkItem>
            <StyledNavLink to="/abroad" activeClassName="active">
              Abroad
            </StyledNavLink>
          </LinkItem>
        </LinksContainer>
      </NavbarContainer>
      {/* Add padding to ensure content doesn't get hidden behind the navbar */}
      <div style={{ paddingTop: '60px' }}></div>
    </>
  );
};

export default HomeNavbar;
