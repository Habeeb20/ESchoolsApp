// import React from 'react';
// import HomeNavbar from './LandingPage/essentialLanding/HomeNavbar';
// import { Link } from 'react-router-dom';
// const Comparison = () => {
//   return (
//    <>
//    <HomeNavbar />
//    <div style={styles.container}>
//       <h2 style={styles.header}>Here you are now comparing</h2>
//       <div style={styles.schoolContainer}>
//         <div style={styles.schoolBox}>
//           <div style={styles.addSchool}>
//             <p>Add school</p>
//             <span style={styles.plusIcon}>+</span>
//           </div>
//         </div>
//         <div style={styles.schoolBox}>
//           <div style={styles.addSchool}>
//             <p>Add school</p>
//             <span style={styles.plusIcon}>+</span>
//           </div>
//         </div>
//         <div style={styles.schoolBox}>
//           <div style={styles.addSchool}>
//             <p>Add school</p>
//             <span style={styles.plusIcon}>+</span>
//           </div>
//         </div>
//         <div style={styles.schoolBox}>
//           <div style={styles.addSchool}>
//             <p>Add school</p>
//             <span style={styles.plusIcon}>+</span>
//           </div>
//         </div>
//       </div>
//       <div style={styles.compareButtonContainer}>
//         <Link to='/compareschools'><button style={styles.compareButton}>Compare</button></Link>
    
//       </div>
//       <div style={styles.section}>
//         <h3>Schools in city</h3>
//         <p style={styles.links}>
//           • Schools in Lagos • Schools in Kano • Schools in Ibadan • Schools in Ondo • Schools in Zaria • Schools in Benue • Schools in Borno • Schools in Lagos • Schools in Lagos • Schools in Lagos • Schools in Lagos • Schools in Lagos • Schools in Lagos
//         </p>
//       </div>
//       <div style={styles.section}>
//         <h3>Popular search</h3>
//         <p style={styles.links}>
//           • Uniben • Uni. Ibadan • Unilag • Futa • Osusterch • AAUA • AAU • OAU • Unizik • Uni. Nig • Uniben • Uni. Ibadan • Unilag • Futa • Osusterch • AAUA • OAU • Unizik • Uni. Nig
//         </p>
//       </div>
//     </div>
//    </>
//   );
// };

// const styles = {
//   container: {
//     padding: '20px',
//     fontFamily: 'Arial, sans-serif',
//   },
//   header: {
//     fontSize: '24px',
//     fontWeight: 'bold',
//     marginBottom: '20px',
//   },
//   schoolContainer: {
//     display: 'flex',
//     justifyContent: 'space-between',
//     marginBottom: '20px',
//   },
//   schoolBox: {
//     width: '23%',
//     height: '150px',
//     border: '1px solid #ccc',
//     borderRadius: '8px',
//     display: 'flex',
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#f9f9f9',
//   },
//   addSchool: {
//     textAlign: 'center',
//     color: '#777',
//   },
//   plusIcon: {
//     fontSize: '24px',
//     color: '#777',
//   },
//   compareButtonContainer: {
//     display: 'flex',
//     justifyContent: 'center',
//     marginBottom: '30px',
//   },
//   compareButton: {
//     padding: '10px 30px',
//     fontSize: '18px',
//     backgroundColor: '#0f0',
//     color: '#fff',
//     border: '2px solid #00ff00',
//     borderRadius: '8px',
//     cursor: 'pointer',
//   },
//   section: {
//     marginBottom: '20px',
//   },
//   links: {
//     lineHeight: '1.5',
//     color: '#333',
//   },
// };

// export default Comparison;



// import React, { useState } from 'react';
// import axios from 'axios';
// import { Link } from 'react-router-dom';
// import u1 from '../assets/u18.jfif'
// import u2 from '../assets/u10.jfif'
// import u3 from '../assets/u7.jfif'


