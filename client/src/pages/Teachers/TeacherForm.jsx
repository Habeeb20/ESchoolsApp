import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { useNavigate } from 'react-router-dom';
import HomeNavbar from '../LandingPage/essentialLanding/HomeNavbar';

const TeacherForm = ({ addTeacher }) => {
  const [teacher, setTeacher] = useState({
    id: '',
    fullname: '',
    phonenumber: '',
    email: '',
    education: '',
    dob: '',
    experience: '',
    address: '',
    course: '',
    bio: '',
    profilePicture: '',
    cv: ''
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setTeacher({
      ...teacher,
      [e.target.name]: e.target.value,
    });
  };

  const handleFileChange = (e) => {
    setTeacher({
      ...teacher,
      [e.target.name]: e.target.files[0],
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    teacher.id = uuidv4();
    addTeacher(teacher);
    navigate('/teachers');
  };

  const formStyle = {
    display: 'flex',
    flexDirection: 'column',
    maxWidth: '400px',
    margin: 'auto',
    padding: '20px',
    backgroundColor: '#f4f4f4',
    borderRadius: '10px'
  };

  const inputStyle = {
    margin: '10px 0',
    padding: '10px',
    borderRadius: '5px',
    border: '1px solid #ccc'
  };

  const buttonStyle = {
    padding: '10px',
    backgroundColor: 'green',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer'
  };

  return (
    <>
    <HomeNavbar/>
     <form style={formStyle} onSubmit={handleSubmit}>
      <h2>Teacher Information Form</h2>
      <input style={inputStyle} type="text" name="fullname" placeholder="Full Name" value={teacher.fullname} onChange={handleChange} required />
      <input style={inputStyle} type="number" name="phonenumber" placeholder="phone number" value={teacher.phonenumber} onChange={handleChange} required />
      <input style={inputStyle} type="email" name="email" placeholder="Email" value={teacher.email} onChange={handleChange} required />
      <input style={inputStyle} type="text" name="education" placeholder="Education Background" value={teacher.education} onChange={handleChange} required />
      <input style={inputStyle} type="date" name="dob" value={teacher.dob} onChange={handleChange} required />
      <input style={inputStyle} type="text" name="experience" placeholder="Work Experience" value={teacher.experience} onChange={handleChange} required />
      <input style={inputStyle} type="text" name="address" placeholder="Address" value={teacher.address} onChange={handleChange} required />
      <input style={inputStyle} type="text" name="course" placeholder="Course Studied" value={teacher.course} onChange={handleChange} required />
      <textarea style={inputStyle} name="bio" placeholder="Bio Data" value={teacher.bio} onChange={handleChange} required />
      <input style={inputStyle} type="file" name="profilePicture" onChange={handleFileChange} required />
      <input style={inputStyle} type="file" name="cv" onChange={handleFileChange} required />
      <button style={buttonStyle} type="submit">Submit</button>
    </form>

    </>
   
  );
};

export default TeacherForm;
