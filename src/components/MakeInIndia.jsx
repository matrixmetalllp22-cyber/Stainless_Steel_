// import React from 'react';
// import { 
//   Settings, 
//   ShieldCheck, 
//   Leaf, 
//   Globe, 
//   Zap, 
//   CheckCircle2, 
//   Factory, 
//   Layers, 
//   Maximize, 
//   Target 
// } from "lucide-react";

// const ProductAdvantages = () => {
//   const processingLines = [
//     { id: "01", title: "Continuous No.4 Surface Finishing", desc: "Uniform satin grain structure for architectural and premium engineering." },
//     { id: "02", title: "Industrial Degreasing & Cleaning", desc: "Elimination of mill oils and contaminants via calibrated chemical control." },
//     { id: "03", title: "High-Temperature Hot Wash", desc: "Thermal treatment to optimize surface purity for bonding and fabrication." },
//     { id: "04", title: "UV Surface Conditioning", desc: "UV activation for organic contamination removal and high-purity applications." },
//     { id: "05", title: "Continuous Film Lamination", desc: "Calibrated pressure control for surface preservation during export and transit." },
//     { id: "06", title: "Automated Interleaving Paper", desc: "Technical paper insertion to prevent micro-abrasion in cosmetic grades." },
//     { id: "07", title: "Precision Tension Levelling", desc: "Flatness correction to eliminate residual stress for robotic/laser environments." },
//     { id: "08", title: "Edge Refinement & Burr Minimization", desc: "Calibrated conditioning for bend performance and operator safety." },
//     { id: "09", title: "Integrated Inspection & Validation", desc: "Dimensional verification and batch traceability prior to dispatch." },
//     { id: "10", title: "Advanced Custom Surface Engineering", desc: "Modular platform for bespoke industrial and export-grade standards." },
//   ];

//   return (
//     <div className="bg-white text-slate-900 font-sans">
//       {/* --- SECTION 1: STRATEGIC ADVANTAGE --- */}
//       <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
//         <div className="container mx-auto px-6">
//           <div className="flex flex-col lg:flex-row items-center gap-16">
//             <div className="lg:w-1/2 relative">
//               <div className="absolute -top-10 -left-10 w-40 h-40 bg-blue-100 rounded-full mix-blend-multiply filter blur-2xl opacity-70 animate-pulse"></div>
//               <img 
//                 src="https://www.shutterstock.com/shutterstock/photos/2491400853/display_1500/stock-vector-make-in-india-concept-vector-illustration-lion-made-with-blue-gears-industrial-development-2491400853.jpg" 
//                 alt="Make in India Lion" 
//                 className="relative z-10 w-full max-w-md mx-auto drop-shadow-2xl transition-transform hover:scale-105 duration-700"
//               />
//             </div>
            
//             <div className="lg:w-1/2">
//               <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-6 leading-tight">
//                 Engineered for <span className="text-blue-600">Precision.</span><br />
//                 Driven by <span className="text-red-600">Responsibility.</span>
//               </h2>
//               <p className="text-lg text-slate-600 mb-8 leading-relaxed">
//                 Matrix Metals LLP delivers stainless steel solutions engineered for performance, longevity, and environmental responsibility. As a proud participant in the <strong>Make in India</strong> initiative, we reduce dependency on external processing while ensuring international-grade standards.
//               </p>
              
