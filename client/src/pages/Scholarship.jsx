import React from 'react';
import Footer from '../components/BookEssential/Footer';
import HomeNavbar from './LandingPage/essentialLanding/HomeNavbar';
import Navbar from '../components/LandingPage/Navbar';

const Scholarship = () => {
  return (
    <>
    <Navbar/>
    <div style={styles.container}>
      {/* Header Section */}
      <header style={styles.header}>
        <div style={styles.headerContent}>
          <h1 style={styles.headerTitle}>Your guide to navigating student finances</h1>
          <p style={styles.headerStats}>1 million+ students helped<br />10,000+ financial resources</p>
        </div>
        <div style={styles.headerImage}></div>
      </header>

      {/* Feature Cards Section */}
      <section style={styles.features}>
        <div style={styles.featureCard}>
          <h3>Feature 1</h3>
          <p>Description of feature 1</p>
        </div>
        <div style={{...styles.featureCard, ...styles.highlightedCard}}>
          <h3>Feature 2</h3>
          <p>Description of feature 2</p>
        </div>
        <div style={styles.featureCard}>
          <h3>Feature 3</h3>
          <p>Description of feature 3</p>
        </div>
      </section>

      {/* Content Section */}
      <section style={styles.content}>
        <p>First paragraph of text...</p>
        <p>Second paragraph of text...</p>
      </section>

      {/* What's New Section */}
      <section style={styles.whatsNew}>
        <h2>What's New</h2>
        <div style={styles.newContent}>
          <p>Latest updates and information...</p>
        </div>
      </section>

      {/* Call to Action Section */}
      <section style={styles.cta}>
        <button style={styles.ctaButton}>Hug × Hug</button>
      </section>

      {/* Footer Cards Section */}
      <section style={styles.footerCards}>
        <div style={styles.footerCard}>Card 1</div>
        <div style={styles.footerCard}>Card 2</div>
        <div style={styles.footerCard}>Card 3</div>
        <div style={styles.footerCard}>Card 4</div>
        <div style={styles.footerCard}>Card 5</div>
        <div style={styles.footerCard}>Card 6</div>
      </section>
   
    </div>
    <Footer />
    </>
    
  );
};

const styles = {
  container: {
    fontFamily: 'Arial, sans-serif',
    color: '#333',
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '20px',
    boxSizing: 'border-box',
  },
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '20px',
    backgroundColor: '#f5f5f5',
    borderRadius: '10px',
    marginBottom: '20px',
  },
  headerContent: {
    maxWidth: '60%',
  },
  headerTitle: {
    fontSize: '2em',
    margin: '0',
  },
  headerStats: {
    fontSize: '1.2em',
    margin: '10px 0 0',
  },
  headerImage: {
    width: '30%',
    height: '150px',
    backgroundColor: '#00AEEF',
    borderRadius: '10px',
  },
  features: {
    display: 'flex',
    justifyContent: 'space-between',
    marginBottom: '20px',
  },
  featureCard: {
    flex: '1',
    padding: '20px',
    margin: '0 10px',
    backgroundColor: '#fff',
    borderRadius: '10px',
    boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
    textAlign: 'center',
  },
  highlightedCard: {
    backgroundColor: '#32CD32',
    color: '#fff',
  },
  content: {
    marginBottom: '20px',
    lineHeight: '1.6',
  },
  whatsNew: {
    padding: '20px',
    backgroundColor: '#f5f5f5',
    borderRadius: '10px',
    marginBottom: '20px',
    textAlign: 'center',
  },
  newContent: {
    marginTop: '10px',
  },
  cta: {
    display: 'flex',
    justifyContent: 'center',
    marginBottom: '20px',
  },
  ctaButton: {
    padding: '20px 40px',
    backgroundColor: '#00AEEF',
    color: '#fff',
    border: 'none',
    borderRadius: '10px',
    fontSize: '1.5em',
    cursor: 'pointer',
  },
  footerCards: {
    display: 'flex',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
  },
  footerCard: {
    flex: '1',
    minWidth: '200px',
    padding: '20px',
    margin: '10px',
    backgroundColor: '#333',
    color: '#fff',
    borderRadius: '10px',
    textAlign: 'center',
  },
};

export default Scholarship;
