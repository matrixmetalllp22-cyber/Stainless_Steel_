import React from 'react';
import { Link } from 'react-router-dom';
import Overview from '../components/Overview';
import ManagementTeam from '../components/ManagementTeam';

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
  </div>
  )
}






















//   const milestones = [
//     { year: '1975', title: 'Company Founded', description: 'Started operations with a vision for industrial excellence.' },
//     { year: '1990', title: 'International Expansion', description: 'Expanded operations to international markets.' },
//     { year: '2005', title: 'Digital Transformation', description: 'Implemented advanced digital solutions across operations.' },
//     { year: '2025', title: 'Sustainability Leader', description: 'Achieved major sustainability milestones.' }
//   ];

//   const values = [
//     {
//       title: 'Innovation',
//       description: 'Driving technological advancement and creative solutions.',
//       icon: (
//         <svg className="h-8 w-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
//         </svg>
//       )
//     },
//     {
//       title: 'Excellence',
//       description: 'Maintaining the highest standards in all operations.',
//       icon: (
//         <svg className="h-8 w-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
//         </svg>
//       )
//     },
//     {
//       title: 'Sustainability',
//       description: 'Commitment to environmental responsibility.',
//       icon: (
//         <svg className="h-8 w-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
//         </svg>
//       )
//     }
//   ];

//   const stats = [
//     { value: '1,200+', label: 'Projects Delivered' },
//     { value: '95%', label: 'Client Satisfaction' },
//     { value: '30+', label: 'Countries Served' }
//   ];

//   const team = [
//     { name: 'Asha Patel', role: 'Chief Executive Officer', photo: 'https://i.pravatar.cc/300?img=32' },
//     { name: 'Rajat Sharma', role: 'Head of Engineering', photo: 'https://i.pravatar.cc/300?img=12' },
//     { name: 'Maya Singh', role: 'Director — Sustainability', photo: 'https://i.pravatar.cc/300?img=47' },
//     { name: 'Dinesh Kumar', role: 'Head of Operations', photo: 'https://i.pravatar.cc/300?img=5' }
//   ];

//   return (
//     <div className="min-h-screen bg-white">
//       {/* Hero Section */}
//       <section className="relative h-[60vh] flex items-center">
//         <div className="absolute inset-0 bg-gradient-to-br from-blue-900 via-blue-800 to-black opacity-60 z-10" />
//         <div
//           className="absolute inset-0 bg-cover bg-center"
//           style={{ backgroundImage: "url('/images/about-hero.jpg')" }}
//         />
//         <div className="container-custom relative z-20 text-white">
//           <h1 className="heading-primary mb-4">About Our Company</h1>
//           <p className="text-lg md:text-xl max-w-3xl muted">
//             We design, build, and optimize industrial solutions that power modern infrastructure — with an
//             eye on efficiency, safety and sustainability.
//           </p>
//           <div className="mt-6 flex flex-wrap gap-3">
//             <Link to="/contact" className="inline-block bg-white text-blue-900 px-6 py-2 rounded-md font-semibold">Contact Us</Link>
//             <Link to="/careers" className="inline-block border border-white text-white px-6 py-2 rounded-md">Careers</Link>
//           </div>
//         </div>
//       </section>

//       {/* Quick Stats */}
//       <section className="-mt-12">
//         <div className="container-custom">
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//             {stats.map((s) => (
//               <div key={s.label} className="card-glass p-6 text-center">
//                 <div className="text-3xl md:text-4xl font-bold">{s.value}</div>
//                 <div className="mt-2 muted">{s.label}</div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Vision & Mission */}
//       {/* <section className="section-padding bg-gray-50">
//         <div className="container-custom">
//           <div className="grid md:grid-cols-2 gap-12 items-start">
//             <div>
//               <h2 className="heading-secondary mb-4">Our Vision</h2>
//               <p className="text-content">
//                 To be a globally recognized leader in industrial solutions, driving innovation and sustainable
//                 practices while creating value for all stakeholders.
//               </p>
//             </div>
//             <div>
//               <h2 className="heading-secondary mb-4">Our Mission</h2>
//               <p className="text-content">
//                 To deliver excellence through cutting-edge technology, a committed workforce, and sustainable
//                 practices, ensuring customer satisfaction and industry leadership.
//               </p>
//             </div>
//           </div>
//         </div>
//       </section> */}

//       {/* Core Values */}
//       {/* <section className="section-padding">
//         <div className="container-custom">
//           <h2 className="heading-secondary text-center mb-8">Our Core Values</h2>
//           <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
//             {values.map((value) => (
//               <div key={value.title} className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition">
//                 <div className="flex items-center gap-4 mb-4">
//                   <div className="w-12 h-12 flex items-center justify-center bg-blue-50 rounded-full">{value.icon}</div>
//                   <h3 className="text-lg font-semibold">{value.title}</h3>
//                 </div>
//                 <p className="text-content">{value.description}</p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section> */}

//       {/* Journey Timeline */}
//       {/* <section className="section-padding bg-gray-50">
//         <div className="container-custom">
//           <h2 className="heading-secondary text-center mb-8">Our Journey</h2>
//           <div className="grid md:grid-cols-2 gap-6">
//             {milestones.map((m) => (
//               <div key={m.year} className="flex gap-4 items-start">
//                 <div className="w-16 h-16 flex items-center justify-center bg-blue-600 text-white rounded-lg font-bold">{m.year}</div>
//                 <div>
//                   <h4 className="font-semibold">{m.title}</h4>
//                   <p className="muted">{m.description}</p>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section> */}

//       {/* Team
//       <section className="section-padding">
//         <div className="container-custom">
//           <h2 className="heading-secondary text-center mb-8">Meet the Team</h2>
//           <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
//             {team.map((p) => (
//               <div key={p.name} className="text-center p-4 bg-white rounded-lg shadow hover:scale-[1.02] transition-transform">
//                 <img src={p.photo} alt={p.name} className="w-28 h-28 mx-auto rounded-full object-cover mb-4" />
//                 <div className="font-semibold">{p.name}</div>
//                 <div className="muted text-sm">{p.role}</div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section> */}

//       <section> 
//         <div> 
//           <Overview />
//         </div>
//       </section>

//       <section> 
//         <div> 
//           <ManagementTeam />
//         </div>
//       </section>


//       {/* CTA Section */}
//       {/* <section className="bg-blue-900 text-white section-padding">
//         <div className="container-custom text-center">
//           <h2 className="heading-secondary text-white mb-4">Ready to Work With Us?</h2>
//           <p className="text-lg mb-6 max-w-2xl mx-auto muted">Join us in shaping the future of industrial excellence.</p>
//           <div className="flex flex-wrap justify-center gap-4">
//             <Link to="/contact" className="bg-white text-blue-900 px-6 py-2 rounded-md font-semibold">Get in Touch</Link>
//             <Link to="/careers" className="border border-white text-white px-6 py-2 rounded-md">View Careers</Link>
//           </div>
//         </div>
//       </section> */}
//     </div>
//   );
// }