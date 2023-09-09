"use client";
import NavBar from "@/components/NavBar";
import Lottie from "lottie-react";
import animationData from "../../assets/developer.json";
import { useEffect, useRef } from "react";
import Projects from "@/components/Projects";
import ContactForm from "@/components/ContactUs";
import AboutMe from "@/components/AboutMe";
import Experience from "@/components/Experience";
import Skills from "@/components/Skills";
import Typed from "typed.js";

export default function Home() {
  const el = useRef(null);

  useEffect(() => {
    const options = {
      strings: ["Software Engineer"],
      typeSpeed: 50,
      backSpeed: 50,
      loop: true,
    };

    const typed = new Typed(el.current, options);

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <main id="Home" className="w-screen h-screen overflow-x-hidden">
      <NavBar />
      <div className="md:flex max-w-full mx-auto my-4 ">
        <div className="flex flex-col flex-1 justify-center items-center">
          <p className="text-2xl"></p>
          <h4 className="md:text-2xl text-1xl">Hi, I am a</h4>
          <br />
          <h1 className="lg:text-5xl md:text-4xl text-3xl">
            <span ref={el} />
          </h1>

          <br />
          <div className=" my-8">
            <a
              href="https://github.com/indalyadav56"
              target="_blank"
              className="p-4 bg-amber-900 radius rounded-lg mx-4"
            >
              GitHub
            </a>
            <button className="p-4 bg-amber-900 radius rounded-lg mx-4">
              Resume
            </button>
          </div>
        </div>
        <div className="flex-1">
          <Lottie
            animationData={animationData}
            height={"100%"}
            width={"100%"}
          />
        </div>
      </div>
      <AboutMe />
      <Skills />
      <Experience />
      <Projects />
      <ContactForm />
    </main>
  );
}
