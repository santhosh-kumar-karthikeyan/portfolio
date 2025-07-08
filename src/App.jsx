import "./styles/index.css";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Footer from "./components/Footer/Footer"
import Projects from "./components/Projects/Projects";

export default function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Projects projects={["proj1","proj2"]} />
      <Footer/>
    </>
  );
}
