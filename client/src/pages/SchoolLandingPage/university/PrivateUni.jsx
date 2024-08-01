import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Footer from '../../../components/BookEssential/Footer';
import SchoolNavbar from '../schoolselection/SchoolNavbar';
import CovenantImage from '../assets/universities/covenant.jpg';
import BabcockImage from '../assets/universities/babcock.jpg';
import AbuadImage from '../assets/universities/abuad.jpg';
import AunImage from '../assets/universities/aun.jpg';
import BowenImage from '../assets/universities/bowen.jpg';
import IgbinedionImage from '../assets/universities/igbinedion.jpg';
import PauImage from '../assets/universities/pau.jpg';
import BellsImage from '../assets/universities/bells.jpg';
import RedeemersImage from '../assets/universities/redeemers.jpg';
import CalebImage from '../assets/universities/caleb.jpg';
import JabuImage from '../assets/universities/jabu.jpg';
import AcuImage from '../assets/universities/acu.jpg';
import BazeImage from '../assets/universities/baze.jpg';
import LandmarkImage from '../assets/universities/landmark.jpg';
import VeritasImage from '../assets/universities/veritas.jpg';
import NileImage from '../assets/universities/nile.jpg';
import MadonnaImage from '../assets/universities/madonna.jpg';
import HeaderBackground from '../assets/universities/nigeria_university.jpg';

export default function PrivateUni() {
  const [searchTerm, setSearchTerm] = useState('');

  const headerStyle = {
    backgroundImage: `url(${HeaderBackground})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    padding: '50px 20px',
    textAlign: 'center',
    color: 'white',
    fontSize: '2em',
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
    borderRadius: '5px',
  };

  const gridStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
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
    backgroundColor: 'white',
  };

  const footerStyle = {
    backgroundColor: '#555',
    minHeight: '200px',
    padding: '20px',
    color: 'white',
    textAlign: 'center',
    borderTop: '1px solid #ddd',
    marginTop: '20px',
  };

  const Fontsize = {
    fontSize: "140%"
  }

  const Despsize = {
    fontSize: "100%"
  }

  const ratingStars = (rating) => {
    return '★'.repeat(rating) + '☆'.repeat(5 - rating);
  };

  const cardDetails = [
    { name: 'Covenant University', description: 'A leading private university with a commitment to academic excellence.', link: 'https://www.covenantuniversity.edu.ng/', image: CovenantImage },
    { name: 'Babcock University', description: 'An esteemed university known for its diverse programs and quality education.', link: 'https://www.babcock.edu.ng/', image: BabcockImage },
    { name: 'Afe Babalola University', description: 'A renowned institution offering innovative educational programs.', link: 'https://www.abuad.edu.ng/', image: AbuadImage },
    { name: 'American University of Nigeria', description: 'Providing an American-style education in Nigeria.', link: 'https://www.aun.edu.ng/', image: AunImage },
    { name: 'Bowen University', description: 'A prestigious university with a focus on holistic education.', link: 'https://www.bowen.edu.ng/', image: BowenImage },
    { name: 'Igbinedion University', description: 'The first private university in Nigeria, known for its academic excellence.', link: 'https://www.iuokada.edu.ng/', image: IgbinedionImage },
    { name: 'Pan-Atlantic University', description: 'Committed to providing world-class education.', link: 'https://www.pau.edu.ng/', image: PauImage },
    { name: 'Bells University of Technology', description: 'A technology-focused institution aimed at fostering innovation.', link: 'https://www.bellsuniversity.edu.ng/', image: BellsImage },
    { name: 'Redeemer\'s University', description: 'A Christian university dedicated to raising leaders.', link: 'https://www.run.edu.ng/', image: RedeemersImage },
    { name: 'Caleb University', description: 'Offering quality education with a focus on leadership and development.', link: 'https://www.calebuniversity.edu.ng/', image: CalebImage },
    { name: 'Joseph Ayo Babalola University', description: 'A faith-based institution committed to academic excellence.', link: 'https://www.jabu.edu.ng/', image: JabuImage },
    { name: 'Ajayi Crowther University', description: 'A reputable university with a strong emphasis on research and development.', link: 'https://www.acu.edu.ng/', image: AcuImage },
    { name: 'Baze University', description: 'Known for its innovative educational approach and international partnerships.', link: 'https://www.bazeuniversity.edu.ng/', image: BazeImage },
    { name: 'Landmark University', description: 'Focuses on agrarian reform and offers unique programs in agriculture and engineering.', link: 'https://www.lmu.edu.ng/', image: LandmarkImage },
    { name: 'Veritas University', description: 'A Catholic university dedicated to providing a value-based education.', link: 'https://www.veritas.edu.ng', image: VeritasImage },
    { name: 'Nile University of Nigeria', description: 'Known for its diverse programs and international faculty.', link: 'https://www.nileuniversity.edu.ng/', image: NileImage },
    { name: 'Madonna University', description: 'A Catholic institution with a focus on providing a holistic education.', link: 'https://www.madonnauniversity.edu.ng/', image: MadonnaImage },
  ];

  const filteredCards = cardDetails.filter((card) =>
    card.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      <SchoolNavbar />
      <header style={headerStyle}>
        <h1>List of Private Universities</h1>
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
            <img src={card.image} alt={card.name} style={{ width: '100%', borderRadius: '8px' }} />
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
