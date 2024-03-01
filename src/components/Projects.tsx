"use client";

import React from "react";
import { projectsData } from "../constants/data";
import { Card, CardContent, CardFooter } from "./ui/card";
import { Button } from "./ui/button";
import Link from "next/link";
import { motion } from "framer-motion";

const Projects = () => {
  return (
    <div id="projects" className="flex flex-col w-full">
      <h1 className="lg:text-5xl md:text-4xl text-2xl font-semibold text-center my-4">
        Projects
      </h1>
      <div className="flex flex-wrap justify-evenly">
        {projectsData?.map((item, index) => (
          <Card key={item.id} className="max-w-sm hover:translate-y-6">
            <CardContent className="p-0">
              <img
                src={item.img}
                className="p-0 rounded-tr-md rounded-tl-md"
                width={"100%"}
                height={220}
              />
              <CardFooter className="flex flex-col mt-4 justify-center">
                <p>{item.description}</p>
                <div className="flex flex-wrap">
                  {item.tags.map((tag) => (
                    <Button
                      key={tag}
                      variant="outline"
                      size="sm"
                      className="m-2"
                    >
                      {tag}
                    </Button>
                  ))}
                </div>
                <Link href={item.sourceCode} target="_blank">
                  <Button className="w-32 h-12">GitHub</Button>
                </Link>
              </CardFooter>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Projects;
