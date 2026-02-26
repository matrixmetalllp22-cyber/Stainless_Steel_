
// import React, { useRef } from "react";
// import { motion, useScroll, useTransform } from "framer-motion";
// import {
//   Ruler,
//   Package,
//   Zap,
//   Shield,
//   Factory,
//   CheckCircle,
//   ArrowRight,
//   Phone,
//   Award,
//   Cpu,
//   Layers,
//   Users,
//   Scale,
//   Activity,
//   Gauge,
//   Sparkles,
//   Truck,
// } from "lucide-react";

// export default function CutToLengthIndustrial() {
//   const containerRef = useRef(null);
//   const { scrollYProgress } = useScroll({
//     target: containerRef,
//     offset: ["start start", "end end"],
//   });

//   // Parallax effect for hero
//   const heroScale = useTransform(scrollYProgress, [0, 0.5], [1, 1.2]);
//   const heroOpacity = useTransform(scrollYProgress, [0, 0.3], [1, 0.4]);

//   const features = [
//     {
//       icon: <Ruler className="w-8 h-8" />,
//       title: "Ultra-Precise Length",
//       desc: "±0.5 mm accuracy even at 12-meter sheets",
//       color: "from-blue-600 to-blue-400",
//     },
//     {
//       icon: <Factory className="w-8 h-8" />,
//       title: "2000 mm Width Capacity",
//       desc: "One of the widest CTL lines in India",
//       color: "from-blue-500 to-cyan-400",
//     },
//     {
//       icon: <Zap className="w-8 h-8" />,
//       title: "High-Speed Processing",
//       desc: "Flying shear & servo precision for maximum output",
//       color: "from-blue-400 to-blue-300",
//     },
//     {
//       icon: <Package className="w-8 h-8" />,
//       title: "Auto Stacking & Packing",
//       desc: "Clean stacks with edge protection and export wrapping",
//       color: "from-blue-700 to-blue-500",
//     },
//   ];

//   const stats = [
//     { value: "150+", label: "Machines Installed", icon: <Cpu className="w-6 h-6" /> },
//     { value: "25+", label: "Years of Excellence", icon: <Award className="w-6 h-6" /> },
//     { value: "500+", label: "Global Clients", icon: <Users className="w-6 h-6" /> },
//     { value: "100%", label: "Accuracy Rate", icon: <CheckCircle className="w-6 h-6" /> },
//   ];

//   const specs = [
//     { label: "Max Width", value: "2000 mm", icon: <Ruler className="w-5 h-5" /> },
//     { label: "Max Length", value: "12,000 mm", icon: <Scale className="w-5 h-5" /> },
//     { label: "Thickness Range", value: "0.4 – 16 mm", icon: <Gauge className="w-5 h-5" /> },
//     { label: "Length Tolerance", value: "±0.5 mm", icon: <Activity className="w-5 h-5" /> },
//     { label: "Flatness", value: "< 1.0 mm/m", icon: <Sparkles className="w-5 h-5" /> },
//     { label: "Annual Capacity", value: "1,75,000+ MT", icon: <Truck className="w-5 h-5" /> },
//   ];

//   const processSteps = [
//     { title: "Coil Loading", desc: "Hydraulic uncoiler with loop control", icon: <Layers /> },
//     { title: "Precision Leveling", desc: "19-roll leveler for superior flatness", icon: <Factory /> },
//     { title: "High-Speed Cutting", desc: "Flying shear ±0.5mm accuracy", icon: <Zap /> },
//     { title: "Auto Stacking", desc: "Automatic stacking with edge protection", icon: <Package /> },
//   ];

//   const fadeUp = {
//     hidden: { opacity: 0, y: 60 },
//     visible: (i = 0) => ({
//       opacity: 1,
//       y: 0,
//       transition: { delay: i * 0.1, duration: 0.8, ease: [0.6, -0.05, 0.01, 0.99] },
//     }),
//   };

