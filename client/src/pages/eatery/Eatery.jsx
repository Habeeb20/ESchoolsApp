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
import f from '../../assets/food/fo1.jfif'
import f2 from '../../assets/food/fo2.jfif'
import f3 from '../../assets/food/fo3.jfif'
import f4 from '../../assets/food/fo4.jfif'
import f5 from '../../assets/food/fo5.jfif'
import f6 from '../../assets/food/fo6.jfif'
import f7 from '../../assets/food/fo7.jfif'
import f8 from '../../assets/food/fo8.jfif'
import f9 from '../../assets/food/fo9.jfif'
import f10 from '../../assets/food/fo10.jfif'
import f11 from '../../assets/food/fo11.jfif'
import f12 from '../../assets/food/fo12.jfif'
import f13 from '../../assets/food/fo13.jfif'
import f14 from '../../assets/food/fo14.jfif'
import f15 from '../../assets/food/fo15.jfif'
import f16 from '../../assets/food/fo16.jfif'
import f17 from '../../assets/food/fo17.jfif'
import f18 from '../../assets/food/fo18.jfif'
import f19 from '../../assets/food/fo19.jfif'
import f20 from '../../assets/food/fo20.jfif'
import f22 from '../../assets/food/f22.jfif'
import f23 from '../../assets/food/f23.jfif'
import f24 from '../../assets/food/f24.jfif'
import f25 from '../../assets/food/f25.jfif'
import f26 from '../../assets/food/f26.jfif'
import f27 from '../../assets/food/f27.jfif'
import f28 from '../../assets/food/f28.jfif'
import f29 from '../../assets/food/f29.jfif'
import f30 from '../../assets/food/f30.jfif'
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
  { name: 'Item 1', description: 'Description 1', image: f },
  { name: 'Item 2', description: 'Description 2', image: f2 },
  { name: 'Item 3', description: 'Description 3', image: f3 },
  { name: 'Item 4', description: 'Description 4', image: f7 },
  { name: 'Item 5', description: 'Description 5', image: f4 },
  { name: 'Item 6', description: 'Description 6', image: f5 },
  { name: 'Item 7', description: 'Description 7', image: f6 },
  { name: 'Item 8', description: 'Description 8', image: f9 },
  { name: 'Item 9', description: 'Description 9', image: f8 },
  { name: 'Item 10', description: 'Description 10', image: f10 },
  { name: 'Item 11', description: 'Description 11', image: f12 },
  { name: 'Item 12', description: 'Description 12', image: f13 },
  { name: 'Item 13', description: 'Description 13', image: f14 },
  { name: 'Item 14', description: 'Description 14', image: f15 },
  { name: 'Item 15', description: 'Description 15', image: f16 },
  { name: 'Item 16', description: 'Description 16', image: f17 },
  { name: 'Item 17', description: 'Description 17', image: f18 },
  { name: 'Item 18', description: 'Description 18', image: f19 },
  { name: 'Item 18', description: 'Description 18', image: f11 },
  { name: 'Item 19', description: 'Description 18', image: f22 },
  { name: 'Item 20', description: 'Description 18', image: f23 },
  { name: 'Item 25', description: 'Description 18', image: f25 },
  { name: 'Item 26', description: 'Description 18', image: f26 },
  { name: 'Item 27', description: 'Description 18', image: f27 },
  { name: 'Item 28', description: 'Description 18', image: f28 },
  { name: 'Item 29', description: 'Description 18', image: f29 },
  { name: 'Item 30', description: 'Description 18', image: f30 },
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
        <img src={f24} alt="Advert" style={{ width: '100%', height: 'auto' }} />
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
