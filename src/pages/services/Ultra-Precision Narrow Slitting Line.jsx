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
//       {/* <motion.div 
//         className="fixed bottom-8 right-8 z-50"
//         initial={{ opacity: 0, scale: 0.5 }}
//         animate={{ opacity: 1, scale: 1 }}
//       >
//         <button
//           onClick={() => setModalOpen(true)}
//           className="bg-cyan-500 hover:bg-cyan-400 text-black px-8 py-4 rounded-full font-bold flex items-center gap-3 shadow-[0_0_20px_rgba(6,182,212,0.5)] transition-all active:scale-95"
//         >
//           Request Technical Specs <ArrowRight className="w-5 h-5" />
//         </button>
//       </motion.div> */}

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

//       {/* HERO */}
//       <section className="relative h-[90vh] flex items-center justify-center">
//         <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
        
//         <div className="relative z-10 text-center px-6">
//           <motion.span 
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             className="text-cyan-400 tracking-[0.5em] text-sm font-bold uppercase mb-4 block"
//           >
//             Ultra-Precision Narrow Slitting
//           </motion.span>
//           <h1 className="text-7xl md:text-8xl font-black tracking-tighter mb-6 bg-gradient-to-b from-white to-slate-500 bg-clip-text text-transparent">
//             EUROSPLIT<span className="text-cyan-500">™</span>
//           </h1>
//           <h2 className="text-4xl md:text-5xl font-light tracking-widest text-slate-300 mb-8">
//             MICROSLIT 800
//           </h2>
//           <div className="flex flex-wrap justify-center gap-4 text-slate-400 font-mono text-sm mb-12">
//             <span className="px-4 py-1 border border-slate-700 rounded-full">THICKNESS: 0.10 – 1.20 mm</span>
//             <span className="px-4 py-1 border border-slate-700 rounded-full">WIDTH: 800 mm</span>
//             <span className="px-4 py-1 border border-slate-700 rounded-full">TOLERANCE: MICRON-LEVEL</span>
//           </div>
//           <button 
//             onClick={() => document.getElementById('features').scrollIntoView({ behavior: 'smooth' })}
//             className="group relative px-12 py-5 bg-white text-black font-bold rounded-xl overflow-hidden transition-all hover:pr-16"
//           >
//             <span className="relative z-10">VIEW ARCHITECTURE</span>
//             <Play className="absolute right-6 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-all w-5 h-5" />
//           </button>
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
     

//       {/* FOOTER STATS */}
      
//     </div>
//   );
// } 














import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Maximize,
  Activity,
  Scissors,
  Split,
  Target,
  Hash,
  Settings2,
  ShieldCheck,
  Cpu,
  Zap,
  ArrowRight,
  X,
  Play
} from "lucide-react";

