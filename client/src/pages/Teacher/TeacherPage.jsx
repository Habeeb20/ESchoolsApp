import React from 'react';
import { Link } from 'react-router-dom';
import FadeIn from '../../FadeIn';

export default function TeacherPage() {
  const buttonStyle = {
    borderRadius: '8px',
    backgroundColor: 'darkgreen',
    color: 'white',
    width: '100%',
    maxWidth: '240px',
    padding: '10px',
    margin: '10px auto',
    border: 'none',
    cursor: 'pointer',
    textAlign: 'center',
    textDecoration: 'none',
    display: 'block'
  };

  const linkStyle = {
    color: 'white',
    textDecoration: 'none'
  };

  const headerStyle = {
    textAlign: 'center',
    marginBottom: '20px'
  };

  const containerStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '20px',
    boxSizing: 'border-box',
  };

  return (
    <div style={containerStyle}>
      <h3 style={headerStyle}>Do you want to create a teacher's account?</h3>

      <FadeIn delay={0.2} direction="down" padding fullWidth>
        <button style={buttonStyle}>
          <Link style={linkStyle} to='/teacherlogin'>Account?</Link>
        </button>
        <h5>or want to employ a teacher</h5>
        <button style={buttonStyle}>
          <Link style={linkStyle} to='/teacherlandingpage'>Teachers?</Link>
        </button>
      </FadeIn>
    </div>
  );
}
