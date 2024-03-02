import React from "react";
import { Link } from "react-router-dom";
import "./Tags.scss";

const tags = ["React", "CSS", "Career", "JavaScript", "Other"];

const Tags = () => {
  return (
    <ul className="tags">
      {tags.map((tag) => (
        <li key={`${tag}-key`}>
          <Link to={`/posts/${tag}`}>{tag}</Link>
        </li>
      ))}
    </ul>
  );
};

export default Tags;
