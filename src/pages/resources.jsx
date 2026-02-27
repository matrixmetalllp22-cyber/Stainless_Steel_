
// import React, { useState, useRef } from 'react';
// import { motion, useMotionValue, useSpring, useTransform, AnimatePresence } from 'framer-motion';
// import { Award, X, ShieldCheck, Zap, Globe, ArrowUpRight } from 'lucide-react';

// const CertificateCard = ({ cert, onSelect }) => {
//   const x = useMotionValue(0);
//   const y = useMotionValue(0);

//   // Smooth springs for the 3D tilt effect
//   const mouseX = useSpring(x, { stiffness: 150, damping: 20 });
//   const mouseY = useSpring(y, { stiffness: 150, damping: 20 });

//   const rotateX = useTransform(mouseY, [-0.5, 0.5], ["10deg", "-10deg"]);
//   const rotateY = useTransform(mouseX, [-0.5, 0.5], ["-10deg", "10deg"]);

//   const handleMouseMove = (e) => {
//     const rect = e.currentTarget.getBoundingClientRect();
//     const width = rect.width;
//     const height = rect.height;
//     const mouseXPos = e.clientX - rect.left;
//     const mouseYPos = e.clientY - rect.top;
//     x.set(mouseXPos / width - 0.5);
//     y.set(mouseYPos / height - 0.5);
//   };

//   const handleMouseLeave = () => {
//     x.set(0);
//     y.set(0);
//   };

//   return (
//     <motion.div
//       style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
//       onMouseMove={handleMouseMove}
//       onMouseLeave={handleMouseLeave}
//       onClick={() => onSelect(cert)}
//       className="relative h-[500px] w-full cursor-none group"
//     >
//       {/* Perspective Shadow */}
//       <div className="absolute inset-10 bg-blue-500/20 blur-[100px] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      
//       <div className="relative h-full w-full rounded-[2.5rem] bg-[#0a0a0a] border border-white/10 overflow-hidden backdrop-blur-3xl">
//         {/* Animated Noise Texture Overlay */}
//         <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
        
//         {/* The Image Layer */}
//         <img 
//           src={cert.image} 
//           className="absolute inset-0 w-full h-full object-cover opacity-30 group-hover:opacity-60 group-hover:scale-110 transition-all duration-700 ease-out grayscale group-hover:grayscale-0"
//           alt={cert.title}
//         />

//         {/* Content Overlay */}
//         <div className="relative h-full flex flex-col justify-between p-10 z-20">
//           <div className="flex justify-between items-start">
//             <div className="h-14 w-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center backdrop-blur-xl">
//               <Award className="text-blue-400 group-hover:text-blue-300 transition-colors" size={28} />
//             </div>
//             <div className="flex flex-col items-end">
//               <span className="text-[10px] font-mono tracking-[0.3em] text-white/30 uppercase">Secure Record</span>
//               <div className="h-[1px] w-12 bg-blue-500/50 mt-1 shadow-[0_0_10px_#3b82f6]" />
//             </div>
//           </div>

//           <div className="space-y-4">
//             <motion.div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-[10px] text-blue-400 font-mono">
//               <Zap size={10} /> {cert.category}
//             </motion.div>
//             <h3 className="text-3xl font-light tracking-tight text-white leading-tight">
//               {cert.title.split(' ').map((word, i) => (
//                 <span key={i} className={i === 0 ? "font-bold block" : "opacity-80"}>{word} </span>
//               ))}
//             </h3>
            
//             <div className="flex items-center justify-between pt-6 border-t border-white/5">
//               <p className="text-sm text-white/40 font-light italic">{cert.issuer}</p>
//               <div className="h-10 w-10 rounded-full border border-white/10 flex items-center justify-center group-hover:bg-white group-hover:text-black transition-all duration-500">
//                 <ArrowUpRight size={20} />
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Dynamic Inner Glow following mouse */}
//         <motion.div 
//           className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity"
//           style={{
//             background: `radial-gradient(circle at ${x.get() * 100 + 50}% ${y.get() * 100 + 50}%, rgba(59, 130, 246, 0.15) 0%, transparent 60%)`
//           }}
//         />
//       </div>
//     </motion.div>
//   );
// };

// const UltraPremiumVault = () => {
//   const [selected, setSelected] = useState(null);

//   const certs = [
//     { id: 1, title: "Principal Product Architect", issuer: "Meta Systems", category: "ENGINEERING", image: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?q=80&w=1200" },
//     { id: 2, title: "Neural Sync Specialist", issuer: "Neuralink Corp", category: "BIOTECH", image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=1200" },
//     { id: 3, title: "Global Security Director", issuer: "Interpol Cyber", category: "SECURITY", image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=1200" }
//   ];

