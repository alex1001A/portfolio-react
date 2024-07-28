import React from "react";

import './project.css'

export default function Project({img, title}) {
  return (
    <li className="project">
      <a href="./project-page.html">
        <img src={img} alt="Project img" className="project__img" />
        <h3 className="project__title">{title}</h3>
      </a>
    </li>
  );
}
