import React from "react";
import a1 from '../../assets/university/abroad.jpg'
import a2 from '../../assets/university/abroad2.jpg'
const Abroad3 = () => {
  return (
    <div style={{ fontFamily: "Arial, sans-serif", color: "#333", lineHeight: "1.6" }}>
      {/* Do Global Section */}
      <div style={{ padding: "40px 20px", backgroundColor: "#f8f6ec" }}>
        <h2 style={{ fontSize: "1.8em", marginBottom: "20px", fontWeight: "bold" }}>Do global</h2>
        <p style={{ marginBottom: "40px", maxWidth: "800px" }}>
          Expand your mindset as well as your ability to work with anyone, from anywhere. Work with over 150 nationalities across our five campuses worldwide, gain international experience, and differentiate yourself as a global professional.
        </p>
        <div style={{ display: "flex", justifyContent: "space-between", gap: "20px", flexWrap: "wrap" }}>
          <div
            style={{
              flex: "1",
              minWidth: "250px",
              padding: "20px",
              backgroundColor: "#fff",
              borderRadius: "8px",
              boxShadow: "0px 2px 8px rgba(0, 0, 0, 0.1)",
              textAlign: "left",
            }}
          >
            <img
              src={a1} 
              alt="Hult Boston"
              style={{ width: "100%", borderRadius: "8px", marginBottom: "20px" }}
            />
            <h3 style={{ fontSize: "1.3em", marginBottom: "10px" }}>Hult Boston</h3>
            <p style={{ marginBottom: "20px", color: "#777" }}>Study in Boston</p>
            <a
              href="#"
              style={{ color: "#000", textDecoration: "none", fontWeight: "bold" }}
            >
              Learn more →
            </a>
          </div>
          <div
            style={{
              flex: "1",
              minWidth: "250px",
              padding: "20px",
              backgroundColor: "#fff",
              borderRadius: "8px",
              boxShadow: "0px 2px 8px rgba(0, 0, 0, 0.1)",
              textAlign: "left",
            }}
          >
            <img
              src={a2}
              alt="Hult London"
              style={{ width: "100%", borderRadius: "8px", marginBottom: "20px" }}
            />
            <h3 style={{ fontSize: "1.3em", marginBottom: "10px" }}>Hult London</h3>
            <p style={{ marginBottom: "20px", color: "#777" }}>Study in London</p>
            <a
              href="#"
              style={{ color: "#000", textDecoration: "none", fontWeight: "bold" }}
            >
              Learn more →
            </a>
          </div>
          <div
            style={{
              flex: "1",
              minWidth: "250px",
              padding: "20px",
              backgroundColor: "#fff",
              borderRadius: "8px",
              boxShadow: "0px 2px 8px rgba(0, 0, 0, 0.1)",
              textAlign: "left",
            }}
          >
            <img
              src="global-campus-rotation.jpg" // Replace with the actual image source
              alt="Global Campus Rotation"
              style={{ width: "100%", borderRadius: "8px", marginBottom: "20px" }}
            />
            <h3 style={{ fontSize: "1.3em", marginBottom: "10px" }}>Global Campus Rotation</h3>
            <p style={{ marginBottom: "20px", color: "#777" }}>Learn about Rotation</p>
            <a
              href="#"
              style={{ color: "#000", textDecoration: "none", fontWeight: "bold" }}
            >
              Learn more →
            </a>
          </div>
        </div>
      </div>

      {/* Subscription Section */}
      <div style={{ padding: "40px 20px", backgroundColor: "#fcf6ec", textAlign: "center" }}>
        <h2 style={{ fontSize: "1.4em", marginBottom: "20px", fontWeight: "bold" }}>
          You are 90% MORE likely to get the best deals as a Student by subscribing
        </h2>
        <p style={{ marginBottom: "20px" }}>
          Enter your email and we'll send them your way.
        </p>
        <div style={{ marginBottom: "20px", display: "flex", justifyContent: "center", gap: "10px" }}>
          <input
            type="email"
            placeholder="Enter your email"
            style={{
              padding: "10px",
              borderRadius: "4px",
              border: "1px solid #ccc",
              width: "250px",
            }}
          />
          <button
            style={{
              padding: "10px 20px",
              borderRadius: "4px",
              backgroundColor: "#2fb350",
              color: "#fff",
              border: "none",
              cursor: "pointer",
            }}
          >
            Show me Flights
          </button>
        </div>
        <p style={{ fontSize: "0.9em", color: "#777" }}>
          Your privacy is important to us, so we'll never spam you or share your info with third parties. Take a look at our privacy policy. You can unsubscribe at any time.
        </p>
      </div>
    </div>
  );
};

export default Abroad3;
