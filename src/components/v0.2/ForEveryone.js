import React, { useState, useEffect, useRef } from "react";
import {
  FaHandshake,
  FaChartLine,
  FaCogs,
  FaRobot,
  FaPlug,
  FaSync,
  FaCommentDots,
  FaBook,
  FaCloud,
  FaBolt,
  FaShieldAlt,
} from "react-icons/fa";

const ForEveryone = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.05 }
    );
    const currentRef = sectionRef.current;
    if (currentRef) observer.observe(currentRef);
    return () => currentRef && observer.unobserve(currentRef);
  }, []);

  const solutions = [
    {
      icon: <FaSync className="text-3xl text-primary-400" />,
      title: "Platform modernization",
      short: "Legacy to future-ready",
      description:
        "Move from old, slow systems to fast, reliable platforms. I upgrade your core software and infrastructure so you can scale, stay secure, and deliver a better experience to customers and teams—without big-bang rewrites.",
    },
    {
      icon: <FaRobot className="text-3xl text-primary-400" />,
      title: "Chatbot & AI assistants",
      short: "24/7 intelligent support",
      description:
        "Deploy chatbots and AI assistants that answer questions, qualify leads, and handle routine tasks around the clock. Reduce support load, speed up responses, and let your team focus on high-value work.",
    },
    {
      icon: <FaCommentDots className="text-3xl text-primary-400" />,
      title: "WhatsApp & messaging support",
      short: "Reach customers where they are",
      description:
        "Integrate WhatsApp and other messaging channels into your business. Automate notifications, support, and order updates so you engage customers on the apps they already use every day.",
    },
    {
      icon: <FaPlug className="text-3xl text-primary-400" />,
      title: "API & integrations",
      short: "Connect everything",
      description:
        "Build and design APIs that connect your systems with partners, payment gateways, CRMs, and internal tools. One consistent, secure layer so data flows correctly and processes stay in sync.",
    },
    {
      icon: <FaBook className="text-3xl text-primary-400" />,
      title: "Libraries & reusable components",
      short: "Build once, use everywhere",
      description:
        "Create shared libraries and components so your teams ship faster and stay consistent. Less duplication, fewer bugs, and a solid foundation for new products and features.",
    },
    {
      icon: <FaCloud className="text-3xl text-primary-400" />,
      title: "Cloud & automation",
      short: "Scale without the headache",
      description:
        "Design and implement cloud solutions and automation so you scale reliably, cut manual work, and keep costs predictable. From migration to DevOps and CI/CD, so your tech supports growth.",
    },
  ];

  const impacts = [
    { icon: <FaBolt className="text-xl" />, text: "Faster delivery and fewer bottlenecks" },
    { icon: <FaChartLine className="text-xl" />, text: "Better reach and higher conversion" },
    { icon: <FaShieldAlt className="text-xl" />, text: "More secure, compliant systems" },
  ];

  return (
    <section
      id="solutions"
      ref={sectionRef}
      className="min-h-screen bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950 text-white overflow-hidden scroll-mt-20"
    >
      {/* Hero banner */}
      <div className="relative py-16 sm:py-24 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary-500/10 via-purple-500/10 to-pink-500/10" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-primary-500/20 rounded-full blur-[120px] pointer-events-none" />
        <div className="relative max-w-4xl mx-auto text-center">
          <div
            className={`inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-500/20 text-primary-400 text-sm font-medium mb-6 transition-all duration-700 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            <FaHandshake /> Business solutions
          </div>
          <h1
            className={`text-4xl sm:text-5xl lg:text-6xl font-bold mb-5 transition-all duration-700 delay-75 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            <span className="bg-gradient-to-r from-primary-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Make your business
            </span>
            <br />
            <span className="text-white">tech-enhanced.</span>
          </h1>
          <p
            className={`text-gray-400 text-lg sm:text-xl max-w-2xl mx-auto mb-8 transition-all duration-700 delay-150 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            From legacy systems to chatbots, APIs, and WhatsApp—I design and build solutions that help you grow, automate, and compete.
          </p>
          <div
            className={`flex flex-wrap justify-center gap-4 transition-all duration-700 delay-200 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            <a
              href="#solutions"
              className="px-6 py-3 bg-primary-500 hover:bg-primary-600 text-white font-semibold rounded-xl transition-all shadow-lg shadow-primary-500/25 hover:shadow-primary-500/40"
            >
              See solutions
            </a>
            <a
              href="#contact"
              className="px-6 py-3 bg-white/10 hover:bg-white/20 text-white font-semibold rounded-xl transition-all border border-white/20"
            >
              Get in touch
            </a>
          </div>
        </div>
      </div>

      {/* What I do (short) */}
      <div className="max-w-4xl mx-auto px-4 py-12">
        <div
          className={`rounded-2xl bg-gray-800/40 border border-gray-700/50 p-8 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          <div className="flex items-center gap-4 mb-4">
            <FaCogs className="text-3xl text-primary-400" />
            <h2 className="text-2xl font-bold text-white">What I do</h2>
          </div>
          <p className="text-gray-300 leading-relaxed text-lg">
            I build and maintain the systems that run your business—software that connects your apps, keeps data safe, and lets your team and customers work quickly and reliably. I turn technical complexity into solutions that support your goals.
          </p>
        </div>
      </div>

      {/* Solutions grid */}
      <div className="max-w-6xl mx-auto px-4 py-16">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-4 text-white">
          Solutions I deliver
        </h2>
        <p className="text-gray-400 text-center max-w-2xl mx-auto mb-12">
          What I can do to make your business tech-enhanced—clear outcomes, no jargon.
        </p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {solutions.map((item, index) => (
            <div
              key={item.title}
              className={`rounded-2xl bg-gray-800/50 border border-gray-700/50 p-6 hover:border-primary-500/30 hover:bg-gray-800/70 transition-all duration-500 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
              }`}
              style={{ transitionDelay: `${120 + index * 60}ms` }}
            >
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-primary-500/20 flex items-center justify-center">
                  {item.icon}
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white mb-1">{item.title}</h3>
                  <p className="text-primary-400/90 text-sm font-medium mb-2">{item.short}</p>
                  <p className="text-gray-400 text-sm leading-relaxed">{item.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Impact strip */}
      <div className="max-w-4xl mx-auto px-4 py-12">
        <div
          className={`rounded-2xl bg-gradient-to-r from-primary-500/10 via-purple-500/10 to-pink-500/10 border border-primary-500/20 p-8 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
          style={{ transitionDelay: "400ms" }}
        >
          <h2 className="text-xl font-bold text-white mb-6 text-center">
            How it impacts your business
          </h2>
          <div className="flex flex-wrap justify-center gap-8">
            {impacts.map((impact, i) => (
              <div key={i} className="flex items-center gap-3 text-gray-300">
                <span className="text-primary-400">{impact.icon}</span>
                <span className="font-medium">{impact.text}</span>
              </div>
            ))}
          </div>
          <p className="text-gray-400 text-center mt-6 text-sm max-w-2xl mx-auto">
            Faster, reliable systems mean less downtime and happier customers. Smarter automation and cloud use cut costs and help you scale. I help you grow with technology that works for your business.
          </p>
        </div>
      </div>

      {/* CTA */}
      <div className="max-w-3xl mx-auto px-4 py-16 text-center">
        <p className="text-gray-400 mb-4">
          For technical skills and project details, see Skills and Projects above.
        </p>
        <a
          href="#contact"
          className="inline-block px-8 py-3 bg-primary-500 hover:bg-primary-600 text-white font-semibold rounded-xl transition-all"
        >
          Get in touch
        </a>
      </div>
    </section>
  );
};

export default ForEveryone;
