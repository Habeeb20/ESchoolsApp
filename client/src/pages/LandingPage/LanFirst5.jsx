import React from 'react';
import im from '../../assets/website/tutorial8.jpg'

const Lanfirst5 = () => {
  const containerStyle = {
    position: 'relative',
    width: '100%',
    maxWidth: '1200px',
    margin: '0 auto',
    height: '400px',
    backgroundImage: `url(${im})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  };

  const arrowShapeStyle = {
    position: 'absolute',
    top: '0',
    right: '0',
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(255, 215, 0, 0.5)', 
    clipPath: 'polygon(0 0, 50% 0, 70% 50%, 50% 100%, 0 100%)',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    padding: '20px',
    boxSizing: 'border-box',
  };
  

  const headingStyle = {
    color: '#333',
    fontSize: '2rem',
    margin: '0 0 20px',
  };

  const spanStyle = {
    color: '#000',
    fontWeight: 'bold',
  };

  const paragraphStyle = {
    fontSize: '1rem',
    maxWidth: '600px',
    margin: '0',
  };


  return (
    <div style={{ fontFamily: 'Arial, sans-serif', color: '#333' }}>
      {/* First Section */}
      <div style={{
        backgroundImage: `url(${im})`, // Replace with actual image URL
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        color: '#fff',
        padding: '60px 20px',
        textAlign: 'center',
      }}>
        <h1 style={{ fontSize: '2rem', margin: '0 0 20px' }}>
          We tell you more about <br /> People, Businesses & Places In <span style={{ color: '#4CAF50' }}>Nigeria</span> Than Any Other Directory.
        </h1>
      </div>

      {/* Second Section */}
      <div style={{
        // backgroundColor: '#FFEB3B',
        padding: '40px 20px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        textAlign: 'center',
      }}>
         <div style={containerStyle}>
      <div style={arrowShapeStyle}>
        <h2 style={headingStyle}>
          Did <span style={spanStyle}>YOU</span> know?
        </h2>
        <p style={paragraphStyle}>
          that you can teach easily than before, make double the cash and rest twice more?
        </p>
      </div>
    </div>
      </div>

      {/* Third Section */}
      <div style={{
        backgroundColor: '#FFF',
        padding: '40px 20px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        textAlign: 'center',
      }}>
        <h2 style={{ color: '#333', fontSize: '2rem', margin: '0 0 20px' }}>
          Student can get jobs easily with student e-jobs
        </h2>
        <p style={{ fontSize: '1rem', maxWidth: '600px' }}>
          part time, full time, summer, holiday, services etc
        </p>
        <button style={{
          backgroundColor: '#4CAF50',
          color: '#FFF',
          padding: '10px 20px',
          border: 'none',
          borderRadius: '5px',
          cursor: 'pointer',
          marginTop: '20px',
        }}>
          learn more
        </button>
      </div>
    </div>
  );
};

export default Lanfirst5;
