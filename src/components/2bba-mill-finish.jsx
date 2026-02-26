// import { useState, useRef } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import { 
//   CheckCircle, Ruler, Layers, ChevronRight, Thermometer, 
//   Droplets, Shield, Clock, Calendar, ChevronDown, ChevronUp,
//   Scissors, Sparkles, ShieldCheck, Zap, Award, ArrowRight,
//   Activity, Cpu, FileCheck, Gauge
// } from 'lucide-react';

// const StainlessSteelSheets = () => {
//   const [selectedGrade, setSelectedGrade] = useState("304");
//   const [showCustomOptions, setShowCustomOptions] = useState(false);
//   const [expandedCategory, setExpandedCategory] = useState(null);
//   const marqueeRefs = useRef({});

//   const materialGrades = [
//     { code: '202', description: 'Economical grade with good corrosion resistance', color: 'from-amber-100 to-amber-50', accent: 'amber' },
//     { code: '304', description: 'Most common austenitic grade, excellent corrosion resistance', color: 'from-cyan-100 to-blue-50', accent: 'cyan' },
//     { code: '304L', description: 'Low carbon version of 304, ideal for welding', color: 'from-emerald-100 to-teal-50', accent: 'emerald' },
//     { code: '316', description: 'Superior corrosion resistance with molybdenum', color: 'from-violet-100 to-purple-50', accent: 'violet' },
//     { code: '316L', description: 'Low carbon version of 316 for welded applications', color: 'from-fuchsia-100 to-pink-50', accent: 'fuchsia' },
//     { code: '321', description: 'Stabilized with titanium for high temperature', color: 'from-orange-100 to-amber-50', accent: 'orange' },
//     { code: '430', description: 'Ferritic grade with good formability', color: 'from-slate-100 to-zinc-50', accent: 'slate' },
//     { code: '441', description: 'High temperature ferritic stainless steel', color: 'from-rose-100 to-red-50', accent: 'rose' }
//   ];

//   const processingServices = [
//     { icon: Scissors, title: "Precision Slitting", desc: "10–1520 mm width • ±0.10 mm tolerance", color: "from-blue-400 to-indigo-500" },
//     { icon: Ruler, title: "Tension Levelling", desc: "Industry-leading flatness for fabrication", color: "from-emerald-400 to-teal-500" },
//     { icon: Sparkles, title: "Premium Finishing", desc: "2B • BA • No.4 • HL • Mirror", color: "from-violet-400 to-purple-500" },
//     { icon: ShieldCheck, title: "Protective Lamination", desc: "Laser film & paper interleaving", color: "from-amber-400 to-orange-500" },
//     { icon: Zap, title: "Surface Engineering", desc: "Degreasing • UV passivation", color: "from-rose-400 to-pink-500" }
//   ];

//   const dimensions = [
//     { size: '1250 × 2500 mm', availability: 'In Stock • 48 hrs' },
//     { size: '1500 × 3000 mm', availability: 'In Stock • 24 hrs' },
//     { size: '1520 × 4000 mm', availability: 'Premium Stock' },
//     { size: 'Custom Sizes', availability: 'Made to Order' }
//   ];

//   const applicationCategories = [
//     { id: 'aero', name: 'Aerospace & Defence', icon: '✈️', count: 28, color: 'from-sky-100 to-indigo-50' },
//     { id: 'auto', name: 'Automotive & EV', icon: '🚗', count: 32, color: 'from-emerald-100 to-cyan-50' },
//     { id: 'infra', name: 'Architecture & Infrastructure', icon: '🏙️', count: 35, color: 'from-amber-100 to-orange-50' },
//     { id: 'food', name: 'Food & Beverage', icon: '🍽️', count: 30, color: 'from-lime-100 to-green-50' },
//     { id: 'pharma', name: 'Pharmaceutical & Medical', icon: '💉', count: 27, color: 'from-violet-100 to-purple-50' },
//     { id: 'oil', name: 'Oil, Gas & Chemical', icon: '🛢️', count: 33, color: 'from-red-100 to-rose-50' },
//     { id: 'machinery', name: 'Industrial Machinery', icon: '⚙️', count: 45, color: 'from-slate-100 to-zinc-50' },
//     { id: 'marine', name: 'Marine & Shipbuilding', icon: '⛴️', count: 22, color: 'from-blue-100 to-cyan-50' },
//     { id: 'consumer', name: 'Consumer & Lifestyle', icon: '🏠', count: 25, color: 'from-pink-100 to-rose-50' }
//   ];

//   const getCategoryItems = (id) => {
//     const itemsMap = {
//       aero: ['✈ Aircraft Structural Panels', '🛩 Jet Engine Parts', '🚁 Helicopter Frames', '🛡 Armoured Panels', '📡 Radar Housings', '🛰 Satellite Frames'],
//       auto: ['🚗 EV Battery Enclosures', '🔋 Cooling Plates', '🚙 Chassis Parts', '⚙ Exhaust Systems', '🛞 Brake Components'],
//       infra: ['🏢 Building Facades', '🚪 Elevator Panels', '🪜 Stair Railings', '🏗 Bridge Components', '🛗 Escalator Cladding'],
//       food: ['🥛 Dairy Tanks', '🍺 Brewing Equipment', '🍴 Kitchen Surfaces', '🧊 Cold Storage Racks', '🥤 Filling Lines'],
//       pharma: ['💊 Cleanroom Panels', '🧪 Lab Benches', '🏥 Surgical Tables', '🧴 Sterilization Units', '🧬 Biotech Frames'],
//       oil: ['🛢 Storage Tanks', '⚙ Pressure Vessels', '🧪 Chemical Reactors', '🛠 Pipeline Systems', '⚡ Refinery Equipment'],
//       machinery: ['⚙ Machine Frames', '🤖 Robotic Arms', '🔩 CNC Bodies', '📦 Conveyor Systems', '🛠 Assembly Tables'],
//       marine: ['🚢 Ship Hull Liners', '⚓ Marine Railings', '🛥 Deck Structures', '🛠 Propulsion Parts', '🧭 Navigation Frames'],
//       consumer: ['🍽 Kitchen Utensils', '🥄 Premium Cutlery', '🚿 Bathroom Fittings', '🪑 Furniture Frames', '🧴 Storage Containers']
//     };
//     return itemsMap[id] || [];
//   };

//   const selectedGradeData = materialGrades.find(grade => grade.code === selectedGrade);

//   const toggleCategory = (id) => {
//     setExpandedCategory(expandedCategory === id ? null : id);
//   };

//   const handleMouseEnter = (id) => {
//     if (marqueeRefs.current[id]) marqueeRefs.current[id].style.animationPlayState = 'paused';
//   };

//   const handleMouseLeave = (id) => {
//     if (marqueeRefs.current[id]) marqueeRefs.current[id].style.animationPlayState = 'running';
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-b from-white to-slate-50 text-slate-800">
//       {/* HERO - Clean & Bright */}
//       <div className="relative pt-20 pb-28 overflow-hidden">
//         <div className="absolute inset-0 bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] [background-size:40px_40px] opacity-40" />
        
//         <div className="max-w-5xl mx-auto px-6 text-center relative z-10">
//           <motion.div
//             initial={{ opacity: 0, y: 40 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8 }}
//           >
//             <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white border border-slate-200 shadow-sm mb-8">
//               <Award className="w-4 h-4 text-emerald-500" />
//               <span className="text-sm font-medium tracking-widest text-slate-500">PREMIUM STAINLESS STEEL SHEETS</span>
//             </div>

//             <h1 className="text-7xl md:text-8xl font-light tracking-tighter leading-none mb-6">
//               Stainless Steel<br />Sheets
//             </h1>
//             <p className="text-2xl text-slate-600 max-w-2xl mx-auto font-light">
//               Precision processed • Surface engineered • Ready for your most demanding applications
//             </p>

//             <div className="flex gap-4 justify-center mt-12">
//               <motion.button
//                 whileHover={{ scale: 1.03 }}
//                 onClick={() => document.getElementById('grades').scrollIntoView({ behavior: 'smooth' })}
//                 className="px-10 py-4 bg-slate-900 text-white rounded-2xl font-medium flex items-center gap-3 shadow-lg hover:shadow-xl transition"
//               >
//                 Browse Grades
//                 <ArrowRight className="w-5 h-5" />
//               </motion.button>
//               {/* <motion.button
//                 whileHover={{ scale: 1.03 }}
//                 className="px-10 py-4 border border-slate-300 hover:border-slate-400 rounded-2xl font-medium transition"
//               >
//                 Request Quote
//               </motion.button> */}
//             </div>
//           </motion.div>
//         </div>
//       </div>

//       {/* NEW: OUR CAPABILITIES (Value-Added Processing Description) */}
//       <div className="max-w-7xl mx-auto px-6 py-20 border-t border-slate-100">
//         <div className="grid md:grid-cols-3 gap-12 items-start">
//           <div className="md:col-span-1">
//             <div className="text-blue-600 text-sm tracking-[3px] font-medium mb-4">OUR CAPABILITIES</div>
//             <h2 className="text-5xl font-light tracking-tight leading-tight">Engineered Transformation</h2>
//             <div className="w-20 h-1 bg-blue-200 mt-6 rounded-full"></div>
//           </div>
//           <div className="md:col-span-2 space-y-6 text-slate-600 text-lg leading-relaxed">
//             <p>
//               Matrix Metals LLP operates as a specialised stainless steel conversion and surface engineering facility. 
//               We do not position ourselves as material traders — we function as a structured processing partner delivering 
//               engineered transformation of mill-origin stainless steel coils into application-ready substrates.
//             </p>
//             <p>
//               Our operations are designed for manufacturers who require dimensional precision, surface refinement, and 
//               process-controlled execution under defined industrial standards. We provide advanced coil-to-coil and sheet 
//               processing services across all stainless steel grades supplied by our customers. Each project is executed 
//               under calibrated mechanical parameters to ensure width accuracy, flatness stability, burr control, and surface 
//               consistency. Whether the requirement involves narrow precision strips or flatness-critical sheets, our 
//               processing discipline ensures repeatability and structural integrity.
//             </p>
//             <p>
//               Our surface engineering capabilities include continuous No.4 finishing, industrial degreasing, hot wash 
//               conditioning, UV surface treatment, protective film lamination, interleaving paper integration, and tension 
//               levelling. These services enhance surface readiness, improve fabrication performance, and minimise downstream 
//               operational risk. Every metre processed undergoes structured validation before dispatch.
//             </p>
//             <p>
//               Through contract processing and job work services, we support OEMs, fabricators, exporters, and automation-driven 
//               manufacturers seeking to outsource technically sensitive operations. Our facility functions as an extension of 
//               our clients’ production lines — delivering precision conversion without compromising confidentiality, traceability, 
//               or quality governance.
//             </p>
//             <p className="font-medium text-slate-800">
//               Matrix Metals LLP delivers measurable value through engineered accuracy, controlled surface refinement, and 
//               disciplined execution. Our strength lies in transforming stainless steel into performance-optimised material — 
//               prepared, validated, and structured for demanding industrial integration.
//             </p>
//           </div>
//         </div>
//       </div>

//       {/* PROCESSING SERVICES - Clean Cards */}
//       <div className="max-w-7xl mx-auto px-6 py-20 bg-slate-50/50">
//         <div className="text-center mb-16">
//           <div className="text-blue-600 text-sm tracking-[3px] font-medium">VALUE-ADDED SERVICES</div>
//           <h2 className="text-5xl font-light tracking-tight mt-3">Engineered for Performance</h2>
//         </div>

//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
//           {processingServices.map((service, i) => (
//             <motion.div
//               key={i}
//               initial={{ opacity: 0, y: 30 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ delay: i * 0.08 }}
//               whileHover={{ y: -8 }}
//               className="bg-white border border-slate-100 rounded-3xl p-8 hover:border-slate-200 hover:shadow-xl transition-all group"
//             >
//               <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-6 group-hover:scale-110 transition`}>
//                 <service.icon className="w-7 h-7 text-white" />
//               </div>
//               <h3 className="font-semibold text-2xl mb-3 tracking-tight">{service.title}</h3>
//               <p className="text-slate-600 leading-relaxed">{service.desc}</p>
//             </motion.div>
//           ))}
//         </div>
//       </div>

//       {/* MATERIAL GRADES */}
//       <div id="grades" className="max-w-7xl mx-auto px-6 pb-20">
//         <div className="bg-white border border-slate-100 rounded-3xl p-12 shadow-sm">
//           <div className="flex justify-between items-end mb-12">
//             <div>
//               <div className="text-emerald-600 text-sm tracking-widest">MATERIAL GRADES</div>
//               <h2 className="text-5xl font-light tracking-tighter">Choose Your Grade</h2>
//             </div>
//             <p className="text-slate-500 max-w-xs text-right">Click any grade for detailed properties</p>
//           </div>

