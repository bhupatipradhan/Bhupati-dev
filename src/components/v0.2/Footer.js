import React from "react";
import {
  FaHeart,
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaXTwitter,
  FaInstagram,
} from "react-icons/fa6";
import portfolioData from "../../data/portfolioData.json";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-r from-gray-950 via-gray-900 to-gray-950 text-white py-16 relative overflow-hidden border-t border-gray-800/30 backdrop-blur-sm">
      {/* Animated Background */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary-500 rounded-full filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500 rounded-full filter blur-3xl animate-pulse animation-delay-2000"></div>
      </div>

      {/* Grid Pattern */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px)`,
          backgroundSize: "50px 50px",
        }}
      ></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-primary-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Bhupati Pradhan
            </h3>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              Senior Java Developer & Consultant building scalable enterprise
              solutions with modern technologies and innovative approaches.
            </p>
            <div className="flex space-x-4">
              {[
                { icon: FaGithub, href: "https://github.com", label: "GitHub" },
                {
                  icon: FaLinkedin,
                  href: "https://linkedin.com",
                  label: "LinkedIn",
                },
                {
                  icon: FaXTwitter,
                  href: "https://x.com",
                  label: "X (Twitter)",
                },
                {
                  icon: FaInstagram,
                  href: "https://instagram.com",
                  label: "Instagram",
                },
                {
                  icon: FaEnvelope,
                  href: "mailto:dev.bhupatipradhan@gmail.com",
                  label: "Email",
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
                  className="group relative w-12 h-12 rounded-xl bg-gray-800/60 border border-gray-700/50 flex items-center justify-center text-gray-400 hover:text-white hover:border-primary-500/50 hover:bg-primary-500/15 transition-all duration-300 transform hover:scale-110 hover:rotate-6 backdrop-blur-sm"
                  aria-label={social.label}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-primary-500 to-purple-500 rounded-xl opacity-0 group-hover:opacity-20 blur-lg transition-opacity"></div>
                  <social.icon size={18} className="relative z-10" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold text-white mb-4">Quick Links</h4>
            <ul className="space-y-3">
              {[
                { name: "About", href: "#about" },
                { name: "Skills", href: "#skills" },
                { name: "Experience", href: "#experience" },
                { name: "Projects", href: "#projects" },
                { name: "Contact", href: "#contact" },
              ].map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-primary-400 transition-colors duration-300 flex items-center gap-2 group"
                  >
                    <span className="w-0 h-0.5 bg-primary-400 group-hover:w-4 transition-all duration-300"></span>
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-bold text-white mb-4">Get In Touch</h4>
            <ul className="space-y-3 text-gray-400 text-sm">
              <li className="flex items-center gap-3">
                <FaEnvelope className="text-primary-400" />
                <span>{portfolioData.personal.email}</span>
              </li>
              <li className="flex items-center gap-3">
                <span>📍 {portfolioData.personal.location}</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-gray-800/30 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm text-center md:text-left mb-4 md:mb-0">
            © {currentYear} Bhupati Pradhan. Made with{" "}
            <FaHeart className="inline text-red-500 mx-1 animate-pulse" /> using
            React & Tailwind CSS
          </p>
          <p className="text-gray-500 text-xs">
            Designed with <span className="text-primary-400">Passion</span> &{" "}
            <span className="text-purple-400">Innovation</span>
          </p>
        </div>
      </div>

      <style>{`
        .animation-delay-2000 {
          animation-delay: 2s;
        }
      `}</style>
    </footer>
  );
};

export default Footer;
