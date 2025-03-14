"use client";

import React from "react";
import { motion } from "framer-motion";
import { FaReact, FaNodeJs, FaPython, FaAws, FaDocker, FaGithub, FaCode } from "react-icons/fa";
import { SiTypescript, SiJavascript, SiNextdotjs, SiTailwindcss, SiMongodb, SiPostgresql, SiRedis, SiKubernetes, SiGraphql } from "react-icons/si";

interface SkillCardProps {
  icon: React.ReactNode;
  name: string;
  level: number;
  color: string;
}

const SkillCard = ({ icon, name, level, color }: SkillCardProps) => {
  return (
    <motion.div 
      className="glass-effect p-4 rounded-xl border border-primary/20 hover:border-primary/40 transition-all duration-300 card-3d"
      whileHover={{ y: -5 }}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex items-center gap-4">
        <div className={`text-2xl ${color}`}>
          {icon}
        </div>
        <div className="flex-1">
          <h3 className="font-medium">{name}</h3>
          <div className="w-full bg-secondary/50 rounded-full h-2.5 mt-2">
            <div 
              className="bg-primary h-2.5 rounded-full"
              style={{ width: `${level}%` }}
            ></div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

interface SkillCategoryProps {
  title: string;
  skills: SkillCardProps[];
  delay: number;
}

const SkillCategory = ({ title, skills, delay }: SkillCategoryProps) => {
  return (
    <motion.div
      className="space-y-4"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
    >
      <h3 className="text-xl font-semibold mb-4">{title}</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {skills.map((skill) => (
          <SkillCard key={`${title}-${skill.name}`} {...skill} />
        ))}
      </div>
    </motion.div>
  );
};

export default function Skills() {
  const frontendSkills: SkillCardProps[] = [
    { icon: <FaReact />, name: "React", level: 95, color: "text-blue-500" },
    { icon: <SiNextdotjs />, name: "Next.js", level: 90, color: "text-gray-800 dark:text-gray-200" },
    { icon: <SiTypescript />, name: "TypeScript", level: 85, color: "text-blue-600" },
    { icon: <SiJavascript />, name: "JavaScript", level: 95, color: "text-yellow-500" },
    { icon: <SiTailwindcss />, name: "Tailwind CSS", level: 90, color: "text-cyan-500" },
  ];

  const backendSkills: SkillCardProps[] = [
    { icon: <FaCode />, name: "Golang", level: 90, color: "text-blue-400" },
    { icon: <FaPython />, name: "Python", level: 90, color: "text-blue-500" },
    { icon: <FaNodeJs />, name: "Node.js", level: 70, color: "text-green-500" },
    { icon: <SiGraphql />, name: "GraphQL", level: 80, color: "text-pink-600" },
  ];

  const databaseSkills: SkillCardProps[] = [
    { icon: <SiPostgresql />, name: "PostgreSQL", level: 90, color: "text-blue-600" },
    { icon: <SiMongodb />, name: "MongoDB", level: 85, color: "text-green-600" },
    { icon: <SiRedis />, name: "Redis", level: 90, color: "text-red-500" },
  ];

  const devOpsSkills: SkillCardProps[] = [
    { icon: <FaDocker />, name: "Docker", level: 85, color: "text-blue-500" },
    { icon: <FaAws />, name: "AWS", level: 80, color: "text-yellow-600" },
    { icon: <SiKubernetes />, name: "Kubernetes", level: 70, color: "text-blue-600" },
    { icon: <FaGithub />, name: "Git/GitHub", level: 90, color: "text-gray-800 dark:text-gray-200" },
  ];

  return (
    <section id="skills" className="py-20 relative">
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
            <span className="text-gradient-primary">My Skills</span>
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full mb-6"></div>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            A comprehensive set of technical skills I've acquired over 5+ years in the industry
          </p>
        </motion.div>

        <div className="space-y-12">
          <SkillCategory title="Frontend Development" skills={frontendSkills} delay={0.1} />
          <SkillCategory title="Backend Development" skills={backendSkills} delay={0.2} />
          <SkillCategory title="Database Technologies" skills={databaseSkills} delay={0.3} />
          <SkillCategory title="DevOps & Cloud" skills={devOpsSkills} delay={0.4} />
        </div>
      </div>
    </section>
  );
}
