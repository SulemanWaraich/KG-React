import './App.css';
import React, { useRef } from 'react';
import Home from "./components/Home.tsx";
import About from "./components/About.tsx";
import Skill from "./components/Skill.tsx";
import Projects from "./components/Projects.tsx";
import Contact from "./components/Contact.tsx";

function App() {
  const homeRef = useRef<HTMLDivElement>(null);
  const aboutRef = useRef<HTMLDivElement>(null);
  const skillRef = useRef<HTMLDivElement>(null);
  const projectsRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);

  const scrollToRef = (ref: React.RefObject<HTMLDivElement>) => {
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <div className='flex flex-col items-center scroll-smooth font-body'>
        <div ref={homeRef}>
        <Home 
          onScrollToHome={() => scrollToRef(homeRef)}
          onScrollToAbout={() => scrollToRef(aboutRef)}
          onScrollToSkill={() => scrollToRef(skillRef)}
          onScrollToProjects={() => scrollToRef(projectsRef)}
          onScrollToContact={() => scrollToRef(contactRef)}
        />
        </div>
        <div ref={aboutRef}>
          <About />
        </div>
        <div ref={skillRef}>
          <Skill />
        </div>
        <div ref={projectsRef}>
          <Projects />
        </div>
        <div ref={contactRef}>
          <Contact />
        </div>
      </div>
    </>
  );
}

export default App;
