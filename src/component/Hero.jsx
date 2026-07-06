import React from "react";
import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";
import surma from "../assets/images/surma.png";
import Download from "./Download";
import Facebook from "./Facebook";

const stats = [
  { number: "10+", title: "Projects" },
  { number: "8+", title: "Technologies" },
  { number: "100%", title: "Responsive" },
];

const Hero = () => {
  return (
    <section className="relative py-20 overflow-hidden">
      <div className="relative max-w-7xl mx-auto px-5">
        <div className="grid lg:grid-cols-2 gap-14 items-center">
          {/* LEFT — image + floating social stack */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex justify-center items-center gap-6"
          >
            <div className="relative">
              {/* Soft glow behind image */}
              <div className="absolute inset-0 rounded-full blur-3xl bg-purple-600/30" />

              {/* Purple ring */}
              <div className="absolute -inset-2 rounded-full bg-gradient-to-tr from-purple-500 via-fuchsia-500 to-pink-500 opacity-90" />

              <motion.img
                animate={{ y: [0, -10, 0] }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                src={surma}
                alt="Surma"
                className="relative w-64 h-64 md:w-80 md:h-80 rounded-full object-cover border-[6px] border-[#0a0e1f]"
              />
            </div>

            {/* Vertical social icon stack */}
            <div className="flex flex-col gap-3">
              <div className="w-11 h-11 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center hover:bg-purple-500/20 transition">
                <Facebook />
              </div>

              <div className="w-11 h-11 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center hover:bg-purple-500/20 transition cursor-pointer">
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  className="text-white/80"
                >
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                  <rect x="2" y="9" width="4" height="12" />
                  <circle cx="4" cy="4" r="2" />
                </svg>
              </div>

              <div className="w-11 h-11 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center hover:bg-purple-500/20 transition cursor-pointer">
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  className="text-white/80"
                >
                  <path d="M3 12a9 9 0 1 0 3-6.7" />
                  <path d="M3 4v5h5" />
                </svg>
              </div>
            </div>
          </motion.div>

          {/* RIGHT — content */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <p className="uppercase tracking-[5px] text-purple-400 font-semibold text-sm">
              Welcome To My Portfolio
            </p>

            <h1 className="mt-5 text-4xl md:text-6xl font-bold text-white leading-tight">
              Hi, I'm
              <span className="block bg-gradient-to-r from-blue-400 via-purple-400 to-pink-500 bg-clip-text text-transparent">
                Surma Tisha
              </span>
              <span className="text-white/90 text-2xl md:text-4xl">
                <Typewriter
                  words={[
                    "Frontend Developer",
                    "React Developer",
                    "MERN Stack Learner",
                    "UI Enthusiast",
                    "Problem Solver",
                  ]}
                  loop={0}
                  cursor
                  cursorStyle="|"
                  typeSpeed={80}
                  deleteSpeed={50}
                  delaySpeed={1800}
                />
              </span>
            </h1>

            <p className="mt-6 text-gray-300 text-lg leading-8 max-w-xl">
              I build modern, responsive and user-friendly web applications
              using React, Tailwind CSS and the MERN Stack.
            </p>

            {/* Buttons */}
            <div className="flex flex-wrap gap-5 mt-9">
              <button className="px-8 py-4 rounded-full bg-purple-600 text-white font-semibold shadow-[0_10px_30px_rgba(147,51,234,0.35)] hover:bg-purple-700 hover:scale-105 transition duration-300">
                My Projects
              </button>

              <Download />
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 mt-12">
              {stats.map((item) => (
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-lg p-5 text-center"
                  key={item.title}
                >
                  <h2 className="text-3xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-pink-500 bg-clip-text text-transparent">
                    {item.number}
                  </h2>
                  <p className="text-gray-300 mt-2 text-sm">{item.title}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
