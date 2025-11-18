import React from "react";
import { Github } from "lucide-react";

function ProjectCard({ project }) {
  const { title, techStack, description, features, year, github } = project;

  return (
    <div className="w-full border rounded-xl border-gray-200 shadow-sm hover:shadow-md transition-shadow duration-300">
      
      {/* Image Section */}
      <div
        className="w-full h-60 flex flex-col bg-[#F1F1F1] border-gray-200 rounded-t-lg items-center justify-center 
          bg-[url('https://www.artfolio.tech/placeholder.svg')]
          bg-cover bg-center bg-no-repeat"
      ></div>

      {/* Content Section */}
      <div className="px-4">
        {/* Title + Year */}
        <h1 className="capitalize mt-3 text-gray-600 text-md">{year}</h1>

        <div className="flex justify-between sm:flex-row flex-col">
          <h1 className="capitalize sm:text-xl text-lg font-semibold sm:mb-2">
            {title}
          </h1>
          <a
            href={github}
            target="_blank"
            rel="noopener noreferrer"
            className="italic text-sm font-normal text-gray-700 flex items-center gap-1 hover:text-black"
          >
            <Github size={16} /> GitHub
          </a>
        </div>

        {/* Description */}
        <p className="text-gray-700 mt-1 text-sm">{description}</p>

        {/* Features */}
        <div className="px-4 mt-2 border-b border-gray-200">
          {features.map((item, idx) => (
            <li className="text-md my-1 text-gray-600" key={idx}>
              {item}
            </li>
          ))}
        </div>

        {/* Tech Stack */}
        <div className="flex flex-row flex-wrap gap-1 my-3">
          {techStack.map((item, idx) => (
            <h3
              key={idx}
              className="sm:py-1 sm:px-3 py-1 px-2 text-gray-700 bg-[#D8D8D8] hover:bg-gray-200 text-xs font-medium rounded-lg transition-colors duration-200"
            >
              {item}
            </h3>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
