import React from "react";
import { motion } from "framer-motion";
import { 
  Layers, Gauge, Cog, Zap, CheckCircle, ArrowRight, 
  Scissors, Package, Shield, Cpu 
} from "lucide-react";
import CountUp from "react-countup";

export default function BlankingIndustrial() {
  const capabilities = [
    {
      icon: <Scissors className="w-8 h-8" />,
      title: "High-Accuracy CNC Blanking",
      desc: "Multi-length, multi-width, multi-format precision with length tolerance < 0.5 mm and diagonal tolerance < 1.0 mm.",
    },
    {
      icon: <Layers className="w-8 h-8" />,
      title: "3-Way Auto Stacking System",
      desc: "Advanced robotic stacking with laser-guided alignment, drop-free placement, and scratch-free handling.",
    },
    {
      icon: <Gauge className="w-8 h-8" />,
      title: "6HI CNC Leveller",
      desc: "Automatic levelling eliminates residual stresses and ensures flatness < 1.0 mm for all materials.",
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Moving Shear Cutting",
      desc: "Scratch-free, mirror-finish production with zero drag marks — ideal for exterior and premium surfaces.",
    },
  ];

  const materialTypes = [
    "Aluminium alloys (1xxx, 3xxx, 5xxx, 6xxx)",
    "Stainless steel grades",
    "GI/GP sheets",
    "Specialty coated materials",
    "Laminated & protective film",
  ];

  const machineFeatures = [
    "Precision Blanking Engineered for High-Speed Production",
    "High-Accuracy CNC Blanking for Multiple Formats",
    "High-Speed 3-Way Auto Stacking System",
    "Advanced 6HI CNC Leveller for Perfect Flatness",
    "Auto Mode Cutting for Scratch-Free Production",
    "Wide Material Compatibility",
    "Coil-to-Blank Processing Efficiency",
    "Export-Ready Blanks with International Packing Standards",
  ];

  const toleranceMetrics = [
    { label: "Length Tolerance", value: "< 0.5 mm" },
    { label: "Diagonal Tolerance", value: "< 1.0 mm" },
    { label: "Flatness Precision", value: "< 1.0 mm" },
    { label: "Stacking Accuracy", value: "Drop-Free" },
  ];

  const applications = [
    "Automotive stamping components",
    "Appliance body panels",
    "Architectural façade sheets",
    "Precision electrical enclosures",
    "Press forming blanks",
    "Large and small format sheet blanks",
  ];

  return (
    <div className="bg-gradient-to-b from-slate-50 via-white to-slate-100 min-h-screen text-gray-900 font-sans">
      {/* ================= HERO ================= */}
      <section className="relative overflow-hidden pt-16">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1581091870622-3a940d7f7c07?q=80&w=1600"
            alt="Industrial blanking press"
            className="w-full h-full object-cover opacity-25"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-gray-900/80 via-slate-800/75 to-gray-900/80"></div>
        </div>

        <div className="relative container mx-auto px-6 py-32 md:py-48 text-white">
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-7xl font-black leading-tight mb-6 tracking-tight"
          >
            Blanking Line – <span className="text-orange-400">High-Precision</span> Auto Stacking
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-lg md:text-xl text-orange-100 max-w-4xl mb-10 leading-relaxed"
          >
            Engineered for superior dimensional accuracy, high-speed processing, and seamless production of precision blanks for automotive, appliance, architectural, and fabrication industries. Every blank meets global OEM quality requirements with perfect geometry and clean edges.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <a
              href="/contact"
              className="bg-orange-500 hover:bg-orange-600 text-white px-10 py-4 rounded-xl font-bold text-lg shadow-lg flex items-center gap-3 justify-center transition-all hover:scale-105"
            >
              Request Quote <ArrowRight className="w-5 h-5" />
            </a>
            <a
              href="tel:+919876543210"
              className="border-2 border-white/30 text-white px-10 py-4 rounded-xl font-bold hover:bg-white/10 transition"
            >
              Call Expert
            </a>
          </motion.div>
        </div>
      </section>

      {/* ================= KEY CAPABILITIES ================= */}
      <section className="py-24 bg-gradient-to-b from-white to-slate-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Core <span className="text-orange-600">Capabilities</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Advanced technology for precision blanking with industry-leading accuracy and throughput
            </p>
          </div>

          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-8">
            {capabilities.map((cap, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ delay: i * 0.1 }}
                className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl hover:-translate-y-3 transition-all border border-gray-200 hover:border-orange-300"
              >
                <div className="text-orange-500 mb-4 group-hover:scale-110 transition-transform">
                  {cap.icon}
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-900">{cap.title}</h3>
                <p className="text-gray-600 leading-relaxed">{cap.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= TOLERANCE METRICS ================= */}
      <section className="py-20 bg-gradient-to-r from-gray-900 via-slate-800 to-gray-900 text-white">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Precision <span className="text-orange-400">Tolerance Metrics</span>
          </h2>

          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6">
            {toleranceMetrics.map((metric, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ delay: i * 0.08 }}
                className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-6 text-center hover:bg-white/20 transition"
              >
                <p className="text-3xl font-bold text-orange-400 mb-2">{metric.value}</p>
                <p className="text-gray-300 text-sm uppercase tracking-wide">{metric.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= MACHINE INTRODUCTION ================= */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 max-w-5xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Machine <span className="text-orange-600">Introduction</span>
            </h2>
          </div>

          <div className="space-y-6">
            {[
              {
                num: "1",
                title: "Precision Blanking Engineered for High-Speed Production",
                content:
                  "Matrix Metals' Blanking Line is engineered for superior dimensional accuracy, high-speed processing, and seamless production of blanks tailored for automotive, appliance, architectural, and fabrication industries. The system ensures perfect geometry, clean edges, and consistent flatness — delivering blanks that meet global OEM quality requirements.",
              },
              {
                num: "2",
                title: "High-Accuracy CNC Blanking for Multiple Formats",
                content:
                  "The line supports multi-length, multi-width, and multi-format blanking, enabling versatile production capabilities. Whether producing small component blanks or large-format panels, the machine maintains exceptional tolerance across all dimensions — ideal for deep-draw applications, press-forming operations, and precision fabrication.",
              },
              {
                num: "3",
                title: "High-Speed 3-Way Auto Stacking System",
                content:
                  "Our advanced 3-way auto stacking technology ensures clean, accurate stacking of blanks at high line speeds. Features include multiple stack size programs, automatic pallet switching, drop-free blank placement, laser-guided alignment systems, and scratch-free handling. The stacking system reduces manual labor, enhances productivity, and ensures consistent output quality.",
              },
              {
                num: "4",
                title: "Advanced 6HI CNC Leveller for Perfect Flatness",
                content:
                  "Integrated with a 6HI automatic CNC levelling system, the blanking line eliminates residual stresses and ensures sheet flatness essential for manufacturing consistency. This leveller is capable of processing high-strength alloys and delicate surfaces without distortion, marking, or bending.",
              },
              {
                num: "5",
                title: "Auto Mode Cutting for Scratch-Free Production",
                content:
                  "The blanking line features moving shear cutting technology, eliminating drag marks and ensuring scratch-free, mirror-finish surface quality — a critical requirement for exterior panels, architectural cladding, and premium appliance components.",
              },
              {
                num: "6",
                title: "Coil-to-Blank Processing Efficiency",
                content:
                  "Maximizes operational efficiency with high-speed decoiling, precision levelling, automated threading, servo-driven feeder and shear, and real-time dimensional correction. This ensures continuous productivity with minimal downtime and superior output consistency.",
              },
            ].map((section, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ delay: i * 0.05 }}
                className="bg-gradient-to-r from-slate-50 to-orange-50 rounded-2xl p-8 border border-orange-200 hover:shadow-lg transition-all"
              >
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <span className="flex items-center justify-center w-10 h-10 rounded-full bg-orange-600 text-white font-bold">
                      {section.num}
                    </span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">{section.title}</h3>
                    <p className="text-gray-700 leading-relaxed">{section.content}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= MATERIAL COMPATIBILITY ================= */}
      <section className="py-24 bg-gradient-to-b from-slate-50 to-gray-100">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center max-w-5xl mx-auto">
            {/* Left: Content */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Wide Material <span className="text-orange-600">Compatibility</span>
              </h2>
              <p className="text-gray-600 mb-8 leading-relaxed">
                The system is capable of processing a broad range of metals and specialty materials. OSL, BSL, adhesive-free, and laser-protection films can be applied and preserved during the blanking process.
              </p>
              <div className="space-y-3">
                {materialTypes.map((material, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.06 }}
                    className="flex items-center gap-3"
                  >
                    <CheckCircle className="w-5 h-5 text-orange-500 flex-shrink-0" />
                    <p className="text-gray-700 font-medium">{material}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Right: Visual */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6 }}
              className="bg-gradient-to-br from-orange-400 to-amber-600 rounded-3xl h-96 shadow-xl flex items-center justify-center"
            >
              <div className="text-white text-center p-8">
                <Cpu className="w-20 h-20 mx-auto mb-4 opacity-80" />
                <p className="text-lg font-semibold">Versatile Material Processing</p>
                <p className="text-orange-100 text-sm mt-2">All major metal types supported</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ================= APPLICATIONS ================= */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 max-w-5xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Ideal for High-Performance <span className="text-orange-600">Manufacturing</span>
            </h2>
            <p className="text-gray-600 text-lg">
              Each blank is engineered to deliver consistent formability, flatness, and dimensional accuracy
            </p>
          </div>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
            {applications.map((app, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ delay: i * 0.08 }}
                className="bg-gradient-to-br from-slate-50 to-gray-100 rounded-xl p-6 border border-gray-200 hover:border-orange-400 hover:shadow-md transition-all flex items-start gap-4"
              >
                <CheckCircle className="w-6 h-6 text-orange-500 flex-shrink-0 mt-1" />
                <p className="text-gray-700 font-medium">{app}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= EXPORT PACKING ================= */}
      <section className="py-24 bg-gradient-to-r from-gray-900 via-slate-800 to-gray-900 text-white">
        <div className="container mx-auto px-6 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Export-Ready Blanks with <span className="text-orange-400">International Packing</span>
            </h2>
            <p className="text-orange-100">
              Blank stacks are prepared using global export protocols ensuring safe, damage-free transportation
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 gap-6">
            {[
              "Moisture barrier wrapping",
              "Edge protection",
              "Anti-rust treatment (if applicable)",
              "Heavy-duty palletizing",
              "Customized crate packing",
              "International shipping compliance",
            ].map((packing, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06 }}
                className="flex items-center gap-4 bg-white/10 backdrop-blur-md p-4 rounded-lg border border-white/20"
              >
                <Package className="w-6 h-6 text-orange-400 flex-shrink-0" />
                <p className="text-orange-100">{packing}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="py-28 bg-gradient-to-r from-orange-600 via-orange-700 to-amber-700 text-white text-center">
        <div className="container mx-auto px-6">
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-black mb-6"
          >
            Ready for World-Class Precision Blanking?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: 0.2 }}
            className="text-lg md:text-xl text-orange-100 mb-12 max-w-3xl mx-auto"
          >
            Join leading manufacturers trusting Matrix Metals for precision-engineered blanks that meet global OEM standards
          </motion.p>
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <a
              href="/contact"
              className="bg-white text-orange-600 hover:bg-gray-100 px-12 py-4 rounded-xl font-bold text-lg shadow-2xl hover:scale-105 transition-all flex items-center justify-center gap-3"
            >
              Get Instant Quote <ArrowRight className="w-6 h-6" />
            </a>
            <a
              href="tel:+919876543210"
              className="border-4 border-white text-white hover:bg-white/10 px-12 py-4 rounded-xl font-bold text-lg transition-all"
            >
              Call Now: +91 98765 43210
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}




// import React from "react";
// import { motion } from "framer-motion";
// import { 
//   Scissors, Layers, Gauge, Zap, CheckCircle, ArrowRight,
//   Cpu, Package, Shield, Factory, Ruler, TrendingUp
// } from "lucide-react";

// export default function BlankingIndustrial() {
//   const capabilities = [
//     {
//       icon: <Scissors className="w-6 h-6" />,
//       title: "CNC Precision Blanking",
//       desc: "Multi-format precision with length tolerance <0.5mm",
//       gradient: "from-blue-500 to-cyan-400"
//     },
//     {
//       icon: <Layers className="w-6 h-6" />,
//       title: "Auto Stacking System",
//       desc: "Robotic stacking with laser-guided alignment",
//       gradient: "from-violet-500 to-purple-400"
//     },
//     {
//       icon: <Gauge className="w-6 h-6" />,
//       title: "6HI CNC Leveller",
//       desc: "Eliminates residual stresses, flatness <1.0mm",
//       gradient: "from-emerald-500 to-teal-400"
//     },
//     {
//       icon: <Zap className="w-6 h-6" />,
//       title: "Moving Shear Cutting",
//       desc: "Scratch-free, mirror-finish production",
//       gradient: "from-amber-500 to-orange-400"
//     }
//   ];

//   const stats = [
//     { value: "99.8%", label: "Accuracy Rate", icon: <TrendingUp className="w-4 h-4" /> },
//     { value: "<0.5mm", label: "Length Tolerance", icon: <Ruler className="w-4 h-4" /> },
//     { value: "0 Drag", label: "Surface Marks", icon: <Shield className="w-4 h-4" /> },
//     { value: "24/7", label: "Uptime", icon: <Factory className="w-4 h-4" /> }
//   ];

//   const materialTypes = [
//     "Aluminium alloys (1xxx, 3xxx, 5xxx, 6xxx)",
//     "Stainless steel grades",
//     "GI/GP sheets",
//     "Specialty coated materials",
//     "Laminated & protective film"
//   ];

//   const applications = [
//     "Automotive stamping",
//     "Appliance panels",
//     "Architectural façade",
//     "Electrical enclosures",
//     "Press forming blanks",
//     "Precision fabrication"
//   ];

//   const fadeInUp = {
//     initial: { opacity: 0, y: 40 },
//     whileInView: { opacity: 1, y: 0 },
//     viewport: { once: true, margin: "-50px" }
//   };

//   const staggerChildren = {
//     initial: { opacity: 0 },
//     whileInView: { 
//       opacity: 1,
//       transition: { staggerChildren: 0.1 }
//     }
//   };

//   return (
//     <div className="min-h-screen bg-white font-sans">
//       {/* ================= HERO ================= */}
//       <section className="relative min-h-[90vh] flex items-center overflow-hidden">
//         {/* Animated background grid */}
//         <div className="absolute inset-0">
//           <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-white to-gray-100" />
//           <div className="absolute inset-0 bg-grid-pattern opacity-[0.02]" />
//         </div>

//         {/* Floating elements */}
//         <motion.div 
//           animate={{ y: [0, -20, 0] }}
//           transition={{ duration: 4, repeat: Infinity }}
//           className="absolute top-1/4 left-10 w-64 h-64 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 rounded-full blur-3xl"
//         />
//         <motion.div 
//           animate={{ y: [0, 20, 0] }}
//           transition={{ duration: 4, repeat: Infinity, delay: 1 }}
//           className="absolute bottom-1/4 right-10 w-80 h-80 bg-gradient-to-l from-violet-500/10 to-purple-500/10 rounded-full blur-3xl"
//         />

//         <div className="relative container mx-auto px-6 lg:px-8">
//           <div className="max-w-4xl mx-auto">
//             <motion.div 
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.6 }}
//               className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gray-100 mb-8"
//             >
//               <div className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
//               <span className="text-sm font-medium text-gray-600">Industrial Precision</span>
//             </motion.div>

//             <motion.h1 
//               initial={{ opacity: 0, y: 30 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.7, delay: 0.1 }}
//               className="text-5xl md:text-7xl font-light tracking-tight text-gray-900 mb-6"
//             >
//               Precision
//               <span className="block mt-2 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-700 bg-clip-text text-transparent">
//                 Blanking Line
//               </span>
//             </motion.h1>

//             <motion.p 
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.7, delay: 0.2 }}
//               className="text-lg text-gray-600 mb-10 max-w-2xl leading-relaxed"
//             >
//               Advanced dimensional accuracy and high-speed processing for automotive, 
//               appliance, and architectural industries. Engineered for perfection.
//             </motion.p>

