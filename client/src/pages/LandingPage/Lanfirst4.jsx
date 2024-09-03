import React from "react";
import im2 from '../../assets/website/Rectangle 392.png'
import im3 from '../../assets/website/Rectangle 393.png'
import im4 from '../../assets/website/graduate.png'
const styles = {
  container: {
    width: "100%",
    padding: "20px",
    boxSizing: "border-box",
  },
  section: {
    marginBottom: "20px",
    textAlign: "center",
  },
  banner: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#f5f5f5",
    padding: "20px",
    borderRadius: "10px",
  },
  bannerText: {
    fontSize: "24px",
    fontWeight: "bold",
    color: "#000",
    marginBottom: "10px",
  },
  bannerButton: {
    backgroundColor: "#00ff00",
    color: "#fff",
    padding: "10px 20px",
    fontSize: "16px",
    borderRadius: "5px",
    border: "none",
    cursor: "pointer",
  },
  cardContainer: {
    display: "flex",
    // flexWrap: "wrap",
    justifyContent: "space-around",
    gap: "10px",
  },
  card: {
    flex: "1 1 calc(50% - 10px)",
    maxWidth: "calc(50% - 10px)",
    borderRadius: "10px",
    overflow: "hidden",
    position: "relative",
  },
  cardImg: {
    width: "100%",
    height: "auto",
  },
  cardImg2: {
    width: "100%",
    height: "600px",
    objectFit:"cover"
  },
  cardContent: {
    position: "absolute",
    bottom: "0",
    left: "0",
    right: "0",
    padding: "10px",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    color: "#fff",
    fontSize: "18px",
    fontWeight: "bold",
    textAlign: "center",
  },
  footer: {
    padding: "20px",
    backgroundColor: "#333",
    color: "#fff",
    textAlign: "center",
    borderRadius: "10px",
    backgroundImage: `url(${im4})`, 
    backgroundSize: "auto 200%",  
    backgroundPosition: "center",
    position: "relative",
    height: '400px',
    display:"flex",
    alignItems:"center",
    justifyContent:"center",
    flexDirection:"column"  
  },
  
  overlay: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(0, 0, 0, 0.5)", 
    borderRadius: "10px",
  },
  footerContent: {
    position: "relative",
    zIndex: 2,
  },


  footerText: {
    fontSize: "40px",
    fontWeight: "bold",
  },
  footerSubtext: {
    fontSize: "14px",
    marginTop: "10px",
    marginBottom: "20px",
  },
  footerButtons: {
    display: "flex",
    justifyContent: "center",
    gap: "10px",
  },
  footerButton: {
    backgroundColor: "#666",
    color: "#fff",
    padding: "10px 20px",
    borderRadius: "5px",
    border: "none",
    cursor: "pointer",
  },
};

const Lanfirst4 = () => {
  return (
    <div style={styles.container}>

      <div style={styles.section}>
        <div style={styles.cardContainer}>
          <div style={styles.card}>
            <img 
              src ={im2} 
              alt="Discount 1"
              style={styles.cardImg}
            />
            {/* <div style={styles.cardContent}>5% OFF All Year Round</div> */}
          </div>
          <div style={styles.card}>
            <img
              src={im3} 
              alt="Discount 2"
              style={styles.cardImg2}
            />
            <div style={styles.cardContent}>
              Student Discounts on everything you want
            </div>
          </div>
        </div>
      </div>
      <div style={styles.section}>
        <div style={styles.footer}>
          <div style={styles.overlay}></div>
          <div style={styles.footerContent}>
            <div style={styles.footerText}>
              Enjoy being a student more with our e-student ID card benefits
            </div>
            <div style={styles.footerSubtext}>
              Lorem ipsum dolor sit amet consectetur. Et rhoncus nunc dictum massa.
            </div>
            <div style={styles.footerButtons}>
              <button style={styles.footerButton}>eJobs</button>
              <button style={styles.footerButton}>Buy</button>
              <button style={styles.footerButton}>Loans</button>
              <button style={styles.footerButton}>Ride</button>
            </div>
          </div>
        </div>
      </div>
      </div>
  );
};

export default Lanfirst4;
