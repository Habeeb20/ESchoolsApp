import React, { useState } from "react";
import { FaBuilding, FaSuitcase, FaUsers, FaUserPlus } from "react-icons/fa";
import CountUp from "react-countup";
import Fade from "react-reveal/Fade";
import styled from 'styled-components';

const Number = () => {
  const Card = styled.div`
    background-color: green;
    color: white;
    padding: 25px;
    margin: 15px;
    border-radius: 10px;
    text-align: center;
    font-size: 150%;
    flex: 1 1 100px;
    max-width: 150px;
  `;

  const details = [
    {
      id: 1,
      title: "23441",
      subTitle: "Jobs",
      icon: <FaSuitcase />,
    },
    {
      id: 2,
      title: "1220",
      subTitle: "Schools",
      icon: <FaBuilding />,
    },
    {
      id: 3,
      title: "200",
      subTitle: "Groups",
      icon: <FaUsers />,
    },
    {
      id: 4,
      title: "1761",
      subTitle: "Users",
      icon: <FaUserPlus />,
    },
  
    {
      id: 5,
      title: "1500",
      subTitle: "Students",
      icon: <FaUsers />,
    },
    {
      id: 6,
      title: "800",
      subTitle: "Teachers",
      icon: <FaSuitcase />,
    },
    {
      id: 7,
      title: "450",
      subTitle: "Exams",
      icon: <FaBuilding />,
    },
    {
      id: 8,
      title: "3000",
      subTitle: "Training",
      icon: <FaUserPlus />,
    },
  ];

  const [revealed, setRevealed] = useState(
    details.reduce((acc, detail) => {
      acc[detail.id] = false;
      return acc;
    }, {})
  );

  const handleReveal = (id) => {
    setRevealed((prev) => ({ ...prev, [id]: true }));
  };

  return (
    <div className="heroSection">
      <div style={{ display: "flex", justifyContent: "center", flexWrap: "wrap" }}>
        {details.map((element) => (
          <Fade bottom key={element.id} onReveal={() => handleReveal(element.id)}>
            <Card>
              <div className="icon">{element.icon}</div>
              <div className="content">
                {revealed[element.id] && (
                  <CountUp
                    start={0}
                    end={parseInt(element.title)}
                    duration={3.75}
                    separator=","
                  />
                )}
                <p style={{ color: "white" }}>{element.subTitle}</p>
              </div>
            </Card>
          </Fade>
        ))}
      </div>
    </div>
  );
};

export default Number;
