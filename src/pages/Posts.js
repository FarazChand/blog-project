import React from "react";
import { useRouteLoaderData, Link, useParams } from "react-router-dom";

import { sortByDates } from "../helpers/helpers";

import { Tags, BlogPreview } from "../components";

const PostsPage = () => {
  const blogs = useRouteLoaderData("blog-data");
  const params = useParams();

  const tag = params.tag;
  let filteredBlogs = [];

  if (!tag) {
    filteredBlogs = sortByDates(blogs);
  }

  if (tag) {
    // note that we are using blog.tag[0] because we plan on implementing multiple tags later on if needed
    filteredBlogs = blogs.filter((blog) => {
      return blog.tags?.[0] === tag;
    });

    filteredBlogs = sortByDates(filteredBlogs);
  }

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
              {filteredBlogs.map((blog) => (
                <BlogPreview blog={blog} />
              ))}
            </ul>
          </section>
        </section>
      </div>
    </main>
  );
};

export default PostsPage;