//           <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
//             {materialGrades.map((grade) => (
//               <motion.div
//                 key={grade.code}
//                 onClick={() => setSelectedGrade(grade.code)}
//                 whileHover={{ scale: 1.02 }}
//                 className={`rounded-2xl p-7 cursor-pointer transition-all border ${selectedGrade === grade.code 
//                   ? 'border-emerald-400 bg-emerald-50 shadow-md' 
//                   : 'border-slate-100 hover:border-slate-200 bg-white'}`}
//               >
//                 <div className="text-4xl font-semibold tracking-tighter mb-1">{grade.code}</div>
//                 <div className="text-sm text-slate-500 line-clamp-2">{grade.description}</div>
//                 {selectedGrade === grade.code && (
//                   <CheckCircle className="w-5 h-5 text-emerald-500 mt-4" />
//                 )}
//               </motion.div>
//             ))}
//           </div>

//           {/* Selected Grade Info */}
//           <AnimatePresence mode="wait">
//             {selectedGradeData && (
//               <motion.div
//                 key={selectedGrade}
//                 initial={{ opacity: 0, height: 0 }}
//                 animate={{ opacity: 1, height: 'auto' }}
//                 exit={{ opacity: 0, height: 0 }}
//                 className="mt-12 bg-slate-50 border border-slate-100 rounded-2xl p-10"
//               >
//                 <div className="flex items-center justify-between mb-6">
//                   <h3 className="text-3xl font-light">Grade {selectedGradeData.code}</h3>
//                   <span className="px-5 py-1.5 bg-white rounded-full border text-sm text-emerald-600">Currently Selected</span>
//                 </div>
//                 <p className="text-lg text-slate-600 mb-8">{selectedGradeData.description}</p>

//                 <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
//                   <div className="flex items-start gap-4">
//                     <Droplets className="w-6 h-6 text-cyan-500 mt-1" />
//                     <div><div className="text-xs text-slate-500">CORROSION</div><div className="font-medium">Excellent</div></div>
//                   </div>
//                   <div className="flex items-start gap-4">
//                     <Shield className="w-6 h-6 text-emerald-500 mt-1" />
//                     <div><div className="text-xs text-slate-500">WELDABILITY</div><div className="font-medium">Outstanding</div></div>
//                   </div>
//                   <div className="flex items-start gap-4">
//                     <Thermometer className="w-6 h-6 text-orange-500 mt-1" />
//                     <div><div className="text-xs text-slate-500">MAX TEMP</div><div className="font-medium">Up to 925°C</div></div>
//                   </div>
//                   <div className="flex items-start gap-4">
//                     <Clock className="w-6 h-6 text-slate-500 mt-1" />
//                     <div><div className="text-xs text-slate-500">LIFESPAN</div><div className="font-medium">30+ Years</div></div>
//                   </div>
//                 </div>
//               </motion.div>
//             )}
//           </AnimatePresence>
//         </div>
//       </div>

//       {/* DIMENSIONS */}
//       <div className="max-w-7xl mx-auto px-6 pb-24">
//         <div className="bg-white border border-slate-100 rounded-3xl p-12">
//           <div className="flex items-center gap-5 mb-10">
//             <div className="p-4 bg-emerald-100 rounded-2xl">
//               <Ruler className="w-8 h-8 text-emerald-600" />
//             </div>
//             <div>
//               <h3 className="text-4xl font-light tracking-tight">Dimensions & Availability</h3>
//               <p className="text-slate-500">Ready-to-ship sizes • Custom options available</p>
//             </div>
//           </div>

//           <div className="grid md:grid-cols-2 gap-6">
//             {dimensions.map((dim, i) => (
//               <div key={i} className="border border-slate-100 rounded-2xl p-8 hover:border-emerald-200 transition flex justify-between items-center">
//                 <div>
//                   <div className="font-mono text-3xl tracking-tight">{dim.size}</div>
//                   <div className="text-emerald-600 text-sm mt-2 font-medium">{dim.availability}</div>
//                 </div>
//                 <Layers className="w-8 h-8 text-slate-300" />
//               </div>
//             ))}
//           </div>

//           <motion.button
//             onClick={() => setShowCustomOptions(!showCustomOptions)}
//             whileHover={{ scale: 1.02 }}
//             className="mt-10 w-full py-5 border border-dashed border-slate-300 hover:border-emerald-400 rounded-2xl text-sm tracking-widest flex items-center justify-center gap-3 transition"
//           >
//             NEED CUSTOM DIMENSIONS OR FINISH?
//             <ChevronRight className={`transition ${showCustomOptions ? 'rotate-90' : ''}`} />
//           </motion.button>

//           <AnimatePresence>
//             {showCustomOptions && (
//               <motion.div
//                 initial={{ opacity: 0 }}
//                 animate={{ opacity: 1 }}
//                 className="mt-6 p-8 bg-emerald-50 rounded-2xl text-sm text-emerald-700 border border-emerald-100"
//               >
//                 Special widths, lengths, thicknesses, finishes & protective films available. Contact us for fast quotation.
//               </motion.div>
//             )}
//           </AnimatePresence>
//         </div>
//       </div>

//       {/* COMPREHENSIVE APPLICATIONS - Clean & Visible Icons */}
//       <div className="max-w-7xl mx-auto px-6 pb-24">
//         <div className="text-center mb-12">
//           <div className="text-emerald-600 tracking-widest text-sm font-medium">300+ USE CASES</div>
//           <h2 className="text-5xl font-light tracking-tight mt-3">Where Our Sheets Excel</h2>
//           <p className="text-slate-500 mt-3">Tap any category • Hover marquee to pause • Large clear icons</p>
//         </div>

//         <div className="space-y-6">
//           {applicationCategories.map((category) => {
//             const items = getCategoryItems(category.id);
//             return (
//               <div key={category.id} className="bg-white border border-slate-100 rounded-3xl overflow-hidden">
//                 <motion.div
//                   onClick={() => toggleCategory(category.id)}
//                   className="flex items-center justify-between px-8 py-7 cursor-pointer hover:bg-slate-50 transition"
//                 >
//                   <div className="flex items-center gap-6">
//                     <div className="text-6xl transition group-hover:scale-110">{category.icon}</div>
//                     <div>
//                       <h3 className="text-2xl font-light tracking-tight">{category.name}</h3>
//                       <p className="text-emerald-600 text-sm">{category.count} applications</p>
//                     </div>
//                   </div>
//                   {expandedCategory === category.id ? <ChevronUp className="w-6 h-6" /> : <ChevronDown className="w-6 h-6" />}
//                 </motion.div>

//                 <AnimatePresence>
//                   {expandedCategory === category.id && (
//                     <motion.div
//                       initial={{ height: 0 }}
//                       animate={{ height: 'auto' }}
//                       exit={{ height: 0 }}
//                       className="border-t border-slate-100 overflow-hidden"
//                     >
//                       <div 
//                         className="py-8 bg-slate-50 overflow-hidden"
//                         onMouseEnter={() => handleMouseEnter(category.id)}
//                         onMouseLeave={() => handleMouseLeave(category.id)}
//                       >
//                         <div
//                           ref={el => marqueeRefs.current[category.id] = el}
//                           className="flex whitespace-nowrap gap-6 animate-marquee"
//                           style={{ animation: 'marquee 50s linear infinite' }}
//                         >
//                           {[...items, ...items].map((item, idx) => {
//                             const icon = item.split(' ')[0];
//                             const text = item.substring(item.indexOf(' ') + 1);
//                             return (
//                               <div
//                                 key={idx}
//                                 className="inline-flex items-center gap-6 bg-white border border-slate-100 px-8 py-6 rounded-2xl min-w-[380px] shadow-sm hover:shadow hover:border-emerald-200 transition"
//                               >
//                                 <span className="text-6xl flex-shrink-0">{icon}</span>
//                                 <span className="text-lg text-slate-700 font-light leading-tight">{text}</span>
//                               </div>
//                             );
//                           })}
//                         </div>
//                       </div>
//                     </motion.div>
//                   )}
//                 </AnimatePresence>
//               </div>
//             );
//           })}
//         </div>
//       </div>

//       {/* ENHANCED QUALITY ASSURANCE (replaced) */}
//       <div className="bg-white py-20 border-t border-b border-slate-100">
//         <div className="max-w-7xl mx-auto px-6">
//           <div className="grid md:grid-cols-3 gap-12">
//             <div className="md:col-span-1">
//               <div className="flex items-center gap-4 mb-6">
//                 <div className="p-4 bg-blue-100 rounded-2xl">
//                   <Shield className="w-10 h-10 text-blue-600" />
//                 </div>
//                 <div>
//                   <div className="text-blue-600 text-sm tracking-widest">QUALITY ASSURANCE</div>
//                   <h3 className="text-4xl font-light tracking-tight">Integrated Precision</h3>
//                 </div>
//               </div>
//               <div className="w-20 h-1 bg-blue-200 rounded-full"></div>
//             </div>
//             <div className="md:col-span-2 space-y-6 text-slate-600 text-lg leading-relaxed">
//               <p>
//                 At Matrix Metals LLP, quality assurance is not a concluding activity — it is an integrated operational framework. 
//                 Every stage of our coil-to-coil processing and surface engineering operations is governed by defined parameters, 
//                 calibrated systems, and measurable validation standards. Precision is embedded within the process architecture 
//                 to ensure consistency, repeatability, and technical conformity.
//               </p>
//               <p>
//                 Our quality control methodology begins at material intake and continues through slitting, levelling, surface 
//                 treatment, lamination, and final dispatch. In-line dimensional monitoring ensures strict adherence to width 
//                 tolerances, burr limits, camber control, and flatness stability. Surface conformity is assessed through structured 
//                 inspection protocols to prevent deviation in cosmetic or structural performance.
//               </p>
//               <p>
//                 Process discipline is reinforced through documented operating thresholds and traceable batch identification systems. 
//                 Each production lot is mapped to defined processing parameters, ensuring accountability and technical transparency. 
//                 This structured traceability enables reliable performance tracking across repeat orders and long-term supply cycles.
//               </p>
//               <p>
//                 We operate under the principle that variability must be eliminated at source. Blade alignment, tension calibration, 
//                 levelling pressure, and surface treatment parameters are routinely verified to maintain operational stability. 
//                 Preventive maintenance and periodic system calibration ensure sustained accuracy across extended production runs.
//               </p>
//               <p className="font-medium text-slate-800">
//                 Matrix Metals LLP delivers stainless steel processing with engineered certainty. Our quality assurance framework 
//                 is built to support industries where dimensional precision, surface integrity, and execution reliability are 
//                 non-negotiable. Through disciplined governance and measurable validation, we provide confidence in every metre processed.
//               </p>
//             </div>
//           </div>

//           {/* Key validation points (visual addition) */}
//           <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16">
//             {[
//               { icon: Gauge, label: "Width Tolerances", value: "±0.10 mm" },
//               { icon: Activity, label: "Flatness Stability", value: "≤ 2 I-Units" },
//               { icon: Cpu, label: "In-line Monitoring", value: "Laser / AI" },
//               { icon: FileCheck, label: "Traceability", value: "Batch-coded" }
//             ].map((item, idx) => (
//               <div key={idx} className="bg-slate-50 rounded-2xl p-6 border border-slate-100">
//                 <item.icon className="w-8 h-8 text-blue-500 mb-3" />
//                 <div className="text-sm text-slate-500">{item.label}</div>
//                 <div className="text-xl font-light">{item.value}</div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>

//       {/* FINAL CTA */}
//       <div className="py-28 text-center bg-slate-50">
//         <div className="max-w-md mx-auto px-6">
//           <h2 className="text-5xl font-light tracking-tight mb-6">Ready to start your project?</h2>
//           <motion.button
//             whileHover={{ scale: 1.05 }}
//             className="px-16 py-6 bg-slate-900 hover:bg-black text-white text-xl rounded-3xl font-medium flex items-center gap-4 mx-auto transition"
//           >
//             Get Custom Quote Today
//             <ArrowRight className="w-6 h-6" />
//           </motion.button>
//           <p className="text-sm text-slate-500 mt-8">Response within 4 hours • Samples dispatched same day</p>
//         </div>
//       </div>

//       {/* Marquee Animation */}
//       <style jsx global>{`
//         @keyframes marquee {
//           from { transform: translateX(0); }
//           to { transform: translateX(-50%); }
//         }
//         .animate-marquee {
//           animation: marquee 50s linear infinite;
//           width: max-content;
//         }
//       `}</style>
//     </div>
//   );
// };

// export default StainlessSteelSheets;










// import { useState, useRef } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import { 
//   CheckCircle, Ruler, Layers, ChevronRight, Thermometer, 
//   Droplets, Shield, Clock, Calendar, ChevronDown, ChevronUp,
//   Scissors, Sparkles, ShieldCheck, Zap, Award, ArrowRight,
//   Activity, Cpu, FileCheck, Gauge, ExternalLink
// } from 'lucide-react';

// const StainlessSteelSheets = () => {
//   const [selectedGrade, setSelectedGrade] = useState("304");
//   const [showCustomOptions, setShowCustomOptions] = useState(false);
//   const [expandedCategory, setExpandedCategory] = useState(null);
//   const marqueeRefs = useRef({});

