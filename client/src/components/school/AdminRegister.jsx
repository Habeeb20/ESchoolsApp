import React, {useState} from 'react'
import axios from 'axios'
import {AdminRegisterContainer,FormContainer, InputField, SubmitButton } from '../../styles/AdminRegisterStyles'; 
import AdminNavbar from './AdminNavbar';
import FadeIn from '../../FadeIn';
const AdminRegister = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
  
    const handleRegister = async (e) => {
      e.preventDefault(); // Prevent default form submission
    
      try {
        const response = await axios.post('http://localhost:4000/api/adminSignup', { email, password }); 
        if (response.status === 200) {
          // Registration successful, redirect to admin login
          window.location.href = '/adminsignIn';
        } else {
          // Handle registration errors
          console.error('Registration failed');
        }
      } catch (error) {
        console.error('Error during registration:', error);
      }
    };
     
  
    return (
      <>
      <AdminNavbar/>
      <FadeIn delay={0.2} direction="right" padding fullWidth>
      <form className="login" onSubmit={handleRegister}>
        <h3>Admin's Signup</h3>
  
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
  
        <button onClick={handleRegister}>register</button>
       
      </form>
      </FadeIn>
      </>
      // <AdminRegisterContainer>
      //   <h2>Admin Register</h2>
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
      //     <SubmitButton onClick={(e) => handleRegister(e)}>Register</SubmitButton>
  
      //   </FormContainer>
      // </AdminRegisterContainer>
    );
  };
  
  export default AdminRegister;
  