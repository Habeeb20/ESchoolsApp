
import TNavbar from '../../components/TNavbar'

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import TeachersProfileDashBoard from './TeachersProfileDashBoard';

const TeacherHome = () => {
  // const [profiles, setProfiles] = useState([]);

  // useEffect(() => {
  //   const fetchProfiles = async () => {
  //     const res = await axios.get('http://localhost:4000/api/getTeacherProfile/:id');
  //     setProfiles(res.data);
  //   };
  //   fetchProfiles();
  // }, []);

  return (
    <div>
      <TNavbar />
      <h1>Dashboard</h1>
      <TeachersProfileDashBoard />
      
    </div>
  );
};

export default TeacherHome;

