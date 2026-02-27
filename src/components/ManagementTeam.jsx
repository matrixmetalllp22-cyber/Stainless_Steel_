import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Users, 
  Award, 
  ChevronRight, 
  X, 
  Building2, 
  Target,
  Sparkles,
  ArrowRight,
  Quote,
  ShieldCheck,
  Cpu,
  Settings
} from "lucide-react";

const leadership = [
  { 
    name: "Mr. Jeeteen Jain", 
    role: "Managing Director", 
    image: "/Images/jeeteen-jain.jpg",
    bio: "Jeeteen Jain is a dynamic and visionary Managing Director whose leadership has been instrumental in shaping Matrix Metals LLP into a high-performance industrial powerhouse. With deep expertise in machinery integration, metal processing technologies, and strategic operations, he leads with precision, conviction, and uncompromising discipline.",
    quote: "Precision in execution defines industrial excellence.",
    strengths: ["Strategic Vision", "Operational Excellence", "Innovation"]
  },
  { 
    name: "Mr. Dinesh Chopra", 
    role: "Managing Director", 
    image: "/Images/dinesh-chopra.jpg",
    bio: "Dinesh Chopra brings strong industrial leadership and decades of market knowledge to Matrix Metals LLP, serving as a pillar of strategic direction, operational stability, and business growth. He combines sharp commercial intelligence with a deep understanding of metal markets.",
    quote: "Sustainable growth comes from disciplined execution.",
    strengths: ["Business Strategy", "Market Intelligence", "Value Creation"]
  },
];

const team = [
  { 
    name: "Priyadarshini", 
    role: "Head of Finance", 
    image: "/Images/person1.jpg",
    bio: "Priyadarshini is a financial strategist with exceptional command over fiscal planning and enterprise-level financial discipline.",
    department: "Finance",
    expertise: ["Financial Strategy", "Risk Management", "Compliance"]
  },
  { 
    name: "Sangram", 
    role: "Production Head", 
    image: "/Images/person2.jpg",
    bio: "A seasoned production leader mastering complex metal processing. He drives high-precision manufacturing with a focus on zero-defect execution.",
    department: "Manufacturing",
    expertise: ["Process Optimization", "Quality Control", "Team Leadership"]
  },
  { 
    name: "Somnath", 
    role: "Logistics Head", 
    image: "/Images/person3.jpg",
    bio: "The backbone of the supply chain, leading with strategic foresight and uncompromising reliability.",
    department: "Supply Chain",
    expertise: ["Supply Chain Management", "Logistics", "Coordination"]
  },
  { 
    name: "Balakumar", 
    role: "Project Development Head", 
    image: "/Images/person4.jpg",
    bio: "Transforms technical requirements into high-performance project frameworks. A key architect of operational success.",
    department: "Project Management",
    expertise: ["Strategic Planning", "Risk Assessment", "Leadership"]
  },
];