//   // Counter animation component
//   const Counter = ({ value, label, suffix = "" }) => {
//     const [count, setCount] = React.useState(0);
//     const ref = useRef(null);

//     React.useEffect(() => {
//       const observer = new IntersectionObserver(
//         ([entry]) => {
//           if (entry.isIntersecting) {
//             let start = 0;
//             const end = parseInt(value.replace(/[+,]/g, ""));
//             const duration = 2000;
//             const increment = end / (duration / 16);
//             const timer = setInterval(() => {
//               start += increment;
//               if (start > end) {
//                 setCount(end);
//                 clearInterval(timer);
//               } else {
//                 setCount(Math.floor(start));
//               }
//             }, 16);
//             return () => clearInterval(timer);
//           }
//         },
//         { threshold: 0.1 }
//       );
//       if (ref.current) observer.observe(ref.current);
//       return () => observer.disconnect();
//     }, [value]);

//     return (
//       <div ref={ref} className="text-center">
//         <div className="text-4xl font-bold text-blue-700">
//           {count.toLocaleString()}{suffix}
//         </div>
//         <div className="text-sm uppercase tracking-wider text-gray-600 mt-2">{label}</div>
//       </div>
//     );
//   };

//   return (
//     <div ref={containerRef} className="bg-gray-50 text-gray-800 font-sans antialiased overflow-x-hidden">
//       {/* Hero with Parallax */}
//       <section className="relative h-screen flex items-center justify-center overflow-hidden">
//         <motion.div
//           style={{ scale: heroScale, opacity: heroOpacity }}
//           className="absolute inset-0"
//         >
//           <img
//             src="/images/ctl-industrial.jpg" // Replace with actual image
//             alt="Cut to length line"
//             className="w-full h-full object-cover"
//           />
//           <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 via-blue-800/70 to-transparent" />
//         </motion.div>

//         <div className="relative container mx-auto px-6 text-white z-10">
//           <motion.h1
//             initial={{ opacity: 0, y: 50 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 1, ease: "easeOut" }}
//             className="text-5xl md:text-6xl font-extrabold leading-tight mb-6"
//           >
//             Cut to Length Lines
//             <br />
//             <span className="text-blue-300">Precision Sheets • Export Ready</span>
//           </motion.h1>
//           <motion.p
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             transition={{ delay: 0.4, duration: 1 }}
//             className="text-xl md:text-2xl text-gray-200 max-w-3xl mb-10"
//           >
//             From coil to perfectly flat, accurately cut sheets — ready for PEB, construction, automotive, and fabrication.
//           </motion.p>
//           <motion.div
//             initial={{ opacity: 0, y: 30 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ delay: 0.6 }}
//             className="flex flex-wrap gap-4"
//           >
//             {/* <a
//               href="/quote"
//               className="inline-flex items-center gap-2 bg-blue-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-blue-700 transition shadow-lg hover:shadow-blue-500/30"
//             >
//               Request Quote <ArrowRight className="w-5 h-5" />
//             </a> */}
//             <a
//               href="/contact"
//               className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm text-white border border-white/30 px-8 py-4 rounded-full text-lg font-semibold hover:bg-white/30 transition"
//             >
//               <Phone className="w-5 h-5" /> Call Expert
//             </a>
//           </motion.div>

//           {/* ISO Badge */}
//           {/* <motion.div
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             transition={{ delay: 0.8 }}
//             className="absolute bottom-8 left-6 flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full border border-white/20"
//           >
//             <CheckCircle className="w-5 h-5 text-green-300" />
//             <span className="text-sm font-medium">ISO 9001:2024 Certified Precision</span>
//           </motion.div> */}
//         </div>

//         {/* Scroll indicator */}
//         <motion.div
//           animate={{ y: [0, 10, 0] }}
//           transition={{ repeat: Infinity, duration: 2 }}
//           className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white/60"
//         >
//           <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
//             <div className="w-1 h-2 bg-white/60 rounded-full mt-2" />
//           </div>
//         </motion.div>
//       </section>

