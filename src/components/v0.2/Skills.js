import React, { useState, useEffect, useRef } from 'react';
import { 
  FaJava, FaPython, FaJs, FaDatabase, FaDocker, FaAws, FaGitAlt, FaLinux
} from 'react-icons/fa';
import { SiSpring, SiHibernate, SiMysql, SiPostgresql, SiMongodb, SiJenkins } from 'react-icons/si';

const Skills = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredSkill, setHoveredSkill] = useState(null);
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

  const skillCategories = [
    {
      title: 'Programming Languages',
      skills: [
        { name: 'Java', icon: <FaJava className="text-5xl" />, level: 'Expert', color: 'from-orange-500 to-red-500' },
        { name: 'Python', icon: <FaPython className="text-5xl" />, level: 'Advanced', color: 'from-blue-500 to-cyan-500' },
        { name: 'JavaScript', icon: <FaJs className="text-5xl" />, level: 'Advanced', color: 'from-yellow-400 to-orange-500' },
      ],
    },
    {
      title: 'Frameworks & Libraries',
      skills: [
        { name: 'Spring Boot', icon: <SiSpring className="text-5xl" />, level: 'Expert', color: 'from-green-500 to-emerald-500' },
        { name: 'Spring MVC', icon: <SiSpring className="text-5xl" />, level: 'Expert', color: 'from-green-600 to-teal-500' },
        { name: 'Hibernate', icon: <SiHibernate className="text-5xl" />, level: 'Expert', color: 'from-orange-600 to-red-600' },
      ],
    },
    {
      title: 'Databases',
      skills: [
        { name: 'MySQL', icon: <SiMysql className="text-5xl" />, level: 'Expert', color: 'from-blue-600 to-indigo-600' },
        { name: 'PostgreSQL', icon: <SiPostgresql className="text-5xl" />, level: 'Advanced', color: 'from-blue-500 to-cyan-500' },
        { name: 'MongoDB', icon: <SiMongodb className="text-5xl" />, level: 'Advanced', color: 'from-green-500 to-emerald-500' },
        { name: 'DynamoDB', icon: <FaDatabase className="text-5xl" />, level: 'Advanced', color: 'from-yellow-500 to-orange-500' },
      ],
    },
    {
      title: 'DevOps & Tools',
      skills: [
        { name: 'Docker', icon: <FaDocker className="text-5xl" />, level: 'Advanced', color: 'from-blue-500 to-cyan-500' },
        { name: 'Jenkins', icon: <SiJenkins className="text-5xl" />, level: 'Advanced', color: 'from-blue-600 to-indigo-600' },
        { name: 'Git', icon: <FaGitAlt className="text-5xl" />, level: 'Expert', color: 'from-orange-500 to-red-500' },
        { name: 'Linux', icon: <FaLinux className="text-5xl" />, level: 'Advanced', color: 'from-yellow-600 to-orange-600' },
        { name: 'AWS', icon: <FaAws className="text-5xl" />, level: 'Advanced', color: 'from-orange-500 to-yellow-500' },
      ],
    },
  ];

  const getLevelColor = (level) => {
    switch (level) {
      case 'Expert':
        return 'bg-green-500';
      case 'Advanced':
        return 'bg-blue-500';
      case 'Intermediate':
        return 'bg-yellow-500';
      default:
        return 'bg-gray-500';
    }
  };

  const additionalSkills = [
    'RESTful APIs', 'Microservices', 'JUnit', 'Maven', 'JDBC', 'Servlet', 'JSP',
    'JPA', 'OAuth2', 'Kafka', 'Apache Camel', 'FHIR R4', 'HL7',
    'WSO2 API Gateway', 'SonarQube', 'Selenium', 'React', 'Node.js',
    'Feign Client', 'PDFBox', 'iText', 'HAPI-FHIR', 'Apache Ctakes', 'UMLS',
    'Generative AI', 'Agile', 'Scrum', 'IntelliJ IDEA', 'Eclipse'
  ];

  return (
    <section
      id="skills"
      ref={sectionRef}
      className="section-container bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white relative overflow-hidden"
    >
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full opacity-10">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute rounded-full bg-primary-400 animate-pulse"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                width: `${Math.random() * 100 + 50}px`,
                height: `${Math.random() * 100 + 50}px`,
                animationDelay: `${Math.random() * 3}s`,
              }}
            />
          ))}
        </div>
      </div>

      <div
        className={`relative z-10 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        <h2 className="section-title text-white bg-gradient-to-r from-primary-400 to-purple-400 bg-clip-text text-transparent">
          Skills & Technologies
        </h2>
        <p className="section-subtitle text-gray-300">
          A comprehensive toolkit for building modern, scalable applications
        </p>

        <div className="space-y-16">
          {skillCategories.map((category, categoryIndex) => (
            <div key={categoryIndex} className="space-y-8">
              <h3 className="text-3xl font-bold text-center text-white">
                {category.title}
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
                {category.skills.map((skill, skillIndex) => (
                  <div
                    key={skillIndex}
                    onMouseEnter={() => setHoveredSkill(`${categoryIndex}-${skillIndex}`)}
                    onMouseLeave={() => setHoveredSkill(null)}
                    className={`group relative bg-gray-800/50 backdrop-blur-sm p-6 rounded-2xl shadow-xl border-2 transition-all duration-500 transform hover:scale-110 hover:-translate-y-2 cursor-pointer ${
                      hoveredSkill === `${categoryIndex}-${skillIndex}`
                        ? 'border-primary-400 shadow-primary-500/50'
                        : 'border-transparent hover:border-primary-600'
                    }`}
                    style={{
                      animationDelay: `${(categoryIndex * 0.2) + (skillIndex * 0.1)}s`,
                    }}
                  >
                    {/* Gradient Background */}
                    <div
                      className={`absolute inset-0 bg-gradient-to-br ${skill.color} opacity-0 group-hover:opacity-20 rounded-2xl transition-opacity duration-500`}
                    ></div>

                    <div className="relative z-10 text-center">
                      <div className="mb-4 flex justify-center transform group-hover:rotate-12 group-hover:scale-125 transition-all duration-300">
                        <div className="text-primary-400 group-hover:text-primary-300 transition-colors">
                          {skill.icon}
                        </div>
                      </div>
                      <h4 className="font-bold text-white mb-3 group-hover:text-primary-300 transition-colors">
                        {skill.name}
                      </h4>
                      <div className="flex items-center justify-center gap-2">
                        <span className={`w-3 h-3 rounded-full ${getLevelColor(skill.level)} animate-pulse`}></span>
                        <span className="text-sm text-gray-300 group-hover:text-white transition-colors">
                          {skill.level}
                        </span>
                      </div>
                    </div>

                    {/* Glow Effect */}
                    {hoveredSkill === `${categoryIndex}-${skillIndex}` && (
                      <div className={`absolute -inset-1 bg-gradient-to-r ${skill.color} rounded-2xl opacity-75 blur-lg animate-pulse`}></div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Additional Skills with Tags */}
        <div className="mt-16 bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-gray-700">
          <h3 className="text-3xl font-bold mb-8 text-center text-white">
            Additional Skills
          </h3>
          <div className="flex flex-wrap justify-center gap-3">
            {additionalSkills.map((skill, index) => (
              <span
                key={index}
                className="group relative px-5 py-2.5 bg-gradient-to-r from-primary-600 to-purple-600 text-white rounded-full text-sm font-medium hover:scale-110 hover:shadow-lg transition-all duration-300 cursor-pointer transform hover:rotate-1"
                style={{
                  animationDelay: `${index * 0.05}s`,
                }}
              >
                <span className="relative z-10">{skill}</span>
                <span className="absolute inset-0 bg-gradient-to-r from-primary-400 to-purple-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity blur-sm"></span>
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;

