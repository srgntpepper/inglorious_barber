import React from "react";

import "./Footer.css";
import IngloriousBarberCoInstagram from "../../assets/instagram.svg";
import IngloriousBarberCoFacebook from "../../assets/facebook.svg";

const Footer = () => {
  const address = "10808 Los Alamitos Blvd, Los Alamitos, CA 90720";
  const phone = "(562) 343-3728";
  const instagramLink = "https://www.instagram.com/ingloriousbarbercompany/";
  const facebookLink =
    "https://m.facebook.com/p/Inglorious-Barber-Company-100088320710023/";
  const twitterLink = "#"; // Replace # with the actual link

  return (
    <footer className="footer">
      <div className="footer-content">
        <p className="footer-address">{address}</p>
        <p className="footer-phone">{phone}</p>
        <div className="social-links">
          <a href={instagramLink} aria-label="Instagram">
            <img
              src={IngloriousBarberCoInstagram}
              alt="Inglorious Barber Co. Instagram"
            />
          </a>
          {/* <a href={facebookLink} aria-label="Facebook">
            <img
              src={IngloriousBarberCoFacebook}
              alt="Inglorious Barber Co. Facebook"
            />
          </a> */}
          {/* <a href={twitterLink} aria-label="Twitter">
            <img
              src="/src/assets/twitter.svg"
              alt="Inglorious Barber Co. Twitter"
            />
          </a> */}
        </div>
        <p>© 2024 Inglorious Barber Co. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
