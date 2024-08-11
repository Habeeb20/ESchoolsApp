import React from 'react';
import { Link } from 'react-router-dom';
import HomeNavbar from '../LandingPage/essentialLanding/HomeNavbar';

const TeacherGrid = ({ teachers }) => {
  const gridStyle = {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    padding: '20px',
    backgroundColor: '#f8f9fa',
    marginTop: '20px',
    '@media (max-width: 600px)': {
      flexDirection: 'column',
    },
  };

  const cardStyle = {
    backgroundColor: '#ffffff',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    padding: '20px',
    margin: '10px',
    borderRadius: '10px',
    width: '100%',
    maxWidth: '200px',
    textAlign: 'center',
    transition: 'transform 0.2s ease-in-out',

    '@media (max-width: 600px)': {
      width: '100%',
      margin: '10px 0',
    },
  };

  const linkStyle = {
    color: '#007bff',
    textDecoration: 'none',
    fontWeight: '500',
    backgroundColor: 'green',
    color: '#ffffff',
    border: 'none',
    padding: '10px 20px',
    borderRadius: '5px',
  };

  const buttonStyle = {
    backgroundColor: '#007bff',
    color: '#ffffff',
    border: 'none',
    padding: '10px 20px',
    borderRadius: '5px',
    cursor: 'pointer',
    transition: 'background-color 0.2s ease-in-out',
    marginTop: '10px',
  };

  const headerStyle = {
    textAlign: 'center',
    margin: '20px 0',
    color: '#333',
    fontFamily: 'Poppins, sans-serif',
  };

  const containerStyle = {
    padding: '20px',
  };
 
  

  return (
    <>
      <HomeNavbar />
      <div style={containerStyle}>
        <h2 style={headerStyle}>These are details of the teachers available for jobs</h2>
        <div style={gridStyle}>
          {Array.isArray(teachers) && teachers.length > 0 ? (
            teachers.map((teacher) => (
              <div
                key={teacher.id}
                style={{ ...cardStyle, ...{ ':hover': { transform: 'scale(1.05)' } } }}
              >
                <p>{teacher.fullname}</p>
                <Link style={linkStyle} to={`/teacher/${teacher.id}`}>
                  View Details
                </Link>
              </div>
            ))
          ) : (
            <Link to='/addteacher'>
              <button style={buttonStyle}>Add Teacher</button>
            </Link>
          )}
        </div>
        <h2 style={headerStyle}>
          Are you a teacher looking forward to being hired? Click on the button below for an employer to find you
        </h2>
        <Link to='/addteacher'>
          <button style={buttonStyle}>Add Details</button>
        </Link>
      </div>
    </>
  );
};

export default TeacherGrid;
