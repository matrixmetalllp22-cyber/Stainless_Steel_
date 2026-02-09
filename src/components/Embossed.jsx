// import { motion } from "framer-motion";

// const patterns = [
//   { name: "Leather Gold", img: "/images/leather-gold.jpg" },
//   { name: "Leather Silver", img: "/images/leather-silver.jpg" },
//   { name: "Honeykomb Gold", img: "/images/honeykomb-gold.jpg" },
//   { name: "HK Rose Gold", img: "/images/hk-rose.jpg" },
//   { name: "HoneyKomb", img: "/images/honeykomb.jpg" },
//   { name: "Mosaic", img: "/images/mosaic.jpg" },

//   { name: "Checks Gold", img: "/images/checks-gold.jpg" },
//   { name: "Checks", img: "/images/checks.jpg" },
//   { name: "Mosaic Gold", img: "/images/mosaic-gold.jpg" },
//   { name: "3D Cubes", img: "/images/3d-cubes.jpg" },
//   { name: "Canvas", img: "/images/canvas.jpg" },
//   { name: "Checks (Small)", img: "/images/checks-small.jpg" },

//   { name: "Linen", img: "/images/linen.jpg" },
//   { name: "Linen Gold", img: "/images/linen-gold.jpg" },
//   { name: "Linen Black", img: "/images/linen-black.jpg" },
//   { name: "Linen Champagne", img: "/images/linen-champagne.jpg" },
//   { name: "5WL", img: "/images/5wl.jpg" },
//   { name: "6WL", img: "/images/6wl.jpg" },
// ];

// export default function Embossed() {
//   return (
//     <section className="w-full bg-white py-16 px-6 md:px-12">

//       {/* ================= GRID ================= */}
//       <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 mb-20">

//         {patterns.map((item, index) => (
//           <motion.div
//             key={index}
//             whileHover={{ scale: 1.05 }}
//             initial={{ opacity: 0, y: 30 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.4 }}
//             className="text-center cursor-pointer"
//           >
//             <div className="rounded-xl overflow-hidden shadow-md border hover:shadow-xl transition">
//               <img
//                 src={item.img}
//                 alt={item.name}
//                 className="w-full h-40 object-cover"
//               />
//             </div>

//             <p className="mt-3 text-sm text-gray-700 font-medium">
//               {item.name}
//             </p>
//           </motion.div>
//         ))}

//       </div>

//       {/* ================= TITLE ================= */}
//       <div className="max-w-4xl mx-auto text-center mb-16">

//         <h2 className="text-2xl md:text-3xl font-semibold text-orange-600 mb-4">
//           Embossed Patterns in PVD Coating
//         </h2>

//         <p className="text-gray-600 leading-relaxed">
//           Embossed pattern stainless sheets are produced by rolling the pattern
//           on to the sheets. This type of embossed sheets is highly popular for
//           high traffic areas and for longer durability.
//         </p>

//       </div>

//       {/* ================= INFO SECTION ================= */}
//       <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-10 bg-gray-50 p-10 rounded-xl shadow-sm">

//         {/* Specifications */}
//         <motion.div
//           initial={{ opacity: 0, x: -20 }}
//           whileInView={{ opacity: 1, x: 0 }}
//           transition={{ duration: 0.5 }}
//         >
//           <h3 className="text-orange-600 font-semibold text-lg mb-4 border-b pb-2">
//             Specifications
//           </h3>

//           <ul className="space-y-3 text-sm text-gray-700">

//             <li>
//               <span className="font-semibold">Material Grades:</span>
//               <br />304, 304L, 316, 316L, 441
//             </li>

//             <li>
//               <span className="font-semibold">Finish:</span>
//               <br />Embossed Pattern
//             </li>

//             <li>
//               <span className="font-semibold">Color:</span>
//               <br />
//               Silver, Gold, Rose Gold, Bronze, Black, Champagne
//             </li>

//             <li>
//               <span className="font-semibold">Thickness:</span>
//               <br />0.60 mm to 1.50 mm
//             </li>

//           </ul>
//         </motion.div>

//         {/* Dimensions */}
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.5 }}
//         >
//           <h3 className="text-orange-600 font-semibold text-lg mb-4 border-b pb-2">
//             Dimensions & Availability
//           </h3>

//           <ul className="space-y-3 text-sm text-gray-700">

//             <li>
//               <span className="font-semibold">Dimensions:</span>
//               <br />
//               1260 × 2500 mm
//               <br />
//               1500 × 3000 mm
//               <br />
//               Special dimensions on demand
//             </li>

