// import React, { useState } from 'react';

// // Sample images (use actual images)
// import sampleImage from '../../assets/website/board.png';
// import SubEatery from './SubEatery';

// const styles = {
//   navbar: {
//     backgroundColor: '#4CAF50',
//     display: 'flex',
//     justifyContent: 'space-between',
//     padding: '10px',
//     color: 'white',
//   },
//   searchSection: {
//     display: 'flex',
//     justifyContent: 'center',
//     margin: '20px 0',
//   },
//   button: {
//     backgroundColor: 'green',
//     color: 'white',
//     border: 'none',
//     padding: '10px 20px',
//     cursor: 'pointer',
//   },
//   gridContainer: {
//     display: 'grid',
//     gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
//     gap: '20px',
//     padding: '0 20px',
//     margin: '0 auto',
//     maxWidth: '1200px',
//   },
//   card: {
//     border: '1px solid #ddd',
//     borderRadius: '8px',
//     padding: '15px',
//     textAlign: 'center',
//     boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
//     position: 'relative',
//   },
//   image: {
//     width: '100%',
//     height: '150px',
//     objectFit: 'cover',
//     borderRadius: '8px 8px 0 0',
//   },
//   header: {
//     backgroundImage: `url(${sampleImage})`,
//     backgroundSize: 'cover',
//     backgroundPosition: 'center',
//     padding: '20px',
//     textAlign: 'center',
//     color: 'white',
//   },
//   advertSection: {
//     backgroundColor: '#f8f8f8',
//     padding: '20px',
//     textAlign: 'center',
//   },
//   footer: {
//     backgroundColor: '#555',
//     padding: '20px',
//     color: 'white',
//     textAlign: 'center',
//   },
// };

// const items = [
//   { name: 'Item 1', description: 'Description 1', image: sampleImage },
//   { name: 'Item 2', description: 'Description 2', image: sampleImage },
//   // Add more items
// ];

// export default function Eatery() {
//   const [searchTerm, setSearchTerm] = useState('');

//   const filteredItems = items.filter(item =>
//     item.name.toLowerCase().includes(searchTerm.toLowerCase())
//   );

//   return (
//     <div>
//       <nav style={styles.navbar}>
//         <div>Logo</div>
//         <div>Links</div>
//       </nav>

//       <header style={styles.header}>
//         <h1>Eatery</h1>
//       </header>

//       <section style={styles.searchSection}>
//         <input
//           type="text"
//           placeholder="Search..."
//           value={searchTerm}
//           onChange={(e) => setSearchTerm(e.target.value)}
//         />
//         <button style={styles.button}>Search</button>
//       </section>

//       <section style={styles.gridContainer}>
//         {filteredItems.map((item, index) => (
//           <div key={index} style={styles.card}>
//             <img src={item.image} alt={item.name} style={styles.image} />
//             <h3>{item.name}</h3>
//             <p>{item.description}</p>
//             <button style={styles.button}>Read More</button>
//           </div>
//         ))}
//       </section>

//       <h2 style={{ textAlign: 'center', margin: '20px 0' }}>Highly Recommended</h2>

//       <section style={styles.gridContainer}>
//         {filteredItems.map((item, index) => (
//           <div key={index} style={styles.card}>
//             <img src={item.image} alt={item.name} style={styles.image} />
//             <h3>{item.name}</h3>
//             <p>{item.description}</p>
//             <button style={styles.button}>Read More</button>
//           </div>
//         ))}
//       </section>
//       <SubEatery />

//       <section style={styles.advertSection}>
//         <img src={sampleImage} alt="Advert" style={{ width: '100%', height: 'auto' }} />
//         <p>Thursday 06</p>
//         <p>Title of the Advert</p>
//         <p>Description of the advert goes here.</p>
//       </section>

//       {/* <footer style={styles.footer}>
//         <p>Logo</p>
//         <p>Links</p>
//       </footer> */}
//     </div>
//   );
// }



import React, { useState } from 'react';
import sampleImage from '../../assets/website/strip.png';

