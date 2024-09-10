// import React from 'react';
// import im from '../../assets/website/tutorial3.jpg'
// import im2 from '../../assets/website/tutorial5.jpg'
// import im3 from '../../assets/exam/E1.jfif'
// import im4 from '../../assets/exam/E2.jfif'
// import im5 from '../../assets/exam/E3.jfif'
// import im6 from '../../assets/exam/E4.jfif'
// import im7 from '../../assets/exam/E5.jfif'
// const Land6 = () => {
//   const containerStyle = {
//     fontFamily: 'Arial, sans-serif',
//     width: '100%',
//     maxWidth: '1200px',
//     margin: '0 auto',
//     padding: '20px',
//   };

//   const sectionStyle = {
//     marginBottom: '50px',
//     textAlign: 'center',
//   };

//   const headerStyle = {
//     fontSize: '2.5rem',
//     fontWeight: 'bold',
//     marginBottom: '10px',
//   };

//   const subheaderStyle = {
//     fontSize: '1rem',
//     marginBottom: '30px',
//     color: '#555',
//   };

//   const buttonContainerStyle = {
//     display: 'flex',
//     justifyContent: 'center',
//     gap: '20px',
//   };

//   const buttonStyle = (backgroundColor) => ({
//     padding: '10px 20px',
//     fontSize: '1rem',
//     color: '#fff',
//     backgroundColor,
//     border: 'none',
//     borderRadius: '5px',
//     cursor: 'pointer',
//   });

//   const imageStyle = {
//     width: '100%',
//     height: '40%',
//     // backgroundColor: 'rgba(0, 0, 0, 0.5)'
//   };

//   const overlayTextStyle = {
//     position: 'absolute',
//     top: '50%',
//     left: '50%',
//     marginLeft: '199px',
//     transform: 'translate(-50%, -50%)',
//     color: 'black',
//     fontSize: '4rem',
//     textAlign: 'right',
//     padding: '20px',
//     paddingTop:'5%',
  
//     // backgroundColor: 'rgba(0, 0, 0, 0.5)',
//     borderRadius: '10px',
//   };

//   const searchContainerStyle = {
//     position: 'relative',
//     marginTop: '20px',
//   };

//   const searchBoxStyle = {
//     padding: '10px',
//     fontSize: '1rem',
//     borderRadius: '5px',
//     border: '1px solid #ccc',
//     width: '70%',
//     maxWidth: '400px',
//     marginBottom: '20px',
//   };

//   const searchButtonStyle = {
//     padding: '10px 20px',
//     fontSize: '1rem',
//     color: '#fff',
//     backgroundColor: '#00a000',
//     border: 'none',
//     borderRadius: '5px',
//     cursor: 'pointer',
//   };

//   const sectionContainerStyle = {
//     display: 'flex',
//     flexDirection: 'column',
//     alignItems: 'center',
//     marginBottom: '50px',
//   };
//   const imagesContainerStyle = {
//     position: 'absolute',
//     width: "100%",
//     top: '-5px', // Adjust as needed
//     left: '50%',
//     marginBottom: '250px',
//     transform: 'translateX(-50%)',
//     display: 'flex',
//     gap: '10px',
//   };

//   const imageStyless = {
//     width: '250%', // Adjust width
//     height: '60px', // Adjust height
//     borderRadius: '50%',
//     border: '2px solid #fff',
//     boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.2)',
//   };

//   return (
//     <div style={containerStyle}>
//       {/* Section 1 */}
//       <div style={sectionStyle}>
//         <div style={headerStyle}>Disclosure and Barring Service</div>
//         <div style={subheaderStyle}>
//           Request standard and enhanced personal record checks for eligible positions for jobs in Nigeria.
//         </div>
//         <div style={buttonContainerStyle}>
//           <button style={buttonStyle('#2F80ED')}>Background Check</button>
//           <button style={buttonStyle('#FF5B5B')}>Professional Check</button>
//         </div>
//       </div>

//       {/* Section 2 */}
//       <div style={{ ...sectionContainerStyle, position: 'relative' }}>
//         <img
//           src={im}
//           alt="University Image"
//           style={imageStyle}
//         />
//         <div style={overlayTextStyle}>
//           Apply to courses and programmes everywhere, anywhere
//           <div style={searchContainerStyle}>
//             <input
//               type="text"
//               placeholder="search school"
//               style={searchBoxStyle}
//             />
//             <input
//               type="text"
//               placeholder="search by course"
//               style={searchBoxStyle}
//             />
//             <button style={searchButtonStyle}>search</button>
//           </div>
//         </div>
//       </div>

