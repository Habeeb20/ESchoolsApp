import React from 'react';
import Footer from '../../components/BookEssential/Footer';
import Navbar from '../../components/LandingPage/Navbar';
import SchComp2 from './SchComp';
import SchoolNavbar from './schoolselection/SchoolNavbar';

const SchoolLandingPage = () => {
  return (
    <>
 
    {/* <Navbar /> */}
    <SchoolNavbar />
    {/* <div style={styles.appContainer}>
      <header style={styles.header}>
        <h1 style={styles.title}>Product Details</h1>
        <div style={styles.reviewSection}>
          <p>
            Product review and rating section where users can drop their reviews.
          </p>
          <button style={styles.reviewButton}>Add Review</button>
        </div>
      </header>

      <section style={styles.detailsSection}>
        <h2 style={styles.subtitle}>Product Information</h2>
        <p>
          Detailed product information and specifications, highlighting the key features and benefits of the product.
        </p>
        <div style={styles.imageGrid}>
          {[...Array(6)].map((_, index) => (
            <div key={index} style={styles.imageCard}>
              <img src="https://via.placeholder.com/150" alt="product" style={styles.image}/>
            </div>
          ))}
        </div>
      </section>

      <section style={styles.relatedSection}>
        <h2 style={styles.subtitle}>Related Products</h2>
        <div style={styles.relatedGrid}>
          {[...Array(6)].map((_, index) => (
            <div key={index} style={styles.relatedCard}>
              <p>Product Name</p>
              <p>Price: $100</p>
            </div>
          ))}
        </div>
      </section>

      <footer style={styles.footer}>
        <div style={styles.newsletter}>
          <p>Subscribe to our newsletter for the latest updates and offers</p>
          <input type="email" placeholder="Enter your email" style={styles.input}/>
          <button style={styles.button}>Subscribe</button>
        </div>
      </footer>
     
    </div> */}
    {/* <SchComp2 />
      <Footer /> */}
    </>
  );
};

// const styles = {
//   appContainer: {
//     fontFamily: 'Arial, sans-serif',
//     color: '#010101',
//     backgroundColor: '#f3f3f3',
//     padding: '20px',
//   },
//   header: {
//     padding: '20px',
//     backgroundColor: '#fff',
//     marginBottom: '20px',
//     borderRadius: '5px',
//     textAlign: 'center',
//   },
//   title: {
//     fontSize: '24px',
//     color: '#28a745',
//   },
//   reviewSection: {
//     marginTop: '10px',
//   },
//   reviewButton: {
//     backgroundColor: '#28a745',
//     color: '#fff',
//     border: 'none',
//     padding: '10px 20px',
//     borderRadius: '5px',
//     cursor: 'pointer',
//   },
//   detailsSection: {
//     padding: '20px',
//     backgroundColor: '#fff',
//     marginBottom: '20px',
//     borderRadius: '5px',
//   },
//   subtitle: {
//     fontSize: '20px',
//     color: '#28a745',
//     marginBottom: '10px',
//   },
//   imageGrid: {
//     display: 'grid',
//     gridTemplateColumns: 'repeat(auto-fill, minmax(150px, 1fr))',
//     gap: '10px',
//   },
//   imageCard: {
//     backgroundColor: '#e9ecef',
//     borderRadius: '5px',
//     padding: '10px',
//     textAlign: 'center',
//   },
//   image: {
//     maxWidth: '100%',
//     height: 'auto',
//     borderRadius: '5px',
//   },
//   relatedSection: {
//     padding: '20px',
//     backgroundColor: '#fff',
//     marginBottom: '20px',
//     borderRadius: '5px',
//   },
//   relatedGrid: {
//     display: 'grid',
//     gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
//     gap: '10px',
//   },
//   relatedCard: {
//     backgroundColor: '#e9ecef',
//     borderRadius: '5px',
//     padding: '10px',
//     textAlign: 'center',
//   },
//   footer: {
//     padding: '20px',
//     backgroundColor: '#fff',
//     borderRadius: '5px',
//     textAlign: 'center',
//   },
//   newsletter: {
//     marginBottom: '20px',
//   },
//   input: {
//     padding: '10px',
//     borderRadius: '5px',
//     border: '1px solid #28a745',
//     marginBottom: '10px',
//     width: '80%',
//   },
//   button: {
//     backgroundColor: '#28a745',
//     color: '#fff',
//     border: 'none',
//     padding: '10px 20px',
//     borderRadius: '5px',
//     cursor: 'pointer',
//   },
// };

export default SchoolLandingPage;
