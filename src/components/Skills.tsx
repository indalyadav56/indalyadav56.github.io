import React from "react";
import { skillsData } from "../constants/data";
import "react-tooltip/dist/react-tooltip.css";
import { Button } from "./ui/button";
import { useTheme } from "next-themes";
import { Tooltip, TooltipContent, TooltipTrigger } from "./ui/tooltip";
import { Card, CardContent, CardFooter } from "./ui/card";

const Skills = () => {
  const { theme } = useTheme();
  return (
    <div id="skills" className="my-16 mx-auto">
      <p className="lg:text-5xl md:text-4xl text-2xl font-semibold text-center my-8">
        My Skills
      </p>

      <div className="mx-auto flex flex-row flex-wrap justify-center gap-4">
        {skillsData?.map((item, index) => (
          <Tooltip key={index}>
            <TooltipTrigger asChild>
              <Card className=" dark:text-white text-center h-52 w-40">
                <img src={item.img} className="p-12" />
                <p className="font-medium text-center ">{item.title}</p>
              </Card>
            </TooltipTrigger>
            <TooltipContent>{item.title}</TooltipContent>
          </Tooltip>
        ))}
      </div>
    </div>
  );
};

export default Skills;
