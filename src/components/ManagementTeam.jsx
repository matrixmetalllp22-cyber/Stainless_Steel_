// import React, { useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import { 
//   Users, 
//   Award, 
//   ChevronRight, 
//   X, 
//   Building2, 
//   Target,
//   Sparkles,
//   ArrowRight,
//   Quote
// } from "lucide-react";

// const leadership = [
//   { 
//     name: "Mr. Jeeteen Jain", 
//     role: "Managing Director", 
//     image: "/Images/jeeteen-jain.jpg",
//     bio: "Jeeteen Jain is a dynamic and visionary Managing Director whose leadership has been instrumental in shaping Matrix Metals LLP into a high-performance industrial powerhouse. With deep expertise in machinery integration, metal processing technologies, and strategic operations, he leads with precision, conviction, and uncompromising discipline. Jeeteen is known for transforming complex engineering challenges into executable strategies, driving excellence across every vertical of the organization. His aggressive pursuit of quality, innovation, and customer-centric execution has established Matrix Metals as a trusted name in India's advanced metal service sector. Under his stewardship, the company continues to scale aggressively, expand capabilities, and set new standards for operational superiority.",
//     quote: "Precision in execution defines industrial excellence.",
//     strengths: ["Strategic Vision", "Operational Excellence", "Innovation"]
//   },
//   { 
//     name: "Mr. Dinesh Chopra", 
//     role: "Managing Director", 
//     image: "/Images/dinesh-chopra.jpg",
//     bio: "Dinesh Chopra brings strong industrial leadership and decades of market knowledge to Matrix Metals LLP, serving as a pillar of strategic direction, operational stability, and business growth. As Managing Director, he combines sharp commercial intelligence with a deep understanding of metal markets, customer needs, and production realities. His decisions are driven by clarity, discipline, and long-term business vision, enabling the company to establish a dominant presence in the metals ecosystem. Dinesh's leadership is defined by integrity, accountability, and a relentless commitment to delivering value — ensuring that Matrix Metals remains agile, competitive, and future-ready in a rapidly evolving industrial landscape.",
//     quote: "Sustainable growth comes from disciplined execution.",
//     strengths: ["Business Strategy", "Market Intelligence", "Value Creation"]
//   },
// ];

// const team = [
//   { 
//     name: "Priyadarshini", 
//     role: "Head of Finance", 
//     image: "/Images/person1.jpg",
//     bio: "Priyadarshini is a financial strategist with exceptional command over fiscal planning, cost governance, compliance, and enterprise-level financial discipline. As the Finance Head of Matrix Metals LLP, she ensures the organization operates on a foundation of accuracy, transparency, and financial resilience. Her analytical strength and meticulous oversight empower the company to scale responsibly while maintaining strong profitability and risk control. Priyadarshini's leadership brings stability, sharp financial intelligence, and structured processes that support Matrix Metals' aggressive growth strategy and long-term sustainability.",
//     department: "Finance & Administration",
//     expertise: ["Financial Strategy", "Risk Management", "Compliance"]
//   },
//   { 
//     name: "Sangram", 
//     role: "Production Head", 
//     image: "/Images/person2.jpg",
//     bio: "Sangram is a seasoned production leader known for his commanding presence on the shop floor and his mastery over complex metal processing operations. As Production Head, he drives high-precision manufacturing with a strong focus on efficiency, discipline, and zero-defect execution. His ability to manage high-volume workloads, optimize processes, and enforce rigorous quality protocols makes him a cornerstone of the company's operational excellence. Sangram's leadership ensures that every coil processed under Matrix Metals adheres to the highest standards of accuracy, productivity, and industrial reliability.",
//     department: "Manufacturing",
//     expertise: ["Process Optimization", "Quality Control", "Team Leadership"]
//   },
//   { 
//     name: "Somnath", 
//     role: "Logistics Head", 
//     image: "/Images/person3.jpg",
//     bio: "Somnath is the backbone of Matrix Metals LLP's supply chain strength, leading logistics with strategic foresight, operational clarity, and uncompromising reliability. His expertise in material movement, dispatch management, and end-to-end coordination ensures seamless flow across all production cycles. Somnath's ability to maintain speed, accuracy, and system integrity — even under demanding timelines — positions him as a critical force behind the company's consistent on-time deliveries. His structured approach, discipline, and problem-solving capability make him an indispensable leader in sustaining Matrix Metals' high-performance output.",
//     department: "Supply Chain",
//     expertise: ["Supply Chain Management", "Logistics", "Coordination"]
//   },
//   { 
//     name: "Balakumar", 
//     role: "Project Development Head", 
//     image: "/Images/person4.jpg",
//     bio: "Balakumar is a strategic force in project development, known for his sharp analytical mindset, meticulous planning capability, and unwavering execution discipline. He transforms complex technical requirements into structured, high-performance project frameworks that drive measurable results for Matrix Metals LLP. With a rare ability to foresee risks, optimize workflows, and coordinate cross-functional teams with precision, he ensures every project is delivered on time, within scope, and above expectation. Balakumar's leadership in project development strengthens the company's ability to scale rapidly, innovate aggressively, and maintain absolute control over project quality, making him a key architect of Matrix Metals' continued expansion and operational success.",
//     department: "Project Management",
//     expertise: ["Strategic Planning", "Risk Assessment", "Cross-functional Leadership"]
//   },
// ];

// export default function ManagementTeam() {
//   const [selectedMember, setSelectedMember] = useState(null);
//   const [activeTab, setActiveTab] = useState("all");

//   const filteredTeam = activeTab === "all" 
//     ? team 
//     : team.filter(member => 
//         member.department?.toLowerCase().includes(activeTab.toLowerCase())
//       );

