import React from "react";
import Navber from "../component/Navber";
import { Outlet } from "react-router";
import Footer from "../component/Footer";
import bg8 from "../assets/images/bg8.jpg";

const Root = () => {
  return (
    <div>
      <img
        src={bg8}
        alt="Background"
        className="fixed top-0 left-0 bottom-0 right-0 w-full h-full object-cover  opacity-50"
      />
      <Navber />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Root;
