"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { FiMail, FiPhone, FiMapPin, FiSend, FiGithub, FiLinkedin, FiTwitter } from "react-icons/fi";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError("");
    
    try {
      const data = {
        service_id: 'service_3jl6k77',
        template_id: 'template_cvnxamh',
        user_id: '1TbNdmdcw-x13544q',
        template_params: {
          from_name: formData.name,
          from_email: formData.email,
          subject: formData.subject,
          message: formData.message,
          to_email: 'indalkumar56@gmail.com'
        }
      };

      const response = await fetch('https://api.emailjs.com/api/v1.0/email/send', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      });

      if (response.status === 200) {
        setSubmitSuccess(true);
        setFormData({
          name: "",
          email: "",
          subject: "",
          message: "",
        });
        
        setTimeout(() => {
          setSubmitSuccess(false);
        }, 5000);
      } else {
        throw new Error("Failed to send message");
      }
    } catch (error) {
      console.error("Error sending message:", error);
      setSubmitError("Failed to send message. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: <FiMail className="text-xl" />,
      title: "Email",
      value: "indalkumar56@gmail.com",
      link: "mailto:indalkumar56@gmail.com",
    },
    {
      icon: <FiPhone className="text-xl" />,
      title: "Phone",
      value: "+91 9507509624",
      link: "tel:+919507509624",
    },
    {
      icon: <FiMapPin className="text-xl" />,
      title: "Location",
      value: "Mumbai, India",
      link: "https://maps.google.com/?q=Mumbai,India",
    },
  ];

  const socialLinks = [
    {
      icon: <FiGithub size={20} />,
      link: "https://github.com/yourusername",
      label: "GitHub",
      color: "hover:bg-gray-800 hover:text-white",
    },
    {
      icon: <FiLinkedin size={20} />,
      link: "https://linkedin.com/in/yourusername",
      label: "LinkedIn",
      color: "hover:bg-blue-600 hover:text-white",
    },
    {
      icon: <FiTwitter size={20} />,
      link: "https://twitter.com/yourusername",
      label: "Twitter",
      color: "hover:bg-sky-500 hover:text-white",
    },
  ];

  return (
    <section id="contact" className="py-20 relative">
      <div className="container mx-auto">
        {/* Section header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="text-gradient-primary">Contact Me</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Have a project in mind or want to discuss a potential collaboration? Feel free to reach out to me using the form below or through my contact information.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact info */}
          <motion.div 
            className="lg:col-span-1"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="glass-effect p-6 rounded-xl border border-primary/20 h-full">
              <h3 className="text-xl font-bold mb-6">Contact Information</h3>
              
              <div className="space-y-6">
                {contactInfo.map((item, index) => (
                  <a 
                    key={index} 
                    href={item.link}
                    className="flex items-center gap-4 group"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      {item.icon}
                    </div>
                    <div>
                      <h4 className="text-sm text-muted-foreground">{item.title}</h4>
                      <p className="font-medium">{item.value}</p>
                    </div>
                  </a>
                ))}
              </div>
              
              <div className="mt-8">
                <h4 className="text-sm text-muted-foreground mb-4">Follow me on</h4>
                <div className="flex gap-3">
                  {socialLinks.map((item, index) => (
                    <a 
                      key={index}
                      href={item.link}
                      aria-label={item.label}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`w-9 h-9 rounded-full border border-primary/20 flex items-center justify-center transition-colors ${item.color}`}
                    >
                      {item.icon}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
          
          {/* Contact form */}
          <motion.div 
            className="lg:col-span-2"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <form onSubmit={handleSubmit} className="glass-effect p-6 rounded-xl border border-primary/20">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">Your Name</label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="John Doe"
                    required
                    className="bg-card/50"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">Your Email</label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="john@example.com"
                    required
                    className="bg-card/50"
                  />
                </div>
              </div>
              
              <div className="mb-6">
                <label htmlFor="subject" className="block text-sm font-medium mb-2">Subject</label>
                <Input
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="How can I help you?"
                  required
                  className="bg-card/50"
                />
              </div>
              
              <div className="mb-6">
                <label htmlFor="message" className="block text-sm font-medium mb-2">Message</label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Your message here..."
                  required
                  className="bg-card/50 min-h-[150px]"
                />
              </div>
              
              <Button 
                type="submit" 
                disabled={isSubmitting}
                className="w-full md:w-auto"
              >
                {isSubmitting ? (
                  <span className="flex items-center gap-2">
                    <span className="animate-spin h-4 w-4 border-2 border-current border-t-transparent rounded-full"></span>
                    Sending...
                  </span>
                ) : (
                  <span className="flex items-center gap-2">
                    <FiSend />
                    Send Message
                  </span>
                )}
              </Button>
              
              {submitSuccess && (
                <div className="mt-4 p-3 bg-green-500/10 border border-green-500/30 rounded-lg text-green-600">
                  Your message has been sent successfully! I&#39;ll get back to you soon.
                </div>
              )}
              
              {submitError && (
                <div className="mt-4 p-3 bg-red-500/10 border border-red-500/30 rounded-lg text-red-600">
                  {submitError}
                </div>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
