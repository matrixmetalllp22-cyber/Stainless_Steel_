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
// } from "lucide-react";

// export default function BlankingLineIndustrial() {
//   const containerRef = useRef(null);
//   const { scrollYProgress } = useScroll({
//     target: containerRef,
//     offset: ["start start", "end end"],
//   });

//   // Parallax effect for hero
//   const heroScale = useTransform(scrollYProgress, [0, 0.5], [1, 1.2]);
//   const heroOpacity = useTransform(scrollYProgress, [0, 0.3], [1, 0.4]);

//   // Color palette – no orange
//   const colors = {
//     primary: "#0a4b7a",    // deep blue
//     accent: "#3b82f6",     // bright blue
//     light: "#60a5fa",      // lighter blue
//     background: "#f8fafc",
//     text: "#1e293b",
//   };

//   const features = [
//     {
//       icon: <Ruler className="w-8 h-8" />,
//       title: "Ultra-Precise Blanking",
//       desc: "±0.1 mm accuracy for critical automotive and appliance components",
//       color: "from-blue-600 to-blue-400",
//     },
//     {
//       icon: <Package className="w-8 h-8" />,
//       title: "Auto Stacking System",
//       desc: "Fully automatic stacking with paper interleaving & edge protection",
//       color: "from-blue-500 to-cyan-400",
//     },
//     {
//       icon: <Zap className="w-8 h-8" />,
//       title: "High-Speed Production",
//       desc: "Up to 60 strokes/min with servo-driven flying shear",
//       color: "from-blue-400 to-blue-300",
//     },
//     {
//       icon: <Cpu className="w-8 h-8" />,
//       title: "Industry 4.0 Ready",
//       desc: "Real-time monitoring, predictive maintenance, and IoT integration",
//       color: "from-blue-700 to-blue-500",
//     },
//   ];

//   const stats = [
//     { value: "150+", label: "Machines Installed", icon: <Cpu className="w-6 h-6" /> },
//     { value: "25+", label: "Years of Excellence", icon: <Award className="w-6 h-6" /> },
//     { value: "500+", label: "Global Clients", icon: <Users className="w-6 h-6" /> },
//     { value: "100%", label: "Accuracy Rate", icon: <CheckCircle className="w-6 h-6" /> },
//   ];

//   const processSteps = [
//     { title: "Coil Loading", desc: "Hydraulic uncoiler with loop control", icon: <Layers /> },
//     { title: "Precision Leveling", desc: "19-roll leveler for superior flatness", icon: <Factory /> },
//     { title: "High-Speed Blanking", desc: "Servo-driven shear ±0.1mm", icon: <Zap /> },
//     { title: "Auto Stacking", desc: "Magnetic/ Vacuum stacker with counting", icon: <Package /> },
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
//       {/* Navigation */}
//       <nav className="bg-white shadow-md sticky top-0 z-50">
//         <div className="container mx-auto px-6 py-4 flex flex-wrap items-center justify-between">
//           <div className="flex items-center space-x-2">
//             <span className="text-2xl font-bold text-blue-800">Matrix Metal LLP</span>
//             <span className="text-sm text-gray-500 hidden md:inline-block ml-2">PIONEERS OF INNOVATIVE STAINLESS STEEL SOLUTIONS</span>
//           </div>
//           <div className="hidden lg:flex space-x-8 text-sm font-medium text-gray-700">
//             {["HOME", "ABOUT US", "PRODUCTS", "MACHINERY", "APPLICATIONS", "RESOURCES", "CONTACT US"].map((item) => (
//               <a key={item} href={`/${item.toLowerCase().replace(" ", "-")}`} className="hover:text-blue-600 transition">
//                 {item}
//               </a>
//             ))}
//           </div>
//           <button className="lg:hidden text-gray-600">☰</button>
//         </div>
//       </nav>