// const Comparison = () => {
//     const [school1, setSchool1] = useState('');
//     const [school2, setSchool2] = useState('');
//     const [school3, setSchool3] = useState('');
//     const [schoolData1, setSchoolData1] = useState(null);
//     const [schoolData2, setSchoolData2] = useState(null);
//     const [schoolData3, setSchoolData3] = useState(null);
//     const [error, setError] = useState('');

//     const handleSearch = async (e) => {
//         e.preventDefault();
//         setError('');
//         try {
//             // Fetch data for the first school
//             const response1 = await axios.get(`http://localhost:8000/comparison`, {
//                 params: { school: school1 },
//             });
//             setSchoolData1(response1.data);

//             // Fetch data for the second school
//             const response2 = await axios.get(`http://localhost:8000/comparison`, {
//                 params: { school: school2 },
//             });
//             setSchoolData2(response2.data);

//             const response3 = await axios.get(`http://localhost:8000/comparison`, {
//                 params: { school: school3 },
//             });
//             setSchoolData3(response3.data);
//         } catch (err) {
//             setError('One or both schools not found. Please try again.');
//         }
//     };
//     const styles = {
//         header: {
//             fontSize: '24px',
//             textAlign: 'center',
//             marginBottom: '20px',
//         },
//         form: {
//             display: 'flex',
//             flexDirection: 'column',
//             alignItems: 'center',
//             gap: '20px',
//         },
//         inputGroup: {
//             display: 'flex',
//             flexDirection: 'column',
//             alignItems: 'center',
//         },
//         input: {
//             width: '300px',
//             height: '50px',
//             border: '2px solid #ccc',
//             borderRadius: '8px',
//             padding: '10px 15px',
//             fontSize: '16px',
//             position: 'relative',
//             backgroundColor: '#f9f9f9',
//             backgroundImage: 'url("data:image/svg+xml,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 width=%2716%27 height=%2716%27 fill=%27currentColor%27 class=%27bi bi-plus-circle%27 viewBox=%270 0 16 16%27%3E%3Cpath d=%27M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14zm0 1A8 8 0 1 1 8 0a8 8 0 0 1 0 16z%27/%3E%3Cpath d=%27M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z%27/%3E%3C/svg%3E")',
//             backgroundRepeat: 'no-repeat',
//             backgroundPosition: 'right 10px center',
//             outline: 'none',
//         },
//         button: {
//             marginTop: '20px',
//             width: '200px',
//             height: '50px',
//             border: 'none',
//             borderRadius: '8px',
//             backgroundColor: '#4CAF50',
//             color: 'white',
//             fontSize: '18px',
//             cursor: 'pointer',
//             alignSelf: 'center',
//         },
//         inputWrapper: {
//             display: 'flex',
//             justifyContent: 'space-between',
//             width: '100%',
//             maxWidth: '960px',
//         },
//     };

//     return (
//         <div >
//             <h1 style={styles.header}>Compare Schools</h1>
//             <form onSubmit={handleSearch} style={styles.form}>
//                 <div style={styles.inputWrapper}>
//                     <div style={styles.inputGroup}>
//                         <input
//                             type="text"
//                             value={school1}
//                             onChange={(e) => setSchool1(e.target.value)}
//                             placeholder="Add School"
//                             style={styles.input}
//                         />
//                     </div>
//                     <div style={styles.inputGroup}>
//                         <input
//                             type="text"
//                             value={school2}
//                             onChange={(e) => setSchool2(e.target.value)}
//                             placeholder="Add School"
//                             style={styles.input}
//                         />
//                     </div>
//                     <div style={styles.inputGroup}>
//                         <input
//                             type="text"
//                             value={school3}
//                             onChange={(e) => setSchool3(e.target.value)}
//                             placeholder="Add School"
//                             style={styles.input}
//                         />
//                     </div>
//                 </div>
//                 <button type="submit" style={styles.button}>Compare</button>
//             </form>

