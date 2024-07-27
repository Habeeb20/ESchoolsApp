import React from 'react';
import { Link } from 'react-router-dom';
import Footer from '../../../components/BookEssential/Footer';
import SchoolNavbar from '../schoolselection/SchoolNavbar';
import { useState } from 'react';

export default function FederalPoly() {
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
    { name: 'Yaba College of Technology', description: 'A premier institution offering diverse technical and vocational education.', link: 'https://yabatech.edu.ng/' },
    { name: 'Federal Polytechnic, Ilaro', description: 'Renowned for its innovative teaching methods and industry partnerships.', link: 'https://federalpolyilaro.edu.ng/' },
    { name: 'Kaduna Polytechnic', description: 'One of the largest polytechnics in Nigeria, known for its diverse programs.', link: 'https://kadunapoly.edu.ng/' },
    { name: 'Federal Polytechnic, Nekede', description: 'A leading polytechnic committed to technological advancements.', link: 'https://fpno.edu.ng/' },
    { name: 'Auchi Polytechnic', description: 'A reputable institution with a strong focus on technical education.', link: 'https://auchipoly.edu.ng/' },
    { name: 'Federal Polytechnic, Offa', description: 'Known for its comprehensive academic programs and research initiatives.', link: 'https://fedpoffaonline.edu.ng/' },
    { name: 'Federal Polytechnic, Ado-Ekiti', description: 'A dynamic institution dedicated to excellence in technical education.', link: 'https://fedpolyado.edu.ng/' },
    { name: 'Federal Polytechnic, Bida', description: 'Committed to providing quality education and fostering innovation.', link: 'https://fedpolybida.edu.ng/' },
    { name: 'Federal Polytechnic, Ede', description: 'Offers a wide range of programs aimed at producing skilled professionals.', link: 'https://federalpolyede.edu.ng/' },
    { name: 'Federal Polytechnic, Nasarawa', description: 'Known for its strong emphasis on research and development.', link: 'https://fedpolynas.edu.ng/' },
    { name: 'Federal Polytechnic, Oko', description: 'A center of academic excellence with a focus on practical skills.', link: 'https://federalpolyoko.edu.ng/' },
    { name: 'Federal Polytechnic, Idah', description: 'An institution committed to nurturing technical expertise and innovation.', link: 'https://fepoda.edu.ng/' },
    { name: 'Federal Polytechnic, Bali', description: 'Offers quality technical education aimed at addressing societal needs.', link: 'https://federalpolytechnicbali.edu.ng/' },
    { name: 'Federal Polytechnic, Damaturu', description: 'Focused on providing accessible and affordable technical education.', link: 'https://fedpoly.edu.ng/' },
    { name: 'Federal Polytechnic, Kaura Namoda', description: 'Known for its strong vocational and technical training programs.', link: 'https://fedpolykaura.edu.ng/' },
    { name: 'Federal Polytechnic, Mubi', description: 'A leading polytechnic with a commitment to academic excellence.', link: 'https://fpmubi.edu.ng/' },
    { name: 'Federal Polytechnic, Ekowe', description: 'Specializes in training for the oil and gas industry.', link: 'https://federalpolytechekowe.edu.ng/' },
    { name: 'Federal Polytechnic, Ile-Oluji', description: 'Known for its innovative programs and industry partnerships.', link: 'https://fedpolel.edu.ng/' },
    { name: 'Federal Polytechnic, Ukana', description: 'A dynamic institution offering a range of technical and vocational programs.', link: 'https://federalpolyukana.edu.ng/' },
    { name: 'Federal Polytechnic, Uwana', description: 'Dedicated to providing quality technical education and training.', link: 'https://polyunwana.edu.ng/' },
    { name: 'Federal Polytechnic, Kaltungo', description: 'Focused on fostering innovation and technical expertise.', link: 'https://federalpolykaltungo.edu.ng/' },
    { name: 'Federal Polytechnic of Oil and Gas, Bonny', description: 'Specializes in training for the oil and gas industry.', link: 'https://federalpolybonny.edu.ng/' },
    { name: 'Federal Polytechnic, Ile-Oluji', description: 'Offers a variety of programs aimed at developing technical skills.', link: 'https://federalpolytechnicileoluji.edu.ng/' },
    { name: 'Hussaini Adamu Federal Polytechnic', description: 'Known for its diverse academic programs and practical training.', link: 'https://hafedpoly.edu.ng/' },
    { name: 'Nigerian Army Institute of Technology and Environmental Studies, Makurdi', description: 'Focuses on military and civilian technical education.', link: 'https://naitesmkd.edu.ng/' },
  ];
  const filteredCards = cardDetails.filter((card) =>
    card.name.toLowerCase().includes(searchTerm.toLowerCase())
  );


  return (
    <>
      <SchoolNavbar />
      <header style={headerStyle}>
        <h1 style={{ fontSize: '100%' }}>Federal Polytechnics in Nigeria</h1>
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
      <Footer />
    </>
  );
}

