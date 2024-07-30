import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const SchOwnerDashboard = () => {
  const [schools, setSchools] = useState([]);

  useEffect(() => {
    const fetchSchools = async () => {
      try {
        const res = await axios.get('http://localhost:4000/api/schownerget'); // Updated endpoint to get schools
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

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:4000/api/schownerdelete/${id}`, {
        headers: { 'x-auth-token': localStorage.getItem('token') }
      });
      setSchools(schools.filter((school) => school._id !== id));
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>Admin Dashboard</h2>
      <Link to="/schownercreate" style={styles.createLink}>Create School</Link>
      <ul style={styles.schoolList}>
        {schools.map((school) => (
          <li key={school._id} style={styles.schoolItem}>
            {school.name}
            <div>
              <Link to={`/admin/edit/${school._id}`} style={styles.editLink}>Edit</Link>
              <button onClick={() => handleDelete(school._id)} style={styles.deleteButton}>Delete</button>
            </div>
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
  createLink: {
    display: 'inline-block',
    marginBottom: '20px',
    padding: '10px 15px',
    backgroundColor: '#006400',
    color: 'white',
    textDecoration: 'none',
    borderRadius: '5px',
    textAlign: 'center',
  },
  schoolList: {
    listStyleType: 'none',
    padding: 0,
  },
  schoolItem: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '10px',
    margin: '10px 0',
    backgroundColor: '#e0ffe0',
    borderRadius: '5px',
    boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
  },
  editLink: {
    padding: '5px 10px',
    backgroundColor: '#32CD32',
    color: 'white',
    textDecoration: 'none',
    borderRadius: '5px',
    marginRight: '10px',
  },
  deleteButton: {
    padding: '5px 10px',
    backgroundColor: '#FF6347',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  },
};

export default SchOwnerDashboard;
