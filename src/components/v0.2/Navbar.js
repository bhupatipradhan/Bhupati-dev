import React, { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import MinimalToggle from "../MinimalToggle";

const navLinks = [
  { name: "Home",       href: "#home",       id: "home"       },
  { name: "About",      href: "#about",      id: "about"      },
  { name: "Skills",     href: "#skills",     id: "skills"     },
  { name: "Experience", href: "#experience", id: "experience" },
  { name: "Projects",   href: "#projects",   id: "projects"   },
  { name: "Solutions",  href: "#solutions",  id: "solutions"  },
  { name: "Games",      href: "#games",      id: "games"      },
  { name: "Contact",    href: "#contact",    id: "contact"    },
];

const Navbar = ({ isScrolled, isMinimal, onToggleMinimal }) => {
  const [isMenuOpen,   setIsMenuOpen]   = useState(false);
  const [activeLink,   setActiveLink]   = useState("home");
  const [readProgress, setReadProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      // Active section tracking
      const sections  = navLinks.map((l) => document.querySelector(l.href));
      const scrollPos = window.scrollY + 100;
      sections.forEach((section, index) => {
        if (section) {
          const { offsetTop, offsetHeight } = section;
          if (scrollPos >= offsetTop && scrollPos < offsetTop + offsetHeight) {
            setActiveLink(navLinks[index].id);
          }
        }
      });

      // Read progress bar
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      setReadProgress(docHeight > 0 ? (scrollTop / docHeight) * 100 : 0);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLinkClick = (id) => {
    setActiveLink(id);
    setIsMenuOpen(false);
  };

  return (
    <>
      {/* Reading Progress Bar */}
      <div className="fixed top-0 left-0 right-0 z-[60] h-[3px]">
        <div
          className="h-full bg-gradient-to-r from-primary-400 via-purple-400 to-pink-400"
          style={{
            width: `${readProgress}%`,
            transition: "width 0.15s ease-out",
            boxShadow: "0 0 8px rgba(45,156,255,0.7), 0 0 16px rgba(168,85,247,0.4)",
          }}
        />
      </div>

      <nav
        className={`fixed top-[3px] left-0 right-0 z-50 transition-all duration-500 ${
          isMinimal
            ? "bg-white/95 backdrop-blur-xl border-b border-gray-200 shadow-sm"
            : isScrolled
            ? "bg-gray-950/90 backdrop-blur-xl shadow-2xl shadow-black/30 border-b border-gray-800/40"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">

            {/* ── Logo ── */}
            <div className="flex-shrink-0 flex items-center gap-3">
              <div className="relative">
                <img
                  src={`${process.env.PUBLIC_URL}/ChatGPT Image Nov 22, 2025, 12_39_27 AM.png`}
                  alt="Bhupati"
                  className={`w-10 h-10 rounded-full object-cover ${isMinimal ? "" : "animate-logo-glow"}`}
                />
                {!isMinimal && (
                  <div className="absolute -bottom-0.5 -right-0.5 w-3 h-3 bg-green-500 rounded-full border-2 border-gray-950 animate-pulse" />
                )}
              </div>
              <a
                href="#home"
                onClick={() => handleLinkClick("home")}
                className={`text-xl font-extrabold transition-all duration-300 hover:scale-105 inline-block ${
                  isMinimal
                    ? "text-gray-900"
                    : "bg-gradient-to-r from-primary-400 via-purple-400 to-pink-400 bg-clip-text text-transparent"
                }`}
              >
                Bhupati
              </a>
            </div>

            {/* ── Desktop Nav ── */}
            <div className="hidden md:flex items-center gap-2">
              {/* Nav links – hidden in minimal mode */}
              {!isMinimal && navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => handleLinkClick(link.id)}
                  className={`relative px-4 py-2 text-sm font-medium rounded-lg transition-all duration-300 group ${
                    activeLink === link.id
                      ? isScrolled
                        ? "text-primary-400 bg-primary-500/10"
                        : "text-white bg-white/10"
                      : isScrolled
                      ? "text-gray-400 hover:text-primary-400 hover:bg-primary-500/5"
                      : "text-white/70 hover:text-white hover:bg-white/10"
                  }`}
                >
                  {link.name}
                  <span
                    className={`absolute bottom-0 left-1/2 -translate-x-1/2 h-0.5 rounded-full bg-gradient-to-r from-primary-400 to-purple-400 transition-all duration-300 ${
                      activeLink === link.id ? "w-4/5" : "w-0 group-hover:w-1/2"
                    }`}
                  />
                </a>
              ))}

              {/* Divider */}
              {!isMinimal && (
                <div className={`w-px h-5 mx-1 ${isScrolled ? "bg-gray-700" : "bg-white/20"}`} />
              )}

              {/* Minimal / Full Toggle */}
              <MinimalToggle
                isMinimal={isMinimal}
                onToggle={onToggleMinimal}
                isScrolled={isScrolled || isMinimal}
              />
            </div>

            {/* ── Mobile: Toggle + Hamburger ── */}
            <div className="md:hidden flex items-center gap-2">
              <MinimalToggle
                isMinimal={isMinimal}
                onToggle={onToggleMinimal}
                isScrolled={isScrolled || isMinimal}
              />
              {!isMinimal && (
                <button
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                  className={`p-2 rounded-lg transition-all duration-300 ${
                    isScrolled ? "text-gray-300 hover:bg-gray-800" : "text-white hover:bg-white/10"
                  }`}
                  aria-label="Toggle menu"
                >
                  {isMenuOpen ? (
                    <FaTimes size={22} className="animate-spin-once" />
                  ) : (
                    <FaBars size={22} />
                  )}
                </button>
              )}
            </div>
          </div>
        </div>

        {/* Mobile Menu (full view only) */}
        {!isMinimal && (
          <div
            className={`md:hidden bg-gray-950/95 backdrop-blur-xl border-b border-gray-800/50 transition-all duration-400 overflow-hidden ${
              isMenuOpen ? "max-h-[30rem] opacity-100" : "max-h-0 opacity-0"
            }`}
          >
            <div className="px-4 py-3 space-y-1">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => handleLinkClick(link.id)}
                  className={`flex items-center gap-3 px-4 py-3 text-sm font-medium rounded-xl transition-all duration-300 ${
                    activeLink === link.id
                      ? "bg-gradient-to-r from-primary-500/20 to-purple-500/20 text-white border border-primary-500/30"
                      : "text-gray-400 hover:bg-gray-800/60 hover:text-primary-400"
                  }`}
                >
                  <span
                    className={`w-1.5 h-1.5 rounded-full ${
                      activeLink === link.id ? "bg-primary-400 animate-pulse" : "bg-gray-700"
                    }`}
                  />
                  {link.name}
                </a>
              ))}
            </div>
          </div>
        )}

        <style>{`
          @keyframes spin-once {
            from { transform: rotate(0deg); }
            to   { transform: rotate(90deg); }
          }
          .animate-spin-once { animation: spin-once 0.25s ease-out; }
        `}</style>
      </nav>
    </>
  );
};

export default Navbar;
