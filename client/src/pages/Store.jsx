import React, { useState } from 'react';
import c1 from '../assets/store/c1.jfif';
import c2 from '../assets/store/c2.jfif';
import c3 from '../assets/store/c3.jfif';
import c4 from '../assets/store/c4.jfif';
import c5 from '../assets/store/c5.jfif';
import c6 from '../assets/store/c6.jfif';
import c7 from '../assets/store/c7.jfif';
import c8 from '../assets/store/c8.jfif';
import c9 from '../assets/store/c9.jfif';
import c10 from '../assets/store/c10.jfif';
import c11 from '../assets/store/c11.jfif';
import c12 from '../assets/store/c12.jfif';
import c13 from '../assets/store/c13.jfif';
import c14 from '../assets/store/c14.jfif';
import c15 from '../assets/store/c15.jfif';
import c16 from '../assets/store/c16.jfif';
import c17 from '../assets/store/c17.jfif';
import c18 from '../assets/store/c18.jfif';
import c19 from '../assets/store/c19.jfif';
import c20 from '../assets/store/c20.jfif';
import c21 from '../assets/store/c21.jfif';
import c22 from '../assets/store/c22.jfif';
import c23 from '../assets/store/c23.jfif';
import c24 from '../assets/store/c24.jfif';
import Footer from '../components/BookEssential/Footer';
import HomeNavbar from './LandingPage/essentialLanding/HomeNavbar';
import { useNavigate } from 'react-router-dom';

const storeImages = [
  { src: c1, name: 'Store 1' },
  { src: c2, name: 'Store 2' },
  { src: c3, name: 'Store 3' },
  { src: c4, name: 'Store 4' },
  { src: c5, name: 'Store 5' },
  { src: c6, name: 'Store 6' },
  { src: c7, name: 'Store 7' },
  { src: c8, name: 'Store 8' },
  { src: c9, name: 'Store 9' },
  { src: c10, name: 'Store 10' },
  { src: c11, name: 'Store 11' },
  { src: c12, name: 'Store 12' },
  { src: c13, name: 'Store 13' },
  { src: c14, name: 'Store 14' },
  { src: c15, name: 'Store 15' },
  { src: c16, name: 'Store 16' },
  { src: c17, name: 'Store 17' },
  { src: c18, name: 'Store 18' },
  { src: c19, name: 'Store 19' },
  { src: c20, name: 'Store 20' },
  { src: c21, name: 'Store 21' },
  { src: c22, name: 'Store 22' },
  { src: c23, name: 'Store 23' },
  { src: c24, name: 'Store 24' },
];

const Store = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeTab, setActiveTab] = useState('store');
  const navigate = useNavigate()
  const filteredStores = storeImages.filter((store) =>
    store.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleTabClick = (tab) => {
    setActiveTab(tab);
    navigate('/market')
  };

  return (
    <>
      <HomeNavbar />
      <div style={styles.container}>
        {/* Header Section */}
        <header style={styles.header}>
          <img src={c1} alt="Header" style={styles.headerImage} />
          <div style={styles.headerText}>
            <h1>New schools can be really different, find your way around buying things</h1>
            <p>Use our guide to navigate stores near you to make your school experience easier and more enjoyable.</p>
          </div>
        </header>

        {/* Search Section */}
        <div style={styles.searchSection}>
          <input
            type="text"
            placeholder="Enter your location"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            style={styles.searchInput}
          />
          <button style={styles.searchButton}>Find</button>
        </div>

        {/* Navigation Tabs */}
        <div style={styles.tabs}>
          <div
            style={{
              ...styles.tab,
              borderBottom: activeTab === 'store' ? '2px solid green' : 'none',
            }}
            onClick={() => handleTabClick('store')}
          >
            Store
          </div>
          <div
            style={{
              ...styles.tab,
              borderBottom: activeTab === 'market' ? '2px solid green' : 'none',
            }}
            onClick={() => handleTabClick('market')}
          >
            Market
          </div>
        </div>

        {/* Content Section */}
        {activeTab === 'store' ? (
          <section style={styles.storesSection}>
            <h2 style={styles.sectionHeader}>Stores around you</h2>
            <div style={styles.cards}>
              {filteredStores.map((store, index) => (
                <div style={styles.card} key={index}>
                  <img src={store.src} alt={store.name} style={styles.cardImage} />
                  <p>{store.name}</p>
                  <div style={styles.rating}>★★★★☆</div>
                </div>
              ))}
            </div>
          </section>
        ) : (
          <section style={styles.featuredSection}>
            <h2>Enjoy the best dish in a very serene environment and with just little money</h2>
            <img src={c2} alt="Best Dish" style={styles.featuredImage} />
            <button style={styles.applyButton}>Apply</button>
          </section>
        )}

        {/* Best Reviews Section */}
        <section style={styles.reviewsSection}>
          <h2>THIS PLACES RECEIVED THE BEST REVIEWS THIS WEEK</h2>
          <div style={styles.cards}>
            {storeImages.map((store, index) => (
              <div style={styles.card} key={index}>
                <img src={store.src} alt={`Review ${index + 1}`} style={styles.cardImage} />
                <p>{store.name}</p>
                <div style={styles.rating}>★★★★☆</div>
              </div>
            ))}
          </div>
        </section>
      </div>
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
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    borderRadius: '8px',
  },
  searchSection: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '20px',
  },
  searchInput: {
    padding: '10px',
    width: '60%',
    maxWidth: '400px',
    borderRadius: '5px',
    border: '1px solid #ccc',
  },
  searchButton: {
    padding: '10px 20px',
    marginLeft: '10px',
    backgroundColor: '#28a745',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  },
  tabs: {
    display: 'flex',
    justifyContent: 'center',
    padding: '10px',
  },
  tab: {
    padding: '10px 20px',
    cursor: 'pointer',
    margin: '0 10px',
    fontWeight: 'bold',
  },
  storesSection: {
    padding: '20px',
    backgroundColor: '#f0f8ff',
  },
  sectionHeader: {
    textAlign: 'center',
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
  cardImage: {
    width: '100%',
    height: 'auto',
    borderRadius: '8px',
  },
  rating: {
    color: '#ffc107',
  },
  featuredSection: {
    padding: '20px',
    textAlign: 'center',
  },
  featuredImage: {
    width: '100%',
    height: 'auto',
    borderRadius: '8px',
  },
  applyButton: {
    padding: '10px 20px',
    marginTop: '20px',
    backgroundColor: '#007bff',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  },
  reviewsSection: {
    padding: '20px',
    backgroundColor: '#f0f8ff',
  },
};

export default Store;
