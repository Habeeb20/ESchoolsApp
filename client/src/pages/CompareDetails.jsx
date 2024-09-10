

// import React, { useState } from 'react';
// import axios from 'axios';
// import toast from 'react-hot-toast';

// const CompareDetails = () => {
//   const [searchParams, setSearchParams] = useState({
//     location: '',
//     schoolFees: '',
//     onBoarding: '',
//     name: ''
//   });
//   const [results, setResults] = useState([]);

//   const handleChange = (e) => {
//     setSearchParams({ ...searchParams, [e.target.name]: e.target.value });
//   };

//   const handleSearch = async () => {
//     try {
//       const response = await axios.get('http://localhost:4000/schoolscompare', {
//         params: searchParams
//       });
//       setResults(response.data);
//       if (response.status === 200) {
//         toast.success("Successfully fetched");
//       } else {
//         toast.error("An error occurred");
//       }
//     } catch (error) {
//       console.error('Error fetching schools:', error);
//       toast.error("An error occurred externally");
//     }
//   };

//   // Inline styles
//   const containerStyle = {
//     padding: '20px',
//     maxWidth: '800px',
//     margin: '0 auto',
//     fontFamily: 'Arial, sans-serif'
//   };

//   const inputStyle = {
//     margin: '10px 0',
//     padding: '10px',
//     border: '1px solid #ddd',
//     borderRadius: '4px',
//     width: '100%',
//     boxSizing: 'border-box'
//   };

//   const buttonStyle = {
//     padding: '10px 20px',
//     backgroundColor: '#4CAF50',
//     color: 'white',
//     border: 'none',
//     borderRadius: '4px',
//     cursor: 'pointer',
//     fontSize: '16px',
//     width: '100%',
//     boxSizing: 'border-box'
//   };

//   const resultContainerStyle = {
//     marginTop: '20px',
//     padding: '10px',
//     border: '1px solid #ddd',
//     borderRadius: '4px',
//     backgroundColor: '#f9f9f9'
//   };

//   const resultItemStyle = {
//     padding: '10px',
//     borderBottom: '1px solid #ddd'
//   };

//   const headingStyle = {
//     margin: '0 0 10px',
//     fontSize: '18px',
//     color: '#333'
//   };

//   const subHeadingStyle = {
//     margin: '5px 0',
//     fontSize: '16px',
//     color: '#666'
//   };

//   return (
//     <div style={containerStyle}>
//       <input
//         type="text"
//         name="location"
//         value={searchParams.location}
//         onChange={handleChange}
//         placeholder="Location"
//         style={inputStyle}
//       />
//       <input
//         type="number"
//         name="schoolFees"
//         value={searchParams.schoolFees}
//         onChange={handleChange}
//         placeholder="School Fees"
//         style={inputStyle}
//       />
   
//        <select
//             name="onBoarding"
//             value={searchParams.onBoarding}
//             onChange={handleChange}
//             style={{ padding: '10px', fontSize: '16px', borderRadius: '4px', border: '1px solid #ccc' }}
//           >
//             <option value="">Do you prefer a school that has boarding? Select...</option>
//             <option value="true">Yes</option>
//             <option value="false">No</option>
//           </select>
//       <input
//         type="text"
//         name="name"
//         value={searchParams.name}
//         onChange={handleChange}
//         placeholder="Address"
//         style={inputStyle}
//       />
//       <button onClick={handleSearch} style={buttonStyle}>Search</button>

//       <div style={resultContainerStyle}>
//         {results.length > 0 ? (
//           results.map((school) => (
//             <div key={school._id} style={resultItemStyle}>
//               <h4 style={headingStyle}>{school.school}</h4>
//               <h5 style={subHeadingStyle}>Location: {school.location}</h5>
//               <h5 style={subHeadingStyle}>School Fees: {school.schoolFees}</h5>
//               <h5 style={subHeadingStyle}>Onboarding: {school.onBoarding ? 'Yes' : 'No'}</h5>
//               <h5 style={subHeadingStyle}>Address: {school.name}</h5>
//             </div>
//           ))
//         ) : (
//           <p>No results found</p>
//         )}
//       </div>
//     </div>
//   );
// };

// export default CompareDetails;

import React, { useState } from 'react';
import axios from 'axios';
import toast from 'react-hot-toast';

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

  return (
    <div style={containerStyle}>
      <input
        type="text"
        name="location"
        value={searchParams.location}
        onChange={handleChange}
        placeholder="Location"
        style={inputStyle}
      />
      <input
        type="number"
        name="schoolFees"
        value={searchParams.schoolFees}
        onChange={handleChange}
        placeholder="School Fees"
        style={inputStyle}
      />
      <select
        name="onBoarding"
        value={searchParams.onBoarding}
        onChange={handleChange}
        style={{ padding: '10px', fontSize: '16px', borderRadius: '4px', border: '1px solid #ccc', width: '100%' }}
      >
        <option value="">Do you prefer a school that has boarding? Select...</option>
        <option value="true">Yes</option>
        <option value="false">No</option>
      </select>
      <input
        type="text"
        name="name"
        value={searchParams.name}
        onChange={handleChange}
        placeholder="Address"
        style={inputStyle}
      />
      <button onClick={handleSearch} style={buttonStyle}>Search</button>

      <div style={resultContainerStyle}>
        {results.length > 0 ? (
          results.map((school) => (
            <div key={school._id} style={resultItemStyle}>
              <h4 style={headingStyle}>{school.school}</h4>
              <h5 style={subHeadingStyle}>Location: {school.location}</h5>
              <h5 style={subHeadingStyle}>School Fees: {school.schoolFees}</h5>
              <h5 style={subHeadingStyle}>Onboarding: {school.onBoarding ? 'Yes' : 'No'}</h5>
              <h5 style={subHeadingStyle}>Address: {school.name}</h5>
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
