


// import React from 'react';
// import { useState } from 'react';
// import HomeNavbar from './LandingPage/essentialLanding/HomeNavbar';
// import tutorial from '../assets/website/tutorial.jpg';
// import tutorial2 from '../assets/website/tutorial2.jpg';
// import tutorial3 from '../assets/website/tutorial3.jpg';
// import tutorial4 from '../assets/website/tutorial4.jpg';
// import tutorial5 from '../assets/website/tutorial5.jpg';
// import tutorial7 from '../assets/website/tutorial7.jpg';
// import tutorial8 from '../assets/website/tutorial8.jpg';
// import tutorial9 from '../assets/website/tutorial9.jpg';
// import tutorial10 from '../assets/website/tutorial10.jpg';
// import Footer from '../components/BookEssential/Footer';
// import FadeIn from '../FadeIn';
// import bk2 from '../assets/website/bk2.jpg';
// import bk3 from '../assets/website/bk3.jpg';
// import bk4 from '../assets/website/bk4.jpg';
// import bk5 from '../assets/website/bk5.jpg';
// import Eatery from './eatery/Eatery';

// const Tutorial = () => {
//   const [searchTerm, setSearchTerm] = useState('');

//   const ratingStars = (rating) => {
//     return '★'.repeat(rating) + '☆'.repeat(5 - rating);
//   };

//   const tutorDetails = [
//     { name: 'Taiwo', img: tutorial2 },
//     { name: 'Jimoh', img: tutorial3 },
//     { name: 'Tutor 3', img: tutorial4 },
//     { name: 'Tutor 4', img: tutorial5 },
//     { name: 'Tutor 5', img: tutorial7 },
//     { name: 'Tutor 6', img: tutorial9 },
//   ];

//   const recommendedDetails = [
//     { name: 'Recommended Tutor 1', img: tutorial7 },
//     { name: 'Recommended Tutor 2', img: tutorial8 },
//     { name: 'Recommended Tutor 3', img: tutorial9 },
//     { name: 'Recommended Tutor 4', img: tutorial10 },
//     { name: 'Recommended Tutor 5', img: tutorial3 },
//     { name: 'Recommended Tutor 6', img: tutorial9 },
//   ];

//   const bookDetails = [
//     { name: 'Atomic habit', img: bk2 },
//     { name: 'Twisted Love', img: bk3 },
//     { name: 'Court of misty fury', img: bk4 },
//     { name: 'Read people like a book', img: bk5 },
//   ];

//   const filteredTutorDetails = tutorDetails.filter((card) =>
//     card.name.toLowerCase().includes(searchTerm.toLowerCase())
//   );

//   const filteredRecommendedDetails = recommendedDetails.filter((card) =>
//     card.name.toLowerCase().includes(searchTerm.toLowerCase())
//   );

//   return (
//     <>
//       <HomeNavbar />
//       <div style={styles.container}>
//         {/* Header Section */}
//         <header style={styles.header}>
//           <img src={tutorial} alt="Students Learning" style={styles.headerImage} />
//           <div style={styles.headerText}>
//             <FadeIn delay={0.4} direction="down">
//               <h1>ARE YOU PREPARING FOR ANY EXAMINATION?</h1>
//             </FadeIn>
//             <p>WE HAVE THE BEST TUTORS HERE FOR YOU.</p>
//           </div>
//         </header>

//         {/* Search Section */}
//         <div style={styles.searchSection}>
//           <input
//             type="text"
//             placeholder="Search"
//             value={searchTerm}
//             onChange={(e) => setSearchTerm(e.target.value)}
//             style={styles.searchInput}
//           />
//         </div>

//         {/* Tutors Near You Section */}
//         <section style={styles.tutorsSection}>
//           <h2 style={styles.sectionHeader}>Tutors near you</h2>
//           <div style={styles.cards}>
//             {filteredTutorDetails.map((detail, i) => (
//               <div style={styles.card} key={i}>
//                 <img src={detail.img} alt={detail.name} style={styles.cardImage} />
//                 <div>{ratingStars(3)}</div>
//                 <p>{detail.name}</p>
//               </div>
//             ))}
//           </div>
//         </section>

//         {/* Highly Recommended Section */}
//         <section style={styles.recommendedSection}>
//           <h2 style={styles.sectionHeader}>Highly recommended</h2>
//           <div style={styles.cards}>
//             {filteredRecommendedDetails.map((detail, i) => (
//               <div style={styles.card} key={i}>
//                 <img src={detail.img} alt={detail.name} style={styles.cardImage} />
//                 <div>{ratingStars(5)}</div>
//                 <p>{detail.name}</p>
//               </div>
//             ))}
//           </div>
//         </section>

