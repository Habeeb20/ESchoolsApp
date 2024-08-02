// import React from 'react';
// import { Link } from 'react-router-dom';
// import Footer from '../../../components/BookEssential/Footer';
// import SchoolNavbar from '../schoolselection/SchoolNavbar';
// import { useState } from 'react';
// import { color } from 'framer-motion';
// import HomeNavbar from '../../LandingPage/essentialLanding/HomeNavbar';
// import UniNav from './UniNav';
// export default function FederalUni() {
//   const [searchTerm, setSearchTerm] = useState('');
//   const headerStyle = {
//     backgroundColor: '#f8f8f8',
//     padding: '10px',
//     textAlign: 'center',
//     borderBottom: '1px solid #ddd',
//   };

//   const searchStyle = {
//     display: 'flex',
//     justifyContent: 'center',
//     margin: '20px 0',
//   };

//   const buttonStyle = {
//     backgroundColor: 'green',
//     color: 'white',
//     border: 'none',
//     padding: '10px 20px',
//     cursor: 'pointer',
//   };

//   const gridStyle = {
//     display: 'grid',
//     gridTemplateColumns: 'repeat(4, 1fr)',
//     gap: '20px',
//     margin: '0 auto',
//     maxWidth: '1200px',
//     padding: '0 20px',
//   };

//   const cardStyle = {
//     border: '1px solid #ddd',
//     borderRadius: '8px',
//     padding: '15px',
//     textAlign: 'center',
//     boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
//     minHeight: '250px',
//     position: 'relative',
//   };

//   const footerStyle = {
//     backgroundColor: '#555',
//     minHeight: '200px',
//     padding: '20px',
//     color: 'black',
//     textAlign: 'center',
//     borderTop: '1px solid #ddd',
//     position: 'relative',
//     marginTop: '20px',
//   };

//   const Fontsize = {

//     color: "green"
//   };

//   const Despsize = {
//     fontSize: '150%',
//   };

//   const ratingStars = (rating) => {
//     return '★'.repeat(rating) + '☆'.repeat(5 - rating);
//   };

