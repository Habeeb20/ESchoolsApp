import React from 'react';
import im from '../assets/university/uni11.jfif'
import im1 from '../assets/university/uni16.jfif'
const hotelDeals = [
  {
    name: 'School Name 1',
    location: 'Surulere, Lagos',
    image: {im},
    discount: '18%',
  },
  {
    name: 'School Name 2',
    location: 'Victoria Island, Lagos',
    image: {im},
    discount: '22%',
  },
  {
    name: 'School Name 3',
    location: 'Uyo, Akwa Ibom',
    image: {im1},
    discount: '19%',
  },
  {
    name: 'School Name 4',
    location: 'Location 4',
    image: {im},
    discount: '20%',
  },

];

const SchoolDeals = () => {
  // Inline styles for the component
  const styles = {
    hotelDealsContainer: {
      textAlign: 'center',
      padding: '20px',
    },
    header: {
      marginBottom: '10px',
    },
    subHeader: {
      fontSize: '1rem',
      marginBottom: '20px',
      color: '#555',
    },
    dealsGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
      gap: '20px',
      justifyItems: 'center',
      width: '100%',
    },
    dealCard: {
      border: '1px solid #ddd',
      borderRadius: '8px',
      overflow: 'hidden',
      width: '100%',
      maxWidth: '300px',
      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
      textAlign: 'left',
      backgroundColor: 'white',
      position: 'relative',
    },
    hotelImage: {
      width: '100%',
      height: '200px',
      objectFit: 'cover',
    },
    hotelName: {
      color: '#007bff',
      fontSize: '1.1rem',
      margin: '10px',
    },
    hotelLocation: {
      margin: '0 10px 10px 10px',
      color: '#555',
    },
    discountTag: {
      position: 'absolute',
      backgroundColor: '#f97316', // Orange color
      color: 'white',
      fontSize: '0.9rem',
      padding: '5px 10px',
      borderRadius: '4px',
      top: '10px',
      left: '10px',
    },
    // For responsiveness
    '@media (maxWidth: 768px)': {
      dealCard: {
        maxWidth: '100%',
      },
      hotelImage: {
        height: '150px',
      },
      discountTag: {
        fontSize: '0.8rem',
      },
    },
  };

  return (
    <div style={styles.hotelDealsContainer}>
      <h2 style={styles.header}>Today's Top School Deals</h2>
      <p style={styles.subHeader}>
        A selection of the best School deals, only available today
      </p>
      <div style={styles.dealsGrid}>
        {hotelDeals.map((deal, index) => (
          <div style={styles.dealCard} key={index}>
            <div style={styles.discountTag}>Up to {deal.discount} off</div>
            <img src={im} alt={deal.name} style={styles.hotelImage} />
            <h3 style={styles.hotelName}>{deal.name}</h3>
            <p style={styles.hotelLocation}>{deal.location}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SchoolDeals;
