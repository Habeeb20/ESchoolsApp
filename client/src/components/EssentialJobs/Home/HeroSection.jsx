import { color } from "framer-motion";
import React from "react";
import { FaBuilding, FaSuitcase, FaUsers, FaUserPlus } from "react-icons/fa";
import { Link } from "react-router-dom";
const HeroSection = () => {
  const style = {
    backgroundColor: "#2d5649",
    color: "white"
  }
  const details = [
    {
      id: 1,
      title: "1,23,441",
      subTitle: "Live Job",
      icon: <FaSuitcase />,
   
    },
    {
      id: 2,
      title: "91220",
      subTitle: "Companies",
      icon: <FaBuilding />,

    },
    {
      id: 3,
      title: "2,34,200",
      subTitle: "Job Seekers",
      icon: <FaUsers />,
    
    },
    {
      id: 4,
      title: "1,03,761",
      subTitle: "Employers",
      icon: <FaUserPlus />,
      
    },
  ];
  return (
    <>
      <div className="heroSection">
        <div className="container">
          <div className="title">
            <h1>Find a job that suits</h1>
            <h1>your interests and skills</h1>
            <p>
              Find a job that interests you without disrupting your education
            </p>
            <div >
                  <Link to='/job/getall'><button style={{border:"1px solid black", padding: "1%", backgroundColor: "green", color: "white", marginRight:"5%"}}>get all jobs</button></Link>
                  <Link  to='/application/me'> <button style={{border:"1px solid black", padding: "1%", backgroundColor: "green", color: "white"}} >see my jobs</button></Link>
            </div>
            
          </div>
          <div className="image">
            <img src="/heroS.jpg" alt="hero" />
          </div>
        </div>
        <div className="details">
          {details.map((element) => {
            return (
              <div style={style} className="card" key={element.id}>
          
                <div className="icon">{element.icon}</div>
                <div className="content">
                  <p>{element.title}</p>
                  <p>{element.subTitle}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default HeroSection;
