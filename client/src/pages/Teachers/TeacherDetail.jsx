


import React from 'react';
import { useParams } from 'react-router-dom';
import HomeNavbar from '../LandingPage/essentialLanding/HomeNavbar';

const TeacherDetail = ({ teachers }) => {
  const { id } = useParams();
  const teacher = teachers.find((teacher) => teacher.id === id);

  const detailStyle = {
    padding: '20px',
    margin: '20px auto',
    maxWidth: '600px',
    backgroundColor: '#ffffff',
    borderRadius: '10px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    fontFamily: 'Poppins, sans-serif',
  };

  const sectionStyle = {
    marginBottom: '15px',
  };

  const labelStyle = {
    fontWeight: '600',
    color: '#333',
  };

  const textStyle = {
    margin: '5px 0',
    color: '#555',
  };

  const profilePicStyle = {
    width: '100px',
    height: '100px',
    borderRadius: '50%',
    objectFit: 'cover',
    margin: '10px 0',
  };

  const cvLinkStyle = {
    color: '#007bff',
    textDecoration: 'none',
    fontWeight: '500',
  };

  const headerStyle = {
    textAlign: 'center',
    marginBottom: '20px',
    color: '#333',
  };

  const containerStyle = {
    padding: '20px',
  };

  return (
    <>
      <HomeNavbar />
      <div style={containerStyle}>
        <div style={detailStyle}>
          {teacher ? (
            <>
              <h2 style={headerStyle}>{teacher.fName}'s  Details</h2>
              <div style={sectionStyle}>
                <p style={labelStyle}><strong>Name:</strong></p>
                <p style={textStyle}>{teacher.fName }{teacher.lName}</p>
              </div>
              <div style={sectionStyle}>
                <p style={labelStyle}><strong>Phone Number:</strong></p>
                <p style={textStyle}>{teacher.phone}</p>
              </div>
              <div style={sectionStyle}>
                <p style={labelStyle}><strong>Email:</strong></p>
                <p style={textStyle}>{teacher.email || 'N/A'}</p>
              </div>
              <div style={sectionStyle}>
                <p style={labelStyle}><strong>Education:</strong></p>
                <p style={textStyle}>{teacher.insAtt || 'N/A'}</p>
              </div>
              <div style={sectionStyle}>
                <p style={labelStyle}><strong>course Studied:</strong></p>
                <p style={textStyle}>{teacher.courseStud || 'N/A'}</p>
              </div>
              <div style={sectionStyle}>
                <p style={labelStyle}><strong>Work Experience:</strong></p>
                <p style={textStyle}>{teacher.workExp || 'N/A'}</p>
              </div>
              <div style={sectionStyle}>
                <p style={labelStyle}><strong>Address:</strong></p>
                <p style={textStyle}>{teacher.address || 'N/A'}</p>
              </div>
              <div style={sectionStyle}>
                <p style={labelStyle}><strong>years of experience:</strong></p>
                <p style={textStyle}>{teacher.yrsOfExp || 'N/A'}</p>
              </div>
              <div style={sectionStyle}>
                <p style={labelStyle}><strong>Bio Data:</strong></p>
                <p style={textStyle}>{teacher.profSum || 'N/A'}</p>
              </div>
           
            </>
          ) : (
            <p style={headerStyle}>Teacher not found</p>
          )}
        </div>
      </div>
    </>
  );
};

export default TeacherDetail;
