// import React, { useState, useEffect } from "react";

// const ImageSlider = () => {
//   const images = [
//     "/Images/architecture-2182003_1920.jpg",
//     "/Images/prague.jpg",
//     "/Images/firenze-9292729_1280.jpg",
//   ];

//   const [currentIndex, setCurrentIndex] = useState(0);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentIndex((prevIndex) =>
//         prevIndex === images.length - 1 ? 0 : prevIndex + 1
//       );
//     }, 3000);
//     return () => clearInterval(interval);
//   }, [images.length]);

//   return (
//     <div className="relative w-full h-screen overflow-hidden">
//       {/* Images Container */}
//       <div
//         className="flex transition-transform duration-1000 ease-in-out"
//         style={{ transform: `translateX(-${currentIndex * 100}%)` }}
//       >
//         {images.map((src, index) => (
//           <img
//             key={index}
//             src={src}
//             alt={`Slide ${index}`}
//             className="w-full h-screen object-cover flex-shrink-0"
//           />
//         ))}
//       </div>

//       {/* Dark overlay for premium look */}
//       <div className="absolute inset-0 bg-black/20 backdrop-blur-[1px]"></div>

//       {/* Indicators */}
//       <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex space-x-3">
//         {images.map((_, index) => (
//           <button
//             key={index}
//             onClick={() => setCurrentIndex(index)}
//             className={`w-3 h-3 rounded-full transition-all duration-300 ${
//               currentIndex === index
//                 ? "bg-white scale-125 shadow-lg"
//                 : "bg-gray-400 opacity-60"
//             }`}
//           />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default ImageSlider;





// import React, { useState, useEffect } from "react";

// const ImageSlider = () => {
//   const images = [
//     "/Images/factory-1.jpg",
//     "/Images/factory-2.jpg",
//     "/Images/factory-3.jpg",
//   ];

//   const captions = [
//     "We offer the best Quality of Stainless Steel and excellent service",
//     "World-class Stainless Steel Processing Solutions",
//     "Trusted Partner for Premium Stainless Steel Products",
//   ];

//   const [currentIndex, setCurrentIndex] = useState(0);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentIndex((prev) =>
//         prev === images.length - 1 ? 0 : prev + 1
//       );
//     }, 4000);

//     return () => clearInterval(interval);
//   }, [images.length]);

//   return (
//     <div className="relative w-full h-[420px] sm:h-[480px] md:h-[520px] overflow-hidden bg-black m-0 p-0">
//       {/* SLIDES */}
//       <div
//         className="flex transition-transform duration-1000 ease-in-out h-full"
//         style={{ transform: `translateX(-${currentIndex * 100}%)` }}
//       >
//         {images.map((src, index) => (
//           <img
//             key={index}
//             src={src}
//             alt={`Slide ${index}`}
//             className="w-full h-full object-cover flex-shrink-0"
//           />
//         ))}
//       </div>

//       {/* DARK OVERLAY */}
//       <div className="absolute inset-0 bg-black/30"></div>

//       {/* TEXT OVERLAY */}
//       <div className="absolute inset-0 flex items-center">
//         <div className="max-w-4xl px-4 sm:px-8 md:px-10">
//           <h1 className="text-white text-2xl sm:text-3xl md:text-5xl font-semibold leading-tight">
//             {captions[currentIndex]}
//           </h1>
//         </div>
//       </div>

//       {/* INDICATORS */}
//       <div className="absolute bottom-4 sm:bottom-6 left-4 sm:left-10 flex space-x-2 sm:space-x-3">
//         {images.map((_, index) => (
//           <button
//             key={index}
//             onClick={() => setCurrentIndex(index)}
//             className={`w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full transition-all ${
//               currentIndex === index
//                 ? "bg-white"
//                 : "bg-white/50"
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
    "/Images/factory-1.jpg",
    "/Images/factory-2.jpg",
    "/Images/factory-3.jpg",
  ];

  const captions = [
    "We offer the best Quality of Stainless Steel and excellent service",
    "World-class Stainless Steel Processing Solutions",
    "Trusted Partner for Premium Stainless Steel Products",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setCurrentIndex((prev) =>
          prev === images.length - 1 ? 0 : prev + 1
        );
        setFade(true);
      }, 500);
    }, 4000);

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="relative w-full h-[420px] sm:h-[480px] md:h-[520px] overflow-hidden bg-black m-0 p-0">
      {/* IMAGE */}
      <img
        src={images[currentIndex]}
        alt="Slide"
        className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ${
          fade ? "opacity-100" : "opacity-0"
        }`}
      />

      {/* DARK OVERLAY */}
      <div className="absolute inset-0 bg-black/30"></div>

      {/* TEXT OVERLAY */}
      <div className="absolute inset-0 flex items-center">
        <div className="max-w-4xl px-4 sm:px-8 md:px-10">
          <h1
            className={`text-white text-2xl sm:text-3xl md:text-5xl font-semibold leading-tight transition-opacity duration-700 ${
              fade ? "opacity-100" : "opacity-0"
            }`}
          >
            {captions[currentIndex]}
          </h1>
        </div>
      </div>

      {/* INDICATORS */}
      <div className="absolute bottom-4 sm:bottom-6 left-4 sm:left-10 flex space-x-2 sm:space-x-3">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              setFade(false);
              setTimeout(() => {
                setCurrentIndex(index);
                setFade(true);
              }, 300);
            }}
            className={`w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full transition-all ${
              currentIndex === index ? "bg-white" : "bg-white/50"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default ImageSlider;
