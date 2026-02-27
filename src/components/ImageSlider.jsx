// import React, { useState, useEffect } from "react";

// const ImageSlider = () => {
//   const images = [
//     "/Images/Home_Page(slider).png",
//     "/Images/Improving Metal Reliability for High-Performance Manufacturing.jpg",
//     "/Images/73c40f0cb04c9f85583b89122da1641c.jpg",
//   ];

//   const captions = [
//     "Advanced Coil Processing Solutions for Aerospace, Defense & High-Precision Industries",
//     "Engineered to deliver micron-level accuracy, superior surface finish, and reliable supply performance",
//     "Technology that powers performance.", 
//   ];

//   const [currentIndex, setCurrentIndex] = useState(0);
//   const [nextIndex, setNextIndex] = useState(0);
//   const [isTransitioning, setIsTransitioning] = useState(false);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       const next = (currentIndex + 1) % images.length;
//       handleTransition(next);
//     }, 5000);

//     return () => clearInterval(interval);
//   }, [currentIndex, images.length]);

//   const handleTransition = (index) => {
//     if (index === currentIndex) return;
//     setNextIndex(index);
//     setIsTransitioning(true);

//     // Wait for the fade animation to complete before updating the base image
//     setTimeout(() => {
//       setCurrentIndex(index);
//       setIsTransitioning(false);
//     }, 700); // Matches duration-700
//   };

//   return (
//     <div className="relative w-full h-[520px] sm:h-[580px] md:h-[620px] overflow-hidden bg-zinc-900 m-0 p-0">
      
//       {/* BASE IMAGE (The current one) */}
//       <img
//         src={images[currentIndex]}
//         alt="Current Slide"
//         className="absolute inset-0 w-full h-full object-cover object-center"
//       />

//       {/* OVERLAY IMAGE (The one fading in) */}
//       <img
//         src={images[nextIndex]}
//         alt="Next Slide"
//         className={`absolute inset-0 w-full h-full object-cover object-center transition-opacity duration-700 ${
//           isTransitioning ? "opacity-100" : "opacity-0"
//         }`}
//       />

//       {/* DARK OVERLAY (Ensures text is always readable) */}
//       <div className="absolute inset-0 bg-black/40"></div>

//       {/* TEXT OVERLAY */}
//       <div className="absolute inset-0 flex items-center">
//         <div className="max-w-4xl px-4 sm:px-8 md:px-10">
//           <h1
//             className={`text-white text-2xl sm:text-3xl md:text-5xl font-semibold leading-tight transition-all duration-700 ${
//               isTransitioning ? "opacity-0 translate-y-2" : "opacity-100 translate-y-0"
//             }`}
//           >
//             {captions[currentIndex]}
//           </h1>
//         </div>
//       </div>

//       {/* INDICATORS */}
//       <div className="absolute bottom-6 left-4 sm:left-10 flex space-x-3 z-10">
//         {images.map((_, index) => (
//           <button
//             key={index}
//             onClick={() => handleTransition(index)}
//             className={`w-3 h-3 rounded-full transition-all ${
//               (isTransitioning ? nextIndex : currentIndex) === index 
//                 ? "bg-white w-8" // Active dot grows slightly
//                 : "bg-white/50"
//             }`}
//           />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default ImageSlider;





// import React, { useState, useEffect, useCallback } from "react";

// const ImageSlider = () => {
//   const slides = [
//     {
//       url: "/Images/Home_page(slider02).png",
//       // caption: "Advanced Coil Processing Solutions for Aerospace, Defense & High-Precision Industries",
//     },
//     {
//       url: "/Images/download (1).jpg",
//       // caption: "Engineered to deliver micron-level accuracy, superior surface finish, and reliable supply performance",
//     },
//     {
//       url: "/Images/Home_slider (5).png",
//       // caption: "Technology that powers performance.",
//     },
//   ];

//   const [currentIndex, setCurrentIndex] = useState(0);
//   const [isTransitioning, setIsTransitioning] = useState(false);

//   // Memoized transition handler to prevent unnecessary re-renders
//   const handleTransition = useCallback((index) => {
//     if (index === currentIndex || isTransitioning) return;
//     setIsTransitioning(true);
    
//     setTimeout(() => {
//       setCurrentIndex(index);
//       setIsTransitioning(false);
//     }, 500); // Smoother, faster transition for better UX
//   }, [currentIndex, isTransitioning]);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       const next = (currentIndex + 1) % slides.length;
//       handleTransition(next);
//     }, 5000);
//     return () => clearInterval(interval);
//   }, [currentIndex, handleTransition, slides.length]);

//   return (
//     <section className="relative w-full h-[60vh] min-h-[600px] max-h-[800px] overflow-hidden bg-zinc-900 group">
      
