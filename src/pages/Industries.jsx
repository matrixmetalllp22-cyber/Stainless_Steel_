// import React, { useState } from "react";
// import Masonry from "react-masonry-css";
// import { motion, AnimatePresence } from "framer-motion";
// import { X, ZoomIn, ZoomOut } from "lucide-react";

// const certificates = [
//   { id: 1, image: "/Images/prague.jpg", title: "ISO 9001:2015" },
//   { id: 2, image: "/Images/bridge-5624104_1920.jpg", title: "IATF 16949:6" },
//   { id: 3, image: "/Images/button-4927935_1920.jpg", title: "ISO 14001:5" },
//   { id: 4, image: "/Images/firenze-9292729_1280.jpg", title: "ISO 45001:8" },
//   { id: 5, image: "/Images/prague.jpg", title: "Quality Excellence Award" },
//   { id: 6, image: "/Images/prague.jpg", title: "Environmental Certification" },
//   { id: 7, image: "/Images/bridge-5624104_1920.jpg", title: "Safety Standard" },
//   { id: 8, image: "/Images/button-4927935_1920.jpg", title: "Supplier Excellence" },
//   { id: 9, image: "/Images/firenze-9292729_1280.jpg", title: "Sustainability Award" },
//   { id: 10, image: "/Images/prague.jpg", title: "Industry Recognition" },
// ];

// const breakpointColumns = {
//   default: 4,
//   1200: 3,
//   900: 2,
//   600: 1,
// };

// export default function QualitySection() {
//   // Fixed: Removed TypeScript syntax (: string) — now valid JavaScript
//   const [selectedCert, setSelectedCert] = useState(null); // holds image URL string or null
//   const [zoom, setZoom] = useState(1);

//   return (
//     <section className="bg-gradient-to-b from-gray-50 via-white to-gray-100 text-gray-800 overflow-hidden">
//       {/* Hero Quality Statement */}
//       <div className="max-w-7xl mx-auto px-6 py-24">
//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.8 }}
//           className="text-center"
//         >
//           <h1 className="text-5xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-gray-700 to-gray-900 leading-tight">
//             Uncompromising Quality
//           </h1>
//           <p className="mt-6 text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed font-light">
//             At Matrix Metals, excellence is not a goal — it is our foundation.
//           </p>
//         </motion.div>

//         <motion.div
//           initial={{ scaleX: 0 }}
//           whileInView={{ scaleX: 1 }}
//           viewport={{ once: true }}
//           transition={{ duration: 1, delay: 0.4 }}
//           className="h-1 bg-gradient-to-r from-transparent via-gray-400 to-transparent mx-auto mt-12 max-w-xs"
//         />
//       </div>

//       {/* Core Commitments */}
//       <div className="max-w-7xl mx-auto px-6 py-16">
//         <motion.h2
//           initial={{ opacity: 0 }}
//           whileInView={{ opacity: 1 }}
//           viewport={{ once: true }}
//           className="text-4xl font-bold text-center text-gray-800 mb-16"
//         >
//           We Are Committed To
//         </motion.h2>

//         <div className="grid md:grid-cols-3 gap-10 max-w-5xl mx-auto">
//           {[
//             "Exceeding customer expectations with precision-engineered solutions",
//             "Zero-defect manufacturing through relentless process discipline",
//             "Sustainability and safety as non-negotiable principles",
//           ].map((item, i) => (
//             <motion.div
//               key={i}
//               initial={{ opacity: 0, y: 20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               transition={{ delay: i * 0.2 }}
//               className="group"
//             >
//               <div className="bg-white/70 backdrop-blur-sm border border-gray-200 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
//                 <div className="w-14 h-14 bg-gradient-to-br from-gray-700 to-gray-900 rounded-full flex items-center justify-center mb-6 mx-auto">
//                   <span className="text-white text-2xl font-bold">{i + 1}</span>
//                 </div>
//                 <p className="text-center text-gray-700 text-lg leading-relaxed font-medium">
//                   {item}
//                 </p>
//               </div>
//             </motion.div>
//           ))}
//         </div>
//       </div>

//       {/* Detailed Sections */}
//       <div className="bg-gray-50/50 py-20">
//         <div className="max-w-7xl mx-auto px-6 space-y-20">
//           {[
            
