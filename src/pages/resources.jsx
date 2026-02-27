// import React, { useState, useEffect } from 'react';
// import { motion, useMotionValue, useSpring, useTransform, AnimatePresence } from 'framer-motion';
// import { Award, X, ShieldCheck, Zap, ArrowUpRight } from 'lucide-react';

// const CertificateCard = ({ cert, onSelect }) => {
//   const x = useMotionValue(0);
//   const y = useMotionValue(0);
//   const [isMobile, setIsMobile] = useState(false);

//   useEffect(() => {
//     const checkMobile = () => setIsMobile(window.innerWidth < 768);
//     checkMobile();
//     window.addEventListener('resize', checkMobile);
//     return () => window.removeEventListener('resize', checkMobile);
//   }, []);

//   const mouseX = useSpring(x, { stiffness: 150, damping: 20 });
//   const mouseY = useSpring(y, { stiffness: 150, damping: 20 });

//   const rotateX = useTransform(mouseY, [-0.5, 0.5], isMobile ? ["0deg", "0deg"] : ["10deg", "-10deg"]);
//   const rotateY = useTransform(mouseX, [-0.5, 0.5], isMobile ? ["0deg", "0deg"] : ["-10deg", "10deg"]);

//   const handleMouseMove = (e) => {
//     if (isMobile) return;
//     const rect = e.currentTarget.getBoundingClientRect();
//     x.set((e.clientX - rect.left) / rect.width - 0.5);
//     y.set((e.clientY - rect.top) / rect.height - 0.5);
//   };

//   return (
//     <motion.div
//       style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
//       onMouseMove={handleMouseMove}
//       onMouseLeave={() => { x.set(0); y.set(0); }}
//       onClick={() => onSelect(cert)}
//       className="relative h-[400px] sm:h-[450px] md:h-[500px] w-full cursor-pointer group"
//     >
//       <div className="absolute inset-10 bg-blue-500/10 blur-[80px] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      
//       <div className="relative h-full w-full rounded-[2rem] md:rounded-[2.5rem] bg-[#0d0d0d] border border-white/10 overflow-hidden backdrop-blur-3xl shadow-2xl">
//         <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
        
//         <img 
//           src={cert.image} 
//           className="absolute inset-0 w-full h-full object-cover opacity-20 group-hover:opacity-40 group-hover:scale-105 transition-all duration-700 ease-out"
//           alt={cert.title}
//         />

//         <div className="relative h-full flex flex-col justify-between p-6 sm:p-8 md:p-10 z-20">
//           <div className="flex justify-between items-start">
//             <div className="h-12 w-12 md:h-14 md:w-14 rounded-xl md:rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center backdrop-blur-xl">
//               <Award className="text-blue-400" size={24} />
//             </div>
//             <div className="flex flex-col items-end">
//               <span className="text-[8px] md:text-[10px] font-mono tracking-[0.2em] text-white/30 uppercase text-right">Encrypted ID<br/>{cert.id}</span>
//             </div>
//           </div>

//           <div className="space-y-3 md:space-y-4">
//             <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-[9px] md:text-[10px] text-blue-400 font-mono">
//               <Zap size={10} /> {cert.category}
//             </div>
//             <h3 className="text-2xl md:text-3xl font-light tracking-tight text-white leading-tight">
//               {cert.title}
//             </h3>
            
//             <div className="flex items-center justify-between pt-4 md:pt-6 border-t border-white/5">
//               <p className="text-xs md:text-sm text-white/40 font-light">{cert.issuer}</p>
//               <div className="h-8 w-8 md:h-10 md:w-10 rounded-full border border-white/10 flex items-center justify-center group-hover:bg-white group-hover:text-black transition-all duration-500">
//                 <ArrowUpRight size={18} />
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </motion.div>
//   );
// };

// const FinalPremiumVault = () => {
//   const [selected, setSelected] = useState(null);

