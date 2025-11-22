import React, { useState, useEffect, useRef } from 'react';
import { FaGithub, FaExternalLinkAlt, FaJava, FaDatabase, FaStar } from 'react-icons/fa';
import { SiSpring, SiDocker } from 'react-icons/si';

const Projects = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredProject, setHoveredProject] = useState(null);
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

  const projects = [
    {
      title: 'Intellicentrics',
      description: 'Comprehensive healthcare solution using FHIR R4 standard resources. Developed functionalities including appointment scheduling, insurance, credential management, practitioner management, and patient management.',
      technologies: ['Java', 'Spring Boot', 'Hibernate', 'Node.js', 'AWS', 'Kafka', 'Docker', 'Jenkins', 'Python', 'WSO2 API Gateway', 'FHIR', 'SonarQube'],
      github: '#',
      demo: '#',
      image: '🏥',
      role: 'Senior Developer',
      color: 'from-blue-500 to-cyan-500',
      featured: true,
    },
    {
      title: 'Neurex',
      description: 'AI-based product harnessing advanced algorithms and NLP to extract valuable information from lengthy, unstructured patient notes. Efficiently identifies the most suitable SNOMED CT code.',
      technologies: ['Java', 'Spring Boot', 'Hibernate', 'React', 'Node.js', 'HL7', 'RESTful Services'],
      github: '#',
      demo: '#',
      image: '🤖',
      role: 'Senior Developer & Team Lead',
      color: 'from-purple-500 to-pink-500',
      featured: true,
    },
    {
      title: 'Smart On FHIR',
      description: 'Application utilizing g10 Standardized API to achieve ONC Certification. Includes protocols for authentication and authorization. Utilizes HAPI-FHIR with unique codes.',
      technologies: ['Java', 'Spring Boot', 'Hibernate', 'React', 'Node.js', 'HAPI-FHIR', 'OAuth2', 'RESTful Services'],
      github: '#',
      demo: '#',
      image: '💡',
      role: 'Senior Developer & Team Lead',
      color: 'from-green-500 to-teal-500',
      featured: false,
    },
    {
      title: 'iMTD',
      description: 'Organization can look up, verify, and translate medical terms with iMTD. A container for any structured medical terminology database using Unified Medical Language System (UMLS).',
      technologies: ['Java', 'Spring Boot', 'Hibernate', 'PostgreSQL', 'Apache Ctakes', 'UMLS', 'RESTful Services'],
      github: '#',
      demo: '#',
      image: '📚',
      role: 'Developer',
      color: 'from-orange-500 to-red-500',
      featured: false,
    },
    {
      title: 'Epic-Mapping',
      description: 'Mapping to POJO class to retrieve EPIC EMR (Electronic Medical Report) and store in Mongo database. Trigger monitors database changes and generates EPIC data to send to EPIC server.',
      technologies: ['Java', 'Spring Boot', 'Hibernate', 'Apache Camel', 'MongoDB'],
      github: '#',
      demo: '#',
      image: '🗺️',
      role: 'Developer',
      color: 'from-yellow-500 to-orange-500',
      featured: false,
    },
    {
      title: 'Tenant Management',
      description: 'Clinics use custom authentication logic for login, and multiple FHIR R4 resources are used to store data. Used to register and store multiple clinics and their data under a single DB.',
      technologies: ['Java', 'Spring Boot', 'Hibernate', 'JSP', 'RESTful Services', 'MySQL', 'Web Services'],
      github: '#',
      demo: '#',
      image: '🏢',
      role: 'Developer',
      color: 'from-indigo-500 to-purple-500',
      featured: false,
    },
    {
      title: 'E-health Exchange',
      description: 'Exchange of health information application supporting both national and local exchanges. Uses secure network standards to ensure health information exchanges are compatible.',
      technologies: ['Java', 'Spring', 'MySQL', 'Servlet', 'JDBC'],
      github: '#',
      demo: '#',
      image: '🔄',
      role: 'Developer',
      color: 'from-pink-500 to-rose-500',
      featured: false,
    },
  ];

  const getTechIcon = (tech) => {
    const techLower = tech.toLowerCase();
    if (techLower.includes('java')) return <FaJava />;
    if (techLower.includes('spring')) return <SiSpring />;
    if (techLower.includes('docker')) return <SiDocker />;
    if (techLower.includes('mysql') || techLower.includes('postgresql') || techLower.includes('mongodb')) return <FaDatabase />;
    return null;
  };

  return (
    <section
      id="projects"
      ref={sectionRef}
      className="section-container bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white relative overflow-hidden"
    >
      {/* Animated Background */}
      <div className="absolute inset-0 opacity-10">
        {[...Array(30)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-primary-400 animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              width: `${Math.random() * 50 + 20}px`,
              height: `${Math.random() * 50 + 20}px`,
              animationDelay: `${Math.random() * 3}s`,
            }}
          />
        ))}
      </div>

      <div
        className={`relative z-10 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        <h2 className="section-title text-white bg-gradient-to-r from-primary-400 to-purple-400 bg-clip-text text-transparent">
          Featured Projects
        </h2>
        <p className="section-subtitle text-gray-300">
          Showcasing my work in building robust and scalable Java applications
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              onMouseEnter={() => setHoveredProject(index)}
              onMouseLeave={() => setHoveredProject(null)}
              className={`group relative bg-gray-800/50 backdrop-blur-sm rounded-2xl shadow-xl overflow-hidden border-2 transition-all duration-500 transform hover:scale-105 hover:-translate-y-2 cursor-pointer ${
                hoveredProject === index
                  ? 'border-primary-400 shadow-primary-500/50'
                  : 'border-transparent hover:border-primary-600'
              } ${project.featured ? 'lg:col-span-2 lg:row-span-1' : ''}`}
              style={{
                animationDelay: `${index * 0.1}s`,
              }}
            >
              {/* Featured Badge */}
              {project.featured && (
                <div className="absolute top-4 right-4 z-20 bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1 shadow-lg">
                  <FaStar className="text-xs" />
                  Featured
                </div>
              )}

              {/* Gradient Background */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-0 group-hover:opacity-20 transition-opacity duration-500`}
              ></div>

              {/* Image Header */}
              <div className={`relative h-48 bg-gradient-to-br ${project.color} flex items-center justify-center text-6xl overflow-hidden`}>
                <div className="absolute inset-0 opacity-30">
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors"></div>
                </div>
                <div className="relative z-10 transform group-hover:scale-125 group-hover:rotate-12 transition-all duration-500">
                  {project.image}
                </div>
              </div>

              {/* Content */}
              <div className="p-6 relative z-10">
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-xl font-bold text-white group-hover:text-primary-300 transition-colors">
                    {project.title}
                  </h3>
                </div>

                <p className="text-gray-300 mb-4 text-sm leading-relaxed line-clamp-3 group-hover:text-gray-200 transition-colors">
                  {project.description}
                </p>

                {project.role && (
                  <div className="mb-4">
                    <span className="px-3 py-1 bg-primary-600 text-white rounded-full text-xs font-medium inline-block transform group-hover:scale-110 transition-transform">
                      {project.role}
                    </span>
                  </div>
                )}

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.slice(0, 4).map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="flex items-center gap-1 px-3 py-1 bg-gray-700/50 text-gray-300 rounded-full text-xs font-medium group-hover:bg-primary-600 group-hover:text-white transition-all duration-300 transform group-hover:scale-110"
                    >
                      {getTechIcon(tech)}
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 4 && (
                    <span className="px-3 py-1 bg-gray-700/50 text-gray-400 rounded-full text-xs font-medium">
                      +{project.technologies.length - 4} more
                    </span>
                  )}
                </div>

                {/* Action Buttons */}
                <div className="flex gap-4 pt-4 border-t border-gray-700">
                  <a
                    href={project.github}
                    onClick={(e) => e.stopPropagation()}
                    className="flex items-center gap-2 text-gray-400 hover:text-primary-400 transition-all duration-300 font-medium group/link transform hover:scale-110"
                  >
                    <FaGithub className="transform group-hover/link:rotate-12 transition-transform" />
                    Code
                  </a>
                  <a
                    href={project.demo}
                    onClick={(e) => e.stopPropagation()}
                    className="flex items-center gap-2 text-gray-400 hover:text-primary-400 transition-all duration-300 font-medium group/link transform hover:scale-110"
                  >
                    <FaExternalLinkAlt className="transform group-hover/link:translate-x-1 transition-transform" />
                    Demo
                  </a>
                </div>
              </div>

              {/* Glow Effect */}
              {hoveredProject === index && (
                <div className={`absolute -inset-1 bg-gradient-to-r ${project.color} rounded-2xl opacity-75 blur-xl animate-pulse -z-10`}></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;

