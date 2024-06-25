import React from "react";
import "./App.css";
import Navbar from "./nav2";
import Signup from "./Signup";
import About from "./pages/About";
import Contact from "./pages/Contat";
import EducationSection from "./pages/Eductaion";
import ExperienceSection from "./pages/Experice";
import Header from "./pages/Header";
import Projects from "./pages/Project";
import SkillsSection from "./pages/Skill";
import { Fade } from "react-awesome-reveal";

function App() {
  return (
    <div className="">
      <Fade direction="up" cascade>
        <Header />
      </Fade>
      <hr className="bg-white " />
      <Fade cascade direction="left" duration={500}>
        <EducationSection />
      </Fade>
      <hr className="bg-slate-900 " />
      <Fade direction="right" duration={500}>
        <SkillsSection />
      </Fade>
      <Fade direction="left" duration={500}>
        <ExperienceSection />
      </Fade>
      <Fade direction="right" duration={500}>
        <Projects />
      </Fade>
      <Fade direction="left" duration={500}>
        <Contact />
      </Fade>
      <Fade direction="right" duration={1000}>
        <Signup />
      </Fade>
    </div>
  );
}

export default App;
