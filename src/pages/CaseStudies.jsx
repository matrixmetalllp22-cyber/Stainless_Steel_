
// import React from "react";
// import { motion } from "framer-motion";
// import { FaArrowRight } from "react-icons/fa";

// const caseStudies = [
//   {
//     id: 1,
//     title: "Smart Manufacturing & IoT Automation System",
//     description:
//       "A fully automated manufacturing data platform built to replace traditional excel and paper-based production tracking.",
//     problem:
//       "Manufacturing supervisors recorded processes manually, causing delays, inaccurate reports, and lack of real-time insights.",
//     approach:
//       "Conducted requirement analysis, mapped workflow, integrated IoT modules with machine PLC signals, and built a real-time monitoring UI.",
//     solution:
//       "Designed and developed a MERN-based dashboard with live metrics, automated downtime alerts, and predictive maintenance insights.",
//     result:
//       "Production efficiency improved by 62%, error rate dropped by 80%, and reporting time reduced from 6 hours to under 15 seconds.",
//     impact:
//       "Enabled management to make faster decisions, reduced workforce dependency, and increased transparency across the production chain.",
//     tech: ["React", "Node.js", "MongoDB", "MQTT", "TailwindCSS", "IoT Sensors", "Chart.js"],
//   },
//   {
//     id: 2,
//     title: "Industrial Customer Support Portal & Analytics Engine",
//     description:
//       "A centralized web portal to manage customer orders, warranty claims, and service logs with real-time analytics dashboard.",
//     problem:
//       "Client struggled with scattered customer communication and no automated tracking for order lifecycle or service requests.",
//     approach:
//       "Interviewed end-users, analyzed workflows, designed data models, and created automated notification and tracking pipelines.",
//     solution:
//       "Built a secure role‑based portal with automated emails, data visualization dashboards, and advanced filtering and audit trail logging.",
//     result:
//       "Manual workload reduced by 78%, response speed increased by 45%, and customer satisfaction rating increased from 3.2 to 4.6.",
//     impact:
//       "Business scaled operations efficiently without increasing manpower, resulting in improved service reliability.",
//     tech: ["Next.js", "Express.js", "JWT Auth", "MySQL", "Framer Motion", "Redis Cache"],
//   },

//   {
//     id: 1,
//     title: "Smart Manufacturing & IoT Automation System",
//     description:
//       "A fully automated manufacturing data platform built to replace traditional excel and paper-based production tracking.",
//     problem:
//       "Manufacturing supervisors recorded processes manually, causing delays, inaccurate reports, and lack of real-time insights.",
//     approach:
//       "Conducted requirement analysis, mapped workflow, integrated IoT modules with machine PLC signals, and built a real-time monitoring UI.",
//     solution:
//       "Designed and developed a MERN-based dashboard with live metrics, automated downtime alerts, and predictive maintenance insights.",
//     result:
//       "Production efficiency improved by 62%, error rate dropped by 80%, and reporting time reduced from 6 hours to under 15 seconds.",
//     impact:
//       "Enabled management to make faster decisions, reduced workforce dependency, and increased transparency across the production chain.",
//     tech: ["React", "Node.js", "MongoDB", "MQTT", "TailwindCSS", "IoT Sensors", "Chart.js"],
//   },
//   {
//     id: 2,
//     title: "Industrial Customer Support Portal & Analytics Engine",
//     description:
//       "A centralized web portal to manage customer orders, warranty claims, and service logs with real-time analytics dashboard.",
//     problem:
//       "Client struggled with scattered customer communication and no automated tracking for order lifecycle or service requests.",
//     approach:
//       "Interviewed end-users, analyzed workflows, designed data models, and created automated notification and tracking pipelines.",
//     solution:
//       "Built a secure role‑based portal with automated emails, data visualization dashboards, and advanced filtering and audit trail logging.",
//     result:
//       "Manual workload reduced by 78%, response speed increased by 45%, and customer satisfaction rating increased from 3.2 to 4.6.",
//     impact:
//       "Business scaled operations efficiently without increasing manpower, resulting in improved service reliability.",
//     tech: ["Next.js", "Express.js", "JWT Auth", "MySQL", "Framer Motion", "Redis Cache"],
//   },
// ];

