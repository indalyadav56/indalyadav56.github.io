"use client";

import React, { useState } from "react";
import { projectsData, ProjectData } from "../constants/data";
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
import { FiGithub, FiExternalLink } from "react-icons/fi";

const Projects = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const item = {
    hidden: { y: 20, opacity: 0 },
    show: { y: 0, opacity: 1, transition: { type: "spring", stiffness: 50 } }
  };

  return (
    <section id="projects" className="py-20 px-4 md:px-0">
      <div className="container mx-auto">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4 animated-gradient-text inline-block">
            Featured Projects
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A collection of projects I've built throughout my career
          </p>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
        >
          {projectsData?.map((project: ProjectData, index) => (
            <motion.div
              key={project.id}
              variants={item}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              className="h-full"
            >
              <Card className="overflow-hidden h-full card-3d border border-border/40 bg-card/30 backdrop-blur-sm hover:border-primary/30 transition-all duration-300">
                <div className="relative overflow-hidden group">
                  <div className="aspect-video overflow-hidden">
                    <motion.img 
                      src={project.img} 
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-500 ease-out"
                      whileHover={{ scale: 1.05 }}
                    />
                  </div>
                  
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 flex items-center justify-center gap-4 transition-opacity duration-300">
                    {project.sourceCode && (
                      <Link href={project.sourceCode} target="_blank" rel="noopener noreferrer">
                        <motion.button 
                          className="p-3 rounded-full bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white transition-colors"
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <FiGithub size={20} />
                        </motion.button>
                      </Link>
                    )}
                    {project.liveDemo && (
                      <Link href={project.liveDemo} target="_blank" rel="noopener noreferrer">
                        <motion.button 
                          className="p-3 rounded-full bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white transition-colors"
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <FiExternalLink size={20} />
                        </motion.button>
                      </Link>
                    )}
                  </div>
                </div>

                <CardHeader className="pb-2">
                  <h3 className="text-xl font-bold">{project.title}</h3>
                </CardHeader>
                
                <CardContent className="pb-4">
                  <p className="text-muted-foreground text-sm">{project.description}</p>
                </CardContent>
                
                <CardFooter className="flex flex-col items-start gap-4 pt-0">
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span 
                        key={tag} 
                        className="px-2 py-1 text-xs rounded-full bg-primary/10 text-primary border border-primary/20"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
