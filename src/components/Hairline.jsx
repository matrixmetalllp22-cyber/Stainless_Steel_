// import { useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";

// const hairlineProducts = [
//   {
//     id: 1,
//     name: "Hairline - Silver",
//     code: "MX: Hairline Silver",
//     img: "/images/hairline-silver.jpg",
//   },
//   {
//     id: 2,
//     name: "Hairline - Gold",
//     code: "MX: Hairline Gold",
//     img: "/images/hairline-gold.jpg",
//   },
//   {
//     id: 3,
//     name: "Hairline - Rose Gold",
//     code: "MX: Hairline Rose Gold",
//     img: "/images/hairline-rose.jpg",
//   },
//   {
//     id: 4,
//     name: "Hairline - Bronze",
//     code: "MX: Hairline Bronze",
//     img: "/images/hairline-bronze.jpg",
//   },
//   {
//     id: 5,
//     name: "Hairline - Champagne",
//     code: "MX: Hairline Champagne",
//     img: "/images/hairline-champagne.jpg",
//   },
//   {
//     id: 6,
//     name: "Hairline - Black",
//     code: "MX: Hairline Black",
//     img: "/images/hairline-black.jpg",
//   },
//   {
//     id: 7,
//     name: "Hairline - Blue",
//     code: "MX: Hairline Blue",
//     img: "/images/hairline-blue.jpg",
//   },
//   {
//     id: 8,
//     name: "Hairline - Pink",
//     code: "MX: Hairline Pink",
//     img: "/images/hairline-pink.jpg",
//   },
//   {
//     id: 9,
//     name: "Hairline - Green",
//     code: "MX: Hairline Green",
//     img: "/images/hairline-green.jpg",
//   },
// ];

// const applications = [
//   "Architectural Cladding",
//   "Shopping Malls",
//   "Elevator Cabins and Doors",
//   "Decorative Facades",
//   "Column Casings",
//   "Display Equipment",
//   "Street Furniture",
//   "Kitchen Equipment",
//   "Marine Industry",
//   "Automotive & Aviation Industries",
// ];

// export default function Hairline() {
//   const [selected, setSelected] = useState(null);

//   return (
//     <section className="w-full bg-white py-20 px-6 md:px-12">


//       {/* ================= GRID VIEW ================= */}
//       {!selected && (

//         <div className="max-w-7xl mx-auto">

//           {/* Title */}
//           <h1 className="text-3xl font-light text-center mb-16 text-gray-700">
//             Hairline Finish With PVD Coating
//           </h1>


//           {/* Grid */}
//           <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-16 mb-24">

//             {hairlineProducts.map((item) => (

//               <motion.div
//                 key={item.id}
//                 whileHover={{ scale: 1.08 }}
//                 onClick={() => setSelected(item)}
//                 className="text-center cursor-pointer"
//               >

//                 <img
//                   src={item.img}
//                   alt={item.name}
//                   className="w-48 h-64 mx-auto rounded-3xl shadow-lg object-cover"
//                 />

//                 <p className="mt-4 text-blue-600 text-sm font-medium">
//                   {item.name}
//                 </p>

//               </motion.div>
//             ))}

//           </div>


//           {/* Description */}
//           <div className="max-w-5xl mx-auto text-center">

//             <h3 className="text-orange-600 font-semibold mb-4">
//               Highest Quality of Ti Coloured Hairline Finish
//             </h3>

//             <p className="text-gray-600 text-sm leading-relaxed">

//               At Minox Metal we are producing the highest quality of Titanium
//               colored surface on stainless steel sheets. Hairline finish
//               stainless steel is commonly referred to as “long-grain”.

//               <br /><br />

//               Titanium coated stainless steel sheets are colored through
//               a PVD process. The physical vapor deposition allows the color
//               to be bright, even and extremely resistant.

//             </p>

//           </div>

//         </div>
//       )}


//       {/* ================= DETAIL VIEW ================= */}
//       <AnimatePresence>

//         {selected && (

//           <motion.div
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             exit={{ opacity: 0 }}
//           >


//             {/* Back */}
//             <button
//               onClick={() => setSelected(null)}
//               className="mb-10 text-orange-600 hover:underline"
//             >
//               ← Back to Colors
//             </button>