// // --- PDF Download Function Placeholder (We will implement action later) ---
// const handleDownloadPDF = () => {
//   console.log("PDF Download Triggered");
// };

// export default function CaseStudies() {
//   return (
//     <section className="px-6 md:px-16 py-20 bg-gradient-to-b from-[#e3e7ec] to-[#cbd3d9]">
//       {/* Heading */}
//       <motion.div
//         initial={{ opacity: 0, y: 30 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         viewport={{ once: true }}
//         transition={{ duration: 0.6 }}
//         className="text-center mb-14"
//       >
//         <h2 className="text-4xl md:text-5xl font-bold text-gray-800 tracking-wide uppercase">
//           Industrial Case Studies
//         </h2>
//         <p className="text-gray-700 mt-4 max-w-2xl mx-auto text-lg">
//           Real‑world implementations transforming traditional industries through modern software and automation.
//         </p>
//         <div className="w-32 h-[4px] bg-gray-800 mx-auto mt-6 rounded-full"></div>
//       </motion.div>

//       {/* Case Study Cards */}
//       <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
//         {caseStudies.map((study) => (
//           <motion.div
//             key={study.id}
//             initial={{ opacity: 0, scale: 0.9 }}
//             whileInView={{ opacity: 1, scale: 1 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.7 }}
//             whileHover={{ scale: 1.03 }}
//             className="bg-white/70 backdrop-blur-2xl shadow-xl border border-gray-300 rounded-2xl p-8 transition-all hover:shadow-2xl hover:border-gray-500"
//           >
//             <h3 className="text-2xl font-semibold text-gray-900 mb-3">
//               {study.title}
//             </h3>
//             <p className="text-gray-700 mb-5 text-[15px] leading-relaxed">
//               {study.description}
//             </p>

//             {/* Breakdown */}
//             <div className="space-y-2 mb-6 text-gray-800 text-[15px]">
//               <p><span className="font-semibold">Problem:</span> {study.problem}</p>
//               <p><span className="font-semibold">Approach:</span> {study.approach}</p>
//               <p><span className="font-semibold">Solution:</span> {study.solution}</p>
//               <p><span className="font-semibold">Result:</span> {study.result}</p>
//               <p><span className="font-semibold">Impact:</span> {study.impact}</p>
//             </div>

//             {/* Tech Stack */}
//             <div className="flex flex-wrap gap-2 mb-6">
//               {study.tech.map((t, index) => (
//                 <span
//                   key={index}
//                   className="px-4 py-1.5 bg-gray-800 text-white rounded-full text-xs tracking-wide uppercase"
//                 >
//                   {t}
//                 </span>
//               ))}
//             </div>

//             {/* CTA Button */}
//             <motion.button
//               whileHover={{ x: 6 }}
//               className="flex items-center gap-2 text-gray-900 font-semibold hover:text-gray-600 transition-all text-[15px]"
//             >
//               View Full Case Study <FaArrowRight />
//             </motion.button>
//           </motion.div>
//         ))}
//       </div>
//     </section>
//   );
// }
        



import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaArrowRight } from "react-icons/fa";

