import React, { useState, useEffect } from "react";
import { FaGamepad, FaEnvelope, FaArrowUp } from "react-icons/fa";

const scrollTo = (id) => {
  const el = document.querySelector(id);
  if (el) el.scrollIntoView({ behavior: "smooth" });
};

const FloatingNav = () => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop    = window.scrollY;
      const docHeight    = document.documentElement.scrollHeight - window.innerHeight;
      const progress     = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
      setScrollProgress(progress);
      setShowTop(scrollTop > 400);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const radius        = 22;
  const circumference = 2 * Math.PI * radius;
  const strokeOffset  = circumference - (scrollProgress / 100) * circumference;

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-center gap-3">
      {/* Scroll to Top with Progress Ring */}
      {showTop && (
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          title="Back to Top"
          aria-label="Back to top"
          className="relative flex items-center justify-center w-14 h-14 rounded-2xl bg-gray-900/95 backdrop-blur-md border border-gray-700/60 shadow-xl hover:scale-110 active:scale-95 transition-all duration-300 group"
          style={{
            boxShadow: `0 0 0 1px rgba(45,156,255,0.2), 0 8px 32px rgba(0,0,0,0.4)`,
          }}
        >
          {/* SVG progress ring */}
          <svg
            className="absolute inset-0 w-full h-full -rotate-90"
            viewBox="0 0 56 56"
          >
            {/* Background ring */}
            <circle
              cx="28" cy="28" r={radius}
              fill="none"
              stroke="rgba(255,255,255,0.05)"
              strokeWidth="3"
            />
            {/* Progress ring */}
            <circle
              cx="28" cy="28" r={radius}
              fill="none"
              stroke="url(#progressGrad)"
              strokeWidth="3"
              strokeLinecap="round"
              strokeDasharray={circumference}
              strokeDashoffset={strokeOffset}
              style={{ transition: "stroke-dashoffset 0.3s ease" }}
            />
            <defs>
              <linearGradient id="progressGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%"   stopColor="#2d9cff" />
                <stop offset="100%" stopColor="#a855f7" />
              </linearGradient>
            </defs>
          </svg>
          <FaArrowUp className="relative z-10 text-primary-400 group-hover:text-white transition-colors text-sm" />
        </button>
      )}

      {/* Games */}
      <a
        href="#games"
        onClick={(e) => { e.preventDefault(); scrollTo("#games"); }}
        title="Games"
        aria-label="Go to Games"
        className="flex items-center justify-center w-14 h-14 rounded-2xl bg-gray-900/95 backdrop-blur-md text-primary-400 border border-gray-700/60 shadow-xl hover:bg-primary-500/90 hover:text-white hover:border-primary-400/50 hover:scale-110 active:scale-95 transition-all duration-300 hover:shadow-primary-500/30 hover:shadow-2xl"
      >
        <FaGamepad className="text-xl" />
      </a>

      {/* Contact */}
      <a
        href="#contact"
        onClick={(e) => { e.preventDefault(); scrollTo("#contact"); }}
        title="Contact"
        aria-label="Go to Contact"
        className="flex items-center justify-center w-14 h-14 rounded-2xl bg-gray-900/95 backdrop-blur-md text-purple-400 border border-gray-700/60 shadow-xl hover:bg-purple-500/90 hover:text-white hover:border-purple-400/50 hover:scale-110 active:scale-95 transition-all duration-300 hover:shadow-purple-500/30 hover:shadow-2xl"
      >
        <FaEnvelope className="text-xl" />
      </a>
    </div>
  );
};

export default FloatingNav;
