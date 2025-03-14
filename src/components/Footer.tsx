"use client";

import React from "react";
import { motion } from "framer-motion";
import { FiGithub, FiLinkedin, FiTwitter, FiInstagram } from "react-icons/fi";
import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  const socialLinks = [
    { icon: <FiGithub size={18} />, url: "https://github.com/indalyadav56", label: "GitHub" },
    { icon: <FiLinkedin size={18} />, url: "https://linkedin.com/in/indalyadav56", label: "LinkedIn" },
    { icon: <FiTwitter size={18} />, url: "https://twitter.com/indalyadav56", label: "Twitter" },
    { icon: <FiInstagram size={18} />, url: "https://instagram.com/indalyadav56", label: "Instagram" },
  ];

  const footerLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Experience", href: "#experience" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <footer className="py-12 px-4 border-t border-border">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
          <div className="md:col-span-4 space-y-4">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="flex items-center space-x-2"
            >
              <span className="font-bold text-xl text-primary">
                Indal Yadav
              </span>
            </motion.div>
            <motion.p 
              className="text-muted-foreground text-sm max-w-md"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              Software Engineer specializing in building exceptional digital experiences with modern web technologies.
            </motion.p>
          </div>
          
          <div className="md:col-span-4">
            <motion.div 
              className="flex flex-wrap justify-center gap-4"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              {footerLinks.map((link, index) => (
                <Link 
                  key={index} 
                  href={link.href}
                  className="text-muted-foreground hover:text-primary transition-colors text-sm"
                >
                  {link.name}
                </Link>
              ))}
            </motion.div>
          </div>
          
          <div className="md:col-span-4">
            <motion.div 
              className="flex justify-center md:justify-end space-x-4"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              {socialLinks.map((link, index) => (
                <motion.div 
                  key={index}
                  whileHover={{ y: -3 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link 
                    href={link.url} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="p-2 rounded-full bg-background border border-border hover:border-primary hover:text-primary transition-colors flex items-center justify-center"
                    aria-label={link.label}
                  >
                    {link.icon}
                  </Link>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
        
        <motion.div 
          className="mt-8 pt-8 border-t border-border text-center text-muted-foreground text-xs"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <p>&copy; {currentYear} Indal Yadav. All rights reserved.</p>
          <p className="mt-2">Built with Next.js, TypeScript, and Framer Motion</p>
        </motion.div>
      </div>
    </footer>
  );
}
