import React from "react";

/**
 * MinimalToggle
 * A compact pill button that sits in the Navbar.
 * Props:
 *   isMinimal  – boolean, whether minimal mode is currently active
 *   onToggle   – () => void, called when the button is clicked
 *   isScrolled – boolean, whether the navbar has scrolled (for color variant)
 */
const MinimalToggle = ({ isMinimal, onToggle, isScrolled }) => {
  return (
    <button
      onClick={onToggle}
      title={isMinimal ? "Switch to Full View" : "Switch to Minimal View"}
      aria-label={isMinimal ? "Switch to Full View" : "Switch to Minimal View"}
      className={`
        relative flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold
        border transition-all duration-300 select-none
        ${
          isMinimal
            ? // Active minimal state – light/white pill
              "bg-white text-gray-800 border-gray-300 shadow-sm hover:shadow-md"
            : isScrolled
            ? // Scrolled + full view – subtle dark pill
              "bg-gray-800/70 text-gray-300 border-gray-700 hover:bg-gray-700 hover:text-white"
            : // Hero / no scroll + full view – semi-transparent white
              "bg-white/10 text-white border-white/20 hover:bg-white/20"
        }
      `}
    >
      {/* Icon: lines for minimal / sparkles for full */}
      {isMinimal ? (
        /* Full view icon – gradient dots */
        <span className="flex gap-0.5 items-center">
          <span className="w-1.5 h-1.5 rounded-full bg-blue-500" />
          <span className="w-1.5 h-2.5 rounded-full bg-purple-500" />
          <span className="w-1.5 h-1.5 rounded-full bg-pink-500" />
        </span>
      ) : (
        /* Minimal icon – three stacked lines */
        <span className="flex flex-col gap-0.5">
          <span className="w-3.5 h-px rounded-full bg-current" />
          <span className="w-2.5 h-px rounded-full bg-current" />
          <span className="w-3 h-px rounded-full bg-current" />
        </span>
      )}
      <span>{isMinimal ? "Full" : "Minimal"}</span>
    </button>
  );
};

export default MinimalToggle;
