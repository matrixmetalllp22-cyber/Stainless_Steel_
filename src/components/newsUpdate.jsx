// import React, { useState, useEffect } from "react";
// import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
// import { motion, AnimatePresence } from "framer-motion";

// const newsData = [
//   {
//     title: "Global Aluminium Prices Strengthen Amid Rising Aerospace Demand",
//     text: "Growing consumption from the aerospace and EV sectors has pushed aluminium prices upward this quarter. Analysts expect continued stability due to strong downstream demand and limited supply disruptions.",
//     images: [
//       "/Images/Auto & EV Manufacturers Shift Toward Lightweight Aluminium Sheets.jpeg",
//       "/Images/Aluminium Alloy 3xxx & 5xxx Series Gain Popularity in Food Packaging.jpeg",
      
//     ],
//   },
//   {
//     title: "India’s Aluminium Consumption Expected to Cross 9 Million Tons by 2030",
//     text: "India is projected to become one of the fastest-growing aluminium markets driven by infrastructure, renewables, and mobility projects.",
//     images: [
//       "/Images/India’s Aluminium Consumption Expected to Cross 9 Million Tons by 2030.jpeg",
//       "/Images/New BIS Standards Released for Aluminium Flat Products.jpeg",
      
//     ],
//   },
//   {
//     title: "EV Manufacturers Shift Toward Lightweight Aluminium Sheets",
//     text: "Major automakers are increasing procurement of lightweight alloys to meet fuel efficiency and emission regulations.",
//     images: [
//       "/Images/Import Policies Tighten on Low-Value Aluminium Items.jpeg",
//       "/Images/Aluminium Recycling Capacity Expands Across South India.jpeg",
      
//       "/Images/Automobile Aluminium.jpeg",
//     ],
//   },
//   { 
//     title: "Aluminium Recycling Capacity Expands Across South India",
//     text: "Southern clusters are investing heavily in scrap recycling and remelting units. Sustainability-focused industries prefer recycled aluminium due to its lower carbon footprint and cost efficiency.",
//     images: [
//       "/Images/Solar Sector Drives Demand for High-Reflective Aluminium Sheets.jpeg",
//       "/Images/Surge in Demand for Anodized Aluminium in Architecture & Interiors.jpeg",
//       "/Images/Lightweight Aluminium.jpeg",
//       "/Images/Automobile Aluminium.jpeg",
//     ],  
//   },
//   { 
//     title: "Aluminium Recycling Capacity Expands Across South India",
//     text: "Southern clusters are investing heavily in scrap recycling and remelting units. Sustainability-focused industries prefer recycled aluminium due to its lower carbon footprint and cost efficiency.",
//     images: [
//       "/Images/Global Aluminium Prices Strengthen Amid Rising Aerospace Demand.jpeg",
//       "/Images/EV Car Aluminium.jpeg",
//       "/Images/Lightweight Aluminium.jpeg",
//       "/Images/Automobile Aluminium.jpeg",
//     ],  
//   },
//   { 
//     title: "Aluminium Recycling Capacity Expands Across South India",
//     text: "Southern clusters are investing heavily in scrap recycling and remelting units. Sustainability-focused industries prefer recycled aluminium due to its lower carbon footprint and cost efficiency.",
//     images: [
//       "/Images/Solar Sector Drives Demand for High-Reflective Aluminium Sheets.jpeg",
//       "/Images/EV Car Aluminium.jpeg",
//       "/Images/Lightweight Aluminium.jpeg",
//       "/Images/Automobile Aluminium.jpeg",
//     ],  
//   },
//   { 
//     title: "Aluminium Recycling Capacity Expands Across South India",
//     text: "Southern clusters are investing heavily in scrap recycling and remelting units. Sustainability-focused industries prefer recycled aluminium due to its lower carbon footprint and cost efficiency.",
//     images: [
//       "/Images/Solar Sector Drives Demand for High-Reflective Aluminium Sheets.jpeg",
//       "/Images/EV Car Aluminium.jpeg",
//       "/Images/Lightweight Aluminium.jpeg",
//       "/Images/Automobile Aluminium.jpeg",
//     ],  
//   },
//   { 
//     title: "Aluminium Recycling Capacity Expands Across South India",
//     text: "Southern clusters are investing heavily in scrap recycling and remelting units. Sustainability-focused industries prefer recycled aluminium due to its lower carbon footprint and cost efficiency.",
//     images: [
//       "/Images/Solar Sector Drives Demand for High-Reflective Aluminium Sheets.jpeg",
//       "/Images/EV Car Aluminium.jpeg",
//       "/Images/Lightweight Aluminium.jpeg",
//       "/Images/Automobile Aluminium.jpeg",
//     ],  
//   },
//   { 
//     title: "Aluminium Recycling Capacity Expands Across South India",
//     text: "Southern clusters are investing heavily in scrap recycling and remelting units. Sustainability-focused industries prefer recycled aluminium due to its lower carbon footprint and cost efficiency.",
//     images: [
//       "/Images/Solar Sector Drives Demand for High-Reflective Aluminium Sheets.jpeg",
//       "/Images/EV Car Aluminium.jpeg",
//       "/Images/Lightweight Aluminium.jpeg",
//       "/Images/Automobile Aluminium.jpeg",
//     ],  
//   },
//   { 
//     title: "Aluminium Recycling Capacity Expands Across South India",
//     text: "Southern clusters are investing heavily in scrap recycling and remelting units. Sustainability-focused industries prefer recycled aluminium due to its lower carbon footprint and cost efficiency.",
//     images: [
//       "/Images/Solar Sector Drives Demand for High-Reflective Aluminium Sheets.jpeg",
//       "/Images/EV Car Aluminium.jpeg",
      
