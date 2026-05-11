import React from "react";

import Contact from "./Contact";
import Hero from "../component/Hero";

import Featurs from "../component/Featurs";
import BackgroundSlider from "../component/BackgroundSlider";
import Project from "../component/Project";
import About from "./About";
import Skills from "./Skills";

const Home = () => {
  return (
    <>
      <Hero />
      <Featurs />

      <Project />
      <Skills />
      <Contact />
    </>
  );
};

export default Home;