//             <li>
//               <span className="font-semibold">Availability:</span>
//               <br />In stock / To produce
//             </li>

//           </ul>
//         </motion.div>

//         {/* Datasheet */}
//         <motion.div
//           initial={{ opacity: 0, x: 20 }}
//           whileInView={{ opacity: 1, x: 0 }}
//           transition={{ duration: 0.5 }}
//         >
//           <h3 className="text-orange-600 font-semibold text-lg mb-4 border-b pb-2">
//             Datasheet
//           </h3>

//           <div className="text-sm text-gray-700 space-y-4">

//             <p>
//               <span className="font-semibold">Datasheet MIX:</span>
//               <br />
//               Embossed Pattern
//             </p>

//             <p>
//               We supply stainless steel sheets as per our catalogue.
//               Any minor colour difference and brightness variation
//               may occur due to raw material reflection.
//             </p>

//             <button className="mt-4 px-5 py-2 bg-orange-600 text-white rounded-md hover:bg-orange-700 transition">
//               Download Datasheet
//             </button>

//           </div>
//         </motion.div>

//       </div>

//     </section>
//   );
// }












import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const patterns = [
  { name: "Leather Gold", img: "/images/leather-gold.jpg" },
  { name: "Leather Silver", img: "/images/leather-silver.jpg" },
  { name: "Honeykomb Gold", img: "/images/honeykomb-gold.jpg" },
  { name: "HK Rose Gold", img: "/images/hk-rose.jpg" },
  { name: "HoneyKomb", img: "/images/honeykomb.jpg" },
  { name: "Mosaic", img: "/images/mosaic.jpg" },
  { name: "Checks Gold", img: "/images/checks-gold.jpg" },
  { name: "Checks", img: "/images/checks.jpg" },
  { name: "Mosaic Gold", img: "/images/mosaic-gold.jpg" },
  { name: "3D Cubes", img: "/images/3d-cubes.jpg" },
  { name: "Canvas", img: "/images/canvas.jpg" },
  { name: "Checks (Small)", img: "/images/checks-small.jpg" },
  { name: "Linen", img: "/images/linen.jpg" },
  { name: "Linen Gold", img: "/images/linen-gold.jpg" },
  { name: "Linen Black", img: "/images/linen-black.jpg" },
  { name: "Linen Champagne", img: "/images/linen-champagne.jpg" },
  { name: "5WL", img: "/images/5wl.jpg" },
  { name: "6WL", img: "/images/6wl.jpg" },
];

