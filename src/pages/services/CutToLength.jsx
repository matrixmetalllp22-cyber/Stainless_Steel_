// import React from "react";
// import { motion } from "framer-motion";
// import { Layers, Gauge, Cog, Zap } from "lucide-react";

// export default function CutToLengthIndustrial() {
//   const features = [
//     { icon: <Layers className="w-7 h-7 text-orange-400" />, title: "Accurate Length", desc: "Precision length cutting for construction materials." },
//     { icon: <Gauge className="w-7 h-7 text-orange-400" />, title: "High Capacity", desc: "Matrix is Empowered With Large Production and Servicing Capabilities Pegged at 1,75,000 MT Per Annum." },
//     { icon: <Cog className="w-7 h-7 text-orange-400" />, title: "Material Versatility", desc: "Works with various steel grades & MI." },
//     { icon: <Zap className="w-7 h-7 text-orange-400" />, title: "Bulk Processing", desc: "Operations at Matrix are Enabled by Advanced Technology for  Production Lines Coupled with High Level of Skills and Management." }
//     // { icon: <Zap className="w-7 h-7 text-blue-400" />, title: "Bulk Processing", desc: "Operations at Matrix are Enabled by Advanced Technology for  Production Lines Coupled with High Level of Skills and Management." }
//   ];

//   const specs = [
//     { label: "Max Strip Length", value: "12000 mm" },
//     { label: "Only Line in South India for Larger Production ", value: "2000 mm Width " },
//     { label: "Thickness Range", value: "< 1.0 mm / 2000 mm" },
//     { label: "Length Accuracy", value: "< 0.5 mm / 2000 mm" },
//     // { label: "Length Accuracy", value: "< 0.5 mm / 2000 mm" }
//   ];

//   return (
//     <div className="bg-gradient-to-b from-slate-100 via-white to-slate-200 min-h-screen text-gray-900 font-sans">
//       <section className="relative overflow-hidden">
//         <div className="absolute inset-0">
//           <img src="https://images.unsplash.com/photo-1581091589985-5f4d4b0a5b3f?q=80&w=1600" alt="cut to length" className="w-full h-full object-cover opacity-30" />
//           <div className="absolute inset-0 bg-gradient-to-r from-gray-900/60 to-slate-800/60"></div>
//         </div>

//         <div className="relative container mx-auto px-6 py-28 md:py-40 text-white">
//           <motion.h1 initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="text-5xl md:text-6xl font-extrabold leading-tight mb-6 tracking-tight">
//             CTL – 2000 MM WIDTH X 6 MTR LENGTH With Diagonal Radius and Angular Tolerance  of  +/- 1 mm for Flatness with Auto Stacking.
//           </motion.h1>
//           <motion.p initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="text-lg md:text-xl text-orange-100 max-w-3xl mb-10">
//             Durable, precise length cutting tailored for construction and infrastructure projects designed for scale and repeatable accuracy.
//           </motion.p>

//           <motion.a whileHover={{ scale: 1.05 }} href="/contact" className="inline-block bg-orange-400 hover:bg-orange-500 text-white px-8 py-3 rounded-lg font-semibold shadow-lg">
//             Request a Quote
//           </motion.a>
//         </div>
//       </section>

//       <section className="py-20 bg-gradient-to-b from-slate-50 to-gray-100">
//         <div className="container mx-auto px-6">
//           <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-gray-800">Core <span className="text-orange-300">Capabilities</span></h2>
//           <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-8">
//             {features.map((feature, idx) => (
//               <motion.div key={idx} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: idx * 0.1 }} className="group bg-white rounded-xl p-8 shadow-md hover:shadow-xl hover:-translate-y-2 transition-all border border-gray-200">
//                 <div className="flex justify-center mb-4">{feature.icon}</div>
//                 <h3 className="text-lg font-semibold mb-2 text-gray-900">{feature.title}</h3>
//                 <p className="text-gray-600 text-sm leading-relaxed">{feature.desc}</p>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </section>

