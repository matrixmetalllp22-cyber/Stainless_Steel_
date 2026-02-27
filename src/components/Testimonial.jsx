import React, { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

/* ✅ import from data file */
import { testimonials } from "../Data/testimonials";

export default function TestimonialSlider() {
  const [index, setIndex] = useState(0);
  const [progress, setProgress] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  const next = useCallback(() => {
    if (isAnimating) return;
    setIsAnimating(true);
    setIndex((prev) => (prev + 1) % testimonials.length);
    setProgress(0);
    setTimeout(() => setIsAnimating(false), 650);
  }, [isAnimating]);

  const prev = useCallback(() => {
    if (isAnimating) return;
    setIsAnimating(true);
    setIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    setProgress(0);
    setTimeout(() => setIsAnimating(false), 650);
  }, [isAnimating]);

  const goToSlide = useCallback(
    (slideIndex) => {
      if (isAnimating || slideIndex === index) return;
      setIsAnimating(true);
      setIndex(slideIndex);
      setProgress(0);
      setTimeout(() => setIsAnimating(false), 650);
    },
    [index, isAnimating]
  );

  /* Auto rotation with pause on hover */
  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (isPaused) return prev;
        if (prev >= 100) {
          next();
          return 0;
        }
        return prev + 100 / 50; // ~5 second cycle
      });
    }, 100);

    return () => clearInterval(interval);
  }, [next, isPaused]);

  /* Keyboard nav */
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [prev, next]);

  /* Swipe */
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);
  const minSwipeDistance = 50;

  const onTouchStart = (e) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e) => setTouchEnd(e.targetTouches[0].clientX);

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    if (distance > minSwipeDistance) next();
    if (distance < -minSwipeDistance) prev();
  };

  const current = testimonials[index];

  // Animation variants for staggered children
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
  };

  return (
    <section
      className="relative w-full min-h-[70vh] flex items-center justify-center bg-gradient-to-br from-slate-50 via-white to-slate-100 px-4 py-16 overflow-hidden"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onTouchStart={onTouchStart}
      onTouchMove={onTouchMove}
      onTouchEnd={onTouchEnd}
    >
      {/* Progress bar */}
      <div className="absolute top-0 left-0 w-full h-0.5 bg-slate-200/50 overflow-hidden">
        <motion.div
          className="h-full bg-gradient-to-r from-indigo-300 via-purple-400 to-pink-300 shadow-[0_0_8px_rgba(168,85,247,0.6)]"
          style={{ width: `${progress}%` }}
          transition={{ duration: 0.1 }}
        />
      </div>

      {/* Counter */}
      <div className="absolute top-4 right-4 bg-white/70 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-mono tracking-wider text-slate-500 border border-slate-200/60 shadow-sm">
        {String(index + 1).padStart(2, "0")} / {String(testimonials.length).padStart(2, "0")}
      </div>

      {/* Navigation arrows */}
      <button
        onClick={prev}
        className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/80 backdrop-blur-sm text-slate-600 shadow-md hover:shadow-xl border border-white/60 hover:scale-110 active:scale-95 transition-all duration-200 z-20"
        aria-label="Previous"
      >
        <FiChevronLeft className="w-4 h-4" />
      </button>

      <button
        onClick={next}
        className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/80 backdrop-blur-sm text-slate-600 shadow-md hover:shadow-xl border border-white/60 hover:scale-110 active:scale-95 transition-all duration-200 z-20"
        aria-label="Next"
      >
        <FiChevronRight className="w-4 h-4" />
      </button>

      {/* Card */}
      <AnimatePresence mode="wait">
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: -20, scale: 0.98 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-2xl w-full bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl p-8 md:p-10 border border-white/40 hover:shadow-2xl transition-shadow duration-300"
          whileHover={{ scale: 1.02 }}
        >
          {/* Small quote accent */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.1, duration: 0.4 }}
            className="text-5xl leading-none font-serif text-indigo-200/60 select-none mb-1"
          >
            “
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="relative z-10"
          >
            {current.title && (
              <motion.h3 variants={itemVariants} className="text-xl md:text-2xl font-medium text-slate-800 tracking-tight mb-4">
                {current.title}
              </motion.h3>
            )}

            <motion.blockquote variants={itemVariants} className="text-lg md:text-xl leading-relaxed text-slate-600 font-light">
              {current.text}
            </motion.blockquote>

            {current.industry && (
              <motion.div variants={itemVariants} className="mt-6 inline-flex items-center gap-2 px-4 py-2 bg-slate-800 text-white text-xs font-medium rounded-full shadow-sm">
                <span className="text-base opacity-80">🏢</span>
                <span>{current.industry}</span>
              </motion.div>
            )}
          </motion.div>
        </motion.div>
      </AnimatePresence>

      {/* Dots */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-20">
        {testimonials.map((_, i) => (
          <button
            key={i}
            onClick={() => goToSlide(i)}
            className={`h-1.5 rounded-full transition-all duration-300 ${
              i === index ? "w-5 bg-slate-800" : "w-1.5 bg-slate-300 hover:bg-slate-400"
            }`}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>
    </section>
  );
}