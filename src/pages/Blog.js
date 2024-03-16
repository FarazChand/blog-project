import React from "react";
import { useRouteLoaderData, useParams } from "react-router";

import "./Blog.scss";

const BlogPage = () => {
  const { blogId } = useParams();
  const blogs = useRouteLoaderData("blog-data");

  console.log(blogs);
  console.log(blogId);

  const selectedBlog = blogs.find((blog) => blog.title === blogId);

  console.log(selectedBlog);
  return (
    <main>
      <div className="container">
        <section className="blog-section main-section">
          {selectedBlog.title && <h1>{selectedBlog.title}</h1>}
          {selectedBlog.paragraph.map((section) => (
            <div key={section.id}>
              {section.title && <h2>{section.title}</h2>}
              <p>{section.content}</p>
            </div>
          ))}
        </section>
      </div>
    </main>
  );
};

export default BlogPage;