//   const cardDetails = [
//     { name: 'University of Lagos', description: 'A leading institution with a strong focus on research and development.', link: 'https://unilag.edu.ng/' },
//     { name: 'University of Ibadan', description: 'The oldest university in Nigeria, renowned for its academic excellence.', link: 'https://ui.edu.ng/' },
//     { name: 'Ahmadu Bello University', description: 'One of the largest universities in Africa, known for its diverse programs.', link: 'https://abu.edu.ng/' },
//     { name: 'Obafemi Awolowo University', description: 'A prominent university with a rich history and vibrant academic community.', link: 'https://oauife.edu.ng/' },
//     { name: 'University of Nigeria, Nsukka', description: 'A prestigious university committed to scholarship and service.', link: 'https://unn.edu.ng/' },
//     { name: 'Federal University of Technology, Akure', description: 'A technology-focused institution fostering innovation and creativity.', link: 'https://futa.edu.ng/' },
//     { name: 'University of Benin', description: 'A dynamic university with a strong emphasis on research and teaching.', link: 'https://uniben.edu/' },
//     { name: 'University of Jos', description: 'Known for its serene environment and academic rigor.', link: 'https://unijos.edu.ng/' },
//     { name: 'University of Ilorin', description: 'A university with a reputation for academic excellence and integrity.', link: 'https://unilorin.edu.ng/' },
//     { name: 'University of Port Harcourt', description: 'An institution with a commitment to teaching, research, and community service.', link: 'https://uniport.edu.ng/' },
//     { name: 'Federal University of Agriculture, Abeokuta', description: 'Focused on agricultural research and development.', link: 'https://funaab.edu.ng/' },
//     { name: 'Bayero University, Kano', description: 'Known for its diverse academic programs and cultural heritage.', link: 'https://buk.edu.ng/' },
//     { name: 'Federal University of Technology, Minna', description: 'Dedicated to promoting scientific and technological advancement.', link: 'https://futminna.edu.ng/' },
//     { name: 'University of Abuja', description: 'A comprehensive institution located in the capital city of Nigeria.', link: 'https://uniabuja.edu.ng/' },
//     { name: 'Nnamdi Azikiwe University', description: 'Named after Nigeria’s first President, this university excels in various fields.', link: 'https://unizik.edu.ng/' },
//     { name: 'University of Maiduguri', description: 'A key player in research and development in the North-East region of Nigeria.', link: 'https://unimaid.edu.ng/' },
//     { name: 'Federal University of Technology, Owerri', description: 'Renowned for its engineering and technology programs.', link: 'https://futo.edu.ng/' },
//     { name: 'Federal University, Oye-Ekiti', description: 'An emerging institution committed to high academic standards.', link: 'https://fuoye.edu.ng/' },
//     { name: 'Michael Okpara University of Agriculture', description: 'Specializes in agricultural sciences and related disciplines.', link: 'https://mouau.edu.ng/' },
//     { name: 'University of Uyo', description: 'A fast-growing institution known for its research initiatives.', link: 'https://uniuyo.edu.ng/' },
//     { name: 'Federal University of Petroleum Resources, Effurun', description: 'Focused on research and training in petroleum and energy.', link: 'https://fupre.edu.ng/' },
//     { name: 'Modibbo Adama University of Technology, Yola', description: 'Known for its strong engineering and technology programs.', link: 'https://mautech.edu.ng/' },
//     { name: 'Usmanu Danfodiyo University, Sokoto', description: 'A comprehensive university known for its diverse academic programs.', link: 'https://udusok.edu.ng/' },
//     { name: 'Federal University, Dutse', description: 'An emerging institution dedicated to academic excellence.', link: 'https://fud.edu.ng/' },
//     { name: 'Federal University, Dutsin-Ma', description: 'Committed to providing quality education and research opportunities.', link: 'https://fudutsinma.edu.ng/' },
//     { name: 'Federal University, Lafia', description: 'A growing institution known for its strong academic programs.', link: 'https://fulafia.edu.ng/' },
//     { name: 'Federal University, Lokoja', description: 'Dedicated to providing high-quality education and research.', link: 'https://fulokoja.edu.ng/' },
//     { name: 'Federal University, Kashere', description: 'An emerging institution focused on academic excellence.', link: 'https://fukashere.edu.ng/' },
//     { name: 'Federal University, Wukari', description: 'Known for its commitment to research and community service.', link: 'https://fuwukari.edu.ng/' },
//     { name: 'Federal University, Birnin Kebbi', description: 'An emerging institution committed to providing quality education.', link: 'https://fubk.edu.ng/' },
//     { name: 'Federal University, Gusau', description: 'Focused on providing accessible and affordable education.', link: 'https://fugusau.edu.ng/' },
//     { name: 'Federal University of Health Sciences, Otukpo', description: 'Specializes in health sciences and medical training.', link: 'https://fuhso.edu.ng/' },
//     { name: 'Nigerian Defence Academy, Kaduna', description: 'Nigeria’s premier military university.', link: 'https://nda.edu.ng/' },
//     { name: 'Nigerian Police Academy, Wudil', description: 'Focused on training and research in police science.', link: 'https://polac.edu.ng/' },
  
//   ];
//   const filteredCards = cardDetails.filter((card) =>
//     card.name.toLowerCase().includes(searchTerm.toLowerCase())
//   );

//   return (
//     <>
//       <HomeNavbar/>
//       <header style={headerStyle}>
//       <h1 style={{ fontSize: '200%' }}>Federal Universities</h1>
//       </header>
//       <section style={searchStyle}>
//         <input
//           type="text"
//           placeholder="Search..."
//           value={searchTerm}
//           onChange={(e) => setSearchTerm(e.target.value)}
//         />
//         <button style={buttonStyle}>Search</button>
//       </section>
//       <UniNav />
//       <section style={gridStyle}>
//         {filteredCards.map((card, index) => (
//           <div key={index} style={cardStyle}>
//             <h3 style={Fontsize}>{card.name}</h3>
//             <p style={Despsize}>{card.description}</p>
//             <Link to={card.link}>
//               <button style={buttonStyle}>Read More</button>
//             </Link>
//             <div>{ratingStars(3)}</div>
//           </div>
//         ))}
//       </section>
//       <footer style={footerStyle}>
//         <p>Advert Section</p>
//         <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
//         <p>Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.</p>
//         <p>Sed nisi. Nulla quis sem at nibh elementum imperdiet.</p>
//       </footer>
//       <Footer />
//     </>
//   );
// }