//             <motion.div 
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.7, delay: 0.3 }}
//               className="flex flex-col sm:flex-row gap-4"
//             >
//               <button className="group relative px-8 py-4 bg-gray-900 text-white rounded-lg overflow-hidden">
//                 <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
//                 <span className="relative flex items-center gap-3 font-medium">
//                   Request Quote
//                   <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
//                 </span>
//               </button>
              
//               <button className="px-8 py-4 border border-gray-300 text-gray-700 rounded-lg hover:border-gray-400 transition-colors font-medium">
//                 View Specifications
//               </button>
//             </motion.div>
//           </div>
//         </div>
//       </section>

//       {/* ================= STATS ================= */}
//       <section className="py-20 bg-gray-50">
//         <div className="container mx-auto px-6 lg:px-8">
//           <motion.div 
//             variants={staggerChildren}
//             initial="initial"
//             whileInView="whileInView"
//             className="grid grid-cols-2 lg:grid-cols-4 gap-6"
//           >
//             {stats.map((stat, i) => (
//               <motion.div 
//                 key={i}
//                 variants={fadeInUp}
//                 className="group p-6 bg-white rounded-xl border border-gray-200 hover:border-blue-300 transition-colors"
//               >
//                 <div className="flex items-center gap-3 mb-4">
//                   <div className="p-2 rounded-lg bg-gray-100 group-hover:bg-blue-50 transition-colors">
//                     {stat.icon}
//                   </div>
//                 </div>
//                 <div className="text-3xl font-light text-gray-900 mb-2">{stat.value}</div>
//                 <div className="text-sm text-gray-600">{stat.label}</div>
//               </motion.div>
//             ))}
//           </motion.div>
//         </div>
//       </section>