//             {error && <p style={{color: "red"}}>{error}</p>}


//             {schoolData1 && schoolData2 && (

//                 <>
//                     <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
//                         <div style={{ width: '15%' }}>
//                             <input
//                                 type="text"
//                                 placeholder="I am looking admission in class"
//                                 style={{
//                                     width: '100%',
//                                     padding: '10px',
//                                     borderRadius: '5px',
//                                     border: '1px solid #ccc',
//                                     marginBottom: '10px',
//                                 }}
//                             />
//                             <select
//                                 style={{
//                                     width: '100%',
//                                     padding: '10px',
//                                     borderRadius: '5px',
//                                     border: '1px solid #ccc',
//                                 }}
//                             >
//                                 {/* <option value="ondo">Ondo</option> */}
//                                 {/* Add more options as needed */}
//                             </select>
//                         </div>
//                         <div style={{ display: 'flex', width: '80%', justifyContent: 'space-between' }}>
//                             <div style={{ width: '48%', border: '1px solid #ccc', borderRadius: '10px', overflow: 'hidden' }}>
//                                 <img
//                                     src={u2}
//                                     alt="School"
//                                     style={{ width: '100%', height: '150px', objectFit: 'cover' }}
//                                 />
//                                 <div style={{ padding: '10px' }}>
//                                     <h3 style={{ margin: '0', color: '#00458b' }}>{schoolData1.school}</h3>
//                                     {/* <p style={{ margin: '5px 0', color: '#666' }}>Akure, Ondo state</p> */}
//                                     <Link to='/'><button
//                                         style={{
//                                             backgroundColor: '#dc3545',
//                                             color: '#fff',
//                                             padding: '5px 10px',
//                                             border: 'none',
//                                             borderRadius: '5px',
//                                             cursor: 'pointer',
//                                         }}
//                                     >
//                                         View Detail
//                                     </button>
//                                     </Link>
//                                 </div>
//                             </div>
//                             <div style={{ width: '48%', border: '1px solid #ccc', borderRadius: '10px', overflow: 'hidden' }}>
//                                 <img
//                                     src={u1}
//                                     alt="School"
//                                     style={{ width: '100%', height: '150px', objectFit: 'cover' }}
//                                 />
//                                 <div style={{ padding: '10px' }}>
//                                     <h3 style={{ margin: '0', color: '#00458b' }}>{schoolData2.school}</h3>
//                                     {/* <p style={{ margin: '5px 0', color: '#666' }}>Akure, Ondo state</p> */}
//                                     <Link to='/'><button
//                                         style={{
//                                             backgroundColor: '#dc3545',
//                                             color: '#fff',
//                                             padding: '5px 10px',
//                                             border: 'none',
//                                             borderRadius: '5px',
//                                             cursor: 'pointer',
//                                         }}
//                                     >
//                                         View Detail
//                                     </button>
//                                     </Link>
//                                 </div>
//                             </div>

//                             <div style={{ width: '48%', border: '1px solid #ccc', borderRadius: '10px', overflow: 'hidden' }}>
//                                 <img
//                                     src={u3}
//                                     alt="School"
//                                     style={{ width: '100%', height: '150px', objectFit: 'cover' }}
//                                 />
//                                 <div style={{ padding: '10px' }}>
//                                     <h3 style={{ margin: '0', color: '#00458b' }}>{schoolData3.school}</h3>
//                                     {/* <p style={{ margin: '5px 0', color: '#666' }}>Akure, Ondo state</p> */}
//                                     <Link to='/'><button
//                                         style={{
//                                             backgroundColor: '#dc3545',
//                                             color: '#fff',
//                                             padding: '5px 10px',
//                                             border: 'none',
//                                             borderRadius: '5px',
//                                             cursor: 'pointer',
//                                         }}
//                                     >
//                                         View Detail
//                                     </button>
//                                     </Link>
//                                 </div>
//                             </div>
//                             <div
//                                 style={{
//                                     width: '48px',
//                                     height: '150px',
//                                     border: '1px dashed #ccc',
//                                     borderRadius: '10px',
//                                     display: 'flex',
//                                     alignItems: 'center',
//                                     justifyContent: 'center',
//                                     cursor: 'pointer',
//                                 }}
//                             >
//                                 <span style={{ fontSize: '24px', color: '#ccc' }}>+</span>
//                             </div>
//                         </div>
//                     </div>