//             {/* Title */}
//             <h1 className="text-3xl font-light text-center mb-16 text-gray-700">
//               {selected.name}
//             </h1>


//             {/* Top */}
//             <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center mb-24">


//               {/* Left */}
//               <div>

//                 <h3 className="text-orange-600 font-semibold mb-2">
//                   Product Code
//                 </h3>

//                 <p className="mb-6 text-gray-700">
//                   {selected.code}
//                 </p>


//                 <h3 className="text-orange-600 font-semibold mb-3">
//                   Applications
//                 </h3>

//                 <ul className="space-y-2 text-gray-600 text-sm list-disc list-inside marker:text-orange-500">

//                   {applications.map((app, i) => (
//                     <li key={i}>{app}</li>
//                   ))}

//                 </ul>

//               </div>


//               {/* Right */}
//               <div className="flex justify-center">

//                 <img
//                   src={selected.img}
//                   alt={selected.name}
//                   className="w-full max-w-md rounded-3xl shadow-xl object-cover"
//                 />

//               </div>

//             </div>


//             {/* Bottom */}
//             <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-12 bg-gray-50 p-12 rounded-xl shadow-sm">


//               {/* Specs */}
//               <div>

//                 <h3 className="text-orange-600 font-semibold mb-4 border-b pb-2">
//                   Specifications
//                 </h3>

//                 <p className="text-sm text-gray-700 leading-6">

//                   <strong>Material Grades:</strong><br />
//                   202, 304, 304L, 316, 316L, 430, 441<br /><br />

//                   <strong>Finish:</strong><br />
//                   Hairline Finish<br /><br />

//                   <strong>Color:</strong><br />
//                   Multiple Colors<br /><br />

//                   <strong>Thickness:</strong><br />
//                   0.60 mm to 5.00 mm

//                 </p>

//               </div>


//               {/* Dimensions */}
//               <div>

//                 <h3 className="text-orange-600 font-semibold mb-4 border-b pb-2">
//                   Dimensions & Availability
//                 </h3>

//                 <p className="text-sm text-gray-700 leading-6">

//                   <strong>Dimensions:</strong><br />
//                   1260 × 2500 mm<br />
//                   1500 × 3000 mm<br />
//                   Special dimensions on demand<br /><br />

//                   <strong>Availability:</strong><br />
//                   In stock / To produce

//                 </p>

//               </div>


//               {/* Datasheet */}
//               <div>

//                 <h3 className="text-orange-600 font-semibold mb-4 border-b pb-2">
//                   Datasheet
//                 </h3>

//                 <p className="text-sm text-gray-700 leading-6 mb-4">

//                   <strong>Datasheet:</strong><br />
//                   Datasheet MX: Hairline Finish<br /><br />

//                   We supply stainless steel sheets as per our catalogue.
//                   Any minor colour difference and brightness variation
//                   may occur due to difference in raw material reflection.

//                 </p>

//                 <button className="px-5 py-2 bg-orange-600 text-white rounded-md hover:bg-orange-700 transition">
//                   Download Datasheet
//                 </button>

//               </div>

//             </div>

//           </motion.div>
//         )}

//       </AnimatePresence>

//     </section>
//   );
// }





