import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Footer from '../../../components/BookEssential/Footer';

import HomeNavbar from '../../LandingPage/essentialLanding/HomeNavbar';
import PolyNav from './PolyNav';
import LagosPolyImage from '../../../assets/poly/p2.jfif';
import KadunaPolyImage from '../../../assets/poly/p1.jfif'; 
import p34 from '../../../assets/poly/p37.jfif'
import p3 from '../../../assets/poly/p38.jfif'
import p4 from '../../../assets/poly/p27.jfif'
import p5 from '../../../assets/poly/p5.jfif'
import p6 from '../../../assets/university/u12.jfif'
import p7 from '../../../assets/university/u7.jfif'
import p8 from '../../../assets/poly/p8.jfif'
import p9 from '../../../assets/poly/p9.jfif'
import p10 from '../../../assets/university/u10.jfif'
import p11 from '../../../assets/poly/p11.jfif'
import p12 from '../../../assets/poly/p12.jfif'
import p13 from '../../../assets/poly/p28.jfif'
import p14 from '../../../assets/poly/p14.jfif'
import p15 from '../../../assets/university/u16.jfif'
import p16 from '../../../assets/poly/p16.jfif'
import p17 from '../../../assets/poly/p32.jfif'
import p18 from '../../../assets/poly/p18.jfif'
import p19 from '../../../assets/poly/p30.jfif'
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
    {name: 'Yaba College of Technology', description: 'A premier institution offering diverse technical and vocational education.', link: 'https://yabatech.edu.ng/', image: LagosPolyImage },
    {  name: 'Federal Polytechnic, Ilaro', description: 'Renowned for its innovative teaching methods and industry partnerships.', link: 'https://federalpolyilaro.edu.ng/', image: KadunaPolyImage },
    { name: 'Kaduna Polytechnic', description: 'One of the largest polytechnics in Nigeria, known for its diverse programs.', link: 'https://kadunapoly.edu.ng/', image: p3 },
    { name: 'Federal Polytechnic, Nekede', description: 'A leading polytechnic committed to technological advancements.', link: 'https://fpno.edu.ng/' , image: p4 },
    { name: 'Auchi Polytechnic', description: 'A reputable institution with a strong focus on technical education.', link: 'https://auchipoly.edu.ng/', image: p5 },
    { name: 'Federal Polytechnic, Offa', description: 'Known for its comprehensive academic programs and research initiatives.', link: 'https://fedpoffaonline.edu.ng/', image: p3 },
    { name: 'Federal Polytechnic, Ado-Ekiti', description: 'A dynamic institution dedicated to excellence in technical education.', link: 'https://fedpolyado.edu.ng/', image: p4 },
    { name: 'Federal Polytechnic, Bida', description: 'Committed to providing quality education and fostering innovation.', link: 'https://fedpolybida.edu.ng/', image: p5 },
    { name: 'Federal Polytechnic, Ede', description: 'Offers a wide range of programs aimed at producing skilled professionals.', link: 'https://federalpolyede.edu.ng/', image: p6 },
    {  name: 'Federal Polytechnic, Nasarawa', description: 'Known for its strong emphasis on research and development.', link: 'https://fedpolynas.edu.ng/', image: p7 },
    { name: 'Federal Polytechnic, Oko', description: 'A center of academic excellence with a focus on practical skills.', link: 'https://federalpolyoko.edu.ng/', image: p8 },
    { name: 'Federal Polytechnic, Idah', description: 'An institution committed to nurturing technical expertise and innovation.', link: 'https://fepoda.edu.ng/', image: p9 },
    { name: 'Federal Polytechnic, Bali', description: 'Offers quality technical education aimed at addressing societal needs.', link: 'https://federalpolytechnicbali.edu.ng/', image: p10 },
    { name: 'Federal Polytechnic, Damaturu', description: 'Focused on providing accessible and affordable technical education.', link: 'https://fedpoly.edu.ng/', image: p11 },
    {name: 'Federal Polytechnic, Kaura Namoda', description: 'Known for its strong vocational and technical training programs.', link: 'https://fedpolykaura.edu.ng/', image: p12 },
    { name: 'Federal Polytechnic, Mubi', description: 'A leading polytechnic with a commitment to academic excellence.', link: 'https://fpmubi.edu.ng/', image:p13 },
    { name: 'Federal Polytechnic, Ekowe', description: 'Specializes in training for the oil and gas industry.', link: 'https://federalpolytechekowe.edu.ng/', image:p14 },
    { name: 'Federal Polytechnic, Ile-Oluji', description: 'Known for its innovative programs and industry partnerships.', link: 'https://fedpolel.edu.ng/', image:p15 },
    {  name: 'Federal Polytechnic, Ukana', description: 'A dynamic institution offering a range of technical and vocational programs.', link: 'https://federalpolyukana.edu.ng/', image:p16 },
    { name: 'Federal Polytechnic, Uwana', description: 'Dedicated to providing quality technical education and training.', link: 'https://polyunwana.edu.ng/', image:p17 },
    { name: 'Federal Polytechnic, Kaltungo', description: 'Focused on fostering innovation and technical expertise.', link: 'https://federalpolykaltungo.edu.ng/', image:p18 },
    {name: 'Federal Polytechnic of Oil and Gas, Bonny', description: 'Specializes in training for the oil and gas industry.', link: 'https://federalpolybonny.edu.ng/', image:p19 },
    { name: 'Hussaini Adamu Federal Polytechnic', description: 'Known for its diverse academic programs and practical training.', link: 'https://hafedpoly.edu.ng/', image:p20 },
    {name: 'Nigerian Army Institute of Technology and Environmental Studies, Makurdi', description: 'Focuses on military and civilian technical education.', link: 'https://naitesmkd.edu.ng/', image:p21 },
   

  ];

  const filteredCards = cardDetails.filter((card) =>
    card.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      <HomeNavbar />
      <header style={headerStyle}>
        <h1 style={{ fontSize: '100%', color: '#fff' }}>Federal Polytechnics</h1>
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














































































