//                     <div style={{ marginTop: '20px', border: '1px solid #ccc', borderRadius: '10px', overflow: 'hidden' }}>
//                         <div style={{ padding: '10px', backgroundColor: '#f8f9fa', borderBottom: '1px solid #ccc' }}>
//                             <h4 style={{ margin: '0', color: '#00458b' }}>School Info</h4>
//                         </div>
//                         <div style={{ padding: '10px' }}>
//                             <table style={{ width: '100%', borderCollapse: 'collapse' }}>
//                                 <tbody>
//                                     <tr>
//                                         <td style={{ padding: '10px', border: '1px solid #ccc', fontWeight: 'bold' }}>Admission Starting date</td>
//                                         <td style={{ padding: '10px', border: '1px solid #ccc' }}>{schoolData1.admissionStartDate}</td>
//                                         <td style={{ padding: '10px', border: '1px solid #ccc' }}>{schoolData2.admissionStartDate}</td>
//                                         <td style={{ padding: '10px', border: '1px solid #ccc' }}>{schoolData3.admissionStartDate}</td>

//                                     </tr>
//                                     <tr>
//                                         <td style={{ padding: '10px', border: '1px solid #ccc', fontWeight: 'bold' }}>Admission Ending date</td>
//                                         <td style={{ padding: '10px', border: '1px solid #ccc' }}>{schoolData1.admissionEndDate}</td>
//                                         <td style={{ padding: '10px', border: '1px solid #ccc' }}>{schoolData2.admissionEndDate}</td>
//                                         <td style={{ padding: '10px', border: '1px solid #ccc' }}>{schoolData3.admissionEndDate}</td>

//                                     </tr>
//                                     <tr>
//                                         <td style={{ padding: '10px', border: '1px solid #ccc', fontWeight: 'bold' }}>Faculties</td>
//                                         <td style={{ padding: '10px', border: '1px solid #ccc' }}>{schoolData1.faculty.join(', ')}</td>
//                                         <td style={{ padding: '10px', border: '1px solid #ccc' }}>{schoolData2.faculty.join(', ')}</td>
//                                         <td style={{ padding: '10px', border: '1px solid #ccc' }}>{schoolData3.faculty.join(', ')}</td>
//                                     </tr>
//                                     <tr>
//                                         <td style={{ padding: '10px', border: '1px solid #ccc', fontWeight: 'bold' }}>Departments</td>
//                                         <td style={{ padding: '10px', border: '1px solid #ccc' }}>{schoolData1.department.join(', ')}</td>
//                                         <td style={{ padding: '10px', border: '1px solid #ccc' }}>{schoolData2.department.join(', ')}</td>
//                                         <td style={{ padding: '10px', border: '1px solid #ccc' }}>{schoolData3.department.join(', ')}</td>

//                                     </tr>

//                                 </tbody>
//                             </table>
//                         </div>
//                     </div>

