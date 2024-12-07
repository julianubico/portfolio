import React from "react";
import Project from "./Project.tsx";

function Projects() {
  return (
    <div className="mx-5 flex flex-col gap-y-5">
      <span className="font-mono text-xl italic opacity-70">
        cool stuff i've worked on
      </span>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <Project
          name="Project 1"
          image="/assets/ss.png"
          description="A cool project"
          technologies={["React", "TypeScript"]}
        />
        <Project
          name="Project 2"
          image="/assets/ss.png"
          description="A cool project"
          technologies={["React", "TypeScript"]}
        />
        <Project
          name="Project 3"
          image="/assets/ss.png"
          description="A cool project"
          technologies={["React", "TypeScript"]}
        />
      </div>
    </div>
  );
}

export default Projects;
