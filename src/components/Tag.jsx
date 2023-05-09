import "../assets/css/tag.css";

import React from "react";

const Tag = ({ tags }) => {
  return (
    <div className="tags">
      {tags.map((tag) => (
        <span key={tag} className="tag">
          {tag}
        </span>
      ))}
    </div>
  );
};

export default Tag;