export default function Embossed() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <section className="w-full bg-gradient-to-b from-gray-50 to-white py-20 px-6 md:px-12">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="max-w-4xl mx-auto text-center mb-16"
      >
        <div className="inline-block mb-4">
          <div className="h-1 w-20 bg-gradient-to-r from-slate-700 to-slate-500 mx-auto rounded-full"></div>
        </div>
        
        <h2 className="text-3xl md:text-4xl font-light text-slate-800 mb-6 tracking-tight">
          Embossed Patterns in PVD Coating
        </h2>

        <p className="text-gray-500 leading-relaxed max-w-2xl mx-auto text-lg">
          Premium embossed stainless sheets with durable patterns, ideal for high-traffic areas and long-term applications.
        </p>
      </motion.div>

      {/* Patterns Grid */}
      <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 mb-24">
        {patterns.map((item, index) => (
          <motion.div
            key={index}
            onHoverStart={() => setHoveredIndex(index)}
            onHoverEnd={() => setHoveredIndex(null)}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.4, delay: index * 0.03 }}
            whileHover={{ y: -8, transition: { duration: 0.2 } }}
            className="relative"
          >
            {/* Card with floating effect */}
            <div className="relative group cursor-pointer" onClick={() => setSelectedImage(item)}>
              {/* Hover overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl z-10"></div>
              
              {/* Image container with shine effect */}
              <div className="relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500">
                <div className="absolute inset-0 bg-gradient-to-br from-gray-100 to-gray-200 z-0"></div>
                
                <motion.div
                  animate={{
                    scale: hoveredIndex === index ? 1.05 : 1,
                    rotate: hoveredIndex === index ? 0.5 : 0,
                  }}
                  transition={{ duration: 0.5 }}
                  className="relative z-10"
                >
                  <img
                    src={item.img}
                    alt={item.name}
                    className="w-full h-48 object-cover"
                  />
                </motion.div>
                
                {/* Shine effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
              </div>
              
              {/* Pattern name with slide-up effect */}
              <motion.div
                initial={{ y: 0 }}
                animate={{ y: hoveredIndex === index ? -5 : 0 }}
                className="mt-4 text-center"
              >
                <p className="text-sm font-medium text-slate-700 tracking-wide">
                  {item.name}
                </p>
                <div className="h-0.5 w-8 bg-gradient-to-r from-slate-600 to-slate-400 mx-auto mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </motion.div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Info Cards */}
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8 mb-20">
        {[
          {
            title: "Specifications",
            color: "from-slate-700 to-slate-600",
            items: [
              { label: "Material Grades", value: "304, 304L, 316, 316L, 441" },
              { label: "Finish", value: "Embossed Pattern" },
              { label: "Color", value: "Silver, Gold, Rose Gold, Bronze, Black, Champagne" },
              { label: "Thickness", value: "0.60 mm to 1.50 mm" },
            ]
          },
          {
            title: "Dimensions & Availability",
            color: "from-slate-600 to-slate-500",
            items: [
              { label: "Dimensions", value: "1260 × 2500 mm\n1500 × 3000 mm\nSpecial dimensions on demand" },
              { label: "Availability", value: "In stock / To produce" },
            ]
          },
          {
            title: "Datasheet",
            color: "from-slate-500 to-slate-400",
            items: [
              { label: "Datasheet MIX", value: "Embossed Pattern" },
              { special: "We supply stainless steel sheets as per our catalogue. Any minor colour difference and brightness variation may occur due to raw material reflection." },
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
            {/* Card with gradient border */}
            <div className="bg-gradient-to-br from-white to-gray-50 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
              <div className={`h-1 w-16 bg-gradient-to-r ${section.color} rounded-full mb-6`}></div>
              
              <h3 className="text-xl font-semibold text-slate-800 mb-6">
                {section.title}
              </h3>
              
              <div className="space-y-5">
                {section.items.map((item, i) => (
                  <div key={i} className="pb-4 border-b border-gray-100 last:border-0 last:pb-0">
                    {item.special ? (
                      <p className="text-sm text-gray-600 leading-relaxed">{item.special}</p>
                    ) : (
                      <>
                        <p className="font-medium text-slate-700 mb-1">{item.label}</p>
                        <p className="text-sm text-gray-600 whitespace-pre-line">{item.value}</p>
                      </>
                    )}
                  </div>
                ))}
                
                {section.title === "Datasheet" && (
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="mt-6 px-6 py-3 bg-gradient-to-r from-slate-700 to-slate-600 text-white rounded-xl hover:from-slate-800 hover:to-slate-700 transition-all duration-300 shadow-md hover:shadow-lg w-full"
                  >
                    Download Datasheet
                  </motion.button>
                )}
              </div>
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
            className="fixed inset-0 bg-black/90 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", damping: 25 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-4xl max-h-[90vh]"
            >
              {/* Close button */}
              <motion.button
                whileHover={{ rotate: 90 }}
                onClick={() => setSelectedImage(null)}
                className="absolute -top-12 right-0 text-white text-2xl hover:text-gray-300 transition-colors"
              >
                ✕
              </motion.button>
              
              {/* Image container with floating effect */}
              <motion.div
                animate={{
                  y: [0, -5, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="relative"
              >
                <img
                  src={selectedImage.img}
                  alt={selectedImage.name}
                  className="rounded-2xl shadow-2xl max-h-[70vh] object-contain"
                />
                
                {/* Glow effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-2xl blur-xl -z-10"></div>
              </motion.div>
              
              {/* Image name */}
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="mt-6 text-center"
              >
                <h3 className="text-2xl font-light text-white mb-2">{selectedImage.name}</h3>
                <p className="text-gray-300">Embossed PVD Coating Pattern</p>
              </motion.div>
              
              {/* Navigation arrows */}
              <div className="absolute inset-y-0 left-0 flex items-center -ml-16">
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    const currentIndex = patterns.findIndex(p => p.img === selectedImage.img);
                    const prevIndex = (currentIndex - 1 + patterns.length) % patterns.length;
                    setSelectedImage(patterns[prevIndex]);
                  }}
                  className="p-3 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-sm transition-colors"
                >
                  ←
                </button>
              </div>
              <div className="absolute inset-y-0 right-0 flex items-center -mr-16">
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    const currentIndex = patterns.findIndex(p => p.img === selectedImage.img);
                    const nextIndex = (currentIndex + 1) % patterns.length;
                    setSelectedImage(patterns[nextIndex]);
                  }}
                  className="p-3 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-sm transition-colors"
                >
                  →
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}