import { Outlet } from "react-router";
import CursorSpotlight from "../component/CursorSpotlight";
import Navber from "../component/Navber";
import bg8 from "../assets/images/bg8.jpg";
import Footer from "../component/Footer";

const Root = () => {
  return (
    <>
      {/* BACKGROUND IMAGE */}
      <img
        src={bg8}
        className="fixed inset-0 w-full h-full object-cover opacity-40 z-0"
      />
      {/* CURSOR SPOTLIGHT (TOP LAYER) */}
      <CursorSpotlight />
      {/* MAIN CONTENT */}
      <div className="relative z-10 flex flex-col min-h-screen">
        <Navber />
        <main className="flex-1">
          <Outlet />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Root;
