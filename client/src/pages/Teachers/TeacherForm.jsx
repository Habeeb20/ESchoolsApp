import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid'; 
import { useNavigate } from 'react-router-dom';
import HomeNavbar from '../LandingPage/essentialLanding/HomeNavbar';
import toast from 'react-hot-toast';

const TeacherForm = () => {
  const [formData, setFormData] = useState({
    fName: '',
    lName: '',
    email: '',
    phone: '',
    profSum: '',
    workExp: '',
    address: '',
    courseStud: '',
    yrsOfExp: '',
    contAdd: '',
    insAtt: '',
    grade: '',
    password: '',
  });

  const [isLoading, setIsLoading] = useState(false); // Loading state for user feedback
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true); // Set loading to true when submitting
    try {
      const response = await fetch('http://localhost:4000/api/teacherprofile/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (response.ok) {
        toast.success('Registration successful');
        navigate('/teacherprofile');
      } else {
        toast.error(result.message || 'Registration failed');
      }
    } catch (error) {
      console.error('Error during registration:', error);
      toast.error('Error during registration. Please try again later.');
    } finally {
      setIsLoading(false); // Reset loading state
    }
  };

  // Styles
  const formStyle = {
    display: 'flex',
    flexDirection: 'column',
    maxWidth: '500px',
    margin: '20px auto',
    padding: '20px',
    backgroundColor: '#ffffff',
    borderRadius: '10px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    fontFamily: 'Poppins, sans-serif',
  };

  const inputStyle = {
    margin: '10px 0',
    padding: '10px',
    borderRadius: '5px',
    border: '1px solid #ccc',
    fontSize: '16px',
  };

  const textareaStyle = {
    ...inputStyle,
    minHeight: '100px',
  };

  const buttonStyle = {
    padding: '12px',
    backgroundColor: 'green',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    fontSize: '16px',
    marginTop: '20px',
  };

  const headerStyle = {
    textAlign: 'center',
    marginBottom: '20px',
    color: '#333',
  };

  return (
    <>
      <HomeNavbar />
      <form style={formStyle} onSubmit={handleSubmit}>
        <h2 style={headerStyle}>Teacher Information Form</h2>
        <input
          style={inputStyle}
          type="text"
          name="fName"
          placeholder="First Name"
          value={formData.fName}
          onChange={handleInputChange}
          required
        />
        <input
          style={inputStyle}
          type="text"
          name="lName"
          placeholder="Last Name"
          value={formData.lName}
          onChange={handleInputChange}
          required
        />
        <input
          style={inputStyle}
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleInputChange}
          required
        />
        <input
          style={inputStyle}
          type="number"
          name="phone"
          placeholder="Phone Number"
          value={formData.phone}
          onChange={handleInputChange}
          required
        />
        <input
          style={inputStyle}
          type="number"
          name="yrsOfExp"
          placeholder="Years of Experience"
          value={formData.yrsOfExp}
          onChange={handleInputChange}
          required
        />
        <textarea
          style={textareaStyle}
          name="workExp"
          placeholder="Work Experience"
          value={formData.workExp}
          onChange={handleInputChange}
          required
        />
        <input
          style={inputStyle}
          type="text"
          name="address"
          placeholder="Address"
          value={formData.address}
          onChange={handleInputChange}
          required
        />
        <input
          style={inputStyle}
          type="text"
          name="courseStud"
          placeholder="Course Studied"
          value={formData.courseStud}
          onChange={handleInputChange}
          required
        />
        <textarea
          style={textareaStyle}
          name="profSum"
          placeholder="Profile Summary/Bio"
          value={formData.profSum}
          onChange={handleInputChange}
          required
        />
        <input
          style={inputStyle}
          type="text"
          name="contAdd"
          placeholder="Contact Address (e.g., LinkedIn)"
          value={formData.contAdd}
          onChange={handleInputChange}
          required
        />
        <input
          style={inputStyle}
          type="text"
          name="insAtt"
          placeholder="Institution Attended"
          value={formData.insAtt}
          onChange={handleInputChange}
          required
        />
        <input
          style={inputStyle}
          type="text"
          name="grade"
          placeholder="Grade"
          value={formData.grade}
          onChange={handleInputChange}
          required
        />
        <input
          style={inputStyle}
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleInputChange}
          required
        />
        <button style={buttonStyle} type="submit" disabled={isLoading}>
          {isLoading ? 'Submitting...' : 'Submit'}
        </button>
      </form>
    </>
  );
};

export default TeacherForm;
