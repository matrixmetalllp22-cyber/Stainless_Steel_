
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Settings,
  RotateCw,
  Layers,
  Zap,
  Shield,
  Gauge,
  Cpu,
  Package,
  Award,
  Leaf,
  X,
  Plus,
  MoveRight
} from "lucide-react";

export default function EurocutPrecisionCTL800() {
  const [selectedFeature, setSelectedFeature] = useState(null);

  const features = [
    {
      id: 1,
      title: "Precision Engineering",
      icon: <Settings />,
      desc: "Engineered for ultra-light gauge materials requiring exceptional dimensional fidelity and structural stability during high-speed processing.",
      tag: "MICRON"
    },
    {
      id: 2,
      title: "Intelligent Decoiler",
      icon: <RotateCw />,
      desc: "Servo-regulated decoiler with adaptive tension control ensures stable strip presentation without material deformation.",
      tag: "SERVO"
    },
    {
      id: 3,
      title: "Multi-Roll Levelling",
      icon: <Layers />,
      desc: "Precision levelling cassette neutralises internal stress and ensures superior sheet planarity for critical surface applications.",
      tag: "PLANE"
    },
    {
      id: 4,
      title: "Servo Shearing",
      icon: <Zap />,
      desc: "High-speed burr-free cutting module provides distortion-free edges and exact sheet length tolerance for precision fabrication.",
      tag: "EDGE"
    },
    {
      id: 5,
      title: "Surface Integrity",
      icon: <Shield />,
      desc: "Non-marking rollers and specialized handling protect mirror finishes, pre-painted coatings, and sensitive alloys.",
      tag: "COAT"
    },
    {
      id: 6,
      title: "Dynamic Tension",
      icon: <Gauge />,
      desc: "Floating loop control ensures uninterrupted strip flow and uniform stress distribution across the material width.",
      tag: "FLOW"
    },
    {
      id: 7,
      title: "Automation & Drives",
      icon: <Cpu />,
      desc: "PLC-controlled synchronised European drives optimise throughput efficiency while maintaining ultra-tight tolerances.",
      tag: "LOGIC"
    },
    {
      id: 8,
      title: "Stacking System",
      icon: <Package />,
      desc: "Vacuum or magnetic stacking options ensure scratch-free sheet handling and perfectly aligned bundles for packaging.",
      tag: "CLEAN"
    },
    {
      id: 9,
      title: "Aerospace Grade",
      icon: <Award />,
      desc: "Ideal for aerospace panels, high-end appliances, and architectural finishes where aesthetic perfection is mandatory.",
      tag: "ELITE"
    },
    {
      id: 10,
      title: "Energy Efficiency",
      icon: <Leaf />,
      desc: "Energy-optimised design with predictive maintenance philosophy reduces operational costs and environmental footprint.",
      tag: "ECO"
    }
  ];

  return (
    <div className="bg-[#0c0c0c] text-stone-100 min-h-screen font-sans overflow-x-hidden">
      
      {/* HERO SECTION */}
      <section className="relative min-h-[80vh] flex flex-col justify-center px-6 md:px-20 border-b border-stone-800">
        <div className="absolute right-0 top-0 w-full h-full opacity-10 pointer-events-none">
          <div className="grid grid-cols-8 h-full">
            {[...Array(32)].map((_, i) => (
              <div key={i} className="border-r border-b border-stone-700" />
            ))}
          </div>
        </div>

        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          className="relative z-10"
        >
          <div className="flex items-center gap-4 mb-6">
            <span className="h-[2px] w-12 bg-cyan-500" />
            <span className="text-cyan-500 font-mono tracking-[0.3em] text-sm uppercase">Precision CTL Series</span>
          </div>
          <h1 className="text-4xl sm:text-6xl md:text-8xl lg:text-9xl font-bold tracking-tighter mb-4 break-words leading-none">
            PRECISION<span className="text-cyan-500 font-light italic">800</span>
          </h1>
          <p className="text-stone-400 text-xl md:text-2xl max-w-2xl font-light leading-relaxed mb-12">
            Micron-level fidelity for ultra-light gauge materials. 
            Engineered for industries where surface perfection is the only standard.
          </p>

          <div className="flex flex-wrap gap-8">
            <div>
              <p className="text-stone-500 text-xs uppercase tracking-widest mb-2">Width Capacity</p>
              <p className="text-3xl font-mono">800<span className="text-cyan-500 text-xl ml-1">MM</span></p>
            </div>
            <div className="w-px h-12 bg-stone-800" />
            <div>
              <p className="text-stone-500 text-xs uppercase tracking-widest mb-2">Handling Mode</p>
              <p className="text-3xl font-mono text-cyan-500 uppercase">Non-Marking</p>
            </div>
          </div>
        </motion.div>
      </section>

      {/* FEATURE GRID */}
      <section className="p-6 md:p-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
          {features.map((feature, idx) => (
            <motion.div
              key={feature.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.05 }}
              viewport={{ once: true }}
              onClick={() => setSelectedFeature(feature)}
              className="group relative bg-stone-900 border border-stone-800 p-8 cursor-pointer hover:bg-stone-800 transition-all aspect-square flex flex-col justify-between overflow-hidden"
            >
              <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-100 group-hover:text-cyan-400 transition-all">
                <Plus size={20} />
              </div>
              
              <div className="text-cyan-500 mb-4 transition-transform group-hover:scale-110">
                {React.cloneElement(feature.icon, { size: 32 })}
              </div>

              <div>
                <span className="text-[10px] font-mono text-stone-500 block mb-2 tracking-tighter">SPEC_P_REF_{feature.tag}</span>
                <h3 className="text-lg font-bold uppercase tracking-tight leading-tight">
                  {feature.title}
                </h3>
              </div>

              {/* Decorative "Sheet" line */}
              <div className="absolute bottom-0 left-0 w-full h-1 bg-cyan-500 translate-y-1 group-hover:translate-y-0 transition-transform" />
            </motion.div>
          ))}
        </div>
      </section>

      {/* SIDE DRAWER MODAL */}
      <AnimatePresence>
        {selectedFeature && (
          <motion.div 
            className="fixed inset-0 z-50 flex items-center justify-end p-0 md:p-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <div className="absolute inset-0 bg-stone-950/80 backdrop-blur-sm" onClick={() => setSelectedFeature(null)} />
            <motion.div 
              className="relative w-full max-w-2xl h-full bg-stone-900 border-l border-stone-800 p-12 flex flex-col justify-center"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25 }}
            >
              <button 
                onClick={() => setSelectedFeature(null)}
                className="absolute top-12 right-12 text-stone-500 hover:text-white"
              >
                <X size={32} />
              </button>
              
              <div className="text-cyan-500 mb-8">
                {React.cloneElement(selectedFeature.icon, { size: 64 })}
              </div>
              <p className="text-cyan-500 font-mono text-sm mb-4 tracking-widest">PRECISION CORE // MODULE 0{selectedFeature.id}</p>
              <h2 className="text-5xl font-bold mb-8 uppercase tracking-tighter">{selectedFeature.title}</h2>
              <p className="text-stone-400 text-2xl font-light leading-relaxed mb-12 border-l-4 border-stone-700 pl-8">
                {selectedFeature.desc}
              </p>
              
             
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* SUB-FOOTER */}
      <section className="bg-stone-900 py-24 px-6 border-t border-stone-800 text-center">
        <h3 className="text-4xl font-bold mb-8 tracking-tighter uppercase">Fidelity Without Compromise</h3>
        <p className="text-stone-500 mb-12 max-w-xl mx-auto uppercase text-xs tracking-[0.3em]">
          Electronic Housing • Automotive Trim • Aerospace Alloys
        </p>
      </section>

    </div>
  );
}