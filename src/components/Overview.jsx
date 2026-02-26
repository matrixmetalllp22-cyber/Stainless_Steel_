

// import React from "react";
// import { motion } from "framer-motion";
// import { useInView } from "react-intersection-observer";
// import { Factory, Target, Award, Users, Shield, Globe } from "lucide-react";

// export default function AboutUs() {
//   const [titleRef, titleInView] = useInView({
//     triggerOnce: true,
//     threshold: 0.1,
//   });

//   const [contentRef, contentInView] = useInView({
//     triggerOnce: true,
//     threshold: 0.1,
//   });

//   const [imageRef, imageInView] = useInView({
//     triggerOnce: true,
//     threshold: 0.1,
//   });

//   // Animation variants
//   const fadeInUp = {
//     hidden: { opacity: 0, y: 30 },
//     visible: { opacity: 1, y: 0 },
//   };

//   const staggerContainer = {
//     hidden: { opacity: 0 },
//     visible: {
//       opacity: 1,
//       transition: {
//         staggerChildren: 0.15,
//         delayChildren: 0.2,
//       },
//     },
//   };

//   const fadeInLeft = {
//     hidden: { opacity: 0, x: -30 },
//     visible: { opacity: 1, x: 0 },
//   };

//   const fadeInRight = {
//     hidden: { opacity: 0, x: 30 },
//     visible: { opacity: 1, x: 0 },
//   };

//   const scaleIn = {
//     hidden: { opacity: 0, scale: 0.9 },
//     visible: { opacity: 1, scale: 1 },
//   };

//   const floatingAnimation = {
//     hidden: { y: 0 },
//     visible: {
//       y: [-10, 10, -10],
//       transition: {
//         duration: 6,
//         repeat: Infinity,
//         ease: "easeInOut"
//       }
//     }
//   };

//   return (
//     <div className="w-full bg-gradient-to-b from-gray-50 to-white py-20 px-4 md:px-8 overflow-hidden relative">
//       {/* Decorative Background Elements */}
//       {/* <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-orange-500 via-orange-500 to-orange-500"></div> */}
//       <div className="absolute top-20 left-10 w-40 h-40 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30"></div>
//       <div className="absolute bottom-20 right-10 w-60 h-60 bg-purple-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>

//       {/* Title */}
//       <motion.div
//         ref={titleRef}
//         initial="hidden"
//         animate={titleInView ? "visible" : "hidden"}
//         variants={fadeInUp}
//         transition={{ duration: 0.8, type: "spring" }}
//         className="max-w-6xl mx-auto mb-16 relative"
//       >
//         <div className="text-center">
//           <span className="inline-block px-4 py-1.5 bg-blue-50 text-orange-400 rounded-full text-sm font-medium mb-4 border border-blue-100">
//             Our Story
//           </span>
//           <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 tracking-tight">
//              <span className="bg-gradient-to-r from-orange-600 to-red-300 bg-clip-text text-transparent">Matrix Metals</span>
//           </h1>
//           <motion.div
//             initial={{ width: 0 }}
//             animate={titleInView ? { width: 100 } : { width: 0 }}
//             transition={{ duration: 1, delay: 0.5 }}
//             className="h-1.5 bg-gradient-to-r from-orange-500 to-purple-500 mx-auto rounded-full w-24"
//           />
//         </div>
//       </motion.div>

//       {/* Main Content */}
//       <div className="max-w-7xl mx-auto relative">
//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
//           {/* Left Content */}
//           <motion.div
//             ref={contentRef}
//             initial="hidden"
//             animate={contentInView ? "visible" : "hidden"}
//             variants={staggerContainer}
//             className="space-y-10"
//           >
//             <motion.div 
//               variants={fadeInLeft}
//               className="inline-flex items-center gap-3 px-4 py-2 bg-white rounded-full shadow-sm border border-gray-100"
//             >
//               <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
//               <span className="text-sm font-medium text-gray-600">SINCE 1959</span>
//             </motion.div>

//             <motion.div variants={fadeInLeft}>
//               <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 leading-tight">
//                 India's Premier Stainless Steel 
//                 <span className="text-blue-600"> Surface Finishes</span> Expert
//               </h2>
//             </motion.div>

//             <motion.div 
//               variants={fadeInLeft} 
//               transition={{ delay: 0.1 }}
//               className="space-y-6"
//             >
//               <div className="flex items-start gap-4">
//                 <div className="mt-1.5 p-2 bg-blue-50 rounded-lg">
//                   <Target className="w-5 h-5 text-blue-600" />
//                 </div>
//                 <p className="text-gray-700 leading-relaxed text-lg">
//                   <span className="font-medium text-gray-900">Minox Metal Private Limited</span>, based in Bengaluru, specializes in processing stainless steel flat products through cutting, slitting, and polishing to achieve various finishes including No.4, Hairline, Scotch Brite, No.8, Bead Blast, Vibration, Etched, and PVD Coated.
//                 </p>
//               </div>

