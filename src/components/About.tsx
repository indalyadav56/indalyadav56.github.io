"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Button } from "./ui/button";
import { HiArrowRight } from "react-icons/hi";

export default function About() {
  return (
    <section id="about" className="py-20 relative">
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
            <span className="text-gradient-primary">About Me</span>
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full mb-6"></div>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            A passionate software engineer with a focus on creating elegant, efficient, and user-friendly solutions.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Image column */}
          <motion.div 
            className="relative"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-primary/30 to-purple-500/30 rounded-xl blur-xl opacity-70"></div>
              <div className="glass-effect p-3 rounded-xl border border-primary/20 shadow-xl relative z-10 overflow-hidden">
                <div className="aspect-square relative rounded-lg overflow-hidden">
                  <Image 
                    src="/indal.png" 
                    alt="Indal Kumar" 
                    width={500}
                    height={500}
                    className="object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </div>
              
              {/* Experience badge */}
              <motion.div 
                className="absolute -right-5 -bottom-5 glass-effect px-4 py-3 rounded-lg shadow-lg border border-primary/20 z-50"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3, duration: 0.5 }}
              >
                <div className="text-center">
                  <span className="block text-4xl font-bold text-gradient-primary">5+</span>
                  <span className="text-sm font-medium text-muted-foreground">Years Experience</span>
                </div>
              </motion.div>
            </div>
          </motion.div>
          
          {/* Content column */}
          <motion.div 
            className="space-y-6"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <h3 className="text-2xl md:text-3xl font-bold">
              Senior Software Engineer with expertise in full-stack development
            </h3>
            
            <p className="text-muted-foreground">
              I'm Indal Kumar, a passionate software engineer with over 5 years of professional experience in building scalable web applications and services. I specialize in modern JavaScript frameworks, Python, and cloud technologies.
            </p>
            
            <p className="text-muted-foreground">
              Throughout my career, I've worked on diverse projects ranging from e-commerce platforms to enterprise solutions, focusing on delivering high-quality code that solves real-world problems. I'm dedicated to continuous learning and staying updated with the latest industry trends.
            </p>
            
            <div className="grid grid-cols-2 gap-4 mt-6">
              <div className="glass-effect p-4 rounded-lg border border-primary/20">
                <h4 className="font-bold mb-2">Education</h4>
                <p className="text-sm text-muted-foreground">B.Tech in Computer Science</p>
              </div>
              
              <div className="glass-effect p-4 rounded-lg border border-primary/20">
                <h4 className="font-bold mb-2">Location</h4>
                <p className="text-sm text-muted-foreground">Bengaluru, India</p>
              </div>
            </div>
            
            <Button className="group mt-4" variant="outline">
              View Resume
              <HiArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
