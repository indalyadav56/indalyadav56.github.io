import React from "react";

const AboutMe = () => {
  const data = ` Hello! I'm Indal Yadav, a passionate software engineer with over 4+ of
experience in building innovative software solutions that make a
difference. I have a deep proficiency in [Python, JavaScript,
Typescript, Java], and I've spent a significant part of my career
focusing on [API Development, web development]. I am a firm believer
in clean, maintainable code and have always been an advocate for best
coding practices and agile methodologies. I believe in lifelong
learning and often find myself diving into new technologies or
methodologies that pique my interest. My goal is to always deliver
impactful and efficient software solutions while fostering a
collaborative and inclusive environment. Currently as a Software
Engineer and I am always open to connecting with professionals and
enthusiasts alike. Let's build something amazing together!`;
  return (
    <div id="About" className="lg:flex max-w-7xl mx-auto p-4 ">
      <div className=" flex-1">
        <img
          className="rounded-lg"
          src="https://avatars.githubusercontent.com/u/73450527?v=4"
          alt=""
          height="100%"
          width="100%"
        />
      </div>
      <div className="flex-1  p-4 flex  flex-col lg:ml-8">
        <h1 className="lg:text-5xl md:text-4xl text-3xl ">ABOUT ME</h1>
        <p className="my-4">{data}</p>
      </div>
    </div>
  );
};

export default AboutMe;