import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const hairlineProducts = [
  {
    id: 1,
    name: "Hairline - Silver",
    code: "MX: Hairline Silver",
    img: "/images/hairline-silver.jpg",
    color: "#d1d5db",
    finish: "Hairline #4",
    grain: "Long Grain",
    description: "Classic silver hairline finish with straight grain pattern"
  },
  {
    id: 2,
    name: "Hairline - Gold",
    code: "MX: Hairline Gold",
    img: "/images/hairline-gold.jpg",
    color: "#f59e0b",
    finish: "Hairline #4",
    grain: "Long Grain",
    description: "Premium gold hairline with elegant linear texture"
  },
  {
    id: 3,
    name: "Hairline - Rose Gold",
    code: "MX: Hairline Rose Gold",
    img: "/images/hairline-rose.jpg",
    color: "#f472b6",
    finish: "Hairline #4",
    grain: "Long Grain",
    description: "Modern rose gold with fine linear finish"
  },
  {
    id: 4,
    name: "Hairline - Bronze",
    code: "MX: Hairline Bronze",
    img: "/images/hairline-bronze.jpg",
    color: "#b45309",
    finish: "Hairline #4",
    grain: "Long Grain",
    description: "Warm bronze hairline finish for traditional applications"
  },
  {
    id: 5,
    name: "Hairline - Champagne",
    code: "MX: Hairline Champagne",
    img: "/images/hairline-champagne.jpg",
    color: "#fde68a",
    finish: "Hairline #4",
    grain: "Long Grain",
    description: "Soft champagne with delicate linear texture"
  },
  {
    id: 6,
    name: "Hairline - Black",
    code: "MX: Hairline Black",
    img: "/images/hairline-black.jpg",
    color: "#374151",
    finish: "Hairline #4",
    grain: "Long Grain",
    description: "Deep black hairline finish with subtle grain direction"
  },
  {
    id: 7,
    name: "Hairline - Blue",
    code: "MX: Hairline Blue",
    img: "/images/hairline-blue.jpg",
    color: "#3b82f6",
    finish: "Hairline #4",
    grain: "Long Grain",
    description: "Contemporary blue hairline for modern interiors"
  },
  {
    id: 8,
    name: "Hairline - Pink",
    code: "MX: Hairline Pink",
    img: "/images/hairline-pink.jpg",
    color: "#ec4899",
    finish: "Hairline #4",
    grain: "Long Grain",
    description: "Soft pink hairline finish for decorative accents"
  },
  {
    id: 9,
    name: "Hairline - Green",
    code: "MX: Hairline Green",
    img: "/images/hairline-green.jpg",
    color: "#10b981",
    finish: "Hairline #4",
    grain: "Long Grain",
    description: "Natural green hairline with organic aesthetic"
  },
];

const applications = [
  { name: "Architectural Cladding", category: "exterior", icon: "🏢" },
  { name: "Shopping Malls", category: "commercial", icon: "🛍️" },
  { name: "Elevator Cabins and Doors", category: "interior", icon: "🔼" },
  { name: "Decorative Facades", category: "exterior", icon: "🎨" },
  { name: "Column Casings", category: "structural", icon: "🏛️" },
  { name: "Display Equipment", category: "commercial", icon: "📺" },
  { name: "Street Furniture", category: "public", icon: "🪑" },
  { name: "Kitchen Equipment", category: "industrial", icon: "🔪" },
  { name: "Marine Industry", category: "industrial", icon: "🚢" },
  { name: "Automotive & Aviation Industries", category: "industrial", icon: "✈️" },
];

