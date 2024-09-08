// Home.js
import React from 'react';

import { Navbar, Logo, NavigationLinks, NavLink, ButtonsContainer, LoginButton, GuestButton, HomeContainer, SchoolInfo, SchoolImage, Title, LoremTextContainer, AdminRegisterLink } from '../../styles/styles'
// import { LoremIpsum } from 'lorem-ipsum';
// import bg from "../assets/bg.png";
// import bg1 from "../assets/bg1.png";
import { Link, useNavigate } from 'react-router-dom'; 
import FadeIn from '../../FadeIn';
// const lorem = new LoremIpsum();

const Home = () => {
  const navigate = useNavigate();
//   const loremText = lorem.generateParagraphs(1);

  const handleLoginClick = () => {
    navigate('/adminsignin');
  };

  const button = {
    borderRadius : '15%',
    backgroundColor: "darkgreen",
    color: 'white',
    TextDecoration: "none"

}

const link = {
    color: "white",
    TextDecoration: "none"
}

  return (
    <>
     <form className="signup" >
    <h3>Do you want to login as </h3>

    <FadeIn delay={0.2} direction="down" padding fullWidth>
            <button style={button}><Link style={link} to= '/studentsignin'>a student?</Link></button>
                <h5>or</h5>
            <button style={button}><Link style={link} to= '/teacherlogin'>a teacher?</Link></button>
                <h5>or</h5>
            <button style={button}><Link style={link} to= '/adminsignin'>an admin?</Link></button>
            <h3>of a school </h3>
    </FadeIn>
           
        

</form>
      
    </>
  );
};

export default Home;


// <Navbar>
//         {/* <Logo src={bg1} alt="Logo" /> */}
//         <NavigationLinks>
//           <NavLink href="#">About Us</NavLink>
//           <NavLink href="#">Products</NavLink>
//           <NavLink href="#">Contact Us</NavLink>
//         </NavigationLinks>
//         <ButtonsContainer>
//           <LoginButton onClick={handleLoginClick}>Sign In</LoginButton>
//           <GuestButton onClick={handleLoginClick}>Guest Mode</GuestButton>
//         </ButtonsContainer>
//       </Navbar>
//       <HomeContainer>
//         <SchoolInfo>
//           <Title>ESchools</Title>
//           {/* <LoremTextContainer>
//             <p>{loremText}</p>
//           </LoremTextContainer> */}
//           <AdminRegisterLink to="/admin/register">Admin Register</AdminRegisterLink>
//         </SchoolInfo>
//         {/* <SchoolImage src={bg} alt="pupils" /> */}
//       </HomeContainer>