//       {/* Hero with Parallax */}
//       <section className="relative h-screen flex items-center justify-center overflow-hidden">
//         <motion.div
//           style={{ scale: heroScale, opacity: heroOpacity }}
//           className="absolute inset-0"
//         >
//           <img
//             src="/images/blanking-line-hero.jpg" // Replace with actual image
//             alt="High-precision blanking line"
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
//             Blanking Line – <br />
//             <span className="text-blue-300">High-Precision Auto Stacking</span>
//           </motion.h1>
//           <motion.p
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             transition={{ delay: 0.4, duration: 1 }}
//             className="text-xl md:text-2xl text-gray-200 max-w-3xl mb-10"
//           >
//             Engineered for superior dimensional accuracy, high-speed processing, and seamless production of precision blanks for automotive, appliance, architectural, and fabrication industries. Every blank meets global OEM quality requirements with perfect geometry and clean edges.
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
//             Why Our{" "}
//             <span className="text-blue-700 bg-blue-100 px-6 py-2 rounded-full inline-block">
//               Blanking Line
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
//             <span className="text-blue-600">Finished Blank</span>
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

//       {/* Technical Highlights */}
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
//               Highlights
//             </span>
//           </motion.h2>

//           <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
//             {[
//               { label: "Max Width", value: "2000 mm" },
//               { label: "Thickness", value: "0.3 – 16 mm" },
//               { label: "Tolerance", value: "±0.1 mm" },
//               { label: "Speed", value: "60 m/min" },
//             ].map((spec, index) => (
//               <motion.div
//                 key={index}
//                 custom={index}
//                 initial="hidden"
//                 whileInView="visible"
//                 variants={fadeUp}
//                 whileHover={{ scale: 1.05 }}
//                 className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-6 text-center hover:bg-white/20 transition-all"
//               >
//                 <p className="text-3xl font-bold text-blue-300 mb-2">{spec.value}</p>
//                 <p className="text-gray-300 text-sm uppercase tracking-wider">{spec.label}</p>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* CTA */}
//       <section className="py-28 bg-gradient-to-r from-blue-600 to-blue-400 text-white text-center relative overflow-hidden">
//         <div className="absolute inset-0 bg-[url('/images/pattern-dots.svg')] opacity-10" />
//         <div className="container mx-auto px-6 max-w-4xl relative z-10">
//           <motion.div
//             initial={{ opacity: 0, y: 30 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8 }}
//           >
//             <h2 className="text-5xl font-bold mb-6">Ready to boost your blanking precision?</h2>
//             <p className="text-xl mb-10 text-blue-100">
//               Get a customized solution for your exact material and production needs.
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
//       </section>

//       {/* Footer */}
//       {/* <footer className="bg-gray-900 text-gray-400 py-8 text-center">
//         <div className="container mx-auto px-6">
//           <p>© 2025 Matrix Metal LLP. All rights reserved. Pioneers of Innovative Stainless Steel Solutions.</p>
//         </div>
//       </footer> */}
//     </div>
//   );
// }






















































import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  Ruler,
  Package,
  Zap,
  Shield,
  Factory,
  CheckCircle,
  ArrowRight,
  Phone,
  Award,
  Cpu,
  Layers,
  Users,
  Scale,
  Activity,
  Gauge,
  Sparkles,
  Truck,
} from "lucide-react";

