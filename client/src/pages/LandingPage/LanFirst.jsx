

import React from 'react';
import im from '../../assets/university/u.jfif';
import im2 from '../../assets/website/tutorial4.jpg';
import im3 from '../../assets/website/tutorial5.jpg';
import im4 from '../../assets/website/tutorial8.jpg';
import im5 from '../../assets/website/tutorial3.jpg';
import im6 from '../../assets/website/tutorial9.jpg';
import im7 from '../../assets/website/tutorial7.jpg';
import im8 from '../../assets/website/student2.webp';
import './lan.css'

const LanFirst = () => {
  return (
    <div style={{ fontFamily: 'Arial, sans-serif', lineHeight: '1.6', margin: '0', padding: '0' }}>
      
      {/* Header Section */}
      <header style={{ textAlign: 'center', padding: '30px 20px', backgroundColor: '#fff', color: '#000' }}>
        <h1 style={{ fontSize: '2rem', fontWeight: 'bold' }}>Connect the world of Students, schools, and exams <br /><span style={{ color: '#00a60e', fontSize:'240%' }}>Together</span></h1>
        
        <div style={{ display: 'flex', justifyContent: 'center', gap: '20px', marginTop: '20px', flexWrap: 'wrap' }}>
          <div style={{ textAlign: 'center', maxWidth: '220px' }}>
            <img src={im} alt="Student 1" style={{ borderRadius: '50%', width: '150px', height: '170px', marginBottom: '10px' }} />
            <p style={{fontSize:"200%", lineHeight:"22px"}}>If you are travelling with a group of 16 or more people and are looking for sustainable cost-effective travel, look no further. When hiring a coach and a driver, you have complete control over your travel itinerary.</p>
          </div>
          <div style={{ textAlign: 'center', maxWidth: '240px' }}>
            <img src={im2} alt="Graduate" style={{ borderRadius: '50%', width: '230px', height: '270px', marginBottom: '10px' }} />
          </div>
          <div style={{ textAlign: 'center', maxWidth: '220px' }}>
            <img src={im3} alt="Student 2" style={{ borderRadius: '50%', width: '150px', height: '170px', marginBottom: '10px' }} />
            <p style={{fontSize:"200%", lineHeight:"22px"}}>If you are travelling with a group of 16 or more people and are looking for sustainable cost-effective travel, look no further. When hiring a coach and a driver, you have complete control over your travel itinerary.</p>
          </div>
        </div>
      </header>
{/* Slider Section */}
<section style={{ backgroundColor: '#000', padding: '20px', color: '#fff' }}>
  <div style={{
    display: 'flex',
    overflow: 'hidden', // Hides the scrollbar
    width: '100%',
    position: 'relative',
  }}>
    <div style={{
      display: 'flex',
      gap: '15px',
      whiteSpace: 'nowrap',
      animation: 'slide 15s linear infinite',
      width: '200%', // Ensures enough space for both sets of images
    }}>
      {/* Repeat the images twice for seamless transition */}
      {[im4, im5, im6, im7, im8].map((img, index) => (
        <div key={index} style={{ width: 'calc(100% / 5)', flexShrink: 0 }}>
          <img src={img} alt={`Slide ${index}`} style={{ width: '100%', borderRadius: '8px' }} />
          <p style={{ textAlign: 'center', marginTop: '10px' }}>Description {index + 1}</p>
        </div>
      ))}
      {[im4, im5, im6, im7, im8].map((img, index) => (
        <div key={index + 5} style={{ width: 'calc(100% / 5)', flexShrink: 0 }}>
          <img src={img} alt={`Slide ${index}`} style={{ width: '100%', borderRadius: '8px' }} />
          <p style={{ textAlign: 'center', marginTop: '10px' }}>Description {index + 1}</p>
        </div>
      ))}
    </div>
  </div>
</section>


      {/* Financial Assistance Section */}
      <section style={{ backgroundImage: `url(${im4})`, backgroundSize: 'cover', padding: '50px 20px', textAlign: 'center', color: '#fff' }}>
        <h2 style={{ fontSize: '2rem', fontWeight: 'bold' , color:"black"}}>Your Student Financial Assistance - Loan and Scholarships</h2>
        <p style={{ maxWidth: '800px', margin: '20px auto', fontSize: '3.2rem', color:"black" }}>Estudent Funding is Providing students in Nigeria with financial aid options to fund their education</p>
        <div style={{ display: 'flex', justifyContent: 'center', gap: '20px', marginTop: '30px' }}>
          <button style={{ padding: '15px 30px', backgroundColor: '#00a60e', color: '#fff', borderRadius: '5px', border: 'none', fontSize: '1rem' }}>Get Loan</button>
          <button style={{ padding: '15px 30px', backgroundColor: 'transparent', color: 'green', borderRadius: '5px', border: '2px solid green', fontSize: '1rem' }}>Scholarship</button>
        </div>
      </section>

      {/* Other Choices Section
      <section style={{ padding: '50px 20px', backgroundColor: '#fff' }}>
  <h2 style={{ textAlign: 'center', fontSize: '2rem', fontWeight: 'bold', marginBottom: '30px' }}>Our Other Choices</h2>
  <div style={{ 
    display: 'flex', 
    flexWrap: 'wrap', 
    justifyContent: 'space-between', 
    gap: '15px' 
  }}>
    {[im3, im5, im6, im7, im3, im5, im6, im7].map((image, index) => (
      <div key={index} style={{ 
        flex: '1 1 calc(25% - 15px)', 
        maxWidth: 'calc(25% - 15px)', 
        boxSizing: 'border-box', 
        textAlign: 'center'
      }}>
        <img src={image} alt={`Choice ${index + 1}`} style={{ width: '100%', borderRadius: '8px' }} />
        <p style={{ marginTop: '10px' }}>Lorem ipsum dolor sit amet consectetur. Et rhoncus nunc sit nec. Euismod.</p>
      </div>
    ))}
  </div>
</section> */}

      <style>{`
        @keyframes slide {
          0% { transform: translateX(0); }
          100% { transform: translateX(-100%); }
        }
      `}</style>
    </div>
  );
};

export default LanFirst;
