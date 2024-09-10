import React, { useState } from 'react';
import { AdminSignInContainer, FormContainer, InputField, SubmitButton } from '../../styles/AdminSignInStyles';
import axios from 'axios';
import FadeIn from '../../FadeIn';
import Navbar from '../Navbar';
import AdminNavbar from './AdminNavbar';
import { useNavigate } from 'react-router-dom';
const AdminSignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate()

  const handleSignIn = async (e) => {
    e.preventDefault();
    navigate('/admindashboard')
  
    try {
      const response = await axios.post('http://localhost:4000/api/adminLogin', { email, password }); 
      if (response.status === 200) {
        // Sign-in successful, redirect to admin dashboard
        window.location.href = '/admindashboard';
      } else {
        // Handle sign-in errors
        console.error('Sign-in failed');
      }
    } catch (error) {
      console.error('Error during sign-in:', error);
    }
  };

  return (

    <>
      <AdminNavbar/>
      <FadeIn delay={0.2} direction="right" padding fullWidth>
      <form className="login" onSubmit={handleSignIn}>
        <h3>Admin's Login</h3>
  
        <label>Email</label>
        <input
          type="email"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />
  
        <label>Password</label>
        <input
          type="password"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
        />
  
        <button onClick={handleSignIn}>log in</button>
       
      </form>
      </FadeIn>
      </>
    // <AdminSignInContainer>
    //   <h2>Admin Sign In</h2>
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
    //     <SubmitButton onClick={handleSignIn}>Sign In</SubmitButton>
    //   </FormContainer>
    // </AdminSignInContainer>
  );
};

export default AdminSignIn;
