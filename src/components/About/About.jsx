

import React from 'react';
import ReactTypingEffect from 'react-typing-effect';
import Tilt from 'react-parallax-tilt';
import profileImage from '../../assets/profile2.png';

const About = () => {
  return (
    <section
      id="about"
      className="relative min-h-[90vh] flex items-center py-20 px-[7vw] md:px-[7vw] lg:px-[15vw] font-sans overflow-hidden"
    >
      <div className="flex flex-col-reverse md:flex-row justify-between items-center gap-12 lg:gap-20">
        
        {/* LEFT SIDE: CONTENT */}
        <div className="md:w-3/5 text-center md:text-left z-10">
          <div className="inline-block px-4 py-1.5 mb-6 rounded-full bg-blue-50 border border-blue-100">
            <span className="text-blue-600 text-xs font-bold uppercase tracking-widest">
              Available for New Opportunities
            </span>
          </div>
          
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-black text-slate-900 mb-4 tracking-tighter leading-[1.1]">
            Engineering <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600">
              Digital Experiences
            </span>
          </h1>

          <div className="h-12 sm:h-16 mb-6">
            <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-slate-700">
              I'm a{' '}
              <ReactTypingEffect
                text={[
                  'Fullstack Developer.',
                  'Software Engineer.',
                  'System Architect.',
                  'Problem Solver.',
                ]}
                speed={70}
                eraseSpeed={50}
                typingDelay={300}
                eraseDelay={1500}
                cursorRenderer={(cursor) => (
                  <span className="text-blue-600 ml-1">{cursor}</span>
                )}
              />
            </h3>
          </div>

          <p className="text-lg md:text-xl text-slate-500 mb-10 leading-relaxed max-w-2xl font-medium">
            Based at <span className="text-slate-900 font-bold border-b-2 border-blue-200">IIIT Jabalpur</span>. 
            I bridge the gap between complex backend logic and elegant frontend execution, 
            turning ambitious ideas into scalable, production-ready systems.
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-6">
            <a
              href="https://drive.google.com/file/d/1XuY5BaOrLLD8VUl68J1SvGVb7vWQwbfK/view?usp=drive_link"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative px-8 py-4 bg-slate-900 text-white rounded-2xl font-bold text-lg overflow-hidden transition-all hover:shadow-[0_20px_40px_rgba(0,0,0,0.1)] active:scale-95 w-full sm:w-auto text-center"
            >
              <span className="relative z-10">Download CV</span>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-indigo-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </a>
            
            <div className="flex items-center gap-4">
               <div className="flex -space-x-3">
                 {/* Decorative tech stack icons or dots */}
                 {[1, 2, 3].map((i) => (
                   <div key={i} className={`w-10 h-10 rounded-full border-4 border-white bg-slate-100 flex items-center justify-center text-xs font-bold text-slate-400`}>
                     {i === 1 ? 'JS' : i === 2 ? 'PY' : 'Go'}
                   </div>
                 ))}
               </div>
               <p className="text-sm font-bold text-slate-400 uppercase tracking-widest">Tech Enthusiast</p>
            </div>
          </div>
        </div>

        {/* RIGHT SIDE: VISUALS */}
        <div className="md:w-2/5 flex justify-center md:justify-end relative">
          <Tilt
            tiltMaxAngleX={10}
            tiltMaxAngleY={10}
            perspective={1000}
            scale={1.05}
            transitionSpeed={2000}
            className="relative"
          >
            {/* The Main Frame */}
            <div className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-[32rem] lg:h-[32rem] rounded-[3rem] p-4 bg-white shadow-[0_50px_100px_rgba(0,0,0,0.08)] border border-slate-100">
              <div className="w-full h-full rounded-[2.5rem] overflow-hidden bg-slate-50">
                <img
                  src={profileImage}
                  alt="Gajendra Singh"
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700 scale-110"
                />
              </div>

              {/* Floating Badge 1: Location */}
              <div className="absolute -left-10 top-1/4 bg-white/80 backdrop-blur-md p-4 rounded-3xl shadow-xl border border-white hidden lg:block animate-float">
                <div className="flex items-center gap-3">
                  <span className="w-3 h-3 rounded-full bg-green-500 animate-pulse"></span>
                  <p className="text-sm font-bold text-slate-800">Available Globally</p>
                </div>
              </div>

              {/* Floating Badge 2: Tech Stack */}
              <div className="absolute -right-10 bottom-1/4 bg-white/80 backdrop-blur-md p-5 rounded-3xl shadow-xl border border-white hidden lg:block animate-float-delayed">
                <p className="text-xs font-black text-blue-600 uppercase mb-1">Expertise</p>
                <p className="text-lg font-bold text-slate-800">MERN + AI</p>
              </div>
            </div>
          </Tilt>
        </div>
      </div>
    </section>
  );
};

export default About;

