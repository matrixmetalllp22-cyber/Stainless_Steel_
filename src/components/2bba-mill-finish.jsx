// import { useState, useRef, useEffect } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import { 
//   CheckCircle, Download, Package, Ruler, Layers, Factory, 
//   ChevronRight, Thermometer, Droplets, Shield, Clock, Calendar,
//   ChevronDown, ChevronUp
// } from 'lucide-react';

// const StainlessSteelSheets = () => {
//   const [activeTab, setActiveTab] = useState("specifications");
//   const [selectedGrade, setSelectedGrade] = useState("304");
//   const [showCustomOptions, setShowCustomOptions] = useState(false);
//   const [expandedCategory, setExpandedCategory] = useState(null);
//   const marqueeRefs = useRef({});

//   const materialGrades = [
//     { code: '202', description: 'Economical grade with good corrosion resistance', color: 'from-amber-100 to-amber-50' },
//     { code: '304', description: 'Most common austenitic grade, excellent corrosion resistance', color: 'from-blue-100 to-blue-50' },
//     { code: '304L', description: 'Low carbon version of 304, ideal for welding', color: 'from-emerald-100 to-emerald-50' },
//     { code: '316', description: 'Superior corrosion resistance with molybdenum', color: 'from-purple-100 to-purple-50' },
//     { code: '316L', description: 'Low carbon version of 316 for welded applications', color: 'from-violet-100 to-violet-50' },
//     { code: '321', description: 'Stabilized with titanium for high temperature', color: 'from-orange-100 to-orange-50' },
//     { code: '430', description: 'Ferritic grade with good formability', color: 'from-gray-100 to-gray-50' },
//     { code: '441', description: 'High temperature ferritic stainless steel', color: 'from-rose-100 to-rose-50' }
//   ];
  
//   // Original simple applications (kept for the right column)
//   const quickApplications = [
//     { icon: '🍺', name: 'Breweries and Distilleries', category: 'food' },
//     { icon: '🥛', name: 'Milk Cans and Boilers', category: 'food' },
//     { icon: '💊', name: 'Pharmaceutical Machinery', category: 'medical' },
//     { icon: '⌚', name: 'Horology', category: 'precision' },
//     { icon: '⚡', name: 'Electrical and Electronic Components', category: 'industrial' },
//     { icon: '🪑', name: 'Street Furniture', category: 'architectural' },
//     { icon: '🔪', name: 'Kitchen Equipment', category: 'food' },
//     { icon: '🚢', name: 'Marine Industry', category: 'industrial' },
//     { icon: '✈️', name: 'Automotive & Aviation Industries', category: 'transport' },
//     { icon: '❄️', name: 'Refrigeration', category: 'industrial' }
//   ];

//   const dimensions = [
//     { size: '1260 × 2500 mm', standard: true, availability: 'In Stock' },
//     { size: '1500 × 3000 mm', standard: true, availability: 'In Stock' },
//     { size: 'Custom Dimensions', standard: false, availability: 'On Demand' }
//   ];

//   const finishes = [
//     { name: '2B Finish', description: 'Standard bright cold rolled finish', color: 'bg-slate-100' },
//     { name: 'BA Finish', description: 'Bright annealed mirror-like finish', color: 'bg-blue-50' },
//     { name: 'Custom Finishes', description: 'Available on special request', color: 'bg-emerald-50' }
//   ];

//   const thicknessOptions = [
//     { range: '0.40 - 3.00 mm', common: true, applications: 'Light industrial, decorative' },
//     { range: '3.00 - 8.00 mm', common: true, applications: 'Structural, heavy equipment' },
//     { range: '8.00 - 20.00 mm', common: false, applications: 'Specialized industrial' }
//   ];

//   // Comprehensive application categories
//   const applicationCategories = [
//     {
//       id: 'aero',
//       name: 'Aerospace & Defence',
//       icon: '✈️',
//       count: 20,
//       items: [
//         '✈ Aircraft Structural Panels', '🛩 Jet Engine Components', '🚁 Helicopter Frames', '🛡 Armoured Vehicle Panels',
//         '⚙ Precision Fasteners', '🔩 Aerospace Brackets', '📡 Radar Housing Systems', '🛰 Satellite Mounting Frames',
//         '🔧 Landing Gear Components', '🧲 Magnetic Shielding Units', '🚀 Rocket Structural Parts', '🔬 Defence Laboratory Equipment',
//         '⚡ Missile Body Structures', '🛠 Military Enclosures', '🔒 Secure Defence Cabinets', '📦 Ammunition Storage Units',
//         '🧱 Protective Barriers', '🧰 Tactical Toolkits', '🎯 Guidance System Housings', '🧪 Aerospace Testing Fixtures'
//       ]
//     },
//     {
//       id: 'auto',
//       name: 'Automotive & EV',
//       icon: '🚗',
//       count: 25,
//       items: [
//         '🚗 EV Battery Enclosures', '🔋 Battery Cooling Plates', '🚙 Chassis Reinforcement', '⚙ Exhaust Systems',
//         '🔧 Engine Components', '🛞 Brake System Parts', '🚘 Structural Mounts', '🔩 Precision Washers',
//         '🚖 Automotive Fasteners', '🚚 Truck Body Frames', '🛠 Fuel System Components', '🔌 EV Charging Cabinets',
//         '🧲 Motor Casings', '🧰 Tool Storage Units', '🚦 Road Safety Barriers', '🛻 Load Body Structures',
//         '⚡ Electric Bus Panels', '🚐 Transport Interior Panels', '🔩 Suspension Components', '🛠 Automotive Fixtures',
//         '📦 Logistics Containers', '🔒 Locking Systems', '🧱 Structural Supports', '🚧 Crash Protection Panels',
//         '⚙ Transmission Housings'
//       ]
//     },
//     {
//       id: 'infra',
//       name: 'Infrastructure & Architecture',
//       icon: '🏢',
//       count: 30,
//       items: [
//         '🏢 Building Facades', '🚪 Elevator Panels', '🪜 Staircase Railings', '🧱 Structural Cladding',
//         '🏗 Bridge Components', '🛗 Escalator Panels', '🪟 Window Frames', '🚧 Highway Barriers',
//         '🏛 Decorative Columns', '🚿 Bathroom Fixtures', '🚰 Water Tanks', '🚪 Fire-Rated Doors',
//         '🛑 Safety Railings', '🏙 Metro Stations', '🪑 Public Seating', '🧰 Utility Cabinets',
//         '🏭 Industrial Roofing', '🛠 Structural Frames', '🧱 Interior Partitions', '🚧 Construction Supports',
//         '🏬 Mall Installations', '🛤 Railway Platforms', '🏟 Stadium Structures', '🏗 Structural Beams',
//         '🧲 Anti-Corrosion Frames', '🪞 Architectural Screens', '🧱 Balustrades', '🚪 Security Gates',
//         '🛠 Door Hardware', '🏢 Commercial Panels'
//       ]
//     },
//     {
//       id: 'food',
//       name: 'Food & Beverage Industry',
//       icon: '🥛',
//       count: 25,
//       items: [
//         '🥛 Dairy Processing Tanks', '🍺 Brewing Equipment', '🥫 Food Storage Silos', '🍴 Commercial Kitchen Tables',
//         '🍳 Industrial Cookers', '🥩 Meat Processing Lines', '🧊 Cold Storage Racks', '🥤 Beverage Filling Lines',
//         '🍫 Confectionery Machines', '🍞 Bakery Equipment', '🍚 Rice Processing Units', '🍲 Catering Equipment',
//         '🧃 Juice Processing Systems', '🥣 Mixing Vessels', '🧴 Sanitary Fittings', '🧽 Hygienic Surfaces',
//         '🚰 Water Purification Units', '🧂 Packaging Lines', '🍜 Noodle Production Lines', '🍟 Frying Equipment',
//         '🧪 Food Testing Labs', '🧴 Bottling Plants', '🥫 Canning Systems', '🛠 Conveyor Frames',
//         '📦 Food Transport Trolleys'
//       ]
//     },
//     {
//       id: 'pharma',
//       name: 'Pharmaceutical & Medical',
//       icon: '💊',
//       count: 25,
//       items: [
//         '💊 Clean Room Panels', '🧪 Laboratory Benches', '🏥 Surgical Tables', '🩺 Hospital Trolleys',
//         '🧴 Sterilization Units', '🧫 Biotech Reactors', '💉 Syringe Production Lines', '🧬 Diagnostic Equipment Frames',
//         '🛠 Medical Cabinets', '🧯 Oxygen Cylinders', '🧪 Testing Chambers', '🔬 Analytical Equipment',
//         '🚑 Ambulance Interiors', '🧴 Sanitization Systems', '🧪 Research Lab Equipment', '🧲 MRI Support Structures',
//         '💺 Hospital Furniture', '🛠 ICU Equipment Frames', '🧴 Pharma Mixing Tanks', '🧪 Tablet Press Machines',
//         '🩻 Imaging Device Housing', '🧴 Drug Storage Units', '🛡 Clean Environment Barriers', '🧰 Surgical Instrument Trays',
//         '🧪 Vaccine Storage Units'
//       ]
//     },
//     {
//       id: 'oil',
//       name: 'Oil, Gas & Chemical',
//       icon: '🛢️',
//       count: 30,
//       items: [
//         '🛢 Storage Tanks', '⚙ Pressure Vessels', '🧪 Chemical Reactors', '🛠 Pipeline Systems',
//         '⚡ Refinery Equipment', '🧯 Gas Handling Systems', '🛢 Offshore Platforms', '🧪 Mixing Columns',
//         '🧲 Corrosion Resistant Panels', '⚙ Heat Exchangers', '🔧 Pump Casings', '🛠 Valve Bodies',
//         '🧪 Distillation Columns', '🧱 Structural Supports', '🛢 LPG Cylinders', '🧰 Instrumentation Panels',
//         '⚡ Petrochemical Units', '🧪 Processing Frames', '🛠 Drilling Equipment', '🧲 Safety Shields',
//         '🧯 Hazardous Storage Units', '🧪 Chemical Storage Drums', '🛢 Transport Containers', '⚙ Compressor Units',
//         '🧱 Fire Protection Systems', '🛠 Refinery Platforms', '🧪 Industrial Reactors', '⚡ Turbine Casings',
//         '🛠 Flow Control Systems', '🧯 Explosion-Proof Enclosures'
//       ]
//     },
//     {
//       id: 'machinery',
//       name: 'Industrial Machinery & Automation',
//       icon: '⚙️',
//       count: 40,
//       items: [
//         '⚙ Machine Frames', '🤖 Robotic Arms', '🔩 CNC Machine Bodies', '🛠 Assembly Line Tables',
//         '🧲 Control Cabinets', '⚡ Electrical Enclosures', '📦 Conveyor Systems', '🔧 Gear Housings',
//         '⚙ Industrial Rollers', '🛠 Tooling Fixtures', '🔩 Fastening Systems', '🧰 Storage Racks',
//         '⚙ Press Machines', '🧱 Load Bearing Structures', '🤖 Automation Platforms', '🛠 Material Handling Systems',
//         '⚙ Hydraulic Systems', '🧲 Motor Frames', '🛠 Cutting Machines', '🔧 Calibration Equipment',
//         '⚡ Control Panels', '🛠 Workstations', '🧰 Maintenance Units', '⚙ Fabrication Lines',
//         '🔩 Structural Mounting Systems', '🤖 Robotic Welding Cells', '🧱 Precision Tables', '🛠 Industrial Cabinets',
//         '⚡ Power Distribution Units', '🧰 Mechanical Fixtures', '⚙ Manufacturing Modules', '🔧 Laser Cutting Frames',
//         '🤖 Sensor Mounting Frames', '🧱 Structural Supports', '⚙ Rolling Mills', '🔩 Punching Systems',
//         '🛠 Shearing Equipment', '⚡ Industrial Switchboards', '🧲 Cable Management Systems', '🧰 Automation Racks'
//       ]
//     },
//     {
//       id: 'marine',
//       name: 'Marine & Shipbuilding',
//       icon: '🚢',
//       count: 20,
//       items: [
//         '🚢 Ship Hull Components', '⚓ Marine Railings', '🛥 Deck Structures', '🛠 Propulsion Components',
//         '🧭 Navigation Equipment Frames', '⚙ Engine Parts', '🧲 Anti-Corrosion Panels', '🛢 Marine Storage Tanks',
//         '🚢 Port Equipment', '🧯 Safety Equipment Frames', '⚓ Dock Installations', '🛠 Offshore Equipment',
//         '🧲 Marine Fasteners', '🚤 Boat Interior Panels', '🧱 Structural Frames', '🛠 Coastal Installations',
//         '⚙ Pump Systems', '🚢 Marine Enclosures', '🧲 Stainless Anchors', '🛠 Ship Maintenance Tools'
//       ]
//     },
//     {
//       id: 'consumer',
//       name: 'Consumer & Household',
//       icon: '🏠',
//       count: 30,
//       items: [
//         '🍽 Kitchen Utensils', '🥄 Cutlery', '🧴 Storage Containers', '🚿 Bathroom Fittings',
//         '🚪 Door Handles', '🪑 Furniture Frames', '🛏 Bed Structures', '🧰 Tool Boxes',
//         '🧲 Decorative Panels', '🧊 Refrigeration Units', '🧺 Washing Machine Drums', '🧴 Water Bottles',
//         '🍳 Cookware', '🧂 Spice Containers', '🪟 Window Grills', '🚪 Locks & Hardware',
//         '🛠 Home Appliances', '🧰 Storage Cabinets', '🧲 Modular Kitchens', '🛋 Interior Decor Panels',
//         '🧴 Bathroom Accessories', '🧰 Utility Racks', '🛠 Lighting Fixtures', '🚿 Shower Systems',
//         '🧱 Stair Railings', '🧴 Laundry Systems', '🧰 Shelving Units', '🛠 Furniture Hardware',
//         '🧲 Balcony Railings', '🧰 Household Tools'
//       ]
//     }
//   ];

