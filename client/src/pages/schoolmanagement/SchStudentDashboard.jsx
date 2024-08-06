import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function StudentDashboard() {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    const fetchComments = async () => {
      const token = localStorage.getItem('token');
      const response = await axios.get('http://localhost:4000/api/comments', { headers: { Authorization: `Bearer ${token}` } });
      setComments(response.data);
    };
    fetchComments();
  }, []);

  return (
    <div style={styles.container}>
      <h1 style={styles.header}>Student Dashboard</h1>
      <div style={styles.listContainer}>
        {comments.map((comment, index) => (
          <div key={index} style={styles.commentCard}>
            <p style={styles.comment}>{comment}</p>
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
  commentCard: {
    backgroundColor: 'white',
    padding: '20px',
    borderRadius: '10px',
    boxShadow: '0 0 10px rgba(0,0,0,0.1)',
    margin: '10px',
    width: '300px',
  },
  comment: {
    fontSize: '18px',
    color: '#333',
  },
};
