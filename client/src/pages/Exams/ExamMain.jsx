// import React from 'react';
// import HomeNavbar from '../LandingPage/essentialLanding/HomeNavbar';
// import E1 from "../../assets/exam/E1.jfif"
// import E2 from "../../assets/exam/E2.jfif"
// import E3 from "../../assets/exam/E3.jfif"
// import E4 from "../../assets/exam/E4.jfif"
// import E5 from "../../assets/exam/E5.jfif"
// import E6 from "../../assets/exam/E6.jfif"
// const examsData = [
//   {
//     title: 'JAMB',
//     description: 'Description for JAMB...',
//     link: '/jamb-portal',
//   },
//   {
//     title: 'WAEC',
//     description: 'Description for WAEC...',
//     link: '/waec-portal',
//   },
//   {
//     title: 'NABTEB',
//     description: 'Description for NABTEB...',
//     link: '/nabteb-portal',
//   },
//   {
//     title: 'IELTS',
//     description: 'Description for IELTS...',
//     link: '/ielts-portal',
//   },
//   {
//     title: 'GRE',
//     description: 'Description for GRE...',
//     link: '/gre-portal',
//   },
//   {
//     title: 'MASTERS',
//     description: 'Description for MASTERS...',
//     link: '/masters-portal',
//   },
//   {
//     title: 'PHD',
//     description: 'Description for PHD...',
//     link: '/phd-portal',
//   },
// ];

// const styles = {
//   container: {
//     padding: '20px',
//     fontFamily: 'Arial, sans-serif',
//     color: '#333',
//     maxWidth: '1200px',
//     margin: '0 auto',
//     marginTop:"7%",
//     backgroundColor: '#f9f9f9',
//   },
//   header: {
//     textAlign: 'center',
//     marginBottom: '40px',
//   },
//   examSection: {
//     marginBottom: '30px',
//     padding: '20px',
//     border: '1px solid #ccc',
//     borderRadius: '8px',
//     backgroundColor: '#fff',
//     boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
//   },
//   title: {
//     fontSize: '1.5em',
//     marginBottom: '10px',
//     color: '#006400',
//   },
//   description: {
//     marginBottom: '10px',
//   },
//   button: {
//     display: 'inline-block',
//     padding: '10px 20px',
//     backgroundColor: '#006400',
//     color: 'white',
//     textDecoration: 'none',
//     borderRadius: '5px',
//     textAlign: 'center',
//   },
//   '@media (maxWidth: 768px)': {
//     container: {
//       padding: '10px',
//     },
//     button: {
//       width: '100%',
//       boxSizing: 'border-box',
//     },
//   },
// };

// const ExamMain = () => {
//   return (
//     <>
//     <HomeNavbar />
//     <img src={E1} alt="" />
//     <img src={E2} alt="" />
//     <img src={E3} alt="" />
//     <img src={E4} alt="" />
//     <img src={E5} alt="" />
//     <img src={E6} alt="" />
//     <div style={styles.container}>
//       <div style={styles.header}>
//         <h1>All you need to know about any Examination held in and outside of Nigeria for Nigerians and Africans</h1>
//       </div>
//       {examsData.map((exam, index) => (
//         <div key={index} style={styles.examSection}>
//           <h2 style={styles.title}>{exam.title}</h2>
//           <p style={styles.description}>{exam.description}</p>
//           <a href={exam.link} style={styles.button}>Go to {exam.title} portal</a>
//         </div>
//       ))}
//     </div>
//     </>
    
//   );
// };

// export default ExamMain;


import React from 'react';
import HomeNavbar from '../LandingPage/essentialLanding/HomeNavbar';
import E1 from "../../assets/exam/E1.jfif";
import E2 from "../../assets/exam/E2.jfif";
import E3 from "../../assets/exam/E3.jfif";
import E4 from "../../assets/exam/E4.jfif";
import E5 from "../../assets/exam/E5.jfif";
import E6 from "../../assets/exam/E6.jfif";

