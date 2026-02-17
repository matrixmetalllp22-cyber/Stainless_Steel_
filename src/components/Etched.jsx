// import { useState, useEffect } from "react";
// import { motion, AnimatePresence } from "framer-motion";

// const etchedPatterns = [
//   { name: "MX 1001", img: "/images/etched-1001.jpg" },
//   { name: "MX 1002", img: "/images/etched-1002.jpg" },
//   { name: "MX 1003", img: "/images/etched-1003.jpg" },
//   { name: "MX 1004", img: "/images/etched-1004.jpg" },
//   { name: "MX 1005", img: "/images/etched-1005.jpg" },
//   { name: "MX 1006", img: "/images/etched-1006.jpg" },
// ];

// export default function Etched() {
//   const [selectedImage, setSelectedImage] = useState(null);
//   const [hoveredIndex, setHoveredIndex] = useState(null);

//   // Close modal on 'Esc' key
//   useEffect(() => {
//     const handleEsc = (e) => e.key === "Escape" && setSelectedImage(null);
//     window.addEventListener("keydown", handleEsc);
//     return () => window.removeEventListener("keydown", handleEsc);
//   }, []);

//   return (
//     <section className="w-full bg-[#fdfdfd] py-24 px-6 md:px-12 overflow-hidden">
//       {/* Background Decorative Element */}
//       <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-slate-100/50 via-transparent to-transparent -z-10" />

//       {/* Header */}
//       <motion.div
//         initial={{ opacity: 0, y: 40 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         viewport={{ once: true }}
//         transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
//         className="text-center mb-24"
//       >
//         <span className="text-xs font-bold tracking-[0.3em] text-slate-400 uppercase mb-4 block">
//           Premium Collection
//         </span>
//         <h1 className="text-5xl md:text-7xl font-extralight text-slate-900 tracking-tight mb-6">
//           Etched <span className="font-medium">Patterns</span>
//         </h1>
//         <div className="h-[1px] w-24 bg-slate-900 mx-auto" />
//       </motion.div>

//       {/* Grid Section */}
//       <motion.div 
//         className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-8 mb-32"
//         initial="hidden"
//         whileInView="show"
//         viewport={{ once: true, margin: "-100px" }}
//         variants={{
//           hidden: { opacity: 0 },
//           show: {
//             opacity: 1,
//             transition: { staggerChildren: 0.1 }
//           }
//         }}
//       >
//         {etchedPatterns.map((item, index) => (
//           <motion.div
//             key={index}
//             variants={{
//               hidden: { opacity: 0, y: 30 },
//               show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
//             }}
//             onHoverStart={() => setHoveredIndex(index)}
//             onHoverEnd={() => setHoveredIndex(null)}
//             className="group relative"
//           >
//             <div 
//               className="relative aspect-[3/4] overflow-hidden rounded-2xl cursor-pointer bg-slate-100"
//               onClick={() => setSelectedImage(item)}
//             >
//               {/* Image with subtle zoom */}
//               <motion.img
//                 src={item.img}
//                 alt={item.name}
//                 className="w-full h-full object-cover grayscale-[0.3] group-hover:grayscale-0 transition-all duration-700"
//                 whileHover={{ scale: 1.1 }}
//               />
              
//               {/* Overlay info that appears on hover */}
//               <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
//                 <p className="text-white text-sm font-light tracking-widest">VIEW DETAIL</p>
//               </div>
//             </div>

//             <div className="mt-6 text-center">
//               <p className="text-sm font-medium text-slate-800 tracking-widest">{item.name}</p>
//               <p className="text-[10px] text-slate-400 uppercase mt-1">Stainless Steel</p>
//             </div>
//           </motion.div>
//         ))}
//       </motion.div>

//       {/* Details Glassmorphism Card */}
//       <div className="max-w-6xl mx-auto mb-32 relative">
//         <motion.div
//           initial={{ opacity: 0, scale: 0.95 }}
//           whileInView={{ opacity: 1, scale: 1 }}
//           transition={{ duration: 0.8 }}
//           className="bg-white/40 backdrop-blur-xl border border-white/60 rounded-[2rem] p-10 md:p-16 shadow-2xl shadow-slate-200/50"
//         >
//           <div className="grid lg:grid-cols-2 gap-16">
//             <div>
//               <h2 className="text-3xl font-light text-slate-900 mb-8">The Art of Etching</h2>
//               <p className="text-slate-600 leading-relaxed text-lg font-light mb-8">
//                 Achieved through precision photo-chemical etching on premium stainless steel. 
//                 Our process ensures microscopic accuracy, allowing for patterns that interact 
//                 dynamically with light and space.
//               </p>
//               <div className="grid grid-cols-2 gap-8">
//                 <div>
//                   <h4 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-2">Base Finishes</h4>
//                   <p className="text-sm text-slate-700">BA, Super Mirror, Hairline, Bead Blast</p>
//                 </div>
//                 <div>
//                   <h4 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-2">Technique</h4>
//                   <p className="text-sm text-slate-700">Screen Print & Photo Etching</p>
//                 </div>
//               </div>
//             </div>