//   const selectedGradeData = materialGrades.find(grade => grade.code === selectedGrade);

//   const toggleCategory = (categoryId) => {
//     setExpandedCategory(expandedCategory === categoryId ? null : categoryId);
//   };

//   // Pause/resume marquee on hover
//   const handleMouseEnter = (id) => {
//     if (marqueeRefs.current[id]) {
//       marqueeRefs.current[id].style.animationPlayState = 'paused';
//     }
//   };

//   const handleMouseLeave = (id) => {
//     if (marqueeRefs.current[id]) {
//       marqueeRefs.current[id].style.animationPlayState = 'running';
//     }
//   };

//   return (
//     <div className="min-h-screen bg-linear-to-b from-white to-slate-50 p-4 md:p-8">
//       <div className="max-w-7xl mx-auto">
//         {/* Animated Header */}
//         <motion.div
//           initial={{ opacity: 0, y: -30 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.7, type: "spring" }}
//           className="mb-12"
//         >
//           <div className="relative">
//             <div className="absolute -top-4 -left-4 w-20 h-20 bg-linear-to-r from-blue-500/10 to-cyan-400/10 rounded-full blur-xl" />
//             <h1 className="relative text-5xl md:text-6xl font-light text-slate-800 mb-3 tracking-tight">
//               Stainless Steel Sheets
//             </h1>
//           </div>
//           <p className="text-gray-600 text-lg max-w-3xl">
//             Premium quality stainless steel sheets engineered for industrial excellence and architectural precision.
//           </p>
//         </motion.div>

//         {/* Value-Added Processing Services Section */}
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ delay: 0.1 }}
//           className="mb-12 bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden"
//         >
//           <div className="p-8">
//             <h2 className="text-3xl font-semibold text-slate-800 mb-6">Our Value-Added Stainless Steel Processing Services</h2>
//             <div className="prose prose-lg text-gray-600 space-y-4">
//               <p>
//                 Matrix Metals LLP operates as a specialised stainless steel conversion and surface engineering facility. We do not position ourselves as material traders — we function as a structured processing partner delivering engineered transformation of mill-origin stainless steel coils into application-ready substrates.
//               </p>
//               <p>
//                 Our operations are designed for manufacturers who require dimensional precision, surface refinement, and process-controlled execution under defined industrial standards.
//               </p>
//               <p>
//                 We provide advanced coil-to-coil and sheet processing services across all stainless steel grades supplied by our customers. Each project is executed under calibrated mechanical parameters to ensure width accuracy, flatness stability, burr control, and surface consistency. Whether the requirement involves narrow precision strips or flatness-critical sheets, our processing discipline ensures repeatability and structural integrity.
//               </p>
//               <p>
//                 Our surface engineering capabilities include continuous No.4 finishing, industrial degreasing, hot wash conditioning, UV surface treatment, protective film lamination, interleaving paper integration, and tension levelling. These services enhance surface readiness, improve fabrication performance, and minimise downstream operational risk. Every metre processed undergoes structured validation before dispatch.
//               </p>
//               <p>
//                 Through contract processing and job work services, we support OEMs, fabricators, exporters, and automation-driven manufacturers seeking to outsource technically sensitive operations. Our facility functions as an extension of our clients’ production lines — delivering precision conversion without compromising confidentiality, traceability, or quality governance.
//               </p>
//               <p>
//                 Matrix Metals LLP delivers measurable value through engineered accuracy, controlled surface refinement, and disciplined execution. Our strength lies in transforming stainless steel into performance-optimised material — prepared, validated, and structured for demanding industrial integration.
//               </p>
//             </div>
//           </div>
//         </motion.div>

//         {/* Main Content Grid */}
//         <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
//           {/* Left Column - Specifications */}
//           <motion.div
//             initial={{ opacity: 0, x: -30 }}
//             animate={{ opacity: 1, x: 0 }}
//             transition={{ delay: 0.2 }}
//             className="lg:col-span-2 space-y-8"
//           >
//             {/* Material Grades Card */}
//             <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100 overflow-hidden">
//               <div className="p-8">
//                 <div className="flex items-center gap-4 mb-8">
//                   <div className="p-3 bg-linear-to-r from-blue-500 to-cyan-400 rounded-xl">
//                     <Layers className="h-6 w-6 text-white" />
//                   </div>
//                   <div>
//                     <h2 className="text-2xl font-semibold text-slate-800">Material Grades</h2>
//                     <p className="text-gray-500 text-sm">Select grade for detailed information</p>
//                   </div>
//                 </div>
                
//                 <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
//                   {materialGrades.map((grade) => (
//                     <motion.div
//                       key={grade.code}
//                       whileHover={{ y: -3 }}
//                       whileTap={{ scale: 0.98 }}
//                       onClick={() => setSelectedGrade(grade.code)}
//                       className={`relative cursor-pointer rounded-xl p-4 transition-all duration-300 ${
//                         selectedGrade === grade.code
//                           ? "bg-linear-to-r from-slate-700 to-slate-600 text-white shadow-lg"
//                           : `bg-linear-to-br ${grade.color} hover:shadow-md`
//                       }`}
//                     >
//                       <div className="text-center">
//                         <span className="text-2xl font-bold block mb-1">{grade.code}</span>
//                         {selectedGrade === grade.code && (
//                           <motion.div
//                             initial={{ scale: 0 }}
//                             animate={{ scale: 1 }}
//                             className="absolute -top-2 -right-2"
//                           >
//                             <CheckCircle className="h-5 w-5 text-green-400" />
//                           </motion.div>
//                         )}
//                       </div>
//                     </motion.div>
//                   ))}
//                 </div>
                
//                 {/* Selected Grade Information */}
//                 <AnimatePresence mode="wait">
//                   {selectedGradeData && (
//                     <motion.div
//                       key={selectedGrade}
//                       initial={{ opacity: 0, height: 0 }}
//                       animate={{ opacity: 1, height: "auto" }}
//                       exit={{ opacity: 0, height: 0 }}
//                       className="bg-linear-to-r from-slate-50 to-gray-50 rounded-xl p-6 border border-gray-200"
//                     >
//                       <div className="flex items-center justify-between mb-4">
//                         <h3 className="text-lg font-semibold text-slate-800">
//                           Grade {selectedGradeData.code} Details
//                         </h3>
//                         <span className="text-sm text-gray-500 px-3 py-1 bg-white rounded-full border border-gray-200">
//                           Selected
//                         </span>
//                       </div>
//                       <p className="text-gray-600 mb-4">{selectedGradeData.description}</p>
//                       <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
//                         <div className="flex items-center gap-2">
//                           <Thermometer className="h-4 w-4 text-blue-500" />
//                           <span className="text-gray-700">High Temp Resistant</span>
//                         </div>
//                         <div className="flex items-center gap-2">
//                           <Droplets className="h-4 w-4 text-blue-500" />
//                           <span className="text-gray-700">Corrosion Resistant</span>
//                         </div>
//                         <div className="flex items-center gap-2">
//                           <Shield className="h-4 w-4 text-blue-500" />
//                           <span className="text-gray-700">Durable</span>
//                         </div>
//                         <div className="flex items-center gap-2">
//                           <Clock className="h-4 w-4 text-blue-500" />
//                           <span className="text-gray-700">Long Lifespan</span>
//                         </div>
//                       </div>
//                     </motion.div>
//                   )}
//                 </AnimatePresence>
//               </div>
//             </div>

//             {/* Dimensions & Availability Card */}
//             <motion.div
//               initial={{ opacity: 0, x: -30 }}
//               animate={{ opacity: 1, x: 0 }}
//               transition={{ delay: 0.3 }}
//               className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100 overflow-hidden"
//             >
//               <div className="p-8">
//                 <div className="flex items-center gap-4 mb-8">
//                   <div className="p-3 bg-linear-to-r from-emerald-500 to-teal-400 rounded-xl">
//                     <Ruler className="h-6 w-6 text-white" />
//                   </div>
//                   <div>
//                     <h2 className="text-2xl font-semibold text-slate-800">Dimensions & Availability</h2>
//                     <p className="text-gray-500 text-sm">Standard sizes and custom options</p>
//                   </div>
//                 </div>