//   return (
//     <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
//       {/* Modern Hero Section */}
//       <div className="relative overflow-hidden bg-gradient-to-br from-gray-900 via-blue-900 to-gray-800">
//         {/* Animated background elements */}
//         <div className="absolute inset-0">
//           <div className="absolute top-0 -left-4 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
//           <div className="absolute top-0 -right-4 w-72 h-72 bg-yellow-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
//           <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>
//         </div>

//         <div className="container-custom px-6 py-32 relative z-10">
//           <motion.div
//             initial={{ opacity: 0, y: 30 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8 }}
//             className="max-w-4xl mx-auto text-center"
//           >
//             <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-6">
//               <Users className="w-4 h-4" />
//               <span className="text-sm text-white/90">Exceptional Leadership Team</span>
//             </div>
            
//             <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
//               Meet Our 
//               <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">
//                 Leadership & Team
//               </span>
//             </h1>
            
//             <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed">
//               The brilliant minds and experienced professionals driving innovation, 
//               quality, and operational excellence at Matrix Metals LLP.
//             </p>

//             <div className="flex flex-wrap justify-center gap-4">
//               <div className="flex items-center gap-2 text-white/80">
//                 <div className="w-2 h-2 bg-green-400 rounded-full"></div>
//                 <span>Strategic Visionaries</span>
//               </div>
//               <div className="flex items-center gap-2 text-white/80">
//                 <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
//                 <span>Industry Experts</span>
//               </div>
//               <div className="flex items-center gap-2 text-white/80">
//                 <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
//                 <span>Operational Leaders</span>
//               </div>
//             </div>
//           </motion.div>
//         </div>

//         {/* Scroll indicator */}
//         <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
//           <motion.div
//             animate={{ y: [0, 10, 0] }}
//             transition={{ repeat: Infinity, duration: 2 }}
//             className="text-white"
//           >
//             <ChevronRight className="w-6 h-6 rotate-90" />
//           </motion.div>
//         </div>
//       </div>

//       {/* Leadership Section - Modern Cards */}
//       <div className="container-custom px-6 py-24">
//         <div className="text-center mb-16">
//           <div className="inline-flex items-center gap-2 text-blue-600 mb-4">
//             <Sparkles className="w-5 h-5" />
//             <span className="font-semibold">Leadership Board</span>
//           </div>
//           <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
//             Guiding Vision
//           </h2>
//           <p className="text-gray-600 max-w-2xl mx-auto text-lg">
//             Our Managing Directors combine decades of industry expertise with 
//             forward-thinking leadership to drive sustainable growth and innovation.
//           </p>
//         </div>

//         <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
//           {leadership.map((leader, i) => (
//             <motion.div
//               key={i}
//               initial={{ opacity: 0, y: 40 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.6, delay: i * 0.2 }}
//               viewport={{ once: true }}
//               whileHover={{ y: -8 }}
//               onClick={() => setSelectedMember({ ...leader, type: "leadership" })}
//               className="group cursor-pointer"
//             >
//               <div className="bg-white rounded-3xl overflow-hidden border border-gray-200 hover:border-blue-300 transition-all duration-300 shadow-lg hover:shadow-2xl">
//                 <div className="relative">
//                   {/* Image with gradient overlay */}
//                   <div className="relative h-80 overflow-hidden">
//                     <img
//                       src={leader.image}
//                       alt={leader.name}
//                       className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
//                     />
//                     <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                    
//                     {/* Role badge */}
//                     <div className="absolute top-6 left-6">
//                       <div className="px-4 py-2 bg-white/90 backdrop-blur-sm rounded-full">
//                         <span className="font-semibold text-gray-900">{leader.role}</span>
//                       </div>
//                     </div>
//                   </div>

//                   {/* Content */}
//                   <div className="p-8">
//                     <div className="flex items-start justify-between mb-4">
//                       <div>
//                         <h3 className="text-2xl font-bold text-gray-900 mb-2">
//                           {leader.name}
//                         </h3>
//                         <div className="flex flex-wrap gap-2 mb-6">
//                           {leader.strengths.map((strength, idx) => (
//                             <span
//                               key={idx}
//                               className="px-3 py-1 bg-blue-50 text-blue-600 rounded-full text-sm font-medium"
//                             >
//                               {strength}
//                             </span>
//                           ))}
//                         </div>
//                       </div>
//                       <div className="p-3 rounded-full bg-blue-50 text-blue-600 group-hover:bg-blue-100 transition-colors">
//                         <ArrowRight className="w-5 h-5" />
//                       </div>
//                     </div>

//                     {/* Quote */}
//                     <div className="relative pl-6 border-l-2 border-blue-400 mb-6">
//                       <Quote className="absolute -left-3 top-0 w-6 h-6 text-blue-400 bg-white" />
//                       <p className="text-gray-600 italic">
//                         "{leader.quote}"
//                       </p>
//                     </div>

//                     {/* Bio preview */}
//                     <p className="text-gray-600 line-clamp-3">
//                       {leader.bio.substring(0, 200)}...
//                     </p>

//                     <div className="mt-6 pt-6 border-t border-gray-100 flex items-center justify-between">
//                       <span className="text-sm text-gray-500">
//                         Click to view full profile
//                       </span>
//                       <motion.div
//                         animate={{ x: [0, 5, 0] }}
//                         transition={{ repeat: Infinity, duration: 2 }}
//                         className="text-blue-600"
//                       >
//                         <ChevronRight className="w-5 h-5" />
//                       </motion.div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </motion.div>
//           ))}
//         </div>
//       </div>

