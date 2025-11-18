import React from "react";
import ProjectCard from "./ProjectCard";

function Projects({ projects }) {
  return (
    <div className="px-2 mt-7 pb-10 flex flex-col gap-3">
      <h1 className="capitalize mt-10 sm:text-lg md:text-xl lg:text-2xl text-gray-700">
        Projects
      </h1>

      <p className="text-4xl sm:text-5xl font-medium">
        Built with passion,  
        <br />engineered with precision.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-3">
        {projects.map((item, idx) => (
          <ProjectCard key={idx} project={item} />
        ))}
      </div>
    </div>
  );
}

export default Projects;
