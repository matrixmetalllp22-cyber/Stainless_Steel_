// import React, { useState, useEffect, useRef } from "react";
// import { FiArrowRight, FiX, FiChevronLeft, FiChevronRight } from "react-icons/fi";

// export default function WelcomePage() {
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const [selectedService, setSelectedService] = useState(null);
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const carouselRef = useRef(null);

//   // Updated content for Matrix Metals LLP
//   const services = [
//     {
//       category: "Precision Slitting",
//       description: "High-accuracy strip conversion with burr-controlled edges and uniform coil winding. Our systems ensure micron-level tolerance control for industries where failure is not an option, including fabrication, stamping, and forming.",
//       buttonText: "READ MORE >>",
//       image: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?w=400&h=300&fit=crop",
//     },
//     {
//       category: "Cut-to-Length Processing",
//       description: "Flat, surface-protected stainless sheets processed with precision leveling control. We ensure optimal downstream performance and structural integrity retention for aerospace and defense sectors.",
//       buttonText: "READ MORE >>",
//       image: "https://images.unsplash.com/photo-1581091226033-d5c48150dbaa?w=400&h=300&fit=crop",
//     },
//     {
//       category: "Aerospace & Defense",
//       description: "Specialized processing under the MoOWR framework. We deliver mission-critical components with strict dimensional verification, camber analysis, and full batch traceability documentation.",
//       buttonText: "READ MORE >>",
//       image: "https://images.unsplash.com/photo-1517976487492-5750f3195933?w=400&h=300&fit=crop",
//     },
//     {
//       category: "Automotive & EV",
//       description: "Precision-driven stainless steel solutions for the EV sector. Our high-speed processing lines focus on surface-finish consistency and tight width tolerances for battery and engine components.",
//       buttonText: "READ MORE >>",
//       image: "https://images.unsplash.com/photo-1593941707882-a5bba14938c7?w=400&h=300&fit=crop",
//     },
//     {
//       category: "Surface Integrity Management",
//       description: "Advanced surface-protection technologies and scratch-free handling systems. We maintain the cosmetic and structural quality of stainless steel for high-end architectural and infrastructure projects.",
//       buttonText: "READ MORE >>",
//       image: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=400&h=300&fit=crop",
//     },
//     {
//       category: "Engineering Consultation",
//       description: "Technical support and process excellence. We offer structured material flow planning and consultation to help industrial partners achieve benchmark performance in global markets.",
//       buttonText: "READ MORE >>",
//       image: "https://images.unsplash.com/photo-1537462715879-360eeb61a0ad?w=400&h=300&fit=crop",
//     },
//   ];

//   const getRelatedItems = (serviceCategory) => {
//     // Tailored product names for Matrix Metals
//     const baseItems = [
//       { name: "Precision Strips", image: "https://images.unsplash.com/photo-1565034946487-077786996e27?w=200&h=150&fit=crop" },
//       { name: "SS Slit Coils", image: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?w=200&h=150&fit=crop" },
//       { name: "Leveled Sheets", image: "https://images.unsplash.com/photo-1516724562728-afc824a36e84?w=200&h=150&fit=crop" },
//       { name: "Protected Plates", image: "https://images.unsplash.com/photo-1581091226033-d5c48150dbaa?w=200&h=150&fit=crop" },
//     ];
//     return baseItems;
//   };

//   const openModal = (service) => {
//     setSelectedService(service);
//     setIsModalOpen(true);
//     document.body.style.overflow = "hidden";
//   };

//   const closeModal = () => {
//     setIsModalOpen(false);
//     setSelectedService(null);
//     document.body.style.overflow = "auto";
//   };

//   useEffect(() => {
//     const handleEsc = (e) => {
//       if (e.key === "Escape") closeModal();
//     };
//     window.addEventListener("keydown", handleEsc);
//     return () => window.removeEventListener("keydown", handleEsc);
//   }, []);

//   const totalSlides = services.length;
//   const slidesToShow = 3; 
//   const maxIndex = Math.max(0, totalSlides - slidesToShow);

//   const goToPrevious = () => {
//     setCurrentIndex(prev => Math.max(0, prev - 1));
//   };