//             {
//               title: "Why Matrix Metals",
//               subtitle: "Because good enough is never enough.",
//               points: [
//                 "Technological superiority in metal processing",
//                 "Engineering depth born from decades of mastery",
//                 "Strategic location for just-in-time delivery",
//                 "Unmatched reliability and ownership",
//               ],
//             },
//             {
//               title: "HSE Principles",
//               subtitle: "Safety is a commandment, not a choice.",
//               points: [
//                 "Zero-incident culture with military-grade protocols",
//                 "Continuous training and behavioral safety programs",
//                 "Eco-conscious operations with minimal footprint",
//                 "Proactive risk elimination at source",
//               ],
//             },
//              {
//               title: "Quality Policy",
//               subtitle: "Precision is not optional — it is absolute.",
//               points: [
//                 "Global-standard inspection at every stage",
//                 "Full material traceability from melt to delivery",
//                 "Advanced metallurgical testing labs",
//                 "Real-time process monitoring & control",
//               ],
//             },
//           ].map((section, idx) => (
//             <motion.article
//               key={idx}
//               initial={{ opacity: 0, x: idx % 2 === 0 ? -50 : 50 }}
//               whileInView={{ opacity: 1, x: 0 }}
//               viewport={{ once: true }}
//               transition={{ duration: 0.7 }}
//               className="bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-100"
//             >
//               <div className="p-10 md:p-14">
//                 <h3 className="text-4xl font-bold text-gray-800 mb-4">{section.title}</h3>
//                 <p className="text-xl text-gray-600 mb-8 italic">{section.subtitle}</p>
//                 <ul className="space-y-5">
//                   {section.points.map((point, i) => (
//                     <motion.li
//                       key={i}
//                       initial={{ opacity: 0, x: -20 }}
//                       whileInView={{ opacity: 1, x: 0 }}
//                       transition={{ delay: i * 0.1 }}
//                       className="flex items-start gap-4 text-gray-700 text-lg"
//                     >
//                       <span className="mt-2 w-2 h-2 bg-gradient-to-r from-gray-600 to-gray-800 rounded-full flex-shrink-0" />
//                       <span>{point}</span>
//                     </motion.li>
//                   ))}
//                 </ul>
//               </div>
//             </motion.article>
//           ))}
//         </div>
//       </div>

//       {/* Certificates Gallery */}
//       <div className="py-24 px-6 bg-gradient-to-t from-gray-100 to-transparent">
//         <div className="max-w-7xl mx-auto">
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             className="text-center mb-16"
//           >
//             <h2 className="text-4xl md:text-5xl font-extrabold text-gray-800">
//               Certified Excellence
//             </h2>
//             <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
//               Proudly compliant with <strong>ISO 9001:2015</strong>, <strong>IATF 16949:2016</strong>,
//               <strong>ISO 14001:2015</strong>, and <strong>ISO 45001:2018</strong>
//             </p>
//           </motion.div>

//           <Masonry
//             breakpointCols={breakpointColumns}
//             className="flex -ml-4 w-auto"
//             columnClassName="pl-4 bg-clip-padding"
//           >
//             {certificates.map((cert, i) => (
//               <motion.div
//                 key={cert.id}
//                 layout
//                 initial={{ opacity: 0, scale: 0.9 }}
//                 whileInView={{ opacity: 1, scale: 1 }}
//                 transition={{ delay: i * 0.05 }}
//                 whileHover={{ y: -8 }}
//                 onClick={() => {
//                   setSelectedCert(cert.image);
//                   setZoom(1);
//                 }}
//                 className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 mb-8 cursor-zoom-in bg-white border border-gray-200"
//               >
//                 <div className="aspect-w-1 aspect-h-1">
//                   <img
//                     src={cert.image}
//                     alt={cert.title}
//                     className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
//                   />
//                 </div>
//                 <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400 flex items-end p-6">
//                   <div>
//                     <p className="text-white font-semibold text-lg">{cert.title}</p>
//                     <p className="text-gray-200 text-sm">Click to enlarge</p>
//                   </div>
//                 </div>
//                 <div className="absolute top-4 right-4 bg-white/90 backdrop-blur px-3 py-1 rounded-full text-sm font-medium text-gray-700 shadow">
//                   {cert.title}
//                 </div>
//               </motion.div>
//             ))}
//           </Masonry>
//         </div>
//       </div>

//       {/* Enhanced Lightbox Modal */}
//       <AnimatePresence>
//         {selectedCert && (
//           <motion.div
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             exit={{ opacity: 0 }}
//             className="fixed inset-0 bg-black/95 backdrop-blur-lg z-[9999] flex items-center justify-center p-8"
//             onClick={() => setSelectedCert(null)}
//           >
//             <motion.div
//               className="relative max-w-5xl max-h-full"
//               onClick={(e) => e.stopPropagation()}
//               initial={{ scale: 0.8 }}
//               animate={{ scale: 1 }}
//               exit={{ scale: 0.8 }}
//             >
//               <button
//                 onClick={() => setSelectedCert(null)}
//                 className="absolute -top-12 right-0 text-white/80 hover:text-white transition flex items-center gap-2 text-lg"
//               >
//                 <X size={28} />
//                 <span className="hidden md:inline">Close</span>
//               </button>