//   return (
//     <div className="min-h-screen bg-[#030303] text-white py-24 px-8 overflow-hidden">
//       {/* Background Decorative Text */}
//       <div className="fixed inset-0 overflow-hidden pointer-events-none opacity-[0.02] select-none font-black text-[20vw] leading-none uppercase flex items-center justify-center whitespace-nowrap">
//         Credentials Verified
//       </div>

//       <div className="max-w-7xl mx-auto relative z-10">
//         <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
//           <div className="space-y-4">
//             <h2 className="text-sm font-mono tracking-[0.5em] text-blue-500 uppercase italic">Digital Legacy</h2>
//             <h1 className="text-6xl md:text-8xl font-bold tracking-tighter">Certificates<span className="text-blue-600">.</span></h1>
//           </div>
//           <div className="flex gap-12 text-sm font-mono text-white/30 uppercase tracking-widest pb-4">
//             <div><span className="block text-white">03</span>Total Units</div>
//             <div><span className="block text-white">2026</span>Active Year</div>
//           </div>
//         </div>

//         <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
//           {certs.map(cert => (
//             <CertificateCard key={cert.id} cert={cert} onSelect={setSelected} />
//           ))}
//         </div>
//       </div>

//       {/* Full-Screen Ultra Modal */}
//       <AnimatePresence>
//         {selected && (
//           <motion.div 
//             initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
//             className="fixed inset-0 z-[100] bg-black/90 backdrop-blur-3xl flex items-center justify-center p-4 md:p-20"
//             onClick={() => setSelected(null)}
//           >
//              <motion.div 
//               initial={{ scale: 0.8, opacity: 0, rotateY: 20 }}
//               animate={{ scale: 1, opacity: 1, rotateY: 0 }}
//               exit={{ scale: 0.8, opacity: 0 }}
//               className="relative max-w-6xl w-full aspect-[4/3] bg-[#0a0a0a] rounded-[3rem] border border-white/10 shadow-[0_0_100px_rgba(59,130,246,0.1)] overflow-hidden"
//               onClick={e => e.stopPropagation()}
//             >
//               <img src={selected.image} className="w-full h-full object-contain p-8 md:p-16" alt="Certificate" />
//               <div className="absolute bottom-10 left-10 right-10 flex justify-between items-center bg-black/40 backdrop-blur-xl p-6 rounded-2xl border border-white/5">
//                 <div className="flex gap-4 items-center">
//                   <div className="h-10 w-10 rounded-full bg-blue-600 flex items-center justify-center"><ShieldCheck size={20}/></div>
//                   <div>
//                     <h4 className="text-lg font-bold">{selected.title}</h4>
//                     <p className="text-xs text-white/40 uppercase tracking-widest font-mono">Issued by {selected.issuer}</p>
//                   </div>
//                 </div>
//                 <button onClick={() => setSelected(null)} className="px-6 py-2 bg-white text-black text-xs font-bold rounded-full hover:bg-blue-500 hover:text-white transition-colors">
//                   Close Explorer
//                 </button>
//               </div>
//             </motion.div>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </div>
//   );
// };

// export default UltraPremiumVault;











import React, { useState, useEffect } from 'react';
import { motion, useMotionValue, useSpring, useTransform, AnimatePresence } from 'framer-motion';
import { Award, X, ShieldCheck, Zap, ArrowUpRight, Menu } from 'lucide-react';

