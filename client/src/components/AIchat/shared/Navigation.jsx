import { Link } from "react-router-dom";
import React from "react";

const Navigation = ({ to, bg, text, textColor, onClick }) => {
  return (
    <Link
      className="nav-link"
      to={to}
      style={{ background: bg, color: textColor }}
      onClick={onClick}
    >
      {text}
    </Link>
  );
};

export default Navigation;
