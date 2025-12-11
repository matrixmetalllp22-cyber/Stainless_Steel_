// import React from 'react';
// import { Link } from 'react-router-dom';

// export default function Blanking() {
//   const features = [
//     { title: 'Precision Stamping', desc: 'Exact die-cut blanks for manufacturing' },
//     { title: 'Appliance Grade', desc: 'Engineered for home appliance production' },
//     { title: 'Consistent Quality', desc: 'Zero-defect manufacturing standards' },
//     { title: 'Fast Turnaround', desc: 'Quick delivery for production schedules' }
//   ];

//   return (
//     <div className="min-h-screen pt-16 bg-gradient-to-b from-slate-50 to-purple-50">
//       {/* Hero Section */}
//       <section className="container-custom py-12 md:py-20">
//         <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
//           <div>
//             <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4">
//               Blanking Services
//             </h1>
//             <p className="text-lg text-gray-600 mb-6">
//               Precision-engineered steel blanks for home appliances and manufacturing. Our advanced die-cutting technology ensures consistent quality and tight tolerances.
//             </p>
//             <Link 
//               to="/contact"
//               className="inline-block bg-gradient-to-r from-purple-600 to-purple-700 text-white px-8 py-3 rounded-lg font-semibold hover:from-purple-700 hover:to-purple-800 transition"
//             >
//               Get a Quote
//             </Link>
//           </div>
//           <div className="bg-gradient-to-br from-purple-400 to-purple-600 rounded-2xl h-96 flex items-center justify-center text-white text-center">
//             <div className="p-8">
//               <p className="text-lg font-semibold">Blanking Service Image</p>
//               <p className="text-sm text-purple-100">Precision die-cutting technology</p>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Features */}
//       <section className="bg-white py-12 md:py-20">
//         <div className="container-custom">
//           <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Key Features</h2>
//           <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6">
//             {features.map((feature) => (
//               <div key={feature.title} className="bg-gradient-to-br from-slate-50 to-purple-50 p-6 rounded-lg shadow hover:shadow-lg transition">
//                 <h3 className="font-bold text-lg mb-2">{feature.title}</h3>
//                 <p className="text-gray-600 text-sm">{feature.desc}</p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Specs */}
//       <section className="py-12 md:py-20">
//         <div className="container-custom">
//           <h2 className="text-3xl md:text-4xl font-bold mb-8">Technical Specifications</h2>
//           <div className="bg-white rounded-lg shadow-lg overflow-hidden">
//             <table className="w-full text-sm md:text-base">
//               <tbody>
//                 <tr className="border-b hover:bg-purple-50">
//                   <td className="p-4 font-semibold text-gray-900">Max Blank Size</td>
//                   <td className="p-4 text-gray-600">500 x 800 mm</td>
//                 </tr>
//                 <tr className="border-b hover:bg-purple-50">
//                   <td className="p-4 font-semibold text-gray-900">Material Thickness</td>
//                   <td className="p-4 text-gray-600">0.8 - 4.0 mm</td>
//                 </tr>
//                 <tr className="border-b hover:bg-purple-50">
//                   <td className="p-4 font-semibold text-gray-900">Tolerance Level</td>
//                   <td className="p-4 text-gray-600">±0.2 mm</td>
//                 </tr>
//                 <tr className="hover:bg-purple-50">
//                   <td className="p-4 font-semibold text-gray-900">Capacity</td>
//                   <td className="p-4 text-gray-600">10,000+ blanks/day</td>
//                 </tr>
//               </tbody>
//             </table>
//           </div>
//         </div>
//       </section>

//       {/* CTA */}
//       <section className="bg-gradient-to-r from-purple-600 to-purple-800 text-white py-12 md:py-16">
//         <div className="container-custom text-center">
//           <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Get Started?</h2>
//           <p className="text-purple-100 mb-8 max-w-2xl mx-auto">Contact our sales team to discuss your blanking requirements.</p>
//           <div className="flex flex-col sm:flex-row gap-4 justify-center">
//             <Link to="/contact" className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-purple-50 transition">
//               Contact Sales
//             </Link>
//             <Link to="/" className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/10 transition">
//               Back Home
//             </Link>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// }


