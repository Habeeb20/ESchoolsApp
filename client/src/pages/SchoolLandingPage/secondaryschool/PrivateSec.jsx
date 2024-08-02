import React from 'react'
import { Link } from 'react-router-dom'
import Footer from '../../../components/BookEssential/Footer';
import SchoolNavbar from '../schoolselection/SchoolNavbar';
import Nav from '../../../components/Nav/Nav';
import Navbar from '../../../components/LandingPage/Navbar';

export default function PrivateSec() {
  const headerStyle = {
    backgroundColor: '#f8f8f8',
    padding: '10px',
    paddingTop: "14%",
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
    minHeight: "250px",
    position: 'relative',
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

  const Fontsize = {
    fontSize:"140%"

  }

  
  const Despsize = {
    fontSize:"100%"
    
  }


  const ratingStars = (rating) => {
    return '★'.repeat(rating) + '☆'.repeat(5 - rating);
  };

  const cardDetails = [
    { name: 'Valencia Schools', description: 'A top-tier educational institution offering diverse programs.', link: '/valencia-schools' },
    { name: 'St. Catherine Schools', description: 'An esteemed school known for its excellence in academics.', link: '/st-catherine-schools' },
    { name: 'Maryland Schools', description: 'A leading school with a strong focus on holistic education.', link: '/maryland-schools' },
    { name: 'Brilliant Stars', description: 'A prestigious institution providing quality education.', link: '/brilliant-stars' },
    { name: 'Nikadex', description: 'Innovative educational programs for future leaders.', link: '/nikadex' },
    { name: 'Glorious Kings and Queens', description: 'Exceptional education with a focus on leadership skills.', link: '/glorious-kings-queens' },
    { name: 'Lead City School', description: 'A renowned school with a commitment to academic excellence.', link: '/lead-city-school' },
    { name: 'Heritage', description: 'A school with a rich tradition of academic and extracurricular success.', link: '/heritage' },
    { name: 'Sunshine', description: 'Brightening students’ futures with top-notch education.', link: '/sunshine' },
    { name: 'Diadem', description: 'An elite institution fostering educational excellence.', link: '/diadem' },
    { name: 'Best Foundation', description: 'Providing a strong foundation for future success.', link: '/best-foundation' },
    { name: 'Best Foundation', description: 'Providing a strong foundation for future success.', link: '/best-foundation' }
  ];

  return (
    <>
      <Nav />
      {/* <SchoolNavbar/> */}
      <header style={headerStyle}>
        <h1>Private Secondary Schools</h1>
      </header>
      <section style={searchStyle}>
        <input type="text" placeholder="Search..." />
        <button style={buttonStyle}>Search</button>
      </section>
      <Navbar />
      <section style={gridStyle}>
        {cardDetails.map((card, index) => (
          <div key={index} style={cardStyle}>
            <h3 style={Fontsize} >{card.name}</h3>
            <p style={Despsize}> {card.description}</p>
            <Link to={card.link}>
              <button style={buttonStyle}>Read More</button>
            </Link>
            <div>{ratingStars(3)}</div>
          </div>
        ))}
      </section>
      <footer style={footerStyle}>
        <p>Advert Section</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        <p>Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.</p>
        <p>Sed nisi. Nulla quis sem at nibh elementum imperdiet.</p>
      </footer>
      <Footer/>
    </>
  );
}