export default function Hairline() {
  const [selected, setSelected] = useState(null);
  const [activeFilter, setActiveFilter] = useState("all");
  const [hoveredCard, setHoveredCard] = useState(null);
  const [activeCategory, setActiveCategory] = useState("all");
  const [showPVDInfo, setShowPVDInfo] = useState(false);

  const filters = [
    { id: "all", label: "All Finishes", color: "from-emerald-600 to-teal-500" },
    { id: "metallic", label: "Metallic", color: "from-amber-600 to-yellow-500", items: [1, 2, 3, 4, 5] },
    { id: "colored", label: "Colored", color: "from-indigo-600 to-purple-500", items: [6, 7, 8, 9] },
  ];

  const categories = [
    { id: "all", label: "All Applications", icon: "📋" },
    { id: "exterior", label: "Exterior", icon: "🏗️" },
    { id: "interior", label: "Interior", icon: "🏠" },
    { id: "commercial", label: "Commercial", icon: "🏢" },
    { id: "industrial", label: "Industrial", icon: "🏭" },
    { id: "structural", label: "Structural", icon: "🔩" },
  ];

  const filteredProducts = activeFilter === "all" 
    ? hairlineProducts 
    : hairlineProducts.filter(product => 
        filters.find(f => f.id === activeFilter)?.items?.includes(product.id)
      );

  const filteredApplications = activeCategory === "all" 
    ? applications 
    : applications.filter(app => app.category === activeCategory);

  return (
    <section className="w-full bg-gradient-to-b from-white to-emerald-50/30 py-20 px-6 md:px-12">
      {/* Header with Gradient */}
      <motion.div
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, type: "spring" }}
        className="text-center mb-16"
      >
        <div className="relative inline-block mb-8">
          <div className="absolute -inset-4 bg-gradient-to-r from-emerald-500/20 to-teal-400/20 blur-2xl rounded-full" />
          <h1 className="relative text-5xl md:text-6xl font-light text-slate-800 tracking-tight mb-4">
            Hairline Finish With PVD Coating
          </h1>
        </div>
        <p className="text-gray-600 max-w-2xl mx-auto text-lg">
          Premium linear finish with PVD coating for enhanced durability and aesthetic appeal
        </p>
      </motion.div>

      {/* Quality Description */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="max-w-6xl mx-auto mb-16"
      >
        <div className="bg-gradient-to-br from-white to-emerald-50 rounded-2xl p-8 md:p-12 shadow-xl border border-emerald-100">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-4">
              <div className="h-12 w-2 bg-gradient-to-b from-emerald-600 to-teal-500 rounded-full"></div>
              <div>
                <h3 className="text-2xl font-semibold text-slate-800">
                  Highest Quality Ti Coloured Hairline Finish
                </h3>
                <p className="text-sm text-gray-500 mt-1">Premium PVD Coating Technology</p>
              </div>
            </div>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setShowPVDInfo(!showPVDInfo)}
              className="px-4 py-2 text-sm bg-emerald-100 text-emerald-700 rounded-lg hover:bg-emerald-200 transition-colors"
            >
              {showPVDInfo ? "Hide Details" : "PVD Technology"}
            </motion.button>
          </div>
          
          <div className="space-y-6">
            <p className="text-gray-600 leading-relaxed">
              At Minox Metal we produce the highest quality of Titanium colored surface 
              on stainless steel sheets. Hairline finish stainless steel is commonly 
              referred to as "long-grain" finish, characterized by its unidirectional linear pattern.
            </p>
            
            <AnimatePresence>
              {showPVDInfo && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  className="overflow-hidden"
                >
                  <div className="grid md:grid-cols-2 gap-8 pt-6 border-t border-emerald-100">
                    <div className="space-y-4">
                      <h4 className="font-semibold text-emerald-700">PVD Coating Process</h4>
                      <p className="text-gray-600 text-sm">
                        Titanium coated stainless steel sheets are colored through an advanced 
                        PVD process. Physical vapor deposition ensures colors remain bright, 
                        even, and extremely resistant to wear and corrosion.
                      </p>
                    </div>
                    <div className="space-y-4">
                      <h4 className="font-semibold text-emerald-700">Finish Characteristics</h4>
                      <ul className="text-gray-600 text-sm space-y-2">
                        <li className="flex items-center gap-2">
                          <div className="h-1.5 w-6 bg-emerald-400 rounded-full"></div>
                          Unidirectional grain pattern
                        </li>
                        <li className="flex items-center gap-2">
                          <div className="h-1.5 w-6 bg-emerald-400 rounded-full"></div>
                          Enhanced scratch resistance
                        </li>
                        <li className="flex items-center gap-2">
                          <div className="h-1.5 w-6 bg-emerald-400 rounded-full"></div>
                          Uniform color distribution
                        </li>
                      </ul>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </motion.div>

      {/* Filter Bar */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="max-w-5xl mx-auto mb-12"
      >
        <div className="flex flex-wrap justify-center gap-3">
          {filters.map((filter) => (
            <motion.button
              key={filter.id}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveFilter(filter.id)}
              className={`px-5 py-2.5 rounded-xl font-medium text-sm transition-all duration-300 flex items-center gap-2 ${
                activeFilter === filter.id
                  ? `bg-gradient-to-r ${filter.color} text-white shadow-lg`
                  : "bg-white text-gray-600 hover:bg-gray-50 border border-gray-200 shadow-sm"
              }`}
            >
              {filter.label}
              {filter.id !== "all" && (
                <span className={`text-xs px-2 py-0.5 rounded-full ${
                  activeFilter === filter.id ? "bg-white/20" : "bg-gray-100"
                }`}>
                  {filter.items?.length || 0}
                </span>
              )}
            </motion.button>
          ))}
        </div>
      </motion.div>

      {/* Hairline Products Grid */}
      <div className="max-w-7xl mx-auto mb-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map((item) => (
            <motion.div
              key={item.id}
              layoutId={`hairline-card-${item.id}`}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.4, type: "spring" }}
              whileHover={{ y: -8 }}
              onHoverStart={() => setHoveredCard(item.id)}
              onHoverEnd={() => setHoveredCard(null)}
              onClick={() => setSelected(item)}
              className="group cursor-pointer relative"
            >
              {/* Card Container with Gradient Border */}
              <div className="relative rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 bg-gradient-to-br from-white to-gray-50 border border-gray-100">
                {/* Grain Direction Indicator */}
                <div className="absolute top-4 left-4 z-10">
                  <div className="flex items-center gap-1">
                    {[1, 2, 3].map((line) => (
                      <div key={line} className="h-1 w-3 bg-emerald-500/80 rounded-full"></div>
                    ))}
                  </div>
                </div>
                
                {/* Image with Hairline Pattern Effect */}
                <div className="relative h-64 overflow-hidden">
                  <motion.img
                    src={item.img}
                    alt={item.name}
                    className="w-full h-full object-cover"
                    animate={{
                      scale: hoveredCard === item.id ? 1.08 : 1,
                    }}
                    transition={{ duration: 0.7 }}
                  />
                  
                  {/* Linear Pattern Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/0 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute inset-0 bg-[linear-gradient(90deg,transparent_50%,rgba(255,255,255,0.3)_50%)] bg-[length:6px_1px]"></div>
                  </div>
                  
                  {/* Color Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent"></div>
                </div>
                
                {/* Content Section */}
                <div className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-lg font-semibold text-slate-800 mb-1 group-hover:text-emerald-700 transition-colors">
                        {item.name}
                      </h3>
                      <p className="text-sm text-gray-600">{item.finish}</p>
                    </div>
                    <div 
                      className="w-6 h-6 rounded-full border-2 border-white shadow-md"
                      style={{ backgroundColor: item.color }}
                    />
                  </div>
                  
                  <p className="text-sm text-gray-600 mb-4 line-clamp-2">
                    {item.description}
                  </p>
                  
                  {/* Specifications */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="text-xs text-gray-500 font-medium">
                      {item.code}
                    </div>
                    <div className="text-xs text-emerald-600 font-medium">
                      {item.grain}
                    </div>
                  </div>
                  
                  {/* View Button */}
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                    className="flex items-center justify-between pt-4 border-t border-gray-100"
                  >
                    <span className="text-sm text-emerald-600 group-hover:text-emerald-700 transition-colors inline-flex items-center gap-1">
                      Explore Finish
                      <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </span>
                    <div className="flex items-center gap-1">
                      <div className="h-1 w-4 bg-emerald-400 rounded-full"></div>
                      <div className="h-1 w-4 bg-emerald-400 rounded-full"></div>
                      <div className="h-1 w-4 bg-emerald-400 rounded-full"></div>
                    </div>
                  </motion.div>
                </div>
              </div>
              
              {/* Glow Effect */}
              <div className="absolute -inset-1 bg-gradient-to-r from-emerald-400/10 to-teal-400/10 rounded-2xl blur-lg opacity-0 group-hover:opacity-100 -z-10 transition-opacity duration-500" />
            </motion.div>
          ))}
        </div>
      </div>

      {/* Detail View Modal */}
      <AnimatePresence>
        {selected && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 overflow-y-auto"
          >
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelected(null)}
              className="fixed inset-0 bg-emerald-950/95 backdrop-blur-xl"
            />

            {/* Modal Content */}
            <div className="relative min-h-screen flex items-center justify-center p-4">
              <motion.div
                layoutId={`hairline-card-${selected.id}`}
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                transition={{ type: "spring", damping: 25, stiffness: 200 }}
                className="relative w-full max-w-6xl bg-gradient-to-br from-white to-emerald-50 rounded-2xl shadow-2xl overflow-hidden border border-emerald-100"
              >
                {/* Close button */}
                <button
                  onClick={() => setSelected(null)}
                  className="absolute top-6 right-6 z-10 p-3 rounded-full bg-white/90 backdrop-blur-sm text-gray-500 hover:text-gray-700 hover:bg-white transition-all shadow-lg hover:shadow-xl"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>

                {/* Navigation Arrows */}
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    const currentIndex = hairlineProducts.findIndex(p => p.id === selected.id);
                    const prevIndex = (currentIndex - 1 + hairlineProducts.length) % hairlineProducts.length;
                    setSelected(hairlineProducts[prevIndex]);
                  }}
                  className="absolute left-6 top-1/2 -translate-y-1/2 z-10 p-3 rounded-full bg-white/90 backdrop-blur-sm text-gray-500 hover:text-gray-700 hover:bg-white transition-all shadow-lg hover:shadow-xl"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
                  </svg>
                </button>

                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    const currentIndex = hairlineProducts.findIndex(p => p.id === selected.id);
                    const nextIndex = (currentIndex + 1) % hairlineProducts.length;
                    setSelected(hairlineProducts[nextIndex]);
                  }}
                  className="absolute right-6 top-1/2 -translate-y-1/2 z-10 p-3 rounded-full bg-white/90 backdrop-blur-sm text-gray-500 hover:text-gray-700 hover:bg-white transition-all shadow-lg hover:shadow-xl"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                  </svg>
                </button>

                {/* Content Grid */}
                <div className="grid lg:grid-cols-2 gap-8">
                  {/* Left Image Column */}
                  <div className="relative h-full min-h-[500px] lg:min-h-[600px] bg-gradient-to-br from-emerald-50 to-teal-50">
                    <div className="absolute inset-0 flex items-center justify-center p-8">
                      <motion.img
                        src={selected.img}
                        alt={selected.name}
                        className="relative z-10 w-full h-full object-contain"
                        animate={{
                          scale: [1, 1.01, 1],
                        }}
                        transition={{
                          duration: 4,
                          repeat: Infinity,
                          ease: "easeInOut"
                        }}
                      />
                    </div>
                    
                    {/* Hairline Pattern Overlay */}
                    <div className="absolute inset-0 bg-[linear-gradient(90deg,transparent_50%,rgba(255,255,255,0.2)_50%)] bg-[length:8px_1px] opacity-20"></div>
                    
                    {/* Color Badge */}
                    <div className="absolute bottom-6 left-6 z-20 bg-white/95 backdrop-blur-sm px-6 py-4 rounded-xl shadow-2xl border border-emerald-100">
                      <div className="flex items-center gap-4">
                        <div 
                          className="w-10 h-10 rounded-full border-2 border-white shadow-lg flex items-center justify-center"
                          style={{ backgroundColor: selected.color }}
                        >
                          <div className="h-4 w-4 bg-white/30 rounded-full"></div>
                        </div>
                        <div>
                          <p className="text-lg font-semibold text-slate-800">{selected.name}</p>
                          <p className="text-sm text-emerald-600">{selected.code}</p>
                          <div className="flex items-center gap-2 mt-1">
                            <span className="text-xs text-gray-500">{selected.finish}</span>
                            <span className="text-xs text-gray-500">•</span>
                            <span className="text-xs text-gray-500">{selected.grain}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Right Info Column */}
                  <div className="p-8 md:p-12">
                    <motion.div
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.1 }}
                      className="space-y-8"
                    >
                      {/* Header */}
                      <div>
                        <h2 className="text-3xl font-light text-slate-800 mb-3">{selected.name}</h2>
                        <p className="text-gray-600 mb-4">{selected.description}</p>
                        <div className="inline-flex items-center gap-3 px-4 py-2 bg-emerald-100 rounded-lg border border-emerald-200">
                          <span className="text-sm text-emerald-700">Product Code:</span>
                          <span className="font-semibold text-slate-800">{selected.code}</span>
                        </div>
                      </div>

                      {/* Applications with Filter */}
                      <div>
                        <div className="flex items-center justify-between mb-6">
                          <div className="flex items-center gap-3">
                            <div className="h-6 w-1 bg-gradient-to-b from-emerald-600 to-teal-500 rounded-full" />
                            <h3 className="text-xl font-semibold text-slate-800">Applications</h3>
                          </div>
                          <span className="text-sm text-gray-500">
                            {filteredApplications.length} applications
                          </span>
                        </div>
                        
                        {/* Category Filters */}
                        <div className="flex flex-wrap gap-2 mb-6">
                          {categories.map((category) => (
                            <motion.button
                              key={category.id}
                              whileHover={{ scale: 1.05 }}
                              whileTap={{ scale: 0.95 }}
                              onClick={() => setActiveCategory(category.id)}
                              className={`px-3 py-1.5 text-xs rounded-lg transition-all duration-300 flex items-center gap-1.5 ${
                                activeCategory === category.id
                                  ? "bg-gradient-to-r from-emerald-600 to-teal-500 text-white"
                                  : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                              }`}
                            >
                              <span>{category.icon}</span>
                              {category.label}
                            </motion.button>
                          ))}
                        </div>

                        {/* Applications List */}
                        <AnimatePresence mode="wait">
                          <motion.div
                            key={activeCategory}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            className="space-y-3"
                          >
                            {filteredApplications.map((app, index) => (
                              <motion.div
                                key={app.name}
                                initial={{ opacity: 0, x: -10 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: index * 0.03 }}
                                className="flex items-center gap-3 p-3 rounded-lg hover:bg-emerald-50 transition-colors border border-transparent hover:border-emerald-100"
                              >
                                <span className="text-xl">{app.icon}</span>
                                <span className="text-gray-700">{app.name}</span>
                              </motion.div>
                            ))}
                          </motion.div>
                        </AnimatePresence>
                      </div>

                      {/* Specifications Grid */}
                      <div className="grid md:grid-cols-2 gap-6 pt-8 border-t border-gray-200">
                        <div className="space-y-4">
                          <h4 className="font-semibold text-slate-800">Technical Specifications</h4>
                          <ul className="space-y-3 text-sm text-gray-600">
                            <li>
                              <span className="font-medium text-emerald-700">Material Grades:</span>
                              <br />202, 304, 304L, 316, 316L, 430, 441
                            </li>
                            <li>
                              <span className="font-medium text-emerald-700">Surface Finish:</span>
                              <br />Hairline #4 (Long Grain)
                            </li>
                            <li>
                              <span className="font-medium text-emerald-700">Coating Technology:</span>
                              <br />Advanced PVD Coating
                            </li>
                          </ul>
                        </div>

                        <div className="space-y-4">
                          <h4 className="font-semibold text-slate-800">Dimensions & Availability</h4>
                          <ul className="space-y-3 text-sm text-gray-600">
                            <li>
                              <span className="font-medium text-emerald-700">Standard Sizes:</span>
                              <br />1260 × 2500 mm
                              <br />1500 × 3000 mm
                            </li>
                            <li>
                              <span className="font-medium text-emerald-700">Thickness Range:</span>
                              <br />0.60 mm to 5.00 mm
                            </li>
                            <li>
                              <span className="font-medium text-emerald-700">Custom Sizes:</span>
                              <br />Available on demand
                            </li>
                          </ul>
                        </div>
                      </div>

                      {/* Datasheet Section */}
                      <div className="pt-8 border-t border-gray-200">
                        <div className="bg-gradient-to-r from-emerald-50 to-teal-50 rounded-xl p-6 border border-emerald-100">
                          <h4 className="font-semibold text-slate-800 mb-4">Technical Documentation</h4>
                          <p className="text-sm text-gray-600 mb-6">
                            Hairline finish sheets are supplied with complete technical documentation,
                            including surface finish specifications and PVD coating details.
                          </p>
                          <motion.button
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            className="w-full py-3.5 bg-gradient-to-r from-emerald-600 to-teal-500 text-white rounded-xl hover:from-emerald-700 hover:to-teal-600 transition-all duration-300 shadow-md hover:shadow-lg flex items-center justify-center gap-3"
                          >
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                            </svg>
                            Download Technical Datasheet
                          </motion.button>
                        </div>
                      </div>
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Bottom Decorative Element */}
      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 0.5 }}
        className="max-w-4xl mx-auto mt-20"
      >
        <div className="h-px bg-gradient-to-r from-transparent via-emerald-300/50 to-transparent" />
      </motion.div>
    </section>
  );
}