//                 <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
//                   {/* Dimensions */}
//                   <div>
//                     <h3 className="font-semibold text-slate-700 mb-6 text-lg flex items-center gap-2">
//                       <Calendar className="h-5 w-5 text-emerald-500" />
//                       Standard Dimensions
//                     </h3>
//                     <div className="space-y-4">
//                       {dimensions.map((dim, index) => (
//                         <motion.div
//                           key={index}
//                           initial={{ opacity: 0, x: -10 }}
//                           animate={{ opacity: 1, x: 0 }}
//                           transition={{ delay: index * 0.1 }}
//                           whileHover={{ x: 5 }}
//                           className="p-4 rounded-xl border border-gray-200 hover:border-emerald-200 hover:bg-emerald-50/30 transition-all duration-300"
//                         >
//                           <div className="flex items-center justify-between mb-2">
//                             <span className="font-medium text-slate-800">{dim.size}</span>
//                             <span className={`text-xs px-2 py-1 rounded-full ${dim.standard ? 'bg-emerald-100 text-emerald-700' : 'bg-blue-100 text-blue-700'}`}>
//                               {dim.availability}
//                             </span>
//                           </div>
//                           {dim.standard ? (
//                             <div className="flex items-center gap-2 text-sm text-gray-500">
//                               <Package className="h-3 w-3" />
//                               <span>Ready for immediate dispatch</span>
//                             </div>
//                           ) : (
//                             <div className="flex items-center gap-2 text-sm text-gray-500">
//                               <Factory className="h-3 w-3" />
//                               <span>Custom manufacturing available</span>
//                             </div>
//                           )}
//                         </motion.div>
//                       ))}
//                     </div>
//                   </div>

//                   {/* Thickness Options */}
//                   <div>
//                     <h3 className="font-semibold text-slate-700 mb-6 text-lg flex items-center gap-2">
//                       <Layers className="h-5 w-5 text-emerald-500" />
//                       Thickness Range
//                     </h3>
//                     <div className="space-y-4">
//                       {thicknessOptions.map((option, index) => (
//                         <motion.div
//                           key={index}
//                           initial={{ opacity: 0, x: -10 }}
//                           animate={{ opacity: 1, x: 0 }}
//                           transition={{ delay: index * 0.1 + 0.2 }}
//                           className="p-4 rounded-xl border border-gray-200 hover:border-emerald-200 transition-all duration-300"
//                         >
//                           <div className="flex items-center justify-between mb-2">
//                             <span className="font-medium text-slate-800">{option.range}</span>
//                             {option.common && (
//                               <span className="text-xs px-2 py-1 bg-emerald-100 text-emerald-700 rounded-full">
//                                 Most Common
//                               </span>
//                             )}
//                           </div>
//                           <p className="text-sm text-gray-600">{option.applications}</p>
//                         </motion.div>
//                       ))}
//                     </div>
                    
//                     {/* Custom Options Toggle */}
//                     <motion.div
//                       initial={{ opacity: 0, y: 10 }}
//                       animate={{ opacity: 1, y: 0 }}
//                       transition={{ delay: 0.5 }}
//                       className="mt-6"
//                     >
//                       <motion.button
//                         whileHover={{ scale: 1.02 }}
//                         whileTap={{ scale: 0.98 }}
//                         onClick={() => setShowCustomOptions(!showCustomOptions)}
//                         className="w-full py-3 bg-linear-to-r from-slate-50 to-gray-100 text-slate-700 rounded-xl hover:from-slate-100 hover:to-gray-200 transition-all duration-300 flex items-center justify-center gap-2 border border-gray-200"
//                       >
//                         <span>Custom Requirements</span>
//                         <ChevronRight className={`h-4 w-4 transform transition-transform ${showCustomOptions ? 'rotate-90' : ''}`} />
//                       </motion.button>
                      
//                       <AnimatePresence>
//                         {showCustomOptions && (
//                           <motion.div
//                             initial={{ opacity: 0, height: 0 }}
//                             animate={{ opacity: 1, height: "auto" }}
//                             exit={{ opacity: 0, height: 0 }}
//                             className="mt-4 bg-linear-to-r from-blue-50 to-cyan-50 rounded-xl p-4 border border-blue-200"
//                           >
//                             <p className="text-sm text-blue-800 mb-2">
//                               Special dimensions, custom finishes, and unique requirements available upon request.
//                             </p>
//                             <button className="text-sm text-blue-600 hover:text-blue-700 font-medium">
//                               Contact for custom quotation →
//                             </button>
//                           </motion.div>
//                         )}
//                       </AnimatePresence>
//                     </motion.div>
//                   </div>
//                 </div>
//               </div>
//             </motion.div>
//           </motion.div>

//           {/* Right Column - Product Details & Applications Overview */}
//           <motion.div
//             initial={{ opacity: 0, x: 30 }}
//             animate={{ opacity: 1, x: 0 }}
//             transition={{ delay: 0.4 }}
//             className="space-y-8"
//           >
//             {/* Product Details Card */}
//             <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100 overflow-hidden">
//               <div className="p-8">
//                 <div className="mb-8">
//                   <h2 className="text-2xl font-semibold text-slate-800 mb-3">Product Details</h2>
//                   <div className="h-1 w-12 bg-linear-to-r from-slate-600 to-slate-400 rounded-full"></div>
//                 </div>

//                 <div className="space-y-6">
//                   {/* Product Code */}
//                   <div>
//                     <h3 className="font-semibold text-slate-700 mb-3">Product Identification</h3>
//                     <div className="bg-linear-to-r from-slate-800 to-slate-700 text-white p-4 rounded-xl font-mono text-center">
//                       MX: 2B/BA Mill Finish
//                     </div>
//                   </div>

//                   {/* Finishes */}
//                   <div>
//                     <h3 className="font-semibold text-slate-700 mb-3">Available Finishes</h3>
//                     <div className="space-y-3">
//                       {finishes.map((finish, index) => (
//                         <motion.div
//                           key={index}
//                           initial={{ opacity: 0, y: 10 }}
//                           animate={{ opacity: 1, y: 0 }}
//                           transition={{ delay: index * 0.1 }}
//                           whileHover={{ x: 5 }}
//                           className={`p-3 rounded-lg border border-gray-200 ${finish.color}`}
//                         >
//                           <div className="flex items-center justify-between">
//                             <span className="font-medium text-slate-800">{finish.name}</span>
//                             {index < 2 && (
//                               <CheckCircle className="h-4 w-4 text-emerald-500" />
//                             )}
//                           </div>
//                           <p className="text-sm text-gray-600 mt-1">{finish.description}</p>
//                         </motion.div>
//                       ))}
//                     </div>
//                   </div>

//                   {/* Specifications */}
//                   <div className="grid grid-cols-2 gap-4">
//                     <div className="p-4 rounded-xl bg-linear-to-br from-slate-50 to-gray-50 border border-gray-200">
//                       <h4 className="text-sm text-gray-500 mb-1">Surface Color</h4>
//                       <p className="font-medium text-slate-800">Mill Finish</p>
//                     </div>
//                     <div className="p-4 rounded-xl bg-linear-to-br from-slate-50 to-gray-50 border border-gray-200">
//                       <h4 className="text-sm text-gray-500 mb-1">Thickness Range</h4>
//                       <p className="font-medium text-slate-800">0.40 - 20.00 mm</p>
//                     </div>
//                   </div>
//                 </div>

//                 {/* Datasheet Section */}
//                 <div className="mt-8 pt-8 border-t border-gray-200">
//                   <h3 className="font-semibold text-slate-700 mb-4">Technical Documentation</h3>
//                   <div className="bg-linear-to-r from-slate-50 to-gray-100 rounded-xl p-6 border border-gray-200">
//                     <p className="text-gray-600 mb-6 text-sm leading-relaxed">
//                       Datasheet MX: 2B/BA Mill Finish. We supply stainless steel sheets as per our catalogue. 
//                       Any minor colour difference and brightness variation may occur due to material characteristics.
//                     </p>
//                   </div>
//                 </div>
//               </div>
//             </div>

//             {/* Applications Overview Card (kept simple) */}
//             <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100 overflow-hidden">
//               <div className="p-8">
//                 <div className="mb-8">
//                   <h2 className="text-2xl font-semibold text-slate-800 mb-3">Key Applications</h2>
//                   <div className="h-1 w-12 bg-linear-to-r from-emerald-500 to-teal-400 rounded-full"></div>
//                 </div>

//                 <div className="space-y-3">
//                   {quickApplications.map((app, index) => (
//                     <motion.div
//                       key={index}
//                       initial={{ opacity: 0, x: -10 }}
//                       animate={{ opacity: 1, x: 0 }}
//                       transition={{ delay: index * 0.03 }}
//                       whileHover={{ x: 5, backgroundColor: "#f8fafc" }}
//                       className="flex items-center gap-4 p-3 rounded-xl hover:bg-slate-50 transition-all duration-300 cursor-pointer group"
//                     >
//                       <div className="text-2xl group-hover:scale-110 transition-transform duration-300">
//                         {app.icon}
//                       </div>
//                       <span className="text-gray-700 font-medium group-hover:text-slate-900 transition-colors">
//                         {app.name}
//                       </span>
//                     </motion.div>
//                   ))}
//                 </div>
//               </div>
//             </div>
//           </motion.div>
//         </div>

//         {/* Quality Assurance Section */}
//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.6 }}
//           className="mt-12"
//         >
//           <div className="bg-linear-to-r from-blue-50 to-cyan-50 rounded-2xl p-8 border border-blue-200">
//             <div className="flex items-start gap-6">
//               <div className="p-3 bg-linear-to-r from-blue-500 to-cyan-400 rounded-xl">
//                 <Shield className="h-8 w-8 text-white" />
//               </div>
//               <div className="flex-1">
//                 <h3 className="text-2xl font-semibold text-slate-800 mb-3">Quality Assurance</h3>
//                 <div className="prose text-gray-700 space-y-4">
//                   <p>
//                     At Matrix Metals LLP, quality assurance is not a concluding activity — it is an integrated operational framework. Every stage of our coil-to-coil processing and surface engineering operations is governed by defined parameters, calibrated systems, and measurable validation standards. Precision is embedded within the process architecture to ensure consistency, repeatability, and technical conformity.
//                   </p>
//                   <p>
//                     Our quality control methodology begins at material intake and continues through slitting, levelling, surface treatment, lamination, and final dispatch. In-line dimensional monitoring ensures strict adherence to width tolerances, burr limits, camber control, and flatness stability. Surface conformity is assessed through structured inspection protocols to prevent deviation in cosmetic or structural performance.
//                   </p>
//                   <p>
//                     Process discipline is reinforced through documented operating thresholds and traceable batch identification systems. Each production lot is mapped to defined processing parameters, ensuring accountability and technical transparency. This structured traceability enables reliable performance tracking across repeat orders and long-term supply cycles.
//                   </p>
//                   <p>
//                     We operate under the principle that variability must be eliminated at source. Blade alignment, tension calibration, levelling pressure, and surface treatment parameters are routinely verified to maintain operational stability. Preventive maintenance and periodic system calibration ensure sustained accuracy across extended production runs.
//                   </p>
//                   <p>
//                     Matrix Metals LLP delivers stainless steel processing with engineered certainty. Our quality assurance framework is built to support industries where dimensional precision, surface integrity, and execution reliability are non-negotiable. Through disciplined governance and measurable validation, we provide confidence in every metre processed.
//                   </p>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </motion.div>