//               <div className="grid sm:grid-cols-2 gap-6">
//                 <div className="flex gap-4">
//                   <ShieldCheck className="w-8 h-8 text-blue-600 shrink-0" />
//                   <div>
//                     <h4 className="font-bold">Disciplined Execution</h4>
//                     <p className="text-sm text-slate-500">Governed by calibrated systems and measurable parameters.</p>
//                   </div>
//                 </div>
//                 <div className="flex gap-4">
//                   <Leaf className="w-8 h-8 text-green-600 shrink-0" />
//                   <div>
//                     <h4 className="font-bold">Sustainability</h4>
//                     <p className="text-sm text-slate-500">Energy-conscious equipment and optimized material efficiency.</p>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* --- SECTION 2: TECHNICAL INFRASTRUCTURE --- */}
//       <section className="py-20 bg-slate-900 text-white overflow-hidden">
//         <div className="container mx-auto px-6">
//           <div className="mb-16">
//             <h2 className="text-3xl md:text-4xl font-bold mb-4">Integrated Coil Processing</h2>
//             <p className="text-slate-400 max-w-3xl">
//               Our portfolio of advanced coil-to-coil processing lines is engineered to enhance surface integrity and dimensional stability.
//             </p>
//           </div>

//           <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-px bg-slate-800 border border-slate-800">
//             {processingLines.map((line) => (
//               <div key={line.id} className="bg-slate-900 p-6 hover:bg-slate-800 transition-colors group">
//                 <span className="text-blue-500 font-mono text-xl block mb-4 group-hover:scale-110 transition-transform">
//                   {line.id}
//                 </span>
//                 <h4 className="font-bold text-sm mb-2 h-10 leading-tight">{line.title}</h4>
//                 <p className="text-xs text-slate-500 leading-relaxed">{line.desc}</p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* --- SECTION 3: CORE COMPETENCIES & GOVERNANCE --- */}
//       <section className="py-24 bg-white">
//         <div className="container mx-auto px-6">
//           <div className="grid lg:grid-cols-3 gap-12">
            
//             {/* Column 1: Competencies */}
//             <div className="space-y-8">
//               <h3 className="text-2xl font-bold border-b-2 border-blue-600 pb-2 inline-block">Core Competencies</h3>
//               <div className="space-y-6">
//                 <div>
//                   <h5 className="font-bold flex items-center gap-2"><Maximize className="w-4 h-4 text-blue-600" /> Precision Slitting</h5>
//                   <p className="text-sm text-slate-600">High-accuracy strip conversion for automated feeding and laser processing.</p>
//                 </div>
//                 <div>
//                   <h5 className="font-bold flex items-center gap-2"><Layers className="w-4 h-4 text-blue-600" /> Cut-to-Length</h5>
//                   <p className="text-sm text-slate-600">Stress-balanced sheets calibrated to eliminate coil set memory.</p>
//                 </div>
//                 <div>
//                   <h5 className="font-bold flex items-center gap-2"><Target className="w-4 h-4 text-blue-600" /> Surface Engineering</h5>
//                   <p className="text-sm text-slate-600">Handling systems designed to eliminate micro-abrasion and cosmetic deviation.</p>
//                 </div>
//               </div>
//             </div>

//             {/* Column 2: Quality Governance */}
//             <div className="bg-gray-50 p-8 rounded-3xl border border-gray-100">
//               <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
//                 <CheckCircle2 className="text-green-600" /> Quality Governance
//               </h3>
//               <p className="text-sm text-slate-600 mb-6">Quality is an integrated control framework, not a terminal inspection.</p>
//               <ul className="space-y-3 text-sm font-medium">
//                 <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-blue-600 rounded-full" /> In-line dimensional monitoring</li>
//                 <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-blue-600 rounded-full" /> Surface conformity assessment</li>
//                 <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-blue-600 rounded-full" /> Burr and camber analysis</li>
//                 <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-blue-600 rounded-full" /> Residual stress evaluation</li>
//                 <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-blue-600 rounded-full" /> Full material traceability</li>
//               </ul>
//             </div>

