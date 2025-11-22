import React, { useState, useEffect, useRef } from 'react';
import { FaBriefcase, FaCalendarAlt, FaMapMarkerAlt, FaChevronDown } from 'react-icons/fa';

const Experience = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [expandedIndex, setExpandedIndex] = useState(0);
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
      icon: '🚀',
      color: 'from-blue-500 to-cyan-500',
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
      icon: '👨‍💼',
      color: 'from-purple-500 to-pink-500',
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
      icon: '🎓',
      color: 'from-green-500 to-teal-500',
    },
  ];

  return (
    <section
      id="experience"
      ref={sectionRef}
      className="section-container bg-gradient-to-br from-white to-gray-50 relative overflow-hidden"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 right-20 w-96 h-96 bg-primary-400 rounded-full filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-purple-400 rounded-full filter blur-3xl animate-pulse animation-delay-2000"></div>
      </div>

      <div
        className={`relative z-10 max-w-6xl mx-auto transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        <h2 className="section-title bg-gradient-to-r from-primary-600 to-purple-600 bg-clip-text text-transparent">
          Professional Experience
        </h2>
        <p className="section-subtitle">
          Building enterprise solutions and leading development teams
        </p>

        <div className="relative">
          {/* Animated Timeline Line */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-primary-400 via-purple-400 to-pink-400"></div>

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div
                key={index}
                onClick={() => setExpandedIndex(expandedIndex === index ? null : index)}
                className={`relative group cursor-pointer transition-all duration-500 ${
                  index % 2 === 0 ? 'md:pr-1/2 md:pl-0' : 'md:pl-1/2 md:pr-0'
                }`}
                style={{
                  animationDelay: `${index * 0.2}s`,
                }}
              >
                {/* Timeline Dot */}
                <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-gradient-to-br from-primary-500 to-purple-500 rounded-full border-4 border-white shadow-xl z-10 group-hover:scale-150 transition-transform duration-300"></div>
                <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-12 h-12 bg-primary-400 rounded-full opacity-0 group-hover:opacity-30 blur-xl transition-opacity duration-300"></div>

                <div
                  className={`ml-0 md:ml-0 bg-white rounded-2xl shadow-xl p-8 border-2 transition-all duration-500 transform hover:scale-105 hover:shadow-2xl ${
                    expandedIndex === index
                      ? 'border-primary-500 shadow-primary-500/50'
                      : 'border-transparent hover:border-primary-200'
                  } ${index % 2 === 0 ? 'md:mr-8' : 'md:ml-8'}`}
                >
                  {/* Icon and Header */}
                  <div className="flex items-start gap-4 mb-6">
                    <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${exp.color} flex items-center justify-center text-3xl transform group-hover:rotate-12 transition-transform duration-300`}>
                      {exp.icon}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-gray-900 mb-2 group-hover:text-primary-600 transition-colors">
                        {exp.title}
                      </h3>
                      <div className="flex flex-wrap items-center gap-4 text-sm">
                        <div className="flex items-center text-primary-600 font-semibold">
                          <FaBriefcase className="mr-2" />
                          {exp.company}
                        </div>
                        <div className="flex items-center text-gray-600">
                          <FaCalendarAlt className="mr-2" />
                          {exp.period}
                        </div>
                        <div className="flex items-center text-gray-600">
                          <FaMapMarkerAlt className="mr-2" />
                          {exp.location}
                        </div>
                      </div>
                    </div>
                    <button className="p-2 rounded-lg hover:bg-gray-100 transition-colors">
                      <FaChevronDown
                        className={`transform transition-transform duration-300 ${
                          expandedIndex === index ? 'rotate-180' : ''
                        }`}
                      />
                    </button>
                  </div>

                  {/* Expandable Description */}
                  <div
                    className={`overflow-hidden transition-all duration-500 ${
                      expandedIndex === index ? 'max-h-[1000px] opacity-100' : 'max-h-0 opacity-0'
                    }`}
                  >
                    <ul className="space-y-3 pt-4 border-t border-gray-200">
                      {exp.description.map((item, itemIndex) => (
                        <li
                          key={itemIndex}
                          className="flex items-start text-gray-600 group-hover:text-gray-800 transition-colors"
                        >
                          <span className={`text-2xl mr-3 bg-gradient-to-br ${exp.color} bg-clip-text text-transparent`}>
                            ▸
                          </span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
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

export default Experience;