// import React from "react";
// import { Link } from "react-router-dom";
// import { motion } from "framer-motion";

// export default function Blanking() {
//   const features = [
//     {
//       title: "Precision Stamping",
//       desc: "Exact die-cut blanks for manufacturing",
//     },
//     {
//       title: "Appliance Grade",
//       desc: "Engineered for home appliance production",
//     },
//     {
//       title: "Consistent Quality",
//       desc: "Zero-defect manufacturing standards",
//     },
//     {
//       title: "Fast Turnaround",
//       desc: "Quick delivery for production schedules",
//     },
//   ];

//   return (
//     <div className="min-h-screen bg-gradient-to-b from-slate-50 via-purple-50 to-white text-gray-800">
//       {/* Hero Section */}
//       <section className="container mx-auto px-6 py-16 md:py-24 grid md:grid-cols-2 items-center gap-12">
//         {/* Left */}
//         <motion.div
//           initial={{ opacity: 0, y: 40 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6 }}
//         >
//           <h1 className="text-4xl md:text-6xl font-extrabold leading-tight text-gray-900 mb-6">
//             Blanking <span className="text-purple-600">Services</span>
//           </h1>
//           <p className="text-lg text-gray-600 mb-8 max-w-lg">
//             Delivering precision-engineered steel blanks for appliance and
//             industrial manufacturing. Our advanced die-cutting ensures
//             consistent quality and tight tolerances.
//           </p>
//           <Link
//             to="/contact"
//             className="inline-block bg-gradient-to-r from-purple-600 to-indigo-600 text-white px-8 py-3 rounded-xl font-semibold shadow hover:scale-105 transition-transform"
//           >
//             Get a Quote
//           </Link>
//         </motion.div>

//         {/* Right */}
//         <motion.div
//           initial={{ opacity: 0, scale: 0.9 }}
//           whileInView={{ opacity: 1, scale: 1 }}
//           transition={{ duration: 0.8 }}
//           className="relative bg-gradient-to-br from-purple-500 to-indigo-600 rounded-3xl h-80 md:h-[28rem] flex items-center justify-center text-white shadow-lg"
//         >
//           <div className="absolute inset-0 bg-white/10 backdrop-blur-sm rounded-3xl"></div>
//           <div className="relative p-8 text-center">
//             <p className="text-xl font-semibold">High-Precision Blanking</p>
//             <p className="text-purple-100 text-sm mt-2">
//               Automated, defect-free steel cutting
//             </p>
//           </div>
//         </motion.div>
//       </section>

//       {/* Features Section */}
//       <section className="py-20 bg-white">
//         <div className="container mx-auto px-6">
//           <h2 className="text-3xl md:text-4xl font-bold text-center mb-14">
//             Key <span className="text-purple-600">Features</span>
//           </h2>
//           <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-8">
//             {features.map((feature, i) => (
//               <motion.div
//                 key={feature.title}
//                 initial={{ opacity: 0, y: 40 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 transition={{ delay: i * 0.1 }}
//                 className="p-6 rounded-2xl bg-gradient-to-br from-slate-50 to-purple-50 shadow-md hover:shadow-xl hover:-translate-y-2 transition-transform duration-300"
//               >
//                 <h3 className="text-lg font-semibold mb-2 text-gray-900">
//                   {feature.title}
//                 </h3>
//                 <p className="text-gray-600 text-sm">{feature.desc}</p>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Technical Specs */}
//       <section className="py-20 bg-gradient-to-b from-purple-50 to-white">
//         <div className="container mx-auto px-6">
//           <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center">
//             Technical <span className="text-purple-600">Specifications</span>
//           </h2>
//           <div className="overflow-hidden rounded-2xl shadow-xl bg-white">
//             <table className="w-full text-left border-collapse">
//               <tbody>
//                 {[
//                   ["Max Blank Size", "500 x 800 mm"],
//                   ["Material Thickness", "0.8 - 4.0 mm"],
//                   ["Tolerance Level", "±0.2 mm"],
//                   ["Capacity", "10,000+ blanks/day"],
//                 ].map(([key, value], i) => (
//                   <tr
//                     key={key}
//                     className={`border-b hover:bg-purple-50 transition ${
//                       i % 2 === 0 ? "bg-slate-50/30" : "bg-white"
//                     }`}
//                   >
//                     <td className="p-5 font-semibold text-gray-800">{key}</td>
//                     <td className="p-5 text-gray-600">{value}</td>
//                   </tr>
//                 ))}
//               </tbody>
//             </table>
//           </div>
//         </div>
//       </section>