//   const certs = [
//     { id: "X-992", title: "Principal Systems Architect", issuer: "Meta Global", category: "ENGINEERING", image: "/Images/certificate13.png" },
//     { id: "X-993", title: "Senior Cloud Engineer", issuer: "Meta Global", category: "ENGINEERING", image: "/Images/certificate12.png" },
//     { id: "B-104", title: "Neural Sync Interface", issuer: "Neuralink Corp", category: "BIOTECH", image: "/Images/certificate11.png" },
//     { id: "S-001", title: "Global Security Lead", issuer: "Interpol Cyber", category: "SECURITY", image: "/Images/certificate10.png" },
//     { id: "X-994", title: "Systems Infrastructure", issuer: "Meta Global", category: "ENGINEERING", image: "/Images/certificate09.png" },
//     { id: "B-105", title: "Bio-Link Expert", issuer: "Neuralink Corp", category: "BIOTECH", image: "/Images/certificate08.png" },
//     { id: "S-002", title: "Cyber Defense", issuer: "Interpol Cyber", category: "SECURITY", image: "/Images/certificate07.png" },
//     { id: "X-995", title: "Lead Architect", issuer: "Meta Global", category: "ENGINEERING", image: "/Images/certificate06.png" },
//     { id: "B-106", title: "Neural Integration", issuer: "Neuralink Corp", category: "BIOTECH", image: "/Images/certificate05.png" },
//     { id: "S-003", title: "Security Specialist", issuer: "Interpol Cyber", category: "SECURITY", image: "/Images/certificate04.png" },
//     { id: "X-996", title: "Product Designer", issuer: "Meta Global", category: "ENGINEERING", image: "/Images/certificate03.png" },
//     { id: "B-107", title: "Cognitive Sync", issuer: "Neuralink Corp", category: "BIOTECH", image: "/Images/certificate02.png" },
//     { id: "S-004", title: "Network Analyst", issuer: "Interpol Cyber", category: "SECURITY", image: "/Images/certificate01.png" },
//   ];

//   return (
//     <div className="min-h-screen bg-[#050505] text-white py-12 px-4 sm:px-8 md:py-24 overflow-x-hidden">
//       <div className="fixed top-0 left-0 w-full h-full pointer-events-none opacity-[0.03] flex items-center justify-center">
//         <h1 className="text-[25vw] font-black uppercase tracking-tighter select-none">Vault</h1>
//       </div>

//       <div className="max-w-7xl mx-auto relative z-10">
//         <header className="flex flex-col gap-4 mb-16 md:mb-24">
//           <div className="flex items-center gap-2 text-blue-500 font-mono text-[10px] md:text-xs tracking-[0.4em] uppercase">
//             <span className="h-[1px] w-8 bg-blue-500" /> 
//             Professional Digital Assets
//           </div>
//           <h1 className="text-5xl sm:text-7xl md:text-9xl font-bold tracking-tighter leading-[0.85]">
//             Certifications<span className="text-blue-600">.</span>
//           </h1>
//         </header>

//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-10">
//           {certs.map((cert, index) => (
//             <CertificateCard key={`${cert.id}-${index}`} cert={cert} onSelect={setSelected} />
//           ))}
//         </div>
//       </div>

//       <AnimatePresence>
//         {selected && (
//           <motion.div 
//             initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
//             className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-2xl flex items-center justify-center p-4 md:p-10"
//             onClick={() => setSelected(null)}
//           >
//             <motion.div 
//               initial={{ scale: 0.9, opacity: 0, y: 20 }}
//               animate={{ scale: 1, opacity: 1, y: 0 }}
//               exit={{ scale: 0.9, opacity: 0, y: 20 }}
//               className="relative w-full max-w-5xl h-full md:h-auto max-h-[90vh] bg-[#111] rounded-[1.5rem] md:rounded-[3rem] border border-white/10 overflow-hidden flex flex-col"
//               onClick={e => e.stopPropagation()}
//             >
//               {/* Top Header Bar */}
//               <div className="shrink-0 p-4 md:p-6 flex justify-between items-center border-b border-white/5 bg-white/[0.02]">
//                 <div className="flex items-center gap-2">
//                   <ShieldCheck className="text-blue-500" size={18} />
//                   <span className="text-[10px] font-mono tracking-widest uppercase text-white/60">Verified Document</span>
//                 </div>
//                 <button onClick={() => setSelected(null)} className="p-2 hover:bg-white/10 rounded-full transition-colors text-white/60 hover:text-white">
//                   <X size={24} />
//                 </button>
//               </div>

//               {/* Fixed Image Container: No Scroll, Perfect Fit */}
//               <div className="flex-1 min-h-0 w-full p-4 md:p-8 flex items-center justify-center bg-black/40">
//                 <img 
//                   src={selected.image} 
//                   className="max-w-full max-h-full object-contain rounded-lg shadow-2xl border border-white/5" 
//                   alt="Certificate Full View" 
//                 />
//               </div>

//               {/* Bottom Info Bar */}
//               <div className="shrink-0 p-6 md:p-8 bg-black border-t border-white/5">
//                 <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
//                   <div>
//                     <h4 className="text-xl md:text-2xl font-bold">{selected.title}</h4>
//                     <p className="text-xs md:text-sm text-white/40 mt-1">{selected.issuer} — ID: {selected.id}</p>
//                   </div>
//                   <button className="px-6 py-3 bg-white text-black text-xs font-bold rounded-full hover:bg-blue-500 hover:text-white transition-all duration-300">
//                     Verify Credential
//                   </button>
//                 </div>
//               </div>
//             </motion.div>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </div>
//   );
// };

