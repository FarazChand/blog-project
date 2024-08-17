// import React from "react";
import React, { useContext } from "react";
import { useState, useEffect } from "react";
import { Link, useRouteLoaderData, json } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";

import { urlFor, client } from "../client";
import { Tags, BlogPreview, Hero } from "../components";
import { sortByDates } from "../helpers/helpers";
import "./Home.scss";
import { GeneralContext } from "../store/general-context";

const HomePage = () => {
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Gets sidebar through DOM, gets the bounding rectangle dimensions of the sidebar
      const sidebar = document.getElementById("sidebar");
      const sidebarRect = sidebar.getBoundingClientRect();

      // Checks to see if the top of the rectangle has reached the top of the window - sets state to sticky if true and removes if false
      if (sidebarRect.top <= 0) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    // adding an event listener to the window on scroll
    window.addEventListener("scroll", handleScroll);

    // cleanup function that removes the event listener when the component unmounts
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isSticky]);

  const blogs = useRouteLoaderData("blog-data");
  const sortedBlogs = sortByDates(blogs);

  const recommendedTitles = [
    "JavaScript ES6: Embracing the Future of JavaScript",
    "Empower Your Layouts with CSS Flexbox",
    "Optimizing React with JavaScript Design Patterns",
    "Essential JavaScript Concepts to Grasp Before Diving into React",
    "What JS Framework should you use?",
    "What is a good Salary for Web Development?",
    "React, React, React!",
  ];

  return (
    <main>
      <Hero />
      <div className="main-flex">
        <div className="container home-container">
          <section className="blog-previews">
            <h2>Recently Published</h2>
            <ul>
              {sortedBlogs.map((blog) => (
                <BlogPreview blog={blog} key={blog.title} />
              ))}
            </ul>
          </section>
          <aside>
            <section className="categories">
              <h2>Categories</h2>
              <Tags />
            </section>
            <section
              id="sidebar"
              className={`sidebar ${isSticky ? "sticky" : ""} popular-content`}
            >
              <h2>Recommended</h2>
              <ul>
                {recommendedTitles.map((title) => (
                  <li key={title}>
                    <span>
                      <FaArrowRight />
                    </span>
                    {/* <FaArrowRight /> */}
                    <Link to={`/posts/post/${title}`}>{title}</Link>
                  </li>
                ))}
              </ul>
            </section>
          </aside>
        </div>
      </div>
    </main>
  );
};

export default HomePage;

export async function loader({ request, params }) {
  const query = "*[_type == 'blog']";

  const response = await client.fetch(query);

  // if (!response.ok) {
  //   console.log(response);
  //   throw json({ message: "Could not fetch events." }, { status: 500 });
  // }

  return response;
}