//       {/* Team Section with Filter */}
//       <div className="container-custom px-6 pb-32">
//         <div className="text-center mb-12">
//           <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
//             Core Team
//           </h2>
//           <p className="text-gray-600 max-w-2xl mx-auto text-lg mb-8">
//             Our dedicated team of experts across various departments, 
//             working together to deliver excellence in every aspect of our operations.
//           </p>
          
//           {/* Filter Tabs */}
//           <div className="flex flex-wrap justify-center gap-3 mb-12">
//             {["all", "Finance", "Manufacturing", "Supply Chain", "Project Management"].map((tab) => (
//               <button
//                 key={tab}
//                 onClick={() => setActiveTab(tab.toLowerCase())}
//                 className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
//                   activeTab === tab.toLowerCase()
//                     ? "bg-blue-600 text-white shadow-lg"
//                     : "bg-white text-gray-700 hover:bg-gray-100 border border-gray-200"
//                 }`}
//               >
//                 {tab === "all" ? "All Departments" : tab}
//               </button>
//             ))}
//           </div>
//         </div>

//         {/* Team Grid */}
//         <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
//           {filteredTeam.map((member, i) => (
//             <motion.div
//               key={i}
//               initial={{ opacity: 0, scale: 0.9 }}
//               whileInView={{ opacity: 1, scale: 1 }}
//               transition={{ duration: 0.5, delay: i * 0.1 }}
//               viewport={{ once: true }}
//               whileHover={{ y: -5 }}
//               onClick={() => setSelectedMember({ ...member, type: "team" })}
//               className="group cursor-pointer"
//             >
//               {/* Card with 3D effect */}
//               <div className="relative h-full bg-gradient-to-br from-white to-gray-50 rounded-2xl overflow-hidden border border-gray-200 hover:border-blue-300 transition-all duration-500 shadow-lg hover:shadow-xl">
//                 {/* Decorative corner */}
//                 <div className="absolute top-0 right-0 w-16 h-16">
//                   <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-br from-blue-500 to-cyan-400 transform rotate-45 translate-x-8 -translate-y-8"></div>
//                 </div>

//                 <div className="p-6">
//                   {/* Avatar */}
//                   <div className="relative mb-6">
//                     <div className="relative w-32 h-32 mx-auto">
//                       <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-cyan-400 rounded-2xl transform rotate-6"></div>
//                       <img
//                         src={member.image}
//                         alt={member.name}
//                         className="relative w-full h-full object-cover rounded-2xl border-4 border-white shadow-lg group-hover:scale-105 transition-transform duration-500"
//                       />
//                     </div>
//                   </div>

//                   {/* Content */}
//                   <div className="text-center mb-6">
//                     <h4 className="text-xl font-bold text-gray-900 mb-2">
//                       {member.name}
//                     </h4>
//                     <p className="text-blue-600 font-semibold mb-3">
//                       {member.role}
//                     </p>
//                     <div className="inline-block px-4 py-1 bg-gray-100 text-gray-600 rounded-full text-sm">
//                       {member.department}
//                     </div>
//                   </div>

//                   {/* Expertise Tags */}
//                   <div className="flex flex-wrap gap-2 justify-center mb-6">
//                     {member.expertise.slice(0, 2).map((skill, idx) => (
//                       <span
//                         key={idx}
//                         className="px-3 py-1 bg-blue-50 text-blue-600 rounded-full text-xs font-medium"
//                       >
//                         {skill}
//                       </span>
//                     ))}
//                   </div>

//                   {/* Hover indicator */}
//                   <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
//                     <div className="flex items-center justify-center gap-2 text-blue-600 font-medium">
//                       <span>View Profile</span>
//                       <ArrowRight className="w-4 h-4" />
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </motion.div>
//           ))}
//         </div>
//       </div>

//       {/* Stats Section */}
//       <div className="bg-gradient-to-r from-gray-900 to-blue-900 text-white py-20">
//         <div className="container-custom px-6">
//           <div className="grid md:grid-cols-4 gap-8 text-center">
//             {[
//               { value: "100+", label: "Years Combined Experience" },
//               { value: "24/7", label: "Operational Excellence" },
//               { value: "99.8%", label: "Quality Standards" },
//               { value: "∞", label: "Innovation Drive" }
//             ].map((stat, i) => (
//               <motion.div
//                 key={i}
//                 initial={{ opacity: 0, y: 20 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 transition={{ delay: i * 0.1 }}
//                 viewport={{ once: true }}
//                 className="group"
//               >
//                 <div className="text-4xl md:text-5xl font-bold mb-2 group-hover:text-cyan-400 transition-colors">
//                   {stat.value}
//                 </div>
//                 <div className="text-gray-300">{stat.label}</div>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </div>

//       {/* Enhanced Modal */}
//       <AnimatePresence>
//         {selectedMember && (
//           <motion.div
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             exit={{ opacity: 0 }}
//             className="fixed inset-0 z-50 flex items-center justify-center p-4"
//           >
//             {/* Backdrop */}
//             <motion.div
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               exit={{ opacity: 0 }}
//               className="absolute inset-0 bg-black/60 backdrop-blur-sm"
//               onClick={() => setSelectedMember(null)}
//             />

//             {/* Modal Content */}
//             <motion.div
//               initial={{ opacity: 0, scale: 0.9, y: 20 }}
//               animate={{ opacity: 1, scale: 1, y: 0 }}
//               exit={{ opacity: 0, scale: 0.9, y: 20 }}
//               className="relative bg-white rounded-3xl overflow-hidden w-full max-w-4xl max-h-[90vh] overflow-y-auto shadow-2xl"
//             >
//               <div className="relative">
//                 {/* Header Image */}
//                 <div className="relative h-64 bg-gradient-to-r from-blue-600 to-cyan-500">
//                   <img
//                     src={selectedMember.image}
//                     alt={selectedMember.name}
//                     className="w-48 h-48 rounded-2xl border-8 border-white shadow-2xl absolute -bottom-16 left-8 object-cover"
//                   />
//                 </div>