//             {/* Column 3: Industrial Sectors */}
//             <div className="space-y-8">
//               <h3 className="text-2xl font-bold border-b-2 border-red-600 pb-2 inline-block">Sectors Served</h3>
//               <div className="flex flex-wrap gap-2">
//                 {["Aerospace & Defence", "Automotive & EV", "Infrastructure", "Chemical Equipment", "Automation Systems"].map((sector) => (
//                   <span key={sector} className="px-4 py-2 bg-slate-100 rounded-full text-xs font-bold text-slate-700 uppercase tracking-wider">
//                     {sector}
//                   </span>
//                 ))}
//               </div>
//               <div className="p-6 bg-blue-600 rounded-2xl text-white">
//                 <h4 className="font-bold mb-2">Corporate Commitment</h4>
//                 <p className="text-xs opacity-90 leading-relaxed">
//                   Every metre of stainless steel processed reflects controlled methodology and engineered intent. We stand for measurable precision and industrial trust.
//                 </p>
//               </div>
//             </div>

//           </div>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default ProductAdvantages;




// import React, { useState } from 'react';
// import { motion, AnimatePresence } from 'framer-motion';
// import { 
//   Settings, 
//   ShieldCheck, 
//   Leaf, 
//   CheckCircle2, 
//   Maximize, 
//   Layers, 
//   Target,
//   ChevronRight,
//   Activity,
//   Box,
//   Cpu
// } from "lucide-react";

// const ProductAdvantages = () => {
//   const [hoveredLine, setHoveredLine] = useState(null);

//   const processingLines = [
//     { id: "01", title: "No.4 Surface Finishing", detail: "Continuous Coil-to-Coil", desc: "Abrasive belt system delivering uniform satin grain structure with zero surface distortion.", icon: <Activity className="w-5 h-5" /> },
//     { id: "02", title: "Industrial Degreasing", detail: "Chemical Surface Cleaning", desc: "Eliminates mill oils and lubricants using calibrated chemical concentration and temperature control.", icon: <Settings className="w-5 h-5" /> },
//     { id: "03", title: "Hot Wash & Rinse", detail: "Thermal Treatment", desc: "Enhances surface purity and optimizes material preparation for secondary processing.", icon: <Activity className="w-5 h-5" /> },
//     { id: "04", title: "UV Conditioning", detail: "Radiation Treatment", desc: "Advanced ultraviolet system for organic contamination removal and enhanced surface activation.", icon: <Cpu className="w-5 h-5" /> },
//     { id: "05", title: "Film Lamination", detail: "Continuous Protective Line", desc: "Calibrated pressure control applying multiple adhesion grades for transit and installation protection.", icon: <Layers className="w-5 h-5" /> },
//     { id: "06", title: "Paper Interleaving", detail: "Automated Application", desc: "Inserting technical protective paper to prevent micro-abrasion in cosmetic-grade materials.", icon: <Box className="w-5 h-5" /> },
//     { id: "07", title: "Tension Levelling", detail: "Flatness Correction", desc: "High-accuracy system engineered to eliminate residual stress, coil set memory, and waviness.", icon: <Maximize className="w-5 h-5" /> },
//     { id: "08", title: "Edge Refinement", detail: "Burr Minimisation", desc: "Calibrated conditioning ensures clean geometry, improving bend performance and safety.", icon: <Target className="w-5 h-5" /> },
//     { id: "09", title: "Integrated Inspection", detail: "Dimensional Validation", desc: "Structured system verifying specifications and batch traceability prior to dispatch.", icon: <ShieldCheck className="w-5 h-5" /> },
//     { id: "10", title: "Custom Surface Engineering", detail: "Bespoke Finishing", desc: "Modular platform for specialized treatments aligned with premium international standards.", icon: <Settings className="w-5 h-5" /> },
//   ];

//   return (
//     <div className="bg-white text-slate-900 overflow-x-hidden">
      
