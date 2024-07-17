import React, { useState } from "react";
import "./Sidebar.css";
import Logo from "../imgs/logo.png";
import { UilSignOutAlt } from "@iconscout/react-unicons";
import { SidebarData } from "../Data/Data";
import { UilBars } from "@iconscout/react-unicons";
import { motion } from "framer-motion";

const Sidebar = () => {
  const [selected, setSelected] = useState(0);

  const [expanded, setExpaned] = useState(true)

  const sidebarVariants = {
    true: {
      left : '0'
    },
    false:{
      left : '-60%'
    }
  }
  console.log(window.innerWidth)
  return (
    <>
      <div className="bars" style={expanded?{left: '60%'}:{left: '5%'}} onClick={()=>setExpaned(!expanded)}>
        <UilBars />
      </div>
    <motion.div className='sidebar'
    variants={sidebarVariants}
    animate={window.innerWidth<=768?`${expanded}`:''}
    >
      {/* logo */}
      <div className="logo">
        <img src={Logo} alt="logo" />
        <span>
          Sh<span>o</span>ps
        </span>
      </div>

      <div className="menu">
        {SidebarData.map((item, index) => {
          return (
            <div
              className={selected === index ? "menuItem active" : "menuItem"}
              key={index}
              onClick={() => setSelected(index)}
            >
              <item.icon />
              <span>{item.heading}</span>
            </div>
          );
        })}
        {/* signoutIcon */}
        <div className="menuItem">
          <UilSignOutAlt />
        </div>
      </div>
    </motion.div>
    </>
  );
};

export default Sidebar;


// import React, { useState, useEffect } from "react";
// import Logo from "../imgs/logo.png";
// import { UilSignOutAlt, UilBars } from "@iconscout/react-unicons";
// import { SidebarData } from "../Data/Data";
// import { motion } from "framer-motion";

// const Sidebar = () => {
//   const [selected, setSelected] = useState(0);
//   const [expanded, setExpanded] = useState(true);
//   const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

//   const sidebarVariants = {
//     true: {
//       left: "0",
//     },
//     false: {
//       left: "-60%",
//     },
//   };

//   useEffect(() => {
//     const handleResize = () => setIsMobile(window.innerWidth <= 768);
//     window.addEventListener("resize", handleResize);
//     return () => window.removeEventListener("resize", handleResize);
//   }, []);

//   const barStyle = {
//     left: isMobile && expanded ? "60%" : "5%",
//     position: "fixed",
//     top: "10px",
//     cursor: "pointer",
//     zIndex: 1000,
//   };

//   const sidebarStyle = {
//     position: "fixed",
//     top: "0",
//     left: isMobile && !expanded ? "-60%" : "0",
//     width: isMobile ? "60%" : "250px",
//     height: "100%",
//     background: "#fff",
//     boxShadow: "2px 0 5px rgba(0,0,0,0.1)",
//     zIndex: 999,
//     transition: "all 0.3s ease",
//   };

//   return (
//     <>
//       <div className="bars" style={barStyle} onClick={() => setExpanded(!expanded)}>
//         <UilBars />
//       </div>
//       <motion.div
//         className="sidebar"
//         style={sidebarStyle}
//         variants={sidebarVariants}
//         animate={isMobile ? `${expanded}` : ""}
//       >
//         {/* logo */}
//         <div className="logo" style={{ display: "flex", alignItems: "center", padding: "10px" }}>
//           <img src={Logo} alt="logo" style={{ height: "40px", marginRight: "10px" }} />
//           <span style={{ fontSize: "1.5rem", fontWeight: "bold" }}>
//             Sh<span style={{ color: "#ff6347" }}>o</span>ps
//           </span>
//         </div>

//         <div className="menu" style={{ padding: "10px" }}>
//           {SidebarData.map((item, index) => {
//             return (
//               <div
//                 className={selected === index ? "menuItem active" : "menuItem"}
//                 key={index}
//                 onClick={() => setSelected(index)}
//                 style={{
//                   display: "flex",
//                   alignItems: "center",
//                   padding: "10px",
//                   cursor: "pointer",
//                   backgroundColor: selected === index ? "#f0f0f0" : "transparent",
//                 }}
//               >
//                 <item.icon style={{ marginRight: "10px" }} />
//                 <span>{item.heading}</span>
//               </div>
//             );
//           })}
//           {/* signoutIcon */}
//           <div className="menuItem" style={{ display: "flex", alignItems: "center", padding: "10px", cursor: "pointer" }}>
//             <UilSignOutAlt style={{ marginRight: "10px" }} />
//           </div>
//         </div>
//       </motion.div>
//     </>
//   );
// };

// export default Sidebar;