//       <section className="py-24 bg-gradient-to-r from-gray-900 via-slate-800 to-gray-900 text-white">
//         <div className="container mx-auto px-6">
//           <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Technical <span className="text-orange-400">Specifications</span></h2>
//           <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-8">
//             {specs.map((s, i) => (
//               <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 }} className="bg-white/10 backdrop-blur-md border border-white/20 p-8 rounded-2xl text-center hover:bg-white/20 transition">
//                 <p className="text-2xl md:text-3xl font-semibold text-orange-300">{s.value}</p>
//                 <p className="text-gray-300 text-sm mt-2 uppercase tracking-wide">{s.label}</p>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </section>

//       <section className="py-24 bg-gradient-to-r from-orange-600 via-slate-700 to-gray-900 text-white text-center">
//         <div className="container mx-auto px-6">
//           <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Get Started?</h2>
//           <p className="text-orange-200 mb-10 max-w-2xl mx-auto">Contact our sales team to discuss your cut-to-length requirements and ensure your project stays on schedule.</p>
//           <div className="flex flex-col sm:flex-row justify-center gap-4">
//             <a href="/contact" className="bg-white text-orange-400 px-8 py-3 rounded-lg font-semibold shadow hover:scale-105 transition-transform">Contact Us</a>
//             <a href="/" className="border-2 border-white px-8 py-3 rounded-lg font-semibold hover:bg-white/10 transition">Back Home</a>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// }




// import React from "react";
// import { motion } from "framer-motion";
// import { Zap, Layers, Shield, Package, Wrench, CheckCircle } from "lucide-react";

// export default function BlankingLineIndustrial() {
//   const highlights = [
//     { icon: <Zap className="w-8 h-8" />, title: "High-Speed Production", desc: "Engineered for maximum throughput with zero compromise on quality" },
//     { icon: <Layers className="w-8 h-8" />, title: "3-Way Auto Stacking", desc: "Laser-guided, scratch-free, drop-free stacking with auto pallet switching" },
//     { icon: <Shield className="w-8 h-8" />, title: "Scratch-Free Surfaces", desc: "Moving shear technology eliminates drag marks and ensures mirror finish" },
//     { icon: <Package className="w-8 h-8" />, title: "Export-Ready Packing", desc: "Global standard moisture-proof, edge-protected, and crated packaging" }
//   ];

//   const applications = [
//     "Automotive stamping components",
//     "Appliance body panels",
//     "Architectural façade sheets",
//     "Precision electrical enclosures",
//     "Deep-draw & press-forming blanks"
//   ];

//   return (
//     <div className="bg-gradient-to-b from-gray-50 via-white to-gray-100 min-h-screen font-sans">
//       {/* Hero */}
//       <section className="relative overflow-hidden">
//         <div className="absolute inset-0">
//           <img src="/images/blanking-industrial.jpg" alt="Blank Line" className="w-full h-full object-cover opacity-40" />
//           <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/80"></div>
//         </div>

//         <div className="relative container mx-auto px-6 py-32 md:py-44 text-white text-center">
//           <motion.h1
//             initial={{ opacity: 0, y: 50 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             className="text-4xl md:text-6xl font-extrabold leading-tight mb-6"
//           >
//             HIGH-PRECISION AUTO STACKING <br />
//             <span className="text-orange-400">& BLANKING SYSTEM</span>
//           </motion.h1>
//           <motion.p
//             initial={{ opacity: 0 }}
//             whileInView={{ opacity: 1 }}
//             transition={{ delay: 0.3 }}
//             className="text-xl md:text-2xl text-orange-100 max-w-4xl mx-auto"
//           >
//             Perfect geometry • Clean edges • Mirror finish • Zero scratches • OEM-approved blanks
//           </motion.p>
//         </div>
//       </section>

