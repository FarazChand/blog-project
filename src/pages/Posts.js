import React from "react";
import { useRouteLoaderData, Link, useParams } from "react-router-dom";

import { Tags } from "../components";

const PostsPage = () => {
  const blogs = useRouteLoaderData("blog-data");

  const filteredBlogs = [];

  return (
    <main>
      <div className="container">
        <section className="blog-section">
          <section className="tag-section">
            <h2>Pick a Topic:</h2>
            <Tags />
          </section>
          <section className="blog-previews">
            <ul>
              {blogs.map((blog) => (
                <li className="blog-preview" key={blog.title}>
                  <h3>{blog.title}</h3>
                  <p>{blog.preview}</p>
                  <Link to={`/posts/post/${blog.title}`}>Read more</Link>
                </li>
              ))}
            </ul>
          </section>
        </section>
      </div>
    </main>
  );
};

export default PostsPage;
