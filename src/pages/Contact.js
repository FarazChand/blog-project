import React from "react";
import { BsTwitter } from "react-icons/bs";
import { FaLinkedin } from "react-icons/fa";
import { MdOutlineMail } from "react-icons/md";
import { Link } from "react-router-dom";

import "./Contact.scss";

const ContactPage = () => (
  <main>
    <div className="container">
      <div className="main-section contact-section">
        <section>
          <h2 className="contact-title">Contact Me</h2>
          <div className="contact-links">
            <div className="general-container">
              <Link className="contact-link">
                <div>
                  <BsTwitter />
                </div>
                <p>My Twitter</p>
              </Link>

              <Link className="contact-link">
                <div>
                  <FaLinkedin />
                </div>
                <p>My LinkedIn</p>
              </Link>

              <Link className="contact-link">
                <div>
                  <MdOutlineMail />
                </div>
                <p>My Email</p>
              </Link>
            </div>
          </div>
        </section>
        <section>
          <p>
            Have questions, suggestions, or feedback? Please feel free to
            contact us using the form below:
          </p>
          <form action="/submit-contact" method="post">
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" name="name" required />

            <label htmlFor="email">Email:</label>
            <input type="text" id="email" name="email" required />

            <label htmlFor="message">Message:</label>
            <textarea id="message" name="message" rows="4" required></textarea>

            <input type="submit" value="Submit" />
          </form>
        </section>
      </div>
    </div>
  </main>
);

export default ContactPage;
