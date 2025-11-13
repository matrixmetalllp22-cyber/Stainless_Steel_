import React from "react";
import { motion } from "framer-motion";

const leaders = [
  {
    name: "Jeeten ",
    role: "Chairman",
    image: "/images/miki-yusuke.jpg",
    bgColor: "bg-orange-400",
    quote: `"We, Marubeni-Itochu Steel of Japan, are privileged to offer our business intelligence and join hands with JSW Steel of India in creating an entity in the field of value steel processing..."`,
  },
  {
    name: "Rakesh Chauhan",
    role: "JMD",
    image: "/images/rakesh-chauhan.jpg",
    bgColor: "bg-blue-400",
    quote: `"At JSW MI, we are motivated and geared up to move in conjunction with the ever-increasing capacities of JSW Steel as well as all-India demand. We look forward to creating a better tomorrow for all stakeholders."`,
  },
];

const clients = [
  { name: "Tata Motors", logo: "/logos/tata.png" },
  { name: "Bosch", logo: "/logos/bosch.png" },
  { name: "Bajaj", logo: "/logos/bajaj.png" },
  { name: "Maruti Suzuki", logo: "/logos/maruti.png" },
  { name: "Mahindra", logo: "/logos/mahindra.png" },
  { name: "Hyundai", logo: "/logos/hyundai.png" },
  { name: "Hero MotoCorp", logo: "/logos/hero.png" },
  { name: "TVS", logo: "/logos/tvs.png" },
  { name: "Ashok Leyland", logo: "/logos/ashok.png" },
  { name: "Volvo Eicher", logo: "/logos/volvo.png" },
];

const LeadershipAndClients = () => {
  return (
    <section className="bg-gray-900 text-white">
      {/* Leadership Section */}
      {/* Leadership Section */}
<div className="flex flex-col gap-12">
  {leaders.map((leader, i) => (
    <div
      key={i}
      className="grid grid-cols-1 md:grid-cols-2 items-stretch overflow-hidden rounded-2xl shadow-lg"
    >
      {/* If even index → image right, odd → image left */}
      {i % 2 === 0 ? (
        <>
          {/* Left: Colored area with name & quote */}
          <div
            className={`${leader.bgColor} flex flex-col justify-center items-start p-10 text-white`}
          >
            <h2 className="text-4xl font-bold mb-2">{leader.name}</h2>
            <p className="text-2xl mb-4">({leader.role})</p>
            <p className="text-white/90 leading-relaxed text-sm max-w-md">
              {leader.quote}
            </p>
          </div>

          {/* Right: Image */}
          <div className="flex justify-center items-center bg-gray-900">
            <img
              src={leader.image}
              alt={leader.name}
              className="w-full h-96 object-cover"
            />
          </div>
        </>
      ) : (
        <>
          {/* Left: Image */}
          <div className="flex justify-center items-center bg-gray-800">
            <img
              src={leader.image}
              alt={leader.name}
              className="w-full h-96 object-cover"
            />
          </div>

          {/* Right: Colored area */}
          <div
            className={`${leader.bgColor} flex flex-col justify-center items-start p-10 text-white`}
          >
            <h2 className="text-4xl font-bold mb-2">{leader.name}</h2>
            <p className="text-2xl mb-4">({leader.role})</p>
            <p className="text-white/90 leading-relaxed text-sm max-w-md">
              {leader.quote}
            </p>
          </div>
        </>
      )}
    </div>
  ))}
</div>


      {/* Clients Section */}
      {/* Clients Section */}
<div className="py-16 bg-white text-center overflow-hidden relative">
  <h2 className="text-3xl font-bold text-gray-800 mb-12">
    Our Esteemed Customers
  </h2>

  {/* Scrolling Container */}
  <div className="w-full overflow-hidden">
    <motion.div
      className="flex gap-12 justify-center items-center"
      animate={{
        x: ["0%", "-100%"],
      }}
      transition={{
        repeat: Infinity,
        duration: 20,
        ease: "linear",
      }}
    >
      {[...clients, ...clients].map((client, index) => (
        <div
          key={index}
          className="flex-shrink-0 p-4 rounded-xl bg-white border border-gray-200 shadow-sm hover:shadow-md transition-all duration-300"
        >
          <img
            src={client.logo}
            alt={client.name}
            className="w-32 h-16 object-contain mx-auto grayscale hover:grayscale-0 transition-all duration-300"
          />
        </div>
      ))}
    </motion.div>
  </div>

  {/* Subtle Gradient Fade on Edges */}
  <div className="absolute top-0 left-0 w-24 h-full bg-gradient-to-r from-white to-transparent pointer-events-none" />
  <div className="absolute top-0 right-0 w-24 h-full bg-gradient-to-l from-white to-transparent pointer-events-none" />
</div>

    </section>
  );
};

