import React from "react";

import "./About.css";
import IngloriousBarberCoJavier from "../../assets/javier-barber.jpg";

const About = () => {
  return (
    <section id="about" className="about">
      {/* <div className="about-image">
        <img
          src={IngloriousBarberCoJavier}
          alt="Inglorious Barber Co. Barber"
        />
      </div> */}
      <h2 className="about-title">About Us</h2>
      <div className="about-content">
        <p>
          Welcome to Inglorious Barber Co, where we stay true to American
          tradition and values. We pride ourselves on providing top-notch
          grooming and customer service standards. Whether you're here for a
          clean up or an overhaul, we'll make sure you leave looking and feeling
          your best.
        </p>
        {/* Add more content as needed */}
      </div>
    </section>
  );
};

export default About;
