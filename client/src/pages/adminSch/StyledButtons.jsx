// // src/components/StyledButtons.js
// import React from 'react';
// import { Link } from 'react-router-dom';
// import { Button } from '@mui/material';
// import styled from 'styled-components';

// // Define styled buttons
// const StyledButton = styled(Button)`
//   width: 200px;
//   height: 60px;
//   margin: 15px;
//   font-size: 18px;
//   font-weight: bold;
//   border-radius: 10px;
//   color: #fff;
//   transition: background-color 0.3s, transform 0.3s, box-shadow 0.3s;
//   box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);

//   &:hover {
//     transform: scale(1.05);
//     box-shadow: 0 8px 12px rgba(0, 0, 0, 0.2);
//   }

//   @media (max-width: 768px) {
//     width: 150px;
//     height: 50px;
//     font-size: 16px;
//     margin: 10px;
//   }

//   @media (max-width: 480px) {
//     width: 120px;
//     height: 40px;
//     font-size: 14px;
//     margin: 8px;
//   }
// `;

// const ButtonPrimary = styled(StyledButton)`
//   background-color: #007bff;
//   &:hover {
//     background-color: #0056b3;
//   }
// `;

// const ButtonSecondary = styled(StyledButton)`
//   background-color: #6c757d;
//   &:hover {
//     background-color: #5a6268;
//   }
// `;

// const ButtonSuccess = styled(StyledButton)`
//   background-color: #28a745;
//   &:hover {
//     background-color: #218838;
//   }
// `;

// const ButtonDanger = styled(StyledButton)`
//   background-color: #dc3545;
//   &:hover {
//     background-color: #c82333;
//   }
// `;

// const ButtonWarning = styled(StyledButton)`
//   background-color: #ffc107;
//   &:hover {
//     background-color: #e0a800;
//   }
// `;

// const ButtonInfo = styled(StyledButton)`
//   background-color: #17a2b8;
//   &:hover {
//     background-color: #138496;
//   }
// `;

// // Main component rendering buttons
// const StyledButtons = () => {
//   return (
//     <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', }}>
//       <Link to="/Admin/Addclass" style={{ textDecoration: 'none' }}>
//         <ButtonPrimary style={{backgroundColor: 'green' }} variant="contained">Add Classes</ButtonPrimary>
//       </Link>
//       <Link to="/Admin/addsubject/:id" style={{ textDecoration: 'none' }}>
//         <ButtonSecondary style={{backgroundColor: 'green' }} variant="contained">Add Subjects</ButtonSecondary>
//       </Link>
//       <Link to="/Admin/teachers/addteacher/:id" style={{ textDecoration: 'none' }}>
//         <ButtonSuccess style={{backgroundColor: 'green' }} variant="contained">Add Teachers</ButtonSuccess>
//       </Link>
//       <Link to="/Admin/addstudents" style={{ textDecoration: 'none' }}>
//         <ButtonDanger style={{backgroundColor: 'green' }} variant="contained">Add Students</ButtonDanger>
//       </Link>
//       <Link to="/Admin/addnotice" style={{ textDecoration: 'none' }}>
//         <ButtonWarning style={{backgroundColor: 'green' }} variant="contained">Add Notice</ButtonWarning>
//       </Link>
//       <Link to="/finance" style={{ textDecoration: 'none' }}>
//         <ButtonInfo style={{backgroundColor: 'green' }} variant="contained">finance</ButtonInfo>
//       </Link>
//     </div>
//   );
// };

// export default StyledButtons;





// src/components/StyledButtons.js
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@mui/material';
import styled from 'styled-components';

// Define styled buttons
const StyledButton = styled(Button)`
  width: 200px;
  height: 60px;
  margin: 15px;
  font-size: 18px;
  font-weight: bold;
  border-radius: 10px;
  color: #fff;
  transition: background-color 0.3s, transform 0.3s, box-shadow 0.3s;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);

  &:hover {
    transform: scale(1.05);
    box-shadow: 0 8px 12px rgba(0, 0, 0, 0.2);
  }

  @media (max-width: 768px) {
    width: 150px;
    height: 50px;
    font-size: 16px;
    margin: 10px;
  }

  @media (max-width: 480px) {
    width: 120px;
    height: 40px;
    font-size: 14px;
    margin: 8px;
  }
`;

const ButtonPrimary = styled(StyledButton)`
  background-color: #007bff;
  &:hover {
    background-color: #0056b3;
  }
`;

const ButtonSecondary = styled(StyledButton)`
  background-color: #6c757d;
  &:hover {
    background-color: #5a6268;
  }
`;

const ButtonSuccess = styled(StyledButton)`
  background-color: #28a745;
  &:hover {
    background-color: #218838;
  }
`;

const ButtonDanger = styled(StyledButton)`
  background-color: #dc3545;
  &:hover {
    background-color: #c82333;
  }
`;

const ButtonWarning = styled(StyledButton)`
  background-color: #ffc107;
  &:hover {
    background-color: #e0a800;
  }
`;

const ButtonInfo = styled(StyledButton)`
  background-color: #17a2b8;
  &:hover {
    background-color: #138496;
  }
`;

// Main component rendering buttons
const StyledButtons = () => {
  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
      <Link to="/Admin/Addclass" style={{ textDecoration: 'none', margin: '10px',  }}>
        <ButtonPrimary style={{backgroundColor: 'green' }} variant="contained">Add Classes</ButtonPrimary>
      </Link>
      <Link to="/Admin/addsubject/:id" style={{ textDecoration: 'none', margin: '10px' }}>
        <ButtonSecondary  style={{backgroundColor: 'green' }}  variant="contained">Add Subjects</ButtonSecondary>
      </Link>
      <Link to="/Admin/teachers/addteacher/:id" style={{ textDecoration: 'none', margin: '10px' }}>
        <ButtonSuccess  style={{backgroundColor: 'green' }}  variant="contained">Add Teachers</ButtonSuccess>
      </Link>
      <Link to="/Admin/addstudents" style={{ textDecoration: 'none', margin: '10px' }}>
        <ButtonDanger  style={{backgroundColor: 'green' }}  variant="contained">Add Students</ButtonDanger>
      </Link>
      <Link to="/schadminregister" style={{ textDecoration: 'none', margin: '10px' }}>
        <ButtonWarning  style={{backgroundColor: 'green' }}  variant="contained">Manage Teachers</ButtonWarning>
      </Link>
      <Link to="/finance" style={{ textDecoration: 'none', margin: '10px' }}>
        <ButtonInfo  style={{backgroundColor: 'green' }}  variant="contained">Finance</ButtonInfo>
      </Link>
    </div>
  );
};

export default StyledButtons;
