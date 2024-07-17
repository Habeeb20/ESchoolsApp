// import React, { useState } from 'react';
// import axios from 'axios';

// const TeacherProfileForm = () => {
//   const [profile, setProfile] = useState({
//     firstName: '',
//     lastName: '',
//     email: '',
//     profileWriteUp: '',
//     address: '',
//     courses: '',
//     yearsOfExperience: ''
//   });

//   const handleChange = (e) => {
//     setProfile({ ...profile, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const coursesArray = profile.courses.split(',').map(course => course.trim());
//     const newProfile = { ...profile, courses: coursesArray };
//     await axios.post('http://localhost:4000/api/createTeacherProfile', newProfile);
//     setProfile({
//       firstName: '',
//       lastName: '',
//       email: '',
//       profileWriteUp: '',
//       address: '',
//       courses: '',
//       yearsOfExperience: ''
//     });
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <input type="text" name="firstName" value={profile.firstName} onChange={handleChange} placeholder="First Name" required />
//       <input type="text" name="lastName" value={profile.lastName} onChange={handleChange} placeholder="Last Name" required />
//       <input type="email" name="email" value={profile.email} onChange={handleChange} placeholder="Email" required />
//       <textarea name="profileWriteUp" value={profile.profileWriteUp} onChange={handleChange} placeholder="Profile Write-Up" required />
//       <input type="text" name="address" value={profile.address} onChange={handleChange} placeholder="Address" required />
//       <input type="text" name="courses" value={profile.courses} onChange={handleChange} placeholder="Courses (comma separated)" required />
//       <input type="number" name="yearsOfExperience" value={profile.yearsOfExperience} onChange={handleChange} placeholder="Years of Experience" required />
//       <button type="submit">Create Profile</button>
//     </form>
//   );
// };

// export default TeacherProfileForm;


import React, { useState } from 'react';
import axios from 'axios';

const TeacherProfileForm = () => {
  const [profile, setProfile] = useState({
    firstName: '',
    lastName: '',
    email: '',
    profileWriteUp: '',
    workExperience: '',
    address: '',
    courses: '',
    yearsOfExperience: ''
  });

  const [error, setError] = useState(null);

  const handleChange = (e) => {
    setProfile({ ...profile, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const coursesArray = profile.courses.split(',').map(course => course.trim());
      const newProfile = { ...profile, courses: coursesArray };
      await axios.post('http://localhost:4000/api/createTeacherProfile', newProfile);
      setProfile({
        firstName: '',
        lastName: '',
        email: '',
        profileWriteUp: '',
        workExperience: '',
        address: '',
        courses: '',
        yearsOfExperience: ''
      });
      setError(null);
    } catch (error) {
      console.error('Error creating profile:', error);
      if (error.response) {
        // The request was made and the server responded with a status code
        // that falls out of the range of 2xx
        setError(`Server responded with status code ${error.response.status}: ${error.response.data}`);
      } else if (error.request) {
        // The request was made but no response was received
        setError('No response received from the server.');
      } else {
        // Something happened in setting up the request that triggered an Error
        setError(`Error setting up the request: ${error.message}`);
      }
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="firstName" value={profile.firstName} onChange={handleChange} placeholder="First Name" required />
      <input type="text" name="lastName" value={profile.lastName} onChange={handleChange} placeholder="Last Name" required />
      <input type="email" name="email" value={profile.email} onChange={handleChange} placeholder="Email" required />
      <textarea name="profileWriteUp" value={profile.profileWriteUp} onChange={handleChange} placeholder="Profile Write-Up" required />
      <textarea name="workExperience" value={profile.workExperience} onChange={handleChange} placeholder='workExperience' required />
      <input type="text" name="address" value={profile.address} onChange={handleChange} placeholder="Address" required />
      <input type="text" name="courses" value={profile.courses} onChange={handleChange} placeholder="Courses (comma separated)" required />
      <input type="number" name="yearsOfExperience" value={profile.yearsOfExperience} onChange={handleChange} placeholder="Years of Experience" required />
      <button type="submit">Create Profile</button>
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </form>
  );
};

export default TeacherProfileForm;
