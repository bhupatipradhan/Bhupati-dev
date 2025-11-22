import React, { useState, useEffect, useRef } from "react";
import {
  FaEnvelope,
  FaPhone,
  FaLinkedin,
  FaGithub,
  FaPaperPlane,
  FaXTwitter,
  FaInstagram,
} from "react-icons/fa6";
import { HiSparkles } from "react-icons/hi";
import emailjs from "@emailjs/browser";
import portfolioData from "../../data/portfolioData.json";

const Contact = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [focusedField, setFocusedField] = useState(null);
  const [submitStatus, setSubmitStatus] = useState(null);
  const sectionRef = useRef(null);

  // Initialize EmailJS (add your public key here later)
  useEffect(() => {
    emailjs.init(portfolioData.contact.emailConfig.publicKey);
  }, []);

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

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      // Send email using EmailJS
      await emailjs.send(
        portfolioData.contact.emailConfig.serviceId,
        portfolioData.contact.emailConfig.templateId,
        {
          to_email: portfolioData.contact.emailConfig.recipientEmail,
          from_name: formData.name,
          from_email: formData.email,
          subject: formData.subject,
          message: formData.message,
        }
      );

      setSubmitStatus("success");
      setFormData({ name: "", email: "", subject: "", message: "" });
      setTimeout(() => {
        setSubmitStatus(null);
      }, 5000);
    } catch (error) {
      console.error("Error sending email:", error);
      setSubmitStatus("error");
      setTimeout(() => {
        setSubmitStatus(null);
      }, 5000);
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfoData = portfolioData.contact.contactInfo.map((info) => {
    let icon;
    if (info.icon === "email") icon = <FaEnvelope className="text-2xl" />;
    else if (info.icon === "phone") icon = <FaPhone className="text-2xl" />;
    else if (info.icon === "location")
      icon = <span className="text-2xl">📍</span>;

    return { ...info, icon };
  });

  const socialLinksData = portfolioData.contact.socialLinks.map((social) => {
    let icon;
    if (social.icon === "linkedin") icon = <FaLinkedin />;
    else if (social.icon === "github") icon = <FaGithub />;
    else if (social.icon === "x") icon = <FaXTwitter />;
    else if (social.icon === "instagram") icon = <FaInstagram />;

    return { ...social, icon };
  });

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="section-container bg-gray-950 relative overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, rgba(255,255,255,0.15) 1px, transparent 0)`,
            backgroundSize: "40px 40px",
          }}
        ></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div
          className={`text-center mb-16 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="inline-block mb-4">
            <span className="px-4 py-2 rounded-full bg-primary-500/10 border border-primary-500/30 text-primary-400 text-sm font-medium flex items-center gap-2">
              <HiSparkles className="animate-pulse" />
              Let's Connect
            </span>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent">
            Get In Touch
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            I'm always open to discussing new projects, creative ideas, or
            opportunities to be part of your visions.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left Side - Contact Info */}
          <div
            className={`space-y-8 transition-all duration-1000 ${
              isVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 -translate-x-10"
            }`}
            style={{ transitionDelay: "0.1s" }}
          >
            <div className="bg-gradient-to-br from-gray-900/80 via-gray-800/80 to-gray-900/80 rounded-3xl p-8 border border-gray-700/50 relative overflow-hidden group backdrop-blur-sm shadow-lg">
              {/* Glow Effect */}
              <div className="absolute -inset-1 bg-gradient-to-r from-primary-500 via-purple-500 to-pink-500 rounded-3xl opacity-0 group-hover:opacity-15 blur-xl transition-opacity duration-500"></div>

              <div className="relative z-10">
                <h3 className="text-3xl font-bold mb-6 text-white flex items-center gap-3">
                  <HiSparkles className="text-primary-400 animate-pulse" />
                  Let's Connect
                </h3>
                <p className="text-gray-400 mb-8 leading-relaxed">
                  Feel free to reach out if you're looking for a developer, have
                  a question, or just want to connect. I'm always excited to
                  work on new projects and collaborate with amazing teams.
                </p>

                {/* Contact Info Cards */}
                <div className="space-y-4 mb-8">
                  {contactInfoData.map((info, index) =>
                    // Disable phone contact - comment out to show
                    info.title === "Phone" ? null : (
                      <a
                        key={index}
                        href={info.link}
                        className="group relative flex items-center gap-4 p-5 rounded-2xl bg-gray-800/60 border border-gray-700/50 hover:border-primary-500/50 transition-all duration-300 transform hover:scale-105 overflow-hidden backdrop-blur-sm"
                        style={{
                          animationDelay: `${index * 0.1}s`,
                        }}
                      >
                        {/* Gradient Background */}
                        <div
                          className={`absolute inset-0 bg-gradient-to-br ${info.color} opacity-0 group-hover:opacity-15 transition-opacity duration-300 rounded-2xl`}
                        ></div>

                        {/* Icon */}
                        <div
                          className={`relative z-10 flex-shrink-0 w-14 h-14 rounded-xl bg-gradient-to-br ${info.color} flex items-center justify-center text-white transform group-hover:rotate-6 group-hover:scale-110 transition-all duration-300 shadow-lg backdrop-blur-sm`}
                        >
                          {info.icon}
                        </div>

                        {/* Content */}
                        <div className="relative z-10 flex-1">
                          <h4 className="font-bold text-white mb-1 group-hover:text-primary-400 transition-colors">
                            {info.title}
                          </h4>
                          <p className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors">
                            {info.content}
                          </p>
                        </div>
                      </a>
                    )
                  )}
                </div>

                {/* Social Links */}
                <div className="pt-8 border-t border-gray-700/50">
                  <h4 className="font-bold text-white mb-4">Follow Me</h4>
                  <div className="flex gap-4">
                    {socialLinksData.map((social, index) => (
                      <a
                        key={index}
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`group relative w-14 h-14 rounded-xl bg-gradient-to-br ${social.color} text-white flex items-center justify-center hover:scale-110 transition-all duration-300 shadow-lg hover:shadow-2xl transform hover:rotate-6`}
                        aria-label={social.label}
                      >
                        <span className="relative z-10">{social.icon}</span>
                        <span className="absolute inset-0 bg-white rounded-xl opacity-0 group-hover:opacity-20 transition-opacity"></span>
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Contact Form */}
          <div
            className={`transition-all duration-1000 ${
              isVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 translate-x-10"
            }`}
            style={{ transitionDelay: "0.2s" }}
          >
            <div className="bg-gradient-to-br from-gray-900/80 via-gray-800/80 to-gray-900/80 rounded-3xl p-8 border border-gray-700/50 relative overflow-hidden group backdrop-blur-sm shadow-lg">
              {/* Glow Effect */}
              <div className="absolute -inset-1 bg-gradient-to-r from-primary-500 via-purple-500 to-pink-500 rounded-3xl opacity-0 group-hover:opacity-15 blur-xl transition-opacity duration-500"></div>

              <div className="relative z-10">
                <h3 className="text-2xl font-bold mb-6 text-white flex items-center gap-2">
                  <FaPaperPlane className="text-primary-400" />
                  Send a Message
                </h3>

                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Name */}
                  <div className="group">
                    <label
                      htmlFor="name"
                      className="block text-sm font-semibold text-gray-300 mb-2"
                    >
                      Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      onFocus={() => setFocusedField("name")}
                      onBlur={() => setFocusedField(null)}
                      required
                      className={`w-full px-4 py-3 rounded-xl border-2 transition-all duration-300 bg-gray-900/60 text-white placeholder-gray-500 backdrop-blur-sm ${
                        focusedField === "name"
                          ? "border-primary-500 shadow-lg shadow-primary-500/30"
                          : "border-gray-700/50 group-hover:border-primary-500/30"
                      }`}
                      placeholder="Your Name"
                    />
                  </div>

                  {/* Email */}
                  <div className="group">
                    <label
                      htmlFor="email"
                      className="block text-sm font-semibold text-gray-300 mb-2"
                    >
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      onFocus={() => setFocusedField("email")}
                      onBlur={() => setFocusedField(null)}
                      required
                      className={`w-full px-4 py-3 rounded-xl border-2 transition-all duration-300 bg-gray-900/60 text-white placeholder-gray-500 backdrop-blur-sm ${
                        focusedField === "email"
                          ? "border-primary-500 shadow-lg shadow-primary-500/30"
                          : "border-gray-700/50 group-hover:border-primary-500/30"
                      }`}
                      placeholder="your.email@example.com"
                    />
                  </div>

                  {/* Subject */}
                  <div className="group">
                    <label
                      htmlFor="subject"
                      className="block text-sm font-semibold text-gray-300 mb-2"
                    >
                      Subject *
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      onFocus={() => setFocusedField("subject")}
                      onBlur={() => setFocusedField(null)}
                      required
                      className={`w-full px-4 py-3 rounded-xl border-2 transition-all duration-300 bg-gray-900/60 text-white placeholder-gray-500 backdrop-blur-sm ${
                        focusedField === "subject"
                          ? "border-primary-500 shadow-lg shadow-primary-500/30"
                          : "border-gray-700/50 group-hover:border-primary-500/30"
                      }`}
                      placeholder="What's this about?"
                    />
                  </div>

                  {/* Message */}
                  <div className="group">
                    <label
                      htmlFor="message"
                      className="block text-sm font-semibold text-gray-300 mb-2"
                    >
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      onFocus={() => setFocusedField("message")}
                      onBlur={() => setFocusedField(null)}
                      required
                      rows="5"
                      className={`w-full px-4 py-3 rounded-xl border-2 transition-all duration-300 resize-none bg-gray-900/60 text-white placeholder-gray-500 backdrop-blur-sm ${
                        focusedField === "message"
                          ? "border-primary-500 shadow-lg shadow-primary-500/30"
                          : "border-gray-700/50 group-hover:border-primary-500/30"
                      }`}
                      placeholder="Tell me about your project or idea..."
                    ></textarea>
                  </div>

                  {/* Status Messages */}
                  {submitStatus === "success" && (
                    <div className="p-4 rounded-xl bg-green-500/20 border border-green-500/50 text-green-400 text-sm font-medium">
                      ✓ Message sent successfully! I'll get back to you soon.
                    </div>
                  )}
                  {submitStatus === "error" && (
                    <div className="p-4 rounded-xl bg-red-500/20 border border-red-500/50 text-red-400 text-sm font-medium">
                      ✗ Error sending message. Please try again or contact me
                      directly.
                    </div>
                  )}

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="group relative w-full bg-gradient-to-r from-primary-500 to-purple-500 text-white px-8 py-4 rounded-xl font-bold hover:from-primary-600 hover:to-purple-600 transition-all transform hover:scale-105 shadow-lg hover:shadow-2xl hover:shadow-primary-500/50 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed overflow-hidden"
                  >
                    {/* Shimmer Effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>

                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                        <span>Sending...</span>
                      </>
                    ) : (
                      <>
                        <FaPaperPlane className="transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                        <span>Send Message</span>
                      </>
                    )}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
