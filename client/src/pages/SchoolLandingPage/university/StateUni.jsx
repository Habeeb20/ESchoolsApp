import React from 'react';
import { Link } from 'react-router-dom';
import Footer from '../../../components/BookEssential/Footer';
import SchoolNavbar from '../schoolselection/SchoolNavbar';
import { useState } from 'react';
export default function StateUni() {
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
    { name: 'Lagos State University', description: 'Known for its diverse programs and academic excellence.', link: 'https://lasu.edu.ng/' },
    { name: 'Rivers State University', description: 'A leading institution in the Niger Delta region.', link: 'https://ust.edu.ng/' },
    { name: 'Olabisi Onabanjo University', description: 'Renowned for its research and teaching in various fields.', link: 'https://oouagoiwoye.edu.ng/' },
    { name: 'Ekiti State University', description: 'Committed to providing quality education and research.', link: 'https://eksu.edu.ng/' },
    { name: 'Ambrose Alli University', description: 'A prominent university known for its academic rigor.', link: 'https://aauekpoma.edu.ng/' },
    { name: 'Ladoke Akintola University of Technology', description: 'A technology-focused institution fostering innovation.', link: 'https://lautech.edu.ng/' },
    { name: 'Kwara State University', description: 'An emerging institution with a strong academic focus.', link: 'https://kwasu.edu.ng/' },
    { name: 'Benue State University', description: 'Known for its diverse academic programs and research.', link: 'https://bsum.edu.ng/' },
    { name: 'Delta State University', description: 'A dynamic institution with a commitment to excellence.', link: 'https://delsu.edu.ng/' },
    { name: 'Abia State University', description: 'Focused on providing high-quality education and research.', link: 'https://abiastateuniversity.edu.ng/' },
    { name: 'Enugu State University of Science and Technology', description: 'A leading institution in science and technology education.', link: 'https://esut.edu.ng/' },
    { name: 'Nasarawa State University', description: 'Committed to academic excellence and community service.', link: 'https://nsuk.edu.ng/' },
    { name: 'Ebonyi State University', description: 'Known for its academic rigor and research initiatives.', link: 'https://ebsu.edu.ng/' },
    { name: 'Osun State University', description: 'A fast-growing institution with a focus on innovation.', link: 'https://uniosun.edu.ng/' },
    { name: 'Bauchi State University', description: 'Dedicated to providing accessible and affordable education.', link: 'https://basug.edu.ng/' },
    { name: 'Kano University of Science and Technology', description: 'Focused on science and technology education.', link: 'https://kustwudil.edu.ng/' },
    { name: 'Gombe State University', description: 'An emerging institution committed to academic excellence.', link: 'https://gsu.edu.ng/' },
    { name: 'Adamawa State University', description: 'Known for its commitment to quality education.', link: 'https://adsu.edu.ng/' },
    { name: 'Taraba State University', description: 'Providing high-quality education and fostering innovation.', link: 'https://tsuniversity.edu.ng/' },
    { name: 'Umaru Musa Yar\'adua University', description: 'A prominent institution named after a former president.', link: 'https://umyu.edu.ng/' },
    { name: 'Plateau State University', description: 'Committed to providing quality education and research.', link: 'https://plasu.edu.ng/' },
    { name: 'Ondo State University of Science and Technology', description: 'A technology-focused institution fostering innovation.', link: 'https://osustech.edu.ng/' },
    { name: 'Ibrahim Badamasi Babangida University', description: 'Known for its diverse programs and academic excellence.', link: 'https://ibbu.edu.ng/' },
    { name: 'Tai Solarin University of Education', description: 'A leading institution in teacher education.', link: 'https://tasued.edu.ng/' },
    { name: 'Kebbi State University of Science and Technology', description: 'Focused on science and technology education.', link: 'https://ksusta.edu.ng/' },
    { name: 'Yobe State University', description: 'An emerging institution committed to academic excellence.', link: 'https://ysu.edu.ng/' },
    { name: 'Sokoto State University', description: 'Providing high-quality education and fostering innovation.', link: 'https://ssu.edu.ng/' },
    { name: 'Borno State University', description: 'A new institution dedicated to providing quality education.', link: 'https://bosu.edu.ng/' },
    { name: 'Gombe State University of Science and Technology', description: 'Focused on science and technology education.', link: 'https://gsust.edu.ng/' },
    { name: 'Bayelsa Medical University', description: 'Specializes in medical and health sciences.', link: 'https://bmu.edu.ng/' },
    { name: 'Moshood Abiola University of Science and Technology', description: 'A technology-focused institution fostering innovation.', link: 'https://mautech.edu.ng/' },
  ];
  const filteredCards = cardDetails.filter((card) =>
    card.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      <SchoolNavbar />
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
