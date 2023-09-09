import React from "react";
import Ripples from "react-ripples";
import { skillsData } from "../../constants/data";
import { Tooltip } from "react-tooltip";
import "react-tooltip/dist/react-tooltip.css";

const Skills = () => {
  return (
    <div>
      <h1 className="lg:text-5xl md:text-4xl text-3xl text-center">Skills</h1>

      <div className="max-w-7xl mx-auto flex flex-row flex-wrap justify-center gap-4 lg:gap-10 my-4">
        {skillsData?.map((item, index) => (
          <Ripples key={index}>
            <div className="rounded-full w-28 h-28">
              <img
                className="rounded-lg"
                src={item.img}
                alt=""
                height="100%"
                width="100%"
              />
            </div>
          </Ripples>
        ))}
      </div>
    </div>
  );
};

export default Skills;
