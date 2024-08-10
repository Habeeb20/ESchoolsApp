// import React from 'react';
// import { Link } from 'react-router-dom';

// const TeacherGrid = ({ teachers }) => {
//   const gridStyle = {
//     display: 'flex',
//     flexWrap: 'wrap',
//     justifyContent: 'center'
//   };

//   const cardStyle = {
//     backgroundColor: '#f4f4f4',
//     padding: '20px',
//     margin: '10px',
//     borderRadius: '10px',
//     width: '200px',
//     textAlign: 'center'
//   };

//   const linkStyle = {
//     color: 'blue',
//     textDecoration: 'none'
//   };

//   return (
//     <div style={gridStyle}>
//       {Array.isArray(teachers) && teachers.length > 0 ? (
//         teachers.map((teacher) => (
//           <div key={teacher.id} style={cardStyle}>
//             <p>{teacher.fullname}</p>
//             <Link style={linkStyle} to={`/teacher/${teacher.id}`}>View Details</Link>
//           </div>
//         ))
//       ) : (
//         // <p>No teachers available</p>
//         <Link to='/addteacher'><button>add teacher</button></Link>
//       )}
//     </div>
//   );
// };

// export default TeacherGrid;

import React from 'react';
import { Link } from 'react-router-dom';
import HomeNavbar from '../LandingPage/essentialLanding/HomeNavbar';

const TeacherGrid = ({ teachers }) => {
  const gridStyle = {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center'
  };

  const cardStyle = {
    backgroundColor: '#f4f4f4',
    padding: '20px',
    margin: '10px',
    borderRadius: '10px',
    width: '200px',
    textAlign: 'center'
  };

  const linkStyle = {
    color: 'blue',
    textDecoration: 'none'
  };

  return (
    <>
    <HomeNavbar />
     <div style={gridStyle}>
      {Array.isArray(teachers) && teachers.length > 0 ? (
        teachers.map((teacher) => (
          <div key={teacher.id} style={cardStyle}>
            <p>{teacher.fullname}</p>
            <Link style={linkStyle} to={`/teacher/${teacher.id}`}>View Details</Link>
          </div>
        ))
      ) : (
        // <p>No teachers available</p>
        <Link to='/addteacher'><button>add teacher</button></Link>
      )}
    </div>
    </>
   
  );
};

export default TeacherGrid;
