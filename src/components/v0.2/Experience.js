import React, { useState, useEffect, useRef } from "react";
import { FaBriefcase, FaChevronDown, FaRocket } from "react-icons/fa6";
import portfolioData from "../../data/portfolioData.json";

const Experience = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [expandedIndex, setExpandedIndex] = useState(0);
  const [, setHoveredIndex] = useState(null);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const currentRef = sectionRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  const experiences = portfolioData.experience;

  return (
    <section
      id="experience"
      ref={sectionRef}
      className="section-container bg-gray-950 relative overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px)`,
            backgroundSize: "50px 50px",
          }}
        ></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div
          className={`text-center mb-20 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="inline-block mb-4">
            <span className="px-4 py-2 rounded-full bg-primary-500/10 border border-primary-500/30 text-primary-400 text-sm font-medium">
              Career Journey
            </span>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent">
            Professional Experience
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Building enterprise solutions and leading development teams
          </p>
        </div>

        {/* Experience Cards */}
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div
              key={index}
              onMouseEnter={() => {
                setHoveredIndex(index);
                setExpandedIndex(index);
              }}
              onMouseLeave={() => setHoveredIndex(null)}
              onClick={() =>
                setExpandedIndex(expandedIndex === index ? null : index)
              }
              className={`group relative transition-all duration-1000 ${
                isVisible
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 translate-x-10"
              }`}
              style={{ transitionDelay: `${index * 0.15}s` }}
            >
              <div className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 rounded-3xl p-8 md:p-10 border border-gray-800 hover:border-primary-500/50 transition-all duration-500 transform hover:scale-[1.02] overflow-hidden">
                {/* Animated Gradient Background */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${exp.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                ></div>

                {/* Glow Effect */}
                <div
                  className={`absolute -inset-1 bg-gradient-to-r ${exp.color} rounded-3xl opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500`}
                ></div>

                {/* Active Border Glow */}
                {expandedIndex === index && (
                  <div
                    className={`absolute -inset-1 bg-gradient-to-r ${exp.color} rounded-3xl opacity-40 blur-lg animate-pulse`}
                  ></div>
                )}

                <div className="relative z-10">
                  {/* Header */}
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6 mb-6">
                    <div className="flex items-start gap-6 flex-1">
                      {/* Icon */}
                      <div
                        className={`flex-shrink-0 w-20 h-20 rounded-2xl bg-gradient-to-br ${exp.color} flex items-center justify-center text-4xl transform group-hover:rotate-12 group-hover:scale-110 transition-all duration-500 shadow-lg`}
                      >
                        {exp.icon}
                      </div>

                      {/* Title & Company */}
                      <div className="flex-1">
                        <h3 className="text-3xl font-bold text-white mb-2 group-hover:text-primary-400 transition-colors">
                          {exp.title}
                        </h3>
                        <div className="flex flex-wrap items-center gap-4 text-gray-400">
                          <div className="flex items-center gap-2">
                            <FaBriefcase className="text-primary-400" />
                            <span className="font-medium">{exp.company}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <span className="text-primary-400">📍</span>
                            <span>{exp.location}</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Period & Expand Button */}
                    <div className="flex items-start gap-4">
                      <div className="text-right">
                        <div className="flex items-center gap-2 text-gray-300 mb-1">
                          <span className="text-primary-400">📅</span>
                          <span className="font-medium">{exp.period}</span>
                        </div>
                        <span className="inline-block px-3 py-1 rounded-full bg-primary-500/10 border border-primary-500/30 text-primary-400 text-xs font-medium">
                          {exp.duration}
                        </span>
                      </div>
                      <button className="flex-shrink-0 p-3 rounded-xl bg-gray-800 hover:bg-gray-700 text-gray-400 hover:text-primary-400 transition-all duration-300 transform hover:rotate-180">
                        <FaChevronDown
                          className={`transition-transform duration-300 ${
                            expandedIndex === index ? "rotate-180" : ""
                          }`}
                        />
                      </button>
                    </div>
                  </div>

                  {/* Expandable Description */}
                  <div
                    className={`overflow-hidden transition-all duration-500 ${
                      expandedIndex === index
                        ? "max-h-[1000px] opacity-100"
                        : "max-h-0 opacity-0"
                    }`}
                  >
                    <div className="pt-6 border-t border-gray-800">
                      <ul className="grid md:grid-cols-2 gap-4">
                        {exp.description.map((item, itemIndex) => (
                          <li
                            key={itemIndex}
                            className="flex items-start gap-3 text-gray-300 group-hover:text-gray-100 transition-colors"
                          >
                            <span
                              className={`flex-shrink-0 w-6 h-6 rounded-full bg-gradient-to-br ${exp.color} flex items-center justify-center text-xs font-bold text-white mt-0.5`}
                            >
                              {itemIndex + 1}
                            </span>
                            <span className="flex-1">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              {/* Connector Line (except last) */}
              {index < experiences.length - 1 && (
                <div className="flex justify-center my-4">
                  <div className="w-1 h-8 bg-gradient-to-b from-primary-500 via-purple-500 to-pink-500 rounded-full"></div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Career Summary */}
        <div
          className={`mt-20 grid md:grid-cols-3 gap-6 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
          style={{ transitionDelay: "0.5s" }}
        >
          {[
            {
              label: "Years Experience",
              value: "5+",
              icon: <FaRocket />,
              color: "from-blue-500 to-cyan-500",
            },
            {
              label: "Projects Completed",
              value: "20+",
              icon: <FaBriefcase />,
              color: "from-purple-500 to-pink-500",
            },
            {
              label: "Technologies",
              value: "30+",
              icon: <FaRocket />,
              color: "from-green-500 to-teal-500",
            },
          ].map((stat, index) => (
            <div
              key={index}
              className="group relative bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-6 border border-gray-800 hover:border-primary-500/50 transition-all duration-300 transform hover:scale-105 overflow-hidden"
            >
              <div
                className={`absolute inset-0 bg-gradient-to-br ${stat.color} opacity-0 group-hover:opacity-10 transition-opacity`}
              ></div>
              <div className="relative z-10 text-center">
                <div
                  className={`inline-flex p-3 rounded-xl bg-gradient-to-br ${stat.color} bg-opacity-20 mb-4 transform group-hover:rotate-6 transition-transform`}
                >
                  <div className="text-2xl">{stat.icon}</div>
                </div>
                <div className="text-4xl font-bold text-white mb-2">
                  {stat.value}
                </div>
                <div className="text-sm text-gray-400 font-medium">
                  {stat.label}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