const styles = {
  container: {
    fontFamily: 'Arial, sans-serif',
  },
  navbar: {
    backgroundColor: '#4CAF50',
    display: 'flex',
    justifyContent: 'space-between',
    padding: '10px',
    color: 'white',
  },
  header: {
    backgroundColor: '#f2f2f2',
    padding: '20px',
    textAlign: 'center',
  },
  searchSection: {
    display: 'flex',
    justifyContent: 'center',
    margin: '20px 0',
  },
  button: {
    backgroundColor: 'green',
    color: 'white',
    border: 'none',
    padding: '10px 20px',
    cursor: 'pointer',
    marginLeft: '10px',
  },
  gridContainer: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
    gap: '20px',
    padding: '20px',
    margin: '0 auto',
    maxWidth: '1200px',
  },
  card: {
    border: '1px solid #ddd',
    borderRadius: '8px',
    padding: '15px',
    textAlign: 'center',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
  },
  image: {
    width: '100%',
    height: '150px',
    objectFit: 'cover',
    borderRadius: '8px 8px 0 0',
  },
  advertSection: {
    backgroundColor: '#f8f8f8',
    padding: '20px',
    textAlign: 'center',
  },
  footer: {
    backgroundColor: '#555',
    padding: '20px',
    color: 'white',
    textAlign: 'center',
  },
};

const items = [
  { name: 'Item 1', description: 'Description 1', image: sampleImage },
  { name: 'Item 2', description: 'Description 2', image: sampleImage },
  { name: 'Item 3', description: 'Description 3', image: sampleImage },
  { name: 'Item 4', description: 'Description 4', image: sampleImage },
  { name: 'Item 5', description: 'Description 5', image: sampleImage },
  { name: 'Item 6', description: 'Description 6', image: sampleImage },
  { name: 'Item 7', description: 'Description 7', image: sampleImage },
  { name: 'Item 8', description: 'Description 8', image: sampleImage },
  { name: 'Item 9', description: 'Description 9', image: sampleImage },
  { name: 'Item 10', description: 'Description 10', image: sampleImage },
  { name: 'Item 11', description: 'Description 11', image: sampleImage },
  { name: 'Item 12', description: 'Description 12', image: sampleImage },
  { name: 'Item 13', description: 'Description 13', image: sampleImage },
  { name: 'Item 14', description: 'Description 14', image: sampleImage },
  { name: 'Item 15', description: 'Description 15', image: sampleImage },
  { name: 'Item 16', description: 'Description 16', image: sampleImage },
  { name: 'Item 17', description: 'Description 17', image: sampleImage },
  { name: 'Item 18', description: 'Description 18', image: sampleImage },
];

export default function Eatery() {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredItems = items.filter(item =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div style={styles.container}>
      {/* <nav style={styles.navbar}>
        <div>Logo</div>
        <div>Links</div>
      </nav> */}

      <header style={styles.header}>
        <h1>Kitchen and Eateries</h1>
      </header>

      <section style={styles.searchSection}>
        <input
          type="text"
          placeholder="Search..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button style={styles.button}>Search</button>
      </section>

      <section style={styles.gridContainer}>
        {filteredItems.map((item, index) => (
          <div key={index} style={styles.card}>
            <img src={item.image} alt={item.name} style={styles.image} />
            <h3>{item.name}</h3>
            <p>{item.description}</p>
            <button style={styles.button}>Read More</button>
          </div>
        ))}
      </section>

      <h2 style={{ textAlign: 'center', margin: '20px 0' }}>Highly Recommended</h2>

      <section style={styles.gridContainer}>
        {filteredItems.map((item, index) => (
          <div key={index} style={styles.card}>
            <img src={item.image} alt={item.name} style={styles.image} />
            <h3>{item.name}</h3>
            <p>{item.description}</p>
            <button style={styles.button}>Read More</button>
          </div>
        ))}
      </section>

      <section style={styles.advertSection}>
        <img src={sampleImage} alt="Advert" style={{ width: '100%', height: 'auto' }} />
        <p>Thursday 06</p>
        <p>Title of the Advert</p>
        <p>Description of the advert goes here.</p>
      </section>

      {/* <footer style={styles.footer}>
        <p>Logo</p>
        <p>Links</p>
      </footer> */}
    </div>
  );
}
