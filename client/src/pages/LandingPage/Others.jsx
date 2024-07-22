import React from 'react';

const Others = () => {
  return (
    <div style={styles.appContainer}>
      <section style={styles.studentJobSection}>
        <h2 style={styles.sectionTitle}>Student Job Section</h2>
        <p>Find the perfect job to suit your schedule and skills.</p>
      </section>

      <section style={styles.financialAssistanceSection}>
        <h2 style={styles.sectionTitle}>Student Financial Assistance Loan</h2>
        <p>Get the financial support you need to succeed.</p>
        <div>
          <button style={styles.getStartedButton}>Get Started</button>
          <button style={styles.scholarshipButton}>Scholarship</button>
        </div>
      </section>

      <section style={styles.otherChoiceSection}>
        <h2 style={styles.sectionTitle}>Other Choices</h2>
        <div style={styles.imageGrid}>
          {[...Array(6)].map((_, index) => (
            <div key={index} style={styles.imageCard}>
              <img src="https://via.placeholder.com/150" alt="Choice" style={styles.image} />
              <p>Option {index + 1}</p>
            </div>
          ))}
        </div>
      </section>

      <section style={styles.shortVideoSection}>
        <h2 style={styles.sectionTitle}>Short Video Section</h2>
        <div style={styles.videoGrid}>
          {[...Array(4)].map((_, index) => (
            <div key={index} style={styles.videoCard}>
              <img src="https://via.placeholder.com/150" alt="Video" style={styles.image} />
            </div>
          ))}
        </div>
      </section>

      <section style={styles.blogSection}>
        <h2 style={styles.sectionTitle}>E Direct Blog Section</h2>
        <p>Read our latest blog posts and updates.</p>
      </section>

      <section style={styles.disclosureSection}>
        <h2 style={styles.sectionTitle}>Disclosure and Barring Service</h2>
        <p>Ensure safety and professionalism with our checks.</p>
        <div>
          <button style={styles.backgroundCheckButton}>Background Check</button>
          <button style={styles.professionalCheckButton}>Professional Check</button>
        </div>
      </section>
    </div>
  );
};

const styles = {
  appContainer: {
    fontFamily: 'Arial, sans-serif',
    padding: '20px',
  },
  sectionTitle: {
    fontSize: '24px',
    marginBottom: '10px',
  },
  studentJobSection: {
    backgroundColor: '#000',
    color: '#fff',
    padding: '20px',
    marginBottom: '20px',
    textAlign: 'center',
  },
  financialAssistanceSection: {
    backgroundColor: '#b0b0b0',
    color: '#fff',
    padding: '20px',
    marginBottom: '20px',
    textAlign: 'center',
  },
  getStartedButton: {
    backgroundColor: '#28a745',
    color: '#fff',
    border: 'none',
    padding: '10px 20px',
    margin: '10px',
    borderRadius: '5px',
    cursor: 'pointer',
  },
  scholarshipButton: {
    backgroundColor: 'transparent',
    color: '#fff',
    border: '2px solid #28a745',
    padding: '10px 20px',
    margin: '10px',
    borderRadius: '5px',
    cursor: 'pointer',
  },
  otherChoiceSection: {
    backgroundColor: '#fff',
    color: '#010101',
    padding: '20px',
    marginBottom: '20px',
    textAlign: 'center',
  },
  imageGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(150px, 1fr))',
    gap: '10px',
  },
  imageCard: {
    backgroundColor: '#e9ecef',
    borderRadius: '5px',
    padding: '10px',
    textAlign: 'center',
  },
  image: {
    maxWidth: '100%',
    height: 'auto',
    borderRadius: '5px',
  },
  shortVideoSection: {
    backgroundColor: '#fff',
    color: '#010101',
    padding: '20px',
    marginBottom: '20px',
    textAlign: 'center',
  },
  videoGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(150px, 1fr))',
    gap: '10px',
  },
  videoCard: {
    backgroundColor: '#e9ecef',
    borderRadius: '5px',
    padding: '10px',
    textAlign: 'center',
  },
  blogSection: {
    backgroundColor: '#b0b0b0',
    color: '#fff',
    padding: '20px',
    marginBottom: '20px',
    textAlign: 'center',
  },
  disclosureSection: {
    backgroundColor: '#fff',
    color: '#010101',
    padding: '20px',
    marginBottom: '20px',
    textAlign: 'center',
  },
  backgroundCheckButton: {
    backgroundColor: '#007bff',
    color: '#fff',
    border: 'none',
    padding: '10px 20px',
    margin: '10px',
    borderRadius: '5px',
    cursor: 'pointer',
  },
  professionalCheckButton: {
    backgroundColor: '#dc3545',
    color: '#fff',
    border: 'none',
    padding: '10px 20px',
    margin: '10px',
    borderRadius: '5px',
    cursor: 'pointer',
  },
};

export default Others;
