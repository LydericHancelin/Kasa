import "../assets/css/dropdown.css";

import React, { useState } from "react";

import classNames from "classnames";

export function Dropdown({ list, text, title }) {
  const [open, setOpen] = useState(false);
  function toggleOpen() {
    setOpen(!open);
  }
  const contentClassNames = classNames("content", { open });
  const arrowClassNames = classNames("arrow", { open });
  const listClassNames = classNames("list", { open });

  return (
    <div className="select">
      <div className="label" onClick={toggleOpen}>
        {title}
        <img className={arrowClassNames} src="/arrow.svg" alt="arrow" />
      </div>
      {list === undefined ? (
        <div className={contentClassNames}>{text}</div>
      ) : (
        <ul className={listClassNames}>
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