//   const goToNext = () => {
//     setCurrentIndex(prev => Math.min(maxIndex, prev + 1));
//   };

//   const goToSlide = (index) => {
//     setCurrentIndex(Math.min(maxIndex, Math.max(0, index)));
//   };

//   return (
//     <div className="min-h-screen bg-white">
//       {/* Header Section */}
//       <div className="text-center py-8 px-4 animate-fade-in">
//         <h1 className="text-5xl font-bold text-gray-800">
//           WELCOME TO MATRIX METALS LLP
//         </h1>
//         <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
//           Engineering Stainless Steel with Precision, Power & Purpose. 
//           Located in Peenya, Bangalore.
//         </p>
//       </div>

//       {/* Services Carousel */}
//       <div className="px-4 md:px-8 lg:px-16 py-4">
//         <div className="relative max-w-7xl mx-auto">
//           <div className="overflow-hidden">
//             <div
//               ref={carouselRef}
//               className="flex transition-transform duration-300 ease-in-out"
//               style={{ transform: `translateX(-${currentIndex * (100 / slidesToShow)}%)` }}
//             >
//               {services.map((service, index) => (
//                 <div
//                   key={index}
//                   className="flex-shrink-0 w-full sm:w-1/2 lg:w-1/3 p-2 animate-fade-up"
//                   style={{ animationDelay: `${index * 100}ms` }}
//                 >
//                   <div className="group bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 h-full flex flex-col">
//                     <img
//                       src={service.image}
//                       alt={service.category}
//                       className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-105"
//                     />
//                     <div className="p-6 flex-grow flex flex-col">
//                       <h2 className="text-xl font-semibold text-gray-800 mb-4 text-center">
//                         {service.category}
//                       </h2>
//                       <p className="text-gray-600 text-sm mb-6 flex-grow">
//                         {service.description}
//                       </p>
//                       <button
//                         onClick={() => openModal(service)}
//                         className="self-start flex items-center text-sm font-medium text-white bg-gradient-to-r from-blue-300 to-indigo-400 px-4 py-2 rounded-full shadow-md hover:shadow-lg transition-all duration-300 group/btn"
//                       >
//                         <span>{service.buttonText}</span>
//                         <FiArrowRight className="ml-2 transition-transform duration-300 group-hover/btn:translate-x-1" size={16} />
//                       </button>
//                     </div>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>

//           {/* Navigation Arrows */}
//           {currentIndex > 0 && (
//             <button
//               onClick={goToPrevious}
//               className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-4 bg-white rounded-full p-2 shadow-lg hover:bg-gray-100 transition-colors z-10"
//               aria-label="Previous"
//             >
//               <FiChevronLeft size={24} />
//             </button>
//           )}
//           {currentIndex < maxIndex && (
//             <button
//               onClick={goToNext}
//               className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-4 bg-white rounded-full p-2 shadow-lg hover:bg-gray-100 transition-colors z-10"
//               aria-label="Next"
//             >
//               <FiChevronRight size={24} />
//             </button>
//           )}

//           {/* Pagination Dots */}
//           <div className="flex justify-center mt-6 space-x-2">
//             {Array.from({ length: maxIndex + 1 }).map((_, idx) => (
//               <button
//                 key={idx}
//                 onClick={() => goToSlide(idx)}
//                 className={`h-2 w-2 rounded-full transition-all ${
//                   idx === currentIndex ? "bg-blue-600 w-4" : "bg-gray-300"
//                 }`}
//                 aria-label={`Go to slide ${idx + 1}`}
//               />
//             ))}
//           </div>
//         </div>
//       </div>

//       {/* Modal Popup */}
//       {isModalOpen && selectedService && (
//         <div
//           className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-50 backdrop-blur-sm animate-fade-in"
//           onClick={closeModal}
//         >
//           <div
//             className="relative bg-white rounded-xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto animate-scale-in"
//             onClick={(e) => e.stopPropagation()}
//           >
//             <button
//               onClick={closeModal}
//               className="absolute top-4 right-4 p-2 rounded-full bg-gray-200 hover:bg-gray-300 transition-colors z-10"
//             >
//               <FiX size={20} />
//             </button>

