import React from "react";

import "./About.scss";

const AboutPage = () => (
  <main>
    <div className="container">
      <section className="main-section">
        <section>
          <h2>Who I Am</h2>
          <p>
            Welcome to my blog! I'm Faraz Chand, a passionate software engineer
            specializing in web development. Through this platform, I aim to
            share my expertise and insights into the dynamic world of web
            development and surrounding technologies with the community.
          </p>

          <p>
            I started my web development journey later in life, discovering a
            passion for learning and creation in this field. This blog is a
            platform for sharing my expanding knowledge of web development as I
            acquire new skills and explore emerging technologies.
          </p>

          <p>
            This blog focuses mainly on Frontend web development but also covers
            a range of related topics. Currently, I've written about React,
            JavaScript, and CSS, with plans to explore other frameworks like
            Angular, CMS platforms such as Drupal, and even other tech stacks
            like the LAMP stack.
          </p>
        </section>

        <section>
          <h2>My Mission</h2>
          <p>
            My mission is to provide high-quality tutorials, articles, and
            resources to help developers of all levels improve their skills and
            stay updated with the latest trends in web development.
          </p>
        </section>

        <section>
          <h2>Meet the Team</h2>
          <p>
            We are a team of experienced web developers and designers dedicated
            to creating valuable content for our readers.
          </p>
        </section>

        <section>
          <h2>Contact Us</h2>
          <p>
            Have questions or suggestions? Feel free to{" "}
            <a href="/contact">contact us</a>.
          </p>
        </section>
      </section>
    </div>
  </main>
);
export default AboutPage;