//                 {/* Close Button */}
//                 <button
//                   onClick={() => setSelectedMember(null)}
//                   className="absolute top-6 right-6 w-12 h-12 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center text-gray-700 hover:text-gray-900 hover:bg-white transition-all shadow-lg"
//                 >
//                   <X className="w-6 h-6" />
//                 </button>

//                 {/* Content */}
//                 <div className="pt-20 pb-8 px-8">
//                   {/* <div className="mb-8">
//                     <h2 className="text-3xl font-bold text-gray-900 mb-2">
//                       {selectedMember.name}
//                     </h2>
//                     <div className="flex flex-wrap items-center gap-4">
//                       <p className="text-xl text-blue-600 font-semibold">
//                         {selectedMember.role}
//                       </p>
//                       <div className="px-4 py-1 bg-blue-50 text-blue-600 rounded-full text-sm font-medium">
//                         {selectedMember.type === "leadership" ? "Leadership Board" : "Core Team"}
//                       </div>
//                     </div>
//                   </div> */}

//                   {/* Quote for leadership */}
//                   {selectedMember.quote && (
//                     <div className="relative p-6 bg-gradient-to-r from-blue-50 to-cyan-50 rounded-2xl mb-8">
//                       <Quote className="absolute top-4 left-4 w-8 h-8 text-blue-400" />
//                       <p className="text-lg text-gray-700 italic pl-8">
//                         "{selectedMember.quote}"
//                       </p>
//                     </div>
//                   )}

//                   {/* Department for team */}
//                   {selectedMember.department && (
//                     <div className="mb-8">
//                       <div className="flex items-center gap-2 text-gray-600 mb-3">
//                         <Building2 className="w-5 h-5" />
//                         <span className="font-medium">Department</span>
//                       </div>
//                       <div className="px-4 py-3 bg-gray-50 rounded-xl inline-block">
//                         <span className="font-semibold text-gray-900">{selectedMember.department}</span>
//                       </div>
//                     </div>
//                   )}

//                   {/* Strengths/Expertise */}
//                   <div className="mb-8">
//                     <div className="flex items-center gap-2 text-gray-600 mb-4">
//                       <Target className="w-5 h-5" />
//                       <span className="font-medium">
//                         {selectedMember.type === "leadership" ? "Key Strengths" : "Areas of Expertise"}
//                       </span>
//                     </div>
//                     <div className="flex flex-wrap gap-3">
//                       {(selectedMember.strengths || selectedMember.expertise || []).map((item, i) => (
//                         <span
//                           key={i}
//                           className="px-4 py-2 bg-gradient-to-r from-blue-50 to-cyan-50 text-blue-700 rounded-full font-medium"
//                         >
//                           {item}
//                         </span>
//                       ))}
//                     </div>
//                   </div>

//                   {/* Bio */}
//                   <div className="mb-8">
//                     <h3 className="text-xl font-bold text-gray-900 mb-4">Profile Overview</h3>
//                     <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed">
//                       <p>{selectedMember.bio}</p>
//                     </div>
//                   </div>

//                   {/* Action Buttons */}
//                   {/* <div className="flex gap-4 pt-6 border-t border-gray-200">
//                     <button
//                       onClick={() => setSelectedMember(null)}
//                       className="flex-1 px-6 py-3 bg-gray-100 hover:bg-gray-200 text-gray-800 font-semibold rounded-xl transition-colors"
//                     >
//                       Close Profile
//                     </button>
//                     <button className="flex-1 px-6 py-3 bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 text-white font-semibold rounded-xl transition-all shadow-lg hover:shadow-xl">
//                       Connect
//                     </button>
//                   </div> */}
//                 </div>
//               </div>
//             </motion.div>
//           </motion.div>
//         )}
//       </AnimatePresence>

//       {/* Floating CTA */}
//       <div className="fixed bottom-8 right-8 z-40">
//         <motion.button
//           initial={{ scale: 0 }}
//           animate={{ scale: 1 }}
//           transition={{ delay: 1 }}
//           whileHover={{ scale: 1.1 }}
//           whileTap={{ scale: 0.95 }}
//           className="w-14 h-14 rounded-full bg-gradient-to-r from-blue-600 to-cyan-500 text-white shadow-2xl flex items-center justify-center hover:shadow-3xl transition-all"
//         >
//           <Users className="w-6 h-6" />
//         </motion.button>
//       </div>

//       <style jsx>{`
//         @keyframes blob {
//           0% { transform: translate(0px, 0px) scale(1); }
//           33% { transform: translate(30px, -50px) scale(1.1); }
//           66% { transform: translate(-20px, 20px) scale(0.9); }
//           100% { transform: translate(0px, 0px) scale(1); }
//         }
//         .animate-blob {
//           animation: blob 7s infinite;
//         }
//         .animation-delay-2000 {
//           animation-delay: 2s;
//         }
//         .animation-delay-4000 {
//           animation-delay: 4s;
//         }
//       `}</style>
//     </div>
//   );
// }












// import React, { useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import { 
//   Users, 
//   Award, 
//   ChevronRight, 
//   X, 
//   Building2, 
//   Target,
//   Sparkles,
//   ArrowRight,
//   Quote,
//   ShieldCheck,
//   Zap,
//   Globe,
//   Settings
// } from "lucide-react";