//             <div className="p-6 md:p-8">
//               <h2 className="text-2xl font-bold text-gray-800 mb-4">{selectedService.category}</h2>
//               <p className="text-gray-600 mb-8">{selectedService.description}</p>

//               <h3 className="text-xl font-semibold text-gray-800 mb-4">Core Capabilities</h3>
//               <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
//                 {getRelatedItems(selectedService.category).map((item, idx) => (
//                   <div
//                     key={idx}
//                     className="bg-gray-50 rounded-lg p-3 shadow hover:shadow-md transition-all duration-300 transform hover:-translate-y-1"
//                   >
//                     <img
//                       src={item.image}
//                       alt={item.name}
//                       className="w-full h-32 object-cover rounded-md mb-2"
//                     />
//                     <p className="text-center text-sm font-medium text-gray-700">{item.name}</p>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           </div>
//         </div>
//       )}

//       {/* Custom animations */}
//       <style jsx>{`
//         @keyframes fadeIn {
//           from { opacity: 0; }
//           to { opacity: 1; }
//         }
//         @keyframes fadeUp {
//           from { opacity: 0; transform: translateY(20px); }
//           to { opacity: 1; transform: translateY(0); }
//         }
//         @keyframes scaleIn {
//           from { opacity: 0; transform: scale(0.95); }
//           to { opacity: 1; transform: scale(1); }
//         }
//         .animate-fade-in {
//           animation: fadeIn 0.3s ease-out forwards;
//         }
//         .animate-fade-up {
//           opacity: 0;
//           animation: fadeUp 0.6s ease-out forwards;
//         }
//         .animate-scale-in {
//           animation: scaleIn 0.3s ease-out forwards;
//         }
//       `}</style>
//     </div>
//   );
// }












import React, { useState, useEffect } from "react";
import { FiArrowRight, FiX, FiSettings, FiShield, FiTruck, FiLayers } from "react-icons/fi";

