import React from "react";
import { projectsData } from "../../constants/data";
import Image from "next/image";

const Projects = () => {
  return (
    <div id="Projects" className="Projects max-w-7xl mx-auto ">
      <h1 className="text-5xl text-center my-8">Projects</h1>

      {projectsData?.map((item, index) => (
        <div
          key={item.id}
          className={`lg:flex my-4 ${
            (index + 1) % 2 === 0 && "flex-row-reverse"
          }`}
        >
          <div className="flex-1">
            <Image
              className="rounded-lg"
              src={item.img}
              alt={item.img}
              height={500}
              width={500}
            />
          </div>
          <div className="flex-1 my-8 flex flex-col">
            <h1 className=" ">{item.title}</h1>
            <p>{item.description}</p>
            <div className="my-4 flex gap-4">
              <a
                className="p-4 bg-amber-900 radius rounded-lg"
                href={item.sourceCode}
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </a>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Projects;
