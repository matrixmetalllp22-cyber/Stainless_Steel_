// // Added AnimatePresence to the import below
// import React, { useState, useRef } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import {
//   Layers,
//   Activity,
//   ThermometerSun,
//   Sparkles,
//   Flame,
//   Focus,
//   Scissors,
//   EyeOff,
//   Palette,
//   ShieldCheck,
//   ChevronRight,
//   ChevronLeft,
//   X,
//   Play
// } from "lucide-react";

// export default function EurolamFilmBond1220() {
//   const [activeFeature, setActiveFeature] = useState(0);
//   const [modalOpen, setModalOpen] = useState(false);

//   const features = [
//     {
//       title: "Precision Engineering",
//       icon: <Layers className="w-8 h-8" />,
//       desc: "Delivers high-performance film bonding through structural stability that ensures uniform lamination pressure and perfect tracking alignment.",
//       detail: "Premium Lamination Quality"
//     },
//     {
//       title: "Tension Regulation",
//       icon: <Activity className="w-8 h-8" />,
//       desc: "Advanced sensors prevent wrinkles and distortion. Synchronised feeding maintains film stability for defect-free application.",
//       detail: "Zero-Distortion Feed"
//     },
//     {
//       title: "Heated Roller Tech",
//       icon: <ThermometerSun className="w-8 h-8" />,
//       desc: "Temperature-controlled rollers activate adhesives with uniform heat distribution, preventing overheating while boosting bond strength.",
//       detail: "Thermal Adhesion"
//     },
//     {
//       title: "Surface Preparation",
//       icon: <Sparkles className="w-8 h-8" />,
//       desc: "Integrated pre-treatment modules eliminate contaminants, significantly increasing bonding reliability and long-term durability.",
//       detail: "Pure-Bond Pre-treatment"
//     },
//     {
//       title: "Stabilisation Zones",
//       icon: <Flame className="w-8 h-8" />,
//       desc: "Controlled heating zones maintain thermal uniformity, preventing material distortion and ensuring consistent process output.",
//       detail: "Climate-Controlled Zones"
//     },
//     {
//       title: "Anti-Bubble Control",
//       icon: <Focus className="w-8 h-8" />,
//       desc: "Pressure-regulated rollers eliminate air entrapment, ensuring flawless surface clarity and smooth, bubble-free finishes.",
//       detail: "Crystal-Clear Finish"
//     },
//     {
//       title: "Edge Precision",
//       icon: <Scissors className="w-8 h-8" />,
//       desc: "Precision trimming and alignment prevent edge lifting, ensuring clean borders and high aesthetic quality for architectural panels.",
//       detail: "Seamless Bordering"
//     },
//     {
//       title: "Surface Protection",
//       icon: <EyeOff className="w-8 h-8" />,
//       desc: "Low-contact guidance preserves decorative finishes. Gloss retention is maximised while minimizing the risk of surface damage.",
//       detail: "Non-Contact Flow"
//     },
//     {
//       title: "Application Versatility",
//       icon: <Palette className="w-8 h-8" />,
//       desc: "Supports decorative and protective films for appliances and panels, enhancing both corrosion resistance and aesthetic value.",
//       detail: "Multi-Film Support"
//     },
//     {
//       title: "Adhesion Durability",
//       icon: <ShieldCheck className="w-8 h-8" />,
//       desc: "Bond integrity ensures environmental resistance and prevents delamination, increasing the overall lifespan of the product.",
//       detail: "Lifecycle Integrity"
//     }
//   ];

//   const nextFeature = () => setActiveFeature((prev) => (prev + 1) % features.length);
//   const prevFeature = () => setActiveFeature((prev) => (prev - 1 + features.length) % features.length);

//   return (
//     <div className="bg-white text-slate-900 min-h-screen font-sans overflow-x-hidden">
      
//       {/* HERO SECTION */}
//       <section className="relative min-h-screen flex items-center px-6 md:px-16 lg:px-24 py-20 md:py-0 overflow-hidden">
//         {/* Background Image Layer */}
//         <div className="absolute inset-0 z-0">
//           <img 
//             src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=2000&q=80" 
//             className="w-full h-full object-cover grayscale opacity-10"
//             alt="Industrial Lamination"
//           />
//           <div className="absolute inset-0 bg-gradient-to-r from-white/80 via-white/50 to-transparent" />
//         </div>

