"use client";

import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { HiDownload, HiArrowRight } from "react-icons/hi";
import Typed from "typed.js";
import { Button } from "./ui/button";
import { FaGithub, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";

export default function Hero() {
  const typedElementRef = useRef<HTMLSpanElement>(null);
  
  useEffect(() => {
    if (typedElementRef.current) {
      const typed = new Typed(typedElementRef.current, {
        strings: [
          "Senior Software Engineer",
          "Full Stack Engineer",
          "Python Expert",
          "Golang Developer",
          "Senior Backend Engineer"
        ],
        typeSpeed: 50,
        backSpeed: 30,
        backDelay: 1500,
        loop: true,
        smartBackspace: true
      });

      return () => {
        typed.destroy();
      };
    }
  }, []);

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden py-20 md:py-0">
      <div className="absolute inset-0 bg-gradient-to-b from-background/50 to-background z-0"></div>
      
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden z-0">
        <div className="absolute top-1/4 -left-20 w-72 h-72 bg-primary/10 rounded-full filter blur-3xl opacity-50 animate-blob"></div>
        <div className="absolute bottom-1/4 -right-20 w-72 h-72 bg-secondary/20 rounded-full filter blur-3xl opacity-50 animate-blob animation-delay-2000"></div>
        <div className="absolute top-3/4 left-1/3 w-72 h-72 bg-primary/15 rounded-full filter blur-3xl opacity-50 animate-blob animation-delay-4000"></div>
      </div>
      
      <div className="container mx-auto px-4 md:px-6 flex flex-col md:flex-row items-center gap-12 md:gap-16 z-10">
        <motion.div 
          className="flex-1 space-y-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="space-y-5">
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="inline-block px-4 py-1.5 rounded-full bg-primary/20 border border-primary/30 text-primary font-medium text-sm">
              5+ Years of Professional Experience
            </motion.div>
            
            <motion.h1 
              className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
            >
              <span className="font-montserrat font-extrabold">Hi, I&apos;m </span>
              <span className="text-gradient-primary">Indal Kumar</span>
            </motion.h1>
            
            <motion.h2 
              className="text-2xl md:text-3xl font-medium text-muted-foreground"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.5 }}
            >
              I&apos;m a <span ref={typedElementRef} className="text-primary font-semibold"></span>
            </motion.h2>
            
            <motion.p
              className="text-lg md:text-xl text-muted-foreground max-w-xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.5 }}
            >
              Building innovative and scalable software solutions that make a difference. Specialized in modern web technologies and cloud architecture.
            </motion.p>
          </div>
          
          <motion.div 
            className="flex flex-col sm:flex-row gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.5 }}
          >
            <Link href="#contact">
              <Button className="group w-full sm:w-auto btn-gradient text-white" size="lg">
                Contact me
                <HiArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
            
            <a href="/indal-resume.pdf" download>
              <Button variant="outline" className="w-full sm:w-auto border-primary/20 hover:border-primary/40 transition-colors" size="lg">
                Download CV
                <HiDownload className="ml-2 group-hover:translate-y-1 transition-transform" />
              </Button>
            </a>
          </motion.div>
          
          <motion.div 
            className="flex gap-5"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.5 }}
          >
            <a 
              href="https://github.com/indalyadav56" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors transform hover:scale-110 duration-200"
              aria-label="GitHub Profile"
            >
              <FaGithub size={24} />
            </a>
            <a 
              href="https://www.linkedin.com/in/indal-kumar/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors transform hover:scale-110 duration-200"
              aria-label="LinkedIn Profile"
            >
              <FaLinkedin size={24} />
            </a>
            <a 
              href="https://twitter.com/indalyadav56" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors transform hover:scale-110 duration-200"
              aria-label="Twitter Profile"
            >
              <FaTwitter size={24} />
            </a>
            <a 
              href="https://instagram.com/indalyadav56" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors transform hover:scale-110 duration-200"
              aria-label="Instagram Profile"
            >
              <FaInstagram size={24} />
            </a>
          </motion.div>
        </motion.div>
        
        <motion.div 
          className="flex-1 flex justify-center items-center"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5, duration: 0.8, type: "spring" }}
        >
          <div className="relative w-full max-w-md">
            <motion.div 
              className="glass-effect border border-primary/20 rounded-xl overflow-hidden shadow-xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.5 }}
            >
              {/* Code Editor Header */}
              <div className="bg-card/80 px-4 py-2 flex items-center justify-between border-b border-primary/10">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                </div>
                <div className="text-xs font-mono text-muted-foreground">index.tsx</div>
              </div>
              
              {/* Code Content */}
              <div className="p-4 font-mono text-sm">
                <div className="flex">
                  <span className="text-muted-foreground mr-4">1</span>
                  <span><span className="text-blue-400">const</span> <span className="text-green-400">Developer</span> <span className="text-blue-400">=</span> <span className="text-orange-400">()</span> <span className="text-blue-400">=&gt;</span> <span className="text-orange-400">{'{'}</span></span>
                </div>
                <div className="flex">
                  <span className="text-muted-foreground mr-4">2</span>
                  <span className="ml-4"><span className="text-blue-400">return</span> <span className="text-orange-400">{'('}</span></span>
                </div>
                <div className="flex">
                  <span className="text-muted-foreground mr-4">3</span>
                  <span className="ml-8"><span className="text-purple-400">{'<'}</span><span className="text-yellow-400">Profile</span><span className="text-purple-400">{'>'}</span></span>
                </div>
                <div className="flex">
                  <span className="text-muted-foreground mr-4">4</span>
                  <span className="ml-12"><span className="text-red-400">name</span><span className="text-white">=</span><span className="text-green-400">&quot;Indal Kumar&quot;</span></span>
                </div>
                <div className="flex">
                  <span className="text-muted-foreground mr-4">5</span>
                  <span className="ml-12"><span className="text-red-400">skills</span><span className="text-white">=</span><span className="text-orange-400">{'['}</span><span className="text-green-400">&quot;Golang&quot;</span><span className="text-white">,</span> <span className="text-green-400">&quot;Python&quot;</span><span className="text-white">,</span> <span className="text-green-400">&quot;TypeScript&quot;</span><span className="text-orange-400">{']'}</span></span>
                </div>
                <div className="flex">
                  <span className="text-muted-foreground mr-4">6</span>
                  <span className="ml-12"><span className="text-red-400">experience</span><span className="text-white">=</span><span className="text-green-400">&quot;5+ years&quot;</span></span>
                </div>
                <div className="flex">
                  <span className="text-muted-foreground mr-4">7</span>
                  <span className="ml-8"><span className="text-purple-400">{'</'}</span><span className="text-yellow-400">Profile</span><span className="text-purple-400">{'>'}</span></span>
                </div>
                <div className="flex">
                  <span className="text-muted-foreground mr-4">8</span>
                  <span className="ml-4"><span className="text-orange-400">{')'}</span></span>
                </div>
                <div className="flex">
                  <span className="text-muted-foreground mr-4">9</span>
                  <span><span className="text-orange-400">{'}'}</span></span>
                </div>
                <motion.div 
                  className="absolute top-[4.5rem] left-4 w-2 h-4 bg-white/70"
                  animate={{ opacity: [1, 0, 1] }}
                  transition={{ repeat: Infinity, duration: 1 }}
                />
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
      <motion.div
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5, duration: 0.5 }}
      >
        <div className="w-6 h-10 border-2 border-primary/50 rounded-full flex justify-center pt-1">
          <motion.div 
            className="w-1.5 h-2.5 bg-primary rounded-full"
            animate={{ y: [0, 6, 0] }}
            transition={{ 
              repeat: Infinity, 
              duration: 1.5,
              ease: "easeInOut"
            }}
          />
        </div>
        <p className="text-xs text-muted-foreground mt-2">Scroll down</p>
      </motion.div>
    </section>
  );
}
