
// import React, { useEffect, useRef, useState } from "react";
// import { motion } from "framer-motion";

// const LeadershipAndClients = () => {
//   const leaders = [
//     {
//       name: "Jeeteen Jain",
//       role: " Managing Director",
//       image: "/Images/profile01.jpeg",
//       quote: `"Jeeteen Jain is a dynamic and visionary Managing Director whose leadership has been instrumental in shaping Matrix Metals LLP into a high-performance industrial powerhouse. With deep expertise in machinery integration, metal processing technologies, and strategic operations, he leads with precision, conviction, and uncompromising discipline. Jeeteen is known for transforming complex engineering challenges into executable strategies, driving excellence across every vertical of the organization. His aggressive pursuit of quality, innovation, and customer-centric execution has established Matrix Metals as a trusted name in India’s advanced metal service sector. Under his stewardship, the company continues to scale aggressively, expand capabilities, and set new standards for operational superiority."`,
//     },
//     {
//       name: "Dinesh Chopra",
//       role: "  Managing Director",
//       image: "/Images/profile02.jpeg",
//       quote: `"Dinesh Chopra brings strong industrial leadership and decades of market knowledge to Matrix Metals LLP, serving as a pillar of strategic direction, operational stability, and business growth. As Managing Director, he combines sharp commercial intelligence with a deep understanding of metal markets, customer needs, and production realities. His decisions are driven by clarity, discipline, and long-term business vision, enabling the company to establish a dominant presence in the metals ecosystem. Dinesh’s leadership is defined by integrity, accountability, and a relentless commitment to delivering value — ensuring that Matrix Metals remains agile, competitive, and future-ready in a rapidly evolving industrial landscape."`,
//     },
//   ];

//   const clients = [
//     { name: "Tata Motors", logo: "/Logos/TVS-Motor-Company.png" },
//     { name: "Bosch", logo: "/Logos/Ola-Cabs-Logo.png" },
//     { name: "Bajaj", logo: "/Logos/Wave_mec.png" },
//     { name: "Maruti Suzuki", logo: "/Logos/Taal.png" },
//     { name: "Mahindra", logo: "/Logos/Boeing.png" },
//     { name: "Hyundai", logo: "/Logos/BEML.png" },
//     { name: "Hero MotoCorp", logo: "/Logos/DRDO.png" },
//     { name: "TVS", logo: "/Logos/mg.png" },
//     { name: "Ashok Leyland", logo: "/Logos/indian_railways.png" },
//     { name: "Volvo Eicher", logo: "/Logos/General_Electric.png" },
//     { name: "TVS", logo: "/Logos/Siemens.png" },
//     { name: "Ashok Leyland", logo: "/Logos/Hitachi.png" },
//     { name: "Volvo Eicher", logo: "/Logos/AEQUS.png" },
//     { name: "Ashok Leyland", logo: "/Logos/garuda.png" },
//     { name: "Volvo Eicher", logo: "/Logos/AEQUS.png" },
//   ];

//   // --- Client Slider state & refs ---
//   const containerRef = useRef(null);
//   const sliderRef = useRef(null);
//   const [duration, setDuration] = useState(25);

//   useEffect(() => {
//     const updateDuration = () => {
//       if (containerRef.current && sliderRef.current) {
//         const containerWidth = containerRef.current.offsetWidth;
//         const contentWidth = sliderRef.current.scrollWidth / 3; // repeated 3x
//         const speed = 50; // pixels per second
//         const newDuration = contentWidth / speed;
//         setDuration(newDuration);
//       }
//     };

//     updateDuration();
//     window.addEventListener("resize", updateDuration);
//     return () => window.removeEventListener("resize", updateDuration);
//   }, [clients]);

