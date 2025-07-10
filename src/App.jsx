import "./styles/index.css";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Footer from "./components/Footer/Footer";
import Projects from "./components/Projects/Projects";
import projects from "./utils/projects.json";

export default function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Projects projects={projects} />
      <Footer />
    </>
  );
}
