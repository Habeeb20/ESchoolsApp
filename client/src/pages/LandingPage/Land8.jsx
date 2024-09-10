import React from 'react';
import im from '../../assets/website/tutorial.jpg'
import im2 from '../../assets/website/img234.png'
import CountSchool from '../CountSchools';
import PopularSchools from '../PopularSchools';
const Land8 = () => {
  const containerStyle = {
    fontFamily: 'Arial, sans-serif',
    width: '100%',
    margin: '0 auto',
    padding: '20px',
    textAlign: 'center',
  };

  const headerStyle = {
    backgroundImage: `url(${im2})`, 
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    color: '#fff',
    padding: '80px 20px',
    fontSize: '1.5rem',
    fontWeight: 'bold',
  };

  const bookingBoxStyle = {
    backgroundColor: '#031147',
    color: '#fff',
    padding: '20px',
    borderRadius: '10px',
    maxWidth: '800px',
    margin: '0 auto',
    marginTop: '-50px',
    boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.2)',
  };

  const tabStyle = {
    display: 'flex',
    justifyContent: 'space-around',
    marginBottom: '20px',
  };

  const tabButtonStyle = {
    backgroundColor: 'transparent',
    color: '#fff',
    padding: '10px 20px',
    border: 'none',
    borderBottom: '2px solid transparent',
    cursor: 'pointer',
  };

  const activeTabStyle = {
    ...tabButtonStyle,
    borderBottom: '2px solid #fff',
  };

  const formStyle = {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    gap: '10px',
    marginTop: '20px',
  };

  const inputStyle = {
    flex: '1 1 calc(50% - 10px)',
    padding: '10px',
    borderRadius: '5px',
    border: '1px solid #ccc',
  };

  const buttonStyle = {
    padding: '15px 20px',
    backgroundColor: '#0A4FC2',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    flex: '1 1 calc(100% - 10px)',
  };

  const subscribeSectionStyle = {
    backgroundColor: '#f9f9f9',
    padding: '50px 20px',
    marginTop: '50px',
  };

  const subscribeTextStyle = {
    fontSize: '1.2rem',
    marginBottom: '20px',
  };

  const emailFormStyle = {
    display: 'flex',
    justifyContent: 'center',
    marginTop: '20px',
  };

  const emailInputStyle = {
    padding: '10px',
    flex: '1',
    borderRadius: '5px 0 0 5px',
    border: '1px solid #ccc',
    borderRight: 'none',
  };

  const subscribeButtonStyle = {
    padding: '10px 20px',
    backgroundColor: '#00D25B',
    color: '#fff',
    border: 'none',
    borderRadius: '0 5px 5px 0',
    cursor: 'pointer',
  };

  const privacyTextStyle = {
    fontSize: '0.8rem',
    color: '#666',
    marginTop: '20px',
  };

  return (
    <>
    <PopularSchools />
        <div style={containerStyle}>
      {/* Header Section */}
      <div style={headerStyle}>
        <p style={{paddingBottom:"8%", fontWeight: "bolder", fontSize:"20px"}}> Book a flight, Hotel, train, interstate ALL OVER NIGERIA <br /> AND THE WORLD - and get a student discount rate</p>
      

      {/* Booking Box */}
      <div style={bookingBoxStyle}>
        <div style={tabStyle}>
          <button style={activeTabStyle}>Economy</button>
          <button style={tabButtonStyle}>Premium</button>
          <button style={tabButtonStyle}>Business</button>
          <button style={tabButtonStyle}>First class</button>
        </div>
        <div style={formStyle}>
          <input type="text" placeholder="From (city)" style={inputStyle} />
          <input type="text" placeholder="To (city)" style={inputStyle} />
          <input type="date" placeholder="Departure Date" style={inputStyle} />
          <input type="date" placeholder="Return Date" style={inputStyle} />
          <input type="number" placeholder="1 Passenger" style={inputStyle} />
          <button style={buttonStyle}>Search Flight</button>
        </div>
      </div>
      </div>

      {/* Subscription Section */}
      <div style={subscribeSectionStyle}>
        <div style={subscribeTextStyle}>
          You are 90% MORE likely to get the best deals as a Student by subscribing
        </div>
        <div style={emailFormStyle}>
          <input
            type="email"
            placeholder="Enter your email and we'll send them your way."
            style={emailInputStyle}
          />
          <button style={subscribeButtonStyle}>Search Flight</button>
        </div>
        <div style={privacyTextStyle}>
          Your privacy is important to us, so we'll never spam you or share your info with third parties.
          Take a look at our privacy policy. You can unsubscribe at any time.
        </div>
      </div>
      
    </div>

    </>

  );
};

export default Land8;
