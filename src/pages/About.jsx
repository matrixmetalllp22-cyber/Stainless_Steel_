import React from 'react';
import { Link } from 'react-router-dom';
import Overview from '../components/Overview';
import ManagementTeam from '../components/ManagementTeam';
import ProductAdvantages from '../components/MakeInIndia';

export default function About() {
  return ( <div>

    <section>
    <div>
      <Overview />
    </div>
    </section>

    <section>
       <div>
        <ManagementTeam />
      </div>
    </section>
    <section>
      <div>
        <ProductAdvantages />
      </div> 
    </section>
    
  </div>
  )
}









// import React from 'react';
// import { motion } from 'framer-motion';
// import { ShieldCheck, BrainCircuit, MessageSquare, Target, Users, Globe, CheckCircle2 } from 'lucide-react';

// const SoulBondAbout = () => {
//   const fadeInUp = {
//     initial: { opacity: 0, y: 24 },
//     whileInView: { opacity: 1, y: 0 },
//     viewport: { once: true },
//     transition: { duration: 0.8, ease: "easeOut" }
//   };

//   return (
//     <div className="bg-soul-cream font-sans text-soul-deep overflow-x-hidden">
      
//       {/* --- HERO SECTION --- */}
//       <section className="relative min-h-screen flex flex-col justify-center items-center text-center px-6 py-20 overflow-hidden">
//         {/* Animated Background Pulse */}
//         <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_30%,#f2d9cc_0%,#fdf6ee_70%)]" />
//         <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-soul-rose/15 rounded-full animate-pulse" />
        
//         <motion.div 
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           className="relative z-10"
//         >
//           <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-soul-gold/40 bg-soul-gold/15 text-soul-gold text-[11px] font-medium tracking-[2.5px] uppercase mb-9">
//             <span className="w-1.5 h-1.5 bg-soul-gold rounded-full" />
//             Est. 2023 · Mumbai, India
//           </div>
          
//           <h1 className="font-serif text-6xl md:text-8xl lg:text-9xl font-light leading-[1.05] mb-7">
//             Where <span className="italic text-soul-rose">Hearts</span><br />Find Their <span className="italic text-soul-rose">Home</span>
//           </h1>
          
//           <p className="max-w-lg mx-auto text-soul-muted text-lg leading-relaxed font-light mb-12">
//             SoulBond is the first platform built for every kind of love story — whether you're exploring connection, or ready to find your life partner.
//           </p>
          
//           <div className="flex flex-wrap justify-center gap-4">
//             <button className="bg-soul-rose text-white px-9 py-4 rounded-full font-medium hover:bg-soul-deep transition-all hover:-translate-y-1 hover:shadow-xl hover:shadow-soul-rose/30">
//               Find Your Match
//             </button>
//             <button className="border border-soul-deep/20 px-9 py-4 rounded-full font-normal hover:border-soul-rose hover:text-soul-rose transition-all">
//               Learn More ↓
//             </button>
//           </div>
//         </motion.div>
//       </section>

//       {/* --- STATS --- */}
//       <div className="grid grid-cols-1 md:grid-cols-3 border-y border-soul-deep/10">
//         {[
//           { num: "4.2M+", label: "Active Members" },
//           { num: "180K", label: "Couples United" },
//           { num: "98%", label: "Trust & Safety Score" }
//         ].map((stat, i) => (
//           <div key={i} className="bg-soul-cream text-center py-14 px-6 border-soul-deep/10 md:border-r last:border-r-0">
//             <div className="font-serif text-6xl text-soul-rose font-light mb-2">{stat.num}</div>
//             <div className="text-[13px] text-soul-muted tracking-[1.5px] uppercase">{stat.label}</div>
//           </div>
//         ))}
//       </div>

//       {/* --- STORY SECTION --- */}
//       <section className="max-w-6xl mx-auto px-6 py-24">
//         <div className="grid md:grid-cols-2 gap-20 items-center">
//           <motion.div {...fadeInUp} className="space-y-7">
//             <div className="text-[11px] tracking-[3px] uppercase text-soul-gold font-semibold">Our Story</div>
//             <h2 className="font-serif text-5xl md:text-6xl font-normal leading-tight">
//               Born from a <span className="italic text-soul-rose">belief</span> that love deserves options
//             </h2>
//             <div className="space-y-5 text-soul-muted font-light leading-relaxed">
//               <p>In a world of swiping and scrolling, we asked: why should finding a life partner feel so different from finding a first date?</p>
//               <p>SoulBond was built to honour both journeys — the butterflies of early connection, and the grounded certainty of a life-long commitment.</p>
//             </div>
//           </motion.div>

//           <div className="hidden md:block relative h-[480px]">
//              {/* Card Stacks */}
//              <div className="absolute top-0 right-16 w-56 h-72 bg-gradient-to-br from-soul-blush to-soul-rose rounded-[20px] rotate-6 shadow-2xl flex flex-col items-center justify-center text-white p-6 text-center">
//                 <div className="text-4xl mb-3">🌸</div>
//                 <div className="font-serif text-xl font-semibold">Priya, 27</div>
//                 <div className="text-[10px] tracking-widest opacity-80">MUMBAI · DATING</div>
//              </div>
//              <div className="absolute top-20 right-0 w-56 h-72 bg-white border border-soul-rose/20 -rotate-3 shadow-xl flex flex-col items-center justify-center p-6 text-center">
//                 <div className="text-4xl mb-3 bg-soul-rose/10 w-16 h-16 rounded-full flex items-center justify-center">👨‍💼</div>
//                 <div className="font-serif text-xl font-semibold text-soul-deep">Arjun, 31</div>
//                 <div className="text-[10px] tracking-widest text-soul-muted">BENGALURU · OPEN</div>
//              </div>
//           </div>
//         </div>
//       </section>

