import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Footer from '../../../components/BookEssential/Footer';

import HomeNavbar from '../../LandingPage/essentialLanding/HomeNavbar';
import PolyNav from './PolyNav';
import LagosPolyImage from '../../../assets/poly/p2.jfif';
import KadunaPolyImage from '../../../assets/poly/p1.jfif'; 
import p34 from '../../../assets/poly/p34.jfif'
import p3 from '../../../assets/poly/p40.jfif'
import p4 from '../../../assets/poly/p39.jfif'
import p5 from '../../../assets/poly/p5.jfif'
import p6 from '../../../assets/poly/p6.jfif'
import p7 from '../../../assets/poly/p7.jfif'
import p8 from '../../../assets/poly/p8.jfif'
import p9 from '../../../assets/poly/p9.jfif'
import p10 from '../../../assets/poly/p10.jfif'
import p11 from '../../../assets/poly/p11.jfif'
import p12 from '../../../assets/poly/p12.jfif'
import p13 from '../../../assets/poly/p13.jfif'
import p14 from '../../../assets/poly/p14.jfif'
import p15 from '../../../assets/poly/p15.jfif'
import p16 from '../../../assets/poly/p16.jfif'
import p17 from '../../../assets/poly/p17.jfif'
import p18 from '../../../assets/poly/p18.jfif'
import p19 from '../../../assets/poly/p19.jfif'
import p20 from '../../../assets/poly/p20.jfif'
import p21 from '../../../assets/poly/p21.jfif'
import p22 from '../../../assets/poly/p22.jfif'
import p23 from '../../../assets/poly/p37.jfif'
import p24 from '../../../assets/poly/p24.jfif'
import p25 from '../../../assets/poly/p25.jfif'
import p26 from '../../../assets/poly/p26.jfif'
import p27 from '../../../assets/poly/p27.jfif'
import p28 from '../../../assets/poly/p28.jfif'
import p29 from '../../../assets/poly/p29.jfif'
import p30 from '../../../assets/poly/p30.jfif'
import p31 from '../../../assets/poly/p31.jfif'
import p32 from '../../../assets/poly/p32.jfif'
import p33 from '../../../assets/poly/p33.jfif'
import p36 from '../../../assets/poly/p36.jfif'
import p35 from '../../../assets/poly/p35.jfif'

