//       {/* Highlights */}
//       <section className="py-20">
//         <div className="container mx-auto px-6">
//           <h2 className="text-4xl font-bold text-center mb-16 text-gray-800">
//             Engineered for <span className="text-orange-500">Perfection</span>
//           </h2>
//           <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
//             {highlights.map((h, i) => (
//               <motion.div
//                 key={i}
//                 initial={{ opacity: 0, y: 40 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 transition={{ delay: i * 0.1 }}
//                 className="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all border border-gray-200 group"
//               >
//                 <div className="text-orange-500 mb-4 group-hover:scale-110 transition">{h.icon}</div>
//                 <h3 className="text-xl font-bold mb-3">{h.title}</h3>
//                 <p className="text-gray-600 text-sm">{h.desc}</p>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Advanced Features */}
//       <section className="py-24 bg-gradient-to-r from-black via-slate-900 to-black text-white">
//         <div className="container mx-auto px-6">
//           <h2 className="text-4xl font-bold text-center mb-16">
//             Advanced <span className="text-orange-400">Technology</span>
//           </h2>
//           <div className="grid lg:grid-cols-3 gap-10 text-center">
//             <div className="bg-white/10 backdrop-blur p-8 rounded-2xl border border-white/20">
//               <CheckCircle className="w-12 h-12 text-orange-400 mx-auto mb-4" />
//               <h3 className="text-2xl font-bold mb-3">6HI CNC Leveller</h3>
//               <p className="text-gray-300">Eliminates residual stress • Perfect flatness even on high-strength alloys</p>
//             </div>
//             <div className="bg-white/10 backdrop-blur p-8 rounded-2xl border border-white/20">
//               <Wrench className="w-12 h-12 text-orange-400 mx-auto mb-4" />
//               <h3 className="text-2xl font-bold mb-3">Servo-Driven Precision</h3>
//               <p className="text-gray-300">Real-time dimensional correction • Multi-format CNC blanking</p>
//             </div>
//             <div className="bg-white/10 backdrop-blur p-8 rounded-2xl border border-white/20">
//               <Package className="w-12 h-12 text-orange-400 mx-auto mb-4" />
//               <h3 className="text-2xl font-bold mb-3">Global Export Standards</h3>
//               <p className="text-gray-300">Moisture barrier • Anti-rust • Heavy-duty crating</p>
//             </div>
//           </div>

//           <div className="mt-16 text-center">
//             <h3 className="text-2xl font-bold mb-6 text-orange-400">Ideal Applications</h3>
//             <div className="flex flex-wrap justify-center gap-4">
//               {applications.map((app, i) => (
//                 <span key={i} className="bg-orange-500/20 px-6 py-3 rounded-full text-sm font-medium">
//                   {app}
//                 </span>
//               ))}
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* CTA */}
//       <section className="py-24 bg-orange-600 text-white text-center">
//         <div className="container mx-auto px-6">
//           <h2 className="text-4xl font-bold mb-6">Ready for OEM-Grade Blanks?</h2>
//           <p className="text-xl mb-10 max-w-3xl mx-auto">
//             Get perfectly stacked, scratch-free, export-ready blanks — delivered on time, every time.
//           </p>
//           <a href="/contact" className="inline-block bg-white text-orange-600 px-10 py-4 rounded-lg text-lg font-bold hover:bg-gray-100 transition">
//             Get a Quote Today
//           </a>
//         </div>
//       </section>
//     </div>
//   );
// }



// import React from "react";
// import { motion } from "framer-motion";
// import { Ruler, Package, Zap, Shield, Factory, CheckCircle } from "lucide-react";

// export default function CutToLengthIndustrial() {
//   const features = [
//     { icon: <Ruler className="w-8 h-8" />, title: "Ultra-Precise Length", desc: "±0.5 mm accuracy even at 12-meter sheets" },
//     { icon: <Factory className="w-8 h-8" />, title: "2000 mm Width Capacity", desc: "One of the widest CTL lines in India" },
//     { icon: <Zap className="w-8 h-8" />, title: "High-Speed Processing", desc: "Flying shear & servo precision for maximum output" },
//     { icon: <Package className="w-8 h-8" />, title: "Auto Stacking & Packing", desc: "Clean stacks with edge protection and export wrapping" }
//   ];

