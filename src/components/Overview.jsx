// import React, { useState } from "react";
// import { motion } from "framer-motion";

// /**
//  * Overview.jsx
//  * - Blanking-style industrial theme
//  * - Tabs: Vision | Philosophy | Values
//  * - Hero banner with subtle overlay + title
//  */

// export default function Overview() {
//   const [tab, setTab] = useState("vision");

//   const tabContent = {
//     vision:
//       <p>Key Factors Influencing Price
// Automation Level: Fully automatic machines are significantly more expensive than semi-automatic or manual models due to the integrated technology, which increases efficiency and safety.
// Material and Thickness: Machines designed for heavy-duty materials like thick gauge steel coils are substantially more expensive than those for light materials like paper or thin films.
// Capacity and Speed: Higher production capacity (tons/day) and machine speed (meters/minute or RPM) directly correlate with a higher price point, as they involve more robust components and powerful drive systems.
// Brand and Quality: Reputable manufacturers using high-quality, durable components generally have higher prices, but often offer better longevity, reliability, and support.
// Condition (New vs. Used): Prices listed above are for new machines. Used machines can be cheaper initially, but may require additional investment in rebuilding or upgrades.
// Additional Features: Features like PLC control, integrated web guides, different cutting systems (razor, crush, shear), and safety interlocks can add to the overall.</p>,
//     philosophy:
//      <p>We combine Japanese & Indian manufacturing excellence with a focus on continuous improvement, operational discipline, and long-term partnerships.</p>,
//     values:
//       <p>Quality, Safety, Integrity, Customer Focus, Sustainability — embedded in all processes and decisions.</p>,
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-b from-slate-50 via-slate-100 to-slate-200 text-gray-900 font-sans">
//       {/* HERO */}
//       <header className="relative overflow-hidden">
//         <div className="absolute inset-0 -z-10">
//           <img
//             src="/images/overview-hero.jpg"
//             alt="Overview hero"
//             className="w-full h-[320px] md:h-[420px] object-cover opacity-30"
//           />
//           <div className="absolute inset-0 bg-gradient-to-r from-slate-900/70 to-slate-800/50" />
//         </div>

//         <div className="relative container-custom px-6 py-24 md:py-32 text-white">
//           <motion.h1
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6 }}
//             className="text-4xl md:text-6xl text-orange-400 font-extrabold tracking-tight mb-2"
//           >
//             Matrix Metals
//           </motion.h1>

//           <motion.p
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             transition={{ delay: 0.15, duration: 0.6 }}
//             className="text-sm md:text-base text-gray-700 max-w-3xl"
//           >
//             Matrix Metals Service Center Private Limited is a joint venture of Matrix Metals
//           </motion.p>
//         </div>
//       </header>

//       {/* MAIN SECTION */}
//       <main className="container-custom px-6 py-16 md:py-20">
//         <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
//           {/* Left column - intro */}
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6 }}
//             viewport={{ once: true }}
//             className="lg:col-span-2 bg-white/60 backdrop-blur-sm rounded-2xl p-10 shadow-md border border-slate-200"
//           >
//             <h2 className="text-3xl font-bold text-gray-900 mb-4">Matrix Metals Organization</h2>
//             <p className="text-gray-600 leading-relaxed max-w-prose">
//               Matrix Metals Service Center Private Limited is a joint venture of JSW Steel Limited and Marubeni-Itochu Steel Inc. (MISI), wherein both the organizations have 50% stake. We synergize deep processing knowledge and logistics expertise to deliver world-class steel solutions.
//             </p>
//           </motion.div>

//           {/* Right column - tabs */}
//           <motion.aside
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6, delay: 0.1 }}
//             viewport={{ once: true }}
//             className="bg-white rounded-2xl p-6 shadow-md border border-slate-200"
//           >
//             {/* Tab buttons */}
//             <div className="flex gap-3 mb-4">
//               {["vision", "philosophy", "values"].map((t) => (
//                 <button
//                   key={t}
//                   onClick={() => setTab(t)}
//                   className={`px-3 py-2 text-sm font-semibold rounded-md transition ${
//                     tab === t
//                       ? "bg-orange-800 text-white shadow"
//                       : "bg-gray-100 text-gray-700 hover:bg-gray-200"
//                   }`}
//                 >
//                   {t[0].toUpperCase() + t.slice(1)}
//                 </button>
//               ))}
//             </div>

//             {/* Tab card */}
//             <div className="bg-gradient-to-br from-slate-50 to-slate-100 rounded-lg p-5 border border-slate-200">
//               <h4 className="text-sm font-semibold text-orange-800 mb-2 capitalize">{tab}</h4>
//               <p className="text-sm text-gray-700 leading-relaxed">{tabContent[tab]}</p>
//             </div>
//           </motion.aside>
//         </div>

