// import React from "react";
import React, { useContext } from "react";
import { useState, useEffect } from "react";
import { Link, useRouteLoaderData, json } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";

import { urlFor, client } from "../client";
import { Tags, BlogPreview } from "../components";
import { sortByDates } from "../helpers/helpers";
import "./Home.scss";
import { GeneralContext } from "../store/general-context";

const HomePage = () => {
  const { darkModeValue, toggleDarkMode } = useContext(GeneralContext);
  console.log(darkModeValue);

  const blogs = useRouteLoaderData("blog-data");

  const sortedBlogs = sortByDates(blogs);

  const popularTitles = [
    "How to be JS Master",
    "Top 5 CSS Tricks",
    "What to do to Improve your Design",
    "Biggest Mistakes when Making a Website",
    "What JS Framework should you use?",
    "What is a good Salary for Web Development?",
    "React, React, React!",
  ];

  // if (blogs) {
  // }

  return (
    <main>
      <div className="container">
        <section className="blog-previews">
          <h2>Recently Published</h2>
          <ul>
            {sortedBlogs.map((blog) => (
              // <li className="blog-preview" key={blog.title}>
              //   <h3>{blog.title}</h3>
              //   <p>{blog.preview}</p>
              //   <Link to={`/posts/post/${blog.title}`}>Read more</Link>
              // </li>
              <BlogPreview blog={blog} />
            ))}
          </ul>
        </section>
        <aside>
          <section className="categories">
            <h2>Categories</h2>
            <Tags />
          </section>
          <section className="popular-content">
            <h2>Popular Posts</h2>
            <ul>
              {popularTitles.map((title) => (
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
