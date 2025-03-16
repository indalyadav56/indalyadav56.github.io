"use client";
import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { MdWork, MdSchool } from "react-icons/md";
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
  type: "work" | "education";
}

const experienceData: ExperienceItem[] = [
  {
    title: "Golang Developer",
    company: "Grapesberry Technology Pvt Ltd.",
    location: "Mumbai, IN",
    period: "2024 - present",
    description: "Developing scalable banking solutions using Go. Implementing best practices for code quality and performance optimization.",
    skills: ["Golang", "Docker", "Kubernetes", "CI/CD", "AWS", "System Design", "Microservices"],
    color: "#4f46e5",
    type: "work",
  },
  {
    title: "Software Engineer",
    company: "Konsulter Solutions Pvt Ltd.",
    location: "Mumbai, IN",
    period: "2021 - 2024",
    description: "Developing scalable web applications using modern technologies. Implementing best practices for code quality and performance optimization.",
    skills: ["Python", "Django", "Golang", "TypeScript", "React", "Next.js", "AWS", "Docker", "Machine Learning", "AI"],
    color: "#4f46e5",
    type: "work",
  },
  {
    title: "Full Stack Engineer",
    company: "Freelance",
    location: "Mumbai, IN",
    period: "2020 - 2021",
    description: "Developed and maintained multiple client projects from concept to deployment. Implemented responsive designs, RESTful APIs, and database integrations. Collaborated with cross-functional teams to deliver high-quality software solutions.",
    skills: ["Python", "Django", "JavaScript", "React", "SQL", "Git", "Docker", "CI/CD"],
    color: "#8b5cf6",
    type: "work",
  }
];

export default function Experience() {
  const { theme } = useTheme();
  
  return (
    <section id="experience" className="py-20 relative">
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
            <span className="text-gradient-primary">Professional Journey</span>
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full mb-6"></div>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            My career path and educational background over the past 5+ years
          </p>
        </motion.div>

        <VerticalTimeline lineColor={theme === "dark" ? "rgba(255,255,255,0.15)" : "rgba(0,0,0,0.1)"}>
          {experienceData.map((experience, index) => (
            <VerticalTimelineElement
              key={index}
              className="vertical-timeline-element"
              date={experience.period}
              iconStyle={{
                background: experience.color,
                boxShadow: `0 0 0 4px ${experience.color}40, inset 0 2px 0 rgba(0,0,0,0.08), 0 3px 0 4px rgba(0,0,0,0.05)`,
              }}
              icon={experience.type === "work" ? <MdWork /> : <MdSchool />}
            >
              <div className="flex flex-col space-y-3">
                <h3 className="text-xl font-bold">{experience.title}</h3>
                <div className="flex items-center justify-between">
                  <h4 className="text-primary font-medium">{experience.company}</h4>
                  <span className="text-sm text-muted-foreground bg-primary/10 border border-primary/30 px-2 py-1 rounded-full">{experience.location}</span>
                </div>
                <p className="text-muted-foreground">{experience.description}</p>
                
                <div className="flex flex-wrap gap-2 pt-2">
                  {experience.skills.map((skill) => (
                    <span 
                      key={skill} 
                      className="px-2 py-1 text-xs rounded-full bg-primary/10 border border-primary/30 hover:bg-primary/20 transition-colors"
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
}
