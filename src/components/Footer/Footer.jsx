import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { SiLeetcode } from 'react-icons/si';

const Footer = () => {
  // Smooth scroll function
  const handleScroll = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-white border-t border-slate-100 py-12 px-[12vw] md:px-[7vw] lg:px-[20vw]">
      <div className="container mx-auto text-center">
        {/* Name / Logo */}
        <h2 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600">
          Gajendra Singh
        </h2>

        {/* Navigation Links - Clean Light Style */}
        <nav className="flex flex-wrap justify-center space-x-6 sm:space-x-8 mt-6">
          {[
            { name: "About", id: "about" },
            { name: "Skills", id: "skills" },
            { name: "Experience", id: "experience" },
            { name: "Projects", id: "work" }, // Ensured ID matches your project section
            { name: "Education", id: "education" },
          ].map((item, index) => (
            <button
              key={index}
              onClick={() => handleScroll(item.id)}
              className="text-slate-500 hover:text-blue-600 text-sm font-bold uppercase tracking-widest transition-colors duration-300 my-1"
            >
              {item.name}
            </button>
          ))}
        </nav>

        {/* Social Media Icons */}
        <div className="flex justify-center space-x-6 mt-8">
          {[
            { 
              icon: <FaLinkedin />, 
              link: "https://www.linkedin.com/in/gajendra-singh-006a11219/" 
            },
            { 
              icon: <FaGithub />, 
              link: "https://github.com/gs27304" 
            },
            { 
              icon: <SiLeetcode />, 
              link: "https://leetcode.com/u/gs27304/" 
            },
          ].map((item, index) => (
            <a
              key={index}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-2xl text-slate-400 hover:text-blue-600 transition-all duration-300 transform hover:-translate-y-1"
            >
              {item.icon}
            </a>
          ))}
        </div>

        {/* Separator Line */}
        <div className="w-16 h-[1px] bg-slate-200 mx-auto mt-8"></div>

        {/* Copyright Text */}
        <p className="text-xs font-semibold text-slate-400 mt-6 uppercase tracking-tighter">
          © 2026 Designed & Built by <span className="text-slate-600">Gajendra Singh</span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;