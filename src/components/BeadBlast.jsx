import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const beadBlastProducts = [
  {
    id: 1,
    name: "Bead Blast - Silver",
    code: "MX: BB Silver",
    img: "/images/bead-silver.jpg",
    color: "#c0c0c0",
    description: "Classic silver bead blast finish with uniform matte texture"
  },
  {
    id: 2,
    name: "Bead Blast - Gold",
    code: "MX: BB Gold",
    img: "/images/bead-gold.jpg",
    color: "#ffd700",
    description: "Rich gold finish with subtle metallic reflection"
  },
  {
    id: 3,
    name: "Bead Blast - Rose Gold",
    code: "MX: BB Rose Gold",
    img: "/images/bead-rose.jpg",
    color: "#b76e79",
    description: "Modern rose gold with warm undertones"
  },
  {
    id: 4,
    name: "Bead Blast - Bronze",
    code: "MX: BB Bronze",
    img: "/images/bead-bronze.jpg",
    color: "#cd7f32",
    description: "Elegant bronze finish with antique character"
  },
  {
    id: 5,
    name: "Bead Blast - Champagne",
    code: "MX: BB Champagne",
    img: "/images/bead-champagne.jpg",
    color: "#f7e7ce",
    description: "Soft champagne with delicate shimmer"
  },
  {
    id: 6,
    name: "Bead Blast - Black",
    code: "MX: BB Black",
    img: "/images/bead-black.jpg",
    color: "#2c2c2c",
    description: "Deep black with minimal light reflection"
  },
  {
    id: 7,
    name: "Bead Blast - Blue",
    code: "MX: BB Blue",
    img: "/images/bead-blue.jpg",
    color: "#4169e1",
    description: "Contemporary blue with industrial appeal"
  },
  {
    id: 8,
    name: "Bead Blast - Pink",
    code: "MX: BB Pink",
    img: "/images/bead-pink.jpg",
    color: "#ffb6c1",
    description: "Soft pink finish for decorative applications"
  },
  {
    id: 9,
    name: "Bead Blast - Green",
    code: "MX: BB Green",
    img: "/images/bead-green.jpg",
    color: "#2e8b57",
    description: "Organic green with natural aesthetic"
  },
];

const applications = [
  "Architectural Cladding",
  "Shopping Malls",
  "Elevator Panels",
  "Decorative Facades",
  "Door Panels",
  "Column Casings",
  "Display Equipment",
  "Street Furniture",
  "Kitchen Equipment",
  "Marine Industry",
  "Automotive & Aviation Industries",
];

export default function BeadBlast() {
  const [selected, setSelected] = useState(null);
  const [activeFilter, setActiveFilter] = useState("all");
  const [hoveredProduct, setHoveredProduct] = useState(null);

  const colorFilters = [
    { id: "all", label: "All Finishes", color: "from-slate-600 to-slate-500" },
    { id: "metallic", label: "Metallic", color: "from-amber-500 to-yellow-500", items: [1, 2, 3, 4, 5] },
    { id: "dark", label: "Dark Tones", color: "from-gray-700 to-gray-600", items: [6] },
    { id: "colored", label: "Colored", color: "from-blue-500 to-purple-500", items: [7, 8, 9] },
  ];

  const filteredProducts = activeFilter === "all" 
    ? beadBlastProducts 
    : beadBlastProducts.filter(product => 
        colorFilters.find(f => f.id === activeFilter)?.items?.includes(product.id)
      );

  return (
    <section className="w-full bg-gradient-to-b from-white to-gray-50 py-20 px-6 md:px-12">
      {/* Header Section */}
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, type: "spring" }}
        className="text-center mb-16"
      >
        <div className="inline-block mb-6">
          <motion.div 
            initial={{ width: 0 }}
            animate={{ width: "100px" }}
            transition={{ delay: 0.3, duration: 1 }}
            className="h-1 bg-gradient-to-r from-slate-600 to-slate-400 rounded-full mx-auto"
          />
        </div>
        
        <h1 className="text-4xl md:text-5xl font-light text-slate-800 tracking-tight mb-4">
          Bead Blast Finishes
        </h1>
        
        <p className="text-gray-500 max-w-2xl mx-auto">
          Premium bead blast finishes with uniform matte texture and color consistency
        </p>
      </motion.div>

      {/* Color Filters */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="max-w-4xl mx-auto mb-12"
      >
        <div className="flex flex-wrap justify-center gap-3">
          {colorFilters.map((filter) => (
            <motion.button
              key={filter.id}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveFilter(filter.id)}
              className={`px-5 py-2.5 rounded-xl font-medium text-sm transition-all duration-300 flex items-center gap-2 ${
                activeFilter === filter.id
                  ? `bg-gradient-to-r ${filter.color} text-white shadow-lg`
                  : "bg-white text-gray-600 hover:bg-gray-50 border border-gray-200"
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

      {/* Grid View */}
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map((item) => (
            <motion.div
              key={item.id}
              layoutId={`card-${item.id}`}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.4, type: "spring" }}
              whileHover={{ y: -8 }}
              onHoverStart={() => setHoveredProduct(item.id)}
              onHoverEnd={() => setHoveredProduct(null)}
              onClick={() => setSelected(item)}
              className="group cursor-pointer relative"
            >
              {/* Card Container */}
              <div className="relative rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 bg-gradient-to-br from-gray-100 to-gray-200">
                {/* Color indicator */}
                <div 
                  className="absolute top-4 right-4 w-6 h-6 rounded-full border-2 border-white shadow-md z-10"
                  style={{ backgroundColor: item.color }}
                />
                
                {/* Image with hover effect */}
                <div className="relative h-64 overflow-hidden">
                  <motion.img
                    src={item.img}
                    alt={item.name}
                    className="w-full h-full object-cover"
                    animate={{
                      scale: hoveredProduct === item.id ? 1.1 : 1,
                    }}
                    transition={{ duration: 0.7 }}
                  />
                  
                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  {/* Shine effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                </div>
                
                {/* Content */}
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-slate-800 mb-2 group-hover:text-slate-900 transition-colors">
                    {item.name}
                  </h3>
                  <p className="text-sm text-gray-600 mb-4 line-clamp-2">
                    {item.description}
                  </p>
                  
                  {/* Code badge */}
                  <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-white/80 backdrop-blur-sm rounded-lg border border-gray-200">
                    <span className="text-xs text-gray-500 font-medium">Code:</span>
                    <span className="text-sm font-semibold text-slate-700">{item.code}</span>
                  </div>
                  
                  {/* View button */}
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                    className="mt-4 text-right"
                  >
                    <span className="text-sm text-slate-600 group-hover:text-slate-800 transition-colors inline-flex items-center gap-1">
                      View Details
                      <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </span>
                  </motion.div>
                </div>
              </div>
              
              {/* Glow effect on hover */}
              <div className="absolute -inset-1 bg-gradient-to-r from-slate-400/20 to-gray-500/20 rounded-2xl blur-lg opacity-0 group-hover:opacity-100 -z-10 transition-opacity duration-500" />
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
              className="fixed inset-0 bg-black/90 backdrop-blur-md"
            />

            {/* Modal Content */}
            <div className="relative min-h-screen flex items-center justify-center p-4">
              <motion.div
                layoutId={`card-${selected.id}`}
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                transition={{ type: "spring", damping: 25, stiffness: 200 }}
                className="relative w-full max-w-6xl bg-gradient-to-br from-white to-gray-50 rounded-2xl shadow-2xl overflow-hidden"
              >
                {/* Close button */}
                <button
                  onClick={() => setSelected(null)}
                  className="absolute top-6 right-6 z-10 p-2 rounded-full bg-white/90 backdrop-blur-sm text-gray-500 hover:text-gray-700 hover:bg-white transition-all shadow-lg hover:shadow-xl"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>

                {/* Navigation buttons */}
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    const currentIndex = beadBlastProducts.findIndex(p => p.id === selected.id);
                    const prevIndex = (currentIndex - 1 + beadBlastProducts.length) % beadBlastProducts.length;
                    setSelected(beadBlastProducts[prevIndex]);
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
                    const currentIndex = beadBlastProducts.findIndex(p => p.id === selected.id);
                    const nextIndex = (currentIndex + 1) % beadBlastProducts.length;
                    setSelected(beadBlastProducts[nextIndex]);
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
                  <div className="relative h-full min-h-[500px] lg:min-h-[600px]">
                    <div className="absolute inset-0 bg-gradient-to-br from-gray-200 to-gray-300" />
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
                    
                    {/* Color badge */}
                    <div className="absolute bottom-6 left-6 z-20 bg-white/95 backdrop-blur-sm px-6 py-3 rounded-xl shadow-lg border border-gray-200">
                      <div className="flex items-center gap-3">
                        <div 
                          className="w-6 h-6 rounded-full border-2 border-white shadow-md"
                          style={{ backgroundColor: selected.color }}
                        />
                        <div>
                          <p className="text-sm font-medium text-slate-700">{selected.name}</p>
                          <p className="text-xs text-gray-500">{selected.code}</p>
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
                        <p className="text-gray-600">{selected.description}</p>
                        <div className="mt-4 inline-flex items-center gap-2 px-4 py-2 bg-slate-100 rounded-lg">
                          <span className="text-sm text-gray-500">Product Code:</span>
                          <span className="font-semibold text-slate-700">{selected.code}</span>
                        </div>
                      </div>

                      {/* Applications */}
                      <div>
                        <div className="flex items-center gap-3 mb-6">
                          <div className="h-6 w-1 bg-gradient-to-b from-slate-600 to-slate-400 rounded-full" />
                          <h3 className="text-xl font-semibold text-slate-800">Applications</h3>
                        </div>
                        
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                          {applications.map((app, index) => (
                            <motion.div
                              key={index}
                              initial={{ opacity: 0, x: -10 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: index * 0.03 }}
                              className="flex items-center gap-3 p-3 rounded-lg hover:bg-slate-50 transition-colors group/item"
                            >
                              <div className="h-2 w-2 rounded-full bg-slate-400 group-hover/item:bg-slate-600 transition-colors" />
                              <span className="text-gray-600 group-hover/item:text-slate-800 transition-colors">{app}</span>
                            </motion.div>
                          ))}
                        </div>
                      </div>

                      {/* Specifications Grid */}
                      <div className="grid md:grid-cols-2 gap-6 pt-8 border-t border-gray-200">
                        <div className="space-y-4">
                          <h4 className="font-semibold text-slate-700">Specifications</h4>
                          <ul className="space-y-3 text-sm text-gray-600">
                            <li>
                              <span className="font-medium text-slate-700">Material Grades:</span>
                              <br />202, 304, 304L, 316, 316L, 430, 441
                            </li>
                            <li>
                              <span className="font-medium text-slate-700">Finish:</span>
                              <br />Bead Blast
                            </li>
                            <li>
                              <span className="font-medium text-slate-700">Thickness:</span>
                              <br />0.60 mm to 5.00 mm
                            </li>
                          </ul>
                        </div>

                        <div className="space-y-4">
                          <h4 className="font-semibold text-slate-700">Dimensions & Availability</h4>
                          <ul className="space-y-3 text-sm text-gray-600">
                            <li>
                              <span className="font-medium text-slate-700">Dimensions:</span>
                              <br />1260 × 2500 mm
                              <br />1500 × 3000 mm
                              <br />Special dimensions on demand
                            </li>
                            <li>
                              <span className="font-medium text-slate-700">Availability:</span>
                              <br />In stock / Made to order
                            </li>
                          </ul>
                        </div>
                      </div>

                      {/* Datasheet Section */}
                      <div className="pt-8 border-t border-gray-200">
                        <div className="bg-gradient-to-r from-slate-50 to-gray-100 rounded-xl p-6 border border-gray-200">
                          <h4 className="font-semibold text-slate-700 mb-4">Technical Documentation</h4>
                          <p className="text-sm text-gray-600 mb-6">
                            All products are supplied according to our technical specifications.
                            Minor variations in color and texture may occur due to material characteristics.
                          </p>
                          <motion.button
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            className="w-full py-3.5 bg-gradient-to-r from-slate-700 to-slate-600 text-white rounded-xl hover:from-slate-800 hover:to-slate-700 transition-all duration-300 shadow-md hover:shadow-lg flex items-center justify-center gap-3"
                          >
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                            </svg>
                            Download Datasheet
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

      {/* Bottom decorative element */}
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