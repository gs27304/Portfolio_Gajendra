

import React from "react";
import Navbar from "./components/Navbar/Navbar";
import About from "./components/About/About";
import Skills from "./components/Skills/Skills";
import Experience from "./components/Experience/Experience";
import Work from "./components/Work/Work";
import Education from "./components/Education/Education";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import BlurBlob from './components/BlurBlob';

const App = () => {
  return (
    // Changed background to a clean white/gray-50 mix
    <div className="bg-[#fcfcfd] min-h-screen text-slate-900 selection:bg-blue-100">

      {/* Adjusted BlurBlob for light mode: softer colors, lower opacity */}
      <BlurBlob 
        position={{ top: '10%', left: '15%' }} 
        size={{ width: '40%', height: '50%' }} 
        className="bg-blue-100/40 blur-[120px]" 
      />

      {/* Light Theme Grid Pattern: Subtle gray lines with a cleaner mask */}
      <div className="fixed inset-0 bg-[linear-gradient(to_right,#e5e7eb_1px,transparent_1px),linear-gradient(to_bottom,#e5e7eb_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_20%,transparent_100%)] opacity-40"></div>
      
      {/* Main Content Container */}
      <div className="relative pt-10 px-4 md:px-0 max-w-7xl mx-auto">
        <Navbar />
        <About />
        <Skills />
        <Experience />
        <Work />
        <Education />
        <Contact />
        <Footer />
      </div>

    </div>
  );
};

export default App;