//         {/* Comprehensive Applications by Industry - Click to Expand Continuous Marquee */}
//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.6, delay: 0.2 }}
//           className="mt-12"
//         >
//           <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden">
//             <div className="p-8">
//               <h2 className="text-3xl font-semibold text-slate-800 mb-4">300+ Industrial & Commercial Use Cases</h2>
//               <p className="text-gray-600 mb-8">Click on any category to reveal a continuous scrolling loop of applications. Hover to pause.</p>
              
//               <div className="space-y-4">
//                 {applicationCategories.map((category) => (
//                   <div key={category.id} className="border border-gray-200 rounded-xl overflow-hidden">
//                     {/* Category Header - Click to toggle */}
//                     <motion.div
//                       whileHover={{ scale: 1.01 }}
//                       whileTap={{ scale: 0.99 }}
//                       onClick={() => toggleCategory(category.id)}
//                       className="flex items-center justify-between p-5 bg-gray-50 hover:bg-gray-100 transition-colors cursor-pointer"
//                     >
//                       <div className="flex items-center gap-4">
//                         <span className="text-3xl">{category.icon}</span>
//                         <div className="text-left">
//                           <h3 className="text-xl font-semibold text-slate-800">{category.name}</h3>
//                           <p className="text-sm text-gray-500">{category.count} Applications</p>
//                         </div>
//                       </div>
//                       {expandedCategory === category.id ? (
//                         <ChevronUp className="h-5 w-5 text-gray-500" />
//                       ) : (
//                         <ChevronDown className="h-5 w-5 text-gray-500" />
//                       )}
//                     </motion.div>

//                     {/* Expanded Continuous Scrolling Marquee */}
//                     <AnimatePresence>
//                       {expandedCategory === category.id && (
//                         <motion.div
//                           initial={{ opacity: 0, height: 0 }}
//                           animate={{ opacity: 1, height: 'auto' }}
//                           exit={{ opacity: 0, height: 0 }}
//                           transition={{ duration: 0.3 }}
//                           className="border-t border-gray-200 overflow-hidden"
//                         >
//                           <div 
//                             className="relative w-full overflow-x-hidden py-6 bg-gradient-to-r from-slate-50 via-white to-slate-50"
//                             onMouseEnter={() => handleMouseEnter(category.id)}
//                             onMouseLeave={() => handleMouseLeave(category.id)}
//                           >
//                             {/* Continuous Marquee Content */}
//                             <div
//                               ref={el => marqueeRefs.current[category.id] = el}
//                               className="flex whitespace-nowrap animate-marquee"
//                               style={{
//                                 animation: 'marquee 40s linear infinite',
//                               }}
//                             >
//                               {/* Double the items for seamless loop */}
//                               {[...category.items, ...category.items].map((item, idx) => {
//                                 const icon = item.split(' ')[0];
//                                 const text = item.substring(2);
//                                 return (
//                                   <div
//                                     key={idx}
//                                     className="inline-flex items-center gap-4 mx-4 px-6 py-3 bg-white rounded-xl shadow-sm border border-gray-100"
//                                   >
//                                     <span className="text-4xl">{icon}</span>
//                                     <span className="text-gray-700 font-medium whitespace-normal min-w-[200px]">{text}</span>
//                                   </div>
//                                 );
//                               })}
//                             </div>
//                           </div>
//                         </motion.div>
//                       )}
//                     </AnimatePresence>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           </div>
//         </motion.div>

//         {/* Add CSS animation for marquee */}
//         <style jsx>{`
//           @keyframes marquee {
//             0% { transform: translateX(0); }
//             100% { transform: translateX(-50%); }
//           }
//           .animate-marquee {
//             animation: marquee 40s linear infinite;
//             width: fit-content;
//           }
//         `}</style>
//       </div>
//     </div>
//   );
// };

// export default StainlessSteelSheets;















































// import { useState, useRef } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import { 
//   CheckCircle, Download, Package, Ruler, Layers, Factory, 
//   ChevronRight, Thermometer, Droplets, Shield, Clock, Calendar,
//   ChevronDown, ChevronUp, Scissors, Sparkles, ShieldCheck, Zap, Award,
//   ArrowRight, Star
// } from 'lucide-react';

// const StainlessSteelSheets = () => {
//   const [selectedGrade, setSelectedGrade] = useState("304");
//   const [showCustomOptions, setShowCustomOptions] = useState(false);
//   const [expandedCategory, setExpandedCategory] = useState(null);
//   const marqueeRefs = useRef({});

//   const materialGrades = [
//     { 
//       code: '202', 
//       description: 'Economical austenitic grade with good corrosion resistance', 
//       color: 'from-amber-500 to-orange-400',
//       accent: 'amber',
//       corrosion: 'Good',
//       weldability: 'Excellent',
//       maxTemp: '800°C',
//       highlight: 'Cost-effective choice'
//     },
//     { 
//       code: '304', 
//       description: 'The industry standard austenitic stainless steel', 
//       color: 'from-cyan-500 to-blue-500',
//       accent: 'cyan',
//       corrosion: 'Excellent',
//       weldability: 'Excellent',
//       maxTemp: '870°C',
//       highlight: 'Most versatile grade'
//     },
//     { 
//       code: '304L', 
//       description: 'Low-carbon version of 304 for superior weldability', 
//       color: 'from-emerald-500 to-teal-500',
//       accent: 'emerald',
//       corrosion: 'Excellent',
//       weldability: 'Outstanding',
//       maxTemp: '850°C',
//       highlight: 'Welding specialist'
//     },
//     { 
//       code: '316', 
//       description: 'Molybdenum-enhanced for superior pitting resistance', 
//       color: 'from-violet-500 to-purple-500',
//       accent: 'violet',
//       corrosion: 'Outstanding',
//       weldability: 'Excellent',
//       maxTemp: '870°C',
//       highlight: 'Marine & chemical king'
//     },
//     { 
//       code: '316L', 
//       description: 'Low-carbon 316 for heavy fabrication & welding', 
//       color: 'from-fuchsia-500 to-pink-500',
//       accent: 'fuchsia',
//       corrosion: 'Outstanding',
//       weldability: 'Outstanding',
//       maxTemp: '850°C',
//       highlight: 'Best for heavy welds'
//     },
//     { 
//       code: '321', 
//       description: 'Titanium-stabilized for high-temperature service', 
//       color: 'from-orange-500 to-amber-500',
//       accent: 'orange',
//       corrosion: 'Very Good',
//       weldability: 'Excellent',
//       maxTemp: '925°C',
//       highlight: 'High-heat champion'
//     },
//     { 
//       code: '430', 
//       description: 'Ferritic grade with excellent formability & magnetism', 
//       color: 'from-zinc-500 to-slate-500',
//       accent: 'slate',
//       corrosion: 'Moderate',
//       weldability: 'Good',
//       maxTemp: '815°C',
//       highlight: 'Magnetic applications'
//     },
//     { 
//       code: '441', 
//       description: 'Dual-stabilized ferritic for elevated temperature', 
//       color: 'from-rose-500 to-red-400',
//       accent: 'rose',
//       corrosion: 'Good',
//       weldability: 'Very Good',
//       maxTemp: '950°C',
//       highlight: 'Exhaust systems'
//     }
//   ];

//   const processingServices = [
//     {
//       icon: Scissors,
//       title: "Precision Slitting",
//       desc: "10 mm – 1520 mm width • ±0.10 mm tolerance • Burr-free edges",
//       color: "from-cyan-400 to-blue-500"
//     },
//     {
//       icon: Ruler,
//       title: "Tension Levelling",
//       desc: "Laser-flat sheets • < 3 I-unit flatness • Ready for CNC",
//       color: "from-emerald-400 to-teal-500"
//     },
//     {
//       icon: Sparkles,
//       title: "Premium Finishing",
//       desc: "2B • BA • No.4 • HL • Mirror • Vibration • Etched",
//       color: "from-violet-400 to-purple-500"
//     },
//     {
//       icon: ShieldCheck,
//       title: "Protective Solutions",
//       desc: "Laser film • PVC • Paper interleaving • VCI coating",
//       color: "from-amber-400 to-orange-500"
//     },
//     {
//       icon: Zap,
//       title: "Surface Engineering",
//       desc: "Ultrasonic degreasing • UV passivation • Anti-fingerprint",
//       color: "from-rose-400 to-pink-500"
//     }
//   ];

//   const quickApplications = [
//     { icon: '🍺', name: 'Breweries & Distilleries' },
//     { icon: '🥛', name: 'Dairy & Food Processing' },
//     { icon: '💊', name: 'Pharmaceutical Machinery' },
//     { icon: '⚡', name: 'Electrical Enclosures' },
//     { icon: '🪑', name: 'Architectural Facades' },
//     { icon: '🔪', name: 'Commercial Kitchens' },
//     { icon: '🚢', name: 'Marine & Offshore' },
//     { icon: '✈️', name: 'Aerospace & EV' }
//   ];

//   const dimensions = [
//     { size: '1250 × 2500 mm', stock: 'In Stock • 48 hrs' },
//     { size: '1500 × 3000 mm', stock: 'In Stock • 24 hrs' },
//     { size: '1520 × 4000 mm', stock: 'Premium • 72 hrs' },
//     { size: 'Custom', stock: 'On demand' }
//   ];

