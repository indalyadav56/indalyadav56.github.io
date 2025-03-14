"use client";
import React, { useEffect } from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { MdWork } from "react-icons/md";
import { useTheme } from "next-themes";
import { motion } from "framer-motion";

interface ExperienceItem {
  title: string;
  company: string;
  location: string;
  period: string;
  description: string;
  skills: string[];
  color: string;
}

const experienceData: ExperienceItem[] = [
  {
    title: "Software Engineer",
    company: "Tech Innovations",
    location: "Mumbai, IN",
    period: "2021 - present",
    description: "Software engineer with expertise in Python (Django), Golang, Javascript (Typescript, React, Next.js), NoSQL & SQL, and cloud platforms (AWS). Adept at building robust and scalable applications.",
    skills: ["Python", "Django", "Golang", "TypeScript", "React", "Next.js", "AWS"],
    color: "#4f46e5",
  },
  {
    title: "Full Stack Engineer",
    company: "Web Solutions",
    location: "Mumbai, IN",
    period: "2019 - 2021",
    description: "Full-stack engineer building web applications. Proficient in Python, Django (backend), JavaScript, and React (frontend). Handles the entire development lifecycle, from design to deployment.",
    skills: ["Python", "Django", "JavaScript", "React", "SQL"],
    color: "#8b5cf6",
  },
];

const Experience = () => {
  const { theme } = useTheme();
  
  return (
    <section id="experience" className="py-20 px-4 md:px-0">
      <div className="container mx-auto">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4 animated-gradient-text inline-block">
            Work Experience
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            My professional journey and career highlights
          </p>
        </motion.div>

        <VerticalTimeline lineColor={theme === "dark" ? "rgba(255,255,255,0.1)" : "rgba(0,0,0,0.1)"}>
          {experienceData.map((experience, index) => (
            <VerticalTimelineElement
              key={index}
              className="vertical-timeline-element"
              contentStyle={{
                background: theme === "dark" ? "rgba(255,255,255,0.05)" : "rgba(255,255,255,0.9)",
                boxShadow: theme === "dark" ? "0 4px 20px rgba(0,0,0,0.3)" : "0 4px 20px rgba(0,0,0,0.1)",
                border: theme === "dark" ? "1px solid rgba(255,255,255,0.1)" : "1px solid rgba(0,0,0,0.05)",
                borderRadius: "12px",
                padding: "2rem",
              }}
              contentArrowStyle={{
                borderRight: theme === "dark" ? "7px solid rgba(255,255,255,0.05)" : "7px solid rgba(255,255,255,0.9)",
              }}
              date={experience.period}
              dateClassName={theme === "dark" ? "text-gray-300" : "text-gray-600"}
              iconStyle={{
                background: experience.color,
                boxShadow: `0 0 0 4px ${experience.color}40, inset 0 2px 0 rgba(0,0,0,0.08), 0 3px 0 4px rgba(0,0,0,0.05)`,
              }}
              icon={<MdWork />}
            >
              <div className="flex flex-col space-y-3">
                <h3 className="text-xl font-bold">{experience.title}</h3>
                <h4 className="text-primary font-medium">{experience.company}</h4>
                <p className="text-sm text-muted-foreground">{experience.location}</p>
                <p className="text-muted-foreground">{experience.description}</p>
                
                <div className="flex flex-wrap gap-2 pt-2">
                  {experience.skills.map((skill) => (
                    <span 
                      key={skill} 
                      className="px-2 py-1 text-xs rounded-full bg-primary/10 text-primary border border-primary/20"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </VerticalTimelineElement>
          ))}
        </VerticalTimeline>
      </div>
    </section>
  );
};

export default Experience;