//             <div className="bg-slate-900 rounded-2xl p-8 text-white flex flex-col justify-center">
//               <h3 className="text-xl font-medium mb-4">Custom Fabrication</h3>
//               <p className="text-slate-400 text-sm leading-relaxed mb-6">
//                 Need a specific geometry? We translate architectural drawings into 
//                 etched realities for bespoke luxury projects.
//               </p>
//               <button className="w-fit px-6 py-3 border border-slate-700 hover:bg-white hover:text-black transition-all duration-300 rounded-full text-xs uppercase tracking-widest">
//                 Consult Designer
//               </button>
//             </div>
//           </div>
//         </motion.div>
//       </div>

//       {/* Specifications Grid */}
//       <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-12">
//         {[
//           { title: "Material", details: "Grades 304, 316L, 441", icon: "01" },
//           { title: "Palette", details: "PVD Gold, Rose, Champagne", icon: "02" },
//           { title: "Scale", details: "Up to 1500 × 3000 mm", icon: "03" },
//         ].map((spec, i) => (
//           <motion.div 
//             key={i}
//             whileHover={{ y: -10 }}
//             className="group"
//           >
//             <span className="text-5xl font-black text-slate-100 group-hover:text-slate-200 transition-colors duration-500">{spec.icon}</span>
//             <h3 className="text-lg font-medium text-slate-900 -mt-6 relative z-10">{spec.title}</h3>
//             <p className="text-slate-500 text-sm mt-2">{spec.details}</p>
//           </motion.div>
//         ))}
//       </div>

//       {/* Modern Lightbox Modal */}
//       <AnimatePresence>
//         {selectedImage && (
//           <motion.div
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             exit={{ opacity: 0 }}
//             className="fixed inset-0 bg-white/90 backdrop-blur-2xl z-50 flex items-center justify-center p-6 md:p-12"
//             onClick={() => setSelectedImage(null)}
//           >
//             <motion.div
//               initial={{ opacity: 0, y: 50 }}
//               animate={{ opacity: 1, y: 0 }}
//               exit={{ opacity: 0, scale: 0.95 }}
//               onClick={(e) => e.stopPropagation()}
//               className="relative w-full max-w-6xl grid md:grid-cols-[1fr_350px] bg-white shadow-2xl rounded-3xl overflow-hidden border border-slate-100"
//             >
//               {/* Image Side */}
//               <div className="relative bg-slate-50 h-[50vh] md:h-[80vh]">
//                 <img
//                   src={selectedImage.img}
//                   alt={selectedImage.name}
//                   className="w-full h-full object-contain p-8"
//                 />
//               </div>

//               {/* Info Side */}
//               <div className="p-10 flex flex-col justify-between border-l border-slate-50">
//                 <div>
//                   <button 
//                     onClick={() => setSelectedImage(null)}
//                     className="text-slate-400 hover:text-black mb-12 transition-colors"
//                   >
//                     CLOSE ✕
//                   </button>
//                   <h3 className="text-4xl font-light text-slate-900 mb-2">{selectedImage.name}</h3>
//                   <p className="text-slate-400 uppercase text-xs tracking-[0.2em] mb-8">Etched Series</p>
                  
//                   <div className="space-y-6">
//                     <div className="pb-4 border-b border-slate-100">
//                       <p className="text-[10px] text-slate-400 uppercase mb-1">Applications</p>
//                       <p className="text-sm text-slate-700 font-light">Elevators, Facades, Luxury Interiors</p>
//                     </div>
//                     <div className="pb-4 border-b border-slate-100">
//                       <p className="text-[10px] text-slate-400 uppercase mb-1">Thickness</p>
//                       <p className="text-sm text-slate-700 font-light">0.6mm — 5.0mm</p>
//                     </div>
//                   </div>
//                 </div>

