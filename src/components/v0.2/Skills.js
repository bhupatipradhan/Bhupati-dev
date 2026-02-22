import React, { useState, useEffect, useRef } from "react";
import {
  FaJava,
  FaPython,
  FaJs,
  FaDatabase,
  FaDocker,
  FaAws,
  FaGitAlt,
  FaLinux,
  FaChevronRight,
  FaBrain,
} from "react-icons/fa";
import {
  SiSpring,
  SiHibernate,
  SiMysql,
  SiPostgresql,
  SiMongodb,
  SiJenkins,
  SiApachekafka,
  SiKubernetes,
  SiGrafana,
  SiPrometheus,
  SiGooglecloud,
  SiMicrosoft,
  SiNeo4J,
  SiOpenai,
  SiReact,
  SiNodedotjs,
} from "react-icons/si";

const Skills = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState(0);
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

  const skillCategories = [
    {
      title: "Programming Languages",
      icon: "💻",
      skills: [
        {
          name: "Java",
          icon: <FaJava className="text-6xl" />,
          level: "Expert",
          color: "from-orange-500 to-red-500",
          percentage: 95,
        },
        {
          name: "Python",
          icon: <FaPython className="text-6xl" />,
          level: "Advanced",
          color: "from-blue-500 to-cyan-500",
          percentage: 85,
        },
        {
          name: "JavaScript",
          icon: <FaJs className="text-6xl" />,
          level: "Advanced",
          color: "from-yellow-400 to-orange-500",
          percentage: 80,
        },
        {
          name: "React",
          icon: <SiReact className="text-6xl" />,
          level: "Advanced",
          color: "from-cyan-400 to-blue-500",
          percentage: 85,
        },
        {
          name: "Node.js",
          icon: <SiNodedotjs className="text-6xl" />,
          level: "Advanced",
          color: "from-green-600 to-emerald-500",
          percentage: 85,
        },
      ],
    },
    {
      title: "Frameworks & Libraries",
      icon: "⚡",
      skills: [
        {
          name: "Spring Boot",
          icon: <SiSpring className="text-6xl" />,
          level: "Expert",
          color: "from-green-500 to-emerald-500",
          percentage: 95,
        },
        {
          name: "Spring MVC",
          icon: <SiSpring className="text-6xl" />,
          level: "Expert",
          color: "from-green-600 to-teal-500",
          percentage: 90,
        },
        {
          name: "Hibernate",
          icon: <SiHibernate className="text-6xl" />,
          level: "Expert",
          color: "from-orange-600 to-red-600",
          percentage: 90,
        },
      ],
    },
    {
      title: "Databases",
      icon: "🗄️",
      skills: [
        {
          name: "MySQL",
          icon: <SiMysql className="text-6xl" />,
          level: "Expert",
          color: "from-blue-600 to-indigo-600",
          percentage: 95,
        },
        {
          name: "PostgreSQL",
          icon: <SiPostgresql className="text-6xl" />,
          level: "Advanced",
          color: "from-blue-500 to-cyan-500",
          percentage: 85,
        },
        {
          name: "MongoDB",
          icon: <SiMongodb className="text-6xl" />,
          level: "Advanced",
          color: "from-green-500 to-emerald-500",
          percentage: 85,
        },
        {
          name: "DynamoDB",
          icon: <FaDatabase className="text-6xl" />,
          level: "Advanced",
          color: "from-yellow-500 to-orange-500",
          percentage: 80,
        },
        {
          name: "Neo4j",
          icon: <SiNeo4J className="text-6xl" />,
          level: "Advanced",
          color: "from-blue-700 to-indigo-700",
          percentage: 80,
        },
      ],
    },
    {
      title: "Vector Databases",
      icon: "📊",
      skills: [
        {
          name: "Weaviate",
          icon: (
            <svg
              className="text-6xl w-24 h-24"
              viewBox="0 0 100 100"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <defs>
                <linearGradient
                  id="weaviate-grad"
                  x1="0%"
                  y1="0%"
                  x2="100%"
                  y2="100%"
                >
                  <stop
                    offset="0%"
                    style={{ stopColor: "#C084FC", stopOpacity: 1 }}
                  />
                  <stop
                    offset="100%"
                    style={{ stopColor: "#EC4899", stopOpacity: 1 }}
                  />
                </linearGradient>
              </defs>
              <rect
                x="20"
                y="20"
                width="60"
                height="60"
                rx="8"
                fill="url(#weaviate-grad)"
              />
              <circle cx="35" cy="35" r="6" fill="white" opacity="0.8" />
              <circle cx="65" cy="35" r="6" fill="white" opacity="0.8" />
              <circle cx="50" cy="55" r="6" fill="white" opacity="0.8" />
              <path
                d="M 35 35 Q 50 45 65 35"
                stroke="white"
                strokeWidth="2"
                fill="none"
                opacity="0.8"
              />
            </svg>
          ),
          level: "Advanced",
          color: "from-purple-500 to-pink-500",
          percentage: 85,
        },
        {
          name: "Chroma",
          icon: (
            <svg
              className="text-6xl w-24 h-24"
              viewBox="0 0 100 100"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <defs>
                <linearGradient
                  id="chroma-grad"
                  x1="0%"
                  y1="0%"
                  x2="100%"
                  y2="100%"
                >
                  <stop
                    offset="0%"
                    style={{ stopColor: "#10B981", stopOpacity: 1 }}
                  />
                  <stop
                    offset="100%"
                    style={{ stopColor: "#14B8A6", stopOpacity: 1 }}
                  />
                </linearGradient>
              </defs>
              <rect
                x="20"
                y="20"
                width="60"
                height="60"
                rx="8"
                fill="url(#chroma-grad)"
              />
              <circle cx="50" cy="50" r="4" fill="white" />
              <circle cx="35" cy="40" r="5" fill="white" opacity="0.7" />
              <circle cx="65" cy="40" r="5" fill="white" opacity="0.7" />
              <circle cx="35" cy="60" r="5" fill="white" opacity="0.7" />
              <circle cx="65" cy="60" r="5" fill="white" opacity="0.7" />
            </svg>
          ),
          level: "Advanced",
          color: "from-green-500 to-teal-500",
          percentage: 85,
        },
        {
          name: "Pinecone",
          icon: (
            <svg
              className="text-6xl w-24 h-24"
              viewBox="0 0 100 100"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <defs>
                <linearGradient
                  id="pinecone-grad"
                  x1="0%"
                  y1="0%"
                  x2="100%"
                  y2="100%"
                >
                  <stop
                    offset="0%"
                    style={{ stopColor: "#F97316", stopOpacity: 1 }}
                  />
                  <stop
                    offset="100%"
                    style={{ stopColor: "#DC2626", stopOpacity: 1 }}
                  />
                </linearGradient>
              </defs>
              <rect
                x="20"
                y="20"
                width="60"
                height="60"
                rx="8"
                fill="url(#pinecone-grad)"
              />
              <polygon
                points="50,25 65,50 50,75 35,50"
                fill="white"
                opacity="0.9"
              />
              <polygon
                points="50,35 58,47 50,59 42,47"
                fill="rgba(255,255,255,0.5)"
              />
            </svg>
          ),
          level: "Advanced",
          color: "from-orange-500 to-red-500",
          percentage: 80,
        },
        {
          name: "FAISS",
          icon: (
            <svg
              className="text-6xl w-24 h-24"
              viewBox="0 0 100 100"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <defs>
                <linearGradient
                  id="faiss-grad"
                  x1="0%"
                  y1="0%"
                  x2="100%"
                  y2="100%"
                >
                  <stop
                    offset="0%"
                    style={{ stopColor: "#0EA5E9", stopOpacity: 1 }}
                  />
                  <stop
                    offset="100%"
                    style={{ stopColor: "#06B6D4", stopOpacity: 1 }}
                  />
                </linearGradient>
              </defs>
              <rect
                x="20"
                y="20"
                width="60"
                height="60"
                rx="8"
                fill="url(#faiss-grad)"
              />
              <rect
                x="30"
                y="30"
                width="12"
                height="40"
                fill="white"
                opacity="0.8"
              />
              <rect
                x="44"
                y="25"
                width="12"
                height="45"
                fill="white"
                opacity="0.8"
              />
              <rect
                x="58"
                y="35"
                width="12"
                height="35"
                fill="white"
                opacity="0.8"
              />
            </svg>
          ),
          level: "Advanced",
          color: "from-blue-500 to-cyan-500",
          percentage: 80,
        },
      ],
    },
    {
      title: "DevOps & Tools",
      icon: "🚀",
      skills: [
        {
          name: "Docker",
          icon: <FaDocker className="text-6xl" />,
          level: "Advanced",
          color: "from-blue-500 to-cyan-500",
          percentage: 85,
        },
        {
          name: "Kubernetes",
          icon: <SiKubernetes className="text-6xl" />,
          level: "Advanced",
          color: "from-blue-600 to-indigo-600",
          percentage: 80,
        },
        {
          name: "Jenkins",
          icon: <SiJenkins className="text-6xl" />,
          level: "Advanced",
          color: "from-blue-600 to-indigo-600",
          percentage: 85,
        },
        {
          name: "Kafka",
          icon: <SiApachekafka className="text-6xl" />,
          level: "Advanced",
          color: "from-gray-600 to-gray-800",
          percentage: 80,
        },
        {
          name: "Grafana",
          icon: <SiGrafana className="text-6xl" />,
          level: "Advanced",
          color: "from-orange-500 to-red-500",
          percentage: 80,
        },
        {
          name: "Prometheus",
          icon: <SiPrometheus className="text-6xl" />,
          level: "Advanced",
          color: "from-red-500 to-orange-500",
          percentage: 80,
        },
        {
          name: "Git",
          icon: <FaGitAlt className="text-6xl" />,
          level: "Expert",
          color: "from-orange-500 to-red-500",
          percentage: 95,
        },
        {
          name: "Linux",
          icon: <FaLinux className="text-6xl" />,
          level: "Advanced",
          color: "from-yellow-600 to-orange-600",
          percentage: 85,
        },
      ],
    },
    {
      title: "Cloud Platforms",
      icon: "☁️",
      skills: [
        {
          name: "AWS",
          icon: <FaAws className="text-6xl" />,
          level: "Advanced",
          color: "from-orange-500 to-yellow-500",
          percentage: 85,
        },
        {
          name: "Google Cloud",
          icon: <SiGooglecloud className="text-6xl" />,
          level: "Advanced",
          color: "from-blue-500 to-red-500",
          percentage: 80,
        },
        {
          name: "Azure",
          icon: <SiMicrosoft className="text-6xl" />,
          level: "Advanced",
          color: "from-blue-600 to-cyan-500",
          percentage: 80,
        },
      ],
    },
    {
      title: "AI & Generative AI",
      icon: "🤖",
      skills: [
        {
          name: "Python (AI/ML)",
          icon: <FaPython className="text-6xl" />,
          level: "Advanced",
          color: "from-blue-500 to-purple-500",
          percentage: 85,
        },
        {
          name: "OpenAI",
          icon: <SiOpenai className="text-6xl" />,
          level: "Advanced",
          color: "from-green-500 to-emerald-500",
          percentage: 85,
        },
        {
          name: "Google Gemini",
          icon: <SiGooglecloud className="text-6xl" />,
          level: "Advanced",
          color: "from-blue-500 to-cyan-500",
          percentage: 80,
        },
        {
          name: "LLaMA",
          icon: <FaBrain className="text-6xl" />,
          level: "Advanced",
          color: "from-purple-500 to-pink-500",
          percentage: 80,
        },
        {
          name: "Claude",
          icon: <FaBrain className="text-6xl" />,
          level: "Advanced",
          color: "from-orange-500 to-red-500",
          percentage: 80,
        },
      ],
    },
  ];

  const additionalSkills = [
    "RESTful APIs",
    "Microservices",
    "JUnit",
    "Maven",
    "JDBC",
    "Servlet",
    "JSP",
    "JPA",
    "OAuth2",
    "Apache Camel",
    "FHIR R4",
    "HL7",
    "WSO2 API Gateway",
    "SonarQube",
    "Selenium",
    "React",
    "Node.js",
    "Feign Client",
    "PDFBox",
    "iText",
    "HAPI-FHIR",
    "Apache Ctakes",
    "UMLS",
    "Kubernetes",
    "Docker Compose",
    "Grafana",
    "Prometheus",
    "AWS Lambda",
    "AWS S3",
    "AWS EC2",
    "Google Cloud Storage",
    "Azure VMs",
    "Azure App Service",
    "Neo4j Graph Database",
    "Weaviate Vector DB",
    "Chroma Vector DB",
    "Pinecone Vector DB",
    "FAISS Vector Search",
    "Generative AI",
    "OpenAI API",
    "Google Gemini API",
    "LLaMA Models",
    "Claude API",
    "Prompt Engineering",
    "RAG (Retrieval-Augmented Generation)",
    "Vector Embeddings",
    "Agile",
    "Scrum",
  ];

  const currentCategory = skillCategories[selectedCategory];

  return (
    <section
      id="skills"
      ref={sectionRef}
      className="section-container bg-gradient-to-br from-gray-900 via-gray-950 to-gray-900 relative overflow-hidden"
    >
      {/* Animated Background */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary-500 rounded-full filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500 rounded-full filter blur-3xl animate-pulse animation-delay-2000"></div>
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
              Technical Skills
            </span>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent">
            Skills & Technologies
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            A comprehensive toolkit for building modern, scalable applications
          </p>
        </div>

        {/* Category Selector */}
        <div
          className={`flex flex-wrap justify-center gap-4 mb-12 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
          style={{ transitionDelay: "0.1s" }}
        >
          {skillCategories.map((category, index) => (
            <button
              key={index}
              onClick={() => setSelectedCategory(index)}
              className={`group relative px-6 py-3 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 ${
                selectedCategory === index
                  ? "bg-gradient-to-r from-primary-500 to-purple-500 text-white shadow-lg shadow-primary-500/50"
                  : "bg-gray-800/50 text-gray-400 border border-gray-700 hover:border-primary-500/50 hover:text-white"
              }`}
            >
              <span className="relative z-10 flex items-center gap-2">
                <span className="text-xl">{category.icon}</span>
                <span>{category.title}</span>
              </span>
              {selectedCategory === index && (
                <div className="absolute -inset-1 bg-gradient-to-r from-primary-500 to-purple-500 rounded-xl opacity-50 blur-lg"></div>
              )}
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <div
          className={`grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
          style={{ transitionDelay: "0.2s" }}
        >
          {currentCategory.skills.map((skill, index) => (
            <div
              key={index}
              onMouseEnter={() =>
                setHoveredSkill(`${selectedCategory}-${index}`)
              }
              onMouseLeave={() => setHoveredSkill(null)}
              className={`group relative bg-gradient-to-br from-gray-900/80 to-gray-800/80 rounded-2xl p-8 border border-gray-700/50 transition-all duration-500 transform hover:scale-105 hover:-translate-y-2 cursor-pointer overflow-hidden backdrop-blur-sm shadow-lg ${
                hoveredSkill === `${selectedCategory}-${index}`
                  ? "border-primary-500/50 shadow-2xl shadow-primary-500/30"
                  : "hover:border-primary-500/30"
              }`}
            >
              {/* Gradient Overlay */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${skill.color} opacity-0 group-hover:opacity-15 transition-opacity duration-500 rounded-2xl`}
              ></div>

              {/* Glow Effect */}
              {hoveredSkill === `${selectedCategory}-${index}` && (
                <div
                  className={`absolute -inset-1 bg-gradient-to-br ${skill.color} rounded-2xl opacity-25 blur-lg`}
                ></div>
              )}

              <div className="relative z-10">
                {/* Icon */}
                <div
                  className={`mb-6 flex justify-center transform group-hover:rotate-12 group-hover:scale-110 transition-all duration-500`}
                >
                  <div
                    className={`p-4 rounded-2xl bg-gradient-to-br ${skill.color} bg-opacity-25 group-hover:bg-opacity-35 transition-all duration-500 backdrop-blur-sm`}
                  >
                    {skill.icon}
                  </div>
                </div>

                {/* Name & Level */}
                <div className="text-center mb-4">
                  <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-primary-400 transition-colors">
                    {skill.name}
                  </h3>
                  <div className="flex items-center justify-center gap-2">
                    <span
                      className={`w-3 h-3 rounded-full ${
                        skill.level === "Expert"
                          ? "bg-green-500"
                          : skill.level === "Advanced"
                          ? "bg-blue-500"
                          : "bg-yellow-500"
                      } animate-pulse`}
                    ></span>
                    <span className="text-sm text-gray-400 font-medium">
                      {skill.level}
                    </span>
                  </div>
                </div>

                {/* Progress Bar */}
                <div className="relative w-full h-2 bg-gray-800/50 rounded-full overflow-hidden backdrop-blur-sm">
                  <div
                    className={`absolute top-0 left-0 h-full bg-gradient-to-r ${
                      skill.color
                    } rounded-full transition-all duration-1000 ${
                      isVisible ? "w-full" : "w-0"
                    }`}
                    style={{
                      width: isVisible ? `${skill.percentage}%` : "0%",
                      transitionDelay: `${index * 0.1}s`,
                    }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-shimmer"></div>
                  </div>
                </div>
                <div className="text-right mt-2">
                  <span
                    className={`text-sm font-bold text-transparent bg-clip-text bg-gradient-to-r ${skill.color}`}
                  >
                    {skill.percentage}%
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Skills */}
        <div
          className={`bg-gradient-to-br from-gray-900/80 to-gray-800/80 rounded-3xl p-8 border border-gray-700/50 backdrop-blur-sm transition-all duration-1000 shadow-lg ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
          style={{ transitionDelay: "0.3s" }}
        >
          <div className="flex items-center gap-3 mb-6">
            <FaChevronRight className="text-primary-400" />
            <h3 className="text-2xl font-bold text-white">
              Additional Skills & Tools
            </h3>
          </div>
          <div className="flex flex-wrap gap-3">
            {additionalSkills.map((skill, index) => (
              <span
                key={index}
                className="group relative px-5 py-2.5 bg-gray-800/50 border border-gray-600/50 rounded-full text-sm font-medium text-gray-300 hover:border-primary-500/50 hover:text-white hover:bg-primary-500/15 transition-all duration-300 transform hover:scale-110 cursor-pointer backdrop-blur-sm"
                style={{
                  animationDelay: `${index * 0.03}s`,
                }}
              >
                <span className="relative z-10">{skill}</span>
                <span className="absolute inset-0 bg-gradient-to-r from-primary-500 to-purple-500 rounded-full opacity-0 group-hover:opacity-20 blur-lg transition-opacity"></span>
              </span>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @keyframes shimmer {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
        .animate-shimmer {
          animation: shimmer 2s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
      `}</style>
    </section>
  );
};

export default Skills;
