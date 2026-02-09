import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const brushedProducts = [
  {
    id: 1,
    name: "#4 Finish - Silver",
    code: "MX: #4 Silver",
    img: "/images/brushed-silver.jpg",
    color: "#e5e7eb",
    finish: "Satin #4",
    grit: "180-220 Grit",
    description: "Classic satin finish with uniform brushed texture"
  },
  {
    id: 2,
    name: "#4 Finish - Gold",
    code: "MX: #4 Gold",
    img: "/images/brushed-gold.jpg",
    color: "#f59e0b",
    finish: "Satin #4",
    grit: "180-220 Grit",
    description: "Premium gold satin finish with warm metallic sheen"
  },
  {
    id: 3,
    name: "#4 Finish - Rose Gold",
    code: "MX: #4 Rose Gold",
    img: "/images/brushed-rose.jpg",
    color: "#f472b6",
    finish: "Satin #4",
    grit: "180-220 Grit",
    description: "Contemporary rose gold with soft brushed texture"
  },
  {
    id: 4,
    name: "#4 Finish - Bronze",
    code: "MX: #4 Bronze",
    img: "/images/brushed-bronze.jpg",
    color: "#b45309",
    finish: "Satin #4",
    grit: "180-220 Grit",
    description: "Warm bronze satin finish for traditional applications"
  },
  {
    id: 5,
    name: "#4 Finish - Champagne",
    code: "MX: #4 Champagne",
    img: "/images/brushed-champagne.jpg",
    color: "#fde68a",
    finish: "Satin #4",
    grit: "180-220 Grit",
    description: "Soft champagne satin with delicate brushed effect"
  },
  {
    id: 6,
    name: "#4 Finish - Black",
    code: "MX: #4 Black",
    img: "/images/brushed-black.jpg",
    color: "#374151",
    finish: "Satin #4",
    grit: "180-220 Grit",
    description: "Deep black satin finish with subtle texture"
  },
  {
    id: 7,
    name: "#4 Finish - Blue",
    code: "MX: #4 Blue",
    img: "/images/brushed-blue.jpg",
    color: "#3b82f6",
    finish: "Satin #4",
    grit: "180-220 Grit",
    description: "Vibrant blue satin for modern design applications"
  },
  {
    id: 8,
    name: "#4 Finish - Pink",
    code: "MX: #4 Pink",
    img: "/images/brushed-pink.jpg",
    color: "#ec4899",
    finish: "Satin #4",
    grit: "180-220 Grit",
    description: "Soft pink satin finish with brushed elegance"
  },
  {
    id: 9,
    name: "#4 Finish - Green",
    code: "MX: #4 Green",
    img: "/images/brushed-green.jpg",
    color: "#10b981",
    finish: "Satin #4",
    grit: "180-220 Grit",
    description: "Natural green satin with organic brushed texture"
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

export default function BrushedFinish() {
  const [selected, setSelected] = useState(null);
  const [activeFilter, setActiveFilter] = useState("all");
  const [hoveredCard, setHoveredCard] = useState(null);
  const [activeCategory, setActiveCategory] = useState("all");
  const [showFinishInfo, setShowFinishInfo] = useState(false);

  const filters = [
    { id: "all", label: "All Finishes", color: "from-slate-600 to-gray-500" },
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
    ? brushedProducts 
    : brushedProducts.filter(product => 
        filters.find(f => f.id === activeFilter)?.items?.includes(product.id)
      );

  const filteredApplications = activeCategory === "all" 
    ? applications 
    : applications.filter(app => app.category === activeCategory);

  return (
    <section className="w-full bg-gradient-to-b from-white to-slate-50 py-20 px-6 md:px-12">
      {/* Header with Gradient */}
      <motion.div
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, type: "spring" }}
        className="text-center mb-16"
      >
        <div className="relative inline-block mb-8">
          <div className="absolute -inset-4 bg-gradient-to-r from-slate-500/20 to-gray-400/20 blur-2xl rounded-full" />
          <h1 className="relative text-5xl md:text-6xl font-light text-slate-800 tracking-tight mb-4">
            #4 Finish With PVD Coating
          </h1>
        </div>
        <p className="text-gray-600 max-w-2xl mx-auto text-lg">
          Premium satin finish with uniform brushed texture and durable PVD coating
        </p>
      </motion.div>

      {/* Finish Description */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="max-w-6xl mx-auto mb-16"
      >
        <div className="bg-gradient-to-br from-white to-slate-50 rounded-2xl p-8 md:p-12 shadow-xl border border-slate-100">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-4">
              <div className="h-12 w-2 bg-gradient-to-b from-slate-600 to-gray-500 rounded-full"></div>
              <div>
                <h3 className="text-2xl font-semibold text-slate-800">
                  Highest Quality Ti Coloured in #4 Finish
                </h3>
                <p className="text-sm text-gray-500 mt-1">Premium Satin Brushed Finish</p>
              </div>
            </div>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setShowFinishInfo(!showFinishInfo)}
              className="px-4 py-2 text-sm bg-slate-100 text-slate-700 rounded-lg hover:bg-slate-200 transition-colors"
            >
              {showFinishInfo ? "Hide Details" : "Finish Details"}
            </motion.button>
          </div>
          
          <div className="space-y-6">
            <p className="text-gray-600 leading-relaxed">
              #4 finish, commonly referred to as "satin finish", is a general purpose 
              bright polish which is the most popular choice for architectural applications, 
              offering the perfect balance of aesthetics and durability.
            </p>
            
            <AnimatePresence>
              {showFinishInfo && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  className="overflow-hidden"
                >
                  <div className="grid md:grid-cols-2 gap-8 pt-6 border-t border-slate-100">
                    <div className="space-y-4">
                      <h4 className="font-semibold text-slate-700">PVD Coating Technology</h4>
                      <p className="text-gray-600 text-sm">
                        Titanium stainless steel sheets are colored through an advanced PVD process. 
                        Physical vapor deposition ensures colors remain bright, even, and extremely 
                        resistant to wear, corrosion, and environmental factors.
                      </p>
                    </div>
                    <div className="space-y-4">
                      <h4 className="font-semibold text-slate-700">Finish Characteristics</h4>
                      <ul className="text-gray-600 text-sm space-y-2">
                        <li className="flex items-center gap-2">
                          <div className="h-1.5 w-6 bg-slate-400 rounded-full"></div>
                          Uniform satin brushed texture
                        </li>
                        <li className="flex items-center gap-2">
                          <div className="h-1.5 w-6 bg-slate-400 rounded-full"></div>
                          180-220 grit surface finish
                        </li>
                        <li className="flex items-center gap-2">
                          <div className="h-1.5 w-6 bg-slate-400 rounded-full"></div>
                          Enhanced scratch resistance
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

      {/* Brushed Products Grid */}
      <div className="max-w-7xl mx-auto mb-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map((item) => (
            <motion.div
              key={item.id}
              layoutId={`brushed-card-${item.id}`}
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
              {/* Card Container */}
              <div className="relative rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 bg-gradient-to-br from-white to-gray-50 border border-gray-100">
                {/* Grit Indicator */}
                <div className="absolute top-4 left-4 z-10">
                  <div className="px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full">
                    <span className="text-xs font-medium text-slate-700">{item.grit}</span>
                  </div>
                </div>
                
                {/* Image with Brushed Texture Effect */}
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
                  
                  {/* Brushed Texture Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/0 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_50%,rgba(255,255,255,0.2)_50%)] bg-[size:8px_8px]"></div>
                  </div>
                  
                  {/* Color Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent"></div>
                </div>
                
                {/* Content Section */}
                <div className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-lg font-semibold text-slate-800 mb-1 group-hover:text-slate-900 transition-colors">
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
                    <div className="flex items-center gap-1">
                      {[1, 2, 3].map((dot) => (
                        <div key={dot} className="h-1.5 w-1.5 bg-slate-300 rounded-full"></div>
                      ))}
                    </div>
                  </div>
                  
                  {/* View Button */}
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                    className="flex items-center justify-between pt-4 border-t border-gray-100"
                  >
                    <span className="text-sm text-slate-600 group-hover:text-slate-800 transition-colors inline-flex items-center gap-1">
                      View Satin Finish
                      <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </span>
                    <div className="flex items-center gap-1">
                      <div className="h-1 w-6 bg-slate-300 rounded-full group-hover:bg-slate-400 transition-colors"></div>
                      <div className="h-1 w-4 bg-slate-300 rounded-full group-hover:bg-slate-400 transition-colors"></div>
                      <div className="h-1 w-2 bg-slate-300 rounded-full group-hover:bg-slate-400 transition-colors"></div>
                    </div>
                  </motion.div>
                </div>
              </div>
              
              {/* Glow Effect */}
              <div className="absolute -inset-1 bg-gradient-to-r from-slate-300/10 to-gray-400/10 rounded-2xl blur-lg opacity-0 group-hover:opacity-100 -z-10 transition-opacity duration-500" />
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
              className="fixed inset-0 bg-slate-950/95 backdrop-blur-xl"
            />

            {/* Modal Content */}
            <div className="relative min-h-screen flex items-center justify-center p-4">
              <motion.div
                layoutId={`brushed-card-${selected.id}`}
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                transition={{ type: "spring", damping: 25, stiffness: 200 }}
                className="relative w-full max-w-6xl bg-gradient-to-br from-white to-slate-50 rounded-2xl shadow-2xl overflow-hidden border border-slate-100"
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
                    const currentIndex = brushedProducts.findIndex(p => p.id === selected.id);
                    const prevIndex = (currentIndex - 1 + brushedProducts.length) % brushedProducts.length;
                    setSelected(brushedProducts[prevIndex]);
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
                    const currentIndex = brushedProducts.findIndex(p => p.id === selected.id);
                    const nextIndex = (currentIndex + 1) % brushedProducts.length;
                    setSelected(brushedProducts[nextIndex]);
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
                  <div className="relative h-full min-h-[500px] lg:min-h-[600px] bg-gradient-to-br from-slate-100 to-gray-100">
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
                    
                    {/* Brushed Pattern Overlay */}
                    <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_50%,rgba(255,255,255,0.1)_50%)] bg-[size:12px_12px] opacity-30"></div>
                    
                    {/* Color Badge */}
                    <div className="absolute bottom-6 left-6 z-20 bg-white/95 backdrop-blur-sm px-6 py-4 rounded-xl shadow-2xl border border-slate-100">
                      <div className="flex items-center gap-4">
                        <div 
                          className="w-10 h-10 rounded-full border-2 border-white shadow-lg flex items-center justify-center"
                          style={{ backgroundColor: selected.color }}
                        >
                          <div className="h-3 w-6 bg-white/30 rounded-sm rotate-45"></div>
                        </div>
                        <div>
                          <p className="text-lg font-semibold text-slate-800">{selected.name}</p>
                          <p className="text-sm text-slate-600">{selected.code}</p>
                          <div className="flex items-center gap-3 mt-1">
                            <span className="text-xs px-2 py-1 bg-slate-100 text-slate-700 rounded">{selected.finish}</span>
                            <span className="text-xs px-2 py-1 bg-slate-100 text-slate-700 rounded">{selected.grit}</span>
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
                        <div className="inline-flex items-center gap-3 px-4 py-2 bg-slate-100 rounded-lg border border-slate-200">
                          <span className="text-sm text-slate-700">Product Code:</span>
                          <span className="font-semibold text-slate-800">{selected.code}</span>
                        </div>
                      </div>

                      {/* Applications with Filter */}
                      <div>
                        <div className="flex items-center justify-between mb-6">
                          <div className="flex items-center gap-3">
                            <div className="h-6 w-1 bg-gradient-to-b from-slate-600 to-gray-500 rounded-full" />
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
                                  ? "bg-gradient-to-r from-slate-600 to-gray-500 text-white"
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
                                className="flex items-center gap-3 p-3 rounded-lg hover:bg-slate-50 transition-colors border border-transparent hover:border-slate-100"
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
                              <span className="font-medium text-slate-700">Material Grades:</span>
                              <br />202, 304, 304L, 316, 316L, 430
                            </li>
                            <li>
                              <span className="font-medium text-slate-700">Surface Finish:</span>
                              <br />#4 Satin Finish (Brushed)
                            </li>
                            <li>
                              <span className="font-medium text-slate-700">Surface Roughness:</span>
                              <br />Ra 0.4 - 0.8 μm
                            </li>
                          </ul>
                        </div>

                        <div className="space-y-4">
                          <h4 className="font-semibold text-slate-800">Dimensions & Availability</h4>
                          <ul className="space-y-3 text-sm text-gray-600">
                            <li>
                              <span className="font-medium text-slate-700">Standard Sizes:</span>
                              <br />1260 × 2500 mm
                              <br />1500 × 3000 mm
                            </li>
                            <li>
                              <span className="font-medium text-slate-700">Thickness Range:</span>
                              <br />0.60 mm to 5.00 mm
                            </li>
                            <li>
                              <span className="font-medium text-slate-700">Custom Sizes:</span>
                              <br />Available on demand
                            </li>
                          </ul>
                        </div>
                      </div>

                      {/* Datasheet Section */}
                      <div className="pt-8 border-t border-gray-200">
                        <div className="bg-gradient-to-r from-slate-50 to-gray-100 rounded-xl p-6 border border-slate-100">
                          <h4 className="font-semibold text-slate-800 mb-4">Technical Documentation</h4>
                          <p className="text-sm text-gray-600 mb-6">
                            #4 Satin finish sheets are supplied with complete technical documentation,
                            including surface finish specifications and PVD coating details.
                          </p>
                          <motion.button
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            className="w-full py-3.5 bg-gradient-to-r from-slate-600 to-gray-500 text-white rounded-xl hover:from-slate-700 hover:to-gray-600 transition-all duration-300 shadow-md hover:shadow-lg flex items-center justify-center gap-3"
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
        <div className="h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent" />
      </motion.div>
    </section>
  );
}