//                 <button className="w-full py-4 bg-slate-900 text-white text-xs uppercase tracking-widest hover:bg-slate-800 transition-colors rounded-xl">
//                   Download Technical PDF
//                 </button>
//               </div>
//             </motion.div>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </section>
//   );
// }





// import { useState, useEffect, useRef } from "react";
// import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";

// const etchedPatterns = [
//   { id: "01", name: "MX 1001", img: "/images/etched-1001.jpg", desc: "Linear Precision" },
//   { id: "02", name: "MX 1002", img: "/images/etched-1002.jpg", desc: "Geometric Flow" },
//   { id: "03", name: "MX 1003", img: "/images/etched-1003.jpg", desc: "Organic Texture" },
//   { id: "04", name: "MX 1004", img: "/images/etched-1004.jpg", desc: "Abstract Depth" },
//   { id: "05", name: "MX 1005", img: "/images/etched-1005.jpg", desc: "Industrial Matte" },
//   { id: "06", name: "MX 1006", img: "/images/etched-1006.jpg", desc: "Reflective Mesh" },
// ];

// export default function PremiumEtched() {
//   const [selectedImage, setSelectedImage] = useState(null);
//   const containerRef = useRef(null);
//   const { scrollYProgress } = useScroll({
//     target: containerRef,
//     offset: ["start start", "end end"],
//   });

//   return (
//     <div ref={containerRef} className="bg-[#0a0a0a] text-white selection:bg-white selection:text-black">
//       {/* 1. HERO SECTION WITH REVEAL */}
//       <section className="h-screen flex flex-col items-center justify-center sticky top-0">
//         <motion.div 
//           initial={{ opacity: 0, y: 50 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
//           className="text-center z-10"
//         >
//           <span className="text-[10px] tracking-[0.5em] uppercase text-zinc-500 mb-6 block">
//             The Stainless Steel Archives
//           </span>
//           <h1 className="text-7xl md:text-[10rem] font-extralight tracking-tighter leading-none italic mb-8">
//             Etched<span className="not-italic font-medium">.</span>
//           </h1>
//           <motion.div 
//             style={{ scaleX: scrollYProgress }} 
//             className="h-px w-64 bg-white/20 mx-auto origin-center" 
//           />
//         </motion.div>
//       </section>

//       {/* 2. DYNAMIC MASONRY GRID */}
//       <section className="relative px-6 md:px-20 py-32 z-20">
//         <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-32 gap-x-12">
//           {etchedPatterns.map((item, index) => (
//             <PatternCard 
//               key={item.id} 
//               item={item} 
//               index={index} 
//               onClick={() => setSelectedImage(item)} 
//             />
//           ))}
//         </div>
//       </section>

//       {/* 3. TECHNICAL SPECIFICATION: GLASS TABLE */}
//       <section className="py-40 px-6 bg-zinc-950">
//         <div className="max-w-5xl mx-auto">
//           <h2 className="text-4xl font-light mb-20 text-zinc-400">Engineering <span className="text-white">Specs</span></h2>
//           <div className="grid md:grid-cols-2 gap-20">
//             <div className="space-y-12">
//               <SpecItem title="Grades" value="SUS 304, 316, 430 Architectural" />
//               <SpecItem title="Finishes" value="Mirror, Hairline, Vibration, Bead Blast" />
//               <SpecItem title="Thickness" value="0.5mm — 3.0mm Gauge Range" />
//             </div>
//             <div className="p-10 border border-zinc-800 rounded-3xl bg-zinc-900/50 backdrop-blur-sm">
//               <p className="text-zinc-400 font-light leading-relaxed">
//                 Our etching process utilizes controlled chemical erosion to create permanent, high-definition patterns. Unlike printing, etching becomes part of the metal structure, ensuring it never fades under heavy traffic.
//               </p>
//               <button className="mt-10 group flex items-center gap-4 text-sm tracking-widest uppercase">
//                 Download Catalog <span className="group-hover:translate-x-2 transition-transform">→</span>
//               </button>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* 4. CINEMATIC MODAL */}
//       <AnimatePresence>
//         {selectedImage && (
//           <motion.div
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             exit={{ opacity: 0 }}
//             className="fixed inset-0 z-[100] bg-black flex flex-col items-center justify-center p-4 md:p-20"
//           >
//             <motion.button 
//               onClick={() => setSelectedImage(null)}
//               className="absolute top-10 right-10 text-zinc-500 hover:text-white transition-colors"
//             >
//               EXIT [ESC]
//             </motion.button>
            