const caseStudies = [
  {
    id: 1,
    title: "Smart Manufacturing & IoT Automation System",
    description:
      "A fully automated manufacturing data platform built to replace traditional excel and paper-based production tracking.",
    problem:
      "Manufacturing supervisors recorded processes manually, causing delays, inaccurate reports, and lack of real-time insights.",
    approach:
      "Conducted requirement analysis, mapped workflow, integrated IoT modules with machine PLC signals, and built a real-time monitoring UI.",
    solution:
      "Designed and developed a MERN-based dashboard with live metrics, automated downtime alerts, and predictive maintenance insights.",
    result:
      "Production efficiency improved by 62%, error rate dropped by 80%, and reporting time reduced from 6 hours to under 15 seconds.",
    impact:
      "Enabled management to make faster decisions, reduced workforce dependency, and increased transparency across the production chain.",
    tech: ["React", "Node.js", "MongoDB", "MQTT", "TailwindCSS", "IoT Sensors", "Chart.js"],
  },
  {
    id: 2,
    title: "Industrial Customer Support Portal & Analytics Engine",
    description:
      "A centralized web portal to manage customer orders, warranty claims, and service logs with real-time analytics dashboard.",
    problem:
      "Client struggled with scattered customer communication and no automated tracking for order lifecycle or service requests.",
    approach:
      "Interviewed end-users, analyzed workflows, designed data models, and created automated notification and tracking pipelines.",
    solution:
      "Built a secure role-based portal with automated emails, data visualization dashboards, and advanced filtering and audit trail logging.",
    result:
      "Manual workload reduced by 78%, response speed increased by 45%, and customer satisfaction rating increased from 3.2 to 4.6.",
    impact:
      "Business scaled operations efficiently without increasing manpower, resulting in improved service reliability.",
    tech: ["Next.js", "Express.js", "JWT Auth", "MySQL", "Framer Motion", "Redis Cache"],
  },
  {
    id: 1,
    title: "Smart Manufacturing & IoT Automation System",
    description:
      "A fully automated manufacturing data platform built to replace traditional excel and paper-based production tracking.",
    problem:
      "Manufacturing supervisors recorded processes manually, causing delays, inaccurate reports, and lack of real-time insights.",
    approach:
      "Conducted requirement analysis, mapped workflow, integrated IoT modules with machine PLC signals, and built a real-time monitoring UI.",
    solution:
      "Designed and developed a MERN-based dashboard with live metrics, automated downtime alerts, and predictive maintenance insights.",
    result:
      "Production efficiency improved by 62%, error rate dropped by 80%, and reporting time reduced from 6 hours to under 15 seconds.",
    impact:
      "Enabled management to make faster decisions, reduced workforce dependency, and increased transparency across the production chain.",
    tech: ["React", "Node.js", "MongoDB", "MQTT", "TailwindCSS", "IoT Sensors", "Chart.js"],
  },
  {
    id: 2,
    title: "Industrial Customer Support Portal & Analytics Engine",
    description:
      "A centralized web portal to manage customer orders, warranty claims, and service logs with real-time analytics dashboard.",
    problem:
      "Client struggled with scattered customer communication and no automated tracking for order lifecycle or service requests.",
    approach:
      "Interviewed end-users, analyzed workflows, designed data models, and created automated notification and tracking pipelines.",
    solution:
      "Built a secure role-based portal with automated emails, data visualization dashboards, and advanced filtering and audit trail logging.",
    result:
      "Manual workload reduced by 78%, response speed increased by 45%, and customer satisfaction rating increased from 3.2 to 4.6.",
    impact:
      "Business scaled operations efficiently without increasing manpower, resulting in improved service reliability.",
    tech: ["Next.js", "Express.js", "JWT Auth", "MySQL", "Framer Motion", "Redis Cache"],
  },
];

// --- PDF Download Function Placeholder ---
const handleDownloadPDF = () => {
  console.log("PDF Download Triggered");
};

