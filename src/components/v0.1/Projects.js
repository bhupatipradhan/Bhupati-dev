import React from 'react';
import { FaGithub, FaExternalLinkAlt, FaJava, FaDatabase } from 'react-icons/fa';
import { SiSpring, SiDocker } from 'react-icons/si';

const Projects = () => {
  const projects = [
    {
      title: 'Intellicentrics',
      description: 'Comprehensive healthcare solution using FHIR R4 standard resources. Developed functionalities including appointment scheduling, insurance, credential management, practitioner management, and patient management. Implemented microservices architecture with calendar, pdf-fill, and credential services.',
      technologies: ['Java', 'Spring Boot', 'Hibernate', 'Node.js', 'AWS', 'Kafka', 'Docker', 'Jenkins', 'Python', 'WSO2 API Gateway', 'FHIR', 'SonarQube'],
      github: '#',
      demo: '#',
      image: '🏥',
      role: 'Senior Developer',
    },
    {
      title: 'Neurex',
      description: 'AI-based product harnessing advanced algorithms and NLP to extract valuable information from lengthy, unstructured patient notes. Efficiently identifies the most suitable SNOMED CT code, saving significant clinician time in healthcare workflows.',
      technologies: ['Java', 'Spring Boot', 'Hibernate', 'React', 'Node.js', 'HL7', 'RESTful Services'],
      github: '#',
      demo: '#',
      image: '🤖',
      role: 'Senior Developer & Team Lead',
    },
    {
      title: 'Smart On FHIR',
      description: 'Application utilizing g10 Standardized API to achieve ONC Certification. Includes protocols for authentication and authorization. Utilizes HAPI-FHIR with unique codes as the project cornerstone. Uses FHIR R4 resources for testing requirements.',
      technologies: ['Java', 'Spring Boot', 'Hibernate', 'React', 'Node.js', 'HAPI-FHIR', 'OAuth2', 'RESTful Services'],
      github: '#',
      demo: '#',
      image: '💡',
      role: 'Senior Developer & Team Lead',
    },
    {
      title: 'iMTD',
      description: 'Organization can look up, verify, and translate medical terms with iMTD. A container for any structured medical terminology database using Unified Medical Language System (UMLS). Compatible with SNOMED CT, LOINC, ICD-9, ICD-10, CPT, and RxNorm terminologies.',
      technologies: ['Java', 'Spring Boot', 'Hibernate', 'PostgreSQL', 'Apache Ctakes', 'UMLS', 'RESTful Services'],
      github: '#',
      demo: '#',
      image: '📚',
      role: 'Developer',
    },
    {
      title: 'Epic-Mapping',
      description: 'Mapping to POJO class to retrieve EPIC EMR (Electronic Medical Report) and store in Mongo database. Trigger monitors database changes and generates EPIC data to send to EPIC server. Clients can maintain bulk data with just one click.',
      technologies: ['Java', 'Spring Boot', 'Hibernate', 'Apache Camel', 'MongoDB'],
      github: '#',
      demo: '#',
      image: '🗺️',
      role: 'Developer',
    },
    {
      title: 'Tenant Management',
      description: 'Clinics use custom authentication logic for login, and multiple FHIR R4 resources are used to store data. Used to register and store multiple clinics and their data under a single DB using unique ID or name. Clinics cannot share data without proper authentication.',
      technologies: ['Java', 'Spring Boot', 'Hibernate', 'JSP', 'RESTful Services', 'MySQL', 'Web Services'],
      github: '#',
      demo: '#',
      image: '🏢',
      role: 'Developer',
    },
    {
      title: 'E-health Exchange',
      description: 'Exchange of health information application supporting both national and local exchanges. Uses secure network standards to ensure health information exchanges are compatible with other exchanges. Utilizes nationally accepted interoperability standards.',
      technologies: ['Java', 'Spring', 'MySQL', 'Servlet', 'JDBC'],
      github: '#',
      demo: '#',
      image: '🔄',
      role: 'Developer',
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
    <section id="projects" className="section-container bg-gray-50">
      <h2 className="section-title">Featured Projects</h2>
      <p className="section-subtitle">
        Showcasing my work in building robust and scalable Java applications
      </p>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all transform hover:-translate-y-2"
          >
            <div className="bg-gradient-to-br from-primary-500 to-primary-700 h-48 flex items-center justify-center text-6xl">
              {project.image}
            </div>
            
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {project.title}
              </h3>
              
              <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                {project.description}
              </p>

              {project.role && (
                <div className="mb-3">
                  <span className="px-3 py-1 bg-primary-600 text-white rounded-full text-xs font-medium">
                    {project.role}
                  </span>
                </div>
              )}

              <div className="flex flex-wrap gap-2 mb-4">
                {project.technologies.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="flex items-center gap-1 px-3 py-1 bg-primary-100 text-primary-700 rounded-full text-xs font-medium"
                  >
                    {getTechIcon(tech)}
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex gap-4 pt-4 border-t border-gray-200">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-gray-700 hover:text-primary-600 transition-colors font-medium"
                >
                  <FaGithub />
                  Code
                </a>
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-gray-700 hover:text-primary-600 transition-colors font-medium"
                >
                  <FaExternalLinkAlt />
                  Demo
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;


