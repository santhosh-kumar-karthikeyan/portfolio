import { useRef, useEffect } from "react";
import { useLocation } from "react-router-dom";
import "./styles/index.css";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Footer from "./components/Footer/Footer";
import Projects from "./components/Projects/Projects";
import projects from "./utils/projects.json";

export default function App() {
  const projectsRef = useRef(null);
  const location = useLocation();
  useEffect(() => {
    if (location.pathname === "/Projects") {
      projectsRef.current?.scrollIntoView({ behavior: "smooth" });
    }
  }, [location]);
  return (
    <>
      <Navbar />
      <Hero />
      <div ref={projectsRef}>
        <Projects projects={projects} />
      </div>
      <Footer />
    </>
  );
}
