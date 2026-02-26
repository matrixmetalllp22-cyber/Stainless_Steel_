import React, { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform, useSpring, useMotionValue } from "framer-motion";
import {
  Ruler, Factory, Zap, Package, Gauge, Shield, ArrowRight, CheckCircle,
  Layers, Users, Award, Cpu, ChevronRight, Play, X
} from "lucide-react";

export default function CutToLengthUltraAdvanced() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Parallax effects
  const heroScale = useTransform(scrollYProgress, [0, 0.5], [1, 1.3]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.3], [1, 0.4]);

  // Magnetic button effect
  const magneticRef = useRef(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springX = useSpring(mouseX, { stiffness: 150, damping: 15 });
  const springY = useSpring(mouseY, { stiffness: 150, damping: 15 });

  const handleMouseMove = (e) => {
    const rect = magneticRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    mouseX.set(x * 0.2);
    mouseY.set(y * 0.2);
  };
  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  // Modal state
  const [modalOpen, setModalOpen] = useState(false);

  // Features with flip card content
  const features = [
    {
      icon: <Ruler className="w-8 h-8" />,
      title: "Ultra-Precise Length",
      short: "±0.5 mm accuracy",
      long: "Even at 12‑meter sheets, our laser‑guided flying shear ensures micron‑level precision, eliminating rework.",
      color: "from-blue-500 to-cyan-400",
    },
    {
      icon: <Factory className="w-8 h-8" />,
      title: "2000 mm Width Capacity",
      short: "Widest in India",
      long: "Handle jumbo coils up to 2000 mm wide – reduces passes and boosts productivity for large‑format sheets.",
      color: "from-indigo-500 to-blue-400",
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "High‑Speed Processing",
      short: "60 m/min line speed",
      long: "Servo‑driven flying shear with real‑time optimisation delivers maximum throughput without compromising accuracy.",
      color: "from-blue-400 to-sky-400",
    },
    {
      icon: <Package className="w-8 h-8" />,
      title: "Auto Stacking & Packing",
      short: "Export‑ready bundles",
      long: "Fully automatic stacker with paper interleaving, edge protectors, and strapping – ready for global dispatch.",
      color: "from-cyan-500 to-teal-400",
    },
  ];

  // Stats with animated gauges
  const stats = [
    { label: "Annual Capacity", value: 175000, unit: "MT", suffix: "+" },
    { label: "Machines Installed", value: 150, unit: "", suffix: "+" },
    { label: "Global Clients", value: 500, unit: "", suffix: "+" },
    { label: "Precision", value: 0.5, unit: "mm", suffix: "" },
  ];

  // Timeline steps
  const timelineSteps = [
    { title: "Coil Loading", desc: "Hydraulic uncoiler with loop control", icon: <Layers /> },
    { title: "Precision Leveling", desc: "19‑roll leveler, flatness <1.0 mm/m", icon: <Gauge /> },
    { title: "High‑Speed Cutting", desc: "Flying shear, ±0.5 mm accuracy", icon: <Zap /> },
    { title: "Auto Stacking", desc: "Magnetic stacker + paper interleaving", icon: <Package /> },
    { title: "Export Packing", desc: "Edge protection, strapping, wrapping", icon: <Shield /> },
  ];

  // Horizontal scroll for timeline
  const timelineRef = useRef(null);
  const [timelineProgress, setTimelineProgress] = useState(0);
  useEffect(() => {
    const handleScroll = () => {
      if (timelineRef.current) {
        const { scrollLeft, scrollWidth, clientWidth } = timelineRef.current;
        setTimelineProgress((scrollLeft / (scrollWidth - clientWidth)) * 100);
      }
    };
    const ref = timelineRef.current;
    if (ref) ref.addEventListener("scroll", handleScroll);
    return () => ref?.removeEventListener("scroll", handleScroll);
  }, []);

  // Gauges
  const GaugeComponent = ({ value, max, label, unit, suffix }) => {
    const percentage = (value / max) * 100;
    return (
      <div className="relative w-32 h-32 mx-auto">
        <svg className="w-full h-full" viewBox="0 0 100 100">
          <circle cx="50" cy="50" r="40" fill="none" stroke="#1e293b" strokeWidth="8" />
          <motion.circle
            cx="50" cy="50" r="40" fill="none" stroke="#3b82f6" strokeWidth="8"
            strokeLinecap="round"
            initial={{ pathLength: 0 }}
            whileInView={{ pathLength: percentage / 100 }}
            transition={{ duration: 2, ease: "easeOut" }}
            style={{
              rotate: -90,
              scaleX: 1,
              scaleY: 1,
              pathLength: percentage / 100,
            }}
          />
        </svg>
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
          <span className="text-2xl font-bold text-blue-400">
            {value.toLocaleString()}{suffix}
          </span>
          <span className="text-xs text-gray-400">{label}</span>
        </div>
      </div>
    );
  };

  return (
    <div ref={containerRef} className="bg-slate-950 text-white font-sans antialiased overflow-x-hidden">
      {/* Floating CTA */}
      <motion.div
        className="fixed bottom-8 right-8 z-50"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 2, type: "spring" }}
      >
        <button
          onClick={() => setModalOpen(true)}
          className="bg-blue-600 hover:bg-blue-700 text-white p-4 rounded-full shadow-2xl flex items-center gap-2 group"
        >
          <span className="hidden group-hover:inline">Quick Quote</span>
          <ArrowRight className="w-6 h-6" />
        </button>
      </motion.div>

      {/* Modal */}
      {modalOpen && (
        <motion.div
          className="fixed inset-0 bg-black/80 flex items-center justify-center z-50"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className="bg-slate-900 rounded-2xl p-8 max-w-md w-full relative"
            initial={{ scale: 0.8, y: 50 }}
            animate={{ scale: 1, y: 0 }}
            transition={{ type: "spring" }}
          >
            <button
              onClick={() => setModalOpen(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-white"
            >
              <X />
            </button>
            <h2 className="text-2xl font-bold mb-4">Request a Quote</h2>
            <form>
              <input
                type="text"
                placeholder="Your Name"
                className="w-full p-3 mb-3 bg-slate-800 rounded-lg"
              />
              <input
                type="email"
                placeholder="Email"
                className="w-full p-3 mb-3 bg-slate-800 rounded-lg"
              />
              <input
                type="text"
                placeholder="Material & Thickness"
                className="w-full p-3 mb-4 bg-slate-800 rounded-lg"
              />
              <button className="w-full bg-blue-600 hover:bg-blue-700 py-3 rounded-lg font-semibold">
                Submit
              </button>
            </form>
          </motion.div>
        </motion.div>
      )}

      {/* HERO with magnetic CTA */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <motion.div
          style={{ scale: heroScale, opacity: heroOpacity }}
          className="absolute inset-0"
        >
          <img
            src="https://i.pinimg.com/736x/98/13/b9/9813b947207ee41fa6a6620eb9b79a44.jpg"
            alt="CTL Line"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 via-slate-800/80 to-transparent" />
        </motion.div>

        <div className="relative container mx-auto px-6 z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <motion.div
                className="inline-block px-4 py-2 bg-blue-500/20 rounded-full text-blue-300 text-sm mb-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                ⚡ New Generation CTL Lines
              </motion.div>
              <h1 className="text-5xl md:text-7xl font-extrabold leading-tight mb-6">
                Cut to Length <span className="text-blue-400">4.0</span>
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-xl">
                Precision sheeting with <span className="text-blue-400">±0.5 mm</span> accuracy,
                <span className="text-blue-400"> 2000 mm</span> width, and full Industry 4.0 integration.
              </p>

              {/* Magnetic button */}
              <motion.div
                ref={magneticRef}
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
                style={{ x: springX, y: springY }}
                className="inline-block"
              >
                <a
                  href="#features"
                  className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-full text-lg font-semibold shadow-2xl flex items-center gap-3 transition-colors"
                >
                  Explore Machine <Play className="w-5 h-5 fill-white" />
                </a>
              </motion.div>
            </motion.div>

            {/* 3D floating card */}
            <motion.div
              initial={{ opacity: 0, rotateY: 45 }}
              animate={{ opacity: 1, rotateY: 0 }}
              transition={{ duration: 1, delay: 0.3 }}
              className="perspective-1000"
            >
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ repeat: Infinity, duration: 4 }}
                className="bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-xl rounded-3xl p-8 border border-blue-500/30 shadow-2xl"
              >
                <div className="relative">
                  <img
                    src="https://i.pinimg.com/1200x/ee/34/b3/ee34b3644047e9777f3ddb764a73355c.jpg"
                    alt="Machine"
                    className="rounded-2xl opacity-80"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-blue-500/20 to-transparent rounded-2xl" />
                </div>
                <div className="mt-6">
                  <div className="text-2xl font-bold">4HI Flying Shear</div>
                  <div className="text-blue-400">±0.5 mm · 60 m/min</div>
                </div>
              </motion.div>
            </motion.div>
          </div>
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

      {/* Stats with animated gauges */}
      <section className="py-24 bg-slate-900">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
            {stats.map((stat, i) => (
              <GaugeComponent
                key={i}
                value={stat.value}
                max={stat.label === "Precision" ? 1 : 200000}
                label={stat.label}
                unit={stat.unit}
                suffix={stat.suffix}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Flip-card Features */}
      <section id="features" className="py-28 bg-slate-950">
        <div className="container mx-auto px-6">
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold text-center mb-20"
          >
            Engineered for <span className="text-blue-400">Excellence</span>
          </motion.h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                whileHover="hover"
                className="group perspective-1000 h-80"
              >
                <motion.div
                  variants={{
                    hover: { rotateY: 180 },
                  }}
                  transition={{ duration: 0.6 }}
                  style={{ transformStyle: "preserve-3d" }}
                  className="relative w-full h-full"
                >
                  {/* Front */}
                  <div
                    className="absolute inset-0 backface-hidden bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl p-6 border border-blue-500/20 flex flex-col"
                  >
                    <div className="text-blue-400 mb-4">{feature.icon}</div>
                    <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                    <p className="text-gray-400">{feature.short}</p>
                  </div>
                  {/* Back */}
                  <div
                    className="absolute inset-0 backface-hidden bg-linear-to-br from-blue-600 to-blue-800 rounded-2xl p-6 flex items-center justify-center text-center rotateY-180"
                  >
                    <p className="text-white">{feature.long}</p>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Horizontal Scrolling Timeline */}
      <section className="py-28 bg-slate-900 overflow-hidden">
        <div className="container mx-auto px-6 mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-center">
            From <span className="text-blue-400">Coil</span> to{" "}
            <span className="text-blue-400">Sheet</span>
          </h2>
          <div className="w-full bg-slate-800 h-2 rounded-full mt-8 max-w-3xl mx-auto">
            <motion.div
              className="h-full bg-blue-500 rounded-full"
              style={{ width: `${timelineProgress}%` }}
            />
          </div>
        </div>

        <div
          ref={timelineRef}
          className="flex overflow-x-auto snap-x snap-mandatory hide-scrollbar gap-6 px-6"
          style={{ scrollBehavior: "smooth" }}
        >
          {timelineSteps.map((step, i) => (
            <motion.div
              key={i}
              className="flex-shrink-0 w-80 snap-center"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.1 }}
            >
              <div className="bg-slate-800 rounded-2xl p-8 border border-blue-500/30 h-64 flex flex-col">
                <div className="text-blue-400 mb-4 text-4xl">{step.icon}</div>
                <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                <p className="text-gray-400">{step.desc}</p>
                <div className="mt-auto text-right">
                  <ChevronRight className="inline text-blue-400" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Technical Specifications with animated bars */}
      <section className="py-28 bg-slate-950">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-20">
            Technical <span className="text-blue-400">Specifications</span>
          </h2>

          <div className="max-w-3xl mx-auto space-y-6">
            {[
              { label: "Max Width", value: "2000 mm", percentage: 100 },
              { label: "Max Length", value: "12,000 mm", percentage: 100 },
              { label: "Thickness Range", value: "0.4 – 16 mm", percentage: 80 },
              { label: "Length Tolerance", value: "±0.5 mm", percentage: 95 },
              { label: "Flatness", value: "< 1.0 mm/m", percentage: 90 },
            ].map((spec, i) => (
              <div key={i}>
                <div className="flex justify-between mb-1">
                  <span className="text-gray-300">{spec.label}</span>
                  <span className="text-blue-400 font-bold">{spec.value}</span>
                </div>
                <div className="w-full bg-slate-800 h-3 rounded-full overflow-hidden">
                  <motion.div
                    className="h-full bg-gradient-to-r from-blue-500 to-cyan-400"
                    initial={{ width: 0 }}
                    whileInView={{ width: `${spec.percentage}%` }}
                    transition={{ duration: 1.5, delay: i * 0.1 }}
                  />
                </div>
              </div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="mt-16 flex justify-center items-center gap-4 text-gray-300"
          >
            <CheckCircle className="w-6 h-6 text-blue-400" />
            <span>ISO 9001:2024 · Made in India · Industry 4.0 Ready</span>
          </motion.div>
        </div>
      </section>

      {/* CTA with floating input */}
      <section className="py-28 bg-gradient-to-r from-blue-600 to-blue-800 text-white text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGw2IDYtNiA2LTE4LTE4IDYtNiA2IDYgMTgtMTggNiA2LTE4IDE4eiIgc3Ryb2tlPSIjZmZmIiBzdHJva2Utd2lkdGg9IjIiLz48L2c+PC9zdmc+')] opacity-10" />
        <div className="container mx-auto px-6 relative z-10">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold mb-6"
          >
            Ready to revolutionise your production?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto"
          >
            Get a personalised quote for your exact material mix and capacity needs.
          </motion.p>
          <motion.div
            initial={{ scale: 0.9 }}
            whileInView={{ scale: 1 }}
            transition={{ type: "spring" }}
            className="flex flex-col sm:flex-row gap-4 justify-center max-w-xl mx-auto"
          >
            <input
              type="email"
              placeholder="Your email"
              className="flex-1 px-6 py-4 rounded-full bg-white/10 border border-white/30 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white"
            />
            <button className="px-8 py-4 bg-white text-blue-600 rounded-full font-semibold hover:bg-gray-100 transition shadow-lg flex items-center justify-center gap-2">
              Get Instant Quote <ArrowRight className="w-5 h-5" />
            </button>
          </motion.div>
        </div>
      </section>

      {/* Back to top */}
      <motion.button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className="fixed bottom-8 left-8 bg-blue-600 p-3 rounded-full shadow-2xl z-50"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        ↑
      </motion.button>

      {/* Custom CSS for hide-scrollbar and 3D */}
      <style jsx>{`
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .perspective-1000 {
          perspective: 1000px;
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