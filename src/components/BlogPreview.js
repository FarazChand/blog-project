import React from "react";
import { Link } from "react-router-dom";

import { formatDate, formatPreview } from "../helpers/helpers";
import "./BlogPreview.scss";

const BlogPreview = ({ blog }) => {
  const formattedString = formatPreview(blog.preview);

  return (
    <Link className="blog-preview-link" to={`/posts/post/${blog.title}`}>
      <li className="blog-preview" key={blog.title}>
        <h3>{blog.title}</h3>
        <p className="blog-preview-text">{formattedString}</p>
        <div className="preview-footer">
          <Link to={`/posts/post/${blog.title}`} className="read-more">
            Read more
          </Link>
          <p className="preview-date">{formatDate(blog._createdAt)}</p>
        </div>
      </li>
    </Link>
  );
};

export default BlogPreview;
