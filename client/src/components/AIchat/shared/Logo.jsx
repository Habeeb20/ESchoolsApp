import React from "react";
import { Link } from "react-router-dom";
import { Typography } from "@mui/material";

const Logo = () => {
  return (
    <div
      style={{
        display: "flex",
        marginRight: "auto",
        alignItems: "center",
        gap: "8px", // Adjust the gap value as needed
      }}
    >
      <Link to={"/"} style={{ display: "flex", alignItems: "center", textDecoration: "none" }}>
        <img
          src="openai.png"
          alt="openai"
          width={"30px"}
          height={"30px"}
          className="image-inverted"
        />
        <Typography
          sx={{
            display: { md: "block", sm: "none", xs: "none" },
            fontWeight: "800",
            textShadow: "2px 2px 20px #000",
            color: "inherit" // This ensures the text color follows the theme/link color
          }}
        >
          <span style={{ fontSize: "20px" }}>ChartGPT</span>
        </Typography>
      </Link>
    </div>
  );
};

export default Logo;
