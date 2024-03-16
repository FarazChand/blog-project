import React from "react";
import { NavLink, Link } from "react-router-dom";

import { tags, socialLinks } from "../constants/constants";
import "./Footer.scss";

const Footer = () => {
  return (
    <section className="footer-container">
      <section className="footer footer-section">
        <div className="footer-header">
          <div className="footer-header-titles">
            <div className="footer-logo">
              <NavLink to="/">Faraz Chand</NavLink>
            </div>
            <p className="thanks-text">Thanks for reading!</p>
          </div>
          <p className="footer-copyright-desktop footer-copyright">
            © 2024-present Faraz Chand. All Rights Reserved.
          </p>
        </div>

        <div className="footer-links">
          <div className="footer-categories">
            <h2>Categories</h2>
            <ul className="categories-list">
              {tags.map((tag) => (
                <li key={`${tag}-key`}>
                  <Link className="footer-link-text" to={`/posts/${tag}`}>
                    {tag}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="contact-links">
            <h2>Links</h2>
            <ul className="links-list">
              {socialLinks.map((link) => (
                <li key={`${link.name}--key`} className="tag">
                  <a className="footer-link-text" href={link.link}>
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <p className="footer-copyright-mobile footer-copyright">
          © 2024-present Faraz Chand. All Rights Reserved.
        </p>
      </section>
    </section>
  );
};

export default Footer;
