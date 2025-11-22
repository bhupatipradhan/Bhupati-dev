import React from 'react';
import { FaBriefcase, FaCalendarAlt, FaMapMarkerAlt } from 'react-icons/fa';

const Experience = () => {
  const experiences = [
    {
      title: 'Consultant',
      company: 'BIG 4',
      location: 'India',
      period: 'Sept 2024 - Present',
      description: [
        'Working as a consultant with 1.3+ years of experience in software development and cloud engineering',
        'Technical expertise includes Java, Python, and various DevOps tools',
        'Worked on AWS-based solutions and automation initiatives',
        'Contributing to Generative AI projects, focusing on practical enterprise use cases',
        'Extensive experience developing Java application projects from start to finish',
        'Proficient in developing object-oriented business applications with Java, JDBC, Servlet, JSP, Hibernate with JPA, RESTful Services, MicroServices, Spring, and Spring Boot',
      ],
    },
    {
      title: 'Team Lead & Senior Java Developer',
      company: 'THOUGHTi India Pvt. Ltd.',
      location: 'India',
      period: 'Dec 2020 - May 2024',
      description: [
        'Embarked professional journey as a Java Developer and evolved into Team Lead role',
        'Consistently appreciated by team members for sense of responsibility and innovative problem-solving',
        'Contributed ideas that address challenges effectively and enhance overall project efficiency',
        'Met client goals ahead of deadlines by performing testing and validation of developed logic',
        'Expertise in third-party library integration, application design, and support',
        'Adopted Agile & Scrum techniques to carry out application development',
        'Managed Software Development Lifecycle (SDLC) from requirement analysis to documentation',
        'Strict adherence to coding standards and design patterns for maintainable and functional applications',
      ],
    },
    {
      title: 'Trainee',
      company: 'Spectovision Technologies Pvt. Ltd.',
      location: 'India',
      period: 'Aug 2019 - Apr 2020',
      description: [
        'Learned technical skills including programming languages and software development lifecycle phases',
        'Developed problem-solving abilities, communication, and time management skills',
        'Understood importance of documentation, testing, and continuous learning',
        'Embraced professionalism for effective collaboration and career growth',
      ],
    },
  ];

  return (
    <section id="experience" className="section-container bg-white">
      <h2 className="section-title">Professional Experience</h2>
      <p className="section-subtitle">
        Building enterprise solutions and leading development teams
      </p>

      <div className="max-w-4xl mx-auto">
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 h-full w-0.5 bg-primary-200"></div>

          {experiences.map((exp, index) => (
            <div
              key={index}
              className={`relative mb-12 ${
                index % 2 === 0 ? 'md:pr-1/2 md:pl-0' : 'md:pl-1/2 md:pr-0'
              }`}
            >
              {/* Timeline dot */}
              <div className="absolute left-8 md:left-1/2 transform -translate-x-1/2 w-4 h-4 bg-primary-600 rounded-full border-4 border-white shadow-lg z-10"></div>

              <div
                className={`ml-16 md:ml-0 bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow ${
                  index % 2 === 0 ? 'md:mr-8' : 'md:ml-8'
                }`}
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-semibold text-gray-900 mb-1">
                      {exp.title}
                    </h3>
                    <div className="flex items-center text-primary-600 font-medium mb-2">
                      <FaBriefcase className="mr-2" />
                      {exp.company}
                    </div>
                  </div>
                  <div className="flex flex-col md:items-end gap-2 text-sm text-gray-600">
                    <div className="flex items-center">
                      <FaCalendarAlt className="mr-2" />
                      {exp.period}
                    </div>
                    <div className="flex items-center">
                      <FaMapMarkerAlt className="mr-2" />
                      {exp.location}
                    </div>
                  </div>
                </div>

                <ul className="space-y-2">
                  {exp.description.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-start text-gray-600">
                      <span className="text-primary-600 mr-2 mt-1">▸</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;


