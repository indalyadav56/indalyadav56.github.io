"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { BsArrowRight } from "react-icons/bs";
import { HiDownload } from "react-icons/hi";
import animationData from "../assets/developer.json";
import Lottie from "lottie-react";
import { Card, CardContent } from "./ui/card";

export default function Intro() {
  return (
    <section id="home" className="mt-14 h-screen flex justify-between">
      <div className="flex-1 flex flex-col justify-evenly">
        <div className="flex flex-col gap-y-4">
          <p className="text-6xl font-semibold">
            <span className="text-red-200">Hi,</span> I&apos;m Indal Kumar
            <span className="text-red-200">.</span>
          </p>
          <motion.div
            className="sm:text-4xl"
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <Card className="p-8">
              <CardContent>
                <motion.span className="animate-bounce w-6 h-6 ">
                  👋
                </motion.span>
                I&apos;m a Software Engineer with
                <span className="font-bold italic">4+ years</span> of hands-on
                experience in crafting robust and scalable software solutions.
              </CardContent>
            </Card>
          </motion.div>
        </div>
        <motion.div
          className="flex flex-col sm:flex-row gap-x-8 gap-y-6 px-4 text-lg font-medium"
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.1,
          }}
        >
          <Link
            href="#contact"
            className="group bg-gray-900 text-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105 transition"
            onClick={() => {}}
          >
            Contact me here{" "}
            <BsArrowRight className="opacity-70 group-hover:translate-x-1 transition" />
          </Link>

          <a
            className="group bg-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10"
            href="/cv.pdf"
            download
          >
            Download CV{" "}
            <HiDownload className="opacity-60 group-hover:translate-y-1 transition" />
          </a>
        </motion.div>
      </div>
      <Lottie
        className="flex-1"
        animationData={animationData}
        height="100%"
        width="100%"
      />
    </section>
  );
}
