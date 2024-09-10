// import React, { useState, useEffect } from 'react';
// import { Link } from 'react-router-dom';
// import HomeNavbar from '../LandingPage/essentialLanding/HomeNavbar';

// const TeacherGrid = () => {
//   const [teachers, setTeachers] = useState([]);

//   useEffect(() => {
//     const fetchTeachers = async () => {
//       try {
//         const response = await fetch('http://localhost:4000/api/teacherprofile/teachers');
//         const data = await response.json();
//         setTeachers(data);
//       } catch (error) {
//         console.error('Error fetching teachers:', error);
//       }
//     };
//     fetchTeachers();
//   }, []);

//   // Inline CSS for the grid
//   const containerStyle = {
//     display: 'grid',
//     gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
//     gap: '15px',
//     padding: '20px',
//     justifyContent: 'center',
//     width: '100%',
//   };

//   const cardStyle = {
//     backgroundColor: '#f4f4f4',
//     padding: '15px',
//     borderRadius: '8px',
//     textAlign: 'center',
//     boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
//   };

//   const nameStyle = {
//     fontWeight: 'bold',
//     fontSize: '18px',
//     color: '#333',
//   };

//   const experienceStyle = {
//     color: '#777',
//     fontSize: '16px',
//     margin: '10px 0',
//   };

//   const buttonStyle = {
//     padding: '10px 15px',
//     backgroundColor: '#4CAF50',
//     color: 'white',
//     textDecoration: 'none',
//     borderRadius: '5px',
//     fontSize: '14px',
//   };

//   const mobileButtonStyle = {
//     width: '100%',
//     padding: '10px',
//     backgroundColor: '#4CAF50',
//     color: 'white',
//     textDecoration: 'none',
//     borderRadius: '5px',
//     fontSize: '14px',
//     textAlign: 'center',
//   };

//   return (
//     <>
//       <HomeNavbar />
//       <div style={containerStyle}>
//         {teachers.map((teacher) => (
//           <div key={teacher.id} style={cardStyle}>
//             <div style={nameStyle}>{teacher.fName} {teacher.lName}</div>
//             <div style={experienceStyle}>Years of Experience: {teacher.yrsOfExp}</div>
//             <Link to={`/teacher/${teacher.id}`} style={buttonStyle}>
//               See More
//             </Link>
//           </div>
//         ))}
//       </div>
//     </>
//   );
// };

// export default TeacherGrid;


import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import HomeNavbar from '../LandingPage/essentialLanding/HomeNavbar';

const TeacherGrid = () => {
  const [teachers, setTeachers] = useState([]);
  const navigate = useNavigate();

  // Fetch the teachers data from the backend
  useEffect(() => {
    const fetchTeachers = async () => {
      try {
        const response = await fetch('http://localhost:4000/api/teacherprofile/teachers');
        const data = await response.json();
        setTeachers(data);
      } catch (error) {
        console.error('Error fetching teachers:', error);
      }
    };
    fetchTeachers();
  }, []);

  // Function to handle the "See More" button click
  const handleSeeMore = (teacherId) => {
    // Navigate to the detailed page of the selected teacher
    navigate(`/teacher/${teacherId}`);
  };

  // Inline styles for responsiveness
  const gridStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
    gap: '20px',
    padding: '20px',
  };

  const cardStyle = {
    backgroundColor: '#f4f4f4',
    padding: '20px',
    borderRadius: '10px',
    textAlign: 'center',
  };

  const buttonStyle = {
    backgroundColor: 'green',
    color: 'white',
    padding: '10px',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  };

  return (
    <>
      <HomeNavbar />
      <h2>Teacher List</h2>
      <div style={gridStyle}>
        {teachers.map((teacher) => (
          <div key={teacher.id} style={cardStyle}>
            <h5><strong>Name: </strong>{teacher.fName} {teacher.lName}</h5>
            <h5><strong>Years of Experience: </strong>{teacher.yrsOfExp}</h5>
            <button style={buttonStyle} onClick={() => handleSeeMore(teacher._id)}>
              See More
            </button>
          </div>
        ))}
      </div>
    </>
  );
};

export default TeacherGrid;
