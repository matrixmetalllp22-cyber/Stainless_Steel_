import React from "react";
import { useNavigate } from "react-router-dom";

const IndustriesSection = () => {
  const navigate = useNavigate();

  const industries = [
    {
      id: "slitting",
      name: "Slitting",
      image: "public/images/Metal-Slitter-Machine-Line-2-700x394.webp",
      description:
        "High-strength steel is crucial for modern vehicles, enabling manufacturers to build lighter cars without compromising safety. Innovative steel solutions also contribute to enhanced crash performance and better fuel efficiency due to the reduced weight. This material plays a key role in the automotive industry's pursuit of more sustainable and safer transportation options.High-strength steel is crucial for modern vehicles, enabling manufacturers to build lighter cars without compromising safety. Innovative steel solutions also contribute to enhanced crash performance and better fuel efficiency due to the reduced weight. This material plays a key role in the automotive industry's pursuit of more sustainable and safer transportation options.High-strength steel is crucial for modern vehicles, enabling manufacturers to build lighter cars without compromising safety. Innovative steel solutions also contribute to enhanced crash performance and better fuel efficiency due to the reduced weight. This material plays a key role in the automotive industry's pursuit of more sustainable and safer transportation options.",
    },
    {
      id: "cut-to-length",
      name: "Cut-to-Length",
      image: "public/images/Coil-Cut-to-Lengt.webp",
      description:
        "Supplying durable and sustainable steel materials for modern infrastructure.",
    },
    {
      id: "packing",
      name: "Packing",
      image: "/images/energy.jpg",
      description:
        "Supporting renewable energy and oil & gas sectors with advanced steel processing.",
    },
    {
      id: "blanking",
      name: "Blanking",
      image: "/images/appliances.jpg",
      description:
        "Delivering precision-engineered steel for home appliances and manufacturing.",
    },
  ];

  const handleServiceClick = (serviceId) => {
    navigate(`/services/${serviceId}`);
  };

  return (
    <section className="section-padding py-8 md:py-12 lg:py-16">
      <div className="grid grid-cols-1 lg:grid-cols-3 items-stretch gap-0 my-8 md:my-12 lg:my-16 min-h-auto lg:min-h-[1000px]">
        {/* LEFT SIDE — Blue section */}
        <div className="bg-gradient-to-br from-blue-300 to-blue-400 text-white flex flex-col justify-center items-start p-6 md:p-8 lg:p-10 rounded-2xl lg:rounded-l-2xl lg:rounded-r-none h-full">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-3 md:mb-4">Services </h2>
          <p className="text-blue-100 max-w-md leading-relaxed text-sm md:text-base">
            Delivering specialized solutions across multiple sectors with expertise and innovation.
          </p>
        </div>

        {/* RIGHT SIDE — 2x2 grid */}
        <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-0 h-full">
          {industries.slice(0, 4).map((industry, idx) => (
            <div
              key={industry.id}
              className="bg-white text-gray-800 p-4 md:p-6 flex flex-col justify-between text-center 
                         border border-gray-200 transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
            >
              {/* Image Section */}
              <div>
                <img
                  src={industry.image}
                  alt={industry.name}
                  className="w-full h-32 sm:h-40 md:h-48 object-cover rounded-lg mb-3 md:mb-4"
                />

                {/* Title */}
                <h3 className="font-semibold text-lg md:text-xl mb-2">{industry.name}</h3>

                {/* Description */}
                <p className="text-gray-500 text-xs md:text-sm leading-relaxed">
                  {industry.description ||
                    "Specialized solutions for this sector with innovation and precision."}
                </p>
              </div>

              {/* Read More Button */}
              <button 
                onClick={() => handleServiceClick(industry.id)}
                className="mt-4 md:mt-6 bg-gradient-to-r from-blue-300 to-blue-500 text-white px-4 md:px-6 py-2 md:py-3 rounded-lg text-xs md:text-sm font-medium hover:from-blue-400 hover:to-gray-500 transition-all duration-300 self-center transform hover:scale-105 active:scale-95"
              >
                Read More →
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default IndustriesSection;




















// import React from "react";
// import { useNavigate } from "react-router-dom";
// import { motion } from "framer-motion";

// export default function IndustriesSection() {
//   const navigate = useNavigate();

//   const industries = [
//     {
//       id: "slitting",
//       name: "Slitting",
//       image: "/images/automotive.jpg",
//       description:
//         "Providing high-strength steel and innovative solutions for the automotive industry.",
//     },
//     {
//       id: "cut-to-length",
//       name: "Cut-to-Length",
//       image: "/images/construction.jpg",
//       description:
//         "Supplying durable and sustainable steel materials for modern infrastructure.",
//     },
//     {
//       id: "packing",
//       name: "Packing",
//       image: "/images/energy.jpg",
//       description:
//         "Supporting renewable energy and oil & gas sectors with advanced steel processing.",
//     },
//     {
//       id: "blanking",
//       name: "Blanking",
//       image: "/images/appliances.jpg",
//       description:
//         "Delivering precision-engineered steel for home appliances and manufacturing.",
//     },
//   ];

//   const handleServiceClick = (serviceId) => {
//     navigate(`/services/${serviceId}`);
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-b from-slate-50 via-slate-100 to-slate-200 py-16 md:py-24">
//       <div className="container-custom">
//         {/* Hero Heading */}
//         <motion.div
//           initial={{ opacity: 0, y: 40 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6 }}
//           viewport={{ once: true }}
//           className="text-center mb-16"
//         >
//           <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4">
//             Our Services
//           </h2>
//           <p className="text-gray-600 text-base md:text-lg max-w-2xl mx-auto">
//             Delivering specialized steel processing and industrial solutions
//             across multiple sectors with innovation and precision.
//           </p>
//         </motion.div>

//         {/* Zig-Zag Grid */}
//         <div className="flex flex-wrap justify-center gap-8 md:gap-10">
//           {industries.map((industry, index) => (
//             <motion.div
//               key={industry.id}
//               initial={{ opacity: 0, y: 40 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ delay: index * 0.15, duration: 0.6 }}
//               viewport={{ once: true }}
//               className={`group w-full sm:w-[320px] md:w-[340px] lg:w-[360px] 
//                           bg-gradient-to-br from-slate-50 to-slate-100 border border-slate-200 
//                           rounded-2xl shadow-md hover:shadow-xl hover:-translate-y-1 
//                           transition-all duration-300 overflow-hidden
//                           ${
//                             index % 2 === 0
//                               ? "md:-translate-y-4 lg:-translate-y-6"
//                               : "md:translate-y-4 lg:translate-y-6"
//                           }`}
//             >
//               {/* Image */}
//               <div className="relative">
//                 <img
//                   src={industry.image}
//                   alt={industry.name}
//                   className="w-full h-48 object-cover"
//                 />
//                 <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500" />
//               </div>

//               {/* Content */}
//               <div className="p-6 text-center">
//                 <h3 className="text-xl font-semibold text-gray-900 mb-2">
//                   {industry.name}
//                 </h3>
//                 <p className="text-gray-600 text-sm mb-4">
//                   {industry.description}
//                 </p>

//                 <button
//                   onClick={() => handleServiceClick(industry.id)}
//                   className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-5 py-2 
//                              rounded-lg font-medium hover:from-blue-700 hover:to-blue-800 
//                              transition-all duration-300 hover:shadow-md"
//                 >
//                   Read More →
//                 </button>
//               </div>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }





// import React from "react";
// import { useNavigate } from "react-router-dom";
// import { motion } from "framer-motion";

// export default function IndustriesSection() {
//   const navigate = useNavigate();

//   const industries = [
//     {
//       id: "slitting",
//       name: "Slitting",
//       image: "/images/automotive.jpg",
//       description:
//         "Providing high-strength steel and innovative solutions for the automotive industry.",
//     },
//     {
//       id: "cut-to-length",
//       name: "Cut-to-Length",
//       image: "/images/construction.jpg",
//       description:
//         "Supplying durable and sustainable steel materials for modern infrastructure.",
//     },
//     {
//       id: "packing",
//       name: "Packing",
//       image: "/images/energy.jpg",
//       description:
//         "Supporting renewable energy and oil & gas sectors with advanced steel processing.",
//     },
//     {
//       id: "blanking",
//       name: "Blanking",
//       image: "/images/appliances.jpg",
//       description:
//         "Delivering precision-engineered steel for home appliances and manufacturing.",
//     },
//   ];

//   const handleServiceClick = (serviceId) => {
//     navigate(`/services/${serviceId}`);
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-b from-slate-50 via-slate-100 to-slate-200 py-16 md:py-24">
//       <div className="container-custom">
//         {/* Heading */}
//         <motion.div
//           initial={{ opacity: 0, y: 40 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6 }}
//           viewport={{ once: true }}
//           className="text-center mb-16"
//         >
//           <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4">
//             Our Services
//           </h2>
//           <p className="text-gray-600 text-base md:text-lg max-w-2xl mx-auto">
//             Delivering specialized steel processing and industrial solutions
//             across multiple sectors with innovation and precision.
//           </p>
//         </motion.div>

//         {/* Two-tier Grid */}
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
//           {industries.map((industry, index) => (
//             <motion.div
//               key={industry.id}
//               initial={{ opacity: 0, y: 40 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ delay: index * 0.1, duration: 0.6 }}
//               viewport={{ once: true }}
//               className={`group bg-gradient-to-br from-slate-50 to-slate-100 border border-slate-200 
//                           rounded-2xl shadow-md hover:shadow-xl hover:-translate-y-1 
//                           transition-all duration-300 overflow-hidden flex flex-col justify-between text-center ${
//                             index >= 2 ? "md:row-span-1 md:h-[430px]" : "md:h-[380px]"
//                           }`}
//             >
//               {/* Image */}
//               <div className="relative">
//                 <img
//                   src={industry.image}
//                   alt={industry.name}
//                   className={`w-full object-cover ${
//                     index >= 2 ? "h-56 md:h-60" : "h-48 md:h-52"
//                   }`}
//                 />
//                 <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500" />
//               </div>

//               {/* Content */}
//               <div className="p-6">
//                 <h3 className="text-xl font-semibold text-gray-900 mb-2">
//                   {industry.name}
//                 </h3>
//                 <p className="text-gray-600 text-sm mb-4">
//                   {industry.description}
//                 </p>

//                 <button
//                   onClick={() => handleServiceClick(industry.id)}
//                   className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-5 py-2 
//                              rounded-lg font-medium hover:from-blue-700 hover:to-blue-800 
//                              transition-all duration-300 hover:shadow-md"
//                 >
//                   Read More →
//                 </button>
//               </div>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }
