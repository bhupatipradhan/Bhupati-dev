import React, { useState, useEffect, useRef } from 'react';
import { FaCode, FaServer, FaDatabase, FaCloud } from 'react-icons/fa';

const About = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activePanel, setActivePanel] = useState(0);
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
      icon: <FaCode className="text-5xl text-primary-600" />,
      title: 'Backend Development',
      description: 'Building robust REST APIs and microservices with Java and Spring Boot',
      color: 'from-blue-500 to-cyan-500',
    },
    {
      icon: <FaServer className="text-5xl text-primary-600" />,
      title: 'Server Architecture',
      description: 'Designing scalable server architectures and cloud-based solutions',
      color: 'from-purple-500 to-pink-500',
    },
    {
      icon: <FaDatabase className="text-5xl text-primary-600" />,
      title: 'Database Design',
      description: 'Optimizing database performance with SQL and NoSQL solutions',
      color: 'from-green-500 to-teal-500',
    },
    {
      icon: <FaCloud className="text-5xl text-primary-600" />,
      title: 'Cloud Solutions',
      description: 'Deploying applications on AWS, Azure, and other cloud platforms',
      color: 'from-orange-500 to-red-500',
    },
  ];

  const skills = [
    { name: 'Java Development', percentage: 95 },
    { name: 'Spring Framework', percentage: 90 },
    { name: 'Database Design', percentage: 85 },
    { name: 'Cloud Technologies', percentage: 80 },
  ];

  return (
    <section
      id="about"
      ref={sectionRef}
      className="section-container bg-gradient-to-br from-gray-50 to-white relative overflow-hidden"
    >
      {/* Animated Background */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-96 h-96 bg-primary-400 rounded-full filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-400 rounded-full filter blur-3xl animate-pulse animation-delay-2000"></div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div
          className={`transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <h2 className="section-title bg-gradient-to-r from-primary-600 to-purple-600 bg-clip-text text-transparent">
            About Me
          </h2>
          <p className="section-subtitle">
            Passionate Java developer with expertise in building enterprise-level applications
          </p>

          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div className="space-y-6">
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-gray-100 hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
                <h3 className="text-3xl font-bold mb-6 text-gray-900 flex items-center gap-3">
                  <span className="w-1 h-10 bg-gradient-to-b from-primary-600 to-purple-600 rounded-full"></span>
                  Who I Am
                </h3>
                <div className="space-y-4 text-gray-600 leading-relaxed">
                  <p className="animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
                    I'm a dedicated Senior Java Developer and Consultant with extensive experience in building enterprise-level
                    applications. Currently working as a Consultant at BIG 4, I specialize in software development and cloud engineering,
                    with expertise in Java, Python, and various DevOps tools.
                  </p>
                  <p className="animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
                    Throughout my career, I've been appreciated by team members for my sense of responsibility and innovative
                    problem-solving abilities. I take pride in contributing ideas that enhance the overall efficiency of our projects.
                  </p>
                  <p className="animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
                    I hold a Bachelor's degree in Electrical Engineering from Gandhi Institute For Technology, Bhubaneswar, and I'm
                    passionate about creating efficient, scalable, and maintainable software solutions that make a real impact.
                  </p>
                </div>
              </div>
            </div>

            {/* Interactive Skills Panel */}
            <div className="bg-gradient-to-br from-primary-50 via-purple-50 to-pink-50 rounded-2xl p-8 shadow-xl border border-gray-100">
              <h3 className="text-2xl font-bold mb-6 text-gray-900">Technical Expertise</h3>
              <div className="space-y-6">
                {skills.map((skill, index) => (
                  <div key={index} className="group">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-gray-700 font-semibold">{skill.name}</span>
                      <span className="text-primary-600 font-bold">{skill.percentage}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
                      <div
                        className={`h-full bg-gradient-to-r from-primary-500 to-purple-500 rounded-full transition-all duration-1000 ease-out ${
                          isVisible ? 'w-full' : 'w-0'
                        }`}
                        style={{
                          width: isVisible ? `${skill.percentage}%` : '0%',
                          transitionDelay: `${index * 0.2}s`,
                        }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Interactive Service Cards */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <div
                key={index}
                onClick={() => setActivePanel(index)}
                className={`group relative bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer transform hover:scale-105 hover:-translate-y-2 border-2 ${
                  activePanel === index
                    ? 'border-primary-500 scale-105'
                    : 'border-transparent hover:border-primary-200'
                }`}
                style={{
                  animationDelay: `${index * 0.1}s`,
                }}
              >
                {/* Gradient Background on Hover */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity duration-500`}
                ></div>

                <div className="relative z-10">
                  <div className="mb-4 transform group-hover:rotate-6 group-hover:scale-110 transition-transform duration-300">
                    {service.icon}
                  </div>
                  <h4 className="text-xl font-bold mb-3 text-gray-900 group-hover:text-primary-600 transition-colors">
                    {service.title}
                  </h4>
                  <p className="text-gray-600 text-sm leading-relaxed group-hover:text-gray-800 transition-colors">
                    {service.description}
                  </p>
                </div>

                {/* Animated Border */}
                <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${service.color} p-[2px]`}>
                    <div className="w-full h-full bg-white rounded-2xl"></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in-up {
          animation: fade-in-up 0.6s ease-out forwards;
          opacity: 0;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
      `}</style>
    </section>
  );
};

export default About;

