import { createBrowserRouter } from "react-router";
import Root from "./Root";
import Home from "../pages/Home";
import Contact from "../pages/Contact";
import Projects from "../component/Project";
import Skills from "../pages/Skills";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />, // IMPORTANT FIX
    children: [
      { index: true, element: <Home /> },
      { path: "project", element: <Projects /> },
      { path: "contact", element: <Contact /> },
      {
        path: "skills",
        element: <Skills />,
        loader: async () => {
          const res = await fetch("/Skills.json");
          return res.json();
        },
      },
    ],
  },
]);
