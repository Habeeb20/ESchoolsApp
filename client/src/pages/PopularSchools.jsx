
import React from 'react';
import im from '../assets/university/uni11.jfif';


// Example data with ratings and review counts
const hotelDeals = [
  {
    name: 'School Name 1',
    location: 'Surulere, Lagos',
    image: { im },
    discount: '18%',
    rating: 4.5, // Example rating
    reviews: 120, // Example review count
  },
  {
    name: 'School Name 2',
    location: 'Victoria Island, Lagos',
    image: { im },
    discount: '22%',
    rating: 4.0,
    reviews: 89,
  },
  {
    name: 'School Name 3',
    location: 'Uyo, Akwa Ibom',
    image: { im },
    discount: '19%',
    rating: 4.8,
    reviews: 230,
  },
  {
    name: 'School Name 4',
    location: 'Location 4',
    image: { im },
    discount: '20%',
    rating: 3.9,
    reviews: 67,
  },
];

// Function to display the star rating
const renderStars = (rating) => {
  const stars = [];
  for (let i = 1; i <= 5; i++) {
    if (i <= Math.floor(rating)) {
      stars.push(<span key={i} style={{ color: '#FFD700' }}>★</span>); // Full star
    } else if (i === Math.ceil(rating) && rating % 1 !== 0) {
      stars.push(<span key={i} style={{ color: '#FFD700' }}>☆</span>); // Half star
    } else {
      stars.push(<span key={i} style={{ color: '#C0C0C0' }}>★</span>); // Empty star
    }
  }
  return stars;
};

const PopularSchools = () => {
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
      color: 'black',
      fontSize: '1.4rem',
      margin: '10px',
    },
    ratingContainer: {
      display: 'flex',
      alignItems: 'center',
      margin: '0 10px',
    },
    reviewsText: {
      marginLeft: '10px',
      fontSize: '1.2rem',
      color: '#555',
    },
    hotelLocation: {
      margin: '0 10px 10px 10px',
      color: '#555',
      fontSize: '1.5rem'
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
      <h2 style={styles.header}>popular Schools Deals</h2>
      <p style={styles.subHeader}>
        A selection of the best School deals, only available today
      </p>
      <div style={styles.dealsGrid}>
        {hotelDeals.map((deal, index) => (
          <div style={styles.dealCard} key={index}>
            <div style={styles.discountTag}>Up to {deal.discount} off</div>
            <img src={im} alt={deal.name} style={styles.hotelImage} />
            <h3 style={styles.hotelName}>{deal.name}</h3>
            
            {/* Star Rating and Review Count */}
            <div style={styles.ratingContainer}>
              {renderStars(deal.rating)}
              <span style={styles.reviewsText}>({deal.reviews} reviews)</span>
            </div>

            <p style={styles.hotelLocation}>{deal.location}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PopularSchools;
