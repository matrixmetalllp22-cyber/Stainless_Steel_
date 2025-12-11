// import React, { useState, useEffect } from "react";
// import Masonry from "react-masonry-css";
// import { motion, AnimatePresence } from "framer-motion";
// import { X, ZoomIn } from "lucide-react"; // Optional: using lucide icons

// const certificates = [
//   { id: 1, image: "/Images/prague.jpg" },
//   { id: 2, image: "/Images/bridge-5624104_1920.jpg" },
//   { id: 3, image: "/Images/button-4927935_1920.jpg" },
//   { id: 4, image: "/Images/firenze-9292729_1280.jpg" },
//   { id: 5, image: "/Images/prague.jpg" },
//   { id: 6, image: "/Images/prague.jpg" },
//   { id: 7, image: "/Images/bridge-5624104_1920.jpg" },
//   { id: 8, image: "/Images/button-4927935_1920.jpg" },
//   { id: 9, image: "/Images/firenze-9292729_1280.jpg" },
//   { id: 10, image: "/Images/prague.jpg" },
// ];

// // Responsive Masonry Breakpoints
// const breakpointColumnsObj = {
//   default: 5,
//   1536: 4,
//   1280: 4,
//   1024: 3,
//   768: 2,
//   640: 1,
// };

// export default function PhotoGalleryMasonry() {
//   const [selected, setSelected] = useState(null);

//   // Close modal with ESC key
//   useEffect(() => {
//     const handleEsc = (e) => {
//       if (e.key === "Escape") setSelected(null);
//     };
//     window.addEventListener("keydown", handleEsc);
//     return () => window.removeEventListener("keydown", handleEsc);
//   }, []);

//   return (
//     <>
//       <section className="bg-gradient-to-b from-gray-50 via-white to-gray-100 py-16 px-4 sm:px-6 lg:px-8 min-h-screen">
//         <div className="max-w-7xl mx-auto">
//           {/* Heading */}
//           <motion.div
//             initial={{ opacity: 0, y: -20 }}
//             animate={{ opacity: 1, y: 0 }}
//             className="text-center mb-12"
//           >
//             <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
//               Photo Gallery
//             </h2>
//             <p className="text-lg text-gray-600 max-w-2xl mx-auto">
//               Click on any image to view in full size
//             </p>
//           </motion.div>

//           {/* Masonry Grid */}
//           <Masonry
//             breakpointCols={breakpointColumnsObj}
//             className="flex -ml-4 w-auto"
//             columnClassName="pl-4 bg-clip-padding"
//           >
//             {certificates.map((cert, idx) => (
//               <motion.div
//                 key={`${cert.id}-${idx}`}
//                 layout
//                 initial={{ opacity: 0, scale: 0.9 }}
//                 animate={{ opacity: 1, scale: 1 }}
//                 transition={{ duration: 0.5, delay: idx * 0.05 }}
//                 className="group relative mb-4 overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 cursor-zoom-in bg-white"
//                 onClick={() => setSelected(cert.image)}
//               >
//                 {/* Image Container */}
//                 <div className="overflow-hidden">
//                   <img
//                     src={cert.image}
//                     alt={`Gallery item ${cert.id}`}
//                     className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
//                     loading="lazy"
//                   />
//                 </div>

//                 {/* Overlay on Hover */}
//                 <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-400 flex items-center justify-center opacity-0 group-hover:opacity-100">
//                   <ZoomIn className="w-12 h-12 text-white opacity-80" />
//                 </div>

//                 {/* Shimmer Loading Effect */}
//                 <div className="absolute inset-0 bg-gradient-to-t from-transparent via-transparent to-white/20 animate-shimmer"></div>
//               </motion.div>
//             ))}
//           </Masonry>
//         </div>
//       </section>

//       {/* Enhanced Lightbox Modal */}
//       <AnimatePresence>
//         {selected && (
//           <motion.div
//             className="fixed inset-0 bg-black/90 backdrop-blur-lg z-[9999] flex items-center justify-center p-4 md:p-8"
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             exit={{ opacity: 0 }}
//             onClick={() => setSelected(null)}
//           >
//             {/* Close Button */}
//             <button
//               onClick={() => setSelected(null)}
//               className="absolute top-6 right-6 text-white hover:text-gray-300 transition z-50"
//               aria-label="Close"
//             >
//               <X className="w-10 h-10 drop-shadow-lg" />
//             </button>

//             {/* Zoomed Image */}
//             <motion.div
//               onClick={(e) => e.stopPropagation()} // Prevent close when clicking image
//               className="relative max-w-full max-h-full"
//               initial={{ scale: 0.7, rotate: -5 }}
//               animate={{ scale: 1, rotate: 0 }}
//               exit={{ scale: 0.7, opacity: 0 }}
//               transition={{ type: "spring", damping: 25, stiffness: 300 }}
//             >
//               <img
//                 src={selected}
//                 alt="Enlarged view"
//                 className="max-h-[92vh] max-w-full rounded-2xl shadow-2xl border-4 border-white/20 object-contain"
//               />

