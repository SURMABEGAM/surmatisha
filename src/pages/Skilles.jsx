import React from "react";
import { useLoaderData } from "react-router";

const Skilles = () => {
  const skilles = useLoaderData();
  console.log("Skilles component received data:", skilles);

  if (!skilles) {
    return <div>Loading...</div>;
  }

  return (
    <section className="bg-linear-to-br from-[#0f172a] via-[#1e293b] to-[#0f172a] text-white py-16 px-6 md:px-12">
      <div className="max-w-6xl mx-auto text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-extrabold mb-4">
          My <span className="text-indigo-400">Skills</span>
        </h2>
        <p className="text-gray-300 max-w-2xl mx-auto text-sm md:text-base">
          These are the core tools and technologies I use to build fast, modern,
          and visually appealing web applications.
        </p>
      </div>
      {/* Skills Grid */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {skilles.map((skill) => (
          <div
            key={skill.id}
            className="group bg-[#1e293b]/60 backdrop-blur-sm border border-gray-700 rounded-2xl p-6 text-center shadow-md hover:shadow-xl hover:-translate-y-2 transition-all duration-300"
          >
            {skill.icon === "html" && (
              <FaHtml5 className="text-6xl text-orange-500 mx-auto mb-3" />
            )}
            {skill.icon === "js" && (
              <FaJs className="text-6xl text-yellow-400 mx-auto mb-3" />
            )}
            {skill.icon === "react" && (
              <FaReact className="text-6xl text-blue-400 mx-auto mb-3" />
            )}
            {skill.icon === "tailwind" && (
              <SiTailwindcss className="text-6xl text-cyan-400 mx-auto mb-3" />
            )}

            {skill.icon === "firebase" && (
              <FaFire className="text-6xl text-red-800 mx-auto mb-3" />
            )}

            <h3 className="text-xl font-semibold mb-2">{skill.title}</h3>
            <p className="text-gray-300 text-sm leading-relaxed">
              {skill.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skilles;
