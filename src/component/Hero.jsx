import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaPinterestP,
} from "react-icons/fa";
import React from "react";
import surma from "../assets/surma.png";
import { FaXTwitter } from "react-icons/fa6";
import Download from "./Download";
import Facebook from "./Facebook";

// Hero.jsx
const Hero = () => {
  return (
    <section className="py-12 md:py-16 lg:py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 flex flex-col lg:flex-row items-center gap-12">
        {/* LEFT SIDE */}
        <div className="relative w-full lg:w-1/2 flex items-center justify-center gap-4">
          {/* IMAGE */}
          <div className="group">
            <img
              src={surma}
              alt="Surma Tisha"
              className="w-80 h-80 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full object-cover border-8 border-purple-600 group-hover:rotate-6 transition-transform duration-500 shadow-lg"
            />
          </div>

          {/* FACEBOOK ICON */}
          <div className="flex flex-col gap-3">
            <Facebook />
          </div>
        </div>

        {/* RIGHT TEXT */}
        <div className="w-full lg:w-1/2 text-center lg:text-left">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#fefdff] leading-tight animate-slideUp">
            I am Professional User Experience Developer
          </h1>

          <p className="text-[#e4f4ff] mt-4 text-sm sm:text-base md:text-lg leading-relaxed animate-fadeIn delay-100">
            I develop services for customers specializing creating stylish,
            modern websites, web services and online stores. My passion is to
            develop digital user experiences.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mt-6 justify-center lg:justify-start animate-slideUp delay-300">
            <button className="bg-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-purple-700 transition duration-300 shadow-md hover:shadow-xl">
              My Projects
            </button>

            <button>
              <Download />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