//       {/* IMAGES CONTAINER */}
//       {slides.map((slide, index) => (
//         <div
//           key={index}
//           className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
//             index === currentIndex ? "opacity-100 z-10" : "opacity-0 z-0"
//           }`}
//         >
//           <img
//             src={slide.url}
//             alt={`Slide ${index}`}
//             className="w-full h-full object-cover object-center"
//             loading={index === 0 ? "eager" : "lazy"}
//           />
//           {/* Responsive Gradient Overlay for better text contrast */}
//           <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent" />
//         </div>
//       ))}

//       {/* TEXT OVERLAY - Fully Responsive Typography */}
//       <div className="absolute inset-0 z-20 flex items-center px-6 sm:px-12 md:px-20 lg:px-32">
//         <div className="max-w-3xl">
//           <h1
//             className={`text-white font-bold leading-tight transition-all duration-700 transform
//             text-2xl     /* Mobile */
//             sm:text-4xl  /* Tablet */
//             md:text-5xl  /* Desktop */
//             lg:text-6xl  /* Wide Screens */
//             ${isTransitioning ? "opacity-0 translate-y-4" : "opacity-100 translate-y-0"}`}
//           >
//             {slides[currentIndex].caption}
//           </h1>
          
//           {/* Optional: Add a responsive CTA button to fill the space on large screens */}
         
//         </div>
//       </div>

//       {/* NAVIGATION DOTS */}
//       <div className="absolute bottom-8 left-0 right-0 z-30 flex justify-center space-x-3">
//         {slides.map((_, index) => (
//           <button
//             key={index}
//             onClick={() => handleTransition(index)}
//             aria-label={`Go to slide ${index + 1}`}
//             className={`h-1.5 transition-all duration-300 rounded-full ${
//               currentIndex === index 
//                 ? "bg-white w-8" 
//                 : "bg-white/40 w-4 hover:bg-white/60"
//             }`}
//           />
//         ))}
//       </div>
//     </section>
//   );
// };

// export default ImageSlider;









import React, { useState, useEffect, useCallback } from "react";

const ImageSlider = () => {
  const slides = [
    { url: "/Images/Home_slider (1).png" },
    { url: "/Images/Home_slider (2).png" },
    { url: "/Images/Home_slider (3).png"},
    { url: "/Images/Home_slider (4).png" },
    { url: "/Images/Home_slider (5).png" },
    { url: "/Images/Home_slider (6).png"},
    { url: "/Images/Home_slider (7).png"},
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const handleTransition = useCallback((index) => {
    if (index === currentIndex || isTransitioning) return;
    setIsTransitioning(true);
    
    setTimeout(() => {
      setCurrentIndex(index);
      setIsTransitioning(false);
    }, 500); 
  }, [currentIndex, isTransitioning]);

  useEffect(() => {
    const interval = setInterval(() => {
      const next = (currentIndex + 1) % slides.length;
      handleTransition(next);
    }, 5000);
    return () => clearInterval(interval);
  }, [currentIndex, handleTransition, slides.length]);

  return (
    // Changed h-[60vh] to h-screen or a specific large height to ensure "Full" feel
    <section className="relative w-full h-[70vh] md:h-[85vh] overflow-hidden bg-black group">
      
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            index === currentIndex ? "opacity-100 z-10" : "opacity-0 z-0"
          }`}
        >
          <img
            src={slide.url}
            alt={`Slide ${index}`}
            // "object-fill" stretches (not recommended), "object-cover" fills container
            // "object-center" keeps the focus in the middle
            className="w-full h-full object-cover object-center block"
            loading={index === 0 ? "eager" : "lazy"}
          />
          {/* Overlay logic - increased opacity for better contrast */}
          <div className="absolute inset-0 bg-black/30" />
        </div>
      ))}

      {/* TEXT OVERLAY */}
      <div className="absolute inset-0 z-20 flex items-center justify-start px-6 sm:px-12 md:px-20 lg:px-32">
        <div className="max-w-4xl">
          <h1
            className={`text-white font-bold leading-tight transition-all duration-1000 transform
            text-3xl sm:text-5xl md:text-6xl lg:text-7xl
            ${isTransitioning ? "opacity-0 translate-y-8" : "opacity-100 translate-y-0"}`}
          >
            {slides[currentIndex].caption}
          </h1>
        </div>
      </div>

      {/* NAVIGATION DOTS */}
      <div className="absolute bottom-10 left-0 right-0 z-30 flex justify-center space-x-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => handleTransition(index)}
            className={`h-2 transition-all duration-300 rounded-full ${
              currentIndex === index 
                ? "bg-white w-10" 
                : "bg-white/30 w-4 hover:bg-white/60"
            }`}
          />
        ))}
      </div>
    </section>
  );
};

export default ImageSlider;