// import React, { useState, useEffect } from "react";
// import { FiArrowRight, FiX } from "react-icons/fi";

// export default function WelcomePage() {
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const [selectedService, setSelectedService] = useState(null);

//   const services = [
//     {
//       category: "Industrial Stainless Steel",
//       description: "At Minox we provide stainless steel plates/coils/sheets/strips etc. in various grades, sizes and finishes to cater industrial applications like breweries and distilleries, automobile, dairy and pharma, enclosures, high end kitchen, metro coaches, electrical and electronic components etc.",
//       buttonText: "READ MORE >>",
//       image: "https://images.unsplash.com/photo-1581091226033-d5c48150dbaa?w=400&h=300&fit=crop",
//     },
//     {
//       category: "Architecture Building Construction & Elevator Applications",
//       description: "One stop shop for solutions in stainless steel sheets in various finishes like No.8 super mirror, bead blast, vibrations, PVD coated and customised etched designs in various colours that create innovative ideas and excellent aesthetics for architectural, signages and elevator applications.",
//       buttonText: "READ MORE >>",
//       image: "https://images.unsplash.com/photo-1518005020951-eccb494ad742?w=400&h=300&fit=crop",
//     },
//     {
//       category: "Industrial Stainless Steel",
//       description: "At Minox we provide stainless steel plates/coils/sheets/strips etc. in various grades, sizes and finishes to cater industrial applications like breweries and distilleries, automobile, dairy and pharma, enclosures, high end kitchen, metro coaches, electrical and electronic components etc.",
//       buttonText: "READ MORE >>",
//       image: "https://images.unsplash.com/photo-1581091226033-d5c48150dbaa?w=400&h=300&fit=crop",
//     },
//     {
//       category: "Architecture Building Construction & Elevator Applications",
//       description: "One stop shop for solutions in stainless steel sheets in various finishes like No.8 super mirror, bead blast, vibrations, PVD coated and customised etched designs in various colours that create innovative ideas and excellent aesthetics for architectural, signages and elevator applications.",
//       buttonText: "READ MORE >>",
//       image: "https://images.unsplash.com/photo-1518005020951-eccb494ad742?w=400&h=300&fit=crop",
//     },
//     {
//       category: "Pipes, Tubes and Long Products",
//       description: "Minox offers stainless steel pipes, tubes (seamless and welded), rods and suitable fittings in various grades and excellent finish which are extensively used in applications like architectural building construction, interiors, pharmaceutical, food and dairy etc.",
//       buttonText: "READ MORE >>",
//       image: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?w=400&h=300&fit=crop",
//     },
//   ];

//   // Dummy related data for each service (could be fetched from an API in real app)
//   const getRelatedItems = (serviceCategory) => {
//     // In a real scenario, this would be based on the selected service
//     const baseItems = [
//       { name: "304 Stainless Sheet", image: "https://images.unsplash.com/photo-1581091226033-d5c48150dbaa?w=200&h=150&fit=crop" },
//       { name: "316L Coil", image: "https://images.unsplash.com/photo-1581091226033-d5c48150dbaa?w=200&h=150&fit=crop" },
//       { name: "Mirror Finish Plate", image: "https://images.unsplash.com/photo-1581091226033-d5c48150dbaa?w=200&h=150&fit=crop" },
//       { name: "PVD Coated Sheet", image: "https://images.unsplash.com/photo-1581091226033-d5c48150dbaa?w=200&h=150&fit=crop" },
//     ];
//     if (serviceCategory.includes("Industrial")) {
//       return baseItems;
//     } else if (serviceCategory.includes("Architecture")) {
//       return [
//         { name: "No.8 Mirror Sheet", image: "https://images.unsplash.com/photo-1518005020951-eccb494ad742?w=200&h=150&fit=crop" },
//         { name: "Bead Blast Finish", image: "https://images.unsplash.com/photo-1518005020951-eccb494ad742?w=200&h=150&fit=crop" },
//         { name: "Etched Designs", image: "https://images.unsplash.com/photo-1518005020951-eccb494ad742?w=200&h=150&fit=crop" },
//         { name: "Elevator Cladding", image: "https://images.unsplash.com/photo-1518005020951-eccb494ad742?w=200&h=150&fit=crop" },
//       ];
//     } else {
//       return [
//         { name: "Seamless Pipe", image: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?w=200&h=150&fit=crop" },
//         { name: "Welded Tube", image: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?w=200&h=150&fit=crop" },
//         { name: "Stainless Rod", image: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?w=200&h=150&fit=crop" },
//         { name: "Pipe Fittings", image: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?w=200&h=150&fit=crop" },
//       ];
//     }
//   };

