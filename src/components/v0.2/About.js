import React, { useState, useEffect, useRef } from "react";
import {
  FaCode,
  FaServer,
  FaDatabase,
  FaCloud,
  FaRocket,
  FaLightbulb,
} from "react-icons/fa";

const About = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredCard, setHoveredCard] = useState(null);
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

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const services = [
    {
      icon: <FaCode className="text-4xl" />,
      title: "Backend Development",
      description: "Building robust REST APIs and microservices",
      stats: "95%",
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: <FaServer className="text-4xl" />,
      title: "Server Architecture",
      description: "Designing scalable cloud-based solutions",
      stats: "90%",
      color: "from-purple-500 to-pink-500",
    },
    {
      icon: <FaDatabase className="text-4xl" />,
      title: "Database Design",
      description: "Optimizing SQL and NoSQL performance",
      stats: "85%",
      color: "from-green-500 to-teal-500",
    },
    {
      icon: <FaCloud className="text-4xl" />,
      title: "Cloud Solutions",
      description: "Deploying on AWS and cloud platforms",
      stats: "80%",
      color: "from-orange-500 to-red-500",
    },
  ];

  const highlights = [
    { icon: <FaRocket />, text: "5+ Years Experience" },
    { icon: <FaLightbulb />, text: "Innovation Driven" },
    { icon: <FaServer />, text: "Enterprise Solutions" },
  ];

  return (
    <section
      id="about"
      ref={sectionRef}
      className="section-container bg-gray-950 relative overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, rgba(255,255,255,0.15) 1px, transparent 0)`,
            backgroundSize: "40px 40px",
          }}
        ></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div
          className={`text-center mb-16 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="inline-block mb-4">
            <span className="px-4 py-2 rounded-full bg-primary-500/10 border border-primary-500/30 text-primary-400 text-sm font-medium">
              About Me
            </span>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent">
            Crafting Digital Excellence
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Passionate Senior Java Developer building enterprise-level
            applications with cutting-edge technologies and innovative solutions
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Left Column - Large Photo */}
          <div
            className={`transition-all duration-1000 ${
              isVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 -translate-x-10"
            }`}
            style={{ transitionDelay: "0.1s" }}
          >
            <div className="relative group h-full rounded-3xl overflow-hidden">
              {/* Large Photo Card */}
              <div className="relative bg-gradient-to-br from-gray-900/80 via-gray-800/80 to-gray-900/80 rounded-3xl p-2 border border-gray-700/50 hover:border-primary-500/50 transition-all duration-500 overflow-hidden backdrop-blur-sm shadow-xl">
                {/* Glow Effect */}
                <div className="absolute -inset-1 bg-gradient-to-r from-primary-500 via-purple-500 to-pink-500 rounded-3xl opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500"></div>

                <div className="relative z-10 w-full aspect-square rounded-2xl overflow-hidden border-2 border-primary-400/30 shadow-2xl">
                  <img
                    src="/my-photo.jpg"
                    alt="Bhupati Pradhan"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                  {/* Overlay gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Main About Card */}
          <div
            className={`transition-all duration-1000 ${
              isVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 translate-x-10"
            }`}
            style={{ transitionDelay: "0.2s" }}
          >
            <div className="relative group h-full bg-gradient-to-br from-gray-900/80 via-gray-800/80 to-gray-900/80 rounded-3xl p-10 border border-gray-700/50 hover:border-primary-500/50 transition-all duration-500 overflow-hidden backdrop-blur-sm shadow-xl">
              {/* Animated Background */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary-500/10 via-purple-500/10 to-pink-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              {/* Glow Effect */}
              <div className="absolute -inset-1 bg-gradient-to-r from-primary-500 via-purple-500 to-pink-500 rounded-3xl opacity-0 group-hover:opacity-15 blur-xl transition-opacity duration-500"></div>

              <div className="relative z-10 space-y-6">
                {/* Header with Name */}
                <div>
                  <h3 className="text-4xl font-bold text-white mb-2">
                    Bhupati Pradhan
                  </h3>
                  <p className="text-lg text-primary-400 font-semibold">
                    Senior Java Developer & Consultant
                  </p>
                </div>

                <div className="space-y-4 text-gray-300 leading-relaxed">
                  <p>
                    I'm a dedicated Senior Java Developer and Consultant with
                    extensive experience in building enterprise-level
                    applications. Currently working as a{" "}
                    <span className="text-primary-400 font-semibold">
                      Consultant at BIG 4
                    </span>
                    , I specialize in software development and cloud
                    engineering, with expertise in Java, Python, and various
                    DevOps tools.
                  </p>
                  <p>
                    Throughout my career, I've been appreciated by team members
                    for my sense of responsibility and innovative
                    problem-solving abilities. I take pride in contributing
                    ideas that enhance the overall efficiency of our projects.
                  </p>
                  <p>
                    I hold a{" "}
                    <span className="text-purple-400 font-semibold">
                      Bachelor's degree in Electrical Engineering
                    </span>{" "}
                    from Gandhi Institute For Technology, Bhubaneswar, and I'm
                    passionate about creating efficient, scalable, and
                    maintainable software solutions that make a real impact.
                  </p>
                </div>

                {/* Highlights */}
                <div className="flex flex-wrap gap-4 pt-4">
                  {highlights.map((highlight, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-2 px-4 py-2 rounded-xl bg-gray-800/50 border border-gray-700 text-gray-300 hover:border-primary-500/50 transition-all"
                    >
                      <span className="text-primary-400">{highlight.icon}</span>
                      <span className="text-sm font-medium">
                        {highlight.text}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Services Grid Below */}
        <div
          className={`grid md:grid-cols-2 lg:grid-cols-4 gap-6 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
          style={{ transitionDelay: "0.3s" }}
        >
          {services.map((service, index) => (
            <div
              key={index}
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
              className={`group relative bg-gradient-to-br from-gray-900/80 to-gray-800/80 rounded-2xl p-6 border border-gray-700/50 hover:border-primary-500/50 transition-all duration-500 transform hover:scale-105 overflow-hidden backdrop-blur-sm shadow-lg ${
                hoveredCard === index ? "shadow-2xl shadow-primary-500/20" : ""
              }`}
            >
              {/* Gradient Overlay */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-15 transition-opacity duration-500 rounded-2xl`}
              ></div>

              {/* Glow Border */}
              {hoveredCard === index && (
                <div
                  className={`absolute -inset-1 bg-gradient-to-br ${service.color} rounded-2xl opacity-25 blur-lg`}
                ></div>
              )}

              <div className="relative z-10">
                <div
                  className={`inline-flex p-3 rounded-xl bg-gradient-to-br ${service.color} bg-opacity-25 mb-4 transform group-hover:rotate-6 group-hover:scale-110 transition-all duration-300 backdrop-blur-sm`}
                >
                  <div className="text-white">{service.icon}</div>
                </div>
                <h4 className="text-lg font-bold text-white mb-2 group-hover:text-primary-400 transition-colors">
                  {service.title}
                </h4>
                <p className="text-sm text-gray-400 mb-4">
                  {service.description}
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex-1 h-2 bg-gray-800/50 rounded-full overflow-hidden backdrop-blur-sm">
                    <div
                      className={`h-full bg-gradient-to-r ${
                        service.color
                      } rounded-full transition-all duration-1000 ${
                        isVisible ? "w-full" : "w-0"
                      }`}
                      style={{
                        width: isVisible ? service.stats : "0%",
                        transitionDelay: `${index * 0.1}s`,
                      }}
                    ></div>
                  </div>
                  <span
                    className={`ml-4 font-bold text-transparent bg-clip-text bg-gradient-to-r ${service.color}`}
                  >
                    {service.stats}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Feature Cards */}
        <div
          className={`grid md:grid-cols-3 gap-6 transition-all duration-1000 mt-12 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
          style={{ transitionDelay: "0.4s" }}
        >
          {[
            {
              title: "Enterprise Solutions",
              desc: "Building scalable systems",
              color: "from-blue-500 to-cyan-500",
            },
            {
              title: "Microservices",
              desc: "Architecting distributed systems",
              color: "from-purple-500 to-pink-500",
            },
            {
              title: "Cloud Native",
              desc: "AWS & DevOps expertise",
              color: "from-orange-500 to-red-500",
            },
          ].map((feature, index) => (
            <div
              key={index}
              className="group relative bg-gray-900/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-800 hover:border-primary-500/50 transition-all duration-300 transform hover:-translate-y-2"
            >
              <div
                className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity`}
              ></div>
              <div className="relative z-10">
                <h4 className="text-lg font-bold text-white mb-2">
                  {feature.title}
                </h4>
                <p className="text-sm text-gray-400">{feature.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
