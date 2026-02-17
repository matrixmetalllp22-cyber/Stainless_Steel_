// import { useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";

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
//   const [selectedImage, setSelectedImage] = useState(null);
//   const [hoveredIndex, setHoveredIndex] = useState(null);

//   return (
//     <section className="w-full bg-gradient-to-b from-gray-50 to-white py-20 px-6 md:px-12">
//       {/* Header */}
//       <motion.div
//         initial={{ opacity: 0, y: 40 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         viewport={{ once: true }}
//         transition={{ duration: 0.7 }}
//         className="max-w-4xl mx-auto text-center mb-16"
//       >
//         <div className="inline-block mb-4">
//           <div className="h-1 w-20 bg-gradient-to-r from-slate-700 to-slate-500 mx-auto rounded-full"></div>
//         </div>
        
//         <h2 className="text-3xl md:text-4xl font-light text-slate-800 mb-6 tracking-tight">
//           Embossed Patterns in PVD Coating
//         </h2>

//         <p className="text-gray-500 leading-relaxed max-w-2xl mx-auto text-lg">
//           Premium embossed stainless sheets with durable patterns, ideal for high-traffic areas and long-term applications.
//         </p>
//       </motion.div>

//       {/* Patterns Grid */}
//       <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 mb-24">
//         {patterns.map((item, index) => (
//           <motion.div
//             key={index}
//             onHoverStart={() => setHoveredIndex(index)}
//             onHoverEnd={() => setHoveredIndex(null)}
//             initial={{ opacity: 0, scale: 0.95 }}
//             whileInView={{ opacity: 1, scale: 1 }}
//             viewport={{ once: true, margin: "-50px" }}
//             transition={{ duration: 0.4, delay: index * 0.03 }}
//             whileHover={{ y: -8, transition: { duration: 0.2 } }}
//             className="relative"
//           >
//             {/* Card with floating effect */}
//             <div className="relative group cursor-pointer" onClick={() => setSelectedImage(item)}>
//               {/* Hover overlay */}
//               <div className="absolute inset-0 bg-gradient-to-t from-slate-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl z-10"></div>
              
//               {/* Image container with shine effect */}
//               <div className="relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500">
//                 <div className="absolute inset-0 bg-gradient-to-br from-gray-100 to-gray-200 z-0"></div>
                
//                 <motion.div
//                   animate={{
//                     scale: hoveredIndex === index ? 1.05 : 1,
//                     rotate: hoveredIndex === index ? 0.5 : 0,
//                   }}
//                   transition={{ duration: 0.5 }}
//                   className="relative z-10"
//                 >
//                   <img
//                     src={item.img}
//                     alt={item.name}
//                     className="w-full h-48 object-cover"
//                   />
//                 </motion.div>
                
//                 {/* Shine effect */}
//                 <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
//               </div>
              
//               {/* Pattern name with slide-up effect */}
//               <motion.div
//                 initial={{ y: 0 }}
//                 animate={{ y: hoveredIndex === index ? -5 : 0 }}
//                 className="mt-4 text-center"
//               >
//                 <p className="text-sm font-medium text-slate-700 tracking-wide">
//                   {item.name}
//                 </p>
//                 <div className="h-0.5 w-8 bg-gradient-to-r from-slate-600 to-slate-400 mx-auto mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
//               </motion.div>
//             </div>
//           </motion.div>
//         ))}
//       </div>

//       {/* Info Cards */}
//       <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8 mb-20">
//         {[
//           {
//             title: "Specifications",
//             color: "from-slate-700 to-slate-600",
//             items: [
//               { label: "Material Grades", value: "304, 304L, 316, 316L, 441" },
//               { label: "Finish", value: "Embossed Pattern" },
//               { label: "Color", value: "Silver, Gold, Rose Gold, Bronze, Black, Champagne" },
//               { label: "Thickness", value: "0.60 mm to 1.50 mm" },
//             ]
//           },
//           {
//             title: "Dimensions & Availability",
//             color: "from-slate-600 to-slate-500",
//             items: [
//               { label: "Dimensions", value: "1260 × 2500 mm\n1500 × 3000 mm\nSpecial dimensions on demand" },
//               { label: "Availability", value: "In stock / To produce" },
//             ]
//           },
//           {
//             title: "Datasheet",
//             color: "from-slate-500 to-slate-400",
//             items: [
//               { label: "Datasheet MIX", value: "Embossed Pattern" },
//               { special: "We supply stainless steel sheets as per our catalogue. Any minor colour difference and brightness variation may occur due to raw material reflection." },
//             ]
//           }
//         ].map((section, index) => (
//           <motion.div
//             key={index}
//             initial={{ opacity: 0, y: 30 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.5, delay: index * 0.1 }}
//             className="relative group"
//           >
//             {/* Card with gradient border */}
//             <div className="bg-gradient-to-br from-white to-gray-50 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
//               <div className={`h-1 w-16 bg-gradient-to-r ${section.color} rounded-full mb-6`}></div>
              
