// import React, {
//   useState,
//   useEffect,
//   useCallback,
//   useMemo,
// } from "react";
// import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
// import { motion, AnimatePresence } from "framer-motion";

// /* ---------------- ORIGINAL DATA (UNCHANGED) ---------------- */

// const newsData = [
//   {
//     title: "Global Aluminium Prices Strengthen Amid Rising Aerospace Demand",
//     text:
//       "Growing consumption from the aerospace and EV sectors has pushed aluminium prices upward this quarter. Analysts expect continued stability due to strong downstream demand and limited supply disruptions.",
//     images: [
//       "/Images/Auto & EV Manufacturers Shift Toward Lightweight Aluminium Sheets.jpeg",
//       "/Images/Aluminium Alloy 3xxx & 5xxx Series Gain Popularity in Food Packaging.jpeg",
//     ],
//   },
//   {
//     title: "India’s Aluminium Consumption Expected to Cross 9 Million Tons by 2030",
//     text:
//       "India is projected to become one of the fastest-growing aluminium markets driven by infrastructure, renewables, and mobility projects.",
//     images: [
//       "/Images/India’s Aluminium Consumption Expected to Cross 9 Million Tons by 2030.jpeg",
//       "/Images/New BIS Standards Released for Aluminium Flat Products.jpeg",
//     ],
//   },
//   {
//     title: "EV Manufacturers Shift Toward Lightweight Aluminium Sheets",
//     text:
//       "Major automakers are increasing procurement of lightweight alloys to meet fuel efficiency and emission regulations.",
//     images: [
//       "/Images/Import Policies Tighten on Low-Value Aluminium Items.jpeg",
//       "/Images/Aluminium Recycling Capacity Expands Across South India.jpeg",
//       "/Images/Automobile Aluminium.jpeg",
//     ],
//   },
//   {
//     title: "Aluminium Recycling Capacity Expands Across South India",
//     text:
//       "Southern clusters are investing heavily in scrap recycling and remelting units. Sustainability-focused industries prefer recycled aluminium due to its lower carbon footprint and cost efficiency.",
//     images: [
//       "/Images/Solar Sector Drives Demand for High-Reflective Aluminium Sheets.jpeg",
//       "/Images/Surge in Demand for Anodized Aluminium in Architecture & Interiors.jpeg",
//       "/Images/Lightweight Aluminium.jpeg",
//       "/Images/Automobile Aluminium.jpeg",
//     ],
//   },
// ];

// /* ---------------- HELPERS ---------------- */

// const chunkArray = (arr, size) => {
//   const res = [];
//   for (let i = 0; i < arr.length; i += size) {
//     res.push(arr.slice(i, i + size));
//   }
//   return res;
// };

// /* ---------------- MOTION CONFIG ---------------- */

// const slideVariants = {
//   initial: { opacity: 0, x: 80 },
//   animate: { opacity: 1, x: 0 },
//   exit: { opacity: 0, x: -80 },
// };

// const slideTransition = {
//   duration: 0.45,
//   ease: "easeOut",
// };

// /* ---------------- COMPONENT ---------------- */

// export default function NewsUpdate() {
//   const [current, setCurrent] = useState(0);
//   const [phase, setPhase] = useState("text");
//   const [hovering, setHovering] = useState(false);

//   const textSlides = useMemo(() => chunkArray(newsData, 2), []);
//   const totalText = textSlides.length;
//   const totalImages = newsData.length;

//   /* ---------- AUTOPLAY ---------- */
//   useEffect(() => {
//     if (hovering) return;

//     const timer = setInterval(() => {
//       setCurrent((prev) => {
//         if (phase === "text") {
//           if (prev === totalText - 1) {
//             setPhase("image");
//             return 0;
//           }
//           return prev + 1;
//         } else {
//           if (prev === totalImages - 1) {
//             setPhase("text");
//             return 0;
//           }
//           return prev + 1;
//         }
//       });
//     }, 5000);

//     return () => clearInterval(timer);
//   }, [phase, hovering, totalText, totalImages]);

//   /* ---------- CONTROLS ---------- */
//   const nextSlide = useCallback(() => {
//     setCurrent((c) =>
//       phase === "text"
//         ? c === totalText - 1
//           ? (setPhase("image"), 0)
//           : c + 1
//         : c === totalImages - 1
//         ? (setPhase("text"), 0)
//         : c + 1
//     );
//   }, [phase, totalText, totalImages]);

//   const prevSlide = useCallback(() => {
//     setCurrent((c) =>
//       phase === "text"
//         ? c === 0
//           ? (setPhase("image"), totalImages - 1)
//           : c - 1
//         : c === 0
//         ? (setPhase("text"), totalText - 1)
//         : c - 1
//     );
//   }, [phase, totalText, totalImages]);

//   /* ---------------- RENDER ---------------- */

