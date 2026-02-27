// import React from 'react';

// export default function GallerySection() {
//   return (
//     <section className="py-12 bg-gray-100">
//       <div className="max-w-7xl mx-auto px-0">
//         {/* Header centered */}
//         <h2 className="text-4xl font-bold text-gray-900 text-center mb-8">GALLERY</h2>
//         {/* Gallery Grid - No gaps between images */}
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
//           {/* Image 1 - Train */}
//           <div className="group relative overflow-hidden aspect-[4/3] bg-gray-300">
//             <div className="absolute inset-0 bg-gray-300 transition-all duration-500 group-hover:scale-110 group-hover:brightness-75"></div>
//             <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
//               <span className="text-white text-lg font-semibold">Train</span>
//             </div>
//           </div>
          
//           {/* Image 2 - Elevator */}
//           <div className="group relative overflow-hidden aspect-[4/3] bg-gray-400">
//             <div className="absolute inset-0 bg-gray-400 transition-all duration-500 group-hover:scale-110 group-hover:brightness-75"></div>
//             <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
//               <span className="text-white text-lg font-semibold">Elevator</span>
//             </div>
//           </div>
          
//           {/* Image 3 - Bean Sculpture */}
//           <div className="group relative overflow-hidden aspect-[4/3] bg-gray-500">
//             <div className="absolute inset-0 bg-gray-500 transition-all duration-500 group-hover:scale-110 group-hover:brightness-75"></div>
//             <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
//               <span className="text-white text-lg font-semibold">Bean Sculpture</span>
//             </div>
//           </div>
          
//           {/* Image 4 - Gucci Building */}
//           <div className="group relative overflow-hidden aspect-[4/3] bg-gray-600">
//             <div className="absolute inset-0 bg-gray-600 transition-all duration-500 group-hover:scale-110 group-hover:brightness-75"></div>
//             <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
//               <span className="text-white text-lg font-semibold">Gucci Building</span>
//             </div>
//           </div>
          
//           {/* Image 5 - Kitchen */}
//           <div className="group relative overflow-hidden aspect-[4/3] bg-gray-700">
//             <div className="absolute inset-0 bg-gray-700 transition-all duration-500 group-hover:scale-110 group-hover:brightness-75"></div>
//             <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
//               <span className="text-white text-lg font-semibold">Kitchen</span>
//             </div>
//           </div>
          
//           {/* Image 6 - Rusty Pipes */}
//           <div className="group relative overflow-hidden aspect-[4/3] bg-gray-800">
//             <div className="absolute inset-0 bg-gray-800 transition-all duration-500 group-hover:scale-110 group-hover:brightness-75"></div>
//             <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
//               <span className="text-white text-lg font-semibold">Rusty Pipes</span>
//             </div>
//           </div>
//         </div>
        
//         {/* View All Button - Centered at bottom */}
//         <div className="flex justify-center mt-8">
//           <a 
//             href="/Applications" 
//             className="bg-teal-500 text-gray-900 font-bold px-6 py-3 rounded transition-all duration-300 hover:bg-teal-600 hover:scale-105 hover:shadow-lg">
          
//             VIEW ALL &gt;&gt;
//           </a>
//         </div>
//       </div>
//     </section>
//   );
// }





// import React from "react";

// export default function GallerySection() {
//   // ✅ Only filenames
//   const files = [
//     "application01.jpg",
//     "application02.jpg",
//     "application03.jpg",
//     "application04.jpg",
//     "application05.jpg",
//     "application06.jpg",
//     "application07.jpg",
//     "application08.png",
//     "application09.png",
//     "application11.jpg",
//     "application12.webp",
//     "application13.webp",
//     "application14.webp",
    
//   ];

//   // ✅ Convert to gallery objects
//   const images = files.map((file, index) => ({
//     title: `Application ${index + 1}`,
//     src: `/Images/${file}`,
//   }));

//   return (
//     <section className="py-16 bg-gray-100">
//       <div className="max-w-6xl mx-auto px-6">
        
//         {/* Header */}
//         <h2 className="text-4xl font-bold text-gray-900 text-center mb-12">
//           GALLERY
//         </h2>

//         {/* Grid */}
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2">
//         {/* <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-1"> */}
//           {images.map((item, index) => (
//             <div
//               key={index}
//               className="group relative overflow-hidden aspect-[4/3] cursor-pointer rounded-lg"
//             >
//               {/* Image */}
//               <img
//                 src={item.src}
//                 alt={item.title}
//                 loading="lazy"
//                 className="absolute inset-0 w-full h-full object-cover
//                 transition-all duration-700 ease-out
//                 group-hover:scale-110
//                 group-hover:rotate-1
//                 group-hover:brightness-75"
//               />

//               {/* Overlay */}
//               <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition duration-500"></div>

