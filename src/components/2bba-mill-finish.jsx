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
//   Activity, Cpu, FileCheck, Gauge
// } from 'lucide-react';

// const StainlessSteelSheets = () => {
//   const [selectedGrade, setSelectedGrade] = useState("304");
//   const [showCustomOptions, setShowCustomOptions] = useState(false);
//   const [expandedCategory, setExpandedCategory] = useState(null);
//   const marqueeRefs = useRef({});

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

//   const toggleCategory = (id) => {
//     setExpandedCategory(expandedCategory === id ? null : id);
//   };

//   return (
//     <div className="min-h-screen bg-white text-slate-900 font-sans selection:bg-blue-600 selection:text-white">
      
//       {/* SECTOR INTEGRATION SECTION */}
//       <section className="py-24 bg-[#f8fafc] overflow-hidden">
//         <div className="max-w-7xl mx-auto px-6 mb-16">
//           <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 mb-6">
//             <Zap className="w-3.5 h-3.5 text-blue-600 fill-blue-600" />
//             <span className="text-[10px] font-bold tracking-[0.2em] text-blue-700 uppercase">High Velocity Delivery</span>
//           </div>
//           <h2 className="text-6xl md:text-7xl font-black tracking-tighter text-slate-950 mb-4">
//             Where Our Sheets Excel
//           </h2>
//           <p className="text-xl text-slate-500 max-w-2xl font-medium">
//             Precision substrates engineered for the world's most demanding sectors.
//           </p>
//         </div>

//         <div className="max-w-7xl mx-auto px-6 space-y-4">
//           {applicationCategories.map((category) => {
//             const items = getCategoryItems(category.id);
//             const isExpanded = expandedCategory === category.id;
            
//             return (
//               <div key={category.id} className="relative group">
//                 <motion.div
//                   layout
//                   onClick={() => toggleCategory(category.id)}
//                   className={`relative z-20 flex items-center justify-between p-8 md:p-12 cursor-pointer transition-all duration-300 rounded-[32px] border-2 ${
//                     isExpanded 
//                     ? 'bg-slate-950 border-slate-950 text-white shadow-[0_30px_60px_-15px_rgba(0,0,0,0.3)]' 
//                     : 'bg-white border-slate-100 hover:border-blue-400 text-slate-900 shadow-sm'
//                   }`}
//                 >
//                   <div className="flex items-center gap-10">
//                     <span className="text-7xl md:text-8xl filter drop-shadow-lg group-hover:scale-110 transition-transform duration-300">
//                       {category.icon}
//                     </span>
//                     <div>
//                       <h3 className="text-3xl md:text-5xl font-black tracking-tight uppercase italic">{category.name}</h3>
//                       <div className="flex items-center gap-3 mt-2">
//                         <span className={`h-2 w-2 rounded-full animate-pulse ${isExpanded ? 'bg-blue-400' : 'bg-blue-600'}`}></span>
//                         <p className={`text-sm font-bold tracking-widest uppercase ${isExpanded ? 'text-blue-400' : 'text-slate-400'}`}>
//                           {category.count} High-Performance Specs
//                         </p>
//                       </div>
//                     </div>
//                   </div>
//                   <div className={`p-4 rounded-2xl transition-all duration-500 ${isExpanded ? 'bg-blue-600 text-white rotate-180' : 'bg-slate-100 text-slate-400'}`}>
//                     <ChevronDown className="w-8 h-8 stroke-[3px]" />
//                   </div>
//                 </motion.div>

//                 <AnimatePresence>
//                   {isExpanded && (
//                     <motion.div
//                       initial={{ height: 0, opacity: 0 }}
//                       animate={{ height: 'auto', opacity: 1 }}
//                       exit={{ height: 0, opacity: 0 }}
//                       transition={{ duration: 0.4, ease: [0.23, 1, 0.32, 1] }}
//                       className="overflow-hidden z-10"
//                     >
//                       <div className="py-16 bg-blue-600 rounded-b-[40px] -mt-10 pt-24 px-4 shadow-inner">
//                         <div className="flex whitespace-nowrap gap-10 animate-marquee-hyper hover:pause">
//                           {/* Loop duplicated 6 times for ultra-smooth high-speed transition */}
//                           {[...items, ...items, ...items, ...items, ...items, ...items].map((item, idx) => (
//                             <div
//                               key={idx}
//                               className="inline-flex items-center gap-8 bg-white/10 backdrop-blur-xl border border-white/20 px-12 py-10 rounded-[30px] shadow-2xl min-w-[450px]"
//                             >
//                               <span className="text-6xl drop-shadow-md">{item.split(' ')[0]}</span>
//                               <span className="text-3xl font-black text-white tracking-tighter uppercase italic">
//                                 {item.substring(item.indexOf(' ') + 1)}
//                               </span>
//                             </div>
//                           ))}
//                         </div>
//                       </div>
//                     </motion.div>
//                   )}
//                 </AnimatePresence>
//               </div>
//             );
//           })}
//         </div>
//       </section>