//         {/* Featured Section */}
//         <section style={styles.featuredSection}>
//           <h2>
//             Be engaged with the best Tutors Nationwide with experience from different parts of
//             the Globe
//           </h2>
//           <img
//             src="https://unsplash.com/photos/5fNmWej4tAA/download?force=true&w=640"
//             alt="Featured Tutors"
//             style={styles.featuredImage}
//           />
//         </section>

//         {/* Books Section */}
//         <section style={styles.featuredSection}>
//           <h2>Recommended Books</h2>
//           <div style={styles.cards}>
//             {bookDetails.map((detail, i) => (
//               <div style={styles.bookCard} key={i}>
//                 <img src={detail.img} alt={detail.name} style={styles.bookImage} />
//                 <p>{detail.name}</p>
//               </div>
//             ))}
//           </div>
//         </section>

//         {/* Footer Section */}
//         <footer style={styles.footer}>
//           {/* <p>&copy; 2024 Tutorial Guide</p> */}
//         </footer>
//       </div>
//       <Eatery />
//       <Footer />
//     </>
//   );
// };

// const styles = {
//   container: {
//     fontFamily: 'Arial, sans-serif',
//     color: '#333',
//     lineHeight: '1.6',
//     margin: 0,
//     padding: 0,
//     marginTop: '7%',
//   },
//   header: {
//     position: 'relative',
//     textAlign: 'center',
//     color: 'white',
//   },
//   headerImage: {
//     width: '100%',
//     height: 'auto',
//     filter: 'brightness(50%)',
//   },
//   headerText: {
//     position: 'absolute',
//     top: '50%',
//     left: '50%',
//     transform: 'translate(-50%, -50%)',
//     padding: '10px',
//   },
//   searchSection: {
//     display: 'flex',
//     justifyContent: 'center',
//     padding: '20px',
//   },
//   searchInput: {
//     padding: '10px',
//     width: '80%',
//     maxWidth: '400px',
//     borderRadius: '5px',
//     border: '1px solid #ccc',
//   },
//   tutorsSection: {
//     padding: '20px',
//     backgroundColor: '#f0f8ff',
//   },
//   recommendedSection: {
//     padding: '20px',
//     backgroundColor: '#f9f9f9',
//   },
//   featuredSection: {
//     textAlign: 'center',
//     padding: '20px',
//   },
//   featuredImage: {
//     width: '100%',
//     height: 'auto',
//     borderRadius: '8px',
//   },
//   booksSection: {
//     padding: '20px',
//   },
//   cards: {
//     display: 'flex',
//     justifyContent: 'space-around',
//     flexWrap: 'wrap',
//   },
//   card: {
//     backgroundColor: '#fff',
//     padding: '20px',
//     borderRadius: '8px',
//     margin: '10px',
//     width: '30%',
//     textAlign: 'center',
//     boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
//   },
//   bookCard: {
//     backgroundColor: '#fff',
//     padding: '20px',
//     borderRadius: '8px',
//     margin: '10px',
//     width: '22%',
//     textAlign: 'center',
//     boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
//   },
//   cardImage: {
//     width: '100%',
//     height: 'auto',
//     borderRadius: '8px',
//   },
//   bookImage: {
//     width: '100%',
//     height: 'auto',
//     borderRadius: '8px',
//   },
//   footer: {
//     backgroundColor: '#333',
//     color: '#fff',
//     textAlign: 'center',
//     padding: '10px',
//   },
//   sectionHeader: {
//     textAlign: 'center',
//   },
//   '@media (max-width: 768px)': {
//     headerText: {
//       padding: '5px',
//     },
//     searchSection: {
//       padding: '10px',
//     },
//     searchInput: {
//       width: '100%',
//     },
//     cards: {
//       justifyContent: 'center',
//     },
//     card: {
//       width: '80%',
//       margin: '10px 0',
//     },
//     bookCard: {
//       width: '80%',
//       margin: '10px 0',
//     },
//     cardImage: {
//       width: '100%',
//       height: 'auto',
//     },
//     bookImage: {
//       width: '100%',
//       height: 'auto',
//     },
//   },
// };

// export default Tutorial;









































