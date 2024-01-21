import React from "react";

import "./Services.css";

const services = [
  { name: "Kids Haircuts 12 and under", duration: "30m", price: "$25" },
  { name: "Adult Haircuts 13 and up", duration: "30-40m", price: "$35" },
  { name: "First Responder / Military", duration: "30m", price: "$25" },
  { name: "Haircut and Beard", duration: "1h", price: "$50" },
  { name: "Haircut and Shave", duration: "1h", price: "$50" },
  { name: "Shave Full Face", duration: "30m", price: "$30" },
];

const Services = () => {
  return (
    <section id="services" className="services">
      <h2>Our Services</h2>
      <div className="services-list">
        {services.map((service, index) => (
          <div key={index} className="service-item">
            <span className="service-name">{service.name}</span>
            <span className="service-duration">{service.duration}</span>
            <span className="service-price">{service.price}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
