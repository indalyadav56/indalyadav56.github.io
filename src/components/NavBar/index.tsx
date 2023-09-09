import React, { useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { MdClose } from "react-icons/md";
import Link from "next/link";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuClick = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="">
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 p-2">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <span className="text-white font-semibold text-2xl">
                Indal Yadav
              </span>
            </div>
          </div>
          <div className="sm:hidden" onClick={handleMenuClick}>
            {isMenuOpen ? <MdClose size={28} /> : <AiOutlineMenu size={28} />}
          </div>

          <div className="hidden md:block">
            <div className="ml-4 flex items-center space-x-4">
              <Link href="#Home">
                <button className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md font-medium">
                  Home
                </button>
              </Link>
              <Link href="#About">
                <button className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md font-medium">
                  About
                </button>
              </Link>
              <Link href="#Projects">
                <button className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md font-medium">
                  Projects
                </button>
              </Link>
              <Link href="#Experience">
                <button className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md font-medium">
                  Experience
                </button>
              </Link>
              <Link href="#Contact">
                <button className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md font-medium">
                  Contact
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/*  */}
      {isMenuOpen && (
        <div className="sm:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <Link href="#Home">
              <a
                href="#"
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-gray-700"
              >
                Home
              </a>
            </Link>
            <Link href="#About">
              <a
                href="#"
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-gray-700"
              >
                About
              </a>
            </Link>
            <Link href="#Experience">
              <a
                href="#"
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-gray-700"
              >
                Experience
              </a>
            </Link>
            <Link href="#Projects">
              <a
                href="#"
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-gray-700"
              >
                Projects
              </a>
            </Link>
            <Link href="#Contact">
              <a
                href="#"
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-gray-700"
              >
                Contact
              </a>
            </Link>
          </div>
        </div>
      )}
      {/*  */}
    </nav>
  );
};

export default Navbar;