//   const specs = [
//     { label: "Max Width", value: "2000 mm" },
//     { label: "Max Length", value: "12,000 mm" },
//     { label: "Thickness Range", value: "0.4 – 16 mm" },
//     { label: "Length Tolerance", value: "±0.5 mm" },
//     { label: "Flatness", value: "< 1.0 mm/m" },
//     { label: "Annual Capacity", value: "1,75,000+ MT" }
//   ];

//   return (
//     <div className="bg-gradient-to-b from-gray-50 via-white to-gray-100 min-h-screen font-sans">
//       {/* Hero */}
//       <section className="relative overflow-hidden">
//         <div className="absolute inset-0">
//           <img src="/images/ctl-industrial.jpg" alt="Cut to Length" className="w-full h-full object-cover opacity-40" />
//           <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/60"></div>
//         </div>

//         <div className="relative container mx-auto px-6 py-32 md:py-44 text-white text-center">
//           <motion.h1
//             initial={{ opacity: 0, y: 50 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             className="text-4xl md:text-6xl font-extrabold leading-tight mb-6"
//           >
//             CUT TO LENGTH LINES
//             <br />
//             <span className="text-orange-400">Precision Sheets • Export Ready</span>
//           </motion.h1>
//           <motion.p
//             initial={{ opacity: 0 }}
//             whileInView={{ opacity: 1 }}
//             transition={{ delay: 0.3 }}
//             className="text-xl md:text-2xl text-orange-100 max-w-4xl mx-auto"
//           >
//             From coil to perfectly flat, accurately cut sheets — ready for PEB, construction, automotive, and fabrication.
//           </motion.p>
//         </div>
//       </section>

//       {/* Features */}
//       <section className="py-20">
//         <div className="container mx-auto px-6">
//           <h2 className="text-4xl font-bold text-center mb-16 text-gray-800">
//             Why Choose Our <span className="text-orange-500">CTL Lines</span>?
//           </h2>
//           <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
//             {features.map((f, i) => (
//               <motion.div
//                 key={i}
//                 initial={{ opacity: 0, y: 40 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 transition={{ delay: i * 0.1 }}
//                 className="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all border border-gray-200 group"
//               >
//                 <div className="text-orange-500 mb-4 group-hover:scale-110 transition">{f.icon}</div>
//                 <h3 className="text-xl font-bold mb-3">{f.title}</h3>
//                 <p className="text-gray-600 text-sm">{f.desc}</p>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Specs */}
//       <section className="py-24 bg-gradient-to-r from-black via-slate-900 to-black text-white">
//         <div className="container mx-auto px-6">
//           <h2 className="text-4xl font-bold text-center mb-16">
//             Technical <span className="text-orange-400">Specifications</span>
//           </h2>
//           <div className="grid sm:grid-cols-2 lg:grid-cols-6 gap-6">
//             {specs.map((s, i) => (
//               <motion.div
//                 key={i}
//                 initial={{ opacity: 0, y: 20 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 transition={{ delay: i * 0.1 }}
//                 className="bg-white/10 backdrop-blur border border-white/20 p-6 rounded-xl text-center hover:bg-white/20 transition"
//               >
//                 <p className="text-3xl font-bold text-orange-400">{s.value}</p>
//                 <p className="text-gray-300 text-xs mt-2 uppercase tracking-wider">{s.label}</p>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* CTA */}
//       <section className="py-24 bg-orange-600 text-white text-center">
//         <div className="container mx-auto px-6">
//           <h2 className="text-4xl font-bold mb-6">Need Perfect Sheets On Time?</h2>
//           <p className="text-xl mb-10 max-w-3xl mx-auto">
//             Contact us for cut-to-length sheets in HR, CR, GP, high-strength steel — delivered with precision and speed.
//           </p>
//           <a href="/contact" className="inline-block bg-white text-orange-600 px-10 py-4 rounded-lg text-lg font-bold hover:bg-gray-100 transition">
//             Request Quote Now
//           </a>
//         </div>
//       </section>
//     </div>
//   );
// }



