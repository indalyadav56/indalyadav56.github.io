import React from "react";
import { Card } from "./ui/card";

const AboutMe = () => {
  const data = ` 

  `;
  return (
    <div id="about" className="lg:flex mx-auto">
      <div>
        <img
          className="rounded-lg"
          src="https://avatars.githubusercontent.com/u/73450527?v=4"
          alt=""
          height="100%"
          width="100%"
        />
      </div>
      <div className="flex-1 flex  flex-col lg:ml-8">
        <h1 className="lg:text-5xl md:text-4xl text-2xl font-semibold">
          About Me
        </h1>
        <Card className="mt-2 font-sans p-8 rounded-md dark:text-white">
          <p className="text-lg">
            👋 Hello! I&apos;m{" "}
            <span className="font-bold text-blue-600">Indal Yadav</span>, a
            passionate software engineer with over 4+ years of experience in
            building innovative software solutions that make a difference.
          </p>

          <div className="my-4"></div>

          <p className="text-lg">
            🚀 I have a deep proficiency in{" "}
            <span className="font-bold text-blue-600">Python</span>,{" "}
            <span className="font-bold text-blue-600">Golang</span>,{" "}
            <span className="font-bold text-blue-600">JavaScript</span>,{" "}
            <span className="font-bold text-blue-600">TypeScript</span>, and
            I&apos;ve spent a significant part of my career focusing on{" "}
            <span className="font-bold text-blue-600">API Development</span> and{" "}
            <span className="font-bold text-blue-600">web development</span>.
          </p>

          <div className="my-4"></div>

          <p className="text-lg">
            🧹 I am a firm believer in clean, maintainable code and have always
            been an advocate for best coding practices and agile methodologies.
          </p>

          <div className="my-4"></div>

          <p className="text-lg">
            📚 I believe in lifelong learning and often find myself diving into
            new technologies or methodologies that pique my interest.
          </p>

          <div className="my-4"></div>

          <p className="text-lg">
            🎯 My goal is to always deliver impactful and efficient software
            solutions while fostering a collaborative and inclusive environment.
            Currently as a Software Engineer, I am always open to connecting
            with professionals and enthusiasts alike. Let&apos;s build something
            amazing together!
          </p>
          <div className="my-4"></div>
          <p>
            💻 Throughout my journey, I&apos;ve delved deep into the realms of
            code, navigating through the enchanting landscapes of Python 🐍,
            JavaScript 🚀, and more. With a passion for innovation and a knack
            for problem-solving, I thrive on challenges that push the boundaries
            of possibility. <br /> Whether it&apos;s architecting APIs or
            crafting immersive user experiences, I&apos;m dedicated to
            delivering excellence with every keystroke. Let&apos;s bring your
            ideas to life and create something extraordinary together! 🌟
          </p>
        </Card>
      </div>
    </div>
  );
};

export default AboutMe;