//   return (
//     <div
//       className="relative w-full overflow-visible"
//       onMouseEnter={() => setHovering(true)}
//       onMouseLeave={() => setHovering(false)}
//     >
//       {/* Arrows */}
//       <div className="absolute inset-y-0 left-0 right-0 z-30 pointer-events-none">
//         <button
//           onClick={prevSlide}
//           className="pointer-events-auto absolute left-3 md:left-8 top-1/2 -translate-y-1/2
//           bg-white/70 rounded-full p-2 md:p-3 shadow-lg hover:bg-orange-500 hover:text-white"
//         >
//           <FiChevronLeft size={22} />
//         </button>

//         <button
//           onClick={nextSlide}
//           className="pointer-events-auto absolute right-3 md:right-8 top-1/2 -translate-y-1/2
//           bg-white/70 rounded-full p-2 md:p-3 shadow-lg hover:bg-orange-500 hover:text-white"
//         >
//           <FiChevronRight size={22} />
//         </button>
//       </div>

//       <AnimatePresence mode="wait">
//         {phase === "text" ? (
//           <motion.div
//             key={`text-${current}`}
//             variants={slideVariants}
//             initial="initial"
//             animate="animate"
//             exit="exit"
//             transition={slideTransition}
//             className="min-h-[360px] md:h-[520px]
//               flex flex-col md:flex-row justify-center items-center
//               px-6 md:px-20 gap-8 bg-linear-to-br
//               from-black/80 via-black/60 to-black/40 text-white"
//           >
//             {textSlides[current].map((item, i) => (
//               <div key={i} className="md:w-1/2 space-y-4">
//                 <h2 className="text-xl md:text-3xl font-bold">{item.title}</h2>
//                 <p className="text-sm md:text-lg text-gray-300">{item.text}</p>
//               </div>
//             ))}
//           </motion.div>
//         ) : (
//           <motion.div
//             key={`img-${current}`}
//             variants={slideVariants}
//             initial="initial"
//             animate="animate"
//             exit="exit"
//             transition={slideTransition}
//             className="min-h-[360px] md:h-[520px]
//               flex gap-3 px-4 py-4 bg-linear-to-br
//               from-black/80 via-black/60 to-black/40"
//           >
//             {newsData[current].images.slice(0, 2).map((img, i) => (
//               <div
//                 key={i}
//                 className="flex-1 rounded-xl overflow-hidden bg-black/20"
//               >
//                 <img
//                   src={img}
//                   alt={`news-${i}`}
//                   loading="lazy"
//                   className="w-full h-full object-contain md:object-cover"
//                 />
//               </div>
//             ))}
//           </motion.div>
//         )}
//       </AnimatePresence>

//       {/* Pagination */}
//       <div className="flex justify-center gap-2 py-4 bg-white/30 backdrop-blur">
//         {Array.from({
//           length: phase === "text" ? totalText : totalImages,
//         }).map((_, i) => (
//           <button
//             key={i}
//             onClick={() => setCurrent(i)}
//             className={`w-3 h-3 rounded-full transition ${
//               i === current ? "bg-orange-500 scale-125" : "bg-gray-400"
//             }`}
//           />
//         ))}
//       </div>
//     </div>
//   );
// }









import React from "react";
import { FiArrowRight } from "react-icons/fi";

export default function WelcomePage() {
  const services = [
    {
      category: "Industrial Stainless Steel",
      description: "At Minox we provide stainless steel plates/coils/sheets/strips etc. in various grades, sizes and finishes to cater industrial applications like breweries and distilleries, automobile, dairy and pharma, enclosures, high end kitchen, metro coaches, electrical and electronic components etc.",
      buttonText: "READ MORE >>",
      image: "https://example.com/industrial-stainless-steel-coils.jpg", // Replace with actual image URL
    },
    {
      category: "Architecture Building Construction & Elevator Applications",
      description: "One stop shop for solutions in stainless steel sheets in various finishes like No.8 super mirror, bead blast, vibrations, PVD coated and customised etched designs in various colours that create innovative ideas and excellent aesthetics for architectural, signages and elevator applications.",
      buttonText: "READ MORE >>",
      image: "https://example.com/architecture-elevator.jpg", // Replace with actual image URL
    },
    {
      category: "Pipes, Tubes and Long Products",
      description: "Minox offers stainless steel pipes, tubes (seamless and welded), rods and suitable fittings in various grades and excellent finish which are extensively used in applications like architectural building construction, interiors, pharmaceutical, food and dairy etc.",
      buttonText: "READ MORE >>",
      image: "https://example.com/stainless-steel-pipes.jpg", // Replace with actual image URL
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header Section */}
      <div className="text-center py-8 px-4">
        <h1 className="text-5xl font-bold text-gray-800">
          WELCOME!
        </h1>
      </div>

      {/* Services Grid */}
      <div className="px-4 md:px-8 lg:px-16 py-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {services.map((service, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
              <img 
                src={service.image} 
                alt={service.category}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h2 className="text-xl font-semibold text-gray-800 mb-4 text-center">
                  {service.category}
                </h2>
                <p className="text-gray-600 text-sm mb-6">
                  {service.description}
                </p>
                <button className="flex items-center text-blue-600 font-medium text-sm hover:text-blue-800 transition-colors">
                  {service.buttonText}
                  <FiArrowRight className="ml-2" size={16} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}