//               <div className="relative overflow-hidden rounded-2xl shadow-2xl border-4 border-white/20">
//                 <motion.img
//                   src={selectedCert}
//                   alt="Certificate enlarged"
//                   className="max-w-full max-h-[85vh] object-contain"
//                   style={{ transform: `scale(${zoom})` }}
//                   transition={{ type: "spring", stiffness: 300, damping: 30 }}
//                 />
//               </div>

//               <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-4">
//                 <button
//                   onClick={() => setZoom(Math.max(0.5, zoom - 0.25))}
//                   className="bg-white/20 hover:bg-white/40 backdrop-blur p-3 rounded-full text-white transition"
//                 >
//                   <ZoomOut size={24} />
//                 </button>
//                 <span className="bg-white/20 backdrop-blur px-5 py-3 rounded-full text-white font-medium">
//                   {Math.round(zoom * 100)}%
//                 </span>
//                 <button
//                   onClick={() => setZoom(Math.min(3, zoom + 0.25))}
//                   className="bg-white/20 hover:bg-white/40 backdrop-blur p-3 rounded-full text-white transition"
//                 >
//                   <ZoomIn size={24} />
//                 </button>
//               </div>
//             </motion.div>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </section>
//   );
// }













// import React, { useState, useEffect } from "react";
// import Masonry from "react-masonry-css";
// import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
// import { X, ZoomIn, ZoomOut, Award, Shield, Target, Leaf } from "lucide-react";

// const certificates = [
//   { id: 1, image: "/Images/prague.jpg", title: "ISO 9001:2015" },
//   { id: 2, image: "/Images/bridge-5624104_1920.jpg", title: "IATF 16949:2016" },
//   { id: 3, image: "/Images/button-4927935_1920.jpg", title: "ISO 14001:2015" },
//   { id: 4, image: "/Images/firenze-9292729_1280.jpg", title: "ISO 45001:2018" },
//   { id: 5, image: "/Images/prague.jpg", title: "Quality Excellence Award 2024" },
//   { id: 6, image: "/Images/prague.jpg", title: "Environmental Leadership" },
//   { id: 7, image: "/Images/bridge-5624104_1920.jpg", title: "Zero Incident Safety Award" },
//   { id: 8, image: "/Images/button-4927935_1920.jpg", title: "Supplier of the Year" },
//   { id: 9, image: "/Images/firenze-9292729_1280.jpg", title: "Sustainability Pioneer" },
//   { id: 10, image: "/Images/prague.jpg", title: "Industry Innovation Award" },
// ];

// const breakpointColumns = {
//   default: 4,
//   1200: 3,
//   900: 2,
//   600: 1,
// };

// export default function QualitySection() {
//   const [selectedCert, setSelectedCert] = useState(null);
//   const [zoom, setZoom] = useState(1);
//   const { scrollYProgress } = useScroll();
//   const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);

//   // Wheel zoom in lightbox
//   useEffect(() => {
//     const handleWheel = (e) => {
//       if (!selectedCert) return;
//       e.preventDefault();
//       const delta = e.deltaY > 0 ? -0.25 : 0.25;
//       setZoom((prev) => Math.min(4, Math.max(0.5, prev + delta)));
//     };
//     window.addEventListener("wheel", handleWheel, { passive: false });
//     return () => window.removeEventListener("wheel", handleWheel);
//   }, [selectedCert]);

//   const commitments = [
//     { icon: Target, text: "Exceeding customer expectations with precision-engineered solutions", color: "from-blue-600 to-cyan-600" },
//     { icon: Shield, text: "Zero-defect manufacturing through relentless process discipline", color: "from-emerald-600 to-teal-600" },
//     { icon: Leaf, text: "Sustainability and safety as non-negotiable principles", color: "from-amber-500 to-orange-600" },
//   ];

//   return (
//     <section className="relative bg-gradient-to-br from-slate-50 via-white to-slate-100 text-slate-800 overflow-hidden">
//       {/* Subtle Background Pattern */}
//       <div className="absolute inset-0 opacity-5">
//         <div className="absolute inset-0" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%231f20' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v-2h4v-2h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")` }} />
//       </div>

