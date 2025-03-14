"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { FiSend, FiMail, FiMapPin, FiPhone } from "react-icons/fi";
import { Card } from "./ui/card";

const ContactForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState("");

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  const contactInfo = [
    {
      icon: <FiMail className="text-primary" size={24} />,
      title: "Email",
      details: "indalkumar56@gmail.com",
      link: "mailto:indalkumar56@gmail.com"
    },
    {
      icon: <FiPhone className="text-primary" size={24} />,
      title: "Phone",
      details: "+91 9876543210",
      link: "tel:+919876543210"
    },
    {
      icon: <FiMapPin className="text-primary" size={24} />,
      title: "Location",
      details: "Mumbai, India",
      link: "https://maps.google.com/?q=Mumbai,India"
    }
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError("");
    
    try {
      // Define the request payload
      const payload = {
        from: email,
        to: "indalkumar56@gmail.com",
        subject: `Contact Form: ${name || email}`,
        html: `<p><strong>From:</strong> ${name} (${email})</p><p><strong>Message:</strong> ${message}</p>`,
      };

      // Define the Fetch API call
      const response = await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${process.env.NEXT_PUBLIC_RESEND_API_KEY}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        throw new Error("Failed to send message");
      }

      setIsSuccess(true);
      setName("");
      setEmail("");
      setMessage("");
      
      // Reset success message after 5 seconds
      setTimeout(() => {
        setIsSuccess(false);
      }, 5000);
    } catch (err) {
      console.error("Error:", err);
      setError("Failed to send message. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 px-4 md:px-0">
      <div className="container mx-auto">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4 animated-gradient-text inline-block">
            Get In Touch
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Have a project in mind or want to collaborate? Feel free to reach out!
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          <motion.div 
            className="lg:col-span-5"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
          >
            <Card className="p-8 h-full rounded-xl border border-border/40 bg-card/30 backdrop-blur-sm hover:border-primary/30 transition-colors duration-300 card-3d">
              <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
              <p className="text-muted-foreground mb-8">
                Feel free to reach out through any of these channels. I'll get back to you as soon as possible.  
              </p>
              
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <motion.a
                    key={index}
                    href={info.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-start gap-4 p-4 rounded-lg hover:bg-primary/5 transition-colors"
                    whileHover={{ x: 5 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <div className="p-3 rounded-full bg-primary/10">
                      {info.icon}
                    </div>
                    <div>
                      <h4 className="font-medium">{info.title}</h4>
                      <p className="text-muted-foreground">{info.details}</p>
                    </div>
                  </motion.a>
                ))}
              </div>
            </Card>
          </motion.div>

          <motion.div 
            className="lg:col-span-7"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
          >
            <Card className="p-8 rounded-xl border border-border/40 bg-card/30 backdrop-blur-sm hover:border-primary/30 transition-colors duration-300 card-3d">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-4">
                  <label htmlFor="name" className="block font-medium text-sm">
                    Your Name
                  </label>
                  <Input
                    id="name"
                    type="text"
                    placeholder="John Doe"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full bg-card/50 border-border/40 focus:border-primary/50"
                    required
                  />
                </div>

                <div className="space-y-4">
                  <label htmlFor="email" className="block font-medium text-sm">
                    Email Address
                  </label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="john@example.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full bg-card/50 border-border/40 focus:border-primary/50"
                    required
                  />
                </div>

                <div className="space-y-4">
                  <label htmlFor="message" className="block font-medium text-sm">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    placeholder="Tell me about your project or inquiry..."
                    rows={5}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="w-full bg-card/50 border-border/40 focus:border-primary/50"
                    required
                  />
                </div>

                {error && (
                  <p className="text-red-500 text-sm">{error}</p>
                )}

                {isSuccess && (
                  <motion.div 
                    className="text-green-500 text-sm p-3 rounded-md bg-green-500/10 border border-green-500/20"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                  >
                    Your message has been sent successfully! I'll get back to you soon.
                  </motion.div>
                )}

                <Button 
                  type="submit" 
                  className="w-full h-12 bg-primary hover:bg-primary/90 text-white flex items-center justify-center gap-2 group"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    "Sending..."
                  ) : (
                    <>
                      Send Message
                      <FiSend className="ml-2 group-hover:translate-x-1 transition-transform" />
                    </>
                  )}
                </Button>
              </form>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
