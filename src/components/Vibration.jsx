import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Vibration() {
  const [showImagePopup, setShowImagePopup] = useState(false);
  const [activeCategory, setActiveCategory] = useState("all");
  
  const applications = [
    { name: "Architectural Cladding", category: "architectural" },
    { name: "Shopping Malls", category: "commercial" },
    { name: "Elevator Cabins and Doors", category: "architectural" },
    { name: "Decorative Facades", category: "architectural" },
    { name: "Door Panels", category: "interior" },
    { name: "Column Casings", category: "architectural" },
    { name: "Display Equipment", category: "commercial" },
    { name: "Street Furniture", category: "public" },
    { name: "Kitchen Equipment", category: "industrial" },
    { name: "Marine Industry", category: "industrial" },
    { name: "Automotive & Aviation Industries", category: "industrial" },
  ];

  const categories = [
    { id: "all", name: "All Applications" },
    { id: "architectural", name: "Architectural" },
    { id: "commercial", name: "Commercial" },
    { id: "industrial", name: "Industrial" },
    { id: "interior", name: "Interior" },
    { id: "public", name: "Public" },
  ];

  const filteredApplications = activeCategory === "all" 
    ? applications 
    : applications.filter(app => app.category === activeCategory);

  return (
    <section className="w-full bg-gradient-to-b from-white to-gray-50 py-20 px-6 md:px-12">
      {/* Header Section */}
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, type: "spring" }}
        className="text-center mb-20"
      >
        <div className="inline-block mb-6">
          <motion.div 
            initial={{ width: 0 }}
            animate={{ width: "80px" }}
            transition={{ delay: 0.3, duration: 1 }}
            className="h-1 bg-gradient-to-r from-slate-600 to-slate-400 rounded-full mx-auto"
          />
        </div>
        
        <h1 className="text-4xl md:text-5xl font-light text-slate-800 tracking-tight mb-4">
          Stainless Steel Vibration
        </h1>
        
        <p className="text-gray-500 max-w-2xl mx-auto">
          Unique vibration finish for distinctive architectural and industrial applications
        </p>
      </motion.div>

      {/* Main Content Section */}
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 md:gap-20 items-center mb-24">
        
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, type: "spring" }}
          className="space-y-8"
        >
          {/* Product Code */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="h-6 w-1 bg-gradient-to-b from-slate-600 to-slate-400 rounded-full"></div>
              <h3 className="text-lg font-medium text-slate-800">
                Product Identification
              </h3>
            </div>
            <div className="inline-flex items-center gap-3 px-4 py-2 bg-gradient-to-r from-slate-50 to-gray-100 rounded-xl border border-gray-200">
              <span className="text-sm text-gray-500 font-medium">Code:</span>
              <span className="text-gray-700 font-semibold">MX: Vibration Silver</span>
            </div>
          </div>

          {/* Applications Section */}
          <div className="space-y-6">
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center gap-3">
                <div className="h-6 w-1 bg-gradient-to-b from-slate-600 to-slate-400 rounded-full"></div>
                <h3 className="text-lg font-medium text-slate-800">
                  Applications
                </h3>
              </div>
              <span className="text-sm text-gray-500">
                {filteredApplications.length} items
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
                  className={`px-4 py-2 text-sm rounded-lg transition-all duration-300 ${
                    activeCategory === category.id
                      ? "bg-gradient-to-r from-slate-700 to-slate-600 text-white shadow-md"
                      : "bg-white text-gray-600 hover:bg-gray-50 border border-gray-200"
                  }`}
                >
                  {category.name}
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
                transition={{ duration: 0.3 }}
                className="space-y-3"
              >
                {filteredApplications.map((app, index) => (
                  <motion.div
                    key={app.name}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.03 }}
                    whileHover={{ x: 4, backgroundColor: "#f8fafc" }}
                    className="flex items-center gap-4 p-3 rounded-lg hover:bg-slate-50 transition-colors group cursor-pointer border border-transparent hover:border-gray-200"
                  >
                    <div className="flex-shrink-0">
                      <div className={`h-8 w-8 rounded-full flex items-center justify-center ${
                        app.category === 'architectural' ? 'bg-blue-50 text-blue-600' :
                        app.category === 'commercial' ? 'bg-green-50 text-green-600' :
                        app.category === 'industrial' ? 'bg-purple-50 text-purple-600' :
                        app.category === 'interior' ? 'bg-amber-50 text-amber-600' :
                        'bg-gray-50 text-gray-600'
                      }`}>
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                    </div>
                    <span className="text-gray-700 group-hover:text-slate-900 transition-colors">
                      {app.name}
                    </span>
                  </motion.div>
                ))}
              </motion.div>
            </AnimatePresence>

            {/* Industry Tags */}
            <div className="pt-6 border-t border-gray-200">
              <p className="text-sm text-gray-500 mb-3">Common Industries:</p>
              <div className="flex flex-wrap gap-2">
                {['Architecture', 'Construction', 'Interior Design', 'Automotive', 'Aviation', 'Marine'].map((tag) => (
                  <span key={tag} className="px-3 py-1.5 text-xs bg-gray-100 text-gray-600 rounded-full border border-gray-200">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        {/* Right Image */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, type: "spring" }}
          className="relative"
        >
          {/* Interactive image container */}
          <div className="relative group cursor-pointer" onClick={() => setShowImagePopup(true)}>
            {/* Floating effect container */}
            <motion.div
              whileHover={{ y: -15, rotateY: 5 }}
              transition={{ duration: 0.4 }}
              className="relative"
            >
              {/* Glow effect */}
              <div className="absolute -inset-4 bg-gradient-to-br from-slate-400/20 to-gray-500/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              {/* Main image with gradient border */}
              <div className="relative overflow-hidden rounded-2xl shadow-2xl border-4 border-white">
                <img
                  src="/images/vibration.jpg"
                  alt="Stainless Steel Vibration Finish"
                  className="w-full h-[420px] object-cover group-hover:scale-110 transition-transform duration-700"
                />
                
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                {/* Shine effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                
                {/* View icon overlay */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="bg-white/90 backdrop-blur-sm p-4 rounded-full shadow-lg">
                    <svg className="w-8 h-8 text-slate-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                    </svg>
                  </div>
                </div>
              </div>

              {/* Floating info badge */}
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="absolute -bottom-4 left-6 bg-white/95 backdrop-blur-sm px-6 py-3 rounded-xl shadow-lg border border-gray-200"
              >
                <p className="text-sm font-medium text-slate-700">Vibration Finish</p>
                <p className="text-xs text-gray-500">Unique Textured Surface</p>
              </motion.div>
            </motion.div>

            {/* Click hint */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="mt-6 text-center"
            >
              <p className="text-sm text-gray-500 flex items-center justify-center gap-2">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122" />
                </svg>
                Click image for detail view
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Info Cards Section */}
      <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8 mb-16">
        {[
          {
            title: "Technical Specifications",
            icon: "🔬",
            gradient: "from-blue-50 to-cyan-50",
            items: [
              { 
                label: "Material Grades", 
                value: "202, 304, 304L, 316, 316L, 430, 441",
                icon: "🧱"
              },
              { 
                label: "Surface Finish", 
                value: "Vibration Pattern",
                icon: "✨"
              },
              { 
                label: "Color Variant", 
                value: "Silver",
                icon: "🎨"
              },
              { 
                label: "Thickness Range", 
                value: "0.60 mm to 5.00 mm",
                icon: "📏"
              },
            ]
          },
          {
            title: "Dimensions & Availability",
            icon: "📐",
            gradient: "from-emerald-50 to-teal-50",
            items: [
              { 
                label: "Standard Dimensions", 
                value: "1260 × 2500 mm\n1500 × 3000 mm",
                icon: "📊"
              },
              { 
                label: "Custom Sizes", 
                value: "Special dimensions available on request",
                icon: "⚙️"
              },
              { 
                label: "Stock Status", 
                value: "In stock / Made to order",
                icon: "📦"
              },
              { 
                label: "Lead Time", 
                value: "Standard: 1-2 weeks\nCustom: 3-4 weeks",
                icon: "⏱️"
              },
            ]
          },
          {
            title: "Technical Documentation",
            icon: "📄",
            gradient: "from-violet-50 to-purple-50",
            items: [
              { 
                label: "Datasheet Reference", 
                value: "Datasheet MX: Vibration Silver",
                icon: "📋"
              },
              { 
                special: "All products comply with industry standards. Minor variations in finish and appearance may occur due to material characteristics and lighting conditions." 
              },
              {
                label: "Quality Certifications",
                value: "ISO 9001:2015\nMaterial Test Certificates",
                icon: "🏆"
              },
            ]
          }
        ].map((section, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="relative group"
          >
            {/* Card with gradient background */}
            <div className={`h-full rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 ${section.gradient}`}>
              {/* Icon header */}
              <div className="flex items-center gap-4 mb-8">
                <div className="text-2xl">{section.icon}</div>
                <h3 className="text-xl font-semibold text-slate-800">
                  {section.title}
                </h3>
              </div>

              {/* Content */}
              <div className="space-y-6">
                {section.items.map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05 }}
                    className="pb-5 border-b border-gray-200/50 last:border-0 last:pb-0 group/item"
                  >
                    {item.special ? (
                      <p className="text-sm text-gray-600 leading-relaxed">{item.special}</p>
                    ) : (
                      <div className="flex items-start gap-3">
                        <div className="text-lg mt-0.5">{item.icon}</div>
                        <div>
                          <p className="font-medium text-slate-700 mb-1">
                            {item.label}
                          </p>
                          <p className="text-sm text-gray-600 whitespace-pre-line leading-relaxed">
                            {item.value}
                          </p>
                        </div>
                      </div>
                    )}
                  </motion.div>
                ))}
              </div>

              {/* Download button for datasheet card */}
              {section.title === "Technical Documentation" && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="mt-8"
                >
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full py-3.5 bg-gradient-to-r from-slate-700 to-slate-600 text-white rounded-xl hover:from-slate-800 hover:to-slate-700 transition-all duration-300 shadow-md hover:shadow-lg flex items-center justify-center gap-3"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                    Download Technical Datasheet
                  </motion.button>
                </motion.div>
              )}
            </div>

            {/* Decorative corner accents */}
            <div className="absolute top-4 right-4 w-2 h-2 rounded-full bg-gray-300/50 opacity-0 group-hover:opacity-100 transition-opacity"></div>
            <div className="absolute bottom-4 left-4 w-2 h-2 rounded-full bg-gray-300/50 opacity-0 group-hover:opacity-100 transition-opacity"></div>
          </motion.div>
        ))}
      </div>

      {/* Image Popup Modal */}
      <AnimatePresence>
        {showImagePopup && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setShowImagePopup(false)}
            className="fixed inset-0 bg-black/95 backdrop-blur-md z-50 flex items-center justify-center p-4"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0, rotateX: 10 }}
              animate={{ scale: 1, opacity: 1, rotateX: 0 }}
              exit={{ scale: 0.9, opacity: 0, rotateX: 10 }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-6xl w-full max-h-[90vh]"
            >
              {/* Close button */}
              <motion.button
                whileHover={{ scale: 1.1, rotate: 90 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => setShowImagePopup(false)}
                className="absolute -top-16 right-0 text-white text-3xl hover:text-gray-300 transition-colors z-10"
              >
                ✕
              </motion.button>

              {/* Main image container */}
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                {/* Glow effect background */}
                <div className="absolute inset-0 bg-gradient-to-br from-slate-600/30 to-gray-800/30 blur-xl -z-10"></div>
                
                {/* Image with floating animation */}
                <motion.img
                  src="/images/vibration.jpg"
                  alt="Stainless Steel Vibration Finish Detail"
                  className="w-full max-h-[70vh] object-contain"
                  animate={{
                    scale: [1, 1.02, 1],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
              </div>

              {/* Image info */}
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.1 }}
                className="mt-8 text-center"
              >
                <h3 className="text-3xl font-light text-white mb-2">Vibration Finish</h3>
                <p className="text-gray-300 mb-4">Unique textured stainless steel surface</p>
                <div className="flex items-center justify-center gap-4 text-sm text-gray-400">
                  <span className="flex items-center gap-1">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                    Durable Finish
                  </span>
                  <span className="flex items-center gap-1">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    Aesthetic Appeal
                  </span>
                  <span className="flex items-center gap-1">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                    </svg>
                    Architectural Grade
                  </span>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Bottom Decorative Element */}
      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 0.2 }}
        className="max-w-3xl mx-auto"
      >
        <div className="h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent"></div>
      </motion.div>
    </section>
  );
}