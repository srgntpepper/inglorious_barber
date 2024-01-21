import React from "react";
import { Link } from "react-scroll";

import "./Navbar.css";

const Navbar = () => {
  return (
    <header className="header">
      <nav className="nav">
        {/* Left items */}
        <ul>
          <li>
            <Link to="#about" smooth={true} duration={500}>
              About
            </Link>
          </li>
        </ul>

        {/* Centered logo */}
        <div className="logo">
          <img src="src\assets\logo_alone_t.png" alt="Barber Shop Logo" />
          <img src="src\assets\logo_name_t.png" alt="Barber Shop Name" />
        </div>

        {/* Right items */}
        <ul>
          <li>
            <Link to="#services" smooth={true} duration={500}>
              Services
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
