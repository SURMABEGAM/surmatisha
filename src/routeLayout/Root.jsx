import React from "react";
import { Outlet } from "react-router";
import Navber from "../component/Navber";
import Footer from "../component/Footer";
import bg8 from "../assets/images/bg8.jpg";

const Root = () => {
  return (
    <>
      <img
        src={bg8}
        alt="Background"
        className="fixed top-0 left-0 bottom-0 right-0 w-full h-full object-cover opacity-50"
      />

      {/* CONTENT */}
      <div className="relative z-10 flex flex-col min-h-screen">
        <Navber />

        <main>
          <Outlet />
        </main>

        <Footer />
      </div>
    </>
  );
};

export default Root;