//                     <div style={{ marginTop: '20px', border: '1px solid #ccc', borderRadius: '10px', overflow: 'hidden' }}>
//                         <div style={{ padding: '10px', backgroundColor: '#f8f9fa', borderBottom: '1px solid #ccc' }}>
//                             <h4 style={{ margin: '0', color: '#00458b' }}>    More Info</h4>
//                         </div>
//                         <div style={{ padding: '10px' }}>
//                             <table style={{ width: '100%', borderCollapse: 'collapse' }}>
//                                 <tbody>
//                                     <tr>
//                                         <td style={{ padding: '10px', border: '1px solid #ccc', fontWeight: 'bold' }}>Tution fees for Indigene</td>
//                                         <td style={{ padding: '10px', border: '1px solid #ccc' }}>{schoolData1.tuitionFees?.indigene}</td>
//                                         <td style={{ padding: '10px', border: '1px solid #ccc' }}>{schoolData2.tuitionFees?.indigene}</td>
//                                         <td style={{ padding: '10px', border: '1px solid #ccc' }}>{schoolData3.tuitionFees?.indigene}</td>
//                                     </tr>
//                                     <tr>
//                                         <td style={{ padding: '10px', border: '1px solid #ccc', fontWeight: 'bold' }}>
//                                             Tution fees for non-Indigene
//                                         </td>
//                                         <td style={{ padding: '10px', border: '1px solid #ccc' }}>{schoolData1.tuitionFees?.nonIndigene}</td>
//                                         <td style={{ padding: '10px', border: '1px solid #ccc' }}>{schoolData2.tuitionFees?.nonIndigene}</td>
//                                         <td style={{ padding: '10px', border: '1px solid #ccc' }}>{schoolData3.tuitionFees?.nonIndigene}</td>
//                                     </tr>
//                                     <tr>
//                                         <td style={{ padding: '10px', border: '1px solid #ccc', fontWeight: 'bold' }}>Admission requirements</td>
//                                         <td style={{ padding: '10px', border: '1px solid #ccc' }}>{schoolData1.admissionRequirements || 'N/A'}</td>
//                                         <td style={{ padding: '10px', border: '1px solid #ccc' }}>{schoolData2.admissionRequirements || 'N/A'}</td>
//                                         <td style={{ padding: '10px', border: '1px solid #ccc' }}>{schoolData3.admissionRequirements || 'N/A'}</td>
//                                     </tr>
//                                     {/* Add more rows as needed */}
//                                 </tbody>
//                             </table>
//                         </div>
//                     </div>

//                     <div style={{ marginTop: '20px', border: '1px solid #ccc', borderRadius: '10px', overflow: 'hidden' }}>
//                         <div style={{ padding: '10px', backgroundColor: '#f8f9fa', borderBottom: '1px solid #ccc' }}>
//                             <h4 style={{ margin: '0', color: '#00458b' }}>Distance</h4>
//                         </div>
//                         <div style={{ padding: '20px', textAlign: 'center' }}>
//                             <p>Please share your location to calculate the distance</p>
//                             <button
//                                 style={{
//                                     backgroundColor: '#00458b',
//                                     color: '#fff',
//                                     padding: '10px 20px',
//                                     border: 'none',
//                                     borderRadius: '5px',
//                                     cursor: 'pointer',
//                                 }}
//                             >
//                                 Use My Current Location
//                             </button>
//                         </div>
//                     </div>
//                 </>
























//                 // <div style={styles.comparison}>
//                 //     <div style={styles.schoolColumn}>
//                 //         <h2>{schoolData1.school}</h2>
//                 //         <p>Tuition Fees(indigene): {schoolData1.tuitionFees?.indigene}</p>
//                 //         <p>Tuition Fees(nonIndigene): {schoolData1.tuitionFees?.nonIndigene}</p>
//                 //         <p>Admission Date: {schoolData1.admissionStartDate}</p>
//                 //         <p>Departments: {schoolData1.department.join(', ')}</p>
//                 //         <p>Faculties: {schoolData1.faculty.join(', ')}</p>
//                 //         <p>Admission Requirements:{schoolData1.admissionRequirements || 'N/A'}</p>
//                 //     </div>
//                 //     <div style={styles.schoolColumn}>
//                 //         <h2>{schoolData2.school}</h2>
//                 //         <p>Tuition Fees(indigene): {schoolData2.tuitionFees?.indigene}</p>
//                 //         <p>Tuition Fees(nonIndigene): {schoolData2.tuitionFees?.nonIndigene}</p>
//                 //         <p>Admission Date: {schoolData2.admissionStartDate}</p>
//                 //         <p>Departments: {schoolData2.department.join(', ')}</p>
//                 //         <p>Faculties: {schoolData2.faculty.join(', ')}</p>
//                 //         <p>Admission Requirements:{schoolData2.admissionRequirements || 'N/A'}</p>
//                 //     </div>
//                 // </div>
//             )}
//         </div>
//     );
// }