//       {/* CTA Section */}
//       <section className="py-20 bg-gradient-to-r from-purple-600 to-indigo-700 text-white text-center">
//         <div className="container mx-auto px-6">
//           <motion.h2
//             initial={{ opacity: 0, y: 40 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6 }}
//             className="text-3xl md:text-4xl font-bold mb-6"
//           >
//             Ready to <span className="text-purple-200">Get Started?</span>
//           </motion.h2>
//           <p className="text-purple-100 mb-10 max-w-2xl mx-auto">
//             Contact our sales team today to discuss your blanking requirements
//             and discover how we can enhance your production efficiency.
//           </p>
//           <div className="flex flex-col sm:flex-row justify-center gap-4">
//             <Link
//               to="/contact"
//               className="bg-white text-purple-700 px-8 py-3 rounded-xl font-semibold shadow hover:scale-105 transition-transform"
//             >
//               Contact Sales
//             </Link>
//             <Link
//               to="/"
//               className="border-2 border-white px-8 py-3 rounded-xl font-semibold hover:bg-white/10 transition"
//             >
//               Back Home
//             </Link>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// }





// import React from "react";
// import { Link } from "react-router-dom";
// import { motion } from "framer-motion";
// import { Cpu, Gauge, Layers, Zap } from "lucide-react";

// export default function Blanking() {
//   const features = [
//     {
//       icon: <Cpu className="w-8 h-8 text-purple-600" />,
//       title: "Precision Stamping",
//       desc: "Exact die-cut blanks with micron-level accuracy using automated lines.",
//     },
//     {
//       icon: <Layers className="w-8 h-8 text-purple-600" />,
//       title: "Appliance Grade",
//       desc: "High-grade materials optimized for appliance and industrial production.",
//     },
//     {
//       icon: <Gauge className="w-8 h-8 text-purple-600" />,
//       title: "Zero-Defect Quality",
//       desc: "AI-driven inspection ensures consistent quality and tolerance control.",
//     },
//     {
//       icon: <Zap className="w-8 h-8 text-purple-600" />,
//       title: "Fast Turnaround",
//       desc: "Streamlined production and logistics for quicker delivery cycles.",
//     },
//   ];

//   const specs = [
//     { label: "Max Blank Size", value: "500 x 800 mm" },
//     { label: "Material Thickness", value: "0.8 - 4.0 mm" },
//     { label: "Tolerance Level", value: "±0.2 mm" },
//     { label: "Daily Output", value: "10,000+ blanks" },
//   ];

//   return (
//     <div className="bg-gradient-to-b from-slate-50 via-white to-purple-50 text-gray-900">
//       {/* ================= HERO ================= */}
//       <section className="relative overflow-hidden">
//         <div className="absolute inset-0">
//           <img
//             src="https://images.unsplash.com/photo-1603126856740-2d4cf7b36cf2?q=80&w=1200"
//             alt="Blanking steel sheet"
//             className="w-full h-full object-cover opacity-30"
//           />
//           <div className="absolute inset-0 bg-gradient-to-r from-purple-800/60 to-indigo-600/60"></div>
//         </div>

