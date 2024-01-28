import React from "react";

import "./Button.css";

const Button = ({ text, color, hoverEffect = false }) => {
  const buttonClass = `button ${hoverEffect ? "hover-effect" : ""}`;

  return <button className={buttonClass}>{text}</button>;
};

export default Button;
