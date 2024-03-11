import React from "react";

const ContactPage = () => (
  <main>
    <div className="container">
      <section className="contact-section">
        <p>
          Have questions, suggestions, or feedback? Please feel free to contact
          us using the form below:
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
  </main>
);

export default ContactPage;