//       {/* ================= CAPABILITIES ================= */}
//       <section className="py-32">
//         <div className="container mx-auto px-6 lg:px-8">
//           <motion.div 
//             initial={{ opacity: 0 }}
//             whileInView={{ opacity: 1 }}
//             viewport={{ margin: "-100px" }}
//             className="text-center mb-20"
//           >
//             <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-4">
//               Core <span className="font-medium">Capabilities</span>
//             </h2>
//             <p className="text-gray-600 max-w-2xl mx-auto">
//               Advanced technology engineered for precision blanking with industry-leading accuracy
//             </p>
//           </motion.div>

//           <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
//             {capabilities.map((cap, i) => (
//               <motion.div
//                 key={i}
//                 initial={{ opacity: 0, y: 40 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 viewport={{ once: true, margin: "-50px" }}
//                 transition={{ duration: 0.5, delay: i * 0.1 }}
//                 className="group relative"
//               >
//                 <div className="absolute inset-0 bg-gradient-to-br from-gray-100 to-white rounded-2xl transform group-hover:scale-[1.02] transition-all duration-300" />
                
//                 <div className="relative p-8">
//                   <div className={`inline-flex p-3 rounded-xl bg-gradient-to-br ${cap.gradient} mb-6`}>
//                     <div className="text-white">
//                       {cap.icon}
//                     </div>
//                   </div>
                  
