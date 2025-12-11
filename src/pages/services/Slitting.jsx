import React from "react";
import { motion } from "framer-motion";
import { 
  Layers, Gauge, Zap, Cog, Shield, Package, Wrench, 
  CheckCircle, ArrowRight, Factory, Ruler, Weight 
} from "lucide-react";
import CountUp from "react-countup";

export default function SlittingIndustrial() {

  const realSpecs = [
    { label: "Material Thickness", value: "0.4 - 4.0 mm" },
    { label: "Slitting Width", value: "20 - 1600 mm" },
    { label: "Coil Weight Capacity", value: "15 MT" },
    { label: "Precision Tolerance", value: "±0.1 mm" },
    { label: "Annual Capacity", value: "25,000 MT" },
    { label: "Coil OD Max", value: "1600 mm" },
  ];

  const keyFeatures = [
    { icon: <Layers className="w-8 h-8" />, title: "Shimless Tooling", desc: "Fast changeover with spare slitter head & offline setup" },
    { icon: <Zap className="w-8 h-8" />, title: "High-Speed Automation", desc: "Servo tension control & digital synchronization" },
    { icon: <Shield className="w-8 h-8" />, title: "Surface Protection", desc: "German Laser Polifilm OSL/BSL + Interleaving Paper" },
    { icon: <Package className="w-8 h-8" />, title: "Export-Grade Packing", desc: "Eye-to-Wall & Eye-to-Sky vertical arm system" },
    { icon: <Ruler className="w-8 h-8" />, title: "±0.1 mm Precision", desc: "Micron-level accuracy across all widths" },
    { icon: <Cog className="w-8 h-8" />, title: "Zero-Defect Quality", desc: "Real-time monitoring & full traceability" },
  ];

  return (
    <div className="bg-gradient-to-b from-slate-50 via-white to-slate-100 min-h-screen text-gray-900 font-sans">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-gray-900 text-white">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1581092580490-4a38c11e7b9f?q=80&w=2850&auto=format&fit=crop" 
            alt="High-precision slitting line" 
            className="w-full h-full object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent"></div>
        </div>

        <div className="relative container mx-auto px-6 py-32 md:py-48 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 40 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-7xl font-extrabold leading-tight mb-8"
          >
            4HI High-Speed <span className="text-orange-500">Shimless</span><br />
            Precision Slitting Line
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 30 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-xl md:text-2xl text-orange-100 max-w-4xl mx-auto mb-10 leading-relaxed"
          >
            Engineered for stainless steel, aluminium, GI/GP & high-strength alloys<br />
            Delivering <strong>±0.1 mm</strong> precision at industrial scale — <em>Zero Defect Guaranteed</em>
          </motion.p>
          <motion.div 
            initial={{ opacity: 0 }} 
            whileInView={{ opacity: 1 }} 
            transition={{ delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-6 justify-center"
          >
            <a href="/contact" className="bg-orange-600 hover:bg-orange-700 text-white px-10 py-4 rounded-xl font-bold text-lg shadow-xl hover:shadow-2xl transition-all flex items-center justify-center gap-3">
              Request Quote <ArrowRight className="w-5 h-5" />
            </a>
            <a href="#specs" className="border-2 border-orange-500 text-orange-400 hover:bg-orange-500/10 px-10 py-4 rounded-xl font-bold text-lg transition-all">
              View Specifications
            </a>
          </motion.div>
        </div>
      </section>

      {/* Key Advantages Grid */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Engineered for <span className="text-orange-600">Excellence</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Built with German precision tooling, Japanese automation philosophy, and Indian industrial robustness
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {keyFeatures.map((feat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="group bg-gradient-to-br from-slate-50 to-gray-100 rounded-2xl p-8 border border-gray-200 hover:border-orange-400 hover:shadow-2xl transition-all duration-300"
              >
                <div className="text-orange-600 mb-5 group-hover:scale-110 transition-transform">
                  {feat.icon}
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-900">{feat.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feat.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Technical Specifications */}
      <section id="specs" className="py-28 bg-gradient-to-b from-gray-900 to-slate-900 text-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-extrabold mb-4">
              Technical <span className="text-orange-500">Capabilities</span>
            </h2>
            <p className="text-xl text-orange-200">4HI High-Speed Auto Shimless Slitting Line</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 max-w-6xl mx-auto">
            {realSpecs.map((spec, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ delay: i * 0.1, duration: 0.6 }}
                className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-6 text-center hover:bg-white/20 transition-all"
              >
                <p className="text-3xl md:text-4xl font-bold text-orange-400">
                  {spec.value.includes("MT") || spec.value.includes("mm") ? spec.value : 
                    <CountUp end={parseFloat(spec.value.replace(/[^\d.-]/g, ""))} duration={2.5} decimals={spec.value.includes("0.1") ? 1 : 0} />}
                  {spec.value.includes("±") && <span className="text-2xl">mm</span>}
                </p>
                <p className="text-sm md:text-base text-gray-300 mt-3 uppercase tracking-wider font-medium">
                  {spec.label}
                </p>
              </motion.div>
            ))}
          </div>

          <div className="mt-20 grid md:grid-cols-2 gap-12 max-w-5xl mx-auto text-left">
            <div className="bg-black/30 backdrop-blur-md border border-white/10 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-orange-400 mb-6 flex items-center gap-3">
                <Factory className="w-8 h-8" /> Special Performance Advantages
              </h3>
              <ul className="space-y-4 text-gray-200">
                {[
                  "Spare slitter head for zero downtime changeover",
                  "Vertical scrap winders with clean collection",
                  "German Laser Polifilm surface protection (OSL/BSL)",
                  "Interleaving paper integration for delicate surfaces",
                  "Export-ready Eye-to-Wall & Eye-to-Sky packing",
                  "Servo-controlled tension & automatic loop management",
                  "Real-time error detection & safety interlocks"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-orange-500 mt-0.5 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-black/30 backdrop-blur-md border border-white/10 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-orange-400 mb-6 flex items-center gap-3">
                <Shield className="w-8 h-8" /> Zero-Defect Quality Assurance
              </h3>
              <ul className="space-y-4 text-gray-200">
                {[
                  "Width tolerance verification (±0.1 mm)",
                  "Burr height measurement & control",
                  "Surface inspection (scratch-free guarantee)",
                  "Camber & flatness monitoring",
                  "Digital material traceability logging",
                  "100% coil inspection before dispatch"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-orange-500 mt-0.5 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      {/* Machine Introduction Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Slitting Line – <span className="text-orange-600">Machine Introduction</span>
            </h2>
          </div>

          <div className="space-y-8 max-w-5xl mx-auto">
            {[
              {
                num: "1",
                title: "Precision Slitting Engineered for High-Performance Applications",
                content: "Matrix Metals LLP delivers world-class slitting technology designed for absolute precision, high throughput, and unmatched coil processing efficiency. Our slitting lines are engineered to handle a wide spectrum of materials — including stainless steel, aluminium, GI, GP, and high-strength alloys — with accuracy that meets global industrial standards. Every machine we deploy reflects disciplined engineering, robust construction, and refined process control."
              },
              {
                num: "2",
                title: "Designed for Accuracy, Built for Endurance",
                content: "Our slitting lines incorporate hardened tool steels, high-precision arbors, dynamically balanced shafts, and advanced tension control systems to ensure flawless strip accuracy across all gauges. The system is built to operate continuously under demanding industrial loads, delivering consistent output without deviation in width, burr formation, camber, or edge quality. This endurance makes our slitting lines ideal for industries demanding reliability at scale."
              },
              {
                num: "3",
                title: "Advanced Automation for Intelligent Processing",
                content: "Each slitting line integrates intelligent automation systems that enhance operator control, safety, and workflow efficiency. Key automation features include digital line speed synchronization, servo-based tension control, automated loop management, real-time parameter monitoring, and error detection & safety interlocks. This ensures smooth, vibration-free operation with superior strip stability and cutting precision from start to finish."
              },
              {
                num: "4",
                title: "Superior Blade Geometry & Cutting Performance",
                content: "Matrix Metals uses premium-grade slitting tooling designed for durability and ultra-clean cuts. Our blade setups minimize burr formation, eliminate micro-cracks, and produce accurate slit widths — even at high speeds. Precision shimming systems and adjustable knife positioning ensure repeatability across large production runs, reducing downtime and enhancing operational efficiency."
              },
              {
                num: "5",
                title: "Engineered Material Flow With Seamless Coil Handling",
                content: "Our slitting lines feature a robust coil handling architecture that ensures safe, smooth, and damage-free processing. This includes heavy-duty decoilers, hydraulic expanders, automated threading systems, loop pits designed for controlled strip flow, and high-torque recoilers for perfectly wound slit coils. The result is perfect coil formation with tight, uniform winding — ready for downstream processing or direct dispatch."
              },
              {
                num: "6",
                title: "Zero-Defect Quality Commitment",
                content: "Every slitting line operated by Matrix Metals is governed by a strict zero-defect philosophy. We enforce rigorous quality checks including width tolerance verification, surface inspection, burr height measurement, coil flatness and camber control, and material traceability digital logging. Our customers receive slit coils that meet premium quality requirements for both critical and high-volume applications."
              },
              {
                num: "7",
                title: "Capabilities That Redefine Industrial Standards",
                content: "Matrix Metals' slitting lines deliver high processing speeds for maximum productivity, precision down to microns for high-end applications, consistent cut quality across full coil widths, flexibility for multiple materials and thickness ranges, and scalability for future production expansion. These capabilities enable industries to achieve superior performance, optimized workflows, and significantly reduced rejection rates."
              }
            ].map((section, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.05 }}
                className="bg-gradient-to-br from-slate-50 to-gray-100 rounded-2xl p-8 border border-gray-200 hover:border-orange-400 hover:shadow-lg transition-all"
              >
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <span className="flex items-center justify-center w-10 h-10 rounded-full bg-orange-600 text-white font-bold text-lg">
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

      {/* Technical Capabilities Detailed Section */}
      <section className="py-24 bg-gray-900 text-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Technical Capabilities – <span className="text-orange-500">4HI High-Speed Auto Shimless Slitting Line</span>
            </h2>
            <p className="text-xl text-orange-200">Enhanced, Professional, Industry-Standard Version</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {[
              { title: "Material Thickness Processing Range", desc: "Designed for versatility, the slitting line efficiently processes a broad thickness range from 0.4 mm to 4.0 mm, enabling compatibility with stainless steel, aluminium, GI/GP, and high-strength specialty alloys." },
              { title: "Wide Slitting Width Capacity", desc: "The system offers multi-slit capabilities from 20 mm to 1600 mm, engineered with precision arbor alignment and high-torque shafts to ensure consistent strip geometry across all widths." },
              { title: "Coil Inner Diameter (ID) Compatibility", desc: "It accommodates inner diameters ranging from 480 mm to 610 mm, allowing seamless processing of coils sourced from a wide range of domestic and international mills." },
              { title: "Coil Outer Diameter (OD) Capacity", desc: "Supports coils with outer diameters up to 1600 mm, enabling high-volume operations and continuous production cycles without frequent coil changes." },
              { title: "Decoiler Specifications", desc: "The heavy-duty decoiler is engineered for performance and safety with ID handling: 200-250 mm, material thickness handling: up to 1 mm, and coil weight capacity: 1.5 MT." },
              { title: "Maximum Coil Weight Handling", desc: "Supports coil weights of up to 15 MT, ensuring compatibility with large mill coils and allowing uninterrupted production for extended durations." },
              { title: "Annual Production Throughput", desc: "The slitting line is designed for industrial-scale output with an impressive capacity of 25,000 MT per year, ensuring maximum return on investment and operational scalability." },
              { title: "Masking & Surface Lamination Options", desc: "Supports both OSL (One Side Lamination) and BSL (Both Side Lamination) ensuring surface protection during slitting, rewinding, packaging, and downstream manufacturing." },
              { title: "Precision Tolerance & Performance Accuracy", desc: "Engineered for high-tolerance applications, the line maintains a strict precision accuracy of ±0.1 mm, essential for industries requiring micro-tolerance slitting." }
            ].map((cap, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: i * 0.05 }}
                className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-6 hover:bg-white/20 transition-all"
              >
                <h3 className="text-lg font-bold text-orange-400 mb-3">{cap.title}</h3>
                <p className="text-gray-200 text-sm leading-relaxed">{cap.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Special Features Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Special Features & <span className="text-orange-600">Performance Advantages</span>
            </h2>
          </div>

          <div className="space-y-8 max-w-5xl mx-auto">
            {[
              { title: "Shimless Slitter Tooling System with Spare Head", content: "The machine incorporates a state-of-the-art shimless tooling system, reducing setup time significantly and eliminating manual shimming errors. A dedicated spare slitter head enables parallel offline setup, ensuring continuous production and maximizing uptime." },
              { title: "Vertical Scrap Winding System", content: "Integrated vertical scrap winders provide clean, efficient scrap collection, minimizing downtime and enhancing operator safety." },
              { title: "Advanced Surface Protection Options", content: "The slitting line supports application of protective films on single side or both sides. Premium-grade German Laser Polifilm ensures flawless surface preservation, ideal for architectural, decorative, and high-polish materials." },
              { title: "Multi-Slit Intelligence from 20 mm to 1600 mm", content: "The line can execute multiple slit width combinations in a single pass, optimizing productivity for varied customer specifications—all while maintaining exceptional strip flatness and edge quality." },
              { title: "Export-Grade Vertical Packing System", content: "Engineered for global logistics, the machine includes a vertical arm packing system capable of Eye-to-Wall (ETW) and Eye-to-Sky (ETS) configurations, ensuring coils are export-ready with secure and stable packaging." },
              { title: "Interleaving Paper Integration for Delicate Materials", content: "Slit coils can be processed with interleaving kraft paper or film, providing extra surface protection and preventing micro-scratches during rewinding and transportation." },
              { title: "High-Speed Automation & Digital Control", content: "Equipped with smart automation featuring servo-controlled tension management, digital speed synchronization, automatic loop control, real-time monitoring for torque, load, and strip alignment, plus fault detection and safety interlocks." },
              { title: "Industrial-Grade Build Quality & Reliability", content: "The 4HI slitting architecture is constructed from heavy steel frames, precision machined housings, and dynamically balanced rotating components, providing rigidity, minimal vibration, longer equipment lifespan, and reduced maintenance cycles." },
              { title: "Designed for Multi-Shift, Continuous Operations", content: "The machine is optimized for 24/7 industrial workloads, ensuring reliability even under aggressive production schedules." }
            ].map((feature, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.05 }}
                className="bg-gradient-to-r from-orange-50 to-amber-50 rounded-2xl p-8 border border-orange-200 hover:shadow-lg transition-all"
              >
                <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center gap-3">
                  <CheckCircle className="w-6 h-6 text-orange-600 flex-shrink-0" />
                  {feature.title}
                </h3>
                <p className="text-gray-700 leading-relaxed ml-9">{feature.content}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-28 bg-gradient-to-r from-orange-300 via-orange-500 to-amber-600 text-white text-center">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl md:text-6xl font-extrabold mb-6">
            Ready for World-Class Slitting?
          </h2>
          <p className="text-xl md:text-2xl text-orange-100 mb-12 max-w-3xl mx-auto">
            Join leading manufacturers trusting Matrix Metals for precision-cut, export-ready coils
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <a 
              href="/contact" 
              className="bg-white text-orange-400 hover:bg-gray-1 00 px-12 py-5 rounded-xl font-bold text-xl shadow-2xl hover:scale-105 transition-all flex items-center justify-center gap-3"
            >
              Get Instant Quote <ArrowRight className="w-6 h-6" />
            </a>
            {/* <a 
              href="tel:+919876543210" 
              className="border-4 border-white text-white hover:bg-white/10 px-12 py-5 rounded-xl font-bold text-xl transition-all"
            >
              Call Now: +91 98765 43210
            </a> */}
          </div>
        </div>
      </section>
    </div>
  );
}


























// import React from "react";
// import { motion } from "framer-motion";
// import { 
//   Layers, Gauge, Zap, Cog, Shield, Package, Wrench, Factory, 
//   Ruler, Weight, CheckCircle, ArrowRight, Play, Phone, Mail
// } from "lucide-react";
// import CountUp from "react-countup";
// export default function SlittingIndustrialPro() {

//   const realSpecs = [
//     { label: "Thickness Range", value: "0.4 - 4.0 mm", delay: 0.1 },
//     { label: "Slitting Width", value: "20 - 1600 mm", delay: 0.2 },
//     { label: "Coil Weight", value: "15 MT", delay: 0.3 },
//     { label: "Precision", value: "±0.1 mm", delay: 0.4 },
//     { label: "Annual Capacity", value: "25,000 MT", delay: 0.5 },
//     { label: "Max Coil OD", value: "1600 mm", delay: 0.6 },
//   ];

//   const features = [
//     { icon: Layers, title: "Shimless Tooling", desc: "Zero-downtime changeover with offline spare head setup", color: "from-violet-500 to-purple-600" },
//     { icon: Zap, title: "200 m/min Line Speed", desc: "High-speed servo synchronization & tension control", color: "from-amber-500 to-orange-600" },
//     { icon: Shield, title: "German Laser Polifilm", desc: "OSL/BSL + Interleaving paper for zero surface damage", color: "from-emerald-500 to-teal-600" },
//     { icon: Package, title: "Export-Grade Packing", desc: "Eye-to-Wall & Eye-to-Sky vertical arm system", color: "from-blue-500 to-indigo-600" },
//     { icon: Ruler, title: "±0.1 mm Accuracy", desc: "Micron-level precision guaranteed on every strip", color: "from-rose-500 to-pink-600" },
//     { icon: Cog, title: "Full Traceability", desc: "Digital logging + real-time quality monitoring", color: "from-cyan-500 to-sky-600" },
//   ];

//   return (
//     <>
//       {/* Hero - Full Bleed Video/Gradient with Floating Elements */}
//       <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black">
//         {/* Animated Gradient Mesh Background */}
//         <div className="absolute inset-0">
//           <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-black to-slate-900" />
//           <div className="absolute inset-0 bg-gradient-to-t from-orange-900/50 via-transparent to-transparent" />
//           <motion.div
//             animate={{ 
//               backgroundPosition: ["0% 0%", "100% 100%"],
//             }}
//             transition={{ duration: 20, repeat: Infinity, repeatType: "reverse" }}
//             className="absolute inset-0 opacity-30"
//             style={{
//               background: "radial-gradient(circle at 20% 80%, #f97316 0%, transparent 50%), radial-gradient(circle at 80% 20%, #ec4899 0%, transparent 50%)",
//               backgroundSize: "200% 200%"
//             }}
//           />
//         </div>

//         {/* Optional: Replace with your factory video */}
//         <div className="absolute inset-0">
//           <img 
//             src="https://images.unsplash.com/photo-1581092580490-4a38c11e7b9f?q=80&w=2850&auto=format&fit=crop"
//             alt="Slitting line in action"
//             className="w-full h-full object-cover opacity-30"
//           />
//         </div>

//         <div className="relative z-10 container mx-auto px-6 text-center">
//           <motion.div
//             initial={{ opacity: 0, y: 50 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true, amount: 0.3 }}
//             transition={{ duration: 1 }}
//           >
//             <h1 className="text-6xl md:text-8xl font-black text-white leading-tight mb-6">
//               4HI <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-amber-600">SHIMLESS</span>
//               <br />
//               <span className="text-5xl md:text-7xl">PRECISION SLITTING</span>
//             </h1>
//             <p className="text-2xl md:text-3xl text-orange-200 font-light mb-8 max-w-5xl mx-auto">
//               Engineered in Germany • Automated in Japan • Built Tough in India
//             </p>
//             <p className="text-xl text-gray-300 mb-12">
//               <strong className="text-orange-400">±0.1 mm</strong> tolerance • <strong className="text-orange-400">15 MT</strong> coils • <strong className="text-orange-400">25,000 MT/year</strong>
//             </p>

//             <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
//               <motion.a
//                 href="/contact"
//                 whileHover={{ scale: 1.05 }}
//                 whileTap={{ scale: 0.95 }}
//                 className="group bg-gradient-to-r from-orange-600 to-amber-600 text-white px-12 py-6 rounded-2xl font-bold text-xl shadow-2xl flex items-center gap-4 hover:shadow-orange-500/50 transition-all"
//               >
//                 Get Pricing Now <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition" />
//               </motion.a>
//               <motion.a
//                 href="tel:+919876543210"
//                 whileHover={{ scale: 1.05 }}
//                 className="border-4 border-white/30 backdrop-blur-xl text-white px-12 py-6 rounded-2xl font-bold text-xl flex items-center gap-3 hover:bg-white/10 transition"
//               >
//                 <Phone className="w-6 h-6" /> Call Expert
//               </motion.a>
//             </div>
//           </motion.div>
//         </div>

//         <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
//           <div className="w-10 h-14 border-2 border-white/30 rounded-full flex justify-center">
//             <motion.div
//               animate={{ y: [0, 15, 0] }}
//               transition={{ duration: 2, repeat: Infinity }}
//               className="w-1 h-4 bg-white/60 rounded-full mt-3"
//             />
//           </div>
//         </div>
//       </section>

//       {/* Floating Stats Bar */}
//       <section className="py-16 bg-black/95 backdrop-blur-2xl border-y border-white/10">
//         <div className="container mx-auto px-6">
//           <div className="grid grid-cols-2 md:grid-cols-6 gap-8">
//             {realSpecs.map((spec, i) => (
//               <motion.div
//                 key={i}
//                 initial={{ opacity: 0, y: 30 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 viewport={{ once: true, amount: 0.2 }}
//                 transition={{ delay: i * 0.1 }}
//                 className="text-center group"
//               >
//                 <p className="text-4xl md:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-amber-500">
//                   {spec.value.includes("±") ? "±0.1" : spec.value.includes("MT") ? spec.value : spec.value}
//                   {spec.value.includes("±") && <span className="text-3xl">mm</span>}
//                 </p>
//                 <p className="text-sm md:text-base text-gray-400 mt-2 uppercase tracking-wider font-medium">
//                   {spec.label}
//                 </p>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Key Features - Glass Cards with Tilt */}
//       <section className="py-32 bg-gradient-to-b from-black via-slate-900 to-black">
//         <div className="container mx-auto px-6">
//           <motion.div
//             initial={{ opacity: 0 }}
//             whileInView={{ opacity: 1 }}
//             className="text-center mb-20"
//           >
//             <h2 className="text-5xl md:text-7xl font-black text-white mb-6">
//               Built for <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-amber-500">Dominance</span>
//             </h2>
//             <p className="text-xl text-gray-400 max-w-4xl mx-auto">
//               The only slitting line trusted by Tier-1 exporters for zero-rejection deliveries
//             </p>
//           </motion.div>

//           <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
//             {features.map((f, i) => (
//               <motion.div
//                 key={i}
//                 initial={{ opacity: 0, y: 50 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 transition={{ delay: i * 0.1 }}
//                 whileHover={{ y: -10 }}
//                 className="group relative"
//               >
//                 <div className="absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-100 transition rounded-3xl blur-xl" 
//                   style={{ backgroundImage: `linear-gradient(to bottom right, ${f.color.split(" ")[1]}, ${f.color.split(" ")[3]})` }}
//                 />
//                 <div className="relative bg-white/5 backdrop-blur-2xl border border-white/10 rounded-3xl p-10 hover:border-white/30 transition-all">
//                   <div className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${f.color} p-4 mb-6 shadow-2xl`}>
//                     <f.icon className="w-full h-full text-white" />
//                   </div>
//                   <h3 className="text-2xl font-bold text-white mb-4">{f.title}</h3>
//                   <p className="text-gray-300 leading-relaxed">{f.desc}</p>
//                   <div className="mt-6 opacity-0 group-hover:opacity-100 transition">
//                     <ArrowRight className="w-6 h-6 text-orange-500" />
//                   </div>
//                 </div>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Final CTA - Full Width Impact */}
//       <section className="py-32 bg-gradient-to-r from-orange-600 via-orange-700 to-amber-700 relative overflow-hidden">
//         <div className="absolute inset-0 bg-black/20" />
//         <div className="relative container mx-auto px-6 text-center">
//           <motion.h2
//             initial={{ scale: 0.8, opacity: 0 }}
//             whileInView={{ scale: 1, opacity: 1 }}
//             className="text-5xl md:text-8xl font-black text-white mb-8"
//           >
//             READY TO UPGRADE?
//           </motion.h2>
//           <p className="text-2xl md:text-3xl text-orange-100 mb-12 max-w-4xl mx-auto font-light">
//             Join 50+ leading manufacturers already running zero-defect production
//           </p>
//           <div className="flex flex-col sm:flex-row justify-center gap-8">
//             <motion.a
//               href="/contact"
//               whileHover={{ scale: 1.1 }}
//               whileTap={{ scale: 0.95 }}
//               className="bg-black text-white px-16 py-8 rounded-2xl font-black text-2xl shadow-2xl hover:shadow-orange-900/50 transition-all flex items-center justify-center gap-4"
//             >
//               Get Quote in 60 Seconds <ArrowRight className="w-8 h-8" />
//             </motion.a>
//             <motion.a
//               href="https://wa.me/919876543210"
//               target="_blank"
//               whileHover={{ scale: 1.05 }}
//               className="bg-white/20 backdrop-blur-xl border-4 border-white text-white px-16 py-8 rounded-2xl font-bold text-2xl hover:bg-white/30 transition-all flex items-center gap-4"
//             >
//               <svg className="w-10 h-10" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.52.149-.174.198-.298.297-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.890-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/></svg>
//               Chat on WhatsApp
//             </motion.a>
//           </div>
//         </div>
//       </section>
//     </>
//   );
// }