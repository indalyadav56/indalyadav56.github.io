"use client";

import React, { useEffect, useRef } from "react";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { BsArrowRight } from "react-icons/bs";
import { HiDownload } from "react-icons/hi";
import animationData from "../assets/developer.json";
import Lottie from "lottie-react";
import Typed from "typed.js";
import { Button } from "./ui/button";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Intro() {
  const typedElementRef = useRef(null);
  const containerRef = useRef(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });
  
  const y = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.8]);

  useEffect(() => {
    if (typedElementRef.current) {
      const typed = new Typed(typedElementRef.current, {
        strings: [
          "Software Engineer",
          "Full Stack Developer",
          "Python Expert",
          "Golang Developer",
          "React Specialist",
          "TypeScript Developer"
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

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 100 }
    }
  };

  return (
    <section 
      id="home" 
      className="min-h-screen flex flex-col justify-center relative overflow-hidden"
      ref={containerRef}
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-grid-pattern opacity-[0.03] dark:opacity-[0.05]"></div>
        
        <motion.div 
          className="absolute top-20 -left-10 w-72 h-72 bg-purple-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"
          animate={{
            x: [0, 30, 0],
            y: [0, 50, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            repeatType: "reverse"
          }}
        />
        
        <motion.div 
          className="absolute top-40 -right-10 w-72 h-72 bg-yellow-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"
          animate={{
            x: [0, -30, 0],
            y: [0, 30, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            repeatType: "reverse"
          }}
        />
        
        <motion.div 
          className="absolute -bottom-20 left-1/3 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"
          animate={{
            x: [0, 40, 0],
            y: [0, -40, 0],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            repeatType: "reverse"
          }}
        />
      </div>

      <div className="container mx-auto px-4 md:px-6 flex flex-col md:flex-row items-center gap-8 md:gap-16">
        <motion.div 
          className="flex-1 space-y-8"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          style={{ opacity, scale }}
        >
          <div className="space-y-4">
            <motion.h1 
              className="text-4xl md:text-6xl font-bold tracking-tight"
              variants={itemVariants}
            >
              <span className="gradient-text">Hi, I&apos;m</span> Indal Kumar<span className="text-primary">.</span>
            </motion.h1>
            
            <motion.h2 
              className="text-2xl md:text-3xl font-medium text-muted-foreground"
              variants={itemVariants}
            >
              I&apos;m a <span ref={typedElementRef} className="text-primary font-semibold"></span>
            </motion.h2>
            
            <motion.p
              className="text-lg md:text-xl text-muted-foreground max-w-xl"
              variants={itemVariants}
            >
              With <span className="font-bold text-primary">5+ years</span> of experience building innovative and scalable software solutions that make a difference.
            </motion.p>
          </div>
          
          <motion.div 
            className="flex flex-col sm:flex-row gap-4"
            variants={itemVariants}
          >
            <Link href="#contact">
              <Button className="group w-full sm:w-auto animated-border bg-gradient-to-r from-primary to-purple-600 hover:from-primary/90 hover:to-purple-600/90" size="lg">
                Contact me
                <BsArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
            
            <a href="/cv.pdf" download>
              <Button variant="outline" className="w-full sm:w-auto border-primary/20 hover:border-primary/40 transition-colors" size="lg">
                Download CV
                <HiDownload className="ml-2 group-hover:translate-y-1 transition-transform" />
              </Button>
            </a>
          </motion.div>
          
          <motion.div 
            className="flex gap-4"
            variants={itemVariants}
          >
            <a 
              href="https://github.com/indalyadav56" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors transform hover:scale-110 duration-200"
            >
              <FaGithub size={24} />
            </a>
            <a 
              href="https://www.linkedin.com/in/indal-kumar/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors transform hover:scale-110 duration-200"
            >
              <FaLinkedin size={24} />
            </a>
          </motion.div>
        </motion.div>
        
        <motion.div 
          className="flex-1 flex justify-center items-center"
          initial={{ opacity: 0, scale: 0.8, rotateY: -10 }}
          animate={{ opacity: 1, scale: 1, rotateY: 0 }}
          transition={{ delay: 0.5, duration: 0.8, type: "spring" }}
          style={{ y }}
        >
          <div className="relative w-full max-w-md">
            <motion.div 
              className="absolute inset-0 bg-gradient-to-r from-primary/30 to-purple-500/30 rounded-full filter blur-3xl"
              animate={{ 
                scale: [1, 1.1, 1],
                opacity: [0.3, 0.5, 0.3]
              }}
              transition={{ 
                duration: 8, 
                repeat: Infinity,
                repeatType: "reverse" 
              }}
            />
            <motion.div
              className="relative z-10"
              animate={{ 
                rotateY: [0, 5, 0, -5, 0],
              }}
              transition={{ 
                duration: 10, 
                repeat: Infinity,
                repeatType: "loop" 
              }}
            >
              <Lottie 
                animationData={animationData} 
                className="w-full h-full"
              />
            </motion.div>
          </div>
        </motion.div>
      </div>
      
      <motion.div 
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2, duration: 0.5 }}
      >
        <motion.div 
          className="w-6 h-10 border-2 border-primary rounded-full flex justify-center p-1"
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
        >
          <motion.div 
            className="w-1 h-2 bg-primary rounded-full"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, height: [2, 4, 2] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
          />
        </motion.div>
      </motion.div>
    </section>
  );
}