//   const openModal = (service) => {
//     setSelectedService(service);
//     setIsModalOpen(true);
//     document.body.style.overflow = "hidden"; // prevent background scroll
//   };

//   const closeModal = () => {
//     setIsModalOpen(false);
//     setSelectedService(null);
//     document.body.style.overflow = "auto";
//   };

//   // Close modal on Escape key
//   useEffect(() => {
//     const handleEsc = (e) => {
//       if (e.key === "Escape") closeModal();
//     };
//     window.addEventListener("keydown", handleEsc);
//     return () => window.removeEventListener("keydown", handleEsc);
//   }, []);

//   return (
//     <div className="min-h-screen bg-white">
//       {/* Header Section with fade-in animation */}
//       <div className="text-center py-8 px-4 animate-fade-in">
//         <h1 className="text-5xl font-bold text-gray-800">
//           WELCOME!
//         </h1>
//       </div>

//       {/* Services Grid */}
//       <div className="px-4 md:px-8 lg:px-16 py-4">
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
//           {services.map((service, index) => (
//             <div
//               key={index}
//               className="group bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 animate-fade-up"
//               style={{ animationDelay: `${index * 150}ms` }}
//             >
//               <img
//                 src={service.image}
//                 alt={service.category}
//                 className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-105"
//               />
//               <div className="p-6">
//                 <h2 className="text-xl font-semibold text-gray-800 mb-4 text-center">
//                   {service.category}
//                 </h2>
//                 <p className="text-gray-600 text-sm mb-6">
//                   {service.description}
//                 </p>
//                 {/* Redesigned "Read More" button triggers modal */}
//                 <button
//                   onClick={() => openModal(service)}
//                   className="flex items-center text-sm font-medium text-white bg-gradient-to-r from-blue-600 to-indigo-600 px-4 py-2 rounded-full shadow-md hover:shadow-lg transition-all duration-300 group/btn"
//                 >
//                   <span>{service.buttonText}</span>
//                   <FiArrowRight className="ml-2 transition-transform duration-300 group-hover/btn:translate-x-1" size={16} />
//                 </button>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* Modal Popup */}
//       {isModalOpen && selectedService && (
//         <div
//           className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-50 backdrop-blur-sm animate-fade-in"
//           onClick={closeModal} // close on overlay click
//         >
//           <div
//             className="relative bg-white rounded-xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto animate-scale-in"
//             onClick={(e) => e.stopPropagation()} // prevent closing when clicking inside
//           >
//             {/* Close button */}
//             <button
//               onClick={closeModal}
//               className="absolute top-4 right-4 p-2 rounded-full bg-gray-200 hover:bg-gray-300 transition-colors z-10"
//             >
//               <FiX size={20} />
//             </button>

//             {/* Modal content */}
//             <div className="p-6 md:p-8">
//               <h2 className="text-2xl font-bold text-gray-800 mb-4">{selectedService.category}</h2>
//               <p className="text-gray-600 mb-8">{selectedService.description}</p>

//               <h3 className="text-xl font-semibold text-gray-800 mb-4">Related Products</h3>
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









import React, { useState, useEffect, useRef } from "react";
import { FiArrowRight, FiX, FiChevronLeft, FiChevronRight } from "react-icons/fi";

