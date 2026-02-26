import React, { useState, useEffect, useRef } from "react";
import Masonry from "react-masonry-css";
import { motion, AnimatePresence } from "framer-motion";
import { ZoomIn, X, ChevronLeft, ChevronRight, Download, Maximize2, Grid3x3 } from "lucide-react";

const images = [
  "/Images/application01.jpg",
  "/Images/application02.jpg",
  "/Images/application03.jpg",
  "/Images/application04.jpg",
  "/Images/application05.jpg",
  "/Images/application06.jpg",
  "/Images/application07.jpg",
  "/Images/application09.png",
  "/Images/application08.png",
  "/Images/application11.jpg",
  "/Images/application01.jpg",
  "/Images/application02.jpg",
  "/Images/application03.jpg",
  "/Images/application04.jpg",
  "/Images/application05.jpg",
  "/Images/application06.jpg",
  "/Images/application07.jpg",
  "/Images/application09.png",
  "/Images/application08.png",
  "/Images/application11.jpg",
  "/Images/application12.webp",
  "/Images/application13.webp",
  "/Images/application14.webp",
  
];

// Customizable spacing options
const SPACING_OPTIONS = {
  TIGHT: {
    container: "-ml-2",
    column: "pl-2",
    item: "mb-2",
    gap: "0.5rem"
  },
  COMFORTABLE: {
    container: "-ml-4",
    column: "pl-4",
    item: "mb-4",
    gap: "1rem"
  },
  SPACIOUS: {
    container: "-ml-6",
    column: "pl-6",
    item: "mb-6",
    gap: "1.5rem"
  },
  WIDE: {
    container: "-ml-8",
    column: "pl-8",
    item: "mb-8",
    gap: "2rem"
  }
};

const breakpointColumnsObj = {
  default: 4,
  1400: 3,
  1024: 2,
  640: 1,
};

