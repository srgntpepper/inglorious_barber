import React from "react";

import "./Hero.css";
import Button from "../Button/Button";

const Hero = () => {
  const addressLink =
    "https://www.google.com/maps/place/10808+Los+Alamitos+Blvd,+Los+Alamitos,+CA+90720";

  return (
    <section className="hero">
      <div className="hero-content">
        <img
          src="src/assets/logo_name_t.png"
          alt="Inglorious Barber Co."
          className="hero-title"
        />
        <a
          href={addressLink}
          target="_blank"
          rel="noopener noreferrer"
          className="hero-address"
        >
          10808 Los Alamitos Blvd, Los Alamitos, CA 90720
        </a>
        <p className="hero-text">
          Classic cuts, modern cuts, and kid's cuts, including, but not limited
          to fades, tapers, long hair, beards, and hot towel shaves. Available
          by appointment or simply walk in. Come enjoy a beverage of your choice
          on the house.
        </p>
        <div className="redirects">
          <Button
            text="Contact Us"
            color="#f5f5f5"
            hoverEffect={true}
            size="large"
          />
          <Button text="Book Online" color="#f5f5f5" hoverEffect={true} />
        </div>
      </div>
    </section>
  );
};

export default Hero;
