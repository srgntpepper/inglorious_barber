import React from "react";

import "./Hero.css";
import Button from "../Button/Button";

const Hero = () => {
  const addressLink = "https://maps.app.goo.gl/cmyLCfJFvsVRKrTY7";

  return (
    <section className="hero">
      <div className="hero-title">
        <img
          src="src\assets\logo_name_t.png"
          alt="Barber Shop Name"
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
        <div className="hero-content">
          <p className="hero-text">
            Classic cuts, modern cuts, and kid's cuts, including, but not
            limited to fades, tapers, long hair, beards, and hot towel shaves.
            Available by appointment or simply walk in. Come enjoy a beverage of
            your choice on the house.
          </p>
          <div className="redirects">
            <a href="tel:+5623433728" className="phone-number">
              <Button
                text="Contact Us"
                color="#f5f5f5"
                hoverEffect={true}
                size="large"
              />
            </a>
            <a href="https://ingloriousbarberco.resurva.com" target="_blank">
              <Button text="Book Online" color="#f5f5f5" hoverEffect={true} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
