import { createBrowserRouter } from "react-router";
import Root from "./Root";
import Home from "../pages/Home";

import Contact from "../pages/Contact";

import Projects from "../component/Project";
import Skills from "../pages/Skills";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [{ index: true, Component: Home }],
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
    path: "/skills",
    Component: Skills,
    loader: async () => {
      const res = await fetch("/Skills.json");
      const data = await res.json();
      console.log("Skills data loaded:", data);
      return data;
    },
  },
]);
