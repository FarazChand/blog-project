import React from "react";
import { Link } from "react-router-dom";

import { formatDate, formatPreview } from "../helpers/helpers";
import "./BlogPreview.scss";

const BlogPreview = ({ blog }) => {
  const formattedString = formatPreview(blog.preview);

  return (
    <li className="blog-preview" key={blog.title}>
      <h3>{blog.title}</h3>
      <p>{formattedString}</p>
      <div className="preview-footer">
        <Link to={`/posts/post/${blog.title}`}>Read more</Link>
        <p className="preview-date">{formatDate(blog._createdAt)}</p>
      </div>
    </li>
  );
};

export default BlogPreview;
