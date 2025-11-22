import React, { useState, useEffect } from "react";

// v0.2 Components (Default)
import Navbar from "./components/v0.2/Navbar";
import Hero from "./components/v0.2/Hero";
import About from "./components/v0.2/About";
import Skills from "./components/v0.2/Skills";
import Projects from "./components/v0.2/Projects";
import Experience from "./components/v0.2/Experience";
import Games from "./components/v0.2/Games";
import Contact from "./components/v0.2/Contact";
import Footer from "./components/v0.2/Footer";

function App() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="App">
      <Navbar isScrolled={isScrolled} />
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <Games />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
