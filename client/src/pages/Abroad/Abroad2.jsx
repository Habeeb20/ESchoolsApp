import React from "react";

const Abroad2 = () => {
  return (
    <div style={{ fontFamily: "Arial, sans-serif", color: "#333" }}>
      {/* Accreditations Section */}
      <div style={{ padding: "40px 20px", backgroundColor: "#f9f9f9" }}>
        <h2 style={{ fontSize: "1.5em", marginBottom: "20px" }}>Accreditations</h2>
        <p style={{ marginBottom: "20px" }}>
          Hult is recognized by business education’s three most prestigious international accrediting bodies: 
          The Association to Advance Collegiate Schools of Business (AACSB International), the Association of MBAs (AMBA), and 
          EQUIS (The European Quality Improvement System). We are the first business school in the US to achieve this triple 
          accreditation, which is held by just one percent of business schools worldwide.
        </p>
        <p style={{ marginBottom: "20px" }}>
          We are proud to be accredited by the following organizations:
        </p>
        <div style={{ marginBottom: "20px" }}>
          <table style={{ width: "100%", borderCollapse: "collapse" }}>
            <tbody>
              <tr>
                <td style={{ padding: "10px", borderBottom: "1px solid #ccc" }}>- AACSB</td>
                <td style={{ padding: "10px", borderBottom: "1px solid #ccc" }}>- Massachusetts Department of Higher Education</td>
              </tr>
              <tr>
                <td style={{ padding: "10px", borderBottom: "1px solid #ccc" }}>- AMBA</td>
                <td style={{ padding: "10px", borderBottom: "1px solid #ccc" }}>- DUBAI Knowledge</td>
              </tr>
              <tr>
                <td style={{ padding: "10px", borderBottom: "1px solid #ccc" }}>- EQUIS</td>
                <td style={{ padding: "10px", borderBottom: "1px solid #ccc" }}>- BPPE</td>
              </tr>
              <tr>
                <td style={{ padding: "10px", borderBottom: "1px solid #ccc" }}>- NECHE</td>
                <td style={{ padding: "10px", borderBottom: "1px solid #ccc" }}>-</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Awards Section */}
      <div style={{ padding: "40px 20px", backgroundColor: "#f4f4e8" }}>
        <h2 style={{ fontSize: "1.5em", marginBottom: "20px" }}>Awards</h2>
        <p style={{ marginBottom: "20px" }}>
          Hult is the proud recipient of the bronze award for Best Lifelong Learning Initiative 2021 from the Association of MBAs (AMBA) 
          and the Business Graduates Association (BGA). The prize builds on the Business School Careers Strategy award from AMBA & BGA in 
          2020, as well as the 2014 AMBA Innovation award.
        </p>
        <p style={{ marginBottom: "20px" }}>
          AMBA is the international independent authority on graduate business education. Their accreditation service is the global 
          standard for all MBA, DBA, and MBM programs. AMBA currently accredits over 240 business schools in more than 70 countries.
        </p>
      </div>

      {/* Do Global Section */}
      <div style={{ padding: "40px 20px", backgroundColor: "#f9f9f9" }}>
        <h2 style={{ fontSize: "1.5em", marginBottom: "20px" }}>Do global</h2>
        <p style={{ marginBottom: "40px" }}>
          Expand your mindset as well as your ability to work with anyone, from anywhere. Work with over 150 nationalities across our 
          five campuses worldwide, gain international experience, and differentiate yourself as a global professional.
        </p>
        <div style={{ display: "flex", justifyContent: "space-between", gap: "20px", flexWrap: "wrap" }}>
          <div
            style={{
              flex: "1",
              minWidth: "200px",
              padding: "20px",
              backgroundColor: "#fff",
              borderRadius: "8px",
              boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)",
              textAlign: "center",
            }}
          >
            <h3 style={{ fontSize: "1.2em", marginBottom: "10px" }}>Hult Boston</h3>
            <p style={{ marginBottom: "20px" }}>Study in Boston</p>
            <a
              href="#"
              style={{ color: "#007bff", textDecoration: "none" }}
            >
              Learn more →
            </a>
          </div>
          <div
            style={{
              flex: "1",
              minWidth: "200px",
              padding: "20px",
              backgroundColor: "#fff",
              borderRadius: "8px",
              boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)",
              textAlign: "center",
            }}
          >
            <h3 style={{ fontSize: "1.2em", marginBottom: "10px" }}>Hult London</h3>
            <p style={{ marginBottom: "20px" }}>Study in London</p>
            <a
              href="#"
              style={{ color: "#007bff", textDecoration: "none" }}
            >
              Learn more →
            </a>
          </div>
          <div
            style={{
              flex: "1",
              minWidth: "200px",
              padding: "20px",
              backgroundColor: "#fff",
              borderRadius: "8px",
              boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)",
              textAlign: "center",
            }}
          >
            <h3 style={{ fontSize: "1.2em", marginBottom: "10px" }}>
              Global Campus Rotation
            </h3>
            <p style={{ marginBottom: "20px" }}>Learn about Rotation</p>
            <a
              href="#"
              style={{ color: "#007bff", textDecoration: "none" }}
            >
              Learn more →
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Abroad2;
