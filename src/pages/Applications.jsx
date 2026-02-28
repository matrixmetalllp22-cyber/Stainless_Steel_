import React, { useState, useEffect, useRef } from "react";
import Masonry from "react-masonry-css";
import { motion, AnimatePresence } from "framer-motion";
import { ZoomIn, X, ChevronLeft, ChevronRight, Download, Maximize2, Grid3x3 } from "lucide-react";

// ... (Your images array remains the same)

const SPACING_OPTIONS = {
  TIGHT: { container: "-ml-2", column: "pl-2", item: "mb-2", gap: "0.5rem" },
  COMFORTABLE: { container: "-ml-4", column: "pl-4", item: "mb-4", gap: "1rem" },
  SPACIOUS: { container: "-ml-6", column: "pl-6", item: "mb-6", gap: "1.5rem" },
  WIDE: { container: "-ml-8", column: "pl-8", item: "mb-8", gap: "2rem" }
};

// IMPROVED BREAKPOINTS: More granular for modern devices
const breakpointColumnsObj = {
  default: 4,
  1536: 4, // 2xl
  1280: 3, // xl
  1024: 3, // lg
  768: 2,  // md
  640: 2,  // sm
  480: 1   // xs
};

export default function PhotoGalleryMasonry() {
  const [currentIndex, setCurrentIndex] = useState(null);
  const [touchStartX, setTouchStartX] = useState(null);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [isZoomed, setIsZoomed] = useState(false);
  const [spacing, setSpacing] = useState("COMFORTABLE");
  const lightboxRef = useRef(null);

  const currentSpacing = SPACING_OPTIONS[spacing];

  useEffect(() => {
    const handleKey = (e) => {
      if (currentIndex === null) return;
      if (e.key === "Escape") isFullscreen ? document.exitFullscreen() : setCurrentIndex(null);
      if (e.key === "ArrowRight") handleNext();
      if (e.key === "ArrowLeft") handlePrev();
      if (e.key === " ") { e.preventDefault(); setIsZoomed(!isZoomed); }
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [currentIndex, isFullscreen, isZoomed]);

  useEffect(() => {
    document.body.style.overflow = currentIndex !== null ? "hidden" : "auto";
  }, [currentIndex]);

  const handleNext = () => { setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1)); setIsZoomed(false); };
  const handlePrev = () => { setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1)); setIsZoomed(false); };

  const handleTouchStart = (e) => setTouchStartX(e.touches[0].clientX);
  const handleTouchEnd = (e) => {
    if (touchStartX === null) return;
    const diff = touchStartX - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 50) diff > 0 ? handleNext() : handlePrev();
    setTouchStartX(null);
  };

  const toggleFullscreen = async () => {
    if (!lightboxRef.current) return;
    if (!document.fullscreenElement) {
      await lightboxRef.current.requestFullscreen().catch(e => console.error(e));
    } else {
      await document.exitFullscreen();
    }
  };

  return (
    <>
      <section className="bg-gradient-to-b from-gray-50 to-white py-8 md:py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Header Section */}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-8 md:mb-12">
            <h2 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4">
              Photo Gallery
            </h2>
            <p className="text-base md:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed mb-6">
              Explore our collection of stunning photographs.
            </p>
            
            {/* Responsive Spacing Controls */}
            <div className="inline-flex flex-wrap justify-center items-center gap-2 bg-white/80 backdrop-blur-sm rounded-2xl md:rounded-full px-3 py-2 shadow-lg border border-gray-200">
              <div className="flex items-center gap-2 px-2 border-r border-gray-200 mr-2">
                <Grid3x3 className="w-4 h-4 text-gray-600" />
                <span className="hidden sm:inline text-gray-700 text-sm font-medium">Spacing</span>
              </div>
              <div className="flex gap-1">
                {Object.keys(SPACING_OPTIONS).map((key) => (
                  <button
                    key={key}
                    onClick={() => setSpacing(key)}
                    className={`px-2 md:px-3 py-1 rounded-full text-xs md:text-sm font-medium transition-all ${
                      spacing === key ? 'bg-blue-500 text-white shadow-md' : 'text-gray-600 hover:bg-gray-100'
                    }`}
                  >
                    {key.charAt(0) + key.slice(1).toLowerCase()}
                  </button>
                ))}
              </div>
            </div>
          </motion.div>

          <Masonry
            breakpointCols={breakpointColumnsObj}
            className={`flex w-auto transition-all duration-300 ${currentSpacing.container}`}
            columnClassName={`transition-all duration-300 ${currentSpacing.column}`}
          >
            {images.map((src, idx) => (
              <motion.div
                key={`${src}-${idx}`}
                layoutId={`img-${idx}`}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className={`group relative overflow-hidden rounded-xl cursor-pointer ${currentSpacing.item}`}
                onClick={() => setCurrentIndex(idx)}
              >
                <img src={src} alt="" loading="lazy" className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105" />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <ZoomIn className="text-white w-8 h-8" />
                </div>
              </motion.div>
            ))}
          </Masonry>
        </div>
      </section>

      {/* LIGHTBOX */}
      <AnimatePresence>
        {currentIndex !== null && (
          <motion.div
            ref={lightboxRef}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black z-[9999] flex flex-col items-center justify-center touch-none"
            onClick={() => !isZoomed && setCurrentIndex(null)}
          >
            {/* Top Navigation Bar - Responsive Padding */}
            <div className="absolute top-0 w-full flex items-center justify-between p-4 md:p-6 bg-gradient-to-b from-black/70 to-transparent z-[100]">
              <button onClick={() => setCurrentIndex(null)} className="p-2 bg-white/10 rounded-full hover:bg-white/20 transition-colors">
                <X className="w-6 h-6 text-white" />
              </button>
              
              <div className="text-white font-medium text-sm md:text-base">
                {currentIndex + 1} / {images.length}
              </div>

              <div className="flex gap-2">
                <button onClick={(e) => {e.stopPropagation(); toggleFullscreen();}} className="p-2 bg-white/10 rounded-full">
                  <Maximize2 className="w-5 h-5 text-white" />
                </button>
              </div>
            </div>

            {/* Desktop Navigation Arrows - Hidden on Small Mobile */}
            <button 
              onClick={(e) => { e.stopPropagation(); handlePrev(); }}
              className="hidden md:flex absolute left-6 p-4 rounded-full bg-white/5 hover:bg-white/10 text-white z-[100]"
            >
              <ChevronLeft size={32} />
            </button>
            <button 
              onClick={(e) => { e.stopPropagation(); handleNext(); }}
              className="hidden md:flex absolute right-6 p-4 rounded-full bg-white/5 hover:bg-white/10 text-white z-[100]"
            >
              <ChevronRight size={32} />
            </button>

            {/* Main Image Container */}
            <motion.div
              className="relative w-full h-full flex items-center justify-center p-2 md:p-12"
              onTouchStart={handleTouchStart}
              onTouchEnd={handleTouchEnd}
            >
              <motion.img
                key={currentIndex}
                src={images[currentIndex]}
                animate={{ scale: isZoomed ? 1.5 : 1 }}
                onClick={(e) => { e.stopPropagation(); setIsZoomed(!isZoomed); }}
                className={`max-w-full max-h-full object-contain shadow-2xl transition-transform cursor-pointer ${isZoomed ? 'scale-150' : 'scale-100'}`}
              />
            </motion.div>

            {/* Bottom Mobile UI */}
            <div className="absolute bottom-8 flex flex-col items-center gap-4 md:hidden">
               <p className="text-white/50 text-xs tracking-widest">SWIPE TO NAVIGATE</p>
               <button 
                onClick={(e) => {e.stopPropagation(); setIsZoomed(!isZoomed)}}
                className="px-6 py-2 bg-white/10 border border-white/20 rounded-full text-white text-sm"
               >
                {isZoomed ? "Reset Zoom" : "Double Tap to Zoom"}
               </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}