export default function WelcomePage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const carouselRef = useRef(null);

  // Expanded services array for the slider
  const services = [
    {
      category: "Industrial Stainless Steel",
      description: "At Minox we provide stainless steel plates/coils/sheets/strips etc. in various grades, sizes and finishes to cater industrial applications like breweries and distilleries, automobile, dairy and pharma, enclosures, high end kitchen, metro coaches, electrical and electronic components etc.",
      buttonText: "READ MORE >>",
      image: "https://images.unsplash.com/photo-1581091226033-d5c48150dbaa?w=400&h=300&fit=crop",
    },
    {
      category: "Architecture Building Construction & Elevator Applications",
      description: "One stop shop for solutions in stainless steel sheets in various finishes like No.8 super mirror, bead blast, vibrations, PVD coated and customised etched designs in various colours that create innovative ideas and excellent aesthetics for architectural, signages and elevator applications.",
      buttonText: "READ MORE >>",
      image: "https://images.unsplash.com/photo-1518005020951-eccb494ad742?w=400&h=300&fit=crop",
    },
    {
      category: "Pipes, Tubes and Long Products",
      description: "Minox offers stainless steel pipes, tubes (seamless and welded), rods and suitable fittings in various grades and excellent finish which are extensively used in applications like architectural building construction, interiors, pharmaceutical, food and dairy etc.",
      buttonText: "READ MORE >>",
      image: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?w=400&h=300&fit=crop",
    },
    {
      category: "Specialty Alloys",
      description: "We supply high-performance nickel alloys and duplex stainless steel for demanding environments including chemical processing, oil & gas, and marine applications.",
      buttonText: "READ MORE >>",
      image: "https://images.unsplash.com/photo-1581091226033-d5c48150dbaa?w=400&h=300&fit=crop",
    },
    {
      category: "Precision Strip & Foil",
      description: "Ultra-thin stainless steel strips and foils for electronics, medical devices, and precision engineering, available in various tempers and surface finishes.",
      buttonText: "READ MORE >>",
      image: "https://images.unsplash.com/photo-1581091226033-d5c48150dbaa?w=400&h=300&fit=crop",
    },
    {
      category: "Custom Fabrications",
      description: "Bespoke stainless steel components and assemblies tailored to client specifications, with expert welding and finishing capabilities.",
      buttonText: "READ MORE >>",
      image: "https://images.unsplash.com/photo-1581091226033-d5c48150dbaa?w=400&h=300&fit=crop",
    },
  ];

  // Dummy related data for each service (could be fetched from an API in real app)
  const getRelatedItems = (serviceCategory) => {
    // In a real scenario, this would be based on the selected service
    const baseItems = [
      { name: "304 Stainless Sheet", image: "https://images.unsplash.com/photo-1581091226033-d5c48150dbaa?w=200&h=150&fit=crop" },
      { name: "316L Coil", image: "https://images.unsplash.com/photo-1581091226033-d5c48150dbaa?w=200&h=150&fit=crop" },
      { name: "Mirror Finish Plate", image: "https://images.unsplash.com/photo-1581091226033-d5c48150dbaa?w=200&h=150&fit=crop" },
      { name: "PVD Coated Sheet", image: "https://images.unsplash.com/photo-1581091226033-d5c48150dbaa?w=200&h=150&fit=crop" },
    ];
    if (serviceCategory.includes("Industrial")) {
      return baseItems;
    } else if (serviceCategory.includes("Architecture")) {
      return [
        { name: "No.8 Mirror Sheet", image: "https://images.unsplash.com/photo-1518005020951-eccb494ad742?w=200&h=150&fit=crop" },
        { name: "Bead Blast Finish", image: "https://images.unsplash.com/photo-1518005020951-eccb494ad742?w=200&h=150&fit=crop" },
        { name: "Etched Designs", image: "https://images.unsplash.com/photo-1518005020951-eccb494ad742?w=200&h=150&fit=crop" },
        { name: "Elevator Cladding", image: "https://images.unsplash.com/photo-1518005020951-eccb494ad742?w=200&h=150&fit=crop" },
      ];
    } else if (serviceCategory.includes("Pipes")) {
      return [
        { name: "Seamless Pipe", image: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?w=200&h=150&fit=crop" },
        { name: "Welded Tube", image: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?w=200&h=150&fit=crop" },
        { name: "Stainless Rod", image: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?w=200&h=150&fit=crop" },
        { name: "Pipe Fittings", image: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?w=200&h=150&fit=crop" },
      ];
    } else {
      return baseItems;
    }
  };

  const openModal = (service) => {
    setSelectedService(service);
    setIsModalOpen(true);
    document.body.style.overflow = "hidden"; // prevent background scroll
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedService(null);
    document.body.style.overflow = "auto";
  };

  // Close modal on Escape key
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === "Escape") closeModal();
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, []);

  // Carousel navigation
  const totalSlides = services.length;
  const slidesToShow = 3; // number of cards visible at once on desktop
  const maxIndex = Math.max(0, totalSlides - slidesToShow);

  const goToPrevious = () => {
    setCurrentIndex(prev => Math.max(0, prev - 1));
  };

  const goToNext = () => {
    setCurrentIndex(prev => Math.min(maxIndex, prev + 1));
  };

  const goToSlide = (index) => {
    setCurrentIndex(Math.min(maxIndex, Math.max(0, index)));
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header Section with fade-in animation */}
      <div className="text-center py-8 px-4 animate-fade-in">
        <h1 className="text-5xl font-bold text-gray-800">
          WELCOME!
        </h1>
      </div>

      {/* Services Carousel */}
      <div className="px-4 md:px-8 lg:px-16 py-4">
        <div className="relative max-w-7xl mx-auto">
          {/* Carousel wrapper */}
          <div className="overflow-hidden">
            <div
              ref={carouselRef}
              className="flex transition-transform duration-300 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * (100 / slidesToShow)}%)` }}
            >
              {services.map((service, index) => (
                <div
                  key={index}
                  className="flex-shrink-0 w-full sm:w-1/2 lg:w-1/3 p-2 animate-fade-up"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="group bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 h-full flex flex-col">
                    <img
                      src={service.image}
                      alt={service.category}
                      className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="p-6 flex-grow flex flex-col">
                      <h2 className="text-xl font-semibold text-gray-800 mb-4 text-center">
                        {service.category}
                      </h2>
                      <p className="text-gray-600 text-sm mb-6 flex-grow">
                        {service.description}
                      </p>
                      {/* Redesigned "Read More" button triggers modal */}
                      <button
                        onClick={() => openModal(service)}
                        className="self-start flex items-center text-sm font-medium text-white bg-gradient-to-r from-blue-300 to-indigo-400 px-4 py-2 rounded-full shadow-md hover:shadow-lg transition-all duration-300 group/btn"
                      >
                        <span>{service.buttonText}</span>
                        <FiArrowRight className="ml-2 transition-transform duration-300 group-hover/btn:translate-x-1" size={16} />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Arrows */}
          {currentIndex > 0 && (
            <button
              onClick={goToPrevious}
              className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-4 bg-white rounded-full p-2 shadow-lg hover:bg-gray-100 transition-colors z-10"
              aria-label="Previous"
            >
              <FiChevronLeft size={24} />
            </button>
          )}
          {currentIndex < maxIndex && (
            <button
              onClick={goToNext}
              className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-4 bg-white rounded-full p-2 shadow-lg hover:bg-gray-100 transition-colors z-10"
              aria-label="Next"
            >
              <FiChevronRight size={24} />
            </button>
          )}

          {/* Pagination Dots */}
          <div className="flex justify-center mt-6 space-x-2">
            {Array.from({ length: maxIndex + 1 }).map((_, idx) => (
              <button
                key={idx}
                onClick={() => goToSlide(idx)}
                className={`h-2 w-2 rounded-full transition-all ${
                  idx === currentIndex ? "bg-blue-600 w-4" : "bg-gray-300"
                }`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Modal Popup */}
      {isModalOpen && selectedService && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-50 backdrop-blur-sm animate-fade-in"
          onClick={closeModal} // close on overlay click
        >
          <div
            className="relative bg-white rounded-xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto animate-scale-in"
            onClick={(e) => e.stopPropagation()} // prevent closing when clicking inside
          >
            {/* Close button */}
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 p-2 rounded-full bg-gray-200 hover:bg-gray-300 transition-colors z-10"
            >
              <FiX size={20} />
            </button>

            {/* Modal content */}
            <div className="p-6 md:p-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">{selectedService.category}</h2>
              <p className="text-gray-600 mb-8">{selectedService.description}</p>

              <h3 className="text-xl font-semibold text-gray-800 mb-4">Related Products</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {getRelatedItems(selectedService.category).map((item, idx) => (
                  <div
                    key={idx}
                    className="bg-gray-50 rounded-lg p-3 shadow hover:shadow-md transition-all duration-300 transform hover:-translate-y-1"
                  >
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-32 object-cover rounded-md mb-2"
                    />
                    <p className="text-center text-sm font-medium text-gray-700">{item.name}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Custom animations */}
      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes scaleIn {
          from { opacity: 0; transform: scale(0.95); }
          to { opacity: 1; transform: scale(1); }
        }
        .animate-fade-in {
          animation: fadeIn 0.3s ease-out forwards;
        }
        .animate-fade-up {
          opacity: 0;
          animation: fadeUp 0.6s ease-out forwards;
        }
        .animate-scale-in {
          animation: scaleIn 0.3s ease-out forwards;
        }
      `}</style>
    </div>
  );
}