//               <div className="flex items-start gap-4">
//                 <div className="mt-1.5 p-2 bg-purple-50 rounded-lg">
//                   <Award className="w-5 h-5 text-purple-600" />
//                 </div>
//                 <p className="text-gray-700 leading-relaxed text-lg">
//                   As one of the world's premier stainless steel service centers with a legacy since 1959, we excel in Processing, Import, Export, and Trading—combining traditional craftsmanship with modern innovation.
//                 </p>
//               </div>

//               <div className="flex items-start gap-4">
//                 <div className="mt-1.5 p-2 bg-green-50 rounded-lg">
//                   <Globe className="w-5 h-5 text-green-600" />
//                 </div>
//                 <p className="text-gray-700 leading-relaxed text-lg">
//                   Serving diverse sectors from architecture and construction to automotive and aviation, we deliver stainless steel solutions that power innovation across industries.
//                 </p>
//               </div>
//             </motion.div>

//             {/* Stats Grid */}
//             <motion.div
//               variants={scaleIn}
//               transition={{ delay: 0.4 }}
//               className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-8 border-t border-gray-100"
//             >
//               {[
//                 { icon: <Factory />, value: "1959", label: "Established", color: "bg-blue-50 text-blue-600" },
//                 { icon: <Award />, value: "60+", label: "Years Experience", color: "bg-purple-50 text-purple-600" },
//                 { icon: <Shield />, value: "100%", label: "Quality Focus", color: "bg-green-50 text-green-600" },
//                 { icon: <Globe />, value: "Global", label: "Reach", color: "bg-orange-50 text-orange-600" }
//               ].map((stat, index) => (
//                 <motion.div
//                   key={index}
//                   whileHover={{ y: -8, scale: 1.05 }}
//                   initial={{ opacity: 0, y: 20 }}
//                   animate={contentInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
//                   transition={{ delay: 0.5 + index * 0.1 }}
//                   className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 group"
//                 >
//                   <div className={`w-14 h-14 ${stat.color} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
//                     <div className="w-7 h-7">
//                       {stat.icon}
//                     </div>
//                   </div>
//                   <div className="text-3xl font-bold text-gray-900 mb-1">{stat.value}</div>
//                   <div className="text-sm font-medium text-gray-600">{stat.label}</div>
//                 </motion.div>
//               ))}
//             </motion.div>

//             {/* CTA Button */}
//             {/* <motion.div
//               variants={fadeInLeft}
//               transition={{ delay: 0.6 }}
//               className="pt-6"
//             >
//               <motion.button
//                 whileHover={{ scale: 1.05 }}
//                 whileTap={{ scale: 0.95 }}
//                 className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-xl hover:shadow-xl transition-all duration-300 hover:shadow-blue-500/25"
//               >
//                 Explore Our Process
//                 <span className="ml-2">→</span>
//               </motion.button>
//             </motion.div> */}
//           </motion.div>

//           {/* Right Image Section */}
//           <motion.div
//             ref={imageRef}
//             initial="hidden"
//             animate={imageInView ? "visible" : "hidden"}
//             variants={fadeInRight}
//             transition={{ duration: 0.8, type: "spring" }}
//             className="relative"
//           >
//             <div className="relative group">
//               {/* Main Image Container */}
//               <motion.div
//                 animate={floatingAnimation}
//                 className="absolute -inset-4 bg-linear-to-r from-blue-400 to-purple-400 rounded-3xl opacity-20 blur-xl group-hover:opacity-30 transition-opacity duration-300"
//               />
              
//               <motion.div
//                 whileHover={{ scale: 1.02 }}
//                 transition={{ duration: 0.5, type: "spring" }}
//                 className="relative overflow-hidden rounded-2xl shadow-2xl border-8 border-white"
//               >
//                 <motion.img
//                   initial={{ scale: 1.1, rotate: 1 }}
//                   animate={imageInView ? { scale: 1, rotate: 0 } : { scale: 1.1, rotate: 1 }}
//                   transition={{ duration: 1, ease: "easeOut" }}
//                   src="/Images/aluminium-sector.jpg"
//                   alt="Minox Metal Facility"
//                   className="w-full h-[500px] object-cover group-hover:scale-105 transition-transform duration-700"
//                 />
                
//                 {/* Image Overlay Gradient */}
//                 <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
//               </motion.div>

