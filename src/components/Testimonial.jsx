import React, { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { FaQuoteLeft } from "react-icons/fa";

/* ✅ Ensure this path matches your project structure */
import { testimonials } from "../Data/testimonials";

export default function TestimonialSlider() {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(0); 
  const [progress, setProgress] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  
  const [touchStart, setTouchStart] = useState(null);

  const ANIMATION_DURATION = 0.4;
  const LOCK_TIME = 450;
  const AUTO_PLAY_SPEED = 1500; // 6 seconds for longer reading time
  const TICK_RATE = 50;

  const next = useCallback(() => {
    if (isAnimating) return;
    setDirection(1);
    setIsAnimating(true);
    setIndex((prev) => (prev + 1) % testimonials.length);
    setProgress(0);
    setTimeout(() => setIsAnimating(false), LOCK_TIME);
  }, [isAnimating]);

  const prev = useCallback(() => {
    if (isAnimating) return;
    setDirection(-1);
    setIsAnimating(true);
    setIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    setProgress(0);
    setTimeout(() => setIsAnimating(false), LOCK_TIME);
  }, [isAnimating]);

  const goToSlide = (slideIndex) => {
    if (isAnimating || slideIndex === index) return;
    setDirection(slideIndex > index ? 1 : -1);
    setIsAnimating(true);
    setIndex(slideIndex);
    setProgress(0);
    setTimeout(() => setIsAnimating(false), LOCK_TIME);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      if (isPaused) return;
      setProgress((prev) => {
        if (prev >= 100) {
          next();
          return 0;
        }
        return prev + (100 / (AUTO_PLAY_SPEED / TICK_RATE));
      });
    }, TICK_RATE);
    return () => clearInterval(interval);
  }, [next, isPaused]);

  // Swipe Logic
  const onTouchStart = (e) => setTouchStart(e.targetTouches[0].clientX);
  const onTouchEnd = (e) => {
    if (!touchStart) return;
    const touchEnd = e.changedTouches[0].clientX;
    const distance = touchStart - touchEnd;
    if (distance > 50) next();
    if (distance < -50) prev();
  };

  const current = testimonials[index];

  return (
    <section
      className="relative w-full min-h-[700px] lg:h-[85vh] flex items-center justify-center bg-[#020617] px-4 sm:px-10 py-16 overflow-hidden"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onTouchStart={onTouchStart}
      onTouchEnd={onTouchEnd}
    >
      {/* Background Decor */}
      <div className="absolute inset-0 pointer-events-none opacity-40">
        <div className="absolute top-[-10%] left-[-5%] w-[400px] h-[400px] bg-indigo-600/20 blur-[100px] rounded-full" />
        <div className="absolute bottom-[-10%] right-[-5%] w-[400px] h-[400px] bg-blue-600/20 blur-[100px] rounded-full" />
      </div>

      <div className="relative w-full max-w-6xl mx-auto z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-8">
          
          {/* LEFT: TEXT CONTENT */}
          <div className="w-full lg:w-1/2 text-center lg:text-left space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-bold uppercase tracking-widest"
            >
              <span className="w-2 h-2 rounded-full bg-indigo-500 animate-pulse" />
              Success Stories
            </motion.div>
            
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight">
              Our partners <br /> speak <span className="text-indigo-500">volumes.</span>
            </h2>
            
            <p className="text-slate-400 text-base md:text-lg max-w-md mx-auto lg:mx-0 leading-relaxed">
              Real results from global manufacturers who transformed their production with Matrix Metal solutions.
            </p>
            
            <div className="hidden lg:flex items-center gap-4 pt-4">
              <button onClick={prev} className="nav-btn"><FiChevronLeft size={22} /></button>
              <button onClick={next} className="nav-btn"><FiChevronRight size={22} /></button>
            </div>
          </div>

          {/* RIGHT: THE TESTIMONIAL CARD */}
          <div className="w-full lg:w-1/2 flex justify-center lg:justify-end items-center relative min-h-[400px]">
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={index}
                custom={direction}
                initial={{ opacity: 0, x: direction > 0 ? 50 : -50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: direction > 0 ? -50 : 50 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                className="w-full max-w-[500px] bg-white/[0.03] backdrop-blur-xl border border-white/10 p-8 md:p-10 rounded-3xl shadow-2xl flex flex-col justify-between"
              >
                <div>
                  <FaQuoteLeft className="text-indigo-500/30 text-4xl mb-6" />
                  <p className="text-slate-200 text-base md:text-lg leading-relaxed font-medium mb-8">
                    {current.text}
                  </p>
                </div>

                <div className="flex items-center gap-4 border-t border-white/10 pt-6">
                  <div className="h-12 w-12 shrink-0 rounded-full bg-gradient-to-br from-indigo-600 to-blue-600 flex items-center justify-center text-white font-bold text-lg shadow-inner">
                    {current.author?.charAt(0) || "M"}
                  </div>
                  <div className="overflow-hidden">
                    <h4 className="text-white font-bold text-lg truncate">
                      {current.author || "Industry Lead"}
                    </h4>
                    <p className="text-indigo-400 text-xs font-semibold uppercase tracking-wider">
                      {current.industry}
                    </p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* BOTTOM: PROGRESS & MOBILE NAV */}
        <div className="mt-16 flex flex-col sm:flex-row items-center justify-between gap-8 border-t border-white/5 pt-8">
          <div className="flex gap-3">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => goToSlide(i)}
                className={`h-1.5 transition-all duration-500 rounded-full ${
                  i === index ? "w-10 bg-indigo-500" : "w-3 bg-white/20 hover:bg-white/40"
                }`}
              />
            ))}
          </div>

          <div className="flex lg:hidden gap-4">
            <button onClick={prev} className="nav-btn-mobile"><FiChevronLeft size={20} /></button>
            <button onClick={next} className="nav-btn-mobile"><FiChevronRight size={20} /></button>
          </div>

          <div className="hidden sm:block text-slate-500 font-mono text-sm tracking-widest">
            0{index + 1} / 0{testimonials.length}
          </div>
        </div>
      </div>

      {/* Inline Styles for Buttons */}
      <style jsx>{`
        .nav-btn {
          @apply p-3.5 rounded-xl bg-white/5 border border-white/10 text-white 
          hover:bg-indigo-600 hover:border-indigo-600 transition-all active:scale-95;
        }
        .nav-btn-mobile {
          @apply p-3 rounded-xl bg-white/5 border border-white/10 text-white active:bg-indigo-600;
        }
      `}</style>
    </section>
  );
}