import React from "react";
import { motion } from "framer-motion";
import { Ruler, Package, Zap, Shield, Factory, CheckCircle } from "lucide-react";

export default function CutToLengthIndustrial() {
  const features = [
    { icon: <Ruler className="w-8 h-8" />, title: "Ultra-Precise Length", desc: "±0.5 mm accuracy even at 12-meter sheets" },
    { icon: <Factory className="w-8 h-8" />, title: "2000 mm Width Capacity", desc: "One of the widest CTL lines in India" },
    { icon: <Zap className="w-8 h-8" />, title: "High-Speed Processing", desc: "Flying shear & servo precision for maximum output" },
    { icon: <Package className="w-8 h-8" />, title: "Auto Stacking & Packing", desc: "Clean stacks with edge protection and export wrapping" }
  ];

  const specs = [
    { label: "Max Width", value: "2000 mm" },
    { label: "Max Length", value: "12,000 mm" },
    { label: "Thickness Range", value: "0.4 – 16 mm" },
    { label: "Length Tolerance", value: "±0.5 mm" },
    { label: "Flatness", value: "< 1.0 mm/m" },
    { label: "Annual Capacity", value: "1,75,000+ MT" }
  ];

  return (
    <div className="bg-gradient-to-b from-gray-50 via-white to-gray-100 min-h-screen font-sans">
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <img src="/images/ctl-industrial.jpg" alt="Cut to Length" className="w-full h-full object-cover opacity-40" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/60"></div>
        </div>

        <div className="relative container mx-auto px-6 py-32 md:py-44 text-white text-center">
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-extrabold leading-tight mb-6"
          >
            CUT TO LENGTH LINES
            <br />
            <span className="text-orange-400">Precision Sheets • Export Ready</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-xl md:text-2xl text-orange-100 max-w-4xl mx-auto"
          >
            From coil to perfectly flat, accurately cut sheets — ready for PEB, construction, automotive, and fabrication.
          </motion.p>
        </div>
      </section>

      {/* Features */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16 text-gray-800">
            Why Choose Our <span className="text-orange-500">CTL Lines</span>?
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((f, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all border border-gray-200 group"
              >
                <div className="text-orange-500 mb-4 group-hover:scale-110 transition">{f.icon}</div>
                <h3 className="text-xl font-bold mb-3">{f.title}</h3>
                <p className="text-gray-600 text-sm">{f.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Specs */}
      <section className="py-24 bg-gradient-to-r from-black via-slate-900 to-black text-white">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16">
            Technical <span className="text-orange-400">Specifications</span>
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-6 gap-6">
            {specs.map((s, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="bg-white/10 backdrop-blur border border-white/20 p-6 rounded-xl text-center hover:bg-white/20 transition"
              >
                <p className="text-3xl font-bold text-orange-400">{s.value}</p>
                <p className="text-gray-300 text-xs mt-2 uppercase tracking-wider">{s.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-orange-600 text-white text-center">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold mb-6">Need Perfect Sheets On Time?</h2>
          <p className="text-xl mb-10 max-w-3xl mx-auto">
            Contact us for cut-to-length sheets in HR, CR, GP, high-strength steel — delivered with precision and speed.
          </p>
          <a href="/contact" className="inline-block bg-white text-orange-600 px-10 py-4 rounded-lg text-lg font-bold hover:bg-gray-100 transition">
            Request Quote Now
          </a>
        </div>
      </section>
    </div>
  );
}