// // ... [leadership and team data arrays remain the same as your provided code] ...
// const leadership = [
//   { 
//     name: "Mr. Jeeteen Jain", 
//     role: "Managing Director", 
//     image: "/Images/jeeteen-jain.jpg",
//     bio: "Jeeteen Jain is a dynamic and visionary Managing Director whose leadership has been instrumental in shaping Matrix Metals LLP into a high-performance industrial powerhouse...",
//     quote: "Precision in execution defines industrial excellence.",
//     strengths: ["Strategic Vision", "Operational Excellence", "Innovation"]
//   },
//   { 
//     name: "Mr. Dinesh Chopra", 
//     role: "Managing Director", 
//     image: "/Images/dinesh-chopra.jpg",
//     bio: "Dinesh Chopra brings strong industrial leadership and decades of market knowledge to Matrix Metals LLP...",
//     quote: "Sustainable growth comes from disciplined execution.",
//     strengths: ["Business Strategy", "Market Intelligence", "Value Creation"]
//   },
// ];

// const team = [
//   { 
//     name: "Priyadarshini", 
//     role: "Head of Finance", 
//     image: "/Images/person1.jpg",
//     bio: "Priyadarshini is a financial strategist with exceptional command over fiscal planning...",
//     department: "Finance & Administration",
//     expertise: ["Financial Strategy", "Risk Management", "Compliance"]
//   },
//   { 
//     name: "Sangram", 
//     role: "Production Head", 
//     image: "/Images/person2.jpg",
//     bio: "Sangram is a seasoned production leader known for his commanding presence on the shop floor...",
//     department: "Manufacturing",
//     expertise: ["Process Optimization", "Quality Control", "Team Leadership"]
//   },
//   { 
//     name: "Somnath", 
//     role: "Logistics Head", 
//     image: "/Images/person3.jpg",
//     bio: "Somnath is the backbone of Matrix Metals LLP's supply chain strength...",
//     department: "Supply Chain",
//     expertise: ["Supply Chain Management", "Logistics", "Coordination"]
//   },
//   { 
//     name: "Balakumar", 
//     role: "Project Development Head", 
//     image: "/Images/person4.jpg",
//     bio: "Balakumar is a strategic force in project development...",
//     department: "Project Management",
//     expertise: ["Strategic Planning", "Risk Assessment", "Cross-functional Leadership"]
//   },
// ];

// export default function ManagementTeam() {
//   const [selectedMember, setSelectedMember] = useState(null);
//   const [activeTab, setActiveTab] = useState("all");

//   const filteredTeam = activeTab === "all" 
//     ? team 
//     : team.filter(member => 
//         member.department?.toLowerCase().includes(activeTab.toLowerCase())
//       );

//   return (
//     <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
//       {/* 1. Hero Section */}
//       <div className="relative overflow-hidden bg-gradient-to-br from-gray-900 via-blue-900 to-gray-800">
//         <div className="absolute inset-0">
//           <div className="absolute top-0 -left-4 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
//           <div className="absolute top-0 -right-4 w-72 h-72 bg-yellow-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
//           <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>
//         </div>

//         <div className="container-custom px-6 py-32 relative z-10">
//           <motion.div
//             initial={{ opacity: 0, y: 30 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8 }}
//             className="max-w-4xl mx-auto text-center"
//           >
//             <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-6">
//               <Users className="w-4 h-4 text-cyan-400" />
//               <span className="text-sm text-white/90">Institutional Excellence</span>
//             </div>
            
//             <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
//               Our Leadership & <br/>
//               <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">
//                 Engineering Force
//               </span>
//             </h1>
            
//             <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
//               Matrix Metals LLP is led by a management team grounded in industrial discipline, 
//               technical accountability, and long-term strategic vision.
//             </p>
//           </motion.div>
//         </div>
//       </div>

//       {/* 2. Philosophy & Vision Section (NEW) */}
//       <div className="py-24 bg-white border-b border-gray-100">
//         <div className="container-custom px-6">
//           <div className="grid lg:grid-cols-2 gap-16 items-start">
//             <motion.div 
//               initial={{ opacity: 0, x: -30 }}
//               whileInView={{ opacity: 1, x: 0 }}
//               viewport={{ once: true }}
//               className="space-y-6"
//             >
//               <h2 className="text-3xl font-bold text-gray-900 flex items-center gap-3">
//                 <Settings className="text-blue-600 w-8 h-8" />
//                 Operational Philosophy
//               </h2>
//               <div className="prose prose-blue text-gray-600 leading-relaxed">
//                 <p>
//                   Our leadership does not operate at a distance from production—it is directly aligned with process architecture, operational governance, and engineering refinement. Decisions are guided by measurable parameters, structured planning, and performance transparency.
//                 </p>
//                 <p>
//                   Our executive direction is built upon a clear philosophy: <strong>precision must be designed, not inspected.</strong> Every operational investment and process calibration reflects this conviction. The team functions as a unified system—eliminating variability and reinforcing execution discipline at every stage.
//                 </p>
//               </div>
//             </motion.div>

//             <motion.div 
//               initial={{ opacity: 0, x: 30 }}
//               whileInView={{ opacity: 1, x: 0 }}
//               viewport={{ once: true }}
//               className="bg-gray-50 p-8 rounded-3xl border border-gray-200 relative"
//             >
//               <div className="absolute -top-4 -right-4 bg-blue-600 text-white p-4 rounded-2xl shadow-lg">
//                 <Target className="w-6 h-6" />
//               </div>
//               <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Guiding Vision</h2>
//               <p className="text-gray-700 italic mb-6 text-lg border-l-4 border-blue-600 pl-4">
//                 "We exist to redefine stainless steel processing standards through disciplined methodology and calibrated execution."
//               </p>
//               <p className="text-gray-600 leading-relaxed">
//                 Our vision extends beyond transactional supply. We aim to become a reference organization in stainless steel finishing across India and international markets, integrating advanced surface treatment technologies and automation-driven validation systems.
//               </p>
//             </motion.div>
//           </div>
//         </div>
//       </div>

