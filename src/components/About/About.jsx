import React from "react";

import "./About.css";
import IngloriousBarberCoJavier from "../../assets/javier-barber.jpg";

const About = () => {
  return (
    <section id="about" className="about">
      <div className="about-image">
        <img
          src={IngloriousBarberCoJavier}
          alt="Inglorious Barber Co. Barber"
        />
      </div>
      <div className="about-content">
        <h2>About Us</h2>
        <p>
          Welcome to Inglorious Barber Co., where tradition meets modernity. We
          pride ourselves on providing top-notch grooming services. Our team of
          skilled barbers are dedicated to delivering the best experience for
          our clients. Whether you're here for a quick trim or a complete
          makeover, we make sure you leave looking and feeling great.
        </p>
        {/* Add more content as needed */}
      </div>
    </section>
  );
};

export default About;