//         <div className="relative z-20 max-w-4xl w-full">
//           <motion.div 
//             initial={{ opacity: 0, x: -20 }}
//             animate={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.6 }}
//             className="flex items-center gap-3 text-blue-600 font-bold tracking-widest text-xs uppercase mb-6"
//           >
//             <span className="w-8 h-px bg-blue-600" /> High-Precision Lamination
//           </motion.div>
          
//           <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-extrabold tracking-tight text-slate-900 mb-4 leading-none">
//             EUROLAM<span className="text-blue-500 font-light italic">™</span>
//           </h1>
//           <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-light text-slate-600 mb-8 tracking-widest uppercase">
//             FILMBOND 1220
//           </h2>
          
//           <div className="flex flex-wrap gap-8 md:gap-12 mb-12">
//             <div>
//               <p className="text-[10px] text-slate-400 uppercase font-bold tracking-widest mb-1">Max Width</p>
//               <p className="text-2xl sm:text-3xl font-light">1220<span className="text-blue-500 text-sm ml-1">mm</span></p>
//             </div>
//             <div className="hidden sm:block w-px h-12 bg-slate-200" />
//             <div>
//               <p className="text-[10px] text-slate-400 uppercase font-bold tracking-widest mb-1">Film Gauge</p>
//               <p className="text-2xl sm:text-3xl font-light">0.10 – 1.20<span className="text-blue-500 text-sm ml-1">mm</span></p>
//             </div>
//           </div>

//           <motion.button
//             whileHover={{ scale: 1.05 }}
//             whileTap={{ scale: 0.95 }}
//             onClick={() => setModalOpen(true)}
//             className="group bg-blue-600 text-white px-8 py-4 rounded-full font-semibold shadow-lg shadow-blue-200 hover:shadow-xl transition-all flex items-center gap-2"
//           >
//             <Play size={18} className="fill-white group-hover:translate-x-1 transition-transform" />
//             Request Technical Specs
//           </motion.button>
//         </div>
//       </section>

//       {/* FEATURE SLIDER SECTION */}
//       <section className="py-16 md:py-24 bg-slate-50 relative">
//         <div className="max-w-7xl mx-auto px-6">
//           <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
//             <div>
//               <h3 className="text-3xl md:text-4xl font-bold mb-2 tracking-tight">Bonding Architecture</h3>
//               <p className="text-slate-500 text-lg">The 10 pillars of flawless film application.</p>
//             </div>
//             <div className="flex gap-3">
//               <button 
//                 onClick={prevFeature} 
//                 className="p-3 md:p-4 rounded-full border border-slate-200 bg-white hover:bg-blue-600 hover:text-white hover:border-blue-600 transition-all shadow-sm"
//                 aria-label="Previous feature"
//               >
//                 <ChevronLeft size={20} />
//               </button>
//               <button 
//                 onClick={nextFeature} 
//                 className="p-3 md:p-4 rounded-full border border-slate-200 bg-white hover:bg-blue-600 hover:text-white hover:border-blue-600 transition-all shadow-sm"
//                 aria-label="Next feature"
//               >
//                 <ChevronRight size={20} />
//               </button>
//             </div>
//           </div>

//           <div className="relative min-h-[500px] md:min-h-[450px]">
//             <AnimatePresence mode="wait">
//               <motion.div
//                 key={activeFeature}
//                 initial={{ opacity: 0, x: 50 }}
//                 animate={{ opacity: 1, x: 0 }}
//                 exit={{ opacity: 0, x: -50 }}
//                 transition={{ duration: 0.3 }}
//                 className="absolute inset-0 grid md:grid-cols-2 gap-8 md:gap-12 items-start md:items-center"
//               >
//                 {/* Icon / Visual */}
//                 <div className="relative aspect-square md:aspect-video rounded-[2rem] overflow-hidden shadow-xl bg-white flex items-center justify-center border border-slate-100 order-2 md:order-1">
//                   <div className="text-blue-500/10 absolute inset-0 flex items-center justify-center scale-50 md:scale-100">
//                     {React.cloneElement(features[activeFeature].icon, { size: 240 })}
//                   </div>
//                   <div className="relative z-10 text-blue-600">
//                     {React.cloneElement(features[activeFeature].icon, { size: 96 })}
//                   </div>
//                 </div>

//                 {/* Text Content */}
//                 <div className="space-y-4 md:space-y-6 order-1 md:order-2">
//                   <span className="text-6xl md:text-7xl font-black text-slate-200 block leading-none">
//                     0{activeFeature + 1}
//                   </span>
//                   <h4 className="text-3xl md:text-4xl font-bold tracking-tight">
//                     {features[activeFeature].title}
//                   </h4>
//                   <p className="text-lg md:text-xl text-slate-500 leading-relaxed max-w-md">
//                     {features[activeFeature].desc}
//                   </p>
//                   <div className="inline-block bg-blue-50 text-blue-700 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest">
//                     {features[activeFeature].detail}
//                   </div>
//                 </div>
//               </motion.div>
//             </AnimatePresence>
//           </div>