//   // Animation Variants
//   const fadeInUp = {
//     hidden: { opacity: 0, y: 30 },
//     visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
//   };

//   const staggerContainer = {
//     hidden: { opacity: 0 },
//     visible: {
//       opacity: 1,
//       transition: { staggerChildren: 0.1 }
//     }
//   };

//   const materialGrades = [
//     { code: '202', description: 'Economical grade with good corrosion resistance', accent: 'amber' },
//     { code: '304', description: 'Most common austenitic grade, excellent corrosion resistance', accent: 'cyan' },
//     { code: '304L', description: 'Low carbon version of 304, ideal for welding', accent: 'emerald' },
//     { code: '316', description: 'Superior corrosion resistance with molybdenum', accent: 'violet' },
//     { code: '316L', description: 'Low carbon version of 316 for welded applications', accent: 'fuchsia' },
//     { code: '321', description: 'Stabilized with titanium for high temperature', accent: 'orange' },
//     { code: '430', description: 'Ferritic grade with good formability', accent: 'slate' },
//     { code: '441', description: 'High temperature ferritic stainless steel', accent: 'rose' }
//   ];

//   const processingServices = [
//     { icon: Scissors, title: "Precision Slitting", desc: "10–1520 mm width • ±0.10 mm tolerance", color: "from-blue-500 to-cyan-400" },
//     { icon: Ruler, title: "Tension Levelling", desc: "Industry-leading flatness for fabrication", color: "from-emerald-500 to-teal-400" },
//     { icon: Sparkles, title: "Premium Finishing", desc: "2B • BA • No.4 • HL • Mirror", color: "from-violet-500 to-purple-400" },
//     { icon: ShieldCheck, title: "Protective Lamination", desc: "Laser film & paper interleaving", color: "from-amber-500 to-orange-400" },
//     { icon: Zap, title: "Surface Engineering", desc: "Degreasing • UV passivation", color: "from-rose-500 to-pink-400" }
//   ];

//   const dimensions = [
//     { size: '1250 × 2500 mm', availability: 'In Stock • 48 hrs' },
//     { size: '1500 × 3000 mm', availability: 'In Stock • 24 hrs' },
//     { size: '1520 × 4000 mm', availability: 'Premium Stock' },
//     { size: 'Custom Sizes', availability: 'Made to Order' }
//   ];

//   const applicationCategories = [
//     { id: 'aero', name: 'Aerospace & Defence', icon: '✈️', count: 28 },
//     { id: 'auto', name: 'Automotive & EV', icon: '🚗', count: 32 },
//     { id: 'infra', name: 'Architecture & Infrastructure', icon: '🏙️', count: 35 },
//     { id: 'food', name: 'Food & Beverage', icon: '🍽️', count: 30 },
//     { id: 'pharma', name: 'Pharmaceutical & Medical', icon: '💉', count: 27 },
//     { id: 'oil', name: 'Oil, Gas & Chemical', icon: '🛢️', count: 33 },
//     { id: 'machinery', name: 'Industrial Machinery', icon: '⚙️', count: 45 },
//     { id: 'marine', name: 'Marine & Shipbuilding', icon: '⛴️', count: 22 },
//     { id: 'consumer', name: 'Consumer & Lifestyle', icon: '🏠', count: 25 }
//   ];

//   const getCategoryItems = (id) => {
//     const itemsMap = {
//       aero: ['✈ Aircraft Structural Panels', '🛩 Jet Engine Parts', '🚁 Helicopter Frames', '🛡 Armoured Panels', '📡 Radar Housings', '🛰 Satellite Frames'],
//       auto: ['🚗 EV Battery Enclosures', '🔋 Cooling Plates', '🚙 Chassis Parts', '⚙ Exhaust Systems', '🛞 Brake Components'],
//       infra: ['🏢 Building Facades', '🚪 Elevator Panels', '🪜 Stair Railings', '🏗 Bridge Components', '🛗 Escalator Cladding'],
//       food: ['🥛 Dairy Tanks', '🍺 Brewing Equipment', '🍴 Kitchen Surfaces', '🧊 Cold Storage Racks', '🥤 Filling Lines'],
//       pharma: ['💊 Cleanroom Panels', '🧪 Lab Benches', '🏥 Surgical Tables', '🧴 Sterilization Units', '🧬 Biotech Frames'],
//       oil: ['🛢 Storage Tanks', '⚙ Pressure Vessels', '🧪 Chemical Reactors', '🛠 Pipeline Systems', '⚡ Refinery Equipment'],
//       machinery: ['⚙ Machine Frames', '🤖 Robotic Arms', '🔩 CNC Bodies', '📦 Conveyor Systems', '🛠 Assembly Tables'],
//       marine: ['🚢 Ship Hull Liners', '⚓ Marine Railings', '🛥 Deck Structures', '🛠 Propulsion Parts', '🧭 Navigation Frames'],
//       consumer: ['🍽 Kitchen Utensils', '🥄 Premium Cutlery', '🚿 Bathroom Fittings', '🪑 Furniture Frames', '🧴 Storage Containers']
//     };
//     return itemsMap[id] || [];
//   };

//   const selectedGradeData = materialGrades.find(grade => grade.code === selectedGrade);

//   return (
//     <div className="min-h-screen bg-[#fafafa] text-slate-900 selection:bg-blue-100 font-sans">
      
//       {/* HERO SECTION - Enhanced with Glassmorphism */}
//       <section className="relative pt-24 pb-32 md:pt-32 md:pb-48 overflow-hidden bg-white">
//         <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
        
//         <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
//           <motion.div initial="hidden" animate="visible" variants={staggerContainer}>
//             <motion.div variants={fadeInUp} className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-50 border border-slate-200 shadow-sm mb-10">
//               <span className="relative flex h-2 w-2">
//                 <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
//                 <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
//               </span>
//               <span className="text-[10px] md:text-xs font-bold tracking-[0.2em] text-slate-500 uppercase">Industrial Excellence</span>
//             </motion.div>

//             <motion.h1 variants={fadeInUp} className="text-5xl md:text-8xl font-bold tracking-tight text-slate-900 mb-8 leading-[0.95]">
//               Stainless Steel <span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-700 to-slate-400">Sheets</span>
//             </motion.h1>
            
//             <motion.p variants={fadeInUp} className="text-lg md:text-2xl text-slate-500 max-w-3xl mx-auto font-light leading-relaxed mb-12">
//               Transforming mill-origin coils into precision-engineered substrates with advanced surface refinement.
//             </motion.p>

//             <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-4 justify-center">
//               <button 
//                 onClick={() => document.getElementById('grades').scrollIntoView({ behavior: 'smooth' })}
//                 className="px-8 py-4 bg-slate-900 text-white rounded-xl font-semibold flex items-center justify-center gap-2 hover:bg-black transition-all shadow-xl shadow-slate-200"
//               >
//                 Browse Material Grades
//                 <ArrowRight className="w-5 h-5" />
//               </button>
//               <button className="px-8 py-4 bg-white border border-slate-200 text-slate-700 rounded-xl font-semibold hover:bg-slate-50 transition-all">
//                 Technical Datasheet
//               </button>
//             </motion.div>
//           </motion.div>
//         </div>
//       </section>

//       {/* CAPABILITIES - Structured Grid */}
//       <section className="max-w-7xl mx-auto px-6 py-24">
//         <div className="grid lg:grid-cols-12 gap-16 items-start">
//           <div className="lg:col-span-4 sticky top-10">
//             <h2 className="text-sm font-bold tracking-[0.3em] text-blue-600 uppercase mb-4">Our Core Philosophy</h2>
//             <h3 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">Engineered Transformation</h3>
//             <p className="text-slate-500 text-lg leading-relaxed">
//               We function as a structured processing partner delivering calibrated mechanical parameters for demanding industrial integration.
//             </p>
//           </div>
//           <div className="lg:col-span-8 grid gap-8 text-slate-600 text-lg">
//             <div className="p-8 bg-white border border-slate-100 rounded-3xl shadow-sm hover:shadow-md transition-shadow">
//                <p className="mb-6">
//                 Matrix Metals LLP operates as a specialised stainless steel conversion facility. We do not position ourselves as material traders — we deliver 
//                 <strong> engineered transformation</strong> of mill-origin stainless steel coils into application-ready substrates.
//               </p>
//               <p>
//                 Our operations are designed for manufacturers who require dimensional precision, surface refinement, and process-controlled execution. 
//                 Whether the requirement involves narrow precision strips or flatness-critical sheets, our processing discipline ensures repeatability.
//               </p>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* SERVICES - Modern Card Grid */}
//       <section className="bg-slate-900 py-24 text-white overflow-hidden">
//         <div className="max-w-7xl mx-auto px-6">
//           <div className="mb-16">
//             <h2 className="text-blue-400 text-sm font-bold tracking-[0.3em] uppercase mb-4">Processing Services</h2>
//             <h3 className="text-4xl md:text-5xl font-bold tracking-tight">Advanced Capabilities</h3>
//           </div>
          
//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
//             {processingServices.map((service, i) => (
//               <motion.div
//                 key={i}
//                 whileHover={{ y: -5 }}
//                 className="bg-white/5 border border-white/10 p-8 rounded-3xl backdrop-blur-sm hover:bg-white/10 transition-all group"
//               >
//                 <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-6`}>
//                   <service.icon className="w-6 h-6 text-white" />
//                 </div>
//                 <h4 className="text-xl font-bold mb-3">{service.title}</h4>
//                 <p className="text-slate-400 text-sm leading-relaxed">{service.desc}</p>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* GRADES - Interactive Selector */}
//       <section id="grades" className="max-w-7xl mx-auto px-6 py-24">
//         <div className="bg-white border border-slate-200 rounded-[2.5rem] p-6 md:p-12 shadow-2xl shadow-slate-200/50">
//           <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
//             <div>
//               <h2 className="text-emerald-600 text-sm font-bold tracking-[0.3em] uppercase mb-4">Material Selection</h2>
//               <h3 className="text-4xl md:text-5xl font-bold tracking-tight">Technical Grades</h3>
//             </div>
//             <div className="flex items-center gap-2 text-slate-400 text-sm italic">
//               <ExternalLink className="w-4 h-4" />
//               Scroll to explore all grades
//             </div>
//           </div>

//           {/* Responsive Scroll Container for Mobile */}
//           <div className="flex md:grid md:grid-cols-4 gap-4 overflow-x-auto pb-4 md:pb-0 no-scrollbar snap-x">
//             {materialGrades.map((grade) => (
//               <button
//                 key={grade.code}
//                 onClick={() => setSelectedGrade(grade.code)}
//                 className={`flex-shrink-0 w-[240px] md:w-auto snap-center rounded-2xl p-6 text-left transition-all border-2 ${
//                   selectedGrade === grade.code 
//                   ? 'border-emerald-500 bg-emerald-50/50 shadow-lg' 
//                   : 'border-slate-100 bg-white hover:border-slate-200'
//                 }`}
//               >
//                 <div className="text-3xl font-bold mb-2">{grade.code}</div>
//                 <p className="text-sm text-slate-500 line-clamp-2 mb-4">{grade.description}</p>
//                 {selectedGrade === grade.code && <CheckCircle className="w-6 h-6 text-emerald-600" />}
//               </button>
//             ))}
//           </div>

//           <AnimatePresence mode="wait">
//             <motion.div
//               key={selectedGrade}
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               exit={{ opacity: 0, y: -20 }}
//               className="mt-12 p-8 md:p-10 bg-slate-50 rounded-3xl border border-slate-200 grid md:grid-cols-2 lg:grid-cols-4 gap-8"
//             >
//               {[
//                 { label: 'Corrosion', val: 'Excellent', icon: Droplets, col: 'text-blue-500' },
//                 { label: 'Weldability', val: 'High-Level', icon: Shield, col: 'text-emerald-500' },
//                 { label: 'Max Temp', val: '925°C', icon: Thermometer, col: 'text-orange-500' },
//                 { label: 'Integrity', val: '30+ Years', icon: Clock, col: 'text-slate-500' }
//               ].map((spec, i) => (
//                 <div key={i} className="flex items-center gap-4">
//                   <div className={`p-3 bg-white rounded-xl shadow-sm ${spec.col}`}>
//                     <spec.icon className="w-6 h-6" />
//                   </div>
//                   <div>
//                     <div className="text-[10px] uppercase font-bold tracking-widest text-slate-400">{spec.label}</div>
//                     <div className="text-lg font-bold">{spec.val}</div>
//                   </div>
//                 </div>
//               ))}
//             </motion.div>
//           </AnimatePresence>
//         </div>
//       </section>

//       {/* APPLICATIONS - Marquee with pausing interaction */}
//       <section className="py-24 bg-slate-50 overflow-hidden">
//         <div className="max-w-7xl mx-auto px-6 mb-16 text-center">
//           <h2 className="text-emerald-600 text-sm font-bold tracking-[0.3em] uppercase mb-4">Industrial Reach</h2>
//           <h3 className="text-4xl md:text-6xl font-bold tracking-tight">Versatility in Execution</h3>
//         </div>

