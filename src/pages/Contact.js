import React from "react";
import { BsTwitter } from "react-icons/bs";
import { FaLinkedin } from "react-icons/fa";
import { MdOutlineMail } from "react-icons/md";
import { Link } from "react-router-dom";

import FormSubmit from "../components/FormSubmit";
import "./Contact.scss";

const ContactPage = () => (
  <main className="main-flex">
    <div className="container contact-container">
      <div className="main-section contact-section">
        <section>
          <h2 className="contact-title">Contact Me</h2>
          <div className="contact-links">
            <div className="general-container">
              <Link
                target="_blank"
                to={"https://twitter.com/FarazChandTech"}
                className="contact-link"
              >
                <div>
                  <BsTwitter />
                </div>
                <p>My Twitter</p>
              </Link>

              <Link
                target="_blank"
                to={"https://www.linkedin.com/in/faraz-chand-7b35442b9/"}
                className="contact-link"
              >
                <div>
                  <FaLinkedin />
                </div>
                <p>My LinkedIn</p>
              </Link>

              <Link className="contact-link">
                <div>
                  <MdOutlineMail />
                </div>
                <p>Faraz.Chand@hotmail.com</p>
              </Link>
            </div>
          </div>
        </section>
        <FormSubmit />
      </div>
    </div>
  </main>
);

export default ContactPage;
