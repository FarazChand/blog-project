import React from "react";
import { Link } from "react-router-dom";
import "./Tags.scss";
import { tags } from "../constants/constants";

const Tags = () => {
  return (
    <ul className="tags">
      {tags.map((tag) => (
        <li key={`${tag}-key`} className="tag">
          <Link className="link-text" to={`/posts/${tag}`}>
            {tag}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default Tags;