//           {/* Dots indicator */}
//           <div className="flex justify-center gap-2 mt-8 md:hidden">
//             {features.map((_, idx) => (
//               <button
//                 key={idx}
//                 onClick={() => setActiveFeature(idx)}
//                 className={`w-2 h-2 rounded-full transition-all ${
//                   idx === activeFeature ? "bg-blue-600 w-6" : "bg-slate-300"
//                 }`}
//                 aria-label={`Go to feature ${idx + 1}`}
//               />
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* MODAL */}
//       <AnimatePresence>
//         {modalOpen && (
//           <motion.div 
//             className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-slate-900/40 backdrop-blur-sm"
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             exit={{ opacity: 0 }}
//             onClick={() => setModalOpen(false)} // close on backdrop click
//           >
//             <motion.div 
//               className="bg-white shadow-2xl w-full max-w-xl p-8 md:p-10 rounded-[2rem] md:rounded-[2.5rem] relative"
//               initial={{ scale: 0.9, y: 20 }}
//               animate={{ scale: 1, y: 0 }}
//               onClick={(e) => e.stopPropagation()} // prevent closing when clicking inside
//             >
//               <button 
//                 onClick={() => setModalOpen(false)} 
//                 className="absolute top-6 right-6 text-slate-400 hover:text-slate-900 transition-colors"
//                 aria-label="Close modal"
//               >
//                 <X size={24} />
//               </button>
//               <h2 className="text-2xl md:text-3xl font-bold mb-2">FilmBond 1220</h2>
//               <p className="text-slate-500 mb-6 md:mb-8">Request technical configuration details.</p>
//               <form className="space-y-4">
//                 <input 
//                   type="text" 
//                   placeholder="Professional Name" 
//                   className="w-full bg-slate-50 border-none rounded-xl px-6 py-4 outline-none focus:ring-2 focus:ring-blue-200 transition-shadow"
//                   required
//                 />
//                 <input 
//                   type="email" 
//                   placeholder="Work Email" 
//                   className="w-full bg-slate-50 border-none rounded-xl px-6 py-4 outline-none focus:ring-2 focus:ring-blue-200 transition-shadow"
//                   required
//                 />
//                 <button 
//                   type="submit"
//                   className="w-full bg-blue-600 text-white font-bold py-4 md:py-5 rounded-xl shadow-lg shadow-blue-200 hover:shadow-xl hover:bg-blue-700 transition-all"
//                 >
//                   Send Specification Request
//                 </button>
//               </form>
//             </motion.div>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </div>
//   );
// }










import React, { useState } from "react";
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
  X,
  Plus,
  MoveRight
} from "lucide-react";

