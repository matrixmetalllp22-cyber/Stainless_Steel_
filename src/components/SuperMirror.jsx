import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const mirrorProducts = [
  {
    id: 1,
    name: "Super Mirror - Silver",
    code: "MX: #8 Silver",
    img: "/images/mirror-silver.jpg",
    color: "#d4d4d8",
    finish: "8K Mirror",
    reflectivity: "98%",
    description: "Ultra-high reflectivity with perfect mirror finish"
  },
  {
    id: 2,
    name: "Super Mirror - Gold",
    code: "MX: #8 Gold",
    img: "/images/mirror-gold.jpg",
    color: "#fbbf24",
    finish: "8K Mirror",
    reflectivity: "97%",
    description: "Luxurious gold finish with exceptional reflectivity"
  },
  {
    id: 3,
    name: "Super Mirror - Rose Gold",
    code: "MX: #8 Rose Gold",
    img: "/images/mirror-rose.jpg",
    color: "#f472b6",
    finish: "8K Mirror",
    reflectivity: "96%",
    description: "Contemporary rose gold with premium mirror surface"
  },
  {
    id: 4,
    name: "Super Mirror - Bronze",
    code: "MX: #8 Bronze",
    img: "/images/mirror-bronze.jpg",
    color: "#92400e",
    finish: "8K Mirror",
    reflectivity: "95%",
    description: "Warm bronze finish with deep mirror reflection"
  },
  {
    id: 5,
    name: "Super Mirror - Champagne",
    code: "MX: #8 Champagne",
    img: "/images/mirror-champagne.jpg",
    color: "#fde68a",
    finish: "8K Mirror",
    reflectivity: "96%",
    description: "Soft champagne with subtle warm reflections"
  },
  {
    id: 6,
    name: "Super Mirror - Black",
    code: "MX: #8 Black",
    img: "/images/mirror-black.jpg",
    color: "#1f2937",
    finish: "8K Mirror",
    reflectivity: "94%",
    description: "Deep black mirror with minimal light absorption"
  },
  {
    id: 7,
    name: "Super Mirror - Blue",
    code: "MX: #8 Blue",
    img: "/images/mirror-blue.jpg",
    color: "#3b82f6",
    finish: "8K Mirror",
    reflectivity: "95%",
    description: "Vibrant blue finish with crystal clear reflection"
  },
  {
    id: 8,
    name: "Super Mirror - Pink",
    code: "MX: #8 Pink",
    img: "/images/mirror-pink.jpg",
    color: "#ec4899",
    finish: "8K Mirror",
    reflectivity: "95%",
    description: "Elegant pink mirror for decorative applications"
  },
  {
    id: 9,
    name: "Super Mirror - Green",
    code: "MX: #8 Green",
    img: "/images/mirror-green.jpg",
    color: "#10b981",
    finish: "8K Mirror",
    reflectivity: "95%",
    description: "Nature-inspired green with high-gloss finish"
  },
];

const applications = [
  { name: "Architectural Cladding", icon: "🏢" },
  { name: "Shopping Malls", icon: "🛍️" },
  { name: "Elevator Cabins and Doors", icon: "🔼" },
  { name: "Decorative Facades", icon: "🎨" },
  { name: "Column Casings", icon: "🏛️" },
  { name: "Display Equipment", icon: "📺" },
  { name: "Street Furniture", icon: "🪑" },
  { name: "Kitchen Equipment", icon: "🔪" },
  { name: "Marine Industry", icon: "🚢" },
  { name: "Press Plates", icon: "🏗️" },
  { name: "Pharmaceutical Machinery", icon: "💊" },
  { name: "Automotive & Aviation Industries", icon: "✈️" },
];