//       {/* Stats Section */}
//       <section className="py-20 bg-white">
//         <div className="container mx-auto px-6 max-w-6xl">
//           <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
//             {stats.map((stat, idx) => (
//               <motion.div
//                 key={idx}
//                 initial="hidden"
//                 whileInView="visible"
//                 variants={fadeUp}
//                 className="text-center p-6 bg-blue-50 rounded-2xl shadow-sm hover:shadow-md transition"
//               >
//                 <div className="text-blue-600 mb-2 flex justify-center">{stat.icon}</div>
//                 <Counter value={stat.value} label={stat.label} suffix={stat.value.includes('+') ? '+' : ''} />
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Features with 3D hover */}
//       <section className="py-28 px-4 bg-gray-50">
//         <div className="container mx-auto max-w-7xl">
//           <motion.h2
//             initial="hidden"
//             whileInView="visible"
//             variants={fadeUp}
//             className="text-5xl font-bold text-center mb-20 text-gray-800"
//           >
//             Why Choose Our{" "}
//             <span className="text-blue-700 bg-blue-100 px-6 py-2 rounded-full inline-block">
//               CTL Lines
//             </span>
//             ?
//           </motion.h2>

//           <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
//             {features.map((feature, index) => (
//               <motion.div
//                 key={index}
//                 custom={index}
//                 initial="hidden"
//                 whileInView="visible"
//                 variants={fadeUp}
//                 viewport={{ once: true }}
//                 whileHover={{ y: -10, scale: 1.02 }}
//                 className="group relative bg-white rounded-2xl p-8 border border-gray-200 hover:border-blue-300 transition-all duration-300 overflow-hidden shadow-lg"
//               >
//                 <div
//                   className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
//                 />
//                 <div className="relative z-10">
//                   <div className="text-blue-600 mb-4 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300">
//                     {feature.icon}
//                   </div>
//                   <h3 className="text-xl font-bold mb-3 text-gray-800 group-hover:text-blue-700 transition">
//                     {feature.title}
//                   </h3>
//                   <p className="text-gray-600 text-sm leading-relaxed group-hover:text-gray-700 transition">
//                     {feature.desc}
//                   </p>
//                 </div>
//                 {/* Animated border */}
//                 <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-blue-500 to-transparent transform translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Process Timeline */}
//       <section className="py-28 bg-white">
//         <div className="container mx-auto px-6 max-w-6xl">
//           <motion.h2
//             initial="hidden"
//             whileInView="visible"
//             variants={fadeUp}
//             className="text-5xl font-bold text-center mb-20 text-gray-800"
//           >
//             From <span className="text-blue-600">Coil</span> to{" "}
//             <span className="text-blue-600">Finished Sheet</span>
//           </motion.h2>

//           <div className="grid md:grid-cols-4 gap-8 relative">
//             {processSteps.map((step, index) => (
//               <motion.div
//                 key={index}
//                 custom={index}
//                 initial="hidden"
//                 whileInView="visible"
//                 variants={fadeUp}
//                 className="relative"
//               >
//                 <div className="bg-gray-50 rounded-2xl p-6 border border-gray-200 text-center hover:border-blue-300 transition group">
//                   <div className="w-16 h-16 mx-auto mb-4 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 group-hover:bg-blue-200 group-hover:scale-110 transition">
//                     {step.icon}
//                   </div>
//                   <h3 className="text-lg font-bold mb-2 text-gray-800">{step.title}</h3>
//                   <p className="text-sm text-gray-600">{step.desc}</p>
//                 </div>
//                 {index < processSteps.length - 1 && (
//                   <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2 text-blue-300">
//                     <ArrowRight className="w-6 h-6" />
//                   </div>
//                 )}
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Technical Specifications */}
//       <section className="py-28 bg-blue-900 text-white relative overflow-hidden">
//         <div className="absolute inset-0 bg-[url('/images/pattern-grid.svg')] opacity-10" />
//         <div className="container mx-auto px-6 max-w-7xl relative z-10">
//           <motion.h2
//             initial="hidden"
//             whileInView="visible"
//             variants={fadeUp}
//             className="text-5xl font-bold text-center mb-20"
//           >
//             Technical{" "}
//             <span className="text-blue-300 border-b-4 border-blue-300 pb-2">
//               Specifications
//             </span>
//           </motion.h2>

