
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import HomeNavbar from '../LandingPage/essentialLanding/HomeNavbar';

import toast from 'react-hot-toast';
const TeacherProfileLogin = ({ onLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:4000/api/teacherprofile/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      console.log('Response Data:', data); // Log the response for debugging

      if (response.ok) {
        console.log('Login successful:', data.token);
        localStorage.setItem('token', data.token);
        // onLogin();
        navigate('/teacherprofile'); // Redirect to profile after login
      } else {
        toast.success(data.message || 'Invalid credentials');
      }
    } catch (error) {
    //   console.error(error);
      toast.error('Error logging in');
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/login');
  };

  return (
   <>
   <HomeNavbar/>
    <div style={styles.pageContainer}>
      {/* <button onClick={handleLogout} className="btn-secondary">Logout</button> */}
      <div style={styles.formContainer}>
        <h1 style={styles.header}>Login</h1>
        <form onSubmit={handleSubmit} style={styles.form}>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
            style={styles.input}
            required
          />
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            style={styles.input}
            required
          />
          <button type="submit" style={styles.button}>
            Login
          </button>
        </form>
      </div>
    </div>
    </>
  );
};




const styles = {
  pageContainer: {
    padding: '20px',
    maxWidth: '400px',
    margin: '0 auto',
    backgroundColor: '#f8f9fa',
    minHeight: '100vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  formContainer: {
    backgroundColor: '#ffffff',
    padding: '30px',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    border: '1px solid #ddd',
    width: '100%',
  },
  header: {
    textAlign: 'center',
    color: '#333',
    marginBottom: '20px',
    fontSize: '2rem',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: '15px',
  },
  input: {
    padding: '12px',
    fontSize: '16px',
    borderRadius: '6px',
    border: '1px solid #ccc',
    outline: 'none',
    transition: 'border-color 0.3s ease',
    width: '100%',
  },
  button: {
    padding: '12px',
    backgroundColor: '#007bff',
    color: 'white',
    fontSize: '16px',
    borderRadius: '6px',
    cursor: 'pointer',
    border: 'none',
    transition: 'background-color 0.3s ease',
    width: '100%',
  },
};

export default TeacherProfileLogin;
