import React, { useState, useEffect } from 'react';
import { useVersion } from './context/VersionContext';

// v0.1 Components
import NavbarV01 from './components/v0.1/Navbar';
import HeroV01 from './components/v0.1/Hero';
import AboutV01 from './components/v0.1/About';
import SkillsV01 from './components/v0.1/Skills';
import ProjectsV01 from './components/v0.1/Projects';
import ExperienceV01 from './components/v0.1/Experience';
import ContactV01 from './components/v0.1/Contact';
import FooterV01 from './components/v0.1/Footer';

// v0.2 Components
import NavbarV02 from './components/v0.2/Navbar';
import HeroV02 from './components/v0.2/Hero';
import AboutV02 from './components/v0.2/About';
import SkillsV02 from './components/v0.2/Skills';
import ProjectsV02 from './components/v0.2/Projects';
import ExperienceV02 from './components/v0.2/Experience';
import ContactV02 from './components/v0.2/Contact';
import FooterV02 from './components/v0.2/Footer';

function App() {
  const { version } = useVersion();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Render v0.1 components
  if (version === 'v0.1') {
    return (
      <div className="App">
        <NavbarV01 isScrolled={isScrolled} />
        <HeroV01 />
        <AboutV01 />
        <SkillsV01 />
        <ExperienceV01 />
        <ProjectsV01 />
        <ContactV01 />
        <FooterV01 />
      </div>
    );
  }

  // Render v0.2 components
  return (
    <div className="App">
      <NavbarV02 isScrolled={isScrolled} />
      <HeroV02 />
      <AboutV02 />
      <SkillsV02 />
      <ExperienceV02 />
      <ProjectsV02 />
      <ContactV02 />
      <FooterV02 />
    </div>
  );
}

export default App;


