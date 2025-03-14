"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { TooltipProvider } from "@/components/ui/tooltip";
import Hero from "../components/Hero";
import About from "../components/About";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import Experience from "../components/Experience";
import Contact from "../components/Contact";

export default function Home() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll();
  
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0.8]);
  
  return (
    <main ref={containerRef} className="relative">
      <TooltipProvider>
        <motion.div style={{ opacity }} className="w-full">
          <Hero />
        </motion.div>
        
        <div className="section-container">
          <About />
          <Skills />
          <Projects />
          <Experience />
          <Contact />
        </div>
      </TooltipProvider>
    </main>
  );
}
