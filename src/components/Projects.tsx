"use client";

import React, { useState } from "react";
import { projectsData, ProjectData } from "../constants/data";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "./ui/card";
import Link from "next/link";
import { motion } from "framer-motion";
import { FiGithub, FiExternalLink } from "react-icons/fi";
import { Button } from "./ui/button";

export default function Projects() {
  const [filter, setFilter] = useState<string>("all");
  
  // Extract unique categories from projects
  const categories = ["all", ...Array.from(new Set(projectsData.flatMap(project => project.tags)))];
  
  // Filter projects based on selected category
  const filteredProjects = filter === "all" 
    ? projectsData 
    : projectsData.filter(project => project.tags.includes(filter));

  return (
    <section id="projects" className="py-20 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-background/50 to-background z-0"></div>
      
      <div className="container mx-auto relative z-10">
        {/* Section header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="text-gradient-primary">Featured Projects</span>
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full mb-6"></div>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            A showcase of my best work and contributions over the past 5 years
          </p>
        </motion.div>
        
        {/* Filter buttons */}
        <motion.div 
          className="flex flex-wrap justify-center gap-3 mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {categories.map((category, index) => (
            <Button
              key={category}
              variant={filter === category ? "default" : "outline"}
              size="sm"
              onClick={() => setFilter(category)}
              className={`capitalize ${filter === category ? 'bg-primary' : 'hover:border-primary/40'}`}
            >
              {category}
            </Button>
          ))}
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          layout
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          {filteredProjects.map((project: ProjectData, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              layout
              className="h-full"
            >
              <Card className="overflow-hidden h-full glass-effect border-primary/10 hover:border-primary/30 transition-all duration-300 card-3d">
                <div className="relative overflow-hidden group">
                  <div className="aspect-video overflow-hidden">
                    <motion.img 
                      src={project.img} 
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-500 ease-out"
                      whileHover={{ scale: 1.05 }}
                    />
                  </div>
                  
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 flex items-center justify-center gap-4 transition-all duration-300">
                    {project.sourceCode && (
                      <Link href={project.sourceCode} target="_blank" rel="noopener noreferrer">
                        <motion.button 
                          className="p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors backdrop-blur-sm border border-white/20"
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.95 }}
                          aria-label="View Source Code"
                        >
                          <FiGithub size={20} />
                        </motion.button>
                      </Link>
                    )}
                    {project.liveDemo && (
                      <Link href={project.liveDemo} target="_blank" rel="noopener noreferrer">
                        <motion.button 
                          className="p-3 rounded-full bg-primary/80 hover:bg-primary text-white transition-colors backdrop-blur-sm"
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.95 }}
                          aria-label="View Live Demo"
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
                      <Button 
                        key={tag} 
                        variant="ghost"
                        size="sm"
                        className="px-2 py-1 h-auto text-xs rounded-full bg-primary/10 text-primary border border-primary/20 hover:bg-primary/20 transition-colors"
                        onClick={() => setFilter(tag)}
                      >
                        {tag}
                      </Button>
                    ))}
                  </div>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </motion.div>
        
        {filteredProjects.length === 0 && (
          <motion.div 
            className="text-center py-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-muted-foreground">No projects found with the selected filter.</p>
            <Button 
              variant="outline" 
              className="mt-4"
              onClick={() => setFilter("all")}
            >
              Show All Projects
            </Button>
          </motion.div>
        )}
      </div>
    </section>
  );
}
