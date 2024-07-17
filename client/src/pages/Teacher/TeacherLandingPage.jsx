
import Navbar from '../../components/LandingPage/Navbar'
import { Link } from "react-router-dom";

import React, { useState, useEffect } from 'react';
import axios from 'axios';

const TeacherLandingPage = () => {
  const [profiles, setProfiles] = useState([]);

  useEffect(() => {
    const fetchProfiles = async () => {
      const res = await axios.get('http://localhost:4000/api/getAllteachersProfile');
      setProfiles(res.data);
    };
    fetchProfiles();
  }, []);

  return (
    <div>
      <Navbar />
      <h1><Link to="/teacherdetaildashboard">Landing Page</Link></h1>
      {profiles.map(profile => (
        <div key={profile._id}>
          <h2>{profile.firstName} {profile.lastName}</h2>
          <p>{profile.profileWriteUp}</p>
        </div>
      ))}
    </div>
  );
};

export default TeacherLandingPage;
