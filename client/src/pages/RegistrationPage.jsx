import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import HomeNavbar from './LandingPage/essentialLanding/HomeNavbar';
const RegistrationPage = () => {
    const navigate = useNavigate()
    const [formData, setFormData] = useState({
      name: '',
      email: '',
      phone: '',
      school: '',
      department: '',
      faculty: '',
      history: '',
      admissionStartDate: '',
      admissionEndDate: '',
      admissionRequirements: '',
      tuitionFeesIndigene: 0,
      tuitionFeesNonIndigene: 0,
      students: '',
      password: '',
    });
  
    const handleInputChange = (e) => {
      const { name, value } = e.target;
      setFormData({ ...formData, [name]: value });
    };
  
    const handleSubmit = async (e) => {
      e.preventDefault();
      try {
        const response = await fetch('http://localhost:4000/register', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData),
        });
  
        if (response.ok) {
          alert('Registration successful');
          navigate('/profile')
        } else {
          alert('Registration failed');
        }
      } catch (error) {
        console.error('Error during registration:', error);
        alert('Error during registration');
      }
    };
  
    return (
      <>
      <HomeNavbar />
      <div style={{ padding: '20px', maxWidth: '600px', margin: '0 auto' }}>
        <h1 style={{ textAlign: 'center', paddingTop: '5%' }}>Register</h1>
        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
          <input
            name="school"
            value={formData.school}
            onChange={handleInputChange}
            placeholder="name of school"
            style={{ padding: '10px', fontSize: '16px', borderRadius: '4px', border: '1px solid #ccc' }}
          />
          <input
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            placeholder="Email"
            type="email"
            style={{ padding: '10px', fontSize: '16px', borderRadius: '4px', border: '1px solid #ccc' }}
          />
          <input
            name="phone"
            value={formData.phone}
            onChange={handleInputChange}
            placeholder="Phone Number"
            style={{ padding: '10px', fontSize: '16px', borderRadius: '4px', border: '1px solid #ccc' }}
          />
          <input
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            placeholder="address"
            style={{ padding: '10px', fontSize: '16px', borderRadius: '4px', border: '1px solid #ccc' }}
          />
          <input
            name="department"
            value={formData.department}
            onChange={handleInputChange}
            placeholder="Department"
            style={{ padding: '10px', fontSize: '16px', borderRadius: '4px', border: '1px solid #ccc' }}
          />
          <input
            name="faculty"
            value={formData.faculty}
            onChange={handleInputChange}
            placeholder="Faculty"
            style={{ padding: '10px', fontSize: '16px', borderRadius: '4px', border: '1px solid #ccc' }}
          />
          <input
            name="history"
            value={formData.history}
            onChange={handleInputChange}
            placeholder="History"
            style={{ padding: '10px', fontSize: '16px', borderRadius: '4px', border: '1px solid #ccc' }}
          />
          <input
            name="admissionStartDate"
            type="date"
            value={formData.admissionStartDate}
            onChange={handleInputChange}
            placeholder="Admission Start Date"
            style={{ padding: '10px', fontSize: '16px', borderRadius: '4px', border: '1px solid #ccc' }}
          />
          <input
            name="admissionEndDate"
            type="date"
            value={formData.admissionEndDate}
            onChange={handleInputChange}
            placeholder="Admission End Date"
            style={{ padding: '10px', fontSize: '16px', borderRadius: '4px', border: '1px solid #ccc' }}
          />
          <textarea
            name="admissionRequirements"
            value={formData.admissionRequirements}
            onChange={handleInputChange}
            placeholder="Admission Requirements"
            style={{ padding: '10px', fontSize: '16px', borderRadius: '4px', border: '1px solid #ccc' }}
          />
          <input
            name="tuitionFeesIndigene"
            type="number"
            value={formData.tuitionFeesIndigene}
            onChange={handleInputChange}
            placeholder="Tuition Fees (Indigene)"
            style={{ padding: '10px', fontSize: '16px', borderRadius: '4px', border: '1px solid #ccc' }}
          />
          <input
            name="tuitionFeesNonIndigene"
            type="number"
            value={formData.tuitionFeesNonIndigene}
            onChange={handleInputChange}
            placeholder="Tuition Fees (Non-Indigene)"
            style={{ padding: '10px', fontSize: '16px', borderRadius: '4px', border: '1px solid #ccc' }}
          />
          <textarea
            name="students"
            value={formData.students}
            onChange={handleInputChange}
            placeholder="Students (JSON format)"
            style={{ padding: '10px', fontSize: '16px', borderRadius: '4px', border: '1px solid #ccc' }}
          />
          <input
            name="password"
            value={formData.password}
            onChange={handleInputChange}
            placeholder="Password"
            type="password"
            style={{ padding: '10px', fontSize: '16px', borderRadius: '4px', border: '1px solid #ccc' }}
          />
          <button
            type="submit"
            style={{
              padding: '10px',
              backgroundColor: '#28a745',
              color: 'white',
              fontSize: '16px',
              borderRadius: '4px',
              cursor: 'pointer',
              border: 'none',
            }}
          >
            Register
          </button>
        </form>
      </div>
      </>
    );
  };
  
  export default RegistrationPage;
  