export default function EurolamFilmBond1220() {
  const [selectedFeature, setSelectedFeature] = useState(null);

  const features = [
    {
      id: 1,
      title: "Precision Engineering",
      icon: <Layers />,
      desc: "Delivers high-performance film bonding through structural stability that ensures uniform lamination pressure and perfect tracking alignment.",
      tag: "BOND"
    },
    {
      id: 2,
      title: "Tension Regulation",
      icon: <Activity />,
      desc: "Advanced sensors prevent wrinkles and distortion. Synchronised feeding maintains film stability for defect-free application.",
      tag: "FEED"
    },
    {
      id: 3,
      title: "Heated Roller Tech",
      icon: <ThermometerSun />,
      desc: "Temperature-controlled rollers activate adhesives with uniform heat distribution, preventing overheating while boosting bond strength.",
      tag: "THERMAL"
    },
    {
      id: 4,
      title: "Surface Preparation",
      icon: <Sparkles />,
      desc: "Integrated pre-treatment modules eliminate contaminants, significantly increasing bonding reliability and long-term durability.",
      tag: "PURITY"
    },
    {
      id: 5,
      title: "Stabilisation Zones",
      icon: <Flame />,
      desc: "Controlled heating zones maintain thermal uniformity, preventing material distortion and ensuring consistent process output.",
      tag: "CLIMATE"
    },
    {
      id: 6,
      title: "Anti-Bubble Control",
      icon: <Focus />,
      desc: "Pressure-regulated rollers eliminate air entrapment, ensuring flawless surface clarity and smooth, bubble-free finishes.",
      tag: "CLEAR"
    },
    {
      id: 7,
      title: "Edge Precision",
      icon: <Scissors />,
      desc: "Precision trimming and alignment prevent edge lifting, ensuring clean borders and high aesthetic quality for architectural panels.",
      tag: "SEAMLESS"
    },
    {
      id: 8,
      title: "Surface Protection",
      icon: <EyeOff />,
      desc: "Low-contact guidance preserves decorative finishes. Gloss retention is maximised while minimizing the risk of surface damage.",
      tag: "CONTACT"
    },
    {
      id: 9,
      title: "Application Versatility",
      icon: <Palette />,
      desc: "Supports decorative and protective films for appliances and panels, enhancing both corrosion resistance and aesthetic value.",
      tag: "DECO"
    },
    {
      id: 10,
      title: "Adhesion Durability",
      icon: <ShieldCheck />,
      desc: "Bond integrity ensures environmental resistance and prevents delamination, increasing the overall lifespan of the product.",
      tag: "SHIELD"
    }
  ];

  return (
    <div className="bg-[#0c0c0c] text-stone-100 min-h-screen font-sans overflow-x-hidden">
      
      {/* HERO SECTION */}
      <section className="relative min-h-[80vh] flex flex-col justify-center px-6 md:px-20 border-b border-stone-800">
        {/* Decorative Grid Overlay */}
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
            <span className="h-[2px] w-12 bg-blue-500" />
            <span className="text-blue-500 font-mono tracking-[0.3em] text-sm uppercase">Film Bonding Technology</span>
          </div>
          <h1 className="text-4xl sm:text-6xl md:text-8xl lg:text-9xl font-bold tracking-tighter mb-4 break-words">
            EUROLAM<span className="text-blue-500 font-light italic">FB</span>
          </h1>
          <p className="text-stone-400 text-xl md:text-2xl max-w-2xl font-light leading-relaxed mb-12">
            High-precision lamination for decorative and protective films. 
            The 1220 series ensures crystal-clear finishes and superior bond integrity.
          </p>

          <div className="flex flex-wrap gap-8">
            <div>
              <p className="text-stone-500 text-xs uppercase tracking-widest mb-2">Max Width</p>
              <p className="text-3xl font-mono">1220<span className="text-blue-500">MM</span></p>
            </div>
            <div className="w-px h-12 bg-stone-800" />
            <div>
              <p className="text-stone-500 text-xs uppercase tracking-widest mb-2">Film Gauge</p>
              <p className="text-3xl font-mono">1.20<span className="text-blue-500">MM</span></p>
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
              <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-100 group-hover:text-blue-500 transition-all">
                <Plus size={20} />
              </div>
              
              <div className="text-blue-500 mb-4 transition-transform group-hover:scale-110">
                {React.cloneElement(feature.icon, { size: 32 })}
              </div>

              <div>
                <span className="text-[10px] font-mono text-stone-500 block mb-2 tracking-tighter">LAM_REF_{feature.tag}</span>
                <h3 className="text-lg font-bold uppercase tracking-tight leading-tight">
                  {feature.title}
                </h3>
              </div>

              {/* Decorative "Sheet" line animation */}
              <div className="absolute bottom-0 left-0 w-full h-1 bg-blue-500 translate-y-1 group-hover:translate-y-0 transition-transform" />
            </motion.div>
          ))}
        </div>
      </section>

      {/* FEATURE MODAL (Side Drawer) */}
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
              
              <div className="text-blue-500 mb-8">
                {React.cloneElement(selectedFeature.icon, { size: 64 })}
              </div>
              <p className="text-blue-500 font-mono text-sm mb-4 tracking-widest">PROCESS SPECIFICATION // 0{selectedFeature.id}</p>
              <h2 className="text-5xl font-bold mb-8 uppercase tracking-tighter">{selectedFeature.title}</h2>
              <p className="text-stone-400 text-2xl font-light leading-relaxed mb-12 border-l-4 border-stone-700 pl-8">
                {selectedFeature.desc}
              </p>
              
             
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* FINAL CALL TO ACTION */}
      <section className="bg-stone-900 py-24 px-6 border-t border-stone-800 text-center">
        <h3 className="text-4xl font-bold mb-8 tracking-tighter">BONDING EXCELLENCE ACHIEVED</h3>
        <p className="text-stone-500 mb-12 max-w-xl mx-auto uppercase text-xs tracking-[0.3em]">
          Appliances • Architecture • Decorative Panels
        </p>
      </section>

    </div>
  );
}