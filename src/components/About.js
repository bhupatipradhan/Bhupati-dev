import React from 'react';
import { FaCode, FaServer, FaDatabase, FaCloud } from 'react-icons/fa';

const About = () => {
  const services = [
    {
      icon: <FaCode className="text-4xl text-primary-600" />,
      title: 'Backend Development',
      description: 'Building robust REST APIs and microservices with Java and Spring Boot',
    },
    {
      icon: <FaServer className="text-4xl text-primary-600" />,
      title: 'Server Architecture',
      description: 'Designing scalable server architectures and cloud-based solutions',
    },
    {
      icon: <FaDatabase className="text-4xl text-primary-600" />,
      title: 'Database Design',
      description: 'Optimizing database performance with SQL and NoSQL solutions',
    },
    {
      icon: <FaCloud className="text-4xl text-primary-600" />,
      title: 'Cloud Solutions',
      description: 'Deploying applications on AWS, Azure, and other cloud platforms',
    },
  ];

  return (
    <section id="about" className="section-container bg-white">
      <div className="max-w-4xl mx-auto">
        <h2 className="section-title">About Me</h2>
        <p className="section-subtitle">
          Passionate Java developer with expertise in building enterprise-level applications
        </p>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h3 className="text-2xl font-semibold mb-4 text-gray-900">Who I Am</h3>
            <p className="text-gray-600 mb-4 leading-relaxed">
              I'm a dedicated Senior Java Developer and Consultant with extensive experience in building enterprise-level 
              applications. Currently working as a Consultant at BIG 4, I specialize in software development and cloud engineering, 
              with expertise in Java, Python, and various DevOps tools. I have worked on AWS-based solutions, automation initiatives, 
              and contribute to Generative AI projects focusing on practical enterprise use cases.
            </p>
            <p className="text-gray-600 mb-4 leading-relaxed">
              Throughout my career, I've been appreciated by team members for my sense of responsibility and innovative 
              problem-solving abilities. I take pride in contributing ideas that not only address challenges effectively but 
              also enhance the overall efficiency of our projects. My journey includes developing Java applications from start 
              to finish, including need specifications, planning, designing, implementing, configuring, documenting, and closing 
              for our customers.
            </p>
            <p className="text-gray-600 leading-relaxed">
              I hold a Bachelor's degree in Electrical Engineering from Gandhi Institute For Technology, Bhubaneswar, and I'm 
              passionate about creating efficient, scalable, and maintainable software solutions that make a real impact.
            </p>
          </div>

          <div className="bg-gradient-to-br from-primary-50 to-primary-100 rounded-lg p-8 shadow-lg">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-gray-700 font-medium">Java Development</span>
                <span className="text-primary-600 font-semibold">95%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div className="bg-primary-600 h-2 rounded-full" style={{ width: '95%' }}></div>
              </div>

              <div className="flex items-center justify-between">
                <span className="text-gray-700 font-medium">Spring Framework</span>
                <span className="text-primary-600 font-semibold">90%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div className="bg-primary-600 h-2 rounded-full" style={{ width: '90%' }}></div>
              </div>

              <div className="flex items-center justify-between">
                <span className="text-gray-700 font-medium">Database Design</span>
                <span className="text-primary-600 font-semibold">85%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div className="bg-primary-600 h-2 rounded-full" style={{ width: '85%' }}></div>
              </div>

              <div className="flex items-center justify-between">
                <span className="text-gray-700 font-medium">Cloud Technologies</span>
                <span className="text-primary-600 font-semibold">80%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div className="bg-primary-600 h-2 rounded-full" style={{ width: '80%' }}></div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow border border-gray-100"
            >
              <div className="mb-4">{service.icon}</div>
              <h4 className="text-xl font-semibold mb-2 text-gray-900">{service.title}</h4>
              <p className="text-gray-600 text-sm">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;


