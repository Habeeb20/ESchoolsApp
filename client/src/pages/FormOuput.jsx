import React from 'react';

const FormOutput = () => {
  const formData = {
    firstName: 'John',
    lastName: 'Doe',
    email: 'johndoe@example.com',
    phone: '+1234567890',
    address: '123 Main Street, City, Country',
    dateOfBirth: '01/01/1990',
    gender: 'Male',
    education: 'Bachelor\'s Degree in Computer Science'
  };

  const containerStyle = {
    maxWidth: '600px',
    margin: '0 auto',
    padding: '20px',
    border: '1px solid #ccc',
    borderRadius: '8px',
    backgroundColor: '#f9f9f9',
    boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
    fontFamily: 'Arial, sans-serif',
    lineHeight: '1.5',
    fontSize: '16px',
  };

  const labelStyle = {
    fontWeight: 'bold',
    marginBottom: '5px',
    display: 'block',
    color: '#333',
  };

  const valueStyle = {
    marginBottom: '15px',
    display: 'block',
    color: '#555',
  };

  const formGroupStyle = {
    marginBottom: '15px',
  };

  return (
    <div style={containerStyle}>
      <h2 style={{ textAlign: 'center' }}>User Information</h2>
      
      <div style={formGroupStyle}>
        <label style={labelStyle}>First Name:</label>
        <span style={valueStyle}>{formData.firstName}</span>
      </div>

      <div style={formGroupStyle}>
        <label style={labelStyle}>Last Name:</label>
        <span style={valueStyle}>{formData.lastName}</span>
      </div>

      <div style={formGroupStyle}>
        <label style={labelStyle}>Email:</label>
        <span style={valueStyle}>{formData.email}</span>
      </div>

      <div style={formGroupStyle}>
        <label style={labelStyle}>Phone Number:</label>
        <span style={valueStyle}>{formData.phone}</span>
      </div>

      <div style={formGroupStyle}>
        <label style={labelStyle}>Address:</label>
        <span style={valueStyle}>{formData.address}</span>
      </div>

      <div style={formGroupStyle}>
        <label style={labelStyle}>Date of Birth:</label>
        <span style={valueStyle}>{formData.dateOfBirth}</span>
      </div>

      <div style={formGroupStyle}>
        <label style={labelStyle}>Gender:</label>
        <span style={valueStyle}>{formData.gender}</span>
      </div>

      <div style={formGroupStyle}>
        <label style={labelStyle}>Education:</label>
        <span style={valueStyle}>{formData.education}</span>
      </div>
    </div>
  );
};

export default FormOutput;