//       {/* 3. Leadership Section */}
//       <div className="container-custom px-6 py-24">
//         <div className="text-center mb-16">
//           <div className="inline-flex items-center gap-2 text-blue-600 mb-4">
//             <Sparkles className="w-5 h-5" />
//             <span className="font-semibold uppercase tracking-wider text-sm">The Board</span>
//           </div>
//           <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Executive Direction</h2>
//         </div>

//         <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
//           {leadership.map((leader, i) => (
//             <motion.div
//               key={i}
//               initial={{ opacity: 0, y: 40 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.6, delay: i * 0.2 }}
//               viewport={{ once: true }}
//               whileHover={{ y: -8 }}
//               onClick={() => setSelectedMember({ ...leader, type: "leadership" })}
//               className="group cursor-pointer"
//             >
//               <div className="bg-white rounded-3xl overflow-hidden border border-gray-200 hover:border-blue-300 transition-all duration-300 shadow-lg hover:shadow-2xl">
//                 <div className="relative h-80 overflow-hidden">
//                   <img src={leader.image} alt={leader.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
//                   <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
//                   <div className="absolute top-6 left-6">
//                     <div className="px-4 py-2 bg-white/90 backdrop-blur-sm rounded-full">
//                       <span className="font-semibold text-gray-900">{leader.role}</span>
//                     </div>
//                   </div>
//                 </div>
//                 <div className="p-8">
//                   <div className="flex items-start justify-between mb-4">
//                     <h3 className="text-2xl font-bold text-gray-900">{leader.name}</h3>
//                     <div className="p-3 rounded-full bg-blue-50 text-blue-600 group-hover:bg-blue-100 transition-colors">
//                       <ArrowRight className="w-5 h-5" />
//                     </div>
//                   </div>
//                   <div className="relative pl-6 border-l-2 border-blue-400 mb-6 italic text-gray-600">
//                     <Quote className="absolute -left-3 top-0 w-6 h-6 text-blue-400 bg-white" />
//                     "{leader.quote}"
//                   </div>
//                   <p className="text-gray-600 line-clamp-2">{leader.bio}</p>
//                 </div>
//               </div>
//             </motion.div>
//           ))}
//         </div>
//       </div>

//       {/* 4. Team Section */}
//       <div className="container-custom px-6 pb-24">
//         <div className="text-center mb-12">
//           <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Core Team</h2>
//           <div className="flex flex-wrap justify-center gap-3 mt-8">
//             {["all", "Finance", "Manufacturing", "Supply Chain", "Project Management"].map((tab) => (
//               <button
//                 key={tab}
//                 onClick={() => setActiveTab(tab.toLowerCase())}
//                 className={`px-6 py-2 rounded-full font-medium transition-all ${
//                   activeTab === tab.toLowerCase() ? "bg-blue-600 text-white shadow-lg" : "bg-white text-gray-700 border border-gray-200 hover:bg-gray-50"
//                 }`}
//               >
//                 {tab === "all" ? "All" : tab}
//               </button>
//             ))}
//           </div>
//         </div>

//         <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
//           {filteredTeam.map((member, i) => (
//             <motion.div
//               key={i}
//               initial={{ opacity: 0, scale: 0.9 }}
//               whileInView={{ opacity: 1, scale: 1 }}
//               whileHover={{ y: -5 }}
//               onClick={() => setSelectedMember({ ...member, type: "team" })}
//               className="group cursor-pointer bg-white p-6 rounded-2xl border border-gray-200 shadow-sm hover:shadow-xl transition-all"
//             >
//               <div className="w-32 h-32 mx-auto mb-6 relative">
//                 <div className="absolute inset-0 bg-blue-100 rounded-2xl rotate-6 group-hover:rotate-12 transition-transform"></div>
//                 <img src={member.image} alt={member.name} className="relative w-full h-full object-cover rounded-2xl border-2 border-white shadow-md" />
//               </div>
//               <div className="text-center">
//                 <h4 className="text-lg font-bold text-gray-900">{member.name}</h4>
//                 <p className="text-blue-600 text-sm font-semibold mb-2">{member.role}</p>
//                 <span className="text-xs text-gray-500 uppercase tracking-widest">{member.department}</span>
//               </div>
//             </motion.div>
//           ))}
//         </div>
//       </div>

//       {/* 5. Product Advantages Section (NEW) */}
//       {/* <div className="bg-gray-900 py-24 text-white overflow-hidden relative">
//         <div className="container-custom px-6 relative z-10">
//           <div className="max-w-4xl mx-auto text-center mb-16">
//             <h2 className="text-4xl font-bold mb-6">Our Product Advantages</h2>
//             <p className="text-gray-400 text-lg">
//               Engineered for performance, longevity, and environmental responsibility. Every processed coil reflects calibrated precision.
//             </p>
//           </div>

