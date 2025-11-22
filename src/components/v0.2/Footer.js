import React from 'react';
import { FaHeart, FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white py-12 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-primary-400 rounded-full filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-400 rounded-full filter blur-3xl animate-pulse animation-delay-2000"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <p className="text-gray-400 text-center md:text-left">
              © {currentYear} Bhupati Pradhan. Made with{' '}
              <FaHeart className="inline text-red-500 mx-1 animate-pulse" /> using React & Tailwind CSS
            </p>
          </div>
          
          <div className="flex space-x-6">
            {[
              { icon: FaGithub, href: 'https://github.com', label: 'GitHub' },
              { icon: FaLinkedin, href: 'https://linkedin.com', label: 'LinkedIn' },
              { icon: FaEnvelope, href: 'mailto:your.email@example.com', label: 'Email' },
            ].map((social, index) => (
              <a
                key={index}
                href={social.href}
                target={social.href.startsWith('mailto') ? undefined : '_blank'}
                rel={social.href.startsWith('mailto') ? undefined : 'noopener noreferrer'}
                className="group relative w-12 h-12 flex items-center justify-center text-gray-400 hover:text-white transition-all duration-300 transform hover:scale-125 hover:rotate-12"
                aria-label={social.label}
              >
                <div className="absolute inset-0 bg-primary-600 rounded-full opacity-0 group-hover:opacity-20 blur-xl transition-opacity"></div>
                <social.icon size={20} className="relative z-10" />
              </a>
            ))}
          </div>
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