// --- MODAL COMPONENT ---
const Modal = ({ study, onClose }) => {
  if (!study) return null;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black/40 backdrop-blur-md flex items-center justify-center z-50 px-4"
      onClick={onClose}
    >
      <motion.div
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 50, opacity: 0 }}
        transition={{ duration: 0.4 }}
        className="bg-white w-full max-w-3xl rounded-2xl shadow-2xl p-8 overflow-y-auto max-h-[85vh]"
        onClick={(e) => e.stopPropagation()}
      >
        <h2 className="text-3xl font-bold text-gray-900 mb-4">{study.title}</h2>

        <div className="space-y-3 text-gray-700 text-[15px] leading-relaxed">
          <p><strong>Description:</strong> {study.description}</p>
          <p><strong>Problem:</strong> {study.problem}</p>
          <p><strong>Approach:</strong> {study.approach}</p>
          <p><strong>Solution:</strong> {study.solution}</p>
          <p><strong>Result:</strong> {study.result}</p>
          <p><strong>Impact:</strong> {study.impact}</p>
        </div>

        <div className="flex flex-wrap gap-2 mt-6">
          {study.tech.map((tech, i) => (
            <span
              key={i}
              className="px-3 py-1 bg-gray-800 text-white rounded-full text-xs uppercase tracking-wide"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="flex justify-between mt-8">
          <button
            onClick={handleDownloadPDF}
            className="px-5 py-2 bg-gray-900 text-white rounded-lg hover:bg-gray-700 transition"
          >
            Download PDF
          </button>

          <button
            onClick={onClose}
            className="px-5 py-2 border border-gray-700 text-gray-900 rounded-lg hover:bg-gray-100 transition"
          >
            Close
          </button>
        </div>
      </motion.div>
    </motion.div>
  );
};

// --- MAIN COMPONENT ---
export default function CaseStudies() {
  const [expanded, setExpanded] = useState({});
  const [activeStudy, setActiveStudy] = useState(null);

  const toggleExpand = (id) => {
    setExpanded((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <section className="px-6 md:px-16 py-20 bg-gradient-to-b from-[#e3e7ec] to-[#cbd3d9]">
      
      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-14"
      >
        <h2 className="text-4xl md:text-5xl font-bold text-gray-800 tracking-wide uppercase">
          Industrial Case Studies
        </h2>
        <p className="text-gray-700 mt-4 max-w-2xl mx-auto text-lg">
          Real-world implementations transforming industries using modern software and automation.
        </p>
        <div className="w-32 h-[4px] bg-gray-800 mx-auto mt-6 rounded-full"></div>
      </motion.div>

      {/* Case Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {caseStudies.map((study) => (
          <motion.div
            key={study.id}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            whileHover={{ scale: 1.03 }}
            className="bg-white/70 backdrop-blur-2xl shadow-xl border border-gray-300 rounded-2xl p-8 hover:shadow-2xl hover:border-gray-500 transition-all"
          >
            <h3 className="text-2xl font-semibold text-gray-900 mb-3">{study.title}</h3>

            <p className="text-gray-700 mb-3 text-[15px]">{study.description}</p>

            {expanded[study.id] && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                transition={{ duration: 0.4 }}
                className="space-y-2 text-gray-800 text-[15px] mb-5"
              >
                <p><strong>Problem:</strong> {study.problem}</p>
                <p><strong>Approach:</strong> {study.approach}</p>
                <p><strong>Solution:</strong> {study.solution}</p>
                <p><strong>Result:</strong> {study.result}</p>
                <p><strong>Impact:</strong> {study.impact}</p>
              </motion.div>
            )}

            <button
              onClick={() => toggleExpand(study.id)}
              className="text-gray-800 font-semibold underline text-sm mb-4"
            >
              {expanded[study.id] ? "Read Less" : "Read More"}
            </button>

            <div className="flex flex-wrap gap-2 mb-6">
              {study.tech.map((t, index) => (
                <span
                  key={index}
                  className="px-4 py-1.5 bg-gray-800 text-white rounded-full text-xs uppercase"
                >
                  {t}
                </span>
              ))}
            </div>

            <motion.button
              whileHover={{ x: 6 }}
              className="flex items-center gap-2 text-gray-900 font-semibold hover:text-gray-600 transition-all text-[15px]"
              onClick={() => setActiveStudy(study)}
            >
              View Full Case Study <FaArrowRight />
            </motion.button>
          </motion.div>
        ))}
      </div>

      {/* MODAL RENDER */}
      <AnimatePresence>
        {activeStudy && (
          <Modal study={activeStudy} onClose={() => setActiveStudy(null)} />
        )}
      </AnimatePresence>
    </section>
  );
}