//           <div className="grid md:grid-cols-3 gap-8">
//             <div className="bg-white/5 backdrop-blur-sm p-8 rounded-3xl border border-white/10">
//               <ShieldCheck className="w-12 h-12 text-cyan-400 mb-6" />
//               <h3 className="text-xl font-bold mb-4">Make in India</h3>
//               <p className="text-gray-400 text-sm leading-relaxed">
//                 By localizing precision conversion and surface engineering, we ensure international-grade standards within India’s industrial ecosystem, reducing dependency on external processing.
//               </p>
//             </div>
//             <div className="bg-white/5 backdrop-blur-sm p-8 rounded-3xl border border-white/10">
//               <Zap className="w-12 h-12 text-yellow-400 mb-6" />
//               <h3 className="text-xl font-bold mb-4">Material Efficiency</h3>
//               <p className="text-gray-400 text-sm leading-relaxed">
//                 Our coil-to-coil finishing and UV conditioning systems are designed with controlled resource utilization and optimized material efficiency to support national manufacturing growth.
//               </p>
//             </div>
//             <div className="bg-white/5 backdrop-blur-sm p-8 rounded-3xl border border-white/10">
//               <Globe className="w-12 h-12 text-blue-400 mb-6" />
//               <h3 className="text-xl font-bold mb-4">Sustainability</h3>
//               <p className="text-gray-400 text-sm leading-relaxed">
//                 Sustainability is embedded in our philosophy. Scrap minimization, energy-conscious equipment, and process stability collectively reduce environmental impact.
//               </p>
//             </div>
//           </div>
//         </div>
//       </div> */}

//       {/* Stats Section & Modal (keep your existing logic here) */}
//       {/* ... [Rest of your stats and modal code] ... */}
      
//       <AnimatePresence>
//         {selectedMember && (
//           // Use your existing Modal code here...
//           <motion.div className="fixed inset-0 z-50 flex items-center justify-center p-4">
//              {/* ... [Existing Modal Content] ... */}
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </div>
//   );
// }



























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
    bio: "Jeeteen Jain is a dynamic and visionary Managing Director whose leadership has been instrumental in shaping Matrix Metals LLP into a high-performance industrial powerhouse. With deep expertise in machinery integration, metal processing technologies, and strategic operations, he leads with precision, conviction, and uncompromising discipline. Jeeteen is known for transforming complex engineering challenges into executable strategies, driving excellence across every vertical of the organization.",
    quote: "Precision in execution defines industrial excellence.",
    strengths: ["Strategic Vision", "Operational Excellence", "Innovation"]
  },
  { 
    name: "Mr. Dinesh Chopra", 
    role: "Managing Director", 
    image: "/Images/dinesh-chopra.jpg",
    bio: "Dinesh Chopra brings strong industrial leadership and decades of market knowledge to Matrix Metals LLP, serving as a pillar of strategic direction, operational stability, and business growth. As Managing Director, he combines sharp commercial intelligence with a deep understanding of metal markets, customer needs, and production realities. His decisions are driven by clarity, discipline, and long-term business vision.",
    quote: "Sustainable growth comes from disciplined execution.",
    strengths: ["Business Strategy", "Market Intelligence", "Value Creation"]
  },
];

