import React from 'react';
import Footer from '../../components/BookEssential/Footer';
import Navbar from '../../components/LandingPage/Navbar';
import { Link } from 'react-router-dom';

const SchOriginal = () => {
  const headerStyle = {
    backgroundColor: '#f8f8f8',
    padding: '10px',
    textAlign: 'center',
    borderBottom: '1px solid #ddd',
  };

  const searchStyle = {
    display: 'flex',
    justifyContent: 'center',
    margin: '20px 0',
  };

  const buttonStyle = {
    backgroundColor: 'green',
    color: 'white',
    border: 'none',
    padding: '10px 20px',
    cursor: 'pointer',
  };

  const gridStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(4, 1fr)',
    gap: '20px',
    margin: '0 auto',
    maxWidth: '1200px',
    padding: '0 20px',
  };

  const cardStyle = {
    border: '1px solid #ddd',
    borderRadius: '8px',
    padding: '15px',
    textAlign: 'center',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
    minHeight: "250px"
  };

  const footerStyle = {
    backgroundColor: '#555',
    minHeight: '200px',
    padding: '20px',
    color: 'black',
    textAlign: 'center',
    borderTop: '1px solid #ddd',
    position: 'relative',
    marginTop: '20px',
  };

  const ratingStars = (rating) => {
    return '★'.repeat(rating) + '☆'.repeat(5 - rating);
  };

  return (
    <div>
        <Navbar />
      <header style={headerStyle}>
       
      </header>
      <section style={searchStyle}>
        <input type="text" placeholder="Search..." />
        <button style={buttonStyle}>Search</button>
      </section>
      <Link to="/schcomp">
      <section style={gridStyle}>
        {Array.from({ length: 12 }).map((_, index) => (
          <div key={index} style={cardStyle}>
            <h3>Unilag {index + 1}</h3>
            <div>{ratingStars(3)}</div>
          </div>
        ))}
      </section>
      </Link>
   
      <footer style={footerStyle}>
        <p>Advert Section</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        <p>Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.</p>
        <p>Sed nisi. Nulla quis sem at nibh elementum imperdiet.</p>
      </footer>
      <Footer/>
    </div>
  );
};

export default SchOriginal;