import React, { useState, useEffect } from 'react';
import { GoogleMap, LoadScript, Marker, useLoadScript, Autocomplete } from '@react-google-maps/api';
import HomeNavbar from './LandingPage/essentialLanding/HomeNavbar';
import tutorial from '../assets/website/tutorial.jpg';
import tutorial2 from '../assets/website/tutorial2.jpg';
import tutorial3 from '../assets/website/tutorial3.jpg';
import tutorial4 from '../assets/website/tutorial4.jpg';
import tutorial5 from '../assets/website/tutorial5.jpg';
import tutorial7 from '../assets/website/tutorial7.jpg';
import tutorial8 from '../assets/website/tutorial8.jpg';
import tutorial9 from '../assets/website/tutorial9.jpg';
import tutorial10 from '../assets/website/tutorial10.jpg';
import Footer from '../components/BookEssential/Footer';
import FadeIn from '../FadeIn';
import bk2 from '../assets/website/bk2.jpg';
import bk3 from '../assets/website/bk3.jpg';
import bk4 from '../assets/website/bk4.jpg';
import bk5 from '../assets/website/bk5.jpg';
import Eatery from './eatery/Eatery';

const API_KEY = 'YOUR_GOOGLE_MAPS_API_KEY'; // Replace with your Google Maps API key

const containerStyle = {
  width: '100%',
  height: '400px',
};

