import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <section className="footer">
      <div className="footer-header">
        <div className="footer-header-titles">
          <div className="logo">
            <NavLink to="/">Faraz Chand</NavLink>
          </div>
          <span>Thanks for reading!</span>
        </div>
        <span className="footer-copyright">
          © 2024-present Faraz Chand. All Rights Reserved.
        </span>
      </div>

      <div>
        <div className="categories"></div>
        <div className="contact-links"></div>
      </div>
    </section>
  );
};

export default Footer;