const CertificateCard = ({ cert, onSelect }) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const [isMobile, setIsMobile] = useState(false);

  // Check if device is mobile to disable 3D tilt for better UX
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const mouseX = useSpring(x, { stiffness: 150, damping: 20 });
  const mouseY = useSpring(y, { stiffness: 150, damping: 20 });

  const rotateX = useTransform(mouseY, [-0.5, 0.5], isMobile ? ["0deg", "0deg"] : ["10deg", "-10deg"]);
  const rotateY = useTransform(mouseX, [-0.5, 0.5], isMobile ? ["0deg", "0deg"] : ["-10deg", "10deg"]);

  const handleMouseMove = (e) => {
    if (isMobile) return;
    const rect = e.currentTarget.getBoundingClientRect();
    x.set((e.clientX - rect.left) / rect.width - 0.5);
    y.set((e.clientY - rect.top) / rect.height - 0.5);
  };

  return (
    <motion.div
      style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
      onMouseMove={handleMouseMove}
      onMouseLeave={() => { x.set(0); y.set(0); }}
      onClick={() => onSelect(cert)}
      className="relative h-[400px] sm:h-[450px] md:h-[500px] w-full cursor-pointer group"
    >
      {/* Background Glow */}
      <div className="absolute inset-10 bg-blue-500/10 blur-[80px] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      
      <div className="relative h-full w-full rounded-[2rem] md:rounded-[2.5rem] bg-[#0d0d0d] border border-white/10 overflow-hidden backdrop-blur-3xl shadow-2xl">
        {/* Grain Overlay */}
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
        
        <img 
          src={cert.image} 
          className="absolute inset-0 w-full h-full object-cover opacity-20 group-hover:opacity-40 group-hover:scale-105 transition-all duration-700 ease-out"
          alt={cert.title}
        />

        <div className="relative h-full flex flex-col justify-between p-6 sm:p-8 md:p-10 z-20">
          <div className="flex justify-between items-start">
            <div className="h-12 w-12 md:h-14 md:w-14 rounded-xl md:rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center backdrop-blur-xl">
              <Award className="text-blue-400" size={24} />
            </div>
            <div className="flex flex-col items-end">
              <span className="text-[8px] md:text-[10px] font-mono tracking-[0.2em] text-white/30 uppercase text-right">Encrypted ID<br/>{cert.id}</span>
            </div>
          </div>

          <div className="space-y-3 md:space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-[9px] md:text-[10px] text-blue-400 font-mono">
              <Zap size={10} /> {cert.category}
            </div>
            <h3 className="text-2xl md:text-3xl font-light tracking-tight text-white leading-tight">
              {cert.title}
            </h3>
            
            <div className="flex items-center justify-between pt-4 md:pt-6 border-t border-white/5">
              <p className="text-xs md:text-sm text-white/40 font-light">{cert.issuer}</p>
              <div className="h-8 w-8 md:h-10 md:w-10 rounded-full border border-white/10 flex items-center justify-center group-hover:bg-white group-hover:text-black transition-all duration-500">
                <ArrowUpRight size={18} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const FinalPremiumVault = () => {
  const [selected, setSelected] = useState(null);

  const certs = [
    { id: "X-992", title: "Principal Systems Architect", issuer: "Meta Global", category: "ENGINEERING", image: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?q=80&w=1200" },
    { id: "B-104", title: "Neural Sync Interface", issuer: "Neuralink Corp", category: "BIOTECH", image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=1200" },
    { id: "S-001", title: "Global Security Lead", issuer: "Interpol Cyber", category: "SECURITY", image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=1200" }
  ];

  return (
    <div className="min-h-screen bg-[#050505] text-white py-12 px-4 sm:px-8 md:py-24 overflow-x-hidden">
      {/* Background Decorative Element */}
      <div className="fixed top-0 left-0 w-full h-full pointer-events-none opacity-[0.03] flex items-center justify-center">
        <h1 className="text-[25vw] font-black uppercase tracking-tighter select-none">Vault</h1>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <header className="flex flex-col gap-4 mb-16 md:mb-24">
          <div className="flex items-center gap-2 text-blue-500 font-mono text-[10px] md:text-xs tracking-[0.4em] uppercase">
            <span className="h-[1px] w-8 bg-blue-500" /> 
            Professional Digital Assets
          </div>
          <h1 className="text-5xl sm:text-7xl md:text-9xl font-bold tracking-tighter leading-[0.85]">
            Certifications<span className="text-blue-600">.</span>
          </h1>
        </header>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-10">
          {certs.map(cert => (
            <CertificateCard key={cert.id} cert={cert} onSelect={setSelected} />
          ))}
        </div>
      </div>

      {/* Responsive Modal */}
      <AnimatePresence>
        {selected && (
          <motion.div 
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-2xl flex items-center justify-center p-4"
            onClick={() => setSelected(null)}
          >
            <motion.div 
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              className="relative w-full max-w-5xl max-h-[90vh] bg-[#111] rounded-[1.5rem] md:rounded-[3rem] border border-white/10 overflow-hidden flex flex-col"
              onClick={e => e.stopPropagation()}
            >
              {/* Top Bar for Mobile */}
              <div className="p-4 md:p-6 flex justify-between items-center border-b border-white/5 bg-white/[0.02]">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="text-blue-500" size={18} />
                  <span className="text-[10px] font-mono tracking-widest uppercase text-white/60">Verified Document</span>
                </div>
                <button onClick={() => setSelected(null)} className="p-2 hover:bg-white/10 rounded-full transition-colors">
                  <X size={24} />
                </button>
              </div>

              {/* Scrollable Image Area */}
              <div className="flex-1 overflow-y-auto p-4 md:p-12 flex items-center justify-center bg-black/40">
                <img 
                  src={selected.image} 
                  className="max-w-full h-auto rounded-lg shadow-2xl border border-white/5" 
                  alt="Certificate Full View" 
                />
              </div>

              {/* Bottom Info Bar */}
              <div className="p-6 md:p-8 bg-black border-t border-white/5">
                <h4 className="text-xl md:text-2xl font-bold">{selected.title}</h4>
                <p className="text-xs md:text-sm text-white/40 mt-1">{selected.issuer} — ID: {selected.id}</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default FinalPremiumVault;