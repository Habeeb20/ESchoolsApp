// import React, { useState, useEffect } from 'react';
// import { Link } from 'react-router-dom';
// import HomeNavbar from '../LandingPage/essentialLanding/HomeNavbar';
// import { Pie } from 'react-chartjs-2';
// import 'chart.js/auto'; // Required for chartjs


// const TeacherList = () => {
//   const [teachers, setTeachers] = useState([]);
//   const [email, setEmail] = useState([]);
//   const [teacherCount, setTeacherCount] = useState(0);

//   useEffect(() => {
//     const fetchTeachers = async () => {
//       try {
//         const response = await fetch('http://localhost:4000/api/teacherprofile/teachers');
//         const data = await response.json();
//         setTeachers(data);
//         setTeacherCount(data.length);
//       } catch (error) {
//         console.error('Error fetching schools:', error);
//       }
//     };
//     fetchTeachers();
//   }, []);

//   useEffect(() => {
//     const fetchUserProfile = async () => {
//       try {
//         const response = await fetch('http://localhost:4000/api/teacherprofile/profile', {
//           headers: {
//             Authorization: `Bearer ${localStorage.getItem('token')}`,
//           },
//         });
//         const data = await response.json();
//         setEmail(data.email);
//       } catch (error) {
//         console.error('Error fetching user profile:', error);
//       }
//     };
//     fetchUserProfile();
//   }, []);

//   const totalTeachers = 100; // Total number of potential teachers (for percentage calculation)
//   const percentageOfTeachers = Math.round((teacherCount / totalTeachers) * 100);

//   const getGradeData = (grade) => {
//     switch (grade) {
//       case 'first class':
//         return { label: 'Excellent', value: 40, color: '#4CAF50' }; // Green
//       case 'second class upper':
//         return { label: 'Very Good', value: 30, color: '#FF9800' }; // Orange
//       case 'second class lower':
//         return { label: 'Good', value: 20, color: '#FFC107' }; // Yellow
//       case 'third class':
//         return { label: 'Fair', value: 10, color: '#F44336' }; // Red
//       default:
//         return { label: 'Unknown', value: 0, color: '#9E9E9E' }; // Grey
//     }
//   };

//   const listStyle = {
//     display: 'flex',
//     flexDirection: 'column',
//     alignItems: 'center'
//   };

//   const cardStyle = {
//     backgroundColor: '#f4f4f4',
//     padding: '20px',
//     margin: '10px',
//     borderRadius: '10px',
//     width: '80%',
//     textAlign: 'center'
//   };

//   const linkStyle = {
//     color: 'blue',
//     textDecoration: 'none'
//   };

//   const text ={
//     color: "green"
//   }

//   return (
//     <>
//       <HomeNavbar />
//       <div style={listStyle}>
//         <h2>All Teachers</h2>


//         {teachers.map((teacher) => {
//           const gradeData = getGradeData(teacher.grade);
//           return (
//             <div key={teacher.id} style={cardStyle}>
//               <h5 style={text}><strong>First Name: </strong>{teacher.fName}</h5>
//               <h5><strong>Last Name</strong>{teacher.lName}</h5>
//               <h5><strong>Phone Number</strong>{teacher.phone}</h5>
//               <h5><strong>Email</strong>{teacher.email}</h5>
//               <h5><strong>School Attended</strong>{teacher.insAtt}</h5>
//               <h5><strong>Profile summary</strong>{teacher.profSum}</h5>
//               <h5><strong>Work Experience</strong>{teacher.workExp}</h5>
//               <h5><strong>Address</strong>{teacher.address}</h5>
//               <h5><strong>Course studied</strong>{teacher.courseStud}</h5>
//               <h5><strong>Years of experience</strong>{teacher.yrsOfExp}</h5>
//               <h5><strong>Other Contact Address</strong>{teacher.contAdd}</h5>
//               <h5><strong>School Grade</strong>{teacher.grade}</h5>

//               {teacher.email && (
//                 <a
//                   href={`https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(teacher.email)}&su=${encodeURIComponent('Inquiry')}&body=${encodeURIComponent(`Hello, I am interested in your skills.%0A%0ASent by: `)}`}
//                   style={{ color: 'blue', textDecoration: 'underline' }}
//                 >
//                   Email me
//                 </a>
//               )}


//             </div>
//           );
//         })}
//       </div>
//     </>
//   );
// };

// export default TeacherList;


import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import HomeNavbar from '../LandingPage/essentialLanding/HomeNavbar';

const TeacherDetails = () => {
  const { id } = useParams(); // Get the teacher ID from the URL
  const [teacher, setTeacher] = useState(null);

  // Fetch the teacher's details when the component loads
  useEffect(() => {
    const fetchTeacher = async () => {
      try {
        const response = await fetch(`http://localhost:4000/api/teacherprofile/teacher/${id}`);
        const data = await response.json();
        setTeacher(data);
      } catch (error) {
        console.error('Error fetching teacher details:', error);
      }
    };
    fetchTeacher();
  }, [id]);

  if (!teacher) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <HomeNavbar />
      <h2>Teacher Details</h2>
      <p><strong>First Name: </strong>{teacher.fName}</p>
      <p><strong>Last Name: </strong>{teacher.lName}</p>
      <p><strong>Phone: </strong>{teacher.phone}</p>
      <p><strong>Email: </strong>{teacher.email}</p>
      <p><strong>School Attended: </strong>{teacher.insAtt}</p>
      <p><strong>Profile Summary: </strong>{teacher.profSum}</p>
      <p><strong>Work Experience: </strong>{teacher.workExp}</p>
      <p><strong>Address: </strong>{teacher.address}</p>
      <p><strong>Course Studied: </strong>{teacher.courseStud}</p>
      <p><strong>Years of Experience: </strong>{teacher.yrsOfExp}</p>
      <p><strong>Contact Address: </strong>{teacher.contAdd}</p>
      <p><strong>School Grade: </strong>{teacher.grade}</p>
    </div>
  );
};

export default TeacherDetails;