// export default Comparison






import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import u1 from '../assets/u18.jfif';
import u2 from '../assets/u10.jfif';
import u3 from '../assets/u7.jfif';
import HomeNavbar from './LandingPage/essentialLanding/HomeNavbar';

const Comparison = () => {
    const [school1, setSchool1] = useState('');
    const [school2, setSchool2] = useState('');
    const [school3, setSchool3] = useState('');
    const [schoolData1, setSchoolData1] = useState(null);
    const [schoolData2, setSchoolData2] = useState(null);
    const [schoolData3, setSchoolData3] = useState(null);
    const [error, setError] = useState('');

    const formatDate = (dateString) => {
      if (!dateString) return '';
      const options = { year: 'numeric', month: 'long', day: 'numeric' };
      const date = new Date(dateString);
      return date.toLocaleDateString(undefined, options);
  };
    const handleSearch = async (e) => {
        e.preventDefault();
        setError('');

        if (!school1 || !school2 || !school3) {
            setError('Please enter all three schools to compare.');
            return;
        }

        try {
            // Fetch data for the first school
            const response1 = await axios.get(`http://localhost:4000/comparison`, {
                params: { school: school1 },
            });
            setSchoolData1(response1.data);

            // Fetch data for the second school
            const response2 = await axios.get(`http://localhost:4000/comparison`, {
                params: { school: school2 },
            });
            setSchoolData2(response2.data);

            // Fetch data for the third school
            const response3 = await axios.get(`http://localhost:4000/comparison`, {
                params: { school: school3 },
            });
            setSchoolData3(response3.data);
        } catch (err) {
            setError('One or more schools not found. Please try again.');
        }
    };

    const styles = {
        header: {
            fontSize: '24px',
            textAlign: 'center',
            marginBottom: '20px',
        },
        form: {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '20px',
        },
        inputGroup: {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
        },
        input: {
            width: '300px',
            height: '50px',
            border: '2px solid #ccc',
            borderRadius: '8px',
            padding: '10px 15px',
            fontSize: '16px',
            position: 'relative',
            backgroundColor: '#f9f9f9',
            backgroundImage: 'url("data:image/svg+xml,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 width=%2716%27 height=%2716%27 fill=%27currentColor%27 class=%27bi bi-plus-circle%27 viewBox=%270 0 16 16%27%3E%3Cpath d=%27M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14zm0 1A8 8 0 1 1 8 0a8 8 0 0 1 0 16z%27/%3E%3Cpath d=%27M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z%27/%3E%3C/svg%3E")',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'right 10px center',
            outline: 'none',
        },
        button: {
            marginTop: '20px',
            width: '200px',
            height: '50px',
            border: 'none',
            borderRadius: '8px',
            backgroundColor: '#4CAF50',
            color: 'white',
            fontSize: '18px',
            cursor: 'pointer',
            alignSelf: 'center',
        },
        inputWrapper: {
            display: 'flex',
            justifyContent: 'space-between',
            width: '100%',
            maxWidth: '960px',
        },
        comparisonContainer: {
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-start',
            marginTop: '20px',
            flexWrap: 'wrap',
        },
        card: {
            width: '30%',
            border: '1px solid #ccc',
            borderRadius: '10px',
            overflow: 'hidden',
            marginBottom: '20px',
        },
        cardImg: {
            width: '100%',
            height: '150px',
            objectFit: 'cover',
        },
        cardBody: {
            padding: '10px',
        },
        cardTitle: {
            margin: '0',
            color: '#00458b',
        },
        viewDetailButton: {
            backgroundColor: '#dc3545',
            color: '#fff',
            padding: '5px 10px',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer',
        },
        infoTable: {
            width: '100%',
            borderCollapse: 'collapse',
            marginTop: '20px',
            border: '1px solid #ccc',
            borderRadius: '10px',
        },
        infoTableHeader: {
            padding: '10px',
            backgroundColor: '#f8f9fa',
            borderBottom: '1px solid #ccc',
        },
        infoTableCell: {
            padding: '10px',
            border: '1px solid #ccc',
        },
        infoTableCellBold: {
            padding: '10px',
            border: '1px solid #ccc',
            fontWeight: 'bold',
        },
        addSchoolContainer: {
            width: '48px',
            height: '150px',
            border: '1px dashed #ccc',
            borderRadius: '10px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
        },
        addSchoolText: {
            fontSize: '24px',
            color: '#ccc',
        },
    };

    return (
        <div>
          <HomeNavbar/>
            <h1 style={styles.header}>Compare Schools</h1>
            <form onSubmit={handleSearch} style={styles.form}>
                <div style={styles.inputWrapper}>
                    <div style={styles.inputGroup}>
                        <input
                            type="text"
                            value={school1}
                            onChange={(e) => setSchool1(e.target.value)}
                            placeholder="Add School"
                            style={styles.input}
                        />
                    </div>
                    <div style={styles.inputGroup}>
                        <input
                            type="text"
                            value={school2}
                            onChange={(e) => setSchool2(e.target.value)}
                            placeholder="Add School"
                            style={styles.input}
                        />
                    </div>
                    <div style={styles.inputGroup}>
                        <input
                            type="text"
                            value={school3}
                            onChange={(e) => setSchool3(e.target.value)}
                            placeholder="Add School"
                            style={styles.input}
                        />
                    </div>
                </div>
                <button type="submit" style={styles.button}>Compare</button>
            </form>

            {error && <p style={{ color: 'red' }}>{error}</p>}

            {(schoolData1 || schoolData2 || schoolData3) && (
                <div style={styles.comparisonContainer}>
                    {schoolData1 && (
                        <div style={styles.card}>
                            <img src={u1} alt="School 1" style={styles.cardImg} />
                            <div style={styles.cardBody}>
                                <h3 style={styles.cardTitle}>{schoolData1.school}</h3>
                                <table style={styles.infoTable}>
                                    <thead>
                                        <tr>
                                            <th style={styles.infoTableHeader}>Info</th>
                                            <th style={styles.infoTableHeader}>Details</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td style={styles.infoTableCellBold}>Admission Date</td>
                                            <td style={styles.infoTableCell}>{formatDate(schoolData1.admissionStartDate)}</td>
                                        </tr>
                                        <tr>
                                            <td style={styles.infoTableCellBold}>Admission End Date</td>
                                            <td style={styles.infoTableCell}>{formatDate(schoolData1.admissionEndDate)}</td>
                                        </tr>
                                        <tr>
                                            <td style={styles.infoTableCellBold}>Admission Requirement</td>
                                            <td style={styles.infoTableCell}>{schoolData1.admissionRequirements}</td>
                                        </tr>
                                        <tr>
                                            <td style={styles.infoTableCellBold}>Faculties</td>
                                            <td style={styles.infoTableCell}>{schoolData1.faculty ? schoolData1.faculty.join(', ') : 'N/A'}</td>
                                        </tr>
                                        <tr>
                                            <td style={styles.infoTableCellBold}>Departments</td>
                                            <td style={styles.infoTableCell}>{schoolData1.department ? schoolData1.department.join(', ') : 'N/A'}</td>
                                        </tr>
                                    </tbody>
                                </table>
                                <Link to="/admission">
                                    <button style={styles.viewDetailButton}>View Details</button>
                                </Link>
                            </div>
                        </div>
                    )}

                    {schoolData2 && (
                        <div style={styles.card}>
                            <img src={u2} alt="School 2" style={styles.cardImg} />
                            <div style={styles.cardBody}>
                                <h3 style={styles.cardTitle}>{schoolData2.school}</h3>
                                <table style={styles.infoTable}>
                                    <thead>
                                        <tr>
                                            <th style={styles.infoTableHeader}>Info</th>
                                            <th style={styles.infoTableHeader}>Details</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                    <tr>
                                            <td style={styles.infoTableCellBold}>Admission Date</td>
                                            <td style={styles.infoTableCell}>{formatDate(schoolData2.admissionStartDate)}</td>
                                        </tr>
                                        <tr>
                                            <td style={styles.infoTableCellBold}>Admission End Date</td>
                                            <td style={styles.infoTableCell}>{formatDate(schoolData2.admissionEndDate)}</td>
                                        </tr>
                                        <tr>
                                            <td style={styles.infoTableCellBold}>Admission Requirement</td>
                                            <td style={styles.infoTableCell}>{schoolData2.admissionRequirements}</td>
                                        </tr>
                                        <tr>
                                            <td style={styles.infoTableCellBold}>Faculties</td>
                                            <td style={styles.infoTableCell}>{schoolData2.faculty ? schoolData2.faculty.join(', ') : 'N/A'}</td>
                                        </tr>
                                        <tr>
                                            <td style={styles.infoTableCellBold}>Departments</td>
                                            <td style={styles.infoTableCell}>{schoolData2.department ? schoolData2.department.join(', ') : 'N/A'}</td>
                                        </tr>
                                    </tbody>
                                </table>
                                <Link to="/admission">
                                    <button style={styles.viewDetailButton}>View Details</button>
                                </Link>
                            </div>
                        </div>
                    )}

                    {schoolData3 && (
                        <div style={styles.card}>
                            <img src={u3} alt="School 3" style={styles.cardImg} />
                            <div style={styles.cardBody}>
                                <h3 style={styles.cardTitle}>{schoolData3.school}</h3>
                                <table style={styles.infoTable}>
                                    <thead>
                                        <tr>
                                            <th style={styles.infoTableHeader}>Info</th>
                                            <th style={styles.infoTableHeader}>Details</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                    <tr>
                                            <td style={styles.infoTableCellBold}>Admission Date</td>
                                            <td style={styles.infoTableCell}>{formatDate(schoolData3.admissionStartDate)}</td>
                                        </tr>
                                        <tr>
                                            <td style={styles.infoTableCellBold}>Admission End Date</td>
                                            <td style={styles.infoTableCell}>{formatDate(schoolData3.admissionEndDate)}</td>
                                        </tr>
                                        <tr>
                                            <td style={styles.infoTableCellBold}>Admission Requirement</td>
                                            <td style={styles.infoTableCell}>{schoolData3.admissionRequirements}</td>
                                        </tr>
                                        <tr>
                                            <td style={styles.infoTableCellBold}>Faculties</td>
                                            <td style={styles.infoTableCell}>{schoolData3.faculty ? schoolData3.faculty.join(', ') : 'N/A'}</td>
                                        </tr>
                                        <tr>
                                            <td style={styles.infoTableCellBold}>Departments</td>
                                            <td style={styles.infoTableCell}>{schoolData3.department ? schoolData3.department.join(', ') : 'N/A'}</td>
                                        </tr>
                                    </tbody>
                                </table>
                                <Link to="/admission">
                                    <button style={styles.viewDetailButton}>View Details</button>
                                </Link>
                            </div>
                        </div>
                    )}
                </div>
            )}
        </div>
    );
};

export default Comparison;