//       {/* Section 3 */}
//       <div style={{ ...sectionContainerStyle, position: 'relative' }}>
//         <img
//           src={im2}
//           alt="Exam Image"
//           style={imageStyle}
//         />
//         <div style={overlayTextStyle}>
//         <div style={imagesContainerStyle}>
//           <img src={im3} alt="icon1" style={imageStyless} />
//           <img src={im4} alt="icon2" style={imageStyless} />
//           <img src={im5} alt="icon3" style={imageStyless} />
//           <img src={im6} alt="icon4" style={imageStyless} />
//           <img src={im7} alt="icon5" style={imageStyless} />
//         </div>
//           A single click to take any  examination home and  abroad
//           <div style={subheaderStyle}>
//             Lorem ipsum dolor sit amet consectetur. Eti rhoncus nunc dictum massa.
//           </div>
//           <button style={searchButtonStyle}>learn more</button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Land6;




import React from 'react';
import im from '../../assets/website/accredit.png';
import im2 from '../../assets/website/pictureBack.png';
import im3 from '../../assets/website/unnamed 1.png';
import im4 from '../../assets/website/unnamed 2.png';
import im5 from '../../assets/website/unnamed 3.png';
import im6 from '../../assets/website/unnamed 4.png';
import im7 from '../../assets/website/unnamed 5.png';
import im8 from '../../assets/website/image 34.png';
import BestSchools from '../BestSchools';
const Land6 = () => {
  const containerStyle = {
    fontFamily: 'Arial, sans-serif',
    width: '100%',
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '20px',
  };

  const sectionStyle = {
    marginBottom: '50px',
    textAlign: 'center',
  };

  const headerStyle = {
    fontSize: '2.5rem',
    fontWeight: 'bold',
    marginBottom: '10px',
    // Adjusting font size for mobile devices
    '@media (max-width: 600px)': {
      fontSize: '1.8rem',
    },
  };

  const subheaderStyle = {
    fontSize: '1rem',
    marginBottom: '30px',
    color: '#fff',
    // Adjusting font size and margin for mobile devices
    '@media (max-width: 600px)': {
      fontSize: '0.9rem',
      marginBottom: '20px',
    },
  };

  const buttonContainerStyle = {
    display: 'flex',
    justifyContent: 'center',
    gap: '20px',
    flexWrap: 'wrap', // Ensure buttons wrap on smaller screens
  };

  const buttonStyle = (backgroundColor) => ({
    padding: '10px 20px',
    fontSize: '1rem',
    color: '#fff',
    backgroundColor,
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    // Adjusting padding and font size for mobile devices
    '@media (max-width: 600px)': {
      padding: '8px 15px',
      fontSize: '0.9rem',
    },
  });

  const imageStyle = {
    width: '100%',
    height: '40%',
  
    
  };

  const overlay = {
    position:'absolute',
    top: '0',
    left:'0',
    width:"100%",
    height:"100%",
    backgroundColor:"black",
    opacity:".7",
    zIndex:'2'
  }

  const overlayTextStyle = {
    position: 'absolute',
    top: '30%',
    left: '50%',
    marginLeft: '109px',
    overlay:'rgb(0, 0,0, 0.5)',
    transform: 'translate(-50%, -50%)',
    color: '#fff',
    fontSize: '4rem',
    textAlign: 'right',
    padding: '10px',
    paddingTop: '19%',
    borderRadius: '10px',
    objectFit:'cover',
    zIndex:'3',
    // Adjusting text size and alignment for mobile devices
    '@media (max-width: 600px)': {
      fontSize: '2rem',
      textAlign: 'center',
      padding: '10px',
      paddingTop: '10%',
      marginLeft: '0px',
      left: '50%',
      transform: 'translateX(-50%)',
    },
  };

  const searchContainerStyle = {
    position: 'relative',
    marginTop: '20px',
  };

  const searchBoxStyle = {
    padding: '10px',
    fontSize: '1rem',
    borderRadius: '5px',
    border: '1px solid #ccc',
    width: '70%',
    maxWidth: '400px',
    marginBottom: '20px',
    // Adjusting width for mobile devices
    '@media (max-width: 600px)': {
      width: '90%',
    },
  };

  const searchButtonStyle = {
    padding: '10px 20px',
    fontSize: '1rem',
    color: '#fff',
    backgroundColor: '#00a000',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    // Adjusting padding and font size for mobile devices
    '@media (max-width: 600px)': {
      padding: '8px 15px',
      fontSize: '0.9rem',
    },
  };

  const sectionContainerStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginBottom: '50px',
  
    
  };

  const imagesContainerStyle = {
    position: 'absolute',
    width: '30%',
    marginLeft:'14%',
    paddingTop:"3%",
    // paddingLeft:'11%',
    objectFit:'cover',
    // top: '5px',
    left: '50%',
    marginBottom: '250px',
    paddingBottom: '50%',
    transform: 'translateX(-50%)',
    display: 'flex',
    gap: '10px',
    zIndex:'3',
    // Adjusting the positioning and layout for mobile devices
    '@media (max-width: 600px)': {
      top: '5px',
      flexDirection: 'column',
      alignItems: 'center',
      gap: '5px',
      marginBottom: '150px',
  
    },
  };

  const imageStyless = {
    width: '250%',
    height: '60px',
    marginBottom: '80%',
    borderRadius: '50%',
    border: '2px solid #fff',
    zIndex:'3',
    boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.2)',
    // Adjusting width and height for mobile devices
    '@media (max-width: 600px)': {
      width: '80px',
      height: '40px',
    },
  };






  





  const sectionContainerStyles = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginBottom: '50px',
 
  };

  const imageStyles = {
    width: '100%',
    height: '400px', 
    position:'absolute'
  };
  const trapeziumStyles = {
    position: 'absolute',
    top: '0', // Align with the top of the container
    right: '0',
    width: '80%',
    height: '400px', // Match the image height
    padding: '20px',
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    color: '#fff',
    clipPath: 'polygon(25% 0%, 100% 0%, 75% 100%, 0% 100%)',
    zIndex: '1',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    boxSizing: 'border-box',
  };

  const textContainerStyles = {
    textAlign: 'center',
    marginBottom: '20px',
    fontSize:"250%"
  };

  const searchContainerStyles = {
    display: 'flex',
    flexDirection: 'row', 
    alignItems: 'center',
    gap: '10px', 
  };
  

  const searchBoxStyles = {
    padding: '10px',
    fontSize: '1rem',
    borderRadius: '5px',
    border: '1px solid #ccc',
    width: '100%',
    marginBottom: '3%',
    maxWidth: '300px',
    backgroundColor: 'transparent'
  };

  const searchButtonStyles = {
    padding: '10px 20px',
    fontSize: '1rem',
    color: '#fff',
    backgroundColor: '#00a000',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  };



  return (
    <div style={containerStyle}>
      {/* Section 1 */}
      <div style={sectionStyle}>
        <div style={headerStyle}>Disclosure and Barring Service</div>
        <div style={subheaderStyle}>
          Request standard and enhanced personal record checks for eligible positions for jobs in Nigeria.
        </div>
        <div style={buttonContainerStyle}>
          <button style={buttonStyle('#2F80ED')}>Background Check</button>
          <button style={buttonStyle('#FF5B5B')}>Professional Check</button>
        </div>
      </div>





      <div style={{ ...sectionContainerStyle, position: 'relative' }}>
        <img
          src={im}
          alt="University Image"
          style={imageStyle}
        />
        <div style={trapeziumStyles}>
          <div style={textContainerStyles}>
            Apply to courses <br /> and programmes everywhere, <br /> anywhere
          </div>
          <div style={searchContainerStyles}>
            <input
              type="text"
              placeholder="search school"
              style={searchBoxStyles}
            />
            <input
              type="text"
              placeholder="search by course"
              style={searchBoxStyles}
            />
         
          </div>
          <button style={searchButtonStyle}>search</button>
        </div>
      </div>

    
      {/* Section 3 */}
      <div style={{ ...sectionContainerStyle, position: 'relative' }}>
        <img
          src={im2}
          alt="Exam Image"
          style={imageStyle}
        />
           <div style={imagesContainerStyle}>
           <img src={im8} alt="icon5" style={imageStyless} />
            <img src={im3} alt="icon1" style={imageStyless} />
            <img src={im4} alt="icon2" style={imageStyless} />
            <img src={im5} alt="icon3" style={imageStyless} />
            <img src={im6} alt="icon4" style={imageStyless} />
            <img src={im7} alt="icon5" style={imageStyless} />
          </div>

        <div style={overlay}></div>
        <div style={overlayTextStyle}>
       
          A single click to take any examination home and abroad
          <div style={subheaderStyle}>
            Lorem ipsum dolor sit amet consectetur. Eti rhoncus nunc dictum massa.
          </div>
          <button style={searchButtonStyle}>learn more</button>
        </div>
      </div>
      <BestSchools />
    </div>
  );
};

export default Land6;