//       <style jsx global>{`
//         /* Hyper Speed Loop - 15 Seconds */
//         @keyframes marquee-hyper {
//           from { transform: translateX(0); }
//           to { transform: translateX(-33.33%); }
//         }
//         .animate-marquee-hyper {
//           animation: marquee-hyper 15s linear infinite; 
//           width: max-content;
//           display: flex;
//           will-change: transform;
//         }
//         .pause:hover {
//           animation-play-state: paused;
//         }
//         @import url('https://fonts.googleapis.com/css2?family=Archivo+Black&family=Inter:wght@400;700;900&display=swap');
        
//         h2, h3, .font-black {
//           font-family: 'Archivo Black', sans-serif;
//         }
//       `}</style>
//     </div>
//   );
// };

// export default StainlessSteelSheets;































import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  CheckCircle, Ruler, Layers, ChevronRight, Thermometer, 
  Droplets, Shield, Clock, Calendar, ChevronDown, ChevronUp,
  Scissors, Sparkles, ShieldCheck, Zap, Award, ArrowRight,
  Activity, Cpu, FileCheck, Gauge
} from 'lucide-react';

const StainlessSteelSheets = () => {
  const [selectedGrade, setSelectedGrade] = useState("304");
  const [showCustomOptions, setShowCustomOptions] = useState(false);
  const [expandedCategory, setExpandedCategory] = useState(null);
  const marqueeRefs = useRef({});

  const materialGrades = [
    { code: '202', description: 'Economical grade with good corrosion resistance', color: 'from-amber-100 to-amber-50' },
    { code: '304', description: 'Most common austenitic grade, excellent corrosion resistance', color: 'from-cyan-100 to-blue-50' },
    { code: '304L', description: 'Low carbon version of 304, ideal for welding', color: 'from-emerald-100 to-teal-50' },
    { code: '316', description: 'Superior corrosion resistance with molybdenum', color: 'from-violet-100 to-purple-50' },
    { code: '316L', description: 'Low carbon version of 316 for welded applications', color: 'from-fuchsia-100 to-pink-50' },
    { code: '321', description: 'Stabilized with titanium for high temperature', color: 'from-orange-100 to-amber-50' },
    { code: '430', description: 'Ferritic grade with good formability', color: 'from-slate-100 to-zinc-50' },
    { code: '441', description: 'High temperature ferritic stainless steel', color: 'from-rose-100 to-red-50' }
  ];

  const processingServices = [
    { icon: Scissors, title: "Precision Slitting", desc: "10–1520 mm width • ±0.10 mm tolerance", color: "from-blue-500 to-indigo-600" },
    { icon: Ruler, title: "Tension Levelling", desc: "Industry-leading flatness for fabrication", color: "from-emerald-500 to-teal-600" },
    { icon: Sparkles, title: "Premium Finishing", desc: "2B • BA • No.4 • HL • Mirror", color: "from-violet-500 to-purple-600" },
    { icon: ShieldCheck, title: "Protective Lamination", desc: "Laser film & paper interleaving", color: "from-amber-500 to-orange-600" },
    { icon: Zap, title: "Surface Engineering", desc: "Degreasing • UV passivation", color: "from-rose-500 to-pink-600" }
  ];

  const dimensions = [
    { size: '1250 × 2500 mm', availability: 'In Stock • 48 hrs' },
    { size: '1500 × 3000 mm', availability: 'In Stock • 24 hrs' },
    { size: '1520 × 4000 mm', availability: 'Premium Stock' },
    { size: 'Custom Sizes', availability: 'Made to Order' }
  ];

  const applicationCategories = [
    { id: 'aero', name: 'Aerospace & Defence', icon: '✈️', count: 28 },
    { id: 'auto', name: 'Automotive & EV', icon: '🚗', count: 32 },
    { id: 'infra', name: 'Architecture & Infrastructure', icon: '🏙️', count: 35 },
    { id: 'food', name: 'Food & Beverage', icon: '🍽️', count: 30 },
    { id: 'pharma', name: 'Pharmaceutical & Medical', icon: '💉', count: 27 },
    { id: 'oil', name: 'Oil, Gas & Chemical', icon: '🛢️', count: 33 },
    { id: 'machinery', name: 'Industrial Machinery', icon: '⚙️', count: 45 },
    { id: 'marine', name: 'Marine & Shipbuilding', icon: '⛴️', count: 22 },
    { id: 'consumer', name: 'Consumer & Lifestyle', icon: '🏠', count: 25 }
  ];

  const getCategoryItems = (id) => {
    const itemsMap = {
      aero: ['✈ Aircraft Structural Panels', '🛩 Jet Engine Parts', '🚁 Helicopter Frames', '🛡 Armoured Panels', '📡 Radar Housings', '🛰 Satellite Frames'],
      auto: ['🚗 EV Battery Enclosures', '🔋 Cooling Plates', '🚙 Chassis Parts', '⚙ Exhaust Systems', '🛞 Brake Components'],
      infra: ['🏢 Building Facades', '🚪 Elevator Panels', '🪜 Stair Railings', '🏗 Bridge Components', '🛗 Escalator Cladding'],
      food: ['🥛 Dairy Tanks', '🍺 Brewing Equipment', '🍴 Kitchen Surfaces', '🧊 Cold Storage Racks', '🥤 Filling Lines'],
      pharma: ['💊 Cleanroom Panels', '🧪 Lab Benches', '🏥 Surgical Tables', '🧴 Sterilization Units', '🧬 Biotech Frames'],
      oil: ['🛢 Storage Tanks', '⚙ Pressure Vessels', '🧪 Chemical Reactors', '🛠 Pipeline Systems', '⚡ Refinery Equipment'],
      machinery: ['⚙ Machine Frames', '🤖 Robotic Arms', '🔩 CNC Bodies', '📦 Conveyor Systems', '🛠 Assembly Tables'],
      marine: ['🚢 Ship Hull Liners', '⚓ Marine Railings', '🛥 Deck Structures', '🛠 Propulsion Parts', '🧭 Navigation Frames'],
      consumer: ['🍽 Kitchen Utensils', '🥄 Premium Cutlery', '🚿 Bathroom Fittings', '🪑 Furniture Frames', '🧴 Storage Containers']
    };
    return itemsMap[id] || [];
  };

  const selectedGradeData = materialGrades.find(grade => grade.code === selectedGrade);

  const toggleCategory = (id) => {
    setExpandedCategory(expandedCategory === id ? null : id);
  };

  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans selection:bg-blue-400 selection:text-white">
      
      {/* HERO SECTION */}
      <div className="relative pt-20 md:pt-32 pb-24 md:pb-32 overflow-hidden bg-white">
        <div className="absolute inset-0 bg-[radial-gradient(#00000008_1px,transparent_1px)] [background-size:32px_32px]" />
        <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-50 border border-slate-200 mb-8 md:mb-10">
              <Award className="w-4 h-4 text-blue-400" />
              <span className="text-[10px] font-bold tracking-[0.2em] text-slate-500 uppercase">Industrial Excellence</span>
            </div>
            <h1 className="text-5xl md:text-8xl lg:text-[110px] font-black tracking-tight leading-[1] mb-6 md:mb-8 text-slate-950">
              High-Precision <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-900 via-slate-600 to-slate-900">Stainless Steel</span>
            </h1>
            <p className="text-lg md:text-2xl text-slate-500 max-w-3xl mx-auto font-light leading-relaxed">
              Transforming mill-origin coils into application-ready substrates with precision engineering.
            </p>
            <div className="flex flex-wrap gap-4 justify-center mt-12">
              {/* <button className="w-full sm:w-auto px-10 md:px-12 py-4 md:py-5 bg-slate-950 text-white rounded-full font-bold flex items-center justify-center gap-3 hover:bg-blue-400 transition-all duration-300">
                Explore Material Grades <ArrowRight className="w-5 h-5" />
              </button> */}
            </div>
          </motion.div>
        </div>
      </div>

      {/* CORE CAPABILITIES */}
      <section className="max-w-7xl mx-auto px-6 py-20 md:py-32">
        <div className="grid lg:grid-cols-12 gap-12 md:gap-16 items-start">
          <div className="lg:col-span-5 lg:sticky lg:top-24">
            <span className="text-blue-400 font-bold tracking-widest text-xs uppercase mb-4 block">Core Discipline</span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight text-slate-950 mb-6 italic underline decoration-blue-500/20 underline-offset-8">Engineered Transformation.</h2>
            <p className="text-base md:text-lg text-slate-500 leading-relaxed">
              Matrix Metals LLP functions as a structured processing partner delivering 
              engineered transformation of mill-origin stainless steel coils into application-ready substrates.
            </p>
          </div>
          <div className="lg:col-span-7 grid sm:grid-cols-2 gap-4">
            {processingServices.map((service, i) => (
              <div key={i} className="p-6 md:p-8 bg-white border border-slate-100 rounded-[32px] hover:shadow-xl transition-all duration-500 group">
                <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-6 shadow-lg`}>
                  <service.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-2 group-hover:text-blue-400 transition-colors">{service.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MATERIAL GRADES SELECTOR */}
      <section id="grades" className="bg-slate-950 py-24 md:py-32 rounded-[40px] md:rounded-[60px] mx-2 md:mx-6">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-16 md:mb-20">
            <h2 className="text-4xl md:text-6xl font-black text-white tracking-tight mb-4">Material Specification</h2>
            <p className="text-slate-400 text-lg">Select a grade to view industrial properties.</p>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4">
            {materialGrades.map((grade) => (
              <button
                key={grade.code}
                onClick={() => setSelectedGrade(grade.code)}
                className={`p-6 md:p-8 rounded-[24px] md:rounded-[32px] text-left transition-all duration-300 border ${
                  selectedGrade === grade.code 
                  ? 'bg-blue-400 border-blue-500 text-white shadow-2xl shadow-blue-600/20' 
                  : 'bg-slate-900 border-slate-800 text-slate-400 hover:border-slate-600'
                }`}
              >
                <div className="text-2xl md:text-3xl font-black mb-1 md:mb-2 tracking-tighter italic">{grade.code}</div>
                <p className={`text-xs md:text-sm leading-snug line-clamp-2 ${selectedGrade === grade.code ? 'text-blue-50' : 'text-slate-500'}`}>{grade.description}</p>
              </button>
            ))}
          </div>
          <AnimatePresence mode="wait">
            <motion.div
              key={selectedGrade}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="mt-8 p-8 md:p-12 bg-white rounded-[32px] md:rounded-[40px] grid md:grid-cols-2 lg:grid-cols-4 gap-8"
            >
              <div className="lg:col-span-2">
                <span className="text-blue-400 font-bold text-[10px] tracking-widest uppercase block mb-2">Technical Summary</span>
                <h3 className="text-3xl md:text-4xl font-black text-slate-900 mb-4 italic">Grade {selectedGradeData.code}</h3>
                <p className="text-slate-500 text-base md:text-lg leading-relaxed">{selectedGradeData.description}</p>
              </div>
              <div className="lg:col-span-2 grid grid-cols-2 gap-6 md:gap-8">
                {[
                  { label: 'Corrosion', val: 'Industrial', icon: Droplets },
                  { label: 'Max Temp', val: '925°C', icon: Thermometer },
                  { label: 'Weldability', val: 'High-Level', icon: Shield },
                  { label: 'Longevity', val: '30+ Yrs', icon: Activity },
                ].map((item, idx) => (
                  <div key={idx}>
                    <div className="text-slate-400 text-[10px] font-bold uppercase mb-1 flex items-center gap-2"><item.icon className="w-3 h-3"/> {item.label}</div>
                    <div className="text-lg md:text-xl font-black italic">{item.val}</div>
                  </div>
                ))}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* APPLICATIONS - THE ENHANCED HYPER-SPEED SECTION */}
      <section className="py-24 md:py-32 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 mb-16 md:mb-20">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
            <div>
              <span className="text-blue-400 font-bold tracking-widest text-[10px] uppercase mb-4 block underline underline-offset-4">Sector Integration</span>
              <h2 className="text-4xl md:text-6xl font-black tracking-tighter text-slate-950 uppercase italic">Where Our Sheets Excel</h2>
            </div>
            <p className="text-slate-500 text-base md:text-lg max-w-sm font-medium">
              Supporting critical infrastructure and advanced manufacturing globally.
            </p>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 md:px-6 space-y-4">
          {applicationCategories.map((category) => {
            const items = getCategoryItems(category.id);
            const isExpanded = expandedCategory === category.id;
            
            return (
              <div key={category.id} className="relative">
                <motion.div
                  onClick={() => toggleCategory(category.id)}
                  className={`relative z-20 flex items-center justify-between p-6 md:p-10 cursor-pointer transition-all duration-300 rounded-[28px] md:rounded-[32px] border-2 ${
                    isExpanded 
                    ? 'bg-slate-950 border-slate-950 text-white shadow-[0_30px_60px_-15px_rgba(0,0,0,0.3)]' 
                    : 'bg-white border-slate-100 hover:border-blue-400 text-slate-900 shadow-sm'
                  }`}
                >
                  <div className="flex items-center gap-6 md:gap-10">
                    <span className="text-5xl md:text-7xl lg:text-8xl">
                      {category.icon}
                    </span>
                    <div>
                      <h3 className="text-2xl md:text-4xl font-black tracking-tight uppercase italic leading-none">{category.name}</h3>
                      <div className="flex items-center gap-3 mt-2 md:mt-3">
                        <span className={`h-1.5 w-1.5 rounded-full ${isExpanded ? 'bg-blue-400 animate-pulse' : 'bg-blue-400'}`}></span>
                        <p className={`text-[10px] md:text-xs font-bold tracking-widest uppercase ${isExpanded ? 'text-blue-200' : 'text-slate-400'}`}>
                          {category.count} High-Performance Specs
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className={`p-3 md:p-4 rounded-xl md:rounded-2xl transition-all duration-500 ${isExpanded ? 'bg-blue-400 text-white rotate-180' : 'bg-slate-100 text-slate-400'}`}>
                    <ChevronDown className="w-5 h-5 md:w-8 md:h-8 stroke-[3px]" />
                  </div>
                </motion.div>

                <AnimatePresence>
                  {isExpanded && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.4, ease: [0.23, 1, 0.32, 1] }}
                      className="overflow-hidden z-10"
                    >
                      <div className="py-12 md:py-16 bg-blue-900 rounded-b-[32px] md:rounded-b-[40px] -mt-10 pt-24 px-2">
                        <div className="flex whitespace-nowrap gap-6 md:gap-10 animate-marquee-18s hover:pause">
                          {[...items, ...items, ...items, ...items].map((item, idx) => (
                            <div
                              key={idx}
                              className="inline-flex items-center gap-6 md:gap-8 bg-white/10 backdrop-blur-xl border border-white/20 px-8 md:px-12 py-8 md:py-10 rounded-[24px] md:rounded-[30px] shadow-2xl min-w-[320px] md:min-w-[450px]"
                            >
                              <span className="text-4xl md:text-6xl">{item.split(' ')[0]}</span>
                              <span className="text-xl md:text-2xl font-black text-white tracking-tighter uppercase italic">
                                {item.substring(item.indexOf(' ') + 1)}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="max-w-7xl mx-auto px-6 py-24 md:py-32">
        <div className="bg-gradient-to-br from-blue-400 to-blue-500 rounded-[40px] md:rounded-[48px] p-12 md:p-24 text-center text-white relative overflow-hidden shadow-2xl">
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10" />
          <h2 className="text-4xl md:text-7xl font-black tracking-tighter mb-8 relative z-10 italic uppercase">Start Your Precision <br/>Project Today.</h2>
          
        </div>
      </section>

      <style jsx global>{`
        @keyframes marquee-18s {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
        .animate-marquee-18s {
          animation: marquee-18s 18s linear infinite; 
          width: max-content;
          display: flex;
          will-change: transform;
        }
        .pause:hover {
          animation-play-state: paused;
        }
        @import url('https://fonts.googleapis.com/css2?family=Archivo+Black&family=Inter:wght@300;400;500;700;900&display=swap');
        
        h1, h2, h3, .font-black {
          font-family: 'Archivo Black', sans-serif;
        }
        body { font-family: 'Inter', sans-serif; }
      `}</style>
    </div>
  );
};

export default StainlessSteelSheets;









































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