//                   <h3 className="text-xl font-medium text-gray-900 mb-3">{cap.title}</h3>
//                   <p className="text-gray-600 leading-relaxed">{cap.desc}</p>
                  
//                   <div className="mt-6 pt-6 border-t border-gray-200">
//                     <div className="flex items-center text-sm text-gray-500">
//                       <div className="flex-1 h-0.5 bg-gray-200">
//                         <div className="h-full w-0 group-hover:w-full bg-gradient-to-r from-gray-400 to-gray-300 transition-all duration-500" />
//                       </div>
//                       <span className="ml-3">Learn more →</span>
//                     </div>
//                   </div>
//                 </div>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* ================= MATERIALS ================= */}
//       <section className="py-32 bg-gray-50">
//         <div className="container mx-auto px-6 lg:px-8">
//           <div className="grid lg:grid-cols-2 gap-16 items-center">
//             <motion.div
//               initial={{ opacity: 0, x: -40 }}
//               whileInView={{ opacity: 1, x: 0 }}
//               viewport={{ once: true }}
//               transition={{ duration: 0.6 }}
//             >
//               <h2 className="text-4xl font-light text-gray-900 mb-8">
//                 Material <span className="font-medium">Compatibility</span>
//               </h2>
              
//               <div className="space-y-4">
//                 {materialTypes.map((material, i) => (
//                   <motion.div
//                     key={i}
//                     initial={{ opacity: 0, x: -20 }}
//                     whileInView={{ opacity: 1, x: 0 }}
//                     transition={{ delay: i * 0.05 }}
//                     className="flex items-center gap-4 p-4 rounded-lg hover:bg-white transition-colors group"
//                   >
//                     <div className="w-2 h-2 rounded-full bg-gradient-to-r from-blue-500 to-cyan-400" />
//                     <span className="text-gray-700 group-hover:text-gray-900 transition-colors">
//                       {material}
//                     </span>
//                   </motion.div>
//                 ))}
//               </div>
//             </motion.div>

