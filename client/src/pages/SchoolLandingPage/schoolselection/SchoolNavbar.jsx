import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Footer from '../../../components/BookEssential/Footer';

const NavbarContainer = styled.nav`
  background-color: #004d40;
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
    padding: 10px 20px;
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
  position: relative;
  color: white;
  margin: 10px;
  text-decoration: none;
  padding: 10px 20px;
  border-radius: 5px;
  transition: background-color 0.3s, color 0.3s;
  &:hover {
    background-color: #00796b;
    > div {
      display: flex;
    }
  }
`;

const StyledNavLink = styled.div`
  color: white;
  text-decoration: none;
  cursor: pointer;
  &.active {
    background-color: #ffcc00;
    color: black;
  }
`;

const SubMenuContainer = styled.div`
  display: none;
  flex-direction: column;
  background-color: #66bb6a;
  position: absolute;
  top: 100%;
  left: 0;
  z-index: 1;
  border-radius: 5px;
  width: 200px;
  ${LinkItem}:hover & {
    display: flex;
  }
`;

const SubMenuLink = styled(NavLink)`
  color: white;
  margin: 5px;
  text-decoration: none;
  padding: 10px;
  transition: background-color 0.3s, color 0.3s;
  &.active {
    background-color: #ffcc00;
    color: black;
  }
  &:hover {
    background-color: #004d40;
  }
`;

const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  margin: 20px 10px;
`;

const SearchInput = styled.input`
  padding: 10px;
  border-radius: 5px;
  border: none;
  width: 200px;
  max-width: 400px;
  color: black;
`;

const SearchButton = styled.button`
  padding: 10px;
  margin-left: 10px;
  border-radius: 5px;
  border: none;
  background-color: #ffcc00;
  color: black;
  cursor: pointer;
  &:hover {
    background-color: #e6b800;
  }
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

const SchoolNavbar = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleSearch = () => {
    // Implement the search functionality here
    console.log('Search term:', searchTerm);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <NavbarContainer>
      <ToggleButton onClick={toggleMenu}>
        {isMenuOpen ? '✖' : '☰'}
      </ToggleButton>
      <SearchContainer>
        <SearchInput
          type="text"
          placeholder="Search..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <SearchButton onClick={handleSearch}>Search</SearchButton>
      </SearchContainer>
      <LinksContainer isOpen={isMenuOpen}>
      <LinkItem>
          <Link to="/schownerlogin"><StyledNavLink>create your website</StyledNavLink></Link>
        </LinkItem>
        <LinkItem>
          <StyledNavLink>Secondary Schools</StyledNavLink>
          <SubMenuContainer>
            <SubMenuLink to="/secondary-schools/private">Private Schools</SubMenuLink>
            <SubMenuLink to="/secondary-schools/government">Government Schools</SubMenuLink>
          </SubMenuContainer>
        </LinkItem>
        <LinkItem>
          <StyledNavLink>Universities</StyledNavLink>
          <SubMenuContainer>
            <SubMenuLink to="/universities/private">Private Universities</SubMenuLink>
            <SubMenuLink to="/universities/state">State Universities</SubMenuLink>
            <SubMenuLink to="/universities/federal">Federal Universities</SubMenuLink>
          </SubMenuContainer>
        </LinkItem>
        <LinkItem>
          <StyledNavLink>Polytechnics</StyledNavLink>
          <SubMenuContainer>
            <SubMenuLink to="/polytechnics/state">State Polytechnics</SubMenuLink>
            <SubMenuLink to="/polytechnics/federal">Federal Polytechnics</SubMenuLink>
          </SubMenuContainer>
        </LinkItem>
        <LinkItem>
          <Link to="/colleges-of-education"><StyledNavLink>Colleges of Education</StyledNavLink></Link>
        </LinkItem>
      </LinksContainer>
    </NavbarContainer>
  );
};

export default SchoolNavbar;
