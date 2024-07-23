import React from "react";
import { FaUserPlus } from "react-icons/fa";
import { MdFindInPage } from "react-icons/md";
import { IoMdSend } from "react-icons/io";
import { Link } from "react-router-dom";

const HowItWorks = () => {
  return (
    <>
      <div className="howitworks">
        <div className="container">
          <h3>How E-jobs works</h3>
          <div className="banner">
            <div className="card">
              <FaUserPlus />
              <p>Create Account</p>
              <p>
               Your account has been created successfully
              </p>
            </div>
           
            <div className="card">
            
              <MdFindInPage />
              <p><Link to="/job/post">Find a Job/Post a Job</Link></p>
              <p>
               find a job that fits your qualifications. you can also post a job vacancy
              </p>
            
            </div>
           
            
            <div className="card">
              
              <IoMdSend />
              <p><Link to="/application/:id">Apply For Job/Recruit Suitable Candidates</Link></p>
              <p>
               Apply for a good paying job of your choice
              </p>
           
             
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HowItWorks;
