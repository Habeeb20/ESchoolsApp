// import React, { useState } from 'react';
// import axios from 'axios';
// import { useNavigate } from 'react-router-dom';
// const CreateSchool = () => {
//   const navigate = useNavigate()
//   const [school, setSchool] = useState({
//     name: '',
//     history: '',
//     admissionDetails: '',
//     faculties: [],
//     departments: [],
//     termsAndConditions: '',
//     admissionRequirements: ''
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setSchool({ ...school, [name]: value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       await axios.post('http://localhost:4000/api/schownercreate', school, {
//         headers: { 'x-auth-token': localStorage.getItem('token') }
//       });
//       alert('School created successfully');
//       navigate("/schownerdashboard")
//     } catch (err) {
//       console.error(err);
//     }
//   };

//   const containerStyle = {
//     maxWidth: '600px',
//     margin: '0 auto',
//     padding: '20px',
//     borderRadius: '8px',
//     boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
//     backgroundColor: '#ffffff',
//   };

//   const headingStyle = {
//     textAlign: 'center',
//     color: '#28a745',
//     marginBottom: '20px',
//   };

//   const formStyle = {
//     display: 'flex',
//     flexDirection: 'column',
//     gap: '10px',
//   };

//   const inputStyle = {
//     padding: '10px',
//     borderRadius: '4px',
//     border: '1px solid #28a745',
//     fontSize: '16px',
//   };

//   const buttonStyle = {
//     padding: '10px',
//     borderRadius: '4px',
//     border: 'none',
//     fontSize: '16px',
//     backgroundColor: '#28a745',
//     color: '#ffffff',
//     cursor: 'pointer',
//     marginTop: '20px',
//   };

//   const responsiveStyle = {
//     width: '100%',
//     boxSizing: 'border-box',
//   };

//   return (
//     <div style={containerStyle}>
//       <h2 style={headingStyle}>Create School</h2>
//       <form onSubmit={handleSubmit} style={formStyle}>
//         <input
//           type="text"
//           name="name"
//           placeholder="Name"
//           value={school.name}
//           onChange={handleChange}
//           style={{ ...inputStyle, ...responsiveStyle }}
//         />
//         <textarea
//           name="history"
//           placeholder="History"
//           value={school.history}
//           onChange={handleChange}
//           style={{ ...inputStyle, ...responsiveStyle }}
//         ></textarea>
//         <textarea
//           name="admissionDetails"
//           placeholder="Admission Details"
//           value={school.admissionDetails}
//           onChange={handleChange}
//           style={{ ...inputStyle, ...responsiveStyle }}
//         ></textarea>
//         <textarea
//           name="faculties"
//           placeholder="Faculties (comma separated)"
//           value={school.faculties}
//           onChange={(e) =>
//             setSchool({ ...school, faculties: e.target.value.split(',') })
//           }
//           style={{ ...inputStyle, ...responsiveStyle }}
//         ></textarea>
//         <textarea
//           name="departments"
//           placeholder="Departments (comma separated)"
//           value={school.departments}
//           onChange={(e) =>
//             setSchool({ ...school, departments: e.target.value.split(',') })
//           }
//           style={{ ...inputStyle, ...responsiveStyle }}
//         ></textarea>
//         <textarea
//           name="termsAndConditions"
//           placeholder="Terms and Conditions"
//           value={school.termsAndConditions}
//           onChange={handleChange}
//           style={{ ...inputStyle, ...responsiveStyle }}
//         ></textarea>
//         <textarea
//           name="admissionRequirements"
//           placeholder="Admission Requirements"
//           value={school.admissionRequirements}
//           onChange={handleChange}
//           style={{ ...inputStyle, ...responsiveStyle }}
//         ></textarea>
//         <button type="submit" style={buttonStyle}>Create School</button>
//       </form>
//     </div>
//   );
// };

// export default CreateSchool;

import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
const CreateSchool = () => {
  const navigate = useNavigate()
  const [school, setSchool] = useState({
    name: '',
    history: '',
    admissionDetails: '',
    faculties: [],
    departments: [],
    termsAndConditions: '',
    admissionRequirements: ''
  });

  const [department, setDepartment] = useState({ faculty: '', department: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setSchool({ ...school, [name]: value });
  };

  const handleDepartmentChange = (e) => {
    const { name, value } = e.target;
    setDepartment({ ...department, [name]: value });
  };

  const addDepartment = () => {
    setSchool({
      ...school,
      departments: [...school.departments, department]
    });
    setDepartment({ faculty: '', department: '' });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:4000/api/schownercreate', school, {
        headers: { 'x-auth-token': localStorage.getItem('token') }
      });
      alert('School created successfully');
      navigate('/schownerdashboard')
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>Create School</h2>
      <form onSubmit={handleSubmit} style={styles.form}>
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={school.name}
          onChange={handleChange}
          style={styles.input}
        />
        <textarea
          name="history"
          placeholder="History"
          value={school.history}
          onChange={handleChange}
          style={styles.textarea}
        ></textarea>
        <textarea
          name="admissionDetails"
          placeholder="Admission Details"
          value={school.admissionDetails}
          onChange={handleChange}
          style={styles.textarea}
        ></textarea>
        <textarea
          name="faculties"
          placeholder="Faculties (comma separated)"
          value={school.faculties}
          onChange={(e) => setSchool({ ...school, faculties: e.target.value.split(',') })}
          style={styles.textarea}
        ></textarea>
        <div style={styles.departmentContainer}>
          <input
            type="text"
            name="faculty"
            placeholder="Faculty"
            value={department.faculty}
            onChange={handleDepartmentChange}
            style={styles.input}
          />
          <input
            type="text"
            name="department"
            placeholder="Department"
            value={department.department}
            onChange={handleDepartmentChange}
            style={styles.input}
          />
          <button type="button" onClick={addDepartment} style={styles.addButton}>
            Add Department
          </button>
        </div>
        <ul style={styles.departmentList}>
          {school.departments.map((dep, index) => (
            <li key={index} style={styles.departmentItem}>
              Faculty: {dep.faculty}, Department: {dep.department}
            </li>
          ))}
        </ul>
        <textarea
          name="termsAndConditions"
          placeholder="Terms and Conditions"
          value={school.termsAndConditions}
          onChange={handleChange}
          style={styles.textarea}
        ></textarea>
        <textarea
          name="admissionRequirements"
          placeholder="Admission Requirements"
          value={school.admissionRequirements}
          onChange={handleChange}
          style={styles.textarea}
        ></textarea>
        <button type="submit" style={styles.submitButton}>
          Create School
        </button>
      </form>
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '20px',
    backgroundColor: '#f0fff0',
  },
  heading: {
    color: '#006400',
    marginBottom: '20px',
    fontSize: '24px',
    fontWeight: 'bold',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: '400px',
    backgroundColor: '#e0ffe0',
    padding: '20px',
    borderRadius: '10px',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
  },
  input: {
    width: '100%',
    padding: '10px',
    margin: '10px 0',
    borderRadius: '5px',
    border: '1px solid #ccc',
    fontSize: '16px',
  },
  textarea: {
    width: '100%',
    padding: '10px',
    margin: '10px 0',
    borderRadius: '5px',
    border: '1px solid #ccc',
    fontSize: '16px',
    height: '100px',
  },
  departmentContainer: {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
  },
  addButton: {
    padding: '10px',
    margin: '10px 0',
    backgroundColor: '#006400',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  },
  departmentList: {
    listStyleType: 'none',
    padding: 0,
    width: '100%',
  },
  departmentItem: {
    backgroundColor: '#e0ffe0',
    borderRadius: '5px',
    padding: '10px',
    margin: '5px 0',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
  },
  submitButton: {
    padding: '10px 20px',
    backgroundColor: '#006400',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    fontSize: '16px',
    cursor: 'pointer',
  },
};

export default CreateSchool;