//   const applicationCategories = [
//     {
//       id: 'aero',
//       name: 'Aerospace & Defence',
//       icon: '✈️',
//       count: 28,
//       color: 'from-sky-400 to-indigo-500',
//       items: [
//         'Aircraft Floor Panels', 'Jet Engine Heat Shields', 'Helicopter Cargo Doors', 'Missile Casings',
//         'Satellite Frames', 'Radar Enclosures', 'Armoured Vehicle Liners', 'Drone Chassis',
//         'Landing Gear Covers', 'Cockpit Instrument Panels'
//       ]
//     },
//     // ... (kept all categories but shortened items list for brevity in this response)
//     {
//       id: 'auto',
//       name: 'Automotive & EV',
//       icon: '🚗',
//       count: 32,
//       color: 'from-emerald-400 to-cyan-500',
//       items: [
//         'EV Battery Trays', 'Chassis Brackets', 'Exhaust Heat Shields', 'Charging Station Bodies',
//         'Structural Crash Beams', 'Motor Housings', 'Suspension Arms', 'Body Side Panels'
//       ]
//     },
//     {
//       id: 'infra',
//       name: 'Architecture & Infrastructure',
//       icon: '🏙️',
//       count: 35,
//       color: 'from-amber-400 to-orange-500',
//       items: [
//         'Curtain Wall Panels', 'Elevator Cabins', 'Staircase Cladding', 'Bridge Deck Liners',
//         'Metro Station Facades', 'Highway Sound Barriers', 'Railing Systems', 'Canopy Structures'
//       ]
//     },
//     {
//       id: 'food',
//       name: 'Food & Beverage',
//       icon: '🍽️',
//       count: 30,
//       color: 'from-lime-400 to-green-500',
//       items: [
//         'Dairy Pasteurizers', 'Brewery Fermenters', 'Commercial Kitchen Sinks', 'Conveyor Belts',
//         'Hygienic Wall Cladding', 'Storage Silos', 'Mixing Tanks', 'Bottling Line Frames'
//       ]
//     },
//     {
//       id: 'pharma',
//       name: 'Pharmaceutical & Medical',
//       icon: '💉',
//       count: 27,
//       color: 'from-violet-400 to-purple-500',
//       items: [
//         'Cleanroom Wall Panels', 'Surgical Instrument Trays', 'MRI Machine Frames', 'Sterilizer Chambers',
//         'Hospital Bed Frames', 'Tablet Compression Dies', 'Vaccine Storage Racks'
//       ]
//     },
//     {
//       id: 'oil',
//       name: 'Oil, Gas & Chemical',
//       icon: '🛢️',
//       count: 33,
//       color: 'from-red-400 to-rose-500',
//       items: [
//         'Pressure Vessel Liners', 'Pipeline Clamps', 'Offshore Platform Decks', 'Refinery Walkways',
//         'Chemical Storage Tanks', 'Heat Exchanger Tubesheets'
//       ]
//     },
//     {
//       id: 'machinery',
//       name: 'Industrial Machinery',
//       icon: '⚙️',
//       count: 45,
//       color: 'from-slate-500 to-zinc-500',
//       items: [
//         'CNC Machine Beds', 'Robotic Cell Frames', 'Conveyor Structures', 'Hydraulic Press Platens',
//         'Automation Guarding', 'Laser Cutting Tables'
//       ]
//     },
//     {
//       id: 'marine',
//       name: 'Marine & Shipbuilding',
//       icon: '⛴️',
//       count: 22,
//       color: 'from-blue-500 to-cyan-500',
//       items: [
//         'Ship Hull Liners', 'Deck Handrails', 'Anchor Chain Guides', 'Ballast Tank Covers',
//         'Yacht Interior Panels'
//       ]
//     },
//     {
//       id: 'consumer',
//       name: 'Consumer & Lifestyle',
//       icon: '🏠',
//       count: 25,
//       color: 'from-pink-400 to-rose-400',
//       items: [
//         'Premium Kitchen Sinks', 'Washing Machine Drums', 'Designer Furniture Frames', 'Luxury Elevator Interiors'
//       ]
//     }
//   ];

//   const selectedGradeData = materialGrades.find(g => g.code === selectedGrade);

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
//     <div className="min-h-screen bg-zinc-950 text-white overflow-hidden">
//       {/* Modern Metallic Top Gradient */}
//       <div className="fixed inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-400 to-transparent z-50" />

//       {/* HERO */}
//       <div className="relative h-screen flex items-center justify-center bg-[radial-gradient(at_50%_30%,rgba(34,211,238,0.15),transparent_70%)]">
//         <div className="absolute inset-0 bg-[url('https://picsum.photos/id/1015/2000/1200')] bg-cover opacity-20 mix-blend-overlay" />
        
//         <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
//           <motion.div
//             initial={{ opacity: 0, y: 60 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.9, ease: [0.23, 1, 0.32, 1] }}
//           >
//             <div className="inline-flex items-center gap-3 px-6 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-xl mb-6">
//               <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />
//               <span className="uppercase tracking-[3px] text-xs font-medium text-emerald-400">Matrix Metals LLP • Bengaluru</span>
//             </div>

//             <h1 className="text-7xl md:text-8xl font-light tracking-tighter mb-4">
//               Stainless Steel<br />
//               <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-300 via-white to-violet-300">Sheets Reimagined</span>
//             </h1>

//             <p className="max-w-2xl mx-auto text-xl text-zinc-400 font-light">
//               Precision-processed, surface-engineered, and ready for the world’s most demanding applications.
//             </p>

//             <div className="flex flex-wrap gap-4 justify-center mt-12">
//               <motion.button
//                 whileHover={{ scale: 1.05 }}
//                 whileTap={{ scale: 0.98 }}
//                 onClick={() => document.getElementById('grades').scrollIntoView({ behavior: 'smooth' })}
//                 className="group px-10 py-4 bg-white text-zinc-950 rounded-2xl font-semibold flex items-center gap-3 hover:bg-cyan-400 hover:text-white transition-all duration-300"
//               >
//                 Explore Grades
//                 <ArrowRight className="group-hover:translate-x-1 transition" />
//               </motion.button>

//               <motion.button
//                 whileHover={{ scale: 1.05 }}
//                 whileTap={{ scale: 0.98 }}
//                 className="group px-10 py-4 border border-white/30 hover:border-white/70 backdrop-blur-xl rounded-2xl font-medium flex items-center gap-3 transition-all"
//               >
//                 Get Instant Quote
//                 <Star className="group-hover:rotate-12 transition" />
//               </motion.button>
//             </div>

//             <div className="mt-16 flex justify-center gap-8 text-sm text-zinc-500">
//               <div className="flex items-center gap-2">
//                 <Award className="w-5 h-5 text-amber-400" /> ISO 9001:2015
//               </div>
//               <div>1000+ Projects Delivered</div>
//               <div>Export to 18 Countries</div>
//             </div>
//           </motion.div>
//         </div>

//         {/* Scroll prompt */}
//         <motion.div 
//           animate={{ y: [0, 10, 0] }}
//           transition={{ repeat: Infinity, duration: 2 }}
//           className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center text-xs tracking-widest text-zinc-500"
//         >
//           SCROLL TO EXPLORE
//           <ChevronDown className="mt-2" />
//         </motion.div>
//       </div>

//       {/* PROCESSING SERVICES - MODERN GRID */}
//       <div className="max-w-7xl mx-auto px-6 py-24">
//         <div className="flex flex-col items-center text-center mb-16">
//           <div className="uppercase tracking-[4px] text-cyan-400 text-sm font-medium mb-3">ENGINEERED FOR EXCELLENCE</div>
//           <h2 className="text-5xl font-light tracking-tight">Value-Added Processing</h2>
//           <p className="mt-4 text-zinc-400 max-w-md">Not just material. Performance-ready substrates.</p>
//         </div>

//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
//           {processingServices.map((service, i) => (
//             <motion.div
//               key={i}
//               initial={{ opacity: 0, y: 40 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ delay: i * 0.1 }}
//               whileHover={{ y: -12 }}
//               className="group bg-zinc-900/70 border border-white/10 hover:border-cyan-400/30 backdrop-blur-xl rounded-3xl p-8 transition-all duration-500"
//             >
//               <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-8 group-hover:scale-110 transition-transform`}>
//                 <service.icon className="w-7 h-7 text-white" />
//               </div>
//               <h3 className="text-2xl font-medium mb-3 tracking-tight">{service.title}</h3>
//               <p className="text-zinc-400 leading-relaxed text-[15px]">{service.desc}</p>
//             </motion.div>
//           ))}
//         </div>
//       </div>

//       {/* MAIN CONTENT */}
//       <div className="max-w-7xl mx-auto px-6 pb-24">
//         <div className="grid lg:grid-cols-12 gap-8">
//           {/* LEFT COLUMN - GRADES + SPECS */}
//           <div className="lg:col-span-7 space-y-8">
//             {/* GRADES */}
//             <div id="grades" className="bg-zinc-900/70 border border-white/10 backdrop-blur-xl rounded-3xl p-10">
//               <div className="flex items-end justify-between mb-10">
//                 <div>
//                   <div className="uppercase text-xs tracking-[3px] text-cyan-400">MATERIAL SCIENCE</div>
//                   <h2 className="text-4xl font-light tracking-tighter">Choose Your Grade</h2>
//                 </div>
//                 <div className="text-right">
//                   <div className="text-sm text-emerald-400 font-medium">8 Premium Grades</div>
//                 </div>
//               </div>

//               <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
//                 {materialGrades.map((grade) => (
//                   <motion.div
//                     key={grade.code}
//                     onClick={() => setSelectedGrade(grade.code)}
//                     whileHover={{ scale: 1.03 }}
//                     whileTap={{ scale: 0.97 }}
//                     className={`relative rounded-2xl p-6 cursor-pointer overflow-hidden border transition-all duration-300 group
//                       ${selectedGrade === grade.code 
//                         ? 'border-cyan-400 shadow-2xl shadow-cyan-400/20 bg-zinc-950' 
//                         : 'border-white/10 hover:border-white/30 bg-zinc-900/80'}`}
//                   >
//                     <div className={`absolute inset-0 bg-gradient-to-br ${grade.color} opacity-10 group-hover:opacity-20 transition`} />
                    
//                     <div className="relative">
//                       <div className="text-4xl font-bold tracking-tighter mb-1">{grade.code}</div>
//                       <div className="text-xs uppercase tracking-widest text-zinc-400">{grade.highlight}</div>
//                     </div>

//                     {selectedGrade === grade.code && (
//                       <motion.div
//                         initial={{ scale: 0 }}
//                         animate={{ scale: 1 }}
//                         className="absolute top-4 right-4"
//                       >
//                         <CheckCircle className="w-6 h-6 text-cyan-400" />
//                       </motion.div>
//                     )}
//                   </motion.div>
//                 ))}
//               </div>

//               {/* SELECTED GRADE DETAIL - GLASS CARD */}
//               <AnimatePresence mode="wait">
//                 {selectedGradeData && (
//                   <motion.div
//                     key={selectedGrade}
//                     initial={{ opacity: 0, y: 20 }}
//                     animate={{ opacity: 1, y: 0 }}
//                     exit={{ opacity: 0, y: 20 }}
//                     className="mt-10 bg-zinc-950 border border-white/10 rounded-3xl p-8 grid md:grid-cols-12 gap-8"
//                   >
//                     <div className="md:col-span-5">
//                       <div className="text-sm text-zinc-400 mb-1">GRADE {selectedGradeData.code}</div>
//                       <p className="text-2xl leading-tight font-light tracking-tight text-white">{selectedGradeData.description}</p>
//                     </div>