export default function CutToLengthIndustrial() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Parallax effect for hero
  const heroScale = useTransform(scrollYProgress, [0, 0.5], [1, 1.2]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.3], [1, 0.4]);

  const features = [
    {
      icon: <Ruler className="w-8 h-8" />,
      title: "Ultra-Precise Length",
      desc: "±0.5 mm accuracy even at 12-meter sheets",
      color: "from-blue-600 to-blue-400",
    },
    {
      icon: <Factory className="w-8 h-8" />,
      title: "2000 mm Width Capacity",
      desc: "One of the widest CTL lines in India",
      color: "from-blue-500 to-cyan-400",
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "High-Speed Processing",
      desc: "Flying shear & servo precision for maximum output",
      color: "from-blue-400 to-blue-300",
    },
    {
      icon: <Package className="w-8 h-8" />,
      title: "Auto Stacking & Packing",
      desc: "Clean stacks with edge protection and export wrapping",
      color: "from-blue-700 to-blue-500",
    },
  ];

  const stats = [
    { value: "150+", label: "Machines Installed", icon: <Cpu className="w-6 h-6" /> },
    { value: "25+", label: "Years of Excellence", icon: <Award className="w-6 h-6" /> },
    { value: "500+", label: "Global Clients", icon: <Users className="w-6 h-6" /> },
    { value: "100%", label: "Accuracy Rate", icon: <CheckCircle className="w-6 h-6" /> },
  ];

  const specs = [
    { label: "Max Width", value: "2000 mm", icon: <Ruler className="w-5 h-5" /> },
    { label: "Max Length", value: "12,000 mm", icon: <Scale className="w-5 h-5" /> },
    { label: "Thickness Range", value: "0.4 – 16 mm", icon: <Gauge className="w-5 h-5" /> },
    { label: "Length Tolerance", value: "±0.5 mm", icon: <Activity className="w-5 h-5" /> },
    { label: "Flatness", value: "< 1.0 mm/m", icon: <Sparkles className="w-5 h-5" /> },
    { label: "Annual Capacity", value: "1,75,000+ MT", icon: <Truck className="w-5 h-5" /> },
  ];

  const processSteps = [
    { title: "Coil Loading", desc: "Hydraulic uncoiler with loop control", icon: <Layers /> },
    { title: "Precision Leveling", desc: "19-roll leveler for superior flatness", icon: <Factory /> },
    { title: "High-Speed Cutting", desc: "Flying shear ±0.5mm accuracy", icon: <Zap /> },
    { title: "Auto Stacking", desc: "Automatic stacking with edge protection", icon: <Package /> },
  ];

  const fadeUp = {
    hidden: { opacity: 0, y: 60 },
    visible: (i = 0) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.1, duration: 0.8, ease: [0.6, -0.05, 0.01, 0.99] },
    }),
  };

  // Counter animation component
  const Counter = ({ value, label, suffix = "" }) => {
    const [count, setCount] = React.useState(0);
    const ref = useRef(null);

    React.useEffect(() => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            let start = 0;
            const end = parseInt(value.replace(/[+,]/g, ""));
            const duration = 2000;
            const increment = end / (duration / 16);
            const timer = setInterval(() => {
              start += increment;
              if (start > end) {
                setCount(end);
                clearInterval(timer);
              } else {
                setCount(Math.floor(start));
              }
            }, 16);
            return () => clearInterval(timer);
          }
        },
        { threshold: 0.1 }
      );
      if (ref.current) observer.observe(ref.current);
      return () => observer.disconnect();
    }, [value]);

    return (
      <div ref={ref} className="text-center">
        <div className="text-4xl font-bold text-blue-700">
          {count.toLocaleString()}{suffix}
        </div>
        <div className="text-sm uppercase tracking-wider text-gray-600 mt-2">{label}</div>
      </div>
    );
  };

  return (
    <div ref={containerRef} className="bg-gray-50 text-gray-800 font-sans antialiased overflow-x-hidden">
      {/* Hero with Parallax */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <motion.div
          style={{ scale: heroScale, opacity: heroOpacity }}
          className="absolute inset-0"
        >
          <img
            src="/images/ctl-industrial.jpg" // Replace with actual image
            alt="Cut to length line"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 via-blue-800/70 to-transparent" />
        </motion.div>

        <div className="relative container mx-auto px-6 text-white z-10">
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="text-5xl md:text-6xl font-extrabold leading-tight mb-6"
          >
            Cut to Length Lines
            <br />
            <span className="text-blue-300">Precision Sheets • Export Ready</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 1 }}
            className="text-xl md:text-2xl text-gray-200 max-w-3xl mb-10"
          >
            From coil to perfectly flat, accurately cut sheets — ready for PEB, construction, automotive, and fabrication.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="flex flex-wrap gap-4"
          >
            {/* <a
              href="/quote"
              className="inline-flex items-center gap-2 bg-blue-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-blue-700 transition shadow-lg hover:shadow-blue-500/30"
            >
              Request Quote <ArrowRight className="w-5 h-5" />
            </a> */}
            <a
              href="/contact"
              className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm text-white border border-white/30 px-8 py-4 rounded-full text-lg font-semibold hover:bg-white/30 transition"
            >
              <Phone className="w-5 h-5" /> Call Expert
            </a>
          </motion.div>

          {/* ISO Badge */}
          {/* <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="absolute bottom-8 left-6 flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full border border-white/20"
          >
            <CheckCircle className="w-5 h-5 text-green-300" />
            <span className="text-sm font-medium">ISO 9001:2024 Certified Precision</span>
          </motion.div> */}
        </div>

        {/* Scroll indicator */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white/60"
        >
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
            <div className="w-1 h-2 bg-white/60 rounded-full mt-2" />
          </div>
        </motion.div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, idx) => (
              <motion.div
                key={idx}
                initial="hidden"
                whileInView="visible"
                variants={fadeUp}
                className="text-center p-6 bg-blue-50 rounded-2xl shadow-sm hover:shadow-md transition"
              >
                <div className="text-blue-600 mb-2 flex justify-center">{stat.icon}</div>
                <Counter value={stat.value} label={stat.label} suffix={stat.value.includes('+') ? '+' : ''} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features with 3D hover */}
      <section className="py-28 px-4 bg-gray-50">
        <div className="container mx-auto max-w-7xl">
          <motion.h2
            initial="hidden"
            whileInView="visible"
            variants={fadeUp}
            className="text-5xl font-bold text-center mb-20 text-gray-800"
          >
            Why Choose Our{" "}
            <span className="text-blue-700 bg-blue-100 px-6 py-2 rounded-full inline-block">
              CTL Lines
            </span>
            ?
          </motion.h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                custom={index}
                initial="hidden"
                whileInView="visible"
                variants={fadeUp}
                viewport={{ once: true }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="group relative bg-white rounded-2xl p-8 border border-gray-200 hover:border-blue-300 transition-all duration-300 overflow-hidden shadow-lg"
              >
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
                />
                <div className="relative z-10">
                  <div className="text-blue-600 mb-4 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-gray-800 group-hover:text-blue-700 transition">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed group-hover:text-gray-700 transition">
                    {feature.desc}
                  </p>
                </div>
                {/* Animated border */}
                <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-blue-500 to-transparent transform translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Timeline */}
      <section className="py-28 bg-white">
        <div className="container mx-auto px-6 max-w-6xl">
          <motion.h2
            initial="hidden"
            whileInView="visible"
            variants={fadeUp}
            className="text-5xl font-bold text-center mb-20 text-gray-800"
          >
            From <span className="text-blue-600">Coil</span> to{" "}
            <span className="text-blue-600">Finished Sheet</span>
          </motion.h2>

          <div className="grid md:grid-cols-4 gap-8 relative">
            {processSteps.map((step, index) => (
              <motion.div
                key={index}
                custom={index}
                initial="hidden"
                whileInView="visible"
                variants={fadeUp}
                className="relative"
              >
                <div className="bg-gray-50 rounded-2xl p-6 border border-gray-200 text-center hover:border-blue-300 transition group">
                  <div className="w-16 h-16 mx-auto mb-4 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 group-hover:bg-blue-200 group-hover:scale-110 transition">
                    {step.icon}
                  </div>
                  <h3 className="text-lg font-bold mb-2 text-gray-800">{step.title}</h3>
                  <p className="text-sm text-gray-600">{step.desc}</p>
                </div>
                {index < processSteps.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2 text-blue-300">
                    <ArrowRight className="w-6 h-6" />
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Technical Specifications */}
      <section className="py-28 bg-blue-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/images/pattern-grid.svg')] opacity-10" />
        <div className="container mx-auto px-6 max-w-7xl relative z-10">
          <motion.h2
            initial="hidden"
            whileInView="visible"
            variants={fadeUp}
            className="text-5xl font-bold text-center mb-20"
          >
            Technical{" "}
            <span className="text-blue-300 border-b-4 border-blue-300 pb-2">
              Specifications
            </span>
          </motion.h2>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {specs.map((spec, index) => (
              <motion.div
                key={index}
                custom={index}
                initial="hidden"
                whileInView="visible"
                variants={fadeUp}
                whileHover={{ scale: 1.05 }}
                className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-6 text-center hover:bg-white/20 transition-all"
              >
                <div className="text-blue-300 mb-2 flex justify-center">{spec.icon}</div>
                <p className="text-xl font-bold text-blue-300 mb-1">{spec.value}</p>
                <p className="text-gray-300 text-xs uppercase tracking-wider">{spec.label}</p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.8 }}
            className="mt-16 flex justify-center items-center gap-4 text-gray-300"
          >
            <CheckCircle className="w-6 h-6 text-green-400" />
            <span className="text-lg">ISO 9001:2024 Certified • Made in India</span>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      {/* <section className="py-28 bg-gradient-to-r from-blue-600 to-blue-400 text-white text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/images/pattern-dots.svg')] opacity-10" />
        <div className="container mx-auto px-6 max-w-4xl relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-5xl font-bold mb-6">Need Perfect Sheets On Time?</h2>
            <p className="text-xl mb-10 text-blue-100">
              Contact us for cut-to-length sheets in HR, CR, GP, high-strength steel — delivered with precision and speed.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <input
                type="email"
                placeholder="Your work email"
                className="px-6 py-4 rounded-full bg-white/10 border border-white/30 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white"
              />
              <button className="px-8 py-4 bg-white text-blue-600 rounded-full font-semibold hover:bg-gray-100 transition shadow-lg flex items-center justify-center gap-2">
                Request Quote <ArrowRight className="w-5 h-5" />
              </button>
            </div>
            <p className="text-sm mt-6 text-blue-200">
              No obligation • Free consultation • Fast response
            </p>
          </motion.div>
        </div>
      </section> */}
    </div>
  );
}


































// import React from "react";
// import { motion } from "framer-motion";
// import {
//   Ruler,
//   Package,
//   Zap,
//   Shield,
//   Factory,
//   CheckCircle,
//   ArrowRight,
// } from "lucide-react";

// export default function CutToLengthIndustrial() {
//   const features = [
//     {
//       icon: <Ruler className="w-8 h-8" />,
//       title: "Ultra-Precise Length",
//       desc: "±0.5 mm accuracy even at 12-meter sheets",
//     },
//     {
//       icon: <Factory className="w-8 h-8" />,
//       title: "2000 mm Width Capacity",
//       desc: "One of the widest CTL lines in India",
//     },
//     {
//       icon: <Zap className="w-8 h-8" />,
//       title: "High-Speed Processing",
//       desc: "Flying shear & servo precision for maximum output",
//     },
//     {
//       icon: <Package className="w-8 h-8" />,
//       title: "Auto Stacking & Packing",
//       desc: "Clean stacks with edge protection and export wrapping",
//     },
//   ];

//   const specs = [
//     { label: "Max Width", value: "2000 mm" },
//     { label: "Max Length", value: "12,000 mm" },
//     { label: "Thickness Range", value: "0.4 – 16 mm" },
//     { label: "Length Tolerance", value: "±0.5 mm" },
//     { label: "Flatness", value: "< 1.0 mm/m" },
//     { label: "Annual Capacity", value: "1,75,000+ MT" },
//   ];

//   const fadeUp = {
//     hidden: { opacity: 0, y: 40 },
//     visible: (i = 0) => ({
//       opacity: 1,
//       y: 0,
//       transition: { delay: i * 0.1, duration: 0.6, ease: "easeOut" },
//     }),
//   };

//   return (
//     <div className="bg-gradient-to-b from-gray-50 via-white to-gray-100 font-sans antialiased">
//       {/* Hero Section */}
//       <section className="relative overflow-hidden">
//         <div className="absolute inset-0">
//           <img
//             src="/images/ctl-industrial.jpg"
//             alt="Industrial cut-to-length line"
//             className="w-full h-full object-cover scale-105 opacity-30"
//           />
//           <div className="absolute inset-0 bg-gradient-to-r from-gray-900 via-gray-800/90 to-gray-900"></div>
//         </div>

//         <div className="relative container mx-auto px-6 py-32 md:py-44 text-white text-center">
//           <motion.div
//             initial={{ opacity: 0, y: 30 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8 }}
//           >
//             <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-6 tracking-tight">
//               CUT TO LENGTH LINES
//               <br />
//               <span className="text-orange-400 text-5xl md:text-7xl block mt-2">
//                 Precision Sheets • Export Ready
//               </span>
//             </h1>
//           </motion.div>
//           <motion.p
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             transition={{ delay: 0.3, duration: 0.8 }}
//             className="text-xl md:text-2xl text-gray-200 max-w-4xl mx-auto leading-relaxed"
//           >
//             From coil to perfectly flat, accurately cut sheets — ready for PEB,
//             construction, automotive, and fabrication.
//           </motion.p>
//         </div>
//       </section>

//       {/* Features Grid */}
//       <section className="py-20 px-4">
//         <div className="container mx-auto max-w-7xl">
//           <motion.h2
//             initial="hidden"
//             whileInView="visible"
//             variants={fadeUp}
//             className="text-4xl md:text-5xl font-bold text-center mb-16 text-gray-800"
//           >
//             Why Choose Our{" "}
//             <span className="text-orange-500 bg-orange-50 px-4 py-2 rounded-lg inline-block">
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
//                 viewport={{ once: true, margin: "-50px" }}
//                 className="group bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-orange-200"
//               >
//                 <div className="text-orange-500 mb-4 group-hover:scale-110 transition-transform duration-300">
//                   {feature.icon}
//                 </div>
//                 <h3 className="text-xl font-bold mb-3 text-gray-800">
//                   {feature.title}
//                 </h3>
//                 <p className="text-gray-600 text-sm leading-relaxed">
//                   {feature.desc}
//                 </p>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Technical Specifications */}
//       <section className="py-24 bg-gradient-to-br from-gray-900 via-slate-900 to-black text-white relative overflow-hidden">
//         <div className="absolute inset-0 bg-[url('/images/pattern-grid.svg')] opacity-10"></div>
//         <div className="container mx-auto px-6 max-w-7xl relative z-10">
//           <motion.h2
//             initial="hidden"
//             whileInView="visible"
//             variants={fadeUp}
//             className="text-4xl md:text-5xl font-bold text-center mb-16"
//           >
//             Technical{" "}
//             <span className="text-orange-400 border-b-4 border-orange-400 pb-2">
//               Specifications
//             </span>
//           </motion.h2>

//           <div className="grid grid-cols-2 lg:grid-cols-6 gap-4 md:gap-6">
//             {specs.map((spec, index) => (
//               <motion.div
//                 key={index}
//                 custom={index}
//                 initial="hidden"
//                 whileInView="visible"
//                 variants={fadeUp}
//                 viewport={{ once: true }}
//                 className="bg-white/10 backdrop-blur-sm border border-white/20 p-6 rounded-xl text-center hover:bg-white/20 transition-all duration-300 hover:scale-105"
//               >
//                 <p className="text-2xl md:text-3xl font-bold text-orange-400 mb-2">
//                   {spec.value}
//                 </p>
//                 <p className="text-gray-300 text-xs uppercase tracking-wider font-medium">
//                   {spec.label}
//                 </p>
//               </motion.div>
//             ))}
//           </div>

//           {/* Quality Badge */}
//           <motion.div
//             initial={{ opacity: 0, scale: 0.9 }}
//             whileInView={{ opacity: 1, scale: 1 }}
//             transition={{ delay: 0.6 }}
//             className="mt-12 flex justify-center items-center gap-4 text-gray-300"
//           >
//             <CheckCircle className="w-6 h-6 text-green-400" />
//             <span className="text-lg">ISO 9001:2015 Certified</span>
//           </motion.div>
//         </div>
//       </section>

//       {/* Call to Action */}
//       <section className="py-24 bg-orange-600 text-white text-center relative overflow-hidden">
//         <div className="absolute inset-0 bg-[url('/images/pattern-dots.svg')] opacity-10"></div>
//         <div className="container mx-auto px-6 max-w-4xl relative z-10">
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6 }}
//           >
//             <h2 className="text-4xl md:text-5xl font-bold mb-6">
//               Need Perfect Sheets On Time?
//             </h2>
//             <p className="text-xl md:text-2xl mb-10 text-orange-100 leading-relaxed">
//               Contact us for cut-to-length sheets in HR, CR, GP, high-strength
//               steel — delivered with precision and speed.
//             </p>
//             <a
//               href="/contact"
//               className="inline-flex items-center gap-2 bg-white text-orange-600 px-10 py-4 rounded-lg text-lg font-bold hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl"
//             >
//               Request Quote Now
//               <ArrowRight className="w-5 h-5" />
//             </a>
//           </motion.div>
//         </div>
//       </section>
//     </div>
//   );
// }