//               {/* Floating Cards */}
//               <motion.div
//                 initial={{ opacity: 0, x: 20 }}
//                 animate={imageInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
//                 transition={{ delay: 0.3, duration: 0.6 }}
//                 className="absolute -bottom-6 -left-6 bg-white rounded-xl shadow-2xl p-6 border border-gray-100 max-w-xs"
//               >
//                 <div className="flex items-center gap-3 mb-3">
//                   <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center">
//                     <Users className="w-6 h-6 text-blue-600" />
//                   </div>
//                   <div>
//                     <div className="text-2xl font-bold text-gray-900">150+</div>
//                     <div className="text-sm text-gray-600">Dedicated Team</div>
//                   </div>
//                 </div>
//                 <p className="text-sm text-gray-700">Experts in stainless steel processing and innovation</p>
//               </motion.div>

//               <motion.div
//                 initial={{ opacity: 0, x: -20 }}
//                 animate={imageInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
//                 transition={{ delay: 0.5, duration: 0.6 }}
//                 className="absolute -top-6 -right-6 bg-gradient-to-r from-orange-600 to-purple-600 rounded-xl shadow-2xl p-6 max-w-xs"
//               >
//                 <div className="text-white">
//                   <div className="text-sm opacity-90 mb-2">CERTIFIED QUALITY</div>
//                   <h3 className="text-xl font-bold mb-2">ISO 9001:2015</h3>
//                   <p className="text-sm opacity-90">International quality standards compliance</p>
//                 </div>
//               </motion.div>
//             </div>

//             {/* Image Caption */}
//             <motion.div
//               initial={{ opacity: 0, y: 20 }}
//               animate={imageInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
//               transition={{ delay: 0.7, duration: 0.6 }}
//               className="mt-12 pl-8 relative"
//             >
//               <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-500 to-purple-500 rounded-full"></div>
//               <div>
//                 <div className="text-sm text-gray-500 uppercase tracking-wider font-medium mb-2">
//                   INDUSTRY LEADERS
//                 </div>
//                 <h3 className="text-2xl font-bold text-gray-900">
//                   Precision Engineering & 
//                   <span className="text-blue-600"> Innovative Solutions</span>
//                 </h3>
//                 <p className="text-gray-600 mt-2">
//                   Our Bengaluru facility combines advanced technology with decades of expertise
//                 </p>
//               </div>
//             </motion.div>
//           </motion.div>
//         </div>

//         {/* Bottom CTA */}
//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6, delay: 0.2 }}
//           viewport={{ once: true }}
//           className="mt-24 pt-12 border-t border-gray-100"
//         >
//           <div className="text-center max-w-3xl mx-auto">
//             <motion.div
//               initial={{ scale: 0 }}
//               whileInView={{ scale: 1 }}
//               transition={{ type: "spring", delay: 0.3 }}
//               className="w-16 h-16 bg-gradient-to-r from-orange-500 to-purple-500 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg"
//             >
//               <Shield className="w-8 h-8 text-white" />
//             </motion.div>
//             <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
//               Quality & Innovation Since 1959
//             </h3>
//             <p className="text-lg text-gray-600 mb-8">
//               Combining six decades of craftsmanship with cutting-edge technology to deliver exceptional stainless steel solutions worldwide.
//             </p>
//             {/* <div className="flex flex-wrap gap-4 justify-center">
//               <motion.button
//                 whileHover={{ scale: 1.05 }}
//                 whileTap={{ scale: 0.95 }}
//                 className="px-8 py-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-semibold rounded-xl hover:shadow-lg transition-all duration-300"
//               >
//                 View Our Products
//               </motion.button>
//               <motion.button
//                 whileHover={{ scale: 1.05 }}
//                 whileTap={{ scale: 0.95 }}
//                 className="px-8 py-3 bg-white text-gray-700 font-semibold rounded-xl border border-gray-200 hover:border-gray-300 hover:shadow-lg transition-all duration-300"
//               >
//                 Contact Our Team
//               </motion.button>
//             </div> */}
//           </div>
//         </motion.div>
//       </div>
//     </div>
//   );
// }







// import React from "react";
// import { motion } from "framer-motion";
// import { useInView } from "react-intersection-observer";
// import { Settings, Ruler, Activity, ShieldCheck, Cpu, HardHat } from "lucide-react";

// export default function AboutUs() {
//   const [titleRef, titleInView] = useInView({ triggerOnce: true, threshold: 0.1 });
//   const [contentRef, contentInView] = useInView({ triggerOnce: true, threshold: 0.1 });
//   const [imageRef, imageInView] = useInView({ triggerOnce: true, threshold: 0.1 });

//   // Industrial Animation Variants
//   const containerVariants = {
//     hidden: { opacity: 0 },
//     visible: {
//       opacity: 1,
//       transition: { staggerChildren: 0.15, delayChildren: 0.3 }
//     }
//   };

