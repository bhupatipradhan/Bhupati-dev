import React from 'react';
import { 
  FaJava, 
  FaPython, 
  FaJs, 
  FaDatabase, 
  FaDocker, 
  FaAws,
  FaGitAlt,
  FaLinux
} from 'react-icons/fa';
import { SiSpring, SiHibernate, SiMysql, SiPostgresql, SiMongodb, SiRedis, SiKubernetes, SiJenkins } from 'react-icons/si';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Programming Languages',
      skills: [
        { name: 'Java', icon: <FaJava className="text-4xl" />, level: 'Expert' },
        { name: 'Python', icon: <FaPython className="text-4xl" />, level: 'Advanced' },
        { name: 'JavaScript', icon: <FaJs className="text-4xl" />, level: 'Advanced' },
      ],
    },
    {
      title: 'Frameworks & Libraries',
      skills: [
        { name: 'Spring Boot', icon: <SiSpring className="text-4xl" />, level: 'Expert' },
        { name: 'Spring MVC', icon: <SiSpring className="text-4xl" />, level: 'Expert' },
        { name: 'Hibernate', icon: <SiHibernate className="text-4xl" />, level: 'Expert' },
      ],
    },
    {
      title: 'Databases',
      skills: [
        { name: 'MySQL', icon: <SiMysql className="text-4xl" />, level: 'Expert' },
        { name: 'PostgreSQL', icon: <SiPostgresql className="text-4xl" />, level: 'Advanced' },
        { name: 'MongoDB', icon: <SiMongodb className="text-4xl" />, level: 'Advanced' },
        { name: 'DynamoDB', icon: <FaDatabase className="text-4xl" />, level: 'Advanced' },
      ],
    },
    {
      title: 'DevOps & Tools',
      skills: [
        { name: 'Docker', icon: <FaDocker className="text-4xl" />, level: 'Advanced' },
        { name: 'Jenkins', icon: <SiJenkins className="text-4xl" />, level: 'Advanced' },
        { name: 'Git', icon: <FaGitAlt className="text-4xl" />, level: 'Expert' },
        { name: 'Linux', icon: <FaLinux className="text-4xl" />, level: 'Advanced' },
        { name: 'AWS', icon: <FaAws className="text-4xl" />, level: 'Advanced' },
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

  return (
    <section id="skills" className="section-container bg-gray-50">
      <h2 className="section-title">Skills & Technologies</h2>
      <p className="section-subtitle">
        A comprehensive toolkit for building modern, scalable applications
      </p>

      <div className="space-y-12">
        {skillCategories.map((category, categoryIndex) => (
          <div key={categoryIndex}>
            <h3 className="text-2xl font-semibold mb-6 text-gray-900 text-center">
              {category.title}
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
              {category.skills.map((skill, skillIndex) => (
                <div
                  key={skillIndex}
                  className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-all transform hover:scale-105 text-center group"
                >
                  <div className="text-primary-600 mb-3 flex justify-center group-hover:scale-110 transition-transform">
                    {skill.icon}
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-2">{skill.name}</h4>
                  <div className="flex items-center justify-center gap-2">
                    <span className={`w-2 h-2 rounded-full ${getLevelColor(skill.level)}`}></span>
                    <span className="text-sm text-gray-600">{skill.level}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Additional Skills */}
      <div className="mt-16 bg-white rounded-lg p-8 shadow-lg">
        <h3 className="text-2xl font-semibold mb-6 text-gray-900 text-center">
          Additional Skills
        </h3>
        <div className="flex flex-wrap justify-center gap-3">
          {[
            'RESTful APIs', 'Microservices', 'JUnit', 'Maven', 'JDBC', 'Servlet', 'JSP',
            'JPA', 'OAuth2', 'Kafka', 'Apache Camel', 'FHIR R4', 'HL7',
            'WSO2 API Gateway', 'SonarQube', 'Selenium', 'React', 'Node.js',
            'Feign Client', 'PDFBox', 'iText', 'HAPI-FHIR', 'Apache Ctakes', 'UMLS',
            'Generative AI', 'Agile', 'Scrum', 'IntelliJ IDEA', 'Eclipse'
          ].map((skill, index) => (
            <span
              key={index}
              className="px-4 py-2 bg-primary-100 text-primary-700 rounded-full text-sm font-medium hover:bg-primary-200 transition-colors"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;


