import React from "react";
import Abroad2 from "./Abroad2";
import Abroad3 from "./Abroad3";
import Footer from "../../components/BookEssential/Footer";
import HomeNavbar from "../LandingPage/essentialLanding/HomeNavbar";

const Abroad = () => {
  return (
    <>
    <HomeNavbar />
     <div style={{ fontFamily: "Arial, sans-serif", color: "#333" }}>
      {/* Top Section */}
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "20px",
          backgroundColor: "#f9f9f9",
          marginBottom: "40px",
        }}
      >
        {/* Left Section */}
        <div style={{ width: "50%", paddingRight: "20px" }}>
          <h1 style={{ fontSize: "2em", marginBottom: "20px" }}>
            Don’t Just Study Business, Do It
          </h1>
          <p style={{ marginBottom: "20px" }}>
            Hult’s transformative Bachelor of Business Administration (BBA) is
            designed around the universal truth that to master a skill—any
            skill, from riding a bike to leading a team—it must be practiced.
          </p>
          <p style={{ marginBottom: "10px" }}>
            Download our brochure to find out more:
          </p>
          <ul style={{ marginBottom: "20px" }}>
            <li>Career inspiration: Success stories from current students & alumni</li>
            <li>Challenge yourself: When you see an interactive activity, give it a go</li>
            <li>
              Think international: Read about our campuses around the world
            </li>
            <li>
              Important info: Including costs, scholarships, and entry
              requirements
            </li>
          </ul>
        </div>

        {/* Right Section */}
        <div
          style={{
            width: "45%",
            padding: "20px",
            backgroundColor: "#333",
            color: "#fff",
            borderRadius: "8px",
          }}
        >
          <h2 style={{ fontSize: "1.5em", marginBottom: "20px" }}>
            Learn more about our undergraduate program
          </h2>
          <form>
            <div style={{ marginBottom: "15px" }}>
              <input
                type="text"
                placeholder="First Name"
                style={{
                  width: "100%",
                  padding: "10px",
                  borderRadius: "4px",
                  border: "1px solid #ccc",
                }}
              />
            </div>
            <div style={{ marginBottom: "15px" }}>
              <input
                type="text"
                placeholder="Last Name"
                style={{
                  width: "100%",
                  padding: "10px",
                  borderRadius: "4px",
                  border: "1px solid #ccc",
                }}
              />
            </div>
            <div style={{ marginBottom: "15px" }}>
              <input
                type="email"
                placeholder="Email"
                style={{
                  width: "100%",
                  padding: "10px",
                  borderRadius: "4px",
                  border: "1px solid #ccc",
                }}
              />
            </div>
            <div style={{ marginBottom: "15px" }}>
              <input
                type="tel"
                placeholder="Phone Number"
                style={{
                  width: "100%",
                  padding: "10px",
                  borderRadius: "4px",
                  border: "1px solid #ccc",
                }}
              />
            </div>
            <div style={{ marginBottom: "15px" }}>
              <input
                type="text"
                placeholder="High School"
                style={{
                  width: "100%",
                  padding: "10px",
                  borderRadius: "4px",
                  border: "1px solid #ccc",
                }}
              />
            </div>
            <div style={{ marginBottom: "15px" }}>
              <select
                style={{
                  width: "100%",
                  padding: "10px",
                  borderRadius: "4px",
                  border: "1px solid #ccc",
                }}
              >
                <option>When would you like to start studying?</option>
                <option>2024</option>
                <option>2025</option>
                <option>2026</option>
              </select>
            </div>
            <div style={{ marginBottom: "15px" }}>
              <input type="checkbox" id="agree" name="agree" />
              <label htmlFor="agree" style={{ marginLeft: "10px" }}>
                I, and if applicable my legal guardian, agree to my personal
                data being processed in accordance with Hult’s Privacy Policy.
              </label>
            </div>
            <button
              type="submit"
              style={{
                width: "100%",
                padding: "15px",
                backgroundColor: "#28a745",
                color: "#fff",
                borderRadius: "4px",
                border: "none",
                cursor: "pointer",
              }}
            >
              Download Brochure
            </button>
          </form>
        </div>
      </div>

      {/* Mid Section */}
      <div
        style={{
          padding: "20px",
          textAlign: "center",
          backgroundColor: "#f9f9f9",
          marginBottom: "40px",
        }}
      >
        <p>
          Ready to apply? Start your application now and an enrollment advisor
          will be in touch to support you.
        </p>
        <button
          style={{
            padding: "10px 20px",
            backgroundColor: "#007bff",
            color: "#fff",
            borderRadius: "4px",
            border: "none",
            cursor: "pointer",
          }}
        >
          Apply Now
        </button>
      </div>

      {/* Bottom Section */}
      <div style={{ padding: "20px" }}>
        <h2 style={{ fontSize: "1.5em", marginBottom: "20px" }}>
          Rankings, Accreditations, Awards & Partnerships
        </h2>
        <p style={{ marginBottom: "20px" }}>
          Hult is proud to be recognized and ranked among the best business
          schools in the world by some of the most prestigious independent
          ranking and accreditation bodies. We've also got some exciting new
          partnerships to share.
        </p>

        <h3 style={{ fontSize: "1.25em", marginBottom: "20px" }}>
          Undergraduate business school rankings
        </h3>
        <p>
          Hult's undergraduate program is proven to change lives. Don't just
          take our word for it—see our rankings below.
        </p>
      </div>
    </div>
    <Abroad2 />
    <Abroad3 />
    <Footer />

    </>
   
  );
};

export default Abroad;