//   return (
//     <section className="bg-gray-50 py-16 md:py-20">
//       {/* --- Leaders Section --- */}
//       <div className="max-w-7xl mx-auto px-4 md:px-6 flex flex-col gap-16 md:gap-20">
//         {leaders.map((leader, i) => (
//           <motion.div
//             key={i}
//             initial={{ opacity: 0, y: 40 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.7, ease: "easeOut" }}
//             className={`grid grid-cols-1 md:grid-cols-2 items-center gap-6 md:gap-10 
//               bg-white rounded-2xl shadow-lg border border-gray-200 overflow-hidden`}
//           >
//             {/* IMAGE */}
//             <div className={`${i % 2 !== 0 ? "md:order-2" : ""}`}>
//               <img
//                 src={leader.image}
//                 alt={leader.name}
//                 className="w-full h-64 sm:h-72 md:h-80 lg:h-96 object-cover rounded-xl md:rounded-none"
//               />
//             </div>

//             {/* TEXT */}
//             <div className="p-6 md:p-10 bg-gradient-to-br from-gray-100 to-gray-50 border-l border-gray-200">
//               <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-gray-800 mb-2">
//                 {leader.name}
//               </h2>
//               <p className="text-lg sm:text-xl text-gray-600 mb-4 md:mb-6">
//                 {leader.role}
//               </p>
//               <p className="text-gray-700 leading-relaxed text-sm sm:text-base border-l-4 pl-4 border-orange-500">
//                 {leader.quote}
//               </p>
//             </div>
//           </motion.div>
//         ))}
//       </div>

//       {/* --- Clients Slider Section --- */}
//      {/* --- Clients Slider Section --- */}
// <div className="py-14 bg-white text-center relative overflow-hidden" ref={containerRef}>
//   <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-10">
//     Our Esteemed Customers
//   </h2>

//   <div className="overflow-hidden w-full">
//     <motion.div
//       ref={sliderRef}
//       className="flex items-center gap-12 sm:gap-20 whitespace-nowrap"
//       animate={{ x: ["0px", "-100%"] }}
//       transition={{
//         repeat: Infinity,
//         duration: duration,
//         ease: "linear",
//       }}
//     >
//       {[...clients, ...clients, ...clients].map((client, i) => (
//         <div
//           key={i}
//           className="flex-shrink-0 p-5 sm:p-6 rounded-2xl bg-white 
//           border border-gray-200 shadow-md hover:shadow-xl 
//           transition-all duration-300 transform hover:scale-105"
//         >
//           <img
//             src={client.logo}
//             alt={client.name}
//             className="w-28 h-16 sm:w-40 sm:h-20 md:w-48 md:h-24 
//             object-contain mx-auto transition-all duration-500 hover:grayscale-0"
//           />
//         </div>
//       ))}
//     </motion.div>
//   </div>

//   {/* Fade Gradients */}
//   <div className="absolute left-0 top-0 w-20 sm:w-28 h-full bg-gradient-to-r from-white to-transparent pointer-events-none" />
//   <div className="absolute right-0 top-0 w-20 sm:w-28 h-full bg-gradient-to-l from-white to-transparent pointer-events-none" />
// </div>

//     </section>
//   );
// };

// export default LeadershipAndClients;




import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

