import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Settings,
  ShieldCheck,
  Leaf,
  CheckCircle2,
  Maximize,
  Layers,
  Target,
  ChevronRight,
  Activity,
  Box,
  Cpu
} from "lucide-react";

const ProductAdvantages = () => {
  const [hoveredLine, setHoveredLine] = useState(null);

  const processingLines = [
    { id: "01", title: "No.4 Surface Finishing", detail: "Continuous Coil-to-Coil", desc: "Abrasive belt system delivering uniform satin grain structure with zero surface distortion.", icon: <Activity className="w-5 h-5" /> },
    { id: "02", title: "Industrial Degreasing", detail: "Chemical Surface Cleaning", desc: "Eliminates mill oils and lubricants using calibrated chemical concentration and temperature control.", icon: <Settings className="w-5 h-5" /> },
    { id: "03", title: "Hot Wash & Rinse", detail: "Thermal Treatment", desc: "Enhances surface purity and optimizes material preparation for secondary processing.", icon: <Activity className="w-5 h-5" /> },
    { id: "04", title: "UV Conditioning", detail: "Radiation Treatment", desc: "Advanced ultraviolet system for organic contamination removal and enhanced surface activation.", icon: <Cpu className="w-5 h-5" /> },
    { id: "05", title: "Film Lamination", detail: "Continuous Protective Line", desc: "Calibrated pressure control applying multiple adhesion grades for transit and installation protection.", icon: <Layers className="w-5 h-5" /> },
    { id: "06", title: "Paper Interleaving", detail: "Automated Application", desc: "Inserting technical protective paper to prevent micro-abrasion in cosmetic-grade materials.", icon: <Box className="w-5 h-5" /> },
    { id: "07", title: "Tension Levelling", detail: "Flatness Correction", desc: "High-accuracy system engineered to eliminate residual stress, coil set memory, and waviness.", icon: <Maximize className="w-5 h-5" /> },
    { id: "08", title: "Edge Refinement", detail: "Burr Minimisation", desc: "Calibrated conditioning ensures clean geometry, improving bend performance and safety.", icon: <Target className="w-5 h-5" /> },
    { id: "09", title: "Integrated Inspection", detail: "Dimensional Validation", desc: "Structured system verifying specifications and batch traceability prior to dispatch.", icon: <ShieldCheck className="w-5 h-5" /> },
    { id: "10", title: "Custom Surface Engineering", detail: "Bespoke Finishing", desc: "Modular platform for specialized treatments aligned with premium international standards.", icon: <Settings className="w-5 h-5" /> },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.15 },
    },
  };

  const childVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] },
    },
  };

  return (
    <div className="bg-white text-slate-900 overflow-x-hidden">
      
      {/* --- STRATEGIC ADVANTAGE & MAKE IN INDIA --- */}
      <section className="py-12 md:py-24 bg-gradient-to-b from-slate-50 to-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16">
            
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="w-full lg:w-1/2 relative"
            >
              <div className="absolute -top-6 -left-6 md:-top-12 md:-left-12 w-48 h-48 md:w-64 md:h-64 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-60 animate-pulse"></div>
              <motion.img
                src="https://www.shutterstock.com/shutterstock/photos/2491400853/display_1500/stock-vector-make-in-india-concept-vector-illustration-lion-made-with-blue-gears-industrial-development-2491400853.jpg"
                alt="Make in India Lion"
                className="relative z-10 w-full max-w-[320px] md:max-w-lg mx-auto drop-shadow-2xl h-auto"
                whileHover={{ scale: 1.04, rotate: 1 }}
              />
            </motion.div>
            
            <div className="w-full lg:w-1/2 text-center lg:text-left">
              <h2 className="text-3xl md:text-5xl lg:text-6xl font-black text-slate-900 mb-6 leading-tight">
                Precision. <br />
                <span className="text-blue-600">Product Advantages.</span>
              </h2>
              <p className="text-base md:text-xl text-slate-600 mb-8 leading-relaxed font-light px-2 lg:px-0">
                Matrix Metals LLP delivers stainless steel solutions engineered for performance, longevity, and environmental responsibility. 
              </p>
              
              <motion.div
                className="grid grid-cols-1 sm:grid-cols-2 gap-6 border-t border-slate-200 pt-8 text-left"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                <motion.div variants={childVariants} className="group">
                  <Leaf className="w-8 h-8 md:w-10 md:h-10 text-green-600 mb-3 transition-transform group-hover:scale-110" />
                  <h4 className="font-bold text-lg mb-2">Sustainability</h4>
                  <p className="text-sm text-slate-500">Eco-responsible practices and optimized material efficiency.</p>
                </motion.div>
                <motion.div variants={childVariants} className="group">
                  <ShieldCheck className="w-8 h-8 md:w-10 md:h-10 text-blue-600 mb-3 transition-transform group-hover:scale-110" />
                  <h4 className="font-bold text-lg mb-2">Industrial Growth</h4>
                  <p className="text-sm text-slate-500">Advanced domestic stainless steel processing infrastructure.</p>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* --- ENHANCED UI: INTEGRATED COIL PROCESSING --- */}
      <section className="bg-slate-950 py-16 md:py-24 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: 'radial-gradient(#3b82f6 1px, transparent 1px)', backgroundSize: '30px 30px' }}></div>
        
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
            <div className="max-w-2xl text-center md:text-left">
              <h2 className="text-white text-3xl md:text-5xl font-bold mb-4">Integrated Coil Processing</h2>
              <p className="text-slate-400 text-base md:text-lg">
                Advanced lines designed with controlled parameters and repeatable process discipline.
              </p>
            </div>
            <div className="hidden md:flex gap-2 text-slate-500 text-sm font-mono border-l border-slate-800 pl-6">
              <span className="text-blue-500">10</span> Specialized Lines
            </div>
          </div>

          <motion.div
            className="grid grid-cols-1 lg:grid-cols-2 gap-3 md:gap-4"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {processingLines.map((line) => (
              <motion.div
                key={line.id}
                variants={childVariants}
                onMouseEnter={() => setHoveredLine(line.id)}
                onMouseLeave={() => setHoveredLine(null)}
                onClick={() => setHoveredLine(hoveredLine === line.id ? null : line.id)}
                className={`relative group flex items-start md:items-center p-4 md:p-6 rounded-xl border transition-all duration-300 cursor-pointer ${
                  hoveredLine === line.id
                  ? 'bg-blue-600 border-blue-400 md:translate-x-2 shadow-xl'
                  : 'bg-slate-900/50 border-slate-800'
                }`}
              >
                <div className={`text-xl md:text-2xl font-mono mr-4 md:mr-8 transition-colors ${hoveredLine === line.id ? 'text-white' : 'text-slate-700'}`}>
                  {line.id}
                </div>
                
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-1">
                    <span className={`${hoveredLine === line.id ? 'text-blue-200' : 'text-blue-500'}`}>
                      {line.icon}
                    </span>
                    <h4 className={`font-bold text-sm md:text-lg uppercase tracking-tight ${hoveredLine === line.id ? 'text-white' : 'text-slate-200'}`}>
                      {line.title}
                    </h4>
                  </div>
                  <p className={`text-[10px] md:text-xs font-semibold mb-1 ${hoveredLine === line.id ? 'text-blue-100' : 'text-slate-500'}`}>
                    {line.detail}
                  </p>
                  
                  <AnimatePresence>
                    {hoveredLine === line.id && (
                      <motion.p
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="text-xs md:text-sm text-blue-50 leading-relaxed pt-2 border-t border-blue-500/50 mt-2"
                      >
                        {line.desc}
                      </motion.p>
                    )}
                  </AnimatePresence>
                </div>
                
                <ChevronRight className={`w-5 h-5 mt-1 md:mt-0 transition-transform ${hoveredLine === line.id ? 'text-white rotate-90' : 'text-slate-700'}`} />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* --- CORE COMPETENCIES & QUALITY GOVERNANCE --- */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16">
            
            <div className="space-y-6 md:space-y-10 text-center lg:text-left">
              <div className="inline-block px-4 py-1 bg-blue-600 text-white text-[10px] font-bold uppercase tracking-widest rounded">Capabilities</div>
              <h3 className="text-3xl md:text-4xl font-black text-slate-900">Core Competencies</h3>
              
              <div className="space-y-6 text-left">
                {[
                  { title: "Precision Slitting", icon: <Maximize className="w-5 h-5 md:w-6 md:h-6" />, desc: "High-accuracy strip conversion for strict width tolerances." },
                  { title: "Cut-to-Length", icon: <Layers className="w-5 h-5 md:w-6 md:h-6" />, desc: "Stress-balanced, flatness-controlled sheets." },
                  { title: "Surface Integrity", icon: <Target className="w-5 h-5 md:w-6 md:h-6" />, desc: "Handling systems designed to eliminate micro-abrasion." }
                ].map((item, i) => (
                  <div key={i} className="flex gap-4 items-start">
                    <div className="bg-slate-100 p-2 md:p-3 rounded-lg text-blue-600 shrink-0">{item.icon}</div>
                    <div>
                      <h5 className="font-bold text-base md:text-lg mb-1">{item.title}</h5>
                      <p className="text-xs md:text-sm text-slate-500">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-2 bg-slate-50 rounded-3xl md:rounded-[40px] p-6 md:p-12 lg:p-16 border border-slate-100 relative overflow-hidden">
               <Settings className="absolute -top-10 -right-10 w-48 h-48 md:w-64 md:h-64 text-slate-900/5 animate-spin-slow pointer-events-none" />
              
               <div className="relative z-10">
                  <h3 className="text-2xl md:text-3xl font-black text-slate-900 mb-6 flex items-center gap-3 md:gap-4 justify-center lg:justify-start">
                    <CheckCircle2 className="w-8 h-8 md:w-10 md:h-10 text-green-500" />
                    Quality Governance
                  </h3>
                  <p className="text-sm md:text-lg text-slate-600 mb-8 max-w-xl text-center lg:text-left mx-auto lg:mx-0">
                    Quality is an <span className="text-blue-600 font-bold">integrated control framework</span> embedded within the operating architecture.
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {[
                      "In-line dimensional monitoring",
                      "Surface conformity assessment",
                      "Burr and camber analysis",
                      "Residual stress evaluation",
                      "Full material traceability"
                    ].map((list, i) => (
                      <div key={i} className="flex items-center gap-3 bg-white p-3 md:p-4 rounded-xl shadow-sm border border-slate-200/50">
                        <div className="w-2 h-2 bg-blue-600 rounded-full shrink-0"></div>
                        <span className="text-slate-800 font-medium text-xs md:text-sm">{list}</span>
                      </div>
                    ))}
                  </div>
               </div>
            </div>
          </div>
        </div>
      </section>

      <style jsx>{`
        .animate-spin-slow {
          animation: spin 14s linear infinite;
        }
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  );
};

export default ProductAdvantages;