//         <div className="space-y-4">
//           {applicationCategories.slice(0, 3).map((cat) => (
//              <div key={cat.id} className="relative group">
//                 <div className="flex whitespace-nowrap animate-marquee py-2" style={{ animationDuration: '60s' }}>
//                   {[...getCategoryItems(cat.id), ...getCategoryItems(cat.id)].map((item, idx) => (
//                     <div key={idx} className="mx-3 px-8 py-5 bg-white border border-slate-200 rounded-2xl flex items-center gap-4 shadow-sm hover:border-blue-400 transition-colors cursor-default">
//                       <span className="text-3xl">{item.split(' ')[0]}</span>
//                       <span className="font-semibold text-slate-700">{item.substring(item.indexOf(' ') + 1)}</span>
//                     </div>
//                   ))}
//                 </div>
//              </div>
//           ))}
//         </div>
//       </section>

//       {/* QUALITY ASSURANCE - Stat Cards */}
//       <section className="max-w-7xl mx-auto px-6 py-24">
//         <div className="grid lg:grid-cols-2 gap-16 items-center">
//           <div>
//             <h2 className="text-blue-600 text-sm font-bold tracking-[0.3em] uppercase mb-4">Precision First</h2>
//             <h3 className="text-4xl md:text-5xl font-bold tracking-tight mb-8">Quality Integrated Operational Framework</h3>
//             <p className="text-slate-500 text-lg leading-relaxed mb-8">
//               At Matrix Metals LLP, quality assurance is not a concluding activity — it is an integrated operational framework governed by calibrated systems.
//             </p>
//             <div className="grid grid-cols-2 gap-4">
//               {[
//                 { icon: Gauge, label: "Tolerances", val: "±0.10 mm" },
//                 { icon: Activity, label: "Stability", val: "≤ 2 I-Units" },
//                 { icon: Cpu, label: "Monitoring", val: "Laser In-line" },
//                 { icon: FileCheck, label: "Logistics", val: "Batch-coded" }
//               ].map((item, i) => (
//                 <div key={i} className="p-6 bg-white border border-slate-100 rounded-2xl shadow-sm">
//                   <item.icon className="w-6 h-6 text-blue-500 mb-3" />
//                   <div className="text-xs text-slate-400 font-bold uppercase mb-1">{item.label}</div>
//                   <div className="text-xl font-bold">{item.val}</div>
//                 </div>
//               ))}
//             </div>
//           </div>
//           <div className="relative">
//              <div className="aspect-square bg-gradient-to-tr from-slate-200 to-slate-50 rounded-[3rem] overflow-hidden flex items-center justify-center p-12">
//                 <div className="text-center">
//                   <ShieldCheck className="w-32 h-32 text-slate-300 mx-auto mb-6" />
//                   <div className="text-4xl font-bold text-slate-400">Certified <br/>Processing</div>
//                 </div>
//                 <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-24 bg-blue-500/10 -rotate-45 blur-3xl pointer-events-none"></div>
//              </div>
//           </div>
//         </div>
//       </section>

//       {/* FINAL CALL TO ACTION */}
//       <section className="max-w-7xl mx-auto px-6 pb-24">
//         <div className="bg-slate-900 rounded-[3rem] p-12 md:p-24 text-center relative overflow-hidden">
//           <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/20 blur-[100px] rounded-full"></div>
//           <div className="absolute bottom-0 left-0 w-64 h-64 bg-emerald-500/10 blur-[100px] rounded-full"></div>
          
//           <div className="relative z-10">
//             <h2 className="text-4xl md:text-6xl font-bold text-white tracking-tight mb-8 leading-tight">
//               Ready to Start Your <br className="hidden md:block"/> Precision Project?
//             </h2>
//             <button className="group px-12 py-6 bg-white text-slate-900 rounded-2xl font-bold text-xl hover:bg-blue-50 transition-all flex items-center justify-center gap-3 mx-auto shadow-2xl">
//               Get Custom Quote Today
//               <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
//             </button>
//             <p className="text-slate-400 mt-8 font-medium">Average response time: &lt; 4 hours</p>
//           </div>
//         </div>
//       </section>

//       {/* Custom Global Styles */}
//       <style jsx global>{`
//         @keyframes marquee {
//           0% { transform: translateX(0); }
//           100% { transform: translateX(-50%); }
//         }
//         .animate-marquee {
//           display: flex;
//           animation: marquee linear infinite;
//         }
//         .no-scrollbar::-webkit-scrollbar {
//           display: none;
//         }
//         .no-scrollbar {
//           -ms-overflow-style: none;
//           scrollbar-width: none;
//         }
//       `}</style>
//     </div>
//   );
// };

// export default StainlessSteelSheets;






















// import { useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import { 
//   CheckCircle, Ruler, Thermometer, 
//   Droplets, Shield, Clock, Scissors, Sparkles, ShieldCheck, 
//   Zap, ArrowRight, Activity, Cpu, FileCheck, Gauge, ExternalLink
// } from 'lucide-react';

// const StainlessSteelSheets = () => {
//   const [selectedGrade, setSelectedGrade] = useState("304");

//   const materialGrades = [
//     { code: '202', description: 'Economical grade with good corrosion resistance' },
//     { code: '304', description: 'Most common austenitic grade, excellent corrosion resistance' },
//     { code: '304L', description: 'Low carbon version of 304, ideal for welding' },
//     { code: '316', description: 'Superior corrosion resistance with molybdenum' },
//     { code: '316L', description: 'Low carbon version of 316 for welded applications' },
//     { code: '321', description: 'Stabilized with titanium for high temperature' },
//     { code: '430', description: 'Ferritic grade with good formability' },
//     { code: '441', description: 'High temperature ferritic stainless steel' }
//   ];

//   const processingServices = [
//     { icon: Scissors, title: "Precision Slitting", desc: "10–1520 mm width • ±0.10 mm tolerance", color: "from-blue-500 to-cyan-400" },
//     { icon: Ruler, title: "Tension Levelling", desc: "Industry-leading flatness for fabrication", color: "from-emerald-500 to-teal-400" },
//     { icon: Sparkles, title: "Premium Finishing", desc: "2B • BA • No.4 • HL • Mirror", color: "from-violet-500 to-purple-400" },
//     { icon: ShieldCheck, title: "Protective Lamination", desc: "Laser film & paper interleaving", color: "from-amber-500 to-orange-400" },
//     { icon: Zap, title: "Surface Engineering", desc: "Degreasing • UV passivation", color: "from-rose-500 to-pink-400" }
//   ];

//   const applicationCategories = [
//     { id: 'aero', name: 'Aerospace', items: ['✈ Structural Panels', '🛩 Engine Parts', '🛰 Satellite Frames'] },
//     { id: 'auto', name: 'Automotive', items: ['🚗 EV Battery Enclosures', '🔋 Cooling Plates', '⚙ Exhaust Systems'] },
//     { id: 'food', name: 'Food & Bev', items: ['🥛 Dairy Tanks', '🍺 Brewing Gear', '🍴 Kitchen Surfaces'] },
//     { id: 'pharma', name: 'Medical', items: ['💊 Cleanroom Panels', '🧪 Lab Benches', '🏥 Surgical Tables'] },
//     { id: 'infra', name: 'Infrastructure', items: ['🏢 Facades', '🚪 Elevator Panels', '🏗 Bridge Parts'] }
//   ];

//   return (
//     <div className="min-h-screen bg-[#fafafa] text-slate-900 selection:bg-blue-100 selection:text-blue-900 overflow-x-hidden">
      
//       <style>
//         {`
//           @keyframes marquee-left {
//             0% { transform: translateX(0); }
//             100% { transform: translateX(-50%); }
//           }
//           @keyframes marquee-right {
//             0% { transform: translateX(-50%); }
//             100% { transform: translateX(0); }
//           }
//           .animate-marquee-left { animation: marquee-left linear infinite; }
//           .animate-marquee-right { animation: marquee-right linear infinite; }
//           .pause-animation:hover .animate-marquee-left,
//           .pause-animation:hover .animate-marquee-right {
//             animation-play-state: paused;
//           }
//           .no-scrollbar::-webkit-scrollbar { display: none; }
//           .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
//         `}
//       </style>

//       {/* HERO SECTION */}
//       <section className="relative pt-24 pb-32 md:pt-32 md:pb-48 overflow-hidden bg-white">
//         <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
//         <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
//           <motion.div initial={{opacity:0}} animate={{opacity:1}} transition={{staggerChildren:0.1}}>
//             <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-50 border border-slate-200 shadow-sm mb-10">
//               <span className="relative flex h-2 w-2"><span className="animate-ping absolute h-full w-full rounded-full bg-emerald-400 opacity-75"></span><span className="relative rounded-full h-2 w-2 bg-emerald-500"></span></span>
//               <span className="text-xs font-bold tracking-[0.2em] text-slate-500 uppercase">Industrial Grade Sheets</span>
//             </div>
//             <h1 className="text-6xl md:text-8xl font-bold tracking-tight text-slate-900 mb-8 leading-[0.95]">
//               Stainless Steel <span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-700 via-slate-500 to-slate-400">Sheets</span>
//             </h1>
//             <p className="text-lg md:text-2xl text-slate-500 max-w-3xl mx-auto font-light leading-relaxed mb-12">
//               The standard for high-performance fabrication. Precision-converted for critical manufacturing environments.
//             </p>
//             <div className="flex flex-col sm:flex-row gap-4 justify-center">
//               <button onClick={() => document.getElementById('grades').scrollIntoView({ behavior: 'smooth' })} className="px-10 py-5 bg-slate-900 text-white rounded-2xl font-bold flex items-center justify-center gap-3 hover:bg-black transition-all shadow-xl shadow-slate-200">
//                 Explore Grades <ArrowRight className="w-5 h-5" />
//               </button>
//               <button className="px-10 py-5 bg-white border border-slate-200 text-slate-700 rounded-2xl font-bold hover:bg-slate-50 transition-all">Download Technical Specs</button>
//             </div>
//           </motion.div>
//         </div>
//       </section>

//       {/* PROCESSING SERVICES */}
//       <section className="bg-slate-900 py-24 text-white">
//         <div className="max-w-7xl mx-auto px-6">
//           <h2 className="text-blue-400 text-sm font-bold tracking-[0.3em] uppercase mb-4 text-center">Engineered Transformation</h2>
//           <h3 className="text-4xl md:text-5xl font-bold tracking-tight mb-16 text-center">Specialised Capabilities</h3>
//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
//             {processingServices.map((service, i) => (
//               <div key={i} className="bg-white/5 border border-white/10 p-8 rounded-[2.5rem] backdrop-blur-sm hover:bg-white/10 transition-all cursor-default">
//                 <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-6 shadow-lg shadow-black/20`}>
//                   <service.icon className="w-7 h-7 text-white" />
//                 </div>
//                 <h4 className="text-xl font-bold mb-3">{service.title}</h4>
//                 <p className="text-slate-400 text-sm leading-relaxed">{service.desc}</p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* ENHANCED APPLICATIONS - Triple-Row Large Scale Marquee */}
//       <section className="py-32 bg-slate-50 overflow-hidden relative border-y border-slate-200">
//         <div className="max-w-7xl mx-auto px-6 mb-20 relative z-10">
//           <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
//             <div className="max-w-3xl">
//               <div className="text-blue-600 text-sm font-bold tracking-[0.4em] uppercase mb-6">Industrial Footprint</div>
//               <h3 className="text-5xl md:text-7xl font-bold tracking-tight text-slate-900 leading-[1.1]">
//                 Precision Components for <br/> 
//                 <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-emerald-500">Global Infrastructure</span>
//               </h3>
//             </div>
//             <p className="text-slate-500 text-xl max-w-sm italic font-light">
//               Supplying critical substrates across the most demanding engineering sectors.
//             </p>
//           </div>
//         </div>

//         <div className="relative flex flex-col gap-10 pause-animation">
//           {/* Side Gradients for Smooth Fading */}
//           <div className="absolute inset-y-0 left-0 w-32 md:w-80 bg-gradient-to-r from-slate-50 via-slate-50/80 to-transparent z-10 pointer-events-none" />
//           <div className="absolute inset-y-0 right-0 w-32 md:w-80 bg-gradient-to-l from-slate-50 via-slate-50/80 to-transparent z-10 pointer-events-none" />