//               <h3 className="text-xl font-semibold text-slate-800 mb-6">
//                 {section.title}
//               </h3>
              
//               <div className="space-y-5">
//                 {section.items.map((item, i) => (
//                   <div key={i} className="pb-4 border-b border-gray-100 last:border-0 last:pb-0">
//                     {item.special ? (
//                       <p className="text-sm text-gray-600 leading-relaxed">{item.special}</p>
//                     ) : (
//                       <>
//                         <p className="font-medium text-slate-700 mb-1">{item.label}</p>
//                         <p className="text-sm text-gray-600 whitespace-pre-line">{item.value}</p>
//                       </>
//                     )}
//                   </div>
//                 ))}
                
//                 {section.title === "Datasheet" && (
//                   <motion.button
//                     whileHover={{ scale: 1.05 }}
//                     whileTap={{ scale: 0.95 }}
//                     className="mt-6 px-6 py-3 bg-gradient-to-r from-slate-700 to-slate-600 text-white rounded-xl hover:from-slate-800 hover:to-slate-700 transition-all duration-300 shadow-md hover:shadow-lg w-full"
//                   >
//                     Download Datasheet
//                   </motion.button>
//                 )}
//               </div>
//             </div>
//           </motion.div>
//         ))}
//       </div>

//       {/* Image Popup Modal */}
//       <AnimatePresence>
//         {selectedImage && (
//           <motion.div
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             exit={{ opacity: 0 }}
//             onClick={() => setSelectedImage(null)}
//             className="fixed inset-0 bg-black/90 backdrop-blur-sm z-50 flex items-center justify-center p-4"
//           >
//             <motion.div
//               initial={{ scale: 0.9, opacity: 0 }}
//               animate={{ scale: 1, opacity: 1 }}
//               exit={{ scale: 0.9, opacity: 0 }}
//               transition={{ type: "spring", damping: 25 }}
//               onClick={(e) => e.stopPropagation()}
//               className="relative max-w-4xl max-h-[90vh]"
//             >
//               {/* Close button */}
//               <motion.button
//                 whileHover={{ rotate: 90 }}
//                 onClick={() => setSelectedImage(null)}
//                 className="absolute -top-12 right-0 text-white text-2xl hover:text-gray-300 transition-colors"
//               >
//                 ✕
//               </motion.button>
              
//               {/* Image container with floating effect */}
//               <motion.div
//                 animate={{
//                   y: [0, -5, 0],
//                 }}
//                 transition={{
//                   duration: 4,
//                   repeat: Infinity,
//                   ease: "easeInOut"
//                 }}
//                 className="relative"
//               >
//                 <img
//                   src={selectedImage.img}
//                   alt={selectedImage.name}
//                   className="rounded-2xl shadow-2xl max-h-[70vh] object-contain"
//                 />
                
//                 {/* Glow effect */}
//                 <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-2xl blur-xl -z-10"></div>
//               </motion.div>
              
//               {/* Image name */}
//               <motion.div
//                 initial={{ y: 20, opacity: 0 }}
//                 animate={{ y: 0, opacity: 1 }}
//                 transition={{ delay: 0.2 }}
//                 className="mt-6 text-center"
//               >
//                 <h3 className="text-2xl font-light text-white mb-2">{selectedImage.name}</h3>
//                 <p className="text-gray-300">Embossed PVD Coating Pattern</p>
//               </motion.div>
              
//               {/* Navigation arrows */}
//               <div className="absolute inset-y-0 left-0 flex items-center -ml-16">
//                 <button
//                   onClick={(e) => {
//                     e.stopPropagation();
//                     const currentIndex = patterns.findIndex(p => p.img === selectedImage.img);
//                     const prevIndex = (currentIndex - 1 + patterns.length) % patterns.length;
//                     setSelectedImage(patterns[prevIndex]);
//                   }}
//                   className="p-3 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-sm transition-colors"
//                 >
//                   ←
//                 </button>
//               </div>
//               <div className="absolute inset-y-0 right-0 flex items-center -mr-16">
//                 <button
//                   onClick={(e) => {
//                     e.stopPropagation();
//                     const currentIndex = patterns.findIndex(p => p.img === selectedImage.img);
//                     const nextIndex = (currentIndex + 1) % patterns.length;
//                     setSelectedImage(patterns[nextIndex]);
//                   }}
//                   className="p-3 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-sm transition-colors"
//                 >
//                   →
//                 </button>
//               </div>
//             </motion.div>
//           </motion.div>
//         )}
//       </AnimatePresence>
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
];

