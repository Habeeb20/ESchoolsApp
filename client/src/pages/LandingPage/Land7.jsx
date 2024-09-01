import React from 'react';
import im from '../../assets/website/tutorial.jpg'
import im2 from '../../assets/website/tutorial9.jpg'
const Land7 = () => {
    const containerStyling = {
        fontFamily: 'Arial, sans-serif',
        width: '100%',
        margin: '0 auto',
        padding: '20px',
        textAlign: 'center',
      };
    
      const headerStyle = {
        backgroundImage: `url(${im})`, // replace with your image path
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        color: '#fff',
        padding: '80px 20px',
        fontSize: '1.5rem',
        fontWeight: 'bold',
      };
  const containerStyle = {
    fontFamily: 'Arial, sans-serif',
    width: '100%',
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '20px',
  };

  const headerSectionStyle = {
    textAlign: 'center',
    padding: '50px 20px',
    backgroundColor: '#f4f4f4',
    position: 'relative',
  };

  const headerTextStyle = {
    fontSize: '2.5rem',
    fontWeight: 'bold',
    marginBottom: '20px',
  };

  const subheaderTextStyle = {
    fontSize: '1.2rem',
    fontWeight: 'normal',
    color: '#555',
  };

  const trendingSectionStyle = {
    marginTop: '30px',
    display: 'flex',
    overflowX: 'scroll',
    padding: '20px 0',
  };

  const trendingItemStyle = {
    minWidth: '200px',
    marginRight: '20px',
    backgroundColor: '#fff',
    borderRadius: '10px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    padding: '10px',
    textAlign: 'center',
    position: 'relative',
  };

  const trendingLabelStyle = {
    position: 'absolute',
    top: '5px',
    left: '5px',
    backgroundColor: 'red',
    color: '#fff',
    padding: '2px 5px',
    borderRadius: '3px',
    fontSize: '0.8rem',
  };

  const newsSectionStyle = {
    position: 'relative',
    marginTop: '50px',
  };

  const newsOverlayStyle = {
    position: 'absolute',
    top: '0',
    left: '0',
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    color: '#fff',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '20px',
  };

  const newsOverlayTextStyle = {
    fontSize: '2rem',
    fontWeight: 'bold',
    marginBottom: '10px',
  };

  const blogSectionStyle = {
    marginTop: '50px',
    padding: '20px',
    backgroundColor: '#fff',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    borderRadius: '10px',
  };

  const blogPostStyle = {
    display: 'flex',
    alignItems: 'center',
  };

  const blogImageStyle = {
    width: '50%',
    height: 'auto',
    borderRadius: '10px',
    marginRight: '20px',
  };

  const blogContentStyle = {
    flex: 1,
  };

  const blogTitleStyle = {
    fontSize: '1.5rem',
    fontWeight: 'bold',
    marginBottom: '10px',
  };

  const blogDateStyle = {
    fontSize: '0.9rem',
    color: '#999',
    marginBottom: '10px',
  };

  const blogTextStyle = {
    fontSize: '1rem',
    color: '#333',
  };

  const advertSectionStyle = {
    marginTop: '50px',
    textAlign: 'center',
    padding: '20px',
    backgroundColor: '#f4f4f4',
    fontSize: '2rem',
  };

  return (
    <div style={containerStyle}>
      {/* Header Section */}
      <div style={headerSectionStyle}>
        <div style={headerTextStyle}>Host your school website</div>
        <div style={subheaderTextStyle}>Here • Now • Free</div>
      </div>

      {/* Trending Section */}
      <div style={trendingSectionStyle}>
        {[...Array(5)].map((_, index) => (
          <div style={trendingItemStyle} key={index}>
            <span style={trendingLabelStyle}>Trending</span>
            <img
              src={im}
              alt="Trending"
              style={{ width: '100%', borderRadius: '10px', marginBottom: '10px' }}
            />
            <div>Lecturer caught with fraud</div>
          </div>
        ))}
      </div>

      {/* News Section
      <div style={newsSectionStyle}>
        <img
          src={im2}
          alt="News"
          style={{ width: '100%', height: 'auto', borderRadius: '10px' }}
        />
        <div style={newsOverlayStyle}>
          <div style={newsOverlayTextStyle}>Newsroom & Blog</div>
        </div>
      </div> */}
    
      <div style={containerStyling}>
        <div style={headerStyle}>
            <div style={newsOverlayTextStyle}>Newsroom & Blog</div>
        </div>
      {/* Blog Section */}
      <div style={blogSectionStyle}>
        <div style={blogPostStyle}>
          <img
            src={im}
            alt="Blog"
            style={blogImageStyle}
          />
          <div style={blogContentStyle}>
            <div style={blogTitleStyle}>Opinion: Why we need to professionalize the health supply chain workforce</div>
            <div style={blogDateStyle}>JAN 24, 2023 | NEWS</div>
            <div style={blogTextStyle}>
              The supply chain management skill gap is one of the reasons why the health system of Africa experiences lapses or issues for its medicines...
            </div>
          </div>
        </div>
      </div>
      </div>
      {/* Advert Section */}
      <div style={advertSectionStyle}>Advert</div>
    </div>
  );
};

export default Land7;
