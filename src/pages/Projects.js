import React from "react";

import { projects } from "./../helpers/projectList";

import Project from "../components/Project/Project";

export default function Projects() {
  return (
    <main className="section">
      <div className="container">
        <h2 className="title-1">Projects</h2>
        <ul className="projects">
          {projects.map((project) => {
            return <Project key={project.id} img={project.img} title={project.title} />;
          })}
        </ul>
      </div>
    </main>
  );
}