//             <div className="w-full h-full grid lg:grid-cols-2 gap-10 items-center">
//               <motion.div 
//                 layoutId={`img-${selectedImage.id}`}
//                 className="h-[60vh] lg:h-[80vh] w-full"
//               >
//                 <img 
//                   src={selectedImage.img} 
//                   className="w-full h-full object-cover rounded-sm"
//                   alt={selectedImage.name}
//                 />
//               </motion.div>
              
//               <motion.div 
//                 initial={{ x: 50, opacity: 0 }}
//                 animate={{ x: 0, opacity: 1 }}
//                 className="max-w-md"
//               >
//                 <span className="text-zinc-600 mb-2 block">{selectedImage.id}</span>
//                 <h2 className="text-6xl font-light mb-6">{selectedImage.name}</h2>
//                 <p className="text-zinc-400 font-light text-lg mb-12">
//                   Designed for high-end elevator interiors and luxury hotel cladding. 
//                   This pattern captures light at 45-degree angles, creating a 3D shimmer effect.
//                 </p>
//                 <div className="flex gap-4">
//                   <button className="px-8 py-4 bg-white text-black text-xs uppercase tracking-tighter hover:bg-zinc-200 transition-colors">
//                     Request Sample
//                   </button>
//                 </div>
//               </motion.div>
//             </div>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </div>
//   );
// }

// function PatternCard({ item, index, onClick }) {
//   return (
//     <motion.div 
//       initial={{ opacity: 0, y: 100 }}
//       whileInView={{ opacity: 1, y: 0 }}
//       viewport={{ once: true }}
//       transition={{ duration: 0.8, delay: index % 3 * 0.1 }}
//       className={`group cursor-none ${index % 2 === 0 ? 'mt-0' : 'md:mt-24'}`}
//       onClick={onClick}
//     >
//       <div className="relative overflow-hidden aspect-[4/5] bg-zinc-900">
//         <motion.div 
//           whileHover={{ scale: 1.05 }}
//           transition={{ duration: 0.6, ease: [0.33, 1, 0.68, 1] }}
//           className="w-full h-full"
//         >
//           <img src={item.img} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700" alt="" />
//         </motion.div>
        
//         {/* Hover Label */}
//         <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/40 backdrop-blur-[2px]">
//           <span className="text-[10px] tracking-[0.3em] uppercase border-b border-white pb-1">Enlarge View</span>
//         </div>
//       </div>
      
//       <div className="mt-8 flex justify-between items-start">
//         <div>
//           <h3 className="text-xl font-light tracking-tight">{item.name}</h3>
//           <p className="text-xs text-zinc-500 uppercase tracking-widest mt-1">{item.desc}</p>
//         </div>
//         <span className="text-zinc-800 text-4xl font-black">{item.id}</span>
//       </div>
//     </motion.div>
//   );
// }

// function SpecItem({ title, value }) {
//   return (
//     <div className="border-b border-zinc-900 pb-6 group">
//       <h4 className="text-xs text-zinc-600 uppercase tracking-[0.3em] mb-2 group-hover:text-zinc-400 transition-colors">{title}</h4>
//       <p className="text-xl font-light">{value}</p>
//     </div>
//   );
// }

























import { useState, useRef } from "react";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";

const etchedPatterns = [
  { id: "01", name: "MX 1001", img: "/images/etched-1001.jpg", category: "LINEAR" },
  { id: "02", name: "MX 1002", img: "/images/etched-1002.jpg", category: "GEOMETRIC" },
  { id: "03", name: "MX 1003", img: "/images/etched-1003.jpg", category: "ORGANIC" },
  { id: "04", name: "MX 1004", img: "/images/etched-1004.jpg", category: "MINIMAL" },
  { id: "05", name: "MX 1005", img: "/images/etched-1005.jpg", category: "INDUSTRIAL" },
  { id: "06", name: "MX 1006", img: "/images/etched-1006.jpg", category: "REFLECTIVE" },
];