//                     <div className="md:col-span-7 grid grid-cols-2 gap-6">
//                       <div className="flex gap-4">
//                         <div className="shrink-0 w-10 h-10 rounded-2xl bg-cyan-400/10 flex items-center justify-center">
//                           <Droplets className="w-5 h-5 text-cyan-400" />
//                         </div>
//                         <div>
//                           <div className="text-xs tracking-widest text-zinc-500">CORROSION</div>
//                           <div className="font-medium text-lg">{selectedGradeData.corrosion}</div>
//                         </div>
//                       </div>
//                       <div className="flex gap-4">
//                         <div className="shrink-0 w-10 h-10 rounded-2xl bg-emerald-400/10 flex items-center justify-center">
//                           <Shield className="w-5 h-5 text-emerald-400" />
//                         </div>
//                         <div>
//                           <div className="text-xs tracking-widest text-zinc-500">WELDABILITY</div>
//                           <div className="font-medium text-lg">{selectedGradeData.weldability}</div>
//                         </div>
//                       </div>
//                       <div className="flex gap-4">
//                         <div className="shrink-0 w-10 h-10 rounded-2xl bg-orange-400/10 flex items-center justify-center">
//                           <Thermometer className="w-5 h-5 text-orange-400" />
//                         </div>
//                         <div>
//                           <div className="text-xs tracking-widest text-zinc-500">MAX TEMP</div>
//                           <div className="font-medium text-lg">{selectedGradeData.maxTemp}</div>
//                         </div>
//                       </div>
//                       <div className="flex gap-4">
//                         <div className="shrink-0 w-10 h-10 rounded-2xl bg-white/10 flex items-center justify-center">
//                           <Award className="w-5 h-5" />
//                         </div>
//                         <div>
//                           <div className="text-xs tracking-widest text-zinc-500">STRENGTH</div>
//                           <div className="font-medium text-lg">Premium</div>
//                         </div>
//                       </div>
//                     </div>
//                   </motion.div>
//                 )}
//               </AnimatePresence>
//             </div>

//             {/* DIMENSIONS & THICKNESS */}
//             <div className="bg-zinc-900/70 border border-white/10 backdrop-blur-xl rounded-3xl p-10">
//               <div className="flex items-center gap-6 mb-10">
//                 <div className="p-4 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-2xl">
//                   <Ruler className="w-8 h-8 text-black" />
//                 </div>
//                 <div>
//                   <h3 className="text-3xl font-light tracking-tight">Standard Dimensions</h3>
//                   <p className="text-zinc-400">Always in stock • Immediate dispatch</p>
//                 </div>
//               </div>

//               <div className="grid md:grid-cols-2 gap-6">
//                 {dimensions.map((dim, i) => (
//                   <motion.div
//                     key={i}
//                     whileHover={{ x: 8 }}
//                     className="bg-zinc-950 border border-white/10 rounded-2xl p-7 flex justify-between items-center group"
//                   >
//                     <div>
//                       <div className="font-mono text-2xl tracking-tight">{dim.size}</div>
//                       <div className="text-emerald-400 text-sm mt-1">{dim.stock}</div>
//                     </div>
//                     <Package className="w-6 h-6 text-zinc-400 group-hover:text-cyan-400 transition" />
//                   </motion.div>
//                 ))}
//               </div>

//               {/* Custom button */}
//               <motion.button
//                 onClick={() => setShowCustomOptions(!showCustomOptions)}
//                 whileHover={{ scale: 1.02 }}
//                 className="mt-8 w-full py-5 border border-dashed border-white/30 hover:border-cyan-400 rounded-2xl flex items-center justify-center gap-3 text-sm tracking-widest transition-colors"
//               >
//                 NEED SOMETHING SPECIAL?
//                 <ChevronRight className={`transition ${showCustomOptions ? 'rotate-90' : ''}`} />
//               </motion.button>

//               <AnimatePresence>
//                 {showCustomOptions && (
//                   <motion.div
//                     initial={{ height: 0, opacity: 0 }}
//                     animate={{ height: "auto", opacity: 1 }}
//                     exit={{ height: 0, opacity: 0 }}
//                     className="mt-6 bg-gradient-to-br from-cyan-900/30 to-transparent border border-cyan-400/20 rounded-2xl p-8 text-sm"
//                   >
//                     Width, length, thickness, finish, protective film, laser etching — we do it all.<br />
//                     <span className="text-cyan-400 font-medium">Talk to our engineers →</span>
//                   </motion.div>
//                 )}
//               </AnimatePresence>
//             </div>
//           </div>

//           {/* RIGHT COLUMN - PRODUCT INFO */}
//           <div className="lg:col-span-5 space-y-8">
//             {/* PRODUCT CARD */}
//             <div className="bg-gradient-to-br from-zinc-900 to-zinc-950 border border-white/10 backdrop-blur-3xl rounded-3xl p-10 sticky top-8">
//               <div className="uppercase tracking-[3px] text-xs text-cyan-400 mb-2">PRODUCT CODE</div>
//               <div className="font-mono text-4xl tracking-[-2px] mb-10">MX-SS-2B/BA</div>

//               <div className="space-y-8">
//                 <div>
//                   <div className="text-xs uppercase tracking-widest text-zinc-400 mb-4">FINISHES AVAILABLE</div>
//                   <div className="flex flex-wrap gap-3">
//                     {['2B', 'BA', 'No.4', 'HL', 'Mirror', 'Vibration'].map((f, i) => (
//                       <div key={i} className="px-5 py-2 bg-white/5 rounded-2xl text-sm border border-white/10 hover:border-white/30 transition">{f}</div>
//                     ))}
//                   </div>
//                 </div>

//                 <div className="pt-8 border-t border-white/10">
//                   <button className="w-full py-6 bg-white text-zinc-950 rounded-2xl font-semibold flex items-center justify-center gap-3 hover:bg-cyan-300 transition">
//                     <Download className="w-5 h-5" />
//                     DOWNLOAD TECHNICAL DATASHEET
//                   </button>
//                 </div>
//               </div>
//             </div>

//             {/* QUICK APPLICATIONS */}
//             <div className="bg-zinc-900/70 border border-white/10 backdrop-blur-xl rounded-3xl p-10">
//               <h3 className="text-2xl font-light tracking-tight mb-8">Popular Applications</h3>
//               <div className="space-y-5">
//                 {quickApplications.map((app, i) => (
//                   <div key={i} className="flex items-center gap-5 group">
//                     <div className="text-4xl transition group-hover:scale-125">{app.icon}</div>
//                     <div className="font-medium text-lg text-zinc-300 group-hover:text-white transition">{app.name}</div>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* QUALITY ASSURANCE - MODERN */}
//       <div className="bg-zinc-900 py-24">
//         <div className="max-w-4xl mx-auto px-6">
//           <div className="flex gap-16 items-start">
//             <div className="shrink-0">
//               <Shield className="w-20 h-20 text-cyan-400" />
//             </div>
//             <div>
//               <div className="uppercase text-cyan-400 tracking-[4px] text-sm mb-4">ZERO DEFECT CULTURE</div>
//               <h2 className="text-5xl font-light tracking-tighter leading-none mb-8">
//                 Quality is not inspected.<br />It is engineered in.
//               </h2>
//               <div className="prose prose-invert text-zinc-400 text-lg max-w-none">
//                 <p>Every coil is processed under real-time Industry 4.0 monitoring. In-line laser gauging, AI surface inspection, and automated flatness control ensure every square metre meets the tightest tolerances in the industry.</p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* APPLICATIONS MARQUEE SECTION - UNCHANGED BUT POLISHED */}
//       <div className="max-w-7xl mx-auto px-6 py-24">
//         <div className="text-center mb-12">
//           <div className="text-6xl font-light tracking-tighter">300+ Real-World Applications</div>
//           <p className="text-zinc-400 mt-4">Tap any industry to see live examples • Hover to pause marquee</p>
//         </div>

//         <div className="space-y-6">
//           {applicationCategories.map((cat) => (
//             <div key={cat.id} className="border border-white/10 rounded-3xl overflow-hidden bg-zinc-900/50">
//               <motion.div
//                 onClick={() => toggleCategory(cat.id)}
//                 className="flex items-center justify-between px-8 py-7 cursor-pointer hover:bg-white/5 transition"
//               >
//                 <div className="flex items-center gap-6">
//                   <span className="text-5xl">{cat.icon}</span>
//                   <div>
//                     <div className="text-2xl font-light">{cat.name}</div>
//                     <div className="text-sm text-emerald-400">{cat.count} applications</div>
//                   </div>
//                 </div>
//                 {expandedCategory === cat.id ? <ChevronUp /> : <ChevronDown />}
//               </motion.div>

//               <AnimatePresence>
//                 {expandedCategory === cat.id && (
//                   <motion.div
//                     initial={{ height: 0 }}
//                     animate={{ height: "auto" }}
//                     exit={{ height: 0 }}
//                     className="overflow-hidden border-t border-white/10"
//                   >
//                     <div 
//                       className="relative py-8 bg-zinc-950 overflow-hidden"
//                       onMouseEnter={() => handleMouseEnter(cat.id)}
//                       onMouseLeave={() => handleMouseLeave(cat.id)}
//                     >
//                       <div
//                         ref={el => marqueeRefs.current[cat.id] = el}
//                         className="flex whitespace-nowrap animate-marquee gap-6"
//                         style={{ animation: 'marquee 45s linear infinite' }}
//                       >
//                         {[...cat.items, ...cat.items].map((item, idx) => (
//                           <div
//                             key={idx}
//                             className="inline-flex items-center gap-5 bg-zinc-900 border border-white/10 hover:border-cyan-400/40 px-8 py-5 rounded-2xl min-w-[340px] transition-all hover:-rotate-1"
//                           >
//                             <span className="text-5xl opacity-80">{item.split(' ')[0]}</span>
//                             <span className="text-lg font-light text-zinc-200">{item.substring(item.indexOf(' ') + 1)}</span>
//                           </div>
//                         ))}
//                       </div>
//                     </div>
//                   </motion.div>
//                 )}
//               </AnimatePresence>
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* FINAL CTA */}
//       <div className="border-t border-white/10 py-24 text-center">
//         <div className="max-w-md mx-auto">
//           <div className="text-4xl font-light tracking-tight mb-6">Ready to build with the best?</div>
//           <motion.button
//             whileHover={{ scale: 1.05 }}
//             className="px-14 py-6 bg-gradient-to-r from-cyan-400 to-violet-400 text-zinc-950 text-lg font-semibold rounded-3xl flex items-center gap-4 mx-auto"
//           >
//             REQUEST CUSTOM QUOTE
//             <ArrowRight className="w-6 h-6" />
//           </motion.button>
//           <p className="text-xs text-zinc-500 mt-8">Response within 4 hours • Samples dispatched same day</p>
//         </div>
//       </div>