//     ],  
//   },
// ];

// const chunkArray = (arr, chunkSize) => {
//   const result = [];
//   for (let i = 0; i < arr.length; i += chunkSize) {
//     result.push(arr.slice(i, i + chunkSize));
//   }
//   return result;
// };

// export default function NewsUpdate() {
//   const [current, setCurrent] = useState(0);
//   const [phase, setPhase] = useState("text");
//   const [isHovering, setIsHovering] = useState(false);

//   const textSlides = chunkArray(newsData, 2); // 2 items per text slide
//   const totalTextSlides = textSlides.length;
//   const totalImageSlides = newsData.length;

//   useEffect(() => {
//     if (isHovering) return;

//     // Auto-advance every 15 seconds
//     const timer = setInterval(() => {
//       if (phase === "text") {
//         if (current === totalTextSlides - 1) {
//           setPhase("image");
//           setCurrent(0);
//         } else {
//           setCurrent((c) => c + 1);
//         }
//       } else {
//         if (current === totalImageSlides - 1) {
//           setPhase("text");
//           setCurrent(0);
//         } else {
//           setCurrent((c) => c + 1);
//         }
//       }
//     }, 5000);

//     return () => clearInterval(timer);
//   }, [current, phase, isHovering, totalTextSlides, totalImageSlides]);

//   const nextSlide = () => {
//     if (phase === "text") {
//       if (current === totalTextSlides - 1) {
//         setPhase("image");
//         setCurrent(0);
//       } else setCurrent(current + 1);
//     } else {
//       if (current === totalImageSlides - 1) {
//         setPhase("text");
//         setCurrent(0);
//       } else setCurrent(current + 1);
//     }
//   };

//   const prevSlide = () => {
//     if (phase === "text") {
//       if (current === 0) {
//         setPhase("image");
//         setCurrent(totalImageSlides - 1);
//       } else setCurrent(current - 1);
//     } else {
//       if (current === 0) {
//         setPhase("text");
//         setCurrent(totalTextSlides - 1);
//       } else setCurrent(current - 1);
//     }
//   };

//   return (
//     <div
//       className="relative w-full overflow-hidden"
//       onMouseEnter={() => setIsHovering(true)}
//       onMouseLeave={() => setIsHovering(false)}
//     >
//       {/* Arrows */}
//       <button
//         onClick={prevSlide}
//         className="absolute top-1/2 left-8 -translate-y-1/2 z-20 bg-white/60 backdrop-blur-md rounded-full p-3 hover:bg-orange-500 hover:text-white transition shadow-lg"
//       >
//         <FiChevronLeft size={26} />
//       </button>

//       <button
//         onClick={nextSlide}
//         className="absolute top-1/2 right-8 -translate-y-1/2 z-20 bg-white/60 backdrop-blur-md rounded-full p-3 hover:bg-orange-400 hover:text-white transition shadow-lg"
//       >
//         <FiChevronRight size={26} />
//       </button>

