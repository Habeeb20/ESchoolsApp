import React, { useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';

export default function SchOwnerSignin() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('http://localhost:4000/api/schownerlogin', { username, password });
      localStorage.setItem('token', res.data.token);
      navigate('/schownerdashboard');
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>Admin Login</h2>
      <form onSubmit={handleSubmit} style={styles.form}>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          style={styles.input}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={styles.input}
        />
        <Link to="/schownerregister" style={styles.linkButton}>
          Signup
        </Link>
        <button type="submit" style={styles.button}>Login</button>
      </form>
    </div>
  );
}

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
    backgroundColor: '#f0fff0',
  },
  heading: {
    color: '#006400',
    marginBottom: '20px',
    fontSize: '24px',
    fontWeight: 'bold',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: '300px',
    backgroundColor: '#e0ffe0',
    padding: '20px',
    borderRadius: '10px',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
  },
  input: {
    width: '100%',
    padding: '10px',
    margin: '10px 0',
    borderRadius: '5px',
    border: '1px solid #ccc',
    fontSize: '16px',
  },
  button: {
    padding: '10px 20px',
    backgroundColor: '#006400',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    fontSize: '16px',
    cursor: 'pointer',
    marginTop: '10px',  // added margin to separate the buttons
  },
  linkButton: {
    display: 'inline-block',
    padding: '10px 20px',
    backgroundColor: '#006400',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    fontSize: '16px',
    cursor: 'pointer',
    textDecoration: 'none',
    textAlign: 'center',
    marginTop: '10px',  // added margin to separate the buttons
  },
};
