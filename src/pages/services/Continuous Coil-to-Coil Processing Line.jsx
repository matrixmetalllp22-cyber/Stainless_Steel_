import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Infinity,
  Activity,
  Zap,
  Wind,
  Shuffle,
  BatteryCharging,
  Eye,
  RotateCw,
  PlusSquare,
  BarChart,
  ArrowRight,
  X
} from "lucide-react";

export default function EurocoilC2C1650() {
  const [modalOpen, setModalOpen] = useState(false);

  const processSteps = [
    {
      id: "01",
      title: "Continuous Architecture",
      icon: <Infinity className="w-6 h-6" />,
      desc: "Enables uninterrupted processing for high-throughput operations. Continuous strip flow eliminates start-stop stress cycles.",
      position: "left"
    },
    {
      id: "02",
      title: "Precision Tension Control",
      icon: <Activity className="w-6 h-6" />,
      desc: "Bridle rolls maintain consistent strip tension via closed-loop control, preventing elongation and ensuring uniform stress distribution.",
      position: "right"
    },
    {
      id: "03",
      title: "Surface Preservation",
      icon: <Wind className="w-6 h-6" />,
      desc: "Non-contact guidance systems and low-friction rollers protect coated finishes, eliminating surface defects.",
      position: "left"
    },
    {
      id: "04",
      title: "Stress Neutralisation",
      icon: <Shuffle className="w-6 h-6" />,
      desc: "Inline straighteners eliminate coil memory and neutralise residual stresses, stabilizing material behavior.",
      position: "right"
    },
    {
      id: "05",
      title: "Speed Synchronisation",
      icon: <Zap className="w-6 h-6" />,
      desc: "Servo drives harmonise line speed for stable material flow. Smooth acceleration eliminates mechanical shock.",
      position: "left"
    },
    {
      id: "06",
      title: "Energy Recovery",
      icon: <BatteryCharging className="w-6 h-6" />,
      desc: "Regenerative drives and high-efficiency motors reduce power consumption and support sustainability goals.",
      position: "right"
    }
  ];

  return (
    <div className="bg-[#0f0a1a] text-blue-50 font-sans selection:bg-blue-500/40 pb-20 overflow-x-hidden">
      
      {/* HERO SECTION */}
      <section className="relative min-h-[90vh] md:min-h-screen flex items-center justify-center px-4 md:px-6 overflow-hidden">
        {/* Animated Background Pulse */}
        <div className="absolute inset-0 z-0">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] md:w-[800px] h-[300px] md:h-[800px] bg-blue-600/20 rounded-full blur-[80px] md:blur-[120px]" />
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10 md:opacity-20" />
        </div>

        <div className="relative z-10 text-center max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-block px-4 py-1.5 rounded-full border border-blue-500/30 bg-blue-500/10 text-blue-300 text-[10px] md:text-xs font-bold tracking-[0.2em] md:tracking-[0.3em] uppercase mb-6 md:mb-8"
          >
            Continuous Processing Excellence
          </motion.div>
          
          <h1 className="text-5xl sm:text-7xl md:text-9xl font-black tracking-tighter italic mb-4 leading-none">
            EUROCOIL<span className="text-blue-500">™</span>
          </h1>
          <h2 className="text-xl md:text-4xl lg:text-5xl font-light text-blue-200/60 tracking-[0.15em] md:tracking-[0.2em] mb-10 md:mb-12">
            C2C 1650 SERIES
          </h2>

          <div className="flex flex-row items-center justify-center gap-4 md:gap-8 mb-12 md:mb-16">
            <div className="flex flex-col items-center">
              <span className="text-3xl md:text-5xl font-bold">1650</span>
              <span className="text-[10px] uppercase tracking-widest text-blue-400">Width (mm)</span>
            </div>
            <div className="h-px w-6 md:w-12 bg-blue-800" />
            <div className="flex flex-col items-center">
              <span className="text-3xl md:text-5xl font-bold">3.0</span>
              <span className="text-[10px] uppercase tracking-widest text-blue-400">Max Gauge (mm)</span>
            </div>
          </div>

          {/* <button 
            onClick={() => setModalOpen(true)}
            className="w-full sm:w-auto bg-blue-600 hover:bg-blue-500 text-white px-8 md:px-12 py-4 md:py-5 rounded-xl md:rounded-2xl font-bold text-base md:text-lg shadow-[0_0_40px_rgba(37,99,235,0.3)] transition-all flex items-center justify-center gap-3 mx-auto"
          >
            Configure Your Line <ArrowRight className="w-5 h-5" />
          </button> */}
        </div>
      </section>

      {/* PROCESS TIMELINE SECTION */}
      <section className="relative max-w-6xl mx-auto px-4 md:px-6 py-10 md:py-20">
        {/* Vertical Center Line (Desktop Only) */}
        <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-blue-500/50 to-transparent hidden md:block" />

        <div className="space-y-12 md:space-y-24">
          {processSteps.map((step) => (
            <motion.div
              key={step.id}
              initial={{ opacity: 0, x: 0, y: 30 }}
              whileInView={{ opacity: 1, x: 0, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              className={`flex flex-col md:flex-row ${step.position === "left" ? "" : "md:flex-row-reverse"} items-center gap-6 md:gap-0`}
            >
              {/* Content Card */}
              <div className="w-full md:w-5/12">
                <div className="p-6 md:p-8 rounded-2xl md:rounded-[2.5rem] bg-gradient-to-br from-blue-900/30 to-slate-900/50 border border-blue-500/10 backdrop-blur-sm hover:border-blue-500/40 transition-all group">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="p-2.5 md:p-3 bg-blue-600 rounded-lg md:rounded-xl text-white">
                      {step.icon}
                    </div>
                    <span className="text-3xl md:text-4xl font-black text-blue-900/30 group-hover:text-blue-500/20 transition-colors uppercase italic">{step.id}</span>
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold mb-3">{step.title}</h3>
                  <p className="text-blue-200/50 leading-relaxed text-sm md:text-base">
                    {step.desc}
                  </p>
                </div>
              </div>

              {/* Center Dot (Desktop Only) */}
              <div className="relative w-full md:w-2/12 hidden md:flex justify-center">
                <div className="w-4 h-4 rounded-full bg-blue-500 shadow-[0_0_15px_rgba(59,130,246,0.8)] z-10" />
              </div>

              {/* Empty Space for alignment (Desktop Only) */}
              <div className="hidden md:block md:w-5/12" />
            </motion.div>
          ))}
        </div>
      </section>

      {/* MODAL */}
      <AnimatePresence>
        {modalOpen && (
          <motion.div 
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-slate-950/90 backdrop-blur-lg"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div 
              className="bg-[#1a1525] border border-blue-500/30 w-full max-w-2xl p-6 md:p-12 rounded-3xl md:rounded-[3rem] relative max-h-[90vh] overflow-y-auto shadow-2xl"
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
            >
              <button onClick={() => setModalOpen(false)} className="absolute top-4 right-4 md:top-8 md:right-8 text-blue-400 hover:text-white transition-colors">
                <X size={24} className="md:w-8 md:h-8" />
              </button>
              
              <h2 className="text-2xl md:text-4xl font-black mb-1 italic">EUROCOIL<span className="text-blue-500">™</span></h2>
              <p className="text-blue-300 mb-6 md:mb-8 uppercase tracking-widest text-[10px] font-bold">Request Line Configuration</p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 mb-6">
                <div className="space-y-2">
                  <label className="text-[10px] uppercase font-bold text-blue-500 ml-2">Input Width (mm)</label>
                  <input type="number" placeholder="1650" className="w-full bg-blue-950/50 border border-blue-500/20 rounded-xl md:rounded-2xl px-5 py-3 md:py-4 outline-none focus:border-blue-500 text-white text-sm" />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] uppercase font-bold text-blue-500 ml-2">Line Speed (m/min)</label>
                  <input type="number" placeholder="100" className="w-full bg-blue-950/50 border border-blue-500/20 rounded-xl md:rounded-2xl px-5 py-3 md:py-4 outline-none focus:border-blue-500 text-white text-sm" />
                </div>
              </div>
              
              <div className="space-y-2 mb-8">
                <label className="text-[10px] uppercase font-bold text-blue-500 ml-2">Professional Email</label>
                <input type="email" placeholder="email@company.com" className="w-full bg-blue-950/50 border border-blue-500/20 rounded-xl md:rounded-2xl px-5 py-3 md:py-4 outline-none focus:border-blue-500 text-white text-sm" />
              </div>
              
              <button className="w-full bg-blue-600 text-white font-black py-4 md:py-5 rounded-xl md:rounded-2xl text-lg md:text-xl hover:bg-blue-500 transition-all shadow-xl active:scale-95">
                SEND SPECIFICATIONS
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}