//           <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
//             {specs.map((spec, index) => (
//               <motion.div
//                 key={index}
//                 custom={index}
//                 initial="hidden"
//                 whileInView="visible"
//                 variants={fadeUp}
//                 whileHover={{ scale: 1.05 }}
//                 className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-6 text-center hover:bg-white/20 transition-all"
//               >
//                 <div className="text-blue-300 mb-2 flex justify-center">{spec.icon}</div>
//                 <p className="text-xl font-bold text-blue-300 mb-1">{spec.value}</p>
//                 <p className="text-gray-300 text-xs uppercase tracking-wider">{spec.label}</p>
//               </motion.div>
//             ))}
//           </div>

//           <motion.div
//             initial={{ opacity: 0, scale: 0.9 }}
//             whileInView={{ opacity: 1, scale: 1 }}
//             transition={{ delay: 0.8 }}
//             className="mt-16 flex justify-center items-center gap-4 text-gray-300"
//           >
//             <CheckCircle className="w-6 h-6 text-green-400" />
//             <span className="text-lg">ISO 9001:2024 Certified • Made in India</span>
//           </motion.div>
//         </div>
//       </section>

//       {/* CTA */}
//       {/* <section className="py-28 bg-gradient-to-r from-blue-600 to-blue-400 text-white text-center relative overflow-hidden">
//         <div className="absolute inset-0 bg-[url('/images/pattern-dots.svg')] opacity-10" />
//         <div className="container mx-auto px-6 max-w-4xl relative z-10">
//           <motion.div
//             initial={{ opacity: 0, y: 30 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8 }}
//           >
//             <h2 className="text-5xl font-bold mb-6">Need Perfect Sheets On Time?</h2>
//             <p className="text-xl mb-10 text-blue-100">
//               Contact us for cut-to-length sheets in HR, CR, GP, high-strength steel — delivered with precision and speed.
//             </p>
//             <div className="flex flex-col sm:flex-row gap-4 justify-center">
//               <input
//                 type="email"
//                 placeholder="Your work email"
//                 className="px-6 py-4 rounded-full bg-white/10 border border-white/30 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white"
//               />
//               <button className="px-8 py-4 bg-white text-blue-600 rounded-full font-semibold hover:bg-gray-100 transition shadow-lg flex items-center justify-center gap-2">
//                 Request Quote <ArrowRight className="w-5 h-5" />
//               </button>
//             </div>
//             <p className="text-sm mt-6 text-blue-200">
//               No obligation • Free consultation • Fast response
//             </p>
//           </motion.div>
//         </div>
//       </section> */}
//     </div>
//   );
// }







import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import {
  Settings,
  RotateCw,
  Layers,
  Zap,
  Shield,
  Gauge,
  Cpu,
  Package,
  Award,
  Leaf,
  ArrowRight,
  Play,
  X,
} from "lucide-react";