// export default FinalPremiumVault;











import React, { useState, useEffect } from 'react';
import { motion, useMotionValue, useSpring, useTransform, AnimatePresence } from 'framer-motion';
import { Award, X, ShieldCheck, ArrowUpRight } from 'lucide-react'; // Removed Zap icon

const CertificateCard = ({ cert, onSelect }) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const [isMobile, setIsMobile] = useState(false);

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
      <div className="absolute inset-10 bg-blue-500/10 blur-[80px] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      
      <div className="relative h-full w-full rounded-[2rem] md:rounded-[2.5rem] bg-[#0d0d0d] border border-white/10 overflow-hidden backdrop-blur-3xl shadow-2xl">
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
            {/* REMOVED: Yellow marked section (Category Badge) */}
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

  // Simplified certs array (removed category property)
  const certs = [
    {id: "TSNUK22586", title: "TSN", issuer: "TSN", image: "/Images/certificate13.png" },
    {id: "ISO-3100:20218", title: "Risk mangement ", issuer: "TSN", image: "/Images/certificate12.png" },
    {id: "ISO-37001:20216", title: "Anti-bribery management ", issuer: "TSN", image: "/Images/certificate11.png" },
    {id: "ISO-14001:2015", title: "Environment management system", issuer: "RO", image: "/Images/certificate10.png" },
    {id: "ISO-26000:2010", title: "Social responisibility ", issuer: "TSN", image: "/Images/certificate09.png" },
    {id: "IATF-16949:20216", title: "Automotive quality management system", issuer: "EU Cert", image: "/Images/certificate08.png" },
    {id: "ISO-50001:20218", title: "Energy Management system ", issuer: "TSN", image: "/Images/certificate07.png" },
    {id: "ISO-14001:2015", title: "Certificate of registration", issuer: "AMR", image: "/Images/certificate06.png" },
    {id: "ISO-14001:2015", title: "Energy Management system", issuer: "TSN", image: "/Images/certificate05.png" },
    {id: "ISO-9001:20215", title: "Quality Management system", issuer: "RAPL", image: "/Images/certificate04.png" },
    {id: "TSNUK25034", title: "good manufacturing practices (GMP)", issuer: "TSN", image: "/Images/certificate03.png" },
    {id: "ISO-992", title: "Certificate", issuer: "INDIAN GOVT", image: "/Images/certificate02.png" },
    {id: "ISO-992", title: "certification of corporation", issuer: "INDIAN GOVT", image: "/Images/certificate01.png" },
  ];

  return (
    <div className="min-h-screen bg-[#050505] text-white py-12 px-4 sm:px-8 md:py-24 overflow-x-hidden">
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
          {certs.map((cert, index) => (
            <CertificateCard key={`${cert.id}-${index}`} cert={cert} onSelect={setSelected} />
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selected && (
          <motion.div 
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-2xl flex items-center justify-center p-4 md:p-10"
            onClick={() => setSelected(null)}
          >
            <motion.div 
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              className="relative w-full max-w-5xl h-full md:h-auto max-h-[90vh] bg-[#111] rounded-[1.5rem] md:rounded-[3rem] border border-white/10 overflow-hidden flex flex-col"
              onClick={e => e.stopPropagation()}
            >
              <div className="shrink-0 p-4 md:p-6 flex justify-between items-center border-b border-white/5 bg-white/[0.02]">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="text-blue-500" size={18} />
                  <span className="text-[10px] font-mono tracking-widest uppercase text-white/60">Verified Document</span>
                </div>
                <button onClick={() => setSelected(null)} className="p-2 hover:bg-white/10 rounded-full transition-colors text-white/60 hover:text-white">
                  <X size={24} />
                </button>
              </div>

              <div className="flex-1 min-h-0 w-full p-4 md:p-8 flex items-center justify-center bg-black/40">
                <img 
                  src={selected.image} 
                  className="max-w-full max-h-full object-contain rounded-lg shadow-2xl border border-white/5" 
                  alt="Certificate Full View" 
                />
              </div>

              <div className="shrink-0 p-6 md:p-8 bg-black border-t border-white/5">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <div>
                    <h4 className="text-xl md:text-2xl font-bold">{selected.title}</h4>
                    <p className="text-xs md:text-sm text-white/40 mt-1">{selected.issuer} — ID: {selected.id}</p>
                  </div>
                  <button className="px-6 py-3 bg-white text-black text-xs font-bold rounded-full hover:bg-blue-500 hover:text-white transition-all duration-300">
                    Verify Credential
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default FinalPremiumVault;