export default LeadershipAndClients;




















// import React from "react";

// const logos = [
//   "/logos/tata.png",
//   "/logos/bosch.png",
//   "/logos/mahindra.png",
//   "/logos/hyundai.png",
//   "/logos/maruti.png",
//   "/logos/ashokleyland.png",
//   "/logos/toyota.png",
//   "/logos/hero.png",
//   "/logos/bajaj.png",
//   "/logos/honda.png",
// ];

// export default function EsteemedCustomers() {
//   return (
//     <section className="bg-white py-16 overflow-hidden">
//       <h2 className="text-3xl font-bold text-center mb-10">
//         Our Esteemed Customers
//       </h2>

//       {/* Logo Slider Container */}
//       <div className="relative w-full overflow-hidden">
//         <div className="flex animate-scroll">
//           {/* Duplicate logos twice for infinite loop */}
//           {[...logos, ...logos].map((logo, i) => (
//             <div
//               key={i}
//               className="flex-shrink-0 w-40 h-40 flex items-center justify-center mx-6"
//             >
//               <img
//                 src={logo}
//                 alt={`Customer logo ${i}`}
//                 className="w-24 h-24 object-contain opacity-80 hover:opacity-100 transition-opacity duration-300"
//               />
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }


































// // import React, { useEffect, useState } from "react";

// // const logos = [
// //   "/logos/tata.png",
// //   "/logos/bosch.png",
// //   "/logos/mahindra.png",
// //   "/logos/hyundai.png",
// //   "/logos/maruti.png",
// //   "/logos/ashokleyland.png",
// //   "/logos/toyota.png",
// //   "/logos/hero.png",
// //   "/logos/bajaj.png",
// //   "/logos/honda.png",
// // ];

// // export default function LeadershipAndClients() {
// //   const [currentSlide, setCurrentSlide] = useState(0);

// //   // Auto slide every 5 seconds
// //   useEffect(() => {
// //     const interval = setInterval(() => {
// //       setCurrentSlide((prev) => (prev + 1) % Math.ceil(logos.length / 5));
// //     }, 5000);
// //     return () => clearInterval(interval);
// //   }, []);

// //   // Divide logos into chunks of 5
// //   const chunked = [];
// //   for (let i = 0; i < logos.length; i += 5) {
// //     chunked.push(logos.slice(i, i + 5));
// //   }

// //   return (
// //     <section className="w-full">
// //       {/* ----------- Miki Section ----------- */}
// //       <div className="grid md:grid-cols-2 items-center bg-gray-50">
// //         <div className="bg-orange-500 text-white p-12 flex flex-col justify-center items-start">
// //           <h2 className="text-4xl font-bold mb-2">Miki Yusuke</h2>
// //           <p className="text-2xl mb-6">(Chairman)</p>
// //           <p className="text-white/90 leading-relaxed text-sm max-w-md">
// //             “We, Marubeni-Itochu Steel of Japan, are privileged to offer our
// //             business intelligence and join hands with JSW Steel of India in
// //             creating an entity in the field of value steel processing...”
// //           </p>
// //         </div>
// //         <div className="flex justify-center items-center p-10 bg-gray-900">
// //           <img
// //             src="/images/miki-yusuke.jpg"
// //             alt="Miki Yusuke"
// //             className="w-72 h-72 rounded-lg object-cover"
// //           />
// //         </div>
// //       </div>

// //       {/* ----------- Rakesh Section ----------- */}
// //       <div className="grid md:grid-cols-2 items-center bg-gray-100">
// //         <div className="flex justify-center items-center p-10 bg-gray-800">
// //           <img
// //             src="/images/rakesh-chauhan.jpg"
// //             alt="Rakesh Chauhan"
// //             className="w-72 h-72 rounded-lg object-cover"
// //           />
// //         </div>
// //         <div className="bg-blue-600 text-white p-12 flex flex-col justify-center items-start">
// //           <h2 className="text-4xl font-bold mb-2">Rakesh Chauhan</h2>
// //           <p className="text-2xl mb-6">(JMD)</p>
// //           <p className="text-white/90 leading-relaxed text-sm max-w-md">
// //             “JSW MI has always focused on operational excellence, customer
// //             satisfaction, and continuous innovation for a better tomorrow.”
// //           </p>
// //         </div>
// //       </div>

// //       {/* ----------- Clients Section ----------- */}
// //       <div className="bg-white py-16">
// //         <h2 className="text-3xl font-bold text-center mb-8">
// //           Our Esteemed Customers
// //         </h2>

