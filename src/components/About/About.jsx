import React from "react";

import "./About.css";

const About = () => {
  return (
    <section id="about" className="about">
      <div className="about-image">
        <img src="src\assets\logo_alone_t.png" alt="About Us" />
      </div>
      <div className="about-content">
        <h2>About Inglorious Barber Co.</h2>
        <p>
          Welcome to Inglorious Barber Co., where tradition meets modernity. We
          pride ourselves on providing top-notch grooming services. Our team of
          skilled barbers is dedicated to delivering the best experience for our
          clients. Whether you're here for a quick trim or a complete makeover,
          we make sure you leave looking and feeling great.
        </p>
        {/* Add more content as needed */}
      </div>
    </section>
  );
};

export default About;