export default function WelcomePage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState(null);

  const services = [
    {
      category: "Precision Slitting",
      description: "High-accuracy strip conversion with burr-controlled edges and uniform coil winding. Our systems ensure micron-level tolerance control.",
      image: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?w=600&h=400&fit=crop",
      icon: <FiSettings className="text-blue-600" size={24} />
    },
    {
      category: "Cut-to-Length Processing",
      description: "Flat, surface-protected stainless sheets processed with precision leveling control for aerospace and defense sectors.",
      image: "https://images.unsplash.com/photo-1581091226033-d5c48150dbaa?w=600&h=400&fit=crop",
      icon: <FiLayers className="text-blue-600" size={24} />
    },
    {
      category: "Aerospace & Defense",
      description: "Specialized processing under the MoOWR framework. Mission-critical components with strict dimensional verification.",
      image: "https://images.unsplash.com/photo-1517976487492-5750f3195933?w=600&h=400&fit=crop",
      icon: <FiShield className="text-blue-600" size={24} />
    },
    {
      category: "Automotive & EV",
      description: "Precision-driven stainless steel solutions for the EV sector focusing on surface-finish consistency and tight tolerances.",
      image: "https://images.unsplash.com/photo-1593941707882-a5bba14938c7?w=600&h=400&fit=crop",
      icon: <FiTruck className="text-blue-600" size={24} />
    },
    {
      category: "Surface Integrity",
      description: "Advanced surface-protection technologies and scratch-free handling systems for high-end architectural projects.",
      image: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=600&h=400&fit=crop",
      icon: <FiShield className="text-blue-600" size={24} />
    },
    {
      category: "Engineering Consultation",
      description: "Technical support and process excellence. Structured material flow planning to help partners achieve benchmark performance.",
      image: "https://images.unsplash.com/photo-1537462715879-360eeb61a0ad?w=600&h=400&fit=crop",
      icon: <FiSettings className="text-blue-600" size={24} />
    },
  ];

  const openModal = (service) => {
    setSelectedService(service);
    setIsModalOpen(true);
    document.body.style.overflow = "hidden";
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedService(null);
    document.body.style.overflow = "auto";
  };

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900">
      {/* Hero Header */}
      <header className="bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto py-16 px-6 text-center">
          <span className="text-blue-600 font-bold tracking-widest uppercase text-sm">Industrial Excellence</span>
          <h1 className="mt-2 text-4xl md:text-6xl font-extrabold tracking-tight text-slate-900">
            MATRIX METALS <span className="text-blue-600">LLP</span>
          </h1>
          <p className="mt-6 text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Engineering Stainless Steel with Precision, Power & Purpose. 
            Strategically located in <span className="font-semibold text-slate-800">Peenya, Bangalore.</span>
          </p>
        </div>
      </header>

      {/* Responsive Box Grid */}
      <main className="max-w-7xl mx-auto py-12 px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="group bg-white border border-slate-200 rounded-xl overflow-hidden shadow-sm hover:shadow-2xl hover:border-blue-300 transition-all duration-300 flex flex-col"
            >
              {/* Image Container */}
              <div className="relative h-56 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.category}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                   <span className="text-white text-sm font-medium">Explore Capabilities</span>
                </div>
              </div>

              {/* Content Box */}
              <div className="p-8 flex flex-col flex-grow">
                <div className="flex items-center mb-4">
                  <div className="p-2 bg-blue-50 rounded-lg mr-3">
                    {service.icon}
                  </div>
                  <h2 className="text-xl font-bold text-slate-800 tracking-tight">
                    {service.category}
                  </h2>
                </div>
                
                <p className="text-slate-600 leading-relaxed mb-8 flex-grow">
                  {service.description}
                </p>

                <button
                  onClick={() => openModal(service)}
                  className="w-full inline-flex items-center justify-center px-6 py-3 border border-slate-200 rounded-lg text-sm font-bold text-slate-700 hover:bg-slate-900 hover:text-white hover:border-slate-900 transition-all duration-200 group/btn"
                >
                  VIEW DETAILS
                  <FiArrowRight className="ml-2 group-hover/btn:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </main>

      {/* Full-Screen Modal */}
      {isModalOpen && selectedService && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8 bg-slate-900/80 backdrop-blur-md animate-in fade-in duration-300">
          <div className="relative bg-white rounded-2xl shadow-2xl max-w-5xl w-full max-h-[90vh] overflow-hidden flex flex-col md:flex-row animate-in zoom-in-95 duration-300">
            
            {/* Modal Image (Desktop Left) */}
            <div className="hidden md:block w-1/2 bg-slate-200">
              <img 
                src={selectedService.image} 
                className="w-full h-full object-cover" 
                alt="Detailed View" 
              />
            </div>

            {/* Modal Body */}
            <div className="flex-1 p-8 md:p-12 overflow-y-auto relative">
              <button
                onClick={closeModal}
                className="absolute top-6 right-6 p-2 rounded-full hover:bg-slate-100 text-slate-400 hover:text-slate-900 transition-colors"
              >
                <FiX size={24} />
              </button>

              <span className="text-blue-600 font-bold uppercase tracking-widest text-xs">Technical Specification</span>
              <h2 className="text-3xl font-black text-slate-900 mt-2 mb-6">
                {selectedService.category}
              </h2>
              
              <div className="prose prose-slate mb-8">
                <p className="text-slate-600 text-lg leading-relaxed">
                  {selectedService.description}
                </p>
                <p className="mt-4 text-slate-500">
                  Matrix Metals LLP provides high-end processing for {selectedService.category.toLowerCase()}. 
                  Our facility in Peenya is equipped with state-of-the-art machinery ensuring minimal burr and maximum flatness.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-4 mt-8">
                <div className="p-4 bg-slate-50 rounded-xl border border-slate-100">
                  <p className="text-xs text-slate-400 uppercase font-bold">Tolerance</p>
                  <p className="text-slate-800 font-semibold">±0.05mm Precision</p>
                </div>
                <div className="p-4 bg-slate-50 rounded-xl border border-slate-100">
                  <p className="text-xs text-slate-400 uppercase font-bold">Material</p>
                  <p className="text-slate-800 font-semibold">SS 304, 316, 430</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Footer */}
    
    </div>
  );
}