//       {/* Hero */}
//       <div className="relative max-w-7xl mx-auto px-6 py-32">
//         <motion.div
//           initial={{ opacity: 0, y: 40 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 1, ease: "easeOut" }}
//           className="text-center"
//         >
//           <motion.h1
//             className="text-6xl md:text-7xl lg:text-8xl font-black tracking-tight bg-gradient-to-r from-slate-800 via-slate-700 to-amber-600 bg-clip-text text-transparent leading-tight"
//             style={{ y }}
//           >
//             Uncompromising
//             <br />
//             <span className="text-amber-600">Quality</span>
//           </motion.h1>
//           <p className="mt-8 text-xl md:text-2xl text-slate-600 max-w-4xl mx-auto font-light leading-relaxed">
//             At <span className="font-bold text-slate-800">Matrix Metals</span>, excellence isn’t a target.
//             <br />It is the <span className="text-amber-600 font-semibold">only standard</span> we know.
//           </p>
//         </motion.div>

//         <motion.div
//           initial={{ scaleX: 0 }}
//           whileInView={{ scaleX: 1 }}
//           viewport={{ once: true }}
//           transition={{ duration: 1.4, delay: 0.6 }}
//           className="h-1.5 bg-gradient-to-r from-transparent via-amber-500 to-transparent mx-auto mt-16 max-w-md rounded-full"
//         />
//       </div>

//       {/* Core Commitments - Glass Cards */}
//       <div className="max-w-7xl mx-auto px-6 py-24">
//         <motion.h2
//           initial={{ opacity: 0, y: 30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           className="text-5xl font-bold text-center text-slate-800 mb-20"
//         >
//           Built on Three Pillars
//         </motion.h2>

//         <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">
//           {commitments.map((item, i) => (
//             <motion.div
//               key={i}
//               initial={{ opacity: 0, y: 50 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               transition={{ delay: i * 0.2 + 0.3 }}
//               whileHover={{ y: -12 }}
//               className="group relative"
//             >
//               <div className="relative bg-white/70 backdrop-blur-xl border border-white/50 rounded-3xl p-10 shadow-2xl hover:shadow-3xl transition-all duration-700 overflow-hidden">
//                 {/* Gradient Orb */}
//                 <div className={`absolute -top-20 -right-20 w-64 h-64 bg-gradient-to-br ${item.color} opacity-20 rounded-full blur-3xl group-hover:scale-150 transition-transform duration-1000`} />
                
//                 <div className={`w-20 h-20 bg-gradient-to-br ${item.color} rounded-2xl flex items-center justify-center mb-8 shadow-xl`}>
//                   <item.icon className="w-10 h-10 text-white" strokeWidth={2.5} />
//                 </div>
                
//                 <p className="text-lg md:text-xl text-slate-700 leading-relaxed font-medium relative z-10">
//                   {item.text}
//                 </p>
//               </div>
//             </motion.div>
//           ))}
//         </div>
//       </div>

//       {/* Why Choose Us + HSE + Quality Policy */}
//       <div className="py-32 bg-gradient-to-b from-transparent via-amber-50/30 to-transparent">
//         <div className="max-w-7xl mx-auto px-6 space-y-32">
//           {[
//             {
//               title: "Why Matrix Metals",
//               subtitle: "Because good enough is never enough.",
//               points: [
//                 "Technological superiority in metal processing",
//                 "Engineering depth born from decades of mastery",
//                 "Strategic global locations for JIT delivery",
//                 "Ownership culture – your success is personal to us",
//               ],
//             },
//             {
//               title: "Health • Safety • Environment",
//               subtitle: "Safety is a commandment, not a choice.",
//               points: [
//                 "Zero-incident culture with military-grade protocols",
//                 "Behavioral safety training every quarter",
//                 "Carbon-neutral operations target by 2030",
//                 "Proactive risk elimination using AI & IoT",
//               ],
//             },
//             {
//               title: "Quality Policy",
//               subtitle: "Precision is not optional — it is absolute.",
//               points: [
//                 "100% inspection with automated vision systems",
//                 "Full material traceability via blockchain ledger",
//                 "In-house NABL-accredited metallurgical lab",
//                 "Real-time SPC and Six Sigma Black Belt oversight",
//               ],
//             },
//           ].map((section, idx) => (
//             <motion.article
//               key={idx}
//               initial={{ opacity: 0, x: idx % 2 === 0 ? -80 : 80 }}
//               whileInView={{ opacity: 1, x: 0 }}
//               viewport={{ once: true }}
//               transition={{ duration: 0.9, ease: "easeOut" }}
//               className="grid md:grid-cols-2 gap-16 items-center bg-white/80 backdrop-blur-2xl rounded-3xl shadow-2xl border border-amber-100 overflow-hidden"
//             >
//               <div className={`p-12 md:p-16 ${idx % 2 === 0 ? "order-1" : "order-2"}`}>
//                 <h3 className="text-5xl font-extrabold text-slate-800 mb-4">{section.title}</h3>
//                 <p className="text-2xl text-amber-700 font-medium italic mb-10">{section.subtitle}</p>
//                 <ul className="space-y-6">
//                   {section.points.map((point, i) => (
//                     <motion.li
//                       key={i}
//                       initial={{ opacity: 0, x: -30 }}
//                       whileInView={{ opacity: 1, x: 0 }}
//                       transition={{ delay: i * 0.15 }}
//                       className="flex items-center gap-5 text-slate-700 text-lg"
//                     >
//                       <div className="w-3 h-3 bg-gradient-to-r from-amber-500 to-orange-600 rounded-full flex-shrink-0" />
//                       <span className="font-medium">{point}</span>
//                     </motion.li>
//                   ))}
//                 </ul>
//               </div>
//               <div className={`h-96 ${idx % 2 === 0 ? "order-2" : "order-1"} bg-gradient-to-br from-amber-400/20 to-orange-500/20 relative overflow-hidden`}>
//                 <div className="absolute inset-0 bg-grid-slate-900/5" />
//                 <Award className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 text-amber-600/10" />
//               </div>
//             </motion.article>
//           ))}
//         </div>
//       </div>

