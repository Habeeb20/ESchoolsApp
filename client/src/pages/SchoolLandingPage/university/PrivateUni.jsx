import React from 'react'
import { Link } from 'react-router-dom'
import Footer from '../../../components/BookEssential/Footer';
import SchoolNavbar from '../schoolselection/SchoolNavbar';
import { useState } from 'react';
export default function PrivateUni() {
  const [searchTerm, setSearchTerm] = useState('');
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
    { name: 'Covenant University', description: 'A leading private university with a commitment to academic excellence.', link: 'https://www.covenantuniversity.edu.ng/' },
    { name: 'Babcock University', description: 'An esteemed university known for its diverse programs and quality education.', link: 'https://www.babcock.edu.ng/' },
    { name: 'Afe Babalola University', description: 'A renowned institution offering innovative educational programs.', link: 'https://www.abuad.edu.ng/' },
    { name: 'American University of Nigeria', description: 'Providing an American-style education in Nigeria.', link: 'https://www.aun.edu.ng/' },
    { name: 'Bowen University', description: 'A prestigious university with a focus on holistic education.', link: 'https://www.bowen.edu.ng/' },
    { name: 'Igbinedion University', description: 'The first private university in Nigeria, known for its academic excellence.', link: 'https://www.iuokada.edu.ng/' },
    { name: 'Pan-Atlantic University', description: 'Committed to providing world-class education.', link: 'https://www.pau.edu.ng/' },
    { name: 'Bells University of Technology', description: 'A technology-focused institution aimed at fostering innovation.', link: 'https://www.bellsuniversity.edu.ng/' },
    { name: 'Redeemer\'s University', description: 'A Christian university dedicated to raising leaders.', link: 'https://www.run.edu.ng/' },
    { name: 'Caleb University', description: 'Offering quality education with a focus on leadership and development.', link: 'https://www.calebuniversity.edu.ng/' },
    { name: 'Joseph Ayo Babalola University', description: 'A faith-based institution committed to academic excellence.', link: 'https://www.jabu.edu.ng/' },
    { name: 'Ajayi Crowther University', description: 'A reputable university with a strong emphasis on research and development.', link: 'https://www.acu.edu.ng/' },
    { name: 'Baze University', description: 'known for its innotive educational approach and international partnerships', link: 'https://www.bazeuniversity.edu.ng/' },
    { name: 'Landmark University', description: 'Focuses on agrarian reform and offers unique programs in agriculture and engineering.', link: 'https://www.lmu.edu.ng/' },
    { name: 'Veritas University', description: 'A Catholic university dedicated to providing a value-based education.', link: 'www.veritas.edu.ng' },
    { name: 'Nile University of Nigeria', description:'Known for its diverse programs and international faculty', link: 'https://www.nileuniversity.edu.ng/' },
    { name: 'Madonna University', description: 'A catholic institution with a focus on providing a holistic education', link: 'https://www.madonnauniversity.edu.ng/' },
  ];
  const filteredCards = cardDetails.filter((card) =>
    card.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      <SchoolNavbar/>
      <header style={headerStyle}>
      <h1 style={{ fontSize: '100%' }}>Private Universities</h1>
      </header>
      <section style={searchStyle}>
        <input
          type="text"
          placeholder="Search..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button style={buttonStyle}>Search</button>
      </section>
      <section style={gridStyle}>
        {filteredCards.map((card, index) => (
          <div key={index} style={cardStyle}>
            <h3 style={Fontsize}>{card.name}</h3>
            <p style={Despsize}>{card.description}</p>
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