//             <motion.div
//               initial={{ opacity: 0, scale: 0.95 }}
//               whileInView={{ opacity: 1, scale: 1 }}
//               viewport={{ once: true }}
//               transition={{ duration: 0.6, delay: 0.2 }}
//               className="relative"
//             >
//               <div className="aspect-square rounded-2xl bg-gradient-to-br from-gray-900 to-gray-800 p-12">
//                 <div className="text-white">
//                   <Cpu className="w-16 h-16 mb-6 opacity-80" />
//                   <h3 className="text-2xl font-light mb-4">Versatile Processing</h3>
//                   <p className="text-gray-300">
//                     Supporting a wide range of metals and specialty materials with precision handling
//                   </p>
//                 </div>
                
//                 {/* Animated rings */}
//                 <motion.div 
//                   animate={{ rotate: 360 }}
//                   transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
//                   className="absolute top-8 right-8 w-32 h-32 border border-white/10 rounded-full"
//                 />
//                 <motion.div 
//                   animate={{ rotate: -360 }}
//                   transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
//                   className="absolute bottom-8 left-8 w-40 h-40 border border-white/5 rounded-full"
//                 />
//               </div>
//             </motion.div>
//           </div>
//         </div>
//       </section>

//       {/* ================= APPLICATIONS ================= */}
//       <section className="py-32">
//         <div className="container mx-auto px-6 lg:px-8">
//           <motion.div 
//             initial={{ opacity: 0 }}
//             whileInView={{ opacity: 1 }}
//             className="text-center mb-16"
//           >
//             <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-6">
//               Industrial <span className="font-medium">Applications</span>
//             </h2>
//             <p className="text-gray-600 max-w-2xl mx-auto">
//               Engineered to deliver consistent formability, flatness, and dimensional accuracy
//             </p>
//           </motion.div>