//         {/* Info blocks row (three cards like in screenshot) */}
//         <div className="mt-12 grid gap-6 md:grid-cols-3">
//           {[
//             {
//               title: "Joint Venture",
//               text:
//                 "JSW MI is the enterprise confluence of JSW Steel of India and Marubeni-Itochu Steel of Japan. The JV synergizes the steel processing expertise of the two giants.",
//             },
//             {
//               title: "Management & Team",
//               text:
//                 "Managed by top-notch Indian & Japanese professionals. Senior, experienced and high performing teams drive JSW MI's operations.",
//             },
//             {
//               title: "Organization",
//               text:
//                 "JSW MI is a professional organization, adapting modern business techniques and systems with a focus on quality and CSR.",
//             },
//              {
//               title: "Management & Team",
//               text:
//                 "Managed by top-notch Indian & Japanese professionals. Senior, experienced and high performing teams drive JSW MI's operations.",
//             },
//             {
//               title: "Organization",
//               text:
//                 "JSW MI is a professional organization, adapting modern business techniques and systems with a focus on quality and CSR.",
//             },
//              {
//               title: "Management & Team",
//               text:
//                 "Managed by top-notch Indian & Japanese professionals. Senior, experienced and high performing teams drive JSW MI's operations.",
//             },
            
//           ].map((b, i) => (
//             <motion.div
//               key={i}
//               initial={{ opacity: 0, y: 12 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ delay: 0.1 * i, duration: 0.5 }}
//               viewport={{ once: true }}
//               className="bg-slate-900 text-white rounded-2xl p-6 shadow-lg relative overflow-hidden"
//             >
//               <h5 className="font-bold mb-3">{b.title}</h5>
//               <p className="text-sm text-slate-200 leading-relaxed">{b.text}</p>

//               <div className="mt-5 flex gap-3">
//                 <button className="bg-amber-500 text-white px-4 py-2 rounded-md text-sm font-semibold shadow hover:brightness-95 transition">
//                   Read more
//                 </button>
//                 <button className="bg-white/10 text-white px-4 py-2 rounded-md text-sm hover:bg-white/20 transition">
//                   →
//                 </button>
//               </div>
//             </motion.div>
//           ))}
//         </div>
//       </main>
//     </div>
//   );
// }




















import React, { useState } from "react";
import { motion } from "framer-motion";

