import React from "react";

import "./Button.css";

const Button = ({ text, color, hoverEffect = false, size }) => {
  const buttonClass = `button ${hoverEffect ? "hover-effect" : ""} ${size}`;

  return (
    <button className={buttonClass} style={{ backgroundColor: color }}>
      {text}
    </button>
  );
};

export default Button;
