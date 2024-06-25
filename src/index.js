import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./index.css";
import App from "./App";

import SkillsSection from "./pages/Skill";
import EducationSection from "./pages/Eductaion";
import ExperienceSection from "./pages/Experice";
import Projects from "./pages/Project";
import Contact from "./pages/Contat";
import Navbar from "./Navbar";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <Router>
    <Navbar />
    <Routes>
      <Route path="/" element={<App />} />
      {/* <Route path="/about" element={<A />} /> */}
      <Route path="/skills" element={<SkillsSection />} />
      <Route path="/education" element={<EducationSection />} />
      <Route path="/experience" element={<ExperienceSection />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  </Router>
);
