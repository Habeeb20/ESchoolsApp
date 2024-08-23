import React from 'react';
import HomeNavbar from './LandingPage/essentialLanding/HomeNavbar';
import { Link } from 'react-router-dom';
const Comparison = () => {
  return (
   <>
   <HomeNavbar />
   <div style={styles.container}>
      <h2 style={styles.header}>Here you are now comparing</h2>
      <div style={styles.schoolContainer}>
        <div style={styles.schoolBox}>
          <div style={styles.addSchool}>
            <p>Add school</p>
            <span style={styles.plusIcon}>+</span>
          </div>
        </div>
        <div style={styles.schoolBox}>
          <div style={styles.addSchool}>
            <p>Add school</p>
            <span style={styles.plusIcon}>+</span>
          </div>
        </div>
        <div style={styles.schoolBox}>
          <div style={styles.addSchool}>
            <p>Add school</p>
            <span style={styles.plusIcon}>+</span>
          </div>
        </div>
        <div style={styles.schoolBox}>
          <div style={styles.addSchool}>
            <p>Add school</p>
            <span style={styles.plusIcon}>+</span>
          </div>
        </div>
      </div>
      <div style={styles.compareButtonContainer}>
        <Link to='/compareschools'><button style={styles.compareButton}>Compare</button></Link>
    
      </div>
      <div style={styles.section}>
        <h3>Schools in city</h3>
        <p style={styles.links}>
          • Schools in Lagos • Schools in Kano • Schools in Ibadan • Schools in Ondo • Schools in Zaria • Schools in Benue • Schools in Borno • Schools in Lagos • Schools in Lagos • Schools in Lagos • Schools in Lagos • Schools in Lagos • Schools in Lagos
        </p>
      </div>
      <div style={styles.section}>
        <h3>Popular search</h3>
        <p style={styles.links}>
          • Uniben • Uni. Ibadan • Unilag • Futa • Osusterch • AAUA • AAU • OAU • Unizik • Uni. Nig • Uniben • Uni. Ibadan • Unilag • Futa • Osusterch • AAUA • OAU • Unizik • Uni. Nig
        </p>
      </div>
    </div>
   </>
  );
};

const styles = {
  container: {
    padding: '20px',
    fontFamily: 'Arial, sans-serif',
  },
  header: {
    fontSize: '24px',
    fontWeight: 'bold',
    marginBottom: '20px',
  },
  schoolContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    marginBottom: '20px',
  },
  schoolBox: {
    width: '23%',
    height: '150px',
    border: '1px solid #ccc',
    borderRadius: '8px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f9f9f9',
  },
  addSchool: {
    textAlign: 'center',
    color: '#777',
  },
  plusIcon: {
    fontSize: '24px',
    color: '#777',
  },
  compareButtonContainer: {
    display: 'flex',
    justifyContent: 'center',
    marginBottom: '30px',
  },
  compareButton: {
    padding: '10px 30px',
    fontSize: '18px',
    backgroundColor: '#0f0',
    color: '#fff',
    border: '2px solid #00ff00',
    borderRadius: '8px',
    cursor: 'pointer',
  },
  section: {
    marginBottom: '20px',
  },
  links: {
    lineHeight: '1.5',
    color: '#333',
  },
};

export default Comparison;
