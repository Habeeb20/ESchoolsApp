import React from 'react';
import Abroad2 from './Abroad2';
import Abroad3 from './Abroad3';
import HomeNavbar from '../LandingPage/essentialLanding/HomeNavbar';
import Footer from '../../components/BookEssential/Footer';

const Abroad = () => {
  return (
    <>
    <HomeNavbar />
    <div style={{ fontFamily: 'Arial, sans-serif', backgroundColor: '#f9f7f2', padding: '20px' }}>
      {/* Top Section */}
      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', marginBottom: '40px' }}>
        <div style={{ flex: '1 1 50%', paddingRight: '20px', minWidth: '300px' }}>
          <h1 style={{ fontSize: '2.5em', fontWeight: 'bold', marginBottom: '20px' }}>
            Don’t Just Study Business, Do It
          </h1>
          <p style={{ fontSize: '1.2em', lineHeight: '1.5', marginBottom: '20px' }}>
            Hult's transformative Bachelor of Business Administration (BBA) is designed around the universal truth that to master a skill—any skill, from riding a bike to leading a team—it must be practiced.
          </p>
          <img src="your-image-url" alt="Student with suitcase" style={{ width: '100%', marginBottom: '20px' }} />
          <p style={{ marginBottom: '10px', fontWeight: 'bold' }}>Download our brochure to find out more:</p>
          <ul style={{ listStyleType: 'disc', paddingLeft: '20px', lineHeight: '1.8' }}>
            <li>Career inspiration: Success stories from current students & alumni</li>
            <li>Challenge yourself: When you see an interactive activity, give it a go</li>
            <li>Think international: Read about our campuses around the world</li>
            <li>Important info: Including costs, scholarships, and entry requirements</li>
          </ul>
        </div>
        <div style={{ flex: '1 1 35%', backgroundColor: '#3d3d3d', color: '#fff', padding: '20px', borderRadius: '10px', minWidth: '300px' }}>
          <h2 style={{ marginBottom: '20px' }}>Learn more about our undergraduate program</h2>
          <form>
            <input type="text" placeholder="First Name" style={inputStyle} />
            <input type="text" placeholder="Last Name" style={inputStyle} />
            <input type="email" placeholder="Email" style={inputStyle} />
            <input type="text" placeholder="+1 Phone Number" style={inputStyle} />
            <input type="text" placeholder="High School" style={inputStyle} />
            <select style={inputStyle}>
              <option>When would you like to start studying?</option>
              <option>Option 1</option>
              <option>Option 2</option>
            </select>
            <div style={{ marginBottom: '20px' }}>
              <input type="checkbox" id="consent" style={{ marginRight: '10px' }} />
              <label htmlFor="consent" style={{ fontSize: '0.9em' }}>
                I, and if applicable my legal guardian, agree to my personal data being processed in accordance with Hult’s Privacy Policy, and for Hult and its affiliates to use my personal data to provide me with further information about its programs.
              </label>
            </div>
            <button style={{ backgroundColor: '#7bcf2d', color: '#fff', padding: '10px 20px', borderRadius: '5px', border: 'none', cursor: 'pointer', width: '100%' }}>
              Download Brochure &rarr;
            </button>
          </form>
        </div>
      </div>

      {/* Middle Section */}
      <div style={{ textAlign: 'center', marginBottom: '40px' }}>
        <p style={{ fontSize: '1.2em', fontWeight: 'bold' }}>
          Ready to apply? Start your application now and an enrollment advisor will be in touch to support you.
        </p>
        <button style={{ backgroundColor: '#fff', color: '#3d3d3d', padding: '10px 30px', borderRadius: '5px', border: '2px solid #3d3d3d', cursor: 'pointer', fontSize: '1em' }}>
          Apply Now
        </button>
      </div>

      {/* Rankings Section */}
      <div style={{ backgroundColor: '#f9f7f2', padding: '40px', marginBottom: '40px' }}>
        <h2 style={{ fontSize: '2em', fontWeight: 'bold', marginBottom: '20px' }}>Rankings, Accreditations, Awards & Partnerships</h2>
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between' }}>
          <div style={cardStyle}>
            <img src="your-image-url" alt="International Business Ranking" style={imageStyle} />
            <p style={{ marginTop: '10px' }}>U.S. News & World Report</p>
            <p style={{ fontWeight: 'bold' }}>International Business</p>
            <p style={{ fontSize: '1.5em', fontWeight: 'bold' }}>#25</p>
            <p>2021</p>
          </div>
        </div>
      </div>

      {/* Undergraduate Business School Rankings Section */}
      <div style={{ backgroundColor: '#f9f7f2', padding: '40px' }}>
        <h2 style={{ fontSize: '2em', fontWeight: 'bold', marginBottom: '20px' }}>Undergraduate business school rankings</h2>
        <p style={{ fontSize: '1.2em', lineHeight: '1.5' }}>
          Hult’s undergraduate program is proven to change lives. Don’t just take our word for it—see our rankings below.
        </p>
      </div>
    </div>
    <Abroad2 />
    <Abroad3 />
    <Footer />
    
    </>
  );
};

const inputStyle = {
  width: '100%',
  padding: '10px',
  marginBottom: '20px',
  borderRadius: '5px',
  border: '1px solid #ccc',
  fontSize: '1em',
};

const cardStyle = {
  flex: '1 1 30%',
  backgroundColor: '#fff',
  padding: '20px',
  borderRadius: '10px',
  marginBottom: '20px',
  minWidth: '300px',
};

const imageStyle = {
  width: '100%',
  borderRadius: '10px',
};

export default Abroad;
