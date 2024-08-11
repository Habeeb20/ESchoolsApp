// import React from "react";
// import { FaBuilding, FaSuitcase, FaUsers, FaUserPlus } from "react-icons/fa";
// import CountUp from "react-countup";
// import Fade from "react-reveal/Fade";
// import styled from 'styled-components';

// const Number = () => {
//   const style = {
//     backgroundColor: "green",
//     color: "white",
//     padding: "50px",
//     margin: "30px",
//     borderRadius: "10px",
//     textAlign: "center",
//     fontSize: "250%"
//   };

//   const details = [
//     {
//       id: 1,
//       title: "23441",
//       subTitle: "Jobs",
//       icon: <FaSuitcase />,
//     },
//     {
//         id: 2,
//         title: "1220",
//         subTitle: "Schools",
//         icon: <FaBuilding />,
  
//       },
//     {
//       id: 3,
//       title: "200",
//       subTitle: "Groups",
//       icon: <FaUsers />,
//     },
//     {
//       id: 4,
//       title: "1761",
//       subTitle: "Users",
//       icon: <FaUserPlus />,
//     },
//   ];

//   return (
//     <>
//       <div className="heroSection">
//         <div className="details" style={{ display: "flex", justifyContent: "center", flexWrap: "wrap" }}>
//           {details.map((element) => {
//             return (
//               <Fade key={element.id}>
//                 <div style={style} className="card">
//                   <div className="icon">{element.icon}</div>
//                   <div className="content">
//                     <CountUp
//                       start={0}
//                       end={parseInt(element.title)}
//                       duration={3.75}
//                       separator=","
//                     />
//                     <p style={{color: "white"}}>{element.subTitle}</p>
//                   </div>
//                 </div>
//               </Fade>
//             );
//           })}
//         </div>
//       </div>
//     </>
//   );
// };

// export default Number;

import React, { useState } from "react";
import { FaBuilding, FaSuitcase, FaUsers, FaUserPlus } from "react-icons/fa";
import CountUp from "react-countup";
import Fade from "react-reveal/Fade";
import styled from 'styled-components';

const Number = () => {
  const Card = styled.div`
    background-color: green;
    color: white;
    padding: 50px;
    margin: 30px;
    border-radius: 10px;
    text-align: center;
    font-size: 250%;
    flex: 1 1 200px;
    max-width: 300px;
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
