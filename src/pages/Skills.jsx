import React, { useEffect, useState } from "react";
import { FaNodeJs } from "react-icons/fa";
import { FaFire, FaHtml5, FaJs, FaReact } from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";
import { RiNodejsLine } from "react-icons/ri";

const iconMap = {
  html: <FaHtml5 className="text-6xl text-orange-500" />,
  js: <FaJs className="text-6xl text-yellow-400" />,
  react: <FaReact className="text-6xl text-cyan-400" />,
  tailwind: <SiTailwindcss className="text-6xl text-sky-400" />,
  firebase: <FaFire className="text-6xl text-orange-400" />,
  nodejs: <FaJs className="text-6xl text-green-500" />,
  mongodb: <FaJs className="text-6xl text-green-500" />,
};

const Skills = () => {
  const [skills, setSkills] = useState();
  useEffect(() => {
    console.log("Fetching skills data from /Skills.json");
    fetch("/Skills.json")
      .then((response) => response.json())
      .then((data) => setSkills(data))
      .catch((error) => console.error("Error fetching skills:", error));
  }, []);

  if (!skills) {
    return <div>Loading...</div>;
  }

  return (
    <section className="relative py-24 px-6 overflow-hidden">
      {/* TITLE */}
      <h2 className="text-4xl md:text-5xl font-bold text-white mb-16 text-center">
        My{" "}
        <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
          Skills
        </span>
      </h2>

      {/* GRID */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto">
        {skills.map((skill) => (
          <div
            key={skill.id}
            className="
            group relative overflow-hidden rounded-3xl
            bg-white/10
            backdrop-blur-xl
            border border-white/20
            shadow-2xl
            p-8
            hover:-translate-y-2
            transition-all duration-500
            "
          >
            {/* Glow Effect */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-br from-cyan-500/10 to-purple-600/20"></div>

            {/* ICON */}
            <div className="relative z-10 flex justify-center mb-6">
              <div className="p-5 rounded-full bg-white/10 border border-white/10">
                {iconMap[skill.icon]}
              </div>
            </div>

            {/* TITLE */}
            <h3 className="relative z-10 text-2xl font-bold text-white mb-3 text-center">
              {skill.title}
            </h3>

            {/* DESC */}
            <p className="relative z-10 text-gray-300 text-sm leading-relaxed text-center">
              {skill.description}
            </p>

            {/* LINE */}
            <div className="relative z-10 mt-6 h-[3px] w-0 bg-gradient-to-r from-cyan-400 to-purple-500 group-hover:w-full transition-all duration-500 mx-auto rounded-full"></div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
