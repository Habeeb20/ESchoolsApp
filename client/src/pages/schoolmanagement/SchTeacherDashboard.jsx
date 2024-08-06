import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function TeacherDashboard() {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    const fetchStudents = async () => {
      const token = localStorage.getItem('token');
      const response = await axios.get('http://localhost:4000/api/schstudents', { headers: { Authorization: `Bearer ${token}` } });
      setStudents(response.data);
    };
    fetchStudents();
  }, []);

  const handleCommentChange = (index, value) => {
    const newStudents = [...students];
    newStudents[index].comment = value;
    setStudents(newStudents);
  };

  const handleSubmit = async (studentId, comment, report) => {
    const token = localStorage.getItem('token');
    try {
      await axios.post('http://localhost:4000/api/schpost-comment', { studentId, comment, report }, { headers: { Authorization: `Bearer ${token}` } });
    } catch (error) {
      console.error('Error posting comment', error);
    }
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.header}>Teacher Dashboard</h1>
      <div style={styles.listContainer}>
        {students.map((student, index) => (
          <div key={student._id} style={styles.studentCard}>
            <p style={styles.studentInfo}>{student.name}</p>
            <textarea
              placeholder="Comment"
              value={student.comment || ''}
              onChange={e => handleCommentChange(index, e.target.value)}
              style={styles.textarea}
            />
            <textarea
              placeholder="Report"
              value={student.report || ''}
              onChange={e => handleCommentChange(index, e.target.value)}
              style={styles.textarea}
            />
            <button onClick={() => handleSubmit(student._id, student.comment, student.report)} style={styles.button}>Submit</button>
          </div>
        ))}
      </div>
    </div>
  );
}

const styles = {
  container: {
    padding: '20px',
    backgroundColor: '#f8f8f8',
  },
  header: {
    fontSize: '24px',
    color: '#006400',
  },
  listContainer: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  studentCard: {
    backgroundColor: 'white',
    padding: '20px',
    borderRadius: '10px',
    boxShadow: '0 0 10px rgba(0,0,0,0.1)',
    margin: '10px',
    width: '300px',
  },
  studentInfo: {
    fontSize: '18px',
    color: '#333',
    marginBottom: '10px',
  },
  textarea: {
    width: '100%',
    padding: '10px',
    margin: '10px 0',
    border: '1px solid #ccc',
    borderRadius: '5px',
    fontSize: '16px',
  },
  button: {
    width: '100%',
    padding: '10px',
    backgroundColor: '#006400',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    fontSize: '18px',
    cursor: 'pointer',
    marginTop: '10px',
  },
};