const LeadershipAndClients = () => {
  const leaders = [
    {
      name: "Dinesh Chopra",
      role: " Managing Director",
      image: "/Images/profile01.jpeg",
      quote: `"Dinesh Chopra brings strong industrial leadership and decades of market knowledge to Matrix Metals LLP, serving as a pillar of strategic direction and business growth."`,
    },
    {
      name: "Jeeteen Jain",
      role: "  Managing Director",
      image: "/Images/profile02.jpeg",
      quote: `"Jeeteen Jain is a dynamic and visionary Managing Director whose leadership has been instrumental in shaping Matrix Metals LLP into a high-performance industrial powerhous."`,
    },
  ];

  const clients = [
    { name: "Tata Motors", logo: "/Logos/TVS-Motor-Company.png" },
    { name: "Bosch", logo: "/Logos/Ola-Cabs-Logo.png" },
    { name: "Bajaj", logo: "/Logos/Wave_mec.png" },
    { name: "Maruti Suzuki", logo: "/Logos/Taal.png" },
    { name: "Mahindra", logo: "/Logos/Boeing.png" },
    { name: "Hyundai", logo: "/Logos/BEML.png" },
    { name: "Hero MotoCorp", logo: "/Logos/DRDO.png" },
    { name: "TVS", logo: "/Logos/mg.png" },
    { name: "Ashok Leyland", logo: "/Logos/indian_railways.png" },
    { name: "Volvo Eicher", logo: "/Logos/General_Electric.png" },
    { name: "TVS", logo: "/Logos/Siemens.png" },
    { name: "Ashok Leyland", logo: "/Logos/Hitachi.png" },
    { name: "Volvo Eicher", logo: "/Logos/AEQUS.png" },
    { name: "Ashok Leyland", logo: "/Logos/garuda.png" },
  ];

  const containerRef = useRef(null);
  const sliderRef = useRef(null);

  const [duration, setDuration] = useState(30);

  useEffect(() => {
    const updateDuration = () => {
      if (containerRef.current && sliderRef.current) {
        const contentWidth = sliderRef.current.scrollWidth / 2;

        // SPEED LOGIC BASED ON SCREEN SIZE
        const screenWidth = window.innerWidth;

        const speed = screenWidth < 768 ? 110 : 60; // Faster on mobile
        setDuration(contentWidth / speed);
      }
    };

    updateDuration();
    window.addEventListener("resize", updateDuration);
    return () => window.removeEventListener("resize", updateDuration);
  }, []);

  return (
    <section className="bg-gray-50 py-20">
      {/* --- Leaders Section --- */}
      <div className="max-w-7xl mx-auto px-4 lg:px-10 flex flex-col gap-24">
        {leaders.map((leader, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="grid grid-cols-1 md:grid-cols-2 items-center gap-12 lg:gap-20 bg-white rounded-3xl shadow-xl border border-gray-200 p-6 lg:p-10"
          >
            <img
              src={leader.image}
              alt={leader.name}
              className="w-full h-80 sm:h-96 lg:h-[480px] object-cover rounded-2xl shadow-md"
            />

            <div className="space-y-5">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-800">
                {leader.name}
              </h2>
              <p className="text-xl sm:text-2xl text-gray-600">{leader.role}</p>
              <p className="text-gray-700 text-base sm:text-lg leading-relaxed border-l-4 pl-4 border-orange-500">
                {leader.quote}
              </p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* --- Clients Slider Section --- */}
      <div className="py-20 bg-white text-center relative overflow-hidden" ref={containerRef}>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-800 mb-14">
          Our Esteemed Customers
        </h2>

        <motion.div
          ref={sliderRef}
          className="flex items-center gap-16 sm:gap-20 whitespace-nowrap px-6"
          animate={{ x: ["0%", "-100%"] }}
          transition={{
            repeat: Infinity,
            duration: duration,
            ease: "linear",
          }}
        >
          {[...clients, ...clients].map((client, i) => (
            <div
              key={i}
              className="flex-shrink-0 p-6 sm:p-8 bg-white rounded-3xl border border-gray-200 shadow-md hover:shadow-2xl transition-all duration-300 hover:scale-110"
            >
              <img
                src={client.logo}
                alt={client.name}
                className="w-32 h-18 sm:w-48 sm:h-24 lg:w-56 lg:h-32 object-contain"
              />
            </div>
          ))}
        </motion.div>

        {/* Gradient Borders */}
        <div className="absolute left-0 top-0 w-24 sm:w-32 h-full bg-gradient-to-r from-white to-transparent pointer-events-none"></div>
        <div className="absolute right-0 top-0 w-24 sm:w-32 h-full bg-gradient-to-l from-white to-transparent pointer-events-none"></div>
      </div>
    </section>
  );
};

export default LeadershipAndClients;
