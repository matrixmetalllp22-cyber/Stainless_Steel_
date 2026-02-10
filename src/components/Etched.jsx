import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const etchedPatterns = [
  { name: "MX 1001", img: "/images/etched-1001.jpg" },
  { name: "MX 1002", img: "/images/etched-1002.jpg" },
  { name: "MX 1003", img: "/images/etched-1003.jpg" },
  { name: "MX 1004", img: "/images/etched-1004.jpg" },
  { name: "MX 1005", img: "/images/etched-1005.jpg" },
  { name: "MX 1006", img: "/images/etched-1006.jpg" },
];

export default function Etched() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <section className="w-full bg-gradient-to-b from-white to-gray-50 py-20 px-6 md:px-12">
      {/* Header with subtle animation */}
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, type: "spring" }}
        className="text-center mb-20"
      >
        <div className="relative inline-block mb-8">
          <h1 className="text-4xl md:text-5xl font-light text-slate-800 tracking-tight">
            Etched Pattern
          </h1>
          <motion.div 
            initial={{ width: 0 }}
            animate={{ width: "60%" }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="h-0.5 bg-gradient-to-r from-slate-300 to-slate-200 mx-auto mt-4"
          />
        </div>
      </motion.div>

      {/* Grid Section */}
      <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 mb-24">
        {etchedPatterns.map((item, index) => (
          <motion.div
            key={index}
            onHoverStart={() => setHoveredIndex(index)}
            onHoverEnd={() => setHoveredIndex(null)}
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: index * 0.05 }}
            whileHover={{ y: -6, transition: { duration: 0.2 } }}
            className="relative group"
          >
            {/* Card Container */}
            <div 
              className="relative cursor-pointer" 
              onClick={() => setSelectedImage(item)}
            >
              {/* Gradient border on hover */}
              <div className="absolute -inset-0.5 bg-gradient-to-br from-slate-400 to-slate-300 rounded-xl opacity-0 group-hover:opacity-30 blur transition duration-300"></div>
              
              {/* Image Container with shimmer effect */}
              <div className="relative overflow-hidden rounded-xl bg-gradient-to-br from-gray-100 to-gray-200 shadow-md group-hover:shadow-xl transition-all duration-500">
                {/* Shimmer overlay */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 z-10"></div>
                
                <motion.div
                  animate={{
                    scale: hoveredIndex === index ? 1.03 : 1,
                  }}
                  transition={{ duration: 0.4 }}
                  className="relative"
                >
                  <img
                    src={item.img}
                    alt={item.name}
                    className="w-full h-48 object-cover"
                  />
                </motion.div>
                
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>

              {/* Pattern Label */}
              <motion.div
                initial={{ y: 0 }}
                animate={{ y: hoveredIndex === index ? -3 : 0 }}
                className="mt-4 text-center relative"
              >
                <p className="text-sm font-medium text-slate-700 tracking-wide group-hover:text-slate-900 transition-colors">
                  {item.name}
                </p>
                <motion.div 
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: hoveredIndex === index ? 1 : 0 }}
                  className="h-0.5 w-12 bg-gradient-to-r from-slate-400 to-slate-300 mx-auto mt-2 origin-center"
                />
              </motion.div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Description Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-5xl mx-auto mb-24"
      >
        <div className="bg-gradient-to-br from-white to-gray-50 rounded-2xl p-8 md:p-12 shadow-lg border border-gray-100">
          <div className="flex items-center gap-3 mb-8">
            <div className="h-8 w-1 bg-gradient-to-b from-slate-600 to-slate-400 rounded-full"></div>
            <h2 className="text-xl font-semibold text-slate-800">Specification</h2>
          </div>

          <div className="prose prose-slate max-w-none">
            <p className="text-gray-600 leading-relaxed mb-6">
              Etching is done on Stainless Steel Sheets with the base materials
              as 2B, BA, No.4, Hairline, Super Mirror, Vibration and Bead Blast.
              It is achieved through advanced photo etching and screen printing methods.
            </p>

            <div className="space-y-6">
              <div className="pl-4 border-l-2 border-slate-200">
                <h3 className="font-semibold text-slate-700 mb-2">Custom Design</h3>
                <p className="text-gray-600">
                  While we offer an extensive collection of designs, we also specialize in creating 
                  fully customized patterns tailored to your specific requirements and vision.
                </p>
              </div>

              <div className="pl-4 border-l-2 border-slate-200">
                <h3 className="font-semibold text-slate-700 mb-2">Applications</h3>
                <p className="text-gray-600">
                  Elevator decoration, Wall cladding, Architectural doors, Outdoor installations, 
                  Hotel lobbies and interior decoration, Premium furniture, External facades, 
                  and various stainless steel product enhancements.
                </p>
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Info Cards Section */}
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8 mb-16">
        {[
          {
            title: "Specifications",
            icon: "📋",
            items: [
              { label: "Material Grades", value: "202, 304, 304L, 316, 316L, 441" },
              { label: "Finish", value: "Etched Pattern" },
              { label: "Color Options", value: "Silver, Gold, Rose Gold, Bronze, Black, Champagne" },
              { label: "Thickness Range", value: "0.60 mm to 5.00 mm" },
            ]
          },
          {
            title: "Dimensions & Availability",
            icon: "📐",
            items: [
              { label: "Standard Dimensions", value: "1260 × 2500 mm\n1500 × 3000 mm" },
              { label: "Custom Sizes", value: "Special dimensions available on request" },
              { label: "Availability", value: "In stock / Made to order" },
            ]
          },
          {
            title: "Technical Documentation",
            icon: "📄",
            items: [
              { label: "Datasheet Reference", value: "Datasheet MX: Etched Pattern" },
              { special: "All products are supplied according to our technical catalogue. Minor variations in color and finish may occur due to material characteristics and lighting conditions." },
            ]
          }
        ].map((section, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="relative"
          >
            {/* Card with subtle gradient */}
            <div className="h-full bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100">
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
                  <div key={i} className="pb-5 border-b border-gray-100 last:border-0 last:pb-0">
                    {item.special ? (
                      <p className="text-sm text-gray-600 leading-relaxed">{item.special}</p>
                    ) : (
                      <>
                        <p className="font-medium text-slate-700 mb-2">{item.label}</p>
                        <p className="text-sm text-gray-600 whitespace-pre-line leading-relaxed">{item.value}</p>
                      </>
                    )}
                  </div>
                ))}
              </div>

              {/* Download button for datasheet card */}
              {section.title === "Technical Documentation" && (
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="mt-8 w-full py-3 bg-gradient-to-r from-slate-700 to-slate-600 text-white rounded-xl hover:from-slate-800 hover:to-slate-700 transition-all duration-300 shadow-md hover:shadow-lg flex items-center justify-center gap-2"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  Download Datasheet
                </motion.button>
              )}
            </div>
          </motion.div>
        ))}
      </div>

      {/* Image Popup Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
            className="fixed inset-0 bg-black/95 backdrop-blur-md z-50 flex items-center justify-center p-4"
          >
            <motion.div
              initial={{ scale: 0.85, opacity: 0, rotateX: 10 }}
              animate={{ scale: 1, opacity: 1, rotateX: 0 }}
              exit={{ scale: 0.85, opacity: 0, rotateX: 10 }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-5xl w-full max-h-[90vh]"
            >
              {/* Close button */}
              <motion.button
                whileHover={{ scale: 1.1, rotate: 90 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => setSelectedImage(null)}
                className="absolute -top-16 right-0 text-white text-3xl hover:text-gray-300 transition-colors z-10"
              >
                ✕
              </motion.button>

              {/* Main image container */}
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                {/* Glow effect background */}
                <div className="absolute inset-0 bg-gradient-to-br from-slate-600/20 to-slate-800/20 blur-xl -z-10"></div>
                
                {/* Image with floating animation */}
                <motion.img
                  src={selectedImage.img}
                  alt={selectedImage.name}
                  className="w-full max-h-[70vh] object-contain"
                  animate={{
                    y: [0, -3, 0],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />

                {/* Navigation arrows */}
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    const currentIndex = etchedPatterns.findIndex(p => p.img === selectedImage.img);
                    const prevIndex = (currentIndex - 1 + etchedPatterns.length) % etchedPatterns.length;
                    setSelectedImage(etchedPatterns[prevIndex]);
                  }}
                  className="absolute left-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-sm transition-colors text-white"
                >
                  ←
                </button>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    const currentIndex = etchedPatterns.findIndex(p => p.img === selectedImage.img);
                    const nextIndex = (currentIndex + 1) % etchedPatterns.length;
                    setSelectedImage(etchedPatterns[nextIndex]);
                  }}
                  className="absolute right-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-sm transition-colors text-white"
                >
                  →
                </button>
              </div>

              {/* Image info */}
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.1 }}
                className="mt-8 text-center"
              >
                <h3 className="text-3xl font-light text-white mb-2">{selectedImage.name}</h3>
                <p className="text-gray-300">Precision Etched Pattern</p>
                <div className="mt-4 flex items-center justify-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-slate-400"></div>
                  <div className="w-2 h-2 rounded-full bg-slate-400"></div>
                  <div className="w-2 h-2 rounded-full bg-slate-400"></div>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}