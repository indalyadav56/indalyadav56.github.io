"use client";

import Projects from "@/components/Projects";
import ContactForm from "@/components/ContactMe";
import AboutMe from "@/components/AboutMe";
import Experience from "@/components/Experience";
import Skills from "@/components/Skills";
import Intro from "@/components/Intro";
import { TooltipProvider } from "@/components/ui/tooltip";

export default function Home() {
  return (
    <main id="Home" className="flex flex-col w-[90%] mx-auto ">
      <TooltipProvider>
      <Intro />
      <AboutMe />
      <Skills />
      <Projects />
      <Experience />
      <ContactForm />
      </TooltipProvider>
    </main>
  );
}