//   const mechanicalSlide = {
//     hidden: { opacity: 0, x: -50 },
//     visible: { 
//       opacity: 1, 
//       x: 0,
//       transition: { type: "spring", stiffness: 100, damping: 20 }
//     }
//   };

//   const revealClip = {
//     hidden: { clipPath: "inset(0 100% 0 0)" },
//     visible: { 
//       clipPath: "inset(0 0% 0 0)",
//       transition: { duration: 1, ease: "easeInOut" }
//     }
//   };

//   return (
//     <div className="w-full bg-slate-50 py-24 px-4 md:px-8 overflow-hidden relative">
//       {/* Decorative Progress Line */}
//       <motion.div 
//         initial={{ scaleX: 0 }}
//         animate={{ scaleX: 1 }}
//         transition={{ duration: 1.5, ease: "circOut" }}
//         className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-100 via-blue-600 to-blue-100 origin-left"
//       />
      
//       {/* Title Section */}
//       <motion.div
//         ref={titleRef}
//         initial="hidden"
//         animate={titleInView ? "visible" : "hidden"}
//         variants={containerVariants}
//         className="max-w-7xl mx-auto mb-20 text-center"
//       >
//         <motion.span variants={mechanicalSlide} className="inline-block px-4 py-1 border border-blue-200 bg-blue-50 text-blue-700 text-xs font-bold tracking-widest uppercase rounded mb-4">
//           Corporate Profile
//         </motion.span>
//         <motion.h1 variants={revealClip} className="text-4xl md:text-6xl font-black text-slate-900 mb-6 tracking-tighter">
//           MATRIX <span className="text-blue-600">METALS</span> LLP
//         </motion.h1>
//         <motion.p variants={mechanicalSlide} className="text-lg md:text-xl text-slate-600 font-medium max-w-3xl mx-auto">
//           Engineering Discipline. Industrial Precision. Enduring Reliability.
//         </motion.p>
//       </motion.div>

//       <div className="max-w-7xl mx-auto">
//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          
//           {/* Left Content */}
//           <motion.div
//             ref={contentRef}
//             initial="hidden"
//             animate={contentInView ? "visible" : "hidden"}
//             variants={containerVariants}
//             className="space-y-8"
//           >
//             <motion.div variants={mechanicalSlide} className="prose prose-slate lg:prose-lg">
//               <p className="text-slate-700 leading-relaxed">
//                 Matrix Metals LLP is a stainless steel processing enterprise headquartered in 
//                 <span className="font-semibold text-slate-900"> Bengaluru, India</span>, operating from the Peenya Industrial district under the 
//                 <span className="text-blue-600 font-bold"> MoOWR framework</span>.
//               </p>
//             </motion.div>

//             {/* Distinction Quote with Pulse Animation */}
//             <motion.div 
//               variants={mechanicalSlide}
//               className="bg-slate-900 text-white p-8 rounded-lg shadow-xl relative overflow-hidden group"
//             >
//               <motion.div 
//                 animate={{ rotate: 360 }}
//                 transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
//                 className="absolute -top-10 -right-10 opacity-5 text-white"
//               >
//                 <Settings size={200} />
//               </motion.div>
//               <h3 className="text-blue-400 font-bold uppercase tracking-widest text-sm mb-3">Our Distinction</h3>
//               <p className="text-lg font-medium leading-snug relative z-10">
//                 "We do not operate as traders of material. We function as a structured surface and precision engineering facility."
//               </p>
//             </motion.div>

//             <motion.div variants={mechanicalSlide} className="space-y-4">
//               <h3 className="text-2xl font-bold text-slate-900">Our Operational Philosophy</h3>
//               <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
//                 {[
//                   { icon: <Activity />, title: "Procedural Control" },
//                   { icon: <Ruler />, title: "Mechanical Accuracy" },
//                   { icon: <Cpu />, title: "Strategic Partnership" }
//                 ].map((item, i) => (
//                   <motion.div 
//                     key={i}
//                     whileHover={{ scale: 1.02, backgroundColor: "#eff6ff" }}
//                     className="flex items-center gap-3 p-4 bg-white border border-slate-200 rounded-md transition-colors"
//                   >
//                     <span className="text-blue-600">{item.icon}</span>
//                     <span className="font-bold text-sm text-slate-800 uppercase tracking-tight">{item.title}</span>
//                   </motion.div>
//                 ))}
//               </div>
//             </motion.div>
//           </motion.div>

