import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { 
  Settings, Ruler, Activity, ShieldCheck, 
  Cpu, HardHat, Factory, Leaf, Zap, Award 
} from "lucide-react";

export default function AboutUs() {
  const [titleRef, titleInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [contentRef, contentInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [imageRef, imageInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [advRef, advInView] = useInView({ triggerOnce: true, threshold: 0.1 });

  // Industrial Animation Variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.3 }
    }
  };

  const mechanicalSlide = {
    hidden: { opacity: 0, x: -50 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { type: "spring", stiffness: 100, damping: 20 }
    }
  };

  const revealClip = {
    hidden: { clipPath: "inset(0 100% 0 0)" },
    visible: { 
      clipPath: "inset(0 0% 0 0)",
      transition: { duration: 1, ease: "easeInOut" }
    }
  };

  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <div className="w-full bg-slate-50 py-24 px-4 md:px-8 overflow-hidden relative">
      {/* Decorative Progress Line */}
      <motion.div 
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 1.5, ease: "circOut" }}
        className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-100 via-blue-600 to-blue-100 origin-left"
      />
      
      {/* Title Section */}
      <motion.div
        ref={titleRef}
        initial="hidden"
        animate={titleInView ? "visible" : "hidden"}
        variants={containerVariants}
        className="max-w-7xl mx-auto mb-20 text-center"
      >
        <motion.span variants={mechanicalSlide} className="inline-block px-4 py-1 border border-blue-200 bg-blue-50 text-blue-700 text-xs font-bold tracking-widest uppercase rounded mb-4">
          Corporate Profile
        </motion.span>
        <motion.h1 variants={revealClip} className="text-4xl md:text-6xl font-black text-slate-900 mb-6 tracking-tighter">
          MATRIX <span className="text-blue-600">METALS</span> LLP
        </motion.h1>
        <motion.p variants={mechanicalSlide} className="text-lg md:text-xl text-slate-600 font-medium max-w-3xl mx-auto">
          Engineering Discipline. Industrial Precision. Enduring Reliability.
        </motion.p>
      </motion.div>

      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start mb-24">
          
          {/* Left Content */}
          <motion.div
            ref={contentRef}
            initial="hidden"
            animate={contentInView ? "visible" : "hidden"}
            variants={containerVariants}
            className="space-y-8"
          >
            <motion.div variants={mechanicalSlide} className="prose prose-slate lg:prose-lg">
              <p className="text-slate-700 leading-relaxed">
                Matrix Metals LLP is a stainless steel processing enterprise headquartered in 
                <span className="font-semibold text-slate-900"> Bengaluru, India</span>, operating from the Peenya Industrial district under the 
                <span className="text-blue-600 font-bold"> MoOWR framework</span>.
              </p>
            </motion.div>

            {/* Distinction Quote */}
            <motion.div 
              variants={mechanicalSlide}
              className="bg-slate-900 text-white p-8 rounded-lg shadow-xl relative overflow-hidden group"
            >
              <motion.div 
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute -top-10 -right-10 opacity-5 text-white"
              >
                <Settings size={200} />
              </motion.div>
              <h3 className="text-blue-400 font-bold uppercase tracking-widest text-sm mb-3">Our Distinction</h3>
              <p className="text-lg font-medium leading-snug relative z-10">
                "We do not operate as traders of material. We function as a structured surface and precision engineering facility."
              </p>
            </motion.div>

            <motion.div variants={mechanicalSlide} className="space-y-4">
              <h3 className="text-2xl font-bold text-slate-900">Our Operational Philosophy</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {[
                  { icon: <Activity />, title: "Procedural Control" },
                  { icon: <Ruler />, title: "Mechanical Accuracy" },
                  { icon: <Cpu />, title: "Strategic Partnership" }
                ].map((item, i) => (
                  <motion.div 
                    key={i}
                    whileHover={{ scale: 1.02, backgroundColor: "#eff6ff" }}
                    className="flex items-center gap-3 p-4 bg-white border border-slate-200 rounded-md transition-colors"
                  >
                    <span className="text-blue-600">{item.icon}</span>
                    <span className="font-bold text-sm text-slate-800 uppercase tracking-tight">{item.title}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Right Content */}
          <motion.div
            ref={imageRef}
            initial="hidden"
            animate={imageInView ? "visible" : "hidden"}
            variants={containerVariants}
            className="lg:pl-10"
          >
            <div className="relative border-l-4 border-blue-600 pl-8 py-2">
              <motion.h2 variants={revealClip} className="text-3xl font-bold text-slate-900 mb-6">Our Foundation</motion.h2>
              <motion.p variants={mechanicalSlide} className="text-slate-600 text-lg mb-8 leading-relaxed">
                Established with a clear industrial objective: to raise the standard of stainless steel processing through engineering discipline and process accountability.
              </motion.p>
              
              <div className="space-y-6">
                {[
                  { icon: <ShieldCheck />, title: "System-Driven Quality", text: "We believe that precision is not achieved by inspection — it is achieved by system design." },
                  { icon: <HardHat />, title: "Technical Governance", text: "Governed by calibrated parameters and repeatable methodology." }
                ].map((item, i) => (
                  <motion.div variants={mechanicalSlide} key={i} className="flex gap-4">
                    <div className="mt-1 flex-shrink-0 w-10 h-10 bg-slate-100 rounded flex items-center justify-center text-blue-600">
                      {item.icon}
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900 uppercase text-sm tracking-wide">{item.title}</h4>
                      <p className="text-slate-600 text-sm">{item.text}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* --- NEW SECTION: Product Advantages & Sustainability --- */}
        <motion.div
          ref={advRef}
          initial="hidden"
          animate={advInView ? "visible" : "hidden"}
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-16 border-t border-slate-200"
        >
          {/* Advantage 1: Engineered Excellence */}
          <motion.div variants={fadeInUp} className="bg-white p-8 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
            <div className="w-12 h-12 bg-blue-600 text-white rounded-lg flex items-center justify-center mb-6">
              <Award size={24} />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-4 uppercase tracking-tight">Product Advantages</h3>
            <p className="text-slate-600 text-sm leading-relaxed">
              Every processed coil and sheet reflects controlled precision and structural stability. Our advantage lies in disciplined execution governed by calibrated systems and measurable parameters for high-demand industrial applications.
            </p>
          </motion.div>

          {/* Advantage 2: Make In India */}
          <motion.div variants={fadeInUp} className="bg-blue-600 p-8 rounded-2xl text-white shadow-lg relative overflow-hidden group">
             <motion.div 
               animate={{ scale: [1, 1.1, 1] }} 
               transition={{ repeat: Infinity, duration: 4 }}
               className="absolute -right-4 -bottom-4 opacity-10"
             >
               <Factory size={160} />
             </motion.div>
            <div className="w-12 h-12 bg-white/20 backdrop-blur-md text-white rounded-lg flex items-center justify-center mb-6">
              <Zap size={24} />
            </div>
            <h3 className="text-xl font-bold mb-4 uppercase tracking-tight">Make In India</h3>
            <p className="text-blue-50 text-sm leading-relaxed">
              We strengthen domestic manufacturing by localising precision conversion and surface engineering. We reduce dependency on external processing while ensuring international-grade standards within India’s industrial ecosystem.
            </p>
          </motion.div>

          {/* Advantage 3: Sustainability */}
          <motion.div variants={fadeInUp} className="bg-white p-8 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
            <div className="w-12 h-12 bg-emerald-600 text-white rounded-lg flex items-center justify-center mb-6">
              <Leaf size={24} />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-4 uppercase tracking-tight">Eco-Responsibility</h3>
            <p className="text-slate-600 text-sm leading-relaxed">
              Sustainability is embedded in our philosophy. From UV conditioning to scrap minimisation and energy-conscious equipment selection, we maintain technical standards without compromising environmental stewardship.
            </p>
          </motion.div>
        </motion.div>

        {/* Footer Note */}
        <motion.div 
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <p className="text-slate-400 font-mono text-xs uppercase tracking-[0.3em]">
            Precision . Contribution . Responsibility
          </p>
        </motion.div>
      </div>
    </div>
  );
} 



























































