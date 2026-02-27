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





import React from "react";

export default function GallerySection() {
  // ✅ Only filenames
  const files = [
    "application01.jpg",
    "application02.jpg",
    "application03.jpg",
    "application04.jpg",
    "application05.jpg",
    "application06.jpg",
    "application07.jpg",
    "application08.png",
    "application09.png",
    "application11.jpg",
    "application12.webp",
    "application13.webp",
    "application14.webp",
    
  ];

  // ✅ Convert to gallery objects
  const images = files.map((file, index) => ({
    title: `Application ${index + 1}`,
    src: `/Images/${file}`,
  }));

  return (
    <section className="py-16 bg-gray-100">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Header */}
        <h2 className="text-4xl font-bold text-gray-900 text-center mb-12">
          GALLERY
        </h2>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2">
        {/* <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-1"> */}
          {images.map((item, index) => (
            <div
              key={index}
              className="group relative overflow-hidden aspect-[4/3] cursor-pointer rounded-lg"
            >
              {/* Image */}
              <img
                src={item.src}
                alt={item.title}
                loading="lazy"
                className="absolute inset-0 w-full h-full object-cover
                transition-all duration-700 ease-out
                group-hover:scale-110
                group-hover:rotate-1
                group-hover:brightness-75"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition duration-500"></div>

              {/* Text */}
              <div className="absolute inset-0 flex items-center justify-center opacity-0 translate-y-6 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500">
                <span className="text-white text-xl font-semibold tracking-wide">
                  {item.title}
                </span>
              </div>

              {/* Shadow */}
              <div className="absolute inset-0 group-hover:shadow-2xl transition duration-500"></div>
            </div>
          ))}
        </div>

        {/* Button */}
        <div className="flex justify-center mt-12">
          <a
            href="/Applications"
            className="bg-teal-500 text-gray-900 font-bold px-8 py-3 rounded-full
            transition-all duration-300 hover:bg-teal-600 hover:scale-110 hover:shadow-xl"
          >
            VIEW ALL &gt;&gt;
          </a>
        </div>
      </div>
    </section>
  );
}