const team = [
  { 
    name: "Priyadarshini", 
    role: "Head of Finance", 
    image: "/Images/person1.jpg",
    bio: "Priyadarshini is a financial strategist with exceptional command over fiscal planning and enterprise-level financial discipline. She ensures the organization operates on a foundation of accuracy and financial resilience.",
    department: "Finance",
    expertise: ["Financial Strategy", "Risk Management", "Compliance"]
  },
  { 
    name: "Sangram", 
    role: "Production Head", 
    image: "/Images/person2.jpg",
    bio: "A seasoned production leader mastering complex metal processing. He drives high-precision manufacturing with a focus on efficiency and zero-defect execution.",
    department: "Manufacturing",
    expertise: ["Process Optimization", "Quality Control", "Team Leadership"]
  },
  { 
    name: "Somnath", 
    role: "Logistics Head", 
    image: "/Images/person3.jpg",
    bio: "The backbone of the supply chain, leading with strategic foresight and uncompromising reliability to ensure seamless flow across production cycles.",
    department: "Supply Chain",
    expertise: ["Supply Chain Management", "Logistics", "Coordination"]
  },
  { 
    name: "Balakumar", 
    role: "Project Development Head", 
    image: "/Images/person4.jpg",
    bio: "Transforms technical requirements into high-performance project frameworks. A key architect of the company's expansion and operational success.",
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
    <div className="min-h-screen bg-gray-50">
      {/* --- HERO SECTION --- */}
      <div className="relative overflow-hidden bg-slate-900 py-32">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 left-0 w-96 h-96 bg-blue-500 rounded-full blur-[120px] animate-blob"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-cyan-500 rounded-full blur-[120px] animate-blob animation-delay-2000"></div>
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-4xl"
          >
            <span className="inline-block px-4 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-medium mb-6">
              Industrial Leadership & Engineering
            </span>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-8 leading-tight">
              Meet Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">Leadership & Engineering</span> Team
            </h1>
            <div className="grid md:grid-cols-2 gap-8 text-gray-400 leading-relaxed text-lg">
              <p>
                Matrix Metals LLP is led by a management team grounded in industrial discipline, technical accountability, and long-term strategic vision. Our leadership does not operate at a distance—it is directly aligned with process architecture and engineering refinement.
              </p>
              <p>
                Precision must be designed, not inspected. Every operational investment reflects this conviction, ensuring performance standards are institutional rather than individual.
              </p>
            </div>
          </motion.div>
        </div>
      </div>

      {/* --- LEADERSHIP CARDS --- */}
      <div className="container mx-auto px-6 -mt-16 relative z-20 mb-24">
        <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {leadership.map((leader, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -10 }}
              onClick={() => setSelectedMember({ ...leader, type: "leadership" })}
              className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100 cursor-pointer flex flex-col md:flex-row gap-8 items-center"
            >
              <img src={leader.image} alt={leader.name} className="w-48 h-48 rounded-2xl object-cover shadow-lg" />
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-gray-900">{leader.name}</h3>
                <p className="text-blue-600 font-semibold mb-4">{leader.role}</p>
                <div className="relative pl-6 border-l-2 border-blue-100 italic text-gray-600 mb-4">
                  <Quote className="absolute -left-2 -top-2 w-4 h-4 text-blue-300" />
                  "{leader.quote}"
                </div>
                <div className="flex gap-2">
                  {leader.strengths.map(s => (
                    <span key={s} className="text-xs font-bold uppercase tracking-wider text-gray-400">{s}</span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* --- GUIDING VISION SECTION (NEW CONTENT) --- */}
      <section className="bg-white py-24 border-y border-gray-100">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-col md:flex-row gap-16 items-start">
              <div className="md:w-1/3">
                <h2 className="text-4xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                  <ShieldCheck className="text-blue-600 w-10 h-10" />
                  Our Guiding Vision
                </h2>
                <p className="text-gray-500">
                  Precision, in our framework, is not aspirational—it is engineered through defined operating parameters and repeatable technical controls.
                </p>
              </div>
              <div className="md:w-2/3 grid sm:grid-cols-2 gap-8">
                <div className="p-6 bg-gray-50 rounded-2xl">
                  <h4 className="font-bold text-gray-900 mb-2">Industrial Clarity</h4>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    We exist to redefine stainless steel processing standards through disciplined methodology and calibrated execution.
                  </p>
                </div>
                <div className="p-6 bg-gray-50 rounded-2xl">
                  <h4 className="font-bold text-gray-900 mb-2">System Design</h4>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    A manufacturing environment where tolerance deviation is eliminated at source and surface integrity is preserved by design.
                  </p>
                </div>
                <div className="p-6 bg-gray-50 rounded-2xl">
                  <h4 className="font-bold text-gray-900 mb-2">Global Benchmarks</h4>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    Our goal is to be the reference organization in stainless steel conversion across India and international markets.
                  </p>
                </div>
                <div className="p-6 bg-gray-50 rounded-2xl">
                  <h4 className="font-bold text-gray-900 mb-2">Strategic Alignment</h4>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    We focus on long-term partnerships with manufacturers who demand performance certainty and operational integrity.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- ENGINEERING TEAM SECTION --- */}
      <div className="container mx-auto px-6 py-24">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">The Engineering Force</h2>
          <p className="max-w-3xl mx-auto text-gray-600">
            Our engineering team comprises specialists in coil processing, surface finishing, and mechanical calibration. They operate within defined procedural frameworks to guarantee repeatability and industrial consistency.
          </p>
          
          <div className="flex flex-wrap justify-center gap-4 mt-10">
            {["all", "Finance", "Manufacturing", "Supply Chain", "Project Management"].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab.toLowerCase())}
                className={`px-6 py-2 rounded-full text-sm font-semibold transition-all ${
                  activeTab === tab.toLowerCase() ? "bg-blue-600 text-white shadow-lg" : "bg-white text-gray-600 border border-gray-200"
                }`}
              >
                {tab === "all" ? "All Divisions" : tab}
              </button>
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {filteredTeam.map((member, i) => (
            <motion.div
              key={i}
              layout
              onClick={() => setSelectedMember({ ...member, type: "team" })}
              className="bg-white rounded-2xl p-6 border border-gray-100 hover:border-blue-200 shadow-sm hover:shadow-xl transition-all cursor-pointer group"
            >
              <img src={member.image} alt={member.name} className="w-full h-48 object-cover rounded-xl mb-4 grayscale group-hover:grayscale-0 transition-all" />
              <h4 className="text-lg font-bold text-gray-900">{member.name}</h4>
              <p className="text-blue-600 text-sm font-medium mb-3">{member.role}</p>
              <div className="flex flex-wrap gap-1">
                {member.expertise.map(exp => (
                  <span key={exp} className="text-[10px] bg-gray-100 text-gray-500 px-2 py-0.5 rounded">{exp}</span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* --- MODAL --- */}
      <AnimatePresence>
        {selectedMember && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/80 backdrop-blur-md">
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="bg-white rounded-3xl max-w-3xl w-full overflow-hidden shadow-2xl relative"
            >
              <button onClick={() => setSelectedMember(null)} className="absolute top-6 right-6 z-10 p-2 bg-gray-100 rounded-full">
                <X className="w-5 h-5" />
              </button>
              <div className="flex flex-col md:flex-row">
                <div className="md:w-2/5 h-64 md:h-auto">
                  <img src={selectedMember.image} className="w-full h-full object-cover" alt="" />
                </div>
                <div className="md:w-3/5 p-10">
                  <span className="text-blue-600 font-bold text-sm uppercase tracking-widest">{selectedMember.role}</span>
                  <h2 className="text-3xl font-bold text-gray-900 mb-4">{selectedMember.name}</h2>
                  <p className="text-gray-600 leading-relaxed mb-6">{selectedMember.bio}</p>
                  <div className="pt-6 border-t border-gray-100">
                    <h5 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
                      <Settings className="w-4 h-4 text-blue-500" />
                      Technical Expertise
                    </h5>
                    <div className="flex flex-wrap gap-2">
                      {(selectedMember.strengths || selectedMember.expertise).map(item => (
                        <span key={item} className="px-3 py-1 bg-blue-50 text-blue-700 rounded-lg text-sm font-medium">{item}</span>
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
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
        }
        .animate-blob { animation: blob 7s infinite; }
        .animation-delay-2000 { animation-delay: 2s; }
      `}</style>
    </div>
  );
}