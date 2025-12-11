import React, { useState, useEffect } from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";

const newsData = [
  {
    title: "Global Aluminium Prices Strengthen Amid Rising Aerospace Demand",
    text: "Growing consumption from the aerospace and EV sectors has pushed aluminium prices upward this quarter. Analysts expect continued stability due to strong downstream demand and limited supply disruptions.",
    images: [
      "/Images/Auto & EV Manufacturers Shift Toward Lightweight Aluminium Sheets.jpeg",
      "/Images/Aluminium Alloy 3xxx & 5xxx Series Gain Popularity in Food Packaging.jpeg",
      
    ],
  },
  {
    title: "India’s Aluminium Consumption Expected to Cross 9 Million Tons by 2030",
    text: "India is projected to become one of the fastest-growing aluminium markets driven by infrastructure, renewables, and mobility projects.",
    images: [
      "/Images/India’s Aluminium Consumption Expected to Cross 9 Million Tons by 2030.jpeg",
      "/Images/New BIS Standards Released for Aluminium Flat Products.jpeg",
      
    ],
  },
  {
    title: "EV Manufacturers Shift Toward Lightweight Aluminium Sheets",
    text: "Major automakers are increasing procurement of lightweight alloys to meet fuel efficiency and emission regulations.",
    images: [
      "/Images/Import Policies Tighten on Low-Value Aluminium Items.jpeg",
      "/Images/Aluminium Recycling Capacity Expands Across South India.jpeg",
      
      "/Images/Automobile Aluminium.jpeg",
    ],
  },
  { 
    title: "Aluminium Recycling Capacity Expands Across South India",
    text: "Southern clusters are investing heavily in scrap recycling and remelting units. Sustainability-focused industries prefer recycled aluminium due to its lower carbon footprint and cost efficiency.",
    images: [
      "/Images/Solar Sector Drives Demand for High-Reflective Aluminium Sheets.jpeg",
      "/Images/Surge in Demand for Anodized Aluminium in Architecture & Interiors.jpeg",
      "/Images/Lightweight Aluminium.jpeg",
      "/Images/Automobile Aluminium.jpeg",
    ],  
  },
  { 
    title: "Aluminium Recycling Capacity Expands Across South India",
    text: "Southern clusters are investing heavily in scrap recycling and remelting units. Sustainability-focused industries prefer recycled aluminium due to its lower carbon footprint and cost efficiency.",
    images: [
      "/Images/Global Aluminium Prices Strengthen Amid Rising Aerospace Demand.jpeg",
      "/Images/EV Car Aluminium.jpeg",
      "/Images/Lightweight Aluminium.jpeg",
      "/Images/Automobile Aluminium.jpeg",
    ],  
  },
  { 
    title: "Aluminium Recycling Capacity Expands Across South India",
    text: "Southern clusters are investing heavily in scrap recycling and remelting units. Sustainability-focused industries prefer recycled aluminium due to its lower carbon footprint and cost efficiency.",
    images: [
      "/Images/Solar Sector Drives Demand for High-Reflective Aluminium Sheets.jpeg",
      "/Images/EV Car Aluminium.jpeg",
      "/Images/Lightweight Aluminium.jpeg",
      "/Images/Automobile Aluminium.jpeg",
    ],  
  },
  { 
    title: "Aluminium Recycling Capacity Expands Across South India",
    text: "Southern clusters are investing heavily in scrap recycling and remelting units. Sustainability-focused industries prefer recycled aluminium due to its lower carbon footprint and cost efficiency.",
    images: [
      "/Images/Solar Sector Drives Demand for High-Reflective Aluminium Sheets.jpeg",
      "/Images/EV Car Aluminium.jpeg",
      "/Images/Lightweight Aluminium.jpeg",
      "/Images/Automobile Aluminium.jpeg",
    ],  
  },
  { 
    title: "Aluminium Recycling Capacity Expands Across South India",
    text: "Southern clusters are investing heavily in scrap recycling and remelting units. Sustainability-focused industries prefer recycled aluminium due to its lower carbon footprint and cost efficiency.",
    images: [
      "/Images/Solar Sector Drives Demand for High-Reflective Aluminium Sheets.jpeg",
      "/Images/EV Car Aluminium.jpeg",
      "/Images/Lightweight Aluminium.jpeg",
      "/Images/Automobile Aluminium.jpeg",
    ],  
  },
  { 
    title: "Aluminium Recycling Capacity Expands Across South India",
    text: "Southern clusters are investing heavily in scrap recycling and remelting units. Sustainability-focused industries prefer recycled aluminium due to its lower carbon footprint and cost efficiency.",
    images: [
      "/Images/Solar Sector Drives Demand for High-Reflective Aluminium Sheets.jpeg",
      "/Images/EV Car Aluminium.jpeg",
      "/Images/Lightweight Aluminium.jpeg",
      "/Images/Automobile Aluminium.jpeg",
    ],  
  },
  { 
    title: "Aluminium Recycling Capacity Expands Across South India",
    text: "Southern clusters are investing heavily in scrap recycling and remelting units. Sustainability-focused industries prefer recycled aluminium due to its lower carbon footprint and cost efficiency.",
    images: [
      "/Images/Solar Sector Drives Demand for High-Reflective Aluminium Sheets.jpeg",
      "/Images/EV Car Aluminium.jpeg",
      
    ],  
  },
];

