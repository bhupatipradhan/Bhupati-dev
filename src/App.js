import React, { useState, useEffect } from "react";

// v0.2 Components (Full / Modernized)
import Navbar      from "./components/v0.2/Navbar";
import Hero        from "./components/v0.2/Hero";
import About       from "./components/v0.2/About";
import Skills      from "./components/v0.2/Skills";
import Projects    from "./components/v0.2/Projects";
import Experience  from "./components/v0.2/Experience";
import Games       from "./components/v0.2/Games";
import Contact     from "./components/v0.2/Contact";
import Footer      from "./components/v0.2/Footer";
import ForEveryone from "./components/v0.2/ForEveryone";
import FloatingNav from "./components/v0.2/FloatingNav";

// Minimal View
import MinimalView   from "./components/MinimalView";
import MinimalToggle from "./components/MinimalToggle";

function App() {
  const [isScrolled,  setIsScrolled]  = useState(false);
  const [isMinimal,   setIsMinimal]   = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleToggleMinimal = () => {
    setIsMinimal((prev) => !prev);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="App">
      {/* Navbar always visible – receives the toggle */}
      <Navbar
        isScrolled={isScrolled}
        isMinimal={isMinimal}
        onToggleMinimal={handleToggleMinimal}
      />

      {isMinimal ? (
        /* ── Minimal résumé view ───────────────────────────────── */
        <MinimalView />
      ) : (
        /* ── Full modernized view ──────────────────────────────── */
        <>
          <Hero />
          <About />
          <Skills />
          <Experience />
          <Projects />
          <ForEveryone />
          <Games />
          <Contact />
          <Footer />
          <FloatingNav />
        </>
      )}
    </div>
  );
}

export default App;
