// StudentSignIn.js
import React, { useState } from 'react';
import { StudentSignInContainer, FormContainer, InputField, SubmitButton } from '../../styles/StudentSignInStyles';
import StudentNavbar from './StudentNavbar';
import FadeIn from '../../FadeIn';
const StudentSignIn = () => {
  const [email, setEmail] = useState('');
  const [registrationNumber, setRegistrationNumber] = useState('');

  const handleSignIn = () => {
    // For demonstration purposes, we'll directly navigate to the student dashboard route
    // Replace this with your actual sign-in logic
    console.log('Student Sign In:', { email, registrationNumber });
  };

  return (
    <>
    <StudentNavbar />
     <FadeIn delay={0.2} direction="right" padding fullWidth>
      <form className="login" onSubmit={handleSignIn}>
        <h3>student's Sign In</h3>
  
        <label>Email</label>
        <input
          type="email"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />
  
        <label>Password</label>
        <input
          type="password"
          onChange={(e) => setRegistrationNumber(e.target.value)}
          value={registrationNumber}
        />
  
        <button onClick={handleSignIn}>register</button>
       
      </form>
      </FadeIn></>
    // <StudentSignInContainer>
    //   <h2>Student Sign In</h2>
    //   <FormContainer>
    //     <InputField
    //       type="email"
    //       placeholder="Email"
    //       value={email}
    //       onChange={(e) => setEmail(e.target.value)}
    //       required
    //     />
    //     <InputField
    //       type="password"
    //       placeholder="Password"
    //       value={password}
    //       onChange={(e) => setPassword(e.target.value)}
    //       required
    //     /> 
    //     {/* Use Link component to navigate to student dashboard */}
    //     <SubmitButton to="/student/dashboard" onClick={handleSignIn}>Sign In</SubmitButton>
    //   </FormContainer>
    // </StudentSignInContainer>
  );
};

export default StudentSignIn;
