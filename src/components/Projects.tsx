"use client";

import React from "react";
import { projectsData } from "../constants/data";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
} from "./ui/card";
import { Button } from "./ui/button";
import Link from "next/link";
import { motion } from "framer-motion";

const Projects = () => {
  return (
    <div id="projects" className="flex flex-col w-full">
      <h1 className="lg:text-5xl md:text-4xl text-2xl font-semibold text-center my-4">
        Projects
      </h1>
      <div className="flex flex-wrap justify-evenly gap-y-4">
        {projectsData?.map((item, index) => (
          <Card key={item.id} className="max-w-md hover:ring-2">
            <CardContent className="p-0">
              <img
                src={item.img}
                className="p-0 rounded-tr-md rounded-tl-md"
                width={"100%"}
                height={220}
              />
              <CardHeader>{item.title}</CardHeader>
              <CardDescription className="p-8">
                {item.description}
              </CardDescription>
              <CardFooter>
                <div className="flex flex-wrap">
                  {item.tags.map((tag) => (
                    <Button
                      key={tag}
                      variant="outline"
                      size="sm"
                      className="m-1"
                    >
                      {tag}
                    </Button>
                  ))}
                </div>
              </CardFooter>
              <CardFooter className="flex flex-col justify-center">
                <Link href={item.sourceCode} target="_blank" className="w-full">
                  <Button className="w-full">GitHub</Button>
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
