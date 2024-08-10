import React from 'react';
import { Link } from 'react-router-dom';
import HomeNavbar from '../LandingPage/essentialLanding/HomeNavbar';

const TeacherList = ({ teachers }) => {
  const listStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  };

  const cardStyle = {
    backgroundColor: '#f4f4f4',
    padding: '20px',
    margin: '10px',
    borderRadius: '10px',
    width: '80%',
    textAlign: 'center'
  };

  const linkStyle = {
    color: 'blue',
    textDecoration: 'none'
  };

  return (
    <>
    <HomeNavbar />
        <div style={listStyle}>
      <h2>All Teachers</h2>
      {teachers.map((teacher) => (
        <div key={teacher.id} style={cardStyle}>
          <p>{teacher.fullname}</p>
          <p>{teacher.phonenumber}</p>
          <p>{teacher.email}</p>
          <p>{teacher.education}</p>
          <p>{teacher.dob}</p>
          <p>{teacher.experience}</p>
          <p>{teacher.address}</p>
          <p>{teacher.course}</p>
          <p>{teacher.bio}</p>
          <p>{teacher.profilePicture.name}</p>
          <p>{teacher.cv.name}</p>
          <Link style={linkStyle} to={`/teacher/${teacher.id}`}>View Details</Link>
        </div>
      ))}
    </div>
    </>
    
  );
};

export default TeacherList;
