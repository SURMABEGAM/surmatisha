import React, { useState } from "react";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { FiMenu, FiX } from "react-icons/fi";
import surma from "../assets/images/surma.png";
import { NavLink } from "react-router";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const Links = (
    <>
      <NavLink to="/" className="hover:text-blue-500">
        Home
      </NavLink>
      <NavLink to="/project" className="hover:text-blue-500">
        Project
      </NavLink>
      <NavLink to="/skills" className="hover:text-blue-500">
        Skills
      </NavLink>
      <NavLink to="/contact" className="hover:text-blue-500">
        Contact
      </NavLink>
    </>
  );

  return (
    <nav className="w-full fixed top-0 left-0 z-40 bg-white/70 dark:bg-gray-900/70 backdrop-blur-md shadow-md">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-4 py-3">
        {/* Logo */}
        <a href="/" className="flex items-center gap-2">
          <img src={surma} className="w-10 h-10 rounded-full" alt="logo" />
          <span className="font-bold text-lg text-gray-800 dark:text-white">
            SB Tisha
          </span>
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-6 text-gray-700 dark:text-gray-200 font-medium">
          {Links}
        </div>

        {/* Social Icons */}
        <div className="hidden md:flex items-center gap-4 text-xl text-gray-700 dark:text-gray-200">
          <a href="https://github.com/SURMABEGAM" target="_blank">
            <FaGithub className="hover:text-black dark:hover:text-white transition" />
          </a>
          <a
            href="https://www.linkedin.com/in/surma-begam-tisha/"
            target="_blank"
          >
            <FaLinkedin className="hover:text-blue-600 transition" />
          </a>
          <a href="https://twitter.com/surma_begam" target="_blank">
            <FaTwitter className="hover:text-blue-400 transition" />
          </a>
        </div>

        {/* Mobile Button */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-2xl text-gray-800 dark:text-white"
        >
          {open ? <FiX /> : <FiMenu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden px-6 pb-4 space-y-3 bg-white dark:bg-gray-900 shadow-md">
          <ul className="flex flex-col gap-4 text-gray-700 dark:text-gray-200 font-medium">
            {Links}
          </ul>

          <div className="flex gap-4 pt-3 text-xl">
            <FaGithub />
            <FaLinkedin />
            <FaTwitter />
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
