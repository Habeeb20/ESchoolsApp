import { useNavigate } from "react-router-dom";
import React, { useState } from 'react';

export default function BenefitPostForm() {
  const [companyName, setCompanyName] = useState("");
  const [newsTitle, setNewsTitle] = useState("");
  const [offerStart, setOfferStart] = useState('');
  const [offerEnd, setOfferEnd] = useState('');
  const [coverPhoto, setCoverPhoto] = useState(null);
  const [text, setText] = useState('');
  const navigate = useNavigate();

  const handleFileChange = (e) => {
    setCoverPhoto(e.target.files[0]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const postData = { companyName, newsTitle, offerStart, offerEnd, coverPhoto, text };

    // Simulate saving the data
    localStorage.setItem('postData', JSON.stringify(postData));

    navigate('/benefit');
  };

  return (
    <div style={{ textAlign: 'center', padding: '20px', maxWidth: '600px', margin: '0 auto' }}>
      <h2>Post a New Benefit</h2>
      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
        <input
          type="text"
          placeholder="Company Name"
          value={companyName}
          onChange={(e) => setCompanyName(e.target.value)}
          style={inputStyle}
          required
        />
        <input
          type="text"
          placeholder="News Title"
          value={newsTitle}
          onChange={(e) => setNewsTitle(e.target.value)}
          style={inputStyle}
          required
        />
        <input
          type="date"
          placeholder="Offer Start"
          value={offerStart}
          onChange={(e) => setOfferStart(e.target.value)}
          style={inputStyle}
          required
        />
        <input
          type="date"
          placeholder="Offer End"
          value={offerEnd}
          onChange={(e) => setOfferEnd(e.target.value)}
          style={inputStyle}
          required
        />
        <input
          type="file"
          onChange={handleFileChange}
          style={inputStyle}
          required
        />
        <textarea
          placeholder="Text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          style={{ ...inputStyle, height: '100px' }}
          required
        />
        <button type="submit" style={buttonStyle}>
          Submit
        </button>
      </form>
    </div>
  );
}

const inputStyle = {
  padding: '10px',
  borderRadius: '4px',
  border: '1px solid #ddd',
  fontSize: '16px',
};

const buttonStyle = {
  padding: '10px 20px',
  borderRadius: '4px',
  border: 'none',
  backgroundColor: 'green',
  color: '#fff',
  fontSize: '16px',
  cursor: 'pointer',
};


// import React, { useState } from 'react';

// const BenefitPostForm = ({ onSubmit }) => {
//   const [formData, setFormData] = useState({
//     companyName: '',
//     newsTitle: '',
//     offerStart: '',
//     offerEnd: '',
//     coverPhoto: '',
//     text: '',
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({
//       ...formData,
//       [name]: value,
//     });
//   };

//   const handleFileChange = (e) => {
//     const file = e.target.files[0];
//     if (file) {
//       const reader = new FileReader();
//       reader.onloadend = () => {
//         setFormData({
//           ...formData,
//           coverPhoto: reader.result,
//         });
//       };
//       reader.readAsDataURL(file);
//     }
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     onSubmit(formData);
//     setFormData({
//       companyName: '',
//       newsTitle: '',
//       offerStart: '',
//       offerEnd: '',
//       coverPhoto: '',
//       text: '',
//     });
//   };

//   return (
//     <form onSubmit={handleSubmit} style={styles.form}>
//       <input
//         type="text"
//         name="companyName"
//         value={formData.companyName}
//         onChange={handleChange}
//         placeholder="Company Name"
//         style={styles.input}
//       />
//       <input
//         type="text"
//         name="newsTitle"
//         value={formData.newsTitle}
//         onChange={handleChange}
//         placeholder="News Title"
//         style={styles.input}
//       />
//       <input
//         type="date"
//         name="offerStart"
//         value={formData.offerStart}
//         onChange={handleChange}
//         placeholder="Offer Start"
//         style={styles.input}
//       />
//       <input
//         type="date"
//         name="offerEnd"
//         value={formData.offerEnd}
//         onChange={handleChange}
//         placeholder="Offer End"
//         style={styles.input}
//       />
//       <input
//         type="file"
//         accept="image/*"
//         onChange={handleFileChange}
//         style={styles.input}
//       />
//       <textarea
//         name="text"
//         value={formData.text}
//         onChange={handleChange}
//         placeholder="Text"
//         style={styles.textarea}
//       />
//       <button type="submit" style={styles.button}>Post</button>
//     </form>
//   );
// };

// const styles = {
//   form: {
//     display: 'flex',
//     flexDirection: 'column',
//     alignItems: 'center',
//     gap: '10px',
//     maxWidth: '400px',
//     margin: '0 auto',
//   },
//   input: {
//     width: '100%',
//     padding: '10px',
//     fontSize: '16px',
//     borderRadius: '5px',
//     border: '1px solid #ccc',
//   },
//   textarea: {
//     width: '100%',
//     padding: '10px',
//     fontSize: '16px',
//     borderRadius: '5px',
//     border: '1px solid #ccc',
//     minHeight: '100px',
//   },
//   button: {
//     padding: '10px 20px',
//     fontSize: '16px',
//     borderRadius: '5px',
//     border: 'none',
//     backgroundColor: 'green',
//     color: 'white',
//     cursor: 'pointer',
//   },
// };

// export default BenefitPostForm;
