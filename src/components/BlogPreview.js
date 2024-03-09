import React from "react";
import { Link } from "react-router-dom";

import "./BlogPreview.scss";

const BlogPreview = ({ blog }) => (
  <li className="blog-preview" key={blog.title}>
    <h3>{blog.title}</h3>
    <p>{blog.preview}</p>
    <Link to={`/posts/post/${blog.title}`}>Read more</Link>
  </li>
);

export default BlogPreview;