//           {/* Right Content */}
//           <motion.div
//             ref={imageRef}
//             initial="hidden"
//             animate={imageInView ? "visible" : "hidden"}
//             variants={containerVariants}
//             className="lg:pl-10"
//           >
//             <div className="relative border-l-4 border-blue-600 pl-8 py-2">
//               <motion.h2 variants={revealClip} className="text-3xl font-bold text-slate-900 mb-6">Our Foundation</motion.h2>
//               <motion.p variants={mechanicalSlide} className="text-slate-600 text-lg mb-8 leading-relaxed">
//                 Established with a clear industrial objective: to raise the standard of stainless steel processing through engineering discipline and process accountability.
//               </motion.p>
              
//               <div className="space-y-6">
//                 {[
//                   { icon: <ShieldCheck />, title: "System-Driven Quality", text: "We believe that precision is not achieved by inspection — it is achieved by system design." },
//                   { icon: <HardHat />, title: "Technical Governance", text: "Governed by calibrated parameters and repeatable methodology." }
//                 ].map((item, i) => (
//                   <motion.div variants={mechanicalSlide} key={i} className="flex gap-4">
//                     <div className="mt-1 flex-shrink-0 w-10 h-10 bg-slate-100 rounded flex items-center justify-center text-blue-600">
//                       {item.icon}
//                     </div>
//                     <div>
//                       <h4 className="font-bold text-slate-900 uppercase text-sm tracking-wide">{item.title}</h4>
//                       <p className="text-slate-600 text-sm">{item.text}</p>
//                     </div>
//                   </motion.div>
//                 ))}
//               </div>

//               {/* Technical Spec Card with "Scanning" Animation */}
//               <motion.div 
//                 variants={mechanicalSlide}
//                 className="mt-12 bg-white border border-slate-200 rounded-xl overflow-hidden shadow-sm relative"
//               >
//                 <div className="bg-slate-50 px-6 py-3 border-b border-slate-200 flex justify-between items-center">
//                   <span className="text-xs font-black text-slate-400 uppercase tracking-widest">Process Methodology</span>
//                   <div className="flex gap-1">
//                     <motion.div animate={{ opacity: [1, 0, 1] }} transition={{ repeat: Infinity, duration: 1 }} className="w-2 h-2 rounded-full bg-blue-500" />
//                     <div className="w-2 h-2 rounded-full bg-slate-300" />
//                   </div>
//                 </div>
//                 <div className="p-6 relative overflow-hidden">
//                    {/* Scanning line effect */}
//                    <motion.div 
//                      animate={{ y: [0, 120, 0] }}
//                      transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
//                      className="absolute inset-0 w-full h-1 bg-blue-500/10 z-0 pointer-events-none"
//                    />
                   
//                    <p className="text-sm font-mono text-slate-500 mb-4 font-bold tracking-tight">
//                     CALIBRATED PARAMETERS
//                    </p>
//                    <div className="grid grid-cols-2 gap-y-3 relative z-10">
//                       {["Slitting Precision", "Surface Integrity", "Flatness Correction", "Burr Minimisation"].map((text, i) => (
//                         <motion.div 
//                           key={i}
//                           initial={{ opacity: 0 }}
//                           animate={imageInView ? { opacity: 1 } : {}}
//                           transition={{ delay: 1 + (i * 0.2) }}
//                           className="text-xs font-bold text-slate-800 flex items-center gap-2"
//                         >
//                           <div className="w-1 h-1 bg-blue-500" /> {text}
//                         </motion.div>
//                       ))}
//                    </div>
//                 </div>
//               </motion.div>
//             </div>
//           </motion.div>
//         </div>
//       </div>
//     </div>
//   );
// }






















import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { 
  Settings, Ruler, Activity, ShieldCheck, 
  Cpu, HardHat, Factory, Leaf, Zap, Award 
} from "lucide-react";

