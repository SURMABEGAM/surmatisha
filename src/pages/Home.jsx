import React from "react";

import Contact from "./Contact";
import Hero from "../component/Hero";

import Featurs from "../component/Featurs";
import BackgroundSlider from "../component/BackgroundSlider";
//import { PricingTable } from "../component/PricingTable";
//import { Skilles  } from "module";

const Home = () => {
  return (
    <>
      {/* 4. Footer / Contact */}

      <Hero />
      <Featurs />

      <Contact />
    </>
  );
};

export default Home;
