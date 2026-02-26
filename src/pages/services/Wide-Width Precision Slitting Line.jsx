// import React, { useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import {
//   Maximize,
//   Activity,
//   Scissors,
//   Split,
//   Target,
//   Hash,
//   Settings2,
//   ShieldCheck,
//   Cpu,
//   Zap,
//   ArrowRight,
//   X,
//   Play
// } from "lucide-react";

// export default function EurosplitMicroSlit800() {
//   const [modalOpen, setModalOpen] = useState(false);

//   const features = [
//     {
//       id: 1,
//       icon: <Maximize className="w-9 h-9" />,
//       title: "Precision Slitting Architecture",
//       description: "Engineered for ultra-precision narrow strip production. The rigid slitter head frame ensures shaft parallelism and eliminates vibrational deviation. High concentricity arbors maintain cutting alignment under high rotational speeds, enabling repeatable micron-level accuracy.",
//       color: "from-slate-400 to-slate-600",
//     },
//     {
//       id: 2,
//       icon: <Activity className="w-9 h-9" />,
//       title: "Servo-Controlled Decoiling",
//       description: "Incorporates servo-tension regulation to stabilise strip payoff. Torque modulation prevents sudden tension spikes and eliminates edge wave propagation, ensuring uniform feeding into the slitting head regardless of coil diameter.",
//       color: "from-cyan-500 to-blue-600",
//     },
//     {
//       id: 3,
//       icon: <Scissors className="w-9 h-9" />,
//       title: "High-Precision Tooling",
//       description: "Precision-ground slitting knives ensure clean shearing action. Hardened alloy steel spacers maintain exact strip widths with minimised tool runout, resulting in burr-free edges and consistent strip tolerances.",
//       color: "from-slate-500 to-cyan-600",
//     },
//     {
//       id: 4,
//       icon: <Split className="w-9 h-9" />,
//       title: "Dynamic Strip Separation",
//       description: "Engineered separator discs prevent strip overlap during high-speed operation. Adjustable tension separators maintain spacing and minimize surface friction to prevent scratches and ensure strip integrity.",
//       color: "from-blue-500 to-indigo-600",
//     },
//     {
//       id: 5,
//       icon: <Target className="w-9 h-9" />,
//       title: "Burr Minimisation Engineering",
//       description: "Optimised knife geometry ensures near-zero burr formation. Cutting pressure distribution prevents edge deformation, maintaining edge integrity and delivering premium-quality slit edges for sensitive materials.",
//       color: "from-cyan-400 to-slate-500",
//     },
//     {
//       id: 6,
//       icon: <Hash className="w-9 h-9" />,
//       title: "Tension-Regulated Recoiling",
//       description: "Recoiler torque control ensures compact and uniform coil formation. Continuous monitoring prevents coil telescoping and collapse, maintaining perfect coil geometry for high-quality finished products.",
//       color: "from-indigo-400 to-blue-500",
//     },
//     {
//       id: 7,
//       icon: <Settings2 className="w-9 h-9" />,
//       title: "Automatic Knife Positioning",
//       description: "CNC-assisted knife positioning enables rapid changeover. Digital calibration ensures repeatable width accuracy while significantly reducing setup time and minimising operator intervention.",
//       color: "from-slate-600 to-cyan-700",
//     },
//     {
//       id: 8,
//       icon: <ShieldCheck className="w-9 h-9" />,
//       title: "Surface Protection & Guiding",
//       description: "Low-friction guide systems and anti-scratch rollers preserve cosmetic finish quality. Strip tracking maintains alignment accuracy, ensuring surface-sensitive materials remain defect-free.",
//       color: "from-blue-600 to-slate-800",
//     },
//     {
//       id: 9,
//       icon: <Cpu className="w-9 h-9" />,
//       title: "Application Versatility",
//       description: "Ideal for electronics, automotive trims, and precision fabrication. Supports stainless steel, aluminium, and coated materials, enabling narrow strip production for high-value automated forming.",
//       color: "from-cyan-500 to-indigo-500",
//     },
//     {
//       id: 10,
//       icon: <Zap className="w-9 h-9" />,
//       title: "High-Speed Efficiency",
//       description: "Designed for continuous high-speed production with balanced rotating assemblies to reduce wear. Maintenance-friendly design and energy-efficient drives optimise long-term industrial performance.",
//       color: "from-slate-400 to-blue-400",
//     },
//   ];