export default function AboutUs() {
  const [titleRef, titleInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [contentRef, contentInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [imageRef, imageInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [advRef, advInView] = useInView({ triggerOnce: true, threshold: 0.1 });

  // Industrial Animation Variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.3 }
    }
  };

  const mechanicalSlide = {
    hidden: { opacity: 0, x: -50 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { type: "spring", stiffness: 100, damping: 20 }
    }
  };

  const revealClip = {
    hidden: { clipPath: "inset(0 100% 0 0)" },
    visible: { 
      clipPath: "inset(0 0% 0 0)",
      transition: { duration: 1, ease: "easeInOut" }
    }
  };

  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <div className="w-full bg-slate-50 py-24 px-4 md:px-8 overflow-hidden relative">
      {/* Decorative Progress Line */}
      <motion.div 
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 1.5, ease: "circOut" }}
        className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-100 via-blue-600 to-blue-100 origin-left"
      />
      
      {/* Title Section */}
      <motion.div
        ref={titleRef}
        initial="hidden"
        animate={titleInView ? "visible" : "hidden"}
        variants={containerVariants}
        className="max-w-7xl mx-auto mb-20 text-center"
      >
        <motion.span variants={mechanicalSlide} className="inline-block px-4 py-1 border border-blue-200 bg-blue-50 text-blue-700 text-xs font-bold tracking-widest uppercase rounded mb-4">
          Corporate Profile
        </motion.span>
        <motion.h1 variants={revealClip} className="text-4xl md:text-6xl font-black text-slate-900 mb-6 tracking-tighter">
          MATRIX <span className="text-blue-600">METALS</span> LLP
        </motion.h1>
        <motion.p variants={mechanicalSlide} className="text-lg md:text-xl text-slate-600 font-medium max-w-3xl mx-auto">
          Engineering Discipline. Industrial Precision. Enduring Reliability.
        </motion.p>
      </motion.div>

      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start mb-24">
          
          {/* Left Content */}
          <motion.div
            ref={contentRef}
            initial="hidden"
            animate={contentInView ? "visible" : "hidden"}
            variants={containerVariants}
            className="space-y-8"
          >
            <motion.div variants={mechanicalSlide} className="prose prose-slate lg:prose-lg">
              <p className="text-slate-700 leading-relaxed">
                Matrix Metals LLP is a stainless steel processing enterprise headquartered in 
                <span className="font-semibold text-slate-900"> Bengaluru, India</span>, operating from the Peenya Industrial district under the 
                <span className="text-blue-600 font-bold"> MoOWR framework</span>.
              </p>
            </motion.div>

            {/* Distinction Quote */}
            <motion.div 
              variants={mechanicalSlide}
              className="bg-slate-900 text-white p-8 rounded-lg shadow-xl relative overflow-hidden group"
            >
              <motion.div 
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute -top-10 -right-10 opacity-5 text-white"
              >
                <Settings size={200} />
              </motion.div>
              <h3 className="text-blue-400 font-bold uppercase tracking-widest text-sm mb-3">Our Distinction</h3>
              <p className="text-lg font-medium leading-snug relative z-10">
                "We do not operate as traders of material. We function as a structured surface and precision engineering facility."
              </p>
            </motion.div>

            <motion.div variants={mechanicalSlide} className="space-y-4">
              <h3 className="text-2xl font-bold text-slate-900">Our Operational Philosophy</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {[
                  { icon: <Activity />, title: "Procedural Control" },
                  { icon: <Ruler />, title: "Mechanical Accuracy" },
                  { icon: <Cpu />, title: "Strategic Partnership" }
                ].map((item, i) => (
                  <motion.div 
                    key={i}
                    whileHover={{ scale: 1.02, backgroundColor: "#eff6ff" }}
                    className="flex items-center gap-3 p-4 bg-white border border-slate-200 rounded-md transition-colors"
                  >
                    <span className="text-blue-600">{item.icon}</span>
                    <span className="font-bold text-sm text-slate-800 uppercase tracking-tight">{item.title}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Right Content */}
          <motion.div
            ref={imageRef}
            initial="hidden"
            animate={imageInView ? "visible" : "hidden"}
            variants={containerVariants}
            className="lg:pl-10"
          >
            <div className="relative border-l-4 border-blue-600 pl-8 py-2">
              <motion.h2 variants={revealClip} className="text-3xl font-bold text-slate-900 mb-6">Our Foundation</motion.h2>
              <motion.p variants={mechanicalSlide} className="text-slate-600 text-lg mb-8 leading-relaxed">
                Established with a clear industrial objective: to raise the standard of stainless steel processing through engineering discipline and process accountability.
              </motion.p>
              
              <div className="space-y-6">
                {[
                  { icon: <ShieldCheck />, title: "System-Driven Quality", text: "We believe that precision is not achieved by inspection — it is achieved by system design." },
                  { icon: <HardHat />, title: "Technical Governance", text: "Governed by calibrated parameters and repeatable methodology." }
                ].map((item, i) => (
                  <motion.div variants={mechanicalSlide} key={i} className="flex gap-4">
                    <div className="mt-1 flex-shrink-0 w-10 h-10 bg-slate-100 rounded flex items-center justify-center text-blue-600">
                      {item.icon}
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900 uppercase text-sm tracking-wide">{item.title}</h4>
                      <p className="text-slate-600 text-sm">{item.text}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* --- NEW SECTION: Product Advantages & Sustainability --- */}
        <motion.div
          ref={advRef}
          initial="hidden"
          animate={advInView ? "visible" : "hidden"}
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-16 border-t border-slate-200"
        >
          {/* Advantage 1: Engineered Excellence */}
          <motion.div variants={fadeInUp} className="bg-white p-8 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
            <div className="w-12 h-12 bg-blue-600 text-white rounded-lg flex items-center justify-center mb-6">
              <Award size={24} />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-4 uppercase tracking-tight">Product Advantages</h3>
            <p className="text-slate-600 text-sm leading-relaxed">
              Every processed coil and sheet reflects controlled precision and structural stability. Our advantage lies in disciplined execution governed by calibrated systems and measurable parameters for high-demand industrial applications.
            </p>
          </motion.div>

          {/* Advantage 2: Make In India */}
          <motion.div variants={fadeInUp} className="bg-blue-600 p-8 rounded-2xl text-white shadow-lg relative overflow-hidden group">
             <motion.div 
               animate={{ scale: [1, 1.1, 1] }} 
               transition={{ repeat: Infinity, duration: 4 }}
               className="absolute -right-4 -bottom-4 opacity-10"
             >
               <Factory size={160} />
             </motion.div>
            <div className="w-12 h-12 bg-white/20 backdrop-blur-md text-white rounded-lg flex items-center justify-center mb-6">
              <Zap size={24} />
            </div>
            <h3 className="text-xl font-bold mb-4 uppercase tracking-tight">Make In India</h3>
            <p className="text-blue-50 text-sm leading-relaxed">
              We strengthen domestic manufacturing by localising precision conversion and surface engineering. We reduce dependency on external processing while ensuring international-grade standards within India’s industrial ecosystem.
            </p>
          </motion.div>

          {/* Advantage 3: Sustainability */}
          <motion.div variants={fadeInUp} className="bg-white p-8 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
            <div className="w-12 h-12 bg-emerald-600 text-white rounded-lg flex items-center justify-center mb-6">
              <Leaf size={24} />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-4 uppercase tracking-tight">Eco-Responsibility</h3>
            <p className="text-slate-600 text-sm leading-relaxed">
              Sustainability is embedded in our philosophy. From UV conditioning to scrap minimisation and energy-conscious equipment selection, we maintain technical standards without compromising environmental stewardship.
            </p>
          </motion.div>
        </motion.div>

        {/* Footer Note */}
        <motion.div 
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <p className="text-slate-400 font-mono text-xs uppercase tracking-[0.3em]">
            Precision . Contribution . Responsibility
          </p>
        </motion.div>
      </div>
    </div>
  );
} 






























































// import React from "react";
// import { motion } from "framer-motion";
// import { useInView } from "react-intersection-observer";
// import { 
//   Settings, Ruler, Activity, ShieldCheck, 
//   Cpu, HardHat, Factory, Leaf, Zap, Award, 
//   CheckCircle2, Globe
// } from "lucide-react";

// export default function AboutUs() {
//   const [titleRef, titleInView] = useInView({ triggerOnce: true, threshold: 0.1 });
//   const [advRef, advInView] = useInView({ triggerOnce: true, threshold: 0.1 });

//   // Animation Variants
//   const containerVariants = {
//     hidden: { opacity: 0 },
//     visible: {
//       opacity: 1,
//       transition: { staggerChildren: 0.2, delayChildren: 0.1 }
//     }
//   };

//   const cardSlideUp = {
//     hidden: { opacity: 0, y: 40, scale: 0.95 },
//     visible: { 
//       opacity: 1, 
//       y: 0, 
//       scale: 1,
//       transition: { type: "spring", stiffness: 100, damping: 15 } 
//     }
//   };

//   const lineGrow = {
//     hidden: { width: 0 },
//     visible: { width: "100%", transition: { duration: 1, ease: "easeInOut" } }
//   };

//   return (
//     <div className="w-full bg-slate-50 py-24 px-4 md:px-8 overflow-hidden">
//       <div className="max-w-7xl mx-auto">
        
//         {/* Previous sections would be above this... */}

//         {/* --- DYNAMIC PRODUCT ADVANTAGES SECTION --- */}
//         <div className="mt-32">
//           <motion.div
//             ref={titleRef}
//             initial="hidden"
//             animate={titleInView ? "visible" : "hidden"}
//             className="mb-16"
//           >
//             <div className="flex items-center gap-4 mb-4">
//               <motion.div 
//                 variants={lineGrow} 
//                 className="h-px bg-blue-600 hidden md:block" 
//               />
//               <span className="text-blue-600 font-black tracking-[0.2em] uppercase text-sm whitespace-nowrap">
//                 Strategic Value
//               </span>
//             </div>
            
//             <h2 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tighter mb-6">
//               OUR <span className="text-blue-600">PRODUCT ADVANTAGES</span>
//             </h2>
//             <p className="text-slate-600 max-w-2xl text-lg leading-relaxed">
//               Matrix Metals LLP delivers stainless steel solutions engineered for performance, 
//               longevity, and environmental responsibility through disciplined execution.
//             </p>
//           </motion.div>

//           <motion.div
//             ref={advRef}
//             initial="hidden"
//             animate={advInView ? "visible" : "hidden"}
//             variants={containerVariants}
//             className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
//           >
//             {/* 1. Engineered Performance */}
//             <motion.div variants={cardSlideUp} className="group bg-white p-8 rounded-xl border border-slate-200 shadow-sm hover:border-blue-500 transition-all duration-300">
//               <div className="mb-6 inline-flex p-3 rounded-lg bg-slate-100 text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors">
//                 <Settings size={28} />
//               </div>
//               <h3 className="text-xl font-bold text-slate-900 mb-4 uppercase tracking-tight">Engineered Precision</h3>
//               <p className="text-slate-600 text-sm leading-relaxed mb-4">
//                 Our advantage lies not merely in conversion capability, but in disciplined execution governed by calibrated systems. Every processed coil reflects structural stability and surface integrity.
//               </p>
//               <ul className="space-y-2">
//                 {['Controlled Resource Utilisation', 'High-Demand Applications', 'Technical Certainty'].map((item, i) => (
//                   <li key={i} className="flex items-center gap-2 text-xs font-bold text-slate-500 uppercase">
//                     <CheckCircle2 size={14} className="text-blue-500" /> {item}
//                   </li>
//                 ))}
//               </ul>
//             </motion.div>

//             {/* 2. National Impact (Make In India) */}
//             <motion.div variants={cardSlideUp} className="group bg-slate-900 p-8 rounded-xl shadow-2xl relative overflow-hidden">
//               <div className="absolute top-0 right-0 p-4 opacity-10 text-white">
//                 <Factory size={120} />
//               </div>
//               <div className="mb-6 inline-flex p-3 rounded-lg bg-blue-600 text-white">
//                 <Globe size={28} />
//               </div>
//               <h3 className="text-xl font-bold text-white mb-4 uppercase tracking-tight">Make In India</h3>
//               <p className="text-slate-300 text-sm leading-relaxed">
//                 As a proud participant in the <span className="text-blue-400 font-bold">Make in India initiative</span>, we localise precision conversion to reduce dependency on external processing while ensuring international-grade standards within the domestic ecosystem.
//               </p>
//               <div className="mt-6 pt-6 border-t border-slate-800">
//                 <span className="text-[10px] font-black tracking-widest text-blue-500 uppercase">National Manufacturing Growth</span>
//               </div>
//             </motion.div>

//             {/* 3. Sustainability & Stewardship */}
//             <motion.div variants={cardSlideUp} className="group bg-white p-8 rounded-xl border border-slate-200 shadow-sm hover:border-emerald-500 transition-all duration-300">
//               <div className="mb-6 inline-flex p-3 rounded-lg bg-slate-100 text-emerald-600 group-hover:bg-emerald-600 group-hover:text-white transition-colors">
//                 <Leaf size={28} />
//               </div>
//               <h3 className="text-xl font-bold text-slate-900 mb-4 uppercase tracking-tight">Eco-Responsibility</h3>
//               <p className="text-slate-600 text-sm leading-relaxed">
//                 Sustainability is embedded within our processing philosophy. We use energy-conscious equipment, efficient water usage in cleaning lines, and controlled chemical management systems.
//               </p>
//               <div className="mt-4 flex gap-2">
//                 <span className="px-2 py-1 bg-emerald-50 text-emerald-700 text-[10px] font-bold rounded border border-emerald-100">SCRAP MINIMISATION</span>
//                 <span className="px-2 py-1 bg-emerald-50 text-emerald-700 text-[10px] font-bold rounded border border-emerald-100">UV CONDITIONING</span>
//               </div>
//             </motion.div>
//           </motion.div>
          
//           {/* Bottom Commitment Summary */}
//           <motion.div 
//             initial={{ opacity: 0 }}
//             whileInView={{ opacity: 1 }}
//             transition={{ delay: 0.8 }}
//             className="mt-12 p-6 bg-blue-50 border border-blue-100 rounded-lg text-center"
//           >
//             <div className="relative max-w-2xl mx-auto">
//   {/* Quote icon */}
//   <span className="absolute -top-4 -left-2 text-5xl text-blue-200 font-serif">“</span>

//   <p className="text-gray-700 font-medium italic text-base md:text-lg leading-relaxed bg-blue-50 p-6 rounded-2xl shadow-sm border border-blue-100">
//     Matrix Metals LLP stands as a manufacturing partner that delivers stainless steel performance with technical certainty, national contribution, and sustainable industrial responsibility.
//   </p>

//   <span className="absolute -bottom-6 right-2 text-5xl text-blue-200 font-serif">”</span>
// </div>
//           </motion.div>
//         </div>

//       </div>
//     </div>
//   );
// }