import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Footer from '../../../components/BookEssential/Footer';
import SchoolNavbar from '../schoolselection/SchoolNavbar';

export default function PublicSec() {
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
    { name: 'Adeyemi College of Education, Ondo', description: 'One of the foremost colleges of education in Nigeria, known for its academic excellence.', link: 'https://aceondo.edu.ng/' },
    { name: 'Federal College of Education, Zaria', description: 'Renowned for training qualified teachers and educational leaders.', link: 'https://fcezaria.edu.ng/' },
    { name: 'Federal College of Education (Technical), Akoka', description: 'Specializes in technical and vocational teacher education.', link: 'https://fcetakoka.edu.ng/' },
    { name: 'Federal College of Education (Special), Oyo', description: 'Dedicated to special needs education and inclusive learning.', link: 'https://fcesoyo.edu.ng/' },
    { name: 'Federal College of Education, Kano', description: 'A leading institution in the northern region, known for quality teacher training.', link: 'https://fcekano.edu.ng/' },
    { name: 'Federal College of Education, Kontagora', description: 'Committed to producing highly skilled educators.', link: 'https://fcekg.edu.ng/' },
    { name: 'Federal College of Education, Pankshin', description: 'Known for its academic excellence and robust teacher training programs.', link: 'https://fcepankshin.edu.ng/' },
    { name: 'Federal College of Education, Eha-Amufu', description: 'Offers a variety of programs aimed at producing competent teachers.', link: 'https://fceehaamufu.edu.ng/' },
    { name: 'Federal College of Education, Obudu', description: 'A prominent college focused on comprehensive teacher education.', link: 'https://fceobudu.edu.ng/' },
    { name: 'Federal College of Education, Omoku', description: 'Offers quality education programs and teacher training.', link: 'https://fceomoku.edu.ng/' },
    { name: 'Federal College of Education (Technical), Bichi', description: 'Specializes in technical education and vocational training.', link: 'https://fcetbichi.edu.ng/' },
    { name: 'Federal College of Education, Yola', description: 'A reputable institution known for its academic and research contributions.', link: 'https://fceyola.edu.ng/' },
    { name: 'Federal College of Education, Umunze', description: 'Committed to excellence in teacher education and professional development.', link: 'https://fceumunze.edu.ng/' },
    { name: 'Federal College of Education, Asaba', description: 'Focused on providing high-quality education and training for teachers.', link: 'https://fceasaba.edu.ng/' },
    { name: 'Federal College of Education (Technical), Gombe', description: 'Dedicated to technical education and teacher training.', link: 'https://fcetgombe.edu.ng/' },
    { name: 'Federal College of Education, Zuba', description: 'Known for its innovative teaching methods and academic excellence.', link: 'https://fcezuba.edu.ng/' },
    { name: 'College of Education, Ikere-Ekiti', description: 'Offers a wide range of programs aimed at developing skilled educators.', link: 'https://coeikere.edu.ng/' },
    { name: 'College of Education, Akwanga', description: 'Focused on teacher education and academic research.', link: 'https://coeakwanga.edu.ng/' },
    { name: 'College of Education, Agbor', description: 'Known for its commitment to academic excellence and teacher training.', link: 'https://coeagbor.edu.ng/' },
    { name: 'College of Education, Oju', description: 'Offers comprehensive programs aimed at producing competent educators.', link: 'https://coeoju.edu.ng/' },
    { name: 'College of Education, Gindiri', description: 'Renowned for its teacher training and educational programs.', link: 'https://coegindiri.edu.ng/' },
    { name: 'College of Education, Katsina-Ala', description: 'Dedicated to training qualified and skilled teachers.', link: 'https://coekatsina-ala.edu.ng/' },
    { name: 'College of Education, Minna', description: 'Focused on producing competent and innovative educators.', link: 'https://coeminna.edu.ng/' },
    { name: 'College of Education, Warri', description: 'Known for its robust teacher training programs and academic excellence.', link: 'https://coewarri.edu.ng/' },
    { name: 'College of Education, Zing', description: 'Committed to providing quality education and training for teachers.', link: 'https://coezing.edu.ng/' },
    { name: 'College of Education, Ikot Ekpene', description: 'Offers a variety of programs aimed at producing skilled educators.', link: 'https://coeikotekpene.edu.ng/' },
    { name: 'College of Education, Igueben', description: 'Renowned for its dedication to academic excellence and teacher training.', link: 'https://coeigueben.edu.ng/' },
    { name: 'College of Education, Jalingo', description: 'Focused on providing high-quality teacher education and training.', link: 'https://coejalingo.edu.ng/' },
    { name: 'College of Education, Ekiadolor-Benin', description: 'A leading institution in teacher education and professional development.', link: 'https://coekiadolor.edu.ng/' },
    { name: 'College of Education, Ilorin', description: 'Offers comprehensive programs aimed at developing competent educators.', link: 'https://coeilorin.edu.ng/' },
    { name: 'College of Education, Kura', description: 'Known for its innovative teaching methods and academic excellence.', link: 'https://coekura.edu.ng/' },
  ];

  const filteredCards = cardDetails.filter((card) =>
    card.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      <SchoolNavbar />
      <header style={headerStyle}>
        <h1 style={{ fontSize: '100%' }}>Colleges of Education in Nigeria</h1>
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
