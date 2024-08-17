import React, { useState } from 'react';
import m1 from '../assets/market/m1.jfif'
import m2 from '../assets/market/m2.jfif'
import m3 from '../assets/market/m3.jfif'
import m4 from '../assets/market/m4.jfif'
import m5 from '../assets/market/m5.jfif'

import m7 from '../assets/market/m7.jfif'
import m8 from '../assets/market/m8.jfif'
import m9 from '../assets/market/m9.jfif'
import m10 from '../assets/market/m10.jfif'
import m11 from '../assets/market/m11.jfif'
import m12 from '../assets/market/m12.jfif'
import m13 from '../assets/market/m13.jfif'
import m14 from '../assets/market/m14.jfif'
import m15 from '../assets/market/m15.jfif'
import Footer from '../components/BookEssential/Footer';
import HomeNavbar from './LandingPage/essentialLanding/HomeNavbar';
import { Link } from 'react-router-dom';
const marketData = [
  {
    src: m1,
    name: 'Alagomeji market',
    distance: '1.4 km away from your location',
    rating: 4.8,
  },
  {
    src: m2,
    name: 'Balogun market',
    distance: '2.3 km away from your location',
    rating: 4.7,
  },
  {
    src: m3,
    name: 'Oyingbo market',
    distance: '3.2 km away from your location',
    rating: 4.5,
  },
  {
    src: m4,
    name: 'Tejuosho market',
    distance: '4.1 km away from your location',
    rating: 4.6,
  },
  {
    src: m5,
    name: 'Idumota market',
    distance: '5.0 km away from your location',
    rating: 4.4,
  },
  {
    src: m7,
    name: 'Oshodi market',
    distance: '3.5 km away from your location',
    rating: 4.3,
  },
  {
    src: m8,
    name: 'Oshodi market',
    distance: '3.5 km away from your location',
    rating: 4.3,
  },
  {
    src: m9,
    name: 'Oshodi market',
    distance: '3.5 km away from your location',
    rating: 4.3,
  },
  {
    src: m10,
    name: 'Oshodi market',
    distance: '3.5 km away from your location',
    rating: 4.3,
  },
  {
    src: m11,
    name: 'Oshodi market',
    distance: '3.5 km away from your location',
    rating: 4.3,
  },
  {
    src: m12,
    name: 'Oshodi market',
    distance: '3.5 km away from your location',
    rating: 4.3,
  },
  {
    src: m13,
    name: 'Oshodi market',
    distance: '3.5 km away from your location',
    rating: 4.3,
  },
  {
    src: m14,
    name: 'Oshodi market',
    distance: '3.5 km away from your location',
    rating: 4.3,
  },
];

const galleryData = [
  {
    src: 'https://via.placeholder.com/400x200',
    caption: 'New Faculty of Engineering Building',
  },
  {
    src: 'https://via.placeholder.com/400x200',
    caption: 'Graduation Ceremony 2024',
  },
  {
    src: 'https://via.placeholder.com/400x200',
    caption: 'Main Campus View',
  },
];