export default function LuxuryEtched() {
  const [selectedImage, setSelectedImage] = useState(null);
  const containerRef = useRef(null);
  
  // Parallax Scroll Effect for the Header
  const { scrollYProgress } = useScroll();
  const yHeader = useTransform(scrollYProgress, [0, 0.2], [0, -100]);
  const opacityHeader = useTransform(scrollYProgress, [0, 0.15], [1, 0]);

  return (
    <main className="bg-[#e5e5e5] text-[black] min-h-screen selection:bg-white selection:text-black">
      {/* 1. CINEMATIC HERO */}
      <section className="relative h-[80vh] flex items-center justify-center overflow-hidden">
        <motion.div 
          style={{ y: yHeader, opacity: opacityHeader }}
          className="text-center z-10"
        >
          <motion.span 
            initial={{ opacity: 0, letterSpacing: "0.2em" }}
            animate={{ opacity: 1, letterSpacing: "0.5em" }}
            transition={{ duration: 1.5 }}
            className="text-[10px] uppercase text-zinc-500 mb-8 block"
          >
            Fine Metalwork 2026
          </motion.span>
          <h1 className="text-8xl md:text-[12rem] font-thin tracking-tighter leading-none">
            ETCHED<span className="font-black text-black">.</span>
          </h1>
        </motion.div>
        
        {/* Subtle Ambient Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-500/5 rounded-full blur-[120px]" />
      </section>

      {/* 2. GALLERY GRID (STAGGERED) */}
      <section className="px-6 md:px-24 pb-40">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-16 gap-y-32">
          {etchedPatterns.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1, ease: [0.215, 0.61, 0.355, 1] }}
              className={`${index % 2 !== 0 ? "md:translate-y-32" : ""}`}
              onClick={() => setSelectedImage(item)}
            >
              <div className="group relative cursor-pointer overflow-hidden bg-white rounded-sm">
                {/* Image Wrap */}
                <motion.div 
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.8 }}
                  className="aspect-[3/4]"
                >
                  <img 
                    src={item.img} 
                    alt={item.name} 
                    className="w-full h-full object-cover grayscale brightness-75 group-hover:grayscale-0 group-hover:brightness-100 transition-all duration-1000"
                  />
                </motion.div>

                {/* Corner Label */}
                <div className="absolute top-4 left-4 mix-blend-difference">
                  <span className="text-[10px] font-mono opacity-50">{item.id}</span>
                </div>
              </div>

              {/* Caption */}
              <div className="mt-8 flex justify-between items-baseline border-b border-zinc-900 pb-4">
                <h3 className="text-2xl font-light tracking-tight group-hover:text-white transition-colors">
                  {item.name}
                </h3>
                <span className="text-[10px] tracking-widest text-zinc-600 uppercase">
                  {item.category}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 3. THE "SPECS" DARK PANEL */}
      <section className="bg-black py-40 px-6 border-y border-zinc-900">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-xs tracking-[0.6em] text-zinc-500 uppercase mb-16">Specifications</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12 text-left">
            {[
              { label: "Grades", val: "304 / 316L" },
              { label: "Colors", val: "PVD / Black" },
              { label: "Max Width", val: "1500mm" },
              { label: "Finish", val: "Super Mirror" }
            ].map((s, i) => (
              <div key={i}>
                <p className="text-[10px] text-zinc-600 uppercase mb-2">{s.label}</p>
                <p className="text-lg font-light">{s.val}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. FULLSCREEN OVERLAY MODAL */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-white backdrop-blur-xl flex items-center justify-center p-6"
            onClick={() => setSelectedImage(null)}
          >
            <motion.div 
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="relative max-w-6xl w-full grid md:grid-cols-2 gap-16 items-center"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="aspect-square bg-zinc-900 rounded-sm overflow-hidden">
                <img src={selectedImage.img} className="w-full h-full object-cover" alt="" />
              </div>
              
              <div className="space-y-8">
                <button 
                  onClick={() => setSelectedImage(null)}
                  className="text-zinc-500 hover:text-white text-xs tracking-widest uppercase transition-colors"
                >
                  ← Back to Collection
                </button>
                <h2 className="text-7xl font-thin tracking-tighter italic">{selectedImage.name}</h2>
                <div className="h-px w-20 bg-zinc-700" />
                <p className="text-zinc-400 font-light leading-relaxed text-lg">
                  A high-definition chemical etch on architectural-grade stainless steel. 
                  Optimized for premium cladding where lighting creates a shifting visual 
                  experience across the surface.
                </p>
                <button className="px-10 py-4 bg-zinc-100 text-black text-[10px] uppercase font-bold tracking-[0.2em] hover:bg-white transition-all">
                  Get Technical Data
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}