import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Footer from '../../../components/BookEssential/Footer';
import HomeNavbar from '../../LandingPage/essentialLanding/HomeNavbar';
import UniNav from './UniNav';

// Import images
import unilagImg from '../../../assets/university/uni5.jfif';
import uiImg from '../../../assets/university/u11.jfif';
import abuImg from '../../../assets/university/u16.jfif';
import oauImg from '../../../assets/university/u13.jfif';
import unnImg from '../../../assets/university/u11.jfif';
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
import PauImage from '../../../assets/university/uni14.jfif';
import BellsImage from '../../../assets/university/uni15.jfif';
import RedeemersImage from '../../../assets/university/uni16.jfif';
import CalebImage from '../../../assets/university/uni3.jfif';
import JabuImage from '../../../assets/university/uni1.jfif';
import AcuImage from '../../../assets/university/uni5.jfif';
import BazeImage from '../../../assets/university/uni6.webp';
import LandmarkImage from '../../../assets/university/uni7.webp';
import VeritasImage from '../../../assets/university/uni8.gif';
import NileImage from '../../../assets/university/uni9.jfif';
import MadonnaImage from '../../../assets/university/uni10.jfif';
import HeaderBackground from '../../../assets/university/uni11.jfif';


export default function FederalUni() {
  const [searchTerm, setSearchTerm] = useState('');

  const headerStyle = {
    backgroundImage: `url(${unilagImg})`, // Change this to the desired background image
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    padding: '50px 20px',
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
    minHeight: '300px',
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
    color: 'green',
  };

  const Despsize = {
    fontSize: '100%',
  };

  const ratingStars = (rating) => {
    return '★'.repeat(rating) + '☆'.repeat(5 - rating);
  };

  const cardDetails = [
    {
      name: 'University of Lagos',
      description: 'A leading institution with a strong focus on research and development.',
      link: 'https://unilag.edu.ng/',
      image: unilagImg,
    },
    {
      name: 'University of Ibadan',
      description: 'The oldest university in Nigeria, renowned for its academic excellence.',
      link: 'https://ui.edu.ng/',
      image: uiImg,
    },
    {
      name: 'Ahmadu Bello University',
      description: 'One of the largest universities in Africa, known for its diverse programs.',
      link: 'https://abu.edu.ng/',
      image: abuImg,
    },
    {
      name: 'Obafemi Awolowo University',
      description: 'A prominent university with a rich history and vibrant academic community.',
      link: 'https://oauife.edu.ng/',
      image: oauImg,
    },
    {
      name: 'University of Nigeria, Nsukka',
      description: 'A prestigious university committed to scholarship and service.',
      link: 'https://unn.edu.ng/',
      image: unnImg,
    },
    { 
      name: 'Federal University of Technology, Akure',
       description: 'A technology-focused institution fostering innovation and creativity.', 
       link: 'https://futa.edu.ng/',
       image: u1
    },
    { name: 'University of Benin',
     description: 'A dynamic university with a strong emphasis on research and teaching.',
     link: 'https://uniben.edu/',
     image : u3
     },

     { name: 'University of Jos', description: 'Known for its serene environment and academic rigor.', link: 'https://unijos.edu.ng/', image: u4 },
    { name: 'University of Ilorin', description: 'A university with a reputation for academic excellence and integrity.', link: 'https://unilorin.edu.ng/', image: u10 },
    { name: 'University of Port Harcourt', description: 'An institution with a commitment to teaching, research, and community service.', link: 'https://uniport.edu.ng/', image: u9 },
    { name: 'Federal University of Agriculture, Abeokuta', description: 'Focused on agricultural research and development.', link: 'https://funaab.edu.ng/', image: PauImage },
    { name: 'Bayero University, Kano', description: 'Known for its diverse academic programs and cultural heritage.', link: 'https://buk.edu.ng/', image: u11 },
    { name: 'Federal University of Technology, Minna', description: 'Dedicated to promoting scientific and technological advancement.', link: 'https://futminna.edu.ng/', image: u20 },
    { name: 'University of Abuja', description: 'A comprehensive institution located in the capital city of Nigeria.', link: 'https://uniabuja.edu.ng/', image: u15 },
    { name: 'Nnamdi Azikiwe University', description: 'Named after Nigeria’s first President, this university excels in various fields.', link: 'https://unizik.edu.ng/', image: AcuImage },
    { name: 'University of Maiduguri', description: 'A key player in research and development in the North-East region of Nigeria.', link: 'https://unimaid.edu.ng/', image: u14 },
    { name: 'Federal University of Technology, Owerri', description: 'Renowned for its engineering and technology programs.', link: 'https://futo.edu.ng/', image: u13 },
    { name: 'Federal University, Oye-Ekiti', description: 'An emerging institution committed to high academic standards.', link: 'https://fuoye.edu.ng/', image: u4 },
    { name: 'Michael Okpara University of Agriculture', description: 'Specializes in agricultural sciences and related disciplines.', link: 'https://mouau.edu.ng/', image: u12 },
    { name: 'University of Uyo', description: 'A fast-growing institution known for its research initiatives.', link: 'https://uniuyo.edu.ng/', image: u18 },
    { name: 'Federal University of Petroleum Resources, Effurun', description: 'Focused on research and training in petroleum and energy.', link: 'https://fupre.edu.ng/', image: u19 },
    { name: 'Modibbo Adama University of Technology, Yola', description: 'Known for its strong engineering and technology programs.', link: 'https://mautech.edu.ng/', image: u17 },
    { name: 'Usmanu Danfodiyo University, Sokoto', description: 'A comprehensive university known for its diverse academic programs.', link: 'https://udusok.edu.ng/', image: JabuImage },
    { name: 'Federal University, Dutse', description: 'An emerging institution dedicated to academic excellence.', link: 'https://fud.edu.ng/', image: u4 },
    { name: 'Federal University, Dutsin-Ma', description: 'Committed to providing quality education and research opportunities.', link: 'https://fudutsinma.edu.ng/', image: CalebImage },
    { name: 'Federal University, Lafia', description: 'A growing institution known for its strong academic programs.', link: 'https://fulafia.edu.ng/', image: BazeImage },
    { name: 'Federal University, Lokoja', description: 'Dedicated to providing high-quality education and research.', link: 'https://fulokoja.edu.ng/', image: MadonnaImage },
    { name: 'Federal University, Kashere', description: 'An emerging institution focused on academic excellence.', link: 'https://fukashere.edu.ng/', image: u16 },
    { name: 'Federal University, Wukari', description: 'Known for its commitment to research and community service.', link: 'https://fuwukari.edu.ng/', image: RedeemersImage },
    { name: 'Federal University, Birnin Kebbi', description: 'An emerging institution committed to providing quality education.', link: 'https://fubk.edu.ng/', image: u8 },
    { name: 'Federal University, Gusau', description: 'Focused on providing accessible and affordable education.', link: 'https://fugusau.edu.ng/', image: HeaderBackground },
    { name: 'Federal University of Health Sciences, Otukpo', description: 'Specializes in health sciences and medical training.', link: 'https://fuhso.edu.ng/', image: VeritasImage },
    { name: 'Nigerian Defence Academy, Kaduna', description: 'Nigeria’s premier military university.', link: 'https://nda.edu.ng/', image: NileImage },
    { name: 'Nigerian Police Academy, Wudil', description: 'Focused on training and research in police science.', link: 'https://polac.edu.ng/', image: LandmarkImage },
   
  ];

  const filteredCards = cardDetails.filter((card) =>
    card.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      <HomeNavbar />
      <header style={headerStyle}>
        <h1 style={{ fontSize: '200%', color: '#fff' }}>Federal Universities</h1>
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