//       <AnimatePresence mode="wait">
//         {phase === "text" ? (
//           <motion.div
//             key={`text-${current}`}
//             initial={{ x: 180, opacity: 0 }}
//             animate={{ x: 0, opacity: 1 }}
//             exit={{ x: -180, opacity: 0 }}
//             transition={{ type: "spring", stiffness: 80, damping: 14 }}
//             className="w-full h-[520px] flex flex-col md:flex-row justify-center items-center px-10 md:px-20 gap-8 bg-gradient-to-br from-black/80 via-black/60 to-black/40 text-white"
//           >
//             {textSlides[current].map((item, index) => (
//               <div key={index} className="md:w-1/2 flex flex-col justify-center gap-4">
//                 <h2 className="text-2xl md:text-3xl font-bold">{item.title}</h2>
//                 <p className="text-sm md:text-lg text-gray-300">{item.text}</p>
//               </div>
//             ))}
//           </motion.div>
//         ) : (
// //           <motion.div
// //   key={`img-${current}`}
// //   initial={{ x: 180, opacity: 0 }}
// //   animate={{ x: 0, opacity: 1 }}
// //   exit={{ x: -180, opacity: 0 }}
// //   transition={{ type: "spring", stiffness: 80, damping: 14 }}
// //   className="w-full h-[520px] flex gap-4 px-6 py-4"
// // >
// //   {newsData[current].images.slice(0, 3).map((img, i) => (
// //     <div key={i} className="flex-1 rounded-lg overflow-hidden bg-black/10 shadow-lg">
// //       <img
// //   src={newsData[current].image}
// //   alt="news"
// //   className="w-full h-full object-cover md:object-contain rounded-xl"
// // /> 

// //     </div>
// //   ))}
// // </motion.div>


//       <motion.div
//   key={`img-${current}`}
//   initial={{ x: 180, opacity: 0 }}
//   animate={{ x: 0, opacity: 1 }}
//   exit={{ x: -180, opacity: 0 }}
//   transition={{ type: "spring", stiffness: 80, damping: 14 }}
//       className="w-full h-[520px] flex gap-3 px-4 py-4 bg-gradient-to-br from-black/80 via-black/60 to-black/40 text-white"
// >
//       {newsData[current].images.slice(0, 2).map((img, i) => (
//         <div
//           key={i}
//           className="flex-1 h-full rounded-xl overflow-hidden shadow-lg bg-black/20"
//         >
//           <img
//             src={img}
//             alt={`news-${i}`}
//             className="w-full h-full object-cover object-center"
//           />
//         </div>
//       ))}






// </motion.div>




//         )}
//       </AnimatePresence>

//       {/* Pagination Dots */}
//       <div className="flex justify-center gap-2 py-4 bg-white/30 backdrop-blur-lg">
//         {Array.from({
//           length: phase === "text" ? totalTextSlides : totalImageSlides,
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




import React, {
  useState,
  useEffect,
  useCallback,
  useMemo,
} from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";

/* ---------------- ORIGINAL DATA (UNCHANGED) ---------------- */

const newsData = [
  {
    title: "Global Aluminium Prices Strengthen Amid Rising Aerospace Demand",
    text:
      "Growing consumption from the aerospace and EV sectors has pushed aluminium prices upward this quarter. Analysts expect continued stability due to strong downstream demand and limited supply disruptions.",
    images: [
      "/Images/Auto & EV Manufacturers Shift Toward Lightweight Aluminium Sheets.jpeg",
      "/Images/Aluminium Alloy 3xxx & 5xxx Series Gain Popularity in Food Packaging.jpeg",
    ],
  },
  {
    title: "India’s Aluminium Consumption Expected to Cross 9 Million Tons by 2030",
    text:
      "India is projected to become one of the fastest-growing aluminium markets driven by infrastructure, renewables, and mobility projects.",
    images: [
      "/Images/India’s Aluminium Consumption Expected to Cross 9 Million Tons by 2030.jpeg",
      "/Images/New BIS Standards Released for Aluminium Flat Products.jpeg",
    ],
  },
  {
    title: "EV Manufacturers Shift Toward Lightweight Aluminium Sheets",
    text:
      "Major automakers are increasing procurement of lightweight alloys to meet fuel efficiency and emission regulations.",
    images: [
      "/Images/Import Policies Tighten on Low-Value Aluminium Items.jpeg",
      "/Images/Aluminium Recycling Capacity Expands Across South India.jpeg",
      "/Images/Automobile Aluminium.jpeg",
    ],
  },
  {
    title: "Aluminium Recycling Capacity Expands Across South India",
    text:
      "Southern clusters are investing heavily in scrap recycling and remelting units. Sustainability-focused industries prefer recycled aluminium due to its lower carbon footprint and cost efficiency.",
    images: [
      "/Images/Solar Sector Drives Demand for High-Reflective Aluminium Sheets.jpeg",
      "/Images/Surge in Demand for Anodized Aluminium in Architecture & Interiors.jpeg",
      "/Images/Lightweight Aluminium.jpeg",
      "/Images/Automobile Aluminium.jpeg",
    ],
  },
];

/* ---------------- HELPERS ---------------- */