const examsData = [
  {
    title: 'JAMB',
    description: 'Description for JAMB...All you need to know about any Examination held in and outside of Nigeria for Nigerians and Africans.All you need to know about any Examination held in and outside of Nigeria for Nigerians and Africans.All you need to know about any Examination held in and outside of Nigeria for Nigerians and Africans.All you need to know about any Examination held in and outside of Nigeria for Nigerians and Africans.All you need to know about any Examination held in and outside of Nigeria for Nigerians and Africans',
    link: '/jamb-portal',
  },
  {
    title: 'WAEC',
    description: 'Description for WAEC...All you need to know about any Examination held in and outside of Nigeria for Nigerians and Africans.All you need to know about any Examination held in and outside of Nigeria for Nigerians and Africans.All you need to know about any Examination held in and outside of Nigeria for Nigerians and Africans.All you need to know about any Examination held in and outside of Nigeria for Nigerians and Africans.All you need to know about any Examination held in and outside of Nigeria for Nigerians and Africans',
    link: '/waec-portal',
  },
  {
    title: 'NABTEB',
    description: 'Description for NABTEB...All you need to know about any Examination held in and outside of Nigeria for Nigerians and Africans.All you need to know about any Examination held in and outside of Nigeria for Nigerians and Africans.All you need to know about any Examination held in and outside of Nigeria for Nigerians and Africans.All you need to know about any Examination held in and outside of Nigeria for Nigerians and Africans',
    link: '/nabteb-portal',
  },
  {
    title: 'IELTS',
    description: 'Description for IELTS...All you need to know about any Examination held in and outside of Nigeria for Nigerians and Africans.All you need to know about any Examination held in and outside of Nigeria for Nigerians and Africans.All you need to know about any Examination held in and outside of Nigeria for Nigerians and Africans.All you need to know about any Examination held in and outside of Nigeria for Nigerians and Africans.All you need to know about any Examination held in and outside of Nigeria for Nigerians and Africans.All you need to know about any Examination held in and outside of Nigeria for Nigerians and Africans',
    link: '/ielts-portal',
  },
  {
    title: 'GRE',
    description: 'Description for GRE...All you need to know about any Examination held in and outside of Nigeria for Nigerians and Africans.All you need to know about any Examination held in and outside of Nigeria for Nigerians and Africans.All you need to know about any Examination held in and outside of Nigeria for Nigerians and Africans.All you need to know about any Examination held in and outside of Nigeria for Nigerians and Africans.All you need to know about any Examination held in and outside of Nigeria for Nigerians and Africans.All you need to know about any Examination held in and outside of Nigeria for Nigerians and Africans.All you need to know about any Examination held in and outside of Nigeria for Nigerians and Africans',
    link: '/gre-portal',
  },
  {
    title: 'MASTERS',
    description: 'Description for MASTERS...All you need to know about any Examination held in and outside of Nigeria for Nigerians and Africans.All you need to know about any Examination held in and outside of Nigeria for Nigerians and Africans.All you need to know about any Examination held in and outside of Nigeria for Nigerians and Africans.All you need to know about any Examination held in and outside of Nigeria for Nigerians and Africans.All you need to know about any Examination held in and outside of Nigeria for Nigerians and Africans',
    link: '/masters-portal',
  },
  {
    title: 'PHD',
    description: 'Description for PHD....All you need to know about any Examination held in and outside of Nigeria for Nigerians and Africans.All you need to know about any Examination held in and outside of Nigeria for Nigerians and Africans.All you need to know about any Examination held in and outside of Nigeria for Nigerians and Africans.All you need to know about any Examination held in and outside of Nigeria for Nigerians and Africans.All you need to know about any Examination held in and outside of Nigeria for Nigerians and Africans.All you need to know about any Examination held in and outside of Nigeria for Nigerians and Africans',
    link: '/phd-portal',
  },
];

const styles = {
  container: {
    padding: '20px',
    fontFamily: 'Arial, sans-serif',
    color: '#333',
    maxWidth: '1200px',
    margin: '0 auto',
    marginTop: '7%',
    backgroundColor: '#f9f9f9',
  },
  header: {
    textAlign: 'center',
    marginBottom: '40px',
  },
  examSection: {
    marginBottom: '30px',
    padding: '20px',
    border: '1px solid #ccc',
    borderRadius: '8px',
    backgroundColor: '#fff',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
  },
  title: {
    fontSize: '1.5em',
    marginBottom: '10px',
    color: '#006400',
  },
  description: {
    marginBottom: '10px',
  },
  button: {
    display: 'inline-block',
    padding: '10px 20px',
    backgroundColor: '#006400',
    color: 'white',
    textDecoration: 'none',
    borderRadius: '5px',
    textAlign: 'center',
  },
  imagesContainer: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '10px',
    justifyContent: 'center',
    marginBottom: '20px',
  },
  image: {
    flex: '1 1 calc(16.66% - 10px)', // 6 images horizontally
    maxWidth: 'calc(16.66% - 10px)',
    height: 'auto',
    borderRadius: '8px',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
  },
  '@media (max-width: 768px)': {
    container: {
      padding: '10px',
    },
    image: {
      flex: '1 1 calc(33% - 10px)', // 3 images horizontally
      maxWidth: 'calc(33% - 10px)',
    },
    button: {
      width: '100%',
      boxSizing: 'border-box',
    },
  },
  '@media (max-width: 480px)': {
    image: {
      flex: '1 1 100%', // 1 image horizontally
      maxWidth: '100%',
    },
  },
};

const ExamMain = () => {
  return (
    <>
      <HomeNavbar />
      <div style={styles.container}>
        <div style={styles.header}>
          <h1>All you need to know about any Examination held in and outside of Nigeria for Nigerians and Africans</h1>
        </div>
        <div style={styles.imagesContainer}>
          <img src={E1} alt="Exam 1" style={styles.image} />
          <img src={E2} alt="Exam 2" style={styles.image} />
          <img src={E3} alt="Exam 3" style={styles.image} />
          <img src={E4} alt="Exam 4" style={styles.image} />
          <img src={E5} alt="Exam 5" style={styles.image} />
          <img src={E6} alt="Exam 6" style={styles.image} />
        </div>
        {examsData.map((exam, index) => (
          <div key={index} style={styles.examSection}>
            <h2 style={styles.title}>{exam.title}</h2>
            <p style={styles.description}>{exam.description}</p>
            <a href={exam.link} style={styles.button}>Go to {exam.title} portal</a>
          </div>
        ))}
      </div>
    </>
  );
};

export default ExamMain;
