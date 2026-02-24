




// // import React, { useState, useEffect } from "react";

// // const ImageSlider = () => {
// //   const images = [
// //     "/Images/factory-1.jpg",
// //     "/Images/factory-2.jpg",
// //     "/Images/factory-3.jpg",
// //   ];

// //   const captions = [
// //     "We offer the best Quality of Stainless Steel and excellent service",
// //     "World-class Stainless Steel Processing Solutions",
// //     "Trusted Partner for Premium Stainless Steel Products",
// //   ];

// //   const [currentIndex, setCurrentIndex] = useState(0);

// //   useEffect(() => {
// //     const interval = setInterval(() => {
// //       setCurrentIndex((prev) =>
// //         prev === images.length - 1 ? 0 : prev + 1
// //       );
// //     }, 4000);

// //     return () => clearInterval(interval);
// //   }, [images.length]);

// //   return (
// //     <div className="relative w-full h-[420px] sm:h-[480px] md:h-[520px] overflow-hidden bg-black m-0 p-0">
// //       {/* SLIDES */}
// //       <div
// //         className="flex transition-transform duration-1000 ease-in-out h-full"
// //         style={{ transform: `translateX(-${currentIndex * 100}%)` }}
// //       >
// //         {images.map((src, index) => (
// //           <img
// //             key={index}
// //             src={src}
// //             alt={`Slide ${index}`}
// //             className="w-full h-full object-cover flex-shrink-0"
// //           />
// //         ))}
// //       </div>

// //       {/* DARK OVERLAY */}
// //       <div className="absolute inset-0 bg-black/30"></div>

// //       {/* TEXT OVERLAY */}
// //       <div className="absolute inset-0 flex items-center">
// //         <div className="max-w-4xl px-4 sm:px-8 md:px-10">
// //           <h1 className="text-white text-2xl sm:text-3xl md:text-5xl font-semibold leading-tight">
// //             {captions[currentIndex]}
// //           </h1>
// //         </div>
// //       </div>

// //       {/* INDICATORS */}
// //       <div className="absolute bottom-4 sm:bottom-6 left-4 sm:left-10 flex space-x-2 sm:space-x-3">
// //         {images.map((_, index) => (
// //           <button
// //             key={index}
// //             onClick={() => setCurrentIndex(index)}
// //             className={`w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full transition-all ${
// //               currentIndex === index
// //                 ? "bg-white"
// //                 : "bg-white/50"
// //             }`}
// //           />
// //         ))}
// //       </div>
// //     </div>
// //   );
// // };

// // export default ImageSlider;





// import React, { useState, useEffect } from "react";

// const ImageSlider = () => {
//   const images = [
//     "/Images/download (1).jpg",
//     "/Images/Improving Metal Reliability for High-Performance Manufacturing.jpg",
//     "/Images/factory-3.jpg",
//   ];

//   const captions = [
//     "We offer the best Quality of Stainless Steel and excellent service",
//     "World-class Stainless Steel Processing Solutions",
//     "Trusted Partner for Premium Stainless Steel Products",
//   ];

//   const [currentIndex, setCurrentIndex] = useState(0);
//   const [fade, setFade] = useState(true);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setFade(false);
//       setTimeout(() => {
//         setCurrentIndex((prev) =>
//           prev === images.length - 1 ? 0 : prev + 1
//         );
//         setFade(true);
//       }, 500);
//     }, 4000);

//     return () => clearInterval(interval);
//   }, [images.length]);

//   return (
//     <div className="relative w-full h-[420px] sm:h-[480px] md:h-[520px] overflow-hidden bg-black m-0 p-0">
//       {/* IMAGE */}
//       <img
//         src={images[currentIndex]}
//         alt="Slide"
//         className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ${
//           fade ? "opacity-100" : "opacity-0"
//         }`}
//       />

//       {/* DARK OVERLAY */}
//       <div className="absolute inset-0 bg-black/30"></div>

//       {/* TEXT OVERLAY */}
//       <div className="absolute inset-0 flex items-center">
//         <div className="max-w-4xl px-4 sm:px-8 md:px-10">
//           <h1
//             className={`text-white text-2xl sm:text-3xl md:text-5xl font-semibold leading-tight transition-opacity duration-700 ${
//               fade ? "opacity-100" : "opacity-0"
//             }`}
//           >
//             {captions[currentIndex]}
//           </h1>
//         </div>
//       </div>

//       {/* INDICATORS */}
//       <div className="absolute bottom-4 sm:bottom-6 left-4 sm:left-10 flex space-x-2 sm:space-x-3">
//         {images.map((_, index) => (
//           <button
//             key={index}
//             onClick={() => {
//               setFade(false);
//               setTimeout(() => {
//                 setCurrentIndex(index);
//                 setFade(true);
//               }, 300);
//             }}
//             className={`w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full transition-all ${
//               currentIndex === index ? "bg-white" : "bg-white/50"
//             }`}
//           />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default ImageSlider;




import React, { useState, useEffect } from "react";

const ImageSlider = () => {
  const images = [
    "/Images/download (1).jpg",
    "/Images/Improving Metal Reliability for High-Performance Manufacturing.jpg",
    "/Images/73c40f0cb04c9f85583b89122da1641c.jpg",
  ];

  const captions = [
    "We offer the best Quality of Stainless Steel and excellent service",
    "World-class Stainless Steel Processing Solutions",
    "Trusted Partner for Premium Stainless Steel Products",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [nextIndex, setNextIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      const next = (currentIndex + 1) % images.length;
      handleTransition(next);
    }, 5000);

    return () => clearInterval(interval);
  }, [currentIndex, images.length]);

  const handleTransition = (index) => {
    if (index === currentIndex) return;
    setNextIndex(index);
    setIsTransitioning(true);

    // Wait for the fade animation to complete before updating the base image
    setTimeout(() => {
      setCurrentIndex(index);
      setIsTransitioning(false);
    }, 700); // Matches duration-700
  };

  return (
    <div className="relative w-full h-[520px] sm:h-[580px] md:h-[620px] overflow-hidden bg-zinc-900 m-0 p-0">
      
      {/* BASE IMAGE (The current one) */}
      <img
        src={images[currentIndex]}
        alt="Current Slide"
        className="absolute inset-0 w-full h-full object-cover object-center"
      />

      {/* OVERLAY IMAGE (The one fading in) */}
      <img
        src={images[nextIndex]}
        alt="Next Slide"
        className={`absolute inset-0 w-full h-full object-cover object-center transition-opacity duration-700 ${
          isTransitioning ? "opacity-100" : "opacity-0"
        }`}
      />

      {/* DARK OVERLAY (Ensures text is always readable) */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* TEXT OVERLAY */}
      <div className="absolute inset-0 flex items-center">
        <div className="max-w-4xl px-4 sm:px-8 md:px-10">
          <h1
            className={`text-white text-2xl sm:text-3xl md:text-5xl font-semibold leading-tight transition-all duration-700 ${
              isTransitioning ? "opacity-0 translate-y-2" : "opacity-100 translate-y-0"
            }`}
          >
            {captions[currentIndex]}
          </h1>
        </div>
      </div>

      {/* INDICATORS */}
      <div className="absolute bottom-6 left-4 sm:left-10 flex space-x-3 z-10">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => handleTransition(index)}
            className={`w-3 h-3 rounded-full transition-all ${
              (isTransitioning ? nextIndex : currentIndex) === index 
                ? "bg-white w-8" // Active dot grows slightly
                : "bg-white/50"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default ImageSlider;