const Tutorial = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [markers, setMarkers] = useState([]);
  const [map, setMap] = useState(null);
  const [userLocation, setUserLocation] = useState(null);

  // Fetch user's current location
  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      position => {
        const { latitude, longitude } = position.coords;
        setUserLocation({ lat: latitude, lng: longitude });
      },
      error => {
        console.error('Error fetching location:', error);
      }
    );
  }, []);

  const ratingStars = (rating) => {
    return '★'.repeat(rating) + '☆'.repeat(5 - rating);
  };

  const tutorDetails = [
    { name: 'Taiwo', img: tutorial2 },
    { name: 'Jimoh', img: tutorial3 },
    { name: 'Tutor 3', img: tutorial4 },
    { name: 'Tutor 4', img: tutorial5 },
    { name: 'Tutor 5', img: tutorial7 },
    { name: 'Tutor 6', img: tutorial9 },
  ];

  const recommendedDetails = [
    { name: 'Recommended Tutor 1', img: tutorial7 },
    { name: 'Recommended Tutor 2', img: tutorial8 },
    { name: 'Recommended Tutor 3', img: tutorial9 },
    { name: 'Recommended Tutor 4', img: tutorial10 },
    { name: 'Recommended Tutor 5', img: tutorial3 },
    { name: 'Recommended Tutor 6', img: tutorial9 },
  ];

  const bookDetails = [
    { name: 'Atomic habit', img: bk2 },
    { name: 'Twisted Love', img: bk3 },
    { name: 'Court of misty fury', img: bk4 },
    { name: 'Read people like a book', img: bk5 },
  ];

  const filteredTutorDetails = tutorDetails.filter((card) =>
    card.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const filteredRecommendedDetails = recommendedDetails.filter((card) =>
    card.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Update map markers with nearby places
  const searchTutorsNearby = () => {
    if (map && userLocation) {
      const service = new google.maps.places.PlacesService(map);
      service.nearbySearch(
        {
          location: userLocation,
          radius: 5000,
          type: ['establishment'],
          keyword: 'tutorial center',
        },
        (results, status) => {
          if (status === google.maps.places.PlacesServiceStatus.OK) {
            setMarkers(results.map(place => ({
              position: place.geometry.location,
              name: place.name,
            })));
          }
        }
      );
    }
  };

  // Load map and fetch nearby places
  useEffect(() => {
    searchTutorsNearby();
  }, [map, userLocation]);

  return (
    <>
      <HomeNavbar />
      <div style={styles.container}>
        {/* Header Section */}
        <header style={styles.header}>
          <img src={tutorial} alt="Students Learning" style={styles.headerImage} />
          <div style={styles.headerText}>
            <FadeIn delay={0.4} direction="down">
              <h1>ARE YOU PREPARING FOR ANY EXAMINATION?</h1>
            </FadeIn>
            <p>WE HAVE THE BEST TUTORS HERE FOR YOU.</p>
          </div>
        </header>

        {/* Search Section */}
        <div style={styles.searchSection}>
          <input
            type="text"
            placeholder="Search"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            style={styles.searchInput}
          />
        </div>

        {/* Tutors Near You Section */}
        <section style={styles.tutorsSection}>
          <h2 style={styles.sectionHeader}>Tutors near you</h2>
          <div style={styles.cards}>
            {filteredTutorDetails.map((detail, i) => (
              <div style={styles.card} key={i}>
                <img src={detail.img} alt={detail.name} style={styles.cardImage} />
                <div>{ratingStars(3)}</div>
                <p>{detail.name}</p>
              </div>
            ))}
          </div>
          {userLocation && (
            <div style={styles.mapContainer}>
              <LoadScript googleMapsApiKey={API_KEY} libraries={['places']}>
                <GoogleMap
                  mapContainerStyle={containerStyle}
                  center={userLocation}
                  zoom={15}
                  onLoad={map => setMap(map)}
                >
                  {markers.map((marker, i) => (
                    <Marker key={i} position={marker.position} label={marker.name} />
                  ))}
                </GoogleMap>
              </LoadScript>
            </div>
          )}
        </section>

        {/* Highly Recommended Section */}
        <section style={styles.recommendedSection}>
          <h2 style={styles.sectionHeader}>Highly recommended</h2>
          <div style={styles.cards}>
            {filteredRecommendedDetails.map((detail, i) => (
              <div style={styles.card} key={i}>
                <img src={detail.img} alt={detail.name} style={styles.cardImage} />
                <div>{ratingStars(5)}</div>
                <p>{detail.name}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Featured Section */}
        <section style={styles.featuredSection}>
          <h2>
            Be engaged with the best Tutors Nationwide with experience from different parts of
            the Globe
          </h2>
          <img
            src="https://unsplash.com/photos/5fNmWej4tAA/download?force=true&w=640"
            alt="Featured Tutors"
            style={styles.featuredImage}
          />
        </section>

        {/* Books Section */}
        <section style={styles.featuredSection}>
          <h2>Recommended Books</h2>
          <div style={styles.cards}>
            {bookDetails.map((detail, i) => (
              <div style={styles.bookCard} key={i}>
                <img src={detail.img} alt={detail.name} style={styles.bookImage} />
                <p>{detail.name}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Footer Section */}
        <footer style={styles.footer}>
          {/* <p>&copy; 2024 Tutorial Guide</p> */}
        </footer>
      </div>
      <Eatery />
      <Footer />
    </>
  );
};

const styles = {
  container: {
    fontFamily: 'Arial, sans-serif',
    color: '#333',
    lineHeight: '1.6',
    margin: 0,
    padding: 0,
    marginTop: '7%',
  },
  header: {
    position: 'relative',
    textAlign: 'center',
    color: 'white',
  },
  headerImage: {
    width: '100%',
    height: 'auto',
    filter: 'brightness(50%)',
  },
  headerText: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    padding: '10px',
  },
  searchSection: {
    display: 'flex',
    justifyContent: 'center',
    padding: '20px',
  },
  searchInput: {
    padding: '10px',
    width: '80%',
    maxWidth: '400px',
    borderRadius: '5px',
    border: '1px solid #ccc',
  },
  tutorsSection: {
    padding: '20px',
    backgroundColor: '#f0f8ff',
  },
  recommendedSection: {
    padding: '20px',
    backgroundColor: '#f9f9f9',
  },
  featuredSection: {
    textAlign: 'center',
    padding: '20px',
  },
  featuredImage: {
    width: '100%',
    height: 'auto',
    borderRadius: '8px',
  },
  booksSection: {
    padding: '20px',
  },
  cards: {
    display: 'flex',
    justifyContent: 'space-around',
    flexWrap: 'wrap',
  },
  card: {
    backgroundColor: '#fff',
    padding: '20px',
    borderRadius: '8px',
    margin: '10px',
    width: '30%',
    textAlign: 'center',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
  },
  bookCard: {
    backgroundColor: '#fff',
    padding: '20px',
    borderRadius: '8px',
    margin: '10px',
    width: '22%',
    textAlign: 'center',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
  },
  cardImage: {
    width: '100%',
    height: 'auto',
    borderRadius: '8px',
  },
  bookImage: {
    width: '100%',
    height: 'auto',
    borderRadius: '8px',
  },
  footer: {
    backgroundColor: '#333',
    color: '#fff',
    textAlign: 'center',
    padding: '10px',
  },
  sectionHeader: {
    textAlign: 'center',
  },
  mapContainer: {
    marginTop: '20px',
  },
  '@media (max-width: 768px)': {
    headerText: {
      padding: '5px',
    },
    searchSection: {
      padding: '10px',
    },
    searchInput: {
      width: '100%',
    },
    cards: {
      justifyContent: 'center',
    },
    card: {
      width: '80%',
      margin: '10px 0',
    },
    bookCard: {
      width: '80%',
      margin: '10px 0',
    },
    cardImage: {
      width: '100%',
      height: 'auto',
    },
    bookImage: {
      width: '100%',
      height: 'auto',
    },
  },
};

export default Tutorial;
