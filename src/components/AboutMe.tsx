"use client";

import React from "react";
import { Card } from "./ui/card";
import { motion } from "framer-motion";
import { FiGithub, FiLinkedin, FiTwitter, FiMail } from "react-icons/fi";
import Link from "next/link";

const AboutMe = () => {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  const socialLinks = [
    { icon: <FiGithub size={20} />, url: "https://github.com/indalyadav56", label: "GitHub" },
    { icon: <FiLinkedin size={20} />, url: "https://linkedin.com/in/indalyadav56", label: "LinkedIn" },
    { icon: <FiTwitter size={20} />, url: "https://twitter.com/indalyadav56", label: "Twitter" },
    { icon: <FiMail size={20} />, url: "mailto:indalyadav56@gmail.com", label: "Email" },
  ];

  return (
    <section id="about" className="py-20 px-4 md:px-0">
      <div className="container mx-auto">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4 animated-gradient-text inline-block">
            About Me
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Get to know more about me and my journey
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <motion.div 
            className="lg:col-span-4 relative"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
          >
            <div className="relative overflow-hidden rounded-2xl group">
              <div className="absolute -inset-1 bg-gradient-to-r from-primary/50 to-purple-600/50 rounded-2xl blur-md opacity-70 group-hover:opacity-100 transition duration-500"></div>
              <div className="relative overflow-hidden rounded-xl">
                <motion.img
                  src="https://avatars.githubusercontent.com/u/73450527?v=4"
                  alt="Indal Yadav"
                  className="w-full h-auto rounded-xl transform group-hover:scale-105 transition duration-500"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                />
              </div>
            </div>

            <motion.div 
              className="flex justify-center mt-6 space-x-4"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.3, staggerChildren: 0.1 }}
              viewport={{ once: true }}
            >
              {socialLinks.map((link, index) => (
                <motion.div 
                  key={index}
                  whileHover={{ y: -5 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link 
                    href={link.url} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="p-3 rounded-full bg-card/50 backdrop-blur-sm hover:bg-primary/10 text-primary border border-border/40 hover:border-primary/30 transition-colors flex items-center justify-center"
                    aria-label={link.label}
                  >
                    {link.icon}
                  </Link>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          <motion.div 
            className="lg:col-span-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
          >
            <Card className="p-8 rounded-xl border border-border/40 bg-card/30 backdrop-blur-sm hover:border-primary/30 transition-colors duration-300 card-3d">
              <motion.div 
                className="space-y-6"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.2, staggerChildren: 0.1 }}
                viewport={{ once: true }}
              >
                <motion.p 
                  className="text-lg leading-relaxed"
                  variants={fadeIn}
                >
                  👋 Hello! I'm <span className="font-bold text-primary">Indal Yadav</span>, a
                  passionate software engineer with over 5+ years of experience in
                  building innovative software solutions that make a difference.
                </motion.p>

                <motion.p 
                  className="text-lg leading-relaxed"
                  variants={fadeIn}
                >
                  🚀 I have a deep proficiency in{" "}
                  <span className="font-bold text-primary">Python</span>,{" "}
                  <span className="font-bold text-primary">Golang</span>,{" "}
                  <span className="font-bold text-primary">JavaScript</span>,{" "}
                  <span className="font-bold text-primary">TypeScript</span>, and
                  I've spent a significant part of my career focusing on{" "}
                  <span className="font-bold text-primary">API Development</span> and{" "}
                  <span className="font-bold text-primary">Web Development</span>.
                </motion.p>

                <motion.p 
                  className="text-lg leading-relaxed"
                  variants={fadeIn}
                >
                  🧹 I am a firm believer in clean, maintainable code and have always
                  been an advocate for best coding practices and agile methodologies.
                </motion.p>

                <motion.p 
                  className="text-lg leading-relaxed"
                  variants={fadeIn}
                >
                  📚 I believe in lifelong learning and often find myself diving into
                  new technologies or methodologies that pique my interest.
                </motion.p>

                <motion.p 
                  className="text-lg leading-relaxed"
                  variants={fadeIn}
                >
                  🎯 My goal is to always deliver impactful and efficient software
                  solutions while fostering a collaborative and inclusive environment.
                  Currently as a Software Engineer, I am always open to connecting
                  with professionals and enthusiasts alike. Let's build something
                  amazing together!
                </motion.p>

                <motion.p 
                  className="text-lg leading-relaxed"
                  variants={fadeIn}
                >
                  💻 Throughout my journey, I've delved deep into the realms of
                  code, navigating through the enchanting landscapes of Python 🐍,
                  JavaScript 🚀, and more. With a passion for innovation and a knack
                  for problem-solving, I thrive on challenges that push the boundaries
                  of possibility. <br /> Whether it's architecting APIs or
                  crafting immersive user experiences, I'm dedicated to
                  delivering excellence with every keystroke. Let's bring your
                  ideas to life and create something extraordinary together! 🌟
                </motion.p>
              </motion.div>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
