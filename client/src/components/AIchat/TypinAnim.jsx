import React from "react";
import { TypeAnimation } from "react-type-animation";

const TypingAnim = () => {
  return (
    <TypeAnimation
      sequence={[
        "Will you like to ask questions about any school?",
        1000,
        "will you like to know about any valid information🤖",
        2000,
        "chat with our AI💻",
        1500,
      ]}
      speed={50}
      style={{
        fontSize: "30px",
        color: "white",
        display: "inline-block",
        textShadow: "1px 1px 20px #000",
      }}
      repeat={Infinity}
    />
  );
};

export default TypingAnim;
