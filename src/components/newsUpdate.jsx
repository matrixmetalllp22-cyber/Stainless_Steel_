import React, { useState, useEffect, useRef } from "react";
import { FiArrowRight, FiX, FiChevronLeft, FiChevronRight } from "react-icons/fi";

export default function WelcomePage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const carouselRef = useRef(null);

  // Updated content for Matrix Metals LLP
  const services = [
    {
      category: "Precision Slitting",
      description: "High-accuracy strip conversion with burr-controlled edges and uniform coil winding. Our systems ensure micron-level tolerance control for industries where failure is not an option, including fabrication, stamping, and forming.",
      buttonText: "READ MORE >>",
      image: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?w=400&h=300&fit=crop",
    },
    {
      category: "Cut-to-Length Processing",
      description: "Flat, surface-protected stainless sheets processed with precision leveling control. We ensure optimal downstream performance and structural integrity retention for aerospace and defense sectors.",
      buttonText: "READ MORE >>",
      image: "https://images.unsplash.com/photo-1581091226033-d5c48150dbaa?w=400&h=300&fit=crop",
    },
    {
      category: "Aerospace & Defense",
      description: "Specialized processing under the MoOWR framework. We deliver mission-critical components with strict dimensional verification, camber analysis, and full batch traceability documentation.",
      buttonText: "READ MORE >>",
      image: "https://images.unsplash.com/photo-1517976487492-5750f3195933?w=400&h=300&fit=crop",
    },
    {
      category: "Automotive & EV",
      description: "Precision-driven stainless steel solutions for the EV sector. Our high-speed processing lines focus on surface-finish consistency and tight width tolerances for battery and engine components.",
      buttonText: "READ MORE >>",
      image: "https://images.unsplash.com/photo-1593941707882-a5bba14938c7?w=400&h=300&fit=crop",
    },
    {
      category: "Surface Integrity Management",
      description: "Advanced surface-protection technologies and scratch-free handling systems. We maintain the cosmetic and structural quality of stainless steel for high-end architectural and infrastructure projects.",
      buttonText: "READ MORE >>",
      image: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=400&h=300&fit=crop",
    },
    {
      category: "Engineering Consultation",
      description: "Technical support and process excellence. We offer structured material flow planning and consultation to help industrial partners achieve benchmark performance in global markets.",
      buttonText: "READ MORE >>",
      image: "https://images.unsplash.com/photo-1537462715879-360eeb61a0ad?w=400&h=300&fit=crop",
    },
  ];

  const getRelatedItems = (serviceCategory) => {
    // Tailored product names for Matrix Metals
    const baseItems = [
      { name: "Precision Strips", image: "https://images.unsplash.com/photo-1565034946487-077786996e27?w=200&h=150&fit=crop" },
      { name: "SS Slit Coils", image: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?w=200&h=150&fit=crop" },
      { name: "Leveled Sheets", image: "https://images.unsplash.com/photo-1516724562728-afc824a36e84?w=200&h=150&fit=crop" },
      { name: "Protected Plates", image: "https://images.unsplash.com/photo-1581091226033-d5c48150dbaa?w=200&h=150&fit=crop" },
    ];
    return baseItems;
  };

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

  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === "Escape") closeModal();
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, []);

  const totalSlides = services.length;
  const slidesToShow = 3; 
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
      {/* Header Section */}
      <div className="text-center py-8 px-4 animate-fade-in">
        <h1 className="text-5xl font-bold text-gray-800">
          WELCOME TO MATRIX METALS LLP
        </h1>
        <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
          Engineering Stainless Steel with Precision, Power & Purpose. 
          Located in Peenya, Bangalore.
        </p>
      </div>

      {/* Services Carousel */}
      <div className="px-4 md:px-8 lg:px-16 py-4">
        <div className="relative max-w-7xl mx-auto">
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
          onClick={closeModal}
        >
          <div
            className="relative bg-white rounded-xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto animate-scale-in"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 p-2 rounded-full bg-gray-200 hover:bg-gray-300 transition-colors z-10"
            >
              <FiX size={20} />
            </button>

            <div className="p-6 md:p-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">{selectedService.category}</h2>
              <p className="text-gray-600 mb-8">{selectedService.description}</p>

              <h3 className="text-xl font-semibold text-gray-800 mb-4">Core Capabilities</h3>
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



