import React, { useEffect, useState } from 'react';
import axios from 'axios';

const SchOwnerHome = () => {
  const [schools, setSchools] = useState([]);

  useEffect(() => {
    const fetchSchools = async () => {
      try {
        const res = await axios.get('http://localhost:4000/api/schownerget');
        if (Array.isArray(res.data)) {
          setSchools(res.data);
        } else {
          console.error('Unexpected response format:', res.data);
        }
      } catch (err) {
        console.error(err);
      }
    };

    fetchSchools();
  }, []);

  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>Schools Information</h2>
      <ul style={styles.schoolList}>
        {schools.map((school) => (
          <li key={school._id} style={styles.schoolItem}>
            <h3 style={styles.schoolName}>{school.name}</h3>
            <p style={styles.schoolText}>{school.history}</p>
            <p style={styles.schoolText}>{school.admissionDetails}</p>
            <p style={styles.schoolText}>Faculties: {school.faculties.join(', ')}</p>
            <p style={styles.schoolText}>Departments: {school.departments.map(dep => `${dep.faculty}: ${dep.department}`).join(', ')}</p>
            <p style={styles.schoolText}>{school.termsAndConditions}</p>
            <p style={styles.schoolText}>{school.admissionRequirements}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

const styles = {
  container: {
    padding: '20px',
    backgroundColor: '#f0fff0',
    minHeight: '100vh',
  },
  heading: {
    textAlign: 'center',
    color: '#006400',
    marginBottom: '20px',
  },
  schoolList: {
    listStyleType: 'none',
    padding: 0,
  },
  schoolItem: {
    backgroundColor: '#e0ffe0',
    borderRadius: '5px',
    padding: '15px',
    margin: '10px 0',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
  },
  schoolName: {
    color: '#006400',
    marginBottom: '10px',
  },
  schoolText: {
    color: '#333',
    margin: '5px 0',
  },
};

export default SchOwnerHome;
