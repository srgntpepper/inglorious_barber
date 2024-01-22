import React from "react";

import "./Hero.css";
import Button from "../Button/Button";

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        {" "}
        {/* Ensure this div exists if you're using it in CSS */}
        {/* Main content */}
        <Button
          text="Book an Appointment"
          color="#fff"
          hoverEffect={true}
          size="large"
        />
        {/* Add more content here */}
      </div>
    </section>
  );
};

export default Hero;
