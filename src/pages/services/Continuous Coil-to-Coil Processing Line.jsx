
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Infinity,
  Activity,
  Wind,
  Shuffle,
  Zap,
  BatteryCharging,
  Gauge,
  RotateCcw,
  Layers,
  ShieldCheck,
  X,
  Plus,
  MoveRight
} from "lucide-react";

export default function EurocoilC2C1650() {
  const [selectedFeature, setSelectedFeature] = useState(null);

  const features = [
    {
      id: 1,
      title: "Continuous Architecture",
      icon: <Infinity />,
      desc: "Enables uninterrupted processing for high-throughput operations. Continuous strip flow eliminates start-stop stress cycles, maximizing output and structural alignment.",
      tag: "FLOW"
    },
    {
      id: 2,
      title: "Precision Tension Control",
      icon: <Activity />,
      desc: "Bridle rolls maintain consistent strip tension via closed-loop control. This prevents elongation and ensures uniform stress distribution to preserve strip geometry.",
      tag: "TENSION"
    },
    {
      id: 3,
      title: "Surface Preservation",
      icon: <Wind />,
      desc: "Non-contact guidance systems and low-friction rollers protect coated finishes. Eliminates surface abrasion and maintains absolute strip cleanliness for premium quality.",
      tag: "SURFACE"
    },
    {
      id: 4,
      title: "Stress Neutralisation",
      icon: <Shuffle />,
      desc: "Inline straighteners eliminate coil memory and neutralise residual stresses. Stabilises material behavior and improves flatness for downstream processing.",
      tag: "STRESS"
    },
    {
      id: 5,
      title: "Speed Synchronisation",
      icon: <Zap />,
      desc: "Servo drives harmonise line speed for stable material flow. Smooth acceleration curves eliminate mechanical shock and improve operational precision.",
      tag: "SYNC"
    },
    {
      id: 6,
      title: "Energy Recovery",
      icon: <BatteryCharging />,
      desc: "High-efficiency motors and regenerative drives reduce power consumption. Supports sustainability goals while significantly lowering operational costs.",
      tag: "ECO"
    },
    {
      id: 7,
      title: "Intelligent Monitoring",
      icon: <Gauge />,
      desc: "Integrated sensors monitor tension, speed, and alignment in real-time. Predictive diagnostics prevent downtime and keep process parameters optimized.",
      tag: "DATA"
    },
    {
      id: 8,
      title: "Automated Recoiling",
      icon: <RotateCcw />,
      desc: "Advanced recoiling systems ensure tight, stable coil winding with perfect edge alignment, preserving coil geometry for subsequent handling.",
      tag: "RECOIL"
    },
    {
      id: 9,
      title: "Modular Integration",
      icon: <Layers />,
      desc: "Designed to support coating, polishing, and laminating modules. The adaptable architecture allows for easy line expansion and future technology upgrades.",
      tag: "MODULE"
    },
    {
      id: 10,
      title: "Industrial Reliability",
      icon: <ShieldCheck />,
      desc: "Built for continuous industrial duty with durable components. Maintenance-friendly access points maximize uptime and ensure long-term operational stability.",
      tag: "HEAVY"
    }
  ];

  return (
    <div className="bg-[#0a0a0a] text-stone-100 min-h-screen font-sans overflow-x-hidden">
      
      {/* HERO SECTION */}
      <section className="relative min-h-[85vh] flex flex-col justify-center px-6 md:px-20 border-b border-stone-800/50">
        {/* Technical Grid Overlay */}
        <div className="absolute right-0 top-0 w-full h-full opacity-5 pointer-events-none">
          <div className="grid grid-cols-12 h-full">
            {[...Array(60)].map((_, i) => (
              <div key={i} className="border-r border-b border-blue-500" />
            ))}
          </div>
        </div>

        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          className="relative z-10"
        >
          <div className="flex items-center gap-4 mb-6">
            <span className="h-[2px] w-12 bg-blue-500" />
            <span className="text-blue-500 font-mono tracking-[0.4em] text-sm uppercase font-bold">Continuous Flow Series</span>
          </div>
          <h1 className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-black tracking-tighter mb-4 leading-none">
            EUROCOIL<span className="text-blue-500 font-light italic text-4xl sm:text-7xl md:text-8xl lg:text-9xl">C2C</span>
          </h1>
          <p className="text-stone-400 text-xl md:text-2xl max-w-2xl font-light leading-relaxed mb-12">
            Engineered for high-throughput processing. Uninterrupted material flow for coils up to 1650mm width and 3.0mm gauge.
          </p>

          <div className="flex flex-wrap gap-12">
            <div>
              <p className="text-stone-500 text-xs uppercase tracking-widest mb-2 font-bold">Width Capacity</p>
              <p className="text-4xl font-mono text-white tracking-tighter">1650<span className="text-blue-500 text-xl ml-1">MM</span></p>
            </div>
            <div className="w-px h-14 bg-stone-800 hidden md:block" />
            <div>
              <p className="text-stone-500 text-xs uppercase tracking-widest mb-2 font-bold">Gauge Range</p>
              <p className="text-4xl font-mono text-white tracking-tighter">0.25—3.0<span className="text-blue-500 text-xl ml-1">MM</span></p>
            </div>
          </div>
        </motion.div>
      </section>

      {/* FEATURE GRID */}
      <section className="p-6 md:p-20 bg-[#0c0c0c]">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
          {features.map((feature, idx) => (
            <motion.div
              key={feature.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.05 }}
              viewport={{ once: true }}
              onClick={() => setSelectedFeature(feature)}
              className="group relative bg-[#141414] border border-stone-800 p-8 cursor-pointer hover:bg-blue-950/10 hover:border-blue-500/50 transition-all aspect-square flex flex-col justify-between overflow-hidden"
            >
              <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-100 group-hover:text-blue-400 transition-all">
                <Plus size={20} />
              </div>
              
              <div className="text-blue-500 mb-4 transition-transform group-hover:scale-110">
                {React.cloneElement(feature.icon, { size: 40, strokeWidth: 1.5 })}
              </div>

              <div>
                <span className="text-[10px] font-mono text-stone-500 block mb-2 tracking-tighter uppercase font-bold">C2C_SYS_1650_{feature.tag}</span>
                <h3 className="text-lg font-bold uppercase tracking-tight leading-tight group-hover:text-blue-400 transition-colors">
                  {feature.title}
                </h3>
              </div>

              {/* Signature Sheet Line Animation */}
              <div className="absolute bottom-0 left-0 w-full h-1 bg-blue-500 translate-y-1 group-hover:translate-y-0 transition-transform shadow-[0_-5px_15px_rgba(59,130,246,0.3)]" />
            </motion.div>
          ))}
        </div>
      </section>

      {/* SPECIFICATION DRAWER */}
      <AnimatePresence>
        {selectedFeature && (
          <motion.div 
            className="fixed inset-0 z-50 flex items-center justify-end p-0 md:p-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <div className="absolute inset-0 bg-black/90 backdrop-blur-md" onClick={() => setSelectedFeature(null)} />
            <motion.div 
              className="relative w-full max-w-2xl h-full bg-[#0d0d0d] border-l border-blue-500/30 p-12 flex flex-col justify-center shadow-2xl"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 30, stiffness: 200 }}
            >
              <button 
                onClick={() => setSelectedFeature(null)}
                className="absolute top-12 right-12 text-stone-500 hover:text-white transition-colors"
              >
                <X size={36} />
              </button>
              
              <div className="text-blue-500 mb-8">
                {React.cloneElement(selectedFeature.icon, { size: 80, strokeWidth: 1 })}
              </div>
              <p className="text-blue-500 font-mono text-sm mb-4 tracking-[0.3em] uppercase font-bold">Process Detail // Module 0{selectedFeature.id}</p>
              <h2 className="text-5xl font-black mb-8 uppercase tracking-tighter leading-none">{selectedFeature.title}</h2>
              <div className="w-24 h-1 bg-blue-500 mb-10" />
              
              
              
              <p className="text-stone-400 text-2xl font-light leading-relaxed mb-12 border-l-2 border-stone-800 pl-8">
                {selectedFeature.desc}
              </p>
              
             
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* FOOTER */}
      <section className="bg-[#050505] py-32 px-6 border-t border-stone-800 text-center">
        <h3 className="text-4xl md:text-5xl font-black mb-8 tracking-tighter uppercase">Infinite Processing.</h3>
        <p className="text-stone-500 mb-12 max-w-3xl mx-auto uppercase text-xs tracking-[0.4em] leading-loose font-bold italic">
          Closed-loop tension • Regenerative Drives • Modular Capability
        </p>
        <div className="flex justify-center items-center gap-6 opacity-30">
           <div className="h-[1px] w-32 bg-blue-500" />
           <span className="font-mono text-xs tracking-widest">EUROCOIL C2C 1650</span>
           <div className="h-[1px] w-32 bg-blue-500" />
        </div>
      </section>

    </div>
  );
}