//       {/* --- STRATEGIC ADVANTAGE & MAKE IN INDIA --- */}
//       <section className="py-24 bg-gradient-to-b from-slate-50 to-white">
//         <div className="container mx-auto px-6">
//           <div className="flex flex-col lg:flex-row items-center gap-16">
//             <motion.div 
//               initial={{ opacity: 0, x: -50 }}
//               whileInView={{ opacity: 1, x: 0 }}
//               className="lg:w-1/2 relative"
//             >
//               <div className="absolute -top-12 -left-12 w-64 h-64 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-60 animate-pulse"></div>
//               <img 
//                 src="https://www.shutterstock.com/shutterstock/photos/2491400853/display_1500/stock-vector-make-in-india-concept-vector-illustration-lion-made-with-blue-gears-industrial-development-2491400853.jpg" 
//                 alt="Make in India Lion" 
//                 className="relative z-10 w-full max-w-lg mx-auto drop-shadow-2xl"
//               />
//             </motion.div>
            
//             <div className="lg:w-1/2">
//               <h2 className="text-4xl md:text-6xl font-black text-slate-900 mb-8 leading-[1.1]">
//                 Precision. <br />
//                 <span className="text-blue-600">Product Advantages.</span>
//               </h2>
//               <p className="text-xl text-slate-600 mb-10 leading-relaxed font-light">
//                 Matrix Metals LLP delivers stainless steel solutions engineered for performance, longevity, and environmental responsibility. Our advantage lies in <span className="text-slate-900 font-semibold uppercase tracking-tighter">disciplined execution</span> governed by calibrated systems.
//               </p>
              
//               <div className="grid sm:grid-cols-2 gap-8 border-t border-slate-200 pt-10">
//                 <div className="group">
//                   <Leaf className="w-10 h-10 text-green-600 mb-4 transition-transform group-hover:scale-110" />
//                   <h4 className="font-bold text-lg mb-2">Sustainability</h4>
//                   <p className="text-sm text-slate-500 leading-relaxed">Eco-responsible practices including efficient water usage and optimized material efficiency.</p>
//                 </div>
//                 <div className="group">
//                   <ShieldCheck className="w-10 h-10 text-blue-600 mb-4 transition-transform group-hover:scale-110" />
//                   <h4 className="font-bold text-lg mb-2">Industrial Growth</h4>
//                   <p className="text-sm text-slate-500 leading-relaxed">Strengthening domestic manufacturing through advanced stainless steel processing infrastructure.</p>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* --- ENHANCED UI: INTEGRATED COIL PROCESSING --- */}
//       <section className="bg-slate-950 py-24 relative overflow-hidden">
//         {/* Decorative Grid Pattern */}
//         <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: 'radial-gradient(#3b82f6 1px, transparent 1px)', backgroundSize: '30px 30px' }}></div>
        
//         <div className="container mx-auto px-6 relative z-10">
//           <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
//             <div className="max-w-2xl">
//               <h2 className="text-white text-4xl md:text-5xl font-bold mb-6">Integrated Coil Processing & Surface Engineering</h2>
//               <p className="text-slate-400 text-lg">
//                 Our portfolio of advanced lines is designed with controlled parameters and repeatable process discipline, aligned with international standards.
//               </p>
//             </div>
//             <div className="flex gap-2 text-slate-500 text-sm font-mono border-l border-slate-800 pl-6">
//               <span className="text-blue-500">10</span> Specialized Lines
//             </div>
//           </div>

//           <div className="grid lg:grid-cols-2 gap-4">
//             {processingLines.map((line, idx) => (
//               <motion.div
//                 key={line.id}
//                 onMouseEnter={() => setHoveredLine(line.id)}
//                 onMouseLeave={() => setHoveredLine(null)}
//                 className={`relative group flex items-center p-6 rounded-xl border transition-all duration-300 cursor-default ${
//                   hoveredLine === line.id 
//                   ? 'bg-blue-600 border-blue-400 translate-x-2' 
//                   : 'bg-slate-900/50 border-slate-800'
//                 }`}
//               >
//                 <div className={`text-2xl font-mono mr-8 transition-colors ${hoveredLine === line.id ? 'text-white' : 'text-slate-700'}`}>
//                   {line.id}
//                 </div>
                