//       {/* Certificates Gallery - Premium */}
//       <div className="py-32 px-6 bg-gradient-to-t from-slate-900/5 to-transparent">
//         <div className="max-w-7xl mx-auto">
//           <motion.div
//             initial={{ opacity: 0, y: 30 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 1 }}
//             className="text-center mb-20"
//           >
//             <h2 className="text-5xl md:text-6xl font-black text-center text-slate-800 mb-6">
//               Certified <span className="text-amber-600">Excellence</span>
//             </h2>
//             <p className="text-xl text-center text-slate-600 max-w-4xl mx-auto font-light">
//               Internationally accredited • Audited annually • Proudly displayed
//             </p>
//           </motion.div>

//           <Masonry
//             breakpointCols={breakpointColumns}
//             className="flex -ml-6 w-auto"
//             columnClassName="pl-6"
//           >
//             {certificates.map((cert, i) => (
//               <motion.div
//                 key={cert.id}
//                 layout
//                 initial={{ opacity: 0, scale: 0.85, rotate: -5 }}
//                 whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
//                 viewport={{ once: true }}
//                 transition={{ delay: i * 0.08, type: "spring", stiffness: 80 }}
//                 whileHover={{ y: -16, rotate: 1 }}
//                 onClick={() => {
//                   setSelectedCert(cert.image);
//                   setZoom(1);
//                 }}
//                 className="group relative mb-10 cursor-zoom-in overflow-hidden rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-700 border border-slate-200/50 backdrop-blur-sm bg-white/60"
//               >
//                 {/* Gold Seal */}
//                 <div className="absolute top-4 left-4 z-10 bg-gradient-to-br from-amber-400 to-orange-600 text-white text-xs font-bold px-4 py-2 rounded-full shadow-lg flex items-center gap-2">
//                   <Award size={16} />
//                   CERTIFIED
//                 </div>

//                 <img
//                   src={cert.image}
//                   alt={cert.title}
//                   className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000"
//                   loading="lazy"
//                 />

//                 {/* Overlay */}
//                 <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-8">
//                   <div>
//                     <h4 className="text-2xl font-bold text-white mb-2">{cert.title}</h4>
//                     <p className="text-amber-300 text-sm font-medium">Click to view full certificate</p>
//                   </div>
//                 </div>
//               </motion.div>
//             ))}
//           </Masonry>
//         </div>
//       </div>

//       {/* Ultra-Premium Lightbox */}
//       <AnimatePresence>
//         {selectedCert && (
//           <motion.div
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             exit={{ opacity: 0 }}
//             onClick={() => setSelectedCert(null)}
//             className="fixed inset-0 bg-black/95 backdrop-blur-2xl z-[9999] flex items-center justify-center p-6 md:p-12"
//           >
//             <motion.div
//               className="relative max-w-7xl w-full"
//               onClick={(e) => e.stopPropagation()}
//               initial={{ scale: 0.9, rotateY: 15 }}
//               animate={{ scale: 1, rotateY: 0 }}
//               exit={{ scale: 0.9, opacity: 0 }}
//               transition={{ type: "spring", damping: 25 }}
//             >
//               {/* Close Button */}
//               <button
//                 onClick={() => setSelectedCert(null)}
//                 className="absolute -top-16 right-0 text-white/70 hover:text-white flex items-center gap-3 text-lg font-medium transition"
//               >
//                 <X size={32} strokeWidth={2} />
//                 <span className="hidden md:block">Close</span>
//               </button>

