import "../assets/css/dropdown.css";

import React, { useState } from "react";

export function Dropdown({ list, text, title }) {
  const [open, setOpen] = useState(false);
  function toggleOpen() {
    setOpen(!open);
  }

  return (
    <div className="select">
      <div className="label" onClick={toggleOpen}>
        {title}
        <img
          className={open ? "arrow open" : "arrow"}
          src="/arrow.svg"
          alt="arrow"
        />
      </div>
      {list === undefined ? (
        <div className={open ? "content open" : "not-open"}>{text}</div>
      ) : (
        <ul className={open ? "list open" : "list"}>
          {list.map((element) => (
            <li key={element} className="element">
              {element}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
