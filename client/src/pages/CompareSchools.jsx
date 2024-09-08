import React from 'react';
import Comparison from './Comparison';
import HomeNavbar from './LandingPage/essentialLanding/HomeNavbar';
import Uni1 from "../assets/university/u10.jfif"
import Uni2 from "../assets/university/u13.jfif"
const CompareSchools = () => {
  return (
   <>
   <HomeNavbar/>
   <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      {/* Header */}
      <h2 style={{ borderBottom: '2px solid #00458b', paddingBottom: '10px', marginBottom: '20px' }}>
        Compare Schools
      </h2>

      {/* Filter and School Cards */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
        <div style={{ width: '15%' }}>
          <input
            type="text"
            placeholder="I am looking admission in class"
            style={{
              width: '100%',
              padding: '10px',
              borderRadius: '5px',
              border: '1px solid #ccc',
              marginBottom: '10px',
            }}
          />
          <select
            style={{
              width: '100%',
              padding: '10px',
              borderRadius: '5px',
              border: '1px solid #ccc',
            }}
          >
            <option value="ondo">Ondo</option>
            {/* Add more options as needed */}
          </select>
        </div>

        <div style={{ display: 'flex', width: '80%', justifyContent: 'space-between' }}>
          <div style={{ width: '48%', border: '1px solid #ccc', borderRadius: '10px', overflow: 'hidden' }}>
            <img
              src={Uni1}
              alt="School"
              style={{ width: '100%', height: '150px', objectFit: 'cover' }}
            />
            <div style={{ padding: '10px' }}>
              <h3 style={{ margin: '0', color: '#00458b' }}>Futa</h3>
              <p style={{ margin: '5px 0', color: '#666' }}>Akure, Ondo state</p>
              <button
                style={{
                  backgroundColor: '#dc3545',
                  color: '#fff',
                  padding: '5px 10px',
                  border: 'none',
                  borderRadius: '5px',
                  cursor: 'pointer',
                }}
              >
                View Detail
              </button>
            </div>
          </div>

          <div style={{ width: '48%', border: '1px solid #ccc', borderRadius: '10px', overflow: 'hidden' }}>
            <img
              src={Uni2}
              alt="School"
              style={{ width: '100%', height: '150px', objectFit: 'cover' }}
            />
            <div style={{ padding: '10px' }}>
              <h3 style={{ margin: '0', color: '#00458b' }}>Futa</h3>
              <p style={{ margin: '5px 0', color: '#666' }}>Akure, Ondo state</p>
              <button
                style={{
                  backgroundColor: '#dc3545',
                  color: '#fff',
                  padding: '5px 10px',
                  border: 'none',
                  borderRadius: '5px',
                  cursor: 'pointer',
                }}
              >
                View Detail
              </button>
            </div>
          </div>

          <div
            style={{
              width: '48px',
              height: '150px',
              border: '1px dashed #ccc',
              borderRadius: '10px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
            }}
          >
            <span style={{ fontSize: '24px', color: '#ccc' }}>+</span>
          </div>
        </div>
      </div>

      {/* School Comparison Table */}
      <div style={{ marginTop: '20px', border: '1px solid #ccc', borderRadius: '10px', overflow: 'hidden' }}>
        <div style={{ padding: '10px', backgroundColor: '#f8f9fa', borderBottom: '1px solid #ccc' }}>
          <h4 style={{ margin: '0', color: '#00458b' }}>School Type</h4>
        </div>
        <div style={{ padding: '10px' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse' }}>
            <tbody>
              <tr>
                <td style={{ padding: '10px', border: '1px solid #ccc', fontWeight: 'bold' }}>Ownership</td>
                <td style={{ padding: '10px', border: '1px solid #ccc' }}>Private</td>
                <td style={{ padding: '10px', border: '1px solid #ccc' }}>Private</td>
              </tr>
              <tr>
                <td style={{ padding: '10px', border: '1px solid #ccc', fontWeight: 'bold' }}>School Format</td>
                <td style={{ padding: '10px', border: '1px solid #ccc' }}>University</td>
                <td style={{ padding: '10px', border: '1px solid #ccc' }}>University</td>
              </tr>
              <tr>
                <td style={{ padding: '10px', border: '1px solid #ccc', fontWeight: 'bold' }}>Co-Ed Status</td>
                <td style={{ padding: '10px', border: '1px solid #ccc' }}>Co-Education</td>
                <td style={{ padding: '10px', border: '1px solid #ccc' }}>Co-Education</td>
              </tr>
              {/* Add more rows as needed */}
            </tbody>
          </table>
        </div>
      </div>

      {/* Academics */}
      <div style={{ marginTop: '20px', border: '1px solid #ccc', borderRadius: '10px', overflow: 'hidden' }}>
        <div style={{ padding: '10px', backgroundColor: '#f8f9fa', borderBottom: '1px solid #ccc' }}>
          <h4 style={{ margin: '0', color: '#00458b' }}>Academics</h4>
        </div>
        <div style={{ padding: '10px' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse' }}>
            <tbody>
              <tr>
                <td style={{ padding: '10px', border: '1px solid #ccc', fontWeight: 'bold' }}>Board</td>
                <td style={{ padding: '10px', border: '1px solid #ccc' }}>Jamb</td>
                <td style={{ padding: '10px', border: '1px solid #ccc' }}>Jamb</td>
              </tr>
              <tr>
                <td style={{ padding: '10px', border: '1px solid #ccc', fontWeight: 'bold' }}>
                  Language of Instruction
                </td>
                <td style={{ padding: '10px', border: '1px solid #ccc' }}>English</td>
                <td style={{ padding: '10px', border: '1px solid #ccc' }}>English</td>
              </tr>
              <tr>
                <td style={{ padding: '10px', border: '1px solid #ccc', fontWeight: 'bold' }}>Academic Session</td>
                <td style={{ padding: '10px', border: '1px solid #ccc' }}>April to March</td>
                <td style={{ padding: '10px', border: '1px solid #ccc' }}>April to March</td>
              </tr>
              {/* Add more rows as needed */}
            </tbody>
          </table>
        </div>
      </div>

      {/* Distance */}
      <div style={{ marginTop: '20px', border: '1px solid #ccc', borderRadius: '10px', overflow: 'hidden' }}>
        <div style={{ padding: '10px', backgroundColor: '#f8f9fa', borderBottom: '1px solid #ccc' }}>
          <h4 style={{ margin: '0', color: '#00458b' }}>Distance</h4>
        </div>
        <div style={{ padding: '20px', textAlign: 'center' }}>
          <p>Please share your location to calculate the distance</p>
          <button
            style={{
              backgroundColor: '#00458b',
              color: '#fff',
              padding: '10px 20px',
              border: 'none',
              borderRadius: '5px',
              cursor: 'pointer',
            }}
          >
            Use My Current Location
          </button>
        </div>
      </div>
    </div>
   </>
  );
};

export default CompareSchools;