export default function EurosplitMicroSlit800() {
  const [modalOpen, setModalOpen] = useState(false);

  const features = [
    {
      id: 1,
      icon: <Maximize className="w-9 h-9" />,
      title: "Precision Slitting Architecture",
      description: "Engineered for ultra-precision narrow strip production. The rigid slitter head frame ensures shaft parallelism and eliminates vibrational deviation. High concentricity arbors maintain cutting alignment under high rotational speeds, enabling repeatable micron-level accuracy.",
      color: "from-slate-400 to-slate-600",
    },
    {
      id: 2,
      icon: <Activity className="w-9 h-9" />,
      title: "Servo-Controlled Decoiling",
      description: "Incorporates servo-tension regulation to stabilise strip payoff. Torque modulation prevents sudden tension spikes and eliminates edge wave propagation, ensuring uniform feeding into the slitting head regardless of coil diameter.",
      color: "from-cyan-500 to-blue-600",
    },
    {
      id: 3,
      icon: <Scissors className="w-9 h-9" />,
      title: "High-Precision Tooling",
      description: "Precision-ground slitting knives ensure clean shearing action. Hardened alloy steel spacers maintain exact strip widths with minimised tool runout, resulting in burr-free edges and consistent strip tolerances.",
      color: "from-slate-500 to-cyan-600",
    },
    {
      id: 4,
      icon: <Split className="w-9 h-9" />,
      title: "Dynamic Strip Separation",
      description: "Engineered separator discs prevent strip overlap during high-speed operation. Adjustable tension separators maintain spacing and minimize surface friction to prevent scratches and ensure strip integrity.",
      color: "from-blue-500 to-indigo-600",
    },
    {
      id: 5,
      icon: <Target className="w-9 h-9" />,
      title: "Burr Minimisation Engineering",
      description: "Optimised knife geometry ensures near-zero burr formation. Cutting pressure distribution prevents edge deformation, maintaining edge integrity and delivering premium-quality slit edges for sensitive materials.",
      color: "from-cyan-400 to-slate-500",
    },
    {
      id: 6,
      icon: <Hash className="w-9 h-9" />,
      title: "Tension-Regulated Recoiling",
      description: "Recoiler torque control ensures compact and uniform coil formation. Continuous monitoring prevents coil telescoping and collapse, maintaining perfect coil geometry for high-quality finished products.",
      color: "from-indigo-400 to-blue-500",
    },
    {
      id: 7,
      icon: <Settings2 className="w-9 h-9" />,
      title: "Automatic Knife Positioning",
      description: "CNC-assisted knife positioning enables rapid changeover. Digital calibration ensures repeatable width accuracy while significantly reducing setup time and minimising operator intervention.",
      color: "from-slate-600 to-cyan-700",
    },
    {
      id: 8,
      icon: <ShieldCheck className="w-9 h-9" />,
      title: "Surface Protection & Guiding",
      description: "Low-friction guide systems and anti-scratch rollers preserve cosmetic finish quality. Strip tracking maintains alignment accuracy, ensuring surface-sensitive materials remain defect-free.",
      color: "from-blue-600 to-slate-800",
    },
    {
      id: 9,
      icon: <Cpu className="w-9 h-9" />,
      title: "Application Versatility",
      description: "Ideal for electronics, automotive trims, and precision fabrication. Supports stainless steel, aluminium, and coated materials, enabling narrow strip production for high-value automated forming.",
      color: "from-cyan-500 to-indigo-500",
    },
    {
      id: 10,
      icon: <Zap className="w-9 h-9" />,
      title: "High-Speed Efficiency",
      description: "Designed for continuous high-speed production with balanced rotating assemblies to reduce wear. Maintenance-friendly design and energy-efficient drives optimise long-term industrial performance.",
      color: "from-slate-400 to-blue-400",
    },
  ];

  return (
    <div className="bg-[#0a0f14] text-slate-100 font-sans antialiased overflow-x-hidden">
      {/* Floating CTA */}
    

      {/* Modal */}
      <AnimatePresence>
        {modalOpen && (
          <motion.div
            className="fixed inset-0 bg-slate-950/95 flex items-center justify-center z-[100] p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="bg-slate-900 border border-cyan-500/30 rounded-3xl p-8 max-w-lg w-full relative"
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
            >
              <button onClick={() => setModalOpen(false)} className="absolute top-6 right-6 text-slate-400 hover:text-white">
                <X size={24} />
              </button>
              <h2 className="text-3xl font-bold mb-2 text-cyan-400">MicroSlit 800</h2>
              <p className="text-slate-400 mb-8">Precision Slitting Inquiry</p>
              <form className="space-y-4">
                <input type="text" placeholder="Company Name" className="w-full bg-slate-800 border border-slate-700 rounded-xl px-5 py-3 focus:border-cyan-500 outline-none" />
                <input type="email" placeholder="Work Email" className="w-full bg-slate-800 border border-slate-700 rounded-xl px-5 py-3 focus:border-cyan-500 outline-none" />
                <select className="w-full bg-slate-800 border border-slate-700 rounded-xl px-5 py-3 focus:border-cyan-500 outline-none text-slate-400">
                  <option>Primary Material (Alu, SS, etc.)</option>
                  <option>Stainless Steel</option>
                  <option>Aluminium</option>
                  <option>Coated/Specialty</option>
                </select>
                <button className="w-full bg-cyan-500 hover:bg-cyan-400 text-black font-bold py-4 rounded-xl shadow-lg transition-all">
                  Submit Specification Request
                </button>
              </form>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* HERO SECTION WITH BACKGROUND IMAGE */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image Layer */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.pexels.com/photos/36190385/pexels-photo-36190385.jpeg" 
            alt="MicroSlit Industrial Machine"
            className="w-full h-full object-cover scale-105"
          />
          {/* Dark Overlay for text readability */}
          {/* <div className="absolute inset-0 bg-gradient-to-b from-[#0a0f14]/90 via-[#0a0f14]/70 to-[#0a0f14]" /> */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,#0a0f14_100%)] opacity-60" />
        </div>
        
        {/* Grid Pattern Overlay */}
        <div className="absolute inset-0 z-[1] bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-20" />
        
        <div className="relative z-10 text-center px-6">
          <motion.span 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-cyan-400 tracking-[0.5em] text-sm font-bold uppercase mb-4 block"
          >
            Ultra-Precision Narrow Slitting
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="text-7xl md:text-8xl font-black tracking-tighter mb-6 bg-gradient-to-b from-white to-slate-400 bg-clip-text text-transparent"
          >
            EUROSPLIT<span className="text-cyan-500">™</span>
          </motion.h1>
          <motion.h2 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-4xl md:text-5xl font-light tracking-widest text-slate-300 mb-8"
          >
            MICROSLIT 800
          </motion.h2>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="flex flex-wrap justify-center gap-4 text-slate-400 font-mono text-sm mb-12"
          >
            <span className="px-4 py-1 border border-slate-700 bg-slate-900/40 backdrop-blur-sm rounded-full text-white">THICKNESS: 0.10 – 1.20 mm</span>
            <span className="px-4 py-1 border border-slate-700 bg-slate-900/40 backdrop-blur-sm rounded-full text-white">WIDTH: 800 mm</span>
            <span className="px-4 py-1 border border-slate-700 bg-slate-900/40 backdrop-blur-sm rounded-full text-white">TOLERANCE: MICRON-LEVEL</span>
          </motion.div>

          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => document.getElementById('features').scrollIntoView({ behavior: 'smooth' })}
            className="group relative px-12 py-5 bg-white text-black font-bold rounded-xl overflow-hidden transition-all hover:pr-16"
          >
            <span className="relative z-10">VIEW ARCHITECTURE</span>
            <Play className="absolute right-6 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-all w-5 h-5" />
          </motion.button>
        </div>
      </section>

      {/* FEATURES - GRID */}
      <section id="features" className="py-32 bg-[#0c1219] relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-end mb-24">
            <div>
              <h2 className="text-5xl font-bold mb-6 tracking-tight">Micro-Dimensional <br/><span className="text-cyan-500">Mastery.</span></h2>
              <p className="text-slate-400 text-lg max-w-xl">
                The MicroSlit 800 isn't just a slitter; it's a calibration-grade instrument for the most demanding strip requirements in electronics and aerospace.
              </p>
            </div>
            <div className="flex justify-end gap-12 text-center border-l border-slate-800 pl-12">
              <div>
                <div className="text-4xl font-bold text-white">0.10</div>
                <div className="text-xs text-cyan-500 uppercase tracking-widest mt-2">Min Gauge (mm)</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-white">800</div>
                <div className="text-xs text-cyan-500 uppercase tracking-widest mt-2">Max Width (mm)</div>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((f, i) => (
              <motion.div
                key={f.id}
                whileHover={{ y: -10 }}
                className="p-8 bg-slate-900/50 border border-slate-800 rounded-3xl hover:border-cyan-500/50 transition-colors group"
              >
                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${f.color} flex items-center justify-center text-white mb-8 group-hover:scale-110 transition-transform`}>
                  {f.icon}
                </div>
                <h3 className="text-xl font-bold mb-4 flex items-center gap-3">
                  <span className="text-slate-700 font-mono text-sm">0{f.id}</span>
                  {f.title}
                </h3>
                <p className="text-slate-400 leading-relaxed text-sm">
                  {f.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* TECHNICAL CALLOUT */}
      

      {/* FOOTER STATS */}
     
    </div>
  );
}