//         <div className="relative container mx-auto px-6 py-28 md:py-40 text-white">
//           <motion.h1
//             initial={{ opacity: 0, y: 40 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6 }}
//             className="text-5xl md:text-6xl font-extrabold leading-tight mb-6"
//           >
//             Blanking <span className="text-purple-200">Solutions</span>
//           </motion.h1>
//           <motion.p
//             initial={{ opacity: 0, y: 40 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ delay: 0.2 }}
//             className="text-lg md:text-xl text-purple-100 max-w-2xl mb-10"
//           >
//             High-precision blanking and stamping services designed for industrial
//             and appliance-grade manufacturing — where consistency meets innovation.
//           </motion.p>
//           <motion.div
//             initial={{ opacity: 0, y: 30 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ delay: 0.4 }}
//           >
//             <Link
//               to="/contact"
//               className="bg-white text-purple-700 font-semibold px-8 py-3 rounded-xl shadow hover:bg-purple-50 hover:scale-105 transition-transform"
//             >
//               Request a Quote
//             </Link>
//           </motion.div>
//         </div>
//       </section>

//       {/* ================= FEATURES ================= */}
//       <section className="py-20 bg-white/70 backdrop-blur-sm">
//         <div className="container mx-auto px-6">
//           <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
//             Core <span className="text-purple-600">Capabilities</span>
//           </h2>

//           <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-10">
//             {features.map((item, i) => (
//               <motion.div
//                 key={i}
//                 initial={{ opacity: 0, y: 30 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 transition={{ delay: i * 0.1 }}
//                 className="group bg-gradient-to-br from-slate-50 to-purple-50 rounded-2xl p-8 text-center shadow-md hover:shadow-xl hover:-translate-y-2 transition-transform duration-300"
//               >
//                 <div className="flex justify-center mb-4">{item.icon}</div>
//                 <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
//                 <p className="text-gray-600 text-sm">{item.desc}</p>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* ================= SPECS / STATS ================= */}
//       <section className="py-20 bg-gradient-to-r from-purple-50 to-indigo-50">
//         <div className="container mx-auto px-6">
//           <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
//             Technical <span className="text-purple-600">Specifications</span>
//           </h2>

//           <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6 text-center">
//             {specs.map((spec, i) => (
//               <motion.div
//                 key={i}
//                 initial={{ opacity: 0, y: 20 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 transition={{ delay: i * 0.1 }}
//                 className="bg-white/80 backdrop-blur rounded-2xl p-8 shadow hover:shadow-lg transition"
//               >
//                 <p className="text-purple-600 text-sm font-semibold uppercase tracking-wide mb-2">
//                   {spec.label}
//                 </p>
//                 <p className="text-2xl font-bold text-gray-900">{spec.value}</p>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* ================= CTA ================= */}
//       <section className="py-24 bg-gradient-to-r from-purple-700 via-indigo-700 to-purple-800 text-white text-center">
//         <motion.div
//           initial={{ opacity: 0, y: 40 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6 }}
//           className="container mx-auto px-6"
//         >
//           <h2 className="text-3xl md:text-4xl font-bold mb-6">
//             Ready to Elevate Your Manufacturing?
//           </h2>
//           <p className="text-purple-200 mb-10 max-w-2xl mx-auto">
//             Let’s discuss your precision blanking requirements and tailor a
//             solution for your production line.
//           </p>
//           <div className="flex flex-col sm:flex-row justify-center gap-4">
//             <Link
//               to="/contact"
//               className="bg-white text-purple-700 px-8 py-3 rounded-xl font-semibold shadow hover:scale-105 transition-transform"
//             >
//               Contact Us
//             </Link>
//             <Link
//               to="/"
//               className="border-2 border-white px-8 py-3 rounded-xl font-semibold hover:bg-white/10 transition"
//             >
//               Back Home
//             </Link>
//           </div>
//         </motion.div>
//       </section>
//     </div>
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
