import React from 'react';
import im from '../../assets/university/u.jfif'
import im2 from '../../assets/website/tutorial4.jpg'
import im3 from '../../assets/website/tutorial5.jpg'
import im4 from '../../assets/website/tutorial8.jpg'
import im5 from '../../assets/website/tutorial3.jpg'
import im6 from '../../assets/website/tutorial9.jpg'
import im7 from '../../assets/website/tutorial7.jpg'
import im8 from '../../assets/website/student2.webp'
import Video from '../Video';

const Lanfix2 = () => {
  return (
    <div style={{ fontFamily: 'Arial, sans-serif', margin: '0', padding: '0' }}>
      
      {/* Our Other Choices Section */}
      <section style={{ padding: '30px 20px', backgroundColor: '#fff' }}>
        <h2 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '20px' }}>Our Other Choices</h2>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '15px' }}>
          {['e-ride', 'hauling', 'Pride of Nigeria', 'Oosh'].map((item, index) => (
            <div key={index} style={{ flex: '1 1 calc(25% - 15px)', border: '1px solid #ccc', padding: '10px', borderRadius: '5px' }}>
              <img src={im2} alt={item} style={{ width: '100%', borderRadius: '5px', marginBottom: '10px' }} />
              <h3 style={{ fontSize: '1rem', fontWeight: 'bold' }}>{item}</h3>
              <p style={{ fontSize: '0.9rem', color: '#666' }}>Lorem ipsum dolor sit amet consectetur. Et rhoncus nunc dictum massa.</p>
            </div>
          ))}
        </div>
      </section>
      <section style={{ padding: '30px 20px', backgroundColor: '#fff' }}>
        {/* <h2 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '20px' }}>Our Other Choices</h2> */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '15px' }}>
          {['e-ride', 'hauling', 'Pride of Nigeria', 'Oosh'].map((item, index) => (
            <div key={index} style={{ flex: '1 1 calc(25% - 15px)', border: '1px solid #ccc', padding: '10px', borderRadius: '5px' }}>
              <img src={im2} alt={item} style={{ width: '100%', borderRadius: '5px', marginBottom: '10px' }} />
              <h3 style={{ fontSize: '1rem', fontWeight: 'bold' }}>{item}</h3>
              <p style={{ fontSize: '0.9rem', color: '#666' }}>Lorem ipsum dolor sit amet consectetur. Et rhoncus nunc dictum massa.</p>
            </div>
          ))}
        </div>
      </section>

      {/* Promotional Banner */}
      <section style={{ padding: '50px 20px', backgroundColor: '#f9f9f9', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap' }}>
        <div style={{ maxWidth: '50%' }}>
          <h2 style={{ fontSize: '2rem', fontWeight: 'bold', marginBottom: '20px' }}>Make the right choices during your school year with...</h2>
          <ul style={{ fontSize: '1.2rem', color: '#333', listStyle: 'none', padding: '0' }}>
            <li>• e-jobs</li>
            <li>• comparism</li>
            <li>• Scholarships</li>
            <li>• Admission ...etc</li>
          </ul>
        </div>
        <div style={{ maxWidth: '45%' }}>
          <img src={im3} alt="Promotional" style={{ width: '100%', borderRadius: '10px' }} />
        </div>
      </section>

{/* Short Videos Section */}
  <Video />





      {/* Footer Section */}
      {/* <section style={{ padding: '30px 20px', backgroundColor: '#f9f9f9' }}>
        <h2 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '20px' }}>Book an Hotel before leaving</h2>
        <div style={{ display: 'flex', gap: '15px', overflowX: 'scroll', paddingBottom: '10px', scrollbarWidth: 'none' }}>
          {['https://via.placeholder.com/300x200', 'https://via.placeholder.com/300x200', 'https://via.placeholder.com/300x200', 'https://via.placeholder.com/300x200'].map((src, index) => (
            <div key={index} style={{ minWidth: '250px', flexShrink: 0 }}>
              <img src={src} alt={`Hotel ${index + 1}`} style={{ width: '100%', borderRadius: '10px' }} />
            </div>
          ))}
        </div>
      </section> */}

    </div>
  );
};

export default Lanfix2;
