
// import Navbar from '../../components/LandingPage/Navbar'
// import { Link } from "react-router-dom";

// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// const TeacherLandingPage = () => {
//   const [profiles, setProfiles] = useState([]);

//   useEffect(() => {
//     const fetchProfiles = async () => {
//       const res = await axios.get('http://localhost:4000/api/getAllteachersProfile');
//       setProfiles(res.data);
//     };
//     fetchProfiles();
//   }, []);

//   return (
//     <div>
//       <Navbar />
//       <h1><Link to="/teacherdetaildashboard">Landing Page</Link></h1>
//       {profiles.map(profile => (
//         <div key={profile._id}>
//           <h2>{profile.firstName} {profile.lastName}</h2>
//           <p>{profile.profileWriteUp}</p>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default TeacherLandingPage;



// import React, { useState } from 'react';

// const TeacherLandingPage = () => {
//     const [teacherDetails, setTeacherDetails] = useState({
//         name: '',
//         certificate: '',
//         subjects: '',
//         bio: '',
//         workExperience: '',
//     });

//     const handleChange = (e) => {
//         const { name, value } = e.target;
//         setTeacherDetails({ ...teacherDetails, [name]: value });
//     };

//     const handleSubmit = (e) => {
//         e.preventDefault();
//         console.log(teacherDetails);
//         // Handle form submission logic here
//     };

//     const styles = {
//         container: {
//             backgroundColor: '#f0fdf4',
//             color: '#065f46',
//             padding: '20px',
//             borderRadius: '10px',
//             maxWidth: '600px',
//             margin: '0 auto',
//             boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
//             fontFamily: 'Arial, sans-serif',
//         },
//         title: {
//             textAlign: 'center',
//             color: '#065f46',
//         },
//         formGroup: {
//             marginBottom: '15px',
//         },
//         label: {
//             display: 'block',
//             marginBottom: '5px',
//             fontWeight: 'bold',
//         },
//         input: {
//             width: '100%',
//             padding: '10px',
//             borderRadius: '5px',
//             border: '1px solid #065f46',
//             boxSizing: 'border-box',
//         },
//         textarea: {
//             width: '100%',
//             padding: '10px',
//             borderRadius: '5px',
//             border: '1px solid #065f46',
//             boxSizing: 'border-box',
//             height: '100px',
//         },
//         button: {
//             display: 'block',
//             width: '100%',
//             padding: '10px',
//             backgroundColor: '#065f46',
//             color: '#fff',
//             border: 'none',
//             borderRadius: '5px',
//             cursor: 'pointer',
//         },
//     };

//     return (
//         <div style={styles.container}>
//             <h2 style={styles.title}>Teacher Work Experience</h2>
//             <form onSubmit={handleSubmit}>
//                 <div style={styles.formGroup}>
//                     <label style={styles.label} htmlFor="name">Name</label>
//                     <input
//                         style={styles.input}
//                         type="text"
//                         id="name"
//                         name="name"
//                         value={teacherDetails.name}
//                         onChange={handleChange}
//                     />
//                 </div>
//                 <div style={styles.formGroup}>
//                     <label style={styles.label} htmlFor="certificate">Certificate</label>
//                     <input
//                         style={styles.input}
//                         type="text"
//                         id="certificate"
//                         name="certificate"
//                         value={teacherDetails.certificate}
//                         onChange={handleChange}
//                     />
//                 </div>
//                 <div style={styles.formGroup}>
//                     <label style={styles.label} htmlFor="subjects">Subject Specifications</label>
//                     <input
//                         style={styles.input}
//                         type="text"
//                         id="subjects"
//                         name="subjects"
//                         value={teacherDetails.subjects}
//                         onChange={handleChange}
//                     />
//                 </div>
//                 <div style={styles.formGroup}>
//                     <label style={styles.label} htmlFor="bio">Bio</label>
//                     <textarea
//                         style={styles.textarea}
//                         id="bio"
//                         name="bio"
//                         value={teacherDetails.bio}
//                         onChange={handleChange}
//                     />
//                 </div>
//                 <div style={styles.formGroup}>
//                     <label style={styles.label} htmlFor="workExperience">Work Experience</label>
//                     <textarea
//                         style={styles.textarea}
//                         id="workExperience"
//                         name="workExperience"
//                         value={teacherDetails.workExperience}
//                         onChange={handleChange}
//                     />
//                 </div>
//                 <button style={styles.button} type="submit">Submit</button>
//             </form>
//         </div>
//     );
// };