//   return (
//     <div className="bg-[#0a0f14] text-slate-100 font-sans antialiased overflow-x-hidden">
//       {/* Floating CTA */}
     

//       {/* Modal */}
//       <AnimatePresence>
//         {modalOpen && (
//           <motion.div
//             className="fixed inset-0 bg-slate-950/95 flex items-center justify-center z-[100] p-4"
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             exit={{ opacity: 0 }}
//           >
//             <motion.div
//               className="bg-slate-900 border border-cyan-500/30 rounded-3xl p-8 max-w-lg w-full relative"
//               initial={{ y: 50, opacity: 0 }}
//               animate={{ y: 0, opacity: 1 }}
//             >
//               <button onClick={() => setModalOpen(false)} className="absolute top-6 right-6 text-slate-400 hover:text-white">
//                 <X size={24} />
//               </button>
//               <h2 className="text-3xl font-bold mb-2 text-cyan-400">MicroSlit 800</h2>
//               <p className="text-slate-400 mb-8">Precision Slitting Inquiry</p>
//               <form className="space-y-4">
//                 <input type="text" placeholder="Company Name" className="w-full bg-slate-800 border border-slate-700 rounded-xl px-5 py-3 focus:border-cyan-500 outline-none" />
//                 <input type="email" placeholder="Work Email" className="w-full bg-slate-800 border border-slate-700 rounded-xl px-5 py-3 focus:border-cyan-500 outline-none" />
//                 <select className="w-full bg-slate-800 border border-slate-700 rounded-xl px-5 py-3 focus:border-cyan-500 outline-none text-slate-400">
//                   <option>Primary Material (Alu, SS, etc.)</option>
//                   <option>Stainless Steel</option>
//                   <option>Aluminium</option>
//                   <option>Coated/Specialty</option>
//                 </select>
//                 <button className="w-full bg-cyan-500 hover:bg-cyan-400 text-black font-bold py-4 rounded-xl shadow-lg transition-all">
//                   Submit Specification Request
//                 </button>
//               </form>
//             </motion.div>
//           </motion.div>
//         )}
//       </AnimatePresence>

//       {/* HERO SECTION WITH BACKGROUND IMAGE */}
//       <section className="relative h-screen flex items-center justify-center overflow-hidden">
//         {/* Background Image Layer */}
//         <div className="absolute inset-0 z-0">
//           <img 
//             src="https://images.pexels.com/photos/35787175/pexels-photo-35787175.jpeg" 
//             alt="MicroSlit Industrial Machine"
//             className="w-full h-full object-cover scale-105"
//           />
//           {/* Dark Overlay for text readability */}
//          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,#0a0f14_100%)] opacity-60" />
//         </div>
        
//         {/* Grid Pattern Overlay */}
//         <div className="absolute inset-0 z-[1] bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-20" />
        
//         <div className="relative z-10 text-center px-6">
//           <motion.span 
//             initial={{ opacity: 0, y: -20 }}
//             animate={{ opacity: 1, y: 0 }}
//             className="text-cyan-400 tracking-[0.5em] text-sm font-bold uppercase mb-4 block"
//           >
//             Ultra-Precision Narrow Slitting
//           </motion.span>
//           <motion.h1 
//             initial={{ opacity: 0, scale: 0.95 }}
//             animate={{ opacity: 1, scale: 1 }}
//             transition={{ duration: 0.8 }}
//             className="text-7xl md:text-8xl font-black tracking-tighter mb-6 bg-gradient-to-b from-white to-slate-400 bg-clip-text text-transparent"
//           >
//             EUROSPLIT<span className="text-cyan-500">™</span>
//           </motion.h1>
//           <motion.h2 
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             transition={{ delay: 0.3 }}
//             className="text-4xl md:text-5xl font-light tracking-widest text-slate-300 mb-8"
//           >
//             MICROSLIT 800
//           </motion.h2>
          
