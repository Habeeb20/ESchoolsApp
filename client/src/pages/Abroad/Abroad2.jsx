import React from "react";
import S1 from "../../assets/website/tutorial.jpg"
import S2 from "../../assets/website/tutorial3.jpg"
import S3 from "../../assets/website/tutorial4.jpg"
import S4 from "../../assets/website/tutorial7.jpg"
const Abroad2 = () => {
  return (
    <div style={{ fontFamily: "Arial, sans-serif", color: "#333", lineHeight: "1.6" }}>
      {/* Awards and Testimonials Section */}
      <div style={{ padding: "40px 20px", backgroundColor: "#f8f6ec" }}>
        <div style={{ display: "flex", justifyContent: "space-between", gap: "20px", flexWrap: "wrap", marginBottom: "40px" }}>
          <div
            style={{
              flex: "1",
              minWidth: "280px",
              padding: "20px",
              backgroundColor: "#fff",
              borderRadius: "8px",
              boxShadow: "0px 2px 8px rgba(0, 0, 0, 0.1)",
            }}
          >
            <h3 style={{ fontSize: "1.2em", marginBottom: "10px", fontWeight: "bold" }}>U.S. News & World Report</h3>
            <p style={{ fontSize: "0.9em", marginBottom: "10px", color: "#777" }}>2021</p>
            <p style={{ marginBottom: "20px" }}>
              Best Undergraduate International Programs
            </p>
            <p style={{ fontSize: "0.9em", color: "#777" }}>
              U.S. News & World Report's undergraduate business program rankings were based solely on peer assessment surveys. To appear on these surveys, undergraduate business programs must be accredited by AACSB International.
            </p>
          </div>
          <div
            style={{
              flex: "1",
              minWidth: "280px",
              padding: "20px",
              backgroundColor: "#fff",
              borderRadius: "8px",
              boxShadow: "0px 2px 8px rgba(0, 0, 0, 0.1)",
            }}
          >
            <h3 style={{ fontSize: "1.2em", marginBottom: "10px", fontWeight: "bold" }}>Poets & Quants</h3>
            <p style={{ fontSize: "0.9em", marginBottom: "10px", color: "#777" }}>2022</p>
            <p style={{ marginBottom: "20px" }}>
              Best Undergraduate Business Schools
            </p>
            <p style={{ fontSize: "0.9em", color: "#777" }}>
              This ranking features the top undergraduate business schools in the United States. Poets & Quants uses a ranking methodology that relies heavily on student feedback as well as extensive data insight to rank schools on admissions, student experience, and employment statistics.
            </p>
          </div>
        </div>
        <div style={{ display: "flex", justifyContent: "space-between", gap: "20px", flexWrap: "wrap" }}>
          <div
            style={{
              flex: "1",
              minWidth: "280px",
              padding: "20px",
              backgroundColor: "#fff",
              borderRadius: "8px",
              boxShadow: "0px 2px 8px rgba(0, 0, 0, 0.1)",
              display: "flex",
              alignItems: "center",
            }}
          >
            <img
              src={S1} // Replace with the actual image source
              alt="Student 1"
              style={{ width: "80px", height: "80px", borderRadius: "50%", marginRight: "20px" }}
            />
            <div>
              <p style={{ marginBottom: "10px" }}>
                "I fell in love with Hult as soon as I visited campus. You really get to know your professors, who help you achieve your goals."
              </p>
              <p style={{ fontSize: "0.9em", color: "#777" }}>
                Tumelo Semaue<br />
                Botswana<br />
                Class of 2021
              </p>
            </div>
          </div>
          <div
            style={{
              flex: "1",
              minWidth: "280px",
              padding: "20px",
              backgroundColor: "#fff",
              borderRadius: "8px",
              boxShadow: "0px 2px 8px rgba(0, 0, 0, 0.1)",
              display: "flex",
              alignItems: "center",
            }}
          >
            <img
              src={S2}
              alt="Student 2"
              style={{ width: "80px", height: "80px", borderRadius: "50%", marginRight: "20px" }}
            />
            <div>
              <p style={{ marginBottom: "10px" }}>
                "Studying at Hult gives me the tools I need to become a 'girl boss with a purpose' and grow my NPO side project."
              </p>
              <p style={{ fontSize: "0.9em", color: "#777" }}>
                Jessica Lozano<br />
                Germany/Spanish<br />
                Class of 2021
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Accreditation Section */}
      <div style={{ padding: "40px 20px", backgroundColor: "#fcf6ec", textAlign: "center", borderTop: "3px solid #2fb350", borderBottom: "3px solid #2fb350" }}>
        <h2 style={{ fontSize: "1.6em", marginBottom: "20px", fontWeight: "bold" }}>Accreditations</h2>
        <p style={{ marginBottom: "20px", maxWidth: "800px", margin: "0 auto" }}>
          Hult is recognized by business education's three most prestigious international accrediting bodies: The Association to Advance Collegiate Schools of Business (AACSB International), the Association of MBAs (AMBA), and EQUIS (The European Quality Improvement System). We are the first business school in the US to achieve this triple accreditation, which is held by just one percent of business schools worldwide.
        </p>
        <div style={{ marginBottom: "20px" }}>
          <img
            src={S3}
            alt="Accreditation Logos"
            style={{ width: "200px", marginBottom: "20px" }}
          />
        </div>
        <div style={{ maxWidth: "800px", margin: "0 auto", textAlign: "left" }}>
          <ul style={{ listStyleType: "none", padding: "0", lineHeight: "2" }}>
            <li>AACSB - Massachusetts Department of Higher Education</li>
            <li>AMBA - DUBAI Knowledge</li>
            <li>EQUIS - BPPE</li>
            <li>NECHE -</li>
          </ul>
        </div>
      </div>

      {/* Awards Section */}
      <div style={{ padding: "40px 20px", backgroundColor: "#f8f6ec", textAlign: "center" }}>
        <h2 style={{ fontSize: "1.6em", marginBottom: "20px", fontWeight: "bold" }}>Awards</h2>
        <p style={{ marginBottom: "20px", maxWidth: "800px", margin: "0 auto" }}>
          Hult is the proud recipient of the bronze award for Best Lifelong Learning Initiative 2021 from the Association of MBAs (AMBA) and the Business Graduates Association (BGA). The prize builds on the Business School Careers Strategy award from AMBA & BGA in 2020, as well as the 2014 AMBA Innovation award.
        </p>
        <p style={{ marginBottom: "20px", maxWidth: "800px", margin: "0 auto" }}>
          AMBA is the international independent authority on graduate business education. Their accreditation service is the global standard for all MBA, DBA, and MBM programs. AMBA accredits over 240 business schools in more than 70 countries.
        </p>
        <div style={{ marginBottom: "20px" }}>
          <img
            src={S4}
            alt="Award Logos"
            style={{ width: "200px" }}
          />
        </div>
      </div>
    </div>
  );
};

export default Abroad2;
