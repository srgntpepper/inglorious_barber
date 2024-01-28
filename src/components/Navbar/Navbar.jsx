import React from "react";
import { Link } from "react-scroll";

import "./Navbar.css";

const Navbar = () => {
  return (
    <header className="header">
      <nav className="nav">
        {/* Left items */}
        <ul className="nav-about">
          <li>
            <Link
              to="about"
              smooth={true}
              spy={true}
              offset={50}
              duration={600}
            >
              About Us
            </Link>
          </li>
        </ul>

        {/* Centered logo */}
        <div className="logo">
          <img src="src\assets\logo_alone_t.png" alt="Barber Shop Logo" />
          {/* <img src="src\assets\logo_name_t.png" alt="Barber Shop Name" /> */}
        </div>

        {/* Right items */}
        <ul className="nav-services">
          <li>
            <Link to="services" smooth={true} spy={true} duration={600}>
              Services
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
