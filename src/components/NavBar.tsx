"use client";

import React from "react";
import { motion } from "framer-motion";
import { links } from "../constants/data";
import Link from "next/link";
import clsx from "clsx";
import { Button } from "./ui/button";
import { BsGithub, BsLinkedin, BsMoon } from "react-icons/bs";
import { Tooltip, TooltipContent, TooltipTrigger } from "./ui/tooltip";
import { useTheme } from "next-themes";
import { FaMoon } from "react-icons/fa";

export default function Header() {
  const { theme, setTheme } = useTheme();

  const handleTheme = () => {
    if (theme === "dark") setTheme("light");
    else setTheme("dark");
  };

  return (
    <motion.header
      className="fixed right-0 left-0 top-0 h-14 flex justify-between items-center px-16 dark:bg-transparent  "
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
    >
      <div className="flex gap-x-2">
        <p className="text-2xl font-semibold">{"<Indal/>"}</p>
      </div>
      <nav className="hidden md:flex">
        <ul className="flex flex-wrap  text-[0.9rem] font-medium ">
          {links.map((link) => (
            <motion.li
              key={link.hash}
              initial={{ y: -100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
            >
              <Link
                className={clsx(
                  "flex w-full items-center justify-center px-6 py-2 font-medium hover:bg-red-600 hover:rounded-full"
                )}
                href={link.hash}
              >
                {link.name}
              </Link>
            </motion.li>
          ))}
        </ul>
      </nav>
      <div className="flex gap-x-2">
        <Tooltip>
          <TooltipTrigger asChild>
            <Link
              href="https://www.linkedin.com/in/indal-kumar/"
              target="_blank"
            >
              <Button variant="ghost" size="icon">
                <BsLinkedin size={22} />
              </Button>
            </Link>
          </TooltipTrigger>
          <TooltipContent>
            <p>Linkedin</p>
          </TooltipContent>
        </Tooltip>
        <Tooltip>
          <TooltipTrigger asChild>
            <Link href="https://github.com/indalyadav56" target="_blank">
              <Button variant="ghost" size="icon">
                <BsGithub size={22} />
              </Button>
            </Link>
          </TooltipTrigger>
          <TooltipContent>
            <p>GitHub</p>
          </TooltipContent>
        </Tooltip>
        {/* <Tooltip>
          <TooltipTrigger asChild>
            <Button variant="ghost" size="icon" onClick={handleTheme}>
              {theme === "dark" ? <BsMoon size={22} /> : <FaMoon size={22} />}
            </Button>
          </TooltipTrigger>
          <TooltipContent>
            <p>Theme</p>
          </TooltipContent>
        </Tooltip> */}
      </div>
    </motion.header>
  );
}
