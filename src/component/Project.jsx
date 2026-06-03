import React, { useEffect, useState } from "react";
import { FaGithub } from "react-icons/fa";
import { motion } from "framer-motion";

const Project = () => {
  const [projects, setProjects] = useState([]);

  // Fetch projects data from JSON file on component mount
  useEffect(() => {
    console.log("Fetching projects data from /Projects.json");

    fetch("/Projects.json")
      .then((response) => response.json())
      .then((data) => setProjects(data))
      .catch((error) => console.error("Error fetching projects:", error));
  }, []);

  return (
    <section className="relative py-24 px-6 overflow-hidden bg-transparent">
      {/* dark overlay */}
      <div className="absolute inset-0\"></div>

      <div className="relative z-10">
        <h2 className="text-4xl font-bold text-center mb-12 text-white">
          My Projects
        </h2>

        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <motion.div
              key={project.id}
              whileHover={{ scale: 1.06 }}
              transition={{ type: "spring", stiffness: 200 }}
              className="relative group rounded-2xl overflow-hidden 
             bg-sky-700/60 backdrop-blur-xl border border-white/10 
             shadow-[0_8px_32px_rgba(255,255,255,0.1)]
             hover:shadow-black/50 transition duration-500"
            >
              {/* Image */}
              <div className="overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-56 object-cover transition duration-500 group-hover:scale-110"
                />
              </div>

              {/* Content */}
              <div className="p-5 text-white">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>

                <p className="text-sm text-gray-300 mb-4">{project.desc}</p>

                <div className="flex gap-3">
                  <a
                    href={project.live}
                    target="_blank"
                    className="px-4 py-2 text-sm rounded-full 
                    bg-gradient-to-r from-purple-500 to-pink-500 
                    hover:scale-105 transition"
                  >
                    Live
                  </a>

                  <a
                    href={project.github}
                    target="_blank"
                    className="px-4 py-2 text-sm rounded-full 
                    border border-white hover:bg-white hover:text-black transition"
                  >
                    Code
                  </a>
                </div>
              </div>

              {/* Glow effect */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-tr from-purple-500/20 to-pink-500/20"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Project;
