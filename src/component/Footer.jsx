import React from "react";

import {
  FaFacebookF,
  FaGithub,
  FaLinkedinIn,
  FaInstagram,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="relative  overflow-hidden">
      {/* GLASS BACKGROUND */}
      <div
        className="
        bg-white/10
        backdrop-blur-xl
        border-t border-white/20
        shadow-2xl
        "
      >
        <div className="max-w-7xl mx-auto px-6 py-14">
          {/* TOP */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {/* BRAND */}
            <div>
              <h2
                className="
                text-3xl font-extrabold
                bg-gradient-to-r from-sky-600 to-purple-600
                bg-clip-text text-transparent
                "
              >
                Surma Tisha
              </h2>

              <p className="text-gray-300 mt-4 leading-relaxed">
                Frontend Developer creating modern, responsive and interactive
                web applications with beautiful UI.
              </p>
            </div>

            {/* QUICK LINKS */}
            <div>
              <h3 className="text-white text-xl font-bold mb-5">Quick Links</h3>

              <ul className="space-y-3 text-gray-300">
                <li>
                  <a
                    href="#"
                    className="hover:text-cyan-400 transition duration-300"
                  >
                    Home
                  </a>
                </li>

                <li>
                  <a
                    href="#"
                    className="hover:text-cyan-400 transition duration-300"
                  >
                    About
                  </a>
                </li>

                <li>
                  <a
                    href="#"
                    className="hover:text-cyan-400 transition duration-300"
                  >
                    Projects
                  </a>
                </li>

                <li>
                  <a
                    href="#"
                    className="hover:text-cyan-400 transition duration-300"
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </div>

            {/* SOCIAL */}
            <div>
              <h3 className="text-white text-xl font-bold mb-5">Follow Me</h3>

              <div className="flex gap-5">
                <a
                  href="https://www.facebook.com/profile.php?id=61563925216002"
                  className="
                  w-12 h-12 rounded-full
                  bg-white/10
                  border border-white/20
                  backdrop-blur-lg
                  flex items-center justify-center
                  text-white
                  hover:bg-sky-500
                  hover:scale-110
                  transition duration-300
                  "
                >
                  <FaFacebookF />
                </a>

                <a
                  href="#"
                  className="
                  w-12 h-12 rounded-full
                  bg-white/10
                  border border-white/20
                  backdrop-blur-lg
                  flex items-center justify-center
                  text-white
                  hover:bg-pink-500
                  hover:scale-110
                  transition duration-300
                  "
                >
                  <FaInstagram />
                </a>

                <a
                  href="https://www.linkedin.com/in/surma-begam-tisha/"
                  className="
                  w-12 h-12 rounded-full
                  bg-white/10
                  border border-white/20
                  backdrop-blur-lg
                  flex items-center justify-center
                  text-white
                  hover:bg-blue-500
                  hover:scale-110
                  transition duration-300
                  "
                >
                  <FaLinkedinIn />
                </a>

                <a
                  href="https://github.com/SURMABEGAM"
                  className="
                  w-12 h-12 rounded-full
                  bg-white/10
                  border border-white/20
                  backdrop-blur-lg
                  flex items-center justify-center
                  text-white
                  hover:bg-gray-700
                  hover:scale-110
                  transition duration-300
                  "
                >
                  <FaGithub />
                </a>
              </div>
            </div>
          </div>

          {/* BOTTOM */}
          <div
            className="
            border-t border-white/10
            mt-10 pt-6
            text-center
            text-gray-400
            "
          >
            © 2026
            <a
              href="https://www.linkedin.com/in/surma-begam-tisha/"
              className="text-sky-500 hover:text-sky-400"
            >
              {" "}
              Surma Tisha
            </a>
            . All Rights Reserved.
          </div>
        </div>
      </div>
      {/* GLOW EFFECTS */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-sky-500/20 blur-[120px] rounded-full"></div>{" "}
      <div className="absolute bottom-[-5px] left-0 w-full h-[10px] bg-[#0f172a]"></div>
    </footer>
  );
};

export default Footer;