//           {/* Row 1: Fast - Forward */}
//           <div className="flex overflow-hidden">
//             <div className="flex whitespace-nowrap animate-marquee-left" style={{ animationDuration: '70s' }}>
//               {[...applicationCategories, ...applicationCategories].map((cat, idx) => (
//                 <div key={idx} className="flex gap-8 mx-4">
//                   {cat.items.slice(0, 2).map((item, i) => (
//                     <div key={i} className="min-w-[420px] p-10 bg-white border border-slate-200 rounded-[3rem] flex items-center gap-8 hover:border-blue-500 hover:scale-105 transition-all duration-500 shadow-sm hover:shadow-2xl hover:shadow-blue-900/10 group cursor-default">
//                       <span className="text-7xl group-hover:rotate-12 transition-transform duration-500">{item.split(' ')[0]}</span>
//                       <div>
//                         <span className="block text-xs font-black text-blue-600/40 uppercase tracking-[0.2em] mb-2">{cat.name}</span>
//                         <span className="text-2xl font-bold text-slate-800 tracking-tight">{item.substring(item.indexOf(' ') + 1)}</span>
//                       </div>
//                     </div>
//                   ))}
//                 </div>
//               ))}
//             </div>
//           </div>

//           {/* Row 2: Slow - Reverse */}
//           <div className="flex overflow-hidden">
//             <div className="flex whitespace-nowrap animate-marquee-right" style={{ animationDuration: '100s' }}>
//               {[...applicationCategories].reverse().concat([...applicationCategories].reverse()).map((cat, idx) => (
//                 <div key={idx} className="flex gap-8 mx-4">
//                   {cat.items.slice(1, 3).map((item, i) => (
//                     <div key={i} className="min-w-[420px] p-10 bg-white border border-slate-200 rounded-[3rem] flex items-center gap-8 hover:border-emerald-500 hover:scale-105 transition-all duration-500 shadow-sm hover:shadow-2xl hover:shadow-emerald-900/10 group cursor-default">
//                       <span className="text-7xl group-hover:-rotate-12 transition-transform duration-500">{item.split(' ')[0]}</span>
//                       <div>
//                         <span className="block text-xs font-black text-emerald-600/40 uppercase tracking-[0.2em] mb-2">{cat.name}</span>
//                         <span className="text-2xl font-bold text-slate-800 tracking-tight">{item.substring(item.indexOf(' ') + 1)}</span>
//                       </div>
//                     </div>
//                   ))}
//                 </div>
//               ))}
//             </div>
//           </div>

//           {/* Row 3: Medium - Forward */}
//           <div className="flex overflow-hidden">
//             <div className="flex whitespace-nowrap animate-marquee-left" style={{ animationDuration: '85s' }}>
//               {[...applicationCategories].concat([...applicationCategories]).map((cat, idx) => (
//                 <div key={idx} className="flex gap-8 mx-4">
//                   <div className="min-w-[420px] p-10 bg-white border border-slate-200 rounded-[3rem] flex items-center gap-8 hover:border-slate-900 hover:scale-105 transition-all duration-500 shadow-sm hover:shadow-2xl hover:shadow-slate-900/10 group cursor-default">
//                     <span className="text-7xl group-hover:scale-110 transition-transform duration-500">{cat.id === 'infra' ? '🏙️' : '⚙️'}</span>
//                     <div>
//                       <span className="block text-xs font-black text-slate-400 uppercase tracking-[0.2em] mb-2">{cat.name}</span>
//                       <span className="text-2xl font-bold text-slate-800 tracking-tight">Industrial Integration</span>
//                     </div>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* GRADES SECTION */}
//       <section id="grades" className="max-w-7xl mx-auto px-6 py-24">
//         <div className="bg-white border border-slate-200 rounded-[3rem] p-8 md:p-12 shadow-xl shadow-slate-200/60">
//           <h2 className="text-emerald-600 text-sm font-bold tracking-[0.3em] uppercase mb-4">Material Calibration</h2>
//           <h3 className="text-4xl md:text-5xl font-bold tracking-tight mb-12">Grade Specification</h3>

//           <div className="flex md:grid md:grid-cols-4 gap-4 overflow-x-auto pb-6 no-scrollbar snap-x">
//             {materialGrades.map((grade) => (
//               <button
//                 key={grade.code}
//                 onClick={() => setSelectedGrade(grade.code)}
//                 className={`flex-shrink-0 w-[280px] md:w-auto snap-center rounded-[2rem] p-8 text-left transition-all border-2 ${
//                   selectedGrade === grade.code ? 'border-emerald-500 bg-emerald-50/30 shadow-lg shadow-emerald-100' : 'border-slate-100 bg-white hover:border-slate-200'
//                 }`}
//               >
//                 <div className="text-4xl font-black mb-3 tracking-tighter">G-{grade.code}</div>
//                 <p className="text-sm text-slate-500 leading-relaxed line-clamp-2">{grade.description}</p>
//               </button>
//             ))}
//           </div>

//           <AnimatePresence mode="wait">
//             <motion.div
//               key={selectedGrade}
//               initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }}
//               className="mt-10 p-10 bg-slate-50 rounded-[2.5rem] border border-slate-200 grid sm:grid-cols-2 lg:grid-cols-4 gap-8"
//             >
//               {[{l:'Durability', v:'Extreme', i:Shield}, {l:'Formability', v:'High', i:Activity}, {l:'Heat Resistance', v:'925°C', i:Thermometer}, {l:'Life Cycle', v:'25yr+', i:Clock}].map((stat, i) => (
//                 <div key={i} className="flex items-center gap-5">
//                   <div className="p-4 bg-white rounded-2xl shadow-sm"><stat.i className="w-8 h-8 text-emerald-600" /></div>
//                   <div>
//                     <div className="text-xs uppercase font-bold text-slate-400 tracking-widest">{stat.l}</div>
//                     <div className="text-xl font-bold">{stat.v}</div>
//                   </div>
//                 </div>
//               ))}
//             </motion.div>
//           </AnimatePresence>
//         </div>
//       </section>

//       {/* FINAL CTA */}
//       <section className="py-32 text-center bg-white relative">
//         <div className="max-w-4xl mx-auto px-6">
//           <h2 className="text-5xl md:text-7xl font-bold tracking-tighter mb-10 leading-tight">Secure your technical supply chain today.</h2>
//           <div className="flex flex-col sm:flex-row gap-6 justify-center">
//             <button className="group px-12 py-6 bg-slate-900 text-white rounded-[2.5rem] font-bold text-xl hover:bg-black transition-all flex items-center justify-center gap-4 shadow-2xl">
//               Request Project Quote <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
//             </button>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default StainlessSteelSheets;









// import React, { useState, useMemo } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import { 
//   CheckCircle, Ruler, Thermometer, Droplets, Shield, Clock, 
//   Scissors, Sparkles, ShieldCheck, Zap, ArrowRight, Activity, 
//   Search, ChevronRight, Plane, Car, Building2, Utensils, 
//   Stethoscope, Factory, Settings, Ship, Home
// } from 'lucide-react';

// const StainlessSteelSheets = () => {
//   const [selectedGrade, setSelectedGrade] = useState("304");
//   const [searchQuery, setSearchQuery] = useState("");
//   const [activeTab, setActiveTab] = useState("Aerospace & Defence");

//   const materialGrades = [
//     { code: '202', description: 'Economical grade with good corrosion resistance' },
//     { code: '304', description: 'Most common austenitic grade, excellent corrosion resistance' },
//     { code: '304L', description: 'Low carbon version of 304, ideal for welding' },
//     { code: '316', description: 'Superior corrosion resistance with molybdenum' },
//     { code: '316L', description: 'Low carbon version of 316 for welded applications' },
//     { code: '321', description: 'Stabilized with titanium for high temperature' },
//     { code: '430', description: 'Ferritic grade with good formability' },
//     { code: '441', description: 'High temperature ferritic stainless steel' }
//   ];

//   const processingServices = [
//     { icon: Scissors, title: "Precision Slitting", desc: "10–1520 mm width • ±0.10 mm tolerance", color: "from-blue-500 to-cyan-400" },
//     { icon: Ruler, title: "Tension Levelling", desc: "Industry-leading flatness for fabrication", color: "from-emerald-500 to-teal-400" },
//     { icon: Sparkles, title: "Premium Finishing", desc: "2B • BA • No.4 • HL • Mirror", color: "from-violet-500 to-purple-400" },
//     { icon: ShieldCheck, title: "Protective Lamination", desc: "Laser film & paper interleaving", color: "from-amber-500 to-orange-400" },
//     { icon: Zap, title: "Surface Engineering", desc: "Degreasing • UV passivation", color: "from-rose-500 to-pink-400" }
//   ];

//   const sectors = {
//     "Aerospace & Defence": { icon: Plane, items: ["✈ Aircraft Structural Panels", "🛩 Jet Engine Components", "🚁 Helicopter Frames", "🛡 Armoured Vehicle Panels", "⚙ Precision Fasteners", "🔩 Aerospace Brackets", "📡 Radar Housing Systems", "🛰 Satellite Mounting Frames", "🔧 Landing Gear Components", "🧲 Magnetic Shielding Units", "🚀 Rocket Structural Parts", "🔬 Defence Laboratory Equipment", "⚡ Missile Body Structures", "🛠 Military Enclosures", "🔒 Secure Defence Cabinets", "📦 Ammunition Storage Units", "🧱 Protective Barriers", "🧰 Tactical Toolkits", "🎯 Guidance System Housings", "🧪 Aerospace Testing Fixtures"] },
//     "Automotive & EV": { icon: Car, items: ["🚗 EV Battery Enclosures", "🔋 Battery Cooling Plates", "🚙 Chassis Reinforcement", "⚙ Exhaust Systems", "🔧 Engine Components", "🛞 Brake System Parts", "🚘 Structural Mounts", "🔩 Precision Washers", "🚖 Automotive Fasteners", "🚚 Truck Body Frames", "🛠 Fuel System Components", "🔌 EV Charging Cabinets", "🧲 Motor Casings", "🧰 Tool Storage Units", "🚦 Road Safety Barriers", "🛻 Load Body Structures", "⚡ Electric Bus Panels", "🚐 Transport Interior Panels", "🔩 Suspension Components", "🛠 Automotive Fixtures", "📦 Logistics Containers", "🔒 Locking Systems", "🧱 Structural Supports", "🚧 Crash Protection Panels", "⚙ Transmission Housings"] },
//     "Infrastructure": { icon: Building2, items: ["🏢 Building Facades", "🚪 Elevator Panels", "🪜 Staircase Railings", "🧱 Structural Cladding", "🏗 Bridge Components", "🛗 Escalator Panels", "🪟 Window Frames", "🚧 Highway Barriers", "🏛 Decorative Columns", "🚿 Bathroom Fixtures", "🚰 Water Tanks", "🚪 Fire-Rated Doors", "🛑 Safety Railings", "🏙 Metro Stations", "🪑 Public Seating", "🧰 Utility Cabinets", "🏭 Industrial Roofing", "🛠 Structural Frames", "🧱 Interior Partitions", "🚧 Construction Supports", "🏬 Mall Installations", "🛤 Railway Platforms", "🏟 Stadium Structures", "🏗 Structural Beams", "🧲 Anti-Corrosion Frames", "🪞 Architectural Screens", "🧱 Balustrades", "🚪 Security Gates", "🛠 Door Hardware", "🏢 Commercial Panels"] },
//     "Food & Bev": { icon: Utensils, items: ["🥛 Dairy Processing Tanks", "🍺 Brewing Equipment", "🥫 Food Storage Silos", "🍴 Commercial Kitchen Tables", "🍳 Industrial Cookers", "🥩 Meat Processing Lines", "🧊 Cold Storage Racks", "🥤 Beverage Filling Lines", "🍫 Confectionery Machines", "🍞 Bakery Equipment", "🍚 Rice Processing Units", "🍲 Catering Equipment", "🧃 Juice Processing Systems", "🥣 Mixing Vessels", "🧴 Sanitary Fittings", "🧽 Hygienic Surfaces", "🚰 Water Purification Units", "🧂 Packaging Lines", "🍜 Noodle Production Lines", "🍟 Frying Equipment", "🧪 Food Testing Labs", "🧴 Bottling Plants", "🥫 Canning Systems", "🛠 Conveyor Frames", "📦 Food Transport Trolleys"] },
//     "Medical & Pharma": { icon: Stethoscope, items: ["💊 Clean Room Panels", "🧪 Laboratory Benches", "🏥 Surgical Tables", "🩺 Hospital Trolleys", "🧴 Sterilization Units", "🧫 Biotech Reactors", "💉 Syringe Production Lines", "🧬 Diagnostic Equipment Frames", "🛠 Medical Cabinets", "🧯 Oxygen Cylinders", "🧪 Testing Chambers", "🔬 Analytical Equipment", "🚑 Ambulance Interiors", "🧴 Sanitization Systems", "🧪 Research Lab Equipment", "🧲 MRI Support Structures", "💺 Hospital Furniture", "🛠 ICU Equipment Frames", "🧴 Pharma Mixing Tanks", "🧪 Tablet Press Machines", "🩻 Imaging Device Housing", "🧴 Drug Storage Units", "🛡 Clean Environment Barriers", "🧰 Surgical Instrument Trays", "🧪 Vaccine Storage Units"] },
//     "Oil & Gas": { icon: Factory, items: ["🛢 Storage Tanks", "⚙ Pressure Vessels", "🧪 Chemical Reactors", "🛠 Pipeline Systems", "⚡ Refinery Equipment", "🧯 Gas Handling Systems", "🛢 Offshore Platforms", "🧪 Mixing Columns", "🧲 Corrosion Resistant Panels", "⚙ Heat Exchangers", "🔧 Pump Casings", "🛠 Valve Bodies", "🧪 Distillation Columns", "🧱 Structural Supports", "🛢 LPG Cylinders", "🧰 Instrumentation Panels", "⚡ Petrochemical Units", "🧪 Processing Frames", "🛠 Drilling Equipment", "🧲 Safety Shields", "🧯 Hazardous Storage Units", "🧪 Chemical Storage Drums", "🛢 Transport Containers", "⚙ Compressor Units", "🧱 Fire Protection Systems", "🛠 Refinery Platforms", "🧪 Industrial Reactors", "⚡ Turbine Casings", "🛠 Flow Control Systems", "🧯 Explosion-Proof Enclosures"] },
//     "Automation": { icon: Settings, items: ["⚙ Machine Frames", "🤖 Robotic Arms", "🔩 CNC Machine Bodies", "🛠 Assembly Line Tables", "🧲 Control Cabinets", "⚡ Electrical Enclosures", "📦 Conveyor Systems", "🔧 Gear Housings", "⚙ Industrial Rollers", "🛠 Tooling Fixtures", "🔩 Fastening Systems", "🧰 Storage Racks", "⚙ Press Machines", "🧱 Load Bearing Structures", "🤖 Automation Platforms", "🛠 Material Handling Systems", "⚙ Hydraulic Systems", "🧲 Motor Frames", "🛠 Cutting Machines", "🔧 Calibration Equipment", "⚡ Control Panels", "🛠 Workstations", "🧰 Maintenance Units", "⚙ Fabrication Lines", "🔩 Structural Mounting Systems", "🤖 Robotic Welding Cells", "🧱 Precision Tables", "🛠 Industrial Cabinets", "⚡ Power Distribution Units", "🧰 Mechanical Fixtures", "⚙ Manufacturing Modules", "🔧 Laser Cutting Frames", "🤖 Sensor Mounting Frames", "🧱 Structural Supports", "⚙ Rolling Mills", "🔩 Punching Systems", "🛠 Shearing Equipment", "⚡ Industrial Switchboards", "🧲 Cable Management Systems", "🧰 Automation Racks"] },
//     "Marine": { icon: Ship, items: ["🚢 Ship Hull Components", "⚓ Marine Railings", "🛥 Deck Structures", "🛠 Propulsion Components", "🧭 Navigation Equipment Frames", "⚙ Engine Parts", "🧲 Anti-Corrosion Panels", "🛢 Marine Storage Tanks", "🚢 Port Equipment", "🧯 Safety Equipment Frames", "⚓ Dock Installations", "🛠 Offshore Equipment", "🧲 Marine Fasteners", "🚤 Boat Interior Panels", "🧱 Structural Frames", "🛠 Coastal Installations", "⚙ Pump Systems", "🚢 Marine Enclosures", "🧲 Stainless Anchors", "🛠 Ship Maintenance Tools"] },
//     "Household": { icon: Home, items: ["🍽 Kitchen Utensils", "🥄 Cutlery", "🧴 Storage Containers", "🚿 Bathroom Fittings", "🚪 Door Handles", "🪑 Furniture Frames", "🛏 Bed Structures", "🧰 Tool Boxes", "🧲 Decorative Panels", "🧊 Refrigeration Units", "🧺 Washing Machine Drums", "🧴 Water Bottles", "🍳 Cookware", "🧂 Spice Containers", "🪟 Window Grills", "🚪 Locks & Hardware", "🛠 Home Appliances", "🧰 Storage Cabinets", "🧲 Modular Kitchens", "🛋 Interior Decor Panels", "🧴 Bathroom Accessories", "🧰 Utility Racks", "🛠 Lighting Fixtures", "🚿 Shower Systems", "🧱 Stair Railings", "🧴 Laundry Systems", "🧰 Shelving Units", "🛠 Furniture Hardware", "🧲 Balcony Railings", "🧰 Household Tools"] }
//   };