//           <motion.div 
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ delay: 0.5 }}
//             className="flex flex-wrap justify-center gap-4 text-slate-400 font-mono text-sm mb-12"
//           >
//             <span className="px-4 py-1 border border-slate-700 bg-slate-900/40 backdrop-blur-sm rounded-full text-white">THICKNESS: 0.10 – 1.20 mm</span>
//             <span className="px-4 py-1 border border-slate-700 bg-slate-900/40 backdrop-blur-sm rounded-full text-white">WIDTH: 800 mm</span>
//             <span className="px-4 py-1 border border-slate-700 bg-slate-900/40 backdrop-blur-sm rounded-full text-white">TOLERANCE: MICRON-LEVEL</span>
//           </motion.div>

//           <motion.button 
//             whileHover={{ scale: 1.05 }}
//             whileTap={{ scale: 0.95 }}
//             onClick={() => document.getElementById('features').scrollIntoView({ behavior: 'smooth' })}
//             className="group relative px-12 py-5 bg-white text-black font-bold rounded-xl overflow-hidden transition-all hover:pr-16"
//           >
//             <span className="relative z-10">VIEW ARCHITECTURE</span>
//             <Play className="absolute right-6 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-all w-5 h-5" />
//           </motion.button>
//         </div>
//       </section>

//       {/* FEATURES - GRID */}
//       <section id="features" className="py-32 bg-[#0c1219] relative">
//         <div className="max-w-7xl mx-auto px-6">
//           <div className="grid lg:grid-cols-2 gap-16 items-end mb-24">
//             <div>
//               <h2 className="text-5xl font-bold mb-6 tracking-tight">Micro-Dimensional <br/><span className="text-cyan-500">Mastery.</span></h2>
//               <p className="text-slate-400 text-lg max-w-xl">
//                 The MicroSlit 800 isn't just a slitter; it's a calibration-grade instrument for the most demanding strip requirements in electronics and aerospace.
//               </p>
//             </div>
//             <div className="flex justify-end gap-12 text-center border-l border-slate-800 pl-12">
//               <div>
//                 <div className="text-4xl font-bold text-white">0.10</div>
//                 <div className="text-xs text-cyan-500 uppercase tracking-widest mt-2">Min Gauge (mm)</div>
//               </div>
//               <div>
//                 <div className="text-4xl font-bold text-white">800</div>
//                 <div className="text-xs text-cyan-500 uppercase tracking-widest mt-2">Max Width (mm)</div>
//               </div>
//             </div>
//           </div>

//           <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
//             {features.map((f, i) => (
//               <motion.div
//                 key={f.id}
//                 whileHover={{ y: -10 }}
//                 className="p-8 bg-slate-900/50 border border-slate-800 rounded-3xl hover:border-cyan-500/50 transition-colors group"
//               >
//                 <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${f.color} flex items-center justify-center text-white mb-8 group-hover:scale-110 transition-transform`}>
//                   {f.icon}
//                 </div>
//                 <h3 className="text-xl font-bold mb-4 flex items-center gap-3">
//                   <span className="text-slate-700 font-mono text-sm">0{f.id}</span>
//                   {f.title}
//                 </h3>
//                 <p className="text-slate-400 leading-relaxed text-sm">
//                   {f.description}
//                 </p>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* TECHNICAL CALLOUT */}
    
//     </div>
//   );
// }





import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  BarChart3, 
  MoveHorizontal, 
  Dna, 
  Repeat, 
  Layers, 
  Trash2, 
  MonitorDot, 
  ShieldCheck, 
  Factory, 
  HardHat,
  X,
  ChevronRight,
  Menu
} from "lucide-react";

