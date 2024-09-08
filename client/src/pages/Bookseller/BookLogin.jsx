import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import toast from 'react-hot-toast';

const BookLogin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!email || !password) {
      toast.error('Please fill in all fields');
      return;
    }

    try {
      const response = await axios.post('http://localhost:4000/api/booksellers/login', { email, password });

      // Log the response to inspect what's being returned
      console.log('Response from login:', response.data);

      // Check if token exists and handle bookseller information more flexibly
      if (response.data.token) {
        localStorage.setItem('token', response.data.token);

        // Handle booksellerId safely in case it's missing
        if (response.data.bookseller) {
          localStorage.setItem('booksellerId', response.data.bookseller._id);
        }

        toast.success('Login successful!');
        navigate('/booksellerdashboard'); // Redirect to dashboard after login
      } else {
        toast.error('Invalid credentials, please try again');
      }
    } catch (error) {
      console.error('Error during login:', error.response?.data || error.message);
      toast.error('Login failed. Please try again.');
    }
  };

  return (
    <div style={{ width: '50%', margin: '0 auto', padding: '20px' }}>
      <h2>Login to Your Account</h2>
      <form onSubmit={handleSubmit} style={{ marginTop: '20px' }}>
        <div style={{ marginBottom: '15px' }}>
          <label>Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={{ width: '100%', padding: '10px', marginTop: '5px' }}
            required
          />
        </div>
        <div style={{ marginBottom: '15px' }}>
          <label>Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={{ width: '100%', padding: '10px', marginTop: '5px' }}
            required
          />
        </div>
        <button type="submit" style={{ padding: '10px', backgroundColor: '#36A2EB', color: '#fff' }}>
          Login
        </button>
      </form>
    </div>
  );
};

export default BookLogin;
