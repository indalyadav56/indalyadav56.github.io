"use client";

import React from "react";
import { skillsData } from "../constants/data";
import { useTheme } from "next-themes";
import { Tooltip, TooltipContent, TooltipTrigger } from "./ui/tooltip";
import { motion } from "framer-motion";

const Skills = () => {
  const { theme } = useTheme();

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };

  const item = {
    hidden: { y: 20, opacity: 0 },
    show: { y: 0, opacity: 1, transition: { type: "spring" } }
  };

  return (
    <section id="skills" className="py-20 px-4 md:px-0">
      <div className="container mx-auto">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4 animated-gradient-text inline-block">
            My Skills
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Technologies and tools I've worked with throughout my 5+ years of experience
          </p>
        </motion.div>

        <motion.div 
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-6 justify-items-center"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
        >
          {skillsData?.map((skill, index) => (
            <Tooltip key={index}>
              <TooltipTrigger asChild>
                <motion.div 
                  className="card-3d w-full max-w-[150px] aspect-square flex flex-col items-center justify-center p-6 rounded-xl border border-border/40 bg-card/30 backdrop-blur-sm hover:border-primary/30 transition-colors duration-300 glow"
                  variants={item}
                  whileHover={{ y: -5, transition: { duration: 0.2 } }}
                >
                  <div className="relative w-12 h-12 mb-4 flex items-center justify-center">
                    <div className="absolute inset-0 bg-primary/5 rounded-full filter blur-md opacity-70"></div>
                    <img 
                      src={skill.img} 
                      alt={skill.title} 
                      className="w-10 h-10 object-contain relative z-10" 
                    />
                  </div>
                  <h3 className="text-sm font-medium text-center">{skill.title}</h3>
                </motion.div>
              </TooltipTrigger>
              <TooltipContent>
                <p>{skill.title}</p>
              </TooltipContent>
            </Tooltip>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