const chunkArray = (arr, size) => {
  const res = [];
  for (let i = 0; i < arr.length; i += size) {
    res.push(arr.slice(i, i + size));
  }
  return res;
};

/* ---------------- MOTION CONFIG ---------------- */

const slideVariants = {
  initial: { opacity: 0, x: 80 },
  animate: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: -80 },
};

const slideTransition = {
  duration: 0.45,
  ease: "easeOut",
};

/* ---------------- COMPONENT ---------------- */

export default function NewsUpdate() {
  const [current, setCurrent] = useState(0);
  const [phase, setPhase] = useState("text");
  const [hovering, setHovering] = useState(false);

  const textSlides = useMemo(() => chunkArray(newsData, 2), []);
  const totalText = textSlides.length;
  const totalImages = newsData.length;

  /* ---------- AUTOPLAY ---------- */
  useEffect(() => {
    if (hovering) return;

    const timer = setInterval(() => {
      setCurrent((prev) => {
        if (phase === "text") {
          if (prev === totalText - 1) {
            setPhase("image");
            return 0;
          }
          return prev + 1;
        } else {
          if (prev === totalImages - 1) {
            setPhase("text");
            return 0;
          }
          return prev + 1;
        }
      });
    }, 5000);

    return () => clearInterval(timer);
  }, [phase, hovering, totalText, totalImages]);

  /* ---------- CONTROLS ---------- */
  const nextSlide = useCallback(() => {
    setCurrent((c) =>
      phase === "text"
        ? c === totalText - 1
          ? (setPhase("image"), 0)
          : c + 1
        : c === totalImages - 1
        ? (setPhase("text"), 0)
        : c + 1
    );
  }, [phase, totalText, totalImages]);

  const prevSlide = useCallback(() => {
    setCurrent((c) =>
      phase === "text"
        ? c === 0
          ? (setPhase("image"), totalImages - 1)
          : c - 1
        : c === 0
        ? (setPhase("text"), totalText - 1)
        : c - 1
    );
  }, [phase, totalText, totalImages]);

  /* ---------------- RENDER ---------------- */

  return (
    <div
      className="relative w-full overflow-visible"
      onMouseEnter={() => setHovering(true)}
      onMouseLeave={() => setHovering(false)}
    >
      {/* Arrows */}
      <div className="absolute inset-y-0 left-0 right-0 z-30 pointer-events-none">
        <button
          onClick={prevSlide}
          className="pointer-events-auto absolute left-3 md:left-8 top-1/2 -translate-y-1/2
          bg-white/70 rounded-full p-2 md:p-3 shadow-lg hover:bg-orange-500 hover:text-white"
        >
          <FiChevronLeft size={22} />
        </button>

        <button
          onClick={nextSlide}
          className="pointer-events-auto absolute right-3 md:right-8 top-1/2 -translate-y-1/2
          bg-white/70 rounded-full p-2 md:p-3 shadow-lg hover:bg-orange-500 hover:text-white"
        >
          <FiChevronRight size={22} />
        </button>
      </div>

      <AnimatePresence mode="wait">
        {phase === "text" ? (
          <motion.div
            key={`text-${current}`}
            variants={slideVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={slideTransition}
            className="min-h-[360px] md:h-[520px]
              flex flex-col md:flex-row justify-center items-center
              px-6 md:px-20 gap-8 bg-linear-to-br
              from-black/80 via-black/60 to-black/40 text-white"
          >
            {textSlides[current].map((item, i) => (
              <div key={i} className="md:w-1/2 space-y-4">
                <h2 className="text-xl md:text-3xl font-bold">{item.title}</h2>
                <p className="text-sm md:text-lg text-gray-300">{item.text}</p>
              </div>
            ))}
          </motion.div>
        ) : (
          <motion.div
            key={`img-${current}`}
            variants={slideVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={slideTransition}
            className="min-h-[360px] md:h-[520px]
              flex gap-3 px-4 py-4 bg-linear-to-br
              from-black/80 via-black/60 to-black/40"
          >
            {newsData[current].images.slice(0, 2).map((img, i) => (
              <div
                key={i}
                className="flex-1 rounded-xl overflow-hidden bg-black/20"
              >
                <img
                  src={img}
                  alt={`news-${i}`}
                  loading="lazy"
                  className="w-full h-full object-contain md:object-cover"
                />
              </div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Pagination */}
      <div className="flex justify-center gap-2 py-4 bg-white/30 backdrop-blur">
        {Array.from({
          length: phase === "text" ? totalText : totalImages,
        }).map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`w-3 h-3 rounded-full transition ${
              i === current ? "bg-orange-500 scale-125" : "bg-gray-400"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
