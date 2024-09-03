import React from 'react';
import im from '../../assets/website/Rectangle 406.png'
import im1 from '../../assets/website/Rectangle 408.png'
import im3 from '../../assets/website/Rectangle 409.png'
import im4 from '../../assets/website/Rectangle 410.png'
import im2 from '../../assets/website/tutorial8.jpg'
import student from '../../assets/website/homepage student.png'
import student1 from '../../assets/website/Mask group.png'
const Lanfix3 = () => {
  return (
    <div style={{ fontFamily: 'Arial, sans-serif', margin: '0', padding: '0' }}>
      
      {/* Book an Hotel before leaving Section */}
      <section style={{ padding: '20px', backgroundColor: '#f9f9f9' }}>
        <h2 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '15px' }}>Book an Hotel before leaving</h2>
        <div style={{ display: 'flex', gap: '15px', flexWrap: 'wrap' }}>
          
          {/* Main Promo Image */}
          <div style={{ flex: '1 1 65%', position: 'relative' }}>
            <img src={im} alt="Promo" style={{ width: '100%', borderRadius: '10px' }} />
            <div style={{ position: 'absolute', top: '20px', left: '20px', color: '#fff', fontSize: '1.5rem', fontWeight: 'bold' }}>
              Thousands of 5-Star reviews
            </div>
            <div style={{ position: 'absolute', top: '50px', left: '20px', color: '#fff', fontSize: '1rem' }}>
              Thanks to our first-class quality and great value fares...
            </div>
            <button style={{ position: 'absolute', bottom: '20px', left: '20px', backgroundColor: '#28a745', color: '#fff', padding: '10px 20px', borderRadius: '5px', border: 'none', fontSize: '1rem', cursor: 'pointer' }}>
              Book now
            </button>
          </div>
          
          {/* Side Info Box */}
          <div style={{ flex: '1 1 30%', backgroundColor: '#eaf8e9', borderRadius: '10px', padding: '20px', color: '#333' }}>
            <h3 style={{ fontSize: '1.2rem', color: '#28a745', fontWeight: 'bold' }}>
              You will be amazed by what we have prepared for you
            </h3>
            <p style={{ fontSize: '1.9rem', marginTop: '10px' }}>
              Vestibulum dictum ultricies elit a luctus. Sed in ante ut leo congue posuere at sit amet ligula. Pellentesque eget augue nec nisi sodales blandit sed et sem.
            </p>
          </div>
          
        </div>
        
        {/* Image Grid Section */}
        <div style={{ display: 'flex', gap: '15px', marginTop: '15px' }}>
          {[im1, im4, im3].map((src, index) => (
            <div key={index} style={{ flex: '1 1 30%' }}>
              <img src={src} alt={`Image ${index + 1}`} style={{ width: '100%', borderRadius: '10px' }} />
            </div>
          ))}
        </div>
        
      </section>
      
      {/* Do more with student I.D Section */}
      <section style={{ padding: '50px 20px', backgroundColor: '#f5f8fa', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap' }}>
        <div style={{ maxWidth: '50%' }}>
          <h2 style={{ fontSize: '2rem', fontWeight: 'bold', marginBottom: '20px' }}>Do more with student I.D</h2>
          <p style={{ fontSize: '2rem', color: '#666' }}>
            Lorem ipsum dolor sit amet consectetur. Et rhoncus nunc dictum massa.
          </p>
        </div>
        <div style={{ maxWidth: '40%' }}>
          <img src={student1} alt="Student ID" style={{ width: '90%', borderRadius: '10px' }} />
        </div>
      </section>
      
      {/* Footer Section */}
      <section style={{ padding: '20px', backgroundColor: '#f9f9f9', display: 'flex', gap: '15px', flexWrap: 'wrap' }}>
        
        {/* Left Image */}
        <div style={{ flex: '1 1 45%' }}>
          <img src={student} alt="Left Image" style={{ width: '100%', borderRadius: '10px' }} />
        </div>
        
        {/* Right Text */}
        <div style={{ flex: '1 1 50%', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
          <h3 style={{ fontSize: '2.5rem', fontWeight: 'bold', marginBottom: '15px' }}>Are you a student? <br /> Do you want to enter vehicle at a very good discount? <br />E-ride got you covered</h3>
      
            <button style={{ backgroundColor: '#28a745', width:'50%', color: '#fff', padding: '10px 20px', borderRadius: '5px', border: 'none', fontSize: '1rem', cursor: 'pointer'}}>join our next transporting</button>
          
        </div>
      
        
      </section>
      
    </div>
  );
};

export default Lanfix3;