export default function StatePoly() {
  const [searchTerm, setSearchTerm] = useState('');

  const headerStyle = {
    backgroundColor: '#f8f8f8',
    padding: '90px 20px',
    textAlign: 'center',
    borderBottom: '1px solid #ddd',
    backgroundImage: `url(${p34})`, 
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    fontSize:"150%"
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
    gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
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
    minHeight: '350px',
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
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
    { name: 'Lagos State Polytechnic', description: 'Known for its strong technical and vocational programs.', link: 'https://mylaspotech.edu.ng/', image: LagosPolyImage },
    { name: 'Kaduna Polytechnic', description: 'A leading polytechnic in Northern Nigeria with diverse courses.', link: 'https://kadunapoly.edu.ng/', image: KadunaPolyImage },
    { name: 'Yaba College of Technology', description: 'Renowned for its engineering and technology programs.', link: 'https://yabatech.edu.ng/', image: p3 },
    { name: 'Kano State Polytechnic', description: 'A prominent institution with a wide range of technical courses.', link: 'https://kanopoly.edu.ng/', image: p4 },
    { name: 'Auchi Polytechnic', description: 'One of the oldest polytechnics in Nigeria, known for its excellence.', link: 'https://auchipoly.edu.ng/', image: p5 },
    { name: 'Osun State Polytechnic', description: 'Offers various technical and vocational courses.', link: 'https://ospoly.edu.ng/', image: p3 },
    { name: 'Ibadan Polytechnic', description: 'A major polytechnic in the South-West known for its academic quality.', link: 'https://polyibadan.edu.ng/', image: p4 },
    { name: 'Rufus Giwa Polytechnic', description: 'Focused on providing top-notch technical education.', link: 'https://rugipo.edu.ng/', image: p5 },
    { name: 'Abia State Polytechnic', description: 'Offers diverse programs in technology and business.', link: 'https://abiapoly.edu.ng/', image: p6 },
    { name: 'Delta State Polytechnic, Otefe-Oghara', description: 'Known for its innovative programs and research.', link: 'https://dspg.edu.ng/', image: p7 },
    { name: 'Edo State Polytechnic', description: 'A growing institution with a focus on technology.', link: 'https://edopoly.edu.ng/', image: p8 },
    { name: 'Ogun State Institute of Technology', description: 'Offers a variety of technical and vocational programs.', link: 'https://ogitech.edu.ng/', image: p9 },
    { name: 'Gateway Polytechnic', description: 'Focused on technical education and skill development.', link: 'https://gapt.edu.ng/', image: p10 },
    { name: 'Imo State Polytechnic', description: 'A key player in the technical education sector in the East.', link: 'https://imopoly.edu.ng/', image: p11 },
    { name: 'Nasarawa State Polytechnic', description: 'Offers comprehensive programs in various technical fields.', link: 'https://nasarawastatepoly.edu.ng/', image: p12 },
    { name: 'Plateau State Polytechnic', description: 'Renowned for its commitment to technical excellence.', link: 'https://plapoly.edu.ng/', image:p13 },
    { name: 'Enugu State Polytechnic', description: 'Provides quality education in technology and applied sciences.', link: 'https://espoly.edu.ng/', image:p14 },
    { name: 'Ekiti State Polytechnic', description: 'Focused on fostering innovation and technical skills.', link: 'https://eksu.edu.ng/', image:p15 },
    { name: 'Akwa Ibom State Polytechnic', description: 'Offers a wide range of technical and vocational programs.', link: 'https://akwaibompoly.edu.ng/', image:p16 },
    { name: 'Kwara State Polytechnic', description: 'Known for its strong emphasis on technical education.', link: 'https://kwarapoly.edu.ng/', image:p17 },
    { name: 'Benue State Polytechnic', description: 'A prominent institution in the North-Central region.', link: 'https://benpoly.edu.ng/', image:p18 },
    { name: 'Rivers State Polytechnic', description: 'Offers diverse programs with a focus on practical skills.', link: 'https://rivpoly.edu.ng/', image:p19 },
    { name: 'Delta State Polytechnic, Ozoro', description: 'Committed to providing quality technical education.', link: 'https://dspz.edu.ng/', image:p20 },
    { name: 'Bayelsa State Polytechnic', description: 'Focused on developing technical skills for the workforce.', link: 'https://byspoly.edu.ng/', image:p21 },
    { name: 'Anambra State Polytechnic', description: 'Known for its dedication to academic and technical excellence.', link: 'https://anspoly.edu.ng/', image:p22 },
    { name: 'Oyo State College of Agriculture and Technology', description: 'Specializes in agricultural and technical education.', link: 'https://oyscatech.edu.ng/', image:p23 },
    { name: 'Jigawa State Polytechnic', description: 'A key institution in the North-West providing technical education.', link: 'https://jigpoly.edu.ng/', image:p24 },
    { name: 'Zamfara State College of Arts and Science', description: 'Focused on arts, science, and technology programs.', link: 'https://zampoly.edu.ng/', image:p25 },
    { name: 'Niger State Polytechnic', description: 'Known for its strong technical and vocational programs.', link: 'https://nigerpoly.edu.ng/', image:p26 },
    { name: 'Taraba State Polytechnic', description: 'Offers diverse technical and vocational courses.', link: 'https://tarabapoly.edu.ng/', image:p17 },
    { name: 'Gombe State Polytechnic', description: 'Committed to providing quality technical education.', link: 'https://gsp.edu.ng/', image:p28 },
    { name: 'Kebbi State Polytechnic', description: 'Offers a variety of technical and vocational programs.', link: 'https://kebbipoly.edu.ng/', image:p29 },
    { name: 'Adamawa State Polytechnic', description: 'A prominent institution with a wide range of technical courses.', link: 'https://adamawapoly.edu.ng/', image:p30 },
    { name: 'Cross River State Polytechnic', description: 'Renowned for its engineering and technology programs.', link: 'https://crossriverpoly.edu.ng/', image: p31 },
    { name: 'Bauchi State Polytechnic', description: 'Focused on technical education and skill development.', link: 'https://bauchipoly.edu.ng/', image: p32 },
    { name: 'Borno State Polytechnic', description: 'A key player in the technical education sector in the North-East.', link: 'https://bornopoly.edu.ng/', image: p33 },
    { name: 'Sokoto State Polytechnic', description: 'Offers comprehensive programs in various technical fields.', link: 'https://sokotopoly.edu.ng/', image: p27 },
    { name: 'Ondo State Polytechnic', description: 'Renowned for its commitment to technical excellence.', link: 'https://ospoly.edu.ng/', image: p35 },

  ];

  const filteredCards = cardDetails.filter((card) =>
    card.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      <HomeNavbar />
      <header style={headerStyle}>
        <h1 style={{ fontSize: '100%', color: '#fff' }}>State Polytechnics</h1>
      </header>
      <section style={searchStyle}>
        <input
          type="text"
          placeholder="Search..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          style={{ width: '70%', padding: '10px', borderRadius: '5px', border: '1px solid #ddd' }}
        />
        <button style={buttonStyle}>Search</button>
      </section>
      <PolyNav />
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
        <p>Sed nisi. Nulla quis sem at</p>
      </footer>
      <Footer />
    </>
  );
}



