export default function EurocutPrecisionCTL800() {
  const [modalOpen, setModalOpen] = useState(false);

  const features = [
    {
      id: 1,
      icon: <Settings className="w-9 h-9" />,
      title: "Structural Design & Precision Engineering",
      description:
        "EUROCUT™ Precision CTL 800 is engineered for ultra-light gauge materials requiring exceptional dimensional fidelity. The machine frame is stress-relieved and vibration-dampened to ensure geometric stability. Structural rigidity prevents harmonic distortion during high-speed operation. The design guarantees micron-level sheet accuracy. This platform ensures repeatable precision under continuous industrial duty cycles.",
      color: "from-cyan-500 to-blue-500",
    },
    {
      id: 2,
      icon: <RotateCw className="w-9 h-9" />,
      title: "Intelligent Decoiling System",
      description:
        "The servo-regulated decoiler employs torque-balanced mandrels for controlled coil payoff. Adaptive tension control eliminates sudden torque fluctuations. Coil memory and edge distortion are minimised through controlled unwinding dynamics. The system ensures stable strip presentation to downstream modules. This preserves material integrity from the first revolution to the final pass.",
      color: "from-blue-500 to-cyan-400",
    },
    {
      id: 3,
      icon: <Layers className="w-9 h-9" />,
      title: "Multi-Roll Precision Levelling",
      description:
        "The high-density levelling cassette neutralises internal stress and crossbow deformation. Independently adjustable work rolls optimise penetration ratios for various alloys. Residual stress redistribution ensures absolute flatness. The leveller architecture prevents micro-waviness and edge curl. The result is metallurgical stress equilibrium and superior sheet planarity.",
      color: "from-cyan-400 to-teal-400",
    },
    {
      id: 4,
      icon: <Zap className="w-9 h-9" />,
      title: "High-Response Servo Shearing Module",
      description:
        "The servo-driven shear provides high-speed, burr-free cutting precision. Blade synchronisation ensures distortion-free cut edges. Adaptive stroke control maintains repeat length accuracy. Dynamic cutting geometry prevents material drag and deformation. This ensures production of dimensionally exact sheets with pristine edge quality.",
      color: "from-blue-400 to-sky-400",
    },
    {
      id: 5,
      icon: <Shield className="w-9 h-9" />,
      title: "Surface Integrity Preservation",
      description:
        "Non-marking rollers and polymer-coated contact surfaces prevent abrasion. The line is optimised for mirror finish stainless steel and coated metals. Surface friction is reduced through low-contact pressure engineering. Micro-scratching and finish degradation are eliminated. This ensures premium cosmetic quality for high-value applications.",
      color: "from-cyan-500 to-emerald-400",
    },
    {
      id: 6,
      icon: <Gauge className="w-9 h-9" />,
      title: "Dynamic Tension Loop Control",
      description:
        "The floating loop system ensures uninterrupted strip flow. Closed-loop tension monitoring prevents micro-elongation. Stress fluctuations are absorbed without affecting material geometry. The system stabilises strip movement at varying speeds. This guarantees uniform stress distribution throughout processing.",
      color: "from-teal-400 to-cyan-400",
    },
    {
      id: 7,
      icon: <Cpu className="w-9 h-9" />,
      title: "Automation & Synchronised Drives",
      description:
        "PLC-controlled servo drives harmonise decoiling, levelling, and shearing operations. Adaptive speed algorithms optimise throughput efficiency. Real-time diagnostics ensure operational precision. Intelligent automation reduces operator dependency. The system achieves high productivity with minimal human intervention.",
      color: "from-blue-500 to-indigo-400",
    },
    {
      id: 8,
      icon: <Package className="w-9 h-9" />,
      title: "Sheet Handling & Stacking System",
      description:
        "Vacuum or magnetic stacking systems ensure scratch-free sheet handling. Precision alignment ensures uniform stacking geometry. Automated palletisation improves handling safety. Stack integrity is maintained even at high production speeds. This enables efficient downstream logistics and packaging.",
      color: "from-cyan-400 to-blue-400",
    },
    {
      id: 9,
      icon: <Award className="w-9 h-9" />,
      title: "Industrial Application Versatility",
      description:
        "The system is ideal for aerospace panels, architectural finishes, and appliance components. It processes stainless steel, aluminium, and coated substrates. Dimensional consistency supports laser cutting and precision fabrication. Surface quality meets premium aesthetic standards. EUROCUT™ enables high-value manufacturing applications.",
      color: "from-emerald-400 to-cyan-500",
    },
    {
      id: 10,
      icon: <Leaf className="w-9 h-9" />,
      title: "Energy Efficiency & Maintenance Philosophy",
      description:
        "European design principles prioritise energy optimisation and low friction drives. Modular architecture simplifies maintenance access. Predictive servicing reduces downtime. Component longevity ensures lifecycle cost efficiency. The system delivers sustainable and reliable industrial performance.",
      color: "from-cyan-500 to-teal-400",
    },
  ];

  return (
    <div className="bg-slate-950 text-white font-sans antialiased overflow-x-hidden">
      {/* Floating CTA */}
      {/* <motion.div
        className="fixed bottom-8 right-8 z-50"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 1.5, type: "spring" }}
      >
        <button
          onClick={() => setModalOpen(true)}
          className="bg-cyan-500 hover:bg-cyan-400 text-black px-6 py-4 rounded-2xl font-semibold flex items-center gap-3 shadow-2xl transition-all active:scale-95"
        >
          Request Quote <ArrowRight className="w-5 h-5" />
        </button>
      </motion.div> */}

      {/* Modal */}
      {/* {modalOpen && (
        <motion.div
          className="fixed inset-0 bg-black/90 flex items-center justify-center z-[100]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className="bg-slate-900 rounded-3xl p-10 max-w-md w-full relative border border-cyan-400/20"
            initial={{ scale: 0.85, y: 40 }}
            animate={{ scale: 1, y: 0 }}
            transition={{ type: "spring", bounce: 0.1 }}
          >
            <button
              onClick={() => setModalOpen(false)}
              className="absolute top-6 right-6 text-zinc-400 hover:text-white transition-colors"
            >
              <X size={28} />
            </button>
            <h2 className="text-3xl font-bold mb-8 text-center">Get Your Quote</h2>
            <form className="space-y-5">
              <input
                type="text"
                placeholder="Company / Name"
                className="w-full bg-slate-800 border border-slate-700 focus:border-cyan-400 rounded-2xl px-6 py-4 outline-none"
              />
              <input
                type="email"
                placeholder="Email Address"
                className="w-full bg-slate-800 border border-slate-700 focus:border-cyan-400 rounded-2xl px-6 py-4 outline-none"
              />
              <input
                type="text"
                placeholder="Material & Thickness"
                className="w-full bg-slate-800 border border-slate-700 focus:border-cyan-400 rounded-2xl px-6 py-4 outline-none"
              />
              <button
                type="button"
                className="w-full bg-cyan-500 hover:bg-cyan-400 text-black font-semibold py-4 rounded-2xl transition-all"
              >
                Send Request
              </button>
            </form>
          </motion.div>
        </motion.div>
      )} */}

      {/* HERO */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(#22d3ee_0.8px,transparent_1px)] [background-size:40px_40px] opacity-10" />
        
        <motion.img
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 8, repeat: Infinity, repeatType: "reverse" }}
          src="https://images.pexels.com/photos/36190385/pexels-photo-36190385.jpeg"
          alt="EUROCUT CTL 800"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950/80 via-slate-950/70 to-slate-950" />

        <div className="relative z-10 text-center px-6 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="inline-flex items-center gap-3 px-6 py-2 bg-cyan-500/10 border border-cyan-400/30 rounded-full text-cyan-400 text-sm tracking-widest mb-8"
          >
            ULTRA-LIGHT GAUGE • 0.10 – 1.20 mm
          </motion.div>

          <h1 className="text-6xl md:text-7xl font-bold tracking-tighter leading-none mb-6">
            EUROCUT™<br />
            <span className="bg-gradient-to-r from-cyan-300 to-blue-300 bg-clip-text text-transparent">PRECISION CTL 800</span>
          </h1>

          <p className="text-2xl text-zinc-300 mb-10">
            Micron-level precision for ultra-light gauge materials
          </p>

          <motion.a
            href="#features"
            className="inline-flex items-center gap-3 bg-white text-black px-10 py-5 rounded-2xl font-semibold text-lg hover:bg-cyan-400 transition-all group"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
          >
            Explore Features
            <Play className="w-6 h-6 group-hover:scale-110 transition-transform" />
          </motion.a>
        </div>

        {/* Scroll prompt */}
        <motion.div
          animate={{ y: [0, 12, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="absolute bottom-12 left-1/2 -translate-x-1/2 text-xs tracking-[3px] text-zinc-400 flex flex-col items-center"
        >
          SCROLL TO DISCOVER
          <div className="h-8 w-px bg-gradient-to-b from-transparent via-cyan-400 to-transparent mt-3" />
        </motion.div>
      </section>

      {/* FEATURES SECTION - Flip Cards */}
      <section id="features" className="py-24 bg-slate-900">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="text-cyan-400 text-sm tracking-[4px] uppercase">10 REASONS TO CHOOSE EUROCUT™</div>
            <h2 className="text-5xl font-bold tracking-tighter mt-3">Precision Redefined</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.id}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
                whileHover="hover"
                className="group h-[420px] perspective-1000 cursor-pointer"
              >
                <motion.div
                  variants={{
                    hover: { rotateY: 180 },
                  }}
                  transition={{ duration: 0.7, ease: "easeInOut" }}
                  style={{ transformStyle: "preserve-3d" }}
                  className="relative w-full h-full"
                >
                  {/* FRONT */}
                  <div className="absolute inset-0 backface-hidden bg-slate-800 border border-slate-700 rounded-3xl p-8 flex flex-col">
                    <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${feature.color} flex items-center justify-center text-black mb-8`}>
                      {feature.icon}
                    </div>
                    <div className="text-6xl font-bold text-cyan-400/20 mb-4">0{feature.id}</div>
                    <h3 className="text-2xl font-semibold leading-tight">{feature.title}</h3>
                    <div className="mt-auto text-cyan-400 text-sm flex items-center gap-2 group-hover:gap-3 transition-all">
                      Hover to flip <ArrowRight className="w-4 h-4" />
                    </div>
                  </div>

                  {/* BACK */}
                  <div
                    className="absolute inset-0 backface-hidden bg-gradient-to-br from-slate-800 to-slate-900 border border-cyan-400/30 rounded-3xl p-8 flex flex-col rotateY-180 overflow-auto"
                  >
                    <div className="text-cyan-400 mb-6">{feature.icon}</div>
                    <h3 className="text-xl font-semibold mb-6">{feature.title}</h3>
                    <p className="text-zinc-300 leading-relaxed text-[15px]">{feature.description}</p>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA BAR */}
      {/* <div className="bg-black py-8 border-t border-b border-cyan-400/10">
        <div className="max-w-5xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <span className="text-cyan-400 font-mono text-sm">800 mm WIDTH • 0.10–1.20 mm THICKNESS</span>
            <p className="text-2xl font-semibold">Ready for premium production?</p>
          </div>
          <button
            onClick={() => setModalOpen(true)}
            className="bg-cyan-500 hover:bg-white hover:text-black transition-all px-10 py-4 rounded-2xl font-semibold flex items-center gap-3"
          >
            GET A QUOTE TODAY <ArrowRight />
          </button>
        </div>
      </div> */}

      {/* Custom 3D styles */}
      <style jsx>{`
        .perspective-1000 {
          perspective: 1200px;
        }
        .backface-hidden {
          backface-visibility: hidden;
        }
        .rotateY-180 {
          transform: rotateY(180deg);
        }
      `}</style>
    </div>
  );
}