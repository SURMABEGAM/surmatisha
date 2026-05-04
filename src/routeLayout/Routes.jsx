import { createBrowserRouter } from "react-router";
import Root from "./Root";
import Home from "../pages/Home";
import About from "../pages/About";
import Contact from "../pages/Contact";
import Skilles from "../pages/Skilles";
import Projects from "../component/Project";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [{ index: true, Component: Home }],
  },
  {
    path: "/about",
    Component: About,
  },
  {
    path: "/project",
    Component: Projects,
  },
  {
    path: "/contact",
    Component: Contact,
  },
  {
    path: "/skilles",
    Component: Skilles,
    loader: async () => {
      const res = await fetch("/Skilles.json");
      const data = await res.json();
      console.log("Skilles data loaded:", data);
      return data;
    },
  },
]);
