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
      desc: "Enables uninterrupted processing for high-throughput operations. Continuous strip flow eliminates start-stop stress cycles and maximizes industrial output.",
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
      desc: "Non-contact guidance systems and low-friction rollers protect coated finishes, eliminating surface defects and maintaining premium quality.",
      position: "left"
    },
    {
      id: "04",
      title: "Stress Neutralisation",
      icon: <Shuffle className="w-6 h-6" />,
      desc: "Inline straighteners eliminate coil memory and neutralise residual stresses, stabilizing material behavior for downstream processing.",
      position: "right"
    },
    {
      id: "05",
      title: "Speed Synchronisation",
      icon: <Zap className="w-6 h-6" />,
      desc: "Servo drives harmonise line speed for stable material flow. Smooth acceleration/deceleration eliminates mechanical shock.",
      position: "left"
    },
    {
      id: "06",
      title: "Energy Recovery",
      icon: <BatteryCharging className="w-6 h-6" />,
      desc: "Regenerative drives and high-efficiency motors reduce power consumption and support industrial sustainability goals.",
      position: "right"
    },
    {
      id: "07",
      title: "Intelligent Diagnostics",
      icon: <Eye className="w-6 h-6" />,
      desc: "Real-time sensors monitor tension and alignment. Predictive maintenance algorithms prevent downtime and optimize parameters.",
      position: "left"
    },
    {
      id: "08",
      title: "Automated Recoiling",
      icon: <RotateCw className="w-6 h-6" />,
      desc: "Ensures tight, stable coil winding with perfect edge alignment, preserving coil geometry for safe handling.",
      position: "right"
    },
    {
      id: "09",
      title: "Modular Integration",
      icon: <PlusSquare className="w-6 h-6" />,
      desc: "Supports inline coating, polishing, and laminating. The modular design ensures future scalability and line adaptability.",
      position: "left"
    },
    {
      id: "10",
      title: "Industrial Reliability",
      icon: <BarChart className="w-6 h-6" />,
      desc: "Designed for continuous duty with simplified maintenance access and durable components for maximum operational uptime.",
      position: "right"
    }
  ];

  return (
    <div className="bg-[#0f0a1a] text-blue-50 font-sans selection:bg-blue-500/40 pb-20">
      
      {/* HERO SECTION */}
      <section className="relative min-h-screen flex items-center justify-center px-6 overflow-hidden">
        {/* Animated Background Pulse */}
        <div className="absolute inset-0 z-0">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-600/20 rounded-full blur-[120px] animate-blue" />
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-20" />
        </div>

        <div className="relative z-10 text-center max-w-5xl">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-block px-4 py-1.5 rounded-full border border-blue-500/30 bg-blue-500/10 text-purple-300 text-xs font-bold tracking-[0.3em] uppercase mb-8"
          >
            Continuous Processing Excellence
          </motion.div>
          
          <h1 className="text-7xl md:text-9xl font-black tracking-tighter italic mb-4 leading-none">
            EUROCOIL<span className="text-blue-500">™</span>
          </h1>
          <h2 className="text-3xl md:text-5xl font-light text-blue-200/60 tracking-[0.2em] mb-12">
            C2C 1650 SERIES
          </h2>

          <div className="flex flex-col md:flex-row items-center justify-center gap-8 mb-16">
            <div className="flex flex-col items-center">
              <span className="text-5xl font-bold">1650</span>
              <span className="text-xs uppercase tracking-widest text-blue-400">Width (mm)</span>
            </div>
            <div className="h-px w-12 bg-blue-800 hidden md:block" />
            <div className="flex flex-col items-center">
              <span className="text-5xl font-bold">3.0</span>
              <span className="text-xs uppercase tracking-widest text-blue-400">Max Gauge (mm)</span>
            </div>
          </div>

          <button 
            onClick={() => setModalOpen(true)}
            className="bg-blue-600 hover:bg-blue-500 text-white px-12 py-5 rounded-2xl font-bold text-lg shadow-[0_0_40px_rgba(147,51,234,0.4)] transition-all flex items-center gap-3 mx-auto"
          >
            Configure Your Line <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </section>

      {/* PROCESS TIMELINE SECTION */}
      <section className="relative max-w-6xl mx-auto px-6 py-20">
        <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-blue-500/50 to-transparent hidden md:block" />

        <div className="space-y-24 md:space-y-12">
          {processSteps.map((step, index) => (
            <motion.div
              key={step.id}
              initial={{ opacity: 0, x: step.position === "left" ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className={`flex flex-col ${step.position === "left" ? "md:flex-row" : "md:flex-row-reverse"} items-center gap-8 md:gap-0`}
            >
              {/* Content Card */}
              <div className="w-full md:w-5/12">
                <div className={`p-8 rounded-[2.5rem] bg-gradient-to-br from-blue-900/40 to-slate-900/40 border border-blue-500/20 backdrop-blur-sm hover:border-blue-500/50 transition-colors group`}>
                  <div className="flex items-center gap-4 mb-4">
                    <div className="p-3 bg-blue-600 rounded-xl text-white">
                      {step.icon}
                    </div>
                    <span className="text-4xl font-black text-blue-900/50 group-hover:text-blue-500/20 transition-colors">{step.id}</span>
                  </div>
                  <h3 className="text-2xl font-bold mb-4">{step.title}</h3>
                  <p className="text-blue-200/60 leading-relaxed text-sm">
                    {step.desc}
                  </p>
                </div>
              </div>

              {/* Center Dot */}
              <div className="relative w-full md:w-2/12 flex justify-center">
                <div className="w-4 h-4 rounded-full bg-blue-500 shadow-[0_0_15px_rgba(168,85,247,0.8)] z-10" />
              </div>

              {/* Empty Space for alignment */}
              <div className="hidden md:block md:w-5/12" />
            </motion.div>
          ))}
        </div>
      </section>

      {/* {Image of industrial continuous steel processing line showing bridle rolls and tensioners} */}

      {/* MODAL */}
      <AnimatePresence>
        {modalOpen && (
          <motion.div 
            className="fixed inset-0 z-[100] flex items-center justify-center p-6 bg-slate-950/90 backdrop-blur-xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div 
              className="bg-[#1a1525] border border-blue-500/30 w-full max-w-2xl p-12 rounded-[3rem] relative"
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
            >
              <button onClick={() => setModalOpen(false)} className="absolute top-8 right-8 text-blue-400 hover:text-white">
                <X size={32} />
              </button>
              <h2 className="text-4xl font-black mb-2 italic">EUROCOIL<span className="text-blue-500">™</span></h2>
              <p className="text-blue-300 mb-8 uppercase tracking-widest text-xs font-bold">Request Line Configuration</p>
              
              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div className="space-y-2">
                  <label className="text-[10px] uppercase font-bold text-blue-500 ml-2">Input Width (mm)</label>
                  <input type="number" placeholder="1650" className="w-full bg-blue-950/50 border border-blue-500/20 rounded-2xl px-6 py-4 outline-none focus:border-blue-500 text-white" />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] uppercase font-bold text-blue-500 ml-2">Line Speed (m/min)</label>
                  <input type="number" placeholder="100" className="w-full bg-purple-950/50 border border-purple-500/20 rounded-2xl px-6 py-4 outline-none focus:border-purple-500 text-white" />
                </div>
              </div>
              
              <input type="email" placeholder="Professional Email" className="w-full bg-purple-950/50 border border-purple-500/20 rounded-2xl px-6 py-4 outline-none focus:border-purple-500 text-white mb-6" />
              
              <button className="w-full bg-white text-purple-950 font-black py-5 rounded-2xl text-xl hover:bg-purple-500 hover:text-white transition-all shadow-xl">
                SEND SPECIFICATIONS
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}