// //         <div className="overflow-hidden relative max-w-6xl mx-auto">
// //           <div
// //             className="flex transition-transform duration-700 ease-in-out"
// //             style={{
// //               transform: `translateX(-${currentSlide * 100}%)`,
// //               width: `${chunked.length * 100}%`,
// //             }}
// //           >
// //             {chunked.map((group, index) => (
// //               <div
// //                 key={index}
// //                 className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 justify-items-center w-full"
// //               >
// //                 {group.map((logo, i) => (
// //                   <div
// //                     key={i}
// //                     className="w-32 h-32 flex items-center justify-center transition-all duration-500 hover:scale-110 hover:rotate-3 hover:shadow-lg hover:bg-gray-50 rounded-xl"
// //                   >
// //                     <img
// //                       src={logo}
// //                       alt="Client Logo"
// //                       className="object-contain w-20 h-20"
// //                     />
// //                   </div>
// //                 ))}
// //               </div>
// //             ))}
// //           </div>
// //         </div>
// //       </div>
// //     </section>
// //   );
// // }













// import React, { useEffect, useState } from "react";

// const logos = [
//   "/logos/tata.png",
//   "/logos/bosch.png",
//   "/logos/mahindra.png",
//   "/logos/hyundai.png",
//   "/logos/maruti.png",
//   "/logos/ashokleyland.png",
//   "/logos/toyota.png",
//   "/logos/hero.png",
//   "/logos/bajaj.png",
//   "/logos/honda.png",
// ];

// export default function LeadershipAndClients() {
//   const [currentSlide, setCurrentSlide] = useState(0);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentSlide((prev) => (prev + 1) % logos.length);
//     }, 1000); // change logo every 1.5 sec
//     return () => clearInterval(interval);
//   }, []);

//   // Shift logos one by one
//   const displayed = [
//     logos[currentSlide],
//     logos[(currentSlide + 1) % logos.length],
//     logos[(currentSlide + 2) % logos.length],
//     logos[(currentSlide + 3) % logos.length],
//     logos[(currentSlide + 4) % logos.length],
//   ];

//   return (
//     <section className="w-full">
//       {/* ----------- Miki Section ----------- */}
//       <div className="grid md:grid-cols-2 items-center bg-gray-50">
//         <div className="bg-orange-500 text-white p-12 flex flex-col justify-center items-start">
//           <h2 className="text-4xl font-bold mb-2">Miki Yusuke</h2>
//           <p className="text-2xl mb-6">(Chairman)</p>
//           <p className="text-white/90 leading-relaxed text-sm max-w-md">
//             “We, Marubeni-Itochu Steel of Japan, are privileged to offer our
//             business intelligence and join hands with JSW Steel of India in
//             creating an entity in the field of value steel processing...”
//           </p>
//         </div>
//         <div className="flex justify-center items-center p-10 bg-gray-900">
//           <img
//             src="/images/miki-yusuke.jpg"
//             alt="Miki Yusuke"
//             className="w-72 h-72 rounded-lg object-cover"
//           />
//         </div>
//       </div>

//       {/* ----------- Rakesh Section ----------- */}
//       <div className="grid md:grid-cols-2 items-center bg-gray-100">
//         <div className="flex justify-center items-center p-10 bg-gray-800">
//           <img
//             src="/images/rakesh-chauhan.jpg"
//             alt="Rakesh Chauhan"
//             className="w-72 h-72 rounded-lg object-cover"
//           />
//         </div>
//         <div className="bg-blue-600 text-white p-12 flex flex-col justify-center items-start">
//           <h2 className="text-4xl font-bold mb-2">Rakesh Chauhan</h2>
//           <p className="text-2xl mb-6">(JMD)</p>
//           <p className="text-white/90 leading-relaxed text-sm max-w-md">
//             “JSW MI has always focused on operational excellence, customer
//             satisfaction, and continuous innovation for a better tomorrow.”
//           </p>
//         </div>
//       </div>

//       {/* ----------- Clients Section ----------- */}
//       <div className="bg-white py-16">
//         <h2 className="text-3xl font-bold text-center mb-8">
//           Our Esteemed Customers
//         </h2>

//         <div className="overflow-hidden max-w-6xl mx-auto">
//           <div className="flex justify-center gap-8 transition-all duration-700 ease-in-out">
//             {displayed.map((logo, i) => (
//               <div
//                 key={i}
//                 className="w-32 h-32 flex items-center justify-center"
//               >
//                 <img
//                   src={logo}
//                   alt="Client Logo"
//                   className="object-contain w-20 h-20"
//                 />
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }
