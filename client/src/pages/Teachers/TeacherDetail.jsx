// import React from 'react';
// import { useParams } from 'react-router-dom';

// const TeacherDetail = ({ teachers }) => {
//   const { id } = useParams();
//   const teacher = teachers.find((teacher) => teacher.id === id);

//   const detailStyle = {
//     padding: '20px',
//     margin: '20px auto',
//     maxWidth: '600px',
//     backgroundColor: '#f4f4f4',
//     borderRadius: '10px'
//   };

//   return (
//     <div style={detailStyle}>
//       {teacher ? (
//         <>
//           <h2>{teacher.fullname}</h2>
//           <p><strong>phone Number:</strong> {teacher.phonenumber}</p>
//           <p><strong>Email:</strong> {teacher.email}</p>
//           <p><strong>Education:</strong> {teacher.education}</p>
//           <p><strong>Date of Birth:</strong> {teacher.dob}</p>
//           <p><strong>Work Experience:</strong> {teacher.experience}</p>
//           <p><strong>Address:</strong> {teacher.address}</p>
//           <p><strong>Course Studied:</strong> {teacher.course}</p>
//           <p><strong>Bio Data:</strong> {teacher.bio}</p>
//           {teacher.profilePicture && (
//             <>
//               <p><strong>Profile Picture:</strong></p>
//               <img src={URL.createObjectURL(teacher.profilePicture)} alt={teacher.fullname} style={{ width: '100px', height: '100px' }} />
//             </>
//           )}
//           {teacher.cv && (
//             <>
//               <p><strong>CV:</strong></p>
//               <a href={URL.createObjectURL(teacher.cv)} download>Download CV</a>
//             </>
//           )}
//         </>
//       ) : (
//         <p>Teacher not found</p>
//       )}
//     </div>
//   );
// };

// export default TeacherDetail;

import React from 'react';
import { useParams } from 'react-router-dom';
import HomeNavbar from '../LandingPage/essentialLanding/HomeNavbar';

const TeacherDetail = ({ teachers }) => {
  const { id } = useParams();
  const teacher = teachers.find((teacher) => teacher.id === id);

  const detailStyle = {
    padding: '20px',
    margin: '20px auto',
    maxWidth: '600px',
    backgroundColor: '#f4f4f4',
    borderRadius: '10px'
  };

  // Utility function to create object URLs
//   const createObjectURL = (file) => {
//     return file ? URL.createObjectURL(file) : '';
//   };

  return (
    <>
    <HomeNavbar />
      <div style={detailStyle}>
      {teacher ? (
        <>
          <h2><strong>Name:</strong>{teacher.fullname}</h2>
          <p><strong>Phone Number:</strong> {teacher.phoneNumber}</p>
          <p><strong>Email:</strong> {teacher.email || 'N/A'}</p>
          <p><strong>Education:</strong> {teacher.education || 'N/A'}</p>
          <p><strong>Date of Birth:</strong> {teacher.dob || 'N/A'}</p>
          <p><strong>Work Experience:</strong> {teacher.experience || 'N/A'}</p>
          <p><strong>Address:</strong> {teacher.address || 'N/A'}</p>
          <p><strong>Course Studied:</strong> {teacher.course || 'N/A'}</p>
          <p><strong>Bio Data:</strong> {teacher.bio || 'N/A'}</p>
          {teacher.profilePicture && (
            <>
              <p><strong>Profile Picture:</strong></p>
              {/* <img src={createObjectURL(teacher.profilePicture)} alt={teacher.fullname} style={{ width: '100px', height: '100px' }} /> */}
            </>
          )}
          {teacher.cv && (
            <>
              <p><strong>CV:</strong></p>
              {/* <a href={createObjectURL(teacher.cv)} download>Download CV</a> */}
            </>
          )}
        </>
      ) : (
        <p>Teacher not found</p>
      )}
    </div>
    </>
  
  );
};

export default TeacherDetail;