const Market = () => {
  const [searchQuery, setSearchQuery] = useState('');

  // Function to handle search input changes
  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  // Function to filter markets based on search query
  const filteredMarkets = marketData.filter((market) =>
    market.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <>
    <HomeNavbar />
     <div style={styles.container}>
      {/* Photo Gallery Section */}
      <section style={styles.gallerySection}>
        <div style={styles.galleryGrid}>
          {galleryData.map((item, index) => (
            <div key={index} style={styles.galleryItem}>
              <img src={item.src} alt={`Gallery ${index + 1}`} style={styles.galleryImage} />
              <p style={styles.galleryCaption}>{item.caption}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Header Section */}
      <header style={styles.header}>
        <input
          type="text"
          placeholder="Input your location"
          value={searchQuery}
          onChange={handleSearchChange}
          style={styles.searchInput}
        />
        <button style={styles.mapButton}>Map out</button>
      </header>

      {/* Stores/Markets Toggle */}
      <div style={styles.toggleContainer}>
       <span style={styles.toggleOption}> <Link to='/store'>Store</Link></span>
        
        <span style={{ ...styles.toggleOption, ...styles.activeToggle }}>Market</span>
      </div>

      {/* Markets around you Section */}
      <section style={styles.marketsSection}>
        <h2 style={styles.sectionTitle}>Markets around you</h2>
        <div style={styles.marketGrid}>
          {filteredMarkets.length > 0 ? (
            filteredMarkets.map((market, index) => (
              <div key={index} style={styles.marketCard}>
                <img src={market.src} alt={`Market ${index + 1}`} style={styles.marketImage} />
                <h3 style={styles.marketName}>{market.name}</h3>
                <p style={styles.marketDistance}>{market.distance}</p>
                <div style={styles.rating}>
                  ⭐⭐⭐⭐⭐ <span>{market.rating}</span>
                </div>
              </div>
            ))
          ) : (
            <p>No markets found matching your search.</p>
          )}
        </div>
      </section>

      {/* Promotional Banner */}
      <section style={styles.bannerSection}>
        <div style={styles.bannerContent}>
          <h2 style={styles.bannerText}>
            Enjoy the best dish in a very serene environment and with just little money
          </h2>
          <button style={styles.applyButton}>Apply</button>
        </div>
      </section>

      {/* Footer Section */}
      <footer style={styles.footer}>
        <h2 style={styles.sectionTitle}>THIS PLACES RECEIVED THE BEST REVIEWS THIS WEEK</h2>
        <div style={styles.smallImagesGrid}>
          {marketData.slice(0, 4).map((market, index) => (
            <div key={index} style={styles.smallImageCard}>
              <img src={market.src} alt={`Review ${index + 1}`} style={styles.smallImage} />
            </div>
          ))}
        </div>
      </footer>
    </div>
    <Footer />
    </>
   
  );
};

const styles = {
  container: {
    fontFamily: 'Arial, sans-serif',
  },
  header: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '20px',
    backgroundColor: '#f1f1f1',
  },
  searchInput: {
    width: '60%',
    padding: '10px',
    borderRadius: '5px',
    border: '1px solid #ccc',
  },
  mapButton: {
    marginLeft: '10px',
    padding: '10px 20px',
    backgroundColor: '#00b300',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  },
  toggleContainer: {
    display: 'flex',
    justifyContent: 'center',
    marginTop: '20px',
  },
  toggleOption: {
    margin: '0 10px',
    padding: '10px 20px',
    cursor: 'pointer',
    textDecoration: "none"
  },
  activeToggle: {
    backgroundColor: '#00b300',
    color: 'white',
    borderRadius: '5px',
  },
  marketsSection: {
    padding: '20px',
    textAlign: 'center',
  },
  sectionTitle: {
    fontSize: '24px',
    marginBottom: '20px',
  },
  marketGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
    gap: '20px',
    justifyItems: 'center',
  },
  marketCard: {
    backgroundColor: '#fff',
    borderRadius: '10px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    padding: '10px',
    textAlign: 'center',
    width: '100%',
  },
  marketImage: {
    width: '100%',
    borderRadius: '10px',
  },
  marketName: {
    fontSize: '18px',
    margin: '10px 0',
  },
  marketDistance: {
    color: '#777',
    marginBottom: '10px',
  },
  rating: {
    color: '#ffcc00',
    fontSize: '16px',
  },
  bannerSection: {
    marginTop: '40px',
    backgroundImage: 'url(https://via.placeholder.com/1200x400)',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    textAlign: 'center',
    color: 'white',
    padding: '50px 20px',
  },
  bannerContent: {
    maxWidth: '600px',
    margin: 'auto',
  },
  bannerText: {
    fontSize: '24px',
    marginBottom: '20px',
  },
  applyButton: {
    padding: '10px 20px',
    backgroundColor: '#00b300',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  },
  footer: {
    marginTop: '40px',
    padding: '20px',
  },
  smallImagesGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(100px, 1fr))',
    gap: '10px',
    justifyItems: 'center',
  },
  smallImageCard: {
    width: '100%',
    textAlign: 'center',
  },
  smallImage: {
    width: '100%',
    borderRadius: '10px',
  },
  gallerySection: {
    padding: '20px',
    textAlign: 'center',
  },
  galleryGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
    gap: '10px',
  },
  galleryItem: {
    textAlign: 'center',
  },
  galleryImage: {
    width: '100%',
    borderRadius: '10px',
  },
  galleryCaption: {
    marginTop: '10px',
    fontSize: '16px',
    color: '#555',
  },
};

export default Market;