export default function ManagementTeam() {
  const [selectedMember, setSelectedMember] = useState(null);
  const [activeTab, setActiveTab] = useState("all");

  const filteredTeam = activeTab === "all" 
    ? team 
    : team.filter(member => member.department.toLowerCase().includes(activeTab.toLowerCase()));

  return (
    <div className="min-h-screen bg-gray-50 overflow-x-hidden">
      {/* --- HERO SECTION --- */}
      <div className="relative overflow-hidden bg-slate-900 py-20 md:py-32">
        <div className="absolute inset-0 opacity-20 pointer-events-none">
          <div className="absolute top-0 left-0 w-64 md:w-96 h-64 md:h-96 bg-blue-500 rounded-full blur-[80px] md:blur-[120px] animate-blob"></div>
          <div className="absolute bottom-0 right-0 w-64 md:w-96 h-64 md:h-96 bg-cyan-500 rounded-full blur-[80px] md:blur-[120px] animate-blob animation-delay-2000"></div>
        </div>

        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-4xl"
          >
            <span className="inline-block px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs md:text-sm font-medium mb-6">
              Industrial Leadership & Engineering
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold text-white mb-6 md:mb-8 leading-tight">
              Meet Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">Leadership & Engineering</span> Team
            </h1>
            <div className="grid md:grid-cols-2 gap-6 md:gap-8 text-gray-400 leading-relaxed text-base md:text-lg">
              <p>
                Matrix Metals LLP is led by a management team grounded in industrial discipline, technical accountability, and long-term strategic vision.
              </p>
              <p>
                Precision must be designed, not inspected. Our operational investment ensures performance standards are institutional.
              </p>
            </div>
          </motion.div>
        </div>
      </div>

      {/* --- LEADERSHIP CARDS --- */}
      <div className="container mx-auto px-4 md:px-6 -mt-10 md:-mt-16 relative z-20 mb-16 md:mb-24">
        <div className="grid lg:grid-cols-2 gap-6 md:gap-8 max-w-6xl mx-auto">
          {leadership.map((leader, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -5 }}
              onClick={() => setSelectedMember({ ...leader, type: "leadership" })}
              className="bg-white rounded-2xl md:rounded-3xl p-6 md:p-8 shadow-xl border border-gray-100 cursor-pointer flex flex-col sm:flex-row gap-6 md:gap-8 items-center sm:items-start"
            >
              <img src={leader.image} alt={leader.name} className="w-32 h-32 md:w-48 md:h-48 rounded-xl md:rounded-2xl object-cover shadow-lg shrink-0" />
              <div className="flex-1 text-center sm:text-left">
                <h3 className="text-xl md:text-2xl font-bold text-gray-900">{leader.name}</h3>
                <p className="text-blue-600 font-semibold mb-4 text-sm md:text-base">{leader.role}</p>
                <div className="relative pl-6 border-l-2 border-blue-100 italic text-gray-600 mb-4 text-sm md:text-base">
                  <Quote className="absolute -left-2 -top-2 w-4 h-4 text-blue-300" />
                  "{leader.quote}"
                </div>
                <div className="flex flex-wrap justify-center sm:justify-start gap-3">
                  {leader.strengths.map(s => (
                    <span key={s} className="text-[10px] md:text-xs font-bold uppercase tracking-wider text-gray-400 border-b border-gray-100 pb-1">{s}</span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* --- GUIDING VISION SECTION --- */}
      <section className="bg-white py-16 md:py-24 border-y border-gray-100">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-start">
              <div className="lg:w-1/3">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                  <ShieldCheck className="text-blue-600 w-8 h-8 md:w-10 md:h-10" />
                  Our Guiding Vision
                </h2>
                <p className="text-gray-500 text-sm md:text-base">
                  Precision, in our framework, is not aspirational—it is engineered through defined operating parameters and repeatable technical controls.
                </p>
              </div>
              <div className="lg:w-2/3 grid sm:grid-cols-2 gap-4 md:gap-8 w-full">
                {[
                  { title: "Industrial Clarity", desc: "We exist to redefine stainless steel processing standards through disciplined methodology." },
                  { title: "System Design", desc: "A manufacturing environment where tolerance deviation is eliminated at source." },
                  { title: "Global Benchmarks", desc: "Our goal is to be the reference organization in stainless steel conversion globally." },
                  { title: "Strategic Alignment", desc: "Long-term partnerships with manufacturers who demand performance certainty." }
                ].map((item, idx) => (
                  <div key={idx} className="p-5 md:p-6 bg-gray-50 rounded-2xl hover:bg-blue-50 transition-colors border border-transparent hover:border-blue-100">
                    <h4 className="font-bold text-gray-900 mb-2 text-sm md:text-base">{item.title}</h4>
                    <p className="text-xs md:text-sm text-gray-600 leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- ENGINEERING TEAM SECTION --- */}
      <div className="container mx-auto px-4 md:px-6 py-16 md:py-24">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 md:mb-6">The Engineering Force</h2>
          <p className="max-w-2xl mx-auto text-gray-600 text-sm md:text-base">
            Specialists in coil processing, surface finishing, and mechanical calibration operating within procedural frameworks.
          </p>
          
          <div className="flex flex-wrap justify-center gap-2 md:gap-4 mt-8 md:mt-10">
            {["all", "Finance", "Manufacturing", "Supply Chain", "Project Management"].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab.toLowerCase())}
                className={`px-4 md:px-6 py-2 rounded-full text-xs md:text-sm font-semibold transition-all whitespace-nowrap ${
                  activeTab === tab.toLowerCase() ? "bg-blue-600 text-white shadow-lg" : "bg-white text-gray-600 border border-gray-200"
                }`}
              >
                {tab === "all" ? "All Divisions" : tab}
              </button>
            ))}
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 max-w-7xl mx-auto">
          {filteredTeam.map((member, i) => (
            <motion.div
              key={i}
              layout
              onClick={() => setSelectedMember({ ...member, type: "team" })}
              className="bg-white rounded-2xl p-4 md:p-6 border border-gray-100 hover:border-blue-200 shadow-sm hover:shadow-xl transition-all cursor-pointer group"
            >
              <div className="overflow-hidden rounded-xl mb-4 h-48 sm:h-56 lg:h-48">
                <img src={member.image} alt={member.name} className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500" />
              </div>
              <h4 className="text-base md:text-lg font-bold text-gray-900">{member.name}</h4>
              <p className="text-blue-600 text-xs md:text-sm font-medium mb-3">{member.role}</p>
              <div className="flex flex-wrap gap-1">
                {member.expertise.map(exp => (
                  <span key={exp} className="text-[9px] md:text-[10px] bg-gray-100 text-gray-500 px-2 py-0.5 rounded">{exp}</span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* --- MODAL --- */}
      <AnimatePresence>
        {selectedMember && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-slate-900/90 backdrop-blur-sm">
            <motion.div 
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="bg-white rounded-2xl md:rounded-3xl max-w-3xl w-full max-h-[90vh] overflow-y-auto shadow-2xl relative"
            >
              <button 
                onClick={() => setSelectedMember(null)} 
                className="absolute top-4 right-4 z-10 p-2 bg-gray-100/80 hover:bg-gray-200 rounded-full transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
              <div className="flex flex-col md:flex-row h-full">
                <div className="md:w-2/5 h-64 md:h-auto shrink-0">
                  <img src={selectedMember.image} className="w-full h-full object-cover" alt="" />
                </div>
                <div className="md:w-3/5 p-6 md:p-10">
                  <span className="text-blue-600 font-bold text-xs md:text-sm uppercase tracking-widest">{selectedMember.role}</span>
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">{selectedMember.name}</h2>
                  <p className="text-gray-600 text-sm md:text-base leading-relaxed mb-6">{selectedMember.bio}</p>
                  <div className="pt-6 border-t border-gray-100">
                    <h5 className="font-bold text-gray-900 mb-3 text-sm md:text-base flex items-center gap-2">
                      <Settings className="w-4 h-4 text-blue-500" />
                      Technical Expertise
                    </h5>
                    <div className="flex flex-wrap gap-2">
                      {(selectedMember.strengths || selectedMember.expertise).map(item => (
                        <span key={item} className="px-3 py-1 bg-blue-50 text-blue-700 rounded-lg text-xs md:text-sm font-medium border border-blue-100">
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      <style jsx>{`
        @keyframes blob {
          0%, 100% { transform: translate(0, 0) scale(1); }
          33% { transform: translate(20px, -30px) scale(1.05); }
          66% { transform: translate(-15px, 15px) scale(0.95); }
        }
        .animate-blob { animation: blob 7s infinite; }
        .animation-delay-2000 { animation-delay: 2s; }
      `}</style>
    </div>
  );
}