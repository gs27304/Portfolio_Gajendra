

// src/components/Skills/Skills.jsx
import React from "react";
import { SkillsInfo } from "../../constants";
import Tilt from "react-parallax-tilt";

const Skills = () => (
  <section
    id="skills"
    className="py-24 px-[7vw] md:px-[7vw] lg:px-[16vw] font-sans bg-white clip-path-custom"
  >
    {/* Section Title */}
    <div className="text-center mb-16">
      <h2 className="text-4xl font-bold text-slate-900 tracking-tight">MY TOOLKIT</h2>
      <div className="w-20 h-1.5 bg-gradient-to-r from-blue-600 to-indigo-600 mx-auto mt-4 rounded-full"></div>
      <p className="text-slate-600 mt-6 text-lg font-medium max-w-2xl mx-auto">
        A specialized toolkit for Full-Stack development and Algorithmic problem-solving, focused on building efficient, scalable systems.
      </p>
    </div>

    {/* Skill Categories Grid */}
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {SkillsInfo.map((category) => (
        <Tilt
          key={category.title}
          tiltMaxAngleX={10}
          tiltMaxAngleY={10}
          perspective={1500}
          scale={1.02}
          transitionSpeed={1500}
          className="h-full"
        >
          <div className="h-full bg-white p-8 rounded-[2rem] border border-slate-100 shadow-[0_15px_40px_rgba(0,0,0,0.03)] hover:shadow-[0_20px_50px_rgba(0,0,0,0.06)] transition-all duration-500">
            {/* Category Title */}
            <div className="flex items-center justify-between mb-8">
              <h3 className="text-2xl font-bold text-slate-800">
                {category.title}
              </h3>
              <div className="h-8 w-8 rounded-full bg-blue-50 flex items-center justify-center">
                <div className="h-2 w-2 rounded-full bg-blue-500 animate-pulse"></div>
              </div>
            </div>

            {/* Skill Items Grid */}
            <div className="flex flex-wrap gap-3">
              {category.skills.map((skill) => (
                <div
                  key={skill.name}
                  className="group flex items-center space-x-3 bg-slate-50 border border-slate-100 rounded-2xl py-2.5 px-4 transition-all duration-300 hover:bg-white hover:border-blue-200 hover:shadow-md hover:-translate-y-1"
                >
                  <img
                    src={skill.logo}
                    alt={`${skill.name} logo`}
                    className="w-6 h-6 object-contain grayscale group-hover:grayscale-0 transition-all"
                  />
                  <span className="text-sm font-bold text-slate-600 group-hover:text-blue-600 transition-colors">
                    {skill.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </Tilt>
      ))}
    </div>
  </section>
);

export default Skills;