//       {/* --- FEATURES --- */}
//       <section className="bg-soul-deep py-24 px-6">
//         <div className="max-w-6xl mx-auto">
//           <div className="text-center mb-16">
//             <div className="text-[11px] tracking-[3px] uppercase text-soul-gold font-semibold mb-4">What We Offer</div>
//             <h2 className="font-serif text-5xl md:text-6xl text-soul-cream font-light">Everything you need, <span className="italic text-soul-blush">nothing you don't</span></h2>
//           </div>
          
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-0.5 bg-white/5 border border-white/5">
//             {[
//               { icon: <ShieldCheck />, title: "Verified Profiles", desc: "Every profile goes through rigorous identity and background checks." },
//               { icon: <BrainCircuit />, title: "Smart Compatibility", desc: "Our AI analyses personality, values, and lifestyle—not just appearances." },
//               { icon: <MessageSquare />, title: "Safe Conversations", desc: "AI-moderated chats and photo blur controls give you full authority." },
//               { icon: <Target />, title: "Intention Matching", desc: "Set your pace—casual, serious, or somewhere in between." },
//               { icon: <Users />, title: "Family Integration", desc: "Unique Family Mode lets loved ones participate on your terms." },
//               { icon: <Globe />, title: "Diaspora Network", desc: "Connect across 50+ countries. Your community is here." }
//             ].map((f, i) => (
//               <motion.div 
//                 key={i}
//                 whileHover={{ backgroundColor: "rgba(201,169,110,0.05)" }}
//                 className="bg-soul-deep p-12 transition-colors relative group"
//               >
//                 <div className="text-soul-gold mb-6 group-hover:scale-110 transition-transform duration-300">
//                   {React.cloneElement(f.icon, { size: 32, strokeWidth: 1.5 })}
//                 </div>
//                 <h3 className="font-serif text-2xl text-soul-cream mb-3">{f.title}</h3>
//                 <p className="text-soul-cream/50 text-sm leading-relaxed font-light">{f.desc}</p>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* --- DUAL JOURNEY --- */}
//       <section className="max-w-6xl mx-auto px-6 py-24">
//         <div className="text-center mb-16">
//           <div className="text-[11px] tracking-[3px] uppercase text-soul-gold font-semibold mb-3">Two Journeys, One Platform</div>
//           <h2 className="font-serif text-5xl font-light">Designed for <span className="italic text-soul-rose">every</span> kind of love</h2>
//         </div>

//         <div className="grid md:grid-cols-2 gap-8">
//           {/* Dating Card */}
//           <div className="bg-gradient-to-br from-soul-cream to-soul-soft p-12 rounded-[32px] border border-soul-rose/20">
//             <div className="text-soul-rose text-[11px] tracking-[3px] font-bold mb-5 uppercase">💕 Dating Mode</div>
//             <h3 className="font-serif text-4xl mb-5">Explore connection at your own rhythm</h3>
//             <ul className="space-y-4">
//               {['Swipe & discover nearby', 'Video date before you meet', 'Anonymous browsing mode'].map((li, i) => (
//                 <li key={i} className="flex items-center gap-3 text-sm">
//                   <CheckCircle2 size={18} className="text-soul-rose opacity-50" /> {li}
//                 </li>
//               ))}
//             </ul>
//           </div>

//           {/* Matrimony Card */}
//           <div className="bg-gradient-to-br from-soul-deep to-[#4a2820] p-12 rounded-[32px] text-soul-cream">
//             <div className="text-soul-gold text-[11px] tracking-[3px] font-bold mb-5 uppercase">💍 Matrimony Mode</div>
//             <h3 className="font-serif text-4xl mb-5 text-white">Find the one you'll cherish forever</h3>
//             <ul className="space-y-4">
//               {['Horoscope & kundali matching', 'Family profile & values filter', 'Dowry-free pledge members'].map((li, i) => (
//                 <li key={i} className="flex items-center gap-3 text-sm text-soul-cream/70">
//                   <CheckCircle2 size={18} className="text-soul-gold opacity-50" /> {li}
//                 </li>
//               ))}
//             </ul>
//           </div>
//         </div>
//       </section>

//       {/* --- FINAL CTA --- */}
//       <section className="relative py-32 px-6 bg-soul-deep text-center overflow-hidden">
//         <div className="absolute inset-0 opacity-5 flex items-center justify-center pointer-events-none">
//             <span className="text-[400px]">❤</span>
//         </div>
        
//         <div className="relative z-10 max-w-2xl mx-auto">
//           <div className="text-soul-gold text-[11px] tracking-[3px] font-semibold mb-6">START YOUR STORY</div>
//           <h2 className="font-serif text-6xl md:text-7xl text-soul-cream font-light mb-8 leading-tight">
//             Your person is<br />already <span className="italic text-soul-blush">waiting</span>
//           </h2>
//           <div className="flex flex-wrap justify-center gap-5">
//             <button className="bg-soul-gold text-soul-deep px-12 py-5 rounded-full font-bold hover:bg-soul-cream transition-all hover:-translate-y-1">
//               Create Free Profile
//             </button>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default SoulBondAbout;