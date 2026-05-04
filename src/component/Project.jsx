import React, { useEffect, useState } from "react";
import { FaGithub } from "react-icons/fa";
import { motion } from "framer-motion";
import bg5 from "../assets/bg5.jpg";
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
    <div>
      <img
        src={bg5}
        alt="Projects Background"
        className="w-full h-64 object-cover mb-12 rounded-lg shadow-lg"
      />
      <section id="projects" className="py-20 px-4 bg-base-100 ">
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-800 dark:text-white">
          My Projects
        </h2>

        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <motion.div
              key={project.id}
              whileHover={{ rotate: 1, scale: 1.05 }}
              className="relative group rounded-2xl overflow-hidden backdrop-blur-lg bg-white/10 border border-white/20 shadow-xl"
            >
              {/* Image */}
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition flex flex-col justify-center items-center text-center p-4">
                <h3 className="text-white text-lg font-bold">
                  {project.title}
                </h3>
                <p className="text-gray-300 text-sm mt-2">{project.desc}</p>

                <div className="flex gap-3 mt-4">
                  <a
                    href={project.live}
                    target="_blank"
                    className="px-4 py-2 bg-purple-600 text-white rounded-full text-sm hover:bg-purple-700"
                  >
                    Live Preview
                  </a>

                  <a
                    href={project.github}
                    target="_blank"
                    className="px-4 py-2 bg-white text-black rounded-full text-sm"
                  >
                    Code
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Project;
