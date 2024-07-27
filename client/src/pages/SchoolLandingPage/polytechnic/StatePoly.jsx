import React from 'react';
import { Link } from 'react-router-dom';
import Footer from '../../../components/BookEssential/Footer';
import SchoolNavbar from '../schoolselection/SchoolNavbar';
import { useState } from 'react';
export default function StatePoly() {
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
    minHeight: '250px',
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
    fontSize: '140%',
  };

  const Despsize = {
    fontSize: '100%',
  };

  const ratingStars = (rating) => {
    return '★'.repeat(rating) + '☆'.repeat(5 - rating);
  };

  const cardDetails = [
    { name: 'Lagos State Polytechnic', description: 'Known for its strong technical and vocational programs.', link: 'https://mylaspotech.edu.ng/' },
    { name: 'Kaduna Polytechnic', description: 'A leading polytechnic in Northern Nigeria with diverse courses.', link: 'https://kadunapoly.edu.ng/' },
    { name: 'Yaba College of Technology', description: 'Renowned for its engineering and technology programs.', link: 'https://yabatech.edu.ng/' },
    { name: 'Kano State Polytechnic', description: 'A prominent institution with a wide range of technical courses.', link: 'https://kanopoly.edu.ng/' },
    { name: 'Auchi Polytechnic', description: 'One of the oldest polytechnics in Nigeria, known for its excellence.', link: 'https://auchipoly.edu.ng/' },
    { name: 'Osun State Polytechnic', description: 'Offers various technical and vocational courses.', link: 'https://ospoly.edu.ng/' },
    { name: 'Ibadan Polytechnic', description: 'A major polytechnic in the South-West known for its academic quality.', link: 'https://polyibadan.edu.ng/' },
    { name: 'Rufus Giwa Polytechnic', description: 'Focused on providing top-notch technical education.', link: 'https://rugipo.edu.ng/' },
    { name: 'Abia State Polytechnic', description: 'Offers diverse programs in technology and business.', link: 'https://abiapoly.edu.ng/' },
    { name: 'Delta State Polytechnic, Otefe-Oghara', description: 'Known for its innovative programs and research.', link: 'https://dspg.edu.ng/' },
    { name: 'Edo State Polytechnic', description: 'A growing institution with a focus on technology.', link: 'https://edopoly.edu.ng/' },
    { name: 'Ogun State Institute of Technology', description: 'Offers a variety of technical and vocational programs.', link: 'https://ogitech.edu.ng/' },
    { name: 'Gateway Polytechnic', description: 'Focused on technical education and skill development.', link: 'https://gapt.edu.ng/' },
    { name: 'Imo State Polytechnic', description: 'A key player in the technical education sector in the East.', link: 'https://imopoly.edu.ng/' },
    { name: 'Nasarawa State Polytechnic', description: 'Offers comprehensive programs in various technical fields.', link: 'https://nasarawastatepoly.edu.ng/' },
    { name: 'Plateau State Polytechnic', description: 'Renowned for its commitment to technical excellence.', link: 'https://plapoly.edu.ng/' },
    { name: 'Enugu State Polytechnic', description: 'Provides quality education in technology and applied sciences.', link: 'https://espoly.edu.ng/' },
    { name: 'Ekiti State Polytechnic', description: 'Focused on fostering innovation and technical skills.', link: 'https://eksu.edu.ng/' },
    { name: 'Akwa Ibom State Polytechnic', description: 'Offers a wide range of technical and vocational programs.', link: 'https://akwaibompoly.edu.ng/' },
    { name: 'Kwara State Polytechnic', description: 'Known for its strong emphasis on technical education.', link: 'https://kwarapoly.edu.ng/' },
    { name: 'Benue State Polytechnic', description: 'A prominent institution in the North-Central region.', link: 'https://benpoly.edu.ng/' },
    { name: 'Rivers State Polytechnic', description: 'Offers diverse programs with a focus on practical skills.', link: 'https://rivpoly.edu.ng/' },
    { name: 'Delta State Polytechnic, Ozoro', description: 'Committed to providing quality technical education.', link: 'https://dspz.edu.ng/' },
    { name: 'Bayelsa State Polytechnic', description: 'Focused on developing technical skills for the workforce.', link: 'https://byspoly.edu.ng/' },
    { name: 'Anambra State Polytechnic', description: 'Known for its dedication to academic and technical excellence.', link: 'https://anspoly.edu.ng/' },
    { name: 'Oyo State College of Agriculture and Technology', description: 'Specializes in agricultural and technical education.', link: 'https://oyscatech.edu.ng/' },
    { name: 'Jigawa State Polytechnic', description: 'A key institution in the North-West providing technical education.', link: 'https://jigpoly.edu.ng/' },
    { name: 'Zamfara State College of Arts and Science', description: 'Focused on arts, science, and technology programs.', link: 'https://zampoly.edu.ng/' },
    { name: 'Niger State Polytechnic', description: 'Known for its strong technical and vocational programs.', link: 'https://nigerpoly.edu.ng/' },
    { name: 'Taraba State Polytechnic', description: 'Offers diverse technical and vocational courses.', link: 'https://tarabapoly.edu.ng/' },
    { name: 'Gombe State Polytechnic', description: 'Committed to providing quality technical education.', link: 'https://gsp.edu.ng/' },
    { name: 'Kebbi State Polytechnic', description: 'Offers a variety of technical and vocational programs.', link: 'https://kebbipoly.edu.ng/' },
    { name: 'Adamawa State Polytechnic', description: 'A prominent institution with a wide range of technical courses.', link: 'https://adamawapoly.edu.ng/' },
    { name: 'Cross River State Polytechnic', description: 'Renowned for its engineering and technology programs.', link: 'https://crossriverpoly.edu.ng/' },
    { name: 'Bauchi State Polytechnic', description: 'Focused on technical education and skill development.', link: 'https://bauchipoly.edu.ng/' },
    { name: 'Borno State Polytechnic', description: 'A key player in the technical education sector in the North-East.', link: 'https://bornopoly.edu.ng/' },
    { name: 'Sokoto State Polytechnic', description: 'Offers comprehensive programs in various technical fields.', link: 'https://sokotopoly.edu.ng/' },
    { name: 'Ondo State Polytechnic', description: 'Renowned for its commitment to technical excellence.', link: 'https://ospoly.edu.ng/' },
  ];
  const filteredCards = cardDetails.filter((card) =>
    card.name.toLowerCase().includes(searchTerm.toLowerCase())
  );


  return (
    <>
      <SchoolNavbar />
      <header style={headerStyle}>
      <h1 style={{ fontSize: '100%' }}>State Polytechnics</h1>
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
        <p>Sed nisi. Nulla quis sem at </p>
        </footer>
        <Footer />
        </>
  )
}
