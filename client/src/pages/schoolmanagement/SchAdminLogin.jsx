import React, { useState } from 'react';
import axios from 'axios';

export default function SchAdminLogin() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    try {
      const response = await axios.post('http://localhost:4000/api/schadminlogin', { email, password });
      localStorage.setItem('token', response.data.token);
      window.location.href = '/schadmindashboard';
    } catch (error) {
      console.error('Error logging in', error);
    }
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.header}>Admin Login</h1>
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={e => setEmail(e.target.value)}
        style={styles.input}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={e => setPassword(e.target.value)}
        style={styles.input}
      />
      <button onClick={handleLogin} style={styles.button}>Login</button>
    </div>
  );
}

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: '100vh',
    backgroundColor: '#f8f8f8',
    padding: '20px',
  },
  header: {
    fontSize: '24px',
    color: '#006400',
    marginBottom: '20px',
  },
  input: {
    width: '80%',
    maxWidth: '400px',
    padding: '10px',
    margin: '10px 0',
    border: '1px solid #ccc',
    borderRadius: '5px',
    fontSize: '18px',
  },
  button: {
    width: '80%',
    maxWidth: '400px',
    padding: '10px',
    backgroundColor: '#006400',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    fontSize: '18px',
    cursor: 'pointer',
    marginTop: '10px',
  },
};