export default function EurosplitServoSlit1850() {
  const [activeTab, setActiveTab] = useState(0);
  const [modalOpen, setModalOpen] = useState(false);

  const technicalData = [
    { label: "Max Width", value: "1850 mm" },
    { label: "Thickness Range", value: "0.25 – 3.0 mm" },
    { label: "Drive System", value: "Servo-Synchronized" },
    { label: "Application", value: "Automotive / OEM" }
  ];

  const features = [
    {
      title: "Wide-Width Stability",
      icon: <MoveHorizontal className="w-5 h-5 md:w-6 md:h-6" />,
      desc: "Designed for wide coil processing with structural rigidity. The slitting head maintains alignment across large widths, while reinforced frame construction prevents deflection to ensure consistent strip geometry.",
    },
    {
      title: "Heavy-Duty Decoiling",
      icon: <Factory className="w-5 h-5 md:w-6 md:h-6" />,
      desc: "High-capacity decoilers manage wide and heavy coils. Torque-controlled drives ensure stable strip payoff and manage coil inertia smoothly.",
    },
    {
      title: "Precision Knife Alignment",
      icon: <Dna className="w-5 h-5 md:w-6 md:h-6" />,
      desc: "Digital knife positioning ensures dimensional accuracy. Precision spacers maintain exact strip widths with uniform load distribution.",
    },
    {
      title: "Loop & Tension Engineering",
      icon: <Repeat className="w-5 h-5 md:w-6 md:h-6" />,
      desc: "Accumulator loop systems stabilise strip tension. Dynamic monitoring prevents strip distortion and absorbs load fluctuations efficiently.",
    },
    {
      title: "Recoiling Integrity",
      icon: <Layers className="w-5 h-5 md:w-6 md:h-6" />,
      desc: "Recoiler systems maintain tight coil winding with torque feedback to prevent telescoping and ensure uniform coil build.",
    },
    {
      title: "Scrap Management",
      icon: <Trash2 className="w-5 h-5 md:w-6 md:h-6" />,
      desc: "Edge trimming modules remove damaged coil edges while scrap winding systems ensure clean operation and waste efficiency.",
    },
    {
      title: "Automation Efficiency",
      icon: <MonitorDot className="w-5 h-5 md:w-6 md:h-6" />,
      desc: "Automated setups and digital presets reduce downtime. Rapid tool changes enhance production flexibility and productivity.",
    },
    {
      title: "Surface Preservation",
      icon: <ShieldCheck className="w-5 h-5 md:w-6 md:h-6" />,
      desc: "Anti-abrasion rollers protect coated surfaces from scratches, ensuring material aesthetics remain intact.",
    },
    {
      title: "Industrial Processing",
      icon: <BarChart3 className="w-5 h-5 md:w-6 md:h-6" />,
      desc: "Ideal for service centres and OEM supply chains. Supports automotive, appliance, and construction sectors.",
    },
    {
      title: "Industrial Durability",
      icon: <HardHat className="w-5 h-5 md:w-6 md:h-6" />,
      desc: "Heavy-duty components and balanced rotating assemblies ensure long service life and reduced operating costs.",
    }
  ];

  return (
    <div className="bg-[#05070a] text-slate-200 min-h-screen font-sans selection:bg-emerald-500/30 overflow-x-hidden">
      
      {/* HERO SECTION */}
      <section className="relative pt-20 md:pt-32 pb-12 md:pb-20 px-4 md:px-8 overflow-hidden">
        {/* Background Visual */}
        <div className="absolute top-0 right-0 w-full md:w-2/3 h-full opacity-20 md:opacity-30 pointer-events-none">
          <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-l from-emerald-500/20 to-[#05070a]" />
          <img 
            src="https://images.pexels.com/photos/35787175/pexels-photo-35787175.jpeg" 
            alt="Steel Processing"
            className="w-full h-full object-cover grayscale"
          />
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl"
          >
            <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-black tracking-tighter leading-[0.9] mb-6">
              SERVO<span className="text-emerald-500">SLIT</span><br />1850
            </h1>
            <p className="text-slate-400 text-lg md:text-xl leading-relaxed mb-10 border-l-2 border-emerald-500 pl-4 md:pl-6 max-w-xl">
              The industry standard for wide-width precision. Engineered for high-volume OEM supply chains processing coils up to 1850mm.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4 mb-10">
              {technicalData.map((data, idx) => (
                <div key={idx} className="bg-white/5 p-4 rounded-xl border border-white/5 backdrop-blur-sm">
                  <div className="text-[10px] uppercase tracking-widest text-emerald-500 font-bold mb-1">{data.label}</div>
                  <div className="text-base md:text-lg font-semibold">{data.value}</div>
                </div>
              ))}
            </div>

            <button 
              onClick={() => setModalOpen(true)}
              className="w-full sm:w-auto bg-emerald-500 text-black px-8 py-4 rounded-full font-bold uppercase tracking-wider hover:bg-emerald-400 transition-colors"
            >
              Request Technical Specs
            </button>
          </motion.div>
        </div>
      </section>

      {/* INTERACTIVE FEATURE EXPLORER */}
      <section className="py-16 md:py-24 px-4 md:px-8 bg-[#080b10]">
        <div className="max-w-7xl mx-auto">
          <div className="mb-10 md:mb-16 text-center md:text-left">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-2">System Architecture</h2>
            <p className="text-slate-500">Select a module to view technical capabilities</p>
          </div>

          <div className="grid lg:grid-cols-12 gap-8 md:gap-12">
            {/* Sidebar Navigation - Scrollable on Mobile */}
            <div className="lg:col-span-4 flex flex-row lg:flex-col gap-2 overflow-x-auto lg:overflow-x-visible pb-4 lg:pb-0 snap-x">
              {features.map((item, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveTab(idx)}
                  className={`flex-shrink-0 snap-start flex items-center justify-between p-3 md:p-4 rounded-xl transition-all text-left group min-w-[240px] lg:min-w-full ${
                    activeTab === idx 
                    ? "bg-emerald-500 text-black shadow-[0_0_30px_rgba(16,185,129,0.2)]" 
                    : "bg-white/5 hover:bg-white/10 text-slate-300"
                  }`}
                >
                  <div className="flex items-center gap-3 md:gap-4">
                    <span className={activeTab === idx ? "text-black" : "text-emerald-500"}>{item.icon}</span>
                    <span className="font-bold text-xs md:text-sm uppercase tracking-wider">{item.title}</span>
                  </div>
                  <ChevronRight className={`hidden md:block w-4 h-4 transition-transform ${activeTab === idx ? "rotate-90" : ""}`} />
                </button>
              ))}
            </div>

            {/* Content Display */}
            <div className="lg:col-span-8">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeTab}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="bg-gradient-to-br from-slate-900 to-black border border-white/10 p-6 md:p-12 rounded-2xl md:rounded-3xl min-h-[350px] md:min-h-[450px] flex flex-col justify-center relative overflow-hidden"
                >
                  <div className="absolute top-0 right-0 p-8 opacity-5">
                    {features[activeTab].icon}
                  </div>
                  <div className="text-emerald-500 font-mono text-xs md:text-sm mb-4 tracking-widest">
                    MODULE 0{activeTab + 1} // PRECISION_SYSTEMS
                  </div>
                  <h3 className="text-3xl md:text-5xl font-bold mb-4 md:mb-6">{features[activeTab].title}</h3>
                  <p className="text-base md:text-xl text-slate-400 leading-relaxed max-w-2xl">
                    {features[activeTab].desc}
                  </p>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </section>

      {/* MODAL */}
      <AnimatePresence>
        {modalOpen && (
          <motion.div 
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <div className="absolute inset-0 bg-black/90 backdrop-blur-md" onClick={() => setModalOpen(false)} />
            <motion.div 
              className="bg-[#111] border border-emerald-500/30 w-full max-w-xl p-6 md:p-10 rounded-2xl md:rounded-3xl relative z-10 max-h-[90vh] overflow-y-auto"
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
            >
              <button onClick={() => setModalOpen(false)} className="absolute top-4 right-4 md:top-6 md:right-6 text-slate-500 hover:text-white transition-colors">
                <X size={28} />
              </button>
              <h2 className="text-2xl md:text-3xl font-bold mb-6">Inquiry Portal</h2>
              <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <input type="text" placeholder="Name" className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 outline-none focus:border-emerald-500 w-full" />
                  <input type="text" placeholder="Company" className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 outline-none focus:border-emerald-500 w-full" />
                </div>
                <input type="email" placeholder="Email Address" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 outline-none focus:border-emerald-500" />
                <textarea placeholder="Specific Material Requirements..." rows="4" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 outline-none focus:border-emerald-500" />
                <button className="w-full bg-emerald-500 text-black font-black py-4 rounded-xl hover:bg-emerald-400 transition-transform active:scale-[0.98]">
                  SEND REQUEST
                </button>
              </form>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}