
import TNavbar from '../../components/TNavbar'

import React, { useState, useEffect } from 'react';
import axios from 'axios';

const TeacherHome = () => {
  const [profiles, setProfiles] = useState([]);

  useEffect(() => {
    const fetchProfiles = async () => {
      const res = await axios.get('http://localhost:4000/api/getTeacherProfile/:id');
      setProfiles(res.data);
    };
    fetchProfiles();
  }, []);

  return (
    <div>
      <TNavbar />
      <h1>Dashboard</h1>
      
      {profiles.map(profile => (
        <div key={profile._id}>
          <h2>{profile.firstName} {profile.lastName}</h2>
          <p>{profile.email}</p>
          <p>{profile.profileWriteUp}</p>
          <p>{profile.workExperience}</p>
          <p>{profile.address}</p>
          <p>{profile.courses.join(', ')}</p>
          <p>{profile.yearsOfExperience} years of experience</p>
        </div>
      ))}
    </div>
  );
};

export default TeacherHome;