// export default TeacherLandingPage;


// import React, { useState } from 'react';

// const TeacherLandingPage = () => {
//     const [experiences, setExperiences] = useState([
//         { company: '', position: '', startYear: '', endYear: '', country: '', city: '', description: '' },
//     ]);

//     const handleChange = (index, e) => {
//         const { name, value } = e.target;
//         const newExperiences = [...experiences];
//         newExperiences[index][name] = value;
//         setExperiences(newExperiences);
//     };

//     const addExperience = () => {
//         setExperiences([...experiences, { company: '', position: '', startYear: '', endYear: '', country: '', city: '', description: '' }]);
//     };

//     const handleSubmit = (e) => {
//         e.preventDefault();
//         console.log(experiences);
//         // Handle form submission logic here
//     };

//     const styles = {
//         container: {
//             backgroundColor: '#f0fdf4',
//             color: '#065f46',
//             padding: '20px',
//             borderRadius: '10px',
//             maxWidth: '800px',
//             margin: '0 auto',
//             boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
//             fontFamily: 'Arial, sans-serif',
//         },
//         title: {
//             textAlign: 'center',
//             color: '#065f46',
//         },
//         formGroup: {
//             marginBottom: '15px',
//         },
//         label: {
//             display: 'block',
//             marginBottom: '5px',
//             fontWeight: 'bold',
//         },
//         input: {
//             width: '100%',
//             padding: '10px',
//             borderRadius: '5px',
//             border: '1px solid #065f46',
//             boxSizing: 'border-box',
//             marginBottom: '10px',
//         },
//         textarea: {
//             width: '100%',
//             padding: '10px',
//             borderRadius: '5px',
//             border: '1px solid #065f46',
//             boxSizing: 'border-box',
//             height: '100px',
//             marginBottom: '10px',
//         },
//         button: {
//             display: 'block',
//             width: '100%',
//             padding: '10px',
//             backgroundColor: '#065f46',
//             color: '#fff',
//             border: 'none',
//             borderRadius: '5px',
//             cursor: 'pointer',
//             marginBottom: '10px',
//         },
//         addButton: {
//             backgroundColor: '#34d399',
//             marginBottom: '20px',
//         },
//         experienceCard: {
//             border: '2px solid #10b981',
//             borderRadius: '5px',
//             padding: '15px',
//             marginBottom: '20px',
//             position: 'relative',
//         },
//     };