//               {/* Certificate with Gold Frame */}
//               <div className="relative rounded-3xl overflow-hidden shadow-4xl border-8 border-amber-500/30 bg-gradient-to-b from-amber-500/5 to-transparent">
//                 <motion.img
//                   src={selectedCert}
//                   alt="Full certificate"
//                   className="w-full h-auto max-h-[85vh] object-contain block mx-auto"
//                   style={{ transform: `scale(${zoom})` }}
//                   drag
//                   dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
//                   dragElastic={0.2}
//                 />
//               </div>

//               {/* Zoom Controls */}
//               <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex items-center gap-6 bg-black/50 backdrop-blur-xl px-8 py-5 rounded-full border border-white/20">
//                 <button
//                   onClick={() => setZoom(Math.max(0.5, zoom - 0.3))}
//                   className="text-white hover:scale-110 transition"
//                 >
//                   <ZoomOut size={28} />
//                 </button>
//                 <span className="text-white font-bold text-xl min-w-[80px] text-center">
//                   {Math.round(zoom * 100)}%
//                 </span>
//                 <button
//                   onClick={() => setZoom(Math.min(4, zoom + 0.3))}
//                   className="text-white hover:scale-110 transition"
//                 >
//                   <ZoomIn size={28} />
//                 </button>
//                 <div className="w-px h-10 bg-white/30 mx-2" />
//                 <p className="text-white/80 text-sm">Scroll or pinch to zoom</p>
//               </div>
//             </motion.div>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </section>
//   );
// }


import React, { useState, useEffect } from "react";
import Masonry from "react-masonry-css";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import { X, ZoomIn, ZoomOut, Award, Shield, Target, Leaf } from "lucide-react";

const certificates = [
  { id: 1, image: "/Images/prague.jpg", title: "ISO 9001:2015" },
  { id: 2, image: "/Images/bridge-5624104_1920.jpg", title: "IATF 16949:2016" },
  { id: 3, image: "/Images/button-4927935_1920.jpg", title: "ISO 14001:2015" },
  { id: 4, image: "/Images/firenze-9292729_1280.jpg", title: "ISO 45001:2018" },
  { id: 5, image: "/Images/prague.jpg", title: "Quality Excellence Award 2024" },
  { id: 6, image: "/Images/prague.jpg", title: "Environmental Leadership" },
  { id: 7, image: "/Images/bridge-5624104_1920.jpg", title: "Zero Incident Safety Award" },
  { id: 8, image: "/Images/button-4927935_1920.jpg", title: "Supplier of the Year" },
  { id: 9, image: "/Images/firenze-9292729_1280.jpg", title: "Sustainability Pioneer" },
  { id: 10, image: "/Images/prague.jpg", title: "Industry Innovation Award" },
];

// Responsive Masonry breakpoints
const breakpointColumns = {
  default: 4,
  1400: 4,
  1100: 3,
  800: 2,
  500: 1,
};

