import React, { useState } from "react";
import { FaUserPlus } from "react-icons/fa";
import { MdFindInPage } from "react-icons/md";
import { IoMdSend } from "react-icons/io";
import { Link } from "react-router-dom";

const HowItWorks = () => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter =() => {
    setIsHovered(true);
  };

  const handleMouseLeave= () => {
    setIsHovered(false);
  }

  const baseStyle = {
    // fontSize: '1.2em',
    // padding: '10px',
    // backgroundColor: 'white',
    // transition: 'background-color 0.3s ease',
  };

  const hoverStyle = {
    // backgroundColor: 'lightgray',
    // textDecoration:"underline"
    color: "blue"
  };
  const style = {
    backgroundColor: "#184235",
    color: "white"
  }
  return (
    <>
      <div className="howitworks">
        <div className="container">
          <h3>How E-jobs works</h3>
          <div  className="banner">
            <div  style={style} className="card">
              <FaUserPlus />
              <p>Create Account</p>
              <p>
               Your account has been created successfully
              </p>
            </div>
           
            <div style={isHovered ? {...baseStyle, ...hoverStyle} : style} 
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}className="card">
            
              <MdFindInPage />
              <p><Link style={{textDecoration: "none", color:"white"}}to="/job/post">Find a Job/Post a Job</Link></p>
              <p style={{color: "white"}}>
               find a job that fits your qualifications. you can also post a job vacancy
              </p>
            
            </div>
           
            
            <div style={style} className="card">
              
              <IoMdSend />
              <p ><Link style={{textDecoration: "none", color:"white"}} to="/application/:id">Apply For Job/Recruit Suitable Candidates</Link></p>
              <p style={{color: "white"}}>
               click here to apply for a good paying job of your choice
              </p>
           
             
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HowItWorks;
