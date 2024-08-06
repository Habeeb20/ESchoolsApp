import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function SchAdminDashboard() {
  const [teachers, setTeachers] = useState([]);
  const [students, setStudents] = useState([]);
  const [form, setForm] = useState({ name: '', email: '', class: '', phone: '', password: '' });
  const [isTeacherForm, setIsTeacherForm] = useState(true);

  useEffect(() => {
    const fetchTeachers = async () => {
      const token = localStorage.getItem('token');
      const response = await axios.get('http://localhost:4000/api/schteachers', { headers: { Authorization: `Bearer ${token}` } });
      setTeachers(response.data);
    };
    fetchTeachers();
  }, []);

  useEffect(() => {
    const fetchStudents = async () => {
      const token = localStorage.getItem('token');
      const response = await axios.get('http://localhost:4000/api/schstudents', { headers: { Authorization: `Bearer ${token}` } });
      setStudents(response.data);
    };
    fetchStudents();
  }, []);

  const handleSubmit = async () => {
    const token = localStorage.getItem('token');
    try {
      if (isTeacherForm) {
        await axios.post('http://localhost:4000/api/schregister-teacher', form, { headers: { Authorization: `Bearer ${token}` } });
      } else {
        await axios.post('http://localhost:4000/api/schregister-student', form, { headers: { Authorization: `Bearer ${token}` } });
      }
      setForm({ name: '', email: '', class: '', phone: '', password: '' });
    } catch (error) {
      console.error('Error creating account', error);
    }
  };

  const handleDeleteTeacher = async (id) => {
    const token = localStorage.getItem('token');
    try {
      await axios.delete(`http://localhost:4000/api/delete-schteacher/${id}`, { headers: { Authorization: `Bearer ${token}` } });
      setTeachers(teachers.filter(teacher => teacher._id !== id));
    } catch (error) {
      console.error('Error deleting teacher', error);
    }
  };

  const handleDeleteStudent = async (id) => {
    const token = localStorage.getItem('token');
    try {
      await axios.delete(`http://localhost:4000/api/delete-schstudent/${id}`, { headers: { Authorization: `Bearer ${token}` } });
      setStudents(students.filter(student => student._id !== id));
    } catch (error) {
      console.error('Error deleting student', error);
    }
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.header}>Admin Dashboard</h1>
      <div style={styles.formContainer}>
        <button onClick={() => setIsTeacherForm(true)} style={styles.toggleButton}>Add Teacher</button>
        <button onClick={() => setIsTeacherForm(false)} style={styles.toggleButton}>Add Student</button>
        <input
          type="text"
          placeholder="Name"
          value={form.name}
          onChange={e => setForm({ ...form, name: e.target.value })}
          style={styles.input}
        />
        <input
          type="email"
          placeholder="Email"
          value={form.email}
          onChange={e => setForm({ ...form, email: e.target.value })}
          style={styles.input}
        />
        <input
          type="text"
          placeholder="Class"
          value={form.class}
          onChange={e => setForm({ ...form, class: e.target.value })}
          style={styles.input}
        />
        <input
          type="text"
          placeholder="Phone"
          value={form.phone}
          onChange={e => setForm({ ...form, phone: e.target.value })}
          style={styles.input}
        />
        <input
          type="password"
          placeholder="Password"
          value={form.password}
          onChange={e => setForm({ ...form, password: e.target.value })}
          style={styles.input}
        />
        <button onClick={handleSubmit} style={styles.button}>Submit</button>
      </div>
      <div style={styles.listContainer}>
        <h2 style={styles.subHeader}>Teachers</h2>
        <ul>
          {teachers.map(teacher => (
            <li key={teacher._id} style={styles.listItem}>
              <p>{teacher.name}</p>
              <button onClick={() => handleDeleteTeacher(teacher._id)} style={styles.deleteButton}>Delete</button>
            </li>
          ))}
        </ul>
      </div>
      <div style={styles.listContainer}>
        <h2 style={styles.subHeader}>Students</h2>
        <ul>
          {students.map(student => (
            <li key={student._id} style={styles.listItem}>
              <p>{student.name}</p>
              <button onClick={() => handleDeleteStudent(student._id)} style={styles.deleteButton}>Delete</button>
            </li>
          ))}
        </ul>
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
  formContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '20px',
    backgroundColor: 'white',
    borderRadius: '10px',
    boxShadow: '0 0 10px rgba(0,0,0,0.1)',
    marginBottom: '20px',
  },
  input: {
    width: '80%',
    maxWidth: '400px',
    padding: '10px',
    margin: '10px 0',
    border: '1px solid #ccc',
    borderRadius: '5px',
    fontSize: '18px',
  },
  button: {
    width: '80%',
    maxWidth: '400px',
    padding: '10px',
    backgroundColor: '#006400',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    fontSize: '18px',
    cursor: 'pointer',
    marginTop: '10px',
  },
  toggleButton: {
    padding: '10px',
    backgroundColor: '#ccc',
    color: '#333',
    border: 'none',
    borderRadius: '5px',
    fontSize: '16px',
    cursor: 'pointer',
    margin: '5px',
  },
  listContainer: {
    backgroundColor: 'white',
    padding: '20px',
    borderRadius: '10px',
    boxShadow: '0 0 10px rgba(0,0,0,0.1)',
    marginTop: '20px',
  },
  subHeader: {
    fontSize: '20px',
    color: '#006400',
  },
  listItem: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '10px',
    borderBottom: '1px solid #ccc',
  },
  deleteButton: {
    padding: '5px 10px',
    backgroundColor: '#ff4d4d',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  },
};
