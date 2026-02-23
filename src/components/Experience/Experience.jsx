import React from "react";
import { experiences } from "../../constants"; // Import your data

const Experience = () => {
  return (
    <section
      id="experience"
      className="py-24 pb-24 px-[12vw] md:px-[7vw] lg:px-[16vw] font-sans bg-skills-gradient clip-path-custom-2"
    >
      {/* Section Title */}
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-white">EXPERIENCE</h2>
        <div className="w-32 h-1 bg-purple-500 mx-auto mt-4"></div>
        <p className="text-gray-400 mt-4 text-lg font-semibold">
        A summary of my professional journey as a Full-Stack Developer, focusing on building scalable systems and delivering efficient, code-driven solutions.
        </p>
      </div>

      {/* Experience Timeline */}
      <div className="relative">
        {/* Vertical line */}
        <div className="absolute sm:left-1/2 left-0 transform -translate-x-1/2 sm:-translate-x-0 w-1 bg-white h-full"></div>
        

        {/* Experience Entries */}
        {experiences.map((experience, index) => (
          <div
            key={experience.id}
            className={`flex flex-col sm:flex-row items-center mb-16 ${
              index % 2 === 0 ? "sm:justify-end" : "sm:justify-start"
            }`}
          >
           

            {/* Content Section */}
            <div
              className={`w-full sm:max-w-md p-4 sm:p-8 rounded-2xl shadow-2xl border border-white bg-gray-900 backdrop-blur-md shadow-[0_0_20px_1px_rgba(130,69,236,0.3)] ${
                index % 2 === 0 ? "sm:ml-0" : "sm:mr-0"
              } sm:ml-44 sm:mr-44 ml-8 transform transition-transform duration-300 hover:scale-105`}
            >
              
              {/* Flex container for image and text */}
              <div className="flex items-center space-x-6">
                {/* Company Logo/Image */}
                <div className="w-16 h-16 bg-white rounded-md overflow-hidden">
                  <img
                    src={experience.img}
                    alt={experience.company}
                    className="w-full h-full object-cover"
                  />
                </div>
                
                

                {/* Role, Company Name, and Date */}
                <div className="flex flex-col justify-between">
                  <div>
                    <h3 className="text-xl sm:text-2xl font-semibold text-white">
                      {experience.role}
                    </h3>
                    <h4 className="text-md sm:text-sm text-gray-300">
                      {experience.company}
                    </h4>
                  </div>
                  {/* Date at the bottom */}
                  <p className="text-sm text-gray-500 mt-2">{experience.date}</p>
                </div>
              </div>

              <p className="mt-4 text-gray-400">{experience.desc}</p>
              <div className="mt-4">
                <h5 className="font-medium text-white">Skills:</h5>
                <ul className="flex flex-wrap mt-2">
                  {experience.skills.map((skill, index) => (
                    <li
                      key={index}
                      className="bg-[#8245ec] text-gray-300 px-4 py-1 text-xs sm:text-sm rounded-lg mr-2 mb-2 border border-gray-400"
                    >
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;


// import React from "react";
// import { experiences } from "../../constants"; 

// const Experience = () => {
//   return (
//     <section
//       id="experience"
//       className="py-24 pb-24 px-[12vw] md:px-[7vw] lg:px-[16vw] font-sans bg-[#f8fafc] clip-path-custom-2"
//     >
//       {/* Section Title */}
//       <div className="text-center mb-16">
//         <h2 className="text-4xl font-bold text-slate-900 tracking-tight">EXPERIENCE</h2>
//         <div className="w-20 h-1.5 bg-gradient-to-r from-blue-600 to-indigo-600 mx-auto mt-4 rounded-full"></div>
//         <p className="text-slate-600 mt-6 text-lg font-medium max-w-2xl mx-auto">
//           A summary of my professional journey as a Full-Stack Developer, focusing on building scalable systems and delivering efficient, code-driven solutions.
//         </p>
//       </div>

//       {/* Experience Timeline */}
//       <div className="relative">
//         {/* Vertical line - Subtle Slate for Light Theme */}
//         <div className="absolute sm:left-1/2 left-0 transform -translate-x-1/2 sm:-translate-x-0 w-[2px] bg-slate-200 h-full"></div>

//         {/* Experience Entries */}
//         {experiences.map((experience, index) => (
//           <div
//             key={experience.id}
//             className={`flex flex-col sm:flex-row items-center mb-16 relative ${
//               index % 2 === 0 ? "sm:justify-end" : "sm:justify-start"
//             }`}
//           >
//             {/* Content Section Card */}
//             <div
//               className={`w-full sm:max-w-xl p-6 sm:p-8 rounded-2xl border border-slate-100 bg-white shadow-[0_10px_40px_rgba(0,0,0,0.03)] ${
//                 index % 2 === 0 ? "sm:ml-0" : "sm:mr-0"
//               } sm:ml-24 sm:mr-24 ml-10 transform transition-all duration-300 hover:shadow-xl hover:-translate-y-1`}
//             >
              
//               {/* Flex container for image and text */}
//               <div className="flex items-start space-x-5">
//                 {/* Company Logo */}
//                 <div className="w-14 h-14 shrink-0 bg-white rounded-xl shadow-sm border border-slate-100 overflow-hidden flex items-center justify-center">
//                   <img
//                     src={experience.img}
//                     alt={experience.company}
//                     className="w-10 h-10 object-contain"
//                   />
//                 </div>

//                 {/* Role, Company, and Date */}
//                 <div className="flex flex-col">
//                   <h3 className="text-lg sm:text-xl font-bold text-slate-900 leading-tight">
//                     {experience.role}
//                   </h3>
//                   <h4 className="text-md font-semibold text-blue-600 mt-1">
//                     {experience.company}
//                   </h4>
//                   <p className="text-xs font-bold text-slate-400 mt-1 uppercase tracking-wider">
//                     {experience.date}
//                   </p>
//                 </div>
//               </div>

//               <p className="mt-5 text-slate-600 text-sm sm:text-base leading-relaxed font-medium">
//                 {experience.desc}
//               </p>

//               <div className="mt-6 pt-5 border-t border-slate-50">
//                 <h5 className="font-bold text-xs uppercase tracking-widest text-slate-400 mb-3">Core Skills</h5>
//                 <ul className="flex flex-wrap">
//                   {experience.skills.map((skill, idx) => (
//                     <li
//                       key={idx}
//                       className="bg-blue-50 text-blue-700 px-3 py-1 text-xs font-bold rounded-md mr-2 mb-2 border border-blue-100 hover:bg-blue-100 transition-colors"
//                     >
//                       {skill}
//                     </li>
//                   ))}
//                 </ul>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// };

// export default Experience;