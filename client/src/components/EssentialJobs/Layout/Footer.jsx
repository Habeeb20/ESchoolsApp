import { Context } from "../../../main";
import React from "react";
import { Link } from "react-router-dom";
import { FaFacebookF, FaYoutube, FaLinkedin } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import { useContext } from "react";


const Footer = () => {
    const { isAuthorized } = useContext(Context);
    return (
      <footer className={isAuthorized ? "footerShow" : "footerHide"}>
        <div>&copy; All Rights Reserved By CodeWithZeeshu.</div>
        <div>
          <Link to={"https://www.facebook.com/profile.php?id=100030535123397"} target="_blank">
            <FaFacebookF />
          </Link>
          <Link to={"https://www.youtube.com/@CodeWithZeeshu"} target="_blank">
            <FaYoutube />
          </Link>
          <Link to={"https://www.youtube.com/@CodeWithZeeshu"} target="_blank">
            <FaLinkedin />
          </Link>
          <Link to={"https://www.instagram.com/z_4_zeeshuuu/"} target="_blank">
            <RiInstagramFill />
          </Link>
        </div>
      </footer>
    );
  };
  
  export default Footer;
  