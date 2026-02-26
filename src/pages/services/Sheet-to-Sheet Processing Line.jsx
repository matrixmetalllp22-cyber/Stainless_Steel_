import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  LayoutGrid,
  MoveRight,
  ShieldAlert,
  Target,
  Search,
  Weight,
  Layers,
  Container,
  Building2,
  Settings,
  X,
  Plus
} from "lucide-react";

export default function EurosheetS2S1650() {
  const [selectedFeature, setSelectedFeature] = useState(null);

  const features = [
    {
      id: 1,
      title: "Precision Handling",
      icon: <LayoutGrid />,
      desc: "Ensures accurate sheet positioning and transfer. Servo-controlled feeding maintains alignment while mechanical tolerance deviations are eliminated.",
      tag: "CORE"
    },
    {
      id: 2,
      title: "Automated Feeding",
      icon: <MoveRight />,
      desc: "Servo feeders regulate sheet movement with high position accuracy. Speed harmonisation prevents misalignment during transfer.",
      tag: "SERVO"
    },
    {
      id: 3,
      title: "Surface-Safe Conveyors",
      icon: <ShieldAlert />,
      desc: "Low-friction polymer rollers reduce abrasion risk. Sheet finishes remain pristine and handling marks are completely eliminated.",
      tag: "FINISH"
    },
    {
      id: 4,
      title: "Alignment Accuracy",
      icon: <Target />,
      desc: "Automatic alignment systems correct sheet positioning via sensors to ensure dimensional precision and uniform edge referencing.",
      tag: "SENSOR"
    },
    {
      id: 5,
      title: "Integrated Inspection",
      icon: <Search />,
      desc: "Inline systems detect surface defects in real-time. Fault detection prevents defective output and improves production consistency.",
      tag: "QC"
    },
    {
      id: 6,
      id_name: "Heavy Handling",
      title: "Weight Stability",
      icon: <Weight />,
      desc: "Robust conveyors support high sheet weights. Structural rigidity prevents vibration, ensuring stable movement and operator safety.",
      tag: "HEAVY"
    },
    {
      id: 7,
      title: "Modular Integration",
      icon: <Layers />,
      desc: "Supports brushing, polishing, and coating modules. Modular expansion allows processing capability to be upgraded over time.",
      tag: "UPGRADE"
    },
    {
      id: 8,
      title: "Precision Stacking",
      icon: <Container />,
      desc: "Automated stacking maintains sheet alignment. Stack uniformity improves handling and logistics efficiency during packaging.",
      tag: "LOGISTICS"
    },
    {
      id: 9,
      title: "Application Scope",
      icon: <Building2 />,
      desc: "Ideal for fabrication, architecture, and panel production. Supports multiple metals with consistent dimensional accuracy.",
      tag: "FAB"
    },
    {
      id: 10,
      title: "Operational Reliability",
      icon: <Settings />,
      desc: "Designed for long-term industrial use with maintenance-friendly construction and wear-resistant components.",
      tag: "DURABLE"
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
            <span className="h-[2px] w-12 bg-amber-500" />
            <span className="text-amber-500 font-mono tracking-[0.3em] text-sm uppercase">S2S Processing Line</span>
          </div>
          <h1 className="text-4xl sm:text-6xl md:text-8xl lg:text-9xl font-bold tracking-tighter mb-4 break-words">
            EUROSHEET<span className="text-amber-500 font-light italic">S2S</span>
            </h1>
          {/* <h1 className="text-6xl md:text-9xl font-bold tracking-tighter mb-4">
            EUROSHEET<span className="text-amber-500 font-light italic">S2S</span>
          </h1> */}
          <p className="text-stone-400 text-xl md:text-2xl max-w-2xl font-light leading-relaxed mb-12">
            Engineered for high-value sheet fabrication, the 1650 series delivers 
            unmatched surface protection and dimensional consistency across 0.25 – 3.0 mm gauges.
          </p>

          <div className="flex flex-wrap gap-8">
            <div>
              <p className="text-stone-500 text-xs uppercase tracking-widest mb-2">Max Capacity</p>
              <p className="text-3xl font-mono">1650<span className="text-amber-500">MM</span></p>
            </div>
            <div className="w-px h-12 bg-stone-800" />
            <div>
              <p className="text-stone-500 text-xs uppercase tracking-widest mb-2">Feed Control</p>
              <p className="text-3xl font-mono">SERVO</p>
            </div>
          </div>
        </motion.div>
      </section>

      {/* MODULAR GRID SECTION */}
      <section className="p-6 md:p-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
          {features.map((feature, idx) => (
            <motion.div
              key={feature.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              viewport={{ once: true }}
              onClick={() => setSelectedFeature(feature)}
              className="group relative bg-stone-900 border border-stone-800 p-8 cursor-pointer hover:bg-stone-800 transition-all aspect-square flex flex-col justify-between overflow-hidden"
            >
              <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-100 group-hover:text-amber-500 transition-all">
                <Plus size={20} />
              </div>
              
              <div className="text-amber-500 mb-4 transition-transform group-hover:scale-110">
                {React.cloneElement(feature.icon, { size: 32 })}
              </div>

              <div>
                <span className="text-[10px] font-mono text-stone-500 block mb-2 tracking-tighter">REF_{feature.tag}</span>
                <h3 className="text-lg font-bold uppercase tracking-tight leading-tight">
                  {feature.title}
                </h3>
              </div>

              {/* Decorative "Sheet" line */}
              <div className="absolute bottom-0 left-0 w-full h-1 bg-amber-500 translate-y-1 group-hover:translate-y-0 transition-transform" />
            </motion.div>
          ))}
        </div>
      </section>

      

      {/* FEATURE MODAL */}
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
              
              <div className="text-amber-500 mb-8">
                {React.cloneElement(selectedFeature.icon, { size: 64 })}
              </div>
              <p className="text-amber-500 font-mono text-sm mb-4 tracking-widest">MODULE SPECIFICATION // 0{selectedFeature.id}</p>
              <h2 className="text-5xl font-bold mb-8 uppercase tracking-tighter">{selectedFeature.title}</h2>
              <p className="text-stone-400 text-2xl font-light leading-relaxed mb-12 border-l-4 border-stone-700 pl-8">
                {selectedFeature.desc}
              </p>
              
              {/* <button className="bg-amber-500 text-black px-10 py-4 font-bold uppercase tracking-widest hover:bg-white transition-colors flex items-center gap-4 w-fit">
                Download Technical Datasheet <MoveRight size={20} />
              </button> */}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* FINAL CALL TO ACTION */}
      <section className="bg-stone-900 py-24 px-6 border-t border-stone-800 text-center">
        <h3 className="text-4xl font-bold mb-8 tracking-tighter">CUSTOM CONFIGURATION READY</h3>
        <p className="text-stone-500 mb-12 max-w-xl mx-auto uppercase text-xs tracking-[0.3em]">
          Automotive • Architecture • High-End Fabrication
        </p>
        
      </section>

    </div>
  );
}