//               {/* Text */}
//               <div className="absolute inset-0 flex items-center justify-center opacity-0 translate-y-6 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500">
//                 <span className="text-white text-xl font-semibold tracking-wide">
//                   {item.title}
//                 </span>
//               </div>

//               {/* Shadow */}
//               <div className="absolute inset-0 group-hover:shadow-2xl transition duration-500"></div>
//             </div>
//           ))}
//         </div>

//         {/* Button */}
//         <div className="flex justify-center mt-12">
//           <a
//             href="/Applications"
//             className="bg-teal-500 text-gray-900 font-bold px-8 py-3 rounded-full
//             transition-all duration-300 hover:bg-teal-600 hover:scale-110 hover:shadow-xl"
//           >
//             VIEW ALL &gt;&gt;
//           </a>
//         </div>
//       </div>
//     </section>
//   );
// }








import React, { useState, useEffect } from "react";

export default function GallerySection() {
  // ✅ State for the Lightbox
  const [currentIndex, setCurrentIndex] = useState(null);

  const files = [
    "application01.jpg", "application02.jpg", "application03.jpg",
    "application04.jpg", "application05.jpg", "application06.jpg",
    "application07.jpg", "application08.png", "application09.png",
     "application12.webp", "application13.webp",
    "application14.webp",
  ];

  const images = files.map((file, index) => ({
    title: `Application ${index + 1}`,
    src: `/Images/${file}`,
  }));

  // ✅ Handle Keyboard Navigation (Esc to close, Arrows to browse)
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (currentIndex === null) return;
      if (e.key === "Escape") setCurrentIndex(null);
      if (e.key === "ArrowRight") nextImage();
      if (e.key === "ArrowLeft") prevImage();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [currentIndex]);

  const nextImage = (e) => {
    e?.stopPropagation();
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = (e) => {
    e?.stopPropagation();
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <section className="py-12 md:py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 tracking-tight">
            GALLERY
          </h2>
          <div className="h-1 w-20 bg-teal-500 mx-auto mt-4 rounded-full"></div>
        </div>

        {/* Responsive Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {images.map((item, index) => (
            <div
              key={index}
              onClick={() => setCurrentIndex(index)}
              className="group relative overflow-hidden aspect-[4/3] cursor-pointer rounded-2xl bg-gray-200 shadow-sm hover:shadow-2xl transition-all duration-300"
            >
              <img
                src={item.src}
                alt={item.title}
                loading="lazy"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 group-hover:brightness-90"
              />
              
              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center p-4">
                <span className="text-white font-bold text-lg translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  {item.title}
                </span>
                <div className="mt-2 px-4 py-1 border border-white/50 text-white text-xs rounded-full">
                  Click to View
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All CTA */}
        <div className="flex justify-center mt-16">
          <a
            href="/Applications"
            className="group flex items-center gap-2 bg-teal-500 text-white font-bold px-10 py-4 rounded-full shadow-lg hover:bg-teal-600 hover:-translate-y-1 transition-all duration-300"
          >
            VIEW ALL APPLICATIONS
            <span className="group-hover:translate-x-1 transition-transform">→</span>
          </a>
        </div>
      </div>

      {/* --- FULL SCREEN VIEW (LIGHTBOX) --- */}
      {currentIndex !== null && (
        <div 
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 backdrop-blur-sm transition-opacity duration-300"
          onClick={() => setCurrentIndex(null)}
        >
          {/* Close UI */}
          <button 
            className="absolute top-6 right-6 z-[110] text-white/70 hover:text-white text-5xl font-light transition-colors"
            onClick={() => setCurrentIndex(null)}
          >
            &times;
          </button>

          {/* Navigation Buttons */}
          <button 
            className="absolute left-4 md:left-8 z-[110] p-3 text-white bg-white/10 hover:bg-white/20 rounded-full transition-all"
            onClick={prevImage}
          >
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="15 19l-7-7 7-7"/></svg>
          </button>

          <button 
            className="absolute right-4 md:right-8 z-[110] p-3 text-white bg-white/10 hover:bg-white/20 rounded-full transition-all"
            onClick={nextImage}
          >
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="9 5l7 7-7 7"/></svg>
          </button>

          {/* Image Container */}
          <div className="relative max-w-6xl w-full h-full flex flex-col items-center justify-center p-6 lg:p-12">
            <img
              src={images[currentIndex].src}
              alt={images[currentIndex].title}
              className="max-w-full max-h-[80vh] object-contain rounded shadow-2xl animate-in zoom-in-95 duration-300"
              onClick={(e) => e.stopPropagation()} 
            />
            <div className="mt-6 text-center">
              <h3 className="text-white text-2xl font-semibold">{images[currentIndex].title}</h3>
              <p className="text-gray-400 mt-2">{currentIndex + 1} / {images.length}</p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}