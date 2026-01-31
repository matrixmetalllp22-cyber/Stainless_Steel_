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
  const images = [
    { title: "Train", bg: "bg-gray-300" },
    { title: "Elevator", bg: "bg-gray-400" },
    { title: "Bean Sculpture", bg: "bg-gray-500" },
    { title: "Gucci Building", bg: "bg-gray-600" },
    { title: "Kitchen", bg: "bg-gray-700" },
    { title: "Rusty Pipes", bg: "bg-gray-800" },
  ];

  return (
    <section className="py-16 bg-gray-100">
      {/* Container */}
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Header */}
        <h2 className="text-4xl font-bold text-gray-900 text-center mb-12">
          GALLERY
        </h2>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-1">
          {images.map((item, index) => (
            <div
              key={index}
              className="group relative overflow-hidden aspect-[4/3] cursor-pointer rounded-lg"
            >
              {/* Background */}
              <div
                className={`absolute inset-0 ${item.bg}
                transition-all duration-700 ease-out
                group-hover:scale-110
                group-hover:rotate-1
                group-hover:brightness-75`}
              ></div>

              {/* Dark Overlay */}
              <div
                className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent
                opacity-0 group-hover:opacity-100
                transition duration-500"
              ></div>

              {/* Text */}
              <div
                className="absolute inset-0 flex items-center justify-center
                opacity-0 translate-y-6
                group-hover:opacity-100
                group-hover:translate-y-0
                transition-all duration-500"
              >
                <span className="text-white text-xl font-semibold tracking-wide">
                  {item.title}
                </span>
              </div>

              {/* Shadow on Hover */}
              <div
                className="absolute inset-0
                group-hover:shadow-2xl
                transition duration-500"
              ></div>
            </div>
          ))}
        </div>

        {/* Button */}
        <div className="flex justify-center mt-12">
          <a
            href="/Applications"
            className="bg-teal-500 text-gray-900 font-bold
            px-8 py-3 rounded-full
            transition-all duration-300
            hover:bg-teal-600
            hover:scale-110
            hover:shadow-xl"
          >
            VIEW ALL &gt;&gt;
          </a>
        </div>
      </div>
    </section>
  );
}
