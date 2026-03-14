import React, { useEffect, useState, useRef, useCallback } from "react";
import {
  FaGithub,
  FaLinkedin,
  FaDownload,
  FaArrowDown,
  FaXTwitter,
  FaInstagram,
} from "react-icons/fa6";
import { HiSparkles } from "react-icons/hi";
import portfolioData from "../../data/portfolioData.json";

const TYPING_TITLES = [
  "Senior Java Developer",
  "AI/ML Engineer",
  "Cloud Architect",
  "Microservices Expert",
  "Generative AI Consultant",
];

const STATS = [
  { label: "Years Exp.", value: 5, suffix: "+" },
  { label: "Projects", value: 20, suffix: "+" },
  { label: "Technologies", value: 30, suffix: "+" },
];

const Hero = () => {
  const [mousePosition, setMousePosition] = useState({ x: 50, y: 50 });
  const [isLoaded, setIsLoaded] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [typingText, setTypingText] = useState("");
  const [titleIndex, setTitleIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [counters, setCounters] = useState(STATS.map(() => 0));
  const heroRef = useRef(null);
  const spotlightRef = useRef(null);
  const typingSpeedRef = useRef(100);

  // Typing animation
  useEffect(() => {
    const currentTitle = TYPING_TITLES[titleIndex];
    let timeout;

    if (!isDeleting && typingText === currentTitle) {
      timeout = setTimeout(() => setIsDeleting(true), 2000);
      typingSpeedRef.current = 60;
    } else if (isDeleting && typingText === "") {
      setIsDeleting(false);
      setTitleIndex((prev) => (prev + 1) % TYPING_TITLES.length);
      typingSpeedRef.current = 100;
    } else {
      timeout = setTimeout(() => {
        setTypingText((prev) =>
          isDeleting
            ? currentTitle.slice(0, prev.length - 1)
            : currentTitle.slice(0, prev.length + 1)
        );
        typingSpeedRef.current = isDeleting ? 50 : 100;
      }, typingSpeedRef.current);
    }

    return () => clearTimeout(timeout);
  }, [typingText, titleIndex, isDeleting]);

  // Counter animation
  useEffect(() => {
    const timers = STATS.map((stat, i) => {
      const step = Math.ceil(stat.value / 40);
      return setInterval(() => {
        setCounters((prev) => {
          const next = [...prev];
          if (next[i] < stat.value) next[i] = Math.min(next[i] + step, stat.value);
          return next;
        });
      }, 40);
    });
    return () => timers.forEach(clearInterval);
  }, []);

  // Spotlight cursor
  const handleMouseMove = useCallback((e) => {
    const rect = heroRef.current?.getBoundingClientRect();
    if (rect) {
      setMousePosition({
        x: ((e.clientX - rect.left) / rect.width) * 100,
        y: ((e.clientY - rect.top) / rect.height) * 100,
      });
      if (spotlightRef.current) {
        spotlightRef.current.style.left = `${e.clientX - rect.left}px`;
        spotlightRef.current.style.top  = `${e.clientY - rect.top}px`;
      }
    }
  }, []);

  const handleScroll = useCallback(() => {
    if (heroRef.current) {
      const progress = Math.min(window.scrollY / heroRef.current.offsetHeight, 1);
      setScrollProgress(progress);
    }
  }, []);

  useEffect(() => {
    setIsLoaded(true);
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("scroll", handleScroll);
    };
  }, [handleMouseMove, handleScroll]);

  return (
    <section
      ref={heroRef}
      id="home"
      className="relative min-h-screen flex items-center justify-center bg-gray-950 text-white overflow-hidden"
    >
      {/* Spotlight Cursor Effect */}
      <div
        ref={spotlightRef}
        className="spotlight"
        style={{ position: "absolute", pointerEvents: "none" }}
      />

      {/* Animated Mesh Gradient */}
      <div className="absolute inset-0 opacity-40 pointer-events-none">
        <div
          className="absolute inset-0"
          style={{
            background: `
              radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, rgba(45,156,255,0.18) 0%, transparent 50%),
              radial-gradient(circle at ${100 - mousePosition.x}% ${100 - mousePosition.y}%, rgba(168,85,247,0.18) 0%, transparent 50%),
              radial-gradient(circle at ${mousePosition.x * 0.8}% ${mousePosition.y * 1.2}%, rgba(236,72,153,0.1) 0%, transparent 50%)
            `,
            transition: "background 0.2s ease-out",
          }}
        />
      </div>

      {/* Floating Orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute top-20 left-20 w-80 h-80 bg-blue-500 rounded-full mix-blend-screen opacity-15 filter blur-3xl animate-float-orb"
          style={{ transform: `translate(${mousePosition.x * 0.02}px, ${mousePosition.y * 0.02}px)` }}
        />
        <div
          className="absolute bottom-20 right-20 w-80 h-80 bg-purple-500 rounded-full mix-blend-screen opacity-15 filter blur-3xl animate-float-orb animation-delay-2000"
          style={{ transform: `translate(${-mousePosition.x * 0.02}px, ${-mousePosition.y * 0.02}px)` }}
        />
        <div
          className="absolute top-1/2 left-1/2 w-96 h-96 bg-pink-500 rounded-full mix-blend-screen opacity-10 filter blur-3xl animate-float-orb animation-delay-4000"
          style={{ transform: `translate(calc(-50% + ${mousePosition.x * 0.01}px), calc(-50% + ${mousePosition.y * 0.01}px))` }}
        />
      </div>

      {/* Grid / Dot overlay */}
      <div className="absolute inset-0 opacity-[0.025] pointer-events-none">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.4) 1px, transparent 0)`,
            backgroundSize: "40px 40px",
            transform: `translate(${scrollProgress * 15}px, ${scrollProgress * 8}px)`,
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-screen">

          {/* ── Left: Text ── */}
          <div
            className={`space-y-8 transition-all duration-1000 ${
              isLoaded ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
            }`}
          >
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-500/10 border border-primary-500/30 backdrop-blur-sm animate-pulse-glow">
              <HiSparkles className="text-primary-400 animate-spin-slow" />
              <span className="text-sm font-medium text-primary-300">
                Available for opportunities
              </span>
            </div>

            {/* Main Heading */}
            <div className="space-y-3">
              <h1 className="text-6xl md:text-7xl lg:text-8xl font-extrabold leading-tight tracking-tight">
                <span className="block text-white">Hi, I'm</span>
                <span
                  className="block bg-gradient-to-r from-primary-400 via-purple-400 to-pink-400 bg-clip-text text-transparent"
                  style={{ backgroundSize: "200% 200%", animation: "gradientX 4s ease infinite" }}
                >
                  Bhupati Pradhan
                </span>
              </h1>

              {/* Typing Effect */}
              <div className="flex items-center gap-2 text-2xl md:text-3xl font-semibold text-gray-300 min-h-[2.5rem]">
                <span>{typingText}</span>
                <span className="inline-block w-0.5 h-8 bg-primary-400 animate-cursor" />
              </div>
            </div>

            {/* Description */}
            <p className="text-lg text-gray-400 leading-relaxed max-w-xl">
              Experienced Team Lead specializing in{" "}
              <span className="text-primary-400 font-semibold">microservices architecture</span>,{" "}
              <span className="text-purple-400 font-semibold">cloud engineering</span>, and{" "}
              <span className="text-pink-400 font-semibold">Generative AI</span>{" "}
              solutions using Claude LLM, OpenAI, and other advanced AI models.
            </p>

            {/* Quick Stats */}
            <div className="flex gap-8">
              {STATS.map((stat, i) => (
                <div key={i} className="text-center">
                  <div className="text-3xl font-extrabold text-white">
                    {counters[i]}
                    <span className="text-primary-400">{stat.suffix}</span>
                  </div>
                  <div className="text-xs text-gray-500 mt-0.5 font-medium uppercase tracking-wider">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4">
              <a
                href="#contact"
                className="btn-primary group flex items-center gap-2"
              >
                Get In Touch
                <FaArrowDown className="transform group-hover:translate-y-1 transition-transform" />
              </a>
              <a
                href={`${process.env.PUBLIC_URL}/BhupatiPradhanResume.pdf`}
                download="BhupatiPradhanResume.pdf"
                className="btn-outline flex items-center gap-2"
              >
                <FaDownload />
                Download Resume
              </a>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-4 pt-2">
              <span className="text-gray-500 text-sm">Follow me:</span>
              {[
                { icon: FaGithub,    href: portfolioData.contact.socialLinks[1].url, label: "GitHub" },
                { icon: FaLinkedin,  href: portfolioData.contact.socialLinks[0].url, label: "LinkedIn" },
                { icon: FaXTwitter,  href: portfolioData.contact.socialLinks[2].url, label: "X / Twitter" },
                { icon: FaInstagram, href: portfolioData.contact.socialLinks[3].url, label: "Instagram" },
              ].map((s, i) => (
                <a
                  key={i}
                  href={s.href}
                  target={s.href.startsWith("mailto") ? undefined : "_blank"}
                  rel={s.href.startsWith("mailto") ? undefined : "noopener noreferrer"}
                  aria-label={s.label}
                  className="w-11 h-11 rounded-xl bg-gray-800/60 border border-gray-700 flex items-center justify-center text-gray-400 hover:text-white hover:border-primary-500 hover:bg-primary-500/10 transition-all duration-300 transform hover:scale-110 hover:rotate-6 hover:shadow-lg hover:shadow-primary-500/20"
                >
                  <s.icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* ── Right: Visual Card ── */}
          <div
            className={`hidden lg:flex items-center justify-center transition-all duration-1000 ${
              isLoaded ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
            }`}
          >
            <div className="relative w-full max-w-md">
              {/* 3D Tilt Card */}
              <div
                className="relative aspect-square rounded-3xl bg-gradient-to-br from-primary-500/20 via-purple-500/20 to-pink-500/20 backdrop-blur-xl border border-primary-500/30 p-8"
                style={{
                  transform: `perspective(1000px) rotateX(${(mousePosition.y - 50) * 0.08}deg) rotateY(${(mousePosition.x - 50) * 0.08}deg)`,
                  transition: "transform 0.1s ease-out",
                }}
              >
                {/* Animated border glow */}
                <div className="absolute -inset-[2px] rounded-3xl bg-gradient-to-r from-primary-500 via-purple-500 to-pink-500 opacity-30 blur-md animate-border-glow" />

                <div className="relative z-10 h-full flex flex-col items-center justify-center text-center gap-6">
                  {/* Avatar */}
                  <div className="relative">
                    <div className="w-44 h-44 rounded-full bg-gradient-to-br from-primary-400 to-purple-500 overflow-hidden border-4 border-white/20 shadow-2xl animate-bounce-slow">
                      <img
                        src={`${process.env.PUBLIC_URL}/ChatGPT Image Nov 22, 2025, 12_39_27 AM.png`}
                        alt="Bhupati Pradhan"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    {/* Online indicator */}
                    <div className="absolute bottom-2 right-2 w-5 h-5 rounded-full bg-green-500 border-2 border-gray-950 animate-pulse" />
                  </div>

                  {/* Name & Title */}
                  <div>
                    <h3 className="text-2xl font-bold text-white">Bhupati Pradhan</h3>
                    <p className="text-primary-300 text-sm mt-1">Senior Java Developer & Consultant</p>
                  </div>

                  {/* Skills Orbit Pills */}
                  <div className="flex flex-wrap justify-center gap-2">
                    {["Java", "Spring Boot", "AI/ML", "AWS", "Python"].map((skill, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 text-xs font-semibold rounded-full bg-gray-800/80 border border-gray-700 text-gray-300"
                        style={{ animationDelay: `${i * 0.2}s` }}
                      >
                        {skill}
                      </span>
                    ))}
                  </div>

                  {/* Status dots */}
                  <div className="flex gap-2">
                    {[...Array(5)].map((_, i) => (
                      <div
                        key={i}
                        className="w-2 h-2 rounded-full bg-primary-400"
                        style={{ animation: `pulse 1.5s ease-in-out ${i * 0.2}s infinite` }}
                      />
                    ))}
                  </div>
                  <p className="text-gray-400 text-xs font-medium tracking-wide uppercase">
                    Crafting Digital Excellence
                  </p>
                </div>
              </div>

              {/* Floating decorative shapes */}
              <div className="absolute -top-8 -right-8 w-20 h-20 bg-purple-500/25 rounded-2xl rotate-12 animate-float blur-sm" />
              <div className="absolute -bottom-8 -left-8 w-28 h-28 bg-pink-500/25 rounded-full animate-float-orb animation-delay-2000 blur-sm" />
              <div className="absolute top-1/2 -right-12 w-10 h-10 bg-primary-500/40 rounded-xl rotate-45 animate-float animation-delay-1000" />
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="flex flex-col items-center gap-2 text-gray-500">
          <span className="text-xs font-medium uppercase tracking-widest">Scroll</span>
          <div className="w-6 h-10 border-2 border-gray-700 rounded-full flex justify-center pt-2">
            <div className="w-1 h-2 bg-primary-400 rounded-full" style={{ animation: "scroll-indicator 2s infinite" }} />
          </div>
        </div>
      </div>

      <style>{`
        @keyframes float-orb {
          0%, 100% { transform: translate(0, 0) scale(1); }
          33%       { transform: translate(30px, -50px) scale(1.1); }
          66%       { transform: translate(-20px, 20px) scale(0.9); }
        }
        @keyframes gradientX {
          0%, 100% { background-position: 0% 50%; }
          50%       { background-position: 100% 50%; }
        }
        @keyframes scroll-indicator {
          0%   { transform: translateY(0); opacity: 1; }
          100% { transform: translateY(10px); opacity: 0; }
        }
        @keyframes borderGlow {
          0%, 100% { opacity: 0.3; }
          50%       { opacity: 0.7; }
        }
        @keyframes pulse-glow {
          0%, 100% { box-shadow: 0 0 10px rgba(45,156,255,0.3); }
          50%       { box-shadow: 0 0 25px rgba(45,156,255,0.7), 0 0 40px rgba(168,85,247,0.3); }
        }
        .animate-float-orb      { animation: float-orb 20s infinite ease-in-out; }
        .animate-float          { animation: float-y 6s infinite ease-in-out; }
        .animate-border-glow    { animation: borderGlow 2.5s ease-in-out infinite; }
        .animate-pulse-glow     { animation: pulse-glow 3s ease-in-out infinite; }
        @keyframes float-y {
          0%, 100% { transform: translateY(0); }
          50%       { transform: translateY(-18px); }
        }
        .animation-delay-1000 { animation-delay: 1s; }
        .animation-delay-2000 { animation-delay: 2s; }
        .animation-delay-4000 { animation-delay: 4s; }
        .animate-bounce-slow {
          animation: bounce-slow 3s ease-in-out infinite;
        }
        @keyframes bounce-slow {
          0%, 100% { transform: translateY(0); }
          50%       { transform: translateY(-10px); }
        }
        .animate-spin-slow { animation: spin 8s linear infinite; }
        @keyframes spin { to { transform: rotate(360deg); } }
        .animate-cursor {
          animation: cursor-blink 0.8s step-end infinite;
        }
        @keyframes cursor-blink {
          0%, 100% { opacity: 1; }
          50%       { opacity: 0; }
        }
      `}</style>
    </section>
  );
};

export default Hero;
