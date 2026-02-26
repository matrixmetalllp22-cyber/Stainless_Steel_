// Added AnimatePresence to the import below
import React, { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Layers,
  Activity,
  ThermometerSun,
  Sparkles,
  Flame,
  Focus,
  Scissors,
  EyeOff,
  Palette,
  ShieldCheck,
  ChevronRight,
  ChevronLeft,
  X,
  Play
} from "lucide-react";

export default function EurolamFilmBond1220() {
  const [activeFeature, setActiveFeature] = useState(0);
  const [modalOpen, setModalOpen] = useState(false);

  const features = [
    {
      title: "Precision Engineering",
      icon: <Layers className="w-8 h-8" />,
      desc: "Delivers high-performance film bonding through structural stability that ensures uniform lamination pressure and perfect tracking alignment.",
      detail: "Premium Lamination Quality"
    },
    {
      title: "Tension Regulation",
      icon: <Activity className="w-8 h-8" />,
      desc: "Advanced sensors prevent wrinkles and distortion. Synchronised feeding maintains film stability for defect-free application.",
      detail: "Zero-Distortion Feed"
    },
    {
      title: "Heated Roller Tech",
      icon: <ThermometerSun className="w-8 h-8" />,
      desc: "Temperature-controlled rollers activate adhesives with uniform heat distribution, preventing overheating while boosting bond strength.",
      detail: "Thermal Adhesion"
    },
    {
      title: "Surface Preparation",
      icon: <Sparkles className="w-8 h-8" />,
      desc: "Integrated pre-treatment modules eliminate contaminants, significantly increasing bonding reliability and long-term durability.",
      detail: "Pure-Bond Pre-treatment"
    },
    {
      title: "Stabilisation Zones",
      icon: <Flame className="w-8 h-8" />,
      desc: "Controlled heating zones maintain thermal uniformity, preventing material distortion and ensuring consistent process output.",
      detail: "Climate-Controlled Zones"
    },
    {
      title: "Anti-Bubble Control",
      icon: <Focus className="w-8 h-8" />,
      desc: "Pressure-regulated rollers eliminate air entrapment, ensuring flawless surface clarity and smooth, bubble-free finishes.",
      detail: "Crystal-Clear Finish"
    },
    {
      title: "Edge Precision",
      icon: <Scissors className="w-8 h-8" />,
      desc: "Precision trimming and alignment prevent edge lifting, ensuring clean borders and high aesthetic quality for architectural panels.",
      detail: "Seamless Bordering"
    },
    {
      title: "Surface Protection",
      icon: <EyeOff className="w-8 h-8" />,
      desc: "Low-contact guidance preserves decorative finishes. Gloss retention is maximised while minimizing the risk of surface damage.",
      detail: "Non-Contact Flow"
    },
    {
      title: "Application Versatility",
      icon: <Palette className="w-8 h-8" />,
      desc: "Supports decorative and protective films for appliances and panels, enhancing both corrosion resistance and aesthetic value.",
      detail: "Multi-Film Support"
    },
    {
      title: "Adhesion Durability",
      icon: <ShieldCheck className="w-8 h-8" />,
      desc: "Bond integrity ensures environmental resistance and prevents delamination, increasing the overall lifespan of the product.",
      detail: "Lifecycle Integrity"
    }
  ];

  const nextFeature = () => setActiveFeature((prev) => (prev + 1) % features.length);
  const prevFeature = () => setActiveFeature((prev) => (prev - 1 + features.length) % features.length);

  return (
    <div className="bg-white text-slate-900 min-h-screen font-sans overflow-x-hidden">
      
      {/* HERO SECTION */}
      <section className="relative h-screen flex items-center px-6 md:px-24 overflow-hidden">
        {/* Background Image Layer */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=2000&q=80" 
            className="w-full h-full object-cover grayscale opacity-10"
            alt="Industrial Lamination"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-white via-white/80 to-transparent" />
        </div>

        <div className="relative z-20 max-w-4xl">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-3 text-blue-600 font-bold tracking-widest text-xs uppercase mb-6"
          >
            <span className="w-8 h-px bg-blue-600" /> High-Precision Lamination
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-extrabold tracking-tight text-slate-900 mb-4 leading-none"
          >
            EUROLAM<span className="text-blue-500 font-light italic">™</span>
          </motion.h1>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-light text-slate-500 mb-8 tracking-widest uppercase"
          >
            FILMBOND 1220
          </motion.h2>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-wrap gap-8 sm:gap-12 mb-12"
          >
            <div>
              <p className="text-[10px] text-slate-400 uppercase font-bold tracking-widest mb-1">Max Width</p>
              <p className="text-2xl sm:text-3xl font-light">1220<span className="text-blue-500 text-sm ml-1">mm</span></p>
            </div>
            <div className="hidden sm:block w-px h-12 bg-slate-200" />
            <div>
              <p className="text-[10px] text-slate-400 uppercase font-bold tracking-widest mb-1">Film Gauge</p>
              <p className="text-2xl sm:text-3xl font-light">0.10 – 1.20<span className="text-blue-500 text-sm ml-1">mm</span></p>
            </div>
          </motion.div>

          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            onClick={() => setModalOpen(true)}
            className="group bg-blue-600 hover:bg-blue-700 text-white font-semibold py-4 px-8 rounded-full shadow-lg shadow-blue-200 hover:shadow-xl transition-all flex items-center gap-2 text-lg"
          >
            Request technical specs
            <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </motion.button>
        </div>
      </section>

      {/* FEATURE SLIDER SECTION */}
      <section className="py-16 md:py-24 bg-slate-50 relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
            <div>
              <h3 className="text-3xl md:text-4xl font-bold mb-2 tracking-tight">Bonding Architecture</h3>
              <p className="text-slate-500 text-lg">The 10 pillars of flawless film application.</p>
            </div>
            <div className="flex gap-3">
              <button 
                onClick={prevFeature} 
                className="p-3 rounded-full border border-slate-200 bg-white hover:bg-blue-600 hover:text-white hover:border-blue-600 transition-all shadow-sm"
                aria-label="Previous feature"
              >
                <ChevronLeft size={20} />
              </button>
              <button 
                onClick={nextFeature} 
                className="p-3 rounded-full border border-slate-200 bg-white hover:bg-blue-600 hover:text-white hover:border-blue-600 transition-all shadow-sm"
                aria-label="Next feature"
              >
                <ChevronRight size={20} />
              </button>
            </div>
          </div>

          <div className="relative min-h-[500px] md:h-[450px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeFeature}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
                className="absolute inset-0 grid md:grid-cols-2 gap-8 md:gap-12 items-center"
              >
                {/* Icon / Visual */}
                <div className="relative aspect-square md:aspect-video rounded-3xl overflow-hidden shadow-xl bg-white flex items-center justify-center border border-slate-100 p-8 md:p-0">
                  <div className="text-blue-500/10 absolute inset-0 flex items-center justify-center">
                    {React.cloneElement(features[activeFeature].icon, { size: 180, className: "w-32 h-32 md:w-60 md:h-60" })}
                  </div>
                  <div className="relative z-10 text-blue-600">
                    {React.cloneElement(features[activeFeature].icon, { size: 80, className: "w-16 h-16 md:w-20 md:h-20" })}
                  </div>
                </div>

                {/* Content */}
                <div className="space-y-4 md:space-y-6">
                  <span className="text-6xl md:text-7xl font-black text-slate-200 block leading-none">
                    {(activeFeature + 1).toString().padStart(2, '0')}
                  </span>
                  <h4 className="text-3xl md:text-4xl font-bold tracking-tight">{features[activeFeature].title}</h4>
                  <p className="text-lg md:text-xl text-slate-500 leading-relaxed max-w-md">
                    {features[activeFeature].desc}
                  </p>
                  <div className="inline-block bg-blue-50 text-blue-700 px-5 py-2 rounded-full text-xs font-bold uppercase tracking-widest">
                    {features[activeFeature].detail}
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Progress indicator */}
          <div className="flex justify-center mt-8 gap-2">
            {features.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setActiveFeature(idx)}
                className={`h-2 rounded-full transition-all ${
                  idx === activeFeature 
                    ? "w-8 bg-blue-600" 
                    : "w-2 bg-slate-300 hover:bg-slate-400"
                }`}
                aria-label={`Go to feature ${idx + 1}`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* MODAL */}
      <AnimatePresence>
        {modalOpen && (
          <motion.div 
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-slate-900/40 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setModalOpen(false)}
          >
            <motion.div 
              className="bg-white shadow-2xl w-full max-w-xl p-8 md:p-10 rounded-3xl md:rounded-[2.5rem] relative"
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button 
                onClick={() => setModalOpen(false)} 
                className="absolute top-6 right-6 text-slate-400 hover:text-slate-900 transition-colors"
                aria-label="Close modal"
              >
                <X size={24} />
              </button>
              <h2 className="text-2xl md:text-3xl font-bold mb-2">FilmBond 1220</h2>
              <p className="text-slate-500 mb-8">Request technical configuration details.</p>
              <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
                <input 
                  type="text" 
                  placeholder="Professional Name" 
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl px-6 py-4 outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-100 transition-all" 
                  required
                />
                <input 
                  type="email" 
                  placeholder="Work Email" 
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl px-6 py-4 outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-100 transition-all" 
                  required
                />
                <button 
                  type="submit" 
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-5 rounded-xl shadow-lg shadow-blue-200 hover:shadow-xl transition-all mt-6"
                >
                  Send Specification Request
                </button>
              </form>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Simple footer */}
      <footer className="py-8 text-center text-sm text-slate-400 border-t border-slate-100">
        © 2025 EUROLAM — Precision Lamination Systems
      </footer>
    </div>
  );
}