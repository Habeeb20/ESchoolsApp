
import { Box, useMediaQuery, useTheme } from "@mui/material";
import React from "react";
import TypingAnim from "../../components/AIchat/TypinAnim";

import Navbar from "../../components/LandingPage/Navbar";
import { Link } from "react-router-dom";
import HomeNavbar from "../LandingPage/essentialLanding/HomeNavbar";
const background = {
  backgroundColor : "#05101c",
  color: "white"
}



const styles = {
  html: {
    margin: 0,
    padding: 0,
    background: "#05101c",
    color: "white",
    fontFamily: '"Roboto Slab", serif',
  },
  body: {
    margin: 0,
    padding: 0,
    background: "#05101c",
    color: "white",
    fontFamily: '"Roboto Slab", serif',
  },
  imageInverted: {
    filter: "invert(100%)",
  },
  navLink: {
    fontWeight: 600,
    textTransform: "uppercase",
    marginRight: 10,
    marginLeft: 10,
    padding: "8px 20px",
    borderRadius: 10,
    textDecoration: "none",
    letterSpacing: 1,
  },
  focusedInput: {
    borderColor: "white !important",
  },
  notchedOutline: {
    borderColor: "white !important",
  },
  rotate: {
    animation: "rotation 8s infinite linear",
  },
  "@keyframes rotation": {
    from: {
      transform: "rotate(0deg)",
    },
    to: {
      transform: "rotate(359deg)",
    },
  },

  
};

const button ={
  border:"2px solid white",
  padding: "1%"
}


const HomeChat = () => {
  const theme = useTheme();
  const isBelowMd = useMediaQuery(theme.breakpoints.down("md"));
  return (
    <div style={styles.html}>
      <div style={styles.body}>
        <HomeNavbar />
      <Box width={"100%"} height={"100%"}>
      <Box
        sx={{
          display: "flex",
          width: "100%",
          flexDirection: "column",
          alignItems: "center",
          mx: "auto",
          mt: 3,
        }}
      >
        <Box>
          <TypingAnim />
         
        </Box>
        <Link style={button} to='/chat'><button>Talk to Eschool's AI</button></Link>
        <Box
          sx={{
            width: "100%",
            display: "flex",
            flexDirection: { md: "row", xs: "column", sm: "column" },
            gap: 5,
            my: 10,
          }}
        >
          <img
            src="robot.png"
            alt="robot"
            style={{ width: "200px", margin: "auto" }}
          />
          <img
            className="image-inverted rotate"
            src="openai.png"
            alt="openai"
            style={{ width: "200px", margin: "auto" }}
          />
        </Box>
        <Box sx={{ display: "flex", mx: "auto" }}>
          <img
            src="chat.png"
            alt="chatbot"
            style={{
              display: "flex",
              margin: "auto",
              width: isBelowMd ? "80%" : "60%",
              borderRadius: 20,
              boxShadow: "-5px -5px 105px #64f3d5",
              marginTop: 20,
              marginBottom: 20,
              padding: 10,
            }}
          />
        </Box>
      </Box>
     
    </Box>

      </div>

    </div>
    
  );
};

export default HomeChat;

