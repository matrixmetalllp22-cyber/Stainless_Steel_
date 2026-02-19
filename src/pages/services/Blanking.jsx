import React, { useRef } from "react";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { 
  Layers, Gauge, Cog, Zap, CheckCircle, ArrowRight, 
  Scissors, Package, Shield, Cpu, Award, Factory, Users, TrendingUp,
  Phone, Mail, MapPin, ChevronRight, Sparkles, Maximize2, Minimize2
} from "lucide-react";
import CountUp from "react-countup";

export default function BlankingIndustrial() {
  // Refs for parallax effects
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });
  const heroBgY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const heroContentY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);

  // Stats ref for count-up
  const statsRef = useRef(null);
  const statsInView = useInView(statsRef, { once: true, amount: 0.3 });

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

  const toleranceMetrics = [
    { label: "Length Tolerance", value: "< 0.5 mm", icon: <Gauge className="w-6 h-6" /> },
    { label: "Diagonal Tolerance", value: "< 1.0 mm", icon: <Layers className="w-6 h-6" /> },
    { label: "Flatness Precision", value: "< 1.0 mm", icon: <Zap className="w-6 h-6" /> },
    { label: "Stacking Accuracy", value: "Drop-Free", icon: <Package className="w-6 h-6" /> },
  ];

  const applications = [
    "Automotive stamping components",
    "Appliance body panels",
    "Architectural façade sheets",
    "Precision electrical enclosures",
    "Press forming blanks",
    "Large and small format sheet blanks",
  ];

  const stats = [
    { icon: <Factory className="w-8 h-8" />, value: 150, suffix: "+", label: "Machines Installed" },
    { icon: <Award className="w-8 h-8" />, value: 25, suffix: "+", label: "Years of Excellence" },
    { icon: <Users className="w-8 h-8" />, value: 500, suffix: "+", label: "Global Clients" },
    { icon: <TrendingUp className="w-8 h-8" />, value: 99.9, suffix: "%", label: "Accuracy Rate" },
  ];

  // Combined variants for capability cards
  const cardVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 300, damping: 24 },
    },
    hover: {
      y: -8,
      boxShadow: "0 20px 40px -10px rgba(59, 130, 246, 0.3)",
      transition: { type: "spring", stiffness: 400, damping: 17 },
    },
  };

  // Variants for staggered animations
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 300, damping: 24 },
    },
  };

  return (
    <div className="bg-gradient-to-b from-slate-50 via-white to-slate-100 min-h-screen text-gray-900 font-sans overflow-x-hidden">
      {/* ================= FLOATING CONTACT BUTTON ================= */}
      <motion.a
        href="/contact"
        className="fixed bottom-6 right-6 z-50 bg-blue-600 text-white p-4 rounded-full shadow-2xl flex items-center gap-2 hover:bg-blue-700 transition-all group"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 1.5, type: "spring" }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <Phone className="w-5 h-5" />
        <span className="max-w-0 overflow-hidden group-hover:max-w-xs group-hover:ml-2 transition-all duration-300 whitespace-nowrap">
          Quick Contact
        </span>
      </motion.a>

      {/* ================= HERO ================= */}
      <section ref={heroRef} className="relative overflow-hidden pt-16 h-screen flex items-center">
        <motion.div 
          className="absolute inset-0"
          style={{ y: heroBgY }}
        >
          <img
            src="https://images.unsplash.com/photo-1581091870622-3a940d7f7c07?q=80&w=1600"
            alt="Industrial blanking press"
            className="w-full h-full object-cover opacity-30 scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-gray-900 via-gray-800/90 to-gray-900"></div>
        </motion.div>

        <motion.div 
          className="relative container mx-auto px-6 text-white"
          style={{ y: heroContentY }}
        >
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl"
          >
            <motion.span
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-block bg-blue-500/20 backdrop-blur-sm text-blue-300 px-4 py-2 rounded-full text-sm font-semibold mb-6 border border-blue-400/30"
            >
              ⚙️ INDUSTRY 4.0 READY
            </motion.span>
            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="text-5xl md:text-7xl font-black leading-tight mb-6 tracking-tight"
            >
              Blanking Line – <span className="text-blue-400">High-Precision</span> Auto Stacking
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-lg md:text-xl text-blue-100 max-w-4xl mb-10 leading-relaxed"
            >
              Engineered for superior dimensional accuracy, high-speed processing, and seamless production of precision blanks for automotive, appliance, architectural, and fabrication industries. Every blank meets global OEM quality requirements with perfect geometry and clean edges.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <motion.a
                href="/contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-blue-500 hover:bg-blue-600 text-white px-10 py-4 rounded-xl font-bold text-lg shadow-lg flex items-center gap-3 justify-center transition-all hover:shadow-blue-500/30"
              >
                Request Quote <ArrowRight className="w-5 h-5" />
              </motion.a>
              <motion.a
                href="tel:+919876543210"
                whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.1)" }}
                whileTap={{ scale: 0.95 }}
                className="border-2 border-white/30 text-white px-10 py-4 rounded-xl font-bold hover:bg-white/10 hover:border-white/50 transition flex items-center justify-center gap-2"
              >
                <Phone className="w-5 h-5" /> Call Expert
              </motion.a>
            </motion.div>
          </motion.div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="absolute bottom-10 right-10 hidden lg:block bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 text-white"
          whileHover={{ scale: 1.05 }}
        >
          <div className="flex items-center gap-4">
            <Shield className="w-10 h-10 text-blue-400" />
            <div>
              <p className="text-2xl font-bold">ISO 9001:2024</p>
              <p className="text-blue-200 text-sm">Certified Precision</p>
            </div>
          </div>
        </motion.div>

        {/* Animated scroll indicator */}
        <motion.div 
          className="absolute bottom-6 left-1/2 transform -translate-x-1/2 text-white"
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
        >
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
            <motion.div 
              className="w-1 h-2 bg-blue-400 rounded-full mt-2"
              animate={{ y: [0, 4, 0] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
            />
          </div>
        </motion.div>
      </section>

      {/* ================= STATS COUNTER ================= */}
      <motion.section 
        ref={statsRef} 
        className="py-16 bg-white border-y border-gray-200"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -5 }}
                className="text-center group"
              >
                <div className="text-blue-500 flex justify-center mb-3 group-hover:scale-110 transition-transform">
                  {stat.icon}
                </div>
                <div className="text-3xl md:text-4xl font-bold text-gray-900">
                  {statsInView ? (
                    <CountUp end={stat.value} duration={2.5} suffix={stat.suffix} />
                  ) : (
                    "0"
                  )}
                </div>
                <p className="text-gray-600 mt-2">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* ================= KEY CAPABILITIES ================= */}
      <section className="py-24 bg-gradient-to-b from-white to-slate-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-bold text-gray-900 mb-4"
            >
              Core <span className="text-blue-600">Capabilities</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-lg text-gray-600 max-w-3xl mx-auto"
            >
              Advanced technology for precision blanking with industry-leading accuracy and throughput
            </motion.p>
          </div>

          <motion.div 
            className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            {capabilities.map((cap, i) => (
              <motion.div
                key={i}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                whileHover="hover"
                viewport={{ once: true }}
                className="group bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-gray-200 hover:border-blue-300 transition-all"
              >
                <motion.div 
                  className="text-blue-500 mb-4 bg-blue-50 w-16 h-16 rounded-2xl flex items-center justify-center"
                  whileHover={{ rotate: 5 }}
                >
                  {cap.icon}
                </motion.div>
                <h3 className="text-xl font-bold mb-3 text-gray-900">{cap.title}</h3>
                <p className="text-gray-600 leading-relaxed">{cap.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ================= TOLERANCE METRICS ================= */}
      <section className="py-20 bg-gradient-to-r from-gray-900 via-slate-800 to-gray-900 text-white">
        <div className="container mx-auto px-6">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-center mb-12"
          >
            Precision <span className="text-blue-400">Tolerance Metrics</span>
          </motion.h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {toleranceMetrics.map((metric, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ delay: i * 0.08 }}
                whileHover={{ scale: 1.05 }}
                className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-6 text-center hover:bg-white/20 transition-all"
              >
                <motion.div 
                  className="text-blue-400 mb-3 flex justify-center"
                  animate={{ rotate: [0, 5, -5, 0] }}
                  transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                >
                  {metric.icon}
                </motion.div>
                <p className="text-3xl font-bold text-blue-400 mb-2">{metric.value}</p>
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
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-bold text-gray-900 mb-4"
            >
              Machine <span className="text-blue-600">Introduction</span>
            </motion.h2>
          </div>

          <motion.div 
            className="space-y-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
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
                variants={itemVariants}
                whileHover={{ x: 5 }}
                className="bg-gradient-to-r from-slate-50 to-blue-50 rounded-2xl p-8 border border-blue-200 hover:shadow-lg transition-all"
              >
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <motion.span 
                      className="flex items-center justify-center w-10 h-10 rounded-full bg-blue-600 text-white font-bold shadow-md"
                      whileHover={{ scale: 1.2, rotate: 360 }}
                      transition={{ duration: 0.5 }}
                    >
                      {section.num}
                    </motion.span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">{section.title}</h3>
                    <p className="text-gray-700 leading-relaxed">{section.content}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
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
                Wide Material <span className="text-blue-600">Compatibility</span>
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
                    <CheckCircle className="w-5 h-5 text-blue-500 flex-shrink-0" />
                    <p className="text-gray-700 font-medium">{material}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Right: Visual with animated gradient */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6 }}
              className="bg-gradient-to-br from-blue-400 to-cyan-600 rounded-3xl h-96 shadow-xl flex items-center justify-center relative overflow-hidden group"
            >
              <motion.div 
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                animate={{ x: ["-100%", "100%"] }}
                transition={{ repeat: Infinity, duration: 3, ease: "linear" }}
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-all"></div>
              <div className="text-white text-center p-8 relative z-10">
                <Cpu className="w-20 h-20 mx-auto mb-4 opacity-80 group-hover:rotate-12 transition-transform" />
                <p className="text-lg font-semibold">Versatile Material Processing</p>
                <p className="text-blue-100 text-sm mt-2">All major metal types supported</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ================= APPLICATIONS ================= */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 max-w-5xl">
          <div className="text-center mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-bold text-gray-900 mb-4"
            >
              Ideal for High-Performance <span className="text-blue-600">Manufacturing</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-gray-600 text-lg"
            >
              Each blank is engineered to deliver consistent formability, flatness, and dimensional accuracy
            </motion.p>
          </div>

          <motion.div 
            className="grid sm:grid-cols-2 md:grid-cols-3 gap-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            {applications.map((app, i) => (
              <motion.div
                key={i}
                variants={itemVariants}
                whileHover={{ scale: 1.02 }}
                className="bg-gradient-to-br from-slate-50 to-gray-100 rounded-xl p-6 border border-gray-200 hover:border-blue-400 hover:shadow-md transition-all flex items-start gap-4"
              >
                <CheckCircle className="w-6 h-6 text-blue-500 flex-shrink-0 mt-1" />
                <p className="text-gray-700 font-medium">{app}</p>
              </motion.div>
            ))}
          </motion.div>
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
              Export-Ready Blanks with <span className="text-blue-400">International Packing</span>
            </h2>
            <p className="text-blue-100">
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
                whileHover={{ x: 5 }}
                className="flex items-center gap-4 bg-white/10 backdrop-blur-md p-4 rounded-lg border border-white/20"
              >
                <Package className="w-6 h-6 text-blue-400 flex-shrink-0" />
                <p className="text-blue-100">{packing}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="py-28 bg-gradient-to-r from-blue-600 via-blue-700 to-cyan-700 text-white text-center">
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
            className="text-lg md:text-xl text-blue-100 mb-12 max-w-3xl mx-auto"
          >
            Join leading manufacturers trusting Matrix Metals for precision-engineered blanks that meet global OEM standards
          </motion.p>
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <motion.a
              href="/contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              animate={{ boxShadow: ["0 0 0 0 rgba(255,255,255,0.4)", "0 0 0 20px rgba(255,255,255,0)"] }}
              transition={{ repeat: Infinity, duration: 2 }}
              className="bg-white text-blue-600 hover:bg-gray-100 px-12 py-4 rounded-xl font-bold text-lg shadow-2xl hover:scale-105 transition-all flex items-center justify-center gap-3"
            >
              Get Instant Quote <ArrowRight className="w-6 h-6" />
            </motion.a>
            <motion.a
              href="tel:+919876543210"
              whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.1)" }}
              whileTap={{ scale: 0.95 }}
              className="border-4 border-white text-white hover:bg-white/10 px-12 py-4 rounded-xl font-bold text-lg transition-all flex items-center justify-center gap-2"
            >
              <Phone className="w-5 h-5" /> Call Now: +91 98765 43210
            </motion.a>
          </div>
        </div>
      </section>

      {/* ================= FOOTER ================= */}
      <motion.footer 
        className="bg-gray-900 text-white py-12"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">Matrix Metals</h3>
              <p className="text-gray-400 text-sm">Precision engineering for the future of manufacturing.</p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li><a href="#" className="hover:text-blue-400 transition">Home</a></li>
                <li><a href="#" className="hover:text-blue-400 transition">Products</a></li>
                <li><a href="#" className="hover:text-blue-400 transition">Services</a></li>
                <li><a href="#" className="hover:text-blue-400 transition">Contact</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Contact</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li className="flex items-center gap-2"><MapPin className="w-4 h-4" /> 123 Industrial Area, City</li>
                <li className="flex items-center gap-2"><Phone className="w-4 h-4" /> +91 98765 43210</li>
                <li className="flex items-center gap-2"><Mail className="w-4 h-4" /> info@matrixmetals.com</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Follow Us</h4>
              <div className="flex gap-4">
                {/* Add social icons here */}
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-500 text-sm">
            &copy; 2025 Matrix Metals. All rights reserved.
          </div>
        </div>
      </motion.footer>
    </div>
  );
}