//   const allFlatItems = useMemo(() => Object.values(sectors).flatMap(s => s.items), []);
//   const filteredItems = useMemo(() => {
//     if (!searchQuery) return sectors[activeTab].items;
//     return allFlatItems.filter(item => item.toLowerCase().includes(searchQuery.toLowerCase()));
//   }, [searchQuery, activeTab]);

//   return (
//     <div className="min-h-screen bg-[#fafafa] text-slate-900 selection:bg-blue-100 selection:text-blue-900 overflow-x-hidden">
      
//       <style>
//         {`
//           @keyframes marquee-left { 0% { transform: translateX(0); } 100% { transform: translateX(-50%); } }
//           @keyframes marquee-right { 0% { transform: translateX(-50%); } 100% { transform: translateX(0); } }
//           .animate-marquee-left { animation: marquee-left linear infinite; }
//           .animate-marquee-right { animation: marquee-right linear infinite; }
//           .pause-animation:hover .animate-marquee-left,
//           .pause-animation:hover .animate-marquee-right { animation-play-state: paused; }
//           .no-scrollbar::-webkit-scrollbar { display: none; }
//           .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
//         `}
//       </style>

//       {/* HERO SECTION */}
//       <section className="relative pt-24 pb-32 md:pt-32 md:pb-48 overflow-hidden bg-white">
//         <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
//         <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
//           <motion.div initial={{opacity:0, y: 20}} animate={{opacity:1, y: 0}} transition={{staggerChildren:0.1}}>
//             <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-50 border border-slate-200 shadow-sm mb-10">
//               <span className="relative flex h-2 w-2">
//                 <span className="animate-ping absolute h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
//                 <span className="relative rounded-full h-2 w-2 bg-emerald-500"></span>
//               </span>
//               <span className="text-xs font-bold tracking-[0.2em] text-slate-500 uppercase">Industrial Grade Sheets</span>
//             </div>
//             <h1 className="text-6xl md:text-8xl font-bold tracking-tight text-slate-900 mb-8 leading-[0.95]">
//               Stainless Steel <span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-700 via-slate-500 to-slate-400">Sheets</span>
//             </h1>
//             <p className="text-lg md:text-2xl text-slate-500 max-w-3xl mx-auto font-light leading-relaxed mb-12">
//               Supply-chain excellence for 300+ applications. High-precision surfaces for critical manufacturing.
//             </p>
//             <div className="flex flex-col sm:flex-row gap-4 justify-center">
//               <button onClick={() => document.getElementById('grades').scrollIntoView({ behavior: 'smooth' })} className="px-10 py-5 bg-slate-900 text-white rounded-2xl font-bold flex items-center justify-center gap-3 hover:bg-black transition-all shadow-xl shadow-slate-200">
//                 Explore Grades <ArrowRight className="w-5 h-5" />
//               </button>
//               <button className="px-10 py-5 bg-white border border-slate-200 text-slate-700 rounded-2xl font-bold hover:bg-slate-50 transition-all">Download Technical Specs</button>
//             </div>
//           </motion.div>
//         </div>
//       </section>

//       {/* PROCESSING SERVICES */}
//       <section className="bg-slate-900 py-24 text-white">
//         <div className="max-w-7xl mx-auto px-6">
//           <h2 className="text-blue-400 text-sm font-bold tracking-[0.3em] uppercase mb-4 text-center">Engineered Transformation</h2>
//           <h3 className="text-4xl md:text-5xl font-bold tracking-tight mb-16 text-center">Specialised Capabilities</h3>
//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
//             {processingServices.map((service, i) => (
//               <div key={i} className="bg-white/5 border border-white/10 p-8 rounded-[2.5rem] backdrop-blur-sm hover:bg-white/10 transition-all cursor-default">
//                 <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-6 shadow-lg shadow-black/20`}>
//                   <service.icon className="w-7 h-7 text-white" />
//                 </div>
//                 <h4 className="text-xl font-bold mb-3">{service.title}</h4>
//                 <p className="text-slate-400 text-sm leading-relaxed">{service.desc}</p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* TRIPLE-ROW MARQUEE SECTION */}
//       <section className="py-32 bg-slate-50 overflow-hidden relative border-y border-slate-200">
//         <div className="max-w-7xl mx-auto px-6 mb-20 relative z-10">
//           <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
//             <div className="max-w-3xl">
//               <div className="text-blue-600 text-sm font-bold tracking-[0.4em] uppercase mb-6">Industrial Footprint</div>
//               <h3 className="text-5xl md:text-7xl font-bold tracking-tight text-slate-900 leading-[1.1]">
//                 Supplying Critical <br/> 
//                 <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-emerald-500">Infrastructure</span>
//               </h3>
//             </div>
//             <div className="relative max-w-sm w-full">
//                <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 w-5 h-5" />
//                <input 
//                  type="text" 
//                  placeholder="Search 300+ uses..."
//                  className="w-full pl-12 pr-4 py-4 bg-white border border-slate-200 rounded-2xl focus:ring-2 focus:ring-blue-500 outline-none shadow-sm"
//                  value={searchQuery}
//                  onChange={(e) => setSearchQuery(e.target.value)}
//                />
//             </div>
//           </div>
//         </div>

//         {/* Marquee Container */}
//         <div className="relative flex flex-col gap-8 pause-animation">
//           <div className="absolute inset-y-0 left-0 w-32 md:w-80 bg-gradient-to-r from-slate-50 via-slate-50/80 to-transparent z-10 pointer-events-none" />
//           <div className="absolute inset-y-0 right-0 w-32 md:w-80 bg-gradient-to-l from-slate-50 via-slate-50/80 to-transparent z-10 pointer-events-none" />

//           {/* If Search is Active, show filtered grid. Else show Marquee */}
//           {searchQuery ? (
//             <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
//               {filteredItems.map((item, idx) => (
//                 <div key={idx} className="p-6 bg-white border border-slate-200 rounded-2xl flex items-center gap-4">
//                    <span className="text-3xl">{item.split(' ')[0]}</span>
//                    <span className="font-bold text-slate-700">{item.substring(item.indexOf(' ') + 1)}</span>
//                 </div>
//               ))}
//             </div>
//           ) : (
//             <>
//               {/* Row 1 */}
//               <div className="flex overflow-hidden">
//                 <div className="flex whitespace-nowrap animate-marquee-left" style={{ animationDuration: '90s' }}>
//                   {[...allFlatItems.slice(0, 30), ...allFlatItems.slice(0, 30)].map((item, i) => (
//                     <div key={i} className="mx-4 p-8 min-w-[350px] bg-white border border-slate-200 rounded-[2.5rem] flex items-center gap-6 shadow-sm hover:shadow-xl transition-all group">
//                       <span className="text-5xl group-hover:scale-110 transition-transform">{item.split(' ')[0]}</span>
//                       <span className="text-lg font-bold text-slate-800">{item.substring(item.indexOf(' ') + 1)}</span>
//                     </div>
//                   ))}
//                 </div>
//               </div>
//               {/* Row 2 */}
//               <div className="flex overflow-hidden">
//                 <div className="flex whitespace-nowrap animate-marquee-right" style={{ animationDuration: '110s' }}>
//                   {[...allFlatItems.slice(50, 80), ...allFlatItems.slice(50, 80)].map((item, i) => (
//                     <div key={i} className="mx-4 p-8 min-w-[350px] bg-white border border-slate-200 rounded-[2.5rem] flex items-center gap-6 shadow-sm hover:shadow-xl transition-all group">
//                       <span className="text-5xl group-hover:scale-110 transition-transform">{item.split(' ')[0]}</span>
//                       <span className="text-lg font-bold text-slate-800">{item.substring(item.indexOf(' ') + 1)}</span>
//                     </div>
//                   ))}
//                 </div>
//               </div>
//             </>
//           )}
//         </div>
//       </section>

//       {/* GRADES SECTION */}
//       <section id="grades" className="max-w-7xl mx-auto px-6 py-24">
//         <div className="bg-white border border-slate-200 rounded-[3rem] p-8 md:p-12 shadow-xl shadow-slate-200/60">
//           <h2 className="text-emerald-600 text-sm font-bold tracking-[0.3em] uppercase mb-4">Material Calibration</h2>
//           <h3 className="text-4xl md:text-5xl font-bold tracking-tight mb-12">Grade Specification</h3>

//           <div className="flex md:grid md:grid-cols-4 gap-4 overflow-x-auto pb-6 no-scrollbar snap-x">
//             {materialGrades.map((grade) => (
//               <button
//                 key={grade.code}
//                 onClick={() => setSelectedGrade(grade.code)}
//                 className={`flex-shrink-0 w-[280px] md:w-auto snap-center rounded-[2rem] p-8 text-left transition-all border-2 ${
//                   selectedGrade === grade.code ? 'border-emerald-500 bg-emerald-50/30 shadow-lg shadow-emerald-100' : 'border-slate-100 bg-white hover:border-slate-200'
//                 }`}
//               >
//                 <div className="text-4xl font-black mb-3 tracking-tighter">G-{grade.code}</div>
//                 <p className="text-sm text-slate-500 leading-relaxed line-clamp-2">{grade.description}</p>
//               </button>
//             ))}
//           </div>