const chunkArray = (arr, chunkSize) => {
  const result = [];
  for (let i = 0; i < arr.length; i += chunkSize) {
    result.push(arr.slice(i, i + chunkSize));
  }
  return result;
};

export default function NewsUpdate() {
  const [current, setCurrent] = useState(0);
  const [phase, setPhase] = useState("text");
  const [isHovering, setIsHovering] = useState(false);

  const textSlides = chunkArray(newsData, 2); // 2 items per text slide
  const totalTextSlides = textSlides.length;
  const totalImageSlides = newsData.length;

  useEffect(() => {
    if (isHovering) return;

    // Auto-advance every 15 seconds
    const timer = setInterval(() => {
      if (phase === "text") {
        if (current === totalTextSlides - 1) {
          setPhase("image");
          setCurrent(0);
        } else {
          setCurrent((c) => c + 1);
        }
      } else {
        if (current === totalImageSlides - 1) {
          setPhase("text");
          setCurrent(0);
        } else {
          setCurrent((c) => c + 1);
        }
      }
    }, 5000);

    return () => clearInterval(timer);
  }, [current, phase, isHovering, totalTextSlides, totalImageSlides]);

  const nextSlide = () => {
    if (phase === "text") {
      if (current === totalTextSlides - 1) {
        setPhase("image");
        setCurrent(0);
      } else setCurrent(current + 1);
    } else {
      if (current === totalImageSlides - 1) {
        setPhase("text");
        setCurrent(0);
      } else setCurrent(current + 1);
    }
  };

  const prevSlide = () => {
    if (phase === "text") {
      if (current === 0) {
        setPhase("image");
        setCurrent(totalImageSlides - 1);
      } else setCurrent(current - 1);
    } else {
      if (current === 0) {
        setPhase("text");
        setCurrent(totalTextSlides - 1);
      } else setCurrent(current - 1);
    }
  };

  return (
    <div
      className="relative w-full overflow-hidden"
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      {/* Arrows */}
      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-8 -translate-y-1/2 z-20 bg-white/60 backdrop-blur-md rounded-full p-3 hover:bg-orange-500 hover:text-white transition shadow-lg"
      >
        <FiChevronLeft size={26} />
      </button>

      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-8 -translate-y-1/2 z-20 bg-white/60 backdrop-blur-md rounded-full p-3 hover:bg-orange-400 hover:text-white transition shadow-lg"
      >
        <FiChevronRight size={26} />
      </button>

      <AnimatePresence mode="wait">
        {phase === "text" ? (
          <motion.div
            key={`text-${current}`}
            initial={{ x: 180, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: -180, opacity: 0 }}
            transition={{ type: "spring", stiffness: 80, damping: 14 }}
            className="w-full h-[520px] flex flex-col md:flex-row justify-center items-center px-10 md:px-20 gap-8 bg-gradient-to-br from-black/80 via-black/60 to-black/40 text-white"
          >
            {textSlides[current].map((item, index) => (
              <div key={index} className="md:w-1/2 flex flex-col justify-center gap-4">
                <h2 className="text-2xl md:text-3xl font-bold">{item.title}</h2>
                <p className="text-sm md:text-lg text-gray-300">{item.text}</p>
              </div>
            ))}
          </motion.div>
        ) : (
//           <motion.div
//   key={`img-${current}`}
//   initial={{ x: 180, opacity: 0 }}
//   animate={{ x: 0, opacity: 1 }}
//   exit={{ x: -180, opacity: 0 }}
//   transition={{ type: "spring", stiffness: 80, damping: 14 }}
//   className="w-full h-[520px] flex gap-4 px-6 py-4"
// >
//   {newsData[current].images.slice(0, 3).map((img, i) => (
//     <div key={i} className="flex-1 rounded-lg overflow-hidden bg-black/10 shadow-lg">
//       <img
//   src={newsData[current].image}
//   alt="news"
//   className="w-full h-full object-cover md:object-contain rounded-xl"
// /> 

//     </div>
//   ))}
// </motion.div>


      <motion.div
  key={`img-${current}`}
  initial={{ x: 180, opacity: 0 }}
  animate={{ x: 0, opacity: 1 }}
  exit={{ x: -180, opacity: 0 }}
  transition={{ type: "spring", stiffness: 80, damping: 14 }}
      className="w-full h-[520px] flex gap-3 px-4 py-4 bg-gradient-to-br from-black/80 via-black/60 to-black/40 text-white"
>
      {newsData[current].images.slice(0, 2).map((img, i) => (
        <div
          key={i}
          className="flex-1 h-full rounded-xl overflow-hidden shadow-lg bg-black/20"
        >
          <img
            src={img}
            alt={`news-${i}`}
            className="w-full h-full object-cover object-center"
          />
        </div>
      ))}






</motion.div>




        )}
      </AnimatePresence>

      {/* Pagination Dots */}
      <div className="flex justify-center gap-2 py-4 bg-white/30 backdrop-blur-lg">
        {Array.from({
          length: phase === "text" ? totalTextSlides : totalImageSlides,
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