//                 <div className="flex-1">
//                   <div className="flex items-center gap-3 mb-1">
//                     <span className={`${hoveredLine === line.id ? 'text-blue-200' : 'text-blue-500'}`}>
//                       {line.icon}
//                     </span>
//                     <h4 className={`font-bold text-lg uppercase tracking-tight transition-colors ${hoveredLine === line.id ? 'text-white' : 'text-slate-200'}`}>
//                       {line.title}
//                     </h4>
//                   </div>
//                   <p className={`text-xs font-semibold mb-2 transition-colors ${hoveredLine === line.id ? 'text-blue-100' : 'text-slate-500'}`}>
//                     {line.detail}
//                   </p>
                  
//                   <AnimatePresence>
//                     {hoveredLine === line.id && (
//                       <motion.p
//                         initial={{ opacity: 0, height: 0 }}
//                         animate={{ opacity: 1, height: 'auto' }}
//                         exit={{ opacity: 0, height: 0 }}
//                         className="text-sm text-blue-50 leading-relaxed pt-2 border-t border-blue-500/50"
//                       >
//                         {line.desc}
//                       </motion.p>
//                     )}
//                   </AnimatePresence>
//                 </div>
                
//                 <ChevronRight className={`w-5 h-5 transition-transform ${hoveredLine === line.id ? 'text-white rotate-90' : 'text-slate-700'}`} />
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* --- CORE COMPETENCIES & QUALITY GOVERNANCE --- */}
//       <section className="py-24 bg-white">
//         <div className="container mx-auto px-6">
//           <div className="grid lg:grid-cols-3 gap-16">
            
//             <div className="space-y-10">
//               <div className="inline-block px-4 py-1 bg-blue-600 text-white text-xs font-bold uppercase tracking-widest rounded">Capabilities</div>
//               <h3 className="text-3xl font-black text-slate-900">Core Competencies</h3>
//               <div className="space-y-8">
//                 {[
//                   { title: "Precision Slitting", icon: <Maximize />, desc: "High-accuracy strip conversion engineered for strict width tolerances." },
//                   { title: "Cut-to-Length", icon: <Layers />, desc: "Stress-balanced, flatness-controlled sheets calibrated to eliminate coil set." },
//                   { title: "Surface Integrity", icon: <Target />, desc: "Handling systems designed to eliminate micro-abrasion." }
//                 ].map((item, i) => (
//                   <div key={i} className="flex gap-4">
//                     <div className="bg-slate-100 p-3 rounded-lg h-fit text-blue-600">{item.icon}</div>
//                     <div>
//                       <h5 className="font-bold text-lg mb-1">{item.title}</h5>
//                       <p className="text-sm text-slate-500">{item.desc}</p>
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             </div>

//             <div className="lg:col-span-2 bg-slate-50 rounded-[40px] p-10 md:p-16 border border-slate-100 relative overflow-hidden">
//                <div className="absolute top-0 right-0 p-12 opacity-5">
//                   <Settings className="w-64 h-64 text-slate-900 animate-spin-slow" />
//                </div>
               
//                <div className="relative z-10">
//                   <h3 className="text-3xl font-black text-slate-900 mb-8 flex items-center gap-4">
//                     <CheckCircle2 className="w-10 h-10 text-green-500" />
//                     Quality Governance
//                   </h3>
//                   <p className="text-lg text-slate-600 mb-10 max-w-xl">
//                     At Matrix Metals LLP, quality is embedded within the operating architecture. It is not a terminal inspection—it is an <span className="text-blue-600 font-bold">integrated control framework</span>.
//                   </p>

//                   <div className="grid md:grid-cols-2 gap-6">
//                     {[
//                       "In-line dimensional monitoring",
//                       "Surface conformity assessment",
//                       "Burr and camber analysis",
//                       "Residual stress evaluation",
//                       "Full material traceability"
//                     ].map((list, i) => (
//                       <div key={i} className="flex items-center gap-3 bg-white p-4 rounded-xl shadow-sm border border-slate-200/50">
//                         <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
//                         <span className="text-slate-800 font-medium text-sm">{list}</span>
//                       </div>
//                     ))}
//                   </div>