//       {/* MARQUEE ANIMATION */}
//       <style jsx global>{`
//         @keyframes marquee {
//           from { transform: translateX(0); }
//           to { transform: translateX(-50%); }
//         }
//         .animate-marquee {
//           animation: marquee 45s linear infinite;
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
//   Scissors, Sparkles, ShieldCheck, Zap, Award, ArrowRight
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
//     { icon: Scissors, title: "Precision Slitting", desc: "10–1520 mm width • ±0.10 mm tolerance", color: "from-cyan-400 to-blue-500" },
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

//   // Full items for marquee (kept short for clean UI but visible icons)
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
//               <motion.button
//                 whileHover={{ scale: 1.03 }}
//                 className="px-10 py-4 border border-slate-300 hover:border-slate-400 rounded-2xl font-medium transition"
//               >
//                 Request Quote
//               </motion.button>
//             </div>
//           </motion.div>
//         </div>
//       </div>

//       {/* PROCESSING SERVICES - Clean Cards */}
//       <div className="max-w-7xl mx-auto px-6 py-20">
//         <div className="text-center mb-16">
//           <div className="text-emerald-600 text-sm tracking-[3px] font-medium">VALUE-ADDED SERVICES</div>
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

//       {/* QUALITY ASSURANCE */}
//       <div className="bg-white py-20 border-t border-b border-slate-100">
//         <div className="max-w-4xl mx-auto px-6 flex flex-col md:flex-row gap-12 items-center">
//           <div className="shrink-0">
//             <Shield className="w-24 h-24 text-emerald-500" />
//           </div>
//           <div>
//             <div className="text-emerald-600 text-sm tracking-widest mb-4">QUALITY ASSURANCE</div>
//             <h3 className="text-4xl font-light tracking-tight leading-none mb-6">Precision at every step</h3>
//             <p className="text-slate-600 text-lg">
//               In-line laser measurement, AI surface inspection, and full traceability on every coil. 
//               Zero-defect processing you can trust.
//             </p>
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
    { code: '202', description: 'Economical grade with good corrosion resistance', color: 'from-amber-100 to-amber-50', accent: 'amber' },
    { code: '304', description: 'Most common austenitic grade, excellent corrosion resistance', color: 'from-cyan-100 to-blue-50', accent: 'cyan' },
    { code: '304L', description: 'Low carbon version of 304, ideal for welding', color: 'from-emerald-100 to-teal-50', accent: 'emerald' },
    { code: '316', description: 'Superior corrosion resistance with molybdenum', color: 'from-violet-100 to-purple-50', accent: 'violet' },
    { code: '316L', description: 'Low carbon version of 316 for welded applications', color: 'from-fuchsia-100 to-pink-50', accent: 'fuchsia' },
    { code: '321', description: 'Stabilized with titanium for high temperature', color: 'from-orange-100 to-amber-50', accent: 'orange' },
    { code: '430', description: 'Ferritic grade with good formability', color: 'from-slate-100 to-zinc-50', accent: 'slate' },
    { code: '441', description: 'High temperature ferritic stainless steel', color: 'from-rose-100 to-red-50', accent: 'rose' }
  ];

  const processingServices = [
    { icon: Scissors, title: "Precision Slitting", desc: "10–1520 mm width • ±0.10 mm tolerance", color: "from-blue-400 to-indigo-500" },
    { icon: Ruler, title: "Tension Levelling", desc: "Industry-leading flatness for fabrication", color: "from-emerald-400 to-teal-500" },
    { icon: Sparkles, title: "Premium Finishing", desc: "2B • BA • No.4 • HL • Mirror", color: "from-violet-400 to-purple-500" },
    { icon: ShieldCheck, title: "Protective Lamination", desc: "Laser film & paper interleaving", color: "from-amber-400 to-orange-500" },
    { icon: Zap, title: "Surface Engineering", desc: "Degreasing • UV passivation", color: "from-rose-400 to-pink-500" }
  ];

  const dimensions = [
    { size: '1250 × 2500 mm', availability: 'In Stock • 48 hrs' },
    { size: '1500 × 3000 mm', availability: 'In Stock • 24 hrs' },
    { size: '1520 × 4000 mm', availability: 'Premium Stock' },
    { size: 'Custom Sizes', availability: 'Made to Order' }
  ];

  const applicationCategories = [
    { id: 'aero', name: 'Aerospace & Defence', icon: '✈️', count: 28, color: 'from-sky-100 to-indigo-50' },
    { id: 'auto', name: 'Automotive & EV', icon: '🚗', count: 32, color: 'from-emerald-100 to-cyan-50' },
    { id: 'infra', name: 'Architecture & Infrastructure', icon: '🏙️', count: 35, color: 'from-amber-100 to-orange-50' },
    { id: 'food', name: 'Food & Beverage', icon: '🍽️', count: 30, color: 'from-lime-100 to-green-50' },
    { id: 'pharma', name: 'Pharmaceutical & Medical', icon: '💉', count: 27, color: 'from-violet-100 to-purple-50' },
    { id: 'oil', name: 'Oil, Gas & Chemical', icon: '🛢️', count: 33, color: 'from-red-100 to-rose-50' },
    { id: 'machinery', name: 'Industrial Machinery', icon: '⚙️', count: 45, color: 'from-slate-100 to-zinc-50' },
    { id: 'marine', name: 'Marine & Shipbuilding', icon: '⛴️', count: 22, color: 'from-blue-100 to-cyan-50' },
    { id: 'consumer', name: 'Consumer & Lifestyle', icon: '🏠', count: 25, color: 'from-pink-100 to-rose-50' }
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

  const handleMouseEnter = (id) => {
    if (marqueeRefs.current[id]) marqueeRefs.current[id].style.animationPlayState = 'paused';
  };

  const handleMouseLeave = (id) => {
    if (marqueeRefs.current[id]) marqueeRefs.current[id].style.animationPlayState = 'running';
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-slate-50 text-slate-800">
      {/* HERO - Clean & Bright */}
      <div className="relative pt-20 pb-28 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] [background-size:40px_40px] opacity-40" />
        
        <div className="max-w-5xl mx-auto px-6 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white border border-slate-200 shadow-sm mb-8">
              <Award className="w-4 h-4 text-emerald-500" />
              <span className="text-sm font-medium tracking-widest text-slate-500">PREMIUM STAINLESS STEEL SHEETS</span>
            </div>

            <h1 className="text-7xl md:text-8xl font-light tracking-tighter leading-none mb-6">
              Stainless Steel<br />Sheets
            </h1>
            <p className="text-2xl text-slate-600 max-w-2xl mx-auto font-light">
              Precision processed • Surface engineered • Ready for your most demanding applications
            </p>

            <div className="flex gap-4 justify-center mt-12">
              <motion.button
                whileHover={{ scale: 1.03 }}
                onClick={() => document.getElementById('grades').scrollIntoView({ behavior: 'smooth' })}
                className="px-10 py-4 bg-slate-900 text-white rounded-2xl font-medium flex items-center gap-3 shadow-lg hover:shadow-xl transition"
              >
                Browse Grades
                <ArrowRight className="w-5 h-5" />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.03 }}
                className="px-10 py-4 border border-slate-300 hover:border-slate-400 rounded-2xl font-medium transition"
              >
                Request Quote
              </motion.button>
            </div>
          </motion.div>
        </div>
      </div>

      {/* NEW: OUR CAPABILITIES (Value-Added Processing Description) */}
      <div className="max-w-7xl mx-auto px-6 py-20 border-t border-slate-100">
        <div className="grid md:grid-cols-3 gap-12 items-start">
          <div className="md:col-span-1">
            <div className="text-blue-600 text-sm tracking-[3px] font-medium mb-4">OUR CAPABILITIES</div>
            <h2 className="text-5xl font-light tracking-tight leading-tight">Engineered Transformation</h2>
            <div className="w-20 h-1 bg-blue-200 mt-6 rounded-full"></div>
          </div>
          <div className="md:col-span-2 space-y-6 text-slate-600 text-lg leading-relaxed">
            <p>
              Matrix Metals LLP operates as a specialised stainless steel conversion and surface engineering facility. 
              We do not position ourselves as material traders — we function as a structured processing partner delivering 
              engineered transformation of mill-origin stainless steel coils into application-ready substrates.
            </p>
            <p>
              Our operations are designed for manufacturers who require dimensional precision, surface refinement, and 
              process-controlled execution under defined industrial standards. We provide advanced coil-to-coil and sheet 
              processing services across all stainless steel grades supplied by our customers. Each project is executed 
              under calibrated mechanical parameters to ensure width accuracy, flatness stability, burr control, and surface 
              consistency. Whether the requirement involves narrow precision strips or flatness-critical sheets, our 
              processing discipline ensures repeatability and structural integrity.
            </p>
            <p>
              Our surface engineering capabilities include continuous No.4 finishing, industrial degreasing, hot wash 
              conditioning, UV surface treatment, protective film lamination, interleaving paper integration, and tension 
              levelling. These services enhance surface readiness, improve fabrication performance, and minimise downstream 
              operational risk. Every metre processed undergoes structured validation before dispatch.
            </p>
            <p>
              Through contract processing and job work services, we support OEMs, fabricators, exporters, and automation-driven 
              manufacturers seeking to outsource technically sensitive operations. Our facility functions as an extension of 
              our clients’ production lines — delivering precision conversion without compromising confidentiality, traceability, 
              or quality governance.
            </p>
            <p className="font-medium text-slate-800">
              Matrix Metals LLP delivers measurable value through engineered accuracy, controlled surface refinement, and 
              disciplined execution. Our strength lies in transforming stainless steel into performance-optimised material — 
              prepared, validated, and structured for demanding industrial integration.
            </p>
          </div>
        </div>
      </div>

      {/* PROCESSING SERVICES - Clean Cards */}
      <div className="max-w-7xl mx-auto px-6 py-20 bg-slate-50/50">
        <div className="text-center mb-16">
          <div className="text-blue-600 text-sm tracking-[3px] font-medium">VALUE-ADDED SERVICES</div>
          <h2 className="text-5xl font-light tracking-tight mt-3">Engineered for Performance</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
          {processingServices.map((service, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.08 }}
              whileHover={{ y: -8 }}
              className="bg-white border border-slate-100 rounded-3xl p-8 hover:border-slate-200 hover:shadow-xl transition-all group"
            >
              <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-6 group-hover:scale-110 transition`}>
                <service.icon className="w-7 h-7 text-white" />
              </div>
              <h3 className="font-semibold text-2xl mb-3 tracking-tight">{service.title}</h3>
              <p className="text-slate-600 leading-relaxed">{service.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* MATERIAL GRADES */}
      <div id="grades" className="max-w-7xl mx-auto px-6 pb-20">
        <div className="bg-white border border-slate-100 rounded-3xl p-12 shadow-sm">
          <div className="flex justify-between items-end mb-12">
            <div>
              <div className="text-emerald-600 text-sm tracking-widest">MATERIAL GRADES</div>
              <h2 className="text-5xl font-light tracking-tighter">Choose Your Grade</h2>
            </div>
            <p className="text-slate-500 max-w-xs text-right">Click any grade for detailed properties</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
            {materialGrades.map((grade) => (
              <motion.div
                key={grade.code}
                onClick={() => setSelectedGrade(grade.code)}
                whileHover={{ scale: 1.02 }}
                className={`rounded-2xl p-7 cursor-pointer transition-all border ${selectedGrade === grade.code 
                  ? 'border-emerald-400 bg-emerald-50 shadow-md' 
                  : 'border-slate-100 hover:border-slate-200 bg-white'}`}
              >
                <div className="text-4xl font-semibold tracking-tighter mb-1">{grade.code}</div>
                <div className="text-sm text-slate-500 line-clamp-2">{grade.description}</div>
                {selectedGrade === grade.code && (
                  <CheckCircle className="w-5 h-5 text-emerald-500 mt-4" />
                )}
              </motion.div>
            ))}
          </div>

          {/* Selected Grade Info */}
          <AnimatePresence mode="wait">
            {selectedGradeData && (
              <motion.div
                key={selectedGrade}
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                className="mt-12 bg-slate-50 border border-slate-100 rounded-2xl p-10"
              >
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-3xl font-light">Grade {selectedGradeData.code}</h3>
                  <span className="px-5 py-1.5 bg-white rounded-full border text-sm text-emerald-600">Currently Selected</span>
                </div>
                <p className="text-lg text-slate-600 mb-8">{selectedGradeData.description}</p>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                  <div className="flex items-start gap-4">
                    <Droplets className="w-6 h-6 text-cyan-500 mt-1" />
                    <div><div className="text-xs text-slate-500">CORROSION</div><div className="font-medium">Excellent</div></div>
                  </div>
                  <div className="flex items-start gap-4">
                    <Shield className="w-6 h-6 text-emerald-500 mt-1" />
                    <div><div className="text-xs text-slate-500">WELDABILITY</div><div className="font-medium">Outstanding</div></div>
                  </div>
                  <div className="flex items-start gap-4">
                    <Thermometer className="w-6 h-6 text-orange-500 mt-1" />
                    <div><div className="text-xs text-slate-500">MAX TEMP</div><div className="font-medium">Up to 925°C</div></div>
                  </div>
                  <div className="flex items-start gap-4">
                    <Clock className="w-6 h-6 text-slate-500 mt-1" />
                    <div><div className="text-xs text-slate-500">LIFESPAN</div><div className="font-medium">30+ Years</div></div>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>

      {/* DIMENSIONS */}
      <div className="max-w-7xl mx-auto px-6 pb-24">
        <div className="bg-white border border-slate-100 rounded-3xl p-12">
          <div className="flex items-center gap-5 mb-10">
            <div className="p-4 bg-emerald-100 rounded-2xl">
              <Ruler className="w-8 h-8 text-emerald-600" />
            </div>
            <div>
              <h3 className="text-4xl font-light tracking-tight">Dimensions & Availability</h3>
              <p className="text-slate-500">Ready-to-ship sizes • Custom options available</p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {dimensions.map((dim, i) => (
              <div key={i} className="border border-slate-100 rounded-2xl p-8 hover:border-emerald-200 transition flex justify-between items-center">
                <div>
                  <div className="font-mono text-3xl tracking-tight">{dim.size}</div>
                  <div className="text-emerald-600 text-sm mt-2 font-medium">{dim.availability}</div>
                </div>
                <Layers className="w-8 h-8 text-slate-300" />
              </div>
            ))}
          </div>

          <motion.button
            onClick={() => setShowCustomOptions(!showCustomOptions)}
            whileHover={{ scale: 1.02 }}
            className="mt-10 w-full py-5 border border-dashed border-slate-300 hover:border-emerald-400 rounded-2xl text-sm tracking-widest flex items-center justify-center gap-3 transition"
          >
            NEED CUSTOM DIMENSIONS OR FINISH?
            <ChevronRight className={`transition ${showCustomOptions ? 'rotate-90' : ''}`} />
          </motion.button>

          <AnimatePresence>
            {showCustomOptions && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="mt-6 p-8 bg-emerald-50 rounded-2xl text-sm text-emerald-700 border border-emerald-100"
              >
                Special widths, lengths, thicknesses, finishes & protective films available. Contact us for fast quotation.
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>

      {/* COMPREHENSIVE APPLICATIONS - Clean & Visible Icons */}
      <div className="max-w-7xl mx-auto px-6 pb-24">
        <div className="text-center mb-12">
          <div className="text-emerald-600 tracking-widest text-sm font-medium">300+ USE CASES</div>
          <h2 className="text-5xl font-light tracking-tight mt-3">Where Our Sheets Excel</h2>
          <p className="text-slate-500 mt-3">Tap any category • Hover marquee to pause • Large clear icons</p>
        </div>

        <div className="space-y-6">
          {applicationCategories.map((category) => {
            const items = getCategoryItems(category.id);
            return (
              <div key={category.id} className="bg-white border border-slate-100 rounded-3xl overflow-hidden">
                <motion.div
                  onClick={() => toggleCategory(category.id)}
                  className="flex items-center justify-between px-8 py-7 cursor-pointer hover:bg-slate-50 transition"
                >
                  <div className="flex items-center gap-6">
                    <div className="text-6xl transition group-hover:scale-110">{category.icon}</div>
                    <div>
                      <h3 className="text-2xl font-light tracking-tight">{category.name}</h3>
                      <p className="text-emerald-600 text-sm">{category.count} applications</p>
                    </div>
                  </div>
                  {expandedCategory === category.id ? <ChevronUp className="w-6 h-6" /> : <ChevronDown className="w-6 h-6" />}
                </motion.div>

                <AnimatePresence>
                  {expandedCategory === category.id && (
                    <motion.div
                      initial={{ height: 0 }}
                      animate={{ height: 'auto' }}
                      exit={{ height: 0 }}
                      className="border-t border-slate-100 overflow-hidden"
                    >
                      <div 
                        className="py-8 bg-slate-50 overflow-hidden"
                        onMouseEnter={() => handleMouseEnter(category.id)}
                        onMouseLeave={() => handleMouseLeave(category.id)}
                      >
                        <div
                          ref={el => marqueeRefs.current[category.id] = el}
                          className="flex whitespace-nowrap gap-6 animate-marquee"
                          style={{ animation: 'marquee 50s linear infinite' }}
                        >
                          {[...items, ...items].map((item, idx) => {
                            const icon = item.split(' ')[0];
                            const text = item.substring(item.indexOf(' ') + 1);
                            return (
                              <div
                                key={idx}
                                className="inline-flex items-center gap-6 bg-white border border-slate-100 px-8 py-6 rounded-2xl min-w-[380px] shadow-sm hover:shadow hover:border-emerald-200 transition"
                              >
                                <span className="text-6xl flex-shrink-0">{icon}</span>
                                <span className="text-lg text-slate-700 font-light leading-tight">{text}</span>
                              </div>
                            );
                          })}
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>

      {/* ENHANCED QUALITY ASSURANCE (replaced) */}
      <div className="bg-white py-20 border-t border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-12">
            <div className="md:col-span-1">
              <div className="flex items-center gap-4 mb-6">
                <div className="p-4 bg-blue-100 rounded-2xl">
                  <Shield className="w-10 h-10 text-blue-600" />
                </div>
                <div>
                  <div className="text-blue-600 text-sm tracking-widest">QUALITY ASSURANCE</div>
                  <h3 className="text-4xl font-light tracking-tight">Integrated Precision</h3>
                </div>
              </div>
              <div className="w-20 h-1 bg-blue-200 rounded-full"></div>
            </div>
            <div className="md:col-span-2 space-y-6 text-slate-600 text-lg leading-relaxed">
              <p>
                At Matrix Metals LLP, quality assurance is not a concluding activity — it is an integrated operational framework. 
                Every stage of our coil-to-coil processing and surface engineering operations is governed by defined parameters, 
                calibrated systems, and measurable validation standards. Precision is embedded within the process architecture 
                to ensure consistency, repeatability, and technical conformity.
              </p>
              <p>
                Our quality control methodology begins at material intake and continues through slitting, levelling, surface 
                treatment, lamination, and final dispatch. In-line dimensional monitoring ensures strict adherence to width 
                tolerances, burr limits, camber control, and flatness stability. Surface conformity is assessed through structured 
                inspection protocols to prevent deviation in cosmetic or structural performance.
              </p>
              <p>
                Process discipline is reinforced through documented operating thresholds and traceable batch identification systems. 
                Each production lot is mapped to defined processing parameters, ensuring accountability and technical transparency. 
                This structured traceability enables reliable performance tracking across repeat orders and long-term supply cycles.
              </p>
              <p>
                We operate under the principle that variability must be eliminated at source. Blade alignment, tension calibration, 
                levelling pressure, and surface treatment parameters are routinely verified to maintain operational stability. 
                Preventive maintenance and periodic system calibration ensure sustained accuracy across extended production runs.
              </p>
              <p className="font-medium text-slate-800">
                Matrix Metals LLP delivers stainless steel processing with engineered certainty. Our quality assurance framework 
                is built to support industries where dimensional precision, surface integrity, and execution reliability are 
                non-negotiable. Through disciplined governance and measurable validation, we provide confidence in every metre processed.
              </p>
            </div>
          </div>

          {/* Key validation points (visual addition) */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16">
            {[
              { icon: Gauge, label: "Width Tolerances", value: "±0.10 mm" },
              { icon: Activity, label: "Flatness Stability", value: "≤ 2 I-Units" },
              { icon: Cpu, label: "In-line Monitoring", value: "Laser / AI" },
              { icon: FileCheck, label: "Traceability", value: "Batch-coded" }
            ].map((item, idx) => (
              <div key={idx} className="bg-slate-50 rounded-2xl p-6 border border-slate-100">
                <item.icon className="w-8 h-8 text-blue-500 mb-3" />
                <div className="text-sm text-slate-500">{item.label}</div>
                <div className="text-xl font-light">{item.value}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* FINAL CTA */}
      <div className="py-28 text-center bg-slate-50">
        <div className="max-w-md mx-auto px-6">
          <h2 className="text-5xl font-light tracking-tight mb-6">Ready to start your project?</h2>
          <motion.button
            whileHover={{ scale: 1.05 }}
            className="px-16 py-6 bg-slate-900 hover:bg-black text-white text-xl rounded-3xl font-medium flex items-center gap-4 mx-auto transition"
          >
            Get Custom Quote Today
            <ArrowRight className="w-6 h-6" />
          </motion.button>
          <p className="text-sm text-slate-500 mt-8">Response within 4 hours • Samples dispatched same day</p>
        </div>
      </div>

      {/* Marquee Animation */}
      <style jsx global>{`
        @keyframes marquee {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 50s linear infinite;
          width: max-content;
        }
      `}</style>
    </div>
  );
};

export default StainlessSteelSheets;