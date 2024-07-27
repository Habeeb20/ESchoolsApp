import React from 'react';
import { Link } from 'react-router-dom';
import Footer from '../../../components/BookEssential/Footer';
import SchoolNavbar from '../schoolselection/SchoolNavbar';
import { useState } from 'react';
export default function FederalUni() {
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
    { name: 'University of Lagos', description: 'A leading institution with a strong focus on research and development.', link: 'https://unilag.edu.ng/' },
    { name: 'University of Ibadan', description: 'The oldest university in Nigeria, renowned for its academic excellence.', link: 'https://ui.edu.ng/' },
    { name: 'Ahmadu Bello University', description: 'One of the largest universities in Africa, known for its diverse programs.', link: 'https://abu.edu.ng/' },
    { name: 'Obafemi Awolowo University', description: 'A prominent university with a rich history and vibrant academic community.', link: 'https://oauife.edu.ng/' },
    { name: 'University of Nigeria, Nsukka', description: 'A prestigious university committed to scholarship and service.', link: 'https://unn.edu.ng/' },
    { name: 'Federal University of Technology, Akure', description: 'A technology-focused institution fostering innovation and creativity.', link: 'https://futa.edu.ng/' },
    { name: 'University of Benin', description: 'A dynamic university with a strong emphasis on research and teaching.', link: 'https://uniben.edu/' },
    { name: 'University of Jos', description: 'Known for its serene environment and academic rigor.', link: 'https://unijos.edu.ng/' },
    { name: 'University of Ilorin', description: 'A university with a reputation for academic excellence and integrity.', link: 'https://unilorin.edu.ng/' },
    { name: 'University of Port Harcourt', description: 'An institution with a commitment to teaching, research, and community service.', link: 'https://uniport.edu.ng/' },
    { name: 'Federal University of Agriculture, Abeokuta', description: 'Focused on agricultural research and development.', link: 'https://funaab.edu.ng/' },
    { name: 'Bayero University, Kano', description: 'Known for its diverse academic programs and cultural heritage.', link: 'https://buk.edu.ng/' },
    { name: 'Federal University of Technology, Minna', description: 'Dedicated to promoting scientific and technological advancement.', link: 'https://futminna.edu.ng/' },
    { name: 'University of Abuja', description: 'A comprehensive institution located in the capital city of Nigeria.', link: 'https://uniabuja.edu.ng/' },
    { name: 'Nnamdi Azikiwe University', description: 'Named after Nigeria’s first President, this university excels in various fields.', link: 'https://unizik.edu.ng/' },
    { name: 'University of Maiduguri', description: 'A key player in research and development in the North-East region of Nigeria.', link: 'https://unimaid.edu.ng/' },
    { name: 'Federal University of Technology, Owerri', description: 'Renowned for its engineering and technology programs.', link: 'https://futo.edu.ng/' },
    { name: 'Federal University, Oye-Ekiti', description: 'An emerging institution committed to high academic standards.', link: 'https://fuoye.edu.ng/' },
    { name: 'Michael Okpara University of Agriculture', description: 'Specializes in agricultural sciences and related disciplines.', link: 'https://mouau.edu.ng/' },
    { name: 'University of Uyo', description: 'A fast-growing institution known for its research initiatives.', link: 'https://uniuyo.edu.ng/' },
    { name: 'Federal University of Petroleum Resources, Effurun', description: 'Focused on research and training in petroleum and energy.', link: 'https://fupre.edu.ng/' },
    { name: 'Modibbo Adama University of Technology, Yola', description: 'Known for its strong engineering and technology programs.', link: 'https://mautech.edu.ng/' },
    { name: 'Usmanu Danfodiyo University, Sokoto', description: 'A comprehensive university known for its diverse academic programs.', link: 'https://udusok.edu.ng/' },
    { name: 'Federal University, Dutse', description: 'An emerging institution dedicated to academic excellence.', link: 'https://fud.edu.ng/' },
    { name: 'Federal University, Dutsin-Ma', description: 'Committed to providing quality education and research opportunities.', link: 'https://fudutsinma.edu.ng/' },
    { name: 'Federal University, Lafia', description: 'A growing institution known for its strong academic programs.', link: 'https://fulafia.edu.ng/' },
    { name: 'Federal University, Lokoja', description: 'Dedicated to providing high-quality education and research.', link: 'https://fulokoja.edu.ng/' },
    { name: 'Federal University, Kashere', description: 'An emerging institution focused on academic excellence.', link: 'https://fukashere.edu.ng/' },
    { name: 'Federal University, Wukari', description: 'Known for its commitment to research and community service.', link: 'https://fuwukari.edu.ng/' },
    { name: 'Federal University, Birnin Kebbi', description: 'An emerging institution committed to providing quality education.', link: 'https://fubk.edu.ng/' },
    { name: 'Federal University, Gusau', description: 'Focused on providing accessible and affordable education.', link: 'https://fugusau.edu.ng/' },
    { name: 'Federal University of Health Sciences, Otukpo', description: 'Specializes in health sciences and medical training.', link: 'https://fuhso.edu.ng/' },
    { name: 'Nigerian Defence Academy, Kaduna', description: 'Nigeria’s premier military university.', link: 'https://nda.edu.ng/' },
    { name: 'Nigerian Police Academy, Wudil', description: 'Focused on training and research in police science.', link: 'https://polac.edu.ng/' },
  
  ];
  const filteredCards = cardDetails.filter((card) =>
    card.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      <SchoolNavbar />
      <header style={headerStyle}>
      <h1 style={{ fontSize: '100%' }}>Federal Universities</h1>
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

