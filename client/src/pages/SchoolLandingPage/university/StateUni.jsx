import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Footer from '../../../components/BookEssential/Footer';
import HomeNavbar from '../../LandingPage/essentialLanding/HomeNavbar';
import UniNav from './UniNav';
import u1 from '../../../assets/university/u.jfif'
import u2 from '../../../assets/university/u2.jfif'
import u3 from '../../../assets/university/u3.jfif'
import u4 from '../../../assets/university/u4.jfif'
import u5 from '../../../assets/university/u5.jfif'
import u6 from '../../../assets/university/u6.jfif'
import u7 from '../../../assets/university/u7.jfif'
import u8 from '../../../assets/university/u8.jfif'
import u9 from '../../../assets/university/u9.jfif'
import u10 from '../../../assets/university/u10.jfif'
import u11 from '../../../assets/university/u11.jfif'
import u12 from '../../../assets/university/u12.jfif'
import u13 from '../../../assets/university/u13.jfif'
import u14 from '../../../assets/university/u14.jfif'
import u15 from '../../../assets/university/u15.jpg'

import u16 from '../../../assets/university/u16.jfif'
import u17 from '../../../assets/university/u17.jfif'
import u18 from '../../../assets/university/u18.jfif'
import u19 from '../../../assets/university/u19.jfif'
import u20 from '../../../assets/university/u20.jfif'











export default function StateUni() {
  const [searchTerm, setSearchTerm] = useState('');

  const headerStyle = {
    backgroundColor: '#f8f8f8',
    padding: '80px 20px',
    textAlign: 'center',
    borderBottom: '1px solid #ddd',
    backgroundImage: `url(${u1})`, // Replace with actual URL
    backgroundSize: 'cover',
    color: 'white',
    fontSize:"180%"
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
    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
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

  const imageStyle = {
    width: '100%',
    height: '150px',
    objectFit: 'cover',
    borderRadius: '8px 8px 0 0',
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
    { name: 'Lagos State University', description: 'Known for its diverse programs and academic excellence.', link: 'https://lasu.edu.ng/', image: u1 },
    { name: 'Rivers State University', description: 'A leading institution in the Niger Delta region.', link: 'https://ust.edu.ng/', image: u2},
    { name: 'Olabisi Onabanjo University', description: 'Renowned for its research and teaching in various fields.', link: 'https://oouagoiwoye.edu.ng/', image: u3 },
    { name: 'Ekiti State University', description: 'Committed to providing quality education and research.', link: 'https://eksu.edu.ng/', image: u4 },
    { name: 'Ambrose Alli University', description: 'A prominent university known for its academic rigor.', link: 'https://aauekpoma.edu.ng/', image: u5},
    { name: 'Ladoke Akintola University of Technology', description: 'A technology-focused institution fostering innovation.', link: 'https://lautech.edu.ng/', image: u6 },
    { name: 'Kwara State University', description: 'An emerging institution with a strong academic focus.', link: 'https://kwasu.edu.ng/', image: u7 },
    { name: 'Benue State University', description: 'Known for its diverse academic programs and research.', link: 'https://bsum.edu.ng/', image: u8 },
    { name: 'Delta State University', description: 'A dynamic institution with a commitment to excellence.', link: 'https://delsu.edu.ng/', image: u9 },
    { name: 'Abia State University', description: 'Focused on providing high-quality education and research.', link: 'https://abiastateuniversity.edu.ng/', image: u10 },
    { name: 'Enugu State University of Science and Technology', description: 'A leading institution in science and technology education.', link: 'https://esut.edu.ng/', image: u11},
    { name: 'Nasarawa State University', description: 'Committed to academic excellence and community service.', link: 'https://nsuk.edu.ng/', image: u12 },
    { name: 'Ebonyi State University', description: 'Known for its academic rigor and research initiatives.', link: 'https://ebsu.edu.ng/', image: u13 },
    { name: 'Osun State University', description: 'A fast-growing institution with a focus on innovation.', link: 'https://uniosun.edu.ng/', image: u14 },
    { name: 'Bauchi State University', description: 'Dedicated to providing accessible and affordable education.', link: 'https://basug.edu.ng/', image: u15 },
    { name: 'Kano University of Science and Technology', description: 'Focused on science and technology education.', link: 'https://kustwudil.edu.ng/', image: u16 },
    { name: 'Gombe State University', description: 'An emerging institution committed to academic excellence.', link: 'https://gsu.edu.ng/', image: u17 },
    { name: 'Adamawa State University', description: 'Known for its commitment to quality education.', link: 'https://adsu.edu.ng/', image: u18 },
    { name: 'Taraba State University', description: 'Providing high-quality education and fostering innovation.', link: 'https://tsuniversity.edu.ng/', image: u19 },
    { name: 'Umaru Musa Yar\'adua University', description: 'A prominent institution named after a former president.', link: 'https://umyu.edu.ng/', image: u20 },
    { name: 'Plateau State University', description: 'Committed to providing quality education and research.', link: 'https://plasu.edu.ng/', image: u1 },
    { name: 'Ondo State University of Science and Technology', description: 'A technology-focused institution fostering innovation.', link: 'https://osustech.edu.ng/', image: u2 },
    { name: 'Ibrahim Badamasi Babangida University', description: 'Known for its diverse programs and academic excellence.', link: 'https://ibbu.edu.ng/', image: u3 },
    { name: 'Tai Solarin University of Education', description: 'A leading institution in teacher education.', link: 'https://tasued.edu.ng/', image: u6},
    { name: 'Kebbi State University of Science and Technology', description: 'Focused on science and technology education.', link: 'https://ksusta.edu.ng/', image: u8},
    { name: 'Yobe State University', description: 'An emerging institution committed to academic excellence.', link: 'https://ysu.edu.ng/', image: u9 },
    { name: 'Sokoto State University', description: 'Providing high-quality education and fostering innovation.', link: 'https://ssu.edu.ng/', image:u15 },
    { name: 'Borno State University', description: 'A new institution dedicated to providing quality education.', link: 'https://bosu.edu.ng/', image: u13 },
    { name: 'Gombe State University of Science and Technology', description: 'Focused on science and technology education.', link: 'https://gsust.edu.ng/', image: u12 },
    { name: 'Bayelsa Medical University', description: 'Specializes in medical and health sciences.', link: 'https://bmu.edu.ng/', image: u20 },
    { name: 'Moshood Abiola University of Science and Technology', description: 'A technology-focused institution fostering innovation.', link: 'https://mautech.edu.ng/', image: u18},
  ];

  const filteredCards = cardDetails.filter((card) =>
    card.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      <HomeNavbar />
      <header style={headerStyle}>
        <h1 style={{ fontSize: '100%' }}>State Universities</h1>
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
      <UniNav />
      <section style={gridStyle}>
        {filteredCards.map((card, index) => (
          <div key={index} style={cardStyle}>
            <img src={card.image} alt={card.name} style={imageStyle} />
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
      <Footer />
    </>
  );
}
