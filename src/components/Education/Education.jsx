// import React from "react";
// import { education } from "../../constants"; // Import the education data

// const Education = () => {
//   return (
//     <section
//       id="education"
//       className="py-24 pb-24 px-[12vw] md:px-[7vw] lg:px-[16vw] font-sans bg-skills-gradient clip-path-custom-3"
//     >
//       {/* Section Title */}
//       <div className="text-center mb-16">
//         <h2 className="text-4xl font-bold text-white">EDUCATION</h2>
//         <div className="w-32 h-1 bg-purple-500 mx-auto mt-4"></div>
//         <p className="text-gray-400 mt-4 text-lg font-semibold">
//           Building a solid technical foundation at PDPM IIITDM Jabalpur, specializing in Electronics and Communication with a deep focus on Software Development.
//         </p>
//       </div>

//       {/* Education Timeline */}
//       <div className="relative">
//         {/* Vertical line */}
//         <div className="absolute sm:left-1/2 left-0 transform -translate-x-1/2 sm:-translate-x-0 w-1 bg-white h-full"></div>

//         {/* Education Entries */}
//         {education.map((edu, index) => (
//           <div
//             key={edu.id}
//             className={`flex flex-col sm:flex-row items-center mb-16 ${
//               index % 2 === 0 ? "sm:justify-start" : "sm:justify-end"
//             }`}
//           >
//             {/* Timeline Circle */}
//             <div className="absolute sm:left-1/2 left-0 transform -translate-x-1/2 bg-gray-400 border-4 border-[#8245ec] w-12 h-12 sm:w-16 sm:h-16 rounded-full flex justify-center items-center z-10">
//               <img
//                 src={edu.img}
//                 alt={edu.school}
//                 className="w-full h-full object-cover rounded-full"
//               />
//             </div>

//             {/* Content Section */}
//             <div
//               className={`w-full sm:max-w-md p-4 sm:p-8 rounded-2xl shadow-2xl border border-white bg-gray-900 backdrop-blur-md shadow-[0_0_20px_1px_rgba(130,69,236,0.3)] ${
//                 index % 2 === 0 ? "sm:ml-0" : "sm:mr-0"
//               } sm:ml-44 sm:mr-44 ml-8 transform transition-transform duration-300 hover:scale-105`}
//             >
//               {/* Flex container for image and text */}
//               <div className="flex items-center space-x-6">
//                 {/* School Logo/Image */}
//                 <div className="w-24 h-16 bg-white rounded-md overflow-hidden">
//                   <img
//                     src={edu.img}
//                     alt={edu.school}
//                     className="w-full h-full object-cover"
//                   />
//                 </div>

//                 {/* Degree, School Name, and Date */}
//                 <div className="flex flex-col justify-between">
//                   <div>
//                     <h3 className="text-xl sm:text-xl font-semibold text-white">
//                       {edu.degree}
//                     </h3>
//                     <h4 className="text-md sm:text-sm text-gray-300">
//                       {edu.school}
//                     </h4>
//                   </div>
//                   {/* Date at the bottom */}
//                   <p className="text-sm text-gray-500 mt-2">{edu.date}</p>
//                 </div>
//               </div>

//               <p className="mt-4 text-gray-400 font-bold">Grade: {edu.grade}</p>
//               <p className="mt-4 text-gray-400">{edu.desc}</p>
//             </div>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// };

// export default Education;


import React from "react";
import { education } from "../../constants"; 

const Education = () => {
  return (
    <section
      id="education"
      className="py-24 pb-24 px-[12vw] md:px-[7vw] lg:px-[16vw] font-sans bg-[#f8fafc] clip-path-custom-3"
    >
      {/* Section Title */}
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-slate-900 tracking-tight">EDUCATION</h2>
        <div className="w-20 h-1.5 bg-gradient-to-r from-blue-600 to-indigo-600 mx-auto mt-4 rounded-full"></div>
        <p className="text-slate-600 mt-6 text-lg font-medium max-w-2xl mx-auto">
          Building a solid technical foundation at IIIT Jabalpur, specializing in Electronics and Communication with a deep focus on Software Development.
        </p>
      </div>

      {/* Education Timeline */}
      <div className="relative">
        {/* Vertical line - Subtle Gray for Light Theme */}
        <div className="absolute sm:left-1/2 left-0 transform -translate-x-1/2 sm:-translate-x-0 w-[2px] bg-slate-200 h-full"></div>

        {/* Education Entries */}
        {education.map((edu, index) => (
          <div
            key={edu.id}
            className={`flex flex-col sm:flex-row items-center mb-16 relative ${
              index % 2 === 0 ? "sm:justify-start" : "sm:justify-end"
            }`}
          >
            {/* Timeline Circle */}
            <div className="absolute sm:left-1/2 left-0 transform -translate-x-1/2 bg-white border-4 border-blue-500 w-10 h-10 sm:w-14 sm:h-14 rounded-full flex justify-center items-center z-10 shadow-md">
              <img
                src={edu.img}
                alt={edu.school}
                className="w-full h-full object-cover rounded-full p-1"
              />
            </div>

            {/* Content Section Card */}
            <div
              className={`w-full sm:max-w-md p-6 sm:p-8 rounded-2xl border border-slate-100 bg-white shadow-[0_10px_30px_rgba(0,0,0,0.04)] ${
                index % 2 === 0 ? "sm:mr-auto" : "sm:ml-auto"
              } sm:ml-24 sm:mr-24 ml-10 transform transition-all duration-300 hover:shadow-xl hover:-translate-y-1`}
            >
              <div className="flex items-start space-x-4">
                {/* School Logo */}
                <div className="w-16 h-16 shrink-0 bg-slate-50 rounded-xl overflow-hidden border border-slate-100 flex items-center justify-center">
                  <img
                    src={edu.img}
                    alt={edu.school}
                    className="w-10 h-10 object-contain"
                  />
                </div>

                {/* Info */}
                <div className="flex flex-col">
                  <h3 className="text-lg sm:text-xl font-bold text-slate-900 leading-tight">
                    {edu.degree}
                  </h3>
                  <h4 className="text-md font-semibold text-blue-600 mt-1">
                    {edu.school}
                  </h4>
                  <p className="text-xs font-bold text-slate-400 mt-1 uppercase tracking-wider">{edu.date}</p>
                </div>
              </div>

              <div className="mt-4 pt-4 border-t border-slate-50">
                <p className="text-sm font-bold text-slate-700">Grade: <span className="text-blue-600">{edu.grade}</span></p>
                <p className="mt-2 text-sm text-slate-600 leading-relaxed font-medium italic">
                   {edu.desc}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Education;