export default function SuperMirror() {
  const [selected, setSelected] = useState(null);
  const [activeFilter, setActiveFilter] = useState("all");
  const [hoveredCard, setHoveredCard] = useState(null);
  const [showDescription, setShowDescription] = useState(false);

  const filters = [
    { id: "all", label: "All Finishes", color: "from-blue-600 to-cyan-500" },
    { id: "premium", label: "Premium", color: "from-amber-500 to-yellow-500", items: [1, 2, 3] },
    { id: "dark", label: "Dark Tones", color: "from-gray-800 to-gray-700", items: [6] },
    { id: "colored", label: "Colored", color: "from-purple-600 to-pink-500", items: [4, 5, 7, 8, 9] },
  ];

  const filteredProducts = activeFilter === "all" 
    ? mirrorProducts 
    : mirrorProducts.filter(product => 
        filters.find(f => f.id === activeFilter)?.items?.includes(product.id)
      );

  return (
    <section className="w-full bg-gradient-to-b from-slate-50 to-white py-20 px-6 md:px-12">
      {/* Header with Gradient Accent */}
      <motion.div
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, type: "spring" }}
        className="text-center mb-16"
      >
        <div className="relative inline-block mb-8">
          <div className="absolute -inset-4 bg-gradient-to-r from-blue-500/20 to-cyan-400/20 blur-2xl rounded-full" />
          <h1 className="relative text-5xl md:text-6xl font-light text-slate-800 tracking-tight mb-4">
            #8 Mirror PVD Coating
          </h1>
        </div>
        <p className="text-gray-600 max-w-2xl mx-auto text-lg">
          Ultra-premium mirror finishes with exceptional reflectivity and durability
        </p>
      </motion.div>

      {/* Premium Description Card */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="max-w-6xl mx-auto mb-20"
      >
        <div className="bg-gradient-to-br from-white to-blue-50 rounded-2xl p-8 md:p-12 shadow-xl border border-blue-100">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-4">
              <div className="h-12 w-2 bg-gradient-to-b from-blue-600 to-cyan-500 rounded-full"></div>
              <h3 className="text-2xl font-semibold text-slate-800">
                Highest Quality Super Mirror
              </h3>
            </div>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setShowDescription(!showDescription)}
              className="px-4 py-2 text-sm bg-blue-100 text-blue-700 rounded-lg hover:bg-blue-200 transition-colors"
            >
              {showDescription ? "Show Less" : "Learn More"}
            </motion.button>
          </div>
          
          <AnimatePresence>
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: showDescription ? "auto" : 0, opacity: showDescription ? 1 : 0 }}
              exit={{ height: 0, opacity: 0 }}
              className="overflow-hidden"
            >
              <div className="grid md:grid-cols-2 gap-8 pt-6 border-t border-blue-100">
                <div className="space-y-4">
                  <p className="text-gray-600 leading-relaxed">
                    At Minox Metal we produce the highest quality #8 super mirror finish,
                    coating it with PVD in various colors on stainless steel sheets.
                    Our super mirror finish approaches near-perfect polish quality.
                  </p>
                  <div className="flex items-center gap-2 text-sm text-blue-600">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                    <span>ISO 9001:2015 Certified Production</span>
                  </div>
                </div>
                <div className="space-y-4">
                  <p className="text-gray-600 leading-relaxed">
                    Titanium sheets are colored through an advanced PVD derivative process.
                    Physical vapor deposition ensures colors remain bright, even,
                    and extremely resistant to wear and environmental factors.
                  </p>
                  <div className="flex items-center gap-2 text-sm text-blue-600">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                    <span>Advanced PVD Technology</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
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

      {/* Mirror Products Grid */}
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map((item) => (
            <motion.div
              key={item.id}
              layoutId={`mirror-card-${item.id}`}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.4, type: "spring" }}
              whileHover={{ y: -10 }}
              onHoverStart={() => setHoveredCard(item.id)}
              onHoverEnd={() => setHoveredCard(null)}
              onClick={() => setSelected(item)}
              className="group cursor-pointer relative"
            >
              {/* Mirror Effect Container */}
              <div className="relative rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 bg-gradient-to-br from-gray-900 to-black">
                {/* Reflectivity Badge */}
                <div className="absolute top-4 right-4 z-10 bg-gradient-to-r from-blue-600 to-cyan-500 text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-lg">
                  {item.reflectivity} Reflectivity
                </div>
                
                {/* Mirror Image with Reflection Effect */}
                <div className="relative h-64 overflow-hidden">
                  <motion.img
                    src={item.img}
                    alt={item.name}
                    className="w-full h-full object-cover"
                    animate={{
                      scale: hoveredCard === item.id ? 1.1 : 1,
                    }}
                    transition={{ duration: 0.7 }}
                  />
                  
                  {/* Mirror Reflection Effect */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  {/* Shine Effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                </div>
                
                {/* Content Section */}
                <div className="p-6 bg-gradient-to-t from-black/50 to-transparent">
                  <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-blue-100 transition-colors">
                    {item.name}
                  </h3>
                  <p className="text-sm text-gray-300 mb-4 line-clamp-2">
                    {item.description}
                  </p>
                  
                  {/* Specifications */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-2">
                      <div 
                        className="w-4 h-4 rounded-full border-2 border-white"
                        style={{ backgroundColor: item.color }}
                      />
                      <span className="text-sm text-gray-300">{item.finish}</span>
                    </div>
                    <div className="text-xs text-gray-400 font-medium">
                      {item.code}
                    </div>
                  </div>
                  
                  {/* View Button */}
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                    className="flex items-center justify-between"
                  >
                    <span className="text-sm text-blue-300 group-hover:text-blue-200 transition-colors inline-flex items-center gap-1">
                      View Mirror Details
                      <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </span>
                    <div className="flex items-center gap-1">
                      {[1, 2, 3].map((star) => (
                        <svg key={star} className="w-4 h-4 text-yellow-400 fill-current" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                  </motion.div>
                </div>
              </div>
              
              {/* Glow Effect */}
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-500/20 to-cyan-400/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 -z-10 transition-opacity duration-500" />
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
            {/* Backdrop with Gradient */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelected(null)}
              className="fixed inset-0 bg-gradient-to-br from-blue-900/95 to-slate-900/95 backdrop-blur-xl"
            />

            {/* Modal Content */}
            <div className="relative min-h-screen flex items-center justify-center p-4">
              <motion.div
                layoutId={`mirror-card-${selected.id}`}
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                transition={{ type: "spring", damping: 25, stiffness: 200 }}
                className="relative w-full max-w-6xl bg-gradient-to-br from-slate-900 to-blue-900 rounded-2xl shadow-2xl overflow-hidden border border-blue-700/30"
              >
                {/* Close button */}
                <button
                  onClick={() => setSelected(null)}
                  className="absolute top-6 right-6 z-10 p-3 rounded-full bg-white/10 backdrop-blur-sm text-white hover:bg-white/20 transition-all shadow-lg hover:shadow-xl"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>

                {/* Navigation Arrows */}
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    const currentIndex = mirrorProducts.findIndex(p => p.id === selected.id);
                    const prevIndex = (currentIndex - 1 + mirrorProducts.length) % mirrorProducts.length;
                    setSelected(mirrorProducts[prevIndex]);
                  }}
                  className="absolute left-6 top-1/2 -translate-y-1/2 z-10 p-3 rounded-full bg-white/10 backdrop-blur-sm text-white hover:bg-white/20 transition-all shadow-lg hover:shadow-xl"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
                  </svg>
                </button>

                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    const currentIndex = mirrorProducts.findIndex(p => p.id === selected.id);
                    const nextIndex = (currentIndex + 1) % mirrorProducts.length;
                    setSelected(mirrorProducts[nextIndex]);
                  }}
                  className="absolute right-6 top-1/2 -translate-y-1/2 z-10 p-3 rounded-full bg-white/10 backdrop-blur-sm text-white hover:bg-white/20 transition-all shadow-lg hover:shadow-xl"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                  </svg>
                </button>

                {/* Content Grid */}
                <div className="grid lg:grid-cols-2 gap-8">
                  {/* Left Image Column */}
                  <div className="relative h-full min-h-[500px] lg:min-h-[600px] bg-gradient-to-br from-black to-slate-900">
                    <motion.img
                      src={selected.img}
                      alt={selected.name}
                      className="relative z-10 w-full h-full object-cover"
                      animate={{
                        scale: [1, 1.02, 1],
                      }}
                      transition={{
                        duration: 4,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                    />
                    
                    {/* Reflection Lines Effect */}
                    <div className="absolute inset-0 bg-gradient-to-t from-blue-500/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                    
                    {/* Color Badge */}
                    <div className="absolute bottom-6 left-6 z-20 bg-gradient-to-r from-blue-900/90 to-slate-900/90 backdrop-blur-sm px-6 py-4 rounded-xl shadow-2xl border border-blue-700/30">
                      <div className="flex items-center gap-4">
                        <div 
                          className="w-8 h-8 rounded-full border-2 border-white shadow-lg"
                          style={{ backgroundColor: selected.color }}
                        />
                        <div>
                          <p className="text-lg font-semibold text-white">{selected.name}</p>
                          <p className="text-sm text-blue-200">{selected.code}</p>
                          <p className="text-xs text-gray-300 mt-1">{selected.description}</p>
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
                        <h2 className="text-3xl font-light text-white mb-3">{selected.name}</h2>
                        <div className="inline-flex items-center gap-3 px-4 py-2 bg-gradient-to-r from-blue-900/50 to-slate-900/50 rounded-lg border border-blue-700/30">
                          <span className="text-sm text-blue-200">Reflectivity:</span>
                          <span className="text-xl font-bold text-cyan-300">{selected.reflectivity}</span>
                        </div>
                      </div>

                      {/* Applications Grid */}
                      <div>
                        <div className="flex items-center gap-3 mb-6">
                          <div className="h-6 w-1 bg-gradient-to-b from-cyan-500 to-blue-500 rounded-full" />
                          <h3 className="text-xl font-semibold text-white">Applications</h3>
                        </div>
                        
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                          {applications.map((app, index) => (
                            <motion.div
                              key={index}
                              initial={{ opacity: 0, x: -10 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: index * 0.03 }}
                              className="flex items-center gap-3 p-3 rounded-lg bg-gradient-to-r from-blue-900/30 to-slate-900/30 border border-blue-800/30 hover:border-blue-700/50 transition-colors group/item"
                            >
                              <span className="text-xl">{app.icon}</span>
                              <span className="text-gray-200 group-hover/item:text-white transition-colors">{app.name}</span>
                            </motion.div>
                          ))}
                        </div>
                      </div>

                      {/* Specifications Grid */}
                      <div className="grid md:grid-cols-2 gap-6 pt-8 border-t border-blue-800/30">
                        <div className="space-y-4">
                          <h4 className="font-semibold text-white">Technical Specifications</h4>
                          <ul className="space-y-3 text-sm text-gray-300">
                            <li>
                              <span className="font-medium text-blue-200">Material Grades:</span>
                              <br />202, 304, 304L, 316, 316L, 430
                            </li>
                            <li>
                              <span className="font-medium text-blue-200">Finish:</span>
                              <br />8K Super Mirror Finish
                            </li>
                            <li>
                              <span className="font-medium text-blue-200">Surface Quality:</span>
                              <br />RA ≤ 0.01μm
                            </li>
                          </ul>
                        </div>

                        <div className="space-y-4">
                          <h4 className="font-semibold text-white">Dimensions & Availability</h4>
                          <ul className="space-y-3 text-sm text-gray-300">
                            <li>
                              <span className="font-medium text-blue-200">Standard Sizes:</span>
                              <br />1260 × 2500 mm
                              <br />1500 × 3000 mm
                              <br />2000 × 6000 mm
                            </li>
                            <li>
                              <span className="font-medium text-blue-200">Thickness Range:</span>
                              <br />0.60 mm to 14.00 mm
                            </li>
                            <li>
                              <span className="font-medium text-blue-200">Lead Time:</span>
                              <br />2-3 weeks production
                            </li>
                          </ul>
                        </div>
                      </div>

                      {/* Datasheet Section */}
                      <div className="pt-8 border-t border-blue-800/30">
                        <div className="bg-gradient-to-r from-blue-900/40 to-slate-900/40 rounded-xl p-6 border border-blue-700/30">
                          <h4 className="font-semibold text-white mb-4">Technical Documentation</h4>
                          <p className="text-sm text-gray-300 mb-6">
                            Premium mirror finishes are supplied with full technical documentation,
                            including reflectivity tests and surface quality certificates.
                          </p>
                          <motion.button
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            className="w-full py-3.5 bg-gradient-to-r from-cyan-600 to-blue-600 text-white rounded-xl hover:from-cyan-700 hover:to-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center gap-3"
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
        <div className="h-px bg-gradient-to-r from-transparent via-blue-500/30 to-transparent" />
      </motion.div>
    </section>
  );
}