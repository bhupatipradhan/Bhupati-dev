import React, { useEffect, useState, useRef } from "react";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaDownload,
  FaArrowDown,
  FaXTwitter,
  FaInstagram,
} from "react-icons/fa6";
import { HiSparkles } from "react-icons/hi";
import portfolioData from "../../data/portfolioData.json";

const Hero = () => {
  const [mousePosition, setMousePosition] = useState({ x: 50, y: 50 });
  const [isLoaded, setIsLoaded] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const heroRef = useRef(null);

  useEffect(() => {
    setIsLoaded(true);

    const handleMouseMove = (e) => {
      const rect = heroRef.current?.getBoundingClientRect();
      if (rect) {
        setMousePosition({
          x: ((e.clientX - rect.left) / rect.width) * 100,
          y: ((e.clientY - rect.top) / rect.height) * 100,
        });
      }
    };

    const handleScroll = () => {
      if (heroRef.current) {
        const scrollY = window.scrollY;
        const heroHeight = heroRef.current.offsetHeight;
        const progress = Math.min(scrollY / heroHeight, 1);
        setScrollProgress(progress);
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <section
      ref={heroRef}
      id="home"
      className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950 text-white overflow-hidden"
    >
      {/* Animated Mesh Gradient Background */}
      <div className="absolute inset-0 opacity-30">
        <div
          className="absolute inset-0"
          style={{
            background: `
              radial-gradient(circle at ${mousePosition.x}% ${
              mousePosition.y
            }%, rgba(59, 130, 246, 0.15) 0%, transparent 50%),
              radial-gradient(circle at ${100 - mousePosition.x}% ${
              100 - mousePosition.y
            }%, rgba(168, 85, 247, 0.15) 0%, transparent 50%),
              radial-gradient(circle at ${mousePosition.x * 0.8}% ${
              mousePosition.y * 1.2
            }%, rgba(236, 72, 153, 0.1) 0%, transparent 50%)
            `,
            transition: "background 0.3s ease-out",
          }}
        />
      </div>

      {/* Floating Orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute top-20 left-20 w-96 h-96 bg-blue-500 rounded-full mix-blend-screen opacity-20 filter blur-3xl animate-float-orb"
          style={{
            transform: `translate(${mousePosition.x * 0.02}px, ${
              mousePosition.y * 0.02
            }px)`,
          }}
        />
        <div
          className="absolute bottom-20 right-20 w-96 h-96 bg-purple-500 rounded-full mix-blend-screen opacity-20 filter blur-3xl animate-float-orb animation-delay-2000"
          style={{
            transform: `translate(${-mousePosition.x * 0.02}px, ${
              -mousePosition.y * 0.02
            }px)`,
          }}
        />
        <div
          className="absolute top-1/2 left-1/2 w-96 h-96 bg-pink-500 rounded-full mix-blend-screen opacity-15 filter blur-3xl animate-float-orb animation-delay-4000"
          style={{
            transform: `translate(calc(-50% + ${
              mousePosition.x * 0.01
            }px), calc(-50% + ${mousePosition.y * 0.01}px))`,
          }}
        />
      </div>

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
            backgroundSize: "50px 50px",
            transform: `translate(${scrollProgress * 20}px, ${
              scrollProgress * 10
            }px)`,
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-screen py-20">
          {/* Left Side - Text Content */}
          <div
            className={`space-y-8 transition-all duration-1000 ${
              isLoaded
                ? "opacity-100 translate-x-0"
                : "opacity-0 -translate-x-10"
            }`}
          >
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-500/10 border border-primary-500/30 backdrop-blur-sm">
              <HiSparkles className="text-primary-400 animate-pulse" />
              <span className="text-sm font-medium text-primary-300">
                Senior Java Developer & Consultant
              </span>
            </div>

            {/* Main Heading */}
            <div className="space-y-4">
              <h1 className="text-6xl md:text-7xl lg:text-8xl font-extrabold leading-tight">
                <span className="block text-white">Hi, I'm</span>
                <span
                  className="block bg-gradient-to-r from-primary-400 via-purple-400 to-pink-400 bg-clip-text text-transparent animate-gradient"
                  style={{
                    backgroundSize: "200% 200%",
                  }}
                >
                  Bhupati Pradhan
                </span>
              </h1>

              <p className="text-xl md:text-2xl text-gray-300 leading-relaxed max-w-xl">
                Building scalable enterprise applications with{" "}
                <span className="text-primary-400 font-semibold">Java</span>,
                <span className="text-purple-400 font-semibold">
                  {" "}
                  Spring Boot
                </span>
                , and
                <span className="text-pink-400 font-semibold"> AWS Cloud</span>
              </p>
            </div>

            {/* Description */}
            <p className="text-lg text-gray-400 leading-relaxed max-w-xl">
              Experienced Team Lead specializing in microservices architecture,
              cloud engineering, and Generative AI solutions for enterprise use
              cases.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 pt-4">
              <a
                href="#contact"
                className="group relative px-8 py-4 bg-gradient-to-r from-primary-500 to-purple-500 rounded-xl font-bold text-white overflow-hidden transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-primary-500/50"
              >
                <span className="relative z-10 flex items-center gap-2">
                  Get In Touch
                  <FaArrowDown className="transform group-hover:translate-y-1 transition-transform" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-primary-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </a>

              <a
                href="/BhupatiPradhanResume.docx"
                download
                className="group relative px-8 py-4 bg-transparent border-2 border-gray-700 rounded-xl font-bold text-white hover:border-primary-500 transition-all duration-300 transform hover:scale-105"
              >
                <span className="relative z-10 flex items-center gap-2">
                  <FaDownload />
                  Download Resume
                </span>
              </a>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-6 pt-4">
              <span className="text-gray-500 text-sm">Follow me:</span>
              {[
                {
                  icon: FaGithub,
                  href: portfolioData.contact.socialLinks[1].url,
                  label: "GitHub",
                },
                {
                  icon: FaLinkedin,
                  href: portfolioData.contact.socialLinks[0].url,
                  label: "LinkedIn",
                },
                {
                  icon: FaXTwitter,
                  href: portfolioData.contact.socialLinks[2].url,
                  label: "X (Twitter)",
                },
                {
                  icon: FaInstagram,
                  href: portfolioData.contact.socialLinks[3].url,
                  label: "Instagram",
                },
              ].map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target={
                    social.href.startsWith("mailto") ? undefined : "_blank"
                  }
                  rel={
                    social.href.startsWith("mailto")
                      ? undefined
                      : "noopener noreferrer"
                  }
                  className="group w-12 h-12 rounded-xl bg-gray-800/50 border border-gray-700 flex items-center justify-center text-gray-400 hover:text-white hover:border-primary-500 hover:bg-primary-500/10 transition-all duration-300 transform hover:scale-110 hover:rotate-6"
                  aria-label={social.label}
                >
                  <social.icon size={20} />
                </a>
              ))}
            </div>
          </div>

          {/* Right Side - Visual Element */}
          <div
            className={`hidden lg:flex items-center justify-center transition-all duration-1000 ${
              isLoaded
                ? "opacity-100 translate-x-0"
                : "opacity-0 translate-x-10"
            }`}
          >
            <div className="relative w-full max-w-lg">
              {/* Glowing Card */}
              <div
                className="relative aspect-square rounded-3xl bg-gradient-to-br from-primary-500/20 via-purple-500/20 to-pink-500/20 backdrop-blur-xl border border-primary-500/30 p-8 transform"
                style={{
                  transform: `perspective(1000px) rotateX(${
                    (mousePosition.y - 50) * 0.1
                  }deg) rotateY(${(mousePosition.x - 50) * 0.1}deg)`,
                }}
              >
                {/* Animated Border Glow */}
                <div className="absolute -inset-1 bg-gradient-to-r from-primary-500 via-purple-500 to-pink-500 rounded-3xl opacity-30 blur-xl animate-pulse"></div>

                {/* Content */}
                <div className="relative z-10 h-full flex flex-col items-center justify-center text-center space-y-6">
                  <div className="w-40 h-40 rounded-full bg-gradient-to-br from-primary-400 to-purple-500 flex items-center justify-center animate-bounce-slow overflow-hidden border-4 border-white/20 shadow-2xl">
                    <img
                      src="/ChatGPT Image Nov 22, 2025, 12_39_27 AM.png"
                      alt="Bhupati Pradhan"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="space-y-2">
                    <div className="flex gap-2 justify-center">
                      {[...Array(5)].map((_, i) => (
                        <div
                          key={i}
                          className="w-2 h-2 rounded-full bg-primary-400 animate-pulse"
                          style={{ animationDelay: `${i * 0.2}s` }}
                        />
                      ))}
                    </div>
                    <p className="text-gray-300 text-sm">
                      Crafting Digital Excellence
                    </p>
                  </div>
                </div>
              </div>

              {/* Floating Elements */}
              <div className="absolute -top-10 -right-10 w-24 h-24 bg-purple-500/20 rounded-2xl rotate-12 animate-float"></div>
              <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-pink-500/20 rounded-full animate-float animation-delay-2000"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="flex flex-col items-center gap-2 text-gray-400">
          <span className="text-xs font-medium">Scroll</span>
          <div className="w-6 h-10 border-2 border-gray-600 rounded-full flex justify-center p-2">
            <div className="w-1 h-3 bg-primary-400 rounded-full animate-scroll-indicator"></div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes float-orb {
          0%, 100% { transform: translate(0, 0) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        @keyframes gradient {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        @keyframes scroll-indicator {
          0% { transform: translateY(0); opacity: 1; }
          100% { transform: translateY(12px); opacity: 0; }
        }
        @keyframes bounce-slow {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        .animate-float-orb {
          animation: float-orb 20s infinite ease-in-out;
        }
        .animate-float {
          animation: float 6s infinite ease-in-out;
        }
        .animate-gradient {
          animation: gradient 3s ease infinite;
        }
        .animate-scroll-indicator {
          animation: scroll-indicator 2s infinite;
        }
        .animate-bounce-slow {
          animation: bounce-slow 3s infinite ease-in-out;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
    </section>
  );
};

export default Hero;
