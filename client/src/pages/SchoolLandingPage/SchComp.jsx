import React from 'react';
import Footer from '../../components/BookEssential/Footer';
import Navbar from '../../components/LandingPage/Navbar';

const styles = {
  container: {
    fontFamily: 'Arial, sans-serif',
  },
  header: {
    backgroundColor: '#f4f4f4',
    padding: '20px',
    textAlign: 'center',
  },
  nav: {
    display: 'flex',
    justifyContent: 'space-around',
    backgroundColor: '#333',
    padding: '10px',
  },
  navItem: {
    color: 'white',
    textDecoration: 'none',
  },
  hero: {
    backgroundColor: '#e8f5e9',
    padding: '40px',
    textAlign: 'center',
  },
  form: {
    backgroundColor: '#333',
    color: 'white',
    padding: '20px',
    borderRadius: '5px',
    maxWidth: '400px',
    margin: '0 auto',
  },
  formField: {
    marginBottom: '15px',
  },
  input: {
    width: '100%',
    padding: '10px',
    margin: '5px 0',
    borderRadius: '5px',
  },
  button: {
    backgroundColor: 'green',
    color: 'white',
    border: 'none',
    padding: '10px 20px',
    cursor: 'pointer',
    borderRadius: '5px',
  },
  section: {
    padding: '20px',
    marginBottom: '20px',
  },
  yellowSection: {
    backgroundColor: '#fffde7',
  },
  graySection: {
    backgroundColor: '#f5f5f5',
  },
  gridContainer: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: '20px',
  },
  card: {
    backgroundColor: 'white',
    padding: '20px',
    borderRadius: '5px',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
  },
  footer: {
    backgroundColor: '#333',
    color: 'white',
    textAlign: 'center',
    padding: '20px',
  },
  logo: {
    marginBottom: '10px',
  },
  links: {
    marginBottom: '10px',
  },
};

const SchComp2 = () => {
  return (
    <div style={styles.container}>
      <Navbar />
      <header style={styles.header}>
        <h1>Don't Just Study Business, Do It</h1>
        <p>Learn more about our undergraduate business programs</p>
      </header>

      <nav style={styles.nav}>
        <a href="#" style={styles.navItem}>Home</a>
        <a href="#" style={styles.navItem}>About</a>
        <a href="#" style={styles.navItem}>Programs</a>
        <a href="#" style={styles.navItem}>Admissions</a>
        <a href="#" style={styles.navItem}>Contact</a>
      </nav>

      <section style={styles.hero}>
        <div style={styles.form}>
          <h2>Learn more about our undergraduate business programs</h2>
          <form>
            <div style={styles.formField}>
              <label>Email:</label>
              <input type="email" style={styles.input} />
            </div>
            <div style={styles.formField}>
              <label>First Name:</label>
              <input type="text" style={styles.input} />
            </div>
            <div style={styles.formField}>
              <label>Last Name:</label>
              <input type="text" style={styles.input} />
            </div>
            <div style={styles.formField}>
              <label>Country:</label>
              <input type="text" style={styles.input} />
            </div>
            <div style={styles.formField}>
              <label>Phone:</label>
              <input type="tel" style={styles.input} />
            </div>
            <button type="submit" style={styles.button}>Request Information</button>
          </form>
        </div>
      </section>

      <section style={{ ...styles.section, ...styles.yellowSection }}>
        <h2>Rankings, Accreditations, Awards & Partnerships</h2>
        <p>We are recognized for our excellence in business education and our strong industry connections.</p>
      </section>

      <section style={{ ...styles.section, ...styles.graySection }}>
        <h2>Undergraduate Business School Rankings</h2>
        <div style={styles.gridContainer}>
          <div style={styles.card}>
            <h3>Best Undergraduate International Programs</h3>
            <p>We are ranked among the top 10 undergraduate international programs by Business School Rankings.</p>
          </div>
          <div style={styles.card}>
            <h3>Top Undergraduate Business Schools</h3>
            <p>Our undergraduate business school is ranked among the top 50 in the world.</p>
          </div>
        </div>
      </section>

      <section style={{ ...styles.section, ...styles.yellowSection }}>
        <h2>Accreditations</h2>
        <p>We are accredited by the leading business school accreditation bodies, ensuring the highest standards of quality and excellence.</p>
        <div style={styles.gridContainer}>
          <div style={styles.card}>
            <h3>AACSB</h3>
            <p>The Association to Advance Collegiate Schools of Business</p>
          </div>
          <div style={styles.card}>
            <h3>EFMD</h3>
            <p>European Foundation for Management Development</p>
          </div>
        </div>
      </section>

      <section style={{ ...styles.section, ...styles.graySection }}>
        <h2>Awards</h2>
        <p>We have received numerous awards for our innovative programs and outstanding faculty.</p>
        <div style={styles.gridContainer}>
          <div style={styles.card}>
            <h3>Innovation Award</h3>
            <p>Recognized for our innovative approach to business education.</p>
          </div>
          <div style={styles.card}>
            <h3>Excellence in Teaching</h3>
            <p>Awarded for our commitment to excellence in teaching.</p>
          </div>
        </div>
      </section>

      <section style={{ ...styles.section, ...styles.yellowSection }}>
        <h2>Go Global</h2>
        <p>Join our global network and take advantage of our international partnerships and opportunities.</p>
        <div style={styles.gridContainer}>
          <div style={styles.card}>
            <h3>Study Abroad</h3>
            <p>Participate in our study abroad programs and gain global experience.</p>
          </div>
          <div style={styles.card}>
            <h3>Global Campus Network</h3>
            <p>Access our global campus network and take courses from anywhere in the world.</p>
          </div>
        </div>
      </section>
      <footer style={styles.footer}>
        <div style={styles.newsletter}>
          <p>Subscribe to our newsletter for the latest updates and offers</p>
          <input type="email" placeholder="Enter your email" style={styles.input}/>
          <button style={styles.button}>Subscribe</button>
        </div>
      </footer>
      <Footer />

      {/* <footer style={styles.footer}>
        <div style={styles.logo}>Logo</div>
        <div style={styles.links}>
          <a href="#" style={styles.navItem}>Privacy Policy</a> | <a href="#" style={styles.navItem}>Terms of Service</a> | <a href="#" style={styles.navItem}>Contact Us</a>
        </div>
        <p>&copy; 2024 Your Business School. All Rights Reserved.</p>
      </footer> */}
    </div>
  );
};

export default SchComp2;
