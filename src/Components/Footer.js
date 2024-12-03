import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="country">
        Delhi, India
      </div>
      <div className="footer-links">
        <div className="footer-links-section">
          <Link to="/education"> Education </Link>
          <Link to="/projects"> Projects </Link>
          <Link to="/skills"> Skills</Link>
          <a href="mailto:tanyamaryam27@gmail.com"> Email </a>
       
        </div>
      </div>
      
      {/* New section for "Developed by Tanya Maryam" and copyright */}
     
    </footer>
  );
};

export default Footer;