//           <AnimatePresence mode="wait">
//             <motion.div
//               key={selectedGrade}
//               initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }}
//               className="mt-10 p-10 bg-slate-50 rounded-[2.5rem] border border-slate-200 grid sm:grid-cols-2 lg:grid-cols-4 gap-8"
//             >
//               {[
//                 {l:'Durability', v:'Extreme', i:Shield}, 
//                 {l:'Formability', v:'High', i:Activity}, 
//                 {l:'Heat Resistance', v:'925°C', i:Thermometer}, 
//                 {l:'Life Cycle', v:'25yr+', i:Clock}
//               ].map((stat, i) => (
//                 <div key={i} className="flex items-center gap-5">
//                   <div className="p-4 bg-white rounded-2xl shadow-sm"><stat.i className="w-8 h-8 text-emerald-600" /></div>
//                   <div>
//                     <div className="text-xs uppercase font-bold text-slate-400 tracking-widest">{stat.l}</div>
//                     <div className="text-xl font-bold">{stat.v}</div>
//                   </div>
//                 </div>
//               ))}
//             </motion.div>
//           </AnimatePresence>
//         </div>
//       </section>

//       {/* FINAL CTA */}
//       <section className="py-32 text-center bg-white relative">
//         <div className="max-w-4xl mx-auto px-6">
//           <h2 className="text-5xl md:text-7xl font-bold tracking-tighter mb-10 leading-tight">Secure your technical supply chain today.</h2>
//           <button className="group px-12 py-6 bg-slate-900 text-white rounded-[2.5rem] font-bold text-xl hover:bg-black transition-all flex items-center justify-center gap-4 shadow-2xl">
//             Request Project Quote <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
//           </button>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default StainlessSteelSheets;





















import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  CheckCircle, Ruler, Thermometer, 
  Droplets, Shield, Clock, Scissors, Sparkles, ShieldCheck, 
  Zap, ArrowRight, Activity, Cpu, FileCheck, Gauge, ExternalLink
} from 'lucide-react';

