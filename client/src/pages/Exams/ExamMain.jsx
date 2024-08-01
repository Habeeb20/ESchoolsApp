import React from 'react';
import HomeNavbar from '../LandingPage/essentialLanding/HomeNavbar';

const examsData = [
  {
    title: 'JAMB',
    description: 'Description for JAMB...',
    link: '/jamb-portal',
  },
  {
    title: 'WAEC',
    description: 'Description for WAEC...',
    link: '/waec-portal',
  },
  {
    title: 'NABTEB',
    description: 'Description for NABTEB...',
    link: '/nabteb-portal',
  },
  {
    title: 'IELTS',
    description: 'Description for IELTS...',
    link: '/ielts-portal',
  },
  {
    title: 'GRE',
    description: 'Description for GRE...',
    link: '/gre-portal',
  },
  {
    title: 'MASTERS',
    description: 'Description for MASTERS...',
    link: '/masters-portal',
  },
  {
    title: 'PHD',
    description: 'Description for PHD...',
    link: '/phd-portal',
  },
];

const styles = {
  container: {
    padding: '20px',
    fontFamily: 'Arial, sans-serif',
    color: '#333',
    maxWidth: '1200px',
    margin: '0 auto',
    marginTop:"7%",
    backgroundColor: '#f9f9f9',
  },
  header: {
    textAlign: 'center',
    marginBottom: '40px',
  },
  examSection: {
    marginBottom: '30px',
    padding: '20px',
    border: '1px solid #ccc',
    borderRadius: '8px',
    backgroundColor: '#fff',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
  },
  title: {
    fontSize: '1.5em',
    marginBottom: '10px',
    color: '#006400',
  },
  description: {
    marginBottom: '10px',
  },
  button: {
    display: 'inline-block',
    padding: '10px 20px',
    backgroundColor: '#006400',
    color: 'white',
    textDecoration: 'none',
    borderRadius: '5px',
    textAlign: 'center',
  },
  '@media (maxWidth: 768px)': {
    container: {
      padding: '10px',
    },
    button: {
      width: '100%',
      boxSizing: 'border-box',
    },
  },
};

const ExamMain = () => {
  return (
    <>
    <HomeNavbar />
    <div style={styles.container}>
      <div style={styles.header}>
        <h1>All you need to know about any Examination held in and outside of Nigeria for Nigerians and Africans</h1>
      </div>
      {examsData.map((exam, index) => (
        <div key={index} style={styles.examSection}>
          <h2 style={styles.title}>{exam.title}</h2>
          <p style={styles.description}>{exam.description}</p>
          <a href={exam.link} style={styles.button}>Go to {exam.title} portal</a>
        </div>
      ))}
    </div>
    </>
    
  );
};

export default ExamMain;
