
import React from "react";
import { DATA } from "./data";

import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { Section } from "./components/Section";
import { Tag } from "./components/Tag";
import { ProjectCard } from "./components/ProjectCard";
import { Footer } from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-gray-950 text-gray-300 font-sans selection:bg-blue-500/30">
      <Header />

      <main className="max-w-4xl mx-auto px-6 pt-24 pb-20">
        {/* HERO */}
        <Hero />

        {/* ABOUT */}
        <Section id="about" title="About Me">
          <div className="prose prose-invert max-w-none text-gray-400">
            <p className="text-lg leading-relaxed mb-6">{DATA.about}</p>
          </div>
        </Section>

        {/* PROJECTS */}
        <Section id="projects" title="Featured Projects">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {DATA.projects.map((project, idx) => (
              <ProjectCard key={idx} project={project} />
            ))}
          </div>
        </Section>

        {/* SKILLS */}
        <Section id="skills" title="Technical Skills">
          <div className="space-y-6">
            {/* Languages */}
            <div>
              <h3 className="text-gray-100 font-medium mb-3">Languages</h3>
              <div className="flex flex-wrap gap-2">
                {DATA.skills.languages.map((s) => (
                  <Tag key={s} text={s} />
                ))}
              </div>
            </div>

            {/* Web Dev */}
            <div>
              <h3 className="text-gray-100 font-medium mb-3">Web Development</h3>
              <div className="flex flex-wrap gap-2">
                {DATA.skills.web.map((s) => (
                  <Tag key={s} text={s} />
                ))}
              </div>
            </div>

            {/* Databases */}
            <div>
              <h3 className="text-gray-100 font-medium mb-3">Databases</h3>
              <div className="flex flex-wrap gap-2">
                {DATA.skills.databases.map((s) => (
                  <Tag key={s} text={s} />
                ))}
              </div>
            </div>

            {/* Core Subjects */}
            <div>
              <h3 className="text-gray-100 font-medium mb-3">Core Subjects</h3>
              <div className="flex flex-wrap gap-2">
                {DATA.skills.core.map((s) => (
                  <Tag key={s} text={s} />
                ))}
              </div>
            </div>

            {/* Languages */}
            <div>
              <h3 className="text-gray-100 font-medium mb-3">Tools & Platforms</h3>
              <div className="flex flex-wrap gap-2">
                {DATA.skills.tools.map((s) => (
                  <Tag key={s} text={s} />
                ))}
              </div>
            </div>
          </div>
        </Section>

        {/* EXPERIENCE */}
        <Section id="certifications" title="Certifications">
          <div className="space-y-8">
            {DATA.certifications.map((cert, idx) => (
              <div
                key={idx}
                className="bg-gray-900 border border-gray-800 rounded-lg p-6 hover:border-blue-500/40 transition"
              >
                {/* Title */}
                <h3 className="text-xl font-bold text-gray-100 mb-1">
                  {cert.title}
                </h3>

                {/* Date */}
                <p className="text-blue-400 text-sm mb-3">
                  {cert.date}
                </p>

                {/* Description */}
                <p className="text-gray-400 text-sm mb-3">
                  {cert.desc}
                </p>

                {/* Certificate Link */}
                {cert.link && (
                  <a
                    href={cert.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block text-blue-400 text-sm underline hover:text-blue-300"
                  >
                    View Certificate →
                  </a>
                )}
              </div>
            ))}
          </div>
        </Section>

        {/* ACHIEVEMENTS */}
        <div className="py-16 border-b border-gray-800">
          <h2 className="text-2xl font-bold text-gray-100 mb-6 flex items-center gap-2">
            Achievements
          </h2>

          <ul className="space-y-3">
            {DATA.achievements.map((item, i) => (
              <li
                key={i}
                className="flex items-start gap-3 text-gray-400"
              >
                <span className="text-blue-500 mt-1">▹</span>
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* CONTACT */}
        <Section id="contact" title="Get In Touch">
          <div className="text-center py-8">
            <p className="text-gray-400 text-lg mb-6 max-w-xl mx-auto">
              I am currently looking for full-time opportunities. Whether you have a
              question or just want to say hi, my inbox is always open.
            </p>

            {/* Email Display */}
            <p className="text-gray-300 text-md mb-8">
              Email:{" "}
              <a
                target="_blank"
                href={DATA.socials.email}
                className="text-blue-400 hover:text-blue-300 underline"
              >
                {DATA.emailText}
              </a>
            </p>

            {/* Social Links */}
            <div className="flex justify-center gap-6 mb-8">
              <a
                target="_blank"
                href={DATA.socials.github}
                className="text-gray-400 hover:text-white transition-colors"
              >
                GitHub
              </a>
              <a
                target="_blank"
                href={DATA.socials.linkedin}
                className="text-gray-400 hover:text-white transition-colors"
              >
                LinkedIn
              </a>
            </div>

          </div>
        </Section>

      </main>

      <Footer />
    </div>
  );
}