export default function PhotoGalleryMasonry() {
  const [currentIndex, setCurrentIndex] = useState(null);
  const [touchStartX, setTouchStartX] = useState(null);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [isZoomed, setIsZoomed] = useState(false);
  const [spacing, setSpacing] = useState("COMFORTABLE");
  const lightboxRef = useRef(null);

  const currentSpacing = SPACING_OPTIONS[spacing];

  // ESC + Arrow key support
  useEffect(() => {
    const handleKey = (e) => {
      if (currentIndex === null) return;

      if (e.key === "Escape") {
        if (isFullscreen) {
          document.exitFullscreen();
          setIsFullscreen(false);
        } else {
          setCurrentIndex(null);
        }
      }
      if (e.key === "ArrowRight") handleNext();
      if (e.key === "ArrowLeft") handlePrev();
      if (e.key === " ") {
        e.preventDefault();
        setIsZoomed(!isZoomed);
      }
    };

    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [currentIndex, isFullscreen, isZoomed]);

  // Prevent body scroll when modal is open
  useEffect(() => {
    document.body.style.overflow = currentIndex !== null ? "hidden" : "auto";
  }, [currentIndex]);

  // Fullscreen change handler
  useEffect(() => {
    const handleFullscreenChange = () => {
      setIsFullscreen(!!document.fullscreenElement);
    };

    document.addEventListener("fullscreenchange", handleFullscreenChange);
    return () => document.removeEventListener("fullscreenchange", handleFullscreenChange);
  }, []);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    setIsZoomed(false);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
    setIsZoomed(false);
  };

  // Swipe handlers
  const handleTouchStart = (e) => {
    setTouchStartX(e.touches[0].clientX);
  };

  const handleTouchEnd = (e) => {
    if (touchStartX === null) return;

    const touchEndX = e.changedTouches[0].clientX;
    const diff = touchStartX - touchEndX;

    if (Math.abs(diff) > 50) {
      if (diff > 0) handleNext();
      else handlePrev();
    }

    setTouchStartX(null);
  };

  const toggleFullscreen = async () => {
    if (!lightboxRef.current) return;

    try {
      if (!document.fullscreenElement) {
        await lightboxRef.current.requestFullscreen();
        setIsFullscreen(true);
      } else {
        await document.exitFullscreen();
        setIsFullscreen(false);
      }
    } catch (err) {
      console.error("Fullscreen error:", err);
    }
  };

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = images[currentIndex];
    link.download = `image-${currentIndex + 1}.jpg`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <>
      {/* GALLERY */}
      <section className="bg-gradient-to-b from-gray-50 to-white py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4">
              Photo Gallery
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed mb-8">
              Explore our collection of stunning photographs. Click to view in full resolution with immersive details.
            </p>
            
            {/* Spacing Controls */}
            <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm rounded-full px-4 py-2 shadow-lg border border-gray-200">
              <Grid3x3 className="w-5 h-5 text-gray-600" />
              <span className="text-gray-700 font-medium mr-2">Spacing:</span>
              <div className="flex gap-1">
                {Object.entries(SPACING_OPTIONS).map(([key, value]) => (
                  <button
                    key={key}
                    onClick={() => setSpacing(key)}
                    className={`px-3 py-1 rounded-full text-sm font-medium transition-all ${
                      spacing === key
                        ? 'bg-blue-500 text-white shadow-md'
                        : 'text-gray-600 hover:bg-gray-100'
                    }`}
                    title={`${value.gap} gap`}
                  >
                    {key.toLowerCase()}
                  </button>
                ))}
              </div>
            </div>
            
            <div className="mt-6 flex justify-center gap-4">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 text-blue-600 text-sm">
                <span className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></span>
                {images.length} Photos
              </span>
            </div>
          </motion.div>

          {/* Masonry Grid with adjustable spacing */}
          <Masonry
            breakpointCols={breakpointColumnsObj}
            className={`flex w-auto transition-all duration-300 ${currentSpacing.container}`}
            columnClassName={`transition-all duration-300 ${currentSpacing.column}`}
          >
            {images.map((src, idx) => (
              <motion.div
                key={`${src}-${idx}`}
                layoutId={`img-${idx}`}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{
                  duration: 0.5,
                  delay: (idx % 6) * 0.1,
                  type: "spring",
                  stiffness: 100,
                }}
                className={`group relative overflow-hidden rounded-xl cursor-pointer transition-all duration-300 ${currentSpacing.item}`}
                onClick={() => setCurrentIndex(idx)}
              >
                <div className="aspect-[4/3] overflow-hidden rounded-xl">
                  <img
                    src={src}
                    alt={`Gallery ${idx + 1}`}
                    loading="lazy"
                    className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110 group-hover:brightness-110"
                  />
                </div>

                {/* Enhanced Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 rounded-xl">
                  <div className="absolute bottom-0 left-0 right-0 p-4 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="text-white font-semibold text-sm mb-0.5">
                          Image {idx + 1}
                        </h3>
                        <p className="text-gray-300 text-xs">Click to view details</p>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-8 h-8 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                          <ZoomIn className="w-4 h-4 text-white" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Subtle border effect */}
                <div className="absolute inset-0 border-2 border-white/0 group-hover:border-white/20 rounded-xl transition-all duration-500" />
              </motion.div>
            ))}
          </Masonry>

          {/* Visual Spacing Preview */}
          <div className="mt-12 text-center">
            <div className="inline-flex items-center gap-3 bg-gray-50 rounded-lg px-6 py-3">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded bg-blue-500"></div>
                <span className="text-sm text-gray-600">Current spacing:</span>
              </div>
              <div className="flex items-center gap-4">
                {Object.entries(SPACING_OPTIONS).map(([key, value]) => (
                  <div
                    key={key}
                    className="flex items-center gap-2 cursor-pointer"
                    onClick={() => setSpacing(key)}
                  >
                    <div className={`w-4 h-4 rounded-full border-2 ${
                      spacing === key ? 'border-blue-500 bg-blue-500' : 'border-gray-300'
                    }`}></div>
                    <span className={`text-sm font-medium ${
                      spacing === key ? 'text-blue-600' : 'text-gray-500'
                    }`}>
                      {key.toLowerCase()}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* LIGHTBOX */}
      <AnimatePresence mode="wait">
        {currentIndex !== null && (
          <motion.div
            ref={lightboxRef}
            className="fixed inset-0 bg-gradient-to-br from-gray-900 via-black to-gray-900 z-[9999] flex items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => !isZoomed && setCurrentIndex(null)}
          >
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-5">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.1)_1px,transparent_0)] bg-[length:40px_40px]" />
            </div>

            {/* Top Bar */}
            <div className="absolute top-0 left-0 right-0 flex items-center justify-between p-6 bg-gradient-to-b from-black/80 to-transparent z-50">
              <div className="flex items-center gap-4">
                <button
                  onClick={() => setCurrentIndex(null)}
                  className="group relative p-3 rounded-full bg-black/40 backdrop-blur-xl hover:bg-black/60 transition-all duration-300"
                >
                  <X className="w-6 h-6 text-white group-hover:scale-110 transition-transform" />
                  <div className="absolute -bottom-10 left-1/2 transform -translate-x-1/2 bg-black/80 text-white px-3 py-1 rounded text-xs opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                    Close (ESC)
                  </div>
                </button>

                <div className="hidden sm:block text-white/60 text-sm">
                  Navigate with ← → keys • Space to zoom • ESC to close
                </div>
              </div>

              <div className="flex items-center gap-3">
                <button
                  onClick={handleDownload}
                  className="group relative p-3 rounded-full bg-black/40 backdrop-blur-xl hover:bg-black/60 transition-all duration-300"
                >
                  <Download className="w-5 h-5 text-white group-hover:scale-110 transition-transform" />
                  <div className="absolute -bottom-10 left-1/2 transform -translate-x-1/2 bg-black/80 text-white px-3 py-1 rounded text-xs opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                    Download
                  </div>
                </button>

                <button
                  onClick={toggleFullscreen}
                  className="group relative p-3 rounded-full bg-black/40 backdrop-blur-xl hover:bg-black/60 transition-all duration-300"
                >
                  <Maximize2 className="w-5 h-5 text-white group-hover:scale-110 transition-transform" />
                  <div className="absolute -bottom-10 left-1/2 transform -translate-x-1/2 bg-black/80 text-white px-3 py-1 rounded text-xs opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                    {isFullscreen ? "Exit Fullscreen" : "Fullscreen"}
                  </div>
                </button>
              </div>
            </div>

            {/* Image Counter */}
            <div className="absolute top-6 left-1/2 transform -translate-x-1/2 bg-black/60 backdrop-blur-xl text-white px-6 py-3 rounded-full text-lg font-medium z-50 border border-white/10 shadow-2xl">
              <span className="text-blue-300">{currentIndex + 1}</span>
              <span className="mx-2 text-white/40">/</span>
              <span>{images.length}</span>
            </div>

            {/* Navigation Buttons */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                handlePrev();
              }}
              className="absolute left-6 sm:left-10 z-50 group"
            >
              <div className="p-4 rounded-full bg-black/40 backdrop-blur-xl hover:bg-black/60 transition-all duration-300 border border-white/10 shadow-2xl">
                <ChevronLeft className="w-8 h-8 text-white group-hover:-translate-x-1 transition-transform" />
              </div>
              <div className="absolute left-full ml-4 top-1/2 transform -translate-y-1/2 bg-black/80 text-white px-3 py-1 rounded text-sm opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                Previous
              </div>
            </button>

            <button
              onClick={(e) => {
                e.stopPropagation();
                handleNext();
              }}
              className="absolute right-6 sm:right-10 z-50 group"
            >
              <div className="p-4 rounded-full bg-black/40 backdrop-blur-xl hover:bg-black/60 transition-all duration-300 border border-white/10 shadow-2xl">
                <ChevronRight className="w-8 h-8 text-white group-hover:translate-x-1 transition-transform" />
              </div>
              <div className="absolute right-full mr-4 top-1/2 transform -translate-y-1/2 bg-black/80 text-white px-3 py-1 rounded text-sm opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                Next
              </div>
            </button>

            {/* Main Image */}
            <motion.div
              key={currentIndex}
              layoutId={`img-${currentIndex}`}
              className="relative max-w-full max-h-full mx-4"
              onClick={(e) => {
                e.stopPropagation();
                setIsZoomed(!isZoomed);
              }}
              onTouchStart={handleTouchStart}
              onTouchEnd={handleTouchEnd}
              animate={{
                scale: isZoomed ? 1.5 : 1,
                cursor: isZoomed ? "zoom-out" : "zoom-in",
              }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            >
              <div className="relative rounded-xl sm:rounded-2xl overflow-hidden shadow-2xl border-4 border-white/5">
                <img
                  src={images[currentIndex]}
                  alt="Full view"
                  className="max-h-[70vh] max-w-[90vw] sm:max-h-[80vh] sm:max-w-[85vw] object-contain"
                />
                {isZoomed && (
                  <div className="absolute top-4 left-1/2 transform -translate-x-1/2 bg-black/70 text-white px-4 py-2 rounded-full text-sm font-medium">
                    Zoomed • Click to reset
                  </div>
                )}
              </div>
            </motion.div>

            {/* Bottom Controls */}
            <div className="absolute bottom-6 left-0 right-0 flex items-center justify-center gap-4 z-50">
              <button
                onClick={() => setIsZoomed(!isZoomed)}
                className={`px-6 py-3 rounded-full backdrop-blur-xl transition-all duration-300 border ${
                  isZoomed
                    ? "bg-blue-500/20 border-blue-400/30 text-blue-300"
                    : "bg-black/40 border-white/10 text-white hover:bg-black/60"
                }`}
              >
                {isZoomed ? "Reset Zoom" : "Zoom In (Space)"}
              </button>
              
              <div className="hidden sm:flex items-center gap-6 text-white/60 text-sm">
                <span>← → Navigate</span>
                <span>•</span>
                <span>Space Zoom</span>
                <span>•</span>
                <span>ESC Close</span>
              </div>
            </div>

            {/* Mobile Swipe Hint */}
            <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2 bg-white/10 backdrop-blur-xl text-white px-6 py-3 rounded-full text-sm font-medium sm:hidden animate-pulse">
              ← Swipe to navigate →
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}