// // import React, { useState } from 'react';
// // import axios from 'axios';

// // const TeacherProfileForm = () => {
// //   const [profile, setProfile] = useState({
// //     firstName: '',
// //     lastName: '',
// //     email: '',
// //     profileWriteUp: '',
// //     address: '',
// //     courses: '',
// //     yearsOfExperience: ''
// //   });

// //   const handleChange = (e) => {
// //     setProfile({ ...profile, [e.target.name]: e.target.value });
// //   };

// //   const handleSubmit = async (e) => {
// //     e.preventDefault();
// //     const coursesArray = profile.courses.split(',').map(course => course.trim());
// //     const newProfile = { ...profile, courses: coursesArray };
// //     await axios.post('http://localhost:4000/api/createTeacherProfile', newProfile);
// //     setProfile({
// //       firstName: '',
// //       lastName: '',
// //       email: '',
// //       profileWriteUp: '',
// //       address: '',
// //       courses: '',
// //       yearsOfExperience: ''
// //     });
// //   };

// //   return (
// //     <form onSubmit={handleSubmit}>
// //       <input type="text" name="firstName" value={profile.firstName} onChange={handleChange} placeholder="First Name" required />
// //       <input type="text" name="lastName" value={profile.lastName} onChange={handleChange} placeholder="Last Name" required />
// //       <input type="email" name="email" value={profile.email} onChange={handleChange} placeholder="Email" required />
// //       <textarea name="profileWriteUp" value={profile.profileWriteUp} onChange={handleChange} placeholder="Profile Write-Up" required />
// //       <input type="text" name="address" value={profile.address} onChange={handleChange} placeholder="Address" required />
// //       <input type="text" name="courses" value={profile.courses} onChange={handleChange} placeholder="Courses (comma separated)" required />
// //       <input type="number" name="yearsOfExperience" value={profile.yearsOfExperience} onChange={handleChange} placeholder="Years of Experience" required />
// //       <button type="submit">Create Profile</button>
// //     </form>
// //   );
// // };

// // export default TeacherProfileForm;


// import React, { useState } from 'react';
// import axios from 'axios';

// const TeacherProfileForm = () => {
//   const [profile, setProfile] = useState({
//     firstName: '',
//     lastName: '',
//     email: '',
//     profileWriteUp: '',
//     workExperience: '',
//     address: '',
//     courses: '',
//     yearsOfExperience: ''
//   });

//   const [error, setError] = useState(null);