export default function Embossed() {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <section className="w-full bg-[#fdfdfd] py-24 px-6 lg:px-24">
      {/* Refined Header */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="max-w-3xl mx-auto text-center mb-24"
      >
        <span className="text-xs font-bold tracking-[0.3em] text-slate-400 uppercase">Premium Collection</span>
        <h2 className="text-4xl md:text-5xl font-extralight text-slate-900 mt-4 mb-8">
          Embossed <span className="font-medium text-slate-700">Patterns</span>
        </h2>
        <p className="text-slate-500 font-light text-lg leading-relaxed">
          Where durability meets architectural elegance. Our PVD coated sheets 
          provide a tactile depth designed for the world's most demanding interiors.
        </p>
      </motion.div>

      {/* Grid: Increased Gap & Cleaner Cards */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 mb-32">
        {patterns.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.05 }}
            viewport={{ once: true }}
            whileHover={{ y: -8 }}
            className="group cursor-pointer"
            onClick={() => setSelectedImage(item)}
          >
            <div className="relative aspect-[4/5] overflow-hidden rounded-xl bg-gray-100 shadow-sm transition-all duration-500 group-hover:shadow-2xl group-hover:shadow-slate-200">
              {/* Subtle Overlay */}
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-300 z-10" />
              
              <motion.img
                src={item.img}
                alt={item.name}
                className="w-full h-full object-cover grayscale-[20%] group-hover:grayscale-0 transition-all duration-700"
                whileHover={{ scale: 1.1 }}
              />
              
              {/* Quick View Prompt */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 opacity-0 group-hover:opacity-100 transition-opacity">
                <span className="bg-white/90 backdrop-blur-md px-4 py-2 rounded-full text-[10px] uppercase tracking-widest font-bold text-slate-900 shadow-xl">
                  Quick View
                </span>
              </div>
            </div>
            
            <div className="mt-6 text-center">
              <h4 className="text-sm font-semibold text-slate-800 tracking-wider uppercase">{item.name}</h4>
              <p className="text-xs text-slate-400 mt-1 uppercase tracking-tighter">PVD Stainless Steel</p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Specs Section: Minimalist Look */}
      <div className="max-w-6xl mx-auto border-t border-slate-100 pt-20 grid md:grid-cols-3 gap-16">
        <div>
          <h3 className="text-xs font-bold tracking-widest uppercase text-slate-900 mb-8 border-l-2 border-slate-900 pl-4">Specifications</h3>
          <ul className="space-y-4">
            {[
              { l: "Material", v: "304, 304L, 316, 316L" },
              { l: "Thickness", v: "0.60 mm — 1.50 mm" },
              { l: "Colors", v: "Gold, Rose, Bronze, Black" }
            ].map((spec, i) => (
              <li key={i} className="flex justify-between items-end pb-2 border-b border-slate-50">
                <span className="text-xs text-slate-400 uppercase">{spec.l}</span>
                <span className="text-sm text-slate-700 font-medium">{spec.v}</span>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-xs font-bold tracking-widest uppercase text-slate-900 mb-8 border-l-2 border-slate-900 pl-4">Dimensions</h3>
          <p className="text-sm text-slate-600 leading-relaxed">
            Standard: 1260 × 2500 mm <br />
            Large: 1500 × 3000 mm <br />
            Custom dimensions available upon architectural request.
          </p>
        </div>

        <div className="flex flex-col justify-center items-start">
           <button className="group relative px-8 py-4 bg-slate-900 text-white text-xs font-bold tracking-widest uppercase rounded-none transition-all hover:bg-slate-800 w-full overflow-hidden">
             <span className="relative z-10">Download Catalog</span>
             <div className="absolute inset-0 bg-slate-700 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
           </button>
        </div>
      </div>

      {/* Modal - Light & Airy */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div 
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
            className="fixed inset-0 bg-white/95 backdrop-blur-xl z-[100] flex items-center justify-center p-8"
          >
             <button className="absolute top-10 right-10 text-slate-400 hover:text-slate-900 transition-colors">
               <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M6 18L18 6M6 6l12 12"/></svg>
             </button>
             <div className="max-w-5xl w-full grid md:grid-cols-2 gap-12 items-center">
                <img src={selectedImage.img} className="w-full rounded-sm shadow-2xl" alt="" />
                <div className="space-y-6">
                   <h2 className="text-4xl font-light text-slate-900">{selectedImage.name}</h2>
                   <p className="text-slate-500 leading-relaxed">This embossed pattern offers a unique reflective depth, making it ideal for high-end elevator cabins, wall cladding, and luxury furniture accents.</p>
                   <button className="px-8 py-3 border border-slate-900 text-xs font-bold tracking-widest uppercase hover:bg-slate-900 hover:text-white transition-all">Request Sample</button>
                </div>
             </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}