//           <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
//             {applications.map((app, i) => (
//               <motion.div
//                 key={i}
//                 initial={{ opacity: 0, y: 30 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 transition={{ delay: i * 0.05 }}
//                 viewport={{ once: true }}
//                 className="group p-6 rounded-xl border border-gray-200 hover:border-blue-300 hover:shadow-lg transition-all duration-300"
//               >
//                 <div className="flex items-start gap-4">
//                   <div className="p-2 rounded-lg bg-gray-100 group-hover:bg-blue-50 transition-colors">
//                     <CheckCircle className="w-5 h-5 text-blue-600" />
//                   </div>
//                   <span className="text-gray-700 group-hover:text-gray-900 transition-colors font-medium">
//                     {app}
//                   </span>
//                 </div>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* ================= CTA ================= */}
//       <section className="py-32 bg-gray-900">
//         <div className="container mx-auto px-6 lg:px-8">
//           <motion.div 
//             initial={{ opacity: 0, y: 40 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             className="max-w-3xl mx-auto text-center"
//           >
//             <h2 className="text-4xl md:text-5xl font-light text-white mb-6">
//               Ready for Precision <span className="font-medium">Manufacturing?</span>
//             </h2>
            
//             <p className="text-gray-300 mb-12 text-lg leading-relaxed">
//               Join industry leaders trusting our precision-engineered blanks that meet global OEM standards
//             </p>

//             <div className="flex flex-col sm:flex-row gap-4 justify-center">
//               <button className="group px-8 py-4 bg-white text-gray-900 rounded-lg font-medium hover:bg-gray-100 transition-colors flex items-center gap-3 justify-center">
//                 Get Instant Quote
//                 <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
//               </button>
              
//               <button className="px-8 py-4 border border-gray-700 text-white rounded-lg font-medium hover:border-gray-600 transition-colors">
//                 Download Spec Sheet
//               </button>
//             </div>
            
//             <motion.div 
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               transition={{ delay: 0.5 }}
//               className="mt-12 pt-8 border-t border-gray-800"
//             >
//               <p className="text-gray-400 text-sm">
//                 Contact us at +91 98765 43210 • contact@matrixmetals.com
//               </p>
//             </motion.div>
//           </motion.div>
//         </div>
//       </section>
//     </div>
//   );
// }