//               {/* Optional: Hint for mobile */}
//               <p className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white/70 text-sm bg-black/50 px-4 py-2 rounded-full backdrop-blur">
//                 Pinch to zoom
//               </p>
//             </motion.div>
//           </motion.div>
//         )}
//       </AnimatePresence>

//       {/* Optional: Custom Shimmer CSS */}
//       <style jsx>{`
//         @keyframes shimmer {
//           0% {
//             transform: translateX(-100%);
//           }
//           100% {
//             transform: translateX(100%);
//           }
//         }
//         .animate-shimmer {
//           background: linear-gradient(
//             90deg,
//             transparent 0%,
//             rgba(255, 255, 255, 0.1) 50%,
//             transparent 100%
//           );
//           background-size: 200% 100%;
//           animation: shimmer 3s infinite;
//         }
//       `}</style>
//     </>
//   );
// }




import React, { useState, useEffect } from "react";
import Masonry from "react-masonry-css";
import { motion, AnimatePresence } from "framer-motion";
import { ZoomIn, X } from "lucide-react";

const images = [
  "/Images/prague.jpg",
  "/Images/bridge-5624104_1920.jpg",
  "/Images/button-4927935_1920.jpg",
  "/Images/firenze-9292729_1280.jpg",
  "/Images/prague.jpg",
  "/Images/prague.jpg",
  "/Images/bridge-5624104_1920.jpg",
  "/Images/button-4927935_1920.jpg",
  "/Images/firenze-9292729_1280.jpg",
  "/Images/prague.jpg",
];

// PERFECT RESPONSIVE BREAKPOINTS 
const breakpointColumnsObj = {
  default: 3,     // Large screens: 3 beautiful columns
  1100: 3,
  900: 2,         // Tablets: 2 columns
  600: 1,         // Mobile: 1 column (full width, stunning)
};

export default function PhotoGalleryMasonry() {
  const [selected, setSelected] = useState(null);

  useEffect(() => {
    const handleEsc = (e) => e.key === "Escape" && setSelected(null);
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, []);

  return (
    <>
      {/* PREMIUM SECTION */}
      <section className="bg-gray-50 py-20 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">

          {/* Elegant Heading */}
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-gray-900 mb-4">Photo Gallery</h2>
            <p className="text-xl text-gray-600">Click any image to view in full size</p>
          </div>

          {/* THE PERFECT MASONRY GRID */}
          <Masonry
            breakpointCols={breakpointColumnsObj}
            className="flex -ml-8 w-auto"           // Negative margin for perfect gaps
            columnClassName="pl-8"                  // Gap between columns
          >
            {images.map((src, idx) => (
              <motion.div
                key={idx}
                layoutId={`img-${idx}`}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: idx * 0.1 }}
                className="group relative mb-8 overflow-hidden rounded-2xl shadow-2xl cursor-pointer bg-white"
                onClick={() => setSelected({ src, idx })}
              >
                {/* Image with fixed aspect ratio */}
                <div className="aspect-[4/3] md:aspect-[5/4] overflow-hidden">
                  <img
                    src={src}
                    alt={`Gallery ${idx + 1}`}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                  />
                </div>

                {/* Premium hover overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-center justify-center">
                  <ZoomIn className="w-16 h-16 text-white drop-shadow-2xl" />
                </div>
              </motion.div>
            ))}
          </Masonry>
        </div>
      </section>

      {/* APPLE/UNSPLASH LEVEL LIGHTBOX */}
      <AnimatePresence>
        {selected && (
          <motion.div
            className="fixed inset-0 bg-black/95 backdrop-blur-2xl z-[9999] flex items-center justify-center p-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelected(null)}
          >
            {/* Close Button */}
            <button
              onClick={() => setSelected(null)}
              className="absolute top-6 right-6 text-white hover:text-orange-400 transition z-50"
            >
              <X className="w-12 h-12 drop-shadow-2xl" />
            </button>

            {/* Magic zoom from thumbnail */}
            <motion.div
              layoutId={`img-${selected.idx}`}
              className="relative max-w-full max-h-full"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={selected.src}
                alt="Full view"
                className="max-h-[92vh] max-w-[92vw] rounded-3xl shadow-2xl object-contain border-8 border-white/10"
              />
            </motion.div>

            {/* Mobile hint */}
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 bg-white/10 backdrop-blur-xl text-white px-6 py-3 rounded-full text-sm font-medium md:hidden">
              Pinch to zoom
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}