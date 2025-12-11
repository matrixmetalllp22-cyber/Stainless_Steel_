
import React, { useState } from "react";
import { motion } from "framer-motion";

const leadership = [
  { 
    name: "Mr. Jeeteen Jain", 
    role: "Managing Director", 
    image: "/Images/jeeteen-jain.jpg",
    bio: "Jeeteen Jain is a dynamic and visionary Managing Director whose leadership has been instrumental in shaping Matrix Metals LLP into a high-performance industrial powerhouse. With deep expertise in machinery integration, metal processing technologies, and strategic operations, he leads with precision, conviction, and uncompromising discipline. Jeeteen is known for transforming complex engineering challenges into executable strategies, driving excellence across every vertical of the organization. His aggressive pursuit of quality, innovation, and customer-centric execution has established Matrix Metals as a trusted name in India's advanced metal service sector. Under his stewardship, the company continues to scale aggressively, expand capabilities, and set new standards for operational superiority."
  },
  { 
    name: "Mr. Dinesh Chopra", 
    role: "Managing Director", 
    image: "/Images/dinesh-chopra.jpg",
    bio: "Dinesh Chopra brings strong industrial leadership and decades of market knowledge to Matrix Metals LLP, serving as a pillar of strategic direction, operational stability, and business growth. As Managing Director, he combines sharp commercial intelligence with a deep understanding of metal markets, customer needs, and production realities. His decisions are driven by clarity, discipline, and long-term business vision, enabling the company to establish a dominant presence in the metals ecosystem. Dinesh's leadership is defined by integrity, accountability, and a relentless commitment to delivering value — ensuring that Matrix Metals remains agile, competitive, and future-ready in a rapidly evolving industrial landscape."
  },
];

const team = [
  { 
    name: "Priyadarshini", 
    role: "Head of Finance", 
    image: "/Images/person1.jpg",
    bio: "Priyadarshini is a financial strategist with exceptional command over fiscal planning, cost governance, compliance, and enterprise-level financial discipline. As the Finance Head of Matrix Metals LLP, she ensures the organization operates on a foundation of accuracy, transparency, and financial resilience. Her analytical strength and meticulous oversight empower the company to scale responsibly while maintaining strong profitability and risk control. Priyadarshini's leadership brings stability, sharp financial intelligence, and structured processes that support Matrix Metals' aggressive growth strategy and long-term sustainability."
  },
  { 
    name: "Sangram", 
    role: "Production Head", 
    image: "/Images/person2.jpg",
    bio: "Sangram is a seasoned production leader known for his commanding presence on the shop floor and his mastery over complex metal processing operations. As Production Head, he drives high-precision manufacturing with a strong focus on efficiency, discipline, and zero-defect execution. His ability to manage high-volume workloads, optimize processes, and enforce rigorous quality protocols makes him a cornerstone of the company's operational excellence. Sangram's leadership ensures that every coil processed under Matrix Metals adheres to the highest standards of accuracy, productivity, and industrial reliability."
  },
  { 
    name: "Somnath", 
    role: "Logistics Head", 
    image: "/Images/person3.jpg",
    bio: "Somnath is the backbone of Matrix Metals LLP's supply chain strength, leading logistics with strategic foresight, operational clarity, and uncompromising reliability. His expertise in material movement, dispatch management, and end-to-end coordination ensures seamless flow across all production cycles. Somnath's ability to maintain speed, accuracy, and system integrity — even under demanding timelines — positions him as a critical force behind the company's consistent on-time deliveries. His structured approach, discipline, and problem-solving capability make him an indispensable leader in sustaining Matrix Metals' high-performance output."
  },
  { 
    name: "Balakumar", 
    role: "Project Development Head", 
    image: "/Images/person4.jpg",
    bio: "Balakumar is a strategic force in project development, known for his sharp analytical mindset, meticulous planning capability, and unwavering execution discipline. He transforms complex technical requirements into structured, high-performance project frameworks that drive measurable results for Matrix Metals LLP. With a rare ability to foresee risks, optimize workflows, and coordinate cross-functional teams with precision, he ensures every project is delivered on time, within scope, and above expectation. Balakumar's leadership in project development strengthens the company's ability to scale rapidly, innovate aggressively, and maintain absolute control over project quality, making him a key architect of Matrix Metals' continued expansion and operational success."
  },
];