//     return (
//         <div style={styles.container}>
//             <h2 style={styles.title}>Teacher Work Experience</h2>
//             <form onSubmit={handleSubmit}>
//                 {experiences.map((experience, index) => (
//                     <div key={index} style={styles.experienceCard}>
//                         <div style={styles.formGroup}>
//                             <label style={styles.label} htmlFor={`company-${index}`}>Company</label>
//                             <input
//                                 style={styles.input}
//                                 type="text"
//                                 id={`company-${index}`}
//                                 name="company"
//                                 value={experience.company}
//                                 onChange={(e) => handleChange(index, e)}
//                             />
//                         </div>
//                         <div style={styles.formGroup}>
//                             <label style={styles.label} htmlFor={`position-${index}`}>Position</label>
//                             <input
//                                 style={styles.input}
//                                 type="text"
//                                 id={`position-${index}`}
//                                 name="position"
//                                 value={experience.position}
//                                 onChange={(e) => handleChange(index, e)}
//                             />
//                         </div>
//                         <div style={{ display: 'flex', gap: '10px' }}>
//                             <div style={{ ...styles.formGroup, flex: 1 }}>
//                                 <label style={styles.label} htmlFor={`startYear-${index}`}>Start Year</label>
//                                 <input
//                                     style={styles.input}
//                                     type="text"
//                                     id={`startYear-${index}`}
//                                     name="startYear"
//                                     value={experience.startYear}
//                                     onChange={(e) => handleChange(index, e)}
//                                 />
//                             </div>
//                             <div style={{ ...styles.formGroup, flex: 1 }}>
//                                 <label style={styles.label} htmlFor={`endYear-${index}`}>End Year</label>
//                                 <input
//                                     style={styles.input}
//                                     type="text"
//                                     id={`endYear-${index}`}
//                                     name="endYear"
//                                     value={experience.endYear}
//                                     onChange={(e) => handleChange(index, e)}
//                                 />
//                             </div>
//                         </div>
//                         <div style={styles.formGroup}>
//                             <label style={styles.label} htmlFor={`country-${index}`}>Country</label>
//                             <input
//                                 style={styles.input}
//                                 type="text"
//                                 id={`country-${index}`}
//                                 name="country"
//                                 value={experience.country}
//                                 onChange={(e) => handleChange(index, e)}
//                             />
//                         </div>
//                         <div style={styles.formGroup}>
//                             <label style={styles.label} htmlFor={`city-${index}`}>City</label>
//                             <input
//                                 style={styles.input}
//                                 type="text"
//                                 id={`city-${index}`}
//                                 name="city"
//                                 value={experience.city}
//                                 onChange={(e) => handleChange(index, e)}
//                             />
//                         </div>
//                         <div style={styles.formGroup}>
//                             <label style={styles.label} htmlFor={`description-${index}`}>Job Description</label>
//                             <textarea
//                                 style={styles.textarea}
//                                 id={`description-${index}`}
//                                 name="description"
//                                 value={experience.description}
//                                 onChange={(e) => handleChange(index, e)}
//                             />
//                         </div>
//                     </div>
//                 ))}
//                 <button type="button" style={{ ...styles.button, ...styles.addButton }} onClick={addExperience}>
//                     Add More Experience
//                 </button>
//                 <button type="submit" style={styles.button}>
//                     Submit
//                 </button>
//             </form>
//         </div>
//     );
// };

// export default TeacherLandingPage;


import React, { useState } from 'react';
import Navbar from '../../components/LandingPage/Navbar';
import Footer from '../../components/BookEssential/Footer';

const TeacherLandingPage = () => {
    const [teacher, setTeacher] = useState({
        name: 'Mr John James',
        institution: 'Valencia Schools',
        role: 'Teacher',
        specialization: 'Physics, Geology, Chemistry',
        experience: '3 years experience',
        bio: `What is needed to professionalize the supply chain workforce?\n
        Commitment from all stakeholders around the shared vision of professionalization is needed to meet the Sustainable Development Goals and achieve universal health coverage.\n
        Donor agencies should commit to systematic and coordinated multiyear investments to develop and strengthen the health supply chain workforce. They should work alongside educational institutions to increase access to pre-service educational programs, which will build a pool of qualified health supply chain professionals. At the same time, investments should contribute to the expansion of employment and career development opportunities, which include internship and apprenticeship programs, and mentorship opportunities for new entrants.\n
        All these efforts will contribute to rejuvenating the perceptions of a career in health SCM.\n
        Get in touch with PtD to learn about how you can help to professionalize the health supply chain workforce.\n
        This opinion piece has been co-authored by.;
    `,
        courses: ['Mathematics', 'Physics', 'chemistry', 'Mathematics', 'Mathematics', 'Mathematics', 'Mathematics', 'Mathematics'],
    });
    const [experiences, setExperiences] = useState([
      { company: '', position: '', startYear: '', endYear: '', country: '', city: '', description: '' },
  ]);

    const [newCourse, setNewCourse] = useState('');
    const [experienceDetails, setExperienceDetails] = useState(`What is needed to professionalize the supply chain workforce?\n
    Commitment from all stakeholders around the shared vision of professionalization is needed to meet the Sustainable Development Goals and achieve universal health coverage.\n
    Donor agencies should commit to systematic and coordinated multiyear investments to develop and strengthen the health supply chain workforce. They should work alongside educational institutions to increase access to pre-service educational programs, which will build a pool of qualified health supply chain professionals. At the same time, investments should contribute to the expansion of employment and career development opportunities, which include internship and apprenticeship programs, and mentorship opportunities for new entrants.\n
    All these efforts will contribute to rejuvenating the perceptions of a career in health SCM.\n
    Get in touch with PtD to learn about how you can help to professionalize the health supply chain workforce.\n
    This opinion piece has been co-authored by:\n
    Dominique Zwinkels, executive manager of PtD; Rebecca Alban, senior manager of Health Systems at VillageReach; Jonathan Moody, communications and advocacy officer for PtD; and Amanda Pain, senior manager of communications at VillageReach.`);

    const handleCourseChange = (e) => {
        setNewCourse(e.target.value);
    };

    const handleAddCourse = () => {
        setTeacher(prevState => ({
            ...prevState,
            courses: [...prevState.courses, newCourse]
        }));
        setNewCourse('');
    };
    const handleChange = (index, e) => {
      const { name, value } = e.target;
      const newExperiences = [...experiences];
      newExperiences[index][name] = value;
      setExperiences(newExperiences);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(experiences);
    // Handle form submission logic here
};
  const addExperience = () => {
    setExperiences([...experiences, { company: '', position: '', startYear: '', endYear: '', country: '', city: '', description: '' }]);
};


    const styles = {
        container: {
            backgroundColor: '#f0fdf4',
            color: '#065f46',
            padding: '20px',
            borderRadius: '10px',
            maxWidth: '800px',
            margin: '0 auto',
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
            fontFamily: 'Arial, sans-serif',
        },
        header: {
            textAlign: 'center',
            marginBottom: '20px',
        },
        name: {
            fontSize: '2em',
            fontWeight: 'bold',
        },
        tag: {
            display: 'inline-block',
            backgroundColor: '#e0f7ea',
            color: '#065f46',
            padding: '5px 10px',
            borderRadius: '15px',
            marginRight: '10px',
            marginBottom: '10px',
        },
        section: {
            marginBottom: '20px',
        },
        bio: {
            backgroundColor: '#fff',
            padding: '10px',
            borderRadius: '5px',
            boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
            marginBottom: '20px',
        },
        courses: {
            backgroundColor: '#fff',
            padding: '10px',
            borderRadius: '5px',
            boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
            marginBottom: '20px',
        },
        textarea: {
            width: '100%',
            padding: '10px',
            borderRadius: '5px',
            border: '1px solid #065f46',
            boxSizing: 'border-box',
            height: '200px',
        },
        input: {
            width: '100%',
            padding: '10px',
            borderRadius: '5px',
            border: '1px solid #065f46',
            boxSizing: 'border-box',
            marginBottom: '10px',
        },
        addButton: {
            display: 'inline-block',
            padding: '10px 20px',
            backgroundColor: '#34d399',
            color: '#fff',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer',
            marginTop: '10px',
        },
        photoUpload: {
            width: '100%',
            height: '200px',
            border: '2px dashed #065f46',
            borderRadius: '5px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            cursor: 'pointer',
            marginBottom: '20px',
        },
        container: {
          backgroundColor: '#f0fdf4',
          color: '#065f46',
          padding: '20px',
          borderRadius: '10px',
          maxWidth: '800px',
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
          marginBottom: '10px',
      },
      textarea: {
          width: '100%',
          padding: '10px',
          borderRadius: '5px',
          border: '1px solid #065f46',
          boxSizing: 'border-box',
          height: '100px',
          marginBottom: '10px',
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
          marginBottom: '10px',
      },
      addButton: {
          backgroundColor: '#34d399',
          marginBottom: '20px',
      },
      experienceCard: {
          border: '2px solid #10b981',
          borderRadius: '5px',
          padding: '15px',
          marginBottom: '20px',
          position: 'relative',
      },




      appContainer: {
        fontFamily: 'Poppins, sans-serif',
        color: '#010101',
        backgroundColor: '#f3f3f3',
      },
      header: {
        padding: '20px',
        backgroundColor: '#fff',
        marginBottom: '20px',
      },
      headerTitle: {
        fontSize: '24px',
        marginBottom: '10px',
        color: '#28a745',
      },
      comment: {
        backgroundColor: '#fff',
        padding: '20px',
        borderRadius: '5px',
        marginBottom: '20px',
      },
      author: {
        fontWeight: 'bold',
        color: '#28a745',
      },
      related: {
        padding: '20px',
        backgroundColor: '#fff',
        marginBottom: '20px',
      },
      relatedTitle: {
        fontSize: '20px',
        marginBottom: '10px',
        color: '#28a745',
      },
      profiles: {
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
        gap: '20px',
        padding: '20px',
      },
      profileCard: {
        backgroundColor: '#fff',
        padding: '20px',
        borderRadius: '5px',
        textAlign: 'center',
      },
      experience: {
        marginBottom: '5px',
        color: '#28a745',
      },
      rating: {
        marginBottom: '5px',
        color: '#28a745',
      },
      specialization: {
        color: '#28a745',
      },
      footer: {
        backgroundColor: '#fff',
        padding: '20px',
        textAlign: 'center',
      },
      subscription: {
        marginBottom: '20px',
      },
      input: {
        marginBottom: '10px',
        padding: '10px',
        borderRadius: '5px',
        border: '1px solid #28a745',
      },
      button: {
        display: 'block',
        margin: '0 auto',
        padding: '10px 20px',
        backgroundColor: '#28a745',
        color: '#fff',
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer',
      },
      privacy: {
        fontSize: '12px',
        color: '#717171',
      },
      quickLinks: {
        marginBottom: '20px',
      },
      list: {
        listStyle: 'none',
        padding: '0',
      },
      socialLinks: {
        marginBottom: '20px',
      },
      socialLink: {
        display: 'inline-block',
        marginRight: '10px',
        color: '#28a745',
      },
    };

    return (
      <>
      <Navbar />
        <div style={styles.container}>
 
            <div style={styles.header}>
                <div style={styles.name}>{teacher.name}</div>
                <div style={styles.tag}>{teacher.institution}</div>
                <div style={styles.tag}>{teacher.role}</div>
                <div style={styles.tag}>Specialization: {teacher.specialization}</div>
                <div style={styles.tag}>{teacher.experience}</div>
            </div>
            <div style={styles.section}>
                <div style={styles.bio}>
                    <p>{teacher.bio}</p>
                </div>
                <div style={styles.courses}>
                    <h3>Courses</h3>
                    <div>
                        {teacher.courses.map((course, index) => (
                            <span key={index} style={styles.tag}>{course}</span>
                        ))}
                    </div>
                    <input
                        type="text"
                        value={newCourse}
                        onChange={handleCourseChange}
                        placeholder="Add new course"
                        style={styles.input}
                    />
                    <button style={styles.addButton} onClick={handleAddCourse}>+ Add</button>
                </div>
                <div>
                    <textarea
                        value={experienceDetails}
                        onChange={(e) => setExperienceDetails(e.target.value)}
                        style={styles.textarea}
                    />
                </div>
                <div style={styles.photoUpload}>
                    <span>Upload photo</span>
                </div>
            </div>


            <h2 style={styles.title}>Teacher Work Experience</h2>
            <form onSubmit={handleSubmit}>
                {experiences.map((experience, index) => (
                    <div key={index} style={styles.experienceCard}>
                        <div style={styles.formGroup}>
                            <label style={styles.label} htmlFor={`company-${index}`}>Company</label>
                            <input
                                style={styles.input}
                                type="text"
                                id={`company-${index}`}
                                name="company"
                                value={experience.company}
                                onChange={(e) => handleChange(index, e)}
                            />
                        </div>
                        <div style={styles.formGroup}>
                            <label style={styles.label} htmlFor={`position-${index}`}>Position</label>
                            <input
                                style={styles.input}
                                type="text"
                                id={`position-${index}`}
                                name="position"
                                value={experience.position}
                                onChange={(e) => handleChange(index, e)}
                            />
                        </div>
                        <div style={{ display: 'flex', gap: '10px' }}>
                            <div style={{ ...styles.formGroup, flex: 1 }}>
                                <label style={styles.label} htmlFor={`startYear-${index}`}>Start Year</label>
                                <input
                                    style={styles.input}
                                    type="text"
                                    id={`startYear-${index}`}
                                    name="startYear"
                                    value={experience.startYear}
                                    onChange={(e) => handleChange(index, e)}
                                />
                            </div>
                            <div style={{ ...styles.formGroup, flex: 1 }}>
                                <label style={styles.label} htmlFor={`endYear-${index}`}>End Year</label>
                                <input
                                    style={styles.input}
                                    type="text"
                                    id={`endYear-${index}`}
                                    name="endYear"
                                    value={experience.endYear}
                                    onChange={(e) => handleChange(index, e)}
                                />
                            </div>
                        </div>
                        <div style={styles.formGroup}>
                            <label style={styles.label} htmlFor={`country-${index}`}>Country</label>
                            <input
                                style={styles.input}
                                type="text"
                                id={`country-${index}`}
                                name="country"
                                value={experience.country}
                                onChange={(e) => handleChange(index, e)}
                            />
                        </div>
                        <div style={styles.formGroup}>
                            <label style={styles.label} htmlFor={`city-${index}`}>City</label>
                            <input
                                style={styles.input}
                                type="text"
                                id={`city-${index}`}
                                name="city"
                                value={experience.city}
                                onChange={(e) => handleChange(index, e)}
                            />
                        </div>
                        <div style={styles.formGroup}>
                            <label style={styles.label} htmlFor={`description-${index}`}>Job Description</label>
                            <textarea
                                style={styles.textarea}
                                id={`description-${index}`}
                                name="description"
                                value={experience.description}
                                onChange={(e) => handleChange(index, e)}
                            />
                        </div>
                    </div>
                ))}
                <button type="button" style={{ ...styles.button, ...styles.addButton }} onClick={addExperience}>
                    Add More Experience
                </button>
                <button type="submit" style={styles.button}>
                    Submit
                </button>
            </form>
            <div style={styles.appContainer}>
      <header style={styles.header}>
        <h1 style={styles.headerTitle}>Drop a comment</h1>
        <div style={styles.comment}>
          <p>
            Atxlhceg has enjoyed care rare in low- and middle-income countries, where SCM is often an afterthought. Pharmacists and clinical staff are frequently required to perform supply chain functions despite lacking training, qualifications, or expertise. This cost of this skills gap is
          </p>
          <p style={styles.author}>James Johnson</p>
        </div>
      </header>
      
      <section style={styles.related}>
        <h2 style={styles.relatedTitle}>Related</h2>
        <div style={styles.comment}>
          <p>
            Atxlhceg has enjoyed care rare in low- and middle-income countries, where SCM is often an afterthought. Pharmacists and clinical staff are frequently required to perform supply chain functions despite lacking training, qualifications, or expertise. This cost of this skills gap is
          </p>
          <p style={styles.author}>James Johnson</p>
        </div>
      </section>
      
      <section style={styles.profiles}>
        {[...Array(8)].map((_, index) => (
          <div key={index} style={styles.profileCard}>
            <h3>James Johnson</h3>
            <p style={styles.experience}>3 years experience</p>
            <p style={styles.rating}>⭐⭐⭐⭐⭐ 4.3/5</p>
            <p style={styles.specialization}>Specialization: Physics</p>
          </div>
        ))}
      </section>

      <footer style={styles.footer}>
        <div style={styles.subscription}>
          <p>You are 90% MORE likely to get the best deals as a Student by subscribing</p>
          <input type="email" placeholder="Enter your email" style={styles.input}/>
          <button style={styles.button}>Sign Up</button>
          <p style={styles.privacy}>
            Your privacy is important to us, so we'll never spam you or share your info with third parties. Take a look at our privacy policy. You can unsubscribe at any time.
          </p>
        {/* </div>
        <div style={styles.quickLinks}>
          <h3>Quick Links</h3>
          <ul style={styles.list}>
            <li>Corporate Info</li>
            <li>Accessibility</li>
            <li>Jobs</li>
            <li>Ad Choices</li>
            <li>Privacy Policy</li>
          </ul>
        </div>
        <div style={styles.socialLinks}>
          <h3>Follow Us</h3>
          <div>
            <a href="#" style={styles.socialLink}>Twitter</a>
            <a href="#" style={styles.socialLink}>WhatsApp</a>
            <a href="#" style={styles.socialLink}>Instagram</a>
            <a href="#" style={styles.socialLink}>Facebook</a>
          </div>
        </div> */}
        </div>
      
      </footer>
    </div>


        </div>
        <Footer />
        </>
    );
    
};

export default TeacherLandingPage;
