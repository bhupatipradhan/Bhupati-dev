import React, { useState } from "react";
import portfolioData from "../data/portfolioData.json";
import {
  FaEnvelope,
  FaMapMarkerAlt,
  FaGithub,
  FaLinkedin,
  FaDownload,
  FaChevronDown,
  FaChevronUp,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

/* ─── Small helpers ───────────────────────────────────────────────── */
const Section = ({ title, children }) => (
  <section className="mb-12">
    <div className="flex items-center gap-3 mb-5">
      <h2 className="text-xs font-bold tracking-[0.2em] text-gray-400 uppercase">
        {title}
      </h2>
      <div className="flex-1 h-px bg-gray-200" />
    </div>
    {children}
  </section>
);

const Tag = ({ label }) => (
  <span className="inline-block px-2.5 py-1 text-xs font-medium rounded-md bg-gray-100 text-gray-600 border border-gray-200">
    {label}
  </span>
);

/* ─── Skill Progress Bar ──────────────────────────────────────────── */
const SkillBar = ({ name, proficiency }) => (
  <div className="flex items-center gap-3">
    <span className="text-sm text-gray-700 w-28 flex-shrink-0">{name}</span>
    <div className="flex-1 h-1.5 bg-gray-100 rounded-full overflow-hidden">
      <div
        className="h-full rounded-full bg-gradient-to-r from-gray-700 to-gray-500 transition-all duration-700"
        style={{ width: `${proficiency}%` }}
      />
    </div>
    <span className="text-xs text-gray-400 w-8 text-right">{proficiency}%</span>
  </div>
);

/* ─── Experience Card ─────────────────────────────────────────────── */
const ExpCard = ({ exp }) => {
  const [expanded, setExpanded] = useState(false);
  return (
    <div className="border-l-2 border-gray-200 pl-5 pb-7 relative">
      {/* Timeline dot */}
      <div className="absolute -left-[5px] top-1 w-2 h-2 rounded-full bg-gray-700 border-2 border-white" />
      <div className="flex flex-wrap items-start justify-between gap-2 mb-1">
        <div>
          <h3 className="font-semibold text-gray-900 text-base">{exp.title}</h3>
          <p className="text-sm text-gray-500">
            {exp.company} &nbsp;·&nbsp; {exp.location}
          </p>
        </div>
        <span className="text-xs text-gray-400 bg-gray-50 border border-gray-200 px-2 py-1 rounded-full whitespace-nowrap">
          {exp.period} · {exp.duration}
        </span>
      </div>

      {/* Expandable bullets */}
      <button
        onClick={() => setExpanded((p) => !p)}
        className="flex items-center gap-1 text-xs text-gray-400 hover:text-gray-600 transition-colors mt-2"
      >
        {expanded ? (
          <>
            <FaChevronUp size={10} /> Hide details
          </>
        ) : (
          <>
            <FaChevronDown size={10} /> Show details
          </>
        )}
      </button>

      {expanded && (
        <ul className="mt-3 space-y-1.5">
          {exp.description.map((item, i) => (
            <li key={i} className="flex items-start gap-2 text-sm text-gray-600">
              <span className="mt-[5px] w-1 h-1 rounded-full bg-gray-400 flex-shrink-0" />
              {item}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

/* ─── Project Card ────────────────────────────────────────────────── */
const ProjectCard = ({ project }) => (
  <div className="p-5 border border-gray-200 rounded-xl hover:border-gray-400 hover:shadow-sm transition-all duration-300 group">
    <div className="flex items-start justify-between gap-3 mb-2">
      <div className="flex items-center gap-2">
        <span className="text-xl">{project.image}</span>
        <div>
          <h3 className="font-semibold text-gray-900 text-sm group-hover:text-gray-700">
            {project.title}
          </h3>
          <p className="text-xs text-gray-400">{project.role}</p>
        </div>
      </div>
      {project.featured && (
        <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-amber-50 border border-amber-200 text-amber-600">
          Featured
        </span>
      )}
    </div>
    <p className="text-xs text-gray-500 leading-relaxed mb-3 line-clamp-2">
      {project.description}
    </p>
    <div className="flex flex-wrap gap-1.5">
      {project.technologies.slice(0, 5).map((t, i) => (
        <Tag key={i} label={t} />
      ))}
      {project.technologies.length > 5 && (
        <Tag label={`+${project.technologies.length - 5}`} />
      )}
    </div>
  </div>
);

/* ─── Main Component ──────────────────────────────────────────────── */
const MinimalView = () => {
  const data = portfolioData;

  const allSkills = [
    ...data.skills.programmingLanguages,
    ...data.skills.frameworks,
    ...data.skills.databases,
    ...data.skills.devOps,
    ...data.skills.cloudPlatforms,
    ...data.skills.ai,
  ];

  const topSkills = allSkills
    .sort((a, b) => b.proficiency - a.proficiency)
    .slice(0, 12);

  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans">
      {/* ── Top bar ── */}
      <div className="w-full h-0.5 bg-gradient-to-r from-gray-800 via-gray-500 to-gray-300" />

      <div className="max-w-3xl mx-auto px-6 py-16">

        {/* ── Header / Hero ── */}
        <header className="mb-14">
          <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-6">
            {/* Left: Name + title */}
            <div>
              <div className="flex items-center gap-4 mb-3">
                <img
                  src={`${process.env.PUBLIC_URL}/ChatGPT Image Nov 22, 2025, 12_39_27 AM.png`}
                  alt="Bhupati Pradhan"
                  className="w-16 h-16 rounded-2xl object-cover border border-gray-200 shadow-sm"
                />
                <div>
                  <h1 className="text-3xl font-extrabold text-gray-900 tracking-tight">
                    Bhupati Pradhan
                  </h1>
                  <p className="text-sm text-gray-500 mt-0.5">
                    Senior Java Developer &amp; AI/ML Consultant
                  </p>
                </div>
              </div>

              {/* Contact row */}
              <div className="flex flex-wrap items-center gap-4 text-xs text-gray-500 mt-3">
                <a
                  href={`mailto:${data.personal.email}`}
                  className="flex items-center gap-1.5 hover:text-gray-800 transition-colors"
                >
                  <FaEnvelope size={11} />
                  {data.personal.email}
                </a>
                <span className="flex items-center gap-1.5">
                  <FaMapMarkerAlt size={11} />
                  {data.personal.location}
                </span>
                <a
                  href="https://www.linkedin.com/in/bhupati-pradhan"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 hover:text-gray-800 transition-colors"
                >
                  <FaLinkedin size={11} />
                  LinkedIn
                </a>
                <a
                  href="https://github.com/bhupatipradhan"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 hover:text-gray-800 transition-colors"
                >
                  <FaGithub size={11} />
                  GitHub
                </a>
                <a
                  href="https://x.com/bhupati_bm"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 hover:text-gray-800 transition-colors"
                >
                  <FaXTwitter size={11} />
                  X / Twitter
                </a>
              </div>
            </div>

            {/* Right: Download CTA */}
            <div className="flex-shrink-0">
              <a
                href={`${process.env.PUBLIC_URL}/BhupatiPradhanResume.pdf`}
                download
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-gray-300 text-sm text-gray-700 hover:bg-gray-50 hover:border-gray-400 transition-all duration-200 font-medium shadow-sm"
              >
                <FaDownload size={12} />
                Resume
              </a>
            </div>
          </div>

          {/* Summary */}
          <div className="mt-6 p-5 bg-gray-50 rounded-xl border border-gray-100">
            <p className="text-sm text-gray-600 leading-relaxed">
              Experienced Team Lead &amp; Senior Java Developer with <strong>5+ years</strong> in
              enterprise software. Specializing in{" "}
              <strong>microservices architecture</strong>,{" "}
              <strong>cloud engineering (AWS)</strong>, and{" "}
              <strong>Generative AI</strong> using Claude LLM, OpenAI, and other LLMs.
              Currently consulting at a Big 4 firm, building scalable Java and Python solutions.
            </p>

            {/* Quick stats */}
            <div className="flex flex-wrap gap-6 mt-4 pt-4 border-t border-gray-200">
              {[
                { value: "5+", label: "Years Experience" },
                { value: "20+", label: "Projects Delivered" },
                { value: "30+", label: "Technologies" },
                { value: "BIG 4", label: "Current Employer" },
              ].map((s, i) => (
                <div key={i}>
                  <div className="text-lg font-bold text-gray-900">{s.value}</div>
                  <div className="text-xs text-gray-400">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </header>

        {/* ── Experience ── */}
        <Section title="Experience">
          <div className="space-y-0">
            {data.experience.map((exp, i) => (
              <ExpCard key={i} exp={exp} />
            ))}
          </div>
        </Section>

        {/* ── Skills ── */}
        <Section title="Skills">
          <div className="grid sm:grid-cols-2 gap-x-10 gap-y-3 mb-6">
            {topSkills.map((skill, i) => (
              <SkillBar key={i} name={skill.name} proficiency={skill.proficiency} />
            ))}
          </div>

          {/* Additional tags */}
          <div className="mt-4 pt-4 border-t border-gray-100">
            <p className="text-xs text-gray-400 mb-2 uppercase tracking-wider font-medium">
              Additional
            </p>
            <div className="flex flex-wrap gap-1.5">
              {data.skills.additionalSkills.map((s, i) => (
                <Tag key={i} label={s} />
              ))}
            </div>
          </div>
        </Section>

        {/* ── Projects ── */}
        <Section title="Projects">
          <div className="grid sm:grid-cols-2 gap-4">
            {portfolioData.experience
              ? null
              : null}
            {[
              { image: "🏥", title: "Intellicentrics", role: "Senior Developer", featured: true, description: "Comprehensive healthcare solution using FHIR R4 standard resources. Implemented microservices architecture for appointment scheduling, insurance, and patient management.", technologies: ["Java", "Spring Boot", "AWS", "Kafka", "Docker", "FHIR", "Jenkins"] },
              { image: "🤖", title: "Neurex", role: "Senior Developer & Team Lead", featured: true, description: "AI-based product using NLP to extract valuable information from unstructured patient notes, identifying SNOMED CT codes.", technologies: ["Java", "Spring Boot", "React", "HL7", "Node.js"] },
              { image: "💡", title: "Smart On FHIR", role: "Senior Developer & Team Lead", featured: false, description: "Application utilizing g10 Standardized API for ONC Certification, with OAuth2 authentication.", technologies: ["Java", "Spring Boot", "OAuth2", "HAPI-FHIR", "React"] },
              { image: "📚", title: "iMTD", role: "Developer", featured: false, description: "Medical terminology translator using UMLS. Handles lookup, verification, and translation of structured medical terms.", technologies: ["Java", "Spring Boot", "PostgreSQL", "Apache Ctakes", "UMLS"] },
              { image: "🗺️", title: "Epic-Mapping", role: "Developer", featured: false, description: "EPIC EMR data integration layer using Apache Camel for monitoring and syncing changes to MongoDB.", technologies: ["Java", "Spring Boot", "Apache Camel", "MongoDB"] },
              { image: "🔄", title: "E-health Exchange", role: "Developer", featured: false, description: "Health information exchange platform supporting national and local exchanges using secure network standards.", technologies: ["Java", "Spring", "MySQL", "Servlet", "JDBC"] },
            ].map((p, i) => (
              <ProjectCard key={i} project={p} />
            ))}
          </div>
        </Section>

        {/* ── Education ── */}
        <Section title="Education">
          <div className="border-l-2 border-gray-200 pl-5 relative">
            <div className="absolute -left-[5px] top-1 w-2 h-2 rounded-full bg-gray-700 border-2 border-white" />
            <div className="flex flex-wrap justify-between gap-2">
              <div>
                <h3 className="font-semibold text-gray-900 text-base">
                  Bachelor of Technology — Electrical Engineering
                </h3>
                <p className="text-sm text-gray-500">
                  Gandhi Institute For Technology &nbsp;·&nbsp; Bhubaneswar, Odisha
                </p>
              </div>
              <span className="text-xs text-gray-400 bg-gray-50 border border-gray-200 px-2 py-1 rounded-full whitespace-nowrap h-fit">
                2015 – 2019
              </span>
            </div>
          </div>
        </Section>

        {/* ── Contact ── */}
        <Section title="Get In Touch">
          <div className="flex flex-wrap gap-3">
            {[
              { icon: FaEnvelope, label: portfolioData.personal.email, href: `mailto:${portfolioData.personal.email}` },
              { icon: FaLinkedin, label: "LinkedIn Profile", href: "https://www.linkedin.com/in/bhupati-pradhan" },
              { icon: FaGithub,   label: "GitHub Profile",   href: "https://github.com/bhupatipradhan" },
              { icon: FaXTwitter, label: "X / Twitter",    href: "https://x.com/bhupati_bm" },
            ].map(({ icon: Icon, label, href }, i) => (
              <a
                key={i}
                href={href}
                target={href.startsWith("mailto") ? undefined : "_blank"}
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2.5 text-sm text-gray-700 border border-gray-200 rounded-lg hover:border-gray-400 hover:bg-gray-50 transition-all duration-200 font-medium"
              >
                <Icon size={14} className="text-gray-500" />
                {label}
              </a>
            ))}
          </div>
        </Section>

        {/* ── Footer ── */}
        <div className="pt-6 border-t border-gray-100 text-center">
          <p className="text-xs text-gray-400">
            © {new Date().getFullYear()} Bhupati Pradhan &nbsp;·&nbsp; Built with React &amp; Tailwind CSS
          </p>
        </div>
      </div>
    </div>
  );
};

export default MinimalView;
