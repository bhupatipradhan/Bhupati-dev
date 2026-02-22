import React, { useState, useEffect, useRef } from "react";
import {
  FaExternalLinkAlt,
  FaJava,
  FaDatabase,
  FaStar,
  FaCode,
} from "react-icons/fa";
import { SiSpring, SiDocker } from "react-icons/si";

const Projects = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredProject, setHoveredProject] = useState(null);
  const [selectedFilter, setSelectedFilter] = useState("All");
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

  const projects = [
    {
      title: "Intellicentrics",
      description:
        "Comprehensive healthcare solution using FHIR R4 standard resources. Developed functionalities including appointment scheduling, insurance, credential management, practitioner management, and patient management. Implemented microservices architecture.",
      technologies: [
        "Java",
        "Spring Boot",
        "Hibernate",
        "Node.js",
        "AWS",
        "Kafka",
        "Docker",
        "Jenkins",
        "Python",
        "WSO2 API Gateway",
        "FHIR",
        "SonarQube",
      ],
      owner: "THOUGHTi India Pvt. Ltd.",
      image: "🏥",
      role: "Senior Developer",
      color: "from-blue-500 to-cyan-500",
      gradient: "from-blue-500/20 via-cyan-500/20 to-blue-500/20",
      featured: true,
      category: "Healthcare",
    },
    {
      title: "Neurex",
      description:
        "AI-based product harnessing advanced algorithms and NLP to extract valuable information from lengthy, unstructured patient notes. Efficiently identifies the most suitable SNOMED CT code, saving significant clinician time.",
      technologies: [
        "Java",
        "Spring Boot",
        "Hibernate",
        "React",
        "Node.js",
        "HL7",
        "RESTful Services",
      ],
      owner: "THOUGHTi India Pvt. Ltd.",
      image: "🤖",
      role: "Senior Developer & Team Lead",
      color: "from-purple-500 to-pink-500",
      gradient: "from-purple-500/20 via-pink-500/20 to-purple-500/20",
      featured: true,
      category: "AI/Healthcare",
    },
    {
      title: "Smart On FHIR",
      description:
        "Application utilizing g10 Standardized API to achieve ONC Certification. Includes protocols for authentication and authorization. Utilizes HAPI-FHIR with unique codes as the project cornerstone.",
      technologies: [
        "Java",
        "Spring Boot",
        "Hibernate",
        "React",
        "Node.js",
        "HAPI-FHIR",
        "OAuth2",
        "RESTful Services",
      ],
      owner: "THOUGHTi India Pvt. Ltd.",
      image: "💡",
      role: "Senior Developer & Team Lead",
      color: "from-green-500 to-teal-500",
      gradient: "from-green-500/20 via-teal-500/20 to-green-500/20",
      featured: false,
      category: "Healthcare",
    },
    {
      title: "iMTD",
      description:
        "Organization can look up, verify, and translate medical terms with iMTD. A container for any structured medical terminology database using Unified Medical Language System (UMLS).",
      technologies: [
        "Java",
        "Spring Boot",
        "Hibernate",
        "PostgreSQL",
        "Apache Ctakes",
        "UMLS",
        "RESTful Services",
      ],
      owner: "THOUGHTi India Pvt. Ltd.",
      image: "📚",
      role: "Developer",
      color: "from-orange-500 to-red-500",
      gradient: "from-orange-500/20 via-red-500/20 to-orange-500/20",
      featured: false,
      category: "Healthcare",
    },
    {
      title: "Epic-Mapping",
      description:
        "Mapping to POJO class to retrieve EPIC EMR (Electronic Medical Report) and store in Mongo database. Trigger monitors database changes and generates EPIC data to send to EPIC server.",
      technologies: [
        "Java",
        "Spring Boot",
        "Hibernate",
        "Apache Camel",
        "MongoDB",
      ],
      owner: "THOUGHTi India Pvt. Ltd.",
      image: "🗺️",
      role: "Developer",
      color: "from-yellow-500 to-orange-500",
      gradient: "from-yellow-500/20 via-orange-500/20 to-yellow-500/20",
      featured: false,
      category: "Healthcare",
    },
    {
      title: "Tenant Management",
      description:
        "Clinics use custom authentication logic for login, and multiple FHIR R4 resources are used to store data. Used to register and store multiple clinics and their data under a single DB.",
      technologies: [
        "Java",
        "Spring Boot",
        "Hibernate",
        "JSP",
        "RESTful Services",
        "MySQL",
        "Web Services",
      ],
      owner: "THOUGHTi India Pvt. Ltd.",
      image: "🏢",
      role: "Developer",
      color: "from-indigo-500 to-purple-500",
      gradient: "from-indigo-500/20 via-purple-500/20 to-indigo-500/20",
      featured: false,
      category: "Enterprise",
    },
    {
      title: "E-health Exchange",
      description:
        "Exchange of health information application supporting both national and local exchanges. Uses secure network standards to ensure health information exchanges are compatible.",
      technologies: ["Java", "Spring", "MySQL", "Servlet", "JDBC"],
      owner: "THOUGHTi India Pvt. Ltd.",
      image: "🔄",
      role: "Developer",
      color: "from-pink-500 to-rose-500",
      gradient: "from-pink-500/20 via-rose-500/20 to-pink-500/20",
      featured: false,
      category: "Healthcare",
    },
  ];

  const categories = ["All", ...new Set(projects.map((p) => p.category))];
  const filteredProjects =
    selectedFilter === "All"
      ? projects
      : projects.filter((p) => p.category === selectedFilter);

  const getTechIcon = (tech) => {
    const techLower = tech.toLowerCase();
    if (techLower.includes("java")) return <FaJava />;
    if (techLower.includes("spring")) return <SiSpring />;
    if (techLower.includes("docker")) return <SiDocker />;
    if (
      techLower.includes("mysql") ||
      techLower.includes("postgresql") ||
      techLower.includes("mongodb")
    )
      return <FaDatabase />;
    return <FaCode />;
  };

  return (
    <section
      id="projects"
      ref={sectionRef}
      className="section-container bg-gradient-to-br from-gray-900 via-gray-950 to-gray-900 relative overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-primary-500 rounded-full filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-purple-500 rounded-full filter blur-3xl animate-pulse animation-delay-2000"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div
          className={`text-center mb-12 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="inline-block mb-4">
            <span className="px-4 py-2 rounded-full bg-primary-500/10 border border-primary-500/30 text-primary-400 text-sm font-medium">
              Portfolio
            </span>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Showcasing my work in building robust and scalable Java applications
          </p>
        </div>

        {/* Filter Tabs */}
        <div
          className={`flex flex-wrap justify-center gap-3 mb-12 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
          style={{ transitionDelay: "0.1s" }}
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedFilter(category)}
              className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 ${
                selectedFilter === category
                  ? "bg-gradient-to-r from-primary-500 to-purple-500 text-white shadow-lg shadow-primary-500/50"
                  : "bg-gray-800/50 text-gray-400 border border-gray-700 hover:border-primary-500/50 hover:text-white"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Projects Grid - Masonry Style */}
        <div
          className={`grid md:grid-cols-2 lg:grid-cols-3 gap-6 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
          style={{ transitionDelay: "0.2s" }}
        >
          {filteredProjects.map((project, index) => (
            <div
              key={index}
              onMouseEnter={() => setHoveredProject(index)}
              onMouseLeave={() => setHoveredProject(null)}
              className={`group relative bg-gradient-to-br from-gray-900/80 via-gray-800/80 to-gray-900/80 rounded-3xl overflow-hidden border border-gray-700/50 transition-all duration-500 transform hover:scale-105 hover:-translate-y-2 cursor-pointer backdrop-blur-sm shadow-lg ${
                hoveredProject === index
                  ? "border-primary-500/50 shadow-2xl shadow-primary-500/30"
                  : "hover:border-primary-500/30"
              } ${project.featured ? "lg:col-span-2 lg:row-span-1" : ""}`}
            >
              {/* Featured Badge */}
              {project.featured && (
                <div className="absolute top-4 right-4 z-20 flex items-center gap-2 px-3 py-1.5 rounded-full bg-gradient-to-r from-yellow-400 to-orange-500 text-black text-xs font-bold shadow-lg">
                  <FaStar className="text-xs" />
                  Featured
                </div>
              )}

              {/* Category Badge */}
              <div className="absolute top-4 left-4 z-20 px-3 py-1.5 rounded-full bg-gray-900/80 backdrop-blur-md border border-gray-700/50 text-xs font-medium text-gray-300">
                {project.category}
              </div>

              {/* Image Header */}
              <div
                className={`relative h-48 bg-gradient-to-br ${project.color} flex items-center justify-center text-7xl overflow-hidden`}
              >
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent"></div>
                <div className="relative z-10 transform group-hover:scale-125 group-hover:rotate-12 transition-all duration-500">
                  {project.image}
                </div>
                {/* Gradient Overlay */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                ></div>
              </div>

              {/* Content */}
              <div className="p-6 relative">
                <div className="relative z-10">
                  {/* Title & Role */}
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="text-2xl font-bold text-white group-hover:text-primary-400 transition-colors flex-1">
                      {project.title}
                    </h3>
                  </div>

                  {/* Role Badge */}
                  {project.role && (
                    <div className="mb-4">
                      <span
                        className={`inline-block px-3 py-1 rounded-full text-xs font-medium bg-gradient-to-r ${project.color} text-white`}
                      >
                        {project.role}
                      </span>
                    </div>
                  )}

                  {/* Description */}
                  <p className="text-gray-400 mb-6 text-sm leading-relaxed line-clamp-3 group-hover:text-gray-300 transition-colors">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.slice(0, 5).map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="flex items-center gap-1.5 px-3 py-1.5 bg-gray-800/60 border border-gray-700/50 text-gray-400 rounded-lg text-xs font-medium group-hover:border-primary-500/50 group-hover:text-primary-400 transition-all duration-300 transform group-hover:scale-105 backdrop-blur-sm"
                      >
                        {getTechIcon(tech)}
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 5 && (
                      <span className="px-3 py-1.5 bg-gray-800/60 border border-gray-700/50 text-gray-500 rounded-lg text-xs font-medium backdrop-blur-sm">
                        +{project.technologies.length - 5}
                      </span>
                    )}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-4 pt-4 border-t border-gray-700/50">
                    {project.owner && (
                      <div className="text-gray-400">
                        <span className="text-xs text-gray-500 uppercase tracking-wider">
                          Owner
                        </span>
                        <p className="text-sm font-semibold text-primary-400">
                          {project.owner}
                        </p>
                      </div>
                    )}
                  </div>
                </div>
              </div>

              {/* Shimmer Effect */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div
          className={`mt-16 text-center transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
          style={{ transitionDelay: "0.4s" }}
        >
          <p className="text-gray-400 mb-6">Want to see more? Let's connect!</p>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-primary-500 to-purple-500 rounded-xl font-bold text-white hover:shadow-2xl hover:shadow-primary-500/50 transition-all duration-300 transform hover:scale-105"
          >
            Get In Touch
            <FaExternalLinkAlt />
          </a>
        </div>
      </div>

      <style>{`
        .animation-delay-2000 {
          animation-delay: 2s;
        }
      `}</style>
    </section>
  );
};

export default Projects;
