import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
// import {
//   BrowserRouter,
//   createBrowserRouter,
//   createRoutesFromElements,
//   Route,
//   RouterProvider,
// } from "react-router-dom";
// import Home from "./components/Home.tsx";
// import About from "./components/About.tsx";
// import Skill from "./components/Skill.tsx";
// import Projects from "./components/Projects.tsx";
// import Contact from "./components/Contact.tsx";

// const router = createBrowserRouter(
//   createRoutesFromElements(
//     <Route path="/" element={<App />}>
//       <Route index element={<Home />}/>
//       <Route path="/about" element={<About />} />
//       <Route path="/skills" element={<Skill />} />
//       <Route path="/projects" element={<Projects />} />
//       <Route path="/contact" element={<Contact />} />
//     </Route>
//   )
// );

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