export default function QualitySection() {
  const [selectedCert, setSelectedCert] = useState(null);
  const [zoom, setZoom] = useState(1);
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  // Enhanced wheel + touch zoom for lightbox
  useEffect(() => {
    if (!selectedCert) return;

    const handleWheel = (e) => {
      e.preventDefault();
      const delta = e.deltaY > 0 ? -0.2 : 0.2;
      setZoom((prev) => Math.max(0.5, Math.min(5, prev + delta)));
    };

    window.addEventListener("wheel", handleWheel, { passive: false });
    return () => window.removeEventListener("wheel", handleWheel);
  }, [selectedCert]);

  const commitments = [
    { icon: Target, text: "Exceeding customer expectations with precision-engineered solutions", color: "from-blue-600 to-cyan-600" },
    { icon: Shield, text: "Zero-defect manufacturing through relentless process discipline", color: "from-emerald-600 to-teal-600" },
    { icon: Leaf, text: "Sustainability and safety as non-negotiable principles", color: "from-amber-500 to-orange-600" },
  ];

  return (
    <section className="relative bg-gradient-to-br from-slate-50 via-white to-slate-100 text-slate-800 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%231f20' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v-2h4v-2h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          backgroundSize: "60px 60px"
        }} />
      </div>

      {/* Hero Section */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 sm:py-32 lg:py-40">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="text-center"
        >
          <motion.h1
            className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tight bg-gradient-to-r from-slate-800 via-slate-700 to-amber-600 bg-clip-text text-transparent leading-tight"
            style={{ y }}
          >
            Uncompromising
            <br className="block sm:hidden" />
            <span className="text-amber-600"> Quality</span>
          </motion.h1>
          <p className="mt-6 sm:mt-8 text-lg sm:text-xl md:text-2xl text-slate-600 max-w-4xl mx-auto font-light leading-relaxed px-4">
            At <span className="font-bold text-slate-800">Matrix Metals</span>, excellence isn’t a target.
            <br className="hidden sm:block" />
            It is the <span className="text-amber-600 font-semibold">only standard</span> we know.
          </p>
        </motion.div>

        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.4, delay: 0.6 }}
          className="h-1 bg-gradient-to-r from-transparent via-amber-500 to-transparent mx-auto mt-12 max-w-xs sm:max-w-md rounded-full"
        />
      </div>

      {/* Core Commitments */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl sm:text-5xl font-bold text-center text-slate-800 mb-12 sm:mb-20"
        >
          Built on Three Pillars
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 max-w-6xl mx-auto">
          {commitments.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2 }}
              whileHover={{ y: -8 }}
              className="group relative"
            >
              <div className="relative bg-white/80 backdrop-blur-xl border border-white/50 rounded-2xl sm:rounded-3xl p-8 sm:p-10 shadow-xl hover:shadow-2xl transition-all duration-500">
                <div className={`absolute -top-16 -right-16 w-48 h-48 sm:w-64 sm:h-64 bg-gradient-to-br ${item.color} opacity-20 rounded-full blur-3xl group-hover:scale-125 transition-transform duration-1000`} />
                
                <div className={`w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br ${item.color} rounded-2xl flex items-center justify-center mb-6 shadow-lg`}>
                  <item.icon className="w-8 h-8 sm:w-10 sm:h-10 text-white" strokeWidth={2.5} />
                </div>
                
                <p className="text-base sm:text-lg md:text-xl text-slate-700 leading-relaxed font-medium">
                  {item.text}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Why Choose Us + HSE + Quality Policy */}
      <div className="py-20 sm:py-32 bg-gradient-to-b from-transparent via-amber-50/30 to-transparent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20 sm:space-y-32">
          {[
            { title: "Why Matrix Metals", subtitle: "Because good enough is never enough.", points: ["Technological superiority in metal processing", "Engineering depth born from decades of mastery", "Strategic global locations for JIT delivery", "Ownership culture – your success is personal to us"] },
            { title: "Health • Safety • Environment", subtitle: "Safety is a commandment, not a choice.", points: ["Zero-incident culture with military-grade protocols", "Behavioral safety training every quarter", "Carbon-neutral operations target by 2030", "Proactive risk elimination using AI & IoT"] },
            { title: "Quality Policy", subtitle: "Precision is not optional — it is absolute.", points: ["100% inspection with automated vision systems", "Full material traceability via blockchain ledger", "In-house NABL-accredited metallurgical lab", "Real-time SPC and Six Sigma Black Belt oversight"] },
          ].map((section, idx) => (
            <motion.article
              key={idx}
              initial={{ opacity: 0, x: idx % 2 === 0 ? -60 : 60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-16 items-center bg-white/90 backdrop-blur-2xl rounded-2xl sm:rounded-3xl shadow-2xl border border-amber-100/50 overflow-hidden"
            >
              <div className={`p-8 sm:p-12 lg:p-16 ${idx % 2 === 0 ? "md:order-1" : "md:order-2"}`}>
                <h3 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-800 mb-4">{section.title}</h3>
                <p className="text-xl sm:text-2xl text-amber-700 font-medium italic mb-8">{section.subtitle}</p>
                <ul className="space-y-4 sm:space-y-6">
                  {section.points.map((point, i) => (
                    <motion.li
                      key={i}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.1 }}
                      className="flex items-start gap-4 text-slate-700 text-base sm:text-lg"
                    >
                      <div className="w-3 h-3 bg-gradient-to-r from-amber-500 to-orange-600 rounded-full flex-shrink-0 mt-1.5" />
                      <span className="font-medium leading-relaxed">{point}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>
              <div className={`h-64 sm:h-80 lg:h-96 ${idx % 2 === 0 ? "md:order-2" : "md:order-1"} bg-gradient-to-br from-amber-400/20 to-orange-500/20 relative overflow-hidden`}>
                <div className="absolute inset-0 bg-grid-slate-900/5" />
                <Award className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 sm:w-48 sm:h-48 text-amber-600/10" />
              </div>
            </motion.article>
          ))}
        </div>
      </div>

      {/* Certificates Gallery */}
      <div className="py-20 sm:py-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-t from-slate-900/5 to-transparent">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12 sm:mb-20"
          >
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-black text-slate-800 mb-4">
              Certified <span className="text-amber-600">Excellence</span>
            </h2>
            <p className="text-lg sm:text-xl text-slate-600 max-w-3xl mx-auto font-light">
              Internationally accredited • Audited annually • Proudly displayed
            </p>
          </motion.div>

          <Masonry
            breakpointCols={breakpointColumns}
            className="flex -ml-4 sm:-ml-6 w-auto"
            columnClassName="pl-4 sm:pl-6"
          >
            {certificates.map((cert, i) => (
              <motion.div
                key={cert.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05, type: "spring", stiffness: 100 }}
                whileHover={{ y: -12 }}
                onClick={() => {
                  setSelectedCert(cert.image);
                  setZoom(1);
                }}
                className="group relative mb-6 sm:mb-10 cursor-zoom-in overflow-hidden rounded-2xl sm:rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 border border-slate-200/50 bg-white/70 backdrop-blur-sm"
              >
                <div className="absolute top-3 left-3 z-10 bg-gradient-to-br from-amber-400 to-orange-600 text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-lg flex items-center gap-1.5 text-nowrap">
                  <Award size={14} />
                  CERTIFIED
                </div>

                <div className="aspect-w-4 aspect-h-3 overflow-hidden">
                  <img
                    src={cert.image}
                    alt={cert.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    loading="lazy"
                  />
                </div>

                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-6 sm:p-8">
                  <div>
                    <h4 className="text-xl sm:text-2xl font-bold text-white mb-1">{cert.title}</h4>
                    <p className="text-amber-300 text-sm font-medium">Tap to view full certificate</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </Masonry>
        </div>
      </div>

      {/* Mobile-First Lightbox with Touch Support */}
      <AnimatePresence>
        {selectedCert && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedCert(null)}
            className="fixed inset-0 bg-black/95 backdrop-blur-2xl z-[9999] flex items-center justify-center p-4 sm:p-8"
          >
            <motion.div
              className="relative max-w-5xl w-full"
              onClick={(e) => e.stopPropagation()}
              initial={{ scale: 0.85, rotateY: 10 }}
              animate={{ scale: 1, rotateY: 0 }}
              exit={{ scale: 0.85, opacity: 0 }}
              transition={{ type: "spring", damping: 30 }}
            >
              <button
                onClick={() => setSelectedCert(null)}
                className="absolute -top-12 sm:-top-16 right-0 text-white/80 hover:text-white flex items-center gap-2 text-base sm:text-lg font-medium z-10"
              >
                <X size={28} sm={{ size: 36 }} />
                <span className="hidden sm:inline">Close</span>
              </button>

              <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden shadow-4xl border-4 sm:border-8 border-amber-500/40 bg-black/50">
                <motion.img
                  src={selectedCert}
                  alt="Certificate"
                  className="w-full max-h-[80vh] sm:max-h-[85vh] object-contain block mx-auto touch-pan-y"
                  style={{ transform: `scale(${zoom})` }}
                  drag
                  dragMomentum={false}
                  dragElastic={0.1}
                  dragTransition={{ bounceStiffness: 300, bounceDamping: 30 }}
                  onDragStart={(e) => e.preventDefault()}
                />
              </div>

              {/* Zoom Controls - Mobile Friendly */}
              <div className="absolute bottom-4 sm:bottom-8 left-1/2 -translate-x-1/2 flex items-center gap-4 sm:gap-6 bg-black/70 backdrop-blur-xl px-6 sm:px-8 py-4 sm:py-5 rounded-full border border-white/30 text-white">
                <button onClick={() => setZoom(z => Math.max(0.5, z - 0.3))} className="hover:scale-110 transition">
                  <ZoomOut size={24} sm={{ size: 28 }} />
                </button>
                <span className="font-bold text-lg sm:text-xl min-w-[70px] text-center">
                  {Math.round(zoom * 100)}%
                </span>
                <button onClick={() => setZoom(z => Math.min(5, z + 0.3))} className="hover:scale-110 transition">
                  <ZoomIn size={24} sm={{ size: 28 }} />
                </button>
                <div className="w-px h-8 bg-white/40 mx-2 hidden sm:block" />
                <p className="text-white/70 text-xs sm:text-sm hidden sm:block">Pinch or scroll to zoom</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}