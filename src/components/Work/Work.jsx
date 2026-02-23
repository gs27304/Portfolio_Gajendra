

import React, { useState } from "react";
import { projects } from "../../constants";
import { FiGithub, FiExternalLink, FiX } from "react-icons/fi";

const Work = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const handleOpenModal = (project) => {
    setSelectedProject(project);
    document.body.style.overflow = 'hidden'; // Prevent scroll when modal open
  };

  const handleCloseModal = () => {
    setSelectedProject(null);
    document.body.style.overflow = 'unset';
  };

  return (
    <section
      id="work"
      className="py-24 px-[7vw] md:px-[7vw] lg:px-[16vw] font-sans relative bg-[#fcfcfd]"
    >
      {/* Section Title */}
      <div className="text-center mb-20">
        <h2 className="text-4xl font-extrabold text-slate-900 tracking-tight">FEATURED PROJECTS</h2>
        <div className="w-20 h-1.5 bg-gradient-to-r from-blue-600 to-indigo-600 mx-auto mt-4 rounded-full"></div>
        <p className="text-slate-600 mt-6 text-lg font-medium max-w-2xl mx-auto">
          A portfolio of full-stack applications where I apply DSA principles and the MERN stack to build scalable, user-centric software.
        </p>
      </div>

      {/* Projects Grid */}
      <div className="grid gap-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <div
            key={project.id}
            onClick={() => handleOpenModal(project)}
            className="group relative bg-white rounded-3xl border border-slate-100 shadow-[0_10px_30px_rgba(0,0,0,0.04)] overflow-hidden cursor-pointer hover:shadow-[0_20px_50px_rgba(0,0,0,0.1)] hover:-translate-y-2 transition-all duration-500"
          >
            {/* Image Container with Overlay */}
            <div className="relative h-52 overflow-hidden m-4 rounded-2xl">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-blue-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>

            <div className="p-6 pt-2">
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.slice(0, 2).map((tag, index) => (
                  <span key={index} className="text-[10px] font-bold uppercase tracking-widest text-blue-600 bg-blue-50 px-3 py-1 rounded-md">
                    {tag}
                  </span>
                ))}
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-3 group-hover:text-blue-600 transition-colors">
                {project.title}
              </h3>
              <p className="text-slate-500 text-sm leading-relaxed line-clamp-2">
                {project.description}
              </p>
              
              <div className="mt-6 flex items-center text-blue-600 font-bold text-sm">
                View Project Details 
                <span className="ml-2 transform group-hover:translate-x-1 transition-transform">→</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Modern Modal Overlay */}
      {selectedProject && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8 animate-fadeIn">
          {/* Backdrop */}
          <div 
            className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm"
            onClick={handleCloseModal}
          ></div>

          {/* Modal Content */}
          <div className="relative bg-white rounded-[2.5rem] shadow-2xl w-full max-w-4xl max-h-[90vh] overflow-y-auto no-scrollbar animate-scaleIn">
            <button
              onClick={handleCloseModal}
              className="absolute top-6 right-6 z-10 p-2 bg-slate-100 rounded-full text-slate-500 hover:bg-red-50 hover:text-red-500 transition-all"
            >
              <FiX size={24} />
            </button>

            <div className="flex flex-col lg:flex-row">
              {/* Left: Image Side */}
              <div className="lg:w-1/2 p-6 lg:p-10 bg-slate-50 flex items-center justify-center">
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="w-full rounded-2xl shadow-lg border border-white"
                />
              </div>

              {/* Right: Info Side */}
              <div className="lg:w-1/2 p-8 lg:p-12 flex flex-col justify-center">
                <h3 className="text-3xl font-extrabold text-slate-900 mb-4">
                  {selectedProject.title}
                </h3>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {selectedProject.tags.map((tag, index) => (
                    <span key={index} className="bg-slate-100 text-slate-600 text-[11px] font-bold px-3 py-1 rounded-lg">
                      {tag}
                    </span>
                  ))}
                </div>

                <p className="text-slate-600 leading-relaxed mb-8">
                  {selectedProject.description}
                </p>

                <div className="flex flex-col sm:flex-row gap-4 mt-auto">
                  <a
                    href={selectedProject.webapp}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-4 rounded-2xl font-bold transition-all shadow-lg shadow-blue-100 active:scale-95"
                  >
                    <FiExternalLink size={20} /> Live Demo
                  </a>
                  <a
                    href={selectedProject.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 bg-slate-800 hover:bg-slate-900 text-white px-6 py-4 rounded-2xl font-bold transition-all active:scale-95"
                  >
                    <FiGithub size={20} /> Source Code
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Work;