//   const handleChange = (e) => {
//     setProfile({ ...profile, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const coursesArray = profile.courses.split(',').map(course => course.trim());
//       const newProfile = { ...profile, courses: coursesArray };
//       await axios.post('http://localhost:4000/api/createTeacherProfile', newProfile);
//       setProfile({
//         firstName: '',
//         lastName: '',
//         email: '',
//         profileWriteUp: '',
//         workExperience: '',
//         address: '',
//         courses: '',
//         yearsOfExperience: ''
//       });
//       setError(null);
//     } catch (error) {
//       console.error('Error creating profile:', error);
//       if (error.response) {
//         // The request was made and the server responded with a status code
//         // that falls out of the range of 2xx
//         setError(`Server responded with status code ${error.response.status}: ${error.response.data}`);
//       } else if (error.request) {
//         // The request was made but no response was received
//         setError('No response received from the server.');
//       } else {
//         // Something happened in setting up the request that triggered an Error
//         setError(`Error setting up the request: ${error.message}`);
//       }
//     }
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <input type="text" name="firstName" value={profile.firstName} onChange={handleChange} placeholder="First Name" required />
//       <input type="text" name="lastName" value={profile.lastName} onChange={handleChange} placeholder="Last Name" required />
//       <input type="email" name="email" value={profile.email} onChange={handleChange} placeholder="Email" required />
//       <textarea name="profileWriteUp" value={profile.profileWriteUp} onChange={handleChange} placeholder="Profile Write-Up" required />
//       <textarea name="workExperience" value={profile.workExperience} onChange={handleChange} placeholder='workExperience' required />
//       <input type="text" name="address" value={profile.address} onChange={handleChange} placeholder="Address" required />
//       <input type="text" name="courses" value={profile.courses} onChange={handleChange} placeholder="Courses (comma separated)" required />
//       <input type="number" name="yearsOfExperience" value={profile.yearsOfExperience} onChange={handleChange} placeholder="Years of Experience" required />
//       <button type="submit">Create Profile</button>
//       {error && <p style={{ color: 'red' }}>{error}</p>}
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
    })
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
    // const [teacherDetails, setTeacherDetails] = useState({
    //     name: '',
    //     certificate: '',
    //     subjects: '',
    //     bio: '',
    //     workExperience: '',
    // });

    // const handleChange = (e) => {
    //     const { name, value } = e.target;
    //     setTeacherDetails({ ...teacherDetails, [name]: value });
    // };

    // const handleSubmit = (e) => {
    //     e.preventDefault();
    //     console.log(teacherDetails);
    //     // Handle form submission logic here
    // };

    const styles = {
        container: {
            backgroundColor: '#f0fdf4',
            color: '#065f46',
            padding: '20px',
            borderRadius: '10px',
            maxWidth: '600px',
            margin: '0 auto',
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
            fontFamily: 'Arial, sans-serif',
        },
        title: {
            textAlign: 'center',
            color: '#065f46',
        },
        formGroup: {
            marginBottom: '15px',
        },
        label: {
            display: 'block',
            marginBottom: '5px',
            fontWeight: 'bold',
        },
        input: {
            width: '100%',
            padding: '10px',
            borderRadius: '5px',
            border: '1px solid #065f46',
            boxSizing: 'border-box',
        },
        textarea: {
            width: '100%',
            padding: '10px',
            borderRadius: '5px',
            border: '1px solid #065f46',
            boxSizing: 'border-box',
            height: '100px',
        },
        button: {
            display: 'block',
            width: '100%',
            padding: '10px',
            backgroundColor: '#065f46',
            color: '#fff',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer',
        },
    };

    return (
        <div style={styles.container}>
            <h2 style={styles.title}>Teacher Work Experience</h2>
            <form onSubmit={handleSubmit}>
                <div style={styles.formGroup}>
                    <label style={styles.label} htmlFor="name">First-Name</label>
                    <input
                        style={styles.input}
                        type="text"
                        id="name"
                        name="name"
                        value={profile.firstName}
                        onChange={handleChange}
                    />
                </div>

                <div style={styles.formGroup}>
                    <label style={styles.label} htmlFor="name">Last-Name</label>
                    <input
                        style={styles.input}
                        type="text"
                        id="name"
                        name="name"
                        value={profile.lastName}
                        onChange={handleChange}
                    />
                </div>
                <div style={styles.formGroup}>
                    <label style={styles.label} htmlFor="certificate">Email</label>
                    <input
                        style={styles.input}
                        type="email"
                        id="email"
                        name="email"
                        value={profile.email}
                        onChange={handleChange}
                    />
                </div>
                <div style={styles.formGroup}>
                    <label style={styles.label} htmlFor="subjects">Bio</label>
                    <textarea
                        style={styles.textarea}
                        type="text"
                        id="profile"
                        name="profile"
                        value={profile.profileWriteUp}
                        onChange={handleChange}
                    />
                </div>
                <div style={styles.formGroup}>
                    <label style={styles.label} htmlFor="bio">Work Experience</label>
                    <textarea
                        style={styles.textarea}
                        id="work experience"
                        name="work experience"
                        value={profile.workExperience}
                        onChange={handleChange}
                    />
                </div>
                <div style={styles.formGroup}>
                    <label style={styles.label} htmlFor="workExperience">Address</label>
                    <input
                        style={styles.input}
                        id="address"
                        name="address"
                        value={profile.address}
                        onChange={handleChange}
                    />
                </div>
                <div style={styles.formGroup}>
                    <label style={styles.label} htmlFor="workExperience">Courses</label>
                    <input
                        style={styles.input}
                        id="courses"
                        name="courses"
                        value={profile.courses}
                        onChange={handleChange}
                    />
                </div>
                <div style={styles.formGroup}>
                    <label style={styles.label} htmlFor="workExperience">years of Experience</label>
                    <input
                        style={styles.input}
                        id="yearsOfExperience"
                        name="years of experience"
                        value={profile.yearsOfExperience}
                        onChange={handleChange}
                    />
                </div>
                <button style={styles.button} type="submit">Submit</button>
            </form>
        </div>
    );
};

export default TeacherProfileForm;
