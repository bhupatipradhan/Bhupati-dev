import React from "react";
import { FaGamepad, FaEnvelope } from "react-icons/fa";

const scrollTo = (id) => {
  const el = document.querySelector(id);
  if (el) el.scrollIntoView({ behavior: "smooth" });
};

const FloatingNav = () => {
  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-center gap-3">
      <a
        href="#games"
        onClick={(e) => {
          e.preventDefault();
          scrollTo("#games");
        }}
        title="Games"
        aria-label="Go to Games"
        className="flex items-center justify-center w-14 h-14 rounded-2xl bg-gray-800/95 backdrop-blur-md text-primary-400 border border-gray-600/50 shadow-lg hover:bg-primary-500/90 hover:text-white hover:border-primary-400/50 hover:scale-110 active:scale-95 transition-all duration-300"
      >
        <FaGamepad className="text-2xl" />
      </a>
      <a
        href="#contact"
        onClick={(e) => {
          e.preventDefault();
          scrollTo("#contact");
        }}
        title="Contact"
        aria-label="Go to Contact"
        className="flex items-center justify-center w-14 h-14 rounded-2xl bg-gray-800/95 backdrop-blur-md text-primary-400 border border-gray-600/50 shadow-lg hover:bg-primary-500/90 hover:text-white hover:border-primary-400/50 hover:scale-110 active:scale-95 transition-all duration-300"
      >
        <FaEnvelope className="text-2xl" />
      </a>
    </div>
  );
};

export default FloatingNav;
