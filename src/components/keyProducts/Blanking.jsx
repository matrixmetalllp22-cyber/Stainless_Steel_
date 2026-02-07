// import React from "react";

// export default function Blanking() {
//   const capabilities = [
//     {
//       plant: "Pune plant",
//       slitters: [
//         "Slitter 1: (0.6 – 6.5 mm) × 1870 mm width (Ts up to 1180MPa)",
//         "Slitter 2: (0.2 – 2.3 mm) × 1650 mm width (Ts up to 980MPa)",
//       ],
//     },
//     {
//       plant: "Palwal plant",
//       slitters: [
//         "Slitter 1: (0.25 – 3.2 mm) × 1870 mm width (Ts up to 980MPa)",
//         "Slitter 2: (0.60 – 6.5 mm) × 1870 mm width (Ts up to 1180MPa)",
//       ],
//     },
//     {
//       plant: "Ahmedabad plant",
//       slitters: [
//         "Slitter 1: (0.25 – 2.3) × 1870 mm width (Ts up to 1180MPa)",
//       ],
//     },
//     {
//       plant: "Chennai plant",
//       slitters: [
//         "Slitter 1: (0.20 – 3.2mm) × 1870mm width (Ts up to 1180MPa)",
//       ],
//     },
//   ];

//   return (
//     <section className="w-full font-sans">
//       {/* Hero Section */}
//       <div className="relative h-[300px] md:h-[400px]">
//         <img
//           src="/images/slitting-hero.jpg"
//           alt="Slitting"
//           className="w-full h-full object-cover"
//         />
//         <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
//           <h1 className="text-4xl md:text-5xl font-bold text-orange-500">
//             Slitting
//           </h1>
//         </div>
//       </div>

//       {/* Description + Capabilities */}
//       <div className="bg-white py-12 px-6 md:px-16 lg:px-24">
//         <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
//           {/* Left Section */}
//           <div className="lg:col-span-1">
//             <h2 className="text-3xl font-bold text-orange-800 mb-4">Slitting</h2>
//             <p className="text-gray-600 leading-relaxed">
//               Slitting is a metal manufacturing process which is used to cut a
//               wide coil of metal into a number of narrower coils. The wide coils
//               are moved through extremely sharp circular knives, making the
//               cuts. These knives can be arranged in a sequence to make narrower
//               coils of different widths as per the requirement.
//             </p>
//           </div>

//           {/* Right Section */}
//           <div className="lg:col-span-2 bg-black text-white rounded-2xl shadow-lg p-8">
//             <h3 className="text-2xl font-bold mb-6">Capability</h3>
//             <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
//               {capabilities.map((item, index) => (
//                 <div key={index}>
//                   <h4 className="font-semibold text-orange-400 mb-2 flex items-center gap-2">
//                     <span>✔</span> {item.plant}
//                   </h4>
//                   <ul className="space-y-2 text-sm text-gray-300">
//                     {item.slitters.map((s, i) => (
//                       <li key={i}>{s}</li>
//                     ))}
//                   </ul>
//                 </div>
//               ))}
//             </div>

//             {/* Special Features */}
//             <div className="mt-10">
//               <h3 className="text-2xl font-bold mb-4">Special Features</h3>
//               <ul className="list-disc list-inside text-gray-300 text-sm">
//                 <li>
//                   Spare slitter head for offline setup, shimless tooling, and
//                   vertical scrap winders
//                 </li>
//               </ul>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }


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