export default function ManagementTeam() {
  const [selectedMember, setSelectedMember] = useState(null);
  return (
    <section className="min-h-screen bg-gradient-to-b from-gray-50 via-gray-100 to-gray-200 text-gray-900">
      {/* HERO */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <img
            src="/Images/news01.jpg"
            alt="management hero"
            className="w-full h-72 md:h-96 object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-gray-100/70 to-gray-200/60" />
        </div>

        <div className="container-custom px-6 py-24 md:py-32 text-orange-500">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-4xl md:text-5xl font-extrabold tracking-tight"
          >
            Management & Team
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="mt-3 max-w-2xl text-gray-700"
          >
            Senior leadership and experienced teams driving operations, quality, and logistics across JSW MI.
          </motion.p>
        </div>
      </div>

      {/* LEADERSHIP SECTION */}
      <div className="container-custom px-6 py-16">
        <h2 className="text-2xl font-bold text-gray-800 mb-10 text-center">
          Leadership
        </h2>
        <div className="flex flex-col md:flex-row justify-center gap-10">
          {leadership.map((leader, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2, duration: 0.7 }}
              viewport={{ once: true }}
              whileHover={{ y: -6, scale: 1.03 }}
              onClick={() => setSelectedMember({ ...leader, type: "leadership" })}
              className="relative rounded-2xl p-[2px] bg-gradient-to-br from-gray-300 via-gray-400 to-gray-200 shadow-lg hover:shadow-2xl transition-all duration-300 w-full md:w-1/2 max-w-md cursor-pointer"
            >
              <div className="bg-white/90 backdrop-blur-md rounded-2xl p-8 text-center border border-gray-300 hover:border-gray-500 transition-all duration-300">
                <div className="relative w-52 h-52 mx-auto overflow-hidden rounded-2xl shadow-inner">
                  <motion.img
                    src={leader.image}
                    alt={leader.name}
                    className="w-full h-full object-cover rounded-2xl transition-transform duration-300 hover:scale-105"
                  />
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-gray-900/5 to-transparent" />
                </div>

                <h4 className="mt-5 text-xl font-semibold text-gray-900">
                  {leader.name}
                </h4>
                <p className="text-sm text-gray-600 mt-1">{leader.role}</p>

                {/* Animated underline */}
                <motion.div
                  className="mt-4 mx-auto h-[3px] bg-gradient-to-r from-gray-400 via-gray-500 to-gray-600 rounded-full"
                  initial={{ width: 0 }}
                  whileHover={{ width: 48 }}
                  transition={{ duration: 0.4 }}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* TEAM GRID */}
      <div className="container-custom px-6 pb-24">
        <h2 className="text-2xl font-bold text-gray-800 mb-10 text-center">
          Core Team
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {team.map((member, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              viewport={{ once: true }}
              whileHover={{ y: -4, scale: 1.02 }}
              onClick={() => setSelectedMember({ ...member, type: "team" })}
              className="relative rounded-2xl p-[2px] bg-gradient-to-br from-gray-300 via-gray-200 to-gray-100 shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer"
            >
              <div className="bg-white/90 backdrop-blur-md rounded-2xl p-6 text-center border border-gray-300 hover:border-gray-400 transition-all duration-300">
                <div className="relative w-40 h-40 mx-auto overflow-hidden rounded-xl shadow-inner">
                  <motion.img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover rounded-xl transition-transform duration-300 hover:scale-110"
                  />
                  <div className="absolute inset-0 rounded-xl bg-gradient-to-t from-gray-900/5 to-transparent" />
                </div>

                <h4 className="mt-4 text-lg font-semibold text-gray-900">
                  {member.name}
                </h4>
                <p className="text-sm text-gray-600 mt-1">{member.role}</p>

                {/* Animated underline */}
                <motion.div
                  className="mt-3 mx-auto h-[2px] bg-gradient-to-r from-gray-400 via-gray-500 to-gray-600 rounded-full"
                  initial={{ width: 0 }}
                  whileHover={{ width: 40 }}
                  transition={{ duration: 0.4 }}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Member Detail Modal */}
      {selectedMember && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedMember(null)}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ duration: 0.4 }}
            className="bg-white rounded-2xl shadow-2xl max-h-[90vh] overflow-y-auto w-full max-w-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="sticky top-0 bg-gradient-to-r from-orange-500 to-orange-600 text-white p-6 flex justify-between items-center">
              <div>
                <h2 className="text-2xl sm:text-3xl font-bold">{selectedMember.name}</h2>
                <p className="text-orange-100 text-sm sm:text-base mt-1">{selectedMember.role}</p>
              </div>
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setSelectedMember(null)}
                className="text-2xl hover:text-white transition flex-shrink-0 ml-4"
              >
                ×
              </motion.button>
            </div>

            {/* Modal Content */}
            <div className="p-6 sm:p-8">
              {/* Profile Image */}
              <div className="mb-6">
                <motion.img
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                  src={selectedMember.image}
                  alt={selectedMember.name}
                  className="w-full sm:w-64 h-64 sm:h-72 object-cover rounded-xl shadow-lg mx-auto"
                />
              </div>

              {/* Bio Content */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="space-y-4"
              >
                <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
                  {selectedMember.bio}
                </p>

                {/* Divider */}
                <div className="border-t-2 border-orange-200 my-6" />

                {/* Role Badge */}
                <div className="flex flex-wrap gap-3">
                  <span className="px-4 py-2 bg-orange-100 text-orange-700 rounded-full text-sm font-semibold">
                    {selectedMember.role}
                  </span>
                  <span className="px-4 py-2 bg-gray-100 text-gray-700 rounded-full text-sm font-semibold">
                    {selectedMember.type === "leadership" ? "Leadership" : "Core Team"}
                  </span>
                </div>
              </motion.div>

              {/* Close Button */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="mt-8 flex justify-center"
              >
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setSelectedMember(null)}
                  className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-lg font-semibold transition text-sm sm:text-base"
                >
                  Close
                </motion.button>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </section>
  );
}
