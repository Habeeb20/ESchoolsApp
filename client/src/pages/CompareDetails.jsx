
import React, { useState } from 'react';
import axios from 'axios';
import toast from 'react-hot-toast';
import u1 from '../assets/university/u12.jfif'
import u2 from '../assets/university/u13.jfif'
import u3 from '../assets/university/u14.jfif'
import u4 from '../assets/university/u19.jfif'
import u5 from '../assets/university/u16.jfif'
const CompareDetails = () => {
  const [searchParams, setSearchParams] = useState({
    location: '',
    schoolFees: '',
    onBoarding: '',
    name: ''
  });
  const [results, setResults] = useState([]);

  const handleChange = (e) => {
    setSearchParams({ ...searchParams, [e.target.name]: e.target.value });
  };

  const handleSearch = async () => {
    try {
      const response = await axios.get('http://localhost:4000/schoolscompare', {
        params: searchParams
      });
      setResults(response.data);
      if (response.status === 200) {
        toast.success("Successfully fetched");
      } else {
        toast.error("An error occurred");
      }
    } catch (error) {
      console.error('Error fetching schools:', error);
      toast.error("An error occurred externally");
    }
  };

  // Inline styles
  const containerStyle = {
    padding: '20px',
    maxWidth: '800px',
    margin: '0 auto',
    fontFamily: 'Arial, sans-serif'
  };

  const inputStyle = {
    margin: '10px 0',
    padding: '10px',
    border: '1px solid #ddd',
    borderRadius: '4px',
    width: '100%',
    boxSizing: 'border-box'
  };

  const buttonStyle = {
    padding: '10px 20px',
    backgroundColor: '#4CAF50',
    color: 'white',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    fontSize: '16px',
    width: '100%',
    boxSizing: 'border-box'
  };

  const resultContainerStyle = {
    marginTop: '20px',
    padding: '10px',
    border: '1px solid #ddd',
    borderRadius: '4px',
    backgroundColor: '#f9f9f9'
  };

  const resultItemStyle = {
    padding: '10px',
    borderBottom: '1px solid #ddd'
  };

  const headingStyle = {
    margin: '0 0 10px',
    fontSize: '18px',
    color: '#333'
  };

  const subHeadingStyle = {
    margin: '5px 0',
    fontSize: '16px',
    color: '#666'
  };







  const styles = {
    header: {
      fontSize: '24px',
      textAlign: 'center',
      marginBottom: '20px',
    },
    form: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: '20px',
    },
    inputGroup: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },
    input: {
      width: '300px',
      height: '50px',
      border: '2px solid #ccc',
      borderRadius: '8px',
      padding: '10px 15px',
      fontSize: '26px',
      position: 'relative',
      backgroundColor: '#f9f9f9',
      backgroundImage: 'url("data:image/svg+xml,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 width=%2716%27 height=%2716%27 fill=%27currentColor%27 class=%27bi bi-plus-circle%27 viewBox=%270 0 16 16%27%3E%3Cpath d=%27M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14zm0 1A8 8 0 1 1 8 0a8 8 0 0 1 0 16z%27/%3E%3Cpath d=%27M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z%27/%3E%3C/svg%3E")',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'right 10px center',
      outline: 'none',
    },
    button: {
      marginTop: '20px',
      width: '200px',
      height: '50px',
      border: 'none',
      borderRadius: '8px',
      backgroundColor: '#4CAF50',
      color: 'white',
      fontSize: '18px',
      cursor: 'pointer',
      alignSelf: 'center',
    },
    inputWrapper: {
      display: 'flex',
      justifyContent: 'space-between',
      width: '100%',
      maxWidth: '960px',
    },
    comparisonContainer: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'flex-start',
      marginTop: '20px',
      flexWrap: 'wrap',
    },
    card: {
      width: '30%',
      border: '1px solid #ccc',
      borderRadius: '10px',
      overflow: 'hidden',
      marginBottom: '20px',
    },
    cardImg: {
      width: '100%',
      height: '150px',
      objectFit: 'cover',
    },
    cardBody: {
      padding: '10px',
    },
    cardTitle: {
      margin: '0',
      color: '#00458b',
    },
    viewDetailButton: {
      backgroundColor: '#dc3545',
      color: '#fff',
      padding: '5px 10px',
      border: 'none',
      borderRadius: '5px',
      cursor: 'pointer',
    },
    infoTable: {
      width: '100%',
      borderCollapse: 'collapse',
      marginTop: '20px',
      border: '1px solid #ccc',
      borderRadius: '10px',

    },
    infoTableHeader: {
      padding: '10px',
      backgroundColor: '#f8f9fa',
      borderBottom: '1px solid #ccc',
    },
    infoTableCell: {
      padding: '10px',
      border: '1px solid #ccc',
      fontSize: '20px'
    },
    infoTableCellBold: {
      padding: '10px',
      border: '1px solid #ccc',
      fontWeight: 'bold',
    },
    addSchoolContainer: {
      width: '48px',
      height: '150px',
      border: '1px dashed #ccc',
      borderRadius: '10px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      cursor: 'pointer',
    },
    addSchoolText: {
      fontSize: '24px',
      color: '#ccc',
    },
  };


  return (
    <div style={containerStyle}>
      <form onSubmit={handleSearch} style={styles.form}>
        <div style={styles.inputWrapper}>
          <div style={styles.inputGroup}>
            <input
              type="text"
              name="location"
              value={searchParams.location}
              onChange={handleChange}
              placeholder="Location"
              style={inputStyle}
            />
          </div>
          <div style={styles.inputGroup}>
            <input
              type="number"
              name="schoolFees"
              value={searchParams.schoolFees}
              onChange={handleChange}
              placeholder="School Fees"
              style={inputStyle}
            />
          </div>
          <div style={styles.inputGroup}>
            <select
              name="onBoarding"
              value={searchParams.onBoarding}
              onChange={handleChange}
              style={{ padding: '10px', fontSize: '16px', borderRadius: '4px', border: '1px solid #ccc', width: '100%' }}
            >
              <option value="">hostel or not? Select...</option>
              <option value="true">Yes</option>
              <option value="false">No</option>
            </select>

          </div>
          <div style={styles.inputGroup}>
            <input
              type="text"
              name="name"
              value={searchParams.name}
              onChange={handleChange}
              placeholder="Address"
              style={inputStyle}
            />

          </div>
        


        </div>
        <button type="submit" style={styles.button}>Search</button>

      </form>

      <div style={styles.comparisonContainer}>
        {results.length > 0 ? (
          results.map((school) => (
            <div key={school._id} style={styles.card}>
              <div style={styles.cardBody}>
                <img src={u1} alt="School 1" style={styles.cardImg} />
                <h4 style={styles.cardTitle}>{school.school}</h4>
                <table style={styles.infoTable}>
                  <thread>
                    <tr>
                      <th style={styles.infoTableHeader}>Info</th>
                      <th style={styles.infoTableHeader}>Details</th>
                    </tr>
                  </thread>
                  <tbody>
                    <tr>
                      <td style={styles.infoTableCellBold}>Location</td>
                      <td style={styles.infoTableCell}>{school.location}</td>
                    </tr>
                    <tr>
                      <td style={styles.infoTableCellBold}>minimum School fees</td>
                      <td style={styles.infoTableCell}>{school.schoolFees}</td>
                    </tr>
                    <tr>
                      <td style={styles.infoTableCellBold}>Onboarding</td>
                      <td style={styles.infoTableCell}>{school.onBoarding}</td>
                    </tr>
                    <tr>
                      <td style={styles.infoTableCellBold}>Address</td>
                      <td style={styles.infoTableCell}>{school.name}</td>
                    </tr>
                  </tbody>

                </table>



              </div>

            </div>
          ))
        ) : (
          <p>No results found</p>
        )}
      </div>
    </div>
  );
};

export default CompareDetails;