//                   <div className="mt-12 p-8 bg-slate-900 rounded-2xl text-white flex flex-col md:flex-row items-center justify-between gap-6">
//                     <div>
//                       <h5 className="font-bold text-xl mb-1">Industrial Sectors Served</h5>
//                       <p className="text-slate-400 text-sm">Aerospace, Automotive, Infrastructure, and more.</p>
//                     </div>
//                     <div className="flex -space-x-2">
//                        {/* Placeholder for small sector icon badges if needed */}
//                        <div className="px-4 py-2 bg-blue-600 rounded-full text-xs font-bold">Aerospace</div>
//                        <div className="px-4 py-2 bg-slate-800 border border-slate-700 rounded-full text-xs font-bold">Automotive</div>
//                        <div className="px-4 py-2 bg-slate-800 border border-slate-700 rounded-full text-xs font-bold">Defence</div>
//                     </div>
//                   </div>
//                </div>
//             </div>

//           </div>
//         </div>
//       </section>

//       <style jsx>{`
//         .animate-spin-slow {
//           animation: spin 12s linear infinite;
//         }
//         @keyframes spin {
//           from { transform: rotate(0deg); }
//           to { transform: rotate(360deg); }
//         }
//       `}</style>
//     </div>
//   );
// };

// export default ProductAdvantages;










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

  // === NEW: Framer Motion Variants for rich scroll-triggered & hover animations ===
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.15,
      },
    },
  };

  const childVariants = {
    hidden: { opacity: 0, y: 60 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.65, ease: [0.25, 0.1, 0.25, 1] },
    },
  };

  const processingVariants = {
    hidden: { opacity: 0, y: 70, scale: 0.96 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] },
    },
  };

  const fadeInLeft = {
    hidden: { opacity: 0, x: -60 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <div className="bg-white text-slate-900 overflow-x-hidden">
     
      {/* --- STRATEGIC ADVANTAGE & MAKE IN INDIA --- */}
      <section className="py-24 bg-gradient-to-b from-slate-50 to-white">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            {/* Enhanced image with gentle floating + hover scale */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInLeft}
              className="lg:w-1/2 relative"
            >
              <div className="absolute -top-12 -left-12 w-64 h-64 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-60 animate-pulse"></div>
              <motion.img
                src="https://www.shutterstock.com/shutterstock/photos/2491400853/display_1500/stock-vector-make-in-india-concept-vector-illustration-lion-made-with-blue-gears-industrial-development-2491400853.jpg"
                alt="Make in India Lion"
                className="relative z-10 w-full max-w-lg mx-auto drop-shadow-2xl"
                whileHover={{ scale: 1.04, rotate: 1 }}
                transition={{ type: "spring", stiffness: 280, damping: 18 }}
              />
            </motion.div>
           
            <motion.div
              initial={{ opacity: 0, x: 60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="lg:w-1/2"
            >
              <h2 className="text-4xl md:text-6xl font-black text-slate-900 mb-8 leading-[1.1]">
                Precision. <br />
                <span className="text-blue-600">Product Advantages.</span>
              </h2>
              <p className="text-xl text-slate-600 mb-10 leading-relaxed font-light">
                Matrix Metals LLP delivers stainless steel solutions engineered for performance, longevity, and environmental responsibility. Our advantage lies in <span className="text-slate-900 font-semibold uppercase tracking-tighter">disciplined execution</span> governed by calibrated systems.
              </p>
             
              {/* Staggered advantage cards */}
              <motion.div
                className="grid sm:grid-cols-2 gap-8 border-t border-slate-200 pt-10"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                <motion.div variants={childVariants} className="group">
                  <Leaf className="w-10 h-10 text-green-600 mb-4 transition-transform group-hover:scale-110" />
                  <h4 className="font-bold text-lg mb-2">Sustainability</h4>
                  <p className="text-sm text-slate-500 leading-relaxed">Eco-responsible practices including efficient water usage and optimized material efficiency.</p>
                </motion.div>
                <motion.div variants={childVariants} className="group">
                  <ShieldCheck className="w-10 h-10 text-blue-600 mb-4 transition-transform group-hover:scale-110" />
                  <h4 className="font-bold text-lg mb-2">Industrial Growth</h4>
                  <p className="text-sm text-slate-500 leading-relaxed">Strengthening domestic manufacturing through advanced stainless steel processing infrastructure.</p>
                </motion.div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* --- ENHANCED UI: INTEGRATED COIL PROCESSING --- */}
      <section className="bg-slate-950 py-24 relative overflow-hidden">
        {/* Decorative Grid Pattern */}
        <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: 'radial-gradient(#3b82f6 1px, transparent 1px)', backgroundSize: '30px 30px' }}></div>
       
        <div className="container mx-auto px-6 relative z-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div className="max-w-2xl">
              <h2 className="text-white text-4xl md:text-5xl font-bold mb-6">Integrated Coil Processing & Surface Engineering</h2>
              <p className="text-slate-400 text-lg">
                Our portfolio of advanced lines is designed with controlled parameters and repeatable process discipline, aligned with international standards.
              </p>
            </div>
            <div className="flex gap-2 text-slate-500 text-sm font-mono border-l border-slate-800 pl-6">
              <span className="text-blue-500">10</span> Specialized Lines
            </div>
          </div>

          {/* Staggered processing lines with enhanced entrance */}
          <motion.div
            className="grid lg:grid-cols-2 gap-4"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
          >
            {processingLines.map((line, idx) => (
              <motion.div
                key={line.id}
                variants={processingVariants}
                onMouseEnter={() => setHoveredLine(line.id)}
                onMouseLeave={() => setHoveredLine(null)}
                className={`relative group flex items-center p-6 rounded-xl border transition-all duration-300 cursor-default ${
                  hoveredLine === line.id
                  ? 'bg-blue-600 border-blue-400 translate-x-2 shadow-2xl shadow-blue-900/50'
                  : 'bg-slate-900/50 border-slate-800'
                }`}
                whileHover={{ scale: 1.015 }}
              >
                <div className={`text-2xl font-mono mr-8 transition-colors ${hoveredLine === line.id ? 'text-white' : 'text-slate-700'}`}>
                  {line.id}
                </div>
               
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-1">
                    <span className={`${hoveredLine === line.id ? 'text-blue-200' : 'text-blue-500'}`}>
                      {line.icon}
                    </span>
                    <h4 className={`font-bold text-lg uppercase tracking-tight transition-colors ${hoveredLine === line.id ? 'text-white' : 'text-slate-200'}`}>
                      {line.title}
                    </h4>
                  </div>
                  <p className={`text-xs font-semibold mb-2 transition-colors ${hoveredLine === line.id ? 'text-blue-100' : 'text-slate-500'}`}>
                    {line.detail}
                  </p>
                 
                  <AnimatePresence>
                    {hoveredLine === line.id && (
                      <motion.p
                        initial={{ opacity: 0, height: 0, x: -20 }}
                        animate={{ opacity: 1, height: 'auto', x: 0 }}
                        exit={{ opacity: 0, height: 0, x: -20 }}
                        transition={{ duration: 0.35, ease: "easeOut" }}
                        className="text-sm text-blue-50 leading-relaxed pt-2 border-t border-blue-500/50"
                      >
                        {line.desc}
                      </motion.p>
                    )}
                  </AnimatePresence>
                </div>
               
                <motion.div
                  animate={{ rotate: hoveredLine === line.id ? 90 : 0 }}
                  transition={{ duration: 0.4, ease: "easeInOut" }}
                >
                  <ChevronRight className={`w-5 h-5 ${hoveredLine === line.id ? 'text-white' : 'text-slate-700'}`} />
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* --- CORE COMPETENCIES & QUALITY GOVERNANCE --- */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-3 gap-16">
           
            <div className="space-y-10">
              <div className="inline-block px-4 py-1 bg-blue-600 text-white text-xs font-bold uppercase tracking-widest rounded">Capabilities</div>
              <h3 className="text-3xl font-black text-slate-900">Core Competencies</h3>
              
              {/* Staggered core competencies */}
              <motion.div
                className="space-y-8"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                {[
                  { title: "Precision Slitting", icon: <Maximize className="w-6 h-6" />, desc: "High-accuracy strip conversion engineered for strict width tolerances." },
                  { title: "Cut-to-Length", icon: <Layers className="w-6 h-6" />, desc: "Stress-balanced, flatness-controlled sheets calibrated to eliminate coil set." },
                  { title: "Surface Integrity", icon: <Target className="w-6 h-6" />, desc: "Handling systems designed to eliminate micro-abrasion." }
                ].map((item, i) => (
                  <motion.div 
                    key={i} 
                    variants={childVariants}
                    className="flex gap-4"
                  >
                    <div className="bg-slate-100 p-3 rounded-lg h-fit text-blue-600">{item.icon}</div>
                    <div>
                      <h5 className="font-bold text-lg mb-1">{item.title}</h5>
                      <p className="text-sm text-slate-500">{item.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </div>

            <div className="lg:col-span-2 bg-slate-50 rounded-[40px] p-10 md:p-16 border border-slate-100 relative overflow-hidden">
               <div className="absolute top-0 right-0 p-12 opacity-5">
                  <Settings className="w-64 h-64 text-slate-900 animate-spin-slow" />
               </div>
              
               <div className="relative z-10">
                  <h3 className="text-3xl font-black text-slate-900 mb-8 flex items-center gap-4">
                    <CheckCircle2 className="w-10 h-10 text-green-500" />
                    Quality Governance
                  </h3>
                  <p className="text-lg text-slate-600 mb-10 max-w-xl">
                    At Matrix Metals LLP, quality is embedded within the operating architecture. It is not a terminal inspection—it is an <span className="text-blue-600 font-bold">integrated control framework</span>.
                  </p>

                  {/* Staggered quality checklist */}
                  <motion.div
                    className="grid md:grid-cols-2 gap-6"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                  >
                    {[
                      "In-line dimensional monitoring",
                      "Surface conformity assessment",
                      "Burr and camber analysis",
                      "Residual stress evaluation",
                      "Full material traceability"
                    ].map((list, i) => (
                      <motion.div 
                        key={i} 
                        variants={childVariants}
                        className="flex items-center gap-3 bg-white p-4 rounded-xl shadow-sm border border-slate-200/50"
                      >
                        <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                        <span className="text-slate-800 font-medium text-sm">{list}</span>
                      </motion.div>
                    ))}
                  </motion.div>

                  {/* <div className="mt-12 p-8 bg-slate-900 rounded-2xl text-white flex flex-col md:flex-row items-center justify-between gap-6">
                    <div>
                      <h5 className="font-bold text-xl mb-1">Industrial Sectors Served</h5>
                      <p className="text-slate-400 text-sm">Aerospace, Automotive, Infrastructure, and more.</p>
                    </div>
                    <div className="flex -space-x-2">
                       <div className="px-4 py-2 bg-blue-600 rounded-full text-xs font-bold">Aerospace</div>
                       <div className="px-4 py-2 bg-slate-800 border border-slate-700 rounded-full text-xs font-bold">Automotive</div>
                       <div className="px-4 py-2 bg-slate-800 border border-slate-700 rounded-full text-xs font-bold">Defence</div>
                    </div>
                  </div> */}
                  
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