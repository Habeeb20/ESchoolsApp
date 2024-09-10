import React from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function AdmissionHeader() {
  const location = useLocation();

  // Function to handle logout
  const handleLogout = () => {
    localStorage.removeItem('token');
    window.location.href = '/loginadmission'; // Redirect to login page after logout
  };

  return (
    <>
     
      <div style={styles.navbar}>
          
        {location.pathname === '/profile' ? (
          <button onClick={handleLogout} style={styles.button}>
            Logout
          </button>
        ) : (
          <>
            <Link to='/loginadmission' style={styles.link}>
              <button style={styles.button}>Login</button>
            </Link>
            <Link to='/registeradmission' style={styles.link}>
              <button style={styles.button}>Register</button>
            </Link>
          </>
        )}
      </div>
    </>

  );
}

const styles = {

  navbar: {
    backgroundColor: '#1aac83', // Lemon green color
    padding: '10px 20px',
    display: 'flex',
    justifyContent: 'flex-end', // Align buttons to the right
    alignItems: 'center',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    margin: '0', // Remove any margin
    borderTop: 'none', // No border at the top
    position: 'fixed', // Make the navbar fixed at the top
    top: '0', // Stick the navbar to the top
    width: '100%', // Make the navbar take full width
    zIndex: '1000', // Ensure the navbar is above other content
  },
  button: {
    marginLeft: '10px', // Space between buttons
    marginRight: '10px',
    padding: '8px 16px',
    backgroundColor: 'white',
    color: '#1aac83',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    transition: 'background-color 0.3s ease',
  },
  buttonHover: {
    backgroundColor: '#148c67', // Darker green on hover
  },


  link: {
    textDecoration: 'none',
    marginLeft: '10px',
    marginRight: '30px'
  },
  button: {
    backgroundColor: '#ffffff', // White background for the buttons
    color: '#333', // Dark text color
    border: '2px solid #ccff66', // Border matching the navbar
    borderRadius: '5px',
    padding: '10px 20px',
    cursor: 'pointer',
    marginRight: '5%',
    fontSize: '16px',
    transition: 'background-color 0.3s ease, color 0.3s ease',
  },
  buttonHover: {
    backgroundColor: '#99cc33', // Slightly darker green on hover
    color: '#fff', // White text on hover
  },
};

// Apply hover effect
const buttonStyle = document.createElement('style');
buttonStyle.innerHTML = `
  button:hover {
    background-color: ${styles.buttonHover.backgroundColor};
    color: ${styles.buttonHover.color};
  }
`;
document.head.appendChild(buttonStyle);
