import { fontSize, fontWeight, textAlign } from '@mui/system';
import React from 'react';
import FadeIn from '../../FadeIn';
const h2 ={
    fontSize: "300%",
    fontWeight: "270%"
}
const transpezium = {
    textAlign: "left"
}

const h5 = {
    fontSize: "120%"
}
const styles = {
  container: {
    padding: '20px',
    fontFamily: 'Arial, sans-serif',
  },
  section: {
    marginBottom: '20px',
    padding: '20px',
    borderRadius: '8px',
    textAlign : "center",
    minHeight: '300px',  // Added minHeight for increased background color height
  },
  whiteBackground: {
    backgroundColor: 'white',
    color: 'black',
  },
  greenButton: {
    backgroundColor: 'green',
    color: 'white',
    border: 'none',
    padding: '10px 20px',
    cursor: 'pointer',
  },
  image: {
    width: '100%',
    height: 'auto',
  },
  ashBlackBackground: {
    backgroundColor: '#555',
    color: 'white',
  },
  transparentButton: {
    backgroundColor: 'transparent',
    border: '1px solid white',
    color: 'white',
    padding: '10px 20px',
    margin: '5px',
    cursor: 'pointer',
  },
  yellowBackground: {
    backgroundColor: 'yellow',
    color: 'black',
  },
  redBoldText: {
    color: 'red',
    fontWeight: 'bold',
  },
  trapezium: {
    backgroundColor: 'black',
    color: 'white',
    clipPath: 'polygon(0 0, 60% 0, 95% 100%, 0 100%)',
    padding: '20px',
    textAlign: 'left',
    minHeight: '300px',  // Added minHeight for trapezium section
  },
  rightAlignedText: {
    textAlign: 'right',
  },
  
  responsiveFlex: {
    display: 'flex',
    flexDirection: 'column',
  },
  '@media (min-width: 600px)': {
    responsiveFlex: {
      flexDirection: 'row',
    },
  },
};

const Designs = () => {
  return (
    <div style={styles.container}>
      <section style={{ ...styles.section, ...styles.whiteBackground }}>
        <h2>Make the Right Choices</h2>
        <ul>
          <li>e-Jobs</li>
          <li>Comparison</li>
          <li>Scholarships</li>
          <li>Admission</li>
        </ul>
      </section>
      
      <section style={{ ...styles.section, ...styles.whiteBackground, ...styles.responsiveFlex }}>
     
        <div>
          <h2>Do More with Student I.D</h2>
          <FadeIn delay={0.4} direction="up">
          <p>Are you a student? Do you want to enter vehicle at a very good discount? E-ride got you covered.</p>
        
          </FadeIn>
          <FadeIn delay={0.4} direction="down">
          <button style={styles.greenButton}>Join our next transporting</button>
          </FadeIn>
        
        </div>
        <img src="path/to/image.jpg" alt="" style={styles.image} />
       
      </section>
      
      <section style={{ ...styles.section, ...styles.ashBlackBackground }}>
     
        <h2>Enjoy being a student than any other student with our eStudent ID card benefits</h2>
        <FadeIn delay={0.4} direction="right">
        <button style={styles.transparentButton}>eJobs</button>
        <button style={styles.transparentButton}>Buy</button>
        <button style={styles.transparentButton}>Loans</button>
        <button style={styles.transparentButton}>Ride</button>
        </FadeIn>
      </section>
      
      <section style={{ ...styles.section, ...styles.yellowBackground }}>

        <h1 style={h2} >Did You Know?</h1>
        <FadeIn delay={0.4} direction="left">
        <h5 style={h5}>that you can easily teach than before and double the <br /> cash and rest twice more ?</h5>
        </FadeIn>
      </section>
      
      <section style={{ ...styles.section, ...styles.ashBlackBackground }}>
        <h2 style={styles.redBoldText}>E-Direct Blog</h2>
      </section>
      
      <section style={{ ...styles.section, ...styles.trapezium }}>
      <FadeIn delay={0.4} direction="down">
        <h2 style={transpezium}>Apply for Courses and Programmes <br /> Everywhere, Anywhere</h2>
    </FadeIn>
      </section>
    </div>
  );
};

export default Designs;