export default function Overview() {
  const [tab, setTab] = useState("vision");
  const [showIntroModal, setShowIntroModal] = useState(false);
  const [selectedCard, setSelectedCard] = useState(null);

  const tabContent = {
    vision: (
      <div className="space-y-3 text-gray-700">
        <p>
          To stand as the definitive force in advanced metal processing and industrial automation — setting standards that are not merely followed but revered.
        </p>
        <p>
          Matrix Metals envisions a future where precision is absolute, engineering is uncompromising, and performance is engineered at a level that leaves no room for mediocrity.
        </p>
      </div>
    ),
    philosophy: (
      <div className="space-y-3 text-gray-700">
        <p>
          Matrix Metals operates on a philosophy forged from discipline, intellect, and unwavering engineering integrity.
        </p>
        <p>We do not guess — we calculate. We do not assume — we validate. We do not follow — we lead.</p>
      </div>
    ),
    values: (
      <div className="space-y-3 text-gray-700">
        <ul className="list-decimal list-inside space-y-1">
          <li>Unrelenting Excellence</li>
          <li>Absolute Reliability</li>
          <li>Strategic Innovation</li>
          <li>Client-Centric Leadership</li>
          <li>Zero-Defect Quality Mindset</li>
          <li>Ethical Command</li>
          <li>Safety as a Structural Principle</li>
          <li>Respect and Professional Strength</li>
        </ul>
      </div>
    ),
  };

  // 7 sections data with full content from user
  const infoBlocks = [
    {
      title: "Joint Venture",
      text: "Matrix Metals LLP was established in 2022 as a strategic joint venture between Akash Aluminium and Mysore Tube Suppliers.",
      fullContent: `Matrix Metals LLP was established in 2022 as a strategic Joint Venture between two highly reputed industry leaders — Akash Aluminium and Mysore Tube Suppliers. This alliance was created with a unified vision: to build India's most advanced and largest metal service centre, engineered to deliver precision, scale, and unmatched operational capability.

The Joint Venture capitalizes on the combined legacy, technical strength, and market influence of both brands. By integrating their long-standing expertise, the partnership introduces an industry-first, fully managed, end-to-end solution for metal processing, distribution, and business application implementation — setting a new standard for efficiency and technological excellence.

Recognizing the growing demand for world-class metal processing infrastructure, the two companies took their first decisive step by initiating the construction of a state-of-the-art manufacturing and service facility in the industrial heart of Bangalore — Peenya Industrial Area. This location serves as a strategic hub, enabling seamless connectivity, faster supply chain execution, and direct access to India's expanding industrial corridors.

As the journey progresses, Matrix Metals LLP is poised to scale its operations significantly, with expanded capabilities, advanced machinery, and enhanced service offerings set to be commissioned in the Financial Year 2023. This progression marks the beginning of a new era in the Indian metal processing landscape.

Today, the company stands formally registered and recognized as MATRIX METALS LLP — a Joint Venture built on strength, vision, and a commitment to reshaping the future of metal service excellence in India.`,
    },
    {
      title: "Management & Team",
      text: "Led by visionary professionals with decades of industry experience.",
      fullContent: `1. Leadership Built on Vision and Precision
The leadership of Matrix Metals LLP embodies a rare combination of strategic foresight, engineering intelligence, and operational discipline. Our management team is driven by a singular mission — to build India's most technologically advanced and globally competitive metal service organization. Every leader brings decades of industry experience, a deep understanding of market dynamics, and an unwavering commitment to excellence.

2. A Governance Structure Rooted in Strength and Integrity
Matrix Metals is guided by a governance framework that prioritizes transparency, accuracy, and responsible decision-making. Our management philosophy emphasizes long-term value creation, client trust, and technical credibility. The leadership ensures that every project, partnership, and operational milestone reflects the highest level of ethical and professional integrity.

3. A Team of Specialists with Global-Standard Expertise
Our team is composed of highly skilled professionals across engineering, operations, quality control, automation, supply chain, and customer support. Each member is trained to operate with precision, accountability, and discipline — ensuring seamless execution across every stage of production. Matrix Metals empowers its team with continuous learning, global exposure, and cutting-edge tools to maintain an uncompromised standard of performance.

4. Operational Excellence Through Technical Mastery
The strength of Matrix Metals lies in its field-tested engineers, metallurgists, machine specialists, and process analysts who collectively bring unmatched depth to our operational ecosystem. Their expertise spans coil processing, slitting, CTL lines, polishing technologies, aluminium handling, stainless-steel applications, and automation systems. This technical mastery allows the company to execute complex projects with precision and deliver output that consistently meets international benchmarks.

5. A Culture That Demands Performance and Innovation
Matrix Metals operates with a high-performance culture where innovation is not encouraged — it is expected. Our team is trained to think analytically, act decisively, and respond to challenges with engineered solutions that enhance productivity and strengthen client outcomes. Every individual is aligned to a core belief: quality is non-negotiable, timelines are commitments, and excellence is the only acceptable output.

6. Unified Strength: Collaboration that Drives Results
The management and team function as a cohesive, mission-driven unit. Departments collaborate seamlessly, blending their expertise to deliver superior project execution and customer satisfaction. This unity forms the backbone of Matrix Metals and is a driving force behind our rapid growth, robust brand reputation, and industry leadership.

7. People Who Power the Future of Matrix Metals
The true strength of Matrix Metals is its people — individuals who bring passion, discipline, and technical brilliance to every task they undertake. Their collective commitment to innovation, safety, and operational excellence positions the company as a trusted partner in India's evolving manufacturing landscape. The Matrix Metals team stands prepared to lead the next phase of industrial transformation with confidence and authority.`,
    },
    {
      title: "Organization",
      text: "Built on a robust organizational framework engineered for clarity, efficiency, and long-term scalability.",
      fullContent: `1. A Structurally Strong and Strategically Designed Organization
Matrix Metals LLP is built on a robust organizational framework engineered for clarity, efficiency, and long-term scalability. Every function — from leadership to operations, engineering, quality, logistics, and customer service — is structured to deliver seamless coordination and uncompromised performance. The organization operates with a clear chain of responsibility, ensuring swift decision-making and flawless execution across all levels.

2. Departments Aligned for Precision and Performance
Our organizational design integrates specialized departments, each led by experts who bring deep industry knowledge and operational discipline. These include:

Engineering & Technical Services
Production & Operations
Quality Assurance & Metallurgy
Supply Chain & Logistics Management
Project Execution & Infrastructure Development
Sales, Marketing & Client Integration
Automation & Industrial Control Systems
Finance, Compliance & Administration

Every department functions with clearly defined roles, standardized processes, and a performance-driven culture that supports the company's mission of delivering global-quality solutions.

3. Cross-Functional Collaboration as a Core Strength
Matrix Metals operates as a unified ecosystem where each department collaborates seamlessly, ensuring fast turnaround, high efficiency, and consistent output quality. Our cross-functional coordination enables us to manage complex, multi-stage operations — from coil handling and processing to precision finishing and line integration — with exceptional accuracy. This collaborative approach forms the backbone of our organizational effectiveness.

4. Empowering People, Enhancing Capabilities
The organization is powered by a team of highly skilled engineers, technicians, analysts, and support staff who embody the company's values of precision, innovation, and integrity. Matrix Metals invests heavily in employee development, advanced training, and technological upskilling to ensure our team remains ahead of evolving industry demands. We believe that empowering people directly strengthens our operational excellence.

5. Governance and Compliance with Global Standards
Matrix Metals is governed by a rigorous compliance framework that aligns with international industry standards. Our organizational policies ensure transparency, ethical conduct, safety, and consistency in every activity we undertake. From procurement and material handling to processing and dispatch, every step is executed under strict monitoring systems and global best practices.

6. Future-Ready Organizational Vision
The organization is designed with scalability at its core. As Matrix Metals expands its capabilities, production lines, and service offerings, the organizational structure adapts to support larger volumes, advanced technology integrations, and broader market penetration. This forward-thinking approach ensures that Matrix Metals remains agile, competitive, and prepared for future industrial transformation.

7. An Organization Engineered to Lead
Matrix Metals LLP is more than a company — it is a highly disciplined industrial organization built to redefine metal processing excellence in India. With strong leadership, specialized departments, intelligent workflows, and a culture of accountability, the organization stands poised to lead the next decade of innovation and growth in the metal manufacturing and service sector.`,
    },
    {
      title: "Infrastructure & Capabilities",
      text: "World-class facilities with high-precision processing technologies and advanced automation.",
      fullContent: `1. World-Class Infrastructure Engineered for High-Volume Precision
Matrix Metals LLP operates with an infrastructure designed to support heavy-duty industrial performance and global-quality output. Our facilities integrate advanced machinery, intelligent material flow systems, and high-capacity processing zones capable of handling large coil volumes with exceptional accuracy. Every square foot of the plant is engineered for efficiency, safety, and uninterrupted operational reliability.

2. State-of-the-Art Processing Technologies
The core strength of Matrix Metals lies in its technologically advanced equipment and automated workflows. Our capabilities include:

High-precision slitting lines
Advanced cut-to-length (CTL) systems
No.4 and hairline polishing lines
Aluminium and stainless steel coil processing units
Quality control laboratories with metallurgical testing instruments
Automated material handling and storage architecture

This infrastructure allows us to deliver products that meet strict dimensional accuracy, structural consistency, and international industry standards.

3. Intelligent Logistics and Supply Chain Integration
Our operations are supported by a sophisticated logistical framework that ensures smooth inbound and outbound movement of materials. Strategically located in the industrial hub of Peenya, Bangalore, Matrix Metals has seamless access to transport networks, industrial suppliers, OEMs, and distribution channels. This supply chain strength empowers the company to maintain short lead times, high reliability, and unbroken production cycles.

4. Quality Control With Zero-Compromise Standards
Quality is not a department at Matrix Metals — it is a discipline embedded into every step of our workflow. Our quality infrastructure includes:

Dimensional and surface inspection systems
Alloy verification tools
Process monitoring sensors
Advanced testing instruments
Strict material traceability protocols

Every coil, sheet, and finished product is passed through comprehensive quality gates, ensuring zero tolerance for defects.

5. Automation, Data Intelligence & Future-Ready Technology
Matrix Metals integrates modern industrial automation, real-time monitoring systems, and data-driven decision frameworks across its operations. This ensures consistent outputs, predictive maintenance, and higher energy efficiency. We are continuously expanding our capabilities to include Industry 4.0 integrations such as:

Smart sensors
Automated diagnostics
Real-time production dashboards
Predictive process controls

Our infrastructure is not static — it evolves continuously to remain future-ready.

6. Scalable Capacity for Long-Term Growth
The facility is designed to support rapid expansion both in production volume and technology adoption. As market demand increases, Matrix Metals can scale operations without disruption, enabling faster commissioning of new lines, broader material handling capabilities, and increased output capacity. This scalability ensures that Matrix Metals remains resilient, competitive, and prepared to lead the industry for decades ahead.`,
    },
    {
      title: "Corporate Governance",
      text: "Rooted in absolute integrity, ethical conduct, transparency, and responsible leadership.",
      fullContent: `1. Governance Built on Integrity and Accountability
Matrix Metals LLP operates under a governance framework rooted in absolute integrity, ethical conduct, and uncompromising accountability. Every decision, policy, and operational directive is guided by a commitment to transparency and responsible leadership. We hold ourselves answerable not only to regulatory standards, but to the trust our clients, partners, and stakeholders place in us.

2. Structured Leadership for Effective Oversight
Our governance structure ensures clarity of roles, hierarchy, and responsibility. The management team functions through well-defined channels that enable disciplined execution, rapid decision-making, and stringent oversight across all departments. This ensures that every business action reflects mature judgment, operational wisdom, and strategic alignment with the company's long-term vision.

3. Transparency as a Non-Negotiable Standard
At Matrix Metals, transparency is not an operational preference — it is a mandatory principle. We maintain open, accurate, and timely communication across internal teams and external stakeholders. All financial, technical, and operational activities are documented, reviewed, and executed in accordance with recognized best practices, ensuring complete clarity in every transaction and engagement.

4. Strong Compliance With Legal and Ethical Frameworks
The company adheres strictly to all statutory, regulatory, and industrial compliance norms. Our compliance mechanisms include well-documented SOPs, periodic audits, risk assessments, and quality checks to ensure that every aspect of the organization aligns with national and international standards. Ethical conduct, anti-corruption measures, and fair business practices form the backbone of our governance ethos.

5. Risk Management Driven by Discipline and Foresight
Matrix Metals implements a robust risk management system designed to identify vulnerabilities, evaluate operational threats, and implement proactive mitigation strategies. This disciplined approach ensures business continuity, safeguards investments, minimizes operational uncertainty, and strengthens long-term organizational resilience.

6. Protection of Stakeholder Interest
We operate with a duty-bound mandate to protect the interests of all stakeholders — customers, partners, employees, investors, and the community. Our governance principles ensure that stakeholder welfare is prioritized in every strategic and operational decision. We believe that the strength of an organization lies in the trust it builds and preserves.

7. Commitment to Ethical Leadership and Responsible Growth
Corporate Governance at Matrix Metals is reinforced by leadership that values fairness, respect, and responsible business conduct. We pursue growth through disciplined execution, sustainable development, and ethical operations. Our leadership sets the standard for professional conduct, ensuring that every employee reflects the organization's principle of excellence with integrity.

8. Continuous Monitoring, Evaluation & Improvement
Governance is not static — it evolves. Matrix Metals consistently evaluates its policies, operational frameworks, and decision-making processes to ensure adherence to global best practices. Through audits, internal reviews, and performance assessments, we maintain a governance system that is dynamic, adaptable, and future-ready.`,
    },
    {
      title: "HR & People Philosophy",
      text: "Excellence, accountability, continuous learning, merit-based growth, and developing leaders.",
      fullContent: `1. People as the Core of Organizational Strength
At Matrix Metals LLP, we believe that the true strength of any industrial enterprise lies not only in its machinery or technology, but in the caliber of its people. Our HR philosophy is built on the conviction that a high-performance organization is shaped by empowered individuals, disciplined teams, and a culture that values both competence and character. Every employee is viewed as a strategic asset with the potential to influence the future of the company.

2. A Culture of Excellence, Accountability & Professionalism
We cultivate a culture where excellence is expected, accountability is embraced, and professionalism is non-negotiable. Our people operate with clarity, discipline, and a results-driven mindset. We encourage decision-making grounded in logic, engineering intelligence, and ethical responsibility — ensuring that every action aligns with the company's long-term vision of leadership in the metal service industry.

3. Continuous Learning, Growth & Skill Advancement
Matrix Metals invests heavily in building talent that is future-ready. Our HR strategy includes:

Continuous technical and operational training
Leadership development programs
Cross-functional exposure
Certifications and external learning opportunities
Real-world industrial learning pathways

We ensure that every team member grows in competence, confidence, and capability — empowering them to deliver excellence in a rapidly evolving manufacturing landscape.

4. Performance-Driven, Merit-Based Growth
We reward performance, discipline, and innovation. Career growth at Matrix Metals is shaped by merit, contribution, and commitment rather than tenure alone. Our evaluation systems are transparent, structured, and aligned with organizational goals, ensuring that individuals who demonstrate initiative, creativity, and operational precision rise quickly within the company.

5. Strong Employee Relations & Mutual Respect
We maintain a people-first environment rooted in respect, fairness, and transparent communication. Matrix Metals values diversity of thought, experience, and background — recognizing that strong teams are built on inclusive collaboration. We foster an atmosphere where employees feel heard, supported, and empowered to challenge norms constructively.

6. Safety, Wellbeing & Responsible Work Practices
Safety is not an instruction at Matrix Metals — it is a philosophy. We enforce rigorous safety protocols, training programs, and workplace standards that protect our employees' wellbeing at every stage of operation. We ensure a healthy, clean, and secure environment where individuals can perform with full confidence and peace of mind.

7. Building Leaders for Tomorrow
We do not just build teams — we build leaders. Matrix Metals identifies and nurtures high-potential individuals, preparing them for roles of greater responsibility and influence. Through structured mentorship, exposure to critical projects, and hands-on leadership opportunities, we cultivate the next generation of managers, engineers, and industry leaders.

8. Unified Workforce, Shared Vision
Every member of Matrix Metals is aligned to a shared mission: to elevate the company to global standards of engineering and operational excellence. Our people work not as independent units but as a cohesive force — disciplined, collaborative, and committed to delivering outcomes that reflect the strength of the Matrix Metals brand.`,
    },
    {
      title: "Culture & Performance",
      text: "High-performance culture with discipline, innovation, and relentless pursuit of excellence.",
      fullContent: `1. People Are Our Power — The Engine Behind Every Victory
Matrix Metals LLP is built on the conviction that exceptional organizations are created by exceptional people. Technology can be purchased; skill can be trained — but discipline, character, and relentless drive cannot be manufactured. Our people are the force that propels this company forward, and we expect every individual to operate with the precision, intensity, and responsibility worthy of the Matrix Metals name.

2. A High-Performance Culture Where Mediocrity Cannot Survive
We do not tolerate average work, unclear thinking, or complacency. Our culture demands excellence as the baseline and superiority as the standard. Every team member is expected to think like a leader, act with conviction, and execute with a level of rigor that pushes the boundaries of industrial performance. At Matrix Metals, accountability is absolute, deadlines are decisive, and results speak louder than intentions.

3. Continuous Development with Relentless Focus on Mastery
We invest in people who invest in themselves. Training is not optional — it is integral. Our HR strategy aggressively drives continuous development, advanced technical specialization, and cross-functional mastery. We shape professionals who are sharp, fast, and future-ready — individuals capable of handling complex engineering challenges with confidence and authority.

4. Merit Is the Only Currency That Counts
Growth at Matrix Metals is earned — not given. Promotions, opportunities, responsibilities, and leadership roles are awarded to those who prove their capability through performance, discipline, and measurable impact. We celebrate problem-solvers, strategic thinkers, and individuals who take ownership of outcomes. Those who rise here are those who stand out, step up, and deliver without excuses.

5. A Workforce Governed by Respect, Strength, and Unified Purpose
We cultivate a culture of mutual respect — not softness. Our team communicates with clarity, operates with integrity, and stands united under a shared mission: to establish Matrix Metals as India's most formidable and technologically superior metal service organization. Respect here is earned through conduct, competence, and contribution. Every voice is valued — but every voice must be accountable.

6. Safety and Discipline Are Non-Negotiable Commandments
In our environment, safety is enforced with military-grade seriousness. Protocols are followed without exception; procedures are executed without deviation. Every employee is expected to demonstrate discipline in workflow, machine handling, and operational behavior. A safe team is a strong team — and strength is the foundation of our performance philosophy.

7. We Build Leaders, Not Followers
Matrix Metals does not recruit followers — we cultivate leaders. Our employees are expected to take initiative, make informed decisions, and drive progress with unwavering leadership energy. Through structured mentorship, challenging assignments, and exposure to high-impact operations, we develop individuals who can command teams, manage complexity, and build the future of the organization.

8. One Team. One Standard. One Mission.
Every individual at Matrix Metals is expected to align with a single uncompromising mission: to elevate this organization to the highest tier of industrial excellence and global competitiveness. We operate as a unified force — disciplined, focused, and relentless in execution. Our people are not just employees; they are the architects of our success and the foundation of our dominance in the metal processing sector.`,
    },
    {
  title: "Careers at Matrix Metals",
  text: "Build your future with a company that builds leaders.",
  fullContent: `1. A Workplace Built for Performers, Not Passengers
Careers at Matrix Metals LLP are designed for individuals who thrive on responsibility, precision, and relentless excellence. We do not just hire employees — we seek high-caliber professionals who are driven, solution-focused, and uncompromising when it comes to discipline and delivery.

2. Who We Look For
Matrix Metals is the place for people who aspire to lead, innovate, and outperform. We welcome:
• Engineers with sharp analytical focus and problem-solving capability
• Professionals who take ownership instead of waiting for instructions
• Individuals who value accuracy, speed, and structured execution
• Learners committed to continuous growth, skill advancement, and adaptability
• Leaders driven by integrity, courage, accountability, and strong ethics

3. A Culture Engineered for Excellence
Our environment is built on high performance, structured discipline, and mutual respect. Every role is designed with clarity, purpose, and measurable outcomes — empowering individuals to operate with confidence, alignment, and impact.

4. Growth Built on Merit and Mastery
At Matrix Metals, growth is earned — not granted by tenure. We offer a fast-paced professional journey where career elevation is based purely on demonstrated competence, contribution, and leadership qualities. High performers progress rapidly; mediocrity has no space here.

5. Training, Learning & Advanced Skill Development
Employees gain exposure to cutting-edge technologies, expert mentorship, and cross-functional learning pathways. Our commitment is to develop individuals into industry-leading professionals equipped with global operational standards.

6. A Safe, Empowering, and Professional Workplace
We maintain an environment that prioritizes safety, respect, and operational ethics. Every individual is provided the tools, structure, and support required to perform at their highest capability while maintaining well-being and confidence.

7. A Place to Contribute, Lead, and Transform
Matrix Metals LLP is not merely a workplace — it is a professional proving ground. Those who join us build not just careers, but legacies of discipline, innovation, and leadership.

Here, careers are not built — they are forged.`,
},
{
  title: "Signature Initiatives & Leadership Impact",
  text: "Strategic transformation driven by innovation, precision, and global-standard execution.",
  fullContent: `1. Transforming Matrix Metals Into a High-Precision Engineering Powerhouse
Under Jeeteen’s leadership, Matrix Metals has evolved into a sophisticated, multi-capability aluminium engineering and processing ecosystem. His strategic directives enabled the integration of:
• Precision slitting
• Advanced CTL (Cut-To-Length)
• Coil-to-coil surface conditioning
• Multi-metal degreasing technology
• Laminated aluminium system manufacturing

This transformation has strengthened operational reliability, reduced production variances, and enhanced output consistency — especially for high-tolerance, advanced industrial and architectural applications.

2. Global Machinery Integration & International Technology Partnerships
Jeeteen has served as the lead strategist and technical decision-maker for procuring globally benchmarked machinery and technological systems. His ability to evaluate multi-variable engineering frameworks, decode complex technical specifications, and convert them into scalable deployment plans has positioned Matrix Metals at a world-class operational benchmark. This ensures that every machine installed meets criteria of precision, durability, and long-term operational return.

3. Leadership in Advanced Materials R&D
With a forward-looking approach to innovation, Jeeteen has driven research and development initiatives focused on next-generation aluminium solutions including:
• ASA film fusion with 3xxx aluminium grades
• Surface tension optimization for superior coating and adhesion traits
• Controlled RA profiling for architectural-grade finishing standards
• Chemical/environmental compatibility protocols for lifecycle performance stability

These R&D initiatives have unlocked premium-value, application-specific product pathways, enabling Matrix Metals to operate in segments demanding precision, reliability, and engineered customization.

Through strategic insight, disciplined execution, and innovation-focused leadership, Jeeteen continues to shape Matrix Metals into a future-ready industry leader.`,
},


  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 via-slate-100 to-slate-200 text-gray-900 font-sans">
      {/* HERO */}
      <header className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <img
            src="/Images/aluminium-sector.jpg"
            alt="Overview hero"
            className="w-full h-[320px] md:h-[420px] object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900/70 to-slate-800/50" />
        </div>

        <div className="relative container-custom px-6 py-12 md:py-16 text-white">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-6xl text-orange-400 font-extrabold tracking-tight mb-2"
          >
            Matrix Metals
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.15, duration: 0.6 }}
            className="text-sm md:text-base text-gray-500 max-w-3xl mb-6"
          >
            Matrix Metals is a next-generation industrial solutions company built on precision engineering, operational excellence, and deep domain expertise in coil processing technologies.
          </motion.p>

          <motion.button
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            onClick={() => setShowIntroModal(true)}
            className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-lg font-semibold transition"
          >
            Read More
          </motion.button>
        </div>
      </header>

      {/* MAIN SECTION */}
      <main className="container-custom px-6 py-8 md:py-12">
        {/* Tabs Section */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="lg:col-span-2 bg-white/60 backdrop-blur-sm rounded-2xl p-10 shadow-md border border-slate-200"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Matrix Metals Organization</h2>
            <p className="text-gray-600 leading-relaxed max-w-prose">
              Matrix Metals Service Center Private Limited is a joint venture of Akash Aluminium and Mysore Tube Suppliers. We leverage decades of combined expertise in metal processing, automation, and operational excellence to deliver world-class solutions.
            </p>
          </motion.div>

          <motion.aside
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl p-6 shadow-md border border-slate-200"
          >
            <div className="flex gap-3 mb-4">
              {["vision", "philosophy", "values"].map((t) => (
                <button
                  key={t}
                  onClick={() => setTab(t)}
                  className={`px-3 py-2 text-sm font-semibold rounded-md transition ${
                    tab === t
                      ? "bg-orange-800 text-white shadow"
                      : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                  }`}
                >
                  {t[0].toUpperCase() + t.slice(1)}
                </button>
              ))}
            </div>

            <div className="bg-gradient-to-br from-slate-50 to-slate-100 rounded-lg p-5 border border-slate-200">
              <h4 className="text-sm font-semibold text-orange-800 mb-2 capitalize">{tab}</h4>
              {tabContent[tab]}
            </div>
          </motion.aside>
        </div>

        {/* Info Blocks - 7 sections */}
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {infoBlocks.map((b, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * i, duration: 0.5 }}
              viewport={{ once: true }}
              className="bg-slate-900 text-white rounded-2xl p-6 shadow-lg relative overflow-hidden"
            >
              <h5 className="font-bold mb-3 text-lg">{b.title}</h5>
              <p className="text-sm text-slate-200 leading-relaxed">{b.text}</p>

              <div className="mt-5 flex gap-3">
                <button
                  onClick={() => setSelectedCard(i)}
                  className="bg-amber-500 text-white px-4 py-2 rounded-md text-sm font-semibold shadow hover:brightness-95 transition"
                >
                  Read more
                </button>
                <button className="bg-white/10 text-white px-4 py-2 rounded-md text-sm hover:bg-white/20 transition">
                  →
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </main>

      {/* Card Detail Modal */}
      {selectedCard !== null && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedCard(null)}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className="bg-white rounded-2xl shadow-2xl max-h-[90vh] overflow-y-auto w-full max-w-4xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="sticky top-0 bg-gradient-to-r from-slate-900 to-slate-800 text-white p-6 flex justify-between items-center">
              <h2 className="text-2xl sm:text-3xl font-bold">{infoBlocks[selectedCard].title}</h2>
              <button
                onClick={() => setSelectedCard(null)}
                className="text-2xl hover:text-orange-400 transition"
              >
                ×
              </button>
            </div>

            {/* Modal Content */}
            <div className="p-6 sm:p-8 space-y-4 text-gray-800">
              {infoBlocks[selectedCard].fullContent.split('\n\n').map((paragraph, idx) => (
                <p key={idx} className="leading-relaxed text-sm sm:text-base">
                  {paragraph}
                </p>
              ))}

              {/* Close Button */}
              <div className="mt-8 flex justify-center pt-4 border-t">
                <button
                  onClick={() => setSelectedCard(null)}
                  className="bg-orange-500 hover:bg-orange-600 text-white px-6 sm:px-8 py-2 sm:py-3 rounded-lg font-semibold transition text-sm sm:text-base"
                >
                  Close
                </button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}

      {/* Introduction Modal */}
      {showIntroModal && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center p-4"
          onClick={() => setShowIntroModal(false)}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className="bg-white rounded-2xl shadow-2xl max-h-[90vh] overflow-y-auto w-full max-w-4xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="sticky top-0 bg-gradient-to-r from-slate-900 to-slate-800 text-white p-6 flex justify-between items-center">
              <h2 className="text-2xl sm:text-3xl font-bold">Matrix Metals — Introduction</h2>
              <button
                onClick={() => setShowIntroModal(false)}
                className="text-2xl hover:text-orange-400 transition flex-shrink-0"
              >
                ×
              </button>
            </div>

            {/* Modal Content */}
            <div className="p-6 sm:p-8 space-y-6 text-gray-800">
              <div>
                <h3 className="text-xl sm:text-2xl font-bold text-orange-600 mb-3">Who We Are</h3>
                <p className="leading-relaxed text-sm sm:text-base">
                  Matrix Metals is a next-generation industrial solutions company built on precision engineering, operational excellence, and deep domain expertise in coil processing technologies. We operate at the intersection of advanced machinery, automation intelligence, and high-performance manufacturing—delivering solutions that consistently exceed global benchmarks. With a leadership vision rooted in innovation and uncompromising quality, Matrix Metals has rapidly evolved into one of India's most trusted engineering partners.
                </p>
              </div>

              <div>
                <h3 className="text-xl sm:text-2xl font-bold text-orange-600 mb-3">What We Deliver</h3>
                <p className="leading-relaxed text-sm sm:text-base">
                  Our capabilities span across coil-to-coil processing lines, slitting, cut-to-length systems, polishing lines, lamination technologies, and advanced automation integration. Each project is executed with engineering discipline and a zero-defect philosophy. We combine scientific analysis, real-world manufacturing experience, and rigorous technical documentation to create systems that elevate production efficiency, enhance material yield, and strengthen quality consistency across industries.
                </p>
              </div>

              <div>
                <h3 className="text-xl sm:text-2xl font-bold text-orange-600 mb-3">Our Engineering Edge</h3>
                <p className="leading-relaxed text-sm sm:text-base">
                  What distinguishes Matrix Metals is our ability to translate complex industrial challenges into clear, executable, and future-proof solutions. Our team brings global-level expertise in metallurgy, machine design, automation control, and process diagnostics—allowing us to solve problems proactively rather than reactively. Every recommendation we provide is grounded in data, field experience, and a deep understanding of how industrial ecosystems operate at scale.
                </p>
              </div>

              <div>
                <h3 className="text-xl sm:text-2xl font-bold text-orange-600 mb-3">Our Commitment to Clients</h3>
                <p className="leading-relaxed text-sm sm:text-base">
                  We work as long-term partners, not vendors. Every Matrix Metals engagement is driven by transparency, technical accuracy, and an unwavering commitment to safeguarding client interests. Our consultative approach ensures that each customer receives tailored engineering solutions aligned with their production goals, financial targets, and future expansion plans. We treat every project as a mission to deliver measurable improvement and operational transformation.
                </p>
              </div>

              <div>
                <h3 className="text-xl sm:text-2xl font-bold text-orange-600 mb-3">Our Vision for the Future</h3>
                <p className="leading-relaxed text-sm sm:text-base">
                  Matrix Metals is shaping the next era of industrial advancement—where intelligent automation, sustainable manufacturing, and precision engineering merge to create globally competitive facilities. Our vision is to empower manufacturers with world-class technology, high-performing processes, and long-term reliability. As we continue to expand our capabilities and partnerships, Matrix Metals remains dedicated to setting new standards for engineering excellence and industry leadership.
                </p>
              </div>

              <div>
                <h3 className="text-xl sm:text-2xl font-bold text-orange-600 mb-3">Technology-Driven Engineering Culture</h3>
                <p className="leading-relaxed text-sm sm:text-base">
                  Matrix Metals operates with a technology-first mindset, constantly integrating advanced automation, data intelligence, and system-level optimization into every project we execute. Our engineering culture is built on precision, evidence-based design, and continuous improvement. This allows us to deliver solutions that not only meet current industrial requirements but also anticipate the challenges of tomorrow—making our clients future-ready in a rapidly evolving global market.
                </p>
              </div>

              <div>
                <h3 className="text-xl sm:text-2xl font-bold text-orange-600 mb-3">Global Vendor Collaboration & Compliance</h3>
                <p className="leading-relaxed text-sm sm:text-base">
                  With deep exposure to international machinery ecosystems, Matrix Metals collaborates with industry-leading manufacturers across Asia, Europe, and the United States. Our ability to evaluate, specify, and integrate global-standard systems gives our clients access to world-class technologies with complete transparency and compliance. Whether it is technical audits, vendor selection, quality validation, or cross-border project coordination, Matrix Metals ensures every detail is handled with professional rigor.
                </p>
              </div>

              <div>
                <h3 className="text-xl sm:text-2xl font-bold text-orange-600 mb-3">Strategic Project Management Excellence</h3>
                <p className="leading-relaxed text-sm sm:text-base">
                  Every Matrix Metals project is executed through a structured and disciplined project management framework. From technical feasibility and engineering documentation to installation oversight and performance validation, we follow a process-driven approach that minimizes risk and maximizes operational output. Our planning precision, timeline adherence, and strong communication standards make us a preferred execution partner for high-value industrial investments.
                </p>
              </div>

              <div>
                <h3 className="text-xl sm:text-2xl font-bold text-orange-600 mb-3">Empowering Industries Across Sectors</h3>
                <p className="leading-relaxed text-sm sm:text-base">
                  Matrix Metals empowers manufacturers across a wide spectrum—stainless steel, aluminum, aerospace, defense, automotive, consumer durables, and advanced sheet metal applications. Our cross-industry exposure gives us the ability to design smarter lines, optimize complex workflows, and introduce solutions that deliver significant value in diverse operational environments. We understand that every industry operates with unique demands, and Matrix Metals is equipped to meet them with agility and expertise.
                </p>
              </div>

              <div>
                <h3 className="text-xl sm:text-2xl font-bold text-orange-600 mb-3">A Brand Built on Integrity & Performance</h3>
                <p className="leading-relaxed text-sm sm:text-base">
                  Above all, Matrix Metals is a brand defined by integrity, precision, and performance. Our commitment to truth, accuracy, and engineering honesty is reflected in every interaction, every document, and every project milestone. Clients trust us because we deliver what we promise, defend their interests, and stand behind the long-term success of every installation. This commitment forms the foundation of our reputation and the reason behind our growing presence in India's high-performance manufacturing landscape.
                </p>
              </div>

              {/* Close Button */}
              <div className="mt-8 flex justify-center pt-4 border-t">
                <button
                  onClick={() => setShowIntroModal(false)}
                  className="bg-orange-500 hover:bg-orange-600 text-white px-6 sm:px-8 py-2 sm:py-3 rounded-lg font-semibold transition text-sm sm:text-base"
                >
                  Close
                </button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </div>
  );
}
