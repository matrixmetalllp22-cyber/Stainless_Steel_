import React from "react";
import { motion } from "framer-motion";
import {
  Layers, Gauge, Zap, Cog, Shield, Package, Wrench,
  CheckCircle, ArrowRight, Factory, Ruler, Weight,
  Scale, Activity, Sparkles, Truck, Cpu, Users, Award
} from "lucide-react";
import CountUp from "react-countup";

export default function CutToLengthIndustrial() {

  const realSpecs = [
    { label: "Max Width", value: "2000 mm" },
    { label: "Max Length", value: "12,000 mm" },
    { label: "Thickness Range", value: "0.4 – 16 mm" },
    { label: "Length Tolerance", value: "±0.5 mm" },
    { label: "Flatness", value: "< 1.0 mm/m" },
    { label: "Annual Capacity", value: "1,75,000+ MT" },
  ];

  const keyFeatures = [
    { icon: <Ruler className="w-8 h-8" />, title: "Ultra-Precise Length", desc: "±0.5 mm accuracy even at 12-meter sheets" },
    { icon: <Factory className="w-8 h-8" />, title: "2000 mm Width Capacity", desc: "One of the widest CTL lines in India" },
    { icon: <Zap className="w-8 h-8" />, title: "High-Speed Processing", desc: "Flying shear & servo precision for maximum output" },
    { icon: <Package className="w-8 h-8" />, title: "Auto Stacking & Packing", desc: "Clean stacks with edge protection and export wrapping" },
    { icon: <Gauge className="w-8 h-8" />, title: "Precision Leveling", desc: "19-roll leveler for superior flatness" },
    { icon: <Cog className="w-8 h-8" />, title: "Zero-Defect Quality", desc: "Real-time monitoring & full traceability" },
  ];

  return (
    <div className="bg-gradient-to-b from-slate-50 via-white to-slate-100 min-h-screen text-gray-900 font-sans">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-gray-900 text-white">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1581092580490-4a38c11e7b9f?q=80&w=2850&auto=format&fit=crop"
            alt="Cut to length line"
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
            Cut to Length <span className="text-blue-400">Lines</span><br />
            <span className="text-4xl md:text-5xl">Precision Sheets • Export Ready</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-xl md:text-2xl text-blue-100 max-w-4xl mx-auto mb-10 leading-relaxed"
          >
            From coil to perfectly flat, accurately cut sheets — ready for PEB, construction, automotive, and fabrication.<br />
            Delivering <strong>±0.5 mm</strong> precision at industrial scale — <em>Zero Defect Guaranteed</em>
          </motion.p>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-6 justify-center"
          >
            <a href="/contact" className="bg-blue-600 hover:bg-blue-700 text-white px-10 py-4 rounded-xl font-bold text-lg shadow-xl hover:shadow-2xl transition-all flex items-center justify-center gap-3">
              Request Quote <ArrowRight className="w-5 h-5" />
            </a>
            <a href="#specs" className="border-2 border-blue-400 text-blue-300 hover:bg-blue-500/10 px-10 py-4 rounded-xl font-bold text-lg transition-all">
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
              Engineered for <span className="text-blue-600">Excellence</span>
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
                className="group bg-gradient-to-br from-slate-50 to-gray-100 rounded-2xl p-8 border border-gray-200 hover:border-blue-400 hover:shadow-2xl transition-all duration-300"
              >
                <div className="text-blue-600 mb-5 group-hover:scale-110 transition-transform">
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
              Technical <span className="text-blue-400">Capabilities</span>
            </h2>
            <p className="text-xl text-blue-200">High-Speed Precision Cut-to-Length Line</p>
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
                <p className="text-3xl md:text-4xl font-bold text-blue-400">
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
              <h3 className="text-2xl font-bold text-blue-400 mb-6 flex items-center gap-3">
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
                    <CheckCircle className="w-5 h-5 text-blue-400 mt-0.5 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-black/30 backdrop-blur-md border border-white/10 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-blue-400 mb-6 flex items-center gap-3">
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
                    <CheckCircle className="w-5 h-5 text-blue-400 mt-0.5 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Machine Introduction Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Cut-to-Length Line – <span className="text-blue-600">Machine Introduction</span>
            </h2>
          </div>

          <div className="space-y-8 max-w-5xl mx-auto">
            {[
              {
                num: "1",
                title: "Precision Cut-to-Length Engineered for High-Performance Applications",
                content: "Matrix Metals LLP delivers world-class cut-to-length technology designed for absolute precision, high throughput, and unmatched sheet processing efficiency. Our CTL lines are engineered to handle a wide spectrum of materials — including stainless steel, aluminium, GI, GP, and high-strength alloys — with accuracy that meets global industrial standards. Every machine we deploy reflects disciplined engineering, robust construction, and refined process control."
              },
              {
                num: "2",
                title: "Designed for Accuracy, Built for Endurance",
                content: "Our CTL lines incorporate precision roller levelers, high-speed flying shears, and advanced stacker systems to ensure flawless sheet accuracy across all lengths. The system is built to operate continuously under demanding industrial loads, delivering consistent output without deviation in flatness, length tolerance, or edge quality. This endurance makes our CTL lines ideal for industries demanding reliability at scale."
              },
              {
                num: "3",
                title: "Advanced Automation for Intelligent Processing",
                content: "Each CTL line integrates intelligent automation systems that enhance operator control, safety, and workflow efficiency. Key automation features include digital line speed synchronization, servo-based cut-to-length control, automated stacking, real-time parameter monitoring, and error detection & safety interlocks. This ensures smooth, vibration-free operation with superior sheet flatness and cutting precision from start to finish."
              },
              {
                num: "4",
                title: "Superior Blade Geometry & Cutting Performance",
                content: "Matrix Metals uses premium-grade cutting tooling designed for durability and ultra-clean cuts. Our flying shear setups minimize burr formation and produce accurate cut lengths — even at high speeds. Precision length measurement systems and adjustable knife positioning ensure repeatability across large production runs, reducing downtime and enhancing operational efficiency."
              },
              {
                num: "5",
                title: "Engineered Material Flow With Seamless Coil Handling",
                content: "Our CTL lines feature a robust coil handling architecture that ensures safe, smooth, and damage-free processing. This includes heavy-duty uncoilers, hydraulic expanders, automated threading systems, precision levelers, and high-speed flying shears. The result is perfectly flat, accurately cut sheets — ready for stacking and dispatch."
              },
              {
                num: "6",
                title: "Zero-Defect Quality Commitment",
                content: "Every CTL line operated by Matrix Metals is governed by a strict zero-defect philosophy. We enforce rigorous quality checks including length tolerance verification, surface inspection, flatness measurement, and material traceability digital logging. Our customers receive cut sheets that meet premium quality requirements for both critical and high-volume applications."
              },
              {
                num: "7",
                title: "Capabilities That Redefine Industrial Standards",
                content: "Matrix Metals' CTL lines deliver high processing speeds for maximum productivity, precision down to ±0.5 mm for high-end applications, consistent cut quality across full sheet widths, flexibility for multiple materials and thickness ranges, and scalability for future production expansion. These capabilities enable industries to achieve superior performance, optimized workflows, and significantly reduced rejection rates."
              }
            ].map((section, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.05 }}
                className="bg-gradient-to-br from-slate-50 to-gray-100 rounded-2xl p-8 border border-gray-200 hover:border-blue-400 hover:shadow-lg transition-all"
              >
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <span className="flex items-center justify-center w-10 h-10 rounded-full bg-blue-600 text-white font-bold text-lg">
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
              Technical Capabilities – <span className="text-blue-400">High-Speed Precision Cut-to-Length Line</span>
            </h2>
            <p className="text-xl text-blue-200">Enhanced, Professional, Industry-Standard Version</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {[
              { title: "Material Thickness Processing Range", desc: "Designed for versatility, the CTL line efficiently processes a broad thickness range from 0.4 mm to 16 mm, enabling compatibility with stainless steel, aluminium, GI/GP, and high-strength specialty alloys." },
              { title: "Maximum Sheet Width Capacity", desc: "The system offers a maximum width capacity of 2000 mm, one of the widest CTL lines in India, engineered with precision levelers and robust handling for consistent sheet flatness across all widths." },
              { title: "Maximum Sheet Length", desc: "Supports cut lengths up to 12,000 mm (12 meters) with ±0.5 mm tolerance, ideal for long sheets used in PEB, construction, and transportation industries." },
              { title: "Length Tolerance Precision", desc: "Engineered for high-tolerance applications, the line maintains a strict precision accuracy of ±0.5 mm, essential for industries requiring micro-tolerance cut sheets." },
              { title: "Flatness Control", desc: "Advanced roller levelers ensure flatness of < 1.0 mm/m, meeting the most demanding quality standards for automotive and appliance panels." },
              { title: "Annual Production Throughput", desc: "The CTL line is designed for industrial-scale output with an impressive capacity of 1,75,000+ MT per year, ensuring maximum return on investment and operational scalability." },
              { title: "Coil Weight Capacity", desc: "Supports coil weights of up to 15 MT or more, ensuring compatibility with large mill coils and allowing uninterrupted production for extended durations." },
              { title: "Auto Stacking & Packing", desc: "Fully automatic stacking with paper interleaving, edge protection, and export-ready packing systems for clean, damage-free sheet bundles." },
              { title: "Industry 4.0 Integration", desc: "Real-time monitoring, predictive maintenance, and IoT connectivity for smart factory integration and full production traceability." }
            ].map((cap, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: i * 0.05 }}
                className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-6 hover:bg-white/20 transition-all"
              >
                <h3 className="text-lg font-bold text-blue-400 mb-3">{cap.title}</h3>
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
              Special Features & <span className="text-blue-600">Performance Advantages</span>
            </h2>
          </div>

          <div className="space-y-8 max-w-5xl mx-auto">
            {[
              { title: "Precision Roller Leveler with 19-Roll Design", content: "The machine incorporates a state-of-the-art roller leveler with 19 rolls, ensuring superior flatness across all sheet widths and thicknesses. This eliminates coil memory and delivers perfectly flat sheets ready for downstream processing." },
              { title: "High-Speed Flying Shear with Servo Control", content: "Integrated flying shear technology enables continuous cutting at line speed, eliminating stoppages and maximizing throughput. Servo-driven precision ensures ±0.5 mm length accuracy even at high speeds." },
              { title: "Automatic Stacking with Paper Interleaving", content: "The automatic stacker counts and stacks sheets with precision, incorporating paper interleaving for surface protection. Edge alignment and stack height control ensure consistent, damage-free bundles." },
              { title: "Export-Grade Packing System", content: "Engineered for global logistics, the line includes integrated packing systems for secure bundling, strapping, and wrapping, ensuring sheets are export-ready with minimal manual intervention." },
              { title: "Widest Width Capacity in India", content: "With a 2000 mm width capacity, our CTL lines handle the widest coils available, reducing the need for multiple passes and increasing productivity for wide-sheet applications." },
              { title: "Interleaving Paper Integration for Delicate Materials", content: "Cut sheets can be processed with interleaving kraft paper or film, providing extra surface protection and preventing micro-scratches during stacking and transportation." },
              { title: "High-Speed Automation & Digital Control", content: "Equipped with smart automation featuring servo-controlled length measurement, digital speed synchronization, automatic stack counting, real-time monitoring for torque, load, and sheet alignment, plus fault detection and safety interlocks." },
              { title: "Industrial-Grade Build Quality & Reliability", content: "The CTL line is constructed from heavy steel frames, precision machined components, and dynamically balanced rotating parts, providing rigidity, minimal vibration, longer equipment lifespan, and reduced maintenance cycles." },
              { title: "Designed for Multi-Shift, Continuous Operations", content: "The machine is optimized for 24/7 industrial workloads, ensuring reliability even under aggressive production schedules." }
            ].map((feature, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.05 }}
                className="bg-gradient-to-r from-blue-50 to-sky-50 rounded-2xl p-8 border border-blue-200 hover:shadow-lg transition-all"
              >
                <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center gap-3">
                  <CheckCircle className="w-6 h-6 text-blue-600 flex-shrink-0" />
                  {feature.title}
                </h3>
                <p className="text-gray-700 leading-relaxed ml-9">{feature.content}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-28 bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 text-white text-center">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl md:text-6xl font-extrabold mb-6">
            Need Perfect Sheets On Time?
          </h2>
          <p className="text-xl md:text-2xl text-blue-100 mb-12 max-w-3xl mx-auto">
            Contact us for cut-to-length sheets in HR, CR, GP, high-strength steel — delivered with precision and speed.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <a
              href="/contact"
              className="bg-white text-blue-600 hover:bg-gray-100 px-12 py-5 rounded-xl font-bold text-xl shadow-2xl hover:scale-105 transition-all flex items-center justify-center gap-3"
            >
              Get Instant Quote <ArrowRight className="w-6 h-6" />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}