const StainlessSteelSheets = () => {
  const [selectedGrade, setSelectedGrade] = useState("304");

  const materialGrades = [
    { code: '202', description: 'Economical grade with good corrosion resistance' },
    { code: '304', description: 'Most common austenitic grade, excellent corrosion resistance' },
    { code: '304L', description: 'Low carbon version of 304, ideal for welding' },
    { code: '316', description: 'Superior corrosion resistance with molybdenum' },
    { code: '316L', description: 'Low carbon version of 316 for welded applications' },
    { code: '321', description: 'Stabilized with titanium for high temperature' },
    { code: '430', description: 'Ferritic grade with good formability' },
    { code: '441', description: 'High temperature ferritic stainless steel' }
  ];

  const processingServices = [
    { icon: Scissors, title: "Precision Slitting", desc: "10–1520 mm width • ±0.10 mm tolerance", color: "from-blue-500 to-cyan-400" },
    { icon: Ruler, title: "Tension Levelling", desc: "Industry-leading flatness for fabrication", color: "from-emerald-500 to-teal-400" },
    { icon: Sparkles, title: "Premium Finishing", desc: "2B • BA • No.4 • HL • Mirror", color: "from-violet-500 to-purple-400" },
    { icon: ShieldCheck, title: "Protective Lamination", desc: "Laser film & paper interleaving", color: "from-amber-500 to-orange-400" },
    { icon: Zap, title: "Surface Engineering", desc: "Degreasing • UV passivation", color: "from-rose-500 to-pink-400" }
  ];

  // Original marquee categories (kept for visual flair)
  const applicationCategories = [
    { id: 'aero', name: 'Aerospace', items: ['✈ Structural Panels', '🛩 Engine Parts', '🛰 Satellite Frames'] },
    { id: 'auto', name: 'Automotive', items: ['🚗 EV Battery Enclosures', '🔋 Cooling Plates', '⚙ Exhaust Systems'] },
    { id: 'food', name: 'Food & Bev', items: ['🥛 Dairy Tanks', '🍺 Brewing Gear', '🍴 Kitchen Surfaces'] },
    { id: 'pharma', name: 'Medical', items: ['💊 Cleanroom Panels', '🧪 Lab Benches', '🏥 Surgical Tables'] },
    { id: 'infra', name: 'Infrastructure', items: ['🏢 Facades', '🚪 Elevator Panels', '🏗 Bridge Parts'] }
  ];

  // ---------- Full 245+ Use Cases Data ----------
  const allUseCases = [
    {
      category: "1️⃣ Aerospace & Defence (20)",
      items: [
        "✈ Aircraft Structural Panels", "🛩 Jet Engine Components", "🚁 Helicopter Frames",
        "🛡 Armoured Vehicle Panels", "⚙ Precision Fasteners", "🔩 Aerospace Brackets",
        "📡 Radar Housing Systems", "🛰 Satellite Mounting Frames", "🔧 Landing Gear Components",
        "🧲 Magnetic Shielding Units", "🚀 Rocket Structural Parts", "🔬 Defence Laboratory Equipment",
        "⚡ Missile Body Structures", "🛠 Military Enclosures", "🔒 Secure Defence Cabinets",
        "📦 Ammunition Storage Units", "🧱 Protective Barriers", "🧰 Tactical Toolkits",
        "🎯 Guidance System Housings", "🧪 Aerospace Testing Fixtures"
      ]
    },
    {
      category: "2️⃣ Automotive & EV (25)",
      items: [
        "🚗 EV Battery Enclosures", "🔋 Battery Cooling Plates", "🚙 Chassis Reinforcement",
        "⚙ Exhaust Systems", "🔧 Engine Components", "🛞 Brake System Parts",
        "🚘 Structural Mounts", "🔩 Precision Washers", "🚖 Automotive Fasteners",
        "🚚 Truck Body Frames", "🛠 Fuel System Components", "🔌 EV Charging Cabinets",
        "🧲 Motor Casings", "🧰 Tool Storage Units", "🚦 Road Safety Barriers",
        "🛻 Load Body Structures", "⚡ Electric Bus Panels", "🚐 Transport Interior Panels",
        "🔩 Suspension Components", "🛠 Automotive Fixtures", "📦 Logistics Containers",
        "🔒 Locking Systems", "🧱 Structural Supports", "🚧 Crash Protection Panels",
        "⚙ Transmission Housings"
      ]
    },
    {
      category: "3️⃣ Infrastructure & Architecture (30)",
      items: [
        "🏢 Building Facades", "🚪 Elevator Panels", "🪜 Staircase Railings",
        "🧱 Structural Cladding", "🏗 Bridge Components", "🛗 Escalator Panels",
        "🪟 Window Frames", "🚧 Highway Barriers", "🏛 Decorative Columns",
        "🚿 Bathroom Fixtures", "🚰 Water Tanks", "🚪 Fire-Rated Doors",
        "🛑 Safety Railings", "🏙 Metro Stations", "🪑 Public Seating",
        "🧰 Utility Cabinets", "🏭 Industrial Roofing", "🛠 Structural Frames",
        "🧱 Interior Partitions", "🚧 Construction Supports", "🏬 Mall Installations",
        "🛤 Railway Platforms", "🏟 Stadium Structures", "🏗 Structural Beams",
        "🧲 Anti-Corrosion Frames", "🪞 Architectural Screens", "🧱 Balustrades",
        "🚪 Security Gates", "🛠 Door Hardware", "🏢 Commercial Panels"
      ]
    },
    {
      category: "4️⃣ Food & Beverage (25)",
      items: [
        "🥛 Dairy Processing Tanks", "🍺 Brewing Equipment", "🥫 Food Storage Silos",
        "🍴 Commercial Kitchen Tables", "🍳 Industrial Cookers", "🥩 Meat Processing Lines",
        "🧊 Cold Storage Racks", "🥤 Beverage Filling Lines", "🍫 Confectionery Machines",
        "🍞 Bakery Equipment", "🍚 Rice Processing Units", "🍲 Catering Equipment",
        "🧃 Juice Processing Systems", "🥣 Mixing Vessels", "🧴 Sanitary Fittings",
        "🧽 Hygienic Surfaces", "🚰 Water Purification Units", "🧂 Packaging Lines",
        "🍜 Noodle Production Lines", "🍟 Frying Equipment", "🧪 Food Testing Labs",
        "🧴 Bottling Plants", "🥫 Canning Systems", "🛠 Conveyor Frames",
        "📦 Food Transport Trolleys"
      ]
    },
    {
      category: "5️⃣ Pharmaceutical & Medical (25)",
      items: [
        "💊 Clean Room Panels", "🧪 Laboratory Benches", "🏥 Surgical Tables",
        "🩺 Hospital Trolleys", "🧴 Sterilization Units", "🧫 Biotech Reactors",
        "💉 Syringe Production Lines", "🧬 Diagnostic Equipment Frames", "🛠 Medical Cabinets",
        "🧯 Oxygen Cylinders", "🧪 Testing Chambers", "🔬 Analytical Equipment",
        "🚑 Ambulance Interiors", "🧴 Sanitization Systems", "🧪 Research Lab Equipment",
        "🧲 MRI Support Structures", "💺 Hospital Furniture", "🛠 ICU Equipment Frames",
        "🧴 Pharma Mixing Tanks", "🧪 Tablet Press Machines", "🩻 Imaging Device Housing",
        "🧴 Drug Storage Units", "🛡 Clean Environment Barriers", "🧰 Surgical Instrument Trays",
        "🧪 Vaccine Storage Units"
      ]
    },
    {
      category: "6️⃣ Oil, Gas & Chemical (30)",
      items: [
        "🛢 Storage Tanks", "⚙ Pressure Vessels", "🧪 Chemical Reactors",
        "🛠 Pipeline Systems", "⚡ Refinery Equipment", "🧯 Gas Handling Systems",
        "🛢 Offshore Platforms", "🧪 Mixing Columns", "🧲 Corrosion Resistant Panels",
        "⚙ Heat Exchangers", "🔧 Pump Casings", "🛠 Valve Bodies",
        "🧪 Distillation Columns", "🧱 Structural Supports", "🛢 LPG Cylinders",
        "🧰 Instrumentation Panels", "⚡ Petrochemical Units", "🧪 Processing Frames",
        "🛠 Drilling Equipment", "🧲 Safety Shields", "🧯 Hazardous Storage Units",
        "🧪 Chemical Storage Drums", "🛢 Transport Containers", "⚙ Compressor Units",
        "🧱 Fire Protection Systems", "🛠 Refinery Platforms", "🧪 Industrial Reactors",
        "⚡ Turbine Casings", "🛠 Flow Control Systems", "🧯 Explosion-Proof Enclosures"
      ]
    },
    {
      category: "7️⃣ Industrial Machinery & Automation (40)",
      items: [
        "⚙ Machine Frames", "🤖 Robotic Arms", "🔩 CNC Machine Bodies",
        "🛠 Assembly Line Tables", "🧲 Control Cabinets", "⚡ Electrical Enclosures",
        "📦 Conveyor Systems", "🔧 Gear Housings", "⚙ Industrial Rollers",
        "🛠 Tooling Fixtures", "🔩 Fastening Systems", "🧰 Storage Racks",
        "⚙ Press Machines", "🧱 Load Bearing Structures", "🤖 Automation Platforms",
        "🛠 Material Handling Systems", "⚙ Hydraulic Systems", "🧲 Motor Frames",
        "🛠 Cutting Machines", "🔧 Calibration Equipment", "⚡ Control Panels",
        "🛠 Workstations", "🧰 Maintenance Units", "⚙ Fabrication Lines",
        "🔩 Structural Mounting Systems", "🤖 Robotic Welding Cells", "🧱 Precision Tables",
        "🛠 Industrial Cabinets", "⚡ Power Distribution Units", "🧰 Mechanical Fixtures",
        "⚙ Manufacturing Modules", "🔧 Laser Cutting Frames", "🤖 Sensor Mounting Frames",
        "🧱 Structural Supports", "⚙ Rolling Mills", "🔩 Punching Systems",
        "🛠 Shearing Equipment", "⚡ Industrial Switchboards", "🧲 Cable Management Systems",
        "🧰 Automation Racks"
      ]
    },
    {
      category: "8️⃣ Marine & Shipbuilding (20)",
      items: [
        "🚢 Ship Hull Components", "⚓ Marine Railings", "🛥 Deck Structures",
        "🛠 Propulsion Components", "🧭 Navigation Equipment Frames", "⚙ Engine Parts",
        "🧲 Anti-Corrosion Panels", "🛢 Marine Storage Tanks", "🚢 Port Equipment",
        "🧯 Safety Equipment Frames", "⚓ Dock Installations", "🛠 Offshore Equipment",
        "🧲 Marine Fasteners", "🚤 Boat Interior Panels", "🧱 Structural Frames",
        "🛠 Coastal Installations", "⚙ Pump Systems", "🚢 Marine Enclosures",
        "🧲 Stainless Anchors", "🛠 Ship Maintenance Tools"
      ]
    },
    {
      category: "9️⃣ Consumer & Household (30)",
      items: [
        "🍽 Kitchen Utensils", "🥄 Cutlery", "🧴 Storage Containers",
        "🚿 Bathroom Fittings", "🚪 Door Handles", "🪑 Furniture Frames",
        "🛏 Bed Structures", "🧰 Tool Boxes", "🧲 Decorative Panels",
        "🧊 Refrigeration Units", "🧺 Washing Machine Drums", "🧴 Water Bottles",
        "🍳 Cookware", "🧂 Spice Containers", "🪟 Window Grills",
        "🚪 Locks & Hardware", "🛠 Home Appliances", "🧰 Storage Cabinets",
        "🧲 Modular Kitchens", "🛋 Interior Decor Panels", "🧴 Bathroom Accessories",
        "🧰 Utility Racks", "🛠 Lighting Fixtures", "🚿 Shower Systems",
        "🧱 Stair Railings", "🧴 Laundry Systems", "🧰 Shelving Units",
        "🛠 Furniture Hardware", "🧲 Balcony Railings", "🧰 Household Tools"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-[#fafafa] text-slate-900 selection:bg-blue-100 selection:text-blue-900 overflow-x-hidden">
      
      <style>
        {`
          @keyframes marquee-left {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
          @keyframes marquee-right {
            0% { transform: translateX(-50%); }
            100% { transform: translateX(0); }
          }
          .animate-marquee-left { animation: marquee-left linear infinite; }
          .animate-marquee-right { animation: marquee-right linear infinite; }
          .pause-animation:hover .animate-marquee-left,
          .pause-animation:hover .animate-marquee-right {
            animation-play-state: paused;
          }
          .no-scrollbar::-webkit-scrollbar { display: none; }
          .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
        `}
      </style>

      {/* HERO SECTION */}
      <section className="relative pt-24 pb-32 md:pt-32 md:pb-48 overflow-hidden bg-white">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
        <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
          <motion.div initial={{opacity:0}} animate={{opacity:1}} transition={{staggerChildren:0.1}}>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-50 border border-slate-200 shadow-sm mb-10">
              <span className="relative flex h-2 w-2"><span className="animate-ping absolute h-full w-full rounded-full bg-emerald-400 opacity-75"></span><span className="relative rounded-full h-2 w-2 bg-emerald-500"></span></span>
              <span className="text-xs font-bold tracking-[0.2em] text-slate-500 uppercase">Industrial Grade Sheets</span>
            </div>
            <h1 className="text-6xl md:text-8xl font-bold tracking-tight text-slate-900 mb-8 leading-[0.95]">
              Stainless Steel <span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-700 via-slate-500 to-slate-400">Sheets</span>
            </h1>
            <p className="text-lg md:text-2xl text-slate-500 max-w-3xl mx-auto font-light leading-relaxed mb-12">
              The standard for high-performance fabrication. Precision-converted for critical manufacturing environments.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button onClick={() => document.getElementById('grades').scrollIntoView({ behavior: 'smooth' })} className="px-10 py-5 bg-slate-900 text-white rounded-2xl font-bold flex items-center justify-center gap-3 hover:bg-black transition-all shadow-xl shadow-slate-200">
                Explore Grades <ArrowRight className="w-5 h-5" />
              </button>
              <button className="px-10 py-5 bg-white border border-slate-200 text-slate-700 rounded-2xl font-bold hover:bg-slate-50 transition-all">Download Technical Specs</button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* PROCESSING SERVICES */}
      <section className="bg-slate-900 py-24 text-white">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-blue-400 text-sm font-bold tracking-[0.3em] uppercase mb-4 text-center">Engineered Transformation</h2>
          <h3 className="text-4xl md:text-5xl font-bold tracking-tight mb-16 text-center">Specialised Capabilities</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {processingServices.map((service, i) => (
              <div key={i} className="bg-white/5 border border-white/10 p-8 rounded-[2.5rem] backdrop-blur-sm hover:bg-white/10 transition-all cursor-default">
                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-6 shadow-lg shadow-black/20`}>
                  <service.icon className="w-7 h-7 text-white" />
                </div>
                <h4 className="text-xl font-bold mb-3">{service.title}</h4>
                <p className="text-slate-400 text-sm leading-relaxed">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ENHANCED APPLICATIONS - Triple-Row Large Scale Marquee (visual highlight) */}
      <section className="py-32 bg-slate-50 overflow-hidden relative border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-6 mb-20 relative z-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
            <div className="max-w-3xl">
              <div className="text-blue-600 text-sm font-bold tracking-[0.4em] uppercase mb-6">Industrial Footprint</div>
              <h3 className="text-5xl md:text-7xl font-bold tracking-tight text-slate-900 leading-[1.1]">
                Precision Components for <br/> 
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-emerald-500">Global Infrastructure</span>
              </h3>
            </div>
            <p className="text-slate-500 text-xl max-w-sm italic font-light">
              Supplying critical substrates across the most demanding engineering sectors.
            </p>
          </div>
        </div>

        <div className="relative flex flex-col gap-10 pause-animation">
          {/* Side Gradients for Smooth Fading */}
          <div className="absolute inset-y-0 left-0 w-32 md:w-80 bg-gradient-to-r from-slate-50 via-slate-50/80 to-transparent z-10 pointer-events-none" />
          <div className="absolute inset-y-0 right-0 w-32 md:w-80 bg-gradient-to-l from-slate-50 via-slate-50/80 to-transparent z-10 pointer-events-none" />

          {/* Row 1: Fast - Forward */}
          <div className="flex overflow-hidden">
            <div className="flex whitespace-nowrap animate-marquee-left" style={{ animationDuration: '70s' }}>
              {[...applicationCategories, ...applicationCategories].map((cat, idx) => (
                <div key={idx} className="flex gap-8 mx-4">
                  {cat.items.slice(0, 2).map((item, i) => (
                    <div key={i} className="min-w-[420px] p-10 bg-white border border-slate-200 rounded-[3rem] flex items-center gap-8 hover:border-blue-500 hover:scale-105 transition-all duration-500 shadow-sm hover:shadow-2xl hover:shadow-blue-900/10 group cursor-default">
                      <span className="text-7xl group-hover:rotate-12 transition-transform duration-500">{item.split(' ')[0]}</span>
                      <div>
                        <span className="block text-xs font-black text-blue-600/40 uppercase tracking-[0.2em] mb-2">{cat.name}</span>
                        <span className="text-2xl font-bold text-slate-800 tracking-tight">{item.substring(item.indexOf(' ') + 1)}</span>
                      </div>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>

          {/* Row 2: Slow - Reverse */}
          <div className="flex overflow-hidden">
            <div className="flex whitespace-nowrap animate-marquee-right" style={{ animationDuration: '100s' }}>
              {[...applicationCategories].reverse().concat([...applicationCategories].reverse()).map((cat, idx) => (
                <div key={idx} className="flex gap-8 mx-4">
                  {cat.items.slice(1, 3).map((item, i) => (
                    <div key={i} className="min-w-[420px] p-10 bg-white border border-slate-200 rounded-[3rem] flex items-center gap-8 hover:border-emerald-500 hover:scale-105 transition-all duration-500 shadow-sm hover:shadow-2xl hover:shadow-emerald-900/10 group cursor-default">
                      <span className="text-7xl group-hover:-rotate-12 transition-transform duration-500">{item.split(' ')[0]}</span>
                      <div>
                        <span className="block text-xs font-black text-emerald-600/40 uppercase tracking-[0.2em] mb-2">{cat.name}</span>
                        <span className="text-2xl font-bold text-slate-800 tracking-tight">{item.substring(item.indexOf(' ') + 1)}</span>
                      </div>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>

          {/* Row 3: Medium - Forward */}
          <div className="flex overflow-hidden">
            <div className="flex whitespace-nowrap animate-marquee-left" style={{ animationDuration: '85s' }}>
              {[...applicationCategories].concat([...applicationCategories]).map((cat, idx) => (
                <div key={idx} className="flex gap-8 mx-4">
                  <div className="min-w-[420px] p-10 bg-white border border-slate-200 rounded-[3rem] flex items-center gap-8 hover:border-slate-900 hover:scale-105 transition-all duration-500 shadow-sm hover:shadow-2xl hover:shadow-slate-900/10 group cursor-default">
                    <span className="text-7xl group-hover:scale-110 transition-transform duration-500">{cat.id === 'infra' ? '🏙️' : '⚙️'}</span>
                    <div>
                      <span className="block text-xs font-black text-slate-400 uppercase tracking-[0.2em] mb-2">{cat.name}</span>
                      <span className="text-2xl font-bold text-slate-800 tracking-tight">Industrial Integration</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ===== NEW: COMPLETE USE CASE LIBRARY (245+ applications) ===== */}
      <section className="max-w-7xl mx-auto px-6 py-24">
        <div className="bg-white border border-slate-200 rounded-[3rem] p-8 md:p-12 shadow-xl shadow-slate-200/60">
          <h2 className="text-emerald-600 text-sm font-bold tracking-[0.3em] uppercase mb-4">Comprehensive Portfolio</h2>
          <h3 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">245+ Industrial & Commercial Use Cases</h3>
          <p className="text-slate-500 text-lg max-w-3xl mb-12">
            From aerospace to consumer goods, our stainless steel sheets are engineered for the most demanding applications across every sector.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {allUseCases.map((category, idx) => (
              <div key={idx} className="bg-slate-50 rounded-2xl p-6 border border-slate-200 hover:border-emerald-200 transition-all">
                <h4 className="text-lg font-black text-slate-800 mb-3 flex items-center gap-2">
                  <span className="text-2xl">{category.category.split(' ')[0]}</span>
                  <span>{category.category.substring(2)}</span>
                </h4>
                <ul className="space-y-1.5 max-h-80 overflow-y-auto pr-2 text-sm text-slate-600 scrollbar-thin scrollbar-thumb-slate-300">
                  {category.items.map((item, i) => (
                    <li key={i} className="flex items-start gap-2 hover:text-emerald-600 transition-colors">
                      <span className="text-base shrink-0">{item.split(' ')[0]}</span>
                      <span className="leading-tight">{item.substring(item.indexOf(' ') + 1)}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-3 text-xs font-mono text-slate-400 border-t border-slate-200 pt-2">
                  {category.items.length} applications
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* GRADES SECTION */}
      <section id="grades" className="max-w-7xl mx-auto px-6 py-24">
        <div className="bg-white border border-slate-200 rounded-[3rem] p-8 md:p-12 shadow-xl shadow-slate-200/60">
          <h2 className="text-emerald-600 text-sm font-bold tracking-[0.3em] uppercase mb-4">Material Calibration</h2>
          <h3 className="text-4xl md:text-5xl font-bold tracking-tight mb-12">Grade Specification</h3>

          <div className="flex md:grid md:grid-cols-4 gap-4 overflow-x-auto pb-6 no-scrollbar snap-x">
            {materialGrades.map((grade) => (
              <button
                key={grade.code}
                onClick={() => setSelectedGrade(grade.code)}
                className={`flex-shrink-0 w-[280px] md:w-auto snap-center rounded-[2rem] p-8 text-left transition-all border-2 ${
                  selectedGrade === grade.code ? 'border-emerald-500 bg-emerald-50/30 shadow-lg shadow-emerald-100' : 'border-slate-100 bg-white hover:border-slate-200'
                }`}
              >
                <div className="text-4xl font-black mb-3 tracking-tighter">G-{grade.code}</div>
                <p className="text-sm text-slate-500 leading-relaxed line-clamp-2">{grade.description}</p>
              </button>
            ))}
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={selectedGrade}
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }}
              className="mt-10 p-10 bg-slate-50 rounded-[2.5rem] border border-slate-200 grid sm:grid-cols-2 lg:grid-cols-4 gap-8"
            >
              {[{l:'Durability', v:'Extreme', i:Shield}, {l:'Formability', v:'High', i:Activity}, {l:'Heat Resistance', v:'925°C', i:Thermometer}, {l:'Life Cycle', v:'25yr+', i:Clock}].map((stat, i) => (
                <div key={i} className="flex items-center gap-5">
                  <div className="p-4 bg-white rounded-2xl shadow-sm"><stat.i className="w-8 h-8 text-emerald-600" /></div>
                  <div>
                    <div className="text-xs uppercase font-bold text-slate-400 tracking-widest">{stat.l}</div>
                    <div className="text-xl font-bold">{stat.v}</div>
                  </div>
                </div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-32 text-center bg-white relative">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-5xl md:text-7xl font-bold tracking-tighter mb-10 leading-tight">Secure your technical supply chain today.</h2>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <button className="group px-12 py-6 bg-slate-900 text-white rounded-[2.5rem] font-bold text-xl hover:bg-black transition-all flex items-center justify-center gap-4 shadow-2xl">
              Request Project Quote <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default StainlessSteelSheets;