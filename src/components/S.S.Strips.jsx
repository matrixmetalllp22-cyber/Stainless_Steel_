import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function SSStrips() {
  const [showApplicationDetails, setShowApplicationDetails] = useState(false);
  const [showFullList, setShowFullList] = useState(false);
  const applications = [
    "Automobile Parts",
    "Capillary Tubes",
    "Electrical & Electronic Components",
    "Filters",
    "Flexible Hoses",
    "Home Appliances Components",
    "Mobile Components",
    "Pen Parts",
    "Submersible Pump",
    "Telescopic Wipers",
    "Watch Straps",
    "Welding Electrodes"
  ];

  return (
    <section className="w-full bg-gradient-to-b from-white to-gray-50 py-20 px-6 md:px-12">
      {/* Header with minimalist design */}
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, type: "spring" }}
        className="text-center mb-20"
      >
        <div className="inline-block mb-4">
          <div className="h-0.5 w-24 bg-gradient-to-r from-slate-400 to-slate-300 rounded-full"></div>
        </div>
        
        <h1 className="text-4xl md:text-5xl font-light text-slate-800 tracking-tight mb-4">
          Stainless Steel Strips
        </h1>
        
        <p className="text-gray-500 max-w-2xl mx-auto">
          Precision-engineered strips for specialized industrial applications
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
          <div className="space-y-3">
            <div className="flex items-center gap-3 mb-2">
              <div className="h-6 w-1 bg-gradient-to-b from-slate-600 to-slate-400 rounded-full"></div>
              <h3 className="text-lg font-medium text-slate-800">
                Product Code
              </h3>
            </div>
            <div className="inline-block px-4 py-2 bg-gradient-to-r from-slate-100 to-gray-50 rounded-lg border border-gray-200">
              <p className="text-gray-600 font-medium">MX: S.S Strips</p>
            </div>
          </div>

          {/* Applications Section */}
          <div className="space-y-6">
            <div className="flex items-center gap-3 mb-2">
              <div className="h-6 w-1 bg-gradient-to-b from-slate-600 to-slate-400 rounded-full"></div>
              <h3 className="text-lg font-medium text-slate-800">
                Applications
              </h3>
            </div>

            <div className="relative">
              {/* Grid of Applications */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {applications.slice(0, showFullList ? applications.length : 6).map((app, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                    whileHover={{ x: 4, transition: { duration: 0.2 } }}
                    className="flex items-center gap-3 group cursor-pointer"
                  >
                    <div className="h-1.5 w-1.5 rounded-full bg-slate-400 group-hover:bg-slate-600 transition-colors"></div>
                    <span className="text-gray-600 text-sm group-hover:text-slate-800 transition-colors">
                      {app}
                    </span>
                  </motion.div>
                ))}
              </div>

              {/* Show More/Less Button */}
              {applications.length > 6 && (
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setShowFullList(!showFullList)}
                  className="mt-6 px-4 py-2 text-sm text-slate-600 hover:text-slate-800 transition-colors flex items-center gap-2 group"
                >
                  <span>{showFullList ? "Show Less" : "Show More Applications"}</span>
                  <svg 
                    className={`w-4 h-4 transform transition-transform ${showFullList ? "rotate-180" : ""}`} 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                  </svg>
                </motion.button>
              )}
            </div>

            {/* Applications Info Card */}
            <AnimatePresence>
              {showApplicationDetails && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  className="bg-gradient-to-br from-slate-50 to-white rounded-xl p-6 border border-gray-200 shadow-sm"
                >
                  <p className="text-sm text-gray-600 leading-relaxed">
                    Our stainless steel strips are engineered for precision applications across various industries, offering exceptional durability and corrosion resistance.
                  </p>
                </motion.div>
              )}
            </AnimatePresence>

            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => setShowApplicationDetails(!showApplicationDetails)}
              className="text-sm text-slate-600 hover:text-slate-800 transition-colors flex items-center gap-2"
            >
              <span>{showApplicationDetails ? "Hide Details" : "Learn about applications"}</span>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </motion.button>
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
          {/* Floating image container */}
          <div className="relative group">
            {/* Glow effect */}
            <div className="absolute -inset-4 bg-gradient-to-r from-slate-300/30 to-gray-400/30 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            
            {/* Image with hover animation */}
            <motion.div
              whileHover={{ y: -10, transition: { duration: 0.3 } }}
              className="relative overflow-hidden rounded-2xl shadow-2xl"
            >
              <img
                src="/images/ss-strips.jpg"
                alt="Stainless Steel Strips"
                className="w-full h-[400px] object-cover group-hover:scale-105 transition-transform duration-700"
              />
              
              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent"></div>
              
              {/* Shine effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
            </motion.div>

            {/* Floating label */}
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="absolute -bottom-6 right-8 bg-white/95 backdrop-blur-sm px-6 py-3 rounded-xl shadow-lg border border-gray-200"
            >
              <p className="text-sm font-medium text-slate-700">Industrial Grade</p>
              <p className="text-xs text-gray-500">Precision Rolled</p>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Info Cards Section */}
      <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8 mb-16">
        {[
          {
            title: "Specifications",
            icon: "⚙️",
            items: [
              { 
                label: "Material Grades", 
                value: "201, 202, 301, 302, 304, 304L, 305, 316, 316L, 321, 410, 420, 430, 439, 441"
              },
              { 
                label: "Finish", 
                value: "2D, 2B, BA, #4, Hairline, Scotch brite, CSP, Hardened & Tempered"
              },
              { label: "Width", value: "3 mm to 1550 mm" },
              { 
                label: "Thickness", 
                value: "0.10 mm to 3.00 mm\nSpecial dimensions on demand"
              },
              { label: "Edge Condition", value: "Slit, Round, Deburred" },
            ]
          },
          {
            title: "Coil Specifications",
            icon: "📦",
            items: [
              { label: "Coil ID", value: "150 / 200 / 300 / 400 / 508 / 610 mm" },
              { label: "Hardness", value: "1/4, 1/2, 3/4, Full hard, Extra hard" },
              { label: "PE Coating", value: "One side" },
              { label: "Availability", value: "In stock / Made to order" },
            ]
          },
          {
            title: "Technical Documentation",
            icon: "📋",
            items: [
              { 
                label: "Datasheet Reference", 
                value: "Datasheet MX: S.S Strips" 
              },
              { 
                special: "All materials are supplied in accordance with our technical specifications. Minor variations may occur due to material characteristics and manufacturing processes." 
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
            {/* Card with subtle hover effect */}
            <div className="h-full bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 group-hover:border-gray-200">
              {/* Icon header */}
              <div className="flex items-center gap-4 mb-8">
                <div className="text-2xl opacity-80">{section.icon}</div>
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
                    className="pb-5 border-b border-gray-100 last:border-0 last:pb-0 group/item hover:border-gray-200 transition-colors"
                  >
                    {item.special ? (
                      <p className="text-sm text-gray-600 leading-relaxed">{item.special}</p>
                    ) : (
                      <>
                        <p className="font-medium text-slate-700 mb-2 group-hover/item:text-slate-800 transition-colors">
                          {item.label}
                        </p>
                        <p className="text-sm text-gray-600 whitespace-pre-line leading-relaxed">
                          {item.value}
                        </p>
                      </>
                    )}
                  </motion.div>
                ))}
              </div>

              {/* Download button for datasheet card */}
              {/* {section.title === "Technical Documentation" && (
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
                    Download Datasheet
                  </motion.button>
                </motion.div>
              )} */}
            </div>

            {/* Decorative corner */}
            <div className="absolute top-0 right-0 w-4 h-4 border-t border-r border-gray-200 rounded-tr-2xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
            <div className="absolute bottom-0 left-0 w-4 h-4 border-b border-l border-gray-200 rounded-bl-2xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
          </motion.div>
        ))}
      </div>

      {/* Bottom Decorative Line */}
      <motion.div
        initial={{ width: 0 }}
        whileInView={{ width: "100%" }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 0.2 }}
        className="max-w-4xl mx-auto h-0.5 bg-gradient-to-r from-transparent